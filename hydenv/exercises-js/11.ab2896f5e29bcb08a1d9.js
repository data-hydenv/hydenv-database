(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{wJ9R:function(e,t,s){"use strict";s.r(t),s.d(t,"ExercisePageModule",(function(){return X}));var c=s("ofXK"),n=s("fXoL"),i=s("ws30"),o=s("tyNb"),r=s("aLtf"),l=s("8MG2");function b(e,t){if(1&e&&(n.Rb(0,"clr-timeline-step",6),n.Rb(1,"clr-timeline-step-header"),n.Cc(2,"Not correct"),n.Qb(),n.Rb(3,"clr-timeline-step-description"),n.Cc(4),n.bc(5,"date"),n.Qb(),n.Qb()),2&e){const e=t.$implicit;n.zb(4),n.Dc(n.dc(5,1,e,"dd.MM.yy HH:mm"))}}function a(e,t){if(1&e&&(n.Pb(0),n.Ac(1,b,6,4,"clr-timeline-step",5),n.Ob()),2&e){const e=n.ac(2);n.zb(1),n.gc("ngForOf",e.progress.tries)}}function u(e,t){1&e&&(n.Rb(0,"clr-timeline-step",7),n.Rb(1,"clr-timeline-step-header"),n.Cc(2,"Correct!"),n.Qb(),n.Rb(3,"clr-timeline-step-description"),n.Cc(4,"Well done!"),n.Qb(),n.Qb())}function h(e,t){if(1&e&&(n.Pb(0),n.Rb(1,"clr-timeline",2),n.Ac(2,a,2,1,"ng-container",3),n.Ac(3,u,5,0,"clr-timeline-step",4),n.Qb(),n.Ob()),2&e){const e=n.ac();n.zb(1),n.gc("clrLayout",e.layout),n.zb(1),n.gc("ngIf",e.progress.tries),n.zb(1),n.gc("ngIf",e.progress.correct)}}function g(e,t){if(1&e&&(n.Rb(0,"clr-timeline",2),n.Rb(1,"clr-timeline-step",8),n.Rb(2,"clr-timeline-step-header"),n.Cc(3,"not started"),n.Qb(),n.Rb(4,"clr-timeline-step-description"),n.Cc(5,"No progress data found in the storage of this device"),n.Qb(),n.Qb(),n.Qb()),2&e){const e=n.ac();n.gc("clrLayout",e.layout)}}let p=(()=>{class e{constructor(e){this.progressService=e,this.layout="horizontal"}set exerciseId(e){this.currExerciseId=e,this.extractProgressInfo(this.progressService.progress.getValue())}ngOnInit(){this.progressSubscription=this.progressService.progress.subscribe({next:e=>this.extractProgressInfo(e)})}extractProgressInfo(e){this.progress=e.find(e=>e.exerciseId===this.currExerciseId)}ngOnDestroy(){this.progressSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(r.a))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-exercise-progress-detail"]],inputs:{exerciseId:"exerciseId",layout:"layout"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noProgress",""],[3,"clrLayout"],[4,"ngIf"],["clrState","success",4,"ngIf"],["clrState","error",4,"ngFor","ngForOf"],["clrState","error"],["clrState","success"],["clrState","not-started"]],template:function(e,t){if(1&e&&(n.Ac(0,h,4,3,"ng-container",0),n.Ac(1,g,6,1,"ng-template",null,1,n.Bc)),2&e){const e=n.mc(2);n.gc("ngIf",t.progress)("ngIfElse",e)}},directives:[c.o,l.R,c.n,l.S,l.U,l.T],pipes:[c.e],styles:[""]}),e})();const d=function(e){return["/","e",e]};function f(e,t){if(1&e&&(n.Pb(0),n.Rb(1,"button",3),n.Cc(2," Back "),n.Rb(3,"span",4),n.Cc(4),n.Qb(),n.Qb(),n.Ob()),2&e){const e=n.ac(2);n.zb(1),n.gc("routerLink",n.kc(3,d,e.previousExercise.id))("ngClass",e.btnClasses),n.zb(3),n.Ec(" Previous: ",e.previousExercise.name," ")}}function x(e,t){if(1&e&&(n.Rb(0,"button",5),n.Cc(1," Back "),n.Rb(2,"span",4),n.Cc(3,"This was the first exercise in the active track."),n.Qb(),n.Qb()),2&e){const e=n.ac(2);n.gc("disabled",!0)("ngClass",e.btnClasses)}}function v(e,t){if(1&e&&(n.Pb(0),n.Ac(1,f,5,5,"ng-container",0),n.Ac(2,x,4,2,"ng-template",null,2,n.Bc),n.Ob()),2&e){const e=n.mc(3),t=n.ac();n.zb(1),n.gc("ngIf",t.previousExercise)("ngIfElse",e)}}function I(e,t){if(1&e&&(n.Rb(0,"button",5),n.Cc(1," Back "),n.Rb(2,"span",4),n.Cc(3,"There is no active Track."),n.Qb(),n.Qb()),2&e){const e=n.ac();n.gc("disabled",!0)("ngClass",e.btnClasses)}}let y=(()=>{class e{constructor(e){this.exerciseService=e,this.btnClasses=["btn-primary"],this.isSynced=!1,this.hasActiveTrack=!1}set exerciseId(e){this.currentId=e,this.isSynced&&this.getPrevious()}ngOnInit(){this.syncSubscription=this.exerciseService.syncFinished.subscribe({next:e=>{this.isSynced=e,this.previousExercise||this.getPrevious()}})}getPrevious(){if(this.hasActiveTrack=null!==this.exerciseService.activeTrack.getValue(),this.hasActiveTrack){const e=this.exerciseService.getPreviousExercise(this.currentId,"all");this.previousExercise=e&&-1!==e?e:null}}ngOnDestroy(){this.syncSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(i.a))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-previous-exercise-button"]],inputs:{exerciseId:"exerciseId",btnClasses:"btnClasses"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noTrack",""],["noExercise",""],[1,"btn","tooltip","tooltip-bottom-left",3,"routerLink","ngClass"],[1,"tooltip-content"],[1,"btn","tooltip","tooltip-bottom-right",3,"disabled","ngClass"]],template:function(e,t){if(1&e&&(n.Ac(0,v,4,2,"ng-container",0),n.Ac(1,I,4,2,"ng-template",null,1,n.Bc)),2&e){const e=n.mc(2);n.gc("ngIf",t.hasActiveTrack)("ngIfElse",e)}},directives:[c.o,o.f,c.m],styles:[""]}),e})();const C=function(e){return["/","e",e]};function m(e,t){if(1&e&&(n.Pb(0),n.Rb(1,"button",3),n.Cc(2," Next "),n.Rb(3,"span",4),n.Cc(4),n.Qb(),n.Qb(),n.Ob()),2&e){const e=n.ac(2);n.zb(1),n.gc("routerLink",n.kc(3,C,e.nextExericse.id))("ngClass",e.btnClasses),n.zb(3),n.Ec(" Next up: ",e.nextExericse.name," ")}}function R(e,t){if(1&e&&(n.Rb(0,"button",5),n.Cc(1," Next "),n.Rb(2,"span",4),n.Cc(3),n.Qb(),n.Qb()),2&e){const e=n.ac(2);n.gc("disabled",!0)("ngClass",e.btnClasses),n.zb(3),n.Fc(" This was the last ",e.onlyUnsolved?"unsolved ":""," exercise ","all"===e.session?"on this track":"in this session",".")}}function Q(e,t){if(1&e&&(n.Pb(0),n.Ac(1,m,5,5,"ng-container",0),n.Ac(2,R,4,4,"ng-template",null,2,n.Bc),n.Ob()),2&e){const e=n.mc(3),t=n.ac();n.zb(1),n.gc("ngIf",t.nextExericse)("ngIfElse",e)}}function S(e,t){if(1&e&&(n.Rb(0,"button",5),n.Cc(1," Next "),n.Rb(2,"span",4),n.Cc(3,"There is no active Track."),n.Qb(),n.Qb()),2&e){const e=n.ac();n.gc("disabled",!0)("ngClass",e.btnClasses)}}let E=(()=>{class e{constructor(e){this.exerciseService=e,this.session="all",this.onlyUnsolved=!1,this.btnClasses=["btn-primary"],this.isSynced=!1,this.hasActiveTrack=!1}set exerciseId(e){this.currId=e,this.isSynced&&this.getNext()}ngOnInit(){this.syncSubscription=this.exerciseService.syncFinished.subscribe({next:e=>{this.isSynced=e,this.nextExericse||this.getNext()}})}getNext(){if(this.hasActiveTrack=null!==this.exerciseService.activeTrack.getValue(),this.hasActiveTrack){let e;this.onlyUnsolved?e=this.exerciseService.getNextUnsolvedExercise(this.currId,this.session):(e=this.exerciseService.getNextExercise(this.currId,this.session),console.log(e)),this.nextExericse=e&&-1!==e?e:null}}ngOnDestroy(){this.syncSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(i.a))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-next-exercise-button"]],inputs:{exerciseId:"exerciseId",session:"session",onlyUnsolved:"onlyUnsolved",btnClasses:"btnClasses"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noTrack",""],["noExercise",""],[1,"btn","tooltip","tooltip-bottom-left",3,"routerLink","ngClass"],[1,"tooltip-content"],[1,"btn","tooltip","tooltip-bottom-left",3,"disabled","ngClass"]],template:function(e,t){if(1&e&&(n.Ac(0,Q,4,2,"ng-container",0),n.Ac(1,S,4,2,"ng-template",null,1,n.Bc)),2&e){const e=n.mc(2);n.gc("ngIf",t.hasActiveTrack)("ngIfElse",e)}},directives:[c.o,o.f,c.m],styles:[""]}),e})();var M=s("tk/3");function w(e,t){if(1&e&&(n.Pb(0),n.Mb(1,"div",1),n.Ob()),2&e){const e=n.ac(2);n.zb(1),n.gc("innerHTML",e.contentText,n.rc)}}function z(e,t){if(1&e&&(n.Pb(0),n.Rb(1,"p"),n.Cc(2),n.Qb(),n.Ob()),2&e){const e=n.ac(2);n.zb(2),n.Dc(e.contentText)}}function k(e,t){if(1&e&&(n.Pb(0),n.Ac(1,w,2,1,"ng-container",0),n.Ac(2,z,3,1,"ng-container",0),n.Ob()),2&e){const e=n.ac();n.zb(1),n.gc("ngIf","html"===e.content.type),n.zb(1),n.gc("ngIf","text"===e.content.type)}}let T=(()=>{class e{constructor(e){this.http=e}set body(e){this.content=e,this.setContentText()}ngOnInit(){this.setContentText()}setContentText(){this.content&&(this.content.content?this.contentText=this.content.content:this.loadFromUrl())}loadFromUrl(){this.http.get(this.content.url).subscribe({next:e=>console.log(e)})}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(M.a))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-exercise-body"]],inputs:{content:"content",body:"body"},decls:1,vars:1,consts:[[4,"ngIf"],[3,"innerHTML"]],template:function(e,t){1&e&&n.Ac(0,k,3,2,"ng-container",0),2&e&&n.gc("ngIf",t.content)},directives:[c.o],styles:[""]}),e})();var A=s("LvDl"),P=s("+3VT"),O=s("3Pt+"),L=s("SS/w");function F(e,t){1&e&&(n.Pb(0),n.Rb(1,"div",2),n.Rb(2,"div",3),n.Mb(3,"clr-icon",4),n.Qb(),n.Rb(4,"div",5),n.Rb(5,"p"),n.Cc(6,"Your solution is correct."),n.Qb(),n.Qb(),n.Qb(),n.Ob())}function N(e,t){if(1&e){const e=n.Sb();n.Rb(0,"clr-toggle-container"),n.Rb(1,"clr-toggle-wrapper"),n.Rb(2,"input",9),n.Yb("ngModelChange",(function(t){return n.qc(e),n.ac(2).showHint=t})),n.Qb(),n.Rb(3,"label"),n.Cc(4,"show hint"),n.Qb(),n.Qb(),n.Qb()}if(2&e){const e=n.ac(2);n.zb(2),n.gc("ngModel",e.showHint)}}function q(e,t){if(1&e){const e=n.Sb();n.Pb(0),n.Rb(1,"div",2),n.Rb(2,"div",3),n.Mb(3,"clr-icon",6),n.Qb(),n.Rb(4,"div",5),n.Rb(5,"div",2),n.Rb(6,"div",7),n.Rb(7,"p"),n.Cc(8,"Your solution is not yet quite correct"),n.Qb(),n.Qb(),n.Rb(9,"div",8),n.Rb(10,"clr-toggle-container"),n.Rb(11,"clr-toggle-wrapper"),n.Rb(12,"input",9),n.Yb("ngModelChange",(function(t){return n.qc(e),n.ac().showSolution=t})),n.Qb(),n.Rb(13,"label"),n.Cc(14,"show solution"),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(15,"div",8),n.Ac(16,N,5,1,"clr-toggle-container",1),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Ob()}if(2&e){const e=n.ac();n.zb(12),n.gc("ngModel",e.showSolution),n.zb(4),n.gc("ngIf",e.exercise.hint)}}function H(e,t){if(1&e&&(n.Pb(0),n.Rb(1,"h3"),n.Cc(2,"Hint"),n.Qb(),n.Mb(3,"p",10),n.Ob()),2&e){const e=n.ac();n.zb(3),n.gc("innerHTML",e.exercise.hint,n.rc)}}function B(e,t){if(1&e&&(n.Pb(0),n.Rb(1,"h3"),n.Cc(2,"Solution query"),n.Qb(),n.Rb(3,"pre"),n.Mb(4,"code",10),n.Qb(),n.Ob()),2&e){const e=n.ac();n.zb(4),n.gc("innerHTML",e.exercise.solution.code?e.exercise.solution.code:e.exercise.solution.content,n.rc)}}function D(e,t){if(1&e&&(n.Pb(0),n.Rb(1,"h3"),n.Cc(2,"Your Solution"),n.Qb(),n.Mb(3,"app-sql-result",11),n.Ob()),2&e){const e=n.ac();n.zb(3),n.gc("result",e.userResult)}}function U(e,t){if(1&e&&(n.Pb(0),n.Rb(1,"h3"),n.Cc(2,"Sample Solution"),n.Qb(),n.Mb(3,"app-sql-result",11),n.Ob()),2&e){const e=n.ac();n.zb(3),n.gc("result",e.solution)}}let Y=(()=>{class e{constructor(e,t){this.exerciseService=e,this.progress=t,this.checked=new n.n,this.prefill="",this.explain=!1,this.safeMode=!0,this.solutionCorrect=!1,this.showSolution=!1,this.showHint=!1}set useExercise(e){this.exercise=e,this.setPrefill()}ngOnInit(){this.setPrefill()}setPrefill(){this.prefill=this.exercise&&this.exercise.solution.prefill?this.exercise.solution.prefill:"-- Put your SQL code here.\n-- If you use semicolons, multiple commands or other Queries than SELECT, you have to disable save Mode"}onUserInput(e){if(this.userResult=e,this.solution)this.compare();else{const e=this.explain?"text":null;console.log(`Explain: ${e} Safe Mode: ${this.safeMode}`),this.exerciseService.executeSql(this.exercise.solution.content,e,!this.safeMode).then(e=>this.solution=e).then(()=>this.compare()).catch(e=>console.log(e))}}compare(){Object(A.isEqual)(this.userResult.data,this.solution.data)?(this.solutionCorrect=!0,this.showSolution=!0):this.solutionCorrect=!1,this.progress.update(this.exercise.id,this.solutionCorrect).then(()=>{this.checked.emit(this.solutionCorrect)})}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(i.a),n.Lb(r.a))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-exercise-compare"]],inputs:{useExercise:"useExercise"},outputs:{checked:"checked"},decls:7,vars:8,consts:[[3,"sql","safeMode","result","addExplainChange","safeModeChange"],[4,"ngIf"],[1,"clr-row"],[1,"clr-col-4"],["shape","check","size","72"],[1,"clr-col-8"],["shape","times","size","72"],[1,"clr-col-12"],[1,"clr-col-6"],["type","checkbox","clrToggle","",3,"ngModel","ngModelChange"],[3,"innerHTML"],[3,"result"]],template:function(e,t){1&e&&(n.Rb(0,"app-sql-input",0),n.Yb("result",(function(e){return t.onUserInput(e)}))("addExplainChange",(function(e){return t.explain=e}))("safeModeChange",(function(e){return t.safeMode=e})),n.Qb(),n.Ac(1,F,7,0,"ng-container",1),n.Ac(2,q,17,2,"ng-container",1),n.Ac(3,H,4,1,"ng-container",1),n.Ac(4,B,5,1,"ng-container",1),n.Ac(5,D,4,1,"ng-container",1),n.Ac(6,U,4,1,"ng-container",1)),2&e&&(n.gc("sql",t.prefill)("safeMode",!t.exercise.disableSafeMode),n.zb(1),n.gc("ngIf",t.solution&&t.solutionCorrect),n.zb(1),n.gc("ngIf",t.solution&&!t.solutionCorrect),n.zb(1),n.gc("ngIf",t.showHint),n.zb(1),n.gc("ngIf",t.showSolution),n.zb(1),n.gc("ngIf",t.userResult),n.zb(1),n.gc("ngIf",t.solution&&t.solutionCorrect))},directives:[P.a,c.o,l.w,l.f,l.g,O.a,l.e,O.i,O.k,l.B,L.a],styles:[""]}),e})();const j=function(){return["btn-sm","btn-primary"]};function J(e,t){if(1&e&&(n.Pb(0),n.Rb(1,"div",2),n.Rb(2,"div",3),n.Mb(3,"app-exercise-progress-detail",4),n.Qb(),n.Rb(4,"div",5),n.Rb(5,"div",6),n.Mb(6,"app-previous-exercise-button",7),n.Mb(7,"app-next-exercise-button",7),n.Qb(),n.Qb(),n.Qb(),n.Rb(8,"h1"),n.Cc(9),n.Qb(),n.Mb(10,"app-exercise-body",8),n.Mb(11,"app-exercise-compare",9),n.Ob()),2&e){const e=n.ac();n.zb(3),n.gc("exerciseId",e.exerciseId),n.zb(3),n.gc("exerciseId",e.exerciseId)("btnClasses",n.jc(8,j)),n.zb(1),n.gc("exerciseId",e.exerciseId)("btnClasses",n.jc(9,j)),n.zb(2),n.Dc(e.exercise.name),n.zb(1),n.gc("body",e.exercise.body),n.zb(1),n.gc("useExercise",e.exercise)}}function V(e,t){1&e&&(n.Rb(0,"p"),n.Rb(1,"i"),n.Cc(2,"The requested resource could not be loaded. No idea why."),n.Qb(),n.Qb())}let $=(()=>{class e{constructor(e,t){this.exerciseService=e,this.route=t,this.isSynced=!1}ngOnInit(){this.syncSubscription=this.exerciseService.syncFinished.subscribe({next:e=>{this.isSynced=e,this.isSynced&&this.exerciseId&&this.fetchExerciseDoc(this.exerciseId)}}),this.route.paramMap.subscribe({next:e=>{this.exerciseId=e.get("id"),this.isSynced&&this.fetchExerciseDoc(this.exerciseId)}})}fetchExerciseDoc(e){this.exerciseService.getExerciseById(e).then(e=>{this.exercise=e})}ngOnDestroy(){this.syncSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(n.Lb(i.a),n.Lb(o.a))},e.\u0275cmp=n.Fb({type:e,selectors:[["app-exercise-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["notFound",""],[1,"clr-row"],[1,"clr-col-10",2,"overflow-x","auto"],[3,"exerciseId"],[1,"clr-col-2",2,"display","flex","flex-direction","column","justify-content","center"],[2,"display","flex","flex-direction","row","justify-content","center"],[3,"exerciseId","btnClasses"],[3,"body"],[3,"useExercise"]],template:function(e,t){if(1&e&&(n.Ac(0,J,12,10,"ng-container",0),n.Ac(1,V,3,0,"ng-template",null,1,n.Bc)),2&e){const e=n.mc(2);n.gc("ngIf",t.exercise)("ngIfElse",e)}},directives:[c.o,p,y,E,T,Y],styles:[""]}),e})();var K=s("sWoP"),W=s("Yv6K");let X=(()=>{class e{}return e.\u0275mod=n.Jb({type:e}),e.\u0275inj=n.Ib({factory:function(t){return new(t||e)},imports:[[c.c,o.i.forChild([{path:":id",component:$}]),K.a,W.a]]}),e})()}}]);