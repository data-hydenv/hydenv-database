(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+3VT":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var c=n("fXoL"),i=n("8MG2"),l=n("ws30"),o=n("3Pt+"),r=n("KjtJ"),a=n("ofXK");function s(t,e){if(1&t&&(c.Pb(0),c.Rb(1,"clr-alert",9),c.Rb(2,"clr-alert-item"),c.Mb(3,"span",10),c.Rb(4,"div",11),c.Rb(5,"a",12),c.Rb(6,"button",13),c.Cc(7,"ISSUE"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Ob()),2&t){const t=c.ac();c.zb(1),c.gc("clrAlertType","danger")("clrAlertAppLevel",!0),c.zb(2),c.gc("innerHTML",t.errorMessage,c.rc)}}const b=function(t){return{language:"sql",value:t}};let u=(()=>{class t{constructor(t){this.exerciseService=t,this.result=new c.n,this.sqlChange=new c.n,this.addExplain=!1,this.addExplainChange=new c.n,this.enableSafeModeTrigger=!1,this.safeMode=!0,this.safeModeChange=new c.n,this.btnState=i.E.DEFAULT}handleKeypress(t){("F5"===t.code||"Enter"===t.code&&t.ctrlKey)&&(t.preventDefault(),this.onExecute())}ngOnInit(){this.defaultSql=this.sql}onExecute(){this.errorMessage=null,this.btnState=i.E.LOADING,this.exerciseService.executeSql(this.sql,this.addExplain?"text":null,!this.safeMode).then(t=>{this.result.emit(t),this.btnState=i.E.SUCCESS}).catch(t=>{this.btnState=i.E.ERROR,0===t.status&&(this.errorMessage="The hydenv backend is offline or unreachable. Used URL: "+t.url)})}onChange(t){this.sql=t}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(l.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-sql-input"]],hostBindings:function(t,e){1&t&&c.Yb("keydown",(function(t){return e.handleKeypress(t)}),!1,c.pc)},inputs:{sql:"sql",addExplain:"addExplain",enableSafeModeTrigger:"enableSafeModeTrigger",safeMode:"safeMode"},outputs:{result:"result",sqlChange:"sqlChange",addExplainChange:"addExplainChange",safeModeChange:"safeModeChange"},decls:21,vars:9,consts:[[1,"clr-row"],[1,"clr-col-6"],["type","checkbox","clrToggle","",3,"ngModel","ngModelChange"],[1,"tooltip","tooltip-md","tooltip-top-right"],["type","checkbox","clrToggle","",3,"ngModel","disabled","ngModelChange"],[1,"tooltip-content"],["theme","vs-dark",3,"codeModel","valueChanged"],[4,"ngIf"],[1,"btn","btn-outline-success","btn-block",3,"clrLoading","click"],[3,"clrAlertType","clrAlertAppLevel"],[1,"alert-text",3,"innerHTML"],[1,"alert-actions"],["href","https://github.com/data-hydenv/hydenv-database/issues/new?labels=bug,exercise-js&assignees=mmaelicke","target","_blank"],[1,"btn","alert-action","btn-sm"]],template:function(t,e){1&t&&(c.Rb(0,"div",0),c.Rb(1,"div",1),c.Rb(2,"clr-toggle-container"),c.Rb(3,"clr-toggle-wrapper"),c.Rb(4,"input",2),c.Yb("ngModelChange",(function(t){return e.addExplain=t})),c.Qb(),c.Rb(5,"label"),c.Cc(6,"Explain results"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(7,"div",1),c.Rb(8,"clr-toggle-container"),c.Rb(9,"clr-toggle-wrapper",3),c.Rb(10,"input",4),c.Yb("ngModelChange",(function(t){return e.safeMode=t})),c.Qb(),c.Rb(11,"label"),c.Cc(12,"Safe mode: "),c.Rb(13,"code"),c.Cc(14),c.Qb(),c.Qb(),c.Rb(15,"span",5),c.Cc(16,"In safe mode, only single SELECT queries are allowed."),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Rb(17,"ngs-code-editor",6),c.Yb("valueChanged",(function(t){return e.onChange(t)})),c.Qb(),c.Ac(18,s,8,3,"ng-container",7),c.Rb(19,"button",8),c.Yb("click",(function(){return e.onExecute()})),c.Cc(20,"Execute"),c.Qb()),2&t&&(c.zb(4),c.gc("ngModel",e.addExplain),c.zb(6),c.gc("ngModel",e.safeMode)("disabled",!e.enableSafeModeTrigger),c.zb(4),c.Dc(e.safeMode?"on":"off"),c.zb(3),c.gc("codeModel",c.kc(7,b,e.defaultSql)),c.zb(1),c.gc("ngIf",e.errorMessage),c.zb(1),c.gc("clrLoading",e.btnState))},directives:[i.f,i.g,o.a,i.e,o.i,o.k,i.B,r.a,a.o,i.D,i.C,i.b,i.c,i.d],styles:["div.clr-row[_ngcontent-%COMP%]{margin-top:.6rem}"]}),t})()},Mkpm:function(t,e){t.exports=i,t.exports.parse=i,t.exports.stringify=function t(e){function n(t){return t.join(" ")}function c(t){return t.map(n).join(", ")}function i(t){return t.map(c).map(l).join(", ")}function l(t){return"("+t+")"}switch("Feature"===e.type&&(e=e.geometry),e.type){case"Point":return"POINT ("+n(e.coordinates)+")";case"LineString":return"LINESTRING ("+c(e.coordinates)+")";case"Polygon":return"POLYGON ("+i(e.coordinates)+")";case"MultiPoint":return"MULTIPOINT ("+c(e.coordinates)+")";case"MultiPolygon":return"MULTIPOLYGON ("+e.coordinates.map(i).map(l).join(", ")+")";case"MultiLineString":return"MULTILINESTRING ("+i(e.coordinates)+")";case"GeometryCollection":return"GEOMETRYCOLLECTION ("+e.geometries.map(t).join(", ")+")";default:throw new Error("stringify requires a valid GeoJSON Feature or geometry object as input")}};var n=/[-+]?([0-9]*\.[0-9]+|[0-9]+)([eE][-+]?[0-9]+)?/,c=new RegExp("^"+n.source+"(\\s"+n.source+"){1,}");function i(t){var e,n=t.split(";"),i=n.pop(),l=(n.shift()||"").split("=").pop(),o=0;function r(t){var e=i.substring(o).match(t);return e?(o+=e[0].length,e[0]):null}function a(){r(/^\s*/)}function s(){a();for(var t,e=0,n=[],i=[n],l=n;t=r(/^(\()/)||r(/^(\))/)||r(/^(,)/)||r(c);){if("("===t)i.push(l),i[i.length-1].push(l=[]),e++;else if(")"===t){if(0===l.length)return null;if(!(l=i.pop()))return null;if(0==--e)break}else if(","===t)i[i.length-1].push(l=[]);else{if(t.split(/\s/g).some(isNaN))return null;Array.prototype.push.apply(l,t.split(/\s/g).map(parseFloat))}a()}return 0!==e?null:n}function b(){for(var t,e,n=[];e=r(c)||r(/^(,)/);)","===e?(n.push(t),t=[]):e.split(/\s/g).some(isNaN)||(t||(t=[]),Array.prototype.push.apply(t,e.split(/\s/g).map(parseFloat))),a();return t?(n.push(t),n.length?n:null):null}return(e=function t(){return function(){if(!r(/^(point(\sz)?)/i))return null;if(a(),!r(/^(\()/))return null;var t=b();return t?(a(),r(/^(\))/)?{type:"Point",coordinates:t[0]}:null):null}()||function(){if(!r(/^(linestring(\sz)?)/i))return null;if(a(),!r(/^(\()/))return null;var t=b();return t&&r(/^(\))/)?{type:"LineString",coordinates:t}:null}()||function(){if(!r(/^(polygon(\sz)?)/i))return null;a();var t=s();return t?{type:"Polygon",coordinates:t}:null}()||function(){if(!r(/^(multipoint)/i))return null;a();var t=i.substring(i.indexOf("(")+1,i.length-1).replace(/\(/g,"").replace(/\)/g,"");i="MULTIPOINT ("+t+")";var e=s();return e?(a(),{type:"MultiPoint",coordinates:e}):null}()||function(){if(!r(/^(multilinestring)/i))return null;a();var t=s();return t?(a(),{type:"MultiLineString",coordinates:t}):null}()||function(){if(!r(/^(multipolygon)/i))return null;a();var t=s();return t?{type:"MultiPolygon",coordinates:t}:null}()||function(){var e,n=[];if(!r(/^(geometrycollection)/i))return null;if(a(),!r(/^(\()/))return null;for(;e=t();)n.push(e),a(),r(/^(,)/),a();return r(/^(\))/)?{type:"GeometryCollection",geometries:n}:null}()}())&&l.match(/\d+/)&&(e.crs={type:"name",properties:{name:"urn:ogc:def:crs:EPSG::"+l}}),e}},"SS/w":function(t,e,n){"use strict";n.d(e,"a",(function(){return $}));var c=n("fXoL"),i=n("8MG2"),l=n("ofXK"),o=n("LvDl"),r=n("Mkpm"),a=n("3Pt+"),s=n("u3+B"),b=n("R9Cn");function u(t,e){1&t&&c.Mb(0,"clr-spinner")}const p=function(){return{position:"relative",width:"100%",height:"450px"}};function d(t,e){if(1&t&&(c.Pb(0),c.Mb(1,"plotly-plot",21),c.Ob()),2&t){const t=c.ac(2);c.zb(1),c.wc(c.jc(5,p)),c.gc("data",t.axes)("layout",t.layout)("useResizeHandler",!0)}}function g(t,e){1&t&&(c.Rb(0,"div",22),c.Rb(1,"i"),c.Cc(2,"First select a plot type and specify the axes"),c.Qb(),c.Qb())}function f(t,e){if(1&t&&(c.Rb(0,"option",23),c.Cc(1),c.Qb()),2&t){const t=e.$implicit;c.gc("value",t),c.zb(1),c.Dc(t)}}function h(t,e){1&t&&(c.Rb(0,"label"),c.Cc(1,"x-axis attribute"),c.Qb())}function m(t,e){1&t&&(c.Rb(0,"label"),c.Cc(1,"Geometry attribute"),c.Qb())}const y=function(t){return[t]};function x(t,e){if(1&t&&(c.Rb(0,"option",23),c.Cc(1),c.Qb()),2&t){const t=e.$implicit;c.gc("value",c.kc(2,y,t)),c.zb(1),c.Dc(t)}}function R(t,e){if(1&t){const t=c.Sb();c.Rb(0,"clr-select-container"),c.Ac(1,h,2,0,"label",11),c.Ac(2,m,2,0,"label",11),c.Rb(3,"select",24),c.Yb("ngModelChange",(function(e){return c.qc(t),c.ac(2).selectedXAttribute=e}))("change",(function(){return c.qc(t),c.ac(2).onXAxisChanged()})),c.Ac(4,x,2,4,"option",10),c.Qb(),c.Qb()}if(2&t){const t=c.ac(2);c.zb(1),c.gc("ngIf","map"!==t.selectedPlotType),c.zb(1),c.gc("ngIf","map"===t.selectedPlotType),c.zb(1),c.gc("ngModel",t.selectedXAttribute),c.zb(1),c.gc("ngForOf",t.xAxisAttributeOptions)}}function A(t,e){1&t&&(c.Rb(0,"label"),c.Cc(1,"y-axis attributes"),c.Qb())}function C(t,e){1&t&&(c.Rb(0,"label"),c.Cc(1,"property"),c.Qb())}function Q(t,e){if(1&t&&(c.Rb(0,"option",23),c.Cc(1),c.Qb()),2&t){const t=e.$implicit;c.gc("value",c.kc(2,y,t)),c.zb(1),c.Dc(t)}}function M(t,e){if(1&t){const t=c.Sb();c.Rb(0,"clr-select-container"),c.Ac(1,A,2,0,"label",11),c.Ac(2,C,2,0,"label",11),c.Rb(3,"select",25),c.Yb("ngModelChange",(function(e){return c.qc(t),c.ac(2).selectedYAttribute=e})),c.Ac(4,Q,2,4,"option",10),c.Qb(),c.Qb()}if(2&t){const t=c.ac(2);c.zb(1),c.gc("ngIf","map"!==t.selectedPlotType),c.zb(1),c.gc("ngIf","map"===t.selectedPlotType),c.zb(1),c.gc("ngModel",t.selectedYAttribute),c.zb(1),c.gc("ngForOf",t.yAxisAttributeOptions)}}function T(t,e){if(1&t){const t=c.Sb();c.Rb(0,"button",17),c.Yb("click",(function(){c.qc(t);const n=e.$implicit,i=c.ac(2).$implicit;return c.ac(3).onChangeSizeFromData(i,n)})),c.Cc(1),c.Qb()}if(2&t){const t=e.$implicit;c.zb(1),c.Ec(" ",t," ")}}function O(t,e){if(1&t&&(c.Rb(0,"clr-dropdown"),c.Rb(1,"button",14),c.Rb(2,"clr-icon",32),c.Cc(3,"SIZE"),c.Qb(),c.Qb(),c.Rb(4,"clr-dropdown-menu",16),c.Ac(5,T,2,1,"button",33),c.Qb(),c.Qb()),2&t){const t=c.ac(4);c.zb(5),c.gc("ngForOf",t.xAxisAttributeOptions)}}const z=function(){return["scatter","map"]};function v(t,e){if(1&t){const t=c.Sb();c.Rb(0,"li",28),c.Rb(1,"div",29),c.Rb(2,"span"),c.Cc(3),c.Qb(),c.Rb(4,"div"),c.Ac(5,O,6,1,"clr-dropdown",11),c.Rb(6,"clr-icon",30),c.Yb("colorPickerChange",(function(n){return c.qc(t),e.$implicit.color=n}))("colorPickerChange",(function(){c.qc(t);const n=e.index;return c.ac(3).onColorChange(n)})),c.Qb(),c.Rb(7,"clr-icon",31),c.Yb("click",(function(){c.qc(t);const n=e.index;return c.ac(3).onRemoveAxis(n)})),c.Qb(),c.Qb(),c.Qb(),c.Qb()}if(2&t){const t=e.$implicit,n=c.ac(3);c.zb(2),c.xc("color",t.color),c.zb(1),c.Dc(t.name),c.zb(2),c.gc("ngIf",c.jc(7,z).includes(n.selectedPlotType)),c.zb(1),c.xc("color",t.color),c.gc("colorPicker",t.color)}}function w(t,e){if(1&t&&(c.Rb(0,"div",6),c.Rb(1,"div",7),c.Cc(2,"Datasets"),c.Qb(),c.Rb(3,"ul",26),c.Ac(4,v,8,8,"li",27),c.Qb(),c.Qb()),2&t){const t=c.ac(2);c.zb(4),c.gc("ngForOf",t.axesLabel)}}function k(t,e){if(1&t){const t=c.Sb();c.Rb(0,"div",2),c.Rb(1,"div",3),c.Ac(2,d,2,6,"ng-container",0),c.Ac(3,g,3,0,"ng-template",null,4,c.Bc),c.Qb(),c.Rb(5,"div",5),c.Rb(6,"div",6),c.Rb(7,"div",7),c.Cc(8,"Add Data"),c.Qb(),c.Rb(9,"div",8),c.Rb(10,"clr-select-container"),c.Rb(11,"label"),c.Cc(12,"Plot type"),c.Qb(),c.Rb(13,"select",9),c.Yb("ngModelChange",(function(e){return c.qc(t),c.ac().selectedPlotType=e}))("change",(function(){return c.qc(t),c.ac().onPlotTypeChanged()})),c.Ac(14,f,2,2,"option",10),c.Qb(),c.Qb(),c.Ac(15,R,5,4,"clr-select-container",11),c.Ac(16,M,5,4,"clr-select-container",11),c.Qb(),c.Rb(17,"div",12),c.Rb(18,"button",13),c.Yb("click",(function(){return c.qc(t),c.ac().onAddYAxis()})),c.Cc(19," Add "),c.Qb(),c.Rb(20,"clr-dropdown"),c.Rb(21,"button",14),c.Mb(22,"clr-icon",15),c.Cc(23," Options "),c.Qb(),c.Rb(24,"clr-dropdown-menu",16),c.Rb(25,"button",17),c.Yb("click",(function(){c.qc(t);const e=c.ac();return e.layout.showlegend=!e.layout.showlegend})),c.Cc(26),c.Qb(),c.Rb(27,"clr-dropdown"),c.Rb(28,"button",18),c.Cc(29,"Map Style"),c.Qb(),c.Rb(30,"clr-dropdown-menu",19),c.Rb(31,"button",17),c.Yb("click",(function(){return c.qc(t),c.ac().onChangeMapStyle("carto-darkmatter")})),c.Cc(32,"dark"),c.Qb(),c.Rb(33,"button",17),c.Yb("click",(function(){return c.qc(t),c.ac().onChangeMapStyle("carto-positron")})),c.Cc(34,"light"),c.Qb(),c.Rb(35,"button",17),c.Yb("click",(function(){return c.qc(t),c.ac().onChangeMapStyle("open-street-map")})),c.Cc(36,"OSM"),c.Qb(),c.Rb(37,"button",17),c.Yb("click",(function(){return c.qc(t),c.ac().onChangeMapStyle("stamen-terrain")})),c.Cc(38,"Terrain"),c.Qb(),c.Qb(),c.Qb(),c.Rb(39,"clr-dropdown"),c.Rb(40,"button",18),c.Cc(41,"Bar Type"),c.Qb(),c.Rb(42,"clr-dropdown-menu",19),c.Rb(43,"button",17),c.Yb("click",(function(){return c.qc(t),c.ac().layout.barmode="group"})),c.Cc(44,"single"),c.Qb(),c.Rb(45,"button",17),c.Yb("click",(function(){return c.qc(t),c.ac().layout.barmode="stack"})),c.Cc(46,"stacked"),c.Qb(),c.Rb(47,"button",17),c.Yb("click",(function(){return c.qc(t),c.ac().layout.barmode="relative"})),c.Cc(48,"relative"),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Ac(49,w,5,1,"div",20),c.Qb(),c.Qb()}if(2&t){const t=c.mc(4),e=c.ac();c.zb(2),c.gc("ngIf",e.axes.length>0)("ngIfElse",t),c.zb(11),c.gc("ngModel",e.selectedPlotType),c.zb(1),c.gc("ngForOf",e.plotTypes),c.zb(1),c.gc("ngIf",e.selectedPlotType),c.zb(1),c.gc("ngIf",e.selectedPlotType&&e.selectedXAttribute),c.zb(2),c.gc("disabled","map"!==e.selectedPlotType&&!e.selectedYAttribute),c.zb(8),c.Ec(" ",e.layout.showlegend?"hide":"show"," legend "),c.zb(2),c.gc("disabled","map"!==e.selectedPlotType),c.zb(12),c.gc("disabled","bar"!==e.selectedPlotType),c.zb(9),c.gc("ngIf",e.axes.length>0)}}function P(t){return t&&"[object Date]"===Object.prototype.toString.call(t)&&!isNaN(t)}const I={line:"scatter",scatter:"scatter",bar:"bar",histogram:"bar"},L={line:"lines+markers",scatter:"markers"};let S=(()=>{class t{constructor(){this.attributeNames=[],this.allAttributes=[],this.axesLabel=[],this.axes=[],this.layout={autosize:!0,plot_bgcolor:"#1A2A32",paper_bgcolor:"#1A2A32",barmode:"stack",showlegend:!1,font:{size:18,color:"#fff"},mapbox:{style:"carto-darkmatter",pitch:25}},this.plotTypes=[],this.xAxisAttributeOptions=[],this.yAxisAttributeOptions=[],this.loading=!0}set data(t){this.rawData=t,this.extractAttributes()}ngOnInit(){}onPlotTypeChanged(){this.axes=[],"line"!==this.selectedPlotType&&"bar"!==this.selectedPlotType||(this.xAxisAttributeOptions=this.allAttributes.filter(t=>["numeric","datetime","text"].includes(t.type)).map(t=>t.name),this.yAxisAttributeOptions=this.allAttributes.filter(t=>"numeric"===t.type).map(t=>t.name)),"scatter"===this.selectedPlotType&&(this.xAxisAttributeOptions=this.allAttributes.filter(t=>"numeric"===t.type).map(t=>t.name),this.yAxisAttributeOptions=this.allAttributes.filter(t=>"numeric"===t.type).map(t=>t.name)),"map"===this.selectedPlotType?(this.xAxisAttributeOptions=this.allAttributes.filter(t=>["lonLat","linestring","polygon"].includes(t.type)).map(t=>t.name),this.yAxisAttributeOptions=this.allAttributes.filter(t=>"numeric"===t.type).map(t=>t.name),this.layout.margin={t:0,b:0,l:0,r:0}):this.layout.margin=null,this.selectedXAttribute=null,this.selectedYAttribute=null}onColorChange(t){const e=this.axesLabel[t].color;this.axesLabel[t].idx.forEach(t=>{this.axes[t].marker.color=e,this.axes[t].marker.fillcolor&&(this.axes[t].marker.fillcolor=e)})}onChangeSizeFromData(t,e){const n=this.allAttributes.find(t=>t.name===e),c=n?[...n.data]:null;this.axesLabel[t].idx.forEach(t=>{this.axes[t].marker.size=c})}convertMapLayer(t,e){if("lonLat"===t.type){const n={name:e?e.name:t.name,lon:[...t.data.map(t=>t.coordinates[0])],lat:[...t.data.map(t=>t.coordinates[1])],type:"scattermapbox",mode:"lonLat"===t.type?"markers":"lines"};return e&&(n.text=e.data.map(t=>String(t)),Object(o.isNumber)(e.data[0])&&(n.z=[...e.data])),[n]}if("linestring"===t.type){const n=[];return t.data.forEach((c,i)=>{const l={type:"scattermapbox",name:e?e.name:t.name,lon:[...c.coordinates.map(t=>t[0])],lat:[...c.coordinates.map(t=>t[1])],marker:{size:12,color:"cyan"},mode:"lines",z:e&&Object(o.isNumber)(e.data[i])?e.data[i]:null,text:e?e.data[i]:null};n.push(l)}),n}return[{type:"choroplethmapbox",z:e?[...e.data]:[...t.data.map(t=>1)],locations:[...t.data.map((t,e)=>e)],geojson:Object(o.cloneDeep)({type:"FeatureCollection",features:[...t.data.map((t,e)=>({type:"Feature",id:e,geometry:Object.assign({},t)}))]})}]}onXAxisChanged(){const t=this.allAttributes.find(t=>t.name===this.selectedXAttribute);if(t&&"map"!==this.selectedPlotType){const e=this.axes.map(e=>Object.assign(Object.assign({},e),{x:[...t.data]}));this.axes=Object(o.cloneDeep)(e)}}onAddYAxis(){const t=this.allAttributes.find(t=>t.name===this.selectedYAttribute),e=this.allAttributes.find(t=>t.name===this.selectedXAttribute);if("map"===this.selectedPlotType){const n=this.convertMapLayer(e,t),c=this.axes.length-1,i=n.map((t,e)=>c+(e+1));this.axes=[...this.axes,...n],this.axesLabel.push({name:t?t.name:e.name,color:"cyan",idx:[...i]}),console.log(this.axes)}else if(t&&e){const n={x:[...e.data],y:[...t.data],type:I[this.selectedPlotType],mode:L[this.selectedPlotType],name:t.name,marker:{color:"cyan"}};this.axes=[...this.axes,n],this.axesLabel.push({name:t.name,color:"cyan",idx:[this.axes.length-1]})}}onRemoveAxis(t){const e=this.axesLabel[t],n=this.axes.filter((t,n)=>!e.idx.includes(n));this.axes=Object(o.cloneDeep)(n),this.axesLabel.splice(t,1)}getAllowedPlotTypes(){this.plotTypes=[];const t=Object(o.sum)(this.allAttributes.map(t=>"numeric"===t.type?1:0)),e=Object(o.sum)(this.allAttributes.map(t=>"datetime"===t.type?1:0)),n=Object(o.sum)(this.allAttributes.map(t=>"text"===t.type?1:0)),c=Object(o.sum)(this.allAttributes.map(t=>["lonLat","linestring","polygon"].includes(t.type)?1:0));(t>=2||e>=1&&t>=1||n>=1&&t>=1)&&(this.plotTypes.push("line"),this.plotTypes.push("bar")),t>=2&&this.plotTypes.push("scatter"),c>=1&&this.plotTypes.push("map"),this.loading=!1}extractAttributes(){this.loading=!0,this.attributeNames=[],this.allAttributes=[];const t=this.rawData[0];Object.keys(t).forEach(e=>{if(!this.attributeNames.includes(e)){const n=this.inferAttributeType(t,e);if(n){this.attributeNames.push(e);const t={name:e,type:n,data:[]};this.allAttributes.push(Object(o.cloneDeep)(t))}}}),this.allAttributes.forEach(t=>{if("datetime"===t.type)t.data=[...this.rawData.map(e=>new Date(e[t.name]))];else if(["lonLat","linestring","polygon"].includes(t.type)){const e=[...this.rawData.map(e=>r.parse(e[t.name]))];console.log(e),t.data=e}else t.data=[...this.rawData.map(e=>e[t.name])]}),this.getAllowedPlotTypes()}inferAttributeType(t,e){const n=t[e];return"number"==typeof n?"numeric":"string"==typeof n?n.includes("POINT")?"lonLat":n.includes("LINESTRING")?"linestring":n.includes("POLYGON")?"polygon":P(new Date(n))?"datetime":"text":"object"==typeof n&&P(n)?"datetime":null}onChangeMapStyle(t){this.layout=Object.assign(Object.assign({},this.layout),{mapbox:Object.assign(Object.assign({},this.layout.mapbox),{style:t})})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["app-result-plot"]],inputs:{data:"data"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["plot",""],[1,"clr-row"],[1,"clr-col-md-9","clr-col-sm-12"],["noPlot",""],[1,"clr-col-md-3","clr-col-sm-12"],[1,"card"],[1,"card-header"],[1,"card-block","select-block"],["clrSelect","","name","plotType",3,"ngModel","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"card-footer"],[1,"btn","btn-primary","btn-sm",3,"disabled","click"],["clrDropdownTrigger","",1,"btn","btn-link"],["shape","caret","direction","right"],["clrPosition","left"],["clrDropdownItem","",3,"click"],["clrDropdownTrigger","",3,"disabled"],["clrPosition","bottom-left"],["class","card",4,"ngIf"],[3,"data","layout","useResizeHandler"],[2,"width","100%","height","450%","display","flex","flex-direction","column","justify-content","center","text-align","center"],[3,"value"],["clrSelect","","name","xAxis",3,"ngModel","ngModelChange","change"],["clrSelect","","name","yAxis",3,"ngModel","ngModelChange"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[2,"display","flex","flex-direction","row","justify-content","space-between"],["shape","color-palette",1,"is-solid",3,"colorPicker","colorPickerChange"],["shape","times",2,"cursor","pointer",3,"click"],["shape","caret","dir","up"],["clrDropdownItem","",3,"click",4,"ngFor","ngForOf"]],template:function(t,e){if(1&t&&(c.Ac(0,u,1,0,"clr-spinner",0),c.Ac(1,k,50,11,"ng-template",null,1,c.Bc)),2&t){const t=c.mc(2);c.gc("ngIf",e.loading)("ngIfElse",t)}},directives:[l.o,i.M,i.L,i.B,a.p,i.K,a.i,a.k,l.n,i.r,i.u,i.w,i.t,i.s,s.a,a.m,a.r,b.a],styles:[""]}),t})();function E(t,e){if(1&t&&(c.Rb(0,"clr-dg-column",6),c.Cc(1),c.Qb()),2&t){const t=e.$implicit;c.gc("clrDgField",t),c.zb(1),c.Dc(t)}}function D(t,e){if(1&t&&(c.Rb(0,"clr-dg-cell"),c.Cc(1),c.Qb()),2&t){const t=e.$implicit,n=c.ac().$implicit;c.zb(1),c.Dc(n[t])}}function j(t,e){if(1&t&&(c.Rb(0,"clr-dg-row"),c.Ac(1,D,2,1,"clr-dg-cell",7),c.Qb()),2&t){const t=c.ac(2);c.zb(1),c.gc("ngForOf",t.resultColumns)}}function q(t,e){if(1&t&&(c.Rb(0,"clr-dg-pagination",8,9),c.Cc(2),c.Qb()),2&t){const t=c.ac(2);c.gc("clrDgTotalItems",t.res.data.length),c.zb(2),c.Fc(" Total: ",t.res.data.length," row",t.res.data.length>0?"s":""," ")}}function F(t,e){if(1&t&&(c.Rb(0,"clr-tab"),c.Rb(1,"button",1),c.Cc(2,"Data"),c.Qb(),c.Rb(3,"clr-tab-content"),c.Rb(4,"clr-datagrid",2),c.Ac(5,E,2,2,"clr-dg-column",3),c.Ac(6,j,2,1,"clr-dg-row",4),c.Rb(7,"clr-dg-footer"),c.Ac(8,q,3,3,"clr-dg-pagination",5),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&t){const t=c.ac();c.zb(4),c.gc("clrDgLoading",t.loading),c.zb(1),c.gc("ngForOf",t.resultColumns),c.zb(1),c.gc("clrDgItemsOf",t.res.data),c.zb(2),c.gc("ngIf",!t.loading)}}function Y(t,e){if(1&t&&(c.Rb(0,"clr-tab"),c.Rb(1,"button",1),c.Cc(2,"Analyse"),c.Qb(),c.Rb(3,"clr-tab-content"),c.Rb(4,"code"),c.Mb(5,"pre",10),c.Qb(),c.Qb(),c.Qb()),2&t){const t=c.ac();c.zb(5),c.gc("innerHTML",t.res.explain,c.rc)}}function N(t,e){if(1&t&&(c.Rb(0,"clr-tab-content"),c.Mb(1,"app-result-plot",12),c.Qb()),2&t){const t=c.ac(2);c.zb(1),c.gc("data",t.res.data)}}function G(t,e){1&t&&(c.Rb(0,"clr-tab"),c.Rb(1,"button",1),c.Cc(2,"Plot"),c.Qb(),c.Ac(3,N,2,1,"clr-tab-content",11),c.Qb())}function X(t,e){if(1&t&&(c.Rb(0,"clr-tab"),c.Rb(1,"button",1),c.Cc(2,"Performance"),c.Qb(),c.Rb(3,"clr-tab-content"),c.Rb(4,"clr-datagrid"),c.Rb(5,"clr-dg-column"),c.Cc(6,"Measure"),c.Qb(),c.Rb(7,"clr-dg-column"),c.Cc(8,"Value"),c.Qb(),c.Rb(9,"clr-dg-row"),c.Rb(10,"clr-dg-cell"),c.Cc(11,"Execution Time"),c.Qb(),c.Rb(12,"clr-dg-cell"),c.Cc(13),c.Qb(),c.Qb(),c.Rb(14,"clr-dg-row"),c.Rb(15,"clr-dg-cell"),c.Cc(16,"Backend Time"),c.Qb(),c.Rb(17,"clr-dg-cell"),c.Cc(18),c.Qb(),c.Qb(),c.Qb(),c.Qb(),c.Qb()),2&t){const t=c.ac();c.zb(13),c.Dc(t.res.perf.executionTime),c.zb(5),c.Dc(t.res.perf.backendTime)}}let $=(()=>{class t{constructor(){this.loading=!0,this.resultColumns=[]}set result(t){this.loading=!0,this.res=t,this.getResultColumns()}ngOnInit(){}getResultColumns(){this.resultColumns=[],this.res.data.forEach(t=>{Object.keys(t).forEach(t=>{this.resultColumns.includes(t)||this.resultColumns.push(t)}),this.loading=!1})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["app-sql-result"]],inputs:{result:"result",explain:"explain"},decls:5,vars:4,consts:[[4,"ngIf"],["clrTabLink",""],[3,"clrDgLoading"],[3,"clrDgField",4,"ngFor","ngForOf"],[4,"clrDgItems","clrDgItemsOf"],[3,"clrDgTotalItems",4,"ngIf"],[3,"clrDgField"],[4,"ngFor","ngForOf"],[3,"clrDgTotalItems"],["pagination",""],[3,"innerHTML"],[4,"clrIfActive"],[3,"data"]],template:function(t,e){1&t&&(c.Rb(0,"clr-tabs"),c.Ac(1,F,9,4,"clr-tab",0),c.Ac(2,Y,6,1,"clr-tab",0),c.Ac(3,G,4,0,"clr-tab",0),c.Ac(4,X,19,2,"clr-tab",0),c.Qb()),2&t&&(c.zb(1),c.gc("ngIf",e.res),c.zb(1),c.gc("ngIf",e.res&&e.res.explain),c.zb(1),c.gc("ngIf",e.res&&e.res.data&&e.res.data.length>1),c.zb(1),c.gc("ngIf",e.res))},directives:[i.Q,i.fb,l.o,i.N,i.P,i.Y,i.O,i.h,i.bb,i.db,i.X,i.eb,l.n,i.o,i.n,i.j,i.ab,i.q,i.cb,i.i,i.Z,i.p,i.x,S],styles:["pre[_ngcontent-%COMP%]{padding:.6rem}clr-datagrid[_ngcontent-%COMP%]{height:auto!important}"]}),t})()}}]);