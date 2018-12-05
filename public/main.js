(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-config.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-config.module.ts ***!
  \**************************************/
/*! exports provided: APP_CONFIG, AppConfig, APP_DI_CONFIG, AppConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_DI_CONFIG", function() { return APP_DI_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfigModule", function() { return AppConfigModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("app.config");
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    return AppConfig;
}());

var APP_DI_CONFIG = {
    externalAuthEndpoint: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].externalAuthEndpoint,
    fileserverBaseURL: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]["fileserverBaseURL"] || null,
    demaxBaseUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]["demaxBaseUrl"] || null,
    production: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production,
    disabledDatasetColumns: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]["disabledDatasetColumns"] || [],
    archiveWorkflowEnabled: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]["archiveWorkflowEnabled"] || null,
    editMetadataEnabled: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]["editMetadataEnabled"] || null,
    facility: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]["facility"] || null,
    shoppingCartEnabled: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]["shoppingCartEnabled"] || false,
    multipleDownloadEnabled: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]["multipleDownloadEnabled"] || false,
    multipleDownloadAction: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"]["multipleDownloadAction"]
};
var AppConfigModule = /** @class */ (function () {
    function AppConfigModule() {
    }
    AppConfigModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                {
                    provide: APP_CONFIG,
                    useValue: APP_DI_CONFIG
                }
            ]
        })
    ], AppConfigModule);
    return AppConfigModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contact.component */ "./src/app/pages/contact.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/not-found.component */ "./src/app/pages/not-found.component.ts");
/* harmony import */ var _pages_imprint_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/imprint.component */ "./src/app/pages/imprint.component.ts");
/* harmony import */ var _pages_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home.component */ "./src/app/pages/home.component.ts");
/* harmony import */ var _proposals_proposals_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./proposals/proposals.component */ "./src/app/proposals/proposals.component.ts");
/* harmony import */ var _services_auth_guard_admin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth-guard-admin.service */ "./src/app/services/auth-guard-admin.service.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
/* harmony import */ var _pages_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/admin.component */ "./src/app/pages/admin.component.ts");
/* harmony import */ var _pages_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/user.component */ "./src/app/pages/user.component.ts");
/* harmony import */ var _pages_testing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/testing.component */ "./src/app/pages/testing.component.ts");
/* harmony import */ var _proposal_proposal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./proposal/proposal.component */ "./src/app/proposal/proposal.component.ts");
/* harmony import */ var _proposal_list_proposal_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./proposal-list/proposal-list.component */ "./src/app/proposal-list/proposal-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', component: _pages_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'admin', component: _pages_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"], canActivate: [_services_auth_guard_admin_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardAdmin"]] },
    { path: 'contact', component: _pages_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'home', component: _pages_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'imprint', component: _pages_imprint_component__WEBPACK_IMPORTED_MODULE_6__["ImprintComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'logout', component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"] },
    { path: 'notfound', component: _pages_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    { path: 'proposal', component: _proposal_proposal_component__WEBPACK_IMPORTED_MODULE_14__["ProposalComponent"] },
    { path: 'proposal-list', component: _proposal_list_proposal_list_component__WEBPACK_IMPORTED_MODULE_15__["ProposalListComponent"] },
    { path: 'proposals', component: _proposals_proposals_component__WEBPACK_IMPORTED_MODULE_8__["ProposalsComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'test', component: _pages_testing_component__WEBPACK_IMPORTED_MODULE_13__["TestingComponent"] },
    { path: 'user', component: _pages_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"] },
    { path: '**', redirectTo: '/notfound' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.browser.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.browser.module.ts ***!
  \***************************************/
/*! exports provided: AppBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function() { return AppBrowserModule; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppBrowserModule = /** @class */ (function () {
    function AppBrowserModule() {
    }
    AppBrowserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({ appId: 'app-root' }),
                _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"],
            ]
        })
    ], AppBrowserModule);
    return AppBrowserModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space{\n\tflex: 1 1 auto;\n}\n.footer{\n\tposition: fixed;\n\tbottom: 0;\n}\nheader{\n\tborder-bottom: solid #0094CA 1px;\n}\n.sidebar {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 200px;\n\tbackground-color: #f1f1f1;\n\tposition: fixed;\n\theight: 100%;\n\toverflow: auto;\n\tborder-right: 1px solid lightgray;\n}\n.sidebar a {\n\tdisplay: block;\n\tcolor: black;\n\tpadding: 16px;\n\ttext-decoration: none;\n}\n.sidebar a.active {\n\tbackground-color: #4CAF50;\n\tcolor: white;\n}\n.sidebar a:hover:not(.active) {\n\tbackground-color: #0094CA;\n\tcolor: white;\n}\ndiv.content {\n\tmargin-left: 200px;\n\tpadding: 1px 16px;\n\theight: 1000px;\n}\n@media screen and (max-width: 700px) {\n\t.sidebar {\n\t\twidth: 100%;\n\t\theight: auto;\n\t\tposition: relative;\n\t}\n\t.sidebar a {float: left;}\n\tdiv.content {margin-left: 0;}\n}\n@media screen and (max-width: 400px) {\n\t.sidebar a {\n\t\ttext-align: center;\n\t\tfloat: none;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxlQUFlO0NBQ2Y7QUFDRDtDQUNDLGdCQUFnQjtDQUNoQixVQUFVO0NBQ1Y7QUFFRDtDQUNDLGlDQUFpQztDQUNqQztBQUNEO0NBQ0MsVUFBVTtDQUNWLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsMEJBQTBCO0NBQzFCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsZUFBZTtDQUNmLGtDQUFrQztDQUNsQztBQUVEO0NBQ0MsZUFBZTtDQUNmLGFBQWE7Q0FDYixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCO0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiO0FBRUQ7Q0FDQywwQkFBMEI7Q0FDMUIsYUFBYTtDQUNiO0FBRUQ7Q0FDQyxtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZjtBQUVEO0NBQ0M7RUFDQyxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQjtDQUNELFlBQVksWUFBWSxDQUFDO0NBQ3pCLGFBQWEsZUFBZSxDQUFDO0NBQzdCO0FBRUQ7Q0FDQztFQUNDLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1o7Q0FDRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2V7XG5cdGZsZXg6IDEgMSBhdXRvO1xufVxuLmZvb3Rlcntcblx0cG9zaXRpb246IGZpeGVkO1xuXHRib3R0b206IDA7XG59XG5cbmhlYWRlcntcblx0Ym9yZGVyLWJvdHRvbTogc29saWQgIzAwOTRDQSAxcHg7XG59XG4uc2lkZWJhciB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0d2lkdGg6IDIwMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGhlaWdodDogMTAwJTtcblx0b3ZlcmZsb3c6IGF1dG87XG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLnNpZGViYXIgYSB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRjb2xvcjogYmxhY2s7XG5cdHBhZGRpbmc6IDE2cHg7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpZGViYXIgYS5hY3RpdmUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbi5zaWRlYmFyIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwOTRDQTtcblx0Y29sb3I6IHdoaXRlO1xufVxuXG5kaXYuY29udGVudCB7XG5cdG1hcmdpbi1sZWZ0OiAyMDBweDtcblx0cGFkZGluZzogMXB4IDE2cHg7XG5cdGhlaWdodDogMTAwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuXHQuc2lkZWJhciB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0fVxuXHQuc2lkZWJhciBhIHtmbG9hdDogbGVmdDt9XG5cdGRpdi5jb250ZW50IHttYXJnaW4tbGVmdDogMDt9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG5cdC5zaWRlYmFyIGEge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRmbG9hdDogbm9uZTtcblx0fVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header style=\"display: flex; flex-wrap: wrap; justify-content: space-between;\">\n\t<span style=\"padding: 2rem;\">\n\t\t<a routerLink=\"/home\" style=\"background-color: white;\">\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"210px\" height=\"114px\"\n\t\t     viewBox=\"0 0 105 57\" version=\"1.1\">\n\t\t\t<defs>\n\t\t\t\t<polygon id=\"path-1\" points=\"0 55.8062284 103.859203 55.8062284 103.859203 0.16199308 0 0.16199308\"/>\n\t\t\t</defs>\n\t\t\t<g id=\"Comp\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n\t\t\t\t<g id=\"logo-blue\" transform=\"translate(-41.000000, -26.000000)\">\n\t\t\t\t\t<g id=\"Page-1\" transform=\"translate(41.000000, 26.000000)\">\n\t\t\t\t\t\t<polygon id=\"Fill-1\" fill=\"#009EDD\"\n\t\t\t\t\t\t         points=\"61.2423851 14.1127751 64.7597929 14.1127751 64.7597929 15.0244706 62.1851635 15.0244706 62.1851635 16.4986851 64.2701989 16.4986851 64.2701989 17.3950727 62.1851635 17.3950727 62.1851635 18.8378962 64.7597929 18.8378962 64.7597929 19.7495917 61.2423851 19.7495917\"/>\n\t\t\t\t\t\t<g id=\"Group-46\" transform=\"translate(0.000000, 0.031779)\">\n\t\t\t\t\t\t\t<path d=\"M67.7408551,18.8541343 C68.4068812,18.8541343 68.8540618,18.6262588 68.8540618,17.9007779 L68.8540618,14.0809578 L69.8148514,14.0809578 L69.8148514,17.9007779 C69.8148514,19.2538851 69.0911121,19.7916014 67.7408551,19.7916014 C66.4027993,19.7916014 65.687194,19.2538851 65.687194,17.9007779 L65.687194,14.0809578 L66.6472089,14.0809578 L66.6472089,17.9007779 C66.6472089,18.6349785 67.0870302,18.8541343 67.7408551,18.8541343 Z\"\n\t\t\t\t\t\t\t      id=\"Fill-2\" fill=\"#009EDD\"/>\n\t\t\t\t\t\t\t<path d=\"M73.1049505,14.9927114 L71.9320939,14.9927114 L71.9320939,16.8823723 L73.121025,16.8823723 C73.7822093,16.8823723 74.025457,16.4925038 74.025457,15.9127391 C74.025457,15.2940263 73.7231404,14.9927114 73.1049505,14.9927114 L73.1049505,14.9927114 Z M73.0817102,17.7960055 L71.9320939,17.7960055 L71.9320939,19.7178325 L70.9804067,19.7178325 L70.9804067,14.0810159 L73.1049505,14.0810159 C74.3920715,14.0810159 75.0104551,14.6092374 75.0104551,15.8964623 C75.0104551,16.7449882 74.7013601,17.2334865 74.1224849,17.518137 L75.0104551,19.7178325 L73.9596097,19.7178325 L73.1870659,17.7960055 L73.0817102,17.7960055 Z\"\n\t\t\t\t\t\t\t      id=\"Fill-4\" fill=\"#009EDD\"/>\n\t\t\t\t\t\t\t<path d=\"M79.2942093,16.9387405 C79.2942093,15.6272941 79.0406972,14.9105329 78.0068946,14.9105329 C76.9721236,14.9105329 76.7205482,15.6272941 76.7205482,16.9387405 C76.7205482,18.2515433 76.9637959,18.8863391 78.0068946,18.8863391 C79.0486376,18.8863391 79.2942093,18.2678201 79.2942093,16.9387405 M75.7351628,16.9387405 C75.7351628,15.0506298 76.2634905,13.9901176 78.0068946,13.9901176 C79.751267,13.9901176 80.2807568,15.0506298 80.2807568,16.9387405 C80.2807568,18.8462284 79.751267,19.8083045 78.0068946,19.8083045 C76.2634905,19.8083045 75.7351628,18.8299516 75.7351628,16.9387405\"\n\t\t\t\t\t\t\t      id=\"Fill-6\" fill=\"#009EDD\"/>\n\t\t\t\t\t\t\t<path d=\"M83.2999717,17.0950561 C83.9425639,17.0950561 84.2446868,16.6784471 84.2446868,15.9948208 C84.2446868,15.3189453 83.9425639,15.0009661 83.2999717,15.0009661 L82.2162026,15.0009661 L82.2162026,17.0950561 L83.2999717,17.0950561 Z M82.2162026,18.0150837 L82.2162026,19.717755 L81.2635471,19.717755 L81.2635471,14.0809384 L83.3081058,14.0809384 C84.5865117,14.0809384 85.2219382,14.7141841 85.2219382,15.9948208 C85.2219382,17.274101 84.5865117,18.0150837 83.3081058,18.0150837 L82.2162026,18.0150837 Z\"\n\t\t\t\t\t\t\t      id=\"Fill-8\" fill=\"#009EDD\"/>\n\t\t\t\t\t\t\t<polygon id=\"Fill-10\" fill=\"#009EDD\"\n\t\t\t\t\t\t\t         points=\"86.1261378 14.0809965 89.643352 14.0809965 89.643352 14.992692 87.0696909 14.992692 87.0696909 16.4669066 89.1547263 16.4669066 89.1547263 17.3632941 87.0696909 17.3632941 87.0696909 18.8061176 89.643352 18.8061176 89.643352 19.7178131 86.1261378 19.7178131\"/>\n\t\t\t\t\t\t\t<path d=\"M91.6625207,17.6888498 L93.3147069,17.6888498 L92.6905132,14.9589952 L92.3049192,14.9589952 L91.6625207,17.6888498 Z M91.5649117,14.0810159 L93.4454331,14.0810159 L94.7732246,19.7178325 L93.8132097,19.7178325 L93.5041147,18.6100401 L91.4585877,18.6100401 L91.1839657,19.7178325 L90.2210458,19.7178325 L91.5649117,14.0810159 Z\"\n\t\t\t\t\t\t\t      id=\"Fill-12\" fill=\"#009EDD\"/>\n\t\t\t\t\t\t\t<polygon id=\"Fill-14\" fill=\"#009EDD\"\n\t\t\t\t\t\t\t         points=\"95.5871359 14.0809965 97.1351285 14.0809965 98.9248194 18.5290242 99.0650354 18.5290242 99.0650354 14.0809965 100.025825 14.0809965 100.025825 19.7178131 98.5196648 19.7178131 96.6786518 15.270173 96.5397914 15.270173 96.5397914 19.7178131 95.5871359 19.7178131\"/>\n\t\t\t\t\t\t\t<path d=\"M64.337092,24.7278367 C64.337092,24.7278367 63.3243993,24.5976221 62.8543657,24.5976221 C62.3149989,24.5976221 61.9894421,24.793719 61.9894421,25.2163349 C61.9894421,25.7058021 62.2096432,25.8117952 63.0976134,26.1371377 C64.1072074,26.5126671 64.5295985,26.7977052 64.5295985,27.7758644 C64.5295985,28.948764 63.8790659,29.4872554 62.7406823,29.4872554 C62.1192,29.4872554 61.0205184,29.2746879 61.0205184,29.2746879 L61.1179337,28.4122104 C61.1179337,28.4122104 62.1517363,28.5507571 62.7325482,28.5507571 C63.2686227,28.5507571 63.5699709,28.346328 63.5699709,27.8004734 C63.5699709,27.3600304 63.3741721,27.2381481 62.6252559,26.9781066 C61.4037885,26.5289439 61.0286525,26.2439059 61.0286525,25.2326118 C61.0286525,24.1662865 61.7705966,23.6613176 62.8543657,23.6613176 C63.4806898,23.6613176 64.4079747,23.8653592 64.4079747,23.8653592 L64.337092,24.7278367 Z\"\n\t\t\t\t\t\t\t      id=\"Fill-16\" fill=\"#009EDD\"/>\n\t\t\t\t\t\t\t<path d=\"M67.5999613,26.7737938 C68.2446838,26.7737938 68.5468067,26.3581536 68.5468067,25.6731709 C68.5468067,24.996908 68.2446838,24.6785412 67.5999613,24.6785412 L66.5173542,24.6785412 L66.5173542,26.7737938 L67.5999613,26.7737938 Z M66.5173542,27.6934339 L66.5173542,29.3980429 L65.5637304,29.3980429 L65.5637304,23.758126 L67.608289,23.758126 C68.887276,23.758126 69.5217341,24.394472 69.5217341,25.6731709 C69.5217341,26.9524512 68.887276,27.6934339 67.608289,27.6934339 L66.5173542,27.6934339 Z\"\n\t\t\t\t\t\t\t      id=\"Fill-18\" fill=\"#009EDD\"/>\n\t\t\t\t\t\t\t<path d=\"M71.1100097,27.3679751 L72.7645199,27.3679751 L72.1358719,24.6388955 L71.7526019,24.6388955 L71.1100097,27.3679751 Z M71.0118197,23.7582035 L72.8931158,23.7582035 L74.2218756,29.3981204 L73.2608924,29.3981204 L72.9498607,28.2891654 L70.9064641,28.2891654 L70.6289371,29.3981204 L69.6677601,29.3981204 L71.0118197,23.7582035 Z\"\n\t\t\t\t\t\t\t      id=\"Fill-20\" fill=\"#009EDD\"/>\n\t\t\t\t\t\t\t<polygon id=\"Fill-22\" fill=\"#009EDD\"\n\t\t\t\t\t\t\t         points=\"75.034838 29.3980429 75.034838 23.7583197 75.9865251 23.7583197 75.9865251 28.4764651 78.1711061 28.4764651 78.1711061 29.3980429\"/>\n\t\t\t\t\t\t\t<polygon id=\"Fill-24\" fill=\"#009EDD\"\n\t\t\t\t\t\t\t         points=\"79.073311 29.3980429 79.073311 23.7583197 80.0259665 23.7583197 80.0259665 28.4764651 82.2089981 28.4764651 82.2089981 29.3980429\"/>\n\t\t\t\t\t\t\t<path d=\"M84.1138056,27.3679751 L85.7671538,27.3679751 L85.1396678,24.6388955 L84.7575598,24.6388955 L84.1138056,27.3679751 Z M84.0156156,23.7582035 L85.8969117,23.7582035 L87.2245095,29.3981204 L86.2639136,29.3981204 L85.9536566,28.2891654 L83.909098,28.2891654 L83.6335076,29.3981204 L82.6727181,29.3981204 L84.0156156,23.7582035 Z\"\n\t\t\t\t\t\t\t      id=\"Fill-26\" fill=\"#009EDD\"/>\n\t\t\t\t\t\t\t<polygon id=\"Fill-28\" fill=\"#009EDD\"\n\t\t\t\t\t\t\t         points=\"87.3464045 23.7582228 91.4171233 23.7582228 91.4171233 24.6786381 89.8693244 24.6786381 89.8693244 29.397946 88.9093095 29.397946 88.9093095 24.6786381 87.3464045 24.6786381\"/>\n\t\t\t\t\t\t\t<mask id=\"mask-2\" fill=\"white\">\n\t\t\t\t\t\t\t\t<use xlink:href=\"#path-1\"/>\n\t\t\t\t\t\t\t</mask>\n\t\t\t\t\t\t\t<g id=\"Clip-31\"/>\n\t\t\t\t\t\t\t<polygon id=\"Fill-30\" fill=\"#009EDD\" mask=\"url(#mask-2)\"\n\t\t\t\t\t\t\t         points=\"91.9625326 29.3978685 92.9240968 29.3978685 92.9240968 23.7581453 91.9625326 23.7581453\"/>\n\t\t\t\t\t\t\t<path d=\"M97.4511955,26.619009 C97.4511955,25.3065938 97.1986518,24.5900263 96.1636872,24.5900263 C95.1310466,24.5900263 94.8773408,25.3065938 94.8773408,26.619009 C94.8773408,27.9304554 95.1229125,28.5669952 96.1636872,28.5669952 C97.2067858,28.5669952 97.4511955,27.9467322 97.4511955,26.619009 M93.8911806,26.619009 C93.8911806,24.7277979 94.4222197,23.6684484 96.1636872,23.6684484 C97.9072849,23.6684484 98.4363873,24.7277979 98.4363873,26.619009 C98.4363873,28.5249467 97.9072849,29.4874104 96.1636872,29.4874104 C94.4222197,29.4874104 93.8911806,28.509445 93.8911806,26.619009\"\n\t\t\t\t\t\t\t      id=\"Fill-32\" fill=\"#009EDD\" mask=\"url(#mask-2)\"/>\n\t\t\t\t\t\t\t<polygon id=\"Fill-33\" fill=\"#009EDD\" mask=\"url(#mask-2)\"\n\t\t\t\t\t\t\t         points=\"99.4217534 23.7582228 100.968584 23.7582228 102.761761 28.2074131 102.897329 28.2074131 102.897329 23.7582228 103.85928 23.7582228 103.85928 29.397946 102.35312 29.397946 100.511526 24.9481744 100.374409 24.9481744 100.374409 29.397946 99.4217534 29.397946\"/>\n\t\t\t\t\t\t\t<path d=\"M64.337092,34.4073301 C64.337092,34.4073301 63.3243993,34.2755654 62.8543657,34.2755654 C62.3149989,34.2755654 61.9894421,34.4724374 61.9894421,34.8958284 C61.9894421,35.3841329 62.2096432,35.490126 63.0976134,35.8170187 C64.1072074,36.1906104 64.5295985,36.4764235 64.5295985,37.4540014 C64.5295985,38.6267073 63.8790659,39.1650048 62.7406823,39.1650048 C62.1192,39.1650048 61.0205184,38.9522436 61.0205184,38.9522436 L61.1179337,38.088991 C61.1179337,38.088991 62.1517363,38.2271502 62.7325482,38.2271502 C63.2686227,38.2271502 63.5699709,38.0242713 63.5699709,37.4782228 C63.5699709,37.0379737 63.3741721,36.9157038 62.6252559,36.6560498 C61.4037885,36.2068872 61.0286525,35.9222367 61.0286525,34.9121052 C61.0286525,33.8442298 61.7705966,33.3392609 62.8543657,33.3392609 C63.4806898,33.3392609 64.4079747,33.5421398 64.4079747,33.5421398 L64.337092,34.4073301 Z\"\n\t\t\t\t\t\t\t      id=\"Fill-34\" fill=\"#009EDD\" mask=\"url(#mask-2)\"/>\n\t\t\t\t\t\t\t<path d=\"M68.8540812,36.2973592 C68.8540812,34.9859128 68.6015374,34.2672138 67.5665728,34.2672138 C66.5337385,34.2672138 66.2813885,34.9859128 66.2813885,36.2973592 C66.2813885,37.6088055 66.5257981,38.2434076 67.5665728,38.2434076 C68.6094778,38.2434076 68.8540812,37.6250824 68.8540812,36.2973592 M65.296003,36.2973592 C65.296003,34.4073107 65.8251054,33.3475737 67.5665728,33.3475737 C69.3099769,33.3475737 69.839273,34.4073107 69.839273,36.2973592 C69.839273,38.2029093 69.3099769,39.1649855 67.5665728,39.1649855 C65.8251054,39.1649855 65.296003,38.1870201 65.296003,36.2973592\"\n\t\t\t\t\t\t\t      id=\"Fill-35\" fill=\"#009EDD\" mask=\"url(#mask-2)\"/>\n\t\t\t\t\t\t\t<path d=\"M72.7877795,38.2127529 C73.4545803,38.2127529 73.9029229,37.9823585 73.9029229,37.2570713 L73.9029229,33.4376388 L74.8637125,33.4376388 L74.8637125,37.2570713 C74.8637125,38.6105661 74.1390048,39.1486699 72.7877795,39.1486699 C71.451854,39.1486699 70.7348931,38.6105661 70.7348931,37.2570713 L70.7348931,33.4376388 L71.6958764,33.4376388 L71.6958764,37.2570713 C71.6958764,37.9916595 72.1358912,38.2127529 72.7877795,38.2127529\"\n\t\t\t\t\t\t\t      id=\"Fill-36\" fill=\"#009EDD\" mask=\"url(#mask-2)\"/>\n\t\t\t\t\t\t\t<path d=\"M78.1528238,34.3494311 L76.9799672,34.3494311 L76.9799672,36.2394796 L78.1712223,36.2394796 C78.828727,36.2394796 79.0733304,35.8480609 79.0733304,35.2694588 C79.0733304,34.650746 78.7741125,34.3494311 78.1528238,34.3494311 L78.1528238,34.3494311 Z M78.1286153,37.1527253 L76.9799672,37.1527253 L76.9799672,39.0745522 L76.0282801,39.0745522 L76.0282801,33.4377356 L78.1528238,33.4377356 C79.4401385,33.4377356 80.0585222,33.9663446 80.0585222,35.253182 C80.0585222,36.1005453 79.7513639,36.5902062 79.170552,36.8752443 L80.0585222,39.0745522 L79.0082577,39.0745522 L78.2347456,37.1527253 L78.1286153,37.1527253 Z\"\n\t\t\t\t\t\t\t      id=\"Fill-37\" fill=\"#009EDD\" mask=\"url(#mask-2)\"/>\n\t\t\t\t\t\t\t<path d=\"M84.4718212,38.9621066 C84.4718212,38.9621066 83.5199404,39.1649855 82.8763799,39.1649855 C81.1744209,39.1649855 80.7832104,38.1870201 80.7832104,36.2632554 C80.7832104,34.2112138 81.2799702,33.3475737 82.8763799,33.3475737 C83.5836574,33.3475737 84.4799553,33.5682796 84.4799553,33.5682796 L84.447419,34.4073107 C84.447419,34.4073107 83.4955382,34.2850408 83.0059441,34.2850408 C82.0207523,34.2850408 81.7682086,34.7574561 81.7682086,36.2632554 C81.7682086,37.6987156 81.9640074,38.2271308 83.0394488,38.2271308 C83.4783017,38.2271308 84.447419,38.0969163 84.447419,38.0969163 L84.4718212,38.9621066 Z\"\n\t\t\t\t\t\t\t      id=\"Fill-38\" fill=\"#009EDD\" mask=\"url(#mask-2)\"/>\n\t\t\t\t\t\t\t<polygon id=\"Fill-39\" fill=\"#009EDD\" mask=\"url(#mask-2)\"\n\t\t\t\t\t\t\t         points=\"85.4093318 33.4377163 88.926546 33.4377163 88.926546 34.3494118 86.3528849 34.3494118 86.3528849 35.8249827 88.4383076 35.8249827 88.4383076 36.7211765 86.3528849 36.7211765 86.3528849 38.1628374 88.926546 38.1628374 88.926546 39.0745329 85.4093318 39.0745329\"/>\n\t\t\t\t\t\t\t<path d=\"M18.4974168,44.1954519 C20.2338488,44.9996042 22.1093348,45.5541785 24.0845601,45.8051128 C24.8892529,45.9099433 25.6985937,45.9676872 26.5261393,45.9676872 C25.6993683,45.9676872 24.8892529,45.9099433 24.0808804,45.8035626 C22.1093348,45.5503031 20.2352045,44.9996042 18.4974168,44.1954519\"\n\t\t\t\t\t\t\t      id=\"Fill-40\" fill=\"#009EDD\" mask=\"url(#mask-2)\"/>\n\t\t\t\t\t\t\t<path d=\"M21.0886823,47.0857495 L21.160727,46.9057356 C19.4947903,46.2391612 17.8865669,45.3914104 16.3964812,44.3983308 L16.2891888,44.5595488 L16.4017102,44.4018187 L16.3910585,44.3942616 L16.3782764,44.3857356 L16.3494197,44.36849 L16.2496804,44.5345522 L16.2496804,44.7283239 L16.2512298,44.7283239 C16.3391553,44.7283239 16.4154607,44.6696111 16.4383136,44.5849329 C16.4611665,44.5000609 16.4245631,44.4111197 16.3486451,44.3671336 C15.6001162,43.9319225 14.882187,43.4554381 14.1993117,42.9322547 L14.1991181,42.9320609 C12.1152447,41.3421647 10.3486004,39.3585246 9.00841415,37.091009 L9.00860782,37.0913965 C8.33715903,35.9508567 7.81231732,34.7209882 7.36746071,33.4450021 C6.63384432,31.3472304 6.19479777,29.1159502 6.19479777,26.7738325 C6.19479777,25.8359779 6.26374376,24.9145938 6.38788529,24.009874 L6.38807896,24.0092927 C6.41286853,23.8209467 6.46961341,23.6260125 6.5071851,23.4041439 C6.62203054,22.7176111 6.74810875,22.0386353 6.92705847,21.3854311 C7.00491322,21.099618 7.11995233,20.8159363 7.22065996,20.5101647 L7.22085363,20.5091958 C7.39728566,19.9615972 7.57197467,19.4200055 7.78985177,18.902054 C7.92483873,18.5805869 8.09352402,18.2709398 8.25407523,17.9417218 L8.25407523,17.9411405 C8.4062987,17.6260678 8.53663762,17.3121578 8.69409013,17.0255696 C8.74250726,16.9375972 8.71558734,16.8271474 8.6321162,16.7711474 C8.5484514,16.7153412 8.43631732,16.7325869 8.37337505,16.8110644 C8.01741229,17.2551889 7.63201192,17.6907875 7.29464134,18.1757979 L7.29444767,18.1759917 C7.24990391,18.2405176 7.21620559,18.2988429 7.18425028,18.3441855 L7.18270093,18.346317 C6.65495419,19.1194657 6.17465624,19.9222616 5.73696536,20.7446284 L5.73677169,20.7450159 C5.6856432,20.8420955 5.62405661,20.9434381 5.56653706,21.0558256 C5.13678659,21.8927253 4.76281266,22.7567529 4.42989646,23.6362824 L4.42989646,23.6358948 C4.37237691,23.7872304 4.31505102,23.9405038 4.25869348,24.0966837 L4.25849981,24.0976526 C3.94495047,24.9810574 3.67536387,25.8826768 3.4629095,26.8011543 L3.4629095,26.8007668 C3.4315352,26.9352443 3.40848864,27.0658464 3.38273073,27.1917979 L3.57252588,27.2305522 L3.38311806,27.1898602 C3.17569907,28.1529052 3.01088715,29.1310644 2.92063762,30.124919 L2.92063762,30.1255003 L2.91676425,30.1704554 L2.91676425,30.1708429 C2.85595233,30.8767529 2.82244767,31.5828567 2.82244767,32.303881 C2.82244767,34.3950644 3.0887419,36.5238394 3.6573527,38.6431197 C4.40491322,41.4175419 5.60101006,43.9547875 7.14764693,46.1971128 C8.0321311,47.4783308 9.03204171,48.6671197 10.1450547,49.7642547 L10.2808164,49.6262893 L10.1400194,49.7592166 C11.6332037,51.3444623 13.3791255,52.6574588 15.2943136,53.6518948 L15.2945073,53.6518948 C17.9826264,55.0441439 21.0013378,55.8062478 24.1174644,55.8062478 C25.7622912,55.8062478 27.4359747,55.5948429 29.103267,55.1489744 C33.6941795,53.9187183 37.4414719,51.1287945 39.9413453,47.5015834 C39.9891814,47.4322131 39.98647,47.3395903 39.9349542,47.2729329 C39.8834384,47.2062754 39.7943508,47.1805038 39.7153341,47.2095696 C39.4095315,47.3217633 39.0862987,47.4072166 38.7595799,47.5116595 C38.4735315,47.602926 38.1956171,47.6988429 37.9186711,47.7773204 L37.9184775,47.7773204 C37.384727,47.9300125 36.8416804,48.0551889 36.2961162,48.170483 L36.2945669,48.1708706 C36.0627456,48.2218325 35.8390585,48.2795765 35.61847,48.3231751 L35.6560417,48.5132651 L35.6206004,48.3227875 C34.9867233,48.4407945 34.3458741,48.5254727 33.7028946,48.5961993 C33.5452484,48.6140263 33.4025147,48.6421232 33.2717885,48.651618 L33.2675277,48.6520055 C32.4676767,48.7293204 31.6655017,48.7717564 30.863714,48.7717564 C27.5769654,48.7717564 24.2756916,48.1466491 21.1603397,46.9057356 L21.160727,46.9057356 L21.0886823,47.0857495 L21.017025,47.2657633 C24.1782764,48.5250851 27.5279672,49.1592997 30.863714,49.1592997 C31.6792521,49.1592997 32.493822,49.1162824 33.3049058,49.0376111 L33.2861199,48.8448083 L33.3006451,49.0379986 C33.4627456,49.0255972 33.60974,48.9961439 33.7455017,48.9814173 C34.3937102,48.9099156 35.0442428,48.8242685 35.6912894,48.7039363 L35.6936134,48.7035488 C35.928727,48.6568498 36.1551255,48.598137 36.3776507,48.5493066 L36.3761013,48.5496941 C36.9263136,48.4332374 37.4780752,48.306317 38.0248015,48.150137 L38.0246078,48.150137 C38.3151106,48.0673965 38.5967047,47.970317 38.877524,47.8809882 C39.1914607,47.7800332 39.5199225,47.6938048 39.8483844,47.5736664 L39.7817624,47.3915211 L39.6223732,47.2816526 C37.1718853,50.8365869 33.502835,53.568573 29.0031404,54.7748014 C27.369159,55.2115626 25.7291739,55.4187045 24.1174644,55.4187045 C21.0644737,55.4187045 18.1069616,54.6721024 15.472295,53.3077564 L15.4724886,53.3077564 C13.5960343,52.3334727 11.8849728,51.0464415 10.4218071,49.4935557 L10.4167717,49.4883239 C9.32080149,48.4078533 8.33696536,47.238054 7.46642533,45.9767945 C5.94419069,43.7701232 4.76726704,41.2737633 4.03132663,38.5423585 C3.47181825,36.4567945 3.20978473,34.3621232 3.20978473,32.303881 C3.20978473,31.5950644 3.24270838,30.9001993 3.30255196,30.2041716 L3.30255196,30.2045592 L3.30661899,30.1594104 L3.30661899,30.1599917 C3.39493184,29.1859017 3.55683873,28.2232443 3.76174004,27.2714381 L3.76212737,27.2695003 C3.78924097,27.136573 3.81190019,27.0096526 3.83998212,26.8891266 L3.84017579,26.8887391 C4.04914413,25.9859571 4.31427635,25.0982893 4.62337132,24.2272858 L4.62317765,24.2282547 C4.67837318,24.0747875 4.73492439,23.9238394 4.79205661,23.7738602 L4.79205661,23.7734727 C5.1207121,22.905182 5.48926331,22.0547183 5.91107337,21.2327391 C5.96007151,21.1368221 6.02068976,21.036836 6.07917765,20.9263862 L6.07898399,20.9267737 C6.51047747,20.1158394 6.98341601,19.3252512 7.50244767,18.5648913 L7.34247747,18.4556042 L7.50089832,18.5670228 C7.54602309,18.5026907 7.58010875,18.4435903 7.61264507,18.3968913 L7.61264507,18.3970851 C7.93258547,17.9366837 8.31159479,17.507092 8.67549795,17.0536664 L8.5244365,16.9323654 L8.35478287,16.8389675 C8.18396723,17.1505522 8.05149795,17.4708567 7.90547188,17.7725592 L7.90566555,17.7721716 C7.75092439,18.0907322 7.57817207,18.4063862 7.432727,18.7516872 C7.20632849,19.2903723 7.02873445,19.8426215 6.85230242,20.3902201 L6.85249609,20.3892512 C6.75798585,20.6783585 6.64004171,20.9678533 6.55347188,21.2831197 C6.3687121,21.957445 6.24069721,22.6492097 6.12507709,23.3401993 C6.09350912,23.5324208 6.0352149,23.7312304 6.00403426,23.9575557 L6.00422793,23.9569744 C5.87756872,24.8779709 5.80746071,25.8169882 5.80746071,26.7738325 C5.80746071,29.1645869 6.25599702,31.4400471 7.00181453,33.5728913 C7.45228752,34.8649606 7.98661899,36.1184692 8.67472328,37.2880747 L8.67491695,37.2884623 C10.0406674,39.5988014 11.8408164,41.6200332 13.9641981,43.2401578 L13.9638108,43.239964 C14.6606302,43.7736111 15.3921162,44.2592028 16.1540082,44.7019709 L16.2512298,44.5345522 L16.2512298,44.3407806 L16.2496804,44.3407806 C16.1623359,44.3407806 16.0862242,44.3987183 16.062984,44.4826215 C16.0397438,44.5667183 16.0751851,44.6556595 16.1499412,44.7006145 L16.172213,44.7141785 L16.1766674,44.7170851 L16.1818965,44.7207668 C17.694254,45.7289606 19.325524,46.588919 21.0166376,47.2657633 L21.017025,47.2657633 L21.0886823,47.0857495 Z\"\n\t\t\t\t\t\t\t      id=\"Fill-41\" fill=\"#009EDD\" mask=\"url(#mask-2)\"/>\n\t\t\t\t\t\t\t<path d=\"M45.0984864,15.0388678 L44.9195367,15.1126948 C46.2064641,18.2331931 46.9007657,21.6267156 46.9007657,25.116155 C46.9007657,25.3203903 46.8879836,25.5137744 46.8825609,25.7290547 L46.8825609,25.7298298 C46.8755888,26.0718367 46.8744268,26.4086118 46.855641,26.7413176 L46.8552536,26.7521689 L46.8552536,26.7711585 C46.8552536,30.4026325 45.8973691,33.8180512 44.2248477,36.7688055 C44.1105832,36.9714907 43.9618458,37.1675875 43.8237601,37.3908125 C40.6778086,42.507546 35.3494063,46.1394076 29.1109557,46.9350339 C28.9523412,46.9559612 28.763127,46.951117 28.5636484,46.9722381 L28.5648104,46.9720443 C27.9991047,47.029982 27.4345609,47.0824941 26.8611084,47.0937329 C26.7611754,47.0956706 26.6788663,47.1741481 26.6717006,47.2737467 C26.6647285,47.3735391 26.7354175,47.462674 26.8339948,47.4787571 C27.17214,47.5334007 27.5114473,47.5835875 27.8528849,47.6244734 L27.8534659,47.6244734 C28.108721,47.6541204 28.3719166,47.6996567 28.6473132,47.7238782 C29.2740246,47.7789093 29.8999613,47.8052623 30.527641,47.8128194 L30.5266726,47.8128194 C30.6250562,47.8141758 30.7371903,47.8267709 30.8636559,47.8271585 C33.3156931,47.8271585 35.7586279,47.457636 38.1142182,46.7428125 L38.1146056,46.7426187 C38.8025162,46.5321827 39.4865534,46.2983003 40.1603263,46.0268263 C40.4355292,45.9159889 40.7078272,45.7958505 40.9795441,45.676681 L40.9843858,45.6745495 C41.0568179,45.6404457 41.1337043,45.6090547 41.2152387,45.573982 L41.2200804,45.5718505 C43.7714696,44.3931377 46.1648253,42.7555737 48.2634175,40.6498574 L48.2630302,40.650245 C51.4618533,37.4553384 53.5844603,33.5938574 54.6537043,29.4725287 L54.4662331,29.4236983 L54.6517676,29.4793107 C55.1926838,27.6727779 55.458978,25.8040443 55.458978,23.9384111 C55.458978,23.6489163 55.4494883,23.3600028 55.4394175,23.071283 L55.4394175,23.0693453 C55.2298682,18.4420789 53.3646466,13.8820512 49.8323263,10.3482381 L49.8319389,10.3478505 C48.7020767,9.2232 47.4713132,8.26693702 46.1669557,7.47789896 C43.5694734,5.91028651 40.6828439,5.0102173 37.7528328,4.78272941 C37.6695553,4.77633495 37.5915069,4.82419654 37.5591642,4.90131765 C37.5270153,4.97863253 37.5479315,5.0675737 37.6110674,5.12241107 L37.6558048,5.16445952 L37.6683933,5.17608581 C38.2617937,5.67369135 38.8336968,6.19454948 39.375194,6.74098547 C41.7495702,9.13871557 43.6302853,11.9885149 44.9195367,15.1126948 L45.0984864,15.0388678 L45.2774361,14.9650408 C43.9693989,11.7945495 42.0606019,8.90250796 39.650397,6.46815502 C39.0994101,5.91222422 38.5185981,5.38342145 37.9172574,4.87884014 L37.7927285,5.02746298 L37.9296521,4.89046644 C37.9095106,4.87012042 37.8878197,4.84958062 37.8647732,4.82942837 L37.7379203,4.97591972 L37.7230078,5.16911003 C40.5939501,5.39214118 43.4220916,6.27399585 45.9665088,7.80963599 C47.244721,8.58278478 48.450695,9.51967059 49.5588663,10.6226187 L49.558479,10.6222311 C53.0203039,14.0860927 54.8465981,18.5515599 55.0522741,23.0869785 L55.0522741,23.0850408 C55.0625385,23.3729855 55.071641,23.6572484 55.071641,23.9384111 C55.071641,25.7672277 54.8105758,27.5983696 54.2806987,29.3680858 L54.278762,29.3750616 C53.2259799,33.4328332 51.1382331,37.2307571 47.9893765,40.3758644 L47.9891829,40.3762519 C45.923708,42.4486394 43.5688924,44.0598505 41.0575926,45.2199612 L41.1389333,45.3959059 L41.0624343,45.2178298 C40.9855479,45.2509647 40.9042071,45.2839059 40.8193803,45.3240166 L40.9018831,45.4991862 L40.824222,45.3216913 C40.551924,45.4410547 40.2831121,45.5594491 40.0156559,45.6671862 C39.3546652,45.9338159 38.6812797,46.1640166 38.0013095,46.3721273 L38.0016968,46.3719336 C35.6819352,47.0757121 33.2767657,47.4396152 30.8636559,47.4396152 C30.7658533,47.4400028 30.6564305,47.4276014 30.5332574,47.4252761 L30.5324827,47.4252761 C29.9123561,47.417719 29.2961028,47.3917536 28.6810115,47.3378851 C28.4269184,47.3157952 28.1675963,47.2712277 27.898397,47.2396429 L27.898978,47.2396429 C27.5645125,47.1995322 27.2304343,47.150508 26.895775,47.0960581 L26.8649818,47.2875045 L26.8686615,47.4812761 C27.4608998,47.4696498 28.0364827,47.4155875 28.6041251,47.3576498 L28.6052872,47.3574561 C28.7697117,47.3390478 28.9606689,47.3442796 29.1597601,47.3196706 C35.5188663,46.5083488 40.9489445,42.8065356 44.1535777,37.5940789 C44.2777192,37.3919751 44.4299426,37.1923903 44.5618309,36.9596706 C46.2663076,33.9529163 47.2425907,30.4712277 47.2425907,26.7711585 L47.2425907,26.7521689 L47.0489222,26.7521689 L47.242397,26.7630201 C47.2617639,26.4167502 47.2629259,26.0755183 47.269898,25.7377744 L47.2697043,25.7385495 C47.2747397,25.5337329 47.2879091,25.3366671 47.2881028,25.116155 C47.2881028,21.5751723 46.5835367,18.131463 45.2774361,14.9650408 L45.0984864,15.0388678 Z\"\n\t\t\t\t\t\t\t      id=\"Fill-42\" fill=\"#009EDD\" mask=\"url(#mask-2)\"/>\n\t\t\t\t\t\t\t<path d=\"M23.9140931,6.41451903 L23.9402384,6.60654671 C24.0118957,6.59608304 24.1102793,6.59898962 24.2237691,6.58794464 L24.2258994,6.58775087 C24.9304655,6.50752941 25.6352253,6.44687889 26.3492812,6.44222837 L26.3479255,6.44222837 C26.3947933,6.4420346 26.4472775,6.43912803 26.5261006,6.43912803 C27.3015493,6.43912803 28.0628603,6.5007474 28.8166182,6.58775087 L28.8197169,6.58813841 C28.9355307,6.59898962 29.0374004,6.59608304 29.1131248,6.60654671 L29.1384953,6.41451903 L29.1003426,6.60441522 L29.1307486,6.61061592 L29.1443054,6.6127474 C29.8494525,6.70207612 30.5414302,6.83849135 31.2250801,7.00145329 L31.2256611,7.00164706 C31.4447002,7.05299654 31.6631583,7.11926644 31.8899441,7.18127336 C32.3630764,7.31013149 32.8274935,7.45100346 33.2839702,7.61357785 L33.2849385,7.6139654 C33.5208268,7.69670588 33.7551657,7.78448443 33.9885363,7.87575087 L33.988149,7.87555709 C34.4471434,8.05634602 34.8962607,8.25631834 35.3405363,8.47043599 L35.3387933,8.4696609 C35.5357542,8.56654671 35.7313594,8.64986851 35.9099218,8.74326644 C36.522108,9.06279585 37.1186071,9.40693426 37.6916723,9.7822699 L37.7978026,9.62008304 L37.6885736,9.78013841 C37.7747561,9.83885121 37.8632626,9.91035294 37.9641639,9.98069204 L37.9653259,9.98146713 C38.4467858,10.3106851 38.9133333,10.6555986 39.362257,11.0233772 L39.3630317,11.0241522 C39.532879,11.1619239 39.6974972,11.3097716 39.8690875,11.4593633 L39.8694749,11.4597509 C40.2364767,11.7785052 40.5914711,12.1112111 40.9348454,12.4576747 L40.9358138,12.4586436 C41.0950093,12.6167612 41.2503315,12.7727474 41.4008119,12.9347405 C41.7745922,13.335654 42.1311359,13.754782 42.4712179,14.184955 L42.4710242,14.1845675 C42.5663091,14.305481 42.6617877,14.4126367 42.7444842,14.520955 L42.7440968,14.5201799 C43.1614525,15.0710727 43.5513073,15.640955 43.9117244,16.23409 C43.9636276,16.3195433 44.0718883,16.3513218 44.1617505,16.3077232 C44.2516127,16.2641246 44.2936387,16.1592941 44.2585847,16.0655087 C44.2332142,15.9980761 44.2091993,15.9223114 44.178406,15.8434464 C43.9967449,15.3803322 43.7891322,14.9313633 43.5826816,14.4874325 L43.5830689,14.4880138 C43.4380112,14.1735225 43.2974078,13.8466298 43.1320149,13.528263 L43.1322086,13.5288443 C42.9,13.0791003 42.6430019,12.6485398 42.3871657,12.2214671 L42.3881341,12.2230173 C42.2177058,11.9329412 42.0536685,11.6289135 41.8619367,11.3355433 C41.5725959,10.892 41.2563352,10.4755848 40.9478212,10.0603322 C40.7611248,9.81036678 40.5850801,9.54083045 40.3753371,9.28214533 L40.3759181,9.28292042 C39.9707635,8.77892042 39.5330726,8.30708651 39.0944134,7.84261592 C38.9696909,7.71143253 38.8511657,7.55564014 38.702622,7.40624221 L38.7030093,7.40643599 C38.0635158,6.76253287 37.3787039,6.16532872 36.6733631,5.59680277 C36.2740186,5.27475433 35.8731248,4.94805536 35.4439553,4.64635294 L35.4445363,4.64674048 C33.1515009,3.02119031 30.5408492,1.76884429 27.6697132,1.004609 L27.6702942,1.004609 C25.5567896,0.436276817 23.4312775,0.161896194 21.334622,0.161896194 C19.1130503,0.161896194 16.9193669,0.469411765 14.8012142,1.05576471 L14.8529236,1.24256055 L14.8079926,1.05402076 C12.6913892,1.55821453 10.6778175,2.41332872 8.86023836,3.57944637 L8.86043203,3.5792526 C7.24601117,4.61205536 5.78207076,5.89133564 4.52884171,7.38008304 L4.52903538,7.37988927 C2.76200372,9.4735917 1.41290875,11.9761522 0.661862197,14.7943668 L0.662055866,14.7937855 C0.211389199,16.460609 9.68342644e-05,18.132083 9.68342644e-05,19.775654 C9.68342644e-05,22.6800969 0.663605214,25.5027682 1.88294227,28.0522215 C1.91915829,28.1281799 2.0003054,28.1719723 2.08358287,28.1605398 C2.167054,28.149301 2.23348231,28.0853564 2.24820112,28.0024221 C2.28557914,27.7896609 2.35878585,27.5683737 2.40913966,27.3215087 C2.50132588,26.8626574 2.61326629,26.4103945 2.73101676,25.9528997 L2.73082309,25.9532872 C2.88246555,25.3711972 3.04882682,24.7962768 3.23862197,24.2275571 L3.23842831,24.2279446 C3.38890875,23.7807197 3.54945996,23.3396955 3.72356797,22.9027405 C3.94628678,22.3440969 4.18895345,21.7972734 4.44982495,21.2554879 C4.65162756,20.835391 4.85362384,20.4226574 5.0753743,20.0192249 L5.07556797,20.0188374 C5.37149348,19.4768581 5.69763128,18.9523183 6.03403352,18.427391 L6.03364618,18.4279723 C6.27573184,18.0530242 6.51084544,17.6827266 6.76610056,17.3263806 C7.1480149,16.7935087 7.56498324,16.2848581 7.99163501,15.7762076 L7.991054,15.7765952 C8.25851024,15.4601661 8.50621229,15.1423806 8.7775419,14.8490104 C9.26694227,14.3192388 9.79681937,13.8227958 10.3361862,13.3279031 C10.6011248,13.0841384 10.8412737,12.8345606 11.1000149,12.6154048 L11.0998212,12.6155986 C11.7422197,12.0726505 12.428581,11.573301 13.1327598,11.0875156 L13.1341155,11.0867405 C13.3448268,10.9385052 13.5280372,10.7817439 13.7203501,10.6577301 L13.7209311,10.6573426 C14.6422123,10.0574256 15.6024209,9.50556401 16.6075605,9.01977855 L16.6176313,9.01454671 C18.836298,7.77595848 21.3106071,6.93847751 23.9383017,6.60674048 L23.9402384,6.60654671 L23.9140931,6.41451903 L23.8898845,6.22229758 C21.2116425,6.56042907 18.6896909,7.41399308 16.4289981,8.67622145 L16.5233147,8.84538408 L16.4390689,8.67098962 C15.4174674,9.16452595 14.443121,9.72471972 13.5096387,10.3327751 L13.5102197,10.3323875 C13.2890503,10.4755848 13.1023538,10.6360277 12.9115903,10.7693426 L12.912946,10.7685675 C12.2035382,11.2578408 11.5067188,11.7643599 10.8497952,12.3197093 L10.8496015,12.3197093 C10.5709125,12.5563045 10.3274711,12.8099516 10.0743464,13.0424775 C9.5332365,13.5391142 8.99541899,14.0425329 8.49304283,14.5860623 C8.20738175,14.8953218 7.95638734,15.2179516 7.69532216,15.526436 L7.69474115,15.5270173 C7.26654004,16.0379931 6.84298696,16.5540069 6.45119553,17.1004429 C6.18761266,17.468609 5.9492067,17.844526 5.70828305,18.2175363 L5.70789572,18.2183114 C5.36975047,18.7461453 5.03857728,19.2782422 4.7356797,19.8330104 L4.73606704,19.8326228 C4.50831285,20.2467128 4.30321788,20.6658408 4.1006406,21.0874879 C3.83667039,21.6362491 3.59013035,22.1914048 3.36373184,22.7591557 C3.18691248,23.2032803 3.02384358,23.6510865 2.87123277,24.1043183 L2.87103911,24.1048997 C2.67814525,24.6835017 2.50926629,25.2667543 2.35607449,25.8556263 L2.35588082,25.8562076 C2.23754935,26.3160277 2.12367225,26.7750727 2.02935568,27.2449689 C1.9861676,27.461218 1.91160521,27.6850242 1.86686778,27.9347958 L2.05763128,27.9685121 L2.23212663,27.8849965 C1.03738547,25.3865052 0.387433892,22.6208028 0.387433892,19.775654 C0.387433892,18.1654118 0.594271881,16.5282353 1.0360298,14.8949343 L1.03622346,14.8943529 C1.77235754,12.132526 3.09337058,9.68170242 4.82496089,7.62985467 L4.82515456,7.6296609 C6.0532067,6.1709481 7.48732216,4.91763322 9.06901304,3.90595156 L9.0692067,3.90575779 C10.8499888,2.76328028 12.8232775,1.92521799 14.8976611,1.43090657 L14.9044395,1.42916263 C16.9900559,0.852110727 19.148879,0.549439446 21.334622,0.549439446 C23.3975791,0.549439446 25.4888119,0.819363322 27.5695866,1.37897578 L27.5699739,1.37897578 C30.3959851,2.131391 32.9640298,3.363391 35.2206555,4.96297578 L35.2212365,4.96355709 C35.6354935,5.25460208 36.0301899,5.57568166 36.4303091,5.89850519 C37.1279032,6.46083045 37.801676,7.04892734 38.4281937,7.67965398 L38.428581,7.68004152 C38.5533035,7.80444291 38.6700857,7.95752249 38.8132067,8.1090519 C39.2499292,8.571391 39.6804544,9.03586159 40.0739888,9.52591003 L40.0745698,9.52649135 C40.2680447,9.76444291 40.4415717,10.0291349 40.6371769,10.2918893 C40.9472402,10.7090796 41.2582719,11.1191003 41.5377356,11.5475294 C41.7178473,11.8226851 41.8791732,12.1212872 42.0540559,12.419308 L42.0548305,12.4208581 C42.310473,12.8475433 42.5630168,13.2709343 42.7880596,13.7067266 L42.7884469,13.7071142 C42.9451248,14.0086228 43.0834041,14.3298962 43.2311732,14.6503945 L43.2315605,14.6509758 C43.4378175,15.0941315 43.6417505,15.5361246 43.8177952,15.9850934 C43.8425847,16.0476817 43.8662123,16.1218962 43.8958436,16.2011488 L44.0771173,16.1333287 L44.2427039,16.0327612 C43.875121,15.4276125 43.4777132,14.8468789 43.0526108,14.2861038 L43.0520298,14.2851349 C42.9573259,14.1617024 42.8604916,14.0533841 42.7752775,13.944872 L42.7750838,13.9444844 C42.4291918,13.5071419 42.0658696,13.0800692 41.6843426,12.6708235 C41.5278585,12.502436 41.3688566,12.3427682 41.2086927,12.1836817 L41.2098547,12.1846505 C40.8598957,11.8315986 40.4979292,11.4923045 40.1231806,11.1669619 L40.123568,11.1671557 C39.9548827,11.0202768 39.7867784,10.8691349 39.6068603,10.7230311 L39.607635,10.7236125 C39.1488343,10.3475017 38.6731844,9.996 38.1839777,9.6613564 L38.184946,9.66213149 C38.0995382,9.60303114 38.0100633,9.53075433 37.906838,9.46002768 L37.9037393,9.45789619 C37.318473,9.07480969 36.7107412,8.72408304 36.0890652,8.39951557 C35.8921043,8.29681661 35.6937877,8.21271972 35.5101899,8.1220346 L35.5086406,8.12125952 C35.0573929,7.90384775 34.5995605,7.69980623 34.1299143,7.5149481 L34.129527,7.51475433 C33.8926704,7.42213149 33.6538771,7.33280277 33.4131471,7.24812457 L33.4139218,7.24851211 C32.945825,7.08186851 32.4719181,6.93808997 31.9918138,6.80729412 C31.772,6.74741869 31.5492812,6.67979239 31.3143613,6.6243737 L31.3149423,6.62456747 C30.6212216,6.45908651 29.9154935,6.31995848 29.1929162,6.2283045 L29.1687076,6.42052595 L29.2066667,6.23062976 L29.1764544,6.22462284 L29.1636723,6.22249135 C29.0445661,6.20737716 28.9392104,6.2112526 28.8580633,6.2023391 L28.8388901,6.39514187 L28.8609683,6.20272664 C28.0983017,6.11475433 27.3220782,6.05158478 26.5261006,6.05158478 C26.4391434,6.05158478 26.3758138,6.05468512 26.3479255,6.05468512 L26.3467635,6.05468512 C25.6123724,6.05952941 24.8938622,6.1217301 24.1821304,6.20272664 L24.2040149,6.39514187 L24.1842607,6.20253287 C24.106406,6.21105882 24.0045363,6.20737716 23.8879479,6.22249135 L23.9140931,6.41451903 L23.8898845,6.22229758 L23.9140931,6.41451903 Z\"\n\t\t\t\t\t\t\t      id=\"Fill-43\" fill=\"#009EDD\" mask=\"url(#mask-2)\"/>\n\t\t\t\t\t\t\t<path d=\"M45.7148559,26.7139958 L45.9085244,26.7134145 C45.8934182,21.3261758 43.6712655,16.4656083 40.111638,12.9626048 C37.165165,10.0643626 33.3055449,8.09137993 28.9935151,7.54300623 C28.1828186,7.43914464 27.3616641,7.38372595 26.526178,7.38372595 C26.4944164,7.38372595 26.4444499,7.38372595 26.3596231,7.38740761 L26.3677572,7.58098547 L26.3660142,7.38721384 C25.5803009,7.3936083 24.8149229,7.44805813 24.0578726,7.54300623 L24.057679,7.54300623 C21.5589676,7.86040415 19.2118987,8.65002353 17.0666324,9.84753218 L17.0664387,9.84772595 C11.1419248,13.1656775 7.13918361,19.4961965 7.13918361,26.7738713 C7.13918361,28.3151308 7.35434935,29.8003903 7.69171993,31.2329439 L7.69171993,31.2333315 C8.14509795,33.1435322 8.84734004,34.9595599 9.82013706,36.6103003 C10.3254182,37.4652208 10.9108782,38.2610408 11.5335225,39.0217882 C13.0152804,40.8287087 14.8047777,42.3812069 16.8642488,43.5744526 L16.8648298,43.5748401 C17.3687553,43.8647225 17.8879806,44.1278644 18.4163084,44.3714353 L18.4161147,44.3712415 C20.1713326,45.1835322 22.0650235,45.7400443 24.0563233,45.9958228 L24.0557423,45.9956291 C24.8714741,46.1031723 25.6903047,46.1614976 26.526178,46.1614976 C27.3620514,46.1614976 28.1804946,46.1031723 28.9962264,45.9956291 L28.9952581,45.9958228 C32.0885318,45.6034353 34.9565691,44.4803349 37.4155784,42.8063419 C39.8757497,41.1333176 41.9315412,38.9061066 43.4024536,36.3054976 C44.9969266,33.4861204 45.9118168,30.2412208 45.9118168,26.7938298 L45.9118168,26.7548817 L45.9112358,26.7395737 L45.9079434,26.6986879 L45.7148559,26.7139958 L45.9085244,26.7134145 L45.7148559,26.7139958 L45.5217683,26.7293038 L45.5244797,26.7624388 L45.5244797,26.7938298 C45.524286,30.1724318 44.6283754,33.350674 43.0652767,36.1144388 C41.6239955,38.663117 39.6088745,40.8465356 37.197895,42.4858436 C34.7876901,44.1263142 31.9777534,45.226937 28.9466473,45.6111862 L28.9458726,45.6113799 C28.1452469,45.7165979 27.3440402,45.7739543 26.526178,45.7739543 C25.7083158,45.7739543 24.9069155,45.7165979 24.1060961,45.6113799 L24.1055151,45.6111862 C22.1539173,45.3606394 20.2989601,44.8157536 18.5787963,44.0197398 L18.5784089,44.019546 C18.0587963,43.7800443 17.5500291,43.5217467 17.0579173,43.2386464 L17.0583047,43.2390339 C15.0408596,42.0700097 13.2869974,40.5485149 11.8329341,38.775892 C11.2188112,38.0258021 10.6455523,37.2458713 10.1536343,36.4134284 C9.20272179,34.7996983 8.51384283,33.0202934 8.06879255,31.143809 L8.06879255,31.1440028 C7.73665102,29.7337329 7.52652067,28.2790893 7.52652067,26.7738713 C7.52652067,19.6411377 11.4486957,13.4387017 17.2556529,10.1858574 L17.2554592,10.1860512 C19.3590868,9.01198893 21.6573512,8.23864637 24.1064834,7.92764291 L24.1060961,7.92764291 C24.8493959,7.83424498 25.5992804,7.78095779 26.3693065,7.77475709 L26.3756976,7.77456332 C26.4551017,7.7712692 26.4953847,7.7712692 26.526178,7.7712692 C27.3444276,7.7712692 28.1489266,7.82552526 28.9445169,7.92744913 C33.1695896,8.46477785 36.9511613,10.3974561 39.8401147,13.2389232 C43.3298279,16.6739128 45.5060812,21.4344941 45.5211873,26.7145772 L45.5217683,26.7293038 L45.7148559,26.7139958 Z\"\n\t\t\t\t\t\t\t      id=\"Fill-44\" fill=\"#009EDD\" mask=\"url(#mask-2)\"/>\n\t\t\t\t\t\t\t<path d=\"M35.0666696,24.378137 L30.2421929,24.3742616 C30.2013289,24.960227 30.3506473,25.4994934 30.6518019,25.8779294 C30.6856939,25.8893619 30.7155188,25.8980817 30.7474741,25.9052512 C30.0221855,25.7031474 29.2337609,25.5366976 28.4073773,25.3747045 C27.5687926,25.2080609 26.7811426,25.1206699 26.1697311,24.9726284 C25.4558689,24.7955211 24.978476,24.5428429 24.9414853,23.9913689 C24.8795114,22.4415834 27.3944909,22.0172235 28.6118912,23.3422339 C28.7060142,23.4453204 28.7947143,23.5569329 28.8733438,23.6792028 L29.3462823,23.6792028 L33.9075635,23.683272 L33.9075635,23.6642824 C33.8703791,23.5069398 33.8279657,23.3600609 33.7801296,23.2135696 C33.7656045,23.1670644 33.7504983,23.1234657 33.7346175,23.0732789 C33.7032432,22.978137 33.6676082,22.883964 33.6310048,22.7926976 C33.6079583,22.7446422 33.5872358,22.6946491 33.5696119,22.6448498 C33.5299099,22.5580401 33.4898205,22.4749121 33.4487628,22.3904277 C33.4259099,22.3507045 33.4078987,22.307881 33.3834965,22.2664138 C33.3304313,22.1621647 33.2729117,22.0679917 33.2142302,21.9730436 C33.201448,21.9552166 33.1929266,21.9373896 33.1813065,21.9199502 C33.1088745,21.8079502 33.0331501,21.7009882 32.9558764,21.6010021 C32.9374778,21.5767806 32.915787,21.5494588 32.8948708,21.5260125 C32.8352209,21.4517979 32.7744089,21.3770021 32.7116603,21.3076318 C32.6870644,21.2762408 32.6572395,21.2496941 32.6312879,21.2190782 C32.5695076,21.1555211 32.5092767,21.096227 32.4492395,21.0336388 C32.4178652,21.0078671 32.3907516,20.9815142 32.3644127,20.9572927 C32.291787,20.895092 32.2203233,20.8319225 32.1507963,20.7730159 C32.1331724,20.7608083 32.117098,20.7472443 32.1031538,20.7342616 L32.1031538,20.7329052 L32.1139993,20.7373619 C32.5274816,20.9243516 32.9305058,21.1646284 33.3100961,21.4723377 C33.3803978,21.5267875 33.4508931,21.5882131 33.5204201,21.6525453 C33.5502451,21.6773481 33.5775523,21.7038948 33.6050533,21.7312166 C33.6676082,21.7895419 33.7270644,21.8499986 33.786908,21.9131682 C33.8147963,21.9437841 33.8417162,21.9714934 33.8688298,22.0009467 C33.9325467,22.0730298 33.9947143,22.144919 34.0539769,22.2212651 C34.0717944,22.2485869 34.0925169,22.2693204 34.1153698,22.2978048 C34.1909006,22.3950782 34.2646883,22.5020401 34.3408,22.6140401 C34.3493214,22.6334173 34.3615225,22.6504692 34.3737236,22.6675211 C34.4310495,22.7624692 34.4877944,22.8589675 34.5437646,22.9589536 C34.5642935,23.002746 34.585597,23.0436318 34.6063196,23.0845176 C34.6473773,23.1674519 34.6870793,23.2552304 34.7254257,23.3422339 C34.7463419,23.3885453 34.7664834,23.4358256 34.788368,23.4871751 C34.8253587,23.5807668 34.8592507,23.6749398 34.894692,23.7710505 C34.9059248,23.8161993 34.9260663,23.862317 34.9394294,23.9107599 C34.9864909,24.0545384 35.0281296,24.203355 35.0666696,24.3606976 L35.0666696,24.378137 Z M12.3160402,25.2708429 C13.0020142,23.8270505 14.4742823,22.8310644 16.178759,22.8310644 C17.2263121,22.8310644 18.184584,23.2120194 18.9302078,23.8365453 C19.39753,24.229708 19.7771203,24.7180125 20.0434145,25.2754934 L20.0434145,25.2803377 L13.8835933,25.2803377 L12.3160402,25.2803377 L12.3160402,25.2708429 Z M43.4031315,27.1037287 C42.5397572,26.3945246 41.2414034,25.9759779 39.7540291,25.6411405 L39.5777907,25.605099 C39.2208596,25.5252651 38.8554071,25.4526007 38.4767851,25.3787737 C37.6407181,25.2123239 36.8565542,25.1222201 36.2422376,24.9757287 C35.5289564,24.8001716 35.0507888,24.5457495 35.0118615,23.9969882 C34.9541482,22.4464277 37.4714518,22.0222616 38.6861408,23.3490159 C38.7816194,23.4490021 38.8666399,23.560227 38.947206,23.683272 L39.4205318,23.683272 L43.9761966,23.6875349 L43.9761966,23.6693204 C43.6599359,22.3098187 42.9855821,21.3802962 42.1832134,20.7422062 C41.8406138,20.4746076 41.4767106,20.2533204 41.1064164,20.0798948 L41.0789155,20.0690436 C40.755489,19.9169329 40.4250905,19.7998948 40.1024387,19.7049467 L40.0627367,19.6886699 C40.0389155,19.6836318 40.0114145,19.6772374 39.986625,19.6708429 L39.9856566,19.6708429 C39.8806883,19.6406145 39.7712655,19.6129052 39.6684276,19.5921716 C39.6490607,19.5863585 39.6285318,19.5815142 39.6095523,19.5766699 C39.5268559,19.5584554 39.4429974,19.5421785 39.3593326,19.5274519 C39.2963903,19.5148567 39.230543,19.503618 39.1718615,19.4921855 L39.1672134,19.4921855 C38.3137162,19.3487945 37.6124425,19.360227 37.3517646,19.360227 C34.6756529,19.360227 33.2101631,19.9086007 32.0959881,20.7309675 L32.0930831,20.7309675 C30.2878987,19.3071336 27.8376045,19.360227 27.2891352,19.360227 C24.0967032,19.360227 22.623854,20.1397702 21.4227218,21.2320609 C21.8003754,21.4663308 22.1555635,21.7312166 22.4844127,22.0274934 C22.5783419,22.1119779 22.6674294,22.1962685 22.7586473,22.2826907 L22.7702674,22.2978048 C23.0536045,22.572573 23.3187367,22.8760194 23.5544313,23.1984554 L23.5635337,23.2087253 C23.6390644,23.3083239 23.7087851,23.410054 23.7785058,23.5133343 C23.7936119,23.5406561 23.8123978,23.5656526 23.8265356,23.591618 C23.8811501,23.6749398 23.9346026,23.7563239 23.9836007,23.8392581 C24.0045169,23.8774311 24.0262078,23.9159917 24.047705,23.949708 C24.0905058,24.0266353 24.1342749,24.1029813 24.1751389,24.1802962 C24.1985728,24.2225384 24.2175523,24.2653619 24.2396305,24.310317 C24.2779769,24.3808498 24.3136119,24.4523516 24.3484723,24.5273412 C24.3691948,24.5742339 24.3916603,24.6234519 24.4158689,24.6728637 C24.4458875,24.7414588 24.4747441,24.8133481 24.5061184,24.8836872 C24.5247106,24.935618 24.5442711,24.9875488 24.5663493,25.0400609 C24.5923009,25.1092374 24.6188335,25.1805453 24.6442041,25.2532097 C24.6631836,25.3041716 24.6794518,25.3644346 24.698625,25.4157841 C24.7210905,25.486317 24.7414257,25.5597564 24.7648596,25.629708 C24.7824834,25.6845453 24.7985579,25.7409329 24.8123084,25.797708 C24.8328372,25.8699848 24.8518168,25.9426491 24.8659546,26.0145384 C24.8795114,26.071701 24.8944238,26.1292512 24.9044946,26.1891266 C24.9232804,26.2621785 24.9345132,26.335618 24.9490384,26.4111889 C24.9600775,26.4691266 24.9713102,26.5259017 24.978476,26.5853896 C24.9922264,26.6628983 25.0017162,26.741182 25.0150793,26.8204346 C25.0179844,26.875272 25.0296045,26.9316595 25.0327032,26.9861093 C25.0433549,27.0754381 25.0476156,27.1636042 25.0551687,27.2517702 C25.0590421,27.2978879 25.0617534,27.3471059 25.0646585,27.3926422 C25.0725989,27.5296388 25.0766659,27.6608221 25.0766659,27.7989813 L25.0766659,27.8061509 L25.0766659,27.807701 C25.0766659,27.9016803 25.0689192,27.9906215 25.0646585,28.0799502 C25.0617534,28.098746 25.0617534,28.1192858 25.0590421,28.1404069 L25.0617534,28.1404069 C27.238394,28.5779433 28.9868335,28.7273412 29.3491873,29.4650298 C29.3993475,29.5654035 29.4293661,29.6799225 29.4252991,29.8041301 C29.3943121,30.7082685 28.6362935,31.1950228 27.6077199,31.1816526 C27.2418801,31.1816526 26.9343345,31.1605315 26.6686212,31.1086007 C26.2028484,31.0128775 25.8714816,30.8229813 25.5786547,30.4933758 C25.4159732,30.3071612 25.2662674,30.0781232 25.1132693,29.7973481 L23.4409415,29.7973481 L19.5131501,29.7973481 C18.7299546,30.7722131 17.527854,31.3963516 16.178759,31.3963516 C15.616152,31.3963516 15.0763978,31.2843516 14.583124,31.0843792 C13.4375747,30.6253343 12.5356603,29.6853481 12.1341855,28.5112858 L12.1341855,28.4934588 L23.7974853,28.4934588 C23.836219,28.2822478 23.8631389,28.067355 23.8832804,27.8497495 C23.9071017,27.6079225 23.9177534,27.3649329 23.9177534,27.1136111 L23.9177534,27.1037287 C23.9177534,26.969445 23.9140737,26.8316734 23.9071017,26.6995211 C23.9071017,26.6510782 23.901098,26.6041855 23.8974182,26.555355 C23.8910272,26.4691266 23.8848298,26.3786353 23.873597,26.2908567 C23.8708857,26.2340817 23.8631389,26.181182 23.8540365,26.1236318 C23.8428037,26.0459294 23.836219,25.966483 23.8218875,25.8893619 C23.8123978,25.8294865 23.801165,25.7750367 23.7895449,25.717099 C23.7785058,25.6411405 23.7647553,25.566926 23.7494555,25.4927114 C23.7347367,25.4351612 23.7205989,25.3787737 23.7083978,25.3204484 C23.6923233,25.2489467 23.6739248,25.1755073 23.6553326,25.1040055 C23.6400328,25.0460678 23.6222153,24.9920055 23.6059471,24.9340678 C23.5867739,24.8629536 23.5635337,24.7906768 23.5385505,24.7220817 C23.5238317,24.6647253 23.5058205,24.6135696 23.4845169,24.5579571 C23.4595337,24.4845176 23.4322264,24.4155349 23.4078242,24.3444208 C23.3900067,24.2948152 23.3679285,24.2399779 23.3456566,24.1899848 C23.3187367,24.1173204 23.2873624,24.0473689 23.2569564,23.9758671 C23.2335225,23.9254865 23.212219,23.8813066 23.1922711,23.8324761 C23.1570235,23.7563239 23.1190644,23.6855972 23.0805244,23.6129329 C23.0617385,23.571272 23.0394667,23.5259294 23.0177758,23.4834934 C22.9755561,23.4081163 22.9331426,23.3327391 22.8936343,23.2587183 C22.8711687,23.2182201 22.8492842,23.1806284 22.8262376,23.1459433 C22.7753028,23.0595211 22.723787,22.978137 22.6703345,22.8961716 C22.6525169,22.8723377 22.6368298,22.8438533 22.6193996,22.8173066 C22.5498726,22.7148014 22.4789899,22.6126837 22.4050086,22.5126976 L22.3993922,22.5047529 C22.1588559,22.182317 21.897597,21.8798394 21.6179397,21.6010021 L21.6003158,21.5847253 C21.5087106,21.5010159 21.4180737,21.4120747 21.3280179,21.3326284 C21.1324127,21.1555211 20.925381,20.9927529 20.7094406,20.8387045 C19.4376194,19.913445 17.872003,19.3681716 16.178759,19.3681716 C11.9023642,19.3681716 8.43995829,22.8359087 8.43995829,27.1136111 C8.43995829,30.1794657 10.2180291,32.8325869 12.8023419,34.0841578 C13.8233624,34.5817633 14.9681371,34.8604069 16.178759,34.8604069 C18.2188633,34.8604069 20.0751762,34.067881 21.4575821,32.773099 C21.4976715,32.7380263 21.5356305,32.7012097 21.5732022,32.6649744 C21.6959881,32.5456111 21.8156752,32.4256664 21.9270346,32.2973896 L21.9464015,32.2803377 C22.0668633,32.1414035 22.1830644,32.0022754 22.2979099,31.8577218 C22.3242488,31.8220678 22.348651,31.785445 22.3730533,31.7517287 C22.4557497,31.6437979 22.5374778,31.5321855 22.6126212,31.4197979 C22.6451575,31.3690298 22.6771128,31.3182616 22.7071315,31.2680747 C22.7753028,31.1665384 22.8368894,31.0609329 22.9011873,30.9543585 C22.9300439,30.8993273 22.9587069,30.8464277 22.9927926,30.7927529 C23.043921,30.6931543 23.0942749,30.591618 23.1417236,30.4933758 L24.599273,30.4933758 C24.5376864,30.6642824 24.4675784,30.8320886 24.3916603,30.9944692 C24.3691948,31.0469813 24.3436305,31.0958118 24.3201966,31.1458048 C24.2665505,31.261874 24.2101929,31.3740678 24.1478317,31.4856803 C24.1201371,31.5412927 24.0876007,31.5920609 24.0560328,31.6498048 C23.9942525,31.7561855 23.9328596,31.861791 23.8660439,31.9642962 C23.8346696,32.0131266 23.801165,32.0669952 23.7686287,32.1138879 C23.6932916,32.2274381 23.6140812,32.3394381 23.5306101,32.4477564 C23.5058205,32.4828291 23.4802562,32.518483 23.4550793,32.5539433 C23.3404276,32.6967529 23.2257758,32.8374311 23.1035709,32.9728775 L23.0874965,32.9949675 C22.972651,33.1205315 22.8539322,33.2412512 22.7332767,33.3571266 C22.693381,33.3976249 22.6525169,33.4313412 22.6178503,33.4668014 C22.5084276,33.5683377 22.4019099,33.6652235 22.2907441,33.7582339 C22.4789899,33.8729467 22.6877646,33.9822339 22.9168745,34.0841578 C23.9177534,34.5348706 25.3007404,34.8505246 27.1775821,34.8505246 L27.1820365,34.8505246 C27.5075933,34.8520747 30.1606585,34.8782339 32.1701631,33.5970159 C32.4230942,33.4346353 32.6661482,33.2542339 32.8948708,33.0478671 C32.9196603,33.0255834 32.9446436,33.0017495 32.9673028,32.977528 C33.0687851,32.8847114 33.163489,32.7886007 33.2523829,32.6872581 C33.2659397,32.6682685 33.2810458,32.6570298 33.2932469,32.6421093 C33.3941482,32.5287529 33.4898205,32.4033827 33.5779397,32.2766561 C33.6015672,32.2477841 33.6201594,32.2152304 33.6377832,32.1846145 C33.7092469,32.0824969 33.7772246,31.9708844 33.8417162,31.8546215 C33.8601147,31.8209052 33.8785132,31.7902893 33.8963307,31.7532789 C33.9705058,31.6112443 34.0375151,31.4647529 34.1002637,31.308573 C34.1103345,31.2760194 34.1217609,31.2407529 34.1331873,31.2093619 C34.1812171,31.0830228 34.2232432,30.9473827 34.2602339,30.8115488 C34.27534,30.7594242 34.2906399,30.7043931 34.3003233,30.651881 C34.3408,30.4955073 34.3737236,30.3331266 34.3956082,30.1631889 C34.3996752,30.1447806 34.4025803,30.1317979 34.4072283,30.114746 L34.4083903,30.0891682 C34.5226547,29.1296111 34.3489341,28.3864969 33.9596603,27.7974311 C33.9186026,27.7373619 33.8785132,27.6774865 33.8335821,27.621099 C33.7913624,27.5614173 33.7402339,27.5019294 33.686975,27.4447668 C33.6377832,27.391092 33.5858801,27.3339294 33.5339769,27.2854865 C33.47607,27.2306491 33.4177758,27.1763931 33.3571575,27.1287253 L33.3343047,27.1079917 C33.3834965,27.1287253 33.4355933,27.1521716 33.4847851,27.1750367 C33.5641892,27.2116595 33.6377832,27.2490574 33.7092469,27.2887806 C33.7855523,27.3292789 33.8622451,27.3709398 33.9325467,27.4122131 C34.0028484,27.4554242 34.0700514,27.4970851 34.136867,27.5420401 C34.2071687,27.5868014 34.2714667,27.6333066 34.3371203,27.6786491 C34.3996752,27.7274796 34.4583568,27.7739848 34.51607,27.8232028 C34.5774629,27.8739709 34.6349825,27.9255142 34.6899844,27.9803516 C34.7203903,28.0074796 34.7463419,28.0382893 34.7751985,28.067355 L34.7852693,28.0718118 C36.071422,28.3413481 37.2355635,28.5037287 38.084219,28.7228844 L38.3274667,28.7924484 C38.8908484,28.9598671 39.2822525,29.1641024 39.4276976,29.4702616 C39.4794071,29.5733481 39.5026473,29.6826353 39.4978056,29.8060678 C39.467206,30.7142754 38.7103493,31.199092 37.6780961,31.1870782 C37.3112879,31.1870782 37.008584,31.1646007 36.7428708,31.111701 C36.2759359,31.017528 35.9432134,30.8278256 35.6529043,30.4989952 C35.6312134,30.4736111 35.6108782,30.4478394 35.591124,30.4207114 C35.5833773,30.539881 35.5802786,30.6559502 35.5655598,30.7832581 L35.5636231,30.8082547 C35.5597497,30.8278256 35.55607,30.8429398 35.5545207,30.8596042 C35.5289564,31.0279917 35.4983568,31.1911474 35.4596231,31.3486837 C35.4449043,31.4035211 35.4340588,31.4535142 35.4177907,31.5075765 C35.3792507,31.6453481 35.3397423,31.7792443 35.2905505,31.9053896 C35.278543,31.9367806 35.2698279,31.9708844 35.2585952,32.0022754 C35.1973959,32.1588429 35.1278689,32.3076595 35.0552432,32.4487253 C35.0347143,32.4828291 35.0159285,32.518483 34.9977236,32.5514242 C34.9345877,32.6649744 34.8652544,32.7746491 34.7963084,32.8818048 C34.7751985,32.9120332 34.7558317,32.9414865 34.7366585,32.9728775 C34.6448596,33.0994104 34.551705,33.2234242 34.4502227,33.3377495 L34.4095523,33.3801855 C34.3191091,33.4830782 34.2232432,33.5778325 34.1250533,33.671618 C34.1022004,33.6954519 34.0781855,33.7181232 34.0510719,33.7419571 C33.8417162,33.9308844 33.6226771,34.1031474 33.3891128,34.2529329 C33.9249937,34.4546491 34.5532544,34.6203239 35.2890011,34.7234104 L35.8882115,34.7914242 C36.2902674,34.8232028 36.7872209,34.8557564 37.249895,34.8557564 L37.2595784,34.8557564 C37.7586622,34.8604069 43.8272655,34.9164069 44.4760551,30.1178464 C44.6497758,28.7197841 44.222543,27.7797979 43.4031315,27.1037287 L43.4031315,27.1037287 Z\"\n\t\t\t\t\t\t\t      id=\"Fill-45\" fill=\"#009EDD\" mask=\"url(#mask-2)\"/>\n\t\t\t\t\t\t</g>\n\t\t\t\t\t</g>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</svg>\n\t</a>\n\t</span>\n\t<span style=\"padding: 3rem;\">\n\t\t<p *ngIf=\"auth.loggedIn\">Welcome, {{auth.currentUser.firstName}} {{auth.currentUser.lastName}}</p>\n\t\t<a *ngIf=\"!auth.loggedIn\" style=\"margin: auto 2rem;\" routerLink=\"/login\">Login</a>\n\t\t<a *ngIf=\"!auth.loggedIn\" style=\"margin: auto 2rem;\" routerLink=\"/register\">Register</a>\n\t\t<a *ngIf=\"auth.loggedIn\" style=\"margin: auto 2rem;\" routerLink=\"/user\">Account settings</a>\n\t\t<a *ngIf=\"auth.loggedIn\" style=\"margin: auto 2rem;\" routerLink=\"/logout\">Logout</a>\n\t</span>\n</header>\n<div class=\"sidebar\">\n\t<a routerLink=\"/home\">Home</a>\n\t<a routerLink=\"/proposals\">Proposals</a>\n\t<mat-divider></mat-divider>\n\t<a routerLink=\"/contact\">Contact</a>\n\t<a href=\"http://localhost:8080/word/attachment\">Download proposal template</a>\n\t<mat-divider *ngIf=\"auth.loggedIn && auth.isAdmin\"></mat-divider>\n\t<a *ngIf=\"auth.loggedIn && auth.isAdmin\" routerLink=\"/admin\">Admin</a>\n\t<a routerLink=\"/test\">TestComponent</a>\n\t<a routerLink=\"/proposal\">Proposal</a>\n\t<a routerLink=\"/proposal-list\">Proposal list</a>\n\n\n</div>\n<div class=\"content\">\n\t<router-outlet></router-outlet>\n</div>\n<mat-toolbar *ngIf=\"!auth.loggedIn\" class=\"footer\">\n\t\t<span>\n\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"72\" height=\"39\"\n\t\t\t     viewBox=\"0 0 72 39\"><title>Page 1</title>\n\t\t\t<defs>\n\t\t\t\t<path id=\"a\" d=\"M0 38.865h71.903V.113H0z\"/>\n\t\t\t</defs>\n\t\t\t<g fill=\"none\" fill-rule=\"evenodd\">\n\t\t\t\t<path fill=\"#009EDD\" d=\"M42.4 9.83h2.434v.633H43.05v1.027h1.445v.624H43.05v1.005h1.784v.634H42.4\"/>\n\t\t\t\t<g transform=\"translate(0 .022)\">\n\t\t\t\t\t<path d=\"M46.898 13.13c.46 0 .77-.158.77-.663v-2.66h.665v2.66c0 .942-.5 1.316-1.435 1.316-.927 0-1.422-.374-1.422-1.316v-2.66h.664v2.66c0 .51.305.664.758.664zM50.61 10.44h-.81v1.317h.822c.458 0 .626-.27.626-.675 0-.43-.21-.64-.637-.64zm-.015 1.954H49.8v1.338h-.66V9.806h1.47c.892 0 1.32.368 1.32 1.265 0 .592-.214.932-.614 1.13l.614 1.532h-.727l-.535-1.338h-.073zM54.896 11.797c0-.914-.176-1.413-.89-1.413-.718 0-.892.5-.892 1.413 0 .914.17 1.356.89 1.356.722 0 .892-.43.892-1.356m-2.464 0c0-1.315.366-2.054 1.573-2.054 1.207 0 1.574.74 1.574 2.054 0 1.328-.368 1.998-1.575 1.998-1.207 0-1.573-.68-1.573-1.998M57.67 11.905c.444 0 .653-.29.653-.766 0-.47-.21-.693-.654-.693h-.75v1.458h.75zm-.75.64v1.187h-.66V9.806h1.415c.885 0 1.325.44 1.325 1.333 0 .89-.44 1.406-1.325 1.406h-.756zM59.626 9.806h2.435v.635h-1.78v1.028h1.443v.624H60.28v1.005h1.78v.635h-2.434M63.46 12.32H64.6l-.432-1.902h-.267l-.444 1.9zm-.07-2.514h1.303l.92 3.926h-.665l-.214-.77h-1.417l-.19.77h-.666l.93-3.926zM66.176 9.806h1.07l1.24 3.098h.097V9.806h.666v3.926h-1.044l-1.275-3.097h-.095v3.097h-.66M44.54 17.22s-.7-.09-1.025-.09c-.374 0-.6.137-.6.43 0 .342.153.416.768.643.7.26.99.46.99 1.14 0 .818-.45 1.193-1.237 1.193-.43 0-1.19-.148-1.19-.148l.066-.6s.716.096 1.118.096c.37 0 .58-.143.58-.523 0-.306-.136-.39-.654-.572-.846-.312-1.105-.51-1.105-1.215 0-.743.514-1.095 1.265-1.095.433 0 1.075.143 1.075.143l-.05.6zM46.8 18.646c.446 0 .655-.29.655-.766 0-.47-.21-.693-.655-.693h-.75v1.46h.75zm-.75.64v1.188h-.66v-3.928h1.416c.885 0 1.324.443 1.324 1.334 0 .89-.44 1.406-1.324 1.406h-.756zM49.23 19.06h1.145l-.435-1.9h-.265l-.445 1.9zm-.068-2.514h1.302l.92 3.928h-.665l-.216-.773H49.09l-.193.774h-.665l.93-3.928zM51.947 20.474v-3.928h.66v3.286h1.51v.642M54.743 20.474v-3.928h.66v3.286h1.51v.642M58.233 19.06h1.144l-.434-1.9h-.265l-.445 1.9zm-.068-2.514h1.302l.92 3.928h-.666l-.214-.773H58.09l-.19.774h-.665l.93-3.928zM60.47 16.546h2.82v.64h-1.073v3.288h-.664v-3.287H60.47\"\n\t\t\t\t\t      fill=\"#009EDD\"/>\n\t\t\t\t\t<mask id=\"b\" fill=\"#fff\">\n\t\t\t\t\t\t<use xlink:href=\"#a\"/>\n\t\t\t\t\t</mask>\n\t\t\t\t\t<path fill=\"#009EDD\" mask=\"url(#b)\"\n\t\t\t\t\t      d=\"M63.666 20.474h.666v-3.928h-.666M67.466 18.538c0-.914-.175-1.413-.89-1.413-.716 0-.892.5-.892 1.413 0 .914.17 1.357.89 1.357.723 0 .892-.432.892-1.357m-2.464 0c0-1.317.367-2.055 1.573-2.055 1.207 0 1.573.738 1.573 2.055 0 1.328-.366 1.998-1.573 1.998-1.206 0-1.573-.68-1.573-1.998M68.83 16.546h1.07l1.243 3.098h.094v-3.098h.666v3.928H70.86l-1.275-3.1h-.095v3.1h-.66M44.54 23.962s-.7-.092-1.025-.092c-.374 0-.6.138-.6.432 0 .34.153.414.768.642.7.26.99.46.99 1.14 0 .817-.45 1.192-1.237 1.192-.43 0-1.19-.15-1.19-.15l.066-.6s.716.096 1.118.096c.37 0 .58-.14.58-.52 0-.308-.136-.393-.654-.574-.846-.312-1.105-.51-1.105-1.214 0-.744.514-1.096 1.265-1.096.433 0 1.075.142 1.075.142l-.05.602zM47.668 25.28c0-.915-.175-1.415-.89-1.415-.716 0-.89.5-.89 1.414 0 .912.168 1.354.89 1.354.72 0 .89-.43.89-1.355m-2.463 0c0-1.318.366-2.056 1.572-2.056 1.207 0 1.573.738 1.573 2.055 0 1.326-.366 1.996-1.573 1.996-1.206 0-1.572-.68-1.572-1.997M50.392 26.612c.46 0 .772-.16.772-.665v-2.66h.665v2.66c0 .943-.503 1.317-1.438 1.317-.925 0-1.422-.374-1.422-1.317v-2.66h.666v2.66c0 .51.304.665.756.665M54.106 23.922h-.812v1.316h.825c.454 0 .623-.272.623-.675 0-.43-.207-.64-.637-.64zm-.017 1.952h-.796v1.34h-.66v-3.927h1.472c.89 0 1.32.368 1.32 1.264 0 .59-.214.932-.616 1.13l.615 1.533h-.727l-.535-1.34h-.074zM58.48 27.134s-.66.142-1.104.142c-1.178 0-1.45-.68-1.45-2.02 0-1.43.345-2.032 1.45-2.032.49 0 1.11.154 1.11.154l-.022.584s-.66-.085-.998-.085c-.682 0-.857.33-.857 1.378 0 1 .134 1.367.88 1.367.303 0 .974-.09.974-.09l.016.602zM59.13 23.287h2.435v.635h-1.782v1.028h1.444v.624h-1.444v1.004h1.782v.635H59.13M12.806 30.78c1.202.56 2.5.945 3.868 1.12.557.073 1.117.113 1.69.113-.572 0-1.133-.04-1.693-.114-1.364-.177-2.66-.56-3.864-1.12\"/>\n\t\t\t\t\t<path d=\"M14.6 32.792l.05-.126c-1.154-.464-2.267-1.054-3.3-1.746l-.073.113.078-.11-.007-.006-.01-.006-.02-.01-.068.115v.135c.062 0 .115-.04.13-.1.016-.06-.01-.12-.062-.15-.518-.305-1.015-.636-1.488-1-1.443-1.108-2.666-2.49-3.593-4.07v.002c-.465-.795-.828-1.65-1.136-2.54-.507-1.46-.81-3.015-.81-4.646 0-.653.046-1.295.132-1.925.018-.13.057-.266.083-.42.08-.48.167-.952.29-1.407.055-.2.134-.396.204-.61.12-.38.242-.758.393-1.12.093-.223.21-.44.32-.668.107-.22.197-.438.306-.638.033-.06.014-.138-.044-.177-.058-.04-.135-.027-.18.028-.245.31-.512.612-.746.95-.03.045-.054.086-.076.117v.002c-.367.538-.7 1.097-1.002 1.67-.036.068-.078.14-.118.217-.298.583-.557 1.184-.787 1.797l-.12.322c-.216.616-.403 1.243-.55 1.883-.02.093-.037.184-.055.272l.13.027-.13-.028c-.143.67-.258 1.352-.32 2.044l-.003.032c-.043.49-.066.983-.066 1.485 0 1.457.184 2.94.578 4.415.518 1.932 1.346 3.7 2.416 5.26.613.893 1.305 1.72 2.075 2.485l.094-.096-.097.094c1.034 1.104 2.242 2.018 3.568 2.71 1.862.97 3.95 1.5 6.11 1.5 1.137 0 2.296-.146 3.45-.457 3.18-.856 5.773-2.8 7.504-5.326.033-.047.03-.11-.005-.158-.035-.046-.097-.064-.152-.044-.21.078-.435.138-.66.21-.2.064-.392.13-.584.185-.368.107-.744.194-1.122.274-.16.036-.316.076-.47.107l.027.132-.025-.133c-.438.083-.882.142-1.327.19-.11.013-.208.033-.3.04h-.002c-.552.053-1.108.083-1.663.083-2.275 0-4.56-.435-6.718-1.3l-.05.126-.05.125c2.19.877 4.508 1.32 6.817 1.32.565 0 1.13-.03 1.69-.086l-.013-.133.01.134c.113-.007.214-.028.308-.038.45-.05.9-.11 1.347-.193.164-.034.32-.075.475-.11h-.002c.38-.08.763-.168 1.142-.277.2-.057.396-.125.59-.187.218-.07.445-.13.672-.214l-.046-.127-.11-.077c-1.696 2.476-4.236 4.38-7.35 5.22-1.132.303-2.267.447-3.383.447-2.114 0-4.16-.52-5.985-1.47-1.3-.678-2.484-1.575-3.497-2.656l-.003-.005c-.76-.752-1.44-1.567-2.043-2.445-1.055-1.537-1.87-3.276-2.38-5.178-.386-1.452-.568-2.91-.568-4.345 0-.493.023-.977.064-1.462l.003-.03c.06-.68.172-1.35.314-2.012v-.002c.02-.09.035-.18.054-.264.145-.63.33-1.247.543-1.853.04-.107.078-.212.118-.316.227-.605.482-1.197.774-1.77.034-.067.076-.136.117-.213.297-.565.625-1.115.984-1.645l-.11-.077.11.078c.03-.044.054-.085.076-.118.222-.32.484-.62.736-.935l-.104-.085-.118-.065c-.118.217-.21.44-.31.65-.108.222-.228.442-.328.682-.157.374-.28.76-.402 1.14-.065.2-.147.403-.207.622-.128.47-.217.952-.297 1.433-.02.134-.062.272-.083.43-.088.64-.136 1.295-.136 1.96 0 1.666.31 3.25.827 4.736.312.9.682 1.774 1.16 2.588.944 1.61 2.19 3.017 3.66 4.146.483.37.99.71 1.517 1.018l.067-.117v-.135c-.06 0-.113.04-.13.1-.016.058.01.12.06.15l.016.01.003.002.003.003c1.047.702 2.176 1.3 3.347 1.772l.05-.125z\"\n\t\t\t\t\t      fill=\"#009EDD\" mask=\"url(#b)\"/>\n\t\t\t\t\t<path d=\"M31.222 10.473l-.124.052c.89 2.173 1.372 4.536 1.372 6.967 0 .142-.01.277-.013.426-.005.24-.005.474-.018.705l-.002.008v.014c0 2.53-.663 4.908-1.82 6.963-.08.14-.183.278-.278.433-2.178 3.563-5.867 6.093-10.186 6.647-.11.014-.24.01-.38.026h.002c-.392.04-.783.077-1.18.084-.07.002-.126.056-.13.126-.006.07.043.13.11.143.235.038.47.073.707.1.177.022.36.053.55.07.434.04.867.057 1.302.062.067 0 .145.01.232.01 1.698 0 3.39-.257 5.02-.755.476-.147.95-.31 1.416-.5.19-.076.38-.16.567-.242h.004c.05-.025.103-.047.16-.07l.003-.002c1.766-.82 3.423-1.962 4.876-3.428 2.214-2.225 3.684-4.914 4.424-7.784l-.13-.034.13.038c.373-1.258.558-2.56.558-3.86 0-.2-.007-.4-.014-.602v-.002c-.144-3.222-1.435-6.398-3.88-8.86-.783-.783-1.635-1.45-2.538-1.998-1.8-1.092-3.797-1.72-5.825-1.877-.058-.004-.112.03-.135.083-.022.054-.007.116.036.154l.03.03.01.008c.41.346.807.71 1.182 1.09 1.644 1.67 2.946 3.654 3.838 5.83l.124-.052.124-.05C30.44 8.212 29.12 6.2 27.45 4.504c-.38-.388-.783-.756-1.2-1.107l-.086.103.095-.094c-.015-.014-.03-.03-.046-.043l-.088.102-.01.135c1.988.155 3.945.77 5.707 1.84.885.537 1.72 1.19 2.487 1.958 2.396 2.412 3.66 5.522 3.803 8.68.007.2.014.398.014.593 0 1.275-.18 2.55-.548 3.783l-.002.005c-.73 2.826-2.175 5.47-4.355 7.66-1.43 1.444-3.06 2.567-4.8 3.374l.058.123-.052-.124c-.053.024-.11.047-.168.075l.057.122-.054-.124c-.19.083-.375.166-.56.24-.457.187-.924.347-1.394.492-1.607.49-3.272.743-4.943.743-.068 0-.143-.008-.23-.01-.428-.005-.855-.023-1.28-.06-.177-.016-.356-.047-.543-.07-.23-.027-.462-.06-.694-.1l-.02.134v.135c.41-.008.81-.045 1.203-.086.114-.012.247-.008.385-.025 4.402-.565 8.16-3.143 10.38-6.773.086-.14.19-.28.282-.442 1.18-2.094 1.856-4.52 1.856-7.096v-.013h-.134l.134.01c.014-.243.014-.48.02-.715.003-.143.012-.28.012-.433 0-2.466-.488-4.865-1.392-7.07l-.124.05z\"\n\t\t\t\t\t      fill=\"#009EDD\" mask=\"url(#b)\"/>\n\t\t\t\t\t<path d=\"M16.556 4.467l.018.134c.05-.006.118-.004.196-.012h.002c.488-.056.975-.098 1.47-.1.03-.002.068-.004.122-.004.537 0 1.064.043 1.586.104h.002c.08.008.15.006.203.013l.018-.133-.027.133.02.004h.01c.49.064.968.16 1.44.272h.002c.15.036.303.082.46.125.327.09.65.19.965.302.164.058.326.12.488.183.318.126.63.265.937.414h-.002c.137.066.272.124.396.19.425.222.837.46 1.234.723l.074-.113-.076.11c.06.042.12.092.19.14h.002c.333.23.656.47.967.727.12.096.233.2.352.304.254.223.5.455.738.696.11.11.218.22.322.332.26.28.506.57.74.87.067.085.133.16.19.235.29.383.56.78.808 1.193.036.06.11.082.174.05.062-.03.09-.102.067-.168-.017-.046-.034-.1-.055-.154-.126-.323-.27-.635-.412-.945-.1-.22-.198-.447-.312-.67v.002c-.16-.313-.338-.613-.515-.91-.117-.202-.23-.413-.364-.618-.2-.31-.418-.6-.632-.888-.13-.174-.25-.36-.396-.542-.28-.35-.583-.68-.887-1.002-.086-.092-.168-.2-.27-.304-.443-.448-.917-.864-1.406-1.26-.277-.225-.555-.452-.852-.662C22.952 2.104 21.145 1.232 19.157.7 17.693.304 16.222.113 14.77.113c-1.538 0-3.057.214-4.523.622l.036.13-.03-.13c-1.467.35-2.86.946-4.12 1.758-1.117.72-2.13 1.61-2.998 2.647C1.912 6.598.978 8.34.458 10.303.146 11.463 0 12.628 0 13.773c0 2.022.46 3.988 1.304 5.763.025.053.08.084.138.076.058-.008.104-.053.114-.11.026-.148.077-.303.112-.475.064-.32.14-.634.223-.953.106-.405.22-.805.352-1.2.104-.312.215-.62.336-.924.154-.39.322-.77.503-1.147.14-.293.28-.58.434-.86.205-.38.43-.744.663-1.11.168-.26.33-.518.507-.766.265-.372.553-.726.85-1.08H5.53c.185-.22.357-.44.545-.646.34-.368.705-.713 1.08-1.058.182-.17.348-.344.528-.496.444-.378.92-.726 1.407-1.064.147-.104.274-.213.407-.3.637-.418 1.302-.802 1.998-1.14l.007-.004c1.536-.863 3.248-1.446 5.068-1.677l-.017-.133-.017-.134c-1.855.236-3.6.83-5.166 1.71l.065.117-.06-.12c-.706.342-1.38.733-2.027 1.156-.153.1-.282.21-.414.304-.49.34-.974.693-1.43 1.08-.192.165-.36.34-.535.503-.375.346-.747.697-1.095 1.075-.198.216-.372.44-.552.655-.297.356-.59.716-.862 1.096-.182.256-.347.517-.514.777-.234.368-.464.74-.673 1.125-.16.288-.3.58-.44.874-.184.382-.355.77-.51 1.164-.124.31-.237.62-.342.937-.134.403-.25.81-.357 1.22-.08.32-.16.64-.225.967-.03.15-.082.307-.113.48l.133.024.12-.058C.718 17.68.268 15.754.268 13.772c0-1.12.143-2.26.45-3.4.51-1.923 1.424-3.63 2.622-5.058.85-1.016 1.844-1.89 2.94-2.594C7.51 1.924 8.877 1.34 10.313.997l.004-.002c1.444-.402 2.94-.612 4.452-.612 1.428 0 2.876.188 4.317.577 1.956.524 3.734 1.382 5.297 2.496.287.203.56.427.837.652.484.392.95.8 1.384 1.24.087.087.168.194.267.3.303.32.6.645.874.986.134.166.254.35.39.534.214.29.43.576.623.874.125.192.236.4.357.607.178.297.353.592.51.896.107.21.203.434.305.657.142.31.284.617.405.93.018.043.034.095.054.15l.125-.047.115-.07c-.255-.422-.53-.826-.824-1.217-.066-.087-.133-.163-.192-.238-.24-.305-.49-.603-.756-.888-.108-.117-.218-.228-.33-.34l.002.002c-.242-.246-.493-.482-.752-.71-.117-.1-.233-.206-.358-.308-.317-.262-.646-.506-.985-.74-.058-.04-.12-.09-.192-.14h-.002c-.404-.268-.825-.512-1.255-.738-.137-.072-.274-.13-.4-.194h-.002c-.312-.152-.63-.294-.955-.422-.164-.065-.33-.127-.496-.186-.323-.116-.65-.216-.984-.307-.152-.04-.306-.088-.47-.127h.002c-.48-.115-.97-.212-1.47-.275l-.016.133.026-.13-.02-.005h-.01c-.082-.012-.155-.01-.21-.016l-.015.134.016-.134c-.527-.062-1.065-.106-1.616-.106-.06 0-.104.003-.123.003-.508.003-1.006.046-1.5.103l.017.134-.014-.134c-.054.006-.124.003-.205.014l.018.133-.017-.134.016.134z\"\n\t\t\t\t\t      fill=\"#009EDD\" mask=\"url(#b)\"/>\n\t\t\t\t\t<path d=\"M31.65 18.604h.133c-.01-3.752-1.55-7.137-4.013-9.576-2.04-2.02-4.712-3.393-7.698-3.775-.56-.072-1.13-.11-1.708-.11l-.115.002.005.135-.002-.135c-.544.004-1.073.042-1.598.108-1.73.22-3.354.77-4.84 1.605-4.1 2.31-6.872 6.72-6.872 11.788 0 1.073.148 2.108.382 3.106.314 1.33.8 2.595 1.474 3.744.348.596.754 1.15 1.185 1.68 1.026 1.258 2.264 2.34 3.69 3.17.35.203.71.386 1.075.556 1.215.565 2.526.953 3.904 1.13.565.076 1.132.116 1.71.116.58 0 1.146-.04 1.71-.115 2.14-.273 4.127-1.056 5.83-2.22 1.702-1.167 3.126-2.718 4.144-4.53 1.104-1.962 1.737-4.222 1.737-6.623v-.037l-.003-.03-.133.01h.133-.134l-.135.012.002.023v.022c0 2.353-.62 4.566-1.703 6.49-.997 1.776-2.392 3.297-4.062 4.438-1.668 1.143-3.614 1.91-5.712 2.177-.555.073-1.11.113-1.676.113-.566 0-1.12-.04-1.675-.113h-.002c-1.35-.175-2.635-.554-3.826-1.108-.36-.167-.712-.347-1.053-.544-1.397-.814-2.61-1.874-3.618-3.108-.425-.523-.822-1.066-1.163-1.646-.66-1.124-1.136-2.364-1.444-3.67-.23-.983-.375-1.996-.375-3.044 0-4.967 2.716-9.287 6.736-11.552 1.456-.818 3.048-1.356 4.743-1.573.513-.064 1.033-.1 1.566-.105h.004c.055-.003.083-.003.104-.003.567 0 1.124.038 1.675.11 2.924.373 5.542 1.72 7.542 3.698 2.416 2.392 3.922 5.708 3.933 9.385v.01l.134-.01z\"\n\t\t\t\t\t      fill=\"#009EDD\" mask=\"url(#b)\"/>\n\t\t\t\t\t<path d=\"M24.277 16.978l-3.34-.003c-.028.408.075.784.283 1.047l.067.02c-.502-.142-1.048-.258-1.62-.37-.58-.116-1.126-.177-1.55-.28-.494-.124-.824-.3-.85-.684-.043-1.08 1.698-1.375 2.54-.452.066.072.128.15.182.235h.327l3.157.004v-.014c-.025-.11-.055-.21-.088-.313l-.03-.098c-.023-.067-.048-.133-.073-.197-.016-.033-.03-.068-.042-.102-.027-.06-.055-.118-.083-.177-.016-.027-.028-.057-.045-.086-.037-.073-.077-.138-.118-.204l-.022-.037c-.05-.078-.103-.153-.156-.222l-.043-.053c-.04-.05-.083-.102-.126-.15-.017-.023-.038-.04-.056-.062l-.125-.13c-.022-.018-.04-.036-.06-.053l-.147-.128-.033-.027.008.002c.286.13.565.298.828.512.05.038.098.08.146.125l.06.054c.042.04.084.083.125.127l.058.062c.044.05.087.1.128.154.012.02.027.033.042.053.053.067.104.14.156.22.006.013.015.024.023.036.04.066.08.134.118.203.014.03.03.058.043.087.03.057.056.12.083.18.015.03.03.064.044.1.026.065.05.13.074.198.008.03.022.063.03.097.033.1.062.204.09.313v.013zm-15.75.62C9 16.595 10.02 15.9 11.2 15.9c.726 0 1.39.266 1.906.7.323.274.586.614.77 1.003v.003H8.526V17.6zm21.52 1.278c-.596-.494-1.495-.786-2.525-1.02l-.122-.024c-.247-.055-.5-.106-.762-.157-.58-.116-1.122-.18-1.547-.28-.493-.123-.824-.3-.85-.683-.04-1.08 1.702-1.375 2.543-.45.066.07.125.146.18.232h.328l3.155.003v-.013c-.22-.947-.686-1.594-1.24-2.04-.238-.185-.49-.34-.747-.46l-.02-.007c-.223-.106-.45-.188-.675-.254l-.027-.01-.053-.014c-.073-.022-.15-.04-.22-.055-.014-.005-.028-.008-.04-.01-.058-.014-.116-.025-.174-.036-.045-.01-.09-.017-.13-.025h-.004c-.59-.1-1.077-.092-1.257-.092-1.854 0-2.868.382-3.64.955h-.002c-1.25-.992-2.946-.955-3.326-.955-2.21 0-3.23.543-4.06 1.304.26.163.506.347.734.554l.19.178.008.01c.196.192.38.404.543.628l.006.007c.053.07.1.14.15.212.01.02.023.037.032.055.038.058.075.115.11.172l.043.077.09.16.043.09c.028.05.053.1.077.152l.046.1c.02.05.04.1.063.148l.04.11c.02.047.038.096.055.147.015.036.026.078.04.113l.045.15c.012.037.023.077.033.116.014.05.027.1.037.15.01.04.02.08.027.123.013.05.02.1.03.154.008.04.016.08.02.12.01.055.017.11.026.165.002.037.01.076.012.114.008.062.01.124.016.185.003.03.004.065.006.097.006.095.01.187.01.283v.005c0 .067-.007.128-.01.19-.002.014-.002.028-.003.043 1.507.304 2.718.41 2.97.922.033.07.054.15.05.236-.02.63-.545.97-1.257.96-.253 0-.466-.015-.65-.05-.323-.068-.552-.2-.755-.43-.112-.13-.216-.29-.322-.484h-3.878c-.54.68-1.373 1.113-2.307 1.113-.39 0-.762-.078-1.104-.217-.793-.32-1.417-.974-1.695-1.792v-.012h8.075c.027-.147.046-.297.06-.45.016-.167.023-.336.023-.51v-.008c0-.094-.002-.19-.007-.282 0-.033-.003-.066-.006-.1-.004-.06-.008-.123-.016-.184-.002-.04-.007-.077-.014-.117-.007-.054-.012-.11-.022-.163-.006-.042-.014-.08-.022-.12-.008-.053-.017-.104-.028-.156-.01-.04-.02-.08-.028-.12l-.037-.15c-.01-.04-.023-.08-.034-.12-.014-.05-.03-.1-.047-.147-.01-.04-.023-.075-.037-.114-.02-.05-.038-.1-.055-.15-.012-.033-.027-.072-.043-.106-.018-.05-.04-.1-.06-.15-.017-.035-.032-.065-.046-.1-.024-.052-.05-.102-.077-.152l-.045-.09-.086-.157c-.016-.028-.03-.054-.047-.08-.035-.06-.07-.115-.108-.172l-.035-.055c-.05-.07-.098-.142-.15-.212l-.003-.005c-.166-.225-.347-.435-.54-.63l-.013-.01c-.063-.06-.126-.12-.188-.176-.136-.124-.28-.237-.43-.344-.88-.645-1.963-1.024-3.135-1.024-2.96 0-5.357 2.414-5.357 5.393 0 2.135 1.23 3.983 3.02 4.854.707.347 1.5.54 2.338.54 1.413 0 2.698-.55 3.655-1.453.028-.024.054-.05.08-.075.085-.084.168-.168.245-.257l.014-.012c.083-.096.164-.193.243-.293l.052-.074c.056-.075.113-.153.165-.23.022-.037.045-.072.065-.107.048-.07.09-.144.135-.22.02-.037.04-.074.063-.11.035-.07.07-.14.103-.21h1.01c-.042.12-.09.236-.143.35-.016.036-.034.07-.05.105-.037.082-.076.16-.12.238-.018.038-.04.074-.063.114-.043.074-.085.147-.13.22-.023.033-.046.07-.07.103-.05.08-.106.157-.164.233-.017.024-.034.05-.052.073-.08.1-.16.2-.243.293l-.01.016c-.08.086-.163.17-.247.25-.027.03-.055.053-.08.077-.075.07-.15.138-.226.203.13.08.275.156.434.227.692.314 1.65.534 2.95.534h.002c.226.002 2.062.02 3.454-.872.175-.113.343-.24.5-.383.02-.015.036-.032.052-.05.07-.063.135-.13.197-.2.01-.014.02-.022.03-.032.07-.08.135-.166.196-.255.017-.02.03-.042.042-.064.05-.07.096-.15.14-.23l.04-.07c.05-.1.096-.2.14-.31l.023-.07c.034-.087.063-.18.09-.276.01-.036.02-.075.026-.11.028-.11.05-.223.066-.34l.008-.035v-.018c.08-.668-.04-1.186-.31-1.596-.028-.043-.056-.085-.087-.124-.03-.04-.064-.083-.1-.123-.035-.037-.07-.077-.107-.11-.04-.04-.08-.077-.123-.11l-.015-.014c.034.013.07.03.104.045.055.026.106.052.155.08.053.028.106.057.155.086l.14.09c.05.032.094.065.14.096l.124.1c.042.036.082.072.12.11l.06.06.006.004c.89.188 1.696.3 2.284.453l.168.05c.39.115.66.258.762.47.036.073.052.15.05.235-.023.632-.547.97-1.26.962-.255 0-.465-.016-.65-.053-.322-.066-.552-.198-.753-.427-.015-.017-.03-.035-.043-.054-.005.083-.007.164-.018.252v.018c-.004.013-.006.024-.007.036-.018.117-.04.23-.066.34l-.03.11c-.027.097-.054.19-.088.278l-.022.067c-.043.11-.09.213-.14.31-.015.025-.028.05-.04.073-.045.08-.093.155-.14.23-.015.02-.028.04-.042.063-.063.088-.128.175-.198.254l-.028.03c-.063.072-.13.138-.197.203l-.05.05c-.146.13-.298.25-.46.355.372.14.806.256 1.316.327l.416.048c.278.022.622.045.942.045h.007c.346.003 4.547.042 4.996-3.3.12-.974-.174-1.628-.742-2.1z\"\n\t\t\t\t\t      fill=\"#009EDD\" mask=\"url(#b)\"/>\n\t\t\t\t</g>\n\t\t\t</g>\n\t\t</svg>\n\t\t</span>\n\t<span class=\"example-fill-remaining-space\">\n\t</span>\n\t<span>\n\t\t<a mat-button routerLink=\"/imprint\">Imprint</a>\n\t\t<a mat-button routerLink=\"/contact\">Contact</a>\n\t</span>\n</mat-toolbar>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-config.module */ "./src/app/app-config.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var AppComponent = /** @class */ (function () {
    function AppComponent(auth, changeDetector, appConfig) {
        this.auth = auth;
        this.changeDetector = changeDetector;
        this.appConfig = appConfig;
        this.title = 'demax-client';
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('over');
    }
    AppComponent.prototype.ngAfterViewChecked = function () {
        this.changeDetector.detectChanges();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_app_config_module__WEBPACK_IMPORTED_MODULE_1__["APP_CONFIG"])),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _app_config_module__WEBPACK_IMPORTED_MODULE_1__["AppConfig"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-config.module */ "./src/app/app-config.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ext_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ext/material.module */ "./src/app/ext/material.module.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _pages_imprint_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/imprint.component */ "./src/app/pages/imprint.component.ts");
/* harmony import */ var _pages_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/home.component */ "./src/app/pages/home.component.ts");
/* harmony import */ var _pages_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/contact.component */ "./src/app/pages/contact.component.ts");
/* harmony import */ var _pages_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/not-found.component */ "./src/app/pages/not-found.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _proposals_proposals_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./proposals/proposals.component */ "./src/app/proposals/proposals.component.ts");
/* harmony import */ var _proposal_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./proposal.service */ "./src/app/proposal.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_guard_login_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/auth-guard-login.service */ "./src/app/services/auth-guard-login.service.ts");
/* harmony import */ var _services_auth_guard_admin_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/auth-guard-admin.service */ "./src/app/services/auth-guard-admin.service.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
/* harmony import */ var _pages_admin_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/admin.component */ "./src/app/pages/admin.component.ts");
/* harmony import */ var _pages_user_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/user.component */ "./src/app/pages/user.component.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/components/loading/loading.component.ts");
/* harmony import */ var _pages_testing_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/testing.component */ "./src/app/pages/testing.component.ts");
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/message.service */ "./src/app/services/message.service.ts");
/* harmony import */ var _services_http_error_handler_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/http-error-handler.service */ "./src/app/services/http-error-handler.service.ts");
/* harmony import */ var _proposal_proposal_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./proposal/proposal.component */ "./src/app/proposal/proposal.component.ts");
/* harmony import */ var _proposal_list_proposal_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./proposal-list/proposal-list.component */ "./src/app/proposal-list/proposal-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var tokenGetter = function () {
    return localStorage.getItem('token');
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"])({ selector: '[ng2FileSelect]' }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _pages_admin_component__WEBPACK_IMPORTED_MODULE_25__["AdminComponent"],
                _pages_imprint_component__WEBPACK_IMPORTED_MODULE_12__["ImprintComponent"],
                _pages_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _pages_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                _pages_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_27__["LoadingComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_24__["LogoutComponent"],
                _proposals_proposals_component__WEBPACK_IMPORTED_MODULE_18__["ProposalsComponent"],
                _pages_testing_component__WEBPACK_IMPORTED_MODULE_28__["TestingComponent"],
                _pages_user_component__WEBPACK_IMPORTED_MODULE_26__["UserComponent"],
                _proposal_proposal_component__WEBPACK_IMPORTED_MODULE_31__["ProposalComponent"],
                _proposal_list_proposal_list_component__WEBPACK_IMPORTED_MODULE_32__["ProposalListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _app_config_module__WEBPACK_IMPORTED_MODULE_2__["AppConfigModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_9__["HttpModule"],
                _ext_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:4200', 'localhost:8080'],
                    }
                })
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
                _services_auth_guard_admin_service__WEBPACK_IMPORTED_MODULE_23__["AuthGuardAdmin"],
                _services_auth_guard_login_service__WEBPACK_IMPORTED_MODULE_22__["AuthGuardLogin"],
                _services_http_error_handler_service__WEBPACK_IMPORTED_MODULE_30__["HttpErrorHandler"],
                _services_message_service__WEBPACK_IMPORTED_MODULE_29__["MessageService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"],
                _proposal_service__WEBPACK_IMPORTED_MODULE_19__["ProposalService"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/loading/loading.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LoadingComponent.prototype, "condition", void 0);
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: "\n\t\t<style>\n\t\t\t.dot {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 50%;\n\t\t\t\twidth: 25px;\n\t\t\t\theight: 25px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: #0094CA;\n\t\t\t\tz-index: 0;\n\t\t\t\topacity: 1;\n\t\t\t\tanimation-name: effect-3;\n\t\t\t\tanimation-duration: 5s, 2s;\n\t\t\t\tanimation-iteration-count: infinite;\n\t\t\t\tanimation-timing-function: ease, linear;\n\t\t\t}\n\n\t\t\t.wrapper::before {\n\t\t\t\tcontent: \"\";\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 50%;\n\t\t\t\tmargin: -65px 0 0 -65px;\n\t\t\t\twidth: 150px;\n\t\t\t\theight: 150px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\topacity: 1;\n\t\t\t\tz-index: 1\n\t\t\t}\n\n\t\t\t.wrapper::after {\n\t\t\t\tcontent: \"\";\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 50%;\n\t\t\t\tmargin: -65px 0 0 -65px;\n\t\t\t\twidth: 150px;\n\t\t\t\theight: 150px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\topacity: 1;\n\t\t\t\tz-index: 2;\n\t\t\t}\n\n\t\t\t.wrapper::after,\n\t\t\t.wrapper::before {\n\t\t\t\tborder: 2px solid #0094CA;\n\t\t\t}\n\n\t\t\t.wrapper::after {\n\t\t\t\tanimation-name: effect-3, effect-1;\n\t\t\t\tanimation-duration: 5s, 2s;\n\t\t\t\tanimation-iteration-count: infinite;\n\t\t\t\tanimation-timing-function: ease, linear;\n\t\t\t}\n\n\t\t\t.wrapper::before {\n\t\t\t\tanimation-name: effect-3, effect-2;\n\t\t\t\tanimation-duration: 5s, 2s;\n\t\t\t\tanimation-iteration-count: infinite;\n\t\t\t\tanimation-timing-function: ease, linear;\n\t\t\t}\n\n\t\t\t@keyframes effect-1 {\n\t\t\t\t0% {\n\t\t\t\t\ttransform: perspective(1000px) rotate3d(1, 1, 1, 0deg)\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\ttransform: perspective(1000px) rotate3d(1, 1, 1, 360deg)\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@keyframes effect-2 {\n\t\t\t\t0% {\n\t\t\t\t\ttransform: perspective(1000px) rotate3d(1, -1, 1, 0deg)\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\ttransform: perspective(1000px) rotate3d(1, -1, 1, 360deg)\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@keyframes effect-3 {\n\t\t\t\t0%,\n\t\t\t\t100% {\n\t\t\t\t\topacity: 0\n\t\t\t\t}\n\t\t\t\t25%,\n\t\t\t\t75% {\n\t\t\t\t\topacity: 1\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t\t<div class=\"wrapper\" *ngIf=\"condition\">\n\t\t\t<div class=\"dot\"></div>\n\t\t</div>\n\t"
        })
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/logout/logout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(auth) {
        this.auth = auth;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.auth.logout();
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: ''
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/ext/material.module.ts":
/*!****************************************!*\
  !*** ./src/app/ext/material.module.ts ***!
  \****************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/pages/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = /** @class */ (function () {
    function AdminComponent(auth, userService) {
        this.auth = auth;
        this.userService = userService;
        this.users = [];
        this.isLoading = true;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    AdminComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (data) { return _this.users = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    AdminComponent.prototype.deleteUser = function (user) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete ' + user.email + '?')) {
            this.userService.deleteUser(user).subscribe(function () { return _this.getUsers(); });
        }
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: "\n\t<style>\n\t\t\n\t</style>\n\n\t<div class=\"card\">\n\t\t<h4 class=\"card-header\">Registered users ({{users.length}})</h4>\n\t\t<div class=\"card-body\">\n\t\t\t<table class=\"table table-bordered\">\n\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t<tr>\n\t\t\t\t\t<th scope=\"col\">First name</th>\n\t\t\t\t\t\t\t\t\t\t<th scope=\"col\">Last name</th>\n\t\t\t\t\t<th scope=\"col\">Email</th>\n\t\t\t\t\t<th scope=\"col\">Role</th>\n\t\t\t\t\t<th scope=\"col\">Actions</th>\n\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody *ngIf=\"users.length === 0\">\n\t\t\t\t<tr>\n\t\t\t\t\t<td colspan=\"4\">There are no registered users.</td>\n\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t\t<tbody>\n\t\t\t\t<tr *ngFor=\"let user of users\">\n\t\t\t\t\t<td>{{user.firstName}}</td>\n\t\t\t\t\t<td>{{user.lastName}}</td>\n\t\t\t\t\t<td>{{user.email}}</td>\n\t\t\t\t\t<td>{{user.role}}</td>\n\t\t\t\t\t<td>\n\t\t\t\t\t\t<button class=\"btn btn-sm btn-danger\" (click)=\"deleteUser(user)\"\n\t\t\t\t\t\t        [disabled]=\"auth.currentUser._id === user._id\">\n\t\t\t\t\t\t\t<i class=\"fa fa-trash\"></i> Delete\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</td>\n\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t</div>"
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/contact.component.ts ***!
  \********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: "\n\t\t<style>\n\t\t\tmat-card{\n\t\t\t\twidth: 300px;\n\t\t\t\tpadding: 1rem;\n\t\t\t}\n\t\t\t.wrapper{\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-around;\n\t\t\t}\n\t\t\ttd{\n\t\t\t\tmargin: 1rem auto;\n\t\t\t}\n\t\t</style>\n\t\t<div class=\"wrapper\">\n\t\t\t\n\t\t<mat-card>\n\t\t\t<mat-card-header>\n\t\t\t\t<mat-card-title>Dr. Zo\u00EB Fisher</mat-card-title>\n\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\tProtein crystallization & biodeuteration\n\t\t\t\t</mat-card-subtitle>\n\t\t\t</mat-card-header>\n\t\t\t<mat-card-content>\n\t\t\t\t<img matCardImage src=\"../../assets/media/zoe-fisher.jpg\">\n\n\t\t\t\t<table>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Mail</td>\n\t\t\t\t\t\t<td><a href=\"mailto:Zoe.Fisher@esss.se\" class=\"spamspan\">Zoe.Fisher@esss.se</a></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tPhone\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a href=\"tel:%2B46468883250\">+46 46 888 32 50</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tMobile\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a href=\"tel:%2B46721792250\">+46 72 179 22 50</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</mat-card-content>\n\t\t\t<mat-card-actions>\n\t\t\t</mat-card-actions>\n\t\t</mat-card>\n\t\t<mat-card>\n\t\t\t<mat-card-header>\n\t\t\t\t<mat-card-title>Dr. Hanna Wacklin-Knecht</mat-card-title>\n\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\tChemical & lipid/surfactant deuteration\n\t\t\t\t</mat-card-subtitle>\n\t\t\t</mat-card-header>\n\t\t\t<mat-card-content>\n\t\t\t\t<img matCardImage src=\"../../assets/media/zoe-fisher.jpg\">\n\t\t\t\t<table>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Mail</td>\n\t\t\t\t\t\t<td><a href=\"mailto:hanna.wacklin@esss.se\">hanna.wacklin@esss.se</a></td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tPhone\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a href=\"tel:%2B46468883044\">+46 46 888 30 44</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tMobile\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a href=\"tel:%2B46721792044\">+46 72 179 20 44</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</mat-card-content>\n\t\t\t<mat-card-actions>\n\t\t\t</mat-card-actions>\n\t\t</mat-card>\n\t\t<mat-card>\n\t\t\t<mat-card-header>\n\t\t\t\t<mat-card-title>Dr. Anna Leung</mat-card-title>\n\t\t\t\t<mat-card-subtitle>\n\t\t\t\t\tChemical deuteration & organic synthesis\n\t\t\t\t</mat-card-subtitle>\n\t\t\t</mat-card-header>\n\t\t\t<mat-card-content>\n\t\t\t\t<img matCardImage src=\"../../assets/media/zoe-fisher.jpg\">\n\n\t\t\t\t<table>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>Mail</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a href=\"mailto:Anna.Leung@esss.se\" class=\"spamspan\">Anna.Leung@esss.se</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tPhone\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a href=\"tel:%2B46468883427\">+46 46 888 34 27</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\tMobile\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a href=\"tel:%2B46721792427\">+46 72 179 24 27</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</mat-card-content>\n\t\t\t<mat-card-actions>\n\t\t\t</mat-card-actions>\n\t\t</mat-card>\n\t\t</div>\n\n\t"
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/home.component.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home.component.ts ***!
  \*****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: "\n\t\t<mat-card style=\"max-width: 900px; margin: 0;\">\n\t\t\t<mat-card-header>\n\t\t\t\t<mat-card-title>Welcome to the DEMAX user portal for deuteration & crystallization\n\t\t\t\t\tsupport!\n\t\t\t\t</mat-card-title>\n\n\t\t\t</mat-card-header>\n\t\t\t<mat-card-content>\n\t\t\t\t<p> Users are strongly encouraged to contact DEMAX staff prior to preparing and submitting a\n\t\t\t\t\tdeuteration/crystallization proposal. General enquiries can be sent to: <a\n\t\t\t\t\t\t\thref=\"mailto:demax@esss.se\">demax@esss.se</a>\n\t\t\t\t\tor to one of the<a routerLink=\"/contact\"> subject matter experts.</a></p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li> Proposals should be written in English, properly referenced, and prepared in the <a\n\t\t\t\t\t\t\thref=\"http://localhost:8080/word/attachment\">Word template.</a> Please keep to the 2\n\t\t\t\t\t\tpage limit, including Summary, Background (Science Case, Practical Consideration, References,\n\t\t\t\t\t\tFigures/Tables)\n\t\t\t\t\t</li>\n\t\t\t\t\t<li> Access to DEMAX is granted on the basis of both a technical and a peer-review process.</li>\n\t\t\t\t\t<li> Proposals awarded during initial operations (2019-2022) will be free of charge. During formal\n\t\t\t\t\t\tuser\n\t\t\t\t\t\toperations (beyond 2023) we reserve the right to ask for partial financial contributions towards\n\t\t\t\t\t\tconsumables\n\t\t\t\t\t\t& shipping costs.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li> During initial operations we will not limit access to DEMAX based on ESS-membership. Beyond\n\t\t\t\t\t\tthis\n\t\t\t\t\t\tperiod\n\t\t\t\t\t\twe\n\t\t\t\t\t\twill respect the user access policy that will be applicable ESS-wide.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li> Biological and chemical deuteration proposals are run as a service but users for protein\n\t\t\t\t\t\tcrystallization\n\t\t\t\t\t\tare welcome to come in person as well.\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</mat-card-content>\n\t\t\t<mat-card-actions>\n\t\t\t\t<button mat-raised-button style=\"background-color: #005CBF; color: white;\" routerLink=\"/proposal-detail\">Create new proposal</button>\n\t\t\t\t<button mat-raised-button style=\"background-color: red; color: white;\" routerLink=\"/proposals\">Edit existing proposal</button>\n\t\t\t</mat-card-actions>\n\t\t\t<mat-card-footer>\n\n\t\t\t</mat-card-footer>\n\t\t</mat-card>\n\t\t<mat-card>\n\t\t\t<form action=\"/upload\" enctype=\"multipart/form-data\" method=\"post\">\n\t\t\t\t<input type=\"file\" name=\"upload\" multiple>\n\t\t\t\t<input type=\"submit\" value=\"Upload\">\n\t\t\t</form>\n\t\t</mat-card>\n\t"
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/imprint.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/imprint.component.ts ***!
  \********************************************/
/*! exports provided: ImprintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImprintComponent", function() { return ImprintComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImprintComponent = /** @class */ (function () {
    function ImprintComponent() {
    }
    ImprintComponent.prototype.ngOnInit = function () {
    };
    ImprintComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-imprint',
            template: "<style>\n\t  header{\n\t\t  text-align: center;\n\t  }\n\t  main{\n\t\t  display: flex;\n\t\t  flex-wrap: wrap;\n\t\t  justify-content: space-around;\n\t  }\n\t  section{\n\t\t  padding: 3rem;\n\t  }\n\t  .left{\n\t\t  font-size: 1rem;\n\t  }\n  </style><div class=\"wrapper\">\n\t  <header><h3>Impressum</h3></header>\n  </div>\n  <mat-divider></mat-divider>\n  <main>\n\t  <section class=\"left\">\n\t\t  <mat-card>\n\t\t\t  <mat-card-header>\n\t\t\t\t  <mat-card-title><a href=\"https://europeanspallationsource.se/science-support-systems/demax\"\n\t\t\t\t                     style=\"color: #0094CA; text-decoration: none;\">DEMAX Platform</a></mat-card-title>\n\t\t\t  </mat-card-header>\n\t\t\t  <mat-card-content>\n\t\t\t\t  <table>\n\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  <td>European Spallation Source ERIC</td>\n\t\t\t\t\t  </tr>\n\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  <td>225 92 Lund, Sweden</td>\n\t\t\t\t\t  </tr>\n\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  <td></td>\n\t\t\t\t\t  </tr>\n\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  <td> Corporate Identification Number: 768200-0018</td>\n\t\t\t\t\t\t  <td></td>\n\t\t\t\t\t  </tr>\n\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  <td> VAT number: SE768200001801</td>\n\t\t\t\t\t\t  <td></td>\n\t\t\t\t\t  </tr>\n\t\t\t\t\t  <tr>\n\t\t\t\t\t\t  <td></td>\n\t\t\t\t\t\t  <td><a mat-button style=\"background-color: #0094CA; color: white;\"\n\t\t\t\t\t\t         href=\"https://europeanspallationsource.se/legal-ip\">ESS Legal & IP</a></td>\n\t\t\t\t\t  </tr>\n\t\t\t\t  </table>\n\t\t\t  </mat-card-content>\n\t\t  </mat-card>\n\t  </section>\n\t  <section class=\"right\">\n\t\t  <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.249066524862!2d13.245263116258776!3d55.73419038054827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653966760235021%3A0x41552274293bae03!2sEuropean+Spallation+Source!5e1!3m2!1ssv!2sdk!4v1541780776668\"\n\t\t          width=\"300\" height=\"300\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n\t  </section>\n  </main>"
        }),
        __metadata("design:paramtypes", [])
    ], ImprintComponent);
    return ImprintComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n\tmargin: 1rem auto;\n\twidth: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG5cdG1hcmdpbjogMXJlbSBhdXRvO1xuXHR3aWR0aDogMzAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card\">\n\t<h4 class=\"card-header\">Login</h4>\n\t<div class=\"card-body\">\n\t\t<form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n\t\t\t<div class=\"input-group\" [ngClass]=\"setClassEmail()\">\n\t\t\t\t<div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">\n            <i class=\"fa fa-envelope\"></i>\n          </span>\n\t\t\t\t</div>\n\t\t\t\t<input class=\"form-control\" type=\"email\" name=\"email\"\n\t\t\t\t       formControlName=\"email\" placeholder=\"Email\" autofocus>\n\t\t\t</div>\n\t\t\t<div class=\"input-group\" [ngClass]=\"setClassPassword()\">\n\t\t\t\t<div class=\"input-group-prepend\">\n          <span class=\"input-group-text\">\n            <i class=\"fa fa-key\"></i>\n          </span>\n\t\t\t\t</div>\n\t\t\t\t<input class=\"form-control\" type=\"password\" name=\"password\"\n\t\t\t\t       formControlName=\"password\" placeholder=\"Password\">\n\t\t\t</div>\n\t\t\t<button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!loginForm.valid\">\n\t\t\t\t<i class=\"fa fa-sign-in\"></i> Login\n\t\t\t</button>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, formBuilder, router) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)
        ]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
        ]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.auth.loggedIn) {
            this.router.navigate(['/']);
        }
        this.loginForm = this.formBuilder.group({
            email: this.email,
            password: this.password
        });
    };
    LoginComponent.prototype.setClassEmail = function () {
        return { 'has-danger': !this.email.pristine && !this.email.valid };
    };
    LoginComponent.prototype.setClassPassword = function () {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.auth.login(this.loginForm.value).subscribe(function (res) { return _this.router.navigate(['/']); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/not-found.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/not-found.component.ts ***!
  \**********************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: "<p>\n\t  not-found works!\n  </p>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n\tmargin: 1rem auto;\n\twidth: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG5cdG1hcmdpbjogMXJlbSBhdXRvO1xuXHR3aWR0aDogMzAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"width: 600px; margin: 6rem 12rem;\">\n\t<form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n\t\t<mat-card-header>\n\t\t\t<mat-card-title>\n\t\t\t\tRegister\n\t\t\t</mat-card-title>\n\t\t</mat-card-header>\n\t\t<mat-card-content style=\"display: flex; flex-wrap: wrap; justify-content: center;\">\n\t\t\t<div style=\"margin: 2rem;\">\n\t\t\t\t<h4>Personal information</h4>\n\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"firstName\"\n\t\t\t\t\t       formControlName=\"firstName\" placeholder=\"First name\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"lastName\"\n\t\t\t\t\t       formControlName=\"lastName\" placeholder=\"Last name\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"phone\"\n\t\t\t\t\t       formControlName=\"phone\" placeholder=\"Phone\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"input-group\" [ngClass]=\"setClassEmail()\">\n\n\t\t\t\t\t<input class=\"form-control\" type=\"email\" name=\"email\"\n\t\t\t\t\t       formControlName=\"email\" placeholder=\"Email\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"input-group\" [ngClass]=\"setClassPassword()\">\n\t\t\t\t\t<input class=\"form-control\" type=\"password\" name=\"password\"\n\t\t\t\t\t       formControlName=\"password\" placeholder=\"Password\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div style=\"margin: 2rem;\">\n\t\t\t\t<h4>Affiliation</h4>\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<select class=\"form-control\" type=\"text\" name=\"employerSector\"\n\t\t\t\t\t        formControlName=\"employerSector\">\n\t\t\t\t\t\t<option value=\"\" selected disabled>Sector</option>\n\t\t\t\t\t\t<option value=\"Something\">Something</option>\n\t\t\t\t\t\t<option value=\"123456789\">Something else</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"employerName\"\n\t\t\t\t\t       formControlName=\"employerName\" placeholder=\"Employer\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"employerStreet\"\n\t\t\t\t\t       formControlName=\"employerStreet\" placeholder=\"Street address\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"employerZipcode\"\n\t\t\t\t\t       formControlName=\"employerZipcode\" placeholder=\"Zipcode\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"employerCity\"\n\t\t\t\t\t       formControlName=\"employerCity\" placeholder=\"City\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"employerCountry\"\n\t\t\t\t\t       formControlName=\"employerCountry\" placeholder=\"Country\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-card-content>\n\t\t<mat-card-actions style=\"text-align: center;\">\n\t\t\t<button class=\"btn btn-primary\" type=\"submit\">\n\t\t\t\t<i class=\"fa fa-user-plus\"></i> Register\n\t\t\t</button>\n\t\t</mat-card-actions>\n\n\t</form>\n</mat-card>"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, userService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)
        ]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)
        ]);
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.phone = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.employerSector = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.employerName = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.employerStreet = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.employerZipcode = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.employerCity = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.employerCountry = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.role = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: this.firstName,
            lastName: this.lastName,
            phone: this.phone,
            email: this.email,
            password: this.password,
            role: this.role,
            employerSector: this.employerSector,
            employerName: this.employerName,
            employerStreet: this.employerStreet,
            employerZipcode: this.employerZipcode,
            employerCity: this.employerCity,
            employerCountry: this.employerCountry
        });
    };
    RegisterComponent.prototype.setClassEmail = function () {
        return { 'has-danger': !this.email.pristine && !this.email.valid };
    };
    RegisterComponent.prototype.setClassPassword = function () {
        return { 'has-danger': !this.password.pristine && !this.password.valid };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.userService.register(this.registerForm.value).subscribe(function (res) {
            _this.router.navigate(['/login']);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/testing.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/testing.component.ts ***!
  \********************************************/
/*! exports provided: TestingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingComponent", function() { return TestingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/test.service */ "./src/app/services/test.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _proposal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../proposal.service */ "./src/app/proposal.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TestingComponent = /** @class */ (function () {
    function TestingComponent(uploaderService, auth, proposalService) {
        this.uploaderService = uploaderService;
        this.auth = auth;
        this.proposalService = proposalService;
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date());
    }
    TestingComponent.prototype.onPicked = function (input) {
        var _this = this;
        var file = input.files[0];
        console.log(file.name);
        if (file) {
            this.uploaderService.upload(file).subscribe(function (msg) {
                input.value = null;
                _this.message = msg;
            });
        }
    };
    TestingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testing',
            template: "\n\t\t<style>\n\t\t\t.custom-file-input {\n\t\t\t\tborder: solid black 1px;\n\t\t\t\tbackground-color: #00BBFF;\n\t\t\t}\n\n\t\t\t#pbdIdReferenceAttachment {\n\t\t\t\tbox-shadow: 3px 3px 3px black;\n\t\t\t}\n\t\t</style>\n\t\t<mat-card>\n\t\t\t<mat-card-header>\n\t\t\t\t<mat-card-title>TestComponent</mat-card-title>\n\t\t\t</mat-card-header>\n\t\t\t<mat-card-content>\n\t\t\t\t<form enctype=\"multipart/form-data\" method=\"post\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<label for=\"picked\">Attach reference</label>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<input type=\"file\" id=\"picked\" #picked\n\t\t\t\t\t\t\t       (click)=\"message=''\"\n\t\t\t\t\t\t\t       (change)=\"onPicked(picked)\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [formControl]=\"date\">\n\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t\t\t\t\t<mat-datepicker #picker></mat-datepicker>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p *ngIf=\"message\">{{message}}</p>\n\t\t\t\t</form>\n\n\n\t\t\t</mat-card-content>\n\t\t</mat-card>\n\n\t",
            providers: [_services_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"]]
        }),
        __metadata("design:paramtypes", [_services_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _proposal_service__WEBPACK_IMPORTED_MODULE_3__["ProposalService"]])
    ], TestingComponent);
    return TestingComponent;
}());

//name="{{proposalService.currentProposal._id + '-' + auth.currentUser._id}}"


/***/ }),

/***/ "./src/app/pages/user.component.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/user.component.ts ***!
  \*****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(auth, userService) {
        this.auth = auth;
        this.userService = userService;
        this.isLoading = true;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    UserComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser(this.auth.currentUser).subscribe(function (data) { return _this.user = data; }, function (error) { return console.log(error); });
    };
    UserComponent.prototype.save = function (user) {
        this.userService.editUser(user).subscribe(function (error) { return console.log(error); });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: "\n\t\t<style>\n\t\t\n\t\tmat-form-field {\n\t\t\twidth: 80%;\n\t\t}\n\t\t</style>\n\t\t<mat-card style=\"width: 500px; margin: 2rem auto;\">\n\t\t\t<mat-card-header>\n\t\t\t\t<mat-card-title>Account settings</mat-card-title>\n\t\t\t</mat-card-header>\n\t\t\t<mat-card-content>\n\t\t\t\t<form #accountForm=\"ngForm\" (ngSubmit)=\"save(user)\">\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput name=\"firstName\" [(ngModel)]=\"user.firstName\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput name=\"lastName\" [(ngModel)]=\"user.lastName\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput name=\"phone\" [(ngModel)]=\"user.phone\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput name=\"email\" [(ngModel)]=\"user.email\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-divider></mat-divider>\n\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput name=\"employerSector\" [(ngModel)]=\"user.employerSector\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput name=\"employerName\" [(ngModel)]=\"user.employerName\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput name=\"employerStreet\" [(ngModel)]=\"user.employerStreet\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput name=\"employerZipcode\" [(ngModel)]=\"user.employerZipcode\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput name=\"employerCity\" [(ngModel)]=\"user.employerCity\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput name=\"employerCountry\" [(ngModel)]=\"user.employerCountry\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<mat-select name=\"role\" [(ngModel)]=\"user.role\">\n\t\t\t\t\t\t\t<mat-option value=\"\" disabled>Role</mat-option>\n\t\t\t\t\t\t\t<mat-option value=\"admin\">Admin</mat-option>\n\t\t\t\t\t\t\t<mat-option value=\"user\">User</mat-option>\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t<fieldset>\n\t\t\t\t\t<button mat-raised-button type=\"submit\">Save</button>\n\t\t\t\t\t</fieldset>\n\t\t\t\t</form>\n\t\t\t</mat-card-content>\n\t\t</mat-card>\n\t"
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/proposal-list/proposal-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/proposal-list/proposal-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3Bvc2FsLWxpc3QvcHJvcG9zYWwtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/proposal-list/proposal-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/proposal-list/proposal-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table style=\"width:100%;\">\n\t<tr>\n\t\t<td>ID</td>\n\t\t<td>Title</td>\n\t\t<td>Lab</td>\n\t\t<td>Options</td>\n\t</tr>\n\t<tr *ngFor=\"let proposal of proposals\">\n\t\t<td>{{proposal._id}}</td>\n\t\t<td>{{proposal.experimentTitle}}</td>\n\t\t<td>{{proposal.lab}}</td>\n\t\t<td>\n\t\t\t<button class=\"btn btn-sm btn-primary\" (click)=\"enableEditing(proposal)\">\n\t\t\t\t<i class=\"fa fa-pencil\"></i> Edit\n\t\t\t</button>\n\t\t</td>\n\t\t<td>\n\t\t\t<button class=\"btn btn-sm btn-danger ml-1\" (click)=\"deleteProposal(proposal)\">\n\t\t\t\t<i class=\"fa fa-trash\"></i> Delete\n\t\t\t</button>\n\t\t</td>\n\t</tr>\n</table>"

/***/ }),

/***/ "./src/app/proposal-list/proposal-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/proposal-list/proposal-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ProposalListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalListComponent", function() { return ProposalListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _proposal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../proposal.service */ "./src/app/proposal.service.ts");
/* harmony import */ var _proposal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../proposal */ "./src/app/proposal.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProposalListComponent = /** @class */ (function () {
    function ProposalListComponent(proposalService, formBuilder, http, auth) {
        this.proposalService = proposalService;
        this.formBuilder = formBuilder;
        this.http = http;
        this.auth = auth;
        this.proposal = new _proposal__WEBPACK_IMPORTED_MODULE_4__["Proposal"]();
        this.proposals = [];
        this.isEditing = false;
        this.experimentTitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.briefSummary = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.mainProposerFirstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.mainProposerLastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.mainProposerAffiliation = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.mainProposerEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.mainProposerPhone = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.needByDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.needByDateMotivation = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.needByDateAttachment = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.lab = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
    }
    ProposalListComponent.prototype.ngOnInit = function () {
        this.getProposals();
    };
    ProposalListComponent.prototype.enableEditing = function (proposal) {
        this.isEditing = true;
        this.proposal = proposal;
    };
    ProposalListComponent.prototype.getProposals = function () {
        var _this = this;
        this.proposalService.getProposals().subscribe(function (data) { return _this.proposals = data; }, function (error) { return console.log(error); });
    };
    ProposalListComponent.prototype.deleteProposal = function (proposal) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this proposal?')) {
            this.proposalService.deleteProposal(proposal).subscribe(function () {
                var pos = _this.proposals.map(function (element) { return element._id; }).indexOf(proposal._id);
                _this.proposals.splice(pos, 1);
            }, function (error) { return console.log(error); });
        }
    };
    ProposalListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-proposal-list',
            template: __webpack_require__(/*! ./proposal-list.component.html */ "./src/app/proposal-list/proposal-list.component.html"),
            styles: [__webpack_require__(/*! ./proposal-list.component.css */ "./src/app/proposal-list/proposal-list.component.css")]
        }),
        __metadata("design:paramtypes", [_proposal_service__WEBPACK_IMPORTED_MODULE_3__["ProposalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ProposalListComponent);
    return ProposalListComponent;
}());



/***/ }),

/***/ "./src/app/proposal.service.ts":
/*!*************************************!*\
  !*** ./src/app/proposal.service.ts ***!
  \*************************************/
/*! exports provided: ProposalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalService", function() { return ProposalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_config_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-config.module */ "./src/app/app-config.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ProposalService = /** @class */ (function () {
    function ProposalService(appConfig, http) {
        this.appConfig = appConfig;
        this.http = http;
    }
    ProposalService.prototype.getProposals = function () {
        return this.http.get('/api/proposals');
    };
    ProposalService.prototype.countProposals = function () {
        return this.http.get('/api/proposals/count');
    };
    ProposalService.prototype.addProposal = function (proposal) {
        return this.http.post('/api/proposals', proposal);
    };
    ProposalService.prototype.getProposal = function (proposal) {
        return this.http.get("/api/proposals/" + proposal._id);
    };
    ProposalService.prototype.editProposal = function (proposal) {
        return this.http.put("/api/proposals/" + proposal._id, proposal, { responseType: 'text' });
    };
    ProposalService.prototype.deleteProposal = function (proposal) {
        return this.http.delete("/api/proposals/" + proposal._id, { responseType: 'text' });
    };
    ProposalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_app_config_module__WEBPACK_IMPORTED_MODULE_2__["APP_CONFIG"])),
        __metadata("design:paramtypes", [_app_config_module__WEBPACK_IMPORTED_MODULE_2__["AppConfig"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProposalService);
    return ProposalService;
}());



/***/ }),

/***/ "./src/app/proposal.ts":
/*!*****************************!*\
  !*** ./src/app/proposal.ts ***!
  \*****************************/
/*! exports provided: Proposal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proposal", function() { return Proposal; });
var Proposal = /** @class */ (function () {
    function Proposal() {
    }
    return Proposal;
}());

;


/***/ }),

/***/ "./src/app/proposal/proposal.component.css":
/*!*************************************************!*\
  !*** ./src/app/proposal/proposal.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\n\tdisplay: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcG9zYWwvcHJvcG9zYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGVBQWU7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL3Byb3Bvc2FsL3Byb3Bvc2FsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcblx0ZGlzcGxheTogYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/proposal/proposal.component.html":
/*!**************************************************!*\
  !*** ./src/app/proposal/proposal.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"proposalForm\" (ngSubmit)=\"onSubmit()\" enctype=\"multipart/form-data\">\n\t<mat-accordion multi=\"false\">\n\t\t<mat-expansion-panel [expanded]=\"true\">\n\t\t\t<mat-expansion-panel-header>\n\t\t\t\t<mat-panel-title>General information</mat-panel-title>\n\t\t\t</mat-expansion-panel-header>\n\t\t\t<mat-form-field><input matInput formControlName=\"experimentTitle\" placeholder=\"Experiment title\">\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field><textarea matInput rows=\"5\" formControlName=\"briefSummary\"\n\t\t\t                          placeholder=\"Brief summary\"></textarea>\n\t\t\t</mat-form-field>\n\t\t</mat-expansion-panel>\n\t\t<mat-expansion-panel>\n\t\t\t<mat-expansion-panel-header>\n\t\t\t\t<mat-panel-title>Main proposer</mat-panel-title>\n\t\t\t</mat-expansion-panel-header>\n\t\t\t<mat-form-field><input matInput formControlName=\"mainProposerFirstName\" placeholder=\"First name\"></mat-form-field>\n\t\t\t<mat-form-field><input matInput formControlName=\"mainProposerLastName\" placeholder=\"Last name\"></mat-form-field>\n\t\t\t<br>\n\t\t\t<mat-form-field><input matInput formControlName=\"mainProposerPhone\" placeholder=\"Phone\"></mat-form-field>\n\t\t\t<mat-form-field><input matInput formControlName=\"mainProposerEmail\" placeholder=\"Email\"></mat-form-field>\n\t\t\t<br>\n\t\t\t<mat-form-field><input matInput formControlName=\"mainProposerAffiliation\" placeholder=\"Affiliation\"></mat-form-field>\n\t\t</mat-expansion-panel>\n\t\t<mat-expansion-panel>\n\t\t\t<mat-expansion-panel-header><mat-panel-title>Co-proposers</mat-panel-title></mat-expansion-panel-header>\n\t\t\t<button (click)=\"addCoProposer()\">Add Co-Proposer</button>\n\t\t\t<div *ngFor=\"let coProposer of coProposers.controls; let i=index;\">\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput [formControlName]=\"i.coProposerFirstName\" placeholder=\"First name\">\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput [formControlName]=\"i.coProposerLastName\" placeholder=\"Last name\">\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput [formControlName]=\"i.coProposerPhone\" placeholder=\"Phone\">\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput [formControlName]=\"i.coProposerEmail\" placeholder=\"Email\">\n\t\t\t\t</mat-form-field>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput [formControlName]=\"i.coProposerAffiliation\" placeholder=\"Affiliation\">\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t</mat-expansion-panel>\n\n\n\t\t<mat-expansion-panel>\n\t\t\t<mat-expansion-panel-header><mat-panel-title>Scheduling</mat-panel-title></mat-expansion-panel-header>\n\t\t\t<mat-form-field>\n\t\t\t\t<input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" formControlName=\"needByDate\">\n\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t\t<mat-datepicker #picker></mat-datepicker>\n\t\t\t</mat-form-field>\n\t\t\t<input matInput formControlName=\"needByDateMotivation\">\n\t\t\t<label for=\"needByDateAttachment\">Attach reference</label>\n\t\t\t<div><input type=\"file\" id=\"needByDateAttachment\" #picked (click)=\"message=''\" (change)=\"onPicked(picked)\"></div>\n\t\t</mat-expansion-panel>\n\n\n\t</mat-accordion>\n\t<mat-accordion>\n\t\t<mat-expansion-panel>\n\t\t\t<mat-expansion-panel-header><mat-panel-title>Crystallization</mat-panel-title></mat-expansion-panel-header>\n\t\t</mat-expansion-panel>\n\t</mat-accordion>\n\n\t<mat-card>\n\t\t<button mat-raised-button>Cancel</button>\n\t\t<button mat-raised-button>Next</button>\n\t</mat-card>\n</form>"

/***/ }),

/***/ "./src/app/proposal/proposal.component.ts":
/*!************************************************!*\
  !*** ./src/app/proposal/proposal.component.ts ***!
  \************************************************/
/*! exports provided: ProposalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalComponent", function() { return ProposalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _proposal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../proposal.service */ "./src/app/proposal.service.ts");
/* harmony import */ var _proposal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../proposal */ "./src/app/proposal.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/test.service */ "./src/app/services/test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProposalComponent = /** @class */ (function () {
    function ProposalComponent(proposalService, fb, auth, uploaderService) {
        this.proposalService = proposalService;
        this.fb = fb;
        this.auth = auth;
        this.uploaderService = uploaderService;
        this.proposal = new _proposal__WEBPACK_IMPORTED_MODULE_3__["Proposal"]();
        this.proposalForm = this.fb.group({
            experimentTitle: [''],
            briefSummary: [''],
            mainProposerFirstName: [''],
            mainProposerLastName: [''],
            mainProposerAffiliation: [''],
            mainProposerEmail: [''],
            mainProposerPhone: [''],
            coProposers: this.fb.array([
                this.fb.control('')
            ]),
            needByDate: [''],
            needByDateMotivation: [''],
            needByDateAttachment: [''],
            lab: [''],
            crystallization: this.fb.group({
                moleculeName: [''],
                moleculeIdentifier: [''],
                molecularWeight: [''],
                oligomerizationState: [''],
                pbdId: [''],
                doi: [''],
                pbdIdReferenceAttachment: [''],
                crystallizationRequirements: [''],
                crystallizationPrecipitantComposition: [''],
                previousCrystallizationExperience: [''],
                estimatedCrystallizationProductionTime: [''],
                typicalCrystalSize: [''],
                typicalYieldMgPerLiter: [''],
                storageConditions: [''],
                stability: [''],
                buffer: [''],
                levelOfDeuteration: [''],
                typicalProteinConcentrationUsed: ['']
            }),
            biomassDeuteration: this.fb.group({
                organismProvidedByUser: false,
                organismDetails: [''],
                organismReferenceAttachment: [''],
                amountNeeded: [''],
                stateOfMaterial: [''],
                amountOfMaterialMotivation: [''],
                deuterationLevelRequired: [''],
                deuterationLevelMotivation: ['']
            }),
            proteinDeuteration: this.fb.group({
                moleculeName: [''],
                moleculeIdentifier: [''],
                molecularWeight: [''],
                oligomerizationState: [''],
                expressionRequirements: [''],
                moleculeOrigin: [''],
                expressionPlasmidProvidedByUser: [''],
                details: [''],
                amountNeeded: [''],
                amountNeededMotivation: [''],
                deuterationLevelRequired: [''],
                deuterationLevelMotivation: [''],
                needsPurificationSupport: [''],
                needsPurificationSupportAttachment: [''],
                hasDoneUnlabeledProteinExpression: [''],
                hasPurifiedUnlabeledProtein: [''],
                hasProteinDeuterationExperience: ['']
            }),
            chemicalDeuteration: this.fb.group({
                moleculeName: [''],
                amount: [''],
                amountMotivation: [''],
                deuterationLocationAndPercentage: [''],
                deuterationLevelMotivation: [''],
                chemicalStructure: [''],
                hasPreviousProductionExperience: [''],
                hasPreviousProductionExperienceAttachment: ['']
            }),
            proposalTemplate: ['']
        });
    }
    ProposalComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ProposalComponent.prototype, "coProposers", {
        get: function () {
            return this.proposalForm.get('coProposers');
        },
        enumerable: true,
        configurable: true
    });
    ProposalComponent.prototype.addCoProposer = function () {
        event.preventDefault();
        this.coProposers.push(this.fb.control(''));
    };
    ProposalComponent.prototype.addProposal = function () {
        this.proposalService.addProposal(this.proposalForm.value).subscribe(function (data) {
            return function (error) { return console.log(error); };
        });
    };
    ProposalComponent.prototype.onPicked = function (input) {
        var _this = this;
        var file = input.files[0];
        console.log(file.name);
        if (file) {
            this.uploaderService.upload(file).subscribe(function (msg) {
                input.value = null;
                _this.message = msg;
            });
        }
    };
    ProposalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-proposal',
            template: __webpack_require__(/*! ./proposal.component.html */ "./src/app/proposal/proposal.component.html"),
            styles: [__webpack_require__(/*! ./proposal.component.css */ "./src/app/proposal/proposal.component.css")],
            providers: [_services_test_service__WEBPACK_IMPORTED_MODULE_5__["TestService"]]
        }),
        __metadata("design:paramtypes", [_proposal_service__WEBPACK_IMPORTED_MODULE_2__["ProposalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_test_service__WEBPACK_IMPORTED_MODULE_5__["TestService"]])
    ], ProposalComponent);
    return ProposalComponent;
}());



/***/ }),

/***/ "./src/app/proposals/proposals.component.css":
/*!***************************************************!*\
  !*** ./src/app/proposals/proposals.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".proposal-list{\n\twidth: 100%;\n\tmargin: 2rem auto;\n}\n.createProposal{\n\twidth: 80%;\n\tmargin: 2rem auto;\n}\n.tab-4 tr{\n\tpadding: 1rem;\n}\n.tab-4 td{\n\tpadding: 1rem;\n\tmargin: 0 auto;\n}\nmat-form-field{\n\twidth: 80%;\n\tmargin: 1rem auto;\n}\nmat-card-footer{\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcG9zYWxzL3Byb3Bvc2Fscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQjtBQUNEO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQjtBQUVEO0NBQ0MsY0FBYztDQUNkO0FBQ0Q7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmO0FBQ0Q7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCO0FBQ0Q7Q0FDQyxjQUFjO0NBQ2QsK0JBQStCO0NBQy9CIiwiZmlsZSI6InNyYy9hcHAvcHJvcG9zYWxzL3Byb3Bvc2Fscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3Bvc2FsLWxpc3R7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXJnaW46IDJyZW0gYXV0bztcbn1cbi5jcmVhdGVQcm9wb3NhbHtcblx0d2lkdGg6IDgwJTtcblx0bWFyZ2luOiAycmVtIGF1dG87XG59XG5cbi50YWItNCB0cntcblx0cGFkZGluZzogMXJlbTtcbn1cbi50YWItNCB0ZHtcblx0cGFkZGluZzogMXJlbTtcblx0bWFyZ2luOiAwIGF1dG87XG59XG5tYXQtZm9ybS1maWVsZHtcblx0d2lkdGg6IDgwJTtcblx0bWFyZ2luOiAxcmVtIGF1dG87XG59XG5tYXQtY2FyZC1mb290ZXJ7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/proposals/proposals.component.html":
/*!****************************************************!*\
  !*** ./src/app/proposals/proposals.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"proposals.length === 0\">\n\tThere are no proposals in the database. Create a new proposal below.\n</section>\n<section *ngIf=\"!isEditing && !isCreating\" class=\"proposal-list\">\n\t<table style=\"width:100%;\">\n\t\t<tr>\n\t\t\t<td>ID</td>\n\t\t\t<td>Title</td>\n\t\t\t<td>Lab</td>\n\t\t\t<td>Options</td>\n\t\t</tr>\n\t\t<tr *ngFor=\"let proposal of proposals\">\n\t\t\t<td>{{proposal._id}}</td>\n\t\t\t<td>{{proposal.experimentTitle}}</td>\n\t\t\t<td>{{proposal.lab}}</td>\n\t\t\t<td>\n\t\t\t\t<button class=\"btn btn-sm btn-primary\" (click)=\"enableEditing(proposal)\">\n\t\t\t\t\t<i class=\"fa fa-pencil\"></i> Edit\n\t\t\t\t</button>\n\t\t\t</td>\n\t\t\t<td>\n\t\t\t\t<button class=\"btn btn-sm btn-danger ml-1\" (click)=\"deleteProposal(proposal)\">\n\t\t\t\t\t<i class=\"fa fa-trash\"></i> Delete\n\t\t\t\t</button>\n\t\t\t</td>\n\t\t</tr>\n\t</table>\n</section>\n<a mat-raised-button class=\"btn btn-sm btn-danger ml-1\" *ngIf=\"!isCreating && !isEditing\" (click)=\"enableCreating()\">Create\n\tnew\n\tproposal</a>\n\n<section *ngIf=\"isEditing\" class=\"createProposal\">\n\n\t<form (ngSubmit)=\"editProposal(proposal)\">\n\t\t<mat-card>\n\t\t\t<mat-card-content>\n\t\t\t\t<mat-form-field><input matInput [(ngModel)]=\"proposal.experimentTitle\" name=\"experimentTitle\"\n\t\t\t\t                       placeholder=\"Experiment title\"></mat-form-field>\n\t\t\t\t<mat-form-field><textarea rows=\"4\" cols=\"40\" matInput [(ngModel)]=\"proposal.briefSummary\"\n\t\t\t\t                          name=\"briefSummary\" placeholder=\"Brief summary\"></textarea></mat-form-field>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t<h4>Main proposer</h4>\n\t\t\t\t<mat-form-field><input matInput [(ngModel)]=\"proposal.mainProposerFirstName\"\n\t\t\t\t                       name=\"mainProposerFirstName\" placeholder=\"First name\"></mat-form-field>\n\t\t\t\t<mat-form-field><input matInput [(ngModel)]=\"proposal.mainProposerLastName\" name=\"mainProposerLastName\"\n\t\t\t\t                       placeholder=\"Last name\"></mat-form-field>\n\t\t\t\t<mat-form-field><input matInput [(ngModel)]=\"proposal.mainProposerAffiliation\"\n\t\t\t\t                       name=\"mainProposerAffiliation\" placeholder=\"Affiliation\"></mat-form-field>\n\t\t\t\t<mat-form-field><input matInput [(ngModel)]=\"proposal.mainProposerPhone\" name=\"mainProposerPhone\"\n\t\t\t\t                       placeholder=\"phone\"></mat-form-field>\n\t\t\t\t<mat-form-field><input matInput [(ngModel)]=\"proposal.mainProposerEmail\" name=\"mainProposerEmail\"\n\t\t\t\t                       placeholder=\"email\"></mat-form-field>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t<h4>Scheduling</h4>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<p>Please motivate the chosen date (e.g. based on awarded beamtime, or described intention to\n\t\t\t\t\t\tapply):</p>\n\t\t\t\t\t<input matInput [(ngModel)]=\"proposal.needByDateMotivation\" name=\"needByDateMotivation\">\n\t\t\t\t</mat-form-field>\n\t\t\t\t<fieldset>\n\t\t\t\t\t<p>Upload copy of beamtime proposal</p>\n\t\t\t\t\t<label>Attach reference</label>\n\t\t\t\t\t<input type=\"file\" name=\"{{proposal._id + '-needByDateAttachment'}}\" #picked\n\t\t\t\t\t       (click)=\"message=''\"\n\t\t\t\t\t       (change)=\"onPicked(picked)\">\n\t\t\t\t</fieldset>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"needByDate\"\n\t\t\t\t\t       name=\"needByDate\">\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t\t\t<mat-datepicker #picker></mat-datepicker>\n\t\t\t\t</mat-form-field>\n\t\t\t\t<br>\n\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t<br>\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<p>Select which lab/instrument you wish to apply to:</p>\n\t\t\t\t\t<mat-select [(ngModel)]=\"proposal.lab\" name=\"lab\">\n\t\t\t\t\t\t<mat-option value=\"DEMAX\">DEMAX</mat-option>\n\t\t\t\t\t</mat-select>\n\t\t\t\t</mat-form-field>\n\n\t\t\t</mat-card-content>\n\t\t\t<mat-card-action>\n\t\t\t\t<button mat-rasied-button (click)=\"cancelEditing()\">Cancel</button>\n\t\t\t\t<button mat-rasied-button type=\"submit\">Save</button>\n\t\t\t</mat-card-action>\n\t\t</mat-card>\n\t\t<mat-expansion-panel>\n\t\t\t<mat-expansion-panel-header>\n\t\t\t\t<mat-panel-title>Biomass</mat-panel-title>\n\t\t\t</mat-expansion-panel-header>\n\t\t\t<fieldset>\n\t\t\t\t<p> Will user provide the organism for us to grow under deuterated conditions?</p>\n\t\t\t\t<mat-radio-group name=\"biomassDeuteration.organismProvidedByUser\"\n\t\t\t\t                 [(ngModel)]=\"proposal.biomassDeuteration.organismProvidedByUser\">\n\t\t\t\t\t<mat-radio-button value=\"yes\">Yes</mat-radio-button>\n\t\t\t\t\t<mat-radio-button value=\"no\">No</mat-radio-button>\n\t\t\t\t</mat-radio-group>\n\t\t\t</fieldset>\n\t\t\t<mat-form-field>\n\t\t\t\t<p>What is the organism?</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput name=\"biomassDeuteration.organismDetails\"\n\t\t\t\t          [(ngModel)]=\"proposal.biomassDeuteration.organismDetails\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t\t<p> How much material do you need?</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput name=\"biomassDeuteration.amountNeeded\"\n\t\t\t\t          [(ngModel)]=\"proposal.biomassDeuteration.amountNeeded\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t\t<p> Indicate wet or dry mass:</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput name=\"biomassDeuteration.stateOfMaterial\"\n\t\t\t\t          [(ngModel)]=\"proposal.biomassDeuteration.stateOfMaterial\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t\t<p> Justify amount:</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t          name=\"biomassDeuteration.amountOfMaterialMotivation\"\n\t\t\t\t          [(ngModel)]=\"proposal.biomassDeuteration.amountOfMaterialMotivation\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-radio-group name=\"biomassDeuteration.deuterationLevelRequired\"\n\t\t\t                 [(ngModel)]=\"proposal.biomassDeuteration.deuterationLevelRequired\">\n\t\t\t\t<p> Level of deuteration required:</p>\n\t\t\t\t<mat-radio-button value=\"partial\">Partial (65-80% with unlabeled carbon source)\n\t\t\t\t</mat-radio-button>\n\t\t\t\t<mat-radio-button value=\"full\">Full (~99% with labeled carbon source)\n\t\t\t\t</mat-radio-button>\n\t\t\t</mat-radio-group>\n\t\t\t<mat-form-field>\n\t\t\t\t<p> Justify level of D incorporation:</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t          name=\"biomassDeuteration.deuterationLevelMotivation\"\n\t\t\t\t          [(ngModel)]=\"proposal.biomassDeuteration.deuterationLevelMotivation\"></textarea>\n\t\t\t</mat-form-field>\n\n\t\t</mat-expansion-panel>\n\n\t\t<mat-expansion-panel>\n\t\t\t<mat-expansion-panel-header>\n\t\t\t\t<mat-panel-title>Protein</mat-panel-title>\n\t\t\t</mat-expansion-panel-header>\n\t\t\t<mat-form-field>\n\t\t\t\t<p> Name of molecule to be deuterated (e.g. superoxide dismutase):</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput name=\"proteinDeuteration.moleculeName\"\n\t\t\t\t          [(ngModel)]=\"proposal.proteinDeuteration.moleculeName\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t\t<p> FASTA sequence or Uniprot number:</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t          name=\"proteinDeuteration.moleculeIdentifier\"\n\t\t\t\t          [(ngModel)]=\"proposal.proteinDeuteration.moleculeIdentifier\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t\t<p> Molecular weight (kDA):</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput name=\"proteinDeuteration.molecularWeight\"\n\t\t\t\t          [(ngModel)]=\"proposal.proteinDeuteration.molecularWeight\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t\t<p> Oligomerizarion state? (e.g. homodimer, tetramer etc.):</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t          name=\"proteinDeuteration.oligomerizationState\"\n\t\t\t\t          [(ngModel)]=\"proposal.proteinDeuteration.oligomerizationState\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t\t<p> Does the protein have any co-factors or ligands required for expression?\n\t\t\t\t\tSpecify:</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t          name=\"proteinDeuteration.expressionRequirements\"\n\t\t\t\t          [(ngModel)]=\"proposal.proteinDeuteration.expressionRequirements\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t\t<p> Origin of molecules (e.g. human, E. coli, S. cerevisiae):</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput name=\"proteinDeuteration.moleculeOrigin\"\n\t\t\t\t          [(ngModel)]=\"proposal.proteinDeuteration.moleculeOrigin\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t\t<p>If “yes”, please provide details (e.g. pET31b, C-terminal His-tag, Amp\n\t\t\t\t\tselection):\n\t\t\t\t\t(If “no”, we will design & order a plasmid commercially)</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput name=\"proteinDeuteration.details\"\n\t\t\t\t          [(ngModel)]=\"proposal.proteinDeuteration.details\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t\t<p> How much material do you need:</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput name=\"proteinDeuteration.amountNeeded\"\n\t\t\t\t          [(ngModel)]=\"proposal.proteinDeuteration.amountNeeded\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-radio-group name=\"proteinDeuteration.expressionPlasmidProvidedByUser\"\n\t\t\t                 [(ngModel)]=\"proposal.proteinDeuteration.expressionPlasmidProvidedByUser\">\n\t\t\t\t<p>Will you provide an expression plasmid?</p>\n\t\t\t\t<mat-radio-button value=\"yes\">Yes</mat-radio-button>\n\t\t\t\t<mat-radio-button value=\"no\">No</mat-radio-button>\n\t\t\t</mat-radio-group>\n\t\t\t<mat-form-field>\n\t\t\t\t<p>Justify amount:</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t          name=\"roteinDeuteration.amountNeededMotivation\"\n\t\t\t\t          [(ngModel)]=\"proposal.proteinDeuteration.amountNeededMotivation\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t\t<p>Level of deuteration required</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t          name=\"proteinDeuteration.deuterationLevelRequired\"\n\t\t\t\t          [(ngModel)]=\"proposal.proteinDeuteration.deuterationLevelRequired\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t\t<p>Justify level of D incorporation:</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t          name=\"proteinDeuteration.deuterationLevelMotivation\"\n\t\t\t\t          [(ngModel)]=\"proposal.proteinDeuteration.deuterationLevelMotivation\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-radio-group name=\"proteinDeuteration.needsPurificationSupport\"\n\t\t\t                 [(ngModel)]=\"proposal.proteinDeuteration.needsPurificationSupport\">\n\t\t\t\t<p>Will you need DEMAX to purify the protein from deuterated biomass?</p>\n\t\t\t\t<mat-radio-button value=\"yes\">Yes</mat-radio-button>\n\t\t\t\t<mat-radio-button value=\"no\">No</mat-radio-button>\n\t\t\t</mat-radio-group>\n\t\t\t<mat-radio-group name=\"proteinDeuteration.hasDoneUnlabeledProteinExpression\"\n\t\t\t                 [(ngModel)]=\"proposal.proteinDeuteration.hasDoneUnlabeledProteinExpression\">\n\t\t\t\t<p>Has expression been done for the unlabeled protein?</p>\n\t\t\t\t<mat-radio-button value=\"yes\">Yes</mat-radio-button>\n\t\t\t\t<mat-radio-button value=\"no\">No</mat-radio-button>\n\t\t\t\t<input type=\"text\" placeholder=\"Typical yield\">\n\t\t\t</mat-radio-group>\n\t\t\t<mat-radio-group name=\"proteinDeuteration.hasPurifiedUnlabeledProtein\"\n\t\t\t                 [(ngModel)]=\"proposal.proteinDeuteration.hasPurifiedUnlabeledProtein\">\n\t\t\t\t<p> Have you been able to purify the unlabeled protein?</p>\n\t\t\t\t<mat-radio-button value=\"yes\">Yes</mat-radio-button>\n\t\t\t\t<mat-radio-button value=\"no\">No</mat-radio-button>\n\t\t\t\t<p> Please include chromatogram & image of SDS-PAGE in proposal.proteinDeuteration.</p>\n\t\t\t</mat-radio-group>\n\t\t\t<mat-radio-group name=\"proteinDeuteration.hasProteinDeuterationExperience\"\n\t\t\t                 [(ngModel)]=\"proposal.proteinDeuteration.hasProteinDeuterationExperience\">\n\t\t\t\t<p>Have you tried to deuterate the protein yourself, even in small scale?</p>\n\t\t\t\t<mat-radio-button value=\"yes\">Yes</mat-radio-button>\n\t\t\t\t<mat-radio-button value=\"no\">No</mat-radio-button>\n\t\t\t\t<input type=\"text\" placeholder=\"Results?\">\n\t\t\t</mat-radio-group>\n\t\t</mat-expansion-panel>\n\n\n\t\t<mat-expansion-panel>\n\t\t\t<mat-expansion-panel-header>\n\t\t\t\t<mat-panel-title>Chemical deuteration</mat-panel-title>\n\t\t\t\t<mat-panel-description></mat-panel-description>\n\t\t\t</mat-expansion-panel-header>\n\t\t\t<mat-form-field>\n\t\t\t\t<p>Molecule/s to be deuterated (name):</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput name=\"chemicalDeuteration.moleculeName\"\n\t\t\t\t          [(ngModel)]=\"proposal.chemicalDeuteration.moleculeName\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t\t<p>Amount of material required (mass):</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput name=\"chemicalDeuteration.amount\"\n\t\t\t\t          [(ngModel)]=\"proposal.chemicalDeuteration.amount\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t\t<p>Justify amount:</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput name=\"chemicalDeuteration.amountMotivation\"\n\t\t\t\t          [(ngModel)]=\"proposal.chemicalDeuteration.amountMotivation\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t\t<p>Indicate percentage and location of deuteration:</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t          name=\"chemicalDeuteration.deuterationLocationAndPercentage\"\n\t\t\t\t          [(ngModel)]=\"proposal.chemicalDeuteration.deuterationLocationAndPercentage\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field>\n\t\t\t\t<p>Justify level of deuteration:</p>\n\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t          name=\"chemicalDeuteration.deuterationLevelMotivation\"\n\t\t\t\t          [(ngModel)]=\"proposal.chemicalDeuteration.deuterationLevelMotivation\"></textarea>\n\t\t\t</mat-form-field>\n\t\t\t<mat-radio-group name=\"chemicalDeuteration.hasPreviousProductionExperience\"\n\t\t\t                 [(ngModel)]=\"proposal.chemicalDeuteration.hasPreviousProductionExperience\">\n\t\t\t\t<p>Has this molecule (or an unlabeled/isotopic analogue) been prepared by yourself\n\t\t\t\t\tor\n\t\t\t\t\tothers?</p>\n\t\t\t\t<mat-radio-button value=\"yes\">Yes</mat-radio-button>\n\t\t\t\t<mat-radio-button value=\"no\">No</mat-radio-button>\n\t\t\t\t<p> If “yes”, please provide protocol (attach a reference PDF if published):</p>\n\t\t\t</mat-radio-group>\n\t\t</mat-expansion-panel>\n\t</form>\n</section>\n\n\n<section *ngIf=\"isCreating\" class=\"createProposal\">\n\t<form enctype=\"multipart/form-data\" [formGroup]=\"proposalForm\" (ngSubmit)=\"addProposal()\">\n\t\t<mat-tab-group [selectedIndex]=\"selectedIndex\">\n\t\t\t<mat-tab label=\"1. Proposal guidelines\">\n\t\t\t\t<p> Users are strongly encouraged to contact DEMAX staff prior to preparing and\n\t\t\t\t\tsubmitting a\n\t\t\t\t\tdeuteration/crystallization proposal. General enquiries can be sent to: <a\n\t\t\t\t\t\t\thref=\"mailto:demax@esss.se\">demax@esss.se</a>\n\t\t\t\t\tor to one of the<a routerLink=\"/contact\"> subject matter experts.</a>\n\t\t\t\t</p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li> Proposals should be written in English, properly referenced, and prepared in\n\t\t\t\t\t\tthe <a\n\t\t\t\t\t\t\t\thref=\"http://localhost:8080/word/attachment\">Word template.</a> Please\n\t\t\t\t\t\tkeep to the 2\n\t\t\t\t\t\tpage limit, including Summary, Background (Science Case, Practical\n\t\t\t\t\t\tConsideration, References,\n\t\t\t\t\t\tFigures/Tables)\n\t\t\t\t\t</li>\n\t\t\t\t\t<li> Access to DEMAX is granted on the basis of both a technical and a peer-review\n\t\t\t\t\t\tprocess.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li> Proposals awarded during initial operations (2019-2022) will be free of charge.\n\t\t\t\t\t\tDuring formal\n\t\t\t\t\t\tuser\n\t\t\t\t\t\toperations (beyond 2023) we reserve the right to ask for partial financial\n\t\t\t\t\t\tcontributions towards\n\t\t\t\t\t\tconsumables\n\t\t\t\t\t\t& shipping costs.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li> During initial operations we will not limit access to DEMAX based on\n\t\t\t\t\t\tESS-membership. Beyond\n\t\t\t\t\t\tthis\n\t\t\t\t\t\tperiod\n\t\t\t\t\t\twe\n\t\t\t\t\t\twill respect the user access policy that will be applicable ESS-wide.\n\t\t\t\t\t</li>\n\t\t\t\t\t<li> Biological and chemical deuteration proposals are run as a service but users\n\t\t\t\t\t\tfor protein\n\t\t\t\t\t\tcrystallization\n\t\t\t\t\t\tare welcome to come in person as well.\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<div style=\"text-align: right;\">\n\t\t\t\t\t<button mat-raised-button style=\"background-color: #005CBF; color: white;\" (click)=\"selectTab(1)\">\n\t\t\t\t\t\tNext\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</mat-tab>\n\t\t\t<mat-tab label=\"2. General information\">\n\t\t\t\t<mat-card>\n\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t<mat-form-field><input matInput formControlName=\"experimentTitle\"\n\t\t\t\t\t\t                       placeholder=\"Experiment title\"></mat-form-field>\n\t\t\t\t\t\t<mat-form-field><textarea rows=\"4\" cols=\"40\" matInput formControlName=\"briefSummary\"\n\t\t\t\t\t\t                          placeholder=\"Brief summary\"></textarea></mat-form-field>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h4>Main proposer</h4>\n\t\t\t\t\t\t<mat-form-field><input matInput formControlName=\"mainProposerFirstName\"\n\t\t\t\t\t\t                       placeholder=\"{{auth.currentUser.firstName}}\"></mat-form-field>\n\t\t\t\t\t\t<mat-form-field><input matInput formControlName=\"mainProposerLastName\"\n\t\t\t\t\t\t                       placeholder=\"{{auth.currentUser.lastName}}\">\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t<mat-form-field><input matInput formControlName=\"mainProposerAffiliation\"\n\t\t\t\t\t\t                       placeholder=\"{{auth.currentUser.employerName}}\"></mat-form-field>\n\t\t\t\t\t\t<mat-form-field><input matInput formControlName=\"mainProposerPhone\"\n\t\t\t\t\t\t                       placeholder=\"{{auth.currentUser.phone}}\">\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t<mat-form-field><input matInput formControlName=\"mainProposerEmail\"\n\t\t\t\t\t\t                       placeholder=\"{{auth.currentUser.email}}\">\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h4>Co-Proposers</h4>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<br>\n\n\n\t\t\t\t\t\t<h4>Scheduling</h4>\n\t\t\t\t\t\t<p>What date do you need the samples?</p>\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"\n\t\t\t\t\t\t\t       formControlName=\"needByDate\">\n\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t\t\t\t\t<mat-datepicker #picker></mat-datepicker>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t<p>Please motivate the chosen date (e.g. based on awarded beamtime, or described intention\n\t\t\t\t\t\t\t\tto\n\t\t\t\t\t\t\t\tapply):</p>\n\t\t\t\t\t\t\t<input matInput formControlName=\"needByDateMotivation\">\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t<p>Upload copy of beamtime proposal</p>\n\t\t\t\t\t\t\t<label for=\"needByDateAttachment\">Attach reference</label>\n\t\t\t\t\t\t\t<input type=\"file\" id=\"needByDateAttachment\" name=\"needByDateAttachment\" #picked\n\t\t\t\t\t\t\t       (click)=\"message=''\"\n\t\t\t\t\t\t\t       (change)=\"onPicked(picked)\">\n\t\t\t\t\t\t</fieldset>\n\n\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<h4>Resources</h4>\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t<p>Select which lab/instrument you wish to apply to:</p>\n\t\t\t\t\t\t\t<mat-select formControlName=\"lab\" style=\"width: 50%;\">\n\t\t\t\t\t\t\t\t<mat-option value=\"DEMAX\">DEMAX</mat-option>\n\t\t\t\t\t\t\t\t<mat-option value=\"FLUCO\">FLUCO</mat-option>\n\t\t\t\t\t\t\t\t<mat-option value=\"MESI\">MESI</mat-option>\n\t\t\t\t\t\t\t\t<mat-option value=\"PREMP\">PREMP</mat-option>\n\t\t\t\t\t\t\t\t<mat-option value=\"SCUO\">SCUO</mat-option>\n\t\t\t\t\t\t\t\t<mat-option value=\"SULFI\">SULFI</mat-option>\n\t\t\t\t\t\t\t\t<mat-option value=\"TEFI\">TEFI</mat-option>\n\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t<p>In the next sections you will fill out the applicable area of support your proposal requires.\n\t\t\t\t\t\t\tSelect one, or as many as apply, from (A) Crystallization, (B) Biological Deuteration, (C)\n\t\t\t\t\t\t\tChemical Deuteration.</p>\n\t\t\t\t\t</mat-card-content>\n\t\t\t\t\t<mat-card-actions style=\"text-align: center\">\n\t\t\t\t\t\t<button mat-raised-button style=\"background-color: #0094CA; margin: 1rem 2rem; color: white;\"\n\t\t\t\t\t\t        (click)=\"addProposal()\">Save\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</mat-card-actions>\n\t\t\t\t\t<mat-card-footer>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<button mat-raised-button style=\"background-color: indianred; margin: 1rem 2rem;\"\n\t\t\t\t\t\t\t        (click)=\"selectTab(0)\">Back\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button mat-raised-button\n\t\t\t\t\t\t\t        style=\"background-color: #005CBF; margin: 1rem 2rem; color: white;\"\n\t\t\t\t\t\t\t        (click)=\"selectTab(2)\">Next\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-card-footer>\n\t\t\t\t</mat-card>\n\t\t\t</mat-tab>\n\t\t\t<mat-tab label=\"3. Deuteration details\">\n\t\t\t\t<mat-accordion>\n\t\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>Crystallization</mat-panel-title>\n\t\t\t\t\t\t\t<mat-panel-description></mat-panel-description>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<div formGroupName=\"crystallization\" class=\"crystallization\">\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>Name of molecule to be crystallized (e.g. superoxide dismutase)</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"moleculeName\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>FASTA sequence or Uniprot number</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"moleculeIdentifier\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>Oligomerizarion state? (e.g. homodimer, tetramer etc.)</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"oligomerizationState\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t\t<p>PDB ID of crystal structure</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"pbdId\"></textarea>\n\t\t\t\t\t\t\t</fieldset>\n\n\t\t\t\t\t\t\t<p>If available, provide a DOI - otherwise upload a reference in PDF format</p>\n\n\t\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"doi\" formControlName=\"doi\">\n\t\t\t\t\t\t\t</fieldset>\n\n\t\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t\t<p>Reference</p>\n\t\t\t\t\t\t\t\t<input type=\"file\" formControlName=\"pbdIdReferenceAttachment\">\n\t\t\t\t\t\t\t</fieldset>\n\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>Does the protein have any co-factors or ligands required for crystallization?\n\t\t\t\t\t\t\t\t\tSpecify:</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t\t\t\t\t          formControlName=\"crystallizationRequirements\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>Known crystallization precipitant composition (incl. buffer, salt, additives, pH)</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t\t\t\t\t          formControlName=\"crystallizationPrecipitantComposition\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>What crystallization method, volume, and temperature have you used in the past? (e.g.\n\t\t\t\t\t\t\t\t\tvapour diffusion, 10 L drops, room temperature)\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t\t\t\t\t          formControlName=\"previousCrystallizationExperience\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>How long do your crystals take to appear?:</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t\t\t\t\t          formControlName=\"estimatedCrystallizationProductionTime\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>What is the typical size of your crystal (m x m x m):</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"typicalCrystalSize\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t\t<h3>Details from protein preparation</h3>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>Typical yield (mg per liter of culture)</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t\t\t\t\t          formControlName=\"typicalYieldMgPerLiter\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>Storage conditions (e.g. stable at 4 C or frozen at -20 C)</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"storageConditions\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>Stability</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"stability\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>What buffer is your protein in?:</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"buffer\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>Is your protein partially or fully deuterated?</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"levelOfDeuteration\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>What protein concentration do you usually use for crystallization:</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t\t\t\t\t          formControlName=\"typicalProteinConcentrationUsed\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t<mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>Biological deuteration</mat-panel-title>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n\t\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t\t<mat-panel-title>For biomass</mat-panel-title>\n\t\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t\t<div formGroupName=\"biomassDeuteration\">\n\t\t\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t\t\t<p>Select Protein or Biomass (E. coli, yeast)</p>\n\t\t\t\t\t\t\t\t\t<mat-radio-group>\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"protein\">Protein</mat-radio-button>\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"biomass\">Biomass</mat-radio-button>\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"other\">Other</mat-radio-button>\n\t\t\t\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t\t<fieldset>\n\t\t\t\t\t\t\t\t\t<p> Will user provide the organism for us to grow under deuterated conditions?</p>\n\t\t\t\t\t\t\t\t\t<mat-radio-group formControlName=\"organismProvidedByUser\">\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"yes\">Yes</mat-radio-button>\n\t\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"no\">No</mat-radio-button>\n\t\t\t\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t\t\t\t</fieldset>\n\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t<p>What is the organism?</p>\n\t\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"organismDetails\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t<p> How much material do you need?</p>\n\t\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"amountNeeded\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t<p> Indicate wet or dry mass:</p>\n\t\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"stateOfMaterial\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t<p> Justify amount:</p>\n\t\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t\t\t\t\t\t          formControlName=\"amountOfMaterialMotivation\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-radio-group formControlName=\"deuterationLevelRequired\">\n\t\t\t\t\t\t\t\t\t<p> Level of deuteration required:</p>\n\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"partial\">Partial (65-80% with unlabeled carbon source)\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"full\">Full (~99% with labeled carbon source)\n\t\t\t\t\t\t\t\t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t<p> Justify level of D incorporation:</p>\n\t\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t\t\t\t\t\t          formControlName=\"deuterationLevelMotivation\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t\t<mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\n\t\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t\t<mat-panel-title>For proteins</mat-panel-title>\n\t\t\t\t\t\t\t</mat-expansion-panel-header>\n\n\t\t\t\t\t\t\t<div formGroupName=\"proteinDeuteration\">\n\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t<p> Name of molecule to be deuterated (e.g. superoxide dismutase):</p>\n\t\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"moleculeName\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t<p> FASTA sequence or Uniprot number:</p>\n\t\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t\t\t\t\t\t          formControlName=\"moleculeIdentifier\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t<p> Molecular weight (kDA):</p>\n\t\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"molecularWeight\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t<p> Oligomerizarion state? (e.g. homodimer, tetramer etc.):</p>\n\t\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t\t\t\t\t\t          formControlName=\"oligomerizationState\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t<p> Does the protein have any co-factors or ligands required for expression?\n\t\t\t\t\t\t\t\t\t\tSpecify:</p>\n\t\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t\t\t\t\t\t          formControlName=\"expressionRequirements\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t<p> Origin of molecules (e.g. human, E. coli, S. cerevisiae):</p>\n\t\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"moleculeOrigin\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t<p>If “yes”, please provide details (e.g. pET31b, C-terminal His-tag, Amp\n\t\t\t\t\t\t\t\t\t\tselection):\n\t\t\t\t\t\t\t\t\t\t(If “no”, we will design & order a plasmid commercially)</p>\n\t\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"details\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t<p> How much material do you need:</p>\n\t\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"amountNeeded\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-radio-group formControlName=\"expressionPlasmidProvidedByUser\">\n\t\t\t\t\t\t\t\t\t<p>Will you provide an expression plasmid?</p>\n\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"yes\">Yes</mat-radio-button>\n\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"no\">No</mat-radio-button>\n\t\t\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t<p>Justify amount:</p>\n\t\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t\t\t\t\t\t          formControlName=\"amountNeededMotivation\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t<p>Level of deuteration required</p>\n\t\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t\t\t\t\t\t          formControlName=\"deuterationLevelRequired\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t\t<p>Justify level of D incorporation:</p>\n\t\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t\t\t\t\t\t          formControlName=\"deuterationLevelMotivation\"></textarea>\n\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t<mat-radio-group formControlName=\"needsPurificationSupport\">\n\t\t\t\t\t\t\t\t\t<p>Will you need DEMAX to purify the protein from deuterated biomass?</p>\n\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"yes\">Yes</mat-radio-button>\n\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"no\">No</mat-radio-button>\n\t\t\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t\t\t\t<mat-radio-group formControlName=\"hasDoneUnlabeledProteinExpression\">\n\t\t\t\t\t\t\t\t\t<p>Has expression been done for the unlabeled protein?</p>\n\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"yes\">Yes</mat-radio-button>\n\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"no\">No</mat-radio-button>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Typical yield\">\n\t\t\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t\t\t\t<mat-radio-group formControlName=\"hasPurifiedUnlabeledProtein\">\n\t\t\t\t\t\t\t\t\t<p> Have you been able to purify the unlabeled protein?</p>\n\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"yes\">Yes</mat-radio-button>\n\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"no\">No</mat-radio-button>\n\t\t\t\t\t\t\t\t\t<p> Please include chromatogram & image of SDS-PAGE in proposal.</p>\n\t\t\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t\t\t\t<mat-radio-group formControlName=\"hasProteinDeuterationExperience\">\n\t\t\t\t\t\t\t\t\t<p>Have you tried to deuterate the protein yourself, even in small scale?</p>\n\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"yes\">Yes</mat-radio-button>\n\t\t\t\t\t\t\t\t\t<mat-radio-button value=\"no\">No</mat-radio-button>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Results?\">\n\t\t\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t</mat-expansion-panel>\n\n\t\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>Chemical deuteration</mat-panel-title>\n\t\t\t\t\t\t\t<mat-panel-description></mat-panel-description>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<div formGroupName=\"chemicalDeuteration\" class=\"chemicalDeuteration\">\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>Molecule/s to be deuterated (name):</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"moleculeName\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>Amount of material required (mass):</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"amount\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>Justify amount:</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput formControlName=\"amountMotivation\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>Indicate percentage and location of deuteration:</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t\t\t\t\t          formControlName=\"deuterationLocationAndPercentage\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<p>Justify level of deuteration:</p>\n\t\t\t\t\t\t\t\t<textarea rows=\"4\" cols=\"40\" matInput\n\t\t\t\t\t\t\t\t          formControlName=\"deuterationLevelMotivation\"></textarea>\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t<mat-radio-group formControlName=\"hasPreviousProductionExperience\">\n\t\t\t\t\t\t\t\t<p>Has this molecule (or an unlabeled/isotopic analogue) been prepared by yourself\n\t\t\t\t\t\t\t\t\tor\n\t\t\t\t\t\t\t\t\tothers?</p>\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"yes\">Yes</mat-radio-button>\n\t\t\t\t\t\t\t\t<mat-radio-button value=\"no\">No</mat-radio-button>\n\t\t\t\t\t\t\t\t<p> If “yes”, please provide protocol (attach a reference PDF if published):</p>\n\t\t\t\t\t\t\t</mat-radio-group>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t<div style=\"text-align: center;\">\n\t\t\t\t\t\t<button mat-raised-button style=\"background-color: #0094CA; color: white;\"\n\t\t\t\t\t\t        (click)=\"addProposal()\">Save\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div style=\"display: flex; justify-content: space-between;\">\n\t\t\t\t\t\t<button mat-raised-button style=\"background-color: indianred;\"\n\t\t\t\t\t\t        (click)=\"selectTab(1)\">Back\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button mat-raised-button style=\"background-color: #005CBF; color: white;\"\n\t\t\t\t\t\t        (click)=\"selectTab(3)\">Next\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</mat-accordion>\n\t\t\t</mat-tab>\n\t\t\t<mat-tab label=\"4. Upload proposal & review\">\n\t\t\t\t<mat-card>\n\t\t\t\t\t<mat-card-content>\n\t\t\t\t\t\t<table class=\"tab-4\">\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td><p>Generate PDF for review</p></td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<button mat-raised-button style=\"background-color: red; color: white;\">Generate\n\t\t\t\t\t\t\t\t\t\tPDF\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</mat-card-content>\n\t\t\t\t\t<mat-card-actions>\n\t\t\t\t\t\t<button mat-raised-button style=\"background-color: #005CBF; color: white;\" type=\"submit\">Submit\n\t\t\t\t\t\t\tproposal\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</mat-card-actions>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<mat-card-footer>\n\t\t\t\t\t\t<button mat-raised-button style=\"background-color: indianred;\" (click)=\"selectTab(2)\">Back\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</mat-card-footer>\n\t\t\t\t</mat-card>\n\t\t\t</mat-tab>\n\t\t</mat-tab-group>\n\t</form>\n</section>"

/***/ }),

/***/ "./src/app/proposals/proposals.component.ts":
/*!**************************************************!*\
  !*** ./src/app/proposals/proposals.component.ts ***!
  \**************************************************/
/*! exports provided: ProposalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProposalsComponent", function() { return ProposalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _proposal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../proposal.service */ "./src/app/proposal.service.ts");
/* harmony import */ var _proposal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../proposal */ "./src/app/proposal.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_test_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/test.service */ "./src/app/services/test.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProposalsComponent = /** @class */ (function () {
    function ProposalsComponent(proposalService, formBuilder, uploaderService, http, auth) {
        this.proposalService = proposalService;
        this.formBuilder = formBuilder;
        this.uploaderService = uploaderService;
        this.http = http;
        this.auth = auth;
        this.proposal = new _proposal__WEBPACK_IMPORTED_MODULE_4__["Proposal"]();
        this.proposals = [];
        this.isEditing = false;
        this.isCreating = false;
        this.panelOpenState = false;
        this.selectedIndex = 0;
        this.step = 0;
        this.proposalForm = this.formBuilder.group({
            experimentTitle: [''],
            briefSummary: [''],
            mainProposerFirstName: [''],
            mainProposerLastName: [''],
            mainProposerAffiliation: [''],
            mainProposerEmail: [''],
            mainProposerPhone: [''],
            needByDate: [''],
            needByDateMotivation: [''],
            needByDateAttachment: [''],
            lab: [''],
            crystallization: this.formBuilder.group({
                moleculeName: [''],
                moleculeIdentifier: [''],
                molecularWeight: [''],
                oligomerizationState: [''],
                pbdId: [''],
                doi: [''],
                pbdIdReferenceAttachment: [''],
                crystallizationRequirements: [''],
                crystallizationPrecipitantComposition: [''],
                previousCrystallizationExperience: [''],
                estimatedCrystallizationProductionTime: [''],
                typicalCrystalSize: [''],
                typicalYieldMgPerLiter: [''],
                storageConditions: [''],
                stability: [''],
                buffer: [''],
                levelOfDeuteration: [''],
                typicalProteinConcentrationUsed: ['']
            }),
            biomassDeuteration: this.formBuilder.group({
                organismProvidedByUser: false,
                organismDetails: [''],
                organismReferenceAttachment: [''],
                amountNeeded: [''],
                stateOfMaterial: [''],
                amountOfMaterialMotivation: [''],
                deuterationLevelRequired: [''],
                deuterationLevelMotivation: ['']
            }),
            proteinDeuteration: this.formBuilder.group({
                moleculeName: [''],
                moleculeIdentifier: [''],
                molecularWeight: [''],
                oligomerizationState: [''],
                expressionRequirements: [''],
                moleculeOrigin: [''],
                expressionPlasmidProvidedByUser: [''],
                details: [''],
                amountNeeded: [''],
                amountNeededMotivation: [''],
                deuterationLevelRequired: [''],
                deuterationLevelMotivation: [''],
                needsPurificationSupport: [''],
                needsPurificationSupportAttachment: [''],
                hasDoneUnlabeledProteinExpression: [''],
                hasPurifiedUnlabeledProtein: [''],
                hasProteinDeuterationExperience: ['']
            }),
            chemicalDeuteration: this.formBuilder.group({
                moleculeName: [''],
                amount: [''],
                amountMotivation: [''],
                deuterationLocationAndPercentage: [''],
                deuterationLevelMotivation: [''],
                chemicalStructure: [''],
                hasPreviousProductionExperience: [''],
                hasPreviousProductionExperienceAttachment: ['']
            })
        });
    }
    ProposalsComponent.prototype.selectTab = function (index) {
        event.preventDefault();
        this.selectedIndex = index;
    };
    ProposalsComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ProposalsComponent.prototype.nextStep = function () {
        this.step++;
    };
    ProposalsComponent.prototype.prevStep = function () {
        this.step--;
    };
    ProposalsComponent.prototype.onSubmit = function () {
        var _this = this;
        console.warn(this.proposalForm.value);
        this.proposalService.addProposal(this.proposalForm.value).subscribe(function (res) {
            _this.proposals.push(res);
            _this.proposalForm.reset();
        }, function (error) { return console.log(error); });
    };
    ProposalsComponent.prototype.ngOnInit = function () {
        this.getProposals();
        this.addProposalForm = this.formBuilder.group({});
    };
    Object.defineProperty(ProposalsComponent.prototype, "coProposers", {
        get: function () {
            return this.proposalForm.get('coProposers');
        },
        enumerable: true,
        configurable: true
    });
    ProposalsComponent.prototype.addCoProposer = function () {
        event.preventDefault();
        this.coProposers.push(this.formBuilder.control(''));
    };
    ProposalsComponent.prototype.getProposals = function () {
        var _this = this;
        this.proposalService.getProposals().subscribe(function (data) { return _this.proposals = data; }, function (error) { return console.log(error); });
    };
    ProposalsComponent.prototype.addProposal = function () {
        var _this = this;
        this.proposalService.addProposal(this.proposalForm.value).subscribe(function (response) {
            _this.proposals.push(response);
            _this.proposalForm.reset();
            _this.isCreating = false;
        }, function (error) { return console.log(error); });
    };
    ProposalsComponent.prototype.enableCreating = function () {
        this.isCreating = true;
    };
    ProposalsComponent.prototype.enableEditing = function (proposal) {
        this.isEditing = true;
        this.proposal = proposal;
    };
    ProposalsComponent.prototype.cancelCreating = function () {
        this.isCreating = false;
        this.proposal = new _proposal__WEBPACK_IMPORTED_MODULE_4__["Proposal"]();
        this.getProposals();
    };
    ProposalsComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.isCreating = false;
        this.proposal = new _proposal__WEBPACK_IMPORTED_MODULE_4__["Proposal"]();
        this.getProposals();
    };
    ProposalsComponent.prototype.editProposal = function (proposal) {
        var _this = this;
        this.proposalService.editProposal(proposal).subscribe(function () {
            _this.isEditing = false;
            _this.isCreating = false;
            _this.proposal = proposal;
        }, function (error) { return console.log(error); });
    };
    ProposalsComponent.prototype.deleteProposal = function (proposal) {
        var _this = this;
        if (window.confirm('Are you sure you want to permanently delete this proposal?')) {
            this.proposalService.deleteProposal(proposal).subscribe(function () {
                var pos = _this.proposals.map(function (element) { return element._id; }).indexOf(proposal._id);
                _this.proposals.splice(pos, 1);
            }, function (error) { return console.log(error); });
        }
    };
    ProposalsComponent.prototype.onPicked = function (input) {
        var _this = this;
        var file = input.files[0];
        if (file) {
            this.uploaderService.upload(file).subscribe(function (msg) {
                input.name = file.name;
                _this.message = msg;
            });
        }
    };
    ProposalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-proposals',
            template: __webpack_require__(/*! ./proposals.component.html */ "./src/app/proposals/proposals.component.html"),
            styles: [__webpack_require__(/*! ./proposals.component.css */ "./src/app/proposals/proposals.component.css")],
            providers: [_services_test_service__WEBPACK_IMPORTED_MODULE_6__["TestService"]]
        }),
        __metadata("design:paramtypes", [_proposal_service__WEBPACK_IMPORTED_MODULE_3__["ProposalService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_test_service__WEBPACK_IMPORTED_MODULE_6__["TestService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ProposalsComponent);
    return ProposalsComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard-admin.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/auth-guard-admin.service.ts ***!
  \******************************************************/
/*! exports provided: AuthGuardAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardAdmin", function() { return AuthGuardAdmin; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardAdmin = /** @class */ (function () {
    function AuthGuardAdmin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardAdmin.prototype.canActivate = function () {
        return this.auth.isAdmin;
    };
    AuthGuardAdmin = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardAdmin);
    return AuthGuardAdmin;
}());



/***/ }),

/***/ "./src/app/services/auth-guard-login.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/auth-guard-login.service.ts ***!
  \******************************************************/
/*! exports provided: AuthGuardLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardLogin", function() { return AuthGuardLogin; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardLogin = /** @class */ (function () {
    function AuthGuardLogin(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardLogin.prototype.canActivate = function () {
        return this.auth.loggedIn;
    };
    AuthGuardLogin = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardLogin);
    return AuthGuardLogin;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(userService, router, jwtHelper) {
        this.userService = userService;
        this.router = router;
        this.jwtHelper = jwtHelper;
        this.loggedIn = false;
        this.isAdmin = false;
        this.currentUser = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        var token = localStorage.getItem('token');
        if (token) {
            var decodedUser = this.decodeUserFromToken(token);
            this.setCurrentUser(decodedUser);
        }
    }
    AuthService.prototype.login = function (emailAndPassword) {
        var _this = this;
        return this.userService.login(emailAndPassword).map(function (res) {
            localStorage.setItem('token', res.token);
            var decodedUser = _this.decodeUserFromToken(res.token);
            _this.setCurrentUser(decodedUser);
            return _this.loggedIn;
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.loggedIn = false;
        this.isAdmin = false;
        this.currentUser = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.router.navigate(['/']);
    };
    AuthService.prototype.decodeUserFromToken = function (token) {
        return this.jwtHelper.decodeToken(token).user;
    };
    AuthService.prototype.setCurrentUser = function (decodedUser) {
        this.loggedIn = true;
        this.currentUser._id = decodedUser._id;
        this.currentUser.email = decodedUser.email;
        this.currentUser.firstName = decodedUser.firstName;
        this.currentUser.lastName = decodedUser.lastName;
        this.currentUser.phone = decodedUser.phone;
        this.currentUser.employerSector = decodedUser.employerSector;
        this.currentUser.employerName = decodedUser.employerName;
        this.currentUser.employerStreet = decodedUser.employerStreet;
        this.currentUser.employerZipcode = decodedUser.employerZipcode;
        this.currentUser.employerCity = decodedUser.employerCity;
        this.currentUser.employerCountry = decodedUser.employerCountry;
        this.currentUser.role = decodedUser.role;
        decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
        delete decodedUser.role;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/http-error-handler.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/http-error-handler.service.ts ***!
  \********************************************************/
/*! exports provided: HttpErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandler", function() { return HttpErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** Handles HttpClient errors */
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler(messageService) {
        var _this = this;
        this.messageService = messageService;
        /** Create curried handleError function that already knows the service name */
        this.createHandleError = function (serviceName) {
            if (serviceName === void 0) { serviceName = ''; }
            return function (operation, result) {
                if (operation === void 0) { operation = 'operation'; }
                if (result === void 0) { result = {}; }
                return _this.handleError(serviceName, operation, result);
            };
        };
    }
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HttpErrorHandler.prototype.handleError = function (serviceName, operation, result) {
        var _this = this;
        if (serviceName === void 0) { serviceName = ''; }
        if (operation === void 0) { operation = 'operation'; }
        if (result === void 0) { result = {}; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status + " with body \"" + error.error + "\"";
            // TODO: better job of transforming error for user consumption
            _this.messageService.add(serviceName + ": " + operation + " failed: " + message);
            // Let the app keep running by returning a safe result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    HttpErrorHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], HttpErrorHandler);
    return HttpErrorHandler;
}());

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/services/message.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/services/test.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/test.service.ts ***!
  \******************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/services/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TestService = /** @class */ (function () {
    function TestService(http, messenger) {
        this.http = http;
        this.messenger = messenger;
    }
    TestService.prototype.upload = function (file) {
        var _this = this;
        var formData = new FormData();
        formData.append('file', file, file.name);
        if (!file) {
            return;
        }
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', '/api/upload', formData, {
            reportProgress: true
        });
        return this.http.request(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) { return _this.getEventMessage(event, file); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (message) { return _this.showProgress(message); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["last"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(file)));
    };
    TestService.prototype.getEventMessage = function (event, file) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Sent:
                return "Uploading file \"" + file.name + "\" of size " + file.size + ".";
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress:
                var percentDone = Math.round(100 * event.loaded / event.total);
                return "File \"" + file.name + "\" is " + percentDone + "% uploaded.";
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response:
                return "File \"" + file.name + "\" was completely uploaded!";
            default:
                return "File \"" + file.name + "\" surprising upload event: " + event.type + ".";
        }
    };
    TestService.prototype.handleError = function (file) {
        var _this = this;
        var userMessage = file.name + " upload failed.";
        return function (error) {
            console.error(error);
            var message = (error.error instanceof Error) ?
                error.error.message :
                "server returned code " + error.status + " with body \"" + error.error + "\"";
            _this.messenger.add(userMessage + " " + message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(userMessage);
        };
    };
    TestService.prototype.showProgress = function (message) {
        this.messenger.add(message);
    };
    TestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        return this.http.post('/api/register', user);
    };
    UserService.prototype.login = function (credentials) {
        return this.http.post('/api/login', credentials);
    };
    UserService.prototype.getUsers = function () {
        return this.http.get('/api/users/all');
    };
    UserService.prototype.countUsers = function () {
        return this.http.get('/api/users/count');
    };
    UserService.prototype.addUser = function (user) {
        return this.http.post('/api/users', user);
    };
    UserService.prototype.getUser = function (user) {
        return this.http.get("/api/users/" + user._id);
    };
    UserService.prototype.editUser = function (user) {
        return this.http.put("/api/users/" + user._id, user, { responseType: 'text' });
    };
    UserService.prototype.deleteUser = function (user) {
        return this.http.delete("/api/users/" + user._id, { responseType: 'text' });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



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
var environment = {
    production: false,
    demaxBaseUrl: "http://127.0.0.1:8080",
    fileserverBaseURL: "http://127.0.0.1:8889",
    externalAuthEndpoint: "/auth/msad",
    archiveWorkflowEnabled: true,
    editMetadataEnabled: true,
    disabledDatasetColumns: [],
    facility: "ESS",
    shoppingCartEnabled: false,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .././src/app/app.browser.module */ "./src/app/app.browser.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_src_app_app_browser_module__WEBPACK_IMPORTED_MODULE_0__["AppBrowserModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jeremiashillerberg/Google Drive/repo/demax/demax-server/demax-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map