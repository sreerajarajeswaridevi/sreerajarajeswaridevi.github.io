(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donations-donations-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donations/containers/donations.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donations/containers/donations.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-split-body [isLoading$]=\"isLoading$\">\r\n  <div class=\"left-section\">\r\n    <div class=\"white px-4 section-header\">\r\n      <h3>Donation LIST</h3>\r\n      <p class=\"grey-text pt-3\">Manage your Donations list</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"right-section\">\r\n    <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 200px\">\r\n      <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-split-body>\r\n\r\n");

/***/ }),

/***/ "./src/app/donations/containers/donations.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/donations/containers/donations.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0aW9ucy9jb250YWluZXJzL2RvbmF0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/donations/containers/donations.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/donations/containers/donations.component.ts ***!
  \*************************************************************/
/*! exports provided: DonationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsComponent", function() { return DonationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_donations_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/donations.selectors */ "./src/app/donations/store/donations.selectors.ts");
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



var DonationsComponent = /** @class */ (function () {
    function DonationsComponent(store) {
        this.store = store;
    }
    DonationsComponent.prototype.ngOnInit = function () {
        this.isLoading$ = this.store.select(_store_donations_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoading"]);
    };
    DonationsComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
    ]; };
    DonationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donations',
            template: __importDefault(__webpack_require__(/*! raw-loader!./donations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donations/containers/donations.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./donations.component.scss */ "./src/app/donations/containers/donations.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], DonationsComponent);
    return DonationsComponent;
}());



/***/ }),

/***/ "./src/app/donations/donations-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/donations/donations-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DonationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsRoutingModule", function() { return DonationsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_donations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/donations.component */ "./src/app/donations/containers/donations.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var routes = [{ path: '', component: _containers_donations_component__WEBPACK_IMPORTED_MODULE_2__["DonationsComponent"] }];
var DonationsRoutingModule = /** @class */ (function () {
    function DonationsRoutingModule() {
    }
    DonationsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DonationsRoutingModule);
    return DonationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/donations/donations.module.ts":
/*!***********************************************!*\
  !*** ./src/app/donations/donations.module.ts ***!
  \***********************************************/
/*! exports provided: DonationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsModule", function() { return DonationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _donations_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./donations-routing.module */ "./src/app/donations/donations-routing.module.ts");
/* harmony import */ var _containers_donations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/donations.component */ "./src/app/donations/containers/donations.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _store_donations_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/donations.reducer */ "./src/app/donations/store/donations.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_donations_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/donations.effects */ "./src/app/donations/store/donations.effects.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};











var DonationsModule = /** @class */ (function () {
    function DonationsModule() {
    }
    DonationsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _donations_routing_module__WEBPACK_IMPORTED_MODULE_2__["DonationsRoutingModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ModalModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["InputsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["IconsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('donations', _store_donations_reducer__WEBPACK_IMPORTED_MODULE_6__["DonationsReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_store_donations_effects__WEBPACK_IMPORTED_MODULE_9__["DonationsEffects"]])
            ],
            declarations: [_containers_donations_component__WEBPACK_IMPORTED_MODULE_3__["DonationsComponent"]],
            exports: [_containers_donations_component__WEBPACK_IMPORTED_MODULE_3__["DonationsComponent"]]
        })
    ], DonationsModule);
    return DonationsModule;
}());



/***/ }),

/***/ "./src/app/donations/services/donations.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/donations/services/donations.service.ts ***!
  \*********************************************************/
/*! exports provided: DonationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsService", function() { return DonationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
var DonationsService = /** @class */ (function () {
    function DonationsService() {
    }
    Object.defineProperty(DonationsService.prototype, "userId", {
        get: function () {
            return 'uid';
        },
        enumerable: true,
        configurable: true
    });
    DonationsService.prototype.add = function (donations, userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([donations, userId]);
    };
    DonationsService.prototype.addDonations = function (donationss) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(donationss);
    };
    DonationsService.prototype.get = function (userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(userId);
    };
    DonationsService.prototype.update = function (donations, userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([donations, userId]);
    };
    DonationsService.prototype.delete = function (donations, userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([donations, userId]);
    };
    DonationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DonationsService);
    return DonationsService;
}());



/***/ }),

/***/ "./src/app/donations/store/donations.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/donations/store/donations.actions.ts ***!
  \******************************************************/
/*! exports provided: DonationsActionTypes, DonationsQuery, DonationsLoaded, DonationsAdded, DonationsEdited, DonationsDeleted, DonationsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsActionTypes", function() { return DonationsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsQuery", function() { return DonationsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsLoaded", function() { return DonationsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsAdded", function() { return DonationsAdded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsEdited", function() { return DonationsEdited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsDeleted", function() { return DonationsDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsError", function() { return DonationsError; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var DonationsActionTypes;
(function (DonationsActionTypes) {
    DonationsActionTypes["POOJAS_QUERY"] = "[Donations] Query";
    DonationsActionTypes["POOJAS_LOADED"] = "[Donations] Fetched";
    DonationsActionTypes["POOJAS_ADDED"] = "[Donations] Added";
    DonationsActionTypes["POOJAS_EDITED"] = "[Donations] Edited";
    DonationsActionTypes["POOJAS_DELETED"] = "[Donations] Deleted";
    DonationsActionTypes["POOJAS_ERROR"] = "[Donations] Error";
})(DonationsActionTypes || (DonationsActionTypes = {}));
var DonationsQuery = /** @class */ (function () {
    function DonationsQuery() {
        this.type = DonationsActionTypes.POOJAS_QUERY;
    }
    return DonationsQuery;
}());

var DonationsLoaded = /** @class */ (function () {
    function DonationsLoaded(payload) {
        this.payload = payload;
        this.type = DonationsActionTypes.POOJAS_LOADED;
    }
    return DonationsLoaded;
}());

var DonationsAdded = /** @class */ (function () {
    function DonationsAdded(payload) {
        this.payload = payload;
        this.type = DonationsActionTypes.POOJAS_ADDED;
    }
    return DonationsAdded;
}());

var DonationsEdited = /** @class */ (function () {
    function DonationsEdited(payload) {
        this.payload = payload;
        this.type = DonationsActionTypes.POOJAS_EDITED;
    }
    return DonationsEdited;
}());

var DonationsDeleted = /** @class */ (function () {
    function DonationsDeleted(payload) {
        this.payload = payload;
        this.type = DonationsActionTypes.POOJAS_DELETED;
    }
    return DonationsDeleted;
}());

var DonationsError = /** @class */ (function () {
    function DonationsError(payload) {
        this.payload = payload;
        this.type = DonationsActionTypes.POOJAS_ERROR;
    }
    return DonationsError;
}());



/***/ }),

/***/ "./src/app/donations/store/donations.effects.ts":
/*!******************************************************!*\
  !*** ./src/app/donations/store/donations.effects.ts ***!
  \******************************************************/
/*! exports provided: DonationsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsEffects", function() { return DonationsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_donations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/donations.service */ "./src/app/donations/services/donations.service.ts");
/* harmony import */ var _donations_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donations.actions */ "./src/app/donations/store/donations.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
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









var DonationsEffects = /** @class */ (function () {
    function DonationsEffects(actions$, donationsService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.donationsService = donationsService;
        this.store = store;
        this.query$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsActionTypes"].POOJAS_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var user = _a[1];
            return _this.donationsService.get(user.temple)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                var DonationsData = data.map(function (res) {
                    var key = res.payload.key;
                    var customer = res.payload.val();
                    return {
                        key: key,
                        id: customer.id,
                        name: customer.name,
                        description: customer.description
                    };
                });
                return (new _donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsLoaded"]({ Donations: DonationsData }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsError"]({ error: error }));
            }));
        }));
        this.added$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsActionTypes"].POOJAS_ADDED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.donationsService.add(payload.customer, user.temple);
        }));
        this.edit$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsActionTypes"].POOJAS_EDITED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.donationsService.update(payload.customer, user.temple)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsError"]({ error: error }));
            }));
        }));
        this.delete$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsActionTypes"].POOJAS_DELETED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.donationsService.delete(payload.customer, user.temple);
        }));
    }
    DonationsEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] },
        { type: _services_donations_service__WEBPACK_IMPORTED_MODULE_2__["DonationsService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
    ]; };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], DonationsEffects.prototype, "query$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], DonationsEffects.prototype, "added$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], DonationsEffects.prototype, "edit$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], DonationsEffects.prototype, "delete$", void 0);
    DonationsEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _services_donations_service__WEBPACK_IMPORTED_MODULE_2__["DonationsService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], DonationsEffects);
    return DonationsEffects;
}());



/***/ }),

/***/ "./src/app/donations/store/donations.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/donations/store/donations.reducer.ts ***!
  \******************************************************/
/*! exports provided: DonationsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsReducer", function() { return DonationsReducer; });
/* harmony import */ var _donations_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donations.state */ "./src/app/donations/store/donations.state.ts");
/* harmony import */ var _donations_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./donations.actions */ "./src/app/donations/store/donations.actions.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


function DonationsReducer(state, action) {
    if (state === void 0) { state = _donations_state__WEBPACK_IMPORTED_MODULE_0__["DonationsInitialState"]; }
    switch (action.type) {
        case _donations_actions__WEBPACK_IMPORTED_MODULE_1__["DonationsActionTypes"].POOJAS_QUERY: {
            return Object.assign({}, state, {
                isLoading: true,
            });
        }
        case _donations_actions__WEBPACK_IMPORTED_MODULE_1__["DonationsActionTypes"].POOJAS_LOADED: {
            return Object.assign({}, state, {
                Donations: action.payload.Donations,
                isLoading: false,
            });
        }
        case _donations_actions__WEBPACK_IMPORTED_MODULE_1__["DonationsActionTypes"].POOJAS_ERROR: {
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

/***/ "./src/app/donations/store/donations.selectors.ts":
/*!********************************************************!*\
  !*** ./src/app/donations/store/donations.selectors.ts ***!
  \********************************************************/
/*! exports provided: getDonationsState, getDonations, getIsLoading, getError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDonationsState", function() { return getDonationsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDonations", function() { return getDonations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return getIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var getDonationsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('donations');
var getDonations = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDonationsState, function (donations) { return donations.donations; });
var getIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDonationsState, function (donations) { return donations.isLoading; });
var getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getDonationsState, function (donations) { return donations.error; });


/***/ }),

/***/ "./src/app/donations/store/donations.state.ts":
/*!****************************************************!*\
  !*** ./src/app/donations/store/donations.state.ts ***!
  \****************************************************/
/*! exports provided: DonationsInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsInitialState", function() { return DonationsInitialState; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var DonationsInitialState = {
    donations: null,
    isLoading: true,
    error: null
};


/***/ })

}]);
//# sourceMappingURL=donations-donations-module.js.map