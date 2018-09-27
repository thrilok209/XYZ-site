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

/***/ "./src/app/app-bootstrap/app-bootstrap.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/app-bootstrap/app-bootstrap.module.ts ***!
  \*******************************************************/
/*! exports provided: AppBootstrapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBootstrapModule", function() { return AppBootstrapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppBootstrapModule = /** @class */ (function () {
    function AppBootstrapModule() {
    }
    AppBootstrapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot()
            ],
            exports: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_3__["TooltipModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"]],
            declarations: []
        })
    ], AppBootstrapModule);
    return AppBootstrapModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<footer>\n  <app-footer></app-footer>\n</footer>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ecommerce-site';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_bootstrap_app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-bootstrap/app-bootstrap.module */ "./src/app/app-bootstrap/app-bootstrap.module.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/landing-page/landing-page.component */ "./src/app/pages/landing-page/landing-page.component.ts");
/* harmony import */ var _pages_productviewing_page_productviewing_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/productviewing-page/productviewing-page.component */ "./src/app/pages/productviewing-page/productviewing-page.component.ts");
/* harmony import */ var _cart_details_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cart-details.service */ "./src/app/cart-details.service.ts");
/* harmony import */ var _user_details_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-details.service */ "./src/app/user-details.service.ts");
/* harmony import */ var _pages_cartviewing_page_cartviewing_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/cartviewing-page/cartviewing-page.component */ "./src/app/pages/cartviewing-page/cartviewing-page.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ "./src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var _pages_userinfo_page_userinfo_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/userinfo-page/userinfo-page.component */ "./src/app/pages/userinfo-page/userinfo-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _component_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_14__["LandingPageComponent"],
                _pages_productviewing_page_productviewing_page_component__WEBPACK_IMPORTED_MODULE_15__["ProductviewingPageComponent"],
                _pages_cartviewing_page_cartviewing_page_component__WEBPACK_IMPORTED_MODULE_18__["CartviewingPageComponent"],
                _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_19__["LoginPageComponent"],
                _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_20__["RegisterPageComponent"],
                _pages_userinfo_page_userinfo_page_component__WEBPACK_IMPORTED_MODULE_21__["UserinfoPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_bootstrap_app_bootstrap_module__WEBPACK_IMPORTED_MODULE_6__["AppBootstrapModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_5__["routes"]),
                _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_10__["AngularFireStorageModule"],
            ],
            providers: [_component_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabase"], _cart_details_service__WEBPACK_IMPORTED_MODULE_16__["CartDetailsService"], _pages_cartviewing_page_cartviewing_page_component__WEBPACK_IMPORTED_MODULE_18__["CartviewingPageComponent"], _user_details_service__WEBPACK_IMPORTED_MODULE_17__["UserDetailsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/landing-page/landing-page.component */ "./src/app/pages/landing-page/landing-page.component.ts");
/* harmony import */ var _pages_productviewing_page_productviewing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/productviewing-page/productviewing-page.component */ "./src/app/pages/productviewing-page/productviewing-page.component.ts");
/* harmony import */ var _pages_cartviewing_page_cartviewing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/cartviewing-page/cartviewing-page.component */ "./src/app/pages/cartviewing-page/cartviewing-page.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ "./src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var _pages_userinfo_page_userinfo_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/userinfo-page/userinfo-page.component */ "./src/app/pages/userinfo-page/userinfo-page.component.ts");






var routes = [
    {
        path: 'home',
        component: _pages_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_0__["LandingPageComponent"]
    },
    {
        path: 'product',
        component: _pages_productviewing_page_productviewing_page_component__WEBPACK_IMPORTED_MODULE_1__["ProductviewingPageComponent"]
    },
    {
        path: 'product/:id',
        component: _pages_productviewing_page_productviewing_page_component__WEBPACK_IMPORTED_MODULE_1__["ProductviewingPageComponent"]
    },
    {
        path: 'cart',
        component: _pages_cartviewing_page_cartviewing_page_component__WEBPACK_IMPORTED_MODULE_2__["CartviewingPageComponent"]
    },
    {
        path: 'register',
        component: _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_4__["RegisterPageComponent"]
    },
    {
        path: 'login',
        component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"]
    },
    {
        path: 'userInfo',
        component: _pages_userinfo_page_userinfo_page_component__WEBPACK_IMPORTED_MODULE_5__["UserinfoPageComponent"]
    }
];


/***/ }),

/***/ "./src/app/cart-details.service.ts":
/*!*****************************************!*\
  !*** ./src/app/cart-details.service.ts ***!
  \*****************************************/
/*! exports provided: CartDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDetailsService", function() { return CartDetailsService; });
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

var CartDetailsService = /** @class */ (function () {
    function CartDetailsService() {
        this.cartProductsId = [];
    }
    CartDetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CartDetailsService);
    return CartDetailsService;
}());



/***/ }),

/***/ "./src/app/component/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"page-footer font-small blue pt-4\">\n\n    <!-- Footer Links -->\n    <div class=\"container-fluid text-center text-md-left\">\n\n      <!-- Grid row -->\n      <div class=\"row\">\n\n        <!-- Grid column -->\n        <div class=\"col-md-6 mt-md-0 mt-3\">\n\n          <!-- Content -->\n\n          <h5 href =\"home\" class=\"text-uppercase\">XYZ</h5>\n\n\n        </div>\n        <!-- Grid column -->\n\n        <hr class=\"clearfix w-100 d-md-none pb-3\">\n\n        <!-- Grid column -->\n        <!-- <div class=\"col-md-3 mb-md-0 mb-3\">\n\n\n            <h5 class=\"text-uppercase\">Links</h5>\n\n            <ul class=\"list-unstyled\">\n              <li>\n                <a href=\"#!\">Track</a>\n              </li>\n              <li>\n                <a href=\"#!\">Products</a>\n              </li>\n              <li>\n                <a href=\"#!\">Cart</a>\n              </li>\n              <li>\n                <a href=\"#!\">Account</a>\n              </li>\n            </ul> -->\n\n          <!-- </div> -->\n          <!-- Grid column -->\n\n          <!-- Grid column -->\n          <div class=\"col-md-1 mb-md-0 mb-1.1\">\n\n\n            <h5 class=\"text-uppercase\">Links</h5>\n\n            <ul class=\"list-unstyled\">\n              <li>\n                <a href=\"#!\">Track</a>\n              </li>\n              <li>\n                <a href=\"home\">Products</a>\n              </li>\n              <li>\n                <a href=\"cart\">Cart</a>\n              </li>\n              <li>\n                <a href=\"#!\">Account</a>\n              </li>\n            </ul>\n\n          </div>\n          <!-- Grid column -->\n\n      </div>\n      <!-- Grid row -->\n\n    </div>\n    <!-- Footer Links -->\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n      <a href=\"https://silikoninnovations.org\"> XYZ</a>\n    </div>\n    <!-- Copyright -->\n\n  </footer>\n  <!-- Footer -->\n"

/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/component/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/component/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"home\">XYZ</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto \">\n\n\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li> -->\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"home\">Products <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Track</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"cart\">Cart</a>\n      </li>\n      <li [hidden]=\"loginLink\" class=\"nav-item\">\n        <a class=\"nav-link\" href=\"login\">Login</a>\n      </li>\n      <!-- <li [hidden]=\"!loginLink\" class=\"nav-item\">\n        <a class=\"nav-link\" href=\"accDetails\">Account</a>\n      </li> -->\n      <li [hidden]=\"!loginLink\"  class=\"nav-item dropdown\">\n        <span dropdown >\n          <a href id=\"nav-link\" class=\"nav-link dropdown-toggle\" dropdownToggle (click)=\"false\"\n          aria-controls=\"nav-link-dropdown\">Account</a>\n          <ul id=\"basic-link-dropdown\" *dropdownMenu class=\"dropdown-menu\"\n          role=\"menu\" aria-labelledby=\"basic-link\">\n          <li >\n            <a class=\"dropdown-item\" href=\"userInfo\">Info</a>\n          </li>\n          <li >\n            <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n          </li>\n          <!-- <li >\n            <a class=\"dropdown-item\" href=\"#\">{{choice}}</a>\n          </li> -->\n        </ul>\n      </span>\n    </li>\n    </ul>\n    <!-- <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form> -->\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(afAuth) {
        this.afAuth = afAuth;
        this.loginLink = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.checkLink();
    };
    HeaderComponent.prototype.checkLink = function () {
        if (localStorage.getItem('isLoggedIn') == "true")
            this.loginLink = true;
        else
            this.loginLink = false;
    };
    HeaderComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        localStorage.setItem('isLoggedIn', "false");
        localStorage.setItem('email', '');
        localStorage.setItem('uid', '');
        this.loginLink = false;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/component/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/component/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/pages/cartviewing-page/cartviewing-page.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/cartviewing-page/cartviewing-page.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/cartviewing-page/cartviewing-page.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/cartviewing-page/cartviewing-page.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Product ID</th>\n      <th scope=\"col\">quantity</th>\n      <th scope=\"col\">price/piece</th>\n      <th scope=\"col\">cost</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let cartDetails of cartProductsId , let index = index \">\n      <th scope=\"row\">{{index}}</th>\n      <td>{{cartDetails.id}}</td>\n      <td>{{cartDetails.quantity}}</td>\n      <td>100</td>\n      <td>{{cartDetails.quantity*100}}</td>\n    </tr>\n    <tr [hidden] = \"totalPriceRow\">\n      <th scope=\"row\"></th>\n      <td></td>\n      <td></td>\n      <td><strong>Total Price</strong></td>\n      <td>{{totalPrice}}</td>\n    </tr>\n  </tbody>\n</table>\n<div class=\"container\">\n\n<div class=\"row mt-4\">\n  <div class=\"col-md-8\">\n\n  </div>\n  <div class=\"col-md-2\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"clearCart()\" [hidden]=\"clearCartButton\">Clear Cart</button>\n\n  </div>\n  <div class=\"col-md-2\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"checkout()\" [hidden]=\"checkoutButton\">Checkout</button>\n    <p> </p>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/cartviewing-page/cartviewing-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/cartviewing-page/cartviewing-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: CartviewingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartviewingPageComponent", function() { return CartviewingPageComponent; });
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

var CartviewingPageComponent = /** @class */ (function () {
    function CartviewingPageComponent() {
        this.cartProductsId = [];
        this.totalPrice = 0;
        this.checkoutButton = true;
        this.clearCartButton = true;
        this.totalPriceRow = true;
    }
    CartviewingPageComponent.prototype.ngOnInit = function () {
        this.checkData();
    };
    CartviewingPageComponent.prototype.checkout = function () {
    };
    CartviewingPageComponent.prototype.clearCart = function () {
        localStorage.removeItem('cart');
        this.checkData();
    };
    CartviewingPageComponent.prototype.checkData = function () {
        this.cartProductsId = JSON.parse(localStorage.getItem('cart'));
        for (var i = 0; i < this.cartProductsId.length; i++) {
            this.totalPrice = this.cartProductsId[i].quantity * 100 + this.totalPrice;
        }
        if (this.totalPrice == 0) {
            this.checkoutButton = true;
            this.totalPrice = 0;
            this.totalPriceRow = true;
        }
        if (this.totalPrice > 0) {
            this.checkoutButton = false;
            this.totalPriceRow = false;
        }
        if (JSON.parse(localStorage.getItem('cart')) == null)
            this.clearCartButton = true;
        if (JSON.parse(localStorage.getItem('cart')) != null)
            this.clearCartButton = false;
    };
    CartviewingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cartviewing-page',
            template: __webpack_require__(/*! ./cartviewing-page.component.html */ "./src/app/pages/cartviewing-page/cartviewing-page.component.html"),
            styles: [__webpack_require__(/*! ./cartviewing-page.component.css */ "./src/app/pages/cartviewing-page/cartviewing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartviewingPageComponent);
    return CartviewingPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/landing-page/landing-page.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 3px solid rgba(8, 8, 12, 1);\n}\n"

/***/ }),

/***/ "./src/app/pages/landing-page/landing-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\">\n  <div class=\"container\">\n    <div class=\"row mt-4\">\n      <div class=\"col\">\n\n      </div>\n      <div class=\"col-md-auto\">\n        <h1>\n          Welcome To GrassRoot\n        </h1>\n\n      </div>\n      <div class=\"col\">\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"card\" style=\"width: 100%;\">\n<div class=\"card-body\">\n  <h5 class=\"card-title\">About Us:</h5>\n  <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n</div>\n</div>\n    </div>\n  </div>\n  <hr/>\n  <div class=\"products\">\n    <div class=\"container\">\n      <div class=\"row mt-4\">\n        <div class=\"col\">\n\n        </div>\n        <div class=\"col-md-auto\">\n          <h2>\n            <u>\n              OUR PRODUCTS\n            </u>\n          </h2>\n\n\n        </div>\n        <div class=\"col\">\n\n        </div>\n      </div>\n      <div class=\"productslisting\">\n        <div class=\"row\">\n          <div class=\"col-md-4 mt-4\" *ngFor=\"let data of array\">\n            <!-- <a href=\"#\" class=\"btn btn-outline-dark\" > -->\n\n\n            <a href=\"product/{{data}}\" class=\"card btn btn-outline-info\" style=\"width: 18rem;\">\n              <img class=\"card-img-top\" src=\".../100px180/\" alt=\"Card image cap\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">{{data}}</h5>\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n              </div>\n            </a>\n            <!-- </a> -->\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/landing-page/landing-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/landing-page/landing-page.component.ts ***!
  \**************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
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

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
        this.array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/pages/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/pages/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input #email type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input #password type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n  </div>\n  <!-- <div class=\"form-group form-check\">\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n    <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n  </div> -->\n  <a class=\"btn btn-primary\" (click)=\"loginWithEmail(email.value , password.value)\">Login</a>\n  <a class=\"btn btn-primary\" (click)=\"signWithEmail()\">Sign In</a>\n\n  <p>{{errorMsg}}</p>\n</form>\n"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/header/header.component */ "./src/app/component/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(afAuth, router, headerComponent) {
        this.afAuth = afAuth;
        this.router = router;
        this.headerComponent = headerComponent;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.loginWithEmail = function (email, password) {
        var _this = this;
        console.log(email, password);
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            console.log(user);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('email', _this.afAuth.auth.currentUser.email);
            _this.errorMsg = '';
            _this.headerComponent.checkLink();
            location.reload();
            _this.router.navigate(['home']);
        })
            .catch(function (error) { return _this.errorMsg = error; });
        this.afAuth.authState.subscribe(function (auth) {
            if (auth) {
                localStorage.setItem('uid', auth.uid);
            }
        });
    };
    LoginPageComponent.prototype.signWithEmail = function () {
        this.router.navigate(['register']);
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/pages/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/pages/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _component_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/productviewing-page/productviewing-page.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/productviewing-page/productviewing-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"productlisting\">\n\n<div class=\"media\">\n  <img class=\"align-self-center mr-3\" src=\".../64x64\" alt=\"Generic placeholder image\">\n  <div class=\"media-body\">\n    <h5 class=\"mt-0\">{{id}}</h5>\n    <p class=\"mt-4\">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>\n    <p class=\"mb-0 mt-4\">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n\n    <div class=\"container\">\n      <div class=\"row mt-4\">\n        <div class=\"col-md-2\">\n\n\n          <div class=\"input-group\">\n            <div class=\"input-group-append\" id=\"button-addon4\">\n              <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"changeQuanity(1)\">+</button>\n            </div>\n            <input type=\"text\" class=\"form-control\" placeholder=\"{{productQuantity}}\" aria-label=\"Recipient's username with two button addons\" aria-describedby=\"button-addon4\">\n            <div class=\"input-group-append\" id=\"button-addon4\">\n              <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"changeQuanity(-1)\">-</button>\n            </div>\n\n\n          </div>\n\n        </div>\n      </div>\n      <div class=\"row mt-4\">\n        <div class=\"col-md-2\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"addToCart()\"[hidden]=\"cartButton\">Add to Cart</button>\n          <p> </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/productviewing-page/productviewing-page.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/productviewing-page/productviewing-page.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".productlisting {\n  margin-top: 5em; }\n"

/***/ }),

/***/ "./src/app/pages/productviewing-page/productviewing-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/productviewing-page/productviewing-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductviewingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductviewingPageComponent", function() { return ProductviewingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cart_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cart-details.service */ "./src/app/cart-details.service.ts");
/* harmony import */ var _cartviewing_page_cartviewing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cartviewing-page/cartviewing-page.component */ "./src/app/pages/cartviewing-page/cartviewing-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductviewingPageComponent = /** @class */ (function () {
    function ProductviewingPageComponent(route, cartDetails, cartviewingPage) {
        this.route = route;
        this.cartDetails = cartDetails;
        this.cartviewingPage = cartviewingPage;
        this.productQuantity = 0;
        this.cartButton = true;
    }
    ProductviewingPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        console.log(this.id);
    };
    ProductviewingPageComponent.prototype.changeQuanity = function (x) {
        if (this.productQuantity >= 0) {
            if (x == -1 && this.productQuantity == 0) {
                return this.productQuantity;
            }
            this.productQuantity = this.productQuantity + x;
        }
        if (this.productQuantity > 0) {
            this.cartButton = false;
        }
        if (this.productQuantity == 0) {
            this.cartButton = true;
        }
    };
    ProductviewingPageComponent.prototype.addToCart = function () {
        // this.cartviewingPage.cartProductsId.push({id:this.id, quantity:this.productQuantity})
        // console.log(this.cartviewingPage.cartProductsId)
        var localarray = JSON.parse(localStorage.getItem('cart'));
        if (JSON.parse(localStorage.getItem('cart')) != null) {
            localarray.push({ id: this.id, quantity: this.productQuantity });
            localStorage.setItem('cart', JSON.stringify(localarray));
            console.log("here second");
        }
        if (JSON.parse(localStorage.getItem('cart')) == null || JSON.parse(localStorage.getItem('cart')).length == 0) {
            localarray = [];
            localarray.push({ id: this.id, quantity: this.productQuantity });
            localStorage.setItem('cart', JSON.stringify(localarray));
            console.log("here");
        }
        console.log(localarray);
        console.log(JSON.parse(localStorage.getItem('cart')));
    };
    ProductviewingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-productviewing-page',
            template: __webpack_require__(/*! ./productviewing-page.component.html */ "./src/app/pages/productviewing-page/productviewing-page.component.html"),
            styles: [__webpack_require__(/*! ./productviewing-page.component.scss */ "./src/app/pages/productviewing-page/productviewing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _cart_details_service__WEBPACK_IMPORTED_MODULE_2__["CartDetailsService"], _cartviewing_page_cartviewing_page_component__WEBPACK_IMPORTED_MODULE_3__["CartviewingPageComponent"]])
    ], ProductviewingPageComponent);
    return ProductviewingPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input #email type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input #password type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"passwordConfirmation\">Confirm Password </label>\n    <input #passwordConfirmation type=\"password\" class=\"form-control\" id=\"passwordConfirmation\" placeholder=\"Password\">\n  </div>\n  <!-- <div class=\"form-group form-check\">\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n    <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n  </div> -->\n  <a class=\"btn btn-primary\" (click)=\"check()\">checkDate</a>\n\n  <a class=\"btn btn-primary\" (click)=\"signWithEmail(email.value , password.value , passwordConfirmation.value)\">Sign In</a>\n  <p>{{errorMsg}}</p>\n</form>\n"

/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _user_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user-details.service */ "./src/app/user-details.service.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/header/header.component */ "./src/app/component/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent(userDetails, db, afAuth, router, headerComponent) {
        this.userDetails = userDetails;
        this.db = db;
        this.afAuth = afAuth;
        this.router = router;
        this.headerComponent = headerComponent;
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
        this.userId = localStorage.getItem('uid');
    };
    RegisterPageComponent.prototype.signWithEmail = function (email, password, passwordCon) {
        var _this = this;
        if (passwordCon != password)
            return this.errorMsg = "Password Doesn't Match";
        if (passwordCon == password)
            this.errorMsg = "";
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            console.log(email, password);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('email', _this.afAuth.auth.currentUser.email);
            _this.afAuth.authState.subscribe(function (auth) {
                if (auth) {
                    localStorage.setItem('uid', auth.uid);
                }
                _this.headerComponent.checkLink();
                _this.userDetails.updateLogin();
                // this.userDetails.getuser()
                location.reload();
                _this.router.navigate(['home']);
            });
            // this.router.navigate(['home'])
        }).catch(function (error) {
            console.error(error);
            _this.errorMsg = error;
        });
    };
    RegisterPageComponent.prototype.check = function () {
        // console.log("here")
        // console.log(this.itemArray)
        // console.log("now Here :" ,this.itemArray[2].$key)
        //
        //
        // // console.log(this.users)
        //
        // this.users.update(this.userId,{ name:"thrilok" , address:"india" , recent:["hey" , "hi" , "hello"]  });
        // this.userDetails.check()
        this.userDetails.updateLogin();
        // this.userDetails.getuser()
    };
    RegisterPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/pages/register-page/register-page.component.html"),
            styles: [__webpack_require__(/*! ./register-page.component.css */ "./src/app/pages/register-page/register-page.component.css")]
        }),
        __metadata("design:paramtypes", [_user_details_service__WEBPACK_IMPORTED_MODULE_4__["UserDetailsService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _component_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"]])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/userinfo-page/userinfo-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/userinfo-page/userinfo-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/userinfo-page/userinfo-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/userinfo-page/userinfo-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered\">\n  <tbody>\n\n    <tr>\n      <th scope=\"row\" >Name:</th>\n      <th >{{user.name}}</th>\n\n    </tr>\n\n    <tr>\n      <th scope=\"row\">Phone Number:</th>\n      <td>((user.phone))</td>\n\n    </tr>\n    <tr>\n      <th scope=\"row\">Email Id:</th>\n      <td>{{user.email}}</td>\n    </tr>\n    <!-- <tr>\n      <th scope=\"row\"></th>\n      <td>((user.email))</td>\n    </tr> -->\n\n  </tbody>\n</table>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <a class=\"btn btn-primary\" (click)=\"check()\">Edit Info</a>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/userinfo-page/userinfo-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/userinfo-page/userinfo-page.component.ts ***!
  \****************************************************************/
/*! exports provided: UserinfoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserinfoPageComponent", function() { return UserinfoPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-details.service */ "./src/app/user-details.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserinfoPageComponent = /** @class */ (function () {
    function UserinfoPageComponent(userDetails) {
        this.userDetails = userDetails;
        this.user = {
            name: '',
            email: '',
            phone: ''
        };
    }
    UserinfoPageComponent.prototype.ngOnInit = function () {
        console.log("this.user:  ", this.user.name);
        console.log("this.userDetails.userData.email", this.userDetails.userData.email);
        this.userDetails.getuser();
        // user.name =this.userDetails.userData.name
        // user.email =this.userDetails.userData.email
        // user.phone =this.userDetails.userData.phone
    };
    UserinfoPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userinfo-page',
            template: __webpack_require__(/*! ./userinfo-page.component.html */ "./src/app/pages/userinfo-page/userinfo-page.component.html"),
            styles: [__webpack_require__(/*! ./userinfo-page.component.css */ "./src/app/pages/userinfo-page/userinfo-page.component.css")]
        }),
        __metadata("design:paramtypes", [_user_details_service__WEBPACK_IMPORTED_MODULE_1__["UserDetailsService"]])
    ], UserinfoPageComponent);
    return UserinfoPageComponent;
}());



/***/ }),

/***/ "./src/app/user-details.service.ts":
/*!*****************************************!*\
  !*** ./src/app/user-details.service.ts ***!
  \*****************************************/
/*! exports provided: UserDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsService", function() { return UserDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailsService = /** @class */ (function () {
    function UserDetailsService(afAuth, db) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.userData = {
            name: '',
            phone: '',
            address: '',
            email: '',
            $key: '',
            recentOrder: []
        };
        this.usersDetails = [];
        this.userId = localStorage.getItem('uid');
        this.users = db.list('users');
        this.users.snapshotChanges().subscribe(function (actions) {
            console.log("here");
            actions.forEach(function (action) {
                var y = action.payload.toJSON();
                // console.log("action:",action)
                console.log("action.key:", action.key);
                y["$key"] = action.key;
                console.log("y= ", y);
                // console.log(action.payload.child('uid').val() )
                _this.usersDetails.push(y);
            });
        });
    }
    UserDetailsService.prototype.check = function () {
        console.log("here");
        console.log(this.usersDetails);
        console.log("now Here :", this.usersDetails[2].$key);
        // console.log(this.users)
        this.users.update(this.userId, { name: "thrilok", address: "india", recent: ["hey", "hi", "hello"] });
    };
    UserDetailsService.prototype.getuser = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth) {
                // localStorage.setItem('uid',auth.uid )
                for (var i = 0; i < _this.usersDetails.length; i++) {
                    if (_this.usersDetails[i].$key == auth) {
                        _this.userData.name = _this.usersDetails[i].name;
                        _this.userData.email = _this.usersDetails[i].email;
                        _this.userData.phone = _this.usersDetails[i].phone;
                        _this.userData.address = _this.usersDetails[i].address;
                        _this.userData.recentOrder = _this.usersDetails[i].recentOrder;
                        _this.userData.$key = _this.usersDetails[i].$key;
                    }
                    // if(this.userData.$key == ''){
                    //
                    // }
                }
            }
        });
        console.log("this.userData: ", this.userData);
    };
    UserDetailsService.prototype.updateLogin = function () {
        console.log("here");
        //    this.afAuth.authState.subscribe(auth=>{
        //      if(auth){
        //       //  console.log(auth)
        //
        //    }
        //  });
        this.users.update(localStorage.getItem('uid'), { name: "", phone: "", email: this.afAuth.auth.currentUser.email, recentOrder: [""], address: "", key: localStorage.getItem('uid') });
    };
    UserDetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], UserDetailsService);
    return UserDetailsService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD2ZjTbRmBTwouir6ChBEeAgy3v6V-bZ1w",
        authDomain: "grassroot-site.firebaseapp.com",
        databaseURL: "https://grassroot-site.firebaseio.com",
        projectId: "grassroot-site",
        storageBucket: "grassroot-site.appspot.com",
        messagingSenderId: "880099688021"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/thrilok/workspace/projects/ecommerce-site/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map