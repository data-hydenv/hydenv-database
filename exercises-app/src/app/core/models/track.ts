export interface ExerciseReference {
  id: string;
  mandatory: boolean;
  order: number;
}

export interface TrackOptions {
  login?: boolean;
  paidBackend?: boolean;
  storeResults: boolean;
}

export interface Track {
  name: string;
  description: string;
  admins?: string[];
  exercises: ExerciseReference[];
  options?: TrackOptions;
}
