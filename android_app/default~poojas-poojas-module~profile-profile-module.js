(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~poojas-poojas-module~profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/poojas/components/pooja-list/pooja-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/poojas/components/pooja-list/pooja-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"poojas-list d-flex flex-wrap m-4\">\r\n      <mdb-card>\r\n        <mdb-card-header class=\"text-left bg-primary white-text w-100\">\r\n          <blockquote class=\"blockquote bq-success\">\r\n            <h3 class=\"header\">Poojas List</h3>\r\n            <p class=\"py-0\">Change pooja settings of your temple</p>\r\n          </blockquote>\r\n        </mdb-card-header>\r\n        <mdb-card-body class=\"py-2\">\r\n          <form #poojasForm=\"ngForm\" *ngIf=\"!(isLoading$ | async)\">\r\n          <table mdbTable striped=\"true\">\r\n            <thead>\r\n              <tr>\r\n                <th>Name</th>\r\n                <th>Code</th>\r\n                <th>Description</th>\r\n                <th>Price</th>\r\n                <th>Added By</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of poojas\">\r\n                <td scope=\"row\">{{ item.pooja_name }}</td>\r\n                <td>{{ item.pooja_code }}</td>\r\n                <td>{{ item.pooja_description }}</td>\r\n                <td class=\"text-warning\"><b>&#x20B9;{{ item.pooja_price }}</b></td>\r\n                <td>{{ item.added_by }}</td>\r\n                <td>\r\n                  <mdb-icon fas icon=\"trash\" class=\"float-right delete grey-text\" (click)=\"onDeletePooja(item.pooja_code)\" alt=\"Delete Pooja\"></mdb-icon>\r\n                </td>\r\n                \r\n\r\n              </tr>\r\n              <tr class=\"bg-white\">\r\n                <td>\r\n                  <div class=\"md-form\">\r\n                    <input type=\"text\" id=\"add_pooja_name\" name=\"pooja_name\" class=\"form-control\" \r\n                    #pooja_name=\"ngModel\" [(ngModel)]=\"newPooja.pooja_name\" mdbInput mdbValidate\r\n                      [validateSuccess]=\"false\" required (change)=\"newPooja.pooja_code = generateCode(newPooja.pooja_name)\">\r\n                    <label for=\"pooja_name\">Name</label>\r\n                    <mdb-error *ngIf=\"pooja_name && pooja_name.invalid && (pooja_name.dirty || pooja_name.touched)\">Name is required</mdb-error>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"md-form\">\r\n                    <input type=\"text\" id=\"add_pooja_code\" name=\"pooja_code\" class=\"form-control\" \r\n                    #pooja_code=\"ngModel\" [(ngModel)]=\"newPooja.pooja_code\" mdbInput mdbValidate disabled\r\n                      [validateSuccess]=\"false\" required>\r\n                    <label for=\"pooja_code\">Code</label>\r\n                    <mdb-error *ngIf=\"pooja_code && pooja_code.invalid && (pooja_code.dirty || pooja_code.touched)\">Code is required</mdb-error>\r\n                  </div>\r\n                </td>\r\n                <td >\r\n                  <div class=\"md-form  mt-3 \">\r\n                    <textarea type=\"text\" id=\"add_pooja_description\" name=\"pooja_description\" class=\"my-0 py-0 md-textarea form-control\" \r\n                    #pooja_description=\"ngModel\" [(ngModel)]=\"newPooja.pooja_description\" mdbInput mdbValidate\r\n                      [validateSuccess]=\"false\" required></textarea>\r\n                    <label for=\"pooja_description\">Description</label>\r\n                    <mdb-error *ngIf=\"pooja_description && pooja_description.invalid && (pooja_description.dirty || pooja_description.touched)\">Description is required</mdb-error>\r\n                  </div>\r\n                 \r\n                  <!-- <a class=\"btn btn-primary btn-floating\" (click)=\"onAddPooja()\" style=\"background-color: #3b5998; height: 45px\" href=\"javascript:void(0)\" role=\"button\"\r\n                    >\r\n                    Add\r\n                  </a> -->\r\n                </td>\r\n                <td>\r\n                  <div class=\"md-form\">\r\n                    <input type=\"number\" id=\"pooja_add_price\" name=\"pooja_price\" class=\"form-control\" \r\n                    #pooja_price=\"ngModel\" [(ngModel)]=\"newPooja.pooja_price\" mdbInput mdbValidate\r\n                      [validateSuccess]=\"false\" required>\r\n                    <label for=\"pooja_price\">Price</label>\r\n                    <mdb-error *ngIf=\"pooja_price && pooja_price.invalid && (pooja_price.dirty || pooja_price.touched)\">Price is required</mdb-error>\r\n                  </div>\r\n                  \r\n                </td>\r\n                <td>\r\n                  <button mdbBtn [disabled]=\"poojasForm?.invalid || (isLoading$ | async)\" class=\"mt-4 btn btn-floating add\" (click)=\"onAddPoojaType()\" size=\"sm\" gradient=\"purple\" mdbWavesEffect>\r\n                    <mdb-icon fas icon=\"plus\" class=\"white-text\"></mdb-icon> <span class=\"pl-2 white-text\">Add</span>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n        </form>\r\n\r\n        <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center my-4\">\r\n          <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n        </div>\r\n\r\n        \r\n        </mdb-card-body>\r\n      </mdb-card>\r\n      \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/poojas/containers/poojas.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/poojas/containers/poojas.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <rr-tabs> -->\r\n  <!-- <rr-tab tabTitle=\"Poojas\"> -->\r\n    <app-split-body [isLoading$]=\"isLoading$\">\r\n      <div class=\"left-section\">\r\n        <a href=\"javascript:void(0)\" role=\"button\" class=\"p-4 m-1 btn btn-primary pooja-box\" mdbWavesEffect *ngFor=\"let item of poojaTypes\" (click)=\"newPooja(item)\">\r\n          <h5><b>{{item.pooja_name}}</b></h5>\r\n          <p class=\"whitesmoke-text\">{{item.pooja_description}}</p>\r\n          <h3 class=\"price\">&#x20B9;{{ item.pooja_price }}</h3>\r\n        </a>\r\n\r\n        <ul class=\"left-section-mobile list-group w-100\">\r\n          <li *ngFor=\"let item of poojaTypes\" (click)=\"newPooja(item)\"\r\n           class=\"bg-primary white-text list-group-item d-flex justify-content-between align-items-center\">\r\n           <div class=\"d-flex flex-column\">\r\n             <span class=\"name\">{{item.pooja_name}}</span>\r\n             <span class=\"description\">{{item.pooja_description}}</span>\r\n           </div>\r\n            <mdb-badge pill=\"true\" class=\"price mini\" color=\"white\">&#x20B9;{{ item.pooja_price }}</mdb-badge>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"right-section pb-4\">\r\n        <app-right-card>\r\n          <div class=\"card-header bg-primary white-text\">Todays Poojas ({{dates?.today}}) <mdb-badge class=\"count\" color=\"yellow\" *ngIf=\"poojaList?.length > 0\"> {{poojaList.length}}</mdb-badge></div>\r\n          <div *ngIf=\"isListLoading$ | async\" class=\"d-flex justify-content-center align-items-center my-4\">\r\n            <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n              <span class=\"sr-only\">Loading...</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"cd-body\">\r\n\r\n          <table mdbTable small=\"true\" striped=\"true\" *ngIf=\"!(isListLoading$ | async) && poojaList.length > 0\">\r\n            <thead>\r\n              <tr>\r\n                <th>Name</th>\r\n                <th>Nakshathram</th>\r\n                <th>Pooja</th>\r\n                <th>Print</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of poojaList; let in = index;\">\r\n                <td scope=\"row\">{{ item.name }}</td>\r\n                <td>{{ item.nakshatram }}</td>\r\n                <td>{{ getPoojaNameFromCode(item.pooja_code)  }}</td>\r\n                <td> <app-printer [type]=\"'pooja'\" [size]=\"'bill'\" [poojas]=\"[item]\"></app-printer>  </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          </div>\r\n          <div class=\"p-4 d-flex flex-column justify-content-center align-items-center\" *ngIf=\"!(isListLoading$ | async) && poojaList?.length === 0\">\r\n            <mdb-icon fas icon=\"times-circle\" class=\"float-right grey-text\" alt=\"no data\"></mdb-icon>\r\n              <p class=\"grey-text\">No Poojas</p>\r\n          </div>\r\n        </app-right-card>\r\n\r\n        <app-right-card *ngIf=\"tomorrowsPoojaList?.length > 0\">\r\n          <div class=\"card-header bg-secondary white-text\">Tomorrows poojas ({{this.dates?.tomorrow}}) <mdb-badge class=\"count\" color=\"yellow\" *ngIf=\"tomorrowsPoojaList?.length > 0\"> {{tomorrowsPoojaList?.length}}</mdb-badge></div>\r\n          <div *ngIf=\"isListLoading$ | async\" class=\"d-flex justify-content-center align-items-center my-4\">\r\n            <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n              <span class=\"sr-only\">Loading...</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"cd-body\">\r\n            <table mdbTable small=\"true\" striped=\"true\" *ngIf=\"!(isListLoading$ | async) && tomorrowsPoojaList.length > 0\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Name</th>\r\n                  <th>Nakshathram</th>\r\n                  <th>Pooja</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of tomorrowsPoojaList\">\r\n                  <td scope=\"row\">{{ item.name }}</td>\r\n                  <td>{{ item.nakshatram }}</td>\r\n                  <td>{{ getPoojaNameFromCode(item.pooja_code)  }}</td>\r\n                  <td> <app-printer [type]=\"'pooja'\" [size]=\"'bill'\" [poojas]=\"[item]\"></app-printer>  </td>\r\n  \r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"p-4 d-flex flex-column justify-content-center align-items-center\" *ngIf=\"!(isListLoading$ | async) && tomorrowsPoojaList?.length === 0\">\r\n            <mdb-icon fas icon=\"times-circle\" class=\"float-right grey-text\" alt=\"no data\"></mdb-icon>\r\n              <p class=\"grey-text\">No Poojas tomorrow</p>\r\n          </div>\r\n        </app-right-card>\r\n        <br>\r\n        <header><b>Poojas by date</b></header>\r\n        <hr>\r\n        <app-right-card *ngIf=\"(isManager$ | async)\">\r\n          <div class=\"card-header bg-primary white-text \">\r\n            <span class=\"icon-button\" (click)=\"prevDate()\">\r\n              <mdb-icon *ngIf=\"isManager$ | async\" fas icon=\"chevron-left\" class=\"ml-1 float-left delete cursor-pointer white-text\" alt=\"Left\"></mdb-icon>\r\n            </span>\r\n            <span>\r\n              Poojas on \r\n              <button mdbWavesEffect mdbBtn type=\"button\" rounded=\"true\" color=\"white\" class=\"pull-right text-lg btn-primary\" rrDatePicker [date]=\"selectedDate\" [endDate]=\"endDate\" [startDate]=\"startDate\"\r\n               header=\"Select Date\" (dateSelected)=\"datePicked($event)\">\r\n                <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> <span appDateTransform [date]=\"selectedDate.format('YYYY-MM-DD')\"></span>\r\n              </button>\r\n              <mdb-badge *ngIf=\"allPoojasList?.length > 0\" color=\"yellow\" class=\"count\"> {{allPoojasList?.length}}</mdb-badge>\r\n            </span>\r\n            <span class=\"icon-button\" (click)=\"nextDate()\">\r\n              <mdb-icon *ngIf=\"(isManager$ | async) && selectedDate.format('DD/MM/YYYY') !== endDate.format('DD/MM/YYYY')\" mdbtn fas icon=\"chevron-right\" class=\"ml-1 float-right delete cursor-pointer white-text\" alt=\"Right\"></mdb-icon>\r\n            </span>\r\n          </div>\r\n          <div *ngIf=\"allPoojasLoading\" class=\"d-flex justify-content-center align-items-center\">\r\n            <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n              <span class=\"sr-only\">Loading...</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"cd-body\">\r\n\r\n          <table mdbTable small=\"true\" striped=\"true\" *ngIf=\"!allPoojasLoading && allPoojasList?.length !== 0\">\r\n            <thead>\r\n              <tr>\r\n                <th>Name</th>\r\n                <th>Nakshathram</th>\r\n                <th>Pooja</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of allPoojasList; let i = index;\">\r\n                <td scope=\"row\">{{ item.name }}</td>\r\n                <td>{{ item.nakshatram }}</td>\r\n                <td>{{ getPoojaNameFromCode(item.pooja_code)  }}</td>\r\n                <td> <app-printer [type]=\"'pooja'\" [size]=\"'bill'\" [poojas]=\"[item]\"></app-printer>  </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          </div>\r\n          <div class=\"p-4 d-flex flex-column justify-content-center align-items-center\" *ngIf=\"!allPoojasLoading && allPoojasList?.length === 0\">\r\n            <mdb-icon fas icon=\"times-circle\" class=\"float-right grey-text\" alt=\"no data\"></mdb-icon>\r\n              <p class=\"grey-text\">No Poojas on {{selectedDate.format('MMM Do')}} </p>\r\n          </div>\r\n        </app-right-card>\r\n       \r\n        <!-- <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 200px\">\r\n          <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n    </app-split-body>\r\n    <app-printer #appPrinter [hidden]=\"true\"></app-printer>\r\n\r\n<!--     \r\n  </rr-tab>\r\n  <rr-tab tabTitle=\"Bookings\">\r\n    Tab 2 content\r\n  </rr-tab>\r\n</rr-tabs> -->\r\n");

/***/ }),

/***/ "./src/app/poojas/components/pooja-list/pooja-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/poojas/components/pooja-list/pooja-list.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".poojas-list {\n  box-sizing: border-box;\n  justify-content: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.poojas-list mdb-card {\n  min-width: 50%;\n}\n.poojas-list mdb-card mdb-card-body {\n  overflow: auto;\n}\n.poojas-list .delete {\n  cursor: pointer;\n}\n.pooja {\n  width: 80%;\n  margin: 1rem;\n}\n.pooja .add-card:hover {\n  background-color: whitesmoke;\n  cursor: pointer;\n}\n.add {\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9vamFzL2NvbXBvbmVudHMvcG9vamEtbGlzdC9DOlxcZ2l0IGNvZGVcXEF1ZGl0LVVJLUFuZ3VsYXIvc3JjXFxhcHBcXHBvb2phc1xcY29tcG9uZW50c1xccG9vamEtbGlzdFxccG9vamEtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9vamFzL2NvbXBvbmVudHMvcG9vamEtbGlzdC9wb29qYS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7QUNDSjtBREFJO0VBQ0UsY0FBQTtBQ0VOO0FERUU7RUFDRSxlQUFBO0FDQUo7QURJQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FDREY7QURJSTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtBQ0ZOO0FET0E7RUFDRSxZQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9wb29qYXMvY29tcG9uZW50cy9wb29qYS1saXN0L3Bvb2phLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9vamFzLWxpc3Qge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gIG1kYi1jYXJkIHtcclxuICAgIG1pbi13aWR0aDogNTAlO1xyXG4gICAgbWRiLWNhcmQtYm9keSB7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlbGV0ZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ucG9vamEge1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG5cclxuICAuYWRkLWNhcmQge1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5hZGQge1xyXG4gIGhlaWdodDogNDBweDtcclxufSIsIi5wb29qYXMtbGlzdCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5wb29qYXMtbGlzdCBtZGItY2FyZCB7XG4gIG1pbi13aWR0aDogNTAlO1xufVxuLnBvb2phcy1saXN0IG1kYi1jYXJkIG1kYi1jYXJkLWJvZHkge1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5wb29qYXMtbGlzdCAuZGVsZXRlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9vamEge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDFyZW07XG59XG4ucG9vamEgLmFkZC1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkIHtcbiAgaGVpZ2h0OiA0MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/poojas/components/pooja-list/pooja-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/poojas/components/pooja-list/pooja-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: PoojaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojaListComponent", function() { return PoojaListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_poojas_store_poojas_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/poojas/store/poojas.selectors */ "./src/app/poojas/store/poojas.selectors.ts");
/* harmony import */ var _store_poojas_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/poojas.actions */ "./src/app/poojas/store/poojas.actions.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var src_app_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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









var PoojaListComponent = /** @class */ (function () {
    function PoojaListComponent(store, modalService) {
        this.store = store;
        this.modalService = modalService;
        this.poojas = [];
        this.newPooja = {};
        this.modalConfig = {
            class: 'modal-dialog-centered',
        };
    }
    PoojaListComponent.prototype.ngOnInit = function () {
        this.getPoojaList();
        this.isLoading$ = this.store.select(src_app_poojas_store_poojas_selectors__WEBPACK_IMPORTED_MODULE_3__["getIsLoading"]);
        this.initFormGroup();
    };
    PoojaListComponent.prototype.initFormGroup = function () {
        this.newPooja = {};
        this.poojasForm && this.poojasForm.reset();
    };
    PoojaListComponent.prototype.getPoojaList = function () {
        var _this = this;
        this.store.select(src_app_poojas_store_poojas_selectors__WEBPACK_IMPORTED_MODULE_3__["getPoojaTypes"]).subscribe(function (poojas) {
            _this.poojas = poojas;
            _this.initFormGroup();
        });
        this.store.dispatch(new _store_poojas_actions__WEBPACK_IMPORTED_MODULE_4__["PoojasTypeQuery"]());
    };
    PoojaListComponent.prototype.onAddPoojaType = function () {
        var req = this.newPooja;
        this.store.dispatch(new _store_poojas_actions__WEBPACK_IMPORTED_MODULE_4__["PoojaTypeAddQuery"]({ poojas: req }));
    };
    PoojaListComponent.prototype.generateCode = function (str) {
        var code = '';
        str.split('').forEach(function (char, index) {
            if (index % 2 === 0 && char !== ' ') {
                code += char;
            }
        });
        return code.slice(0, 5) + "-" + (this.poojas.length + 1);
    };
    PoojaListComponent.prototype.openUserDeleteConfirmModal = function (pooja_code) {
        var _this = this;
        this.modalRef = this.modalService.show(src_app_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], this.modalConfig);
        this.modalRef.content.confirmation
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))
            .subscribe(function (confirmation) {
            if (confirmation) {
                _this.store.dispatch(new _store_poojas_actions__WEBPACK_IMPORTED_MODULE_4__["PoojaTypeDeleted"]({ pooja_code: pooja_code }));
            }
        });
    };
    PoojaListComponent.prototype.onDeletePooja = function (pooja_code) {
        this.openUserDeleteConfirmModal(pooja_code);
    };
    PoojaListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBModalService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('poojasForm', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], PoojaListComponent.prototype, "poojasForm", void 0);
    PoojaListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pooja-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pooja-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/poojas/components/pooja-list/pooja-list.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./pooja-list.component.scss */ "./src/app/poojas/components/pooja-list/pooja-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBModalService"]])
    ], PoojaListComponent);
    return PoojaListComponent;
}());



/***/ }),

/***/ "./src/app/poojas/containers/poojas.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/poojas/containers/poojas.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".left-section a.pooja-box {\n  display: inline-block;\n  height: 150px;\n  width: auto;\n  max-width: 300px;\n  color: white;\n}\n.left-section .left-section-mobile {\n  display: none;\n}\n.left-section .left-section-mobile li {\n  margin-bottom: 3px;\n}\n.left-section .left-section-mobile li:nth-child(even) {\n  background-color: #2c79ef !important;\n}\n.left-section .left-section-mobile .name {\n  font-weight: bold;\n}\n.left-section .left-section-mobile .description {\n  font-size: small;\n  display: block;\n}\n@media only screen and (max-width: 768px) {\n  .left-section a.pooja-box {\n    display: none;\n  }\n  .left-section .left-section-mobile {\n    display: inline-block;\n  }\n}\n.left-section > :nth-child(even) {\n  background-color: #2196f3 !important;\n}\n.left-section > :nth-child(odd) {\n  background-color: #2196f3 !important;\n}\n.left-section .price {\n  color: #ffeb3b;\n}\n.right-section table {\n  text-align: left;\n}\n.right-section table tr {\n  cursor: pointer;\n}\n@media only screen and (max-width: 1024px) {\n  .left-section a.pooja-box {\n    height: auto;\n    width: auto;\n  }\n}\n.whitesmoke-text {\n  color: whitesmoke;\n  text-transform: none;\n}\n.justify-space-between {\n  justify-content: space-between;\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.cd-body {\n  max-height: 50vh;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9vamFzL2NvbnRhaW5lcnMvQzpcXGdpdCBjb2RlXFxBdWRpdC1VSS1Bbmd1bGFyL3NyY1xcYXBwXFxwb29qYXNcXGNvbnRhaW5lcnNcXHBvb2phcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9vamFzL2NvbnRhaW5lcnMvcG9vamFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUU7RUFDRSxhQUFBO0FDQUo7QURDSTtFQUNFLGtCQUFBO0FDQ047QURDSTtFQUNFLG9DQUFBO0FDQ047QURDSTtFQUNFLGlCQUFBO0FDQ047QURDSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0NOO0FER0U7RUFDRTtJQUNFLGFBQUE7RUNESjtFREdFO0lBQ0UscUJBQUE7RUNESjtBQUNGO0FES0U7RUFDRSxvQ0FBQTtBQ0hKO0FES0U7RUFDRSxvQ0FBQTtBQ0hKO0FETUU7RUFDRSxjQUFBO0FDSko7QURTRTtFQUNFLGdCQUFBO0FDTko7QURPSTtFQUNFLGVBQUE7QUNMTjtBRFVBO0VBRUk7SUFDRSxZQUFBO0lBQ0EsV0FBQTtFQ1JKO0FBQ0Y7QURZQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNWRjtBRGFBO0VBQ0UsOEJBQUE7QUNWRjtBRGFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNWRjtBRGFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9wb29qYXMvY29udGFpbmVycy9wb29qYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1zZWN0aW9uIHtcclxuICBhLnBvb2phLWJveCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAubGVmdC1zZWN0aW9uLW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICB9XHJcbiAgICBsaTpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmM3OWVmIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5uYW1lIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGEucG9vamEtYm94IHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5sZWZ0LXNlY3Rpb24tbW9iaWxlIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gID46bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjMgIWltcG9ydGFudDtcclxuICB9XHJcbiAgPjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAucHJpY2Uge1xyXG4gICAgY29sb3I6ICNmZmViM2I7XHJcbiAgfVxyXG59XHJcblxyXG4ucmlnaHQtc2VjdGlvbiB7XHJcbiAgdGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHRyIHtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAubGVmdC1zZWN0aW9uIHtcclxuICAgIGEucG9vamEtYm94IHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi53aGl0ZXNtb2tlLXRleHQge1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4uanVzdGlmeS1zcGFjZS1iZXR3ZWVuIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4gXHJcbi5jZC1ib2R5IHtcclxuICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59IiwiLmxlZnQtc2VjdGlvbiBhLnBvb2phLWJveCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5sZWZ0LXNlY3Rpb24gLmxlZnQtc2VjdGlvbi1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmxlZnQtc2VjdGlvbiAubGVmdC1zZWN0aW9uLW1vYmlsZSBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5sZWZ0LXNlY3Rpb24gLmxlZnQtc2VjdGlvbi1tb2JpbGUgbGk6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJjNzllZiAhaW1wb3J0YW50O1xufVxuLmxlZnQtc2VjdGlvbiAubGVmdC1zZWN0aW9uLW1vYmlsZSAubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxlZnQtc2VjdGlvbiAubGVmdC1zZWN0aW9uLW1vYmlsZSAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IHNtYWxsO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxlZnQtc2VjdGlvbiBhLnBvb2phLWJveCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubGVmdC1zZWN0aW9uIC5sZWZ0LXNlY3Rpb24tbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn1cbi5sZWZ0LXNlY3Rpb24gPiA6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMyAhaW1wb3J0YW50O1xufVxuLmxlZnQtc2VjdGlvbiA+IDpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjMgIWltcG9ydGFudDtcbn1cbi5sZWZ0LXNlY3Rpb24gLnByaWNlIHtcbiAgY29sb3I6ICNmZmViM2I7XG59XG5cbi5yaWdodC1zZWN0aW9uIHRhYmxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5yaWdodC1zZWN0aW9uIHRhYmxlIHRyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubGVmdC1zZWN0aW9uIGEucG9vamEtYm94IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbi53aGl0ZXNtb2tlLXRleHQge1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5qdXN0aWZ5LXNwYWNlLWJldHdlZW4ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNkLWJvZHkge1xuICBtYXgtaGVpZ2h0OiA1MHZoO1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */");

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
/* harmony import */ var _services_poojas_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/poojas.service */ "./src/app/poojas/services/poojas.service.ts");
/* harmony import */ var src_app_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var src_app_shared_components_printer_printer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/components/printer/printer.component */ "./src/app/shared/components/printer/printer.component.ts");
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
var moment = __webpack_require__(/*! ../../../assets/datepicker/moment.js */ "./src/assets/datepicker/moment.js");
var PoojasComponent = /** @class */ (function () {
    function PoojasComponent(store, modalService, poojasService) {
        this.store = store;
        this.modalService = modalService;
        this.poojasService = poojasService;
        this.allPoojasLoading = false;
        this.newPoojaCacheHolder = null;
        this.defaultDate = moment();
        this.startDate = moment().subtract(60, 'days');
        this.endDate = moment().add('30', 'days');
        this.selectedDate = moment();
        this.dates = {
            today: moment().format('DD-MM-YYYY'),
            tomorrow: moment().add(1, 'days').format('DD-MM-YYYY')
        };
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
    }
    PoojasComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.datePicked(moment());
        this.allPoojasList = [];
        this.poojaList = [];
        this.store.select(_store_poojas_selectors__WEBPACK_IMPORTED_MODULE_2__["getPoojaTypes"]).subscribe(function (poojas) {
            _this.poojaTypes = poojas;
        });
        this.store.select(_store_poojas_selectors__WEBPACK_IMPORTED_MODULE_2__["getPoojaList"]).subscribe(function (list) {
            _this.poojaList = list;
            _this.poojasService.getPoojas(moment().add(1, 'days').format('YYYY-MM-DD'))
                .subscribe(function (poojas) {
                _this.tomorrowsPoojaList = poojas.poojaList;
            });
            if (list !== null) {
                _this.datePicked(moment());
            }
        });
        this.store.select(_store_poojas_selectors__WEBPACK_IMPORTED_MODULE_2__["getNewlyRegisteredPooja"]).subscribe(function (response) {
            //response.receipt_number
            if (response != null && _this.newPoojaCacheHolder) {
                var poojaDetails_1 = _this.newPoojaCacheHolder;
                _this.appPrinter.poojas = _this.newPoojaCacheHolder.bhakthar.map(function (person) {
                    return __assign({}, person, poojaDetails_1, { receipt_number: response.receipt_number, pooja_name: _this.getPoojaNameFromCode(_this.newPoojaCacheHolder.pooja_code) });
                });
                _this.appPrinter.triggerPrint();
                _this.newPoojaCacheHolder = null;
            }
        });
        this.isManager$ = this.store.select(src_app_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_8__["isManager"]);
        this.isLoading$ = this.store.select(_store_poojas_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoading"]);
        this.isListLoading$ = this.store.select(_store_poojas_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsListLoading"]);
        this.store.dispatch(new _store_poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasTypeQuery"]());
        this.store.dispatch(new _store_poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojaListQuery"](moment().format('YYYY-MM-DD'))); // todays poojas
    };
    PoojasComponent.prototype.newPooja = function (pooja) {
        var _this = this;
        this.modalRef = this.modalService.show(src_app_shared_components_poojas_modal_poojas_modal_component__WEBPACK_IMPORTED_MODULE_5__["PoojasModalComponent"], __assign({}, this.modalConfig, { data: {
                heading: pooja.pooja_name,
                price: pooja.pooja_price,
                code: pooja.pooja_code
            } }));
        this.modalRef.content.poojasData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (pooja) {
            _this.newPoojaCacheHolder = pooja;
            _this.store.dispatch(new _store_poojas_actions__WEBPACK_IMPORTED_MODULE_3__["RegisterPooja"]({ pooja: pooja }));
            _this.datePicked(moment());
        });
    };
    PoojasComponent.prototype.getPoojaNameFromCode = function (pooja_code) {
        var res = this.poojaTypes && this.poojaTypes.find(function (pooja) { return pooja.pooja_code === pooja_code; });
        if (res) {
            return res.pooja_name;
        }
        return '';
    };
    PoojasComponent.prototype.datePicked = function (date) {
        var _this = this;
        this.selectedDate = date;
        this.allPoojasLoading = true;
        this.poojasService.getPoojas(date.format('YYYY-MM-DD'))
            .subscribe(function (poojas) {
            _this.allPoojasList = poojas.poojaList;
            _this.allPoojasLoading = false;
        }).add(function () {
            _this.allPoojasLoading = false;
        });
    };
    PoojasComponent.prototype.prevDate = function () {
        this.datePicked(this.selectedDate.subtract('1', 'days'));
    };
    PoojasComponent.prototype.nextDate = function () {
        this.datePicked(this.selectedDate.add('1', 'days'));
    };
    PoojasComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBModalService"] },
        { type: _services_poojas_service__WEBPACK_IMPORTED_MODULE_7__["PoojasService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('appPrinter', { static: true }),
        __metadata("design:type", src_app_shared_components_printer_printer_component__WEBPACK_IMPORTED_MODULE_9__["PrinterComponent"])
    ], PoojasComponent.prototype, "appPrinter", void 0);
    PoojasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-poojas',
            template: __importDefault(__webpack_require__(/*! raw-loader!./poojas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/poojas/containers/poojas.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./poojas.component.scss */ "./src/app/poojas/containers/poojas.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBModalService"],
            _services_poojas_service__WEBPACK_IMPORTED_MODULE_7__["PoojasService"]])
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
/* harmony import */ var _components_pooja_list_pooja_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pooja-list/pooja-list.component */ "./src/app/poojas/components/pooja-list/pooja-list.component.ts");
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
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["CardsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["InputUtilitiesModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["BadgeModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('poojas', _store_poojas_reducer__WEBPACK_IMPORTED_MODULE_6__["PoojasReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_store_poojas_effects__WEBPACK_IMPORTED_MODULE_9__["PoojasEffects"]])
            ],
            declarations: [_containers_poojas_component__WEBPACK_IMPORTED_MODULE_3__["PoojasComponent"], _components_pooja_list_pooja_list_component__WEBPACK_IMPORTED_MODULE_12__["PoojaListComponent"]],
            exports: [_containers_poojas_component__WEBPACK_IMPORTED_MODULE_3__["PoojasComponent"], _components_pooja_list_pooja_list_component__WEBPACK_IMPORTED_MODULE_12__["PoojaListComponent"]]
        })
    ], PoojasModule);
    return PoojasModule;
}());



/***/ }),

/***/ "./src/app/poojas/store/poojas.actions.ts":
/*!************************************************!*\
  !*** ./src/app/poojas/store/poojas.actions.ts ***!
  \************************************************/
/*! exports provided: PoojasActionTypes, PoojasTypeQuery, PoojaTypesLoaded, PoojaTypeAddQuery, PoojaTypeEdited, PoojaTypeDeleted, PoojasError, RegisterPooja, PoojaListQuery, PoojaListLoaded, PoojaRegistered */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasActionTypes", function() { return PoojasActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasTypeQuery", function() { return PoojasTypeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojaTypesLoaded", function() { return PoojaTypesLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojaTypeAddQuery", function() { return PoojaTypeAddQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojaTypeEdited", function() { return PoojaTypeEdited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojaTypeDeleted", function() { return PoojaTypeDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasError", function() { return PoojasError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPooja", function() { return RegisterPooja; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojaListQuery", function() { return PoojaListQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojaListLoaded", function() { return PoojaListLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojaRegistered", function() { return PoojaRegistered; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PoojasActionTypes;
(function (PoojasActionTypes) {
    PoojasActionTypes["POOJA_TYPE_QUERY"] = "[Pooja Type] Query Pooja Types";
    PoojasActionTypes["POOJA_TYPE_LOADED"] = "[Pooja Type] Fetched Pooja Types";
    PoojasActionTypes["POOJA_TYPE_ADD_QUERY"] = "[Pooja Type] Add new Pooja Type";
    PoojasActionTypes["POOJA_TYPE_ADDED"] = "[Pooja Type] Added New Pooja Type";
    PoojasActionTypes["POOJA_TYPE_EDITED"] = "[Pooja Type] Edited Pooja Type";
    PoojasActionTypes["POOJA_TYPE_DELETED"] = "[Pooja Type] Delete Pooja Type";
    PoojasActionTypes["POOJA_LIST_QUERY"] = "[Pooja Type] Query Pooja List";
    PoojasActionTypes["POOJA_LIST_LOADED"] = "[Pooja Type] Query Pooja Loaded";
    PoojasActionTypes["POOJA_REGISTERED"] = "[Pooja Type] New Pooja Registered";
    PoojasActionTypes["POOJA_ADD_QUERY"] = "[Pooja] Add new Pooja";
    PoojasActionTypes["POOJA_ADDED"] = "[Pooja] Added New Pooja";
    PoojasActionTypes["POOJA_DELETED"] = "[Pooja] Delete Pooja";
    PoojasActionTypes["POOJAS_ERROR"] = "[Poojas] Error";
})(PoojasActionTypes || (PoojasActionTypes = {}));
var PoojasTypeQuery = /** @class */ (function () {
    function PoojasTypeQuery() {
        this.type = PoojasActionTypes.POOJA_TYPE_QUERY;
    }
    return PoojasTypeQuery;
}());

var PoojaTypesLoaded = /** @class */ (function () {
    function PoojaTypesLoaded(payload) {
        this.payload = payload;
        this.type = PoojasActionTypes.POOJA_TYPE_LOADED;
    }
    return PoojaTypesLoaded;
}());

var PoojaTypeAddQuery = /** @class */ (function () {
    function PoojaTypeAddQuery(payload) {
        this.payload = payload;
        this.type = PoojasActionTypes.POOJA_TYPE_ADD_QUERY;
    }
    return PoojaTypeAddQuery;
}());

var PoojaTypeEdited = /** @class */ (function () {
    function PoojaTypeEdited(payload) {
        this.payload = payload;
        this.type = PoojasActionTypes.POOJA_TYPE_EDITED;
    }
    return PoojaTypeEdited;
}());

var PoojaTypeDeleted = /** @class */ (function () {
    function PoojaTypeDeleted(payload) {
        this.payload = payload;
        this.type = PoojasActionTypes.POOJA_TYPE_DELETED;
    }
    return PoojaTypeDeleted;
}());

var PoojasError = /** @class */ (function () {
    function PoojasError(payload) {
        this.payload = payload;
        this.type = PoojasActionTypes.POOJAS_ERROR;
    }
    return PoojasError;
}());

var RegisterPooja = /** @class */ (function () {
    function RegisterPooja(payload) {
        this.payload = payload;
        this.type = PoojasActionTypes.POOJA_ADD_QUERY;
    }
    return RegisterPooja;
}());

var PoojaListQuery = /** @class */ (function () {
    function PoojaListQuery(payload) {
        this.payload = payload;
        this.type = PoojasActionTypes.POOJA_LIST_QUERY;
    }
    return PoojaListQuery;
}());

var PoojaListLoaded = /** @class */ (function () {
    function PoojaListLoaded(payload) {
        this.payload = payload;
        this.type = PoojasActionTypes.POOJA_LIST_LOADED;
    }
    return PoojaListLoaded;
}());

var PoojaRegistered = /** @class */ (function () {
    function PoojaRegistered(payload) {
        this.payload = payload;
        this.type = PoojasActionTypes.POOJA_REGISTERED;
    }
    return PoojaRegistered;
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





// import { Poojas } from '../models/poojas.model';






var moment = __webpack_require__(/*! ../../../assets/datepicker/moment.js */ "./src/assets/datepicker/moment.js");
var PoojasEffects = /** @class */ (function () {
    function PoojasEffects(actions$, poojasService, store, toastr) {
        var _this = this;
        this.actions$ = actions$;
        this.poojasService = poojasService;
        this.store = store;
        this.toastr = toastr;
        this.queryPoojaType$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasActionTypes"].POOJA_TYPE_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_poojas_selectors__WEBPACK_IMPORTED_MODULE_8__["getPoojaTypes"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) { return _this.poojasService.getPoojaTypes()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (list) {
            return (new _poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojaTypesLoaded"]({ poojas: list.poojaTypesList }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.toastr.error('Something went wrong. Please try after sometime');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasError"]({ error: error }));
        })); }));
        this.queryPoojas$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasActionTypes"].POOJA_LIST_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (payload) { return _this.poojasService.getPoojas(payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (list) {
            return (new _poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojaListLoaded"]({ poojaList: list.poojaList }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.toastr.error('Something went wrong. Please try after sometime');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasError"]({ error: error }));
        })); }));
        this.addPoojaType$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasActionTypes"].POOJA_TYPE_ADD_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), 
        // withLatestFrom(this.store.pipe(select(getPoojaTypes))),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (payload) { return _this.poojasService.addPoojaType(payload.poojas)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (list) {
            console.log(list.data);
            return (new _poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasTypeQuery"]());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.toastr.error('Something went wrong. Please try after sometime');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasError"]({ error: error }));
        })); }));
        this.addPooja$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasActionTypes"].POOJA_ADD_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (payload) { return _this.poojasService.addPooja(payload.pooja)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (list) {
            // console.log(list?.persons);
            return [(new _poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojaRegistered"]({ response: list })),
                new _poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojaListQuery"](moment().format('YYYY-MM-DD'))
            ];
            // return (new fromPoojas.PoojaListQuery(moment().format('YYYY-MM-DD')));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.toastr.error('Something went wrong. Please try after sometime');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasError"]({ error: error }));
        })); }));
        this.edit$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasActionTypes"].POOJA_TYPE_EDITED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.poojasService.update(payload.customer, user.temple_code)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                _this.toastr.error('Something went wrong. Please try after sometime');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasError"]({ error: error }));
            }));
        }));
        this.delete$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasActionTypes"].POOJA_TYPE_DELETED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (pooja) {
            return _this.poojasService.deletePoojaType(pooja.pooja_code)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
                return (new _poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasTypeQuery"]());
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                _this.toastr.error('Something went wrong. Please try after sometime');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _poojas_actions__WEBPACK_IMPORTED_MODULE_3__["PoojasError"]({ error: error }));
            }));
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
    ], PoojasEffects.prototype, "queryPoojaType$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], PoojasEffects.prototype, "queryPoojas$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], PoojasEffects.prototype, "addPoojaType$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], PoojasEffects.prototype, "addPooja$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], PoojasEffects.prototype, "edit$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
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
        case _poojas_actions__WEBPACK_IMPORTED_MODULE_1__["PoojasActionTypes"].POOJA_TYPE_QUERY: {
            return Object.assign({}, state, {
                isLoading: true,
            });
        }
        case _poojas_actions__WEBPACK_IMPORTED_MODULE_1__["PoojasActionTypes"].POOJA_TYPE_LOADED: {
            return Object.assign({}, state, {
                poojaTypes: action.payload.poojas,
                isLoading: false,
            });
        }
        case _poojas_actions__WEBPACK_IMPORTED_MODULE_1__["PoojasActionTypes"].POOJA_TYPE_ADD_QUERY: {
            return Object.assign({}, state, {
                isLoading: true,
            });
        }
        case _poojas_actions__WEBPACK_IMPORTED_MODULE_1__["PoojasActionTypes"].POOJA_ADD_QUERY: {
            return Object.assign({}, state, {
                isListLoading: true,
            });
        }
        case _poojas_actions__WEBPACK_IMPORTED_MODULE_1__["PoojasActionTypes"].POOJAS_ERROR: {
            return Object.assign({}, state, {
                isLoading: false,
                error: action.payload.error
            });
        }
        case _poojas_actions__WEBPACK_IMPORTED_MODULE_1__["PoojasActionTypes"].POOJA_LIST_QUERY: {
            return Object.assign({}, state, {
                isListLoading: true,
            });
        }
        case _poojas_actions__WEBPACK_IMPORTED_MODULE_1__["PoojasActionTypes"].POOJA_LIST_LOADED: {
            return Object.assign({}, state, {
                isListLoading: false,
                poojaList: action.payload.poojaList,
            });
        }
        case _poojas_actions__WEBPACK_IMPORTED_MODULE_1__["PoojasActionTypes"].POOJA_REGISTERED: {
            return Object.assign({}, state, {
                isListLoading: false,
                newPoojasRegistered: action.payload.response,
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
/*! exports provided: getPoojasState, getPoojaTypes, getNewlyRegisteredPooja, getPoojaList, getIsLoading, getIsListLoading, getError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoojasState", function() { return getPoojasState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoojaTypes", function() { return getPoojaTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewlyRegisteredPooja", function() { return getNewlyRegisteredPooja; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPoojaList", function() { return getPoojaList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return getIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsListLoading", function() { return getIsListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var getPoojasState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('poojas');
var getPoojaTypes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPoojasState, function (poojas) { return poojas.poojaTypes; });
var getNewlyRegisteredPooja = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPoojasState, function (poojas) { return poojas.newPoojasRegistered; });
var getPoojaList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPoojasState, function (poojas) { return poojas.poojaList; });
var getIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPoojasState, function (poojas) { return poojas.isLoading; });
var getIsListLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getPoojasState, function (poojas) { return poojas.isListLoading; });
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
    poojaTypes: null,
    poojaList: null,
    isLoading: true,
    isListLoading: true,
    error: null,
    newPoojasRegistered: null
};


/***/ })

}]);
//# sourceMappingURL=default~poojas-poojas-module~profile-profile-module.js.map