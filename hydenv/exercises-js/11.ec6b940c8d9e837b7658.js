(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{gMlY:function(t,e,n){"use strict";n.r(e),n.d(e,"ConsolePageModule",(function(){return Q}));var o=n("ofXK"),c=n("tyNb"),i=n("3Pt+"),r=n("8MG2"),s=n("fXoL"),l=n("ws30"),b=n("+3VT"),a=n("SS/w"),u=n("MffP"),f=n("52BL");function p(t,e){if(1&t&&(s.Pb(0),s.Mb(1,"app-sql-result",15),s.Ob()),2&t){const t=s.bc();s.zb(1),s.hc("result",t.result)}}function g(t,e){1&t&&(s.Rb(0,"p",16),s.Rb(1,"i"),s.Dc(2,"run a SQL command first"),s.Qb(),s.Qb())}function h(t,e){1&t&&(s.Pb(0),s.Mb(1,"app-history-list"),s.Ob())}const d=function(){return[3,5,10]};function m(t,e){1&t&&(s.Pb(0),s.Mb(1,"app-history-table",17),s.Ob()),2&t&&(s.zb(1),s.hc("pageSize",3)("pageSizeOptions",s.kc(2,d)))}let w=(()=>{class t{constructor(t){this.exercise=t,this.historyUseList=!0}ngOnInit(){}onExecute(t){this.result=t}}return t.\u0275fac=function(e){return new(e||t)(s.Lb(l.a))},t.\u0275cmp=s.Fb({type:t,selectors:[["app-console-page"]],decls:24,vars:7,consts:[[1,"clr-row","wrap-row"],[1,"clr-col-lg-6","clr-offset-lg-0","clr-col-md-10","clr-offset-md-1",2,"overflow-y","auto"],["sql","SELECT count(*) AS amount FROM metadata",3,"enableSafeModeTrigger","result"],[1,"clr-col-lg-6","clr-offset-lg-0","clr-col-md-10","clr-offset-md-1"],[1,"clr-row"],[1,"clr-col-12",2,"min-height","50vh"],[4,"ngIf","ngIfElse"],["noResult",""],[1,"clr-col-12",2,"height","30vh"],[2,"display","flex","flex-direction","row","justify-content","space-between","margin-bottom","1.2rem"],[1,"btn-group","btn-icon","btn-default"],[1,"btn",3,"disabled","click"],["shape","view-list"],["shape","table"],[4,"ngIf"],[3,"result"],[2,"text-align","center","display","flex","flex-direction","column","justify-content","center","height","100%"],[3,"pageSize","pageSizeOptions"]],template:function(t,e){if(1&t&&(s.Rb(0,"div",0),s.Rb(1,"div",1),s.Rb(2,"h3"),s.Dc(3,"SQL Console"),s.Qb(),s.Rb(4,"app-sql-input",2),s.Zb("result",(function(t){return e.onExecute(t)})),s.Qb(),s.Qb(),s.Rb(5,"div",3),s.Rb(6,"div",4),s.Rb(7,"div",5),s.Rb(8,"h3"),s.Dc(9,"Results"),s.Qb(),s.Bc(10,p,2,1,"ng-container",6),s.Bc(11,g,3,0,"ng-template",null,7,s.Cc),s.Qb(),s.Rb(13,"div",8),s.Rb(14,"h3",9),s.Rb(15,"span"),s.Dc(16,"Query History"),s.Qb(),s.Rb(17,"div",10),s.Rb(18,"button",11),s.Zb("click",(function(){return e.historyUseList=!0})),s.Mb(19,"clr-icon",12),s.Qb(),s.Rb(20,"button",11),s.Zb("click",(function(){return e.historyUseList=!1})),s.Mb(21,"clr-icon",13),s.Qb(),s.Qb(),s.Qb(),s.Bc(22,h,2,0,"ng-container",14),s.Bc(23,m,2,3,"ng-container",14),s.Qb(),s.Qb(),s.Qb(),s.Qb()),2&t){const t=s.nc(12);s.zb(4),s.hc("enableSafeModeTrigger",!0),s.zb(6),s.hc("ngIf",e.result)("ngIfElse",t),s.zb(8),s.hc("disabled",e.historyUseList),s.zb(2),s.hc("disabled",!e.historyUseList),s.zb(2),s.hc("ngIf",e.historyUseList),s.zb(1),s.hc("ngIf",!e.historyUseList)}},directives:[b.a,o.o,r.x,a.a,u.a,f.a],styles:["h1[_ngcontent-%COMP%]{margin-bottom:1.2rem}hr[_ngcontent-%COMP%]{margin-top:.6rem;margin-bottom:.6rem}.wrap-row[_ngcontent-%COMP%]{height:calc(100vh - 60px);width:100%;padding:.6rem;margin:0}.wrap-row-page[_ngcontent-%COMP%]{width:100%;max-width:992px;margin:auto}"]}),t})();var y=n("sWoP"),R=n("aPRB");let Q=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[o.c,c.g.forChild([{path:"",component:w,pathMatch:"full"}]),i.g,r.a,y.a,R.a]]}),t})()}}]);