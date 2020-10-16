(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-page-settings-page-module"],{

/***/ "./src/app/pages/settings-page/settings-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/settings-page/settings-page.component.ts ***!
  \****************************************************************/
/*! exports provided: SettingsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageComponent", function() { return SettingsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/settings.service */ "./src/app/core/settings.service.ts");



class SettingsPageComponent {
    constructor(settings) {
        this.settings = settings;
        this.backendStatus = 'offline';
    }
    ngOnInit() {
        this.backendUrlSubscription = this.settings.backend.subscribe({
            next: url => this.backendUrl = url
        });
        this.backendStatusSubscription = this.settings.isConnected.subscribe({
            next: connected => this.backendStatus = connected ? 'online' : 'offline'
        });
    }
    ngOnDestroy() {
        this.backendUrlSubscription.unsubscribe();
        this.backendStatusSubscription.unsubscribe();
    }
}
SettingsPageComponent.ɵfac = function SettingsPageComponent_Factory(t) { return new (t || SettingsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"])); };
SettingsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsPageComponent, selectors: [["app-settings-page"]], decls: 8, vars: 2, template: function SettingsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Backend URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Backend Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.backendUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.backendStatus);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzLXBhZ2Uvc2V0dGluZ3MtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings-page',
                templateUrl: './settings-page.component.html',
                styleUrls: ['./settings-page.component.scss']
            }]
    }], function () { return [{ type: src_app_core_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/settings-page/settings-page.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/settings-page/settings-page.module.ts ***!
  \*************************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _settings_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-page.component */ "./src/app/pages/settings-page/settings-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class SettingsPageModule {
}
SettingsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SettingsPageModule });
SettingsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SettingsPageModule_Factory(t) { return new (t || SettingsPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                { path: '', component: _settings_page_component__WEBPACK_IMPORTED_MODULE_2__["SettingsPageComponent"], pathMatch: 'full' }
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingsPageModule, { declarations: [_settings_page_component__WEBPACK_IMPORTED_MODULE_2__["SettingsPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_settings_page_component__WEBPACK_IMPORTED_MODULE_2__["SettingsPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        { path: '', component: _settings_page_component__WEBPACK_IMPORTED_MODULE_2__["SettingsPageComponent"], pathMatch: 'full' }
                    ]),
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-settings-page-settings-page-module.js.map