-- View: public.agg_track_segments

-- DROP VIEW public.agg_track_segments;

CREATE OR REPLACE VIEW public.agg_track_segments
 AS
 WITH gps AS (
         SELECT gpx_points.id,
            st_transform(gpx_points.geom, 25832) AS geom,
            gpx_points.tstamp,
            gpx_points.elevation,
            gpx_points.track_id
           FROM gpx_points
        ), segments AS (
         SELECT gps.id,
            gps.track_id,
            row_number() OVER (ORDER BY gps.tstamp) AS segment_id,
            st_length(st_makeline(gps.geom) OVER (ORDER BY gps.tstamp ROWS BETWEEN 1 PRECEDING AND CURRENT ROW)) AS dist_to_next,
            st_makeline(gps.geom) OVER (ORDER BY gps.tstamp ROWS BETWEEN 1 PRECEDING AND CURRENT ROW) AS geom,
            (gps.elevation - lag(gps.elevation) OVER (ORDER BY gps.tstamp ROWS BETWEEN 1 PRECEDING AND CURRENT ROW)) AS height_lag,
            lag(gps.tstamp) OVER (ORDER BY gps.tstamp ROWS BETWEEN 1 PRECEDING AND CURRENT ROW) AS tstamp_start,
            gps.tstamp AS tstamp_end
           FROM gps
        ), agg AS (
         SELECT segments.track_id,
            count(*) AS segments_count,
            st_union(segments.geom) AS geom,
            st_length(st_union(segments.geom)) AS distance,
            date_part('epoch'::text, (max(segments.tstamp_end) - min(segments.tstamp_start))) AS duration,
            sum(segments.height_lag) AS height_lag,
            min(segments.tstamp_start) AS tstamp_start,
            max(segments.tstamp_end) AS tstamp_end
           FROM segments
          WHERE (segments.segment_id > 1)
          GROUP BY segments.track_id, (floor((date_part('epoch'::text, segments.tstamp_end) / (30)::double precision)) * (30)::double precision)
        )
 SELECT row_number() OVER (ORDER BY agg.tstamp_end) AS segment_id,
    ((((agg.duration / agg.distance) * (1000)::double precision) || ' seconds'::text))::interval AS pace,
    (agg.distance / agg.duration) AS velocity,
    ((agg.distance / agg.duration) * (3.6)::double precision) AS kmh,
    agg.track_id,
    agg.segments_count,
    agg.geom,
    agg.distance,
    agg.duration,
    agg.height_lag,
    agg.tstamp_start,
    agg.tstamp_end,
    st_transform(agg.geom, 4326) AS wgs84
   FROM agg;

ALTER TABLE public.agg_track_segments
    OWNER TO hydenv;
