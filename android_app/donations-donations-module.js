(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donations-donations-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donations/containers/donations.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donations/containers/donations.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-split-body [isLoading$]=\"!isLoading$\">\n  <div class=\"left-section\">\n    <mdb-card>\n      <mdb-card-header class=\"w-100 d-flex justify-space-between bg-primary white-text\">\n        <div>\n          <blockquote class=\"text-left  blockquote bq-success\">\n            <h3 class=\"header\">Add Donations</h3>\n            <p class=\"py-0\" *ngIf=\"donationForm.valid\">Adding a donation of <span class=\"price\">&#x20B9;{{donationForm?.value.amount}}</span> from {{donationForm?.value.name}}</p>\n          </blockquote>\n        </div>\n        <button mdbWavesEffect mdbBtn type=\"button\" rounded=\"true\" color=\"white\" class=\"pull-right text-lg btn-primary\" rrDatePicker [date]=\"donationDate\" [endDate]=\"endDate\" [startDate]=\"startDate\"\n        header=\"Select Date\" (dateSelected)=\"donDatePicked($event)\">\n        <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> <span appDateTransform [date]=\"donationDate.format('YYYY-MM-DD')\"></span>\n      </button>\n      </mdb-card-header>\n      <mdb-card-body class=\"py-2\">\n        <form #donationForm=\"ngForm\">\n        <div class=\"modal-content\">\n          <div class=\"modal-body\">\n            <div class=\"left-section\">\n                <div class=\"md-form\">\n                  <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [(ngModel)]=\"donation.name\" mdbInput mdbValidate\n                    [validateSuccess]=\"false\" #name=\"ngModel\" required>\n                  <label for=\"name\">Name</label>\n                  <mdb-error *ngIf=\"name && name.invalid && (name.dirty || name.touched)\">Name is required</mdb-error>\n                </div>\n        \n                <div class=\"btn-toolbar star-container\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n                  <div class=\"md-form hidden\">\n                    <input type=\"text\" id=\"star\" name=\"star\" class=\"form-control\" [(ngModel)]=\"donation.nakshatram\" mdbInput mdbValidate\n                      [validateSuccess]=\"false\" #star=\"ngModel\" required>\n                    <label for=\"star\">Star</label>\n                  </div>\n                  <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n                      <button (click)=\"selectStar(star)\"\n                      *ngFor=\"let star of starSigns\" mdbBtn type=\"button\" color=\"grey\" [outline]=\"star !== donation.nakshatram\" [class.selected]=\"star === donation.nakshatram\"\n                       mdbWavesEffect>{{star}}</button>\n                  </div>\n                </div>\n                <div class=\"md-form\">\n                  <textarea required type=\"text\" id=\"address\" name=\"address\" class=\"md-textarea form-control\" #address=\"ngModel\"\n                    [(ngModel)]=\"donation.address\" mdbInput mdbValidate [validateSuccess]=\"false\"></textarea>\n                  <label for=\"address\">Address</label>\n                </div>\n          \n              \n            </div>\n            <div class=\"right-section\">\n              <mdb-card class=\"text-center\">\n                <mdb-card-body>\n                  <div class=\"md-form phone\">\n                    <input type=\"number\" id=\"phone\" name=\"phone\" class=\"form-control\" #phone=\"ngModel\" [(ngModel)]=\"donation.phone_number\" mdbInput mdbValidate\n                      [validateSuccess]=\"false\" required>\n                    <label for=\"phone\">Phone Number</label>\n                    <mdb-error *ngIf=\"phone && phone.invalid && (phone.dirty || phone.touched)\">phone number is required</mdb-error>\n                  </div>\n                  <div class=\"text-lg mt-4 amount\">\n                    <label for=\"amount\" class=\"grey-text\">Amount</label>\n                    <div class=\"md-form mt-0\">\n                      <span class=\"d-flex\">\n                        <span class=\"price\">&#x20B9;</span>\n                        <input type=\"number\" class=\"form-control price\" id=\"amount\" name=\"amount\" [(ngModel)]=\"donation.amount\" #amount=\"ngModel\" mdbValidate [validateSuccess]=\"false\" required>\n                      </span>\n                      <mdb-error class=\"ml-3\" *ngIf=\"amount && amount.invalid && (amount.dirty || amount.touched)\">Amount is required</mdb-error>\n                    </div>\n                  </div>\n                </mdb-card-body>\n              </mdb-card>\n            </div>\n          </div>\n       \n\n        </div>\n      </form>\n      </mdb-card-body>\n      <mdb-card-footer class=\"modal-footer\">\n          <div class=\"d-flex\">\n            <button type=\"button\" mdbBtn class=\"waves-light\" aria-label=\"Close\" (click)=\"resetForm()\"\n              mdbWavesEffect>Clear</button>\n            <button type=\"button\" mdbBtn color=\"success\" [disabled]=\"donationForm.invalid\" class=\"relative waves-light\" mdbWavesEffect (click)=\"onSave()\">Save\n              & Print</button>\n            <app-printer #appPrinter [type]=\"'donation'\" [hidden]=\"true\"></app-printer>\n          </div>\n      </mdb-card-footer>\n    </mdb-card>\n    \n  </div>\n  <div class=\"right-section\">\n    <app-right-card [header]=\"'Todays Donations'\" >\n      <div class=\"card-header bg-primary white-text\">\n        <span class=\"icon-button\" (click)=\"prevDate()\">\n          <mdb-icon *ngIf=\"isManager$ | async\" fas icon=\"chevron-left\" class=\"ml-1 float-left delete cursor-pointer white-text\" alt=\"Left\"></mdb-icon>\n        </span>\n        <span>\n          Donations on \n          <button [disabled]=\"!(isManager$ | async)\" mdbWavesEffect mdbBtn type=\"button\" rounded=\"true\" color=\"white\" class=\"pull-right text-lg btn-primary\" rrDatePicker [date]=\"defaultDate\" [endDate]=\"defaultDate\"\n          (click)=\"dateClicked($event)\" header=\"Select Date\" (dateSelected)=\"datePicked($event)\">\n            <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> {{ formattedDate }}\n          </button>\n        </span>\n        <span class=\"icon-button\" (click)=\"nextDate()\">\n          <mdb-icon *ngIf=\"(isManager$ | async) && selectedDate.format('DD/MM/YYYY') !== defaultDate.format('DD/MM/YYYY')\" mdbtn fas icon=\"chevron-right\" class=\"ml-1 float-right delete cursor-pointer white-text\" alt=\"Right\"></mdb-icon>\n        </span>\n      </div>\n      <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <table mdbTable small=\"true\" striped=\"true\" *ngIf=\"!(isLoading$ | async) && todaysDonationList.length > 0\">\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>nakshatram</th>\n            <th>Amount</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of todaysDonationList\">\n            <td scope=\"row\">{{ item?.name }}</td>\n            <td>{{ item?.nakshatram }}</td>\n            <td class=\"table-price\">&#x20B9;{{ item?.amount }}\n            </td>\n            <td *ngIf=\"isManager$ | async\" >\n              <mdb-icon fas icon=\"trash\" class=\"ml-1 delete grey-text\" (click)=\"onDelete(item?.uuid)\" alt=\"Delete\"></mdb-icon>\n            </td>\n            <td>\n              <app-printer [type]=\"'donation'\" [donation]=\"item\"></app-printer> \n            </td>\n          </tr>\n\n          <tr>\n          </tr>\n        </tbody>\n      </table>\n      <div role=\"footer\" *ngIf=\"!(isLoading$ | async)\">\n        <div class=\"card-footer text-muted\">\n          Total: <b class=\"price total-amount\">&#x20B9;{{getTotalAmount()}}</b>\n        </div>\n      </div>\n    </app-right-card>\n  </div>\n</app-split-body>\n\n");

/***/ }),

/***/ "./src/app/donations/containers/donations.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/donations/containers/donations.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".justify-space-between {\n  justify-content: space-between;\n}\n\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.card-body {\n  padding: 0 1.25rem;\n}\n\n.amount {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n}\n\n.star-container .hidden {\n  display: none;\n}\n\n.star-container .btn-group {\n  display: inline-block;\n}\n\n.star-container .btn-group button {\n  padding: 5px;\n}\n\n.star-container .btn-group button.selected {\n  background-color: darkgreen;\n  border: 1px solid darkgreen;\n  color: white;\n  font-weight: bold;\n  padding: 20px;\n}\n\n#address {\n  height: 20px;\n}\n\n.modal-body {\n  overflow: auto;\n  display: flex;\n  max-height: 65vh;\n}\n\n.modal-body .left-section {\n  width: 50%;\n}\n\n.modal-body .right-section {\n  width: 50%;\n  padding: 10px 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .modal-body {\n    flex-direction: column;\n  }\n  .modal-body .left-section {\n    width: 100%;\n  }\n  .modal-body .right-section {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-height: 500px) {\n  .modal-body {\n    max-height: 45vh !important;\n  }\n}\n\n.modal-footer {\n  justify-content: space-between;\n}\n\n.delete {\n  cursor: pointer;\n}\n\n.datepicker {\n  position: absolute;\n  right: 20px;\n}\n\n.datepicker button {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9BdWRpdC1VSS1Bbmd1bGFyL3NyYy9hcHAvZG9uYXRpb25zL2NvbnRhaW5lcnMvZG9uYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kb25hdGlvbnMvY29udGFpbmVycy9kb25hdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBRElJO0VBQ0ksYUFBQTtBQ0RSOztBREdJO0VBQ0kscUJBQUE7QUNEUjs7QURFUTtFQUNJLFlBQUE7QUNBWjs7QURHUTtFQUNJLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDRFo7O0FETUE7RUFDSSxZQUFBO0FDSEo7O0FETUE7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDSEo7O0FES0k7RUFDSSxVQUFBO0FDSFI7O0FES0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNIUjs7QURNSTtFQWJKO0lBY1Esc0JBQUE7RUNITjtFRElNO0lBQ0ksV0FBQTtFQ0ZWO0VESU07SUFDSSxXQUFBO0VDRlY7QUFDRjs7QURPQTtFQUNJO0lBQ0ksMkJBQUE7RUNKTjtBQUNGOztBRE9BO0VBQ0ksOEJBQUE7QUNMSjs7QURTQTtFQUNJLGVBQUE7QUNOSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRE1JO0VBQ0ksZ0JBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0aW9ucy9jb250YWluZXJzL2RvbmF0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdXN0aWZ5LXNwYWNlLWJldHdlZW4ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuICAgXG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwIDEuMjVyZW07XG59XG5cbi5hbW91bnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnN0YXItY29udGFpbmVyIHtcblxuICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuYnRuLWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uLnNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmVlbjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuI2FkZHJlc3Mge1xuICAgIGhlaWdodDogMjBweDtcbn1cblxuLm1vZGFsLWJvZHkge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LWhlaWdodDogNjV2aDtcbiAgXG4gICAgLmxlZnQtc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICAgIC5yaWdodC1zZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLmxlZnQtc2VjdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAucmlnaHQtc2VjdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgIH1cbiAgICB9XG5cbiAgICBcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gICAgLm1vZGFsLWJvZHkge1xuICAgICAgICBtYXgtaGVpZ2h0OiA0NXZoICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4ubW9kYWwtZm9vdGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cblxuLmRlbGV0ZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRhdGVwaWNrZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbiAgICBidXR0b24ge1xuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIH1cbn0iLCIuanVzdGlmeS1zcGFjZS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwIDEuMjVyZW07XG59XG5cbi5hbW91bnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnN0YXItY29udGFpbmVyIC5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN0YXItY29udGFpbmVyIC5idG4tZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uc3Rhci1jb250YWluZXIgLmJ0bi1ncm91cCBidXR0b24ge1xuICBwYWRkaW5nOiA1cHg7XG59XG4uc3Rhci1jb250YWluZXIgLmJ0bi1ncm91cCBidXR0b24uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtncmVlbjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuI2FkZHJlc3Mge1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC1oZWlnaHQ6IDY1dmg7XG59XG4ubW9kYWwtYm9keSAubGVmdC1zZWN0aW9uIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5tb2RhbC1ib2R5IC5yaWdodC1zZWN0aW9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtYm9keSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubW9kYWwtYm9keSAubGVmdC1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubW9kYWwtYm9keSAucmlnaHQtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IDQ1dmggIWltcG9ydGFudDtcbiAgfVxufVxuLm1vZGFsLWZvb3RlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRlbGV0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRhdGVwaWNrZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xufVxuLmRhdGVwaWNrZXIgYnV0dG9uIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn0iXX0= */");

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
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var src_app_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _store_donations_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/donations.selectors */ "./src/app/donations/store/donations.selectors.ts");
/* harmony import */ var _store_donations_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/donations.actions */ "./src/app/donations/store/donations.actions.ts");
/* harmony import */ var src_app_shared_components_printer_printer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/components/printer/printer.component */ "./src/app/shared/components/printer/printer.component.ts");
/* harmony import */ var _services_donations_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/donations.service */ "./src/app/donations/services/donations.service.ts");
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













var moment = __webpack_require__(/*! ../../../assets/datepicker/moment.js */ "./src/assets/datepicker/moment.js");
var DonationsComponent = /** @class */ (function () {
    function DonationsComponent(store, modalService, donationsService) {
        this.store = store;
        this.modalService = modalService;
        this.donationsService = donationsService;
        this.donationDate = moment();
        this.defaultDate = moment();
        this.startDate = moment().subtract(60, 'days');
        this.endDate = moment().add('30', 'days');
        this.selectedDate = moment();
        this.donation = {
            ist_YYYYMMDD: moment().format('YYYY-MM-DD')
        };
        this.expenseData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.starSigns = src_app_poojas_models_poojas_model__WEBPACK_IMPORTED_MODULE_6__["starSigns"];
        this.todaysDonationList = [];
        this.modalConfig = {
            class: 'modal-dialog-centered'
        };
    }
    Object.defineProperty(DonationsComponent.prototype, "formattedDate", {
        get: function () {
            return this.selectedDate.format('dddd DD/MM/YYYY');
        },
        enumerable: true,
        configurable: true
    });
    DonationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_store_donations_selectors__WEBPACK_IMPORTED_MODULE_9__["getDonations"]).subscribe(function (exp) {
            _this.todaysDonationList = exp;
        });
        this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]).subscribe(function (user) {
            _this.user = user;
        });
        this.donationsService.newDonationAdded.subscribe(function (receipt_number) {
            var printData = __assign({}, _this.donationCopy, { donation_date: _this.donationDate.format("DD-MM-YYYY"), added_by: _this.user.displayName, receipt_number: receipt_number });
            _this.appPrinter.donation = printData;
            _this.appPrinter.triggerPrint();
        });
        this.isLoading$ = this.store.select(_store_donations_selectors__WEBPACK_IMPORTED_MODULE_9__["getIsLoading"]);
        this.isManager$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["isManager"]);
        this.store.dispatch(new _store_donations_actions__WEBPACK_IMPORTED_MODULE_10__["DonationsQuery"](this.selectedDate.format('YYYY-MM-DD')));
    };
    DonationsComponent.prototype.dateClicked = function (date) {
        console.log(date);
    };
    DonationsComponent.prototype.donDatePicked = function (date) {
        this.donationDate = date;
        this.donation.ist_YYYYMMDD = date.format('YYYY-MM-DD');
    };
    DonationsComponent.prototype.datePicked = function (date) {
        this.selectedDate = date;
        this.store.dispatch(new _store_donations_actions__WEBPACK_IMPORTED_MODULE_10__["DonationsQuery"](date.format('YYYY-MM-DD')));
    };
    DonationsComponent.prototype.prevDate = function () {
        this.datePicked(this.selectedDate.subtract('1', 'days'));
    };
    DonationsComponent.prototype.nextDate = function () {
        this.datePicked(this.selectedDate.add('1', 'days'));
    };
    DonationsComponent.prototype.onSave = function () {
        this.donationCopy = JSON.parse(JSON.stringify(this.donation));
        this.store.dispatch(new _store_donations_actions__WEBPACK_IMPORTED_MODULE_10__["DonationsAddQuery"](this.donationCopy));
        this.resetForm();
    };
    DonationsComponent.prototype.getTotalAmount = function () {
        if (this.todaysDonationList && this.todaysDonationList.length > 0) {
            return this.todaysDonationList.reduce((function (prev, current) { return +(current.amount) + prev; }), 0);
        }
        return '0';
    };
    DonationsComponent.prototype.selectStar = function (star) {
        this.donation.nakshatram = star;
    };
    DonationsComponent.prototype.resetForm = function () {
        this.donationForm.reset();
        this.donation = {
            ist_YYYYMMDD: moment().format('YYYY-MM-DD')
        };
        this.selectedDate = moment();
        this.donationDate = moment();
    };
    DonationsComponent.prototype.onDelete = function (uuid) {
        var _this = this;
        this.modalRef = this.modalService.show(src_app_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalComponent"], this.modalConfig);
        this.modalRef.content.confirmation
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function (confirmation) {
            if (confirmation) {
                _this.store.dispatch(new _store_donations_actions__WEBPACK_IMPORTED_MODULE_10__["DonationsDeleted"]({ uuid: uuid }));
            }
        });
    };
    DonationsComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBModalService"] },
        { type: _services_donations_service__WEBPACK_IMPORTED_MODULE_12__["DonationsService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('donationForm', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], DonationsComponent.prototype, "donationForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('appPrinter', { static: true }),
        __metadata("design:type", src_app_shared_components_printer_printer_component__WEBPACK_IMPORTED_MODULE_11__["PrinterComponent"])
    ], DonationsComponent.prototype, "appPrinter", void 0);
    DonationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donations',
            template: __importDefault(__webpack_require__(/*! raw-loader!./donations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donations/containers/donations.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./donations.component.scss */ "./src/app/donations/containers/donations.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBModalService"],
            _services_donations_service__WEBPACK_IMPORTED_MODULE_12__["DonationsService"]])
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
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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




var DonationsService = /** @class */ (function () {
    function DonationsService(http) {
        this.http = http;
        this.$newDonationAdded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.newDonationAdded = this.$newDonationAdded.asObservable();
    }
    Object.defineProperty(DonationsService.prototype, "userId", {
        get: function () {
            return 'uid';
        },
        enumerable: true,
        configurable: true
    });
    DonationsService.prototype.emitNewDonation = function (receipt_number) {
        this.$newDonationAdded.next(receipt_number);
    };
    DonationsService.prototype.addDonations = function (donations) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "?api=addDonation", __assign({}, donations));
    };
    DonationsService.prototype.get = function (request) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "?api=listDonations", {
            params: {
                'ist_YYYYMMDD': request.payload
            }
        });
    };
    DonationsService.prototype.update = function (expenses, userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([expenses, userId]);
    };
    DonationsService.prototype.deleteExpense = function (uuId) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "?api=deleteExpense", {
            'uuid': uuId
        });
    };
    DonationsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    DonationsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DonationsService);
    return DonationsService;
}());



/***/ }),

/***/ "./src/app/donations/store/donations.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/donations/store/donations.actions.ts ***!
  \******************************************************/
/*! exports provided: DonationsActionTypes, DonationsQuery, DonationsLoaded, DonationsAddQuery, DonationsEdited, DonationsDeleted, DonationsError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsActionTypes", function() { return DonationsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsQuery", function() { return DonationsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsLoaded", function() { return DonationsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsAddQuery", function() { return DonationsAddQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsEdited", function() { return DonationsEdited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsDeleted", function() { return DonationsDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationsError", function() { return DonationsError; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var DonationsActionTypes;
(function (DonationsActionTypes) {
    DonationsActionTypes["DONATIONS_QUERY"] = "[Donations] Query";
    DonationsActionTypes["DONATIONS_LOADED"] = "[Donations] Fetched";
    DonationsActionTypes["DONATIONS_ADD_QUERY"] = "[Donations] Added";
    DonationsActionTypes["DONATIONS_EDITED"] = "[Donations] Edited";
    DonationsActionTypes["DONATIONS_DELETED"] = "[Donations] Deleted";
    DonationsActionTypes["DONATIONS_ERROR"] = "[Donations] Error";
})(DonationsActionTypes || (DonationsActionTypes = {}));
var DonationsQuery = /** @class */ (function () {
    function DonationsQuery(payload) {
        this.payload = payload;
        this.type = DonationsActionTypes.DONATIONS_QUERY;
    }
    return DonationsQuery;
}());

var DonationsLoaded = /** @class */ (function () {
    function DonationsLoaded(payload) {
        this.payload = payload;
        this.type = DonationsActionTypes.DONATIONS_LOADED;
    }
    return DonationsLoaded;
}());

var DonationsAddQuery = /** @class */ (function () {
    function DonationsAddQuery(payload) {
        this.payload = payload;
        this.type = DonationsActionTypes.DONATIONS_ADD_QUERY;
    }
    return DonationsAddQuery;
}());

var DonationsEdited = /** @class */ (function () {
    function DonationsEdited(payload) {
        this.payload = payload;
        this.type = DonationsActionTypes.DONATIONS_EDITED;
    }
    return DonationsEdited;
}());

var DonationsDeleted = /** @class */ (function () {
    function DonationsDeleted(payload) {
        this.payload = payload;
        this.type = DonationsActionTypes.DONATIONS_DELETED;
    }
    return DonationsDeleted;
}());

var DonationsError = /** @class */ (function () {
    function DonationsError(payload) {
        this.payload = payload;
        this.type = DonationsActionTypes.DONATIONS_ERROR;
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









var moment = __webpack_require__(/*! ../../../assets/datepicker/moment.js */ "./src/assets/datepicker/moment.js");
var DonationsEffects = /** @class */ (function () {
    function DonationsEffects(actions$, donationsService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.donationsService = donationsService;
        this.store = store;
        this.query$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsActionTypes"].DONATIONS_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (payload) { return _this.donationsService.get(payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return (new _donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsLoaded"]({ donations: data.donationList }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsError"]({ error: error }));
        })); }));
        this.added$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsActionTypes"].DONATIONS_ADD_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (payload) { return _this.donationsService.addDonations(payload)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            _this.donationsService.emitNewDonation(response.receipt_number);
            return (new _donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsQuery"](moment().format('YYYY-MM-DD')));
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsError"]({ error: error }));
        })); }));
        this.edit$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsActionTypes"].DONATIONS_EDITED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.donationsService.update(payload.customer, user.temple_code)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsError"]({ error: error }));
            }));
        }));
        this.delete$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsActionTypes"].DONATIONS_DELETED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0];
            return _this.donationsService.deleteExpense(payload.uuid)
                .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
                return (new _donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsQuery"](moment().format('YYYY-MM-DD')));
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsError"]({ error: error }));
            }));
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
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], DonationsEffects.prototype, "added$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], DonationsEffects.prototype, "edit$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
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
        case _donations_actions__WEBPACK_IMPORTED_MODULE_1__["DonationsActionTypes"].DONATIONS_QUERY: {
            return Object.assign({}, state, {
                isLoading: true,
            });
        }
        case _donations_actions__WEBPACK_IMPORTED_MODULE_1__["DonationsActionTypes"].DONATIONS_ADD_QUERY: {
            return Object.assign({}, state, {
                isLoading: true,
            });
        }
        case _donations_actions__WEBPACK_IMPORTED_MODULE_1__["DonationsActionTypes"].DONATIONS_LOADED: {
            return Object.assign({}, state, {
                donations: action.payload.donations,
                isLoading: false,
            });
        }
        case _donations_actions__WEBPACK_IMPORTED_MODULE_1__["DonationsActionTypes"].DONATIONS_ERROR: {
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
    donations: [],
    isLoading: true,
    error: null
};


/***/ })

}]);
//# sourceMappingURL=donations-donations-module.js.map