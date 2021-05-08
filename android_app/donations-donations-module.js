(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donations-donations-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donations/containers/donations.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donations/containers/donations.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-split-body [isLoading$]=\"!isLoading$\">\r\n  <div class=\"left-section\">\r\n    <mdb-card>\r\n      <mdb-card-header class=\"w-100 d-flex justify-space-between bg-primary white-text\">\r\n        <div>\r\n          <blockquote class=\"text-left  blockquote bq-success\">\r\n            <h3 class=\"header\">Add Donations</h3>\r\n            <p class=\"py-0\" *ngIf=\"donationForm.valid\">Adding a donation of <span class=\"price\">&#x20B9;{{donationForm?.value.amount}}</span> from {{donationForm?.value.name}}</p>\r\n          </blockquote>\r\n        </div>\r\n        <button mdbWavesEffect mdbBtn type=\"button\" rounded=\"true\" color=\"white\" class=\"pull-right text-lg btn-primary\" rrDatePicker [date]=\"defaultDate\" [endDate]=\"endDate\"\r\n        (click)=\"dateClicked($event)\" header=\"Select Date\" (dateSelected)=\"datePicked($event)\">\r\n        <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> {{ selectedDate }}\r\n      </button>\r\n      </mdb-card-header>\r\n      <mdb-card-body class=\"py-2\">\r\n        <div class=\"modal-content\">\r\n          <form #donationForm=\"ngForm\">\r\n          <div class=\"modal-body\">\r\n            <div class=\"left-section\">\r\n                <div class=\"md-form\">\r\n                  <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [(ngModel)]=\"donation.name\" mdbInput mdbValidate\r\n                    [validateSuccess]=\"false\" #name=\"ngModel\" required>\r\n                  <label for=\"name\">Name</label>\r\n                  <mdb-error *ngIf=\"name && name.invalid && (name.dirty || name.touched)\">Name is required</mdb-error>\r\n                </div>\r\n        \r\n                <div class=\"btn-toolbar star-container\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n                  <div class=\"md-form hidden\">\r\n                    <input type=\"text\" id=\"star\" name=\"star\" class=\"form-control\" [(ngModel)]=\"donation.star\" mdbInput mdbValidate\r\n                      [validateSuccess]=\"false\" #star=\"ngModel\">\r\n                    <label for=\"star\">Star</label>\r\n                  </div>\r\n                  <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n                      <button (click)=\"selectStar(star)\"\r\n                      *ngFor=\"let star of starSigns\" mdbBtn type=\"button\" color=\"grey\" [outline]=\"star !== donation.star\" [class.selected]=\"star === donation.star\"\r\n                       mdbWavesEffect>{{star}}</button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"md-form\">\r\n                  <textarea type=\"text\" id=\"address\" name=\"address\" class=\"md-textarea form-control\" #address=\"ngModel\"\r\n                    [(ngModel)]=\"donation.address\" mdbInput mdbValidate [validateSuccess]=\"false\"></textarea>\r\n                  <label for=\"address\">Address (Optional)</label>\r\n                </div>\r\n          \r\n              \r\n            </div>\r\n            <div class=\"right-section\">\r\n              <mdb-card class=\"text-center\">\r\n                <mdb-card-body>\r\n                  <div class=\"md-form phone\">\r\n                    <input type=\"number\" id=\"phone\" name=\"phone\" class=\"form-control\" #phone=\"ngModel\" [(ngModel)]=\"donation.phoneNumber\" mdbInput mdbValidate\r\n                      [validateSuccess]=\"false\">\r\n                    <label for=\"phone\">Phone Number(Optional)</label>\r\n                  </div>\r\n                  <div class=\"text-lg mt-4 amount\">\r\n                    <label for=\"amount\" class=\"grey-text\">Amount</label>\r\n                    <div class=\"md-form d-flex mt-0\">\r\n                      <span class=\"price\">&#x20B9;</span>\r\n                      <input type=\"number\" class=\"price\" id=\"amount\" name=\"amount\" [(ngModel)]=\"donation.amount\" #amount=\"ngModel\" required mdbValidate>\r\n                      <mdb-error *ngIf=\"amount && amount.invalid && (amount.dirty || amount.touched)\">Amount is required</mdb-error>\r\n                    </div>\r\n                  </div>\r\n                </mdb-card-body>\r\n              </mdb-card>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n        </div>\r\n      </mdb-card-body>\r\n      <mdb-card-footer class=\"modal-footer\">\r\n          <div class=\"d-flex\">\r\n            <button type=\"button\" mdbBtn class=\"waves-light\" aria-label=\"Close\" (click)=\"donationForm.reset()\"\r\n              mdbWavesEffect>Clear</button>\r\n            <button type=\"button\" mdbBtn color=\"success\" [disabled]=\"donationForm.invalid\" class=\"relative waves-light\" mdbWavesEffect (click)=\"onSave()\">Save\r\n              changes</button>\r\n    \r\n          </div>\r\n    \r\n      </mdb-card-footer>\r\n    </mdb-card>\r\n    \r\n  </div>\r\n  <div class=\"right-section\">\r\n    <app-right-card [header]=\"'Todays Donations'\">\r\n      <div class=\"card-header\">Todays Donations</div>\r\n      <table mdbTable small=\"true\" striped=\"true\">\r\n        <tbody>\r\n          <tr>\r\n            <th scope=\"row\">Name 1</th>\r\n            <td>Star 1</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">Name 2</th>\r\n            <td>Star 2</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">Name 3</th>\r\n            <td>Star 3</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </app-right-card>\r\n\r\n    <!-- <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 200px\">\r\n      <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</app-split-body>\r\n\r\n");

/***/ }),

/***/ "./src/app/donations/containers/donations.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/donations/containers/donations.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".justify-space-between {\n  justify-content: space-between;\n}\n\n.amount {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n}\n\n.star-container .hidden {\n  display: none;\n}\n\n.star-container .btn-group {\n  display: inline-block;\n}\n\n.star-container .btn-group button {\n  padding: 5px;\n}\n\n.star-container .btn-group button.selected {\n  background-color: darkgreen;\n  border: 1px solid darkgreen;\n  color: white;\n  font-weight: bold;\n  padding: 20px;\n}\n\n#address {\n  height: 20px;\n}\n\n.modal-body {\n  overflow: auto;\n  display: flex;\n  max-height: 65vh;\n}\n\n.modal-body .left-section {\n  width: 50%;\n}\n\n.modal-body .right-section {\n  width: 50%;\n  padding: 10px 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .modal-body {\n    flex-direction: column;\n  }\n  .modal-body .left-section {\n    width: 100%;\n  }\n  .modal-body .right-section {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-height: 500px) {\n  .modal-body {\n    max-height: 45vh !important;\n  }\n}\n\n.modal-footer {\n  justify-content: space-between;\n}\n\n.phone {\n  margin: 0;\n}\n\n.delete {\n  cursor: pointer;\n}\n\n.datepicker {\n  position: absolute;\n  right: 20px;\n}\n\n.datepicker button {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRpb25zL2NvbnRhaW5lcnMvQzpcXGdpdCBjb2RlXFxBdWRpdC1VSS1Bbmd1bGFyL3NyY1xcYXBwXFxkb25hdGlvbnNcXGNvbnRhaW5lcnNcXGRvbmF0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZG9uYXRpb25zL2NvbnRhaW5lcnMvZG9uYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FESUk7RUFDSSxhQUFBO0FDRFI7O0FER0k7RUFDSSxxQkFBQTtBQ0RSOztBREVRO0VBQ0ksWUFBQTtBQ0FaOztBREdRO0VBQ0ksMkJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNEWjs7QURNQTtFQUNJLFlBQUE7QUNISjs7QURNQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURLSTtFQUNJLFVBQUE7QUNIUjs7QURLSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ0hSOztBRE1JO0VBYko7SUFjUSxzQkFBQTtFQ0hOO0VESU07SUFDSSxXQUFBO0VDRlY7RURJTTtJQUNJLFdBQUE7RUNGVjtBQUNGOztBRE9BO0VBQ0k7SUFDSSwyQkFBQTtFQ0pOO0FBQ0Y7O0FET0E7RUFDSSw4QkFBQTtBQ0xKOztBRFFBO0VBQ0ksU0FBQTtBQ0xKOztBRFFBO0VBQ0ksZUFBQTtBQ0xKOztBRE9BO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDSko7O0FES0k7RUFDSSxnQkFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvZG9uYXRpb25zL2NvbnRhaW5lcnMvZG9uYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1c3RpZnktc3BhY2UtYmV0d2VlbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5hbW91bnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnN0YXItY29udGFpbmVyIHtcclxuXHJcbiAgICAuaGlkZGVuIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1ncm91cCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZWVuO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI2FkZHJlc3Mge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXgtaGVpZ2h0OiA2NXZoO1xyXG4gIFxyXG4gICAgLmxlZnQtc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5yaWdodC1zZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAubGVmdC1zZWN0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yaWdodC1zZWN0aW9uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xyXG4gICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQ1dmggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5waG9uZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5kZWxldGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kYXRlcGlja2VyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgfVxyXG59IiwiLmp1c3RpZnktc3BhY2UtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmFtb3VudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc3Rhci1jb250YWluZXIgLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc3Rhci1jb250YWluZXIgLmJ0bi1ncm91cCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5zdGFyLWNvbnRhaW5lciAuYnRuLWdyb3VwIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5zdGFyLWNvbnRhaW5lciAuYnRuLWdyb3VwIGJ1dHRvbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZWVuO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jYWRkcmVzcyB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LWhlaWdodDogNjV2aDtcbn1cbi5tb2RhbC1ib2R5IC5sZWZ0LXNlY3Rpb24ge1xuICB3aWR0aDogNTAlO1xufVxuLm1vZGFsLWJvZHkgLnJpZ2h0LXNlY3Rpb24ge1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5tb2RhbC1ib2R5IC5sZWZ0LXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tb2RhbC1ib2R5IC5yaWdodC1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAubW9kYWwtYm9keSB7XG4gICAgbWF4LWhlaWdodDogNDV2aCAhaW1wb3J0YW50O1xuICB9XG59XG4ubW9kYWwtZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGhvbmUge1xuICBtYXJnaW46IDA7XG59XG5cbi5kZWxldGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXRlcGlja2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbn1cbi5kYXRlcGlja2VyIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59Il19 */");

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_poojas_models_poojas_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/poojas/models/poojas.model */ "./src/app/poojas/models/poojas.model.ts");
/* harmony import */ var src_app_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _store_donations_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/donations.selectors */ "./src/app/donations/store/donations.selectors.ts");
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









var moment = __webpack_require__(/*! ../../../assets/datepicker/moment.js */ "./src/assets/datepicker/moment.js");
var DonationsComponent = /** @class */ (function () {
    function DonationsComponent(store, modalService) {
        this.store = store;
        this.modalService = modalService;
        this.defaultDate = moment();
        this.startDate = moment();
        this.endDate = moment().add('30', 'days');
        this.selectedDate = moment().format('dddd DD/MM/YYYY');
        this.donation = {};
        this.expenseData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.starSigns = src_app_poojas_models_poojas_model__WEBPACK_IMPORTED_MODULE_6__["starSigns"];
        this.modalConfig = {
            class: 'modal-dialog-centered'
        };
    }
    DonationsComponent.prototype.ngOnInit = function () {
        this.isLoading$ = this.store.select(_store_donations_selectors__WEBPACK_IMPORTED_MODULE_8__["getIsLoading"]);
        // this.donationForm.controls.date.setValue(this.defaultDate.format('dddd DD/MM/YYYY'));
    };
    DonationsComponent.prototype.datePicked = function (date) {
        this.donationForm.controls.date.setValue(date.format('dddd DD/MM/YYYY'));
    };
    DonationsComponent.prototype.dateClicked = function (date) {
        console.log(date);
    };
    DonationsComponent.prototype.onSave = function () {
        if (this.donationForm.valid) {
            this.openDonationConfirmModal();
            //send to api
        }
        else {
            var controls_1 = this.donationForm.controls;
            Object.keys(controls_1).forEach(function (controlName) { return controls_1[controlName].markAsTouched(); });
        }
    };
    DonationsComponent.prototype.selectStar = function (star) {
        this.donation.star = star;
    };
    DonationsComponent.prototype.openDonationConfirmModal = function () {
        this.modalRef = this.modalService.show(src_app_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalComponent"], this.modalConfig);
        this.modalRef.content.confirmation
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function (confirmation) {
            if (confirmation) {
                //api to save conation
            }
        });
    };
    DonationsComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBModalService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('donationForm', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], DonationsComponent.prototype, "donationForm", void 0);
    DonationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donations',
            template: __importDefault(__webpack_require__(/*! raw-loader!./donations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donations/containers/donations.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./donations.component.scss */ "./src/app/donations/containers/donations.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBModalService"]])
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
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["InputUtilitiesModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["InputsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["IconsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["CardsModule"],
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