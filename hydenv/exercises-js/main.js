(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"exercises-app\",\"version\":\"0.1.0\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"~10.0.2\",\"@angular/common\":\"~10.0.2\",\"@angular/compiler\":\"~10.0.2\",\"@angular/core\":\"~10.0.2\",\"@angular/fire\":\"^6.0.2\",\"@angular/forms\":\"~10.0.2\",\"@angular/platform-browser\":\"~10.0.2\",\"@angular/platform-browser-dynamic\":\"~10.0.2\",\"@angular/router\":\"~10.0.2\",\"@clr/angular\":\"4.0.1\",\"@clr/icons\":\"4.0.1\",\"@clr/ui\":\"4.0.1\",\"@ngstack/code-editor\":\"^2.1.0\",\"@webcomponents/webcomponentsjs\":\"^2.0.0\",\"firebase\":\"^7.13.1\",\"firebase-admin\":\"^9.2.0\",\"highlight.js\":\"^10.2.0\",\"localforage\":\"^1.9.0\",\"lodash\":\"^4.17.20\",\"rxjs\":\"~6.5.5\",\"tslib\":\"^2.0.0\",\"zone.js\":\"~0.10.3\"},\"devDependencies\":{\"@angular-devkit/architect\":\">= 0.900 < 0.1100\",\"@angular-devkit/build-angular\":\"~0.1000.1\",\"@angular/cli\":\"~10.0.1\",\"@angular/compiler-cli\":\"~10.0.2\",\"@types/jasmine\":\"~3.5.0\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/lodash\":\"^4.14.161\",\"@types/node\":\"^12.12.68\",\"codelyzer\":\"^6.0.0-next.1\",\"firebase-tools\":\"^8.0.0\",\"fuzzy\":\"^0.1.3\",\"inquirer\":\"^6.2.2\",\"inquirer-autocomplete-prompt\":\"^1.0.1\",\"jasmine-core\":\"~3.5.0\",\"jasmine-spec-reporter\":\"~5.0.0\",\"karma\":\"~5.0.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.2\",\"karma-jasmine\":\"~3.3.0\",\"karma-jasmine-html-reporter\":\"^1.5.0\",\"open\":\"^7.0.3\",\"protractor\":\"~7.0.0\",\"ts-node\":\"^8.3.0\",\"tslint\":\"~6.1.0\",\"typescript\":\"~3.9.5\"}}");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/page-layout/page-layout.component */ "./src/app/layouts/page-layout/page-layout.component.ts");
/* harmony import */ var _layouts_full_width_layout_full_width_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/full-width-layout/full-width-layout.component */ "./src/app/layouts/full-width-layout/full-width-layout.component.ts");






const routes = [
    {
        path: 'home',
        component: _layouts_full_width_layout_full_width_layout_component__WEBPACK_IMPORTED_MODULE_3__["FullWidthLayoutComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | pages-home-page-home-page-module */ "pages-home-page-home-page-module").then(__webpack_require__.bind(null, /*! ./pages/home-page/home-page.module */ "./src/app/pages/home-page/home-page.module.ts")).then(m => m.HomePageModule)
    },
    {
        path: 'console',
        component: _layouts_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"],
        loadChildren: () => Promise.all(/*! import() | pages-console-page-console-page-module */[__webpack_require__.e("default~pages-console-page-console-page-module~pages-exercise-page-exercise-page-module"), __webpack_require__.e("pages-console-page-console-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/console-page/console-page.module */ "./src/app/pages/console-page/console-page.module.ts")).then(m => m.ConsolePageModule)
    },
    {
        path: 'settings',
        component: _layouts_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | pages-settings-page-settings-page-module */ "pages-settings-page-settings-page-module").then(__webpack_require__.bind(null, /*! ./pages/settings-page/settings-page.module */ "./src/app/pages/settings-page/settings-page.module.ts")).then(m => m.SettingsPageModule)
    },
    {
        path: 'e',
        component: _layouts_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"],
        loadChildren: () => Promise.all(/*! import() | pages-exercise-page-exercise-page-module */[__webpack_require__.e("default~pages-console-page-console-page-module~pages-exercise-page-exercise-page-module"), __webpack_require__.e("pages-exercise-page-exercise-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/exercise-page/exercise-page.module */ "./src/app/pages/exercise-page/exercise-page.module.ts")).then(m => m.ExercisePageModule)
    },
    {
        path: 'tracks',
        component: _layouts_full_width_layout_full_width_layout_component__WEBPACK_IMPORTED_MODULE_3__["FullWidthLayoutComponent"],
        loadChildren: () => Promise.all(/*! import() | pages-tracks-page-tracks-page-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-tracks-page-tracks-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/tracks-page/tracks-page.module */ "./src/app/pages/tracks-page/tracks-page.module.ts")).then(m => m.TracksPageModule)
    },
    {
        path: 't',
        component: _layouts_page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutComponent"],
        loadChildren: () => Promise.all(/*! import() | pages-track-page-track-page-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-track-page-track-page-module")]).then(__webpack_require__.bind(null, /*! ./pages/track-page/track-page.module */ "./src/app/pages/track-page/track-page.module.ts")).then(m => m.TrackPageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_startup_startup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/startup/startup.component */ "./src/app/core/startup/startup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'exercises-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-startup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_core_startup_startup_component__WEBPACK_IMPORTED_MODULE_1__["StartupComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _ngstack_code_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngstack/code-editor */ "./node_modules/@ngstack/code-editor/__ivy_ngcc__/fesm2015/ngstack-code-editor.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/layouts.module */ "./src/app/layouts/layouts.module.ts");
/* harmony import */ var _core_startup_startup_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/startup/startup.module */ "./src/app/core/startup/startup.module.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _ngstack_code_editor__WEBPACK_IMPORTED_MODULE_6__["CodeEditorModule"].forRoot(),
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_9__["LayoutsModule"],
            _core_startup_startup_module__WEBPACK_IMPORTED_MODULE_10__["StartupModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _ngstack_code_editor__WEBPACK_IMPORTED_MODULE_6__["CodeEditorModule"], _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_9__["LayoutsModule"],
        _core_startup_startup_module__WEBPACK_IMPORTED_MODULE_10__["StartupModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _ngstack_code_editor__WEBPACK_IMPORTED_MODULE_6__["CodeEditorModule"].forRoot(),
                    _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_9__["LayoutsModule"],
                    _core_startup_startup_module__WEBPACK_IMPORTED_MODULE_10__["StartupModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/exercise.service.ts":
/*!******************************************!*\
  !*** ./src/app/core/exercise.service.ts ***!
  \******************************************/
/*! exports provided: ExerciseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseService", function() { return ExerciseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "./src/app/core/settings.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _track_progress_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./track-progress.service */ "./src/app/core/track-progress.service.ts");








class ExerciseService {
    constructor(settings, http, firestore, progressService) {
        this.settings = settings;
        this.http = http;
        this.firestore = firestore;
        this.progressService = progressService;
        // the service needs a moment to sync the local files
        this.syncFinished = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        // distribute track information to the application
        this.tracksCache = [];
        this.tracks = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.tracksCache);
        this.activeTrack = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        // distribute exercise information to the application
        this.exerciseCache = [];
        this.exercises = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.exerciseCache);
        // handle subscriptions
        this.subscriptions();
        // and check sync status
        this.checkSyncStatus();
    }
    /**
     * Subscribe to Firestore and check if a sync is necessary.
     * Subscribe to tracks and exercises only if out of sync.
     */
    checkSyncStatus() {
        // reset sync status
        this.syncFinished.next(false);
        // first get local version
        localforage__WEBPACK_IMPORTED_MODULE_1__["getItem"]('versions').then((v) => {
            if (v) {
                this.localVersions = v;
            }
            else {
                // set a negative version to force sync
                this.localVersions = { tracks: -1, exercises: -1 };
            }
        }).then(() => {
            // subscribe to firebase version
            this.firestore.collection('config').doc('sync').valueChanges().subscribe({
                next: (v) => {
                    // store the versions
                    this.remoteVersions = v;
                    // check the version
                    let trackFinished = false;
                    let exFinished = false;
                    if (this.localVersions.tracks < this.remoteVersions.tracks) {
                        this.syncTracks().then(() => {
                            trackFinished = true;
                            if (trackFinished && exFinished) {
                                this.syncFinished.next(true);
                            }
                        });
                    }
                    else {
                        this.loadLocalTracks().then(() => {
                            trackFinished = true;
                            if (trackFinished && exFinished) {
                                this.syncFinished.next(true);
                            }
                        });
                    }
                    if (this.localVersions.exercises < this.remoteVersions.exercises) {
                        this.syncExercises().then(() => {
                            exFinished = true;
                            if (trackFinished && exFinished) {
                                this.syncFinished.next(true);
                            }
                        });
                    }
                    else {
                        this.loadLocalExercises().then(() => {
                            exFinished = true;
                            if (trackFinished && exFinished) {
                                this.syncFinished.next(true);
                            }
                        });
                    }
                    // mark the sync as finished
                    this.syncFinished.next(true);
                }
            });
        });
    }
    /**
     * Load the current set of tracks from local storage
     */
    loadLocalTracks() {
        return localforage__WEBPACK_IMPORTED_MODULE_1__["getItem"]('tracks').then((t) => {
            this.tracksCache = t;
            this.tracks.next(this.tracksCache);
        });
    }
    /**
     * Load the current set of exercises from local storage
     */
    loadLocalExercises() {
        return localforage__WEBPACK_IMPORTED_MODULE_1__["getItem"]('exercises').then((e) => {
            this.exerciseCache = e;
            this.exercises.next(this.exerciseCache);
        });
    }
    /**
     * There is version mismatch between the local and remote version
     * of the tracks. Sync and update the local version number.
     */
    syncTracks() {
        return new Promise(resolve => {
            this.firestore.collection('tracks').snapshotChanges().subscribe({
                next: refs => {
                    this.tracksCache = refs.map(ref => {
                        return Object.assign({ id: ref.payload.doc.id }, ref.payload.doc.data());
                    });
                    // save to storage
                    localforage__WEBPACK_IMPORTED_MODULE_1__["setItem"]('tracks', this.tracksCache).then(() => {
                        // publish new tracks
                        this.tracks.next(this.tracksCache);
                        // set new version
                        localforage__WEBPACK_IMPORTED_MODULE_1__["setItem"]('versions', Object.assign(Object.assign({}, this.localVersions), { tracks: this.remoteVersions.tracks }))
                            .then(() => resolve());
                    });
                }
            });
        });
    }
    /**
     * THere is a version mismatch between the local and reomte version
     * of the exercises. Sync and update the local version number.
     */
    syncExercises() {
        return new Promise(resolve => {
            this.firestore.collection('exercises').snapshotChanges().subscribe({
                next: refs => {
                    this.exerciseCache = refs.map(ref => {
                        return Object.assign({ id: ref.payload.doc.id }, ref.payload.doc.data());
                    });
                    // save to storage
                    localforage__WEBPACK_IMPORTED_MODULE_1__["setItem"]('exercises', this.exerciseCache).then(() => {
                        // publish new exercises
                        this.exercises.next(this.exerciseCache);
                        // set the new exercise version
                        localforage__WEBPACK_IMPORTED_MODULE_1__["setItem"]('versions', Object.assign(Object.assign({}, this.localVersions), { exercises: this.remoteVersions.exercises }))
                            .then(() => resolve());
                    });
                }
            });
        });
    }
    subscriptions() {
        // subscribe to the current backend URL
        this.settings.backend.subscribe({
            next: url => this.backendUrl = url
        });
    }
    /**
     * Execute a given SQL query against the database backend.
     * @param query - SQL query.
     */
    executeSql(query, explain) {
        const opt = { params: { sql: query } };
        // TODO: for now, only text output EXPLAINs are included
        if (explain) {
            opt.params.explain = explain;
        }
        return new Promise((resolve, reject) => {
            this.http.get(this.backendUrl + 'execute', opt).subscribe({
                next: res => resolve(res),
                error: error => reject(error)
            });
        });
    }
    getExerciseById(id) {
        return new Promise((resolve, reject) => {
            const exercise = this.exerciseCache.find(e => e.id === id);
            if (exercise) {
                resolve(exercise);
            }
            else {
                reject();
            }
        });
    }
    /**
     * Return a copy of the requested Track
     * @param trackId ID of the requested Track
     */
    getTrackById(trackId) {
        const track = this.tracksCache.find(t => t.id === trackId);
        if (track) {
            return JSON.parse(JSON.stringify(track));
        }
        else {
            console.log(`Track ID='${trackId}' not found.`);
            return null;
        }
    }
    getTrackIds() {
        return new Promise(resolve => {
            resolve(this.tracksCache.map(t => t.id));
        });
    }
    /**
     * Return the next exercise for the given exercise ID.
     * This will return  the next chronological exercise, even if it was
     * already solved.
     * Returns the exercise, -1 if it was the last and null if the id was not found.
     * @param id Exercise.id of the current exercise
     */
    getNextExercise(id) {
        const track = this.activeTrack.getValue();
        if (track) {
            const exercises = track.exercises.sort((a, b) => b.order - a.order);
            const thisIndex = exercises.findIndex(e => e.id === id);
            // if id is not in current track, return null
            if (thisIndex === -1) {
                return null;
            }
            // check if there is a next exercise
            if (thisIndex + 1 === exercises.length) {
                return -1;
            }
            else {
                const nextId = exercises[thisIndex + 1].id;
                const exercise = this.exerciseCache.find(e => e.id === nextId);
                return exercise ? exercise : null;
            }
        }
        return null;
    }
    /**
     * Return the next unsolved exercise for the given exercise ID.
     * This function will not return solved exercises.
     * @param id Exercise.id of the current exercise
     */
    getNextUnsolvedExercise(id) {
        // get the next
        let nextExercise = this.getNextExercise(id);
        // search for unsolved
        while (nextExercise !== -1) {
            if (nextExercise && this.progressService.isSolved(nextExercise.id)) {
                return nextExercise;
            }
            else {
                nextExercise = this.getNextExercise(nextExercise.id);
            }
        }
        // while will search until an Exercise or -1 is returned
        // thus, if this code is reached, the requested Exercise was the last unsolved
        return -1;
    }
}
ExerciseService.ɵfac = function ExerciseService_Factory(t) { return new (t || ExerciseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_track_progress_service__WEBPACK_IMPORTED_MODULE_6__["TrackProgressService"])); };
ExerciseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExerciseService, factory: ExerciseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExerciseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }, { type: _track_progress_service__WEBPACK_IMPORTED_MODULE_6__["TrackProgressService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/settings.service.ts":
/*!******************************************!*\
  !*** ./src/app/core/settings.service.ts ***!
  \******************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class SettingsService {
    constructor(http) {
        this.http = http;
        // backend logic
        this.backendUrl = 'http://localhost:5000/api/v1/';
        this.backend = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.backendUrl);
        // connection status
        this.isConnected = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.connectRequested = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.checkConnection = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
    }
    changeBackend(address) {
        if (address.endsWith('api/v1/')) {
            this.backendUrl = address;
        }
        else {
            this.backendUrl = `${address}api/v1/`;
        }
        this.backend.next(this.backendUrl);
    }
    /**
     * connectRequested Event is emitted, which will be consumed by the
     * startup component.
     */
    requestBackendConnect() {
        this.connectRequested.emit();
    }
    /**
     * Starts the connection autocheck
     */
    startCheckConnection() {
        this.checkTimoutId = window.setTimeout(this.checkBackendConnection.bind(this), 5000);
    }
    /**
     * Stops the connection autocheck
     */
    stopCheckConnection() {
        if (this.checkTimoutId) {
            clearTimeout(this.checkTimoutId);
            this.checkTimoutId = null;
        }
    }
    checkBackendConnection() {
        return new Promise(resolve => {
            if (!this.backendUrl) {
                this.isConnected.next(false);
                resolve(false);
            }
            this.http.get(this.backendUrl + 'ping').subscribe({
                next: () => {
                    this.isConnected.next(true);
                    resolve(true);
                },
                error: () => {
                    this.isConnected.next(false);
                    resolve(false);
                }
            });
        });
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/startup/startup.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/startup/startup.component.ts ***!
  \***************************************************/
/*! exports provided: StartupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupComponent", function() { return StartupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings.service */ "./src/app/core/settings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function StartupComponent_clr_modal_0_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 8);
} }
function StartupComponent_clr_modal_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "clr-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Success! Backend found - we start is a second.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StartupComponent_clr_modal_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-tabs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "clr-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Local");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-tab-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No backend was found. You need the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "hydenv");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " CLI running.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " The CLI will issue all SQL queries to the PostgreSQL server connected in the CLI. This way, you can solve exercises locally or connect to a cloud instance if any was provided to you. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Open a command prompt. If you have saved a connection before:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "python -m hydenv exercises start");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "In case you need to specify the PostgreSQL server, run:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "python -m hydenv exercises start --connection=postgresql://user:password@host:port/dbname");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "clr-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Remote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "clr-tab-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "clr-alert", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "clr-alert-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " This feature is experimental and be used at your own risk. It can cause costs. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " To directly connct to a remote backend, you need that hosted. Hosting causes costs and has to be paid. If you didn't set this up yourself, you need to run the backend locally. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Otherwise type the backend url in below");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StartupComponent_clr_modal_0_div_5_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.backendUrl = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrAlertClosable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.backendUrl);
} }
function StartupComponent_clr_modal_0_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartupComponent_clr_modal_0_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r8.onChangeBackend(ctx_r8.backendUrl); return ctx_r8.retry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Connect");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StartupComponent_clr_modal_0_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartupComponent_clr_modal_0_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r10.onChangeBackend(); return ctx_r10.retry(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Retry");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StartupComponent_clr_modal_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-modal", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrModalOpenChange", function StartupComponent_clr_modal_0_Template_clr_modal_clrModalOpenChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.active = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StartupComponent_clr_modal_0_span_3_Template, 1, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StartupComponent_clr_modal_0_div_4_Template, 4, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StartupComponent_clr_modal_0_div_5_Template, 36, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StartupComponent_clr_modal_0_button_7_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StartupComponent_clr_modal_0_button_8_Template, 2, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrModalOpen", ctx_r0.active)("clrModalSize", "lg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.pending);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.triggerFinished);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.triggerOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.backendUrl && ctx_r0.backendUrl !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.backendUrl || ctx_r0.backendUrl == "");
} }
class StartupComponent {
    constructor(settings) {
        this.settings = settings;
        // component logic
        this.active = false;
        this.pending = true;
        // content triggers
        this.triggerFinished = false;
        this.triggerOptions = false;
    }
    ngOnInit() {
        // subscribe to backend url
        // this.settings.backend.subscribe({
        //   next: url => {
        //     if (url) {
        //       this.findBackend();
        //     } else {
        //       this.retry();
        //     }
        //   }
        // });
        // listen to requests
        this.settings.connectRequested.subscribe({
            next: () => {
                // stop ongoing collapsing
                this.stopCollapsing();
                // reset and try to connect
                this.resetComponent();
                this.findBackend();
            }
        });
    }
    resetComponent() {
        this.active = true;
        this.pending = true;
        this.triggerFinished = false;
        this.triggerOptions = false;
    }
    onChangeBackend(address) {
        if (address) {
            this.settings.changeBackend(address);
        }
        else {
            this.settings.changeBackend('http://localhost:5000/');
        }
    }
    findBackend() {
        this.settings.checkBackendConnection().then(online => {
            this.pending = false;
            if (online) {
                this.startCollapsing();
            }
            else {
                this.triggerOptions = true;
            }
        });
    }
    retry() {
        this.pending = true;
        this.triggerOptions = false;
        this.findBackend();
    }
    startCollapsing() {
        this.pending = false;
        this.triggerOptions = false;
        this.triggerFinished = true;
        this.collapseTimeoutId = window.setTimeout(() => this.active = false, 800);
    }
    stopCollapsing() {
        if (this.collapseTimeoutId) {
            clearTimeout(this.collapseTimeoutId);
            this.collapseTimeoutId = null;
        }
    }
}
StartupComponent.ɵfac = function StartupComponent_Factory(t) { return new (t || StartupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"])); };
StartupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartupComponent, selectors: [["app-startup"]], decls: 1, vars: 1, consts: [[3, "clrModalOpen", "clrModalSize", "clrModalOpenChange", 4, "ngIf"], [3, "clrModalOpen", "clrModalSize", "clrModalOpenChange"], [1, "modal-body"], ["class", "spinner spinner-inverse", 4, "ngIf"], ["class", "success", 4, "ngIf"], [4, "ngIf"], [1, "modal-footer"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "spinner", "spinner-inverse"], [1, "success"], ["shape", "check", "size", "72"], ["clrTabLink", "", "id", "local"], ["clrTabLink", ""], ["clrAlertType", "warning", 3, "clrAlertClosable"], [1, "alert-text"], ["clrInput", "", "type", "text", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"]], template: function StartupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StartupComponent_clr_modal_0_Template, 9, 7, "clr-modal", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrModal"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrModalBody"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTabs"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrTabsWillyWonka"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTab"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTabLink"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ÇlrActiveOompaLoompa"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrTabContent"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrAlert"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrAlertItem"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrAlertText"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".modal-body[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.modal-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zdGFydHVwL3N0YXJ0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKO0FBQ0k7RUFDRSxXQUFBO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9jb3JlL3N0YXJ0dXAvc3RhcnR1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1ib2R5IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-startup',
                templateUrl: './startup.component.html',
                styleUrls: ['./startup.component.scss']
            }]
    }], function () { return [{ type: _settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/startup/startup.module.ts":
/*!************************************************!*\
  !*** ./src/app/core/startup/startup.module.ts ***!
  \************************************************/
/*! exports provided: StartupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartupModule", function() { return StartupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _startup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./startup.component */ "./src/app/core/startup/startup.component.ts");






class StartupModule {
}
StartupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StartupModule });
StartupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StartupModule_Factory(t) { return new (t || StartupModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StartupModule, { declarations: [_startup_component__WEBPACK_IMPORTED_MODULE_4__["StartupComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_startup_component__WEBPACK_IMPORTED_MODULE_4__["StartupComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_startup_component__WEBPACK_IMPORTED_MODULE_4__["StartupComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                exports: [_startup_component__WEBPACK_IMPORTED_MODULE_4__["StartupComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/track-progress.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/track-progress.service.ts ***!
  \************************************************/
/*! exports provided: TrackProgressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackProgressService", function() { return TrackProgressService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




class TrackProgressService {
    constructor() {
        // progress data
        this.progressCache = [];
        this.progress = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.progressCache);
        // load
        this.loadFromStorage().then(() => {
            this.progress.next(this.progressCache);
        });
    }
    /**
     * Update one of the exercises. After updating, the progress Cache
     * is saved to localstorage.
     * @param exerciseId string - id of the exercise the assignment is for
     * @param wasCorrect boolean - indicate if the result was correct.
     */
    update(exerciseId, wasCorrect) {
        // check if the assignment has already an entry
        const assignIdx = this.progressCache.findIndex(a => a.exerciseId === exerciseId);
        const current = new Date();
        // check if there is already an entry
        if (assignIdx === -1) {
            const assign = { exerciseId: exerciseId, date: current, correct: wasCorrect, tries: [current] };
            // add a new entry
            this.progressCache.push(assign);
        }
        else {
            // update
            const assign = Object.assign({}, this.progressCache[assignIdx]);
            assign.date = current;
            assign.correct = wasCorrect;
            assign.tries.push(current);
            // overwrite
            this.progressCache[assignIdx] = assign;
        }
        // finally save
        this.save();
    }
    /**
     * Checks id the given exercise is already solved.
     */
    isSolved(exerciseId) {
        const assign = this.progressCache.find(a => a.exerciseId === exerciseId);
        return assign && assign.correct;
    }
    loadFromStorage() {
        return new Promise(resolve => {
            // check if there are assignments in the local storage
            localforage__WEBPACK_IMPORTED_MODULE_1__["getItem"]('assignments').then((assign) => {
                if (assign) {
                    this.progressCache = assign;
                }
                else {
                    this.progressCache = [];
                }
            }).then(() => resolve());
        });
    }
    save() {
        return new Promise(resolve => {
            // save the current cache to localstorage
            localforage__WEBPACK_IMPORTED_MODULE_1__["setItem"]('assignments', this.progressCache).then(() => resolve());
        });
    }
}
TrackProgressService.ɵfac = function TrackProgressService_Factory(t) { return new (t || TrackProgressService)(); };
TrackProgressService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrackProgressService, factory: TrackProgressService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrackProgressService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layouts/full-width-layout/full-width-layout.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layouts/full-width-layout/full-width-layout.component.ts ***!
  \**************************************************************************/
/*! exports provided: FullWidthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullWidthLayoutComponent", function() { return FullWidthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/layouts/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class FullWidthLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
FullWidthLayoutComponent.ɵfac = function FullWidthLayoutComponent_Factory(t) { return new (t || FullWidthLayoutComponent)(); };
FullWidthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullWidthLayoutComponent, selectors: [["app-full-width-layout"]], decls: 5, vars: 0, consts: [[1, "content-container"], [1, "content-area"]], template: function FullWidthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-main-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrMainContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["MainContainerWillyWonka"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC13aWR0aC1sYXlvdXQvZnVsbC13aWR0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullWidthLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-full-width-layout',
                templateUrl: './full-width-layout.component.html',
                styleUrls: ['./full-width-layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layouts/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_core_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/settings.service */ "./src/app/core/settings.service.ts");
/* harmony import */ var src_app_core_exercise_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/exercise.service */ "./src/app/core/exercise.service.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = function (a2) { return ["/", "t", a2]; };
function HeaderComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.activeTrack.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.activeTrack.name.length > 40 ? ctx_r0.activeTrack.name.slice(0, 37) + "..." : ctx_r0.activeTrack.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Track: ", ctx_r0.activeTrack.name, "");
} }
function HeaderComponent_clr_dropdown_menu_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dropdown-menu", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Version ", ctx_r1.version, "");
} }
class HeaderComponent {
    constructor(settings, exerciseService) {
        this.settings = settings;
        this.exerciseService = exerciseService;
        // backend status
        this.backendConnected = false;
        // version
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].version;
    }
    ngOnInit() {
        // subscribe to backend status
        this.backendConnectSubscription = this.settings.isConnected.subscribe({
            next: status => this.backendConnected = status
        });
        // subscribe to active Track
        this.activeTrackSubscription = this.exerciseService.activeTrack.subscribe({
            next: track => this.activeTrack = track
        });
    }
    onConnect() {
        this.settings.requestBackendConnect();
    }
    ngOnDestroy() {
        this.backendConnectSubscription.unsubscribe();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_exercise_service__WEBPACK_IMPORTED_MODULE_3__["ExerciseService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 24, vars: 4, consts: [[1, "header-6"], [1, "branding"], ["routerLink", "/", 1, "nav-link"], ["src", "assets/logo.png"], [1, "title"], [1, "header-nav", 3, "clr-nav-level"], ["routerLink", "/tracks", "routerLinkActive", "active", 1, "nav-link", "nav-text"], ["class", "nav-link nav-text tooltip tooltip-lg tooltip-bottom-right", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [1, "header-actions"], ["href", "javascript://", "aria-label", "connection status", 1, "nav-link", "nav-icon", "tooltip", "tooltip-md", "tooltip-bottom-left", 3, "click"], [1, "tooltip-content"], ["routerLink", "/console", "routerLinkActive", "active", "aria-label", "console", 1, "nav-link", "nav-icon"], ["shape", "terminal"], ["clrDropdownTrigger", "", "aria-label", "toggle settings menu", 1, "nav-icon"], ["shape", "cog"], ["shape", "caret down"], ["clrPosition", "bottom-right", 4, "clrIfOpen"], ["routerLinkActive", "active", 1, "nav-link", "nav-text", "tooltip", "tooltip-lg", "tooltip-bottom-right", 3, "routerLink"], ["clrPosition", "bottom-right"], ["routerLink", "/settings", "clrDropdownItem", ""], ["clrDropdownItem", "", 3, "disabled"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "hydrocode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Tracks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_a_9_Template, 4, 5, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() { return ctx.onConnect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "clr-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The backend server is: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "clr-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "clr-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "clr-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "clr-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HeaderComponent_clr_dropdown_menu_23_Template, 7, 3, "clr-dropdown-menu", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clr-nav-level", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeTrack);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("shape", ctx.backendConnected ? "link" : "unlink");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("'", ctx.backendConnected ? "online" : "offline", "'");
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrHeader"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["NavDetectionOompaLoompa"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrNavLevel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDropdown"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDropdownTrigger"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrIfOpen"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDropdownMenu"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrDropdownItem"]], styles: [".branding[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 50px;\n  height: auto;\n  width: auto;\n}\n.branding[_ngcontent-%COMP%]   span.title[_ngcontent-%COMP%] {\n  margin-left: 0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFKO0FBR0U7RUFDRSxtQkFBQTtBQURKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyYW5kaW5nIHtcclxuICBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogNTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgc3Bhbi50aXRsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC42cmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: src_app_core_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"] }, { type: src_app_core_exercise_service__WEBPACK_IMPORTED_MODULE_3__["ExerciseService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layouts/layouts.module.ts":
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layouts/header/header.component.ts");
/* harmony import */ var _full_width_layout_full_width_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./full-width-layout/full-width-layout.component */ "./src/app/layouts/full-width-layout/full-width-layout.component.ts");
/* harmony import */ var _page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-layout/page-layout.component */ "./src/app/layouts/page-layout/page-layout.component.ts");








class LayoutsModule {
}
LayoutsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutsModule });
LayoutsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutsModule_Factory(t) { return new (t || LayoutsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutsModule, { declarations: [_full_width_layout_full_width_layout_component__WEBPACK_IMPORTED_MODULE_5__["FullWidthLayoutComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_6__["PageLayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_full_width_layout_full_width_layout_component__WEBPACK_IMPORTED_MODULE_5__["FullWidthLayoutComponent"],
        _page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_6__["PageLayoutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _full_width_layout_full_width_layout_component__WEBPACK_IMPORTED_MODULE_5__["FullWidthLayoutComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_6__["PageLayoutComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClarityModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                ],
                exports: [
                    _full_width_layout_full_width_layout_component__WEBPACK_IMPORTED_MODULE_5__["FullWidthLayoutComponent"],
                    _page_layout_page_layout_component__WEBPACK_IMPORTED_MODULE_6__["PageLayoutComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layouts/page-layout/page-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/page-layout/page-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: PageLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutComponent", function() { return PageLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/layouts/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class PageLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageLayoutComponent.ɵfac = function PageLayoutComponent_Factory(t) { return new (t || PageLayoutComponent)(); };
PageLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageLayoutComponent, selectors: [["app-page-layout"]], decls: 6, vars: 0, consts: [[1, "content-container"], [1, "content-area", "main"], [1, "wrapper"]], template: function PageLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-main-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrMainContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["MainContainerWillyWonka"], _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".content-area.main[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow-y: auto;\n}\n.content-area.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  max-width: 992px;\n  margin: auto;\n}\n@media (max-width: 991px) {\n  .content-area.main[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9wYWdlLWxheW91dC9wYWdlLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFDUjtBQUNRO0VBSko7SUFLUSxhQUFBO0VBRVY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvcGFnZS1sYXlvdXQvcGFnZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1hcmVhLm1haW4ge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogOTkycHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-layout',
                templateUrl: './page-layout.component.html',
                styleUrls: ['./page-layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDsfuR7dGyYFuXCzq1TFChCP-K6iqjTimA",
        authDomain: "data-course-261609.firebaseapp.com",
        databaseURL: "https://data-course-261609.firebaseio.com",
        projectId: "data-course-261609",
        storageBucket: "data-course-261609.appspot.com",
        messagingSenderId: "26810996853",
        appId: "1:26810996853:web:68eaf158951b103202003c",
        measurementId: "G-63LD6L8LCX"
    },
    version: __webpack_require__(/*! ../../package.json */ "./package.json").version
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\hydrocode\hydenv-database\exercises-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map