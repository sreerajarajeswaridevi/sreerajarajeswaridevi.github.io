(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["donations-donations-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donations/containers/donations.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donations/containers/donations.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-split-body [isLoading$]=\"!isLoading$\">\n  <div class=\"left-section\">\n    <mdb-card>\n      <mdb-card-header class=\"w-100 d-flex justify-space-between bg-primary white-text\">\n        <div>\n          <blockquote class=\"text-left  blockquote bq-success\">\n            <h3 class=\"header\">{{\"DONATIONS.Add_Donations\" | translate}}</h3>\n            <p class=\"py-0\" *ngIf=\"donationForm.valid\">{{\"DONATIONS.Add_Donations_Desc\" | translate}} <span class=\"price\">&#x20B9;{{donationForm?.value.amount}}</span> from {{donationForm?.value.name}} <span *ngIf=\"donationForm?.value.item\">as {{donationForm?.value.item}}</span></p>\n          </blockquote>\n        </div>\n        <button mdbWavesEffect mdbBtn type=\"button\" rounded=\"true\" color=\"white\" class=\"pull-right text-lg btn-primary\" rrDatePicker [date]=\"donationDate\" [endDate]=\"endDate\" [startDate]=\"startDate\"\n        header=\"Select Date\" (dateSelected)=\"donDatePicked($event)\">\n        <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> <span appDateTransform [date]=\"donationDate.format('YYYY-MM-DD')\"></span>\n      </button>\n      </mdb-card-header>\n      <mdb-card-body class=\"py-2\">\n        <form #donationForm=\"ngForm\">\n        <div class=\"modal-content\">\n          <div class=\"modal-body\">\n            <div class=\"left-section\">\n                <div class=\"md-form\">\n                  <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [(ngModel)]=\"donation.name\" mdbInput mdbValidate\n                    [validateSuccess]=\"false\" #name=\"ngModel\" required>\n                  <label for=\"name\">{{\"DONATIONS.Name\" | translate}}</label>\n                  <mdb-error *ngIf=\"name && name.invalid && (name.dirty || name.touched)\">{{\"DONATIONS.Name\" | translate}} {{\"is_required\" | translate}}</mdb-error>\n                </div>\n\n                <div class=\"btn-toolbar star-container\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n                  <div class=\"md-form hidden\">\n                    <input type=\"text\" id=\"star\" name=\"star\" class=\"form-control\" [(ngModel)]=\"donation.nakshatram\" mdbInput mdbValidate\n                      [validateSuccess]=\"false\" #star=\"ngModel\">\n                    <label for=\"star\">{{\"DONATIONS.Star\" | translate}}</label>\n                  </div>\n                  <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n                      <button (click)=\"selectStar(star)\"\n                      *ngFor=\"let star of starSigns\" mdbBtn type=\"button\" color=\"warning\" [class.selected]=\"star === donation.nakshatram\"\n                       mdbWavesEffect>{{star}}</button>\n                  </div>\n                </div>\n                <div class=\"md-form\">\n                  <textarea type=\"text\" id=\"address\" name=\"address\" class=\"md-textarea form-control\" #address=\"ngModel\"\n                    [(ngModel)]=\"donation.address\" mdbInput mdbValidate [validateSuccess]=\"false\"></textarea>\n                  <label for=\"address\">{{\"DONATIONS.Address\" | translate}}</label>\n                </div>\n\n\n            </div>\n            <div class=\"right-section\">\n              <mdb-card class=\"text-center\">\n                <mdb-card-body>\n                  <div class=\"md-form phone\">\n                    <input type=\"number\" id=\"phone\" name=\"phone\" class=\"form-control\" #phone=\"ngModel\" [(ngModel)]=\"donation.phone_number\" mdbInput mdbValidate\n                      [validateSuccess]=\"false\">\n                    <label for=\"phone\">{{\"DONATIONS.Phone_Number\" | translate}}</label>\n                    <mdb-error *ngIf=\"phone && phone.invalid && (phone.dirty || phone.touched)\">{{\"DONATIONS.Phone_Number\" | translate}} {{\"is_required\" | translate}}</mdb-error>\n                  </div>\n                  <!-- <div class=\"d-flex d-flex-col-md align-items-start\">\n                    <div class=\"md-form w-50\">\n                      <input type=\"text\" id=\"item\" name=\"item\" class=\"form-control\" #phone=\"ngModel\" [(ngModel)]=\"donation.item\" mdbInput mdbValidate\n                        [validateSuccess]=\"false\" required>\n                      <label for=\"phone\">{{\"DONATIONS.Item\" | translate}}</label>\n                      <mdb-error *ngIf=\"phone && phone.invalid && (phone.dirty || phone.touched)\">{{\"DONATIONS.item\" | translate}} {{\"is_required\" | translate}}</mdb-error>\n                    </div>\n                    <div class=\"suggestion-container\" *ngIf=\"frequentItems?.length\">\n                      <mdb-badge class=\"cursor-pointer mr-1 p-2\" *ngFor=\"let donationItem of frequentItems\" pill=\"true\" [info]=\"donation?.item !== donationItem\" [success]=\"donation?.item === donationItem\" (click)=\"donation.item = donationItem\">{{ donationItem }}</mdb-badge>\n                    </div>\n                  </div> -->\n\n                  <div class=\"amount payment-type-radio mt-4\" id=\"donation_payment_type_radio\">\n                    <div *ngFor=\"let type of paymentTypes\">\n                      <input\n                        type=\"radio\"\n                        class=\"form-check-input\"\n                        name=\"donation_options\"\n                        [id]=\"'donation_' + type.id\"\n                        [checked]=\"type.checked\"\n                        [(ngModel)]=\"donation.description\"\n                        [value]=\"type.id\"\n                        (ngModelChange)=\"updatePaymentTypeStates($event)\"\n                        autocomplete=\"off\" />\n                      <label class=\"form-check-label\" [for]=\"'donation_' + type.id\">{{type.label}}</label>\n                    </div>\n                  </div>\n\n                  <div class=\"text-lg mt-4 amount\">\n                    <label for=\"amount\" class=\"grey-text\">{{\"DONATIONS.Amount\" | translate}}</label>\n                    <div class=\"md-form mt-0\">\n                      <span class=\"d-flex\">\n                        <span class=\"price\">&#x20B9;</span>\n                        <input type=\"number\" class=\"form-control price\" id=\"amount\" name=\"amount\" [(ngModel)]=\"donation.amount\" #amount=\"ngModel\" mdbValidate [validateSuccess]=\"false\" required>\n                      </span>\n                      <mdb-error class=\"ml-3\" *ngIf=\"amount && amount.invalid && (amount.dirty || amount.touched)\">{{\"DONATIONS.Amount\" | translate}} {{\"is_required\" | translate}}</mdb-error>\n                    </div>\n                  </div>\n                </mdb-card-body>\n              </mdb-card>\n            </div>\n          </div>\n\n\n        </div>\n      </form>\n      </mdb-card-body>\n      <mdb-card-footer class=\"modal-footer\">\n          <div class=\"d-flex\">\n            <button type=\"button\" mdbBtn class=\"waves-light\" aria-label=\"Close\" (click)=\"resetForm()\"\n              mdbWavesEffect>{{\"DONATIONS.Clear\" | translate}}</button>\n            <button type=\"button\" mdbBtn color=\"success\" [disabled]=\"donationForm.invalid\" class=\"relative waves-light\"\n            mdbWavesEffect (click)=\"onSave()\">{{\"Save\" | translate}}</button>\n            <app-printer #appPrinter [type]=\"'donation'\" [hidden]=\"true\"></app-printer>\n          </div>\n      </mdb-card-footer>\n    </mdb-card>\n\n    <!-- vanji items ******************-->\n    <mdb-card class=\"my-4\">\n      <mdb-card-header class=\"w-100 d-flex justify-space-between bg-primary white-text vanji-row header\">\n        <div>\n          <blockquote class=\"text-left  blockquote bq-success\">\n            <h3 class=\"header\">{{\"DONATIONS.Vanji\" | translate}}</h3>\n          </blockquote>\n        </div>\n        <button mdbWavesEffect mdbBtn type=\"button\" rounded=\"true\" color=\"white\" class=\"pull-right text-lg btn-primary\" rrDatePicker [date]=\"vanjiDate\" [endDate]=\"defaultDate\" [startDate]=\"startDate\"\n        header=\"Select Date\" (dateSelected)=\"incDatePicked($event)\">\n        <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> <span appDateTransform [date]=\"vanjiDate.format('YYYY-MM-DD')\"></span>\n      </button>\n      </mdb-card-header>\n      <mdb-card-body class=\"py-2\">\n        <form #vanjiForm=\"ngForm\">\n        <div class=\"modal-content\">\n          <div class=\"modal-body\">\n            <div class=\"left-section\">\n                <div class=\"md-form w-100\">\n                  <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [(ngModel)]=\"vanji.name\" mdbInput mdbValidate\n                    [validateSuccess]=\"false\" #name=\"ngModel\" required>\n                  <label for=\"name\">{{\"DONATIONS.Vanji_Name\" | translate}}</label>\n                  <mdb-error *ngIf=\"name && name.invalid && (name.dirty || name.touched)\">{{\"DONATIONS.Vanji_Name\" | translate}} {{\"is_required\" | translate}}</mdb-error>\n                </div>\n\n                <div class=\"text-lg mt-4 amount w-100\">\n                  <label for=\"amount\" class=\"grey-text\">{{\"DONATIONS.Amount\" | translate}}</label>\n                  <div class=\"md-form mt-0\">\n                    <span class=\"d-flex\">\n                      <span class=\"price\">&#x20B9;</span>\n                      <input type=\"number\" class=\"form-control price\" id=\"amount\" name=\"amount\" [(ngModel)]=\"vanji.amount\" #amount=\"ngModel\" mdbValidate [validateSuccess]=\"false\" required>\n                    </span>\n                    <mdb-error class=\"ml-3\" *ngIf=\"amount && amount.invalid && (amount.dirty || amount.touched)\">{{\"DONATIONS.Amount\" | translate}} {{\"is_required\" | translate}}</mdb-error>\n                  </div>\n                </div>\n\n            </div>\n          </div>\n        </div>\n      </form>\n      </mdb-card-body>\n      <mdb-card-footer class=\"modal-footer\">\n          <div class=\"d-flex\">\n            <button type=\"button\" mdbBtn class=\"waves-light\" aria-label=\"Close\" (click)=\"resetIncomeForm()\"\n              mdbWavesEffect>{{\"DONATIONS.Clear\" | translate}}</button>\n            <button type=\"button\" mdbBtn color=\"success\" [disabled]=\"vanjiForm.invalid\" class=\"relative waves-light\"\n            mdbWavesEffect (click)=\"onIncomeSave()\">{{\"Save\" | translate}}</button>\n          </div>\n      </mdb-card-footer>\n    </mdb-card>\n    <!-- vanji items END ******************-->\n\n\n      <!-- festival items ******************-->\n      <mdb-card class=\"my-4\">\n        <mdb-card-header class=\"w-100 d-flex justify-space-between bg-primary white-text festival-row header\">\n          <div>\n            <blockquote class=\"text-left  blockquote bq-success\">\n              <h3 class=\"header\">{{\"DONATIONS.Festival\" | translate}}</h3>\n            </blockquote>\n          </div>\n          <button mdbWavesEffect mdbBtn type=\"button\" rounded=\"true\" color=\"white\" class=\"pull-right text-lg btn-primary\" rrDatePicker [date]=\"festivalDate\" [endDate]=\"defaultDate\" [startDate]=\"startDate\"\n          header=\"Select Date\" (dateSelected)=\"festDatePicked($event)\">\n          <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> <span appDateTransform [date]=\"festivalDate.format('YYYY-MM-DD')\"></span>\n        </button>\n        </mdb-card-header>\n        <mdb-card-body class=\"py-2\">\n          <form #festivalForm=\"ngForm\">\n          <div class=\"modal-content\">\n            <div class=\"modal-body\" style=\"min-height: 400px\">\n              <div class=\"w-100\">\n                  <div class=\"md-form w-100\">\n                    <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [(ngModel)]=\"festival.name\" mdbInput mdbValidate\n                    [validateSuccess]=\"false\" #name=\"ngModel\" required>\n                    <label for=\"name\">{{\"DONATIONS.Name\" | translate}}</label>\n                    <mdb-error *ngIf=\"name && name.invalid && (name.dirty || name.touched)\">{{\"DONATIONS.Name\" | translate}} {{\"is_required\" | translate}}</mdb-error>\n                  </div>\n\n                  <div class=\"md-form w-100\">\n                    <div class=\"btn-toolbar star-container\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n                      <div class=\"md-form hidden\">\n                        <input type=\"text\" id=\"festival_star\" name=\"festival_star\" class=\"form-control\" [(ngModel)]=\"festival.nakshatram\" mdbInput mdbValidate\n                          [validateSuccess]=\"false\" #nakshatram=\"ngModel\">\n                        <label for=\"festival_star\">{{\"DONATIONS.Star\" | translate}}</label>\n                      </div>\n                      <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n                          <button (click)=\"selectfestivalStar(star)\"\n                          *ngFor=\"let star of starSigns\" mdbBtn type=\"button\" color=\"warning\" [class.selected]=\"star === festival.nakshatram\"\n                           mdbWavesEffect>{{star}}</button>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"row w-100 d-flex align-items-end\">\n                    <div class=\"col-md-4 \">\n                      <div class=\"md-form w-100\">\n                        <input type=\"text\" id=\"address\" name=\"festival_address\" class=\"form-control\" [(ngModel)]=\"festival.address\" mdbInput mdbValidate\n                          [validateSuccess]=\"false\" #address=\"ngModel\">\n                        <label for=\"address\">{{\"DONATIONS.Address\" | translate}}</label>\n                        <mdb-error *ngIf=\"address && address.invalid && (address.dirty || address.touched)\">{{\"DONATIONS.Address\" | translate}} {{\"is_required\" | translate}}</mdb-error>\n                      </div>\n                    </div>\n                    <div class=\"col-md-4 text-sm mb-3\">\n                      <div class=\"amount payment-type-radio\" id=\"payment_type_radio\">\n                        <div *ngFor=\"let type of paymentTypes\">\n                          <input\n                            type=\"radio\"\n                            class=\"form-check-input form-control\"\n                            name=\"options\"\n                            [id]=\"type.id\"\n                            [checked]=\"type.checked\"\n                            [(ngModel)]=\"festival.description\"\n                            [value]=\"type.id\"\n                            (ngModelChange)=\"updatePaymentTypeStates($event)\"\n                            #description=\"ngModel\"\n                            autocomplete=\"off\" />\n                          <label class=\"form-check-label\" [for]=\"type.id\">{{type.label}}</label>\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-4\">\n                      <div class=\"text-lg mt-4 amount w-100\">\n                        <label for=\"amount\" class=\"grey-text\">{{\"DONATIONS.Amount\" | translate}}</label>\n                        <div class=\"md-form mt-0\">\n                          <span class=\"d-flex\">\n                            <span class=\"price\">&#x20B9;</span>\n                            <input type=\"number\" class=\"form-control price\" id=\"amount\" name=\"amount\" [(ngModel)]=\"festival.amount\" #amount=\"ngModel\" mdbValidate [validateSuccess]=\"false\" required>\n                          </span>\n                          <mdb-error class=\"ml-3\" *ngIf=\"amount && amount.invalid && (amount.dirty || amount.touched)\">{{\"DONATIONS.Amount\" | translate}} {{\"is_required\" | translate}}</mdb-error>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n\n\n              </div>\n            </div>\n          </div>\n        </form>\n        </mdb-card-body>\n        <mdb-card-footer class=\"modal-footer\">\n            <div class=\"d-flex\">\n              <button type=\"button\" mdbBtn class=\"waves-light\" aria-label=\"Close\" (click)=\"resetFestivalForm()\"\n                mdbWavesEffect>{{\"DONATIONS.Clear\" | translate}}</button>\n              <button type=\"button\" mdbBtn color=\"success\" [disabled]=\"festivalForm.invalid\" class=\"relative waves-light\"\n              mdbWavesEffect (click)=\"onFestivalSave()\">{{\"Save\" | translate}}</button>\n            </div>\n        </mdb-card-footer>\n      </mdb-card>\n      <!-- festival items END ******************-->\n\n  </div>\n  <div class=\"right-section\">\n    <app-right-card [header]=\"'Todays Donations'\" >\n      <div class=\"card-header bg-primary white-text\">\n        <span class=\"icon-button\" (click)=\"prevDate()\">\n          <mdb-icon *ngIf=\"isManager$ | async\" fas icon=\"chevron-left\" class=\"ml-1 float-left delete cursor-pointer white-text\" alt=\"Left\"></mdb-icon>\n        </span>\n        <span>\n          {{\"DONATIONS.Donations_on\" | translate}}\n          <button [disabled]=\"!(isManager$ | async)\" mdbWavesEffect mdbBtn type=\"button\" rounded=\"true\" color=\"white\" class=\"pull-right text-lg btn-primary\" rrDatePicker [date]=\"defaultDate\" [endDate]=\"defaultDate\"\n          (click)=\"dateClicked($event)\" header=\"Select Date\" (dateSelected)=\"datePicked($event)\">\n            <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> {{ formattedDate }}\n          </button>\n        </span>\n        <span class=\"icon-button\" (click)=\"nextDate()\">\n          <mdb-icon *ngIf=\"(isManager$ | async) && selectedDate.format('DD/MM/YYYY') !== defaultDate.format('DD/MM/YYYY')\" mdbtn fas icon=\"chevron-right\" class=\"ml-1 float-right delete cursor-pointer white-text\" alt=\"Right\"></mdb-icon>\n        </span>\n      </div>\n      <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <table mdbTable small=\"true\" striped=\"true\" *ngIf=\"!(isLoading$ | async) && todaysDonationList.length > 0\">\n        <thead>\n          <tr>\n            <td colspan=\"10\">\n              <div class=\"d-flex-right\">\n                <span>{{ \"SETTINGS.accountType\" | translate }}:</span>\n                <div class=\"md-form m-0 w-50 ml-2\">\n                  <select class=\"browser-default custom-select form-control py-0 pl-1\" type=\"select\" id=\"select_account_type\" name=\"accountType\" [(ngModel)]=\"selectedAccountType\" mdbSelect mdbValidate [validateSuccess]=\"false\" #accountType=\"ngModel\">\n                    <option value=\"\" disabled selected hidden>--ALL--</option>\n                    <option [value]=\"accountType.accountType_code\" *ngFor=\"let accountType of accountTypeList\">{{ accountType.accountType_name }}</option>\n                  </select>\n                  <mdb-error *ngIf=\"accountType && accountType.invalid && (accountType.dirty || accountType.touched)\">accountType {{\"is_required\" | translate}}</mdb-error>\n              </div>\n\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <th>{{\"DONATIONS.Name\" | translate}}</th>\n            <th>{{\"DONATIONS.Nakshathram\" | translate}}</th>\n            <th>{{\"DONATIONS.Amount\" | translate}}</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <ng-container  *ngFor=\"let item of todaysDonationList\">\n           <tr *ngIf=\"item.item !== 'festival' && item.item !== 'vanji'\" >\n            <td scope=\"row\">{{ item?.name }}</td>\n            <td><span *ngIf=\"item.item !== 'vanji'\">{{ item?.nakshatram }}</span></td>\n            <td *ngIf=\"item.item === 'vanji'\">{{\"DONATIONS.Vanji\" | translate}} T </td>\n            <td class=\"table-price\">&#x20B9;{{ item?.amount }} <span *ngIf=\"item?.description\">({{item?.description}})</span>\n            </td>\n            <td *ngIf=\"isManager$ | async\" class=\"d-flex\">\n              <mdb-icon fas icon=\"trash\" class=\"mx-1 delete grey-text\" (click)=\"onDelete(item)\" alt=\"Delete\"></mdb-icon>\n              <app-printer [type]=\"'donation'\" [donation]=\"item\"></app-printer>\n            </td>\n          </tr>\n        </ng-container>\n\n      <ng-container *ngIf=\"anyVanjiExist(todaysDonationList)\">\n        <br>\n        <tr class=\"vanji-row header\">\n          <td colspan=\"10\"><b>{{\"DONATIONS.Vanji\" | translate}}</b></td>\n        </tr>\n      </ng-container>\n\n        <ng-container  *ngFor=\"let item of todaysDonationList\">\n         <tr *ngIf=\"item.item === 'vanji'\" class=\"vanji-row\">\n          <td scope=\"row\" colspan=\"3\" class=\"text-left\">{{ item?.name }}</td>\n          <td></td>\n          <td class=\"table-price\">&#x20B9;{{ item?.amount }}\n          </td>\n          <td *ngIf=\"isManager$ | async\" class=\"d-flex\">\n            <mdb-icon fas icon=\"trash\" class=\"mx-1 delete grey-text\" (click)=\"onDelete(item)\" alt=\"Delete\"></mdb-icon>\n            <app-printer [type]=\"'donation'\" [donation]=\"item\"></app-printer>\n          </td>\n        </tr>\n      </ng-container>\n\n      <ng-container *ngIf=\"anyFestivalExist(todaysDonationList)\">\n\n          <br>\n          <tr class=\"festival-row header\">\n            <td colspan=\"10\"><b>{{\"DONATIONS.Festival\" | translate}}</b></td>\n          </tr>\n        </ng-container>\n          <ng-container  *ngFor=\"let item of todaysDonationList\">\n           <tr *ngIf=\"item.item === 'festival'\" class=\"festival-row\">\n            <td scope=\"row\">{{ item?.name }}</td>\n            <td>{{ item?.nakshatram }}</td>\n            <td>{{ item?.description }}</td>\n            <td>{{ item?.address }}</td>\n            <td class=\"table-price\">&#x20B9;{{ item?.amount }}\n            </td>\n            <td *ngIf=\"isManager$ | async\" class=\"d-flex\">\n              <mdb-icon fas icon=\"trash\" class=\"mx-1 delete grey-text\" (click)=\"onDelete(item)\" alt=\"Delete\"></mdb-icon>\n              <app-printer [type]=\"'donation'\" [donation]=\"item\"></app-printer>\n            </td>\n          </tr>\n        </ng-container>\n\n          <tr>\n          </tr>\n        </tbody>\n      </table>\n      <div role=\"footer\" *ngIf=\"!(isLoading$ | async)\">\n        <div class=\"card-footer text-muted\">\n          {{\"Total\" | translate}}: <b class=\"price total-amount\">&#x20B9;{{getTotalAmount()}}</b>\n        </div>\n      </div>\n    </app-right-card>\n  </div>\n</app-split-body>\n");

/***/ }),

/***/ "./src/app/donations/containers/donations.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/donations/containers/donations.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".justify-space-between {\n  justify-content: space-between;\n}\n\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.card-body {\n  padding: 0 1.25rem;\n}\n\n.amount {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n}\n\ntr.vanji {\n  background-color: #bbdcf1 !important;\n}\n\n.festival-row {\n  background-color: #a2e8c9 !important;\n}\n\n.festival-row.header {\n  background-color: #088d51 !important;\n  color: white;\n}\n\n.vanji-row {\n  background-color: #a2d1e8 !important;\n}\n\n.vanji-row.header {\n  background-color: #08618d !important;\n  color: white;\n}\n\n.star-container .hidden {\n  display: none;\n}\n\n.star-container .btn-group {\n  display: inline-block;\n}\n\n.star-container .btn-group button {\n  padding: 10px;\n  font-weight: bold;\n  color: black;\n}\n\n.star-container .btn-group button.selected {\n  background-color: forestgreen !important;\n  border: 1px solid forestgreen !important;\n  color: white;\n  font-weight: 900;\n  font-size: 19px;\n  padding: 10px;\n}\n\n#address {\n  height: 20px;\n}\n\n.modal-body {\n  overflow: auto;\n  display: flex;\n  max-height: 65vh;\n}\n\n.modal-body .left-section {\n  width: 50%;\n}\n\n.modal-body .right-section {\n  width: 50%;\n  padding: 10px 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .modal-body {\n    flex-direction: column;\n  }\n  .modal-body .left-section {\n    width: 100%;\n  }\n  .modal-body .right-section {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-height: 500px) {\n  .modal-body {\n    max-height: 45vh !important;\n  }\n}\n\n.modal-footer {\n  justify-content: space-between;\n}\n\n.delete {\n  cursor: pointer;\n}\n\n.datepicker {\n  position: absolute;\n  right: 20px;\n}\n\n.datepicker button {\n  font-size: large;\n}\n\n.payment-type-radio {\n  display: block;\n  width: 100%;\n}\n\n.payment-type-radio > div {\n  display: flex;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #e9ecef;\n  width: 70%;\n  position: relative;\n}\n\n.payment-type-radio > div:last-child {\n  border-bottom: none;\n}\n\n.payment-type-radio .form-check-input {\n  width: 20px;\n  height: 20px;\n  min-width: 20px;\n  min-height: 20px;\n  margin: 0;\n  margin-right: 12px;\n  cursor: pointer;\n  position: relative;\n  top: 0;\n  flex-shrink: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 2px solid #dee2e6;\n  border-radius: 50%;\n  background-color: #fff;\n  transition: all 0.15s ease-in-out;\n  box-sizing: border-box;\n  display: inline-block;\n}\n\n.payment-type-radio .form-check-input:checked {\n  background-color: #28a745;\n  border-color: #28a745;\n  position: relative;\n}\n\n.payment-type-radio .form-check-input:checked::after {\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.payment-type-radio .form-check-input:checked + .form-check-label {\n  color: #28a745;\n  font-weight: 600;\n}\n\n.payment-type-radio .form-check-input:hover {\n  border-color: #28a745;\n}\n\n.payment-type-radio .form-check-input:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.25);\n}\n\n.payment-type-radio .form-check-label {\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #495057;\n  margin: 0;\n  padding: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: color 0.15s ease-in-out;\n}\n\n.payment-type-radio .form-check-label:hover {\n  color: #28a745;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .payment-type-radio .form-check-input {\n    -webkit-appearance: none;\n    margin-right: 12px;\n  }\n}\n\n@media (max-width: 768px) {\n  .payment-type-radio > div {\n    width: 100%;\n    padding: 15px 0;\n  }\n  .payment-type-radio .form-check-input {\n    width: 20px;\n    height: 20px;\n    margin-right: 15px;\n  }\n  .payment-type-radio .form-check-label {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0F1ZGl0LVVJLUFuZ3VsYXIvc3JjL2FwcC9kb25hdGlvbnMvY29udGFpbmVycy9kb25hdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RvbmF0aW9ucy9jb250YWluZXJzL2RvbmF0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksb0NBQUE7QUNDSjs7QURDSTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtBQ0NSOztBREdBO0VBQ0ksb0NBQUE7QUNBSjs7QURFSTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtBQ0FSOztBRE1JO0VBQ0ksYUFBQTtBQ0hSOztBREtJO0VBQ0kscUJBQUE7QUNIUjs7QURJUTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNGWjs7QURLUTtFQUNJLHdDQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0haOztBRFFBO0VBQ0ksWUFBQTtBQ0xKOztBRFFBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRE9JO0VBQ0ksVUFBQTtBQ0xSOztBRE9JO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDTFI7O0FEUUk7RUFiSjtJQWNRLHNCQUFBO0VDTE47RURNTTtJQUNJLFdBQUE7RUNKVjtFRE1NO0lBQ0ksV0FBQTtFQ0pWO0FBQ0Y7O0FEU0E7RUFDSTtJQUNJLDJCQUFBO0VDTk47QUFDRjs7QURTQTtFQUNJLDhCQUFBO0FDUEo7O0FEV0E7RUFDSSxlQUFBO0FDUko7O0FEVUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUNQSjs7QURRSTtFQUNJLGdCQUFBO0FDTlI7O0FEVUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ1BGOztBRFNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDUEo7O0FEU0k7RUFDRSxtQkFBQTtBQ1BOOztBRFdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQ1RKOztBRFdJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDVE47O0FEV007RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDVFI7O0FEWU07RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNWUjs7QURjSTtFQUNFLHFCQUFBO0FDWk47O0FEZUk7RUFDRSxhQUFBO0VBQ0EsNkNBQUE7QUNiTjs7QURpQkU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxtQ0FBQTtBQ2ZKOztBRGlCSTtFQUNFLGNBQUE7QUNmTjs7QURxQkE7RUFDRTtJQUNFLHdCQUFBO0lBQ0Esa0JBQUE7RUNsQkY7QUFDRjs7QURzQkE7RUFFSTtJQUNFLFdBQUE7SUFDQSxlQUFBO0VDckJKO0VEd0JFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQ3RCSjtFRHlCRTtJQUNFLGVBQUE7RUN2Qko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2RvbmF0aW9ucy9jb250YWluZXJzL2RvbmF0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdXN0aWZ5LXNwYWNlLWJldHdlZW4ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwIDEuMjVyZW07XG59XG5cbi5hbW91bnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxudHIudmFuamkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDIyMCwgMjQxKSFpbXBvcnRhbnQ7XG59XG5cbi5mZXN0aXZhbC1yb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjIsIDIzMiwgMjAxKSFpbXBvcnRhbnQ7XG5cbiAgICAmLmhlYWRlcntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDE0MSwgODEpIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cblxuLnZhbmppLXJvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MiwgMjA5LCAyMzIpIWltcG9ydGFudDtcblxuICAgICYuaGVhZGVye1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOCwgOTcsIDE0MSkhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG4uc3Rhci1jb250YWluZXIge1xuXG4gICAgLmhpZGRlbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC5idG4tZ3JvdXAge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIH1cblxuICAgICAgICBidXR0b24uc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZm9yZXN0Z3JlZW4haW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZm9yZXN0Z3JlZW4haW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiNhZGRyZXNzIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC1oZWlnaHQ6IDY1dmg7XG5cbiAgICAubGVmdC1zZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG4gICAgLnJpZ2h0LXNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAubGVmdC1zZWN0aW9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5yaWdodC1zZWN0aW9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgfVxuICAgIH1cblxuXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgIC5tb2RhbC1ib2R5IHtcbiAgICAgICAgbWF4LWhlaWdodDogNDV2aCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5cbi5kZWxldGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kYXRlcGlja2VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICB9XG59XG5cbi5wYXltZW50LXR5cGUtcmFkaW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG5cbiAgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1pbi13aWR0aDogMjBweDtcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZWUyZTY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgJjpjaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gICAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgfVxuXG4gICAgICArIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICMyOGE3NDU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNDAsIDE2NywgNjksIDAuMjUpO1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMjhhNzQ1O1xuICAgIH1cbiAgfVxufVxuXG4vLyBTYWZhcmkgc3BlY2lmaWMgZml4ZXNcbkBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIHtcbiAgLnBheW1lbnQtdHlwZS1yYWRpbyAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxufVxuXG4vLyBNb2JpbGUgcmVzcG9uc2l2ZW5lc3NcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGF5bWVudC10eXBlLXJhZGlvIHtcbiAgICA+IGRpdiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICB9XG4gICAgXG4gICAgLmZvcm0tY2hlY2staW5wdXQge1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIFxuICAgIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cbn0iLCIuanVzdGlmeS1zcGFjZS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwIDEuMjVyZW07XG59XG5cbi5hbW91bnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxudHIudmFuamkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJkY2YxICFpbXBvcnRhbnQ7XG59XG5cbi5mZXN0aXZhbC1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTJlOGM5ICFpbXBvcnRhbnQ7XG59XG4uZmVzdGl2YWwtcm93LmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODhkNTEgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udmFuamktcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyZDFlOCAhaW1wb3J0YW50O1xufVxuLnZhbmppLXJvdy5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg2MThkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnN0YXItY29udGFpbmVyIC5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN0YXItY29udGFpbmVyIC5idG4tZ3JvdXAge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uc3Rhci1jb250YWluZXIgLmJ0bi1ncm91cCBidXR0b24ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLnN0YXItY29udGFpbmVyIC5idG4tZ3JvdXAgYnV0dG9uLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZm9yZXN0Z3JlZW4gIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgZm9yZXN0Z3JlZW4gIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDE5cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbiNhZGRyZXNzIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtaGVpZ2h0OiA2NXZoO1xufVxuLm1vZGFsLWJvZHkgLmxlZnQtc2VjdGlvbiB7XG4gIHdpZHRoOiA1MCU7XG59XG4ubW9kYWwtYm9keSAucmlnaHQtc2VjdGlvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLm1vZGFsLWJvZHkgLmxlZnQtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm1vZGFsLWJvZHkgLnJpZ2h0LXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OiA0NXZoICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5tb2RhbC1mb290ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5kZWxldGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXRlcGlja2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbn1cbi5kYXRlcGlja2VyIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5wYXltZW50LXR5cGUtcmFkaW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGF5bWVudC10eXBlLXJhZGlvID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgd2lkdGg6IDcwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBheW1lbnQtdHlwZS1yYWRpbyA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5wYXltZW50LXR5cGUtcmFkaW8gLmZvcm0tY2hlY2staW5wdXQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucGF5bWVudC10eXBlLXJhZGlvIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYXltZW50LXR5cGUtcmFkaW8gLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5wYXltZW50LXR5cGUtcmFkaW8gLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCArIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucGF5bWVudC10eXBlLXJhZGlvIC5mb3JtLWNoZWNrLWlucHV0OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xufVxuLnBheW1lbnQtdHlwZS1yYWRpbyAuZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDQwLCAxNjcsIDY5LCAwLjI1KTtcbn1cbi5wYXltZW50LXR5cGUtcmFkaW8gLmZvcm0tY2hlY2stbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuLnBheW1lbnQtdHlwZS1yYWRpbyAuZm9ybS1jaGVjay1sYWJlbDpob3ZlciB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSB7XG4gIC5wYXltZW50LXR5cGUtcmFkaW8gLmZvcm0tY2hlY2staW5wdXQge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGF5bWVudC10eXBlLXJhZGlvID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG4gIH1cbiAgLnBheW1lbnQtdHlwZS1yYWRpbyAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuICAucGF5bWVudC10eXBlLXJhZGlvIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn0iXX0= */");

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
/* harmony import */ var _models_donations_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/donations.model */ "./src/app/donations/models/donations.model.ts");
/* harmony import */ var _store_donations_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/donations.selectors */ "./src/app/donations/store/donations.selectors.ts");
/* harmony import */ var _store_donations_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/donations.actions */ "./src/app/donations/store/donations.actions.ts");
/* harmony import */ var src_app_shared_components_printer_printer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/components/printer/printer.component */ "./src/app/shared/components/printer/printer.component.ts");
/* harmony import */ var _services_donations_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/donations.service */ "./src/app/donations/services/donations.service.ts");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-indexed-db */ "./node_modules/ngx-indexed-db/fesm2015/ngx-indexed-db.js");
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
    function DonationsComponent(store, modalService, donationsService, idbService) {
        this.store = store;
        this.modalService = modalService;
        this.donationsService = donationsService;
        this.idbService = idbService;
        this.selectedAccountType = '';
        this.accountTypeList = [];
        this.donationDate = moment();
        this.defaultDate = moment();
        this.startDate = moment().subtract(60, 'days');
        this.endDate = moment().add('180', 'days');
        this.selectedDate = moment();
        this.vanjiDate = moment();
        this.festivalDate = moment();
        this.donation = {
            ist_YYYYMMDD: moment().format('YYYY-MM-DD'),
            item: 'cash',
            description: _models_donations_model__WEBPACK_IMPORTED_MODULE_9__["PaymentType"].Cash,
            address: '',
            phone_number: null,
            nakshatram: ''
        };
        this.expenseData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.starSigns = src_app_poojas_models_poojas_model__WEBPACK_IMPORTED_MODULE_6__["starSigns"];
        this.todaysDonationList = [];
        this.paymentTypes = JSON.parse(JSON.stringify(_models_donations_model__WEBPACK_IMPORTED_MODULE_9__["PAYMENT_OPTIONS"]));
        this.modalConfig = {
            class: 'modal-dialog-centered'
        };
        this.initIncomeData();
        this.initFestivalData();
    }
    Object.defineProperty(DonationsComponent.prototype, "formattedDate", {
        get: function () {
            return this.selectedDate.format('dddd DD/MM/YYYY');
        },
        enumerable: true,
        configurable: true
    });
    DonationsComponent.prototype.initIncomeData = function () {
        this.vanji = {
            ist_YYYYMMDD: moment().format('YYYY-MM-DD'),
            item: 'vanji',
            name: '',
            description: 'vanji',
            nakshatram: 'vanji',
            phone_number: 0,
            address: 'Vanji'
        };
    };
    DonationsComponent.prototype.initFestivalData = function () {
        this.festival = {
            ist_YYYYMMDD: moment().format('YYYY-MM-DD'),
            item: 'festival',
            name: '',
            description: _models_donations_model__WEBPACK_IMPORTED_MODULE_9__["PaymentType"].Cash,
            nakshatram: '',
            phone_number: 0,
            address: ''
        };
        this.updatePaymentTypeStates(_models_donations_model__WEBPACK_IMPORTED_MODULE_9__["PaymentType"].Cash);
    };
    DonationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_store_donations_selectors__WEBPACK_IMPORTED_MODULE_10__["getDonations"]).subscribe(function (exp) {
            _this.todaysDonationList = exp;
        });
        this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]).subscribe(function (user) {
            _this.user = user;
        });
        this.donationsService.newDonationAdded.subscribe(function (receipt_number) {
            var printData = __assign({}, _this.donationCopy, { donation_date: _this.donationDate.format("DD-MM-YYYY"), added_by: _this.user.displayName, receipt_number: receipt_number });
            _this.appPrinter.donation = printData;
            // this.appPrinter.triggerPrint();
            _this.fetchFrequentItems();
        });
        this.fetchFrequentItems();
        this.isLoading$ = this.store.select(_store_donations_selectors__WEBPACK_IMPORTED_MODULE_10__["getIsLoading"]);
        this.isManager$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["isManager"]);
        this.store.dispatch(new _store_donations_actions__WEBPACK_IMPORTED_MODULE_11__["DonationsQuery"](this.selectedDate.format('YYYY-MM-DD')));
        // Set initial payment type states based on festival description
        this.updatePaymentTypeStates(this.festival.description);
    };
    // Add new method to update payment type states
    DonationsComponent.prototype.updatePaymentTypeStates = function (currentValue) {
        this.paymentTypes = this.paymentTypes.map(function (type) { return (__assign({}, type, { checked: type.id === currentValue })); });
        console.log({ paymentTypes: this.paymentTypes, currentValue: currentValue });
    };
    DonationsComponent.prototype.fetchFrequentItems = function () {
        var _this = this;
        this.idbService
            .getAll('donations')
            .subscribe(function (items) {
            if (items && items.length > 0) {
                items = items.sort(function (a, b) {
                    if (a.frequency > b.frequency) {
                        return -1;
                    }
                    else if (a.frequency > b.frequency) {
                        return 1;
                    }
                    return 0;
                }).splice(0, 5);
                _this.frequentItems = items.map(function (data) { return data.donationItem; });
            }
        });
    };
    DonationsComponent.prototype.anyVanjiExist = function (donationList) {
        return donationList.some(function (donation) { return donation.item === 'vanji'; });
    };
    DonationsComponent.prototype.anyFestivalExist = function (donationList) {
        return donationList.some(function (donation) { return donation.item === 'festival'; });
    };
    DonationsComponent.prototype.dateClicked = function (date) {
        console.log(date);
    };
    DonationsComponent.prototype.donDatePicked = function (date) {
        this.donationDate = date;
        this.donation.ist_YYYYMMDD = date.format('YYYY-MM-DD');
    };
    DonationsComponent.prototype.incDatePicked = function (date) {
        this.vanjiDate = date;
        this.vanji.ist_YYYYMMDD = date.format('YYYY-MM-DD');
    };
    DonationsComponent.prototype.festDatePicked = function (date) {
        this.festivalDate = date;
        this.festival.ist_YYYYMMDD = date.format('YYYY-MM-DD');
    };
    DonationsComponent.prototype.datePicked = function (date) {
        this.selectedDate = date;
        this.store.dispatch(new _store_donations_actions__WEBPACK_IMPORTED_MODULE_11__["DonationsQuery"](date.format('YYYY-MM-DD')));
    };
    DonationsComponent.prototype.prevDate = function () {
        this.datePicked(this.selectedDate.subtract('1', 'days'));
    };
    DonationsComponent.prototype.nextDate = function () {
        this.datePicked(this.selectedDate.add('1', 'days'));
    };
    DonationsComponent.prototype.onSave = function () {
        var _this = this;
        var self = this;
        var donationRequest = __assign({}, this.donation, { phone_number: this.donation.phone_number ? this.donation.phone_number : 0 });
        this.donationCopy = JSON.parse(JSON.stringify(donationRequest));
        this.store.dispatch(new _store_donations_actions__WEBPACK_IMPORTED_MODULE_11__["DonationsAddQuery"](this.donationCopy));
        this.idbService
            .getByKey('donations', this.donationCopy.item)
            .subscribe(function (data) {
            if (!data) {
                _this.idbService.add('donations', {
                    donationItem: self.donationCopy.item,
                    frequency: 1
                }).subscribe(function (added) {
                    console.log(added, 'added to idb');
                }, (function (error) {
                    console.log(error);
                }));
            }
            else {
                _this.idbService.update('donations', {
                    donationItem: self.donationCopy.item,
                    frequency: data.frequency + 1
                }, data.key).subscribe(function (added) {
                    console.log(added, 'added to idb');
                }, (function (error) {
                    console.log(error);
                }));
            }
        });
        this.resetForm();
    };
    DonationsComponent.prototype.onIncomeSave = function () {
        this.vanjiCopy = JSON.parse(JSON.stringify(this.vanji));
        this.store.dispatch(new _store_donations_actions__WEBPACK_IMPORTED_MODULE_11__["DonationsAddQuery"](this.vanjiCopy));
        this.resetIncomeForm();
    };
    DonationsComponent.prototype.onFestivalSave = function () {
        this.festivalCopy = JSON.parse(JSON.stringify(this.festival));
        this.store.dispatch(new _store_donations_actions__WEBPACK_IMPORTED_MODULE_11__["DonationsAddQuery"](this.festivalCopy));
        this.resetFestivalForm();
    };
    DonationsComponent.prototype.getTotalAmount = function () {
        if (this.todaysDonationList && this.todaysDonationList.length > 0) {
            return this.todaysDonationList.reduce((function (prev, current) { return +(current.amount) + prev; }), 0);
        }
        return '0';
    };
    DonationsComponent.prototype.selectStar = function (star) {
        this.donation.nakshatram = this.donation.nakshatram === star ? '' : star;
    };
    DonationsComponent.prototype.selectfestivalStar = function (star) {
        this.festival.nakshatram = this.festival.nakshatram === star ? '' : star;
    };
    DonationsComponent.prototype.resetIncomeForm = function () {
        this.vanjiForm.reset();
        // this.vanjiForm.controls.item.setValue('vanji');
        this.initIncomeData();
        this.selectedDate = moment();
        this.vanjiDate = moment();
    };
    DonationsComponent.prototype.resetFestivalForm = function () {
        this.festivalForm.reset();
        // this.festivalForm.controls.item.setValue('festival');
        this.initFestivalData();
        this.selectedDate = moment();
        this.festivalDate = moment();
    };
    DonationsComponent.prototype.resetForm = function () {
        this.donationForm.reset();
        // this.donationForm.controls.item.setValue('cash');
        this.donation = {
            ist_YYYYMMDD: moment().format('YYYY-MM-DD'),
            item: 'cash',
            description: _models_donations_model__WEBPACK_IMPORTED_MODULE_9__["PaymentType"].Cash,
            address: '',
            phone_number: null,
            nakshatram: ''
        };
        this.updatePaymentTypeStates(_models_donations_model__WEBPACK_IMPORTED_MODULE_9__["PaymentType"].Cash);
        this.selectedDate = moment();
        this.donationDate = moment();
    };
    DonationsComponent.prototype.onDelete = function (item) {
        var _this = this;
        this.modalRef = this.modalService.show(src_app_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmModalComponent"], this.modalConfig);
        this.modalRef.content.confirmation
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function (confirmation) {
            if (confirmation) {
                _this.store.dispatch(new _store_donations_actions__WEBPACK_IMPORTED_MODULE_11__["DonationsDeleted"](item));
            }
        });
    };
    DonationsComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBModalService"] },
        { type: _services_donations_service__WEBPACK_IMPORTED_MODULE_13__["DonationsService"] },
        { type: ngx_indexed_db__WEBPACK_IMPORTED_MODULE_14__["NgxIndexedDBService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('donationForm', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], DonationsComponent.prototype, "donationForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('vanjiForm', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], DonationsComponent.prototype, "vanjiForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('festivalForm', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], DonationsComponent.prototype, "festivalForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('appPrinter', { static: true }),
        __metadata("design:type", src_app_shared_components_printer_printer_component__WEBPACK_IMPORTED_MODULE_12__["PrinterComponent"])
    ], DonationsComponent.prototype, "appPrinter", void 0);
    DonationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-donations',
            template: __importDefault(__webpack_require__(/*! raw-loader!./donations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donations/containers/donations.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./donations.component.scss */ "./src/app/donations/containers/donations.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBModalService"],
            _services_donations_service__WEBPACK_IMPORTED_MODULE_13__["DonationsService"],
            ngx_indexed_db__WEBPACK_IMPORTED_MODULE_14__["NgxIndexedDBService"]])
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
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["BadgeModule"],
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
    DonationsService.prototype.deleteDonation = function (request) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "?api=deleteDonation", __assign({}, request));
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
            return _this.donationsService.deleteDonation({ uuid: payload.uuid, phone_number: payload.phone_number })
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