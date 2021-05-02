(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["poojas-poojas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/poojas/containers/poojas.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/poojas/containers/poojas.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-split-body [isLoading$]=\"isLoading$\">\r\n  <div class=\"left-section\">\r\n    <a href=\"javascript:void(0)\" role=\"button\" class=\"p-4 m-1 btn btn-primary pooja-box\" mdbWavesEffect *ngFor=\"let item of poojas\" (click)=\"newPooja(item)\">\r\n      <h3>{{item.name}}</h3>\r\n      <p class=\"grey-text pt-3\">{{item.pantone_value}}</p>\r\n    </a>\r\n  </div>\r\n  <div class=\"right-section\">\r\n    <app-right-card>\r\n      <div class=\"card-header\">Todays Poojas ({{dates?.today}})</div>\r\n      <table mdbTable small=\"true\" striped=\"true\">\r\n        <tbody>\r\n          <tr>\r\n            <th scope=\"row\">Name 1</th>\r\n            <td>Star 1</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">Name 2</th>\r\n            <td>Star 2</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">Name 3</th>\r\n            <td>Star 3</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </app-right-card>\r\n   \r\n    <app-right-card [header]=\"dates?.tomorrow\">\r\n      <div class=\"card-header\">Todays Bookings ({{dates?.today}})</div>\r\n      <table mdbTable small=\"true\" striped=\"true\">\r\n        <tbody>\r\n          <tr>\r\n            <th scope=\"row\">Name 1</th>\r\n            <td>Star 1</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">Name 2</th>\r\n            <td>Star 2</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">Name 3</th>\r\n            <td>Star 3</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </app-right-card>\r\n   \r\n\r\n    <div class=\"card text-center my-3\">\r\n      <div class=\"card-header\">Tomorrows poojas ({{this.dates?.tomorrow}})</div>\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">Special title treatment</h5>\r\n        <p class=\"card-text\">\r\n          With supporting text below as a natural lead-in to additional content.\r\n        </p>\r\n        <a href=\"#\" class=\"btn btn-secondary\">Button</a>\r\n      </div>\r\n      <div class=\"card-footer text-muted\">2 days ago</div>\r\n    </div>\r\n    <!-- <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 200px\">\r\n      <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</app-split-body>\r\n");

/***/ }),

/***/ "./src/app/poojas/containers/poojas.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/poojas/containers/poojas.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".left-section a.pooja-box {\n  display: inline-block;\n  height: 150px;\n  width: 300px;\n  max-width: 300px;\n  color: black;\n}\n.left-section > :nth-child(even) {\n  background-color: #ceeef3 !important;\n}\n.left-section > :nth-child(odd) {\n  background-color: white !important;\n}\n.right-section table tr {\n  cursor: pointer;\n}\n@media only screen and (max-width: 1024px) {\n  .left-section a.pooja-box {\n    height: auto;\n    width: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9vamFzL2NvbnRhaW5lcnMvQzpcXGdpdCBjb2RlXFxBdWRpdC1VSS1Bbmd1bGFyL3NyY1xcYXBwXFxwb29qYXNcXGNvbnRhaW5lcnNcXHBvb2phcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9vamFzL2NvbnRhaW5lcnMvcG9vamFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0U7RUFDRSxvQ0FBQTtBQ0RKO0FER0U7RUFDRSxrQ0FBQTtBQ0RKO0FET0k7RUFDRSxlQUFBO0FDSk47QURTQTtFQUVJO0lBQ0UsWUFBQTtJQUNBLFdBQUE7RUNQSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9vamFzL2NvbnRhaW5lcnMvcG9vamFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnQtc2VjdGlvbiB7XHJcbiAgYS5wb29qYS1ib3gge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG5cclxuICA+Om50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VlZWYzICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gID46bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnJpZ2h0LXNlY3Rpb24ge1xyXG4gIHRhYmxlIHtcclxuICAgIHRyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAubGVmdC1zZWN0aW9uIHtcclxuICAgIGEucG9vamEtYm94IHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn0iLCIubGVmdC1zZWN0aW9uIGEucG9vamEtYm94IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5sZWZ0LXNlY3Rpb24gPiA6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlZWVmMyAhaW1wb3J0YW50O1xufVxuLmxlZnQtc2VjdGlvbiA+IDpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5yaWdodC1zZWN0aW9uIHRhYmxlIHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubGVmdC1zZWN0aW9uIGEucG9vamEtYm94IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/poojas/containers/poojas.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/poojas/containers/poojas.component.ts ***!
  \*******************************************************/
/*! exports provided: PoojasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasComponent", function() { return PoojasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_poojas_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/poojas.selectors */ "./src/app/poojas/store/poojas.selectors.ts");
/* harmony import */ var _store_poojas_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/poojas.actions */ "./src/app/poojas/store/poojas.actions.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var src_app_shared_components_poojas_modal_poojas_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/poojas-modal/poojas-modal.component */ "./src/app/shared/components/poojas-modal/poojas-modal.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







// import { PoojasModalComponent } from 'src/app/shared/components/poojas-modal/poojas-modal.component';
var PoojasComponent = /** @class */ (function () {
    function PoojasComponent(store, modalService) {
        this.store = store;
        this.modalService = modalService;
        // modalConfig = {
        //   // backdrop: true,
        //   // keyboard: true,/
        //   // show: false,
        //   // ignoreBackdropClick: false,
        //   // containerClass: 'top',
        //   animated: true,
        //   data: {
        //     heading: 'New Pooja'
        //   }
        // };
        this.modalConfig = {
            containerClass: 'center',
            class: 'modal-dialog-centered center modal-lg',
            animated: true,
        };
        var date = new Date();
        date.setDate(date.getDate() + 1);
        this.dates = {
            today: new Date().toLocaleDateString(),
            tomorrow: date.toLocaleDateString()
        };
    }
    PoojasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_store_poojas_selectors__WEBPACK_IMPORTED_MODULE_2__["getPoojas"]).subscribe(function (poojas) {
            _this.poojas = poojas;
        });
        this.isLoading$ = this.store.select(_store_poojas_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoading"]);
        this.store.dispatch(new _store_poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasQuery"]());
    };
    PoojasComponent.prototype.newPooja = function (pooja) {
        var _this = this;
        this.modalRef = this.modalService.show(src_app_shared_components_poojas_modal_poojas_modal_component__WEBPACK_IMPORTED_MODULE_5__["PoojasModalComponent"], __assign({}, this.modalConfig, { data: {
                id: pooja.id,
                heading: pooja.name,
                price: pooja.price
            } }));
        this.modalRef.content.poojasData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (pooja) {
            _this.store.dispatch(new _store_poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasAdded"]({ poojas: pooja }));
        });
    };
    PoojasComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBModalService"] }
    ]; };
    PoojasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-poojas',
            template: __importDefault(__webpack_require__(/*! raw-loader!./poojas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/poojas/containers/poojas.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./poojas.component.scss */ "./src/app/poojas/containers/poojas.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBModalService"]])
    ], PoojasComponent);
    return PoojasComponent;
}());



/***/ }),

/***/ "./src/app/poojas/poojas-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/poojas/poojas-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PoojasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasRoutingModule", function() { return PoojasRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_poojas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/poojas.component */ "./src/app/poojas/containers/poojas.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var routes = [{ path: '', component: _containers_poojas_component__WEBPACK_IMPORTED_MODULE_2__["PoojasComponent"] }];
var PoojasRoutingModule = /** @class */ (function () {
    function PoojasRoutingModule() {
    }
    PoojasRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PoojasRoutingModule);
    return PoojasRoutingModule;
}());



/***/ }),

/***/ "./src/app/poojas/poojas.module.ts":
/*!*****************************************!*\
  !*** ./src/app/poojas/poojas.module.ts ***!
  \*****************************************/
/*! exports provided: PoojasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasModule", function() { return PoojasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _poojas_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./poojas-routing.module */ "./src/app/poojas/poojas-routing.module.ts");
/* harmony import */ var _containers_poojas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/poojas.component */ "./src/app/poojas/containers/poojas.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _store_poojas_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/poojas.reducer */ "./src/app/poojas/store/poojas.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_poojas_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/poojas.effects */ "./src/app/poojas/store/poojas.effects.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












var PoojasModule = /** @class */ (function () {
    function PoojasModule() {
    }
    PoojasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _poojas_routing_module__WEBPACK_IMPORTED_MODULE_2__["PoojasRoutingModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["InputsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["IconsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('poojas', _store_poojas_reducer__WEBPACK_IMPORTED_MODULE_6__["PoojasReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_store_poojas_effects__WEBPACK_IMPORTED_MODULE_9__["PoojasEffects"]])
            ],
            declarations: [_containers_poojas_component__WEBPACK_IMPORTED_MODULE_3__["PoojasComponent"]],
            exports: [_containers_poojas_component__WEBPACK_IMPORTED_MODULE_3__["PoojasComponent"]]
        })
    ], PoojasModule);
    return PoojasModule;
}());



/***/ }),

/***/ "./src/app/poojas/services/poojas.service.ts":
/*!***************************************************!*\
  !*** ./src/app/poojas/services/poojas.service.ts ***!
  \***************************************************/
/*! exports provided: PoojasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasService", function() { return PoojasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




// import { AngularFireAuth } from '@angular/fire/auth';
var PoojasService = /** @class */ (function () {
    function PoojasService(http) {
        this.http = http;
    }
    Object.defineProperty(PoojasService.prototype, "userId", {
        get: function () {
            return 'uid';
        },
        enumerable: true,
        configurable: true
    });
    PoojasService.prototype.add = function (poojas, userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([poojas, userId]);
    };
    PoojasService.prototype.addPoojas = function (poojas) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(poojas);
    };
    PoojasService.prototype.getPoojas = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/unknown");
    };
    PoojasService.prototype.update = function (poojas, userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([poojas, userId]);
    };
    PoojasService.prototype.delete = function (poojas, userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([poojas, userId]);
    };
    PoojasService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PoojasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PoojasService);
    return PoojasService;
}());



/***/ }),

/***/ "./src/app/poojas/store/poojas.actions.ts":
/*!************************************************!*\
  !*** ./src/app/poojas/store/poojas.actions.ts ***!
  \************************************************/
/*! exports provided: PoojasActionTypes, PoojasQuery, PoojasLoaded, PoojasAdded, PoojasEdited, PoojasDeleted, PoojasError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasActionTypes", function() { return PoojasActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasQuery", function() { return PoojasQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasLoaded", function() { return PoojasLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasAdded", function() { return PoojasAdded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasEdited", function() { return PoojasEdited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasDeleted", function() { return PoojasDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasError", function() { return PoojasError; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PoojasActionTypes;
(function (PoojasActionTypes) {
    PoojasActionTypes["POOJAS_QUERY"] = "[Poojas] Query";
    PoojasActionTypes["POOJAS_LOADED"] = "[Poojas] Fetched";
    PoojasActionTypes["POOJAS_ADDED"] = "[Poojas] Added";
    PoojasActionTypes["POOJAS_EDITED"] = "[Poojas] Edited";
    PoojasActionTypes["POOJAS_DELETED"] = "[Poojas] Deleted";
    PoojasActionTypes["POOJAS_ERROR"] = "[Poojas] Error";
})(PoojasActionTypes || (PoojasActionTypes = {}));
var PoojasQuery = /** @class */ (function () {
    function PoojasQuery() {
        this.type = PoojasActionTypes.POOJAS_QUERY;
    }
    return PoojasQuery;
}());

var PoojasLoaded = /** @class */ (function () {
    function PoojasLoaded(payload) {
        this.payload = payload;
        this.type = PoojasActionTypes.POOJAS_LOADED;
    }
    return PoojasLoaded;
}());

var PoojasAdded = /** @class */ (function () {
    function PoojasAdded(payload) {
        this.payload = payload;
        this.type = PoojasActionTypes.POOJAS_ADDED;
    }
    return PoojasAdded;
}());

var PoojasEdited = /** @class */ (function () {
    function PoojasEdited(payload) {
        this.payload = payload;
        this.type = PoojasActionTypes.POOJAS_EDITED;
    }
    return PoojasEdited;
}());

var PoojasDeleted = /** @class */ (function () {
    function PoojasDeleted(payload) {
        this.payload = payload;
        this.type = PoojasActionTypes.POOJAS_DELETED;
    }
    return PoojasDeleted;
}());

var PoojasError = /** @class */ (function () {
    function PoojasError(payload) {
        this.payload = payload;
        this.type = PoojasActionTypes.POOJAS_ERROR;
    }
    return PoojasError;
}());



/***/ }),

/***/ "./src/app/poojas/store/poojas.effects.ts":
/*!************************************************!*\
  !*** ./src/app/poojas/store/poojas.effects.ts ***!
  \************************************************/
/*! exports provided: PoojasEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasEffects", function() { return PoojasEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_poojas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/poojas.service */ "./src/app/poojas/services/poojas.service.ts");
/* harmony import */ var _poojas_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poojas.actions */ "./src/app/poojas/store/poojas.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var _poojas_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./poojas.selectors */ "./src/app/poojas/store/poojas.selectors.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var PoojasEffects = /** @class */ (function () {
    function PoojasEffects(actions$, poojasService, store, toastr) {
        var _this = this;
        this.actions$ = actions$;
        this.poojasService = poojasService;
        this.store = store;
        this.toastr = toastr;
        this.query$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasActionTypes"].POOJAS_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_poojas_selectors__WEBPACK_IMPORTED_MODULE_8__["getPoojas"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) { return _this.poojasService.getPoojas()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (list) {
            var PoojasData = list.data.map(function (res) {
                return {
                    year: res.year,
                    id: res.id,
                    name: res.name,
                    color: res.color,
                    pantone_value: res.pantone_value,
                    price: 20
                };
            });
            return (new _poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasLoaded"]({ poojas: PoojasData }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.toastr.error('Something went wrong. Please try after sometime');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasError"]({ error: error }));
        })); }));
        this.added$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasActionTypes"].POOJAS_ADDED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.poojasService.add(payload.customer, user.temple);
        }));
        this.edit$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasActionTypes"].POOJAS_EDITED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.poojasService.update(payload.customer, user.temple)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                _this.toastr.error('Something went wrong. Please try after sometime');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasError"]({ error: error }));
            }));
        }));
        this.delete$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasActionTypes"].POOJAS_DELETED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.poojasService.delete(payload.customer, user.temple);
        }));
    }
    PoojasEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] },
        { type: _services_poojas_service__WEBPACK_IMPORTED_MODULE_2__["PoojasService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }
    ]; };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], PoojasEffects.prototype, "query$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], PoojasEffects.prototype, "added$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], PoojasEffects.prototype, "edit$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], PoojasEffects.prototype, "delete$", void 0);
    PoojasEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _services_poojas_service__WEBPACK_IMPORTED_MODULE_2__["PoojasService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]])
    ], PoojasEffects);
    return PoojasEffects;
}());



/***/ }),

/***/ "./src/app/poojas/store/poojas.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/poojas/store/poojas.reducer.ts ***!
  \************************************************/
/*! exports provided: PoojasReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasReducer", function() { return PoojasReducer; });
/* harmony import */ var _poojas_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poojas.state */ "./src/app/poojas/store/poojas.state.ts");
/* harmony import */ var _poojas_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poojas.actions */ "./src/app/poojas/store/poojas.actions.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


function PoojasReducer(state, action) {
    if (state === void 0) { state = _poojas_state__WEBPACK_IMPORTED_MODULE_0__["PoojasInitialState"]; }
    switch (action.type) {
        case _poojas_actions__WEBPACK_IMPORTED_MODULE_1__["PoojasActionTypes"].POOJAS_QUERY: {
            return Object.assign({}, state, {
                isLoading: true,
            });
        }
        case _poojas_actions__WEBPACK_IMPORTED_MODULE_1__["PoojasActionTypes"].POOJAS_LOADED: {
            return Object.assign({}, state, {
                poojas: action.payload.poojas,
                isLoading: false,
            });
        }
        case _poojas_actions__WEBPACK_IMPORTED_MODULE_1__["PoojasActionTypes"].POOJAS_ERROR: {
            return Object.assign({}, state, {
                isLoading: false,
                error: action.payload.error
            });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/poojas/store/poojas.selectors.ts":
/*!**************************************************!*\
  !*** ./src/app/poojas/store/poojas.selectors.ts ***!
  \**************************************************/
/*! exports provided: getPoojasState, getPoojas, getIsLoading, getError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoojasState", function() { return getPoojasState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoojas", function() { return getPoojas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return getIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var getPoojasState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('poojas');
var getPoojas = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPoojasState, function (poojas) { return poojas.poojas; });
var getIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPoojasState, function (poojas) { return poojas.isLoading; });
var getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPoojasState, function (poojas) { return poojas.error; });


/***/ }),

/***/ "./src/app/poojas/store/poojas.state.ts":
/*!**********************************************!*\
  !*** ./src/app/poojas/store/poojas.state.ts ***!
  \**********************************************/
/*! exports provided: PoojasInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasInitialState", function() { return PoojasInitialState; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PoojasInitialState = {
    poojas: null,
    isLoading: true,
    error: null
};


/***/ })

}]);
//# sourceMappingURL=poojas-poojas-module.js.map