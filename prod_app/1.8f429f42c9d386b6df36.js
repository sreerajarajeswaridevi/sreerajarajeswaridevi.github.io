(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/app/charts/charts-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/charts/charts-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ChartsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsRoutingModule", function() { return ChartsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_charts_charts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containers/charts/charts.component */ "./src/app/charts/containers/charts/charts.component.ts");


var routes = [
    { path: '', component: _containers_charts_charts_component__WEBPACK_IMPORTED_MODULE_1__["ChartsComponent"] }
];
var ChartsRoutingModule = /** @class */ /*@__PURE__*/ (function () {
    function ChartsRoutingModule() {
    }
    return ChartsRoutingModule;
}());



/***/ }),

/***/ "./src/app/charts/charts.module.ngfactory.js":
/*!***************************************************!*\
  !*** ./src/app/charts/charts.module.ngfactory.js ***!
  \***************************************************/
/*! exports provided: ChartsDataModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsDataModuleNgFactory", function() { return ChartsDataModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _charts_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts.module */ "./src/app/charts/charts.module.ts");
/* harmony import */ var _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory */ "./node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory.js");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _shared_components_confirm_modal_confirm_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/confirm-modal/confirm-modal.component.ngfactory */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ngfactory.js");
/* harmony import */ var _shared_components_customers_modal_customers_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/customers-modal/customers-modal.component.ngfactory */ "./src/app/shared/components/customers-modal/customers-modal.component.ngfactory.js");
/* harmony import */ var _shared_components_poojas_modal_poojas_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/poojas-modal/poojas-modal.component.ngfactory */ "./src/app/shared/components/poojas-modal/poojas-modal.component.ngfactory.js");
/* harmony import */ var _expenses_containers_edit_expense_edit_expense_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../expenses/containers/edit-expense/edit-expense.component.ngfactory */ "./src/app/expenses/containers/edit-expense/edit-expense.component.ngfactory.js");
/* harmony import */ var _shared_components_user_modal_user_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/user-modal/user-modal.component.ngfactory */ "./src/app/shared/components/user-modal/user-modal.component.ngfactory.js");
/* harmony import */ var _shared_components_printer_printer_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/printer/printer.component.ngfactory */ "./src/app/shared/components/printer/printer.component.ngfactory.js");
/* harmony import */ var _containers_charts_charts_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers/charts/charts.component.ngfactory */ "./src/app/charts/containers/charts/charts.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-indexed-db */ "./node_modules/ngx-indexed-db/fesm2015/ngx-indexed-db.js");
/* harmony import */ var _shared_services_pwa_service_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/services/pwa-service.service */ "./src/app/shared/services/pwa-service.service.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../auth/store/auth.reducer */ "./src/app/auth/store/auth.reducer.ts");
/* harmony import */ var _store_charts_reducer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./store/charts.reducer */ "./src/app/charts/store/charts.reducer.ts");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../auth/store/auth.effects */ "./src/app/auth/store/auth.effects.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _store_charts_effects__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./store/charts.effects */ "./src/app/charts/store/charts.effects.ts");
/* harmony import */ var _services_charts_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/charts.service */ "./src/app/charts/services/charts.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _expenses_indexedDB_indexedDB_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../expenses/indexedDB/indexedDB.module */ "./src/app/expenses/indexedDB/indexedDB.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _charts_routing_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./charts-routing.module */ "./src/app/charts/charts-routing.module.ts");
/* harmony import */ var _containers_charts_charts_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./containers/charts/charts.component */ "./src/app/charts/containers/charts/charts.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */



































var ChartsDataModuleNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_charts_module__WEBPACK_IMPORTED_MODULE_1__["ChartsDataModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["MdbTablePaginationComponentNgFactory"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ModalBackdropComponentNgFactory"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ModalContainerComponentNgFactory"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_2__["BsDropdownContainerComponentNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _shared_components_confirm_modal_confirm_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponentNgFactory"], _shared_components_customers_modal_customers_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["CustomersModalComponentNgFactory"], _shared_components_poojas_modal_poojas_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["PoojasModalComponentNgFactory"], _expenses_containers_edit_expense_edit_expense_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["EditExpenseComponentNgFactory"], _shared_components_user_modal_user_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["UserModalComponentNgFactory"], _shared_components_printer_printer_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["PrinterComponentNgFactory"], _containers_charts_charts_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["ChartsComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["MdbTableService"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["MdbTableService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["NavbarService"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["NavbarService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["ɵf"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["ɵf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["ɵe"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["ɵe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["ɵf"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["BsDropdownState"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["BsDropdownState"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, ngx_indexed_db__WEBPACK_IMPORTED_MODULE_14__["NgxIndexedDBService"], ngx_indexed_db__WEBPACK_IMPORTED_MODULE_14__["NgxIndexedDBService"], [ngx_indexed_db__WEBPACK_IMPORTED_MODULE_14__["CONFIG_TOKEN"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _shared_services_pwa_service_service__WEBPACK_IMPORTED_MODULE_15__["PwaService"], _shared_services_pwa_service_service__WEBPACK_IMPORTED_MODULE_15__["PwaService"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["SwUpdate"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["CardsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["CardsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["ChartsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["ChartsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["ButtonsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["ButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["TableModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["TableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["InputsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["InputsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["InputUtilitiesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["InputUtilitiesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["IconsModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["IconsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["ModalModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["ModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["CollapseModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["CollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["DropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["BadgeModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["BadgeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["NavbarModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["NavbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["WavesModule"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["WavesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["ɵngrx_modules_store_store_n"], function () { return [{}, {}]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["STORE_FEATURES"], function () { return [{ key: "auth", reducerFactory: _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["combineReducers"], metaReducers: [], initialState: undefined }, { key: "charts", reducerFactory: _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["combineReducers"], metaReducers: [], initialState: undefined }]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["ɵngrx_modules_store_store_o"], _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["ɵngrx_modules_store_store_u"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["ɵngrx_modules_store_store_n"], _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["STORE_FEATURES"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["ɵngrx_modules_store_store_m"], function () { return [_auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_19__["authReducer"], _store_charts_reducer__WEBPACK_IMPORTED_MODULE_20__["chartsReducer"]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["ɵngrx_modules_store_store_p"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_ngrx_store__WEBPACK_IMPORTED_MODULE_18__["ɵngrx_modules_store_store_m"], _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["ɵngrx_modules_store_store_m"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["FEATURE_REDUCERS"], function (p0_0, p0_1, p0_2, p1_0, p1_1, p1_2) { return [_ngrx_store__WEBPACK_IMPORTED_MODULE_18__["ɵngrx_modules_store_store_v"](p0_0, p0_1, p0_2), _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["ɵngrx_modules_store_store_v"](p1_0, p1_1, p1_2)]; }, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["ɵngrx_modules_store_store_m"], _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["ɵngrx_modules_store_store_p"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["ɵngrx_modules_store_store_m"], _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["ɵngrx_modules_store_store_p"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073873408, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["StoreFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["StoreFeatureModule"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_18__["ɵngrx_modules_store_store_o"], _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["FEATURE_REDUCERS"], _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["ReducerManager"], _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["StoreRootModule"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClient"], _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_23__["AuthEffects"], _auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_23__["AuthEffects"], [_ngrx_effects__WEBPACK_IMPORTED_MODULE_24__["Actions"], _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_25__["ToastrService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _store_charts_effects__WEBPACK_IMPORTED_MODULE_26__["ChartsEffects"], _store_charts_effects__WEBPACK_IMPORTED_MODULE_26__["ChartsEffects"], [_ngrx_effects__WEBPACK_IMPORTED_MODULE_24__["Actions"], _services_charts_service__WEBPACK_IMPORTED_MODULE_27__["ChartsService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["Store"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _ngrx_effects__WEBPACK_IMPORTED_MODULE_24__["ɵngrx_modules_effects_effects_f"], function (p0_0, p1_0) { return [_ngrx_effects__WEBPACK_IMPORTED_MODULE_24__["ɵngrx_modules_effects_effects_b"](p0_0), _ngrx_effects__WEBPACK_IMPORTED_MODULE_24__["ɵngrx_modules_effects_effects_b"](p1_0)]; }, [_auth_store_auth_effects__WEBPACK_IMPORTED_MODULE_23__["AuthEffects"], _store_charts_effects__WEBPACK_IMPORTED_MODULE_26__["ChartsEffects"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngrx_effects__WEBPACK_IMPORTED_MODULE_24__["EffectsFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_24__["EffectsFeatureModule"], [_ngrx_effects__WEBPACK_IMPORTED_MODULE_24__["EffectsRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_24__["ɵngrx_modules_effects_effects_f"], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["StoreRootModule"]], [2, _ngrx_store__WEBPACK_IMPORTED_MODULE_18__["StoreFeatureModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _auth_auth_module__WEBPACK_IMPORTED_MODULE_29__["AuthModule"], _auth_auth_module__WEBPACK_IMPORTED_MODULE_29__["AuthModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _core_core_module__WEBPACK_IMPORTED_MODULE_30__["CoreModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_30__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ngx_indexed_db__WEBPACK_IMPORTED_MODULE_14__["NgxIndexedDBModule"], ngx_indexed_db__WEBPACK_IMPORTED_MODULE_14__["NgxIndexedDBModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _expenses_indexedDB_indexedDB_module__WEBPACK_IMPORTED_MODULE_31__["IndexedDBModule"], _expenses_indexedDB_indexedDB_module__WEBPACK_IMPORTED_MODULE_31__["IndexedDBModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_32__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_32__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _charts_routing_module__WEBPACK_IMPORTED_MODULE_33__["ChartsRoutingModule"], _charts_routing_module__WEBPACK_IMPORTED_MODULE_33__["ChartsRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _charts_module__WEBPACK_IMPORTED_MODULE_1__["ChartsDataModule"], _charts_module__WEBPACK_IMPORTED_MODULE_1__["ChartsDataModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_12__["BsDropdownConfig"], { autoClose: true }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ngx_indexed_db__WEBPACK_IMPORTED_MODULE_14__["CONFIG_TOKEN"], { name: "RRDB", version: 3, objectStoresMeta: [{ store: "expenses", storeConfig: { keyPath: "item", autoIncrement: false }, storeSchema: [{ name: "item", keypath: "item", options: { unique: true } }, { name: "frequency", keypath: "frequency", options: { unique: false } }] }, { store: "donations", storeConfig: { keyPath: "donationItem", autoIncrement: false }, storeSchema: [{ name: "donationItem", keypath: "donationItem", options: { unique: true } }, { name: "frequency", keypath: "frequency", options: { unique: false } }] }, { store: "salary", storeConfig: { keyPath: "person", autoIncrement: false }, storeSchema: [{ name: "person", keypath: "person", options: { unique: true } }, { name: "amount", keypath: "amount", options: { unique: false } }, { name: "frequency", keypath: "frequency", options: { unique: false } }] }, { store: "poojaType", storeConfig: { keyPath: "pooja_code", autoIncrement: false }, storeSchema: [{ name: "pooja_code", keypath: "pooja_code", options: { unique: true } }, { name: "frequency", keypath: "frequency", options: { unique: false } }] }], migrationFactory: _expenses_indexedDB_indexedDB_module__WEBPACK_IMPORTED_MODULE_31__["migrationFactory"] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_17__["ROUTES"], function () { return [[{ path: "", component: _containers_charts_charts_component__WEBPACK_IMPORTED_MODULE_34__["ChartsComponent"] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/charts/charts.module.ts":
/*!*****************************************!*\
  !*** ./src/app/charts/charts.module.ts ***!
  \*****************************************/
/*! exports provided: ChartsDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsDataModule", function() { return ChartsDataModule; });
var ChartsDataModule = /** @class */ /*@__PURE__*/ (function () {
    function ChartsDataModule() {
    }
    return ChartsDataModule;
}());



/***/ }),

/***/ "./src/app/charts/components/bar-chart/bar-chart.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/charts/components/bar-chart/bar-chart.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_BarChartComponent, View_BarChartComponent_0, View_BarChartComponent_Host_0, BarChartComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BarChartComponent", function() { return RenderType_BarChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BarChartComponent_0", function() { return View_BarChartComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BarChartComponent_Host_0", function() { return View_BarChartComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponentNgFactory", function() { return BarChartComponentNgFactory; });
/* harmony import */ var _bar_chart_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bar-chart.component.scss.shim.ngstyle */ "./src/app/charts/components/bar-chart/bar-chart.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _bar_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-chart.component */ "./src/app/charts/components/bar-chart/bar-chart.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */




var styles_BarChartComponent = [_bar_chart_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BarChartComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BarChartComponent, data: {} });

function View_BarChartComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["style", "display: block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "canvas", [["mdbChart", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { datasets: [0, "datasets"], labels: [1, "labels"], options: [2, "options"], chartType: [3, "chartType"], colors: [4, "colors"], legend: [5, "legend"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dataset; var currVal_1 = _co.labels; var currVal_2 = _co.chartOptions; var currVal_3 = _co.chartType; var currVal_4 = _co.chartColors; var currVal_5 = true; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }, null); }
function View_BarChartComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-bar-chart", [], null, null, null, View_BarChartComponent_0, RenderType_BarChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _bar_chart_component__WEBPACK_IMPORTED_MODULE_3__["BarChartComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BarChartComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-bar-chart", _bar_chart_component__WEBPACK_IMPORTED_MODULE_3__["BarChartComponent"], View_BarChartComponent_Host_0, { dataset: "dataset", labels: "labels" }, {}, []);



/***/ }),

/***/ "./src/app/charts/components/bar-chart/bar-chart.component.scss.shim.ngstyle.js":
/*!**************************************************************************************!*\
  !*** ./src/app/charts/components/bar-chart/bar-chart.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = [""];



/***/ }),

/***/ "./src/app/charts/components/bar-chart/bar-chart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/charts/components/bar-chart/bar-chart.component.ts ***!
  \********************************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var BarChartComponent = /** @class */ /*@__PURE__*/ (function () {
    function BarChartComponent() {
        this.chartType = 'bar';
        this.chartColors = [
            {
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 2,
            }
        ];
        this.chartOptions = {
            responsive: true
        };
    }
    BarChartComponent.prototype.ngOnInit = function () {
    };
    return BarChartComponent;
}());



/***/ }),

/***/ "./src/app/charts/components/line-chart/line-chart.component.ngfactory.js":
/*!********************************************************************************!*\
  !*** ./src/app/charts/components/line-chart/line-chart.component.ngfactory.js ***!
  \********************************************************************************/
/*! exports provided: RenderType_LineChartComponent, View_LineChartComponent_0, View_LineChartComponent_Host_0, LineChartComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LineChartComponent", function() { return RenderType_LineChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LineChartComponent_0", function() { return View_LineChartComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LineChartComponent_Host_0", function() { return View_LineChartComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponentNgFactory", function() { return LineChartComponentNgFactory; });
/* harmony import */ var _line_chart_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-chart.component.scss.shim.ngstyle */ "./src/app/charts/components/line-chart/line-chart.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _line_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line-chart.component */ "./src/app/charts/components/line-chart/line-chart.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */




var styles_LineChartComponent = [_line_chart_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_LineChartComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LineChartComponent, data: {} });

function View_LineChartComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["style", "display: block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "canvas", [["height", "500px"], ["mdbChart", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { datasets: [0, "datasets"], labels: [1, "labels"], options: [2, "options"], chartType: [3, "chartType"], colors: [4, "colors"], legend: [5, "legend"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dataset; var currVal_1 = _co.labels; var currVal_2 = _co.chartOptions; var currVal_3 = _co.chartType; var currVal_4 = _co.chartColors; var currVal_5 = true; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }, null); }
function View_LineChartComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-line-chart", [], null, null, null, View_LineChartComponent_0, RenderType_LineChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var LineChartComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-line-chart", _line_chart_component__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"], View_LineChartComponent_Host_0, { dataset: "dataset", labels: "labels" }, {}, []);



/***/ }),

/***/ "./src/app/charts/components/line-chart/line-chart.component.scss.shim.ngstyle.js":
/*!****************************************************************************************!*\
  !*** ./src/app/charts/components/line-chart/line-chart.component.scss.shim.ngstyle.js ***!
  \****************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = [""];



/***/ }),

/***/ "./src/app/charts/components/line-chart/line-chart.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/charts/components/line-chart/line-chart.component.ts ***!
  \**********************************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var LineChartComponent = /** @class */ /*@__PURE__*/ (function () {
    function LineChartComponent() {
        this.chartType = 'line';
        this.chartColors = [
            {
                backgroundColor: 'rgba(255, 152, 0, .5)',
                borderColor: 'rgb(230,81,0)',
                borderWidth: 2,
            }
        ];
        this.chartOptions = {
            responsive: true,
            maintainAspectRatio: false
        };
    }
    LineChartComponent.prototype.ngOnInit = function () {
    };
    return LineChartComponent;
}());



/***/ }),

/***/ "./src/app/charts/components/pie-chart/pie-chart.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/charts/components/pie-chart/pie-chart.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_PieChartComponent, View_PieChartComponent_0, View_PieChartComponent_Host_0, PieChartComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PieChartComponent", function() { return RenderType_PieChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PieChartComponent_0", function() { return View_PieChartComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PieChartComponent_Host_0", function() { return View_PieChartComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponentNgFactory", function() { return PieChartComponentNgFactory; });
/* harmony import */ var _pie_chart_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pie-chart.component.scss.shim.ngstyle */ "./src/app/charts/components/pie-chart/pie-chart.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _pie_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pie-chart.component */ "./src/app/charts/components/pie-chart/pie-chart.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */




var styles_PieChartComponent = [_pie_chart_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PieChartComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PieChartComponent, data: {} });

function View_PieChartComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["style", "display: block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "canvas", [["mdbChart", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]], { datasets: [0, "datasets"], labels: [1, "labels"], options: [2, "options"], chartType: [3, "chartType"], colors: [4, "colors"], legend: [5, "legend"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dataset; var currVal_1 = _co.labels; var currVal_2 = _co.chartOptions; var currVal_3 = _co.chartType; var currVal_4 = _co.chartColors; var currVal_5 = true; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }, null); }
function View_PieChartComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-pie-chart", [], null, null, null, View_PieChartComponent_0, RenderType_PieChartComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _pie_chart_component__WEBPACK_IMPORTED_MODULE_3__["PieChartComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PieChartComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-pie-chart", _pie_chart_component__WEBPACK_IMPORTED_MODULE_3__["PieChartComponent"], View_PieChartComponent_Host_0, { dataset: "dataset", labels: "labels" }, {}, []);



/***/ }),

/***/ "./src/app/charts/components/pie-chart/pie-chart.component.scss.shim.ngstyle.js":
/*!**************************************************************************************!*\
  !*** ./src/app/charts/components/pie-chart/pie-chart.component.scss.shim.ngstyle.js ***!
  \**************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = [""];



/***/ }),

/***/ "./src/app/charts/components/pie-chart/pie-chart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/charts/components/pie-chart/pie-chart.component.ts ***!
  \********************************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var PieChartComponent = /** @class */ /*@__PURE__*/ (function () {
    function PieChartComponent() {
        this.chartType = 'pie';
        this.chartColors = [
            {
                backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
                borderWidth: 2,
            }
        ];
        this.chartOptions = {
            responsive: true
        };
    }
    PieChartComponent.prototype.ngOnInit = function () { };
    return PieChartComponent;
}());



/***/ }),

/***/ "./src/app/charts/containers/charts/charts.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/charts/containers/charts/charts.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_ChartsComponent, View_ChartsComponent_0, View_ChartsComponent_Host_0, ChartsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ChartsComponent", function() { return RenderType_ChartsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChartsComponent_0", function() { return View_ChartsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ChartsComponent_Host_0", function() { return View_ChartsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponentNgFactory", function() { return ChartsComponentNgFactory; });
/* harmony import */ var _charts_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts.component.scss.shim.ngstyle */ "./src/app/charts/containers/charts/charts.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory */ "./node_modules/angular-bootstrap-md/angular-bootstrap-md.ngfactory.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _components_bar_chart_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/bar-chart/bar-chart.component.ngfactory */ "./src/app/charts/components/bar-chart/bar-chart.component.ngfactory.js");
/* harmony import */ var _components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/bar-chart/bar-chart.component */ "./src/app/charts/components/bar-chart/bar-chart.component.ts");
/* harmony import */ var _components_pie_chart_pie_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/pie-chart/pie-chart.component.ngfactory */ "./src/app/charts/components/pie-chart/pie-chart.component.ngfactory.js");
/* harmony import */ var _components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/pie-chart/pie-chart.component */ "./src/app/charts/components/pie-chart/pie-chart.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_line_chart_line_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/line-chart/line-chart.component.ngfactory */ "./src/app/charts/components/line-chart/line-chart.component.ngfactory.js");
/* harmony import */ var _components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/line-chart/line-chart.component */ "./src/app/charts/components/line-chart/line-chart.component.ts");
/* harmony import */ var _directives_date_picker_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../directives/date-picker.directive */ "./src/app/directives/date-picker.directive.ts");
/* harmony import */ var _directives_date_transform_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../directives/date-transform.directive */ "./src/app/directives/date-transform.directive.ts");
/* harmony import */ var _shared_components_printer_printer_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/components/printer/printer.component.ngfactory */ "./src/app/shared/components/printer/printer.component.ngfactory.js");
/* harmony import */ var _shared_components_printer_printer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/printer/printer.component */ "./src/app/shared/components/printer/printer.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _charts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./charts.component */ "./src/app/charts/containers/charts/charts.component.ts");
/* harmony import */ var _services_charts_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/charts.service */ "./src/app/charts/services/charts.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */



















var styles_ChartsComponent = [_charts_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ChartsComponent = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ChartsComponent, data: {} });

function View_ChartsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "d-flex justify-content-center align-items-center"], ["style", "margin-top: 300px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "spinner-grow text-primary"], ["role", "status"], ["style", "width: 4rem; height: 4rem"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", "..."])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).transform("Loading")); _ck(_v, 3, 0, currVal_0); }); }
function View_ChartsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mdb-icon", [["alt", "Right"], ["class", "ml-3 float-right delete cursor-pointer gray-text"], ["fas", ""], ["icon", "chevron-right"], ["mdbtn", ""]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"], class: [1, "class"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null)], function (_ck, _v) { var currVal_0 = "chevron-right"; var currVal_1 = "ml-3 float-right delete cursor-pointer gray-text"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ChartsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "price ml-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["\u20B9", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getProfitLoss(_co.pageData.todaysData); _ck(_v, 1, 0, currVal_0); }); }
function View_ChartsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-bar-chart", [], null, null, null, _components_bar_chart_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_BarChartComponent_0"], _components_bar_chart_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_BarChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__["BarChartComponent"], [], { dataset: [0, "dataset"], labels: [1, "labels"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pageData.todaysData.currentOverView.dataSet; var currVal_1 = _co.pageData.todaysData.currentOverView.chartLabels; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ChartsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-pie-chart", [], null, null, null, _components_pie_chart_pie_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_PieChartComponent_0"], _components_pie_chart_pie_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_PieChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_8__["PieChartComponent"], [], { dataset: [0, "dataset"], labels: [1, "labels"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pageData.todaysData.currentOverView.dataSet; var currVal_1 = _co.pageData.todaysData.currentOverView.chartLabels; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ChartsComponent_6(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "mdb-card-body", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardBodyComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardBodyComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 4, "div", [["class", "pl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "button", [["color", "primary"], ["mdbBtn", ""], ["size", "sm"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.swapPoojasData(_co.pageData.todaysData) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbBtnDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbBtnDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 638976, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], size: [1, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, 0, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ChartsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["poojasPieChart", 2]], 0, 0, null, View_ChartsComponent_8))], function (_ck, _v) { var _co = _v.component; _ck(_v, 1, 0); var currVal_0 = "primary"; var currVal_1 = "sm"; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = (_co.pageData.todaysData.currentOverView === _co.pageData.todaysData.overView); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9); _ck(_v, 8, 0, currVal_3, currVal_4); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("REPORTS.Poojas")); _ck(_v, 5, 0, currVal_2); });
}
function View_ChartsComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "\n              p-4\n              d-flex\n              flex-column\n              justify-content-center\n              align-items-center\n            "]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "mdb-icon", [["alt", "no data"], ["class", "float-right grey-text"], ["fas", ""], ["icon", "times-circle"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"], class: [1, "class"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "p", [["class", "grey-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) { var currVal_0 = "times-circle"; var currVal_1 = "float-right grey-text"; _ck(_v, 2, 0, currVal_0, currVal_1); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("REPORTS.No_Data_Today")); _ck(_v, 5, 0, currVal_2); }); }
function View_ChartsComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("REPORTS.Expense_Type")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("REPORTS.Amount")); _ck(_v, 5, 0, currVal_1); }); }
function View_ChartsComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("REPORTS.Pooja_Name")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("REPORTS.Total_Amount_Received")); _ck(_v, 5, 0, currVal_1); }); }
function View_ChartsComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "tr", [["mdbTableCol", ""]], [[2, "green-row", null], [2, "red-row", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "th", [["scope", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["\u20B9", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = true; var currVal_1 = _co.isRed(_co.pageData.todaysData.currentOverView.chartLabels[_v.context.index]); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _co.pageData.todaysData.currentOverView.chartLabels[_v.context.index]; _ck(_v, 2, 0, currVal_2); var currVal_3 = _v.context.$implicit; _ck(_v, 4, 0, currVal_3); }); }
function View_ChartsComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "div", [["class", "col-md-6 col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, "table", [["class", "white text-center z-depth-1"], ["mdbTable", ""]], [[2, "table-striped", null], [2, "table-bordered", null], [2, "table-borderless", null], [2, "table-hover", null], [2, "table-sm", null], [2, "table-responsive", null]], null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbTableDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbTableDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4308992, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbTableDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 3, "thead", [["class", "primary-color text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["poojasView", 2]], null, 0, null, View_ChartsComponent_12)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 11, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 8, "tr", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 5, "td", [["colspan", "2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " ", " ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "span", [["class", "ml-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, ["\u20B9", ""]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); var currVal_6 = (_co.pageData.todaysData.currentOverView === _co.pageData.todaysData.overView); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6); _ck(_v, 5, 0, currVal_6, currVal_7); var currVal_8 = _co.pageData.todaysData.currentOverView.dataSet[0].data; _ck(_v, 9, 0, currVal_8); var currVal_9 = ((_co.getProfitLoss(_co.pageData.todaysData) < 0) ? "loss-row" : "profit-row"); _ck(_v, 12, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).striped; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).bordered; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).borderless; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).hover; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).small; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).responsive; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_10 = _co.todaysDate.format("DD-MMMM-YYYY"); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).transform("REPORTS.ProfitLoss")); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).transform(((_co.getProfitLoss(_co.pageData.todaysData) < 0) ? "REPORTS.Loss" : "REPORTS.Profit"))); _ck(_v, 14, 0, currVal_10, currVal_11, currVal_12); var currVal_13 = _co.getProfitLoss(_co.pageData.todaysData); _ck(_v, 18, 0, currVal_13); }); }
function View_ChartsComponent_3(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 28, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "div", [["class", "card-header mb-2 d-flex-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "span", [["class", "icon-button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.yesterday() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "mdb-icon", [["alt", "Left"], ["class", "mr-3 float-left delete cursor-pointer gray-text"], ["fas", ""], ["icon", "chevron-left"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"], class: [1, "class"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h2", [["class", "text-xl gray-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "span", [["class", "icon-button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.tomorrow() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 17, "div", [["class", "row mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 14, "div", [["class", "col-md-12 col-lg-6 mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 13, "mdb-card", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 7, "mdb-card-header", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardHeaderComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardHeaderComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, 0, [" ", " ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ChartsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ChartsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ChartsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "chevron-left"; var currVal_1 = "mr-3 float-left delete cursor-pointer gray-text"; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = !_co.todaysDate.isSame(_co.customStartDate, "day"); _ck(_v, 10, 0, currVal_3); _ck(_v, 14, 0); var currVal_4 = ((_co.getProfitLoss(_co.pageData.todaysData) < 0) ? "loss-row" : "profit-row"); _ck(_v, 17, 0, currVal_4); _ck(_v, 18, 0); var currVal_7 = _co.pageData.todaysData; _ck(_v, 22, 0, currVal_7); var currVal_8 = _co.pageData.todaysData; _ck(_v, 24, 0, currVal_8); var currVal_9 = !_co.pageData.todaysData; _ck(_v, 26, 0, currVal_9); var currVal_10 = _co.pageData.todaysData; _ck(_v, 28, 0, currVal_10); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.todaysDate.format("DD-MMMM-YYYY"); _ck(_v, 7, 0, currVal_2); var currVal_5 = _co.todaysDate.format("DD-MMMM-YYYY"); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).transform(((_co.getProfitLoss(_co.pageData.todaysData) < 0) ? "REPORTS.Loss" : "REPORTS.Profit"))); _ck(_v, 19, 0, currVal_5, currVal_6); });
}
function View_ChartsComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mdb-icon", [["alt", "Right"], ["class", "ml-3 float-right delete cursor-pointer gray-text"], ["fas", ""], ["icon", "chevron-right"], ["mdbtn", ""]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"], class: [1, "class"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null)], function (_ck, _v) { var currVal_0 = "chevron-right"; var currVal_1 = "ml-3 float-right delete cursor-pointer gray-text"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ChartsComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-bar-chart", [], null, null, null, _components_bar_chart_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_BarChartComponent_0"], _components_bar_chart_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_BarChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__["BarChartComponent"], [], { dataset: [0, "dataset"], labels: [1, "labels"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pageData.thisWeeksData.currentOverView.dataSet; var currVal_1 = _co.pageData.thisWeeksData.currentOverView.chartLabels; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ChartsComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-pie-chart", [], null, null, null, _components_pie_chart_pie_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_PieChartComponent_0"], _components_pie_chart_pie_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_PieChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_8__["PieChartComponent"], [], { dataset: [0, "dataset"], labels: [1, "labels"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pageData.thisWeeksData.currentOverView.dataSet; var currVal_1 = _co.pageData.thisWeeksData.currentOverView.chartLabels; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ChartsComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("REPORTS.Expense_Type")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("REPORTS.Amount")); _ck(_v, 5, 0, currVal_1); }); }
function View_ChartsComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("REPORTS.Pooja_Name")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("REPORTS.Total_Amount_Received")); _ck(_v, 5, 0, currVal_1); }); }
function View_ChartsComponent_21(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "tr", [["mdbTableCol", ""]], [[2, "green-row", null], [2, "red-row", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "th", [["scope", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["\u20B9", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = true; var currVal_1 = _co.isRed(_co.pageData.todaysData.currentOverView.chartLabels[_v.context.index]); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _co.pageData.thisWeeksData.currentOverView.chartLabels[_v.context.index]; _ck(_v, 2, 0, currVal_2); var currVal_3 = _v.context.$implicit; _ck(_v, 4, 0, currVal_3); }); }
function View_ChartsComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "div", [["class", "col-md-6 col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, "table", [["class", "white text-center z-depth-1"], ["mdbTable", ""]], [[2, "table-striped", null], [2, "table-bordered", null], [2, "table-borderless", null], [2, "table-hover", null], [2, "table-sm", null], [2, "table-responsive", null]], null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbTableDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbTableDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4308992, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbTableDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 3, "thead", [["class", "primary-color text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["poojasView", 2]], null, 0, null, View_ChartsComponent_20)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 11, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 8, "tr", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 5, "td", [["colspan", "2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "span", [["class", "ml-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, ["\u20B9", ""]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); var currVal_6 = (_co.pageData.thisWeeksData.currentOverView === _co.pageData.thisWeeksData.overView); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6); _ck(_v, 5, 0, currVal_6, currVal_7); var currVal_8 = _co.pageData.thisWeeksData.currentOverView.dataSet[0].data; _ck(_v, 9, 0, currVal_8); var currVal_9 = ((_co.getProfitLoss(_co.pageData.thisWeeksData) < 0) ? "loss-row" : "profit-row"); _ck(_v, 12, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).striped; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).bordered; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).borderless; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).hover; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).small; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).responsive; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).transform("REPORTS.This_Weeks_ProfitLoss")); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).transform(((_co.getProfitLoss(_co.pageData.thisWeeksData) < 0) ? "REPORTS.Loss" : "REPORTS.Profit"))); _ck(_v, 14, 0, currVal_10, currVal_11); var currVal_12 = _co.getProfitLoss(_co.pageData.thisWeeksData); _ck(_v, 18, 0, currVal_12); }); }
function View_ChartsComponent_14(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 39, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "div", [["class", "card-header mb-2 d-flex-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "span", [["class", "icon-button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.prevWeek() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "mdb-icon", [["alt", "Left"], ["class", "mr-3 float-left delete cursor-pointer gray-text"], ["fas", ""], ["icon", "chevron-left"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"], class: [1, "class"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h2", [["class", "text-xl gray-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "span", [["class", "icon-button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.nextWeek() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 28, "div", [["class", "row mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 25, "div", [["class", "col-md-12 col-lg-6 mb-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 24, "mdb-card", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 8, "mdb-card-header", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardHeaderComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardHeaderComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, 0, [" ", " ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 0, 1, "span", [["class", "price ml-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, null, ["\u20B9", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 0, 13, "mdb-card-body", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardBodyComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardBodyComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, 0, 4, "div", [["class", "pl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 3, "button", [["color", "primary"], ["mdbBtn", ""], ["size", "sm"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.swapPoojasData(_co.pageData.thisWeeksData) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbBtnDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbBtnDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 638976, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], size: [1, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](29, 0, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ChartsComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["poojasPieChart", 2]], 0, 0, null, View_ChartsComponent_17)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, 0, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, 0, 1, "app-bar-chart", [], null, null, null, _components_bar_chart_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_BarChartComponent_0"], _components_bar_chart_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_BarChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 114688, null, 0, _components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__["BarChartComponent"], [], { dataset: [0, "dataset"], labels: [1, "labels"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "chevron-left"; var currVal_1 = "mr-3 float-left delete cursor-pointer gray-text"; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = !_co.todaysDate.isSame(_co.thisWeekStartDate, "week"); _ck(_v, 10, 0, currVal_3); _ck(_v, 14, 0); var currVal_4 = ((_co.getProfitLoss(_co.pageData.thisWeeksData) < 0) ? "loss-row" : "profit-row"); _ck(_v, 17, 0, currVal_4); _ck(_v, 18, 0); _ck(_v, 25, 0); var currVal_8 = "primary"; var currVal_9 = "sm"; _ck(_v, 28, 0, currVal_8, currVal_9); var currVal_11 = (_co.pageData.thisWeeksData.currentOverView === _co.pageData.thisWeeksData.overView); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33); _ck(_v, 32, 0, currVal_11, currVal_12); var currVal_13 = _co.pageData.thisWeeksData.weeklyOverView.dataSet; var currVal_14 = _co.pageData.thisWeeksData.weeklyOverView.chartLabels; _ck(_v, 37, 0, currVal_13, currVal_14); var currVal_15 = _co.pageData.thisWeeksData; _ck(_v, 39, 0, currVal_15); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = ((_co.thisWeekStartDate.format("DD-MMMM") + " TO ") + _co.thisWeekEndDate.format("DD-MMMM")); _ck(_v, 7, 0, currVal_2); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).transform("REPORTS.This_Weeks_ProfitLoss")); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).transform(((_co.getProfitLoss(_co.pageData.thisWeeksData) < 0) ? "REPORTS.Loss" : "REPORTS.Profit"))); _ck(_v, 19, 0, currVal_5, currVal_6); var currVal_7 = _co.getProfitLoss(_co.pageData.thisWeeksData); _ck(_v, 23, 0, currVal_7); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 29, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).transform("REPORTS.Poojas")); _ck(_v, 29, 0, currVal_10); });
}
function View_ChartsComponent_23(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mdb-icon", [["alt", "Right"], ["class", "ml-3 float-right delete cursor-pointer gray-text"], ["fas", ""], ["icon", "chevron-right"], ["mdbtn", ""]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"], class: [1, "class"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null)], function (_ck, _v) { var currVal_0 = "chevron-right"; var currVal_1 = "ml-3 float-right delete cursor-pointer gray-text"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ChartsComponent_24(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-bar-chart", [], null, null, null, _components_bar_chart_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_BarChartComponent_0"], _components_bar_chart_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_BarChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__["BarChartComponent"], [], { dataset: [0, "dataset"], labels: [1, "labels"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pageData.thisMonthsData.currentOverView.dataSet; var currVal_1 = _co.pageData.thisMonthsData.currentOverView.chartLabels; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ChartsComponent_25(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-pie-chart", [], null, null, null, _components_pie_chart_pie_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_PieChartComponent_0"], _components_pie_chart_pie_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_PieChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_8__["PieChartComponent"], [], { dataset: [0, "dataset"], labels: [1, "labels"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pageData.thisMonthsData.currentOverView.dataSet; var currVal_1 = _co.pageData.thisMonthsData.currentOverView.chartLabels; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ChartsComponent_27(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("REPORTS.Expense_Type")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("REPORTS.Amount")); _ck(_v, 5, 0, currVal_1); }); }
function View_ChartsComponent_28(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("REPORTS.Pooja_Name")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("REPORTS.Total_Amount_Received")); _ck(_v, 5, 0, currVal_1); }); }
function View_ChartsComponent_29(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "tr", [["mdbTableCol", ""]], [[2, "green-row", null], [2, "red-row", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "th", [["scope", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["\u20B9", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = true; var currVal_1 = _co.isRed(_co.pageData.todaysData.currentOverView.chartLabels[_v.context.index]); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _co.pageData.thisMonthsData.currentOverView.chartLabels[_v.context.index]; _ck(_v, 2, 0, currVal_2); var currVal_3 = _v.context.$implicit; _ck(_v, 4, 0, currVal_3); }); }
function View_ChartsComponent_26(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "div", [["class", "col-md-6 col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, "table", [["class", "white text-center z-depth-1"], ["mdbTable", ""]], [[2, "table-striped", null], [2, "table-bordered", null], [2, "table-borderless", null], [2, "table-hover", null], [2, "table-sm", null], [2, "table-responsive", null]], null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbTableDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbTableDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4308992, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbTableDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 3, "thead", [["class", "primary-color text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["poojasView", 2]], null, 0, null, View_ChartsComponent_28)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 11, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 8, "tr", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 5, "td", [["colspan", "2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " ", " ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "span", [["class", "ml-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, ["\u20B9", ""]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); var currVal_6 = (_co.pageData.thisMonthsData.currentOverView === _co.pageData.thisMonthsData.overView); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6); _ck(_v, 5, 0, currVal_6, currVal_7); var currVal_8 = _co.pageData.thisMonthsData.currentOverView.dataSet[0].data; _ck(_v, 9, 0, currVal_8); var currVal_9 = ((_co.getProfitLoss(_co.pageData.thisMonthsData) < 0) ? "loss-row" : "profit-row"); _ck(_v, 12, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).striped; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).bordered; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).borderless; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).hover; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).small; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).responsive; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_10 = _co.monthDate.format("MMMM YYYY"); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).transform("REPORTS.ProfitLoss")); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).transform(((_co.getProfitLoss(_co.pageData.thisMonthsData) < 0) ? "REPORTS.Loss" : "REPORTS.Profit"))); _ck(_v, 14, 0, currVal_10, currVal_11, currVal_12); var currVal_13 = _co.getProfitLoss(_co.pageData.thisMonthsData); _ck(_v, 18, 0, currVal_13); }); }
function View_ChartsComponent_30(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "mdb-card", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 3, "mdb-card-body", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardBodyComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardBodyComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 1, "app-line-chart", [], null, null, null, _components_line_chart_line_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_LineChartComponent_0"], _components_line_chart_line_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_LineChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 0, _components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_11__["LineChartComponent"], [], { dataset: [0, "dataset"], labels: [1, "labels"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); _ck(_v, 4, 0); var currVal_0 = _co.pageData.thisMonthsData.monthlyOverView.dataSet; var currVal_1 = _co.pageData.thisMonthsData.monthlyOverView.chartLabels; _ck(_v, 6, 0, currVal_0, currVal_1); }, null); }
function View_ChartsComponent_22(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 35, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "div", [["class", "card-header mb-2 d-flex-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "span", [["class", "icon-button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.prevMonth() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "mdb-icon", [["alt", "Left"], ["class", "mr-3 float-left delete cursor-pointer gray-text"], ["fas", ""], ["icon", "chevron-left"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"], class: [1, "class"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h2", [["class", "text-xl gray-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "span", [["class", "icon-button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.nextMonth() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 24, "div", [["class", "row mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 19, "div", [["class", "col-md-12 col-lg-6 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 18, "mdb-card", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 7, "mdb-card-header", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardHeaderComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardHeaderComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, 0, [" ", " ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 1, "span", [["class", "price ml-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["\u20B9", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 0, 8, "mdb-card-body", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardBodyComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardBodyComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 3, "div", [["class", "pl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "button", [["color", "primary"], ["mdbBtn", ""], ["size", "sm"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.swapPoojasData(_co.pageData.thisMonthsData) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbBtnDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbBtnDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 638976, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], size: [1, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Poojas "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ChartsComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["poojasPieChart", 2]], 0, 0, null, View_ChartsComponent_25)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_30)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "chevron-left"; var currVal_1 = "mr-3 float-left delete cursor-pointer gray-text"; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = !_co.todaysDate.isSame(_co.monthDate, "month"); _ck(_v, 10, 0, currVal_3); _ck(_v, 14, 0); var currVal_4 = ((_co.getProfitLoss(_co.pageData.thisMonthsData) < 0) ? "loss-row" : "profit-row"); _ck(_v, 17, 0, currVal_4); _ck(_v, 18, 0); _ck(_v, 24, 0); var currVal_8 = "primary"; var currVal_9 = "sm"; _ck(_v, 27, 0, currVal_8, currVal_9); var currVal_10 = (_co.pageData.thisMonthsData.currentOverView === _co.pageData.thisMonthsData.overView); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31); _ck(_v, 30, 0, currVal_10, currVal_11); var currVal_12 = _co.pageData.thisMonthsData; _ck(_v, 33, 0, currVal_12); var currVal_13 = _co.pageData.thisMonthsData; _ck(_v, 35, 0, currVal_13); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.monthDate.format("MMMM YYYY"); _ck(_v, 7, 0, currVal_2); var currVal_5 = _co.monthDate.format("MMMM YYYY"); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).transform(((_co.getProfitLoss(_co.pageData.thisMonthsData) < 0) ? "REPORTS.Loss" : "REPORTS.Profit"))); _ck(_v, 19, 0, currVal_5, currVal_6); var currVal_7 = _co.getProfitLoss(_co.pageData.thisMonthsData); _ck(_v, 22, 0, currVal_7); });
}
function View_ChartsComponent_32(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "mdb-icon", [["alt", "Right"], ["class", "ml-3 float-right delete cursor-pointer gray-text"], ["fas", ""], ["icon", "chevron-right"], ["mdbtn", ""]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"], class: [1, "class"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null)], function (_ck, _v) { var currVal_0 = "chevron-right"; var currVal_1 = "ml-3 float-right delete cursor-pointer gray-text"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ChartsComponent_33(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-bar-chart", [], null, null, null, _components_bar_chart_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_BarChartComponent_0"], _components_bar_chart_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_BarChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__["BarChartComponent"], [], { dataset: [0, "dataset"], labels: [1, "labels"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pageData.thisYearsData.currentOverView.dataSet; var currVal_1 = _co.pageData.thisYearsData.currentOverView.chartLabels; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ChartsComponent_34(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-pie-chart", [], null, null, null, _components_pie_chart_pie_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_PieChartComponent_0"], _components_pie_chart_pie_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_PieChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_8__["PieChartComponent"], [], { dataset: [0, "dataset"], labels: [1, "labels"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.pageData.thisYearsData.currentOverView.dataSet; var currVal_1 = _co.pageData.thisYearsData.currentOverView.chartLabels; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_ChartsComponent_36(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("REPORTS.Expense_Type")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("REPORTS.Amount")); _ck(_v, 5, 0, currVal_1); }); }
function View_ChartsComponent_37(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("REPORTS.Pooja_Name")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("REPORTS.Total_Amount_Received")); _ck(_v, 5, 0, currVal_1); }); }
function View_ChartsComponent_38(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "tr", [["mdbTableCol", ""]], [[2, "green-row", null], [2, "red-row", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "th", [["scope", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["\u20B9", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = true; var currVal_1 = _co.isRed(_co.pageData.todaysData.currentOverView.chartLabels[_v.context.index]); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _co.pageData.thisYearsData.currentOverView.chartLabels[_v.context.index]; _ck(_v, 2, 0, currVal_2); var currVal_3 = _v.context.$implicit; _ck(_v, 4, 0, currVal_3); }); }
function View_ChartsComponent_35(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "div", [["class", "col-md-6 col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, "table", [["class", "white text-center z-depth-1"], ["mdbTable", ""]], [[2, "table-striped", null], [2, "table-bordered", null], [2, "table-borderless", null], [2, "table-hover", null], [2, "table-sm", null], [2, "table-responsive", null]], null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbTableDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbTableDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4308992, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbTableDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 3, "thead", [["class", "primary-color text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_36)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["poojasView", 2]], null, 0, null, View_ChartsComponent_37)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 11, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_38)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 8, "tr", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 5, "td", [["colspan", "2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " ", " ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "span", [["class", "ml-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, ["\u20B9", ""]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); var currVal_6 = (_co.pageData.thisYearsData.currentOverView === _co.pageData.thisYearsData.overView); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6); _ck(_v, 5, 0, currVal_6, currVal_7); var currVal_8 = _co.pageData.thisYearsData.currentOverView.dataSet[0].data; _ck(_v, 9, 0, currVal_8); var currVal_9 = ((_co.getProfitLoss(_co.pageData.thisYearsData) < 0) ? "loss-row" : "profit-row"); _ck(_v, 12, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).striped; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).bordered; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).borderless; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).hover; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).small; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).responsive; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_10 = _co.yearDate.format("YYYY"); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).transform("REPORTS.ProfitLoss")); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).transform(((_co.getProfitLoss(_co.pageData.thisYearsData) < 0) ? "REPORTS.Loss" : "REPORTS.Profit"))); _ck(_v, 14, 0, currVal_10, currVal_11, currVal_12); var currVal_13 = _co.getProfitLoss(_co.pageData.thisYearsData); _ck(_v, 18, 0, currVal_13); }); }
function View_ChartsComponent_39(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "mdb-card", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 3, "mdb-card-body", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardBodyComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardBodyComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 1, "app-line-chart", [], null, null, null, _components_line_chart_line_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_LineChartComponent_0"], _components_line_chart_line_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_LineChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 0, _components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_11__["LineChartComponent"], [], { dataset: [0, "dataset"], labels: [1, "labels"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); _ck(_v, 4, 0); var currVal_0 = _co.pageData.thisYearsData.yearlyOverView.dataSet; var currVal_1 = _co.pageData.thisYearsData.yearlyOverView.chartLabels; _ck(_v, 6, 0, currVal_0, currVal_1); }, null); }
function View_ChartsComponent_31(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 36, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "div", [["class", "card-header mb-2 d-flex-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "span", [["class", "icon-button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.prevYear() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "mdb-icon", [["alt", "Left"], ["class", "mr-3 float-left delete cursor-pointer gray-text"], ["fas", ""], ["icon", "chevron-left"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"], class: [1, "class"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "h2", [["class", "text-xl gray-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "span", [["class", "icon-button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.nextYear() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_32)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 25, "div", [["class", "row mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 20, "div", [["class", "col-md-12 col-lg-6 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 19, "mdb-card", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 7, "mdb-card-header", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardHeaderComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardHeaderComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, 0, [" ", " ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 1, "span", [["class", "price ml-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](22, null, ["\u20B9", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 0, 9, "mdb-card-body", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardBodyComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardBodyComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, 0, 4, "div", [["class", "pl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 3, "button", [["color", "primary"], ["mdbBtn", ""], ["size", "sm"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.swapPoojasData(_co.pageData.thisYearsData) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbBtnDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbBtnDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 638976, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], size: [1, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](28, 0, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ChartsComponent_33)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["poojasPieChart", 2]], 0, 0, null, View_ChartsComponent_34)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_35)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_39)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "chevron-left"; var currVal_1 = "mr-3 float-left delete cursor-pointer gray-text"; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_3 = (_co.yearDate.format("YYYY") !== _co.todaysDate.format("YYYY")); _ck(_v, 10, 0, currVal_3); _ck(_v, 14, 0); var currVal_4 = ((_co.getProfitLoss(_co.pageData.thisYearsData) < 0) ? "loss-row" : "profit-row"); _ck(_v, 17, 0, currVal_4); _ck(_v, 18, 0); _ck(_v, 24, 0); var currVal_8 = "primary"; var currVal_9 = "sm"; _ck(_v, 27, 0, currVal_8, currVal_9); var currVal_11 = (_co.pageData.thisYearsData.currentOverView === _co.pageData.thisYearsData.overView); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32); _ck(_v, 31, 0, currVal_11, currVal_12); var currVal_13 = _co.pageData.thisYearsData; _ck(_v, 34, 0, currVal_13); var currVal_14 = _co.pageData.thisYearsData; _ck(_v, 36, 0, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.yearDate.format("YYYY"); _ck(_v, 7, 0, currVal_2); var currVal_5 = _co.yearDate.format("YYYY"); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).transform(((_co.getProfitLoss(_co.pageData.thisYearsData) < 0) ? "REPORTS.Loss" : "REPORTS.Profit"))); _ck(_v, 19, 0, currVal_5, currVal_6); var currVal_7 = _co.getProfitLoss(_co.pageData.thisYearsData); _ck(_v, 22, 0, currVal_7); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 28, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).transform("REPORTS.Poojas}")); _ck(_v, 28, 0, currVal_10); });
}
function View_ChartsComponent_42(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("REPORTS.Expense_Type")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("REPORTS.Amount")); _ck(_v, 5, 0, currVal_1); }); }
function View_ChartsComponent_43(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform("REPORTS.Pooja_Name")); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("REPORTS.Total_Amount_Received")); _ck(_v, 5, 0, currVal_1); }); }
function View_ChartsComponent_44(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "tr", [["mdbTableCol", ""]], [[2, "green-row", null], [2, "red-row", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "th", [["scope", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["\u20B9", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = true; var currVal_1 = _co.isRed(_co.pageData.todaysData.currentOverView.chartLabels[_v.context.index]); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _co.pageData.thisYearsData.currentOverView.chartLabels[_v.context.index]; _ck(_v, 2, 0, currVal_2); var currVal_3 = _v.context.$implicit; _ck(_v, 4, 0, currVal_3); }); }
function View_ChartsComponent_41(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 18, "div", [["class", "col-md-6 col-lg-6"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 17, "table", [["class", "white text-center z-depth-1"], ["mdbTable", ""]], [[2, "table-striped", null], [2, "table-bordered", null], [2, "table-borderless", null], [2, "table-hover", null], [2, "table-sm", null], [2, "table-responsive", null]], null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbTableDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbTableDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4308992, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbTableDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 3, "thead", [["class", "primary-color text-white"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_42)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["poojasView", 2]], null, 0, null, View_ChartsComponent_43)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 11, "tbody", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_44)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 8, "tr", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 5, "td", [["colspan", "2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, null, [" ", " ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "span", [["class", "ml-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](18, null, ["\u20B9", ""]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); var currVal_6 = (_co.pageData.thisYearsData.currentOverView === _co.pageData.thisYearsData.overView); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6); _ck(_v, 5, 0, currVal_6, currVal_7); var currVal_8 = _co.pageData.thisYearsData.currentOverView.dataSet[0].data; _ck(_v, 9, 0, currVal_8); var currVal_9 = ((_co.getProfitLoss(_co.pageData.thisYearsData) < 0) ? "loss-row" : "profit-row"); _ck(_v, 12, 0, currVal_9); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).striped; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).bordered; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).borderless; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).hover; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).small; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).responsive; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).transform("REPORTS.This_Periods_ProfitLoss")); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 14, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).transform(((_co.getProfitLoss(_co.pageData.thisYearsData) < 0) ? "REPORTS.Loss" : "REPORTS.Profit"))); _ck(_v, 14, 0, currVal_10, currVal_11); var currVal_12 = _co.getProfitLoss(_co.pageData.thisYearsData); _ck(_v, 18, 0, currVal_12); }); }
function View_ChartsComponent_45(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "col-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "mdb-card", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 3, "mdb-card-body", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardBodyComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardBodyComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 1, "app-line-chart", [], null, null, null, _components_line_chart_line_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_LineChartComponent_0"], _components_line_chart_line_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_LineChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 0, _components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_11__["LineChartComponent"], [], { dataset: [0, "dataset"], labels: [1, "labels"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 2, 0); _ck(_v, 4, 0); var currVal_0 = _co.pageData.thisYearsData.yearlyOverView.dataSet; var currVal_1 = _co.pageData.thisYearsData.yearlyOverView.chartLabels; _ck(_v, 6, 0, currVal_0, currVal_1); }, null); }
function View_ChartsComponent_40(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 48, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 21, "div", [["class", "row mb-2 text-center d-flex justify-content-center align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "button", [["class", "pull-right text-lg btn-primary"], ["color", "white"], ["header", "Select Start Date"], ["mdbBtn", ""], ["mdbWavesEffect", ""], ["rounded", "true"], ["rrDatePicker", ""], ["type", "button"]], null, [[null, "dateSelected"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("dateSelected" === en)) {
                var pd_1 = (_co.selectCustomStartDate($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbBtnDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbBtnDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 638976, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], rounded: [1, "rounded"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _directives_date_picker_directive__WEBPACK_IMPORTED_MODULE_12__["DatePickerDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { header: [0, "header"], date: [1, "date"], startDate: [2, "startDate"], endDate: [3, "endDate"] }, { dateSelected: "dateSelected" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 2, "mdb-icon", [["alt", "date"], ["class", "calendar"], ["fas", ""], ["icon", "calendar-alt mr-2"], ["size", "lg"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"], size: [1, "size"], class: [2, "class"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 1, "span", [["appDateTransform", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 540672, null, 0, _directives_date_transform_directive__WEBPACK_IMPORTED_MODULE_13__["DateTransformDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { date: [0, "date"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" TO "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 7, "button", [["class", "pull-right text-lg btn-primary"], ["color", "white"], ["header", "Select End Date"], ["mdbBtn", ""], ["mdbWavesEffect", ""], ["rounded", "true"], ["rrDatePicker", ""], ["type", "button"]], null, [[null, "dateSelected"], [null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onClick($event) !== false);
                ad = (pd_0 && ad);
            }
            if (("dateSelected" === en)) {
                var pd_1 = (_co.selectCustomEndDate($event) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbBtnDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbBtnDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 638976, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], rounded: [1, "rounded"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _directives_date_picker_directive__WEBPACK_IMPORTED_MODULE_12__["DatePickerDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { header: [0, "header"], date: [1, "date"], startDate: [2, "startDate"], endDate: [3, "endDate"] }, { dateSelected: "dateSelected" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, 0, 2, "mdb-icon", [["alt", "date"], ["class", "calendar"], ["fas", ""], ["icon", "calendar-alt mr-2"], ["size", "lg"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"], size: [1, "size"], class: [2, "class"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, 0, 1, "span", [["appDateTransform", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 540672, null, 0, _directives_date_transform_directive__WEBPACK_IMPORTED_MODULE_13__["DateTransformDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], { date: [0, "date"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 3, "button", [["class", "relative waves-light"], ["color", "success"], ["mdbBtn", ""], ["mdbWavesEffect", ""], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.getCustomData() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbBtnDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbBtnDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 638976, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](21, 0, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 25, "div", [["class", "row my-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 20, "div", [["class", "col-md-12 col-lg-6 mb-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 19, "mdb-card", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, 0, 8, "mdb-card-header", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardHeaderComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵNgClassImpl"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardHeaderComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](31, 0, [" ", " ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, 0, 1, "span", [["class", "price ml-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](35, null, ["\u20B9", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, 0, 8, "mdb-card-body", [], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbCardBodyComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbCardBodyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbCardBodyComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, 0, 4, "div", [["class", "pl-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](39, 0, null, null, 3, "button", [["color", "primary"], ["mdbBtn", ""], ["size", "sm"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.swapPoojasData(_co.pageData.thisYearsData) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbBtnDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbBtnDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 638976, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], size: [1, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](41, 0, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](43, 0, null, 0, 1, "app-bar-chart", [], null, null, null, _components_bar_chart_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_BarChartComponent_0"], _components_bar_chart_bar_chart_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_BarChartComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 114688, null, 0, _components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_6__["BarChartComponent"], [], { dataset: [0, "dataset"], labels: [1, "labels"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_41)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_45)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "white"; var currVal_1 = "true"; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = "Select Start Date"; var currVal_3 = _co.customStartDate; var currVal_4 = _co.datePickerStartDate; var currVal_5 = _co.todaysDate; _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = "calendar-alt mr-2"; var currVal_7 = "lg"; var currVal_8 = "calendar"; _ck(_v, 6, 0, currVal_6, currVal_7, currVal_8); var currVal_9 = _co.customStartDate.format("YYYY-MM-DD"); _ck(_v, 9, 0, currVal_9); var currVal_10 = "white"; var currVal_11 = "true"; _ck(_v, 12, 0, currVal_10, currVal_11); var currVal_12 = "Select End Date"; var currVal_13 = _co.customEndDate; var currVal_14 = _co.customStartDate; var currVal_15 = _co.todaysDate; _ck(_v, 13, 0, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_16 = "calendar-alt mr-2"; var currVal_17 = "lg"; var currVal_18 = "calendar"; _ck(_v, 15, 0, currVal_16, currVal_17, currVal_18); var currVal_19 = _co.customEndDate.format("YYYY-MM-DD"); _ck(_v, 18, 0, currVal_19); var currVal_20 = "success"; _ck(_v, 20, 0, currVal_20); _ck(_v, 26, 0); var currVal_22 = ((_co.getProfitLoss(_co.pageData.thisYearsData) < 0) ? "loss-row" : "profit-row"); _ck(_v, 29, 0, currVal_22); _ck(_v, 30, 0); _ck(_v, 37, 0); var currVal_26 = "primary"; var currVal_27 = "sm"; _ck(_v, 40, 0, currVal_26, currVal_27); var currVal_29 = _co.pageData.thisYearsData.currentOverView.dataSet; var currVal_30 = _co.pageData.thisYearsData.currentOverView.chartLabels; _ck(_v, 44, 0, currVal_29, currVal_30); var currVal_31 = _co.pageData.thisYearsData; _ck(_v, 46, 0, currVal_31); var currVal_32 = _co.pageData.thisYearsData; _ck(_v, 48, 0, currVal_32); }, function (_ck, _v) { var _co = _v.component; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 21, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).transform("REPORTS.GetData")); _ck(_v, 21, 0, currVal_21); var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 31, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).transform("REPORTS.This_Periods_ProfitLoss")); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 31, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 33).transform(((_co.getProfitLoss(_co.pageData.thisYearsData) < 0) ? "REPORTS.Loss" : "REPORTS.Profit"))); _ck(_v, 31, 0, currVal_23, currVal_24); var currVal_25 = _co.getProfitLoss(_co.pageData.thisYearsData); _ck(_v, 35, 0, currVal_25); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 41, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).transform("REPORTS.Poojas")); _ck(_v, 41, 0, currVal_28); });
}
function View_ChartsComponent_2(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 22, "div", [["class", "charts-container pl-5 pr-5 pb-5 d-flex-col-md align-items-center"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], [], { ngSwitch: [0, "ngSwitch"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "span", [["class", "float-left"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "button", [["class", "waves-light"], ["color", "primary"], ["mdbBtn", ""], ["mdbWavesEffect", ""], ["size", "lg"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.recalc() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbBtnDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbBtnDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 638976, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], size: [1, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 2, "mdb-icon", [["alt", "Left"], ["class", "mr-2"], ["fas", ""], ["icon", "sync"]], null, null, null, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbIconComponent_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbIconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbIconComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { icon: [0, "icon"], class: [1, "class"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["FasDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, 0, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "span", [["class", "float-right mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "app-printer", [], null, null, null, _shared_components_printer_printer_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_PrinterComponent_0"], _shared_components_printer_printer_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_PrinterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 4243456, null, 0, _shared_components_printer_printer_component__WEBPACK_IMPORTED_MODULE_15__["PrinterComponent"], [_ngrx_store__WEBPACK_IMPORTED_MODULE_16__["Store"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"], text: [1, "text"], reportPeriod: [2, "reportPeriod"], reports: [3, "reports"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_40)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.activeTab; _ck(_v, 1, 0, currVal_0); var currVal_2 = "primary"; var currVal_3 = "lg"; _ck(_v, 4, 0, currVal_2, currVal_3); var currVal_4 = "sync"; var currVal_5 = "mr-2"; _ck(_v, 6, 0, currVal_4, currVal_5); var currVal_7 = "report"; var currVal_8 = "Print"; var currVal_9 = _co.rangeText; var currVal_10 = _co.response; _ck(_v, 12, 0, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_11 = "day"; _ck(_v, 14, 0, currVal_11); var currVal_12 = "week"; _ck(_v, 16, 0, currVal_12); var currVal_13 = "month"; _ck(_v, 18, 0, currVal_13); var currVal_14 = "year"; _ck(_v, 20, 0, currVal_14); var currVal_15 = "custom"; _ck(_v, 22, 0, currVal_15); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.recalculating; _ck(_v, 3, 0, currVal_1); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).transform("Recalculate")); _ck(_v, 8, 0, currVal_6); });
}
function View_ChartsComponent_0(_l) {
    return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { totalProfitLoss: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 30, "div", [["class", "white px-4 py-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 29, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "div", [["class", "col-md-6 col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "h3", [["class", "pt-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "p", [["class", "grey-text pt-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 21, "div", [["class", "col-md-6 col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 20, "div", [["aria-label", "Toolbar with button groups"], ["class", "btn-toolbar"], ["role", "toolbar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 19, "div", [["aria-label", "First group"], ["class", "btn-group mr-2 mt-4 row w-100"], ["role", "group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 3, "button", [["class", "waves-light col-4 col-md-4 col-lg-3 col-xl-2"], ["mdbBtn", ""], ["mdbWavesEffect", ""], ["size", "sm"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.initTab("day") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbBtnDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbBtnDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 638976, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], size: [1, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, 0, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 3, "button", [["class", "waves-light col-4 col-md-4 col-lg-3 col-xl-2"], ["mdbBtn", ""], ["mdbWavesEffect", ""], ["size", "sm"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.initTab("week") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbBtnDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbBtnDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 638976, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], size: [1, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, 0, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 3, "button", [["class", "waves-light col-4 col-md-4 col-lg-3 col-xl-2"], ["mdbBtn", ""], ["mdbWavesEffect", ""], ["size", "sm"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.initTab("month") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbBtnDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbBtnDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 638976, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], size: [1, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](23, 0, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 3, "button", [["class", "waves-light col-4 col-md-4 col-lg-3 col-xl-2"], ["mdbBtn", ""], ["mdbWavesEffect", ""], ["size", "sm"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.initTab("year") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbBtnDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbBtnDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 638976, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], size: [1, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](27, 0, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 2, "button", [["class", "waves-light col-4 col-md-4 col-lg-3 col-xl-2"], ["mdbBtn", ""], ["mdbWavesEffect", ""], ["size", "sm"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.initTab("custom") !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MdbBtnDirective_0"], _node_modules_angular_bootstrap_md_angular_bootstrap_md_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MdbBtnDirective"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 638976, null, 0, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MdbBtnDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { color: [0, "color"], size: [1, "size"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" custom "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ChartsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = ((_co.activeTab === "day") ? "primary" : "white"); var currVal_3 = "sm"; _ck(_v, 14, 0, currVal_2, currVal_3); var currVal_5 = ((_co.activeTab === "week") ? "primary" : "white"); var currVal_6 = "sm"; _ck(_v, 18, 0, currVal_5, currVal_6); var currVal_8 = ((_co.activeTab === "month") ? "primary" : "white"); var currVal_9 = "sm"; _ck(_v, 22, 0, currVal_8, currVal_9); var currVal_11 = ((_co.activeTab === "year") ? "primary" : "white"); var currVal_12 = "sm"; _ck(_v, 26, 0, currVal_11, currVal_12); var currVal_14 = ((_co.activeTab === "custom") ? "primary" : "white"); var currVal_15 = "sm"; _ck(_v, 30, 0, currVal_14, currVal_15); var currVal_16 = _co.isLoading$; _ck(_v, 33, 0, currVal_16); var currVal_17 = !_co.isLoading$; _ck(_v, 35, 0, currVal_17); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).transform("REPORTS.Financial_Reports")); _ck(_v, 5, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 8, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).transform("REPORTS.desc")); _ck(_v, 8, 0, currVal_1); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).transform("REPORTS.day")); _ck(_v, 15, 0, currVal_4); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 19, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).transform("REPORTS.week")); _ck(_v, 19, 0, currVal_7); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 23, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).transform("REPORTS.month")); _ck(_v, 23, 0, currVal_10); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 27, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).transform("REPORTS.year")); _ck(_v, 27, 0, currVal_13); });
}
function View_ChartsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-charts", [], null, null, null, View_ChartsComponent_0, RenderType_ChartsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _charts_component__WEBPACK_IMPORTED_MODULE_17__["ChartsComponent"], [_services_charts_service__WEBPACK_IMPORTED_MODULE_18__["ChartsService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ChartsComponentNgFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-charts", _charts_component__WEBPACK_IMPORTED_MODULE_17__["ChartsComponent"], View_ChartsComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/charts/containers/charts/charts.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/charts/containers/charts/charts.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
var styles = [".green-row[_ngcontent-%COMP%] {\n  background-color: #90ee904f;\n}\n\n.red-row[_ngcontent-%COMP%] {\n  background-color: #ff000047;\n}\n\n.profit-row[_ngcontent-%COMP%] {\n  background-color: darkgreen;\n  color: white;\n  font-weight: bold;\n}\n\n.loss-row[_ngcontent-%COMP%] {\n  background-color: darkred;\n  color: white;\n  font-weight: bold;\n}"];



/***/ }),

/***/ "./src/app/charts/containers/charts/charts.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/charts/containers/charts/charts.component.ts ***!
  \**************************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _services_charts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/charts.service */ "./src/app/charts/services/charts.service.ts");




var moment = __webpack_require__(/*! ../../../../assets/datepicker/moment.js */ "./src/assets/datepicker/moment.js");
var ChartsComponent = /** @class */ /*@__PURE__*/ (function () {
    function ChartsComponent(cs, translateService) {
        var _this = this;
        this.cs = cs;
        this.translateService = translateService;
        this.activeTab = 'day';
        this.isLoading$ = false;
        this.recalculating = false;
        this.dataset = [{ data: [], label: '' }];
        this.chartLabels = [];
        this.barChartDataset = [{ data: [], label: '' }];
        this.barChartchartLabels = [];
        this.rangeText = '';
        this.pageData = {
            todaysData: {},
            thisWeeksData: {},
            thisMonthsData: {},
            thisYearsData: {},
            customData: {},
        };
        this.todaysDate = moment();
        this.weekDate = moment();
        this.monthDate = moment();
        this.yearDate = moment();
        this.customStartDate = moment();
        this.customEndDate = moment();
        this.datePickerStartDate = moment().subtract(3, 'year');
        this.thisWeekStartDate = moment();
        this.thisWeekEndDate = moment();
        this.thisMonthStartDate = moment();
        this.thisMonthEndDate = moment();
        this.thisYearStartDate = moment();
        this.thisYearEndDate = moment();
        this.getYearlyData = function (data) {
            var yearBook = data.book;
            if (!yearBook) {
                return;
            }
            var book = new Book();
            var yearlyOverView = {
                dataSet: [{ data: moment.months().map(function () { return 0; }), label: 'Yearly Profit/Loss Data' }],
                chartLabels: moment.months()
            };
            yearBook.forEach(function (monthEl, index) {
                if (monthEl) {
                    if (index === 0) {
                        book = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, monthEl);
                    }
                    else {
                        book.poojas = book.poojas.concat(monthEl.poojas);
                        book.donations = book.donations.concat(monthEl.donations);
                        book.expenses = book.expenses.concat(monthEl.expenses);
                    }
                    var indexOfMonth = moment.months().indexOf(moment(monthEl.date).format('MMMM'));
                    var profitLoss = monthEl.poojas.reduce(function (total, item) { return Number(total) + Number(item.pooja_price); }, 0) -
                        monthEl.expenses.reduce(function (total, item) { return Number(total) + Number(item.cost); }, 0) +
                        monthEl.donations.reduce(function (total, item) { return Number(total) + Number(item.amount); }, 0);
                    yearlyOverView.dataSet[0].data[indexOfMonth] += profitLoss;
                }
            });
            _this.pageData.thisYearsData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.getReconsolidatedData(book), { yearlyOverView: yearlyOverView });
        };
        this.getRangeData = function (data) {
            var yearBook = data.book;
            if (!yearBook) {
                return;
            }
            var book = new Book();
            var yearlyOverView = {
                dataSet: [{ data: [], label: 'Profit/Loss Data' }],
                chartLabels: []
            };
            yearBook.forEach(function (monthEl, index) {
                if (monthEl) {
                    if (index === 0) {
                        book = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, monthEl);
                    }
                    else {
                        book.poojas = book.poojas.concat(monthEl.poojas);
                        book.donations = book.donations.concat(monthEl.donations);
                        book.expenses = book.expenses.concat(monthEl.expenses);
                    }
                    var profitLoss = monthEl.poojas.reduce(function (total, item) { return Number(total) + Number(item.pooja_price); }, 0) -
                        monthEl.expenses.reduce(function (total, item) { return Number(total) + Number(item.cost); }, 0) +
                        monthEl.donations.reduce(function (total, item) { return Number(total) + Number(item.amount); }, 0);
                    yearlyOverView.dataSet[0].data.push(profitLoss);
                    yearlyOverView.chartLabels.push(monthEl.date);
                }
            });
            _this.pageData.thisYearsData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.getReconsolidatedData(book), { yearlyOverView: yearlyOverView });
        };
        this.getMonthData = function (data) {
            var monthBook = data.book;
            if (!monthBook) {
                return;
            }
            var book = new Book();
            var monthlyOverView = {
                dataSet: [{ data: [], label: 'Profit/Loss Monthly Data' }],
                chartLabels: []
            };
            var weekRange = [];
            if (monthBook[0] && monthBook[0].date) {
                weekRange = _this.getWeekRange(monthBook[0].date);
                monthlyOverView.chartLabels = weekRange.map(function (item, index) {
                    item = item;
                    return 'Week ' + (index + 1);
                });
            }
            monthlyOverView.dataSet[0].data = monthlyOverView.chartLabels.map(function () { return 0; });
            monthBook.forEach(function (monthEl, index) {
                if (monthEl) {
                    if (index === 0) {
                        book = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, monthEl);
                    }
                    else {
                        book.poojas = book.poojas.concat(monthEl.poojas);
                        book.donations = book.donations.concat(monthEl.donations);
                        book.expenses = book.expenses.concat(monthEl.expenses);
                    }
                    var profitLoss_1 = monthEl.poojas.reduce(function (total, item) { return Number(total) + Number(item.pooja_price); }, 0) -
                        monthEl.expenses.reduce(function (total, item) { return Number(total) + Number(item.cost); }, 0) +
                        monthEl.donations.reduce(function (total, item) { return Number(total) + Number(item.amount); }, 0);
                    // monthlyOverView.dataSet[0].data.push(profitLoss);
                    weekRange.forEach(function (element, index) {
                        if (moment(monthEl.date).isSame(element[0], 'isoWeek')) {
                            monthlyOverView.dataSet[0].data[index] += profitLoss_1;
                            return;
                        }
                    });
                }
            });
            _this.pageData.thisMonthsData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.getReconsolidatedData(book), { monthlyOverView: monthlyOverView });
        };
        this.getWeekData = function (data) {
            // const weekBook = data.book.filter((book: any) => moment(book.date, 'YYYY-MM-DD').isSame(this.thisWeekStartDate, 'isoWeek'));
            var weekBook = data.book;
            if (!weekBook) {
                return;
            }
            var book = new Book();
            var weeklyOverView = {
                dataSet: [{ data: [], label: _this.translateService.instant('REPORTS.This_Weeks_ProfitLoss') + " " + _this.translateService.instant('REPORTS.ProfitLoss') }],
                chartLabels: []
            };
            weekBook.forEach(function (weekEl, index) {
                if (weekEl) {
                    if (index === 0) {
                        book = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, weekEl);
                    }
                    else {
                        book.poojas = book.poojas.concat(weekEl.poojas);
                        book.donations = book.donations.concat(weekEl.donations);
                        book.expenses = book.expenses.concat(weekEl.expenses);
                    }
                    var profitLoss = weekEl.poojas.reduce(function (total, item) { return Number(total) + Number(item.pooja_price); }, 0) -
                        weekEl.expenses.reduce(function (total, item) { return Number(total) + Number(item.cost); }, 0) +
                        weekEl.donations.reduce(function (total, item) { return Number(total) + Number(item.amount); }, 0);
                    weeklyOverView.dataSet[0].data.push(profitLoss);
                    weeklyOverView.chartLabels.push(weekEl.date);
                }
            });
            _this.pageData.thisWeeksData = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.getReconsolidatedData(book), { weeklyOverView: weeklyOverView });
        };
        this.getTodaysData = function (response) {
            if (!response.book[0]) {
                _this.pageData.todaysData = _this.getReconsolidatedData(new Book());
                return;
            }
            _this.pageData.todaysData = _this.getReconsolidatedData(response.book[0]);
        };
        this.getReconsolidatedData = function (book) {
            var poojasList = Array.from(new Set(book.poojas.map(function (pooja) { return pooja.pooja_name; })));
            var poojaData = [];
            poojasList.forEach(function (pooja) {
                poojaData.push({
                    pooja_name: pooja,
                    totalAmount: 0,
                    count: 0
                });
            });
            book.poojas.forEach(function (pooja) {
                var item = poojaData.find(function (p) { return p.pooja_name === pooja.pooja_name; });
                if (item) {
                    item.totalAmount += Number(pooja.pooja_price);
                    item.count++;
                }
            });
            var reconsolidatedData = {
                currentOverView: {},
                overView: {
                    dataSet: [{
                            data: [book.poojas.reduce(function (total, item) { return Number(total) + Number(item.pooja_price); }, 0),
                                book.donations.reduce(function (total, item) { return Number(total) + Number(item.amount); }, 0),
                                book.expenses.reduce(function (total, item) { return Number(total) + Number(item.cost); }, 0)
                            ],
                            label: 'Total Amount'
                        }],
                    chartLabels: [_this.translateService.instant('MAIN.POOJAS') + " (" + book.poojas.length + ")", _this.translateService.instant('MAIN.DONATIONS') + " (" + book.donations.length + ")", _this.translateService.instant('MAIN.EXPENSES') + " (" + book.expenses.length + ")"]
                },
                poojasOverView: {
                    dataSet: [{
                            data: poojaData.map(function (pooja) { return pooja.totalAmount; }),
                            label: "Pooja Receivable"
                        }],
                    chartLabels: poojaData.map(function (pooja) { return pooja.pooja_name + " (" + pooja.count + ")"; })
                }
            };
            reconsolidatedData.currentOverView = reconsolidatedData.overView;
            return reconsolidatedData;
        };
        this.initDates();
    }
    ChartsComponent.prototype.initDates = function () {
        this.todaysDate = moment();
        this.weekDate = moment();
        this.monthDate = moment();
        this.yearDate = moment();
        this.customStartDate = moment();
        this.customEndDate = moment();
        this.thisWeekStartDate = this.todaysDate.clone().startOf('isoWeek');
        this.thisWeekEndDate = this.todaysDate.clone().endOf('isoWeek');
        this.thisMonthStartDate = this.todaysDate.clone().startOf('month');
        this.thisMonthEndDate = this.todaysDate.clone().endOf('month');
        this.thisYearStartDate = this.todaysDate.clone().startOf('year');
        this.thisYearEndDate = this.todaysDate.clone().endOf('year');
        this.customStartDate = moment();
        this.customEndDate = moment();
    };
    ChartsComponent.prototype.initTab = function (tabName) {
        this.initDates();
        this.activeTab = tabName;
        switch (tabName) {
            case 'day':
                this.getData(this.todaysDate, this.todaysDate, this.getTodaysData);
                this.rangeText = "" + this.todaysDate.format('dddd DD-MM-YYYY');
                break;
            case 'week':
                this.getData(this.thisWeekStartDate, this.thisWeekEndDate, this.getWeekData);
                this.rangeText = "1 Week = " + this.thisWeekStartDate.format('DD-MM-YYYY') + " To " + this.thisWeekEndDate.format('DD-MM-YYYY');
                break;
            case 'month':
                this.getData(this.thisMonthStartDate, this.thisMonthEndDate, this.getMonthData);
                this.rangeText = "1 Month = " + this.thisMonthStartDate.format('DD-MM-YYYY') + " To " + this.thisMonthEndDate.format('DD-MM-YYYY');
                break;
            case 'year':
                this.getData(this.thisYearStartDate, this.thisYearEndDate, this.getYearlyData);
                this.rangeText = "1 Year = " + this.thisYearStartDate.format('DD-MM-YYYY') + " To " + this.thisYearEndDate.format('DD-MM-YYYY');
                break;
            case 'custom':
                this.getData(this.todaysDate, this.todaysDate, this.getYearlyData);
                this.rangeText = "" + this.todaysDate.format('dddd DD-MM-YYYY');
                break;
        }
    };
    ChartsComponent.prototype.yesterday = function () {
        this.todaysDate = this.todaysDate.subtract(1, 'day');
        this.getData(this.todaysDate, this.todaysDate, this.getTodaysData);
    };
    ChartsComponent.prototype.tomorrow = function () {
        this.todaysDate = this.todaysDate.add(1, 'day');
        this.getData(this.todaysDate, this.todaysDate, this.getTodaysData);
    };
    ChartsComponent.prototype.prevWeek = function () {
        this.weekDate = this.weekDate.subtract(1, 'week');
        this.thisWeekStartDate = this.weekDate.clone().startOf('isoWeek');
        this.thisWeekEndDate = this.weekDate.clone().endOf('isoWeek');
        this.getData(this.thisWeekStartDate, this.thisWeekEndDate, this.getWeekData);
    };
    ChartsComponent.prototype.nextWeek = function () {
        this.weekDate = this.weekDate.add(1, 'week');
        this.thisWeekStartDate = this.weekDate.clone().startOf('isoWeek');
        this.thisWeekEndDate = this.weekDate.clone().endOf('isoWeek');
        this.getData(this.thisWeekStartDate, this.thisWeekEndDate, this.getWeekData);
    };
    ChartsComponent.prototype.prevMonth = function () {
        this.monthDate = this.monthDate.subtract(1, 'month');
        this.thisMonthStartDate = this.monthDate.clone().startOf('month');
        this.thisMonthEndDate = this.monthDate.clone().endOf('month');
        this.getData(this.thisMonthStartDate, this.thisMonthEndDate, this.getMonthData);
    };
    ChartsComponent.prototype.nextMonth = function () {
        this.monthDate = this.monthDate.add(1, 'month');
        this.thisMonthStartDate = this.monthDate.clone().startOf('month');
        this.thisMonthEndDate = this.monthDate.clone().endOf('month');
        this.getData(this.thisMonthStartDate, this.thisMonthEndDate, this.getMonthData);
    };
    ChartsComponent.prototype.prevYear = function () {
        this.yearDate = this.yearDate.subtract(1, 'year');
        this.thisYearStartDate = this.yearDate.clone().startOf('year');
        this.thisYearEndDate = this.yearDate.clone().endOf('year');
        this.getData(this.thisYearStartDate, this.thisYearEndDate, this.getYearlyData);
    };
    ChartsComponent.prototype.nextYear = function () {
        this.yearDate = this.yearDate.add(1, 'year');
        this.thisYearStartDate = this.yearDate.clone().startOf('year');
        this.thisYearEndDate = this.yearDate.clone().endOf('year');
        this.getData(this.thisYearStartDate, this.thisYearEndDate, this.getYearlyData);
    };
    ChartsComponent.prototype.getCustomData = function () {
        var startDate = this.customStartDate.clone();
        var endDate = this.customEndDate.clone();
        this.getData(startDate, endDate, this.getRangeData);
    };
    ChartsComponent.prototype.ngOnInit = function () {
        this.getData(this.todaysDate, this.todaysDate, this.getTodaysData);
        // this.cs.getReconsiledBook({startDate: this.thisYearStartDate, endDate: this.thisYearEndDate})
        // .subscribe((data: any) => {
        //   const todaysBook = data.book.find((book: any) => book.date === moment().format('YYYY-MM-DD'));
        //   // const monthBook = data.book.map((book: any) => moment(book.date, 'YYYY-MM-DD').isSame(moment(), 'month'));
        //   // const yearBook = data.book.map((book: any) => moment(book.date, 'YYYY-MM-DD').isSame(moment(), 'year'));
        //   // [
        //     this.pageData.todaysData = this.getTodaysData(todaysBook);
        //     this.pageData.thisWeeksData = this.getWeekData(data);
        //     this.pageData.thisMonthsData = this.getMonthData(data);
        //     this.pageData.thisYearsData = this.getYearlyData(data);
        //     // this.pageData.thisWeeksData = this.getTodaysData(weekBook); -- Week Data to continue tomorow
        //     // this.pageData.thisMonthsData,
        //     // this.pageData.thisYearsData,
        //   // ] = [
        //   //   this.getTodaysData(todaysBook)
        //   // ];
        //   this.isLoading$ = false;
        // })
    };
    ChartsComponent.prototype.recalc = function () {
        var _this = this;
        this.recalculating = true;
        this.cs.recalc().subscribe(function () {
            _this.initDates();
            _this.getData(_this.todaysDate, _this.todaysDate, _this.getTodaysData);
        });
    };
    ChartsComponent.prototype.getData = function (startDate, endDate, method) {
        var _this = this;
        this.rangeText = startDate.format('DD-MM-YYYY') + " To " + endDate.format('DD-MM-YYYY');
        this.isLoading$ = true;
        this.cs.getReconsiledBook({ startDate: startDate.format('YYYY-MM-DD'), endDate: endDate.format('YYYY-MM-DD') })
            .subscribe(function (data) {
            _this.response = data.book;
            method(data);
            _this.isLoading$ = false;
            _this.recalculating = false;
        });
    };
    ChartsComponent.prototype.getProfitLoss = function (data) {
        if (data.overView.dataSet[0]) {
            var allTransactions = data.overView.dataSet[0].data;
            if (allTransactions) {
                return allTransactions[0] + allTransactions[1] - allTransactions[2]; // poojas + donations - expense
            }
        }
        return '';
    };
    ChartsComponent.prototype.swapPoojasData = function (obj) {
        obj.currentOverView = obj.currentOverView == obj.poojasOverView ? obj.overView : obj.poojasOverView;
    };
    ChartsComponent.prototype.selectCustomStartDate = function (event) {
        this.customStartDate = event;
    };
    ChartsComponent.prototype.selectCustomEndDate = function (event) {
        this.customStartDate = event;
    };
    ChartsComponent.prototype.getWeekRange = function (date) {
        var month = moment(date, 'YYYY-MM-DD');
        var mm = month.month() + 1;
        var yy = month.year();
        var first = month.day() == 0 ? 6 : month.day() - 1;
        var day = 7 - first;
        var last = month.daysInMonth();
        var count = (last - day) / 7;
        var weeks = [];
        weeks.push([moment((1) + "-" + mm + "-" + yy, 'DD-MM-YYYY').format('YYYY-MM-DD'), moment((day) + "-" + mm + "-" + yy, 'DD-MM-YYYY').format('YYYY-MM-DD')]);
        for (var i = 0; i < count; i++) {
            weeks.push([moment((day + 1) + "-" + mm + "-" + yy, 'DD-MM-YYYY').format('YYYY-MM-DD'), moment((Math.min(day += 7, last)) + "-" + mm + "-" + yy, 'DD-MM-YYYY').format('YYYY-MM-DD')]);
        }
        return weeks;
    };
    ChartsComponent.prototype.ngOnDestroy = function () {
        if (this.lineChartSub) {
            this.lineChartSub.unsubscribe();
        }
        if (this.barChartSub) {
            this.barChartSub.unsubscribe();
        }
    };
    ChartsComponent.prototype.isRed = function (str) {
        return str ? str.includes(this.translateService.instant('MAIN.EXPENSES')) : false;
    };
    return ChartsComponent;
}());

var Book = /** @class */ /*@__PURE__*/ (function () {
    function Book() {
        this.poojas = [];
        this.donations = [];
        this.expenses = [];
    }
    return Book;
}());


/***/ }),

/***/ "./src/app/charts/services/charts.service.ts":
/*!***************************************************!*\
  !*** ./src/app/charts/services/charts.service.ts ***!
  \***************************************************/
/*! exports provided: ChartsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsService", function() { return ChartsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var ChartsService = /** @class */ /*@__PURE__*/ (function () {
    function ChartsService(http) {
        this.http = http;
        this.startDate = '2018-01-01';
        this.endDate = '2018-01-31';
        this.apiHistoryUrl = 'https://api.exchangeratesapi.io/history';
        this.apiLatestUrl = 'https://api.exchangeratesapi.io/latest';
    }
    ChartsService.prototype.getExchangeRates = function (currency) {
        return this.http.get(this.apiHistoryUrl + "?start_at=" + this.startDate + "&end_at=" + this.endDate + "&symbols=" + currency).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res['rates']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (val) {
            var dataset = [];
            for (var rate in val) {
                if (val.hasOwnProperty(rate)) {
                    dataset.push({ date: rate, value: val[rate][currency] });
                }
            }
            var sorted = dataset.sort(function (a, b) {
                if (a.date < b.date) {
                    return -1;
                }
                if (a.date > b.date) {
                    return 1;
                }
                return 0;
            });
            var currencyName = currency;
            var labels = sorted.map(function (data) { return data.date; });
            var values = sorted.map(function (data) { return data.value; });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ currencyName: currencyName, values: values, labels: labels });
        }));
    };
    ChartsService.prototype.getLatestExchangeRates = function () {
        return this.http.get(this.apiLatestUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            var date = data['date'];
            var base = data['base'];
            var rates = data['rates'];
            var dataset = [];
            for (var currency in rates) {
                if (rates.hasOwnProperty(currency)) {
                    dataset.push({ currency: currency, value: rates[currency] });
                }
            }
            var values = dataset.map(function (latestRates) { return latestRates.value; }).slice(0, 5);
            var labels = dataset.map(function (latestRates) { return latestRates.currency; }).slice(0, 5);
            return { date: date, base: base, values: values, labels: labels };
        }));
    };
    ChartsService.prototype.getReconsiledBook = function (request) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "?api=getReconciledBook", {
            params: {
                'start_date_ist_YYYYMMDD': request.startDate,
                'end_date_ist_YYYYMMDD': request.endDate
            }
        });
    };
    ChartsService.prototype.recalc = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "?api=reconcileBooks", {
            params: {
                mode: 'quick'
            }
        });
    };
    ChartsService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ factory: function ChartsService_Factory() { return new ChartsService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); }, token: ChartsService, providedIn: "root" });
    return ChartsService;
}());



/***/ }),

/***/ "./src/app/charts/store/charts.actions.ts":
/*!************************************************!*\
  !*** ./src/app/charts/store/charts.actions.ts ***!
  \************************************************/
/*! exports provided: ChartsActionTypes, LineChartQuery, BarChartQuery, LineChartLoaded, BarChartLoaded, ChartsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsActionTypes", function() { return ChartsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartQuery", function() { return LineChartQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartQuery", function() { return BarChartQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartLoaded", function() { return LineChartLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartLoaded", function() { return BarChartLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsError", function() { return ChartsError; });
var ChartsActionTypes = /*@__PURE__*/ (function (ChartsActionTypes) {
    ChartsActionTypes["LINE_CHART_QUERY"] = "[Charts] Line chart query";
    ChartsActionTypes["LINE_CHART_LOADED"] = "[Charts] Line chart loaded";
    ChartsActionTypes["BAR_CHART_QUERY"] = "[Charts] Bar chart query";
    ChartsActionTypes["BAR_CHART_LOADED"] = "[Charts] Bar chart loaded";
    ChartsActionTypes["CHARTS_ERROR"] = "[Charts] Error";
    return ChartsActionTypes;
})({});
var LineChartQuery = /** @class */ /*@__PURE__*/ (function () {
    function LineChartQuery(payload) {
        this.payload = payload;
        this.type = ChartsActionTypes.LINE_CHART_QUERY;
    }
    return LineChartQuery;
}());

var BarChartQuery = /** @class */ /*@__PURE__*/ (function () {
    function BarChartQuery() {
        this.type = ChartsActionTypes.BAR_CHART_QUERY;
    }
    return BarChartQuery;
}());

var LineChartLoaded = /** @class */ /*@__PURE__*/ (function () {
    function LineChartLoaded(payload) {
        this.payload = payload;
        this.type = ChartsActionTypes.LINE_CHART_LOADED;
    }
    return LineChartLoaded;
}());

var BarChartLoaded = /** @class */ /*@__PURE__*/ (function () {
    function BarChartLoaded(payload) {
        this.payload = payload;
        this.type = ChartsActionTypes.BAR_CHART_LOADED;
    }
    return BarChartLoaded;
}());

var ChartsError = /** @class */ /*@__PURE__*/ (function () {
    function ChartsError(payload) {
        this.payload = payload;
        this.type = ChartsActionTypes.CHARTS_ERROR;
    }
    return ChartsError;
}());



/***/ }),

/***/ "./src/app/charts/store/charts.effects.ts":
/*!************************************************!*\
  !*** ./src/app/charts/store/charts.effects.ts ***!
  \************************************************/
/*! exports provided: ChartsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsEffects", function() { return ChartsEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_charts_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../store/charts.actions */ "./src/app/charts/store/charts.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _charts_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./charts.selectors */ "./src/app/charts/store/charts.selectors.ts");









var ChartsEffects = /** @class */ /*@__PURE__*/ (function () {
    function ChartsEffects(actions$, chartsService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.chartsService = chartsService;
        this.store = store;
        this.lineChartQuery$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_charts_actions__WEBPACK_IMPORTED_MODULE_2__["ChartsActionTypes"].LINE_CHART_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_charts_selectors__WEBPACK_IMPORTED_MODULE_6__["getLineChartData"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var payload = _a[0], chartsData = _a[1];
            if (!chartsData.values || (chartsData.currencyName && chartsData.currencyName !== payload.currency)) {
                return _this.chartsService.getExchangeRates(payload.currency)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return new _store_charts_actions__WEBPACK_IMPORTED_MODULE_2__["LineChartLoaded"]({ lineChartData: data }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_charts_actions__WEBPACK_IMPORTED_MODULE_2__["ChartsError"]({ error: error })); }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_charts_actions__WEBPACK_IMPORTED_MODULE_2__["LineChartLoaded"]({ lineChartData: chartsData }));
        }));
        this.barChartQuery$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_charts_actions__WEBPACK_IMPORTED_MODULE_2__["ChartsActionTypes"].BAR_CHART_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_charts_selectors__WEBPACK_IMPORTED_MODULE_6__["getBarChartData"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_a) {
            var chartData = _a[1];
            if (!chartData.values) {
                return _this.chartsService.getLatestExchangeRates()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return new _store_charts_actions__WEBPACK_IMPORTED_MODULE_2__["BarChartLoaded"]({ barChartData: data }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_charts_actions__WEBPACK_IMPORTED_MODULE_2__["ChartsError"]({ error: error })); }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_charts_actions__WEBPACK_IMPORTED_MODULE_2__["BarChartLoaded"]({ barChartData: chartData }));
        }));
    }
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ChartsEffects.prototype, "lineChartQuery$", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ChartsEffects.prototype, "barChartQuery$", void 0);
    return ChartsEffects;
}());



/***/ }),

/***/ "./src/app/charts/store/charts.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/charts/store/charts.reducer.ts ***!
  \************************************************/
/*! exports provided: chartsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartsReducer", function() { return chartsReducer; });
/* harmony import */ var _charts_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts.state */ "./src/app/charts/store/charts.state.ts");
/* harmony import */ var _charts_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charts.actions */ "./src/app/charts/store/charts.actions.ts");


function chartsReducer(state, action) {
    if (state === void 0) { state = _charts_state__WEBPACK_IMPORTED_MODULE_0__["chartsInitialState"]; }
    switch (action.type) {
        case _charts_actions__WEBPACK_IMPORTED_MODULE_1__["ChartsActionTypes"].LINE_CHART_QUERY: {
            return Object.assign({}, state, {
                lineChartLoading: true,
            });
        }
        case _charts_actions__WEBPACK_IMPORTED_MODULE_1__["ChartsActionTypes"].BAR_CHART_QUERY: {
            return Object.assign({}, state, {
                barChartLoading: true
            });
        }
        case _charts_actions__WEBPACK_IMPORTED_MODULE_1__["ChartsActionTypes"].LINE_CHART_LOADED: {
            return Object.assign({}, state, {
                lineChartData: action.payload.lineChartData,
                lineChartLoading: false,
            });
        }
        case _charts_actions__WEBPACK_IMPORTED_MODULE_1__["ChartsActionTypes"].BAR_CHART_LOADED: {
            return Object.assign({}, state, {
                barChartData: action.payload.barChartData,
                barChartLoading: false,
            });
        }
        case _charts_actions__WEBPACK_IMPORTED_MODULE_1__["ChartsActionTypes"].CHARTS_ERROR: {
            return Object.assign({}, state, {
                error: action.payload.error
            });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/charts/store/charts.selectors.ts":
/*!**************************************************!*\
  !*** ./src/app/charts/store/charts.selectors.ts ***!
  \**************************************************/
/*! exports provided: getChartsState, getLineChartData, getBarChartData, getIsLoading, ɵ0, ɵ1, ɵ2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartsState", function() { return getChartsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineChartData", function() { return getLineChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBarChartData", function() { return getBarChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return getIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getChartsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('charts');
var ɵ0 = function (charts) { return charts.lineChartData; };
var getLineChartData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChartsState, ɵ0);
var ɵ1 = function (charts) { return charts.barChartData; };
var getBarChartData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChartsState, ɵ1);
var ɵ2 = function (charts) { return charts.barChartLoading && charts.lineChartLoading; };
var getIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChartsState, ɵ2);



/***/ }),

/***/ "./src/app/charts/store/charts.state.ts":
/*!**********************************************!*\
  !*** ./src/app/charts/store/charts.state.ts ***!
  \**********************************************/
/*! exports provided: chartsInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartsInitialState", function() { return chartsInitialState; });
var chartsInitialState = {
    lineChartData: {},
    barChartData: {},
    lineChartLoading: false,
    barChartLoading: false,
    error: null
};


/***/ })

}]);