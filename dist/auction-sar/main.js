"use strict";
(self["webpackChunkauctionSAR"] = self["webpackChunkauctionSAR"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _auction_auction_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auction/auction.component */ 9372);
/* harmony import */ var _insertitem_insertitem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insertitem/insertitem.component */ 2228);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ 1147);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








// Define the routes
const routes = [
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
    },
    {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__.SigninComponent
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent
    },
    {
        path: 'insertitem',
        component: _insertitem_insertitem_component__WEBPACK_IMPORTED_MODULE_1__.InsertitemComponent,
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard] //can only route here after sucessfull login
    },
    {
        path: 'auction',
        component: _auction_auction_component__WEBPACK_IMPORTED_MODULE_0__.AuctionComponent,
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard] //can only route here after sucessfull login
    }
];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__.AuthGuard], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() {
        this.title = 'auction21';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["mat-sidenav-container[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: lightgray;\n}\n\n.navigation-items[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 30px;\n  margin: 0 auto;\n  padding-right: 5px;\n  text-align: center;\n  vertical-align: middle;\n  width: 15%;\n}\n\n.label[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 30px;\n  margin: 0;\n  width: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsVUFBVTtBQUNaIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdi1jb250ZW50LCBtYXQtc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LXNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpob3ZlcixcbmE6YWN0aXZlIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLm5hdmlnYXRpb24taXRlbXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMTUlO1xufVxuXG4ubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiA4NSU7XG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.module */ 898);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/google-maps */ 2754);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ 7114);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _auction_auction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auction/auction.component */ 9372);
/* harmony import */ var _insertitem_insertitem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./insertitem/insertitem.component */ 2228);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin/signin.component */ 1147);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ 2993);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./socket.service */ 691);
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signin.service */ 6390);
/* harmony import */ var _auction_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auction.service */ 3681);
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register.service */ 5635);
/* harmony import */ var _insertitem_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./insertitem.service */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);


//import Routing module

//import SocketIoModule 




//import Google maps Module 















//the socket cannot start at bootstrap since the jwt token is still not available
//const config: SocketIoConfig = { url: 'https://localhost:3000', options: {autoConnect : false} };
const config = { url: window.location.origin, options: { autoConnect: false } };
class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["????defineInjector"]({ providers: [
        _signin_service__WEBPACK_IMPORTED_MODULE_9__.SigninService,
        _socket_service__WEBPACK_IMPORTED_MODULE_8__.SocketService,
        _auction_service__WEBPACK_IMPORTED_MODULE_10__.AuctionService,
        _register_service__WEBPACK_IMPORTED_MODULE_11__.RegisterService,
        _insertitem_service__WEBPACK_IMPORTED_MODULE_12__.InsertitemService,
        _auth_guard__WEBPACK_IMPORTED_MODULE_7__.AuthGuard
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__.FlexLayoutModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
            _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_19__.SocketIoModule.forRoot(config),
            _angular_google_maps__WEBPACK_IMPORTED_MODULE_20__.GoogleMapsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _auction_auction_component__WEBPACK_IMPORTED_MODULE_3__.AuctionComponent,
        _insertitem_insertitem_component__WEBPACK_IMPORTED_MODULE_4__.InsertitemComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent,
        _signin_signin_component__WEBPACK_IMPORTED_MODULE_6__.SigninComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__.FlexLayoutModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, ngx_socket_io__WEBPACK_IMPORTED_MODULE_19__.SocketIoModule, _angular_google_maps__WEBPACK_IMPORTED_MODULE_20__.GoogleMapsModule] }); })();


/***/ }),

/***/ 3681:
/*!************************************!*\
  !*** ./src/app/auction.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuctionService": () => (/* binding */ AuctionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.service */ 6390);






class AuctionService {
    constructor(http, signinService) {
        this.http = http;
        this.signinService = signinService;
    }
    getItems() {
        // add authorization header with jwt token
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Authorization': 'Bearer ' + this.signinService.token.token }); // insert tokern in the requests
        let options = { headers: headers };
        // get users from api
        return this.http.get('/api/items', options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError) // handle error function will return an empty Item[] anf log the error
        );
    }
    getUsers() {
        // add authorization header with jwt token
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Authorization': 'Bearer ' + this.signinService.token.token }); // insert tokern in the requests
        const options = { headers: headers };
        // get users from api
        return this.http.get('/api/users', options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError) // handle error function will return an empty Item[] anf log the error
        );
    }
    removeItem(item) {
        console.log("auctiob service removeItem -> Removing an item.");
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Authorization': 'Bearer ' + this.signinService.token.token }); // insert tokern in the requests
        //let options = { headers: headers };
        return this.http.delete("/api/items/removeitem", {
            body: item,
            headers: headers,
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    /**
  * Handle Http operation that failed.
  */
    handleError(error) {
        let errMsg;
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errMsg = error.error.message ? error.error.message : error.toString();
            console.error(errMsg);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errMsg = error.status + ' - ' + error.statusText;
            console.error(errMsg);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error(errMsg));
    }
    ;
}
AuctionService.??fac = function AuctionService_Factory(t) { return new (t || AuctionService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_signin_service__WEBPACK_IMPORTED_MODULE_0__.SigninService)); };
AuctionService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: AuctionService, factory: AuctionService.??fac, providedIn: 'root' });


/***/ }),

/***/ 9372:
/*!**********************************************!*\
  !*** ./src/app/auction/auction.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuctionComponent": () => (/* binding */ AuctionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../socket.service */ 691);
/* harmony import */ var _auction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auction.service */ 3681);
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signin.service */ 6390);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular//material/sidenav */ 7216);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/google-maps */ 2754);





















function AuctionComponent_mat_header_cell_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AuctionComponent_mat_cell_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", item_r20.description, " ");
} }
function AuctionComponent_mat_header_cell_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Current bid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AuctionComponent_mat_cell_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](item_r21.currentbid);
} }
function AuctionComponent_mat_header_cell_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AuctionComponent_mat_cell_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](item_r22.buynow);
} }
function AuctionComponent_mat_header_cell_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Remaining Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AuctionComponent_mat_cell_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", item_r23.remainingtime, " ");
} }
function AuctionComponent_mat_header_cell_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Wining User");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AuctionComponent_mat_cell_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](item_r24.wininguser);
} }
function AuctionComponent_mat_header_cell_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "Owner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AuctionComponent_mat_cell_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](item_r25.owner);
} }
function AuctionComponent_mat_header_row_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "mat-header-row");
} }
const _c0 = function (a0, a1) { return { blink: a0, red: a1 }; };
function AuctionComponent_mat_row_51_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-row", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AuctionComponent_mat_row_51_Template_mat_row_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r28); const row_r26 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r27.onRowClicked(row_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const row_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pureFunction2"](1, _c0, row_r26.remainingtime <= 10, row_r26.remainingtime === 0));
} }
function AuctionComponent_form_53_mat_error_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AuctionComponent_form_53_mat_error_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This must be a positive number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AuctionComponent_form_53_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, AuctionComponent_form_53_mat_error_6_span_1_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AuctionComponent_form_53_mat_error_6_span_2_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r29.bidForm.controls.bid.errors == null ? null : ctx_r29.bidForm.controls.bid.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r29.bidForm.controls.bid.errors == null ? null : ctx_r29.bidForm.controls.bid.errors.pattern);
} }
function AuctionComponent_form_53_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-form-field", 36)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](3, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" Send Message to ", ctx_r30.selectedItem.owner, " ");
} }
function AuctionComponent_form_53_button_8_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Item Sold ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AuctionComponent_form_53_button_8_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Submit Bid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AuctionComponent_form_53_button_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " no winner time expired ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AuctionComponent_form_53_button_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, AuctionComponent_form_53_button_8_span_1_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, AuctionComponent_form_53_button_8_span_2_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, AuctionComponent_form_53_button_8_span_3_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", !ctx_r31.bidForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r31.selectedItem.sold && ctx_r31.selectedItem.wininguser);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !ctx_r31.selectedItem.sold && !ctx_r31.selectedItem.wininguser && ctx_r31.selectedItem.remainingtime > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", !ctx_r31.selectedItem.wininguser && ctx_r31.selectedItem.remainingtime === 0);
} }
function AuctionComponent_form_53_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AuctionComponent_form_53_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2); return ctx_r40.sendMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Send Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AuctionComponent_form_53_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AuctionComponent_form_53_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2); return ctx_r42.buyNow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Buy Now ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AuctionComponent_form_53_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AuctionComponent_form_53_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](2); return ctx_r44.removeItem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function AuctionComponent_form_53_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "form", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("submit", function AuctionComponent_form_53_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r46.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 35)(2, "mat-form-field", 36)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](5, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](6, AuctionComponent_form_53_mat_error_6_Template, 3, 2, "mat-error", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](7, AuctionComponent_form_53_mat_form_field_7_Template, 4, 1, "mat-form-field", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](8, AuctionComponent_form_53_button_8_Template, 4, 4, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](9, AuctionComponent_form_53_button_9_Template, 2, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AuctionComponent_form_53_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"](); return ctx_r48.cancelBid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](12, AuctionComponent_form_53_button_12_Template, 2, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](13, AuctionComponent_form_53_button_13_Template, 2, 0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx_r15.bidForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" Place Bid for ", ctx_r15.selectedItem.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r15.bidForm.controls.bid.touched && ctx_r15.bidForm.controls.bid.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r15.showMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r15.showSubmitBit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r15.showMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r15.showSubmitBit);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r15.showRemove);
} }
function AuctionComponent_map_marker_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](0, "map-marker", 45);
} if (rf & 2) {
    const marker_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("position", marker_r49.position)("label", marker_r49.label);
} }
function AuctionComponent_ng_container_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
} if (rf & 2) {
    const text_log_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", text_log_r50, " ");
} }
function AuctionComponent_ng_container_64_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const text_log_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate2"](" from: ", text_log_r51.sender, "=> ", text_log_r51.message, " ");
} }
function AuctionComponent_ng_container_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, AuctionComponent_ng_container_64_p_1_Template, 2, 2, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r18.showSenderMessage);
} }
function AuctionComponent_mat_card_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-card", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx_r19.errorMessage, " ");
} }
class AuctionComponent {
    constructor(formBuilder, router, socketservice, auctionservice, signinservice, http) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.socketservice = socketservice;
        this.auctionservice = auctionservice;
        this.signinservice = signinservice;
        this.http = http;
        this.deleteItemUrl = "/api/items/removeitem";
        this.items = [];
        this.messageSender = "";
        this.status = "";
        this.users = [];
        this.soldItem = {};
        this.formControl = false;
        this.soldHistory = [
            "No items were sold.",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ];
        this.messages = [];
        this.counter = 0;
        this.message = "";
        this.showBid = false;
        this.showMessage = false;
        this.userName = this.signinservice.token.username;
        this.errorMessage = "";
        this.showSenderMessage = false;
        this.displayedColumns = [
            "description",
            "currentbid",
            "buynow",
            "remainingtime",
            "wininguser",
            "owner",
        ];
        this.centerLat = 0;
        this.centerLong = 0;
        this.markers = [];
        this.showRemove = false;
        this.showSubmitBit = false;
        this.leftTime = 0;
        this.mapOptions = {
            center: { lat: this.centerLat, lng: this.centerLong },
            zoom: 10,
        };
    }
    ngOnInit() {
        this.message =
            "Hello " + this.userName + "! Welcome to the SAR auction site.";
        //create bid form
        this.bidForm = this.formBuilder.group({
            bid: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[0-9]*$"),
                ]),
            ],
            message: [""],
        });
        // Get initial item data from the server api using http call in the auctionservice
        this.auctionservice.getItems().subscribe({
            next: (result) => {
                let receiveddata = result; // cast the received data as an array of items (must be sent like that from server)
                this.items = receiveddata;
                console.log("getItems Auction Component -> received the following items: ", receiveddata);
            },
            error: (error) => (this.errorMessage = error),
        });
        //  Possibily getUsers to show in googleMaps using get users API call for server? Implies changing auction.service.ts to define a new HTTP call
        //subscribe to the incoming websocket events
        //example how to subscribe to websocket events in this case the update:items event that is sent every second
        this.socketservice.getEvent("update:items").subscribe((data) => {
            let receiveddata = data;
            if (this.items) {
                this.items = receiveddata;
            }
        });
        this.socketservice.getEvent("sold:item").subscribe((data) => {
            let receiveddata = data;
            if (this.soldHistory) {
                if (receiveddata.winner) {
                    this.soldHistory[this.counter] = receiveddata.description.toString();
                    this.counter++;
                }
            }
        });
        this.socketservice.getEvent("error:message").subscribe((data) => {
            let receiveddata = data;
            this.message = receiveddata;
        });
        this.socketservice.getEvent("receive:message").subscribe((data) => {
            let receiveddata = data;
            if (this.messages) {
                this.messages.push(receiveddata);
                this.showSenderMessage = true;
            }
        });
        //subscribe to the an event sent by the server for each item that ends.
        //subscribe to an event sent by the the server when a user sends a message
        //subscribe to any other events that you create
        //subscribe to the item sold event sent by the server for each item that ends.
        //subscription to any other events must be performed here inside the ngOnInit function
    }
    /**
     * Handle Http operation that failed.
     */
    handleError(error) {
        let errMsg;
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errMsg = error.error.message ? error.error.message : error.toString();
            console.error(errMsg);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errMsg = error.status + " - " + error.statusText;
            console.error(errMsg);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error(errMsg));
    }
    logout() {
        //call the logout function in the signInService to clear the token in the browser
        this.signinservice.logout(); // must be done first so that the token is erased does not allow socket automatic reconnection
        //perform any needed logout logic here
        this.socketservice.disconnect();
        //navigate back to the log in page
        this.router.navigate(["/signin"]);
    }
    //function called when an item is selected in the view
    onRowClicked(item) {
        console.log("Selected item = ", item);
        this.selectedItem = item;
        this.showBid = true; // makes the bid form appear
        //For now all buttons are shown fix this!
        //this.showRemove = true; // should only appear when the user is the owner of the selected item
        this.showMessage = true; //should only appear when the user is NOT the owner of the selected item
        //check if the user is the owner of the item
        this.userName !== item.owner
            ? (this.showRemove = false)
            : (this.showRemove = true);
        //show the submit bit button only if the user is not the owner of the item
        this.userName === item.owner
            ? (this.showSubmitBit = false)
            : (this.showSubmitBit = true);
    }
    // function called when the submit bid button is pressed
    submit() {
        console.log("submitted bid = ", this.bidForm.value.bid);
        //send an event using the websocket for this use the socketservice
        // example :  this.socketservice.sendEvent('eventname',eventdata);
        this.socketservice.sendEvent("send:bid", {
            newBid: this.bidForm.value.bid,
            itemData: this.selectedItem,
            userName: this.userName,
        });
    }
    //function called when the user presses the Send message button
    sendMessage() {
        console.log("Sending message to = ", this.selectedItem.owner);
        console.log("Message  = ", this.bidForm.value.message);
        //send an event using the websocket for this use the socketservice
        // example :  this.socketservice.sendEvent('eventname',eventdata);
        //eventdata can be an object of the chat type.
        this.socketservice.sendEvent("send:message", {
            message: this.bidForm.value.message,
            sender: this.userName,
            receiver: this.selectedItem.owner,
        });
    }
    //function called when the cancel bid button is pressed.
    cancelBid() {
        this.bidForm.reset(); //clears bid value
    }
    //function called when the buy now button is pressed.
    buyNow() {
        console.log("buying now", this.selectedItem.buynow);
        this.bidForm.setValue({
            /// sets the field value to the buy now value of the selected item
            bid: this.selectedItem.buynow,
            message: "",
        });
        this.message =
            this.userName +
                " please press the Submit Bid button to procced with the Buy now order.";
    }
    //function called when the remove item button is pressed.
    removeItem() {
        //call the HTTP call removeItem in the auctionservice and subscribe to the result
        this.auctionservice.removeItem(this.selectedItem).subscribe({
            next: (result) => {
                if (result) {
                    //remove the item from the items array in UI
                    this.items = this.items.filter((item) => item._id !== this.selectedItem._id);
                }
                console.log("removeItem Auction Component -> received the following result: ", result);
            },
        });
        //send an event using the websocket for this use the socketservice
    }
}
AuctionComponent.??fac = function AuctionComponent_Factory(t) { return new (t || AuctionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_0__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_auction_service__WEBPACK_IMPORTED_MODULE_1__.AuctionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_signin_service__WEBPACK_IMPORTED_MODULE_2__.SigninService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient)); };
AuctionComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: AuctionComponent, selectors: [["app-auction"]], decls: 69, vars: 13, consts: [["role", "navigation"], ["sidenav", ""], ["color", "primary"], ["fxHide.gt-xs", ""], ["mat-icon-button", "", 3, "click"], ["routerLink", "/"], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "flex-end", "fxHide.xs", ""], ["fxLayout", "", "fxLayoutGap", "10px", 1, "navigation-items"], ["routerLink", "/insertitem"], [1, "icon"], [1, "label"], [1, "icon", 3, "click"], [1, "label", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "space-between stretch"], [3, "dataSource"], ["matColumnDef", "description"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "currentbid"], ["matColumnDef", "buynow"], ["matColumnDef", "remainingtime"], ["matColumnDef", "wininguser"], ["matColumnDef", "owner"], [4, "matHeaderRowDef"], [3, "ngClass", "click", 4, "matRowDef", "matRowDefColumns"], ["fxLayoutAlign", "center center"], [3, "formGroup", "submit", 4, "ngIf"], [3, "width", "height", "options"], [3, "position", "label", 4, "ngFor", "ngForOf"], [1, "logClass"], [4, "ngFor", "ngForOf"], [1, "message"], ["class", "error", "fxLayoutAlign", "center center", 4, "ngIf"], [3, "ngClass", "click"], [3, "formGroup", "submit"], ["fxLayout", "column", "fxFlex", "", "fxLayout.lt-sm", "column", "fxLayoutGap", "5px"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "formControlName", "bid", "required", ""], [4, "ngIf"], ["class", "form-field", "appearance", "outline", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"], ["matInput", "", "formControlName", "message"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [3, "position", "label"], ["fxLayoutAlign", "center center", 1, "error"]], template: function AuctionComponent_Template(rf, ctx) { if (rf & 1) {
        const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "mat-sidenav-content")(4, "mat-toolbar", 2)(5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AuctionComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r54); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div")(10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, " Auction SAR 22 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 6)(13, "ul", 7)(14, "li")(15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "li")(18, "a", 8)(19, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](20, "fiber_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](22, "New Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](23, "li")(24, "a")(25, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AuctionComponent_Template_mat_icon_click_25_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](26, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](27, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function AuctionComponent_Template_span_click_27_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](28, "LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "main")(30, "mat-card", 13)(31, "mat-table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](32, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](33, AuctionComponent_mat_header_cell_33_Template, 2, 0, "mat-header-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](34, AuctionComponent_mat_cell_34_Template, 2, 1, "mat-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](35, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](36, AuctionComponent_mat_header_cell_36_Template, 2, 0, "mat-header-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](37, AuctionComponent_mat_cell_37_Template, 2, 1, "mat-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](38, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](39, AuctionComponent_mat_header_cell_39_Template, 2, 0, "mat-header-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](40, AuctionComponent_mat_cell_40_Template, 2, 1, "mat-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](41, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](42, AuctionComponent_mat_header_cell_42_Template, 2, 0, "mat-header-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](43, AuctionComponent_mat_cell_43_Template, 2, 1, "mat-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](44, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](45, AuctionComponent_mat_header_cell_45_Template, 2, 0, "mat-header-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](46, AuctionComponent_mat_cell_46_Template, 2, 1, "mat-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerStart"](47, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](48, AuctionComponent_mat_header_cell_48_Template, 2, 0, "mat-header-cell", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](49, AuctionComponent_mat_cell_49_Template, 2, 1, "mat-cell", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](50, AuctionComponent_mat_header_row_50_Template, 1, 0, "mat-header-row", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](51, AuctionComponent_mat_row_51_Template, 1, 4, "mat-row", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](52, "mat-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](53, AuctionComponent_form_53_Template, 14, 8, "form", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "mat-card")(55, "google-map", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](56, AuctionComponent_map_marker_56_Template, 1, 2, "map-marker", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](57, "mat-card", 25)(58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](59, AuctionComponent_ng_container_59_Template, 3, 1, "ng-container", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](60, "mat-card")(61, "div", 29)(62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](63, "Messages:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](64, AuctionComponent_ng_container_64_Template, 3, 1, "ng-container", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](65, "mat-card", 25)(66, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](68, AuctionComponent_mat_card_68_Template, 2, 1, "mat-card", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" Welcome: ", ctx.userName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("dataSource", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.showBid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("width", 350)("height", 250)("options", ctx.mapOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.soldHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx.message, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__.MatSidenavContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultShowHideDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutGapDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatError, _angular_google_maps__WEBPACK_IMPORTED_MODULE_19__.GoogleMap, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_google_maps__WEBPACK_IMPORTED_MODULE_19__.MapMarker], styles: ["mat-sidenav-container[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.red[_ngcontent-%COMP%]{\n  background-color: red;\n  color: white;\n}\n\n.message[_ngcontent-%COMP%]{\n  letter-spacing: 1px;\n  font-weight: bold;\n}\n\n.blink[_ngcontent-%COMP%] {\n \n  animation: blink-animation 1s steps(5, start) infinite;\n  -webkit-animation: blink-animation 1s steps(5, start) infinite;\n}\n\n@keyframes blink-animation {\n  to {\n    background-color: red;\n  }\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: lightgray;\n}\n\n.error[_ngcontent-%COMP%]{\n  color: red;\n}\n\n.navigation-items[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 30px;\n  margin: 0 auto;\n  padding-right: 5px;\n  text-align: center;\n  vertical-align: middle;\n  width: 15%;\n}\n\n.label[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 30px;\n  margin: 5;\n  padding-left:10px;\n  width: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1Y3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLHNEQUFzRDtFQUN0RCw4REFBOEQ7QUFDaEU7O0FBQ0E7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGOztBQU1BO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWiIsImZpbGUiOiJhdWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIsIG1hdC1zaWRlbmF2LWNvbnRlbnQsIG1hdC1zaWRlbmF2IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ucmVke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1lc3NhZ2V7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmxpbmsge1xuIFxuICBhbmltYXRpb246IGJsaW5rLWFuaW1hdGlvbiAxcyBzdGVwcyg1LCBzdGFydCkgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGluay1hbmltYXRpb24gMXMgc3RlcHMoNSwgc3RhcnQpIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBibGluay1hbmltYXRpb24ge1xuICB0byB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmstYW5pbWF0aW9uIHtcbiAgdG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxufVxubWF0LXNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpob3ZlcixcbmE6YWN0aXZlIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLmVycm9ye1xuICBjb2xvcjogcmVkO1xufVxuXG4ubmF2aWdhdGlvbi1pdGVtcyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxNSU7XG59XG5cbi5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogNTtcbiAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gIHdpZHRoOiA4NSU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 2993:
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true Current User contains user information and the JWT token
            console.log('AuthGuard returned true, currentUser= ', localStorage.getItem('currentUser'));
            return true;
        }
        // not logged in so redirect to login page
        console.log('AuthGuard returned false');
        this.router.navigate(['/signin']);
        return false;
    }
}
AuthGuard.??fac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AuthGuard.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AuthGuard, factory: AuthGuard.??fac });


/***/ }),

/***/ 4860:
/*!***************************************!*\
  !*** ./src/app/insertitem.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsertitemService": () => (/* binding */ InsertitemService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.service */ 6390);






class InsertitemService {
    constructor(http, signinservice) {
        this.http = http;
        this.signinservice = signinservice;
        this.newitemUrl = "/api/items/newitem";
    }
    // Http POST call to the api to submit the new user data returns a boolean observer to indicate success
    submitNewItem(item) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Authorization': 'Bearer ' + currentUser.token }); // insert tokern in the requests
        let options = { headers: headers };
        return this.http.post(this.newitemUrl, item, options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError));
    }
    /**
   * Handle Http operation that failed.
   */
    handleError(error) {
        let errMsg;
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errMsg = error.error.message ? error.error.message : error.toString();
            console.error(errMsg);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errMsg = error.status + ' - ' + error.statusText;
            console.error(errMsg);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => new Error(errMsg));
    }
    ;
}
InsertitemService.??fac = function InsertitemService_Factory(t) { return new (t || InsertitemService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_signin_service__WEBPACK_IMPORTED_MODULE_0__.SigninService)); };
InsertitemService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: InsertitemService, factory: InsertitemService.??fac, providedIn: 'root' });


/***/ }),

/***/ 2228:
/*!****************************************************!*\
  !*** ./src/app/insertitem/insertitem.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InsertitemComponent": () => (/* binding */ InsertitemComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _insertitem_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../insertitem.service */ 4860);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../socket.service */ 691);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signin.service */ 6390);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular//material/sidenav */ 7216);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);

















function InsertitemComponent_mat_error_34_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function InsertitemComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, InsertitemComponent_mat_error_34_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r1.f["description"].errors["required"]);
} }
function InsertitemComponent_mat_error_39_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function InsertitemComponent_mat_error_39_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This must be a positive number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function InsertitemComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, InsertitemComponent_mat_error_39_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, InsertitemComponent_mat_error_39_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r2.f["currentbid"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r2.f["currentbid"].errors["pattern"]);
} }
function InsertitemComponent_mat_error_44_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function InsertitemComponent_mat_error_44_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This must be a positive number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function InsertitemComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, InsertitemComponent_mat_error_44_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, InsertitemComponent_mat_error_44_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r3.f["buynow"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r3.f["buynow"].errors["pattern"]);
} }
function InsertitemComponent_mat_error_49_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function InsertitemComponent_mat_error_49_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1, "This must be a positive number.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} }
function InsertitemComponent_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](1, InsertitemComponent_mat_error_49_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](2, InsertitemComponent_mat_error_49_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r4.f["remainingtime"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx_r4.f["remainingtime"].errors["pattern"]);
} }
function InsertitemComponent_mat_card_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate1"](" ", ctx_r5.errorMessage, " ");
} }
class InsertitemComponent {
    constructor(insertitemservice, socketservice, router, signinservice) {
        this.insertitemservice = insertitemservice;
        this.socketservice = socketservice;
        this.router = router;
        this.signinservice = signinservice;
        this.errorMessage = "";
        this.userName = this.signinservice.token.username;
    }
    ngOnInit() {
        this.itemForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            currentbid: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[0-9]*$"),
            ]),
            buynow: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[0-9]*$"),
            ]),
            remainingtime: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^[0-9]*$"),
            ]),
            owner: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
        });
        this.itemForm.patchValue({ owner: this.userName });
        //this.itemForm.setValue({owner: this.userName});
        console.log(this.itemForm.value);
    }
    get f() {
        return this.itemForm.controls;
    }
    submit() {
        this.insertitemservice.submitNewItem(this.itemForm.value).subscribe({
            next: (result) => {
                console.log("item inserted succcessfully", result);
                //registration successfull navigate to login page
                this.router.navigate(["/auction"]);
                //send the new item to the socket
                this.socketservice.sendEvent("add:item", {});
            },
            error: (error) => {
                console.log("error", error);
                this.errorMessage = error;
            },
        });
    }
    clearForm() {
        //clears what is appering in the form
        this.itemForm.reset();
    }
    logout() { }
}
InsertitemComponent.??fac = function InsertitemComponent_Factory(t) { return new (t || InsertitemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_insertitem_service__WEBPACK_IMPORTED_MODULE_0__.InsertitemService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_1__.SocketService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_signin_service__WEBPACK_IMPORTED_MODULE_2__.SigninService)); };
InsertitemComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({ type: InsertitemComponent, selectors: [["app-insertitem"]], decls: 59, vars: 7, consts: [["role", "navigation"], ["sidenav", ""], ["color", "primary"], ["fxHide.gt-xs", ""], ["mat-icon-button", "", 3, "click"], ["routerLink", "/"], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "flex-end", "fxHide.xs", ""], ["fxLayout", "", "fxLayoutGap", "10px", 1, "navigation-items"], ["routerLink", "/auction"], [1, "icon"], [1, "label"], [1, "icon", 3, "click"], [1, "label", 3, "click"], ["fxLayoutAlign", "center center"], [3, "formGroup", "submit"], ["fxLayout", "column", "fxFlex", "", "fxLayout.lt-sm", "column", "fxLayoutGap", "0px"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "formControlName", "description", "id", "description", "type", "text", 1, "form-control"], [4, "ngIf"], ["matInput", "", "formControlName", "currentbid", "id", "currentbid", "type", "number", 1, "form-control"], ["matInput", "", "formControlName", "buynow", "id", "buynow", "type", "number", 1, "form-control"], ["matInput", "", "formControlName", "remainingtime", "id", "remainingtime", "type", "text", 1, "form-control"], ["matInput", "", "formControlName", "owner", "id", "owner", "type", "text", 1, "form-control"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"], ["class", "error", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayoutAlign", "center center", 1, "error"]], template: function InsertitemComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "mat-sidenav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](3, "mat-sidenav-content")(4, "mat-toolbar", 2)(5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function InsertitemComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r13); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????reference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div")(10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, " Auction SAR 22 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "div", 6)(13, "ul", 7)(14, "li")(15, "a", 8)(16, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](17, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](19, "auction");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](20, "li")(21, "a")(22, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function InsertitemComponent_Template_mat_icon_click_22_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](23, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](24, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function InsertitemComponent_Template_span_click_24_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](25, "LogOut");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](26, "main")(27, "mat-card", 13)(28, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("submit", function InsertitemComponent_Template_form_submit_28_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](29, "div", 15)(30, "mat-form-field", 16)(31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](32, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](33, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](34, InsertitemComponent_mat_error_34_Template, 2, 1, "mat-error", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](35, "mat-form-field", 16)(36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](37, " Starting bid value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](38, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](39, InsertitemComponent_mat_error_39_Template, 3, 2, "mat-error", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](40, "mat-form-field", 16)(41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](42, " Buy now Value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](43, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](44, InsertitemComponent_mat_error_44_Template, 3, 2, "mat-error", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](45, "mat-form-field", 16)(46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](47, " Duration (in seconds) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](49, InsertitemComponent_mat_error_49_Template, 3, 2, "mat-error", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](50, "mat-form-field", 16)(51, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](52, " Owner (username) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](53, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](54, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](55, "Insert Item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](56, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function InsertitemComponent_Template_button_click_56_listener() { return ctx.clearForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](57, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](58, InsertitemComponent_mat_card_58_Template, 2, 1, "mat-card", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("formGroup", ctx.itemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.f["description"].touched && ctx.f["description"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.f["currentbid"].touched && ctx.f["currentbid"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.f["buynow"].touched && ctx.f["buynow"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.f["remainingtime"].touched && ctx.f["remainingtime"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("disabled", !ctx.itemForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultShowHideDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutGapDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor], styles: ["mat-sidenav-container[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: lightgray;\n}\n\n.error[_ngcontent-%COMP%]{\n  color: red;\n}\n\n.navigation-items[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 30px;\n  margin: 0 auto;\n  padding-right: 5px;\n  text-align: center;\n  vertical-align: middle;\n  width: 15%;\n}\n\n.label[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 10px;\n  margin: 5;\n  padding-left:5px;\n  width: 85%;\n}\n\n.clear[_ngcontent-%COMP%] {\n\n  width: 210px;\n}\n\n.invisible[_ngcontent-%COMP%]{\n  display: block;\n  visibility: hidden;\n  height: 0;\n  width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc2VydGl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtBQUNWIiwiZmlsZSI6Imluc2VydGl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmE6aG92ZXIsXG5hOmFjdGl2ZSB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5lcnJvcntcbiAgY29sb3I6IHJlZDtcbn1cblxuLm5hdmlnYXRpb24taXRlbXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMTUlO1xufVxuXG4ubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBtYXJnaW46IDU7XG4gIHBhZGRpbmctbGVmdDo1cHg7XG4gIHdpZHRoOiA4NSU7XG59XG5cbi5jbGVhciB7XG5cbiAgd2lkdGg6IDIxMHB4O1xufVxuXG4uaW52aXNpYmxle1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xufVxuIl19 */"] });


/***/ }),

/***/ 898:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular//material/sidenav */ 7216);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);











class MaterialModule {
}
MaterialModule.??fac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: MaterialModule });
MaterialModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ imports: [[
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__.MatSidenavModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule,
        ], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](MaterialModule, { imports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule], exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule] }); })();


/***/ }),

/***/ 5635:
/*!*************************************!*\
  !*** ./src/app/register.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterService": () => (/* binding */ RegisterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);




class RegisterService {
    constructor(http) {
        this.http = http;
        this.registerUrl = "/api/auth/register";
    }
    // Http POST call to the api to submit the new user data returns a boolean observer to indicate success
    submitNewUser(user) {
        return this.http.post(this.registerUrl, user)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.handleError));
    }
    /**
     * Handle Http operation that failed.
     */
    handleError(error) {
        let errMsg;
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errMsg = error.error.message ? error.error.message : error.toString();
            console.error(errMsg);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errMsg = error.status + ' - ' + error.statusText;
            console.error(errMsg);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error(errMsg));
    }
    ;
}
RegisterService.??fac = function RegisterService_Factory(t) { return new (t || RegisterService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
RegisterService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: RegisterService, factory: RegisterService.??fac, providedIn: 'root' });


/***/ }),

/***/ 9087:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../register.service */ 5635);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular//material/sidenav */ 7216);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 6362);
















function RegisterComponent_mat_error_34_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function RegisterComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, RegisterComponent_mat_error_34_span_1_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.f.controls.name.errors == null ? null : ctx_r1.f.controls.name.errors.required);
} }
function RegisterComponent_mat_error_39_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function RegisterComponent_mat_error_39_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "This field is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function RegisterComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, RegisterComponent_mat_error_39_span_1_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, RegisterComponent_mat_error_39_span_2_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r2.f["email"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r2.f["email"].errors["pattern"]);
} }
function RegisterComponent_mat_error_44_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function RegisterComponent_mat_error_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, RegisterComponent_mat_error_44_span_1_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r3.f["username"].errors["required"]);
} }
function RegisterComponent_mat_error_49_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function RegisterComponent_mat_error_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, RegisterComponent_mat_error_49_span_1_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r4.f["password"].errors["required"]);
} }
function RegisterComponent_mat_card_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"](" ", ctx_r5.errorMessage, " ");
} }
class RegisterComponent {
    //pass the relevant services in to the component
    constructor(registerservice, router) {
        this.registerservice = registerservice;
        this.router = router;
        this.errorMessage = "";
    }
    ngOnInit() {
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(/^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
        });
    }
    get f() {
        return this.userForm.controls;
    }
    submit() {
        this.registerservice.submitNewUser(this.userForm.value)
            .subscribe({
            next: user => {
                //registration successfull navigate to login page
                this.router.navigate(['/signin']);
            },
            error: error => {
                this.errorMessage = error;
            }
        });
    }
    clearForm() {
        //clears what is appering in the form
        this.userForm.reset();
    }
}
RegisterComponent.??fac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_register_service__WEBPACK_IMPORTED_MODULE_0__.RegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
RegisterComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 55, vars: 7, consts: [["role", "navigation"], ["sidenav", ""], ["mat-list-item", "", "routerLink", "/"], [1, "icon"], [1, "label"], ["color", "primary"], ["fxHide.gt-xs", ""], ["mat-icon-button", "", 3, "click"], ["routerLink", "/"], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "flex-end", "fxHide.xs", ""], ["fxLayout", "", "fxLayoutGap", "20px", 1, "navigation-items"], ["fxLayoutAlign", "center center"], [3, "formGroup", "submit"], ["fxLayout", "column", "fxFlex", "", "fxLayout.lt-sm", "column", "fxLayoutGap", "0px"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "formControlName", "name", "id", "name", "type", "text", 1, "form-control"], [4, "ngIf"], ["matInput", "", "formControlName", "email", "id", "email", "type", "text", 1, "form-control"], ["matInput", "", "formControlName", "username", "id", "username", "type", "text", 1, "form-control"], ["matInput", "", "formControlName", "password", "id", "remainingtime", "type", "password", 1, "form-control"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["mat-raised-button", "", "color", "primary", "type", "button", 3, "click"], ["class", "error", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayoutAlign", "center center", 1, "error"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "mat-sidenav-container")(1, "mat-sidenav", 0, 1)(3, "mat-nav-list")(4, "a", 2)(5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](8, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "mat-sidenav-content")(10, "mat-toolbar", 5)(11, "div", 6)(12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RegisterComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????reference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](14, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div")(16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](17, " Auctions SAR 22 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 9)(19, "ul", 10)(20, "li")(21, "a", 8)(22, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](23, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](25, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "main")(27, "mat-card", 11)(28, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("submit", function RegisterComponent_Template_form_submit_28_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "div", 13)(30, "mat-form-field", 14)(31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](32, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](33, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](34, RegisterComponent_mat_error_34_Template, 2, 1, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "mat-form-field", 14)(36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](37, " E-mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](38, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](39, RegisterComponent_mat_error_39_Template, 3, 2, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](40, "mat-form-field", 14)(41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](42, " User Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](43, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](44, RegisterComponent_mat_error_44_Template, 2, 1, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](45, "mat-form-field", 14)(46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](47, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](48, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](49, RegisterComponent_mat_error_49_Template, 2, 1, "mat-error", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RegisterComponent_Template_button_click_52_listener() { return ctx.clearForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](53, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](54, RegisterComponent_mat_card_54_Template, 2, 1, "mat-card", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.f["name"].touched && ctx.f["name"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.f["email"].touched && ctx.f["username"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.f["username"].touched && ctx.f["username"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.f["password"].touched && ctx.f["password"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("disabled", !ctx.userForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenav, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_5__.MatListItem, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__.DefaultShowHideDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultLayoutGapDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError], styles: ["mat-sidenav-container[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: lightgray;\n}\n\n.error[_ngcontent-%COMP%]{\n  color: red;\n}\n\n.navigation-items[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 30px;\n  margin: 0 auto;\n  padding-right: 5px;\n  text-align: center;\n  vertical-align: middle;\n  width: 15%;\n}\n\n.label[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 30px;\n  margin: 5;\n  padding-left:10px;\n  width: 85%;\n}\n\n.clear[_ngcontent-%COMP%] {\n\n  width: 210px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBOztFQUVFLFlBQVk7QUFDZCIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyLCBtYXQtc2lkZW5hdi1jb250ZW50LCBtYXQtc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxubWF0LXNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYTpob3ZlcixcbmE6YWN0aXZlIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLmVycm9ye1xuICBjb2xvcjogcmVkO1xufVxuXG4ubmF2aWdhdGlvbi1pdGVtcyB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdpZHRoOiAxNSU7XG59XG5cbi5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogNTtcbiAgcGFkZGluZy1sZWZ0OjEwcHg7XG4gIHdpZHRoOiA4NSU7XG59XG5cbi5jbGVhciB7XG5cbiAgd2lkdGg6IDIxMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 6390:
/*!***********************************!*\
  !*** ./src/app/signin.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninService": () => (/* binding */ SigninService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);




class SigninService {
    //constructor receives Http object from angular 2 for api calls.
    constructor(http) {
        this.http = http;
        //set token if saved in local storage
        this.signinUrl = '/api/auth/login'; //URL to API authenticate service
        var currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        if (currentUser)
            this.token = currentUser;
    }
    // Submit User name and Password obtain token object from server that has the username and the jwt token
    login(username, password, latitude, longitude) {
        console.log("SignIn service -> login call");
        return this.http.post(this.signinUrl, { username: username, password: password, latitude: latitude, longitude: longitude })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.handleError));
    }
    // store token object in the service for other services to use when authentication is needed.
    setToken(token) {
        this.token.username = token.username;
        this.token.token = token.token;
        localStorage.setItem('currentUser', JSON.stringify({ username: token.username, token: token.token }));
    }
    logout() {
        //clear token remove user from local storage to log user out
        this.token.username = '{}';
        this.token.token = '{}';
        localStorage.removeItem('currentUser');
    }
    /**
     * Handle Http operation that failed.
     */
    handleError(error) {
        let errMsg;
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errMsg = error.error.message ? error.error.message : error.toString();
            console.error(errMsg);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errMsg = error.status + ' - ' + error.statusText;
            console.error(errMsg);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error(errMsg));
    }
    ;
}
SigninService.??fac = function SigninService_Factory(t) { return new (t || SigninService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
SigninService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: SigninService, factory: SigninService.??fac, providedIn: 'root' });


/***/ }),

/***/ 1147:
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninComponent": () => (/* binding */ SigninComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../signin.service */ 6390);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../socket.service */ 691);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular//material/sidenav */ 7216);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3338);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5434);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);

















function SigninComponent_mat_error_34_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function SigninComponent_mat_error_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, SigninComponent_mat_error_34_span_1_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r1.f["username"].errors["required"]);
} }
function SigninComponent_mat_error_39_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, "This field is mandatory.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
function SigninComponent_mat_error_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, SigninComponent_mat_error_39_span_1_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx_r2.f["password"].errors["required"]);
} }
function SigninComponent_mat_card_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1, " Invalid user Name or Password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} }
class SigninComponent {
    constructor(router, signinservice, socketservice) {
        this.router = router;
        this.signinservice = signinservice;
        this.socketservice = socketservice;
        this.errorMessage = "";
        this.latitude = 0;
        this.longitude = 0;
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
        });
    }
    get f() {
        return this.loginForm.controls;
    }
    submit() {
        if (!this.loginForm.valid) {
            console.log(this.loginForm.controls['password'].errors);
            return;
        }
        // Get Browser Coordinates to sent to the server database. example here : https://www.itsolutionstuff.com/post/angular-google-maps-get-current-locationexample.html  
        //for now they are 0
        this.latitude = 0;
        this.longitude = 0;
        this.signinservice.login(this.loginForm.value.username, this.loginForm.value.password, this.latitude, this.longitude)
            .subscribe({
            next: result => {
                // if the Http POST call made is successfull the result is a Token object
                this.signinservice.setToken(result); // store the received jwt token in the sign in service for future use in authentication
                this.socketservice.connect(); // connect the websocket since we already have the token
                //send a new user event to the server so that the server can store the socket ID mapped to the usernames
                this.socketservice.sendEvent('newUser:username', { username: this.loginForm.value.username });
                this.errorMessage = "";
                console.log('navigating to auction');
                //login successful navigate to acution page
                this.router.navigate(['/auction']);
            },
            error: error => {
                this.errorMessage = error;
                console.log('errorMessage: ', this.errorMessage);
                this.loginForm.controls['username'].setErrors({ invalid: true });
            }
        });
        console.log("signin Component Login Submitted: ", this.loginForm.value);
    }
}
SigninComponent.??fac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_signin_service__WEBPACK_IMPORTED_MODULE_0__.SigninService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_socket_service__WEBPACK_IMPORTED_MODULE_1__.SocketService)); };
SigninComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 45, vars: 5, consts: [["role", "navigation"], ["sidenav", ""], ["mat-list-item", "", "routerLink", "/register"], [1, "icon"], [1, "label"], ["color", "primary"], ["fxHide.gt-xs", ""], ["mat-icon-button", "", 3, "click"], ["routerLink", "/"], ["fxFlex", "", "fxLayout", "", "fxLayoutAlign", "flex-end", "fxHide.xs", ""], ["fxLayout", "", "fxLayoutGap", "30px", 1, "navigation-items"], ["routerLink", "/register"], ["fxLayoutAlign", "center center"], [3, "formGroup", "submit"], ["fxLayout", "column", "fxFlex", "", "fxLayout.lt-sm", "column", "fxLayoutGap", "0px"], ["appearance", "outline", 1, "form-field"], ["matInput", "", "formControlName", "username", "id", "username", "type", "text", 1, "form-control"], [4, "ngIf"], ["matInput", "", "formControlName", "password", "id", "password", "type", "password", 1, "form-control"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["mat-raised-button", "", "color", "primary", "routerLink", "/register"], ["class", "error", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayoutAlign", "center center", 1, "error"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "mat-sidenav-container")(1, "mat-sidenav", 0, 1)(3, "mat-nav-list")(4, "a", 2)(5, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](6, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](8, " Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](9, "mat-sidenav-content")(10, "mat-toolbar", 5)(11, "div", 6)(12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SigninComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????reference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](14, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](15, "div")(16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](17, " Auctions SAR 22 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](18, "div", 9)(19, "ul", 10)(20, "li")(21, "a", 11)(22, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](23, "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](24, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](25, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](26, "main")(27, "mat-card", 12)(28, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("submit", function SigninComponent_Template_form_submit_28_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](29, "div", 14)(30, "mat-form-field", 15)(31, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](32, " Enter username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](34, SigninComponent_mat_error_34_Template, 2, 1, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](35, "mat-form-field", 15)(36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](37, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](38, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](39, SigninComponent_mat_error_39_Template, 2, 1, "mat-error", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](40, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](41, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](42, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](43, "New? Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](44, SigninComponent_mat_card_44_Template, 2, 0, "mat-card", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.f["username"].touched && ctx.f["username"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.f["password"].touched && ctx.f["password"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("disabled", !ctx.loginForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenav, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListItem, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbar, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__.DefaultShowHideDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutGapDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink], styles: ["mat-sidenav-container[_ngcontent-%COMP%], mat-sidenav-content[_ngcontent-%COMP%], mat-sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:active {\n  color: lightgray;\n}\n\n.error[_ngcontent-%COMP%]{\n  color: red;\n}\n\n.navigation-items[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 30px;\n  margin: 0 auto;\n  padding-right: 5px;\n  text-align: center;\n  vertical-align: middle;\n  width: 15%;\n}\n\n.label[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 30px;\n  margin: 5;\n  padding-left:10px;\n  width: 85%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmE6aG92ZXIsXG5hOmFjdGl2ZSB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5lcnJvcntcbiAgY29sb3I6IHJlZDtcbn1cblxuLm5hdmlnYXRpb24taXRlbXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB3aWR0aDogMTUlO1xufVxuXG4ubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW46IDU7XG4gIHBhZGRpbmctbGVmdDoxMHB4O1xuICB3aWR0aDogODUlO1xufVxuIl19 */"] });


/***/ }),

/***/ 691:
/*!***********************************!*\
  !*** ./src/app/socket.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketService": () => (/* binding */ SocketService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _signin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin.service */ 6390);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ 4935);




class SocketService {
    //constructor receives IO object and SignInService to check for authentication token
    constructor(signInService, socket) {
        this.signInService = signInService;
        this.socket = socket;
        this.url = window.location.origin;
    }
    connect() {
        this.socket.ioSocket.io.opts.query = { token: this.signInService.token.token };
        this.socket.connect();
        console.log('Websocket connected with token', this.signInService.token.token);
    }
    disconnect() {
        this.socket.disconnect();
    }
    // sends a new event with name EventName and data Data
    sendEvent(EventName, Data) {
        // newUser:username' is the name of the event in the server. 	
        this.socket.emit(EventName, Data);
    }
    // configures an observable to emit a value every time we receive a event with name
    getEvent(Eventname) {
        let observable = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
            this.socket.on(Eventname, (data) => {
                observer.next(data);
            });
        });
        return observable;
    }
}
SocketService.??fac = function SocketService_Factory(t) { return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_signin_service__WEBPACK_IMPORTED_MODULE_0__.SigninService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__.Socket)); };
SocketService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({ token: SocketService, factory: SocketService.??fac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map