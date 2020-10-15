(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-exercise-page-exercise-page-module"],{

/***/ "./src/app/pages/exercise-page/exercise-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/exercise-page/exercise-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ExercisePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisePageComponent", function() { return ExercisePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_exercise_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/exercise.service */ "./src/app/core/exercise.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_exercise_exercise_body_exercise_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/exercise/exercise-body/exercise-body.component */ "./src/app/core/exercise/exercise-body/exercise-body.component.ts");
/* harmony import */ var _core_exercise_exercise_compare_exercise_compare_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/exercise/exercise-compare/exercise-compare.component */ "./src/app/core/exercise/exercise-compare/exercise-compare.component.ts");







function ExercisePageComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-exercise-body", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-exercise-compare", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.exercise.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("body", ctx_r0.exercise.body);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exercise", ctx_r0.exercise);
} }
function ExercisePageComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "The requested resource could not be loaded. No idea why.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ExercisePageComponent {
    constructor(exerciseService, route) {
        this.exerciseService = exerciseService;
        this.route = route;
    }
    ngOnInit() {
        // subscribe to changes in the URL parameter to load
        this.route.paramMap.subscribe({
            next: (params) => {
                this.fetchExerciseDoc(params.get('id'));
            }
        });
        //    this.exerciseService.getExerciseById('Ydw6xp14NiHexPZz3nmD').then(data => console.log(data));
    }
    fetchExerciseDoc(id) {
        this.exerciseService.getExerciseById(id).then(data => {
            this.exercise = data;
        }).catch(error => {
            console.log(error);
            this.exercise = null;
        });
    }
}
ExercisePageComponent.ɵfac = function ExercisePageComponent_Factory(t) { return new (t || ExercisePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_exercise_service__WEBPACK_IMPORTED_MODULE_1__["ExerciseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ExercisePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExercisePageComponent, selectors: [["app-exercise-page"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notFound", ""], [3, "body"], [3, "exercise"]], template: function ExercisePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExercisePageComponent_ng_container_0_Template, 5, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExercisePageComponent_ng_template_1_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exercise)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _core_exercise_exercise_body_exercise_body_component__WEBPACK_IMPORTED_MODULE_4__["ExerciseBodyComponent"], _core_exercise_exercise_compare_exercise_compare_component__WEBPACK_IMPORTED_MODULE_5__["ExerciseCompareComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4ZXJjaXNlLXBhZ2UvZXhlcmNpc2UtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExercisePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-exercise-page',
                templateUrl: './exercise-page.component.html',
                styleUrls: ['./exercise-page.component.scss']
            }]
    }], function () { return [{ type: _core_exercise_service__WEBPACK_IMPORTED_MODULE_1__["ExerciseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/exercise-page/exercise-page.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/exercise-page/exercise-page.module.ts ***!
  \*************************************************************/
/*! exports provided: ExercisePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisePageModule", function() { return ExercisePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _exercise_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercise-page.component */ "./src/app/pages/exercise-page/exercise-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_exercise_exercise_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/exercise/exercise.module */ "./src/app/core/exercise/exercise.module.ts");







class ExercisePageModule {
}
ExercisePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExercisePageModule });
ExercisePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExercisePageModule_Factory(t) { return new (t || ExercisePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                { path: ':id', component: _exercise_page_component__WEBPACK_IMPORTED_MODULE_2__["ExercisePageComponent"] }
            ]),
            _core_exercise_exercise_module__WEBPACK_IMPORTED_MODULE_4__["ExerciseModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExercisePageModule, { declarations: [_exercise_page_component__WEBPACK_IMPORTED_MODULE_2__["ExercisePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _core_exercise_exercise_module__WEBPACK_IMPORTED_MODULE_4__["ExerciseModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExercisePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_exercise_page_component__WEBPACK_IMPORTED_MODULE_2__["ExercisePageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        { path: ':id', component: _exercise_page_component__WEBPACK_IMPORTED_MODULE_2__["ExercisePageComponent"] }
                    ]),
                    _core_exercise_exercise_module__WEBPACK_IMPORTED_MODULE_4__["ExerciseModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-exercise-page-exercise-page-module.js.map