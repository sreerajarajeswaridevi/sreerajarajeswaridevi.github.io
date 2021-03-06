(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donations-donations-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donations/containers/donations.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donations/containers/donations.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-split-body [isLoading$]=\"!isLoading$\">\r\n  <div class=\"left-section\">\r\n    <mdb-card>\r\n      <mdb-card-header class=\"w-100 d-flex justify-space-between bg-primary white-text\">\r\n        <div>\r\n          <blockquote class=\"text-left  blockquote bq-success\">\r\n            <h3 class=\"header\">Add Donations</h3>\r\n            <p class=\"py-0\" *ngIf=\"donationForm.valid\">Adding a donation of <span class=\"price\">&#x20B9;{{donationForm?.value.amount}}</span> from {{donationForm?.value.name}}</p>\r\n          </blockquote>\r\n        </div>\r\n        <button mdbWavesEffect mdbBtn type=\"button\" rounded=\"true\" color=\"white\" class=\"pull-right text-lg btn-primary\" rrDatePicker [date]=\"defaultDate\" [endDate]=\"endDate\"\r\n        (click)=\"dateClicked($event)\" header=\"Select Date\" (dateSelected)=\"datePicked($event)\">\r\n        <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> {{ defaultDate.format('dddd DD/MM/YYYY') }}\r\n      </button>\r\n      </mdb-card-header>\r\n      <mdb-card-body class=\"py-2\">\r\n        <form #donationForm=\"ngForm\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-body\">\r\n            <div class=\"left-section\">\r\n                <div class=\"md-form\">\r\n                  <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [(ngModel)]=\"donation.name\" mdbInput mdbValidate\r\n                    [validateSuccess]=\"false\" #name=\"ngModel\" required>\r\n                  <label for=\"name\">Name</label>\r\n                  <mdb-error *ngIf=\"name && name.invalid && (name.dirty || name.touched)\">Name is required</mdb-error>\r\n                </div>\r\n        \r\n                <div class=\"btn-toolbar star-container\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n                  <div class=\"md-form hidden\">\r\n                    <input type=\"text\" id=\"star\" name=\"star\" class=\"form-control\" [(ngModel)]=\"donation.nakshathram\" mdbInput mdbValidate\r\n                      [validateSuccess]=\"false\" #star=\"ngModel\" required>\r\n                    <label for=\"star\">Star</label>\r\n                  </div>\r\n                  <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n                      <button (click)=\"selectStar(star)\"\r\n                      *ngFor=\"let star of starSigns\" mdbBtn type=\"button\" color=\"grey\" [outline]=\"star !== donation.nakshathram\" [class.selected]=\"star === donation.nakshathram\"\r\n                       mdbWavesEffect>{{star}}</button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"md-form\">\r\n                  <textarea type=\"text\" id=\"address\" name=\"address\" class=\"md-textarea form-control\" #address=\"ngModel\"\r\n                    [(ngModel)]=\"donation.address\" mdbInput mdbValidate [validateSuccess]=\"false\"></textarea>\r\n                  <label for=\"address\">Address (Optional)</label>\r\n                </div>\r\n          \r\n              \r\n            </div>\r\n            <div class=\"right-section\">\r\n              <mdb-card class=\"text-center\">\r\n                <mdb-card-body>\r\n                  <div class=\"md-form phone\">\r\n                    <input type=\"number\" id=\"phone\" name=\"phone\" class=\"form-control\" #phone=\"ngModel\" [(ngModel)]=\"donation.phoneNumber\" mdbInput mdbValidate\r\n                      [validateSuccess]=\"false\" required>\r\n                    <label for=\"phone\">Phone Number</label>\r\n                    <mdb-error *ngIf=\"phone && phone.invalid && (phone.dirty || phone.touched)\">phone number is required</mdb-error>\r\n                  </div>\r\n                  <div class=\"text-lg mt-4 amount\">\r\n                    <label for=\"amount\" class=\"grey-text\">Amount</label>\r\n                    <div class=\"md-form mt-0\">\r\n                      <span class=\"d-flex\">\r\n                        <span class=\"price\">&#x20B9;</span>\r\n                        <input type=\"number\" class=\"form-control price\" id=\"amount\" name=\"amount\" [(ngModel)]=\"donation.amount\" #amount=\"ngModel\" mdbValidate [validateSuccess]=\"false\" required>\r\n                      </span>\r\n                      <mdb-error class=\"ml-3\" *ngIf=\"amount && amount.invalid && (amount.dirty || amount.touched)\">Amount is required</mdb-error>\r\n                    </div>\r\n                  </div>\r\n                </mdb-card-body>\r\n              </mdb-card>\r\n            </div>\r\n          </div>\r\n       \r\n\r\n        </div>\r\n      </form>\r\n      </mdb-card-body>\r\n      <mdb-card-footer class=\"modal-footer\">\r\n          <div class=\"d-flex\">\r\n            <button type=\"button\" mdbBtn class=\"waves-light\" aria-label=\"Close\" (click)=\"resetForm()\"\r\n              mdbWavesEffect>Clear</button>\r\n            <button type=\"button\" mdbBtn color=\"success\" [disabled]=\"donationForm.invalid\" class=\"relative waves-light\" mdbWavesEffect (click)=\"onSave()\">Save\r\n              changes</button>\r\n          </div>\r\n      </mdb-card-footer>\r\n    </mdb-card>\r\n    \r\n  </div>\r\n  <div class=\"right-section\">\r\n    <app-right-card [header]=\"'Todays Donations'\" >\r\n      <div class=\"card-header bg-primary white-text\">\r\n        <span class=\"icon-button\" (click)=\"prevDate()\">\r\n          <mdb-icon *ngIf=\"isManager$ | async\" fas icon=\"chevron-left\" class=\"ml-1 float-left delete cursor-pointer white-text\" alt=\"Left\"></mdb-icon>\r\n        </span>\r\n        <span>\r\n          Donations on \r\n          <button mdbWavesEffect mdbBtn type=\"button\" rounded=\"true\" color=\"white\" class=\"pull-right text-lg btn-primary\" rrDatePicker [date]=\"defaultDate\" [endDate]=\"defaultDate\"\r\n          (click)=\"dateClicked($event)\" header=\"Select Date\" (dateSelected)=\"datePicked($event)\">\r\n            <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> {{ formattedDate }}\r\n          </button>\r\n        </span>\r\n        <span class=\"icon-button\" (click)=\"nextDate()\">\r\n          <mdb-icon *ngIf=\"(isManager$ | async) && selectedDate.format('DD/MM/YYYY') !== defaultDate.format('DD/MM/YYYY')\" mdbtn fas icon=\"chevron-right\" class=\"ml-1 float-right delete cursor-pointer white-text\" alt=\"Right\"></mdb-icon>\r\n        </span>\r\n      </div>\r\n      <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n      </div>\r\n      <table mdbTable small=\"true\" striped=\"true\" *ngIf=\"!(isLoading$ | async) && todaysDonationList.length > 0\">\r\n        <thead>\r\n          <tr>\r\n            <th>Name</th>\r\n            <th>Nakshathram</th>\r\n            <th>Amount</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of todaysDonationList\">\r\n            <td scope=\"row\">{{ item?.name }}</td>\r\n            <td>{{ item?.nakshathram }}</td>\r\n            <td class=\"table-price\">&#x20B9;{{ item?.amount }}\r\n              <mdb-icon *ngIf=\"isManager$ | async\" fas icon=\"trash\" class=\"ml-1 float-right delete grey-text\" (click)=\"onDelete(item?.uuid)\" alt=\"Delete\"></mdb-icon>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div role=\"footer\" *ngIf=\"!(isLoading$ | async)\">\r\n        <div class=\"card-footer text-muted\">\r\n          Total: <b class=\"price total-amount\">&#x20B9;{{getTotalAmount()}}</b>\r\n        </div>\r\n      </div>\r\n    </app-right-card>\r\n    <!-- <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 200px\">\r\n      <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</app-split-body>\r\n\r\n");

/***/ }),

/***/ "./src/app/donations/containers/donations.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/donations/containers/donations.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".justify-space-between {\n  justify-content: space-between;\n}\n\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.card-body {\n  padding: 0 1.25rem;\n}\n\n.amount {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n}\n\n.star-container .hidden {\n  display: none;\n}\n\n.star-container .btn-group {\n  display: inline-block;\n}\n\n.star-container .btn-group button {\n  padding: 5px;\n}\n\n.star-container .btn-group button.selected {\n  background-color: darkgreen;\n  border: 1px solid darkgreen;\n  color: white;\n  font-weight: bold;\n  padding: 20px;\n}\n\n#address {\n  height: 20px;\n}\n\n.modal-body {\n  overflow: auto;\n  display: flex;\n  max-height: 65vh;\n}\n\n.modal-body .left-section {\n  width: 50%;\n}\n\n.modal-body .right-section {\n  width: 50%;\n  padding: 10px 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .modal-body {\n    flex-direction: column;\n  }\n  .modal-body .left-section {\n    width: 100%;\n  }\n  .modal-body .right-section {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-height: 500px) {\n  .modal-body {\n    max-height: 45vh !important;\n  }\n}\n\n.modal-footer {\n  justify-content: space-between;\n}\n\n.delete {\n  cursor: pointer;\n}\n\n.datepicker {\n  position: absolute;\n  right: 20px;\n}\n\n.datepicker button {\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRpb25zL2NvbnRhaW5lcnMvQzpcXGdpdCBjb2RlXFxBdWRpdC1VSS1Bbmd1bGFyL3NyY1xcYXBwXFxkb25hdGlvbnNcXGNvbnRhaW5lcnNcXGRvbmF0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZG9uYXRpb25zL2NvbnRhaW5lcnMvZG9uYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURJSTtFQUNJLGFBQUE7QUNEUjs7QURHSTtFQUNJLHFCQUFBO0FDRFI7O0FERVE7RUFDSSxZQUFBO0FDQVo7O0FER1E7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0RaOztBRE1BO0VBQ0ksWUFBQTtBQ0hKOztBRE1BO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0hKOztBREtJO0VBQ0ksVUFBQTtBQ0hSOztBREtJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDSFI7O0FETUk7RUFiSjtJQWNRLHNCQUFBO0VDSE47RURJTTtJQUNJLFdBQUE7RUNGVjtFRElNO0lBQ0ksV0FBQTtFQ0ZWO0FBQ0Y7O0FET0E7RUFDSTtJQUNJLDJCQUFBO0VDSk47QUFDRjs7QURPQTtFQUNJLDhCQUFBO0FDTEo7O0FEU0E7RUFDSSxlQUFBO0FDTko7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNMSjs7QURNSTtFQUNJLGdCQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9kb25hdGlvbnMvY29udGFpbmVycy9kb25hdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVzdGlmeS1zcGFjZS1iZXR3ZWVuIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcbiAgIFxyXG4uY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDAgMS4yNXJlbTtcclxufVxyXG5cclxuLmFtb3VudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc3Rhci1jb250YWluZXIge1xyXG5cclxuICAgIC5oaWRkZW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuYnRuLWdyb3VwIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uLnNlbGVjdGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JlZW47XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4jYWRkcmVzcyB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1heC1oZWlnaHQ6IDY1dmg7XHJcbiAgXHJcbiAgICAubGVmdC1zZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0LXNlY3Rpb24ge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC5sZWZ0LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJpZ2h0LXNlY3Rpb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XHJcbiAgICAubW9kYWwtYm9keSB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogNDV2aCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuXHJcbi5kZWxldGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kYXRlcGlja2VyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgfVxyXG59IiwiLmp1c3RpZnktc3BhY2UtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMCAxLjI1cmVtO1xufVxuXG4uYW1vdW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zdGFyLWNvbnRhaW5lciAuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zdGFyLWNvbnRhaW5lciAuYnRuLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnN0YXItY29udGFpbmVyIC5idG4tZ3JvdXAgYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4O1xufVxuLnN0YXItY29udGFpbmVyIC5idG4tZ3JvdXAgYnV0dG9uLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNhZGRyZXNzIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtaGVpZ2h0OiA2NXZoO1xufVxuLm1vZGFsLWJvZHkgLmxlZnQtc2VjdGlvbiB7XG4gIHdpZHRoOiA1MCU7XG59XG4ubW9kYWwtYm9keSAucmlnaHQtc2VjdGlvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLm1vZGFsLWJvZHkgLmxlZnQtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm1vZGFsLWJvZHkgLnJpZ2h0LXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA0NXZoICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5tb2RhbC1mb290ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5kZWxldGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXRlcGlja2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbn1cbi5kYXRlcGlja2VyIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59Il19 */");

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
        this.selectedDate = moment();
        this.donation = {};
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
        this.isLoading$ = this.store.select(_store_donations_selectors__WEBPACK_IMPORTED_MODULE_9__["getIsLoading"]);
        this.isManager$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["isManager"]);
        this.store.dispatch(new _store_donations_actions__WEBPACK_IMPORTED_MODULE_10__["DonationsQuery"](this.selectedDate.format('YYYY-MM-DD')));
    };
    DonationsComponent.prototype.dateClicked = function (date) {
        console.log(date);
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
        this.store.dispatch(new _store_donations_actions__WEBPACK_IMPORTED_MODULE_10__["DonationsAddQuery"](this.donation));
        this.resetForm();
    };
    DonationsComponent.prototype.getTotalAmount = function () {
        if (this.todaysDonationList && this.todaysDonationList.length > 0) {
            return this.todaysDonationList.reduce((function (prev, current) { return +(current.cost) + prev; }), 0);
        }
        return '0';
    };
    DonationsComponent.prototype.selectStar = function (star) {
        this.donation.nakshathram = star;
    };
    DonationsComponent.prototype.resetForm = function () {
        this.donationForm.reset();
        this.donation = {};
        this.selectedDate = moment();
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
    }
    Object.defineProperty(DonationsService.prototype, "userId", {
        get: function () {
            return 'uid';
        },
        enumerable: true,
        configurable: true
    });
    DonationsService.prototype.addDonations = function (expenses) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "?api=addDonation", __assign({}, expenses));
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
            return (new _donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsLoaded"]({ donations: data.donationsList }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsError"]({ error: error }));
        })); }));
        this.added$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_donations_actions__WEBPACK_IMPORTED_MODULE_3__["DonationsActionTypes"].DONATIONS_ADD_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (payload) { return _this.donationsService.addDonations(payload)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
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
                Donations: action.payload.donations,
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