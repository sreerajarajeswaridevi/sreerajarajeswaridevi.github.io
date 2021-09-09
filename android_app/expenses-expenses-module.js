(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expenses-expenses-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/expenses/containers/expenses.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expenses/containers/expenses.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-split-body [isLoading$]=\"!isLoading$\">\r\n  <div class=\"left-section\">\r\n    <mdb-card>\r\n      <mdb-card-header class=\"w-100 d-flex justify-space-between bg-primary white-text\">\r\n        <div>\r\n          <blockquote class=\"text-left  blockquote bq-success\">\r\n            <h3 class=\"header\">Add Expense</h3>\r\n          </blockquote>\r\n        </div>\r\n        <button mdbWavesEffect mdbBtn type=\"button\" rounded=\"true\" color=\"white\" class=\"pull-right text-lg btn-primary\" rrDatePicker [date]=\"expenseDate\" [endDate]=\"endDate\" [startDate]=\"startDate\"\r\n        header=\"Select Date\" (dateSelected)=\"expDatePicked($event)\">\r\n        <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> <span appDateTransform [date]=\"expenseDate.format('YYYYMMDD')\"></span>\r\n      </button>\r\n      </mdb-card-header>\r\n  \r\n      <mdb-card-body class=\"py-2\">\r\n        <form #expenseForm=\"ngForm\" autocomplete=\"on\">\r\n          <div class=\"d-flex\">\r\n          <div class=\"md-form\">\r\n            <input type=\"text\" id=\"item\" name=\"item\" class=\"form-control\" [(ngModel)]=\"expense.item\" mdbInput mdbValidate [validateSuccess]=\"false\" #item=\"ngModel\" required>\r\n            <label for=\"item\">Item</label>\r\n            <mdb-error *ngIf=\"item && item.invalid && (item.dirty || item.touched)\">item is required</mdb-error>\r\n          </div>\r\n          <div class=\"suggestion-container\" *ngIf=\"frequentExpenses?.length\">\r\n            <mdb-badge class=\"cursor-pointer mr-1 p-2\" *ngFor=\"let expenseName of frequentExpenses\" pill=\"true\" [info]=\"expense.item !== expenseName\" [success]=\"expense.item === expenseName\" (click)=\"expense.item = expenseName\">{{ expenseName }}</mdb-badge>\r\n          </div>\r\n          </div>\r\n\r\n          <div class=\"md-form\" style=\"margin-top: 15px;\">\r\n            <textarea type=\"text\" id=\"description\" name=\"description\" class=\"my-0 py-0 md-textarea form-control\" \r\n            #description=\"ngModel\" [(ngModel)]=\"expense.description\" mdbInput mdbValidate\r\n              [validateSuccess]=\"false\" required></textarea>\r\n            <label for=\"description\">Description</label>\r\n            <mdb-error *ngIf=\"description && description.invalid && (description.dirty || description.touched)\">Description is required</mdb-error>\r\n          </div>\r\n\r\n          <div class=\"text-lg\">\r\n            <label for=\"cost\" class=\"grey-text\">Cost</label>\r\n            <div class=\"md-form mt-0\">\r\n              <span class=\"d-flex\">\r\n                <span class=\"price\">&#x20B9;</span>\r\n                <input type=\"number\" class=\"form-control price\" id=\"cost\" name=\"cost\" [(ngModel)]=\"expense.cost\" #cost=\"ngModel\" mdbValidate [validateSuccess]=\"false\" required>\r\n              </span>\r\n              <mdb-error class=\"ml-3\" *ngIf=\"cost && cost.invalid && (cost.dirty || cost.touched)\">Cost is required</mdb-error>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </mdb-card-body>\r\n      <mdb-card-footer class=\"d-flex\">\r\n        <button type=\"button\" mdbBtn color=\"white\" class=\"relative waves-light pull-right\" mdbWavesEffect (click)=\"expenseForm.reset()\">Clear\r\n          </button>\r\n        <button type=\"button\" mdbBtn color=\"success\" [disabled]=\"expenseForm.invalid || (isLoading$ | async)\" class=\"relative waves-light pull-right\" mdbWavesEffect (click)=\"onSave()\">Save & Print\r\n          </button>\r\n\r\n      </mdb-card-footer>\r\n    </mdb-card>\r\n\r\n\r\n    <mdb-card class=\"mt-2\" *ngIf=\"(isManager$ | async)\">\r\n      <!-- salary section -->\r\n      <mdb-card-header class=\"w-100 d-flex justify-space-between bg-primary white-text\">\r\n        <div>\r\n          <blockquote class=\"text-left  blockquote bq-success\">\r\n            <h3 class=\"header\">Record Salary</h3>\r\n          </blockquote>\r\n        </div>\r\n        <button mdbWavesEffect mdbBtn type=\"button\" rounded=\"true\" color=\"white\" class=\"pull-right text-lg btn-primary\" rrDatePicker [date]=\"salaryDate\" [endDate]=\"endDate\" [startDate]=\"startDate\"\r\n        header=\"Select Salary Given Date\" (dateSelected)=\"salDatePicked($event)\">\r\n        <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> {{ salaryDate.format('dddd DD/MM/YYYY') }}\r\n      </button>\r\n      </mdb-card-header>\r\n  \r\n      <mdb-card-body class=\"py-2\">\r\n        <form #salaryForm=\"ngForm\">\r\n          <div class=\"d-flex\">\r\n          <div class=\"md-form\">\r\n            <input type=\"text\" id=\"description\" name=\"description\" class=\"form-control\" [(ngModel)]=\"salary.description\" mdbInput mdbValidate [validateSuccess]=\"false\" #description=\"ngModel\" required>\r\n            <label for=\"description\">Paid To:</label>\r\n            <mdb-error *ngIf=\"description && description.invalid && (description.dirty || description.touched)\">Person Name is required</mdb-error>\r\n          </div>\r\n          <div class=\"suggestion-container\" *ngIf=\"frequentSalaries?.length\">\r\n            <mdb-badge class=\"cursor-pointer mr-1\" *ngFor=\"let item of frequentSalaries\" pill=\"true\" [info]=\"item.person !== salary.description\" [success]=\"item.person === salary.description\" (click)=\"salary.description = item.person; salary.cost = item.amount\">{{ item.person }}</mdb-badge>\r\n          </div>\r\n          </div>\r\n\r\n          <div class=\"text-lg\">\r\n            <label for=\"cost\" class=\"grey-text\">Amount</label>\r\n            <div class=\"md-form mt-0\">\r\n              <span class=\"d-flex\">\r\n                <span class=\"price\">&#x20B9;</span>\r\n                <input type=\"number\" class=\"form-control price\" id=\"cost\" name=\"cost\" [(ngModel)]=\"salary.cost\" #cost=\"ngModel\" mdbValidate [validateSuccess]=\"false\" required>\r\n              </span>\r\n              <mdb-error class=\"ml-3\" *ngIf=\"cost && cost.invalid && (cost.dirty || cost.touched)\">Amount is required</mdb-error>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n      </mdb-card-body>\r\n      <mdb-card-footer class=\"d-flex\">\r\n        <button type=\"button\" mdbBtn color=\"white\" class=\"relative waves-light pull-right\" mdbWavesEffect (click)=\"salaryForm.reset()\">Clear\r\n          </button>\r\n        <button type=\"button\" mdbBtn color=\"success\" [disabled]=\"salaryForm.invalid || (isLoading$ | async)\" class=\"relative waves-light pull-right\" mdbWavesEffect (click)=\"onSalarySave(salaryForm)\">Save & Print\r\n          </button>\r\n      </mdb-card-footer>\r\n    </mdb-card>\r\n  </div>\r\n  <div class=\"right-section pb-4\">\r\n    <app-right-card [header]=\"'Todays Expenses'\" >\r\n      <div class=\"card-header bg-primary white-text\">\r\n        <span class=\"icon-button\" (click)=\"prevDate()\">\r\n          <mdb-icon *ngIf=\"isManager$ | async\" fas icon=\"chevron-left\" class=\"ml-1 float-left delete cursor-pointer white-text\" alt=\"Left\"></mdb-icon>\r\n        </span>\r\n        <span>\r\n          Expense on \r\n          <button [disabled]=\"!(isManager$ | async)\" mdbWavesEffect mdbBtn type=\"button\" rounded=\"true\" color=\"white\" class=\"pull-right text-lg btn-primary\" rrDatePicker [date]=\"defaultDate\" [endDate]=\"defaultDate\" [startDate]=\"startDate\"\r\n          (click)=\"dateClicked($event)\" header=\"Select Date\" (dateSelected)=\"datePicked($event)\">\r\n            <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> {{ formattedDate }}\r\n          </button>\r\n        </span>\r\n        <span class=\"icon-button\" (click)=\"nextDate()\">\r\n          <mdb-icon *ngIf=\"(isManager$ | async) && selectedDate.format('DD/MM/YYYY') !== defaultDate.format('DD/MM/YYYY')\" mdbtn fas icon=\"chevron-right\" class=\"ml-1 float-right delete cursor-pointer white-text\" alt=\"Right\"></mdb-icon>\r\n        </span>\r\n      </div>\r\n      <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\">\r\n        <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n          <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n      </div>\r\n      <table mdbTable small=\"true\" striped=\"true\" *ngIf=\"!(isLoading$ | async) && todaysExpenseList.length > 0\">\r\n        <thead>\r\n          <tr>\r\n            <th>Item</th>\r\n            <th>Description</th>\r\n            <th>Cost</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let item of todaysExpenseList\" [class.salary]=\"item?.item === 'Salary'\">\r\n            <td scope=\"row\">{{ item?.item }}</td>\r\n            <td>{{ item?.description }}</td>\r\n            <td class=\"table-price\">&#x20B9;{{ item?.cost }}</td>\r\n            <td>\r\n              <app-printer [type]=\"'expense'\" [size]=\"'bill'\" [expense]=\"item\"></app-printer> \r\n              <mdb-icon *ngIf=\"isManager$ | async\" fas icon=\"trash\" class=\"ml-1 float-right delete grey-text\" (click)=\"onDelete(item?.uuid)\" alt=\"Delete\"></mdb-icon>\r\n            </td>\r\n          </tr>\r\n\r\n          <tr>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <div role=\"footer\" *ngIf=\"!(isLoading$ | async)\">\r\n        <div class=\"card-footer text-muted\">\r\n          Total: <b class=\"price total-amount\">&#x20B9;{{getTotalExpense()}}</b>\r\n        </div>\r\n      </div>\r\n    </app-right-card>\r\n\r\n    <!-- <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 200px\">\r\n      <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</app-split-body>\r\n\r\n<app-printer #appPrinter [type]=\"'expense'\" [hidden]=\"true\"></app-printer>");

/***/ }),

/***/ "./src/app/expenses/containers/expenses.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/expenses/containers/expenses.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".justify-space-between {\n  justify-content: space-between;\n}\n\n.price {\n  font-size: 24px;\n}\n\n.table-price {\n  font-weight: bold;\n}\n\n.right-section table {\n  text-align: left;\n  margin-bottom: 0;\n}\n\n.right-section table .total-amount {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.right-section table .delete {\n  cursor: pointer;\n}\n\n.right-section table tr.salary {\n  background-color: #d8fdd8;\n}\n\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.card-body {\n  padding: 0 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZW5zZXMvY29udGFpbmVycy9DOlxcZ2l0IGNvZGVcXEF1ZGl0LVVJLUFuZ3VsYXIvc3JjXFxhcHBcXGV4cGVuc2VzXFxjb250YWluZXJzXFxleHBlbnNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhwZW5zZXMvY29udGFpbmVycy9leHBlbnNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRElJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0RSOztBREdRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDRFo7O0FER1E7RUFDSSxlQUFBO0FDRFo7O0FER1E7RUFDSSx5QkFBQTtBQ0RaOztBRE9BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNKSjs7QURPQTtFQUNJLGtCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9leHBlbnNlcy9jb250YWluZXJzL2V4cGVuc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1c3RpZnktc3BhY2UtYmV0d2VlbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbn1cclxuXHJcbi50YWJsZS1wcmljZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnJpZ2h0LXNlY3Rpb24ge1xyXG4gXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgICAgICAudG90YWwtYW1vdW50IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlbGV0ZSB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHIuc2FsYXJ5IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgMjUzLCAyMTYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4gICBcclxuLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwIDEuMjVyZW07XHJcbn0iLCIuanVzdGlmeS1zcGFjZS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJpY2Uge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi50YWJsZS1wcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmlnaHQtc2VjdGlvbiB0YWJsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucmlnaHQtc2VjdGlvbiB0YWJsZSAudG90YWwtYW1vdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5yaWdodC1zZWN0aW9uIHRhYmxlIC5kZWxldGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmlnaHQtc2VjdGlvbiB0YWJsZSB0ci5zYWxhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhmZGQ4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwIDEuMjVyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/expenses/containers/expenses.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/expenses/containers/expenses.component.ts ***!
  \***********************************************************/
/*! exports provided: ExpensesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesComponent", function() { return ExpensesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_expenses_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/expenses.selectors */ "./src/app/expenses/store/expenses.selectors.ts");
/* harmony import */ var _store_expenses_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/expenses.actions */ "./src/app/expenses/store/expenses.actions.ts");
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var src_app_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-indexed-db */ "./node_modules/ngx-indexed-db/fesm2015/ngx-indexed-db.js");
/* harmony import */ var src_app_shared_components_printer_printer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/printer/printer.component */ "./src/app/shared/components/printer/printer.component.ts");
/* harmony import */ var _services_expenses_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/expenses.service */ "./src/app/expenses/services/expenses.service.ts");
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
var ExpensesComponent = /** @class */ (function () {
    function ExpensesComponent(store, modalService, idbService, expenseService) {
        this.store = store;
        this.modalService = modalService;
        this.idbService = idbService;
        this.expenseService = expenseService;
        this.expenseDate = moment();
        this.salaryDate = moment();
        this.defaultDate = moment();
        this.startDate = moment().subtract(60, 'days');
        this.endDate = moment().add('30', 'days');
        this.selectedDate = moment();
        this.expense = {
            ist_YYYYMMDD: moment().format('YYYY-MM-DD')
        };
        this.salary = {
            item: 'Salary',
            description: '',
            cost: '',
            ist_YYYYMMDD: moment().format('YYYY-MM-DD')
        };
    }
    Object.defineProperty(ExpensesComponent.prototype, "formattedDate", {
        get: function () {
            return this.selectedDate.format('dddd DD/MM/YYYY');
        },
        enumerable: true,
        configurable: true
    });
    ExpensesComponent.prototype.dateClicked = function (event) {
        console.log(event);
    };
    ExpensesComponent.prototype.expDatePicked = function (date) {
        this.expenseDate = date;
        this.expense.ist_YYYYMMDD = date.format('YYYY-MM-DD');
    };
    ExpensesComponent.prototype.salDatePicked = function (date) {
        this.salaryDate = date;
        this.salary.ist_YYYYMMDD = date.format('YYYY-MM-DD');
    };
    ExpensesComponent.prototype.datePicked = function (date) {
        this.selectedDate = date;
        this.store.dispatch(new _store_expenses_actions__WEBPACK_IMPORTED_MODULE_4__["ExpensesQuery"](date.format('YYYY-MM-DD')));
    };
    ExpensesComponent.prototype.prevDate = function () {
        this.datePicked(this.selectedDate.subtract('1', 'days'));
    };
    ExpensesComponent.prototype.nextDate = function () {
        this.datePicked(this.selectedDate.add('1', 'days'));
    };
    ExpensesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(_store_expenses_selectors__WEBPACK_IMPORTED_MODULE_3__["getExpenses"]).subscribe(function (exp) {
            _this.todaysExpenseList = exp;
            _this.fetchFrequentExpenses();
            _this.fetchFrequentSalaries();
        });
        this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_5__["getUser"]).subscribe(function (user) {
            _this.user = user;
        });
        this.expenseService.newExpenseAdded.subscribe(function (receipt_number) {
            if (receipt_number) {
                var expenseCopy = JSON.parse(JSON.stringify(_this.expenseCopy));
                _this.appPrinter.expense = __assign({}, expenseCopy, { added_by: _this.user.displayName, expense_date: _this.expenseDate.format('DD-MM-YYYY'), receipt_number: receipt_number });
                _this.appPrinter.triggerPrint();
                _this.expenseCopy = null;
            }
        });
        this.isLoading$ = this.store.select(_store_expenses_selectors__WEBPACK_IMPORTED_MODULE_3__["getIsLoading"]);
        this.isManager$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_5__["isManager"]);
        this.store.dispatch(new _store_expenses_actions__WEBPACK_IMPORTED_MODULE_4__["ExpensesQuery"](this.selectedDate.format('YYYY-MM-DD')));
    };
    ExpensesComponent.prototype.fetchFrequentExpenses = function () {
        var _this = this;
        this.idbService
            .getAll('expenses')
            .subscribe(function (expense) {
            if (expense && expense.length > 0) {
                expense = expense.sort(function (a, b) {
                    if (a.frequency > b.frequency) {
                        return -1;
                    }
                    else if (a.frequency > b.frequency) {
                        return 1;
                    }
                    return 0;
                }).splice(0, 5);
                _this.frequentExpenses = expense.map(function (data) { return data.item; });
            }
        });
    };
    ExpensesComponent.prototype.fetchFrequentSalaries = function () {
        var _this = this;
        this.idbService
            .getAll('salary')
            .subscribe(function (salary) {
            if (salary && salary.length > 0) {
                _this.frequentSalaries = salary.sort(function (a, b) {
                    if (a.frequency > b.frequency) {
                        return -1;
                    }
                    else if (a.frequency > b.frequency) {
                        return 1;
                    }
                    return 0;
                }).splice(0, 5);
            }
        });
    };
    ExpensesComponent.prototype.onSave = function () {
        var _this = this;
        this.expenseCopy = JSON.parse(JSON.stringify(this.expense));
        this.store.dispatch(new _store_expenses_actions__WEBPACK_IMPORTED_MODULE_4__["ExpensesAddQuery"](this.expense));
        this.idbService
            .getByKey('expenses', this.expenseCopy.item)
            .subscribe(function (data) {
            if (!data) {
                _this.idbService.add('expenses', {
                    item: _this.expenseCopy.item,
                    frequency: 1
                });
            }
            else {
                _this.idbService.update('expenses', {
                    item: _this.expenseCopy.item,
                    frequency: data.frequency + 1
                }, data.key);
            }
        });
        this.expense = {
            ist_YYYYMMDD: moment().format('YYYY-MM-DD')
        };
        this.expenseForm.reset();
        this.selectedDate = moment();
        this.expenseDate = moment();
    };
    ExpensesComponent.prototype.resetAll = function () {
    };
    ExpensesComponent.prototype.getTotalExpense = function () {
        if (this.todaysExpenseList && this.todaysExpenseList.length > 0) {
            return this.todaysExpenseList.reduce((function (prev, current) { return +(current.cost) + prev; }), 0);
        }
        return '0';
    };
    ExpensesComponent.prototype.onDelete = function (uuid) {
        var _this = this;
        this.modalRef = this.modalService.show(src_app_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalComponent"], { class: 'modal-dialog-centered' });
        this.modalRef.content.confirmation
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))
            .subscribe(function (confirmation) {
            if (confirmation) {
                _this.store.dispatch(new _store_expenses_actions__WEBPACK_IMPORTED_MODULE_4__["ExpensesDeleted"]({ uuid: uuid }));
            }
        });
    };
    ExpensesComponent.prototype.onSalarySave = function (form) {
        var _this = this;
        this.expenseCopy = JSON.parse(JSON.stringify(this.salary));
        this.store.dispatch(new _store_expenses_actions__WEBPACK_IMPORTED_MODULE_4__["ExpensesAddQuery"](this.salary));
        this.idbService
            .getByKey('salary', this.expenseCopy.description)
            .subscribe(function (data) {
            if (!data) {
                _this.idbService.add('salary', {
                    person: _this.expenseCopy.description,
                    amount: _this.expenseCopy.cost,
                    frequency: 1
                });
            }
            else {
                _this.idbService.update('salary', {
                    person: _this.expenseCopy.description,
                    amount: _this.expenseCopy.cost,
                    frequency: data.frequency + 1
                }, data.key);
            }
        });
        this.salary = {
            item: 'Salary',
            description: '',
            cost: '',
            ist_YYYYMMDD: moment().format('YYYY-MM-DD')
        };
        form.reset();
        this.salaryDate = moment();
        this.salary = {};
    };
    ExpensesComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBModalService"] },
        { type: ngx_indexed_db__WEBPACK_IMPORTED_MODULE_9__["NgxIndexedDBService"] },
        { type: _services_expenses_service__WEBPACK_IMPORTED_MODULE_11__["ExpensesService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expenseForm', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ExpensesComponent.prototype, "expenseForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('salaryForm', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ExpensesComponent.prototype, "salaryForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('appPrinter', { static: true }),
        __metadata("design:type", src_app_shared_components_printer_printer_component__WEBPACK_IMPORTED_MODULE_10__["PrinterComponent"])
    ], ExpensesComponent.prototype, "appPrinter", void 0);
    ExpensesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expenses',
            template: __importDefault(__webpack_require__(/*! raw-loader!./expenses.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/expenses/containers/expenses.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./expenses.component.scss */ "./src/app/expenses/containers/expenses.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["MDBModalService"],
            ngx_indexed_db__WEBPACK_IMPORTED_MODULE_9__["NgxIndexedDBService"],
            _services_expenses_service__WEBPACK_IMPORTED_MODULE_11__["ExpensesService"]])
    ], ExpensesComponent);
    return ExpensesComponent;
}());



/***/ }),

/***/ "./src/app/expenses/expenses-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/expenses/expenses-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ExpensesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesRoutingModule", function() { return ExpensesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_expenses_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/expenses.component */ "./src/app/expenses/containers/expenses.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var routes = [{ path: '', component: _containers_expenses_component__WEBPACK_IMPORTED_MODULE_2__["ExpensesComponent"] }];
var ExpensesRoutingModule = /** @class */ (function () {
    function ExpensesRoutingModule() {
    }
    ExpensesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ExpensesRoutingModule);
    return ExpensesRoutingModule;
}());



/***/ }),

/***/ "./src/app/expenses/expenses.module.ts":
/*!*********************************************!*\
  !*** ./src/app/expenses/expenses.module.ts ***!
  \*********************************************/
/*! exports provided: ExpensesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesModule", function() { return ExpensesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _expenses_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expenses-routing.module */ "./src/app/expenses/expenses-routing.module.ts");
/* harmony import */ var _containers_expenses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/expenses.component */ "./src/app/expenses/containers/expenses.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _store_expenses_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/expenses.reducer */ "./src/app/expenses/store/expenses.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_expenses_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/expenses.effects */ "./src/app/expenses/store/expenses.effects.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _indexedDB_indexedDB_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./indexedDB/indexedDB.module */ "./src/app/expenses/indexedDB/indexedDB.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













var ExpensesModule = /** @class */ (function () {
    function ExpensesModule() {
    }
    ExpensesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _expenses_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExpensesRoutingModule"],
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
                _indexedDB_indexedDB_module__WEBPACK_IMPORTED_MODULE_12__["IndexedDBModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["BadgeModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('expenses', _store_expenses_reducer__WEBPACK_IMPORTED_MODULE_6__["ExpensesReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_store_expenses_effects__WEBPACK_IMPORTED_MODULE_9__["ExpensesEffects"]])
            ],
            declarations: [_containers_expenses_component__WEBPACK_IMPORTED_MODULE_3__["ExpensesComponent"]],
            exports: [_containers_expenses_component__WEBPACK_IMPORTED_MODULE_3__["ExpensesComponent"]]
        })
    ], ExpensesModule);
    return ExpensesModule;
}());



/***/ }),

/***/ "./src/app/expenses/services/expenses.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/expenses/services/expenses.service.ts ***!
  \*******************************************************/
/*! exports provided: ExpensesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesService", function() { return ExpensesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
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




var ExpensesService = /** @class */ (function () {
    function ExpensesService(http) {
        this.http = http;
        this.$newExpenseAdded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.newExpenseAdded = this.$newExpenseAdded.asObservable();
    }
    Object.defineProperty(ExpensesService.prototype, "userId", {
        get: function () {
            return 'uid';
        },
        enumerable: true,
        configurable: true
    });
    ExpensesService.prototype.emitNewExpense = function (receipt_number) {
        this.$newExpenseAdded.next(receipt_number);
    };
    ExpensesService.prototype.addExpenses = function (expenses) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "?api=addExpense", __assign({}, expenses));
    };
    ExpensesService.prototype.get = function (request) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "?api=listExpenses", {
            params: {
                'ist_YYYYMMDD': request.payload
            }
        });
    };
    ExpensesService.prototype.update = function (expenses, userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([expenses, userId]);
    };
    ExpensesService.prototype.deleteExpense = function (uuId) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "?api=deleteExpense", {
            'uuid': uuId
        });
    };
    ExpensesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ExpensesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExpensesService);
    return ExpensesService;
}());



/***/ }),

/***/ "./src/app/expenses/store/expenses.actions.ts":
/*!****************************************************!*\
  !*** ./src/app/expenses/store/expenses.actions.ts ***!
  \****************************************************/
/*! exports provided: ExpensesActionTypes, ExpensesQuery, ExpensesLoaded, ExpensesAddQuery, ExpensesEdited, ExpensesDeleted, ExpensesError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesActionTypes", function() { return ExpensesActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesQuery", function() { return ExpensesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesLoaded", function() { return ExpensesLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesAddQuery", function() { return ExpensesAddQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesEdited", function() { return ExpensesEdited; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesDeleted", function() { return ExpensesDeleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesError", function() { return ExpensesError; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ExpensesActionTypes;
(function (ExpensesActionTypes) {
    ExpensesActionTypes["EXPENSES_QUERY"] = "[Expenses] Query";
    ExpensesActionTypes["EXPENSES_LOADED"] = "[Expenses] Fetched";
    ExpensesActionTypes["EXPENSES_ADD_QUERY"] = "[Expenses] Added";
    ExpensesActionTypes["EXPENSES_EDITED"] = "[Expenses] Edited";
    ExpensesActionTypes["EXPENSES_DELETED"] = "[Expenses] Deleted";
    ExpensesActionTypes["EXPENSES_ERROR"] = "[Expenses] Error";
})(ExpensesActionTypes || (ExpensesActionTypes = {}));
var ExpensesQuery = /** @class */ (function () {
    function ExpensesQuery(payload) {
        this.payload = payload;
        this.type = ExpensesActionTypes.EXPENSES_QUERY;
    }
    return ExpensesQuery;
}());

var ExpensesLoaded = /** @class */ (function () {
    function ExpensesLoaded(payload) {
        this.payload = payload;
        this.type = ExpensesActionTypes.EXPENSES_LOADED;
    }
    return ExpensesLoaded;
}());

var ExpensesAddQuery = /** @class */ (function () {
    function ExpensesAddQuery(payload) {
        this.payload = payload;
        this.type = ExpensesActionTypes.EXPENSES_ADD_QUERY;
    }
    return ExpensesAddQuery;
}());

var ExpensesEdited = /** @class */ (function () {
    function ExpensesEdited(payload) {
        this.payload = payload;
        this.type = ExpensesActionTypes.EXPENSES_EDITED;
    }
    return ExpensesEdited;
}());

var ExpensesDeleted = /** @class */ (function () {
    function ExpensesDeleted(payload) {
        this.payload = payload;
        this.type = ExpensesActionTypes.EXPENSES_DELETED;
    }
    return ExpensesDeleted;
}());

var ExpensesError = /** @class */ (function () {
    function ExpensesError(payload) {
        this.payload = payload;
        this.type = ExpensesActionTypes.EXPENSES_ERROR;
    }
    return ExpensesError;
}());



/***/ }),

/***/ "./src/app/expenses/store/expenses.effects.ts":
/*!****************************************************!*\
  !*** ./src/app/expenses/store/expenses.effects.ts ***!
  \****************************************************/
/*! exports provided: ExpensesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesEffects", function() { return ExpensesEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_expenses_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/expenses.service */ "./src/app/expenses/services/expenses.service.ts");
/* harmony import */ var _expenses_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expenses.actions */ "./src/app/expenses/store/expenses.actions.ts");
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
var ExpensesEffects = /** @class */ (function () {
    function ExpensesEffects(expenseService, actions$, expensesService, store) {
        var _this = this;
        this.expenseService = expenseService;
        this.actions$ = actions$;
        this.expensesService = expensesService;
        this.store = store;
        this.query$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_expenses_actions__WEBPACK_IMPORTED_MODULE_3__["ExpensesActionTypes"].EXPENSES_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (payload) { return _this.expensesService.get(payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return (new _expenses_actions__WEBPACK_IMPORTED_MODULE_3__["ExpensesLoaded"]({ expenses: data.expensesList }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _expenses_actions__WEBPACK_IMPORTED_MODULE_3__["ExpensesError"]({ error: error }));
        })); }));
        this.added$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_expenses_actions__WEBPACK_IMPORTED_MODULE_3__["ExpensesActionTypes"].EXPENSES_ADD_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (payload) { return _this.expensesService.addExpenses(payload)
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            _this.expenseService.emitNewExpense(response.receipt_number);
            return (new _expenses_actions__WEBPACK_IMPORTED_MODULE_3__["ExpensesQuery"](moment().format('YYYY-MM-DD')));
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _expenses_actions__WEBPACK_IMPORTED_MODULE_3__["ExpensesError"]({ error: error }));
        })); }));
        this.edit$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_expenses_actions__WEBPACK_IMPORTED_MODULE_3__["ExpensesActionTypes"].EXPENSES_EDITED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], user = _a[1];
            return _this.expensesService.update(payload.customer, user.temple_code)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _expenses_actions__WEBPACK_IMPORTED_MODULE_3__["ExpensesError"]({ error: error }));
            }));
        }));
        this.delete$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_expenses_actions__WEBPACK_IMPORTED_MODULE_3__["ExpensesActionTypes"].EXPENSES_DELETED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_7__["getUser"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0];
            return _this.expensesService.deleteExpense(payload.uuid)
                .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
                return (new _expenses_actions__WEBPACK_IMPORTED_MODULE_3__["ExpensesQuery"](moment().format('YYYY-MM-DD')));
            })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _expenses_actions__WEBPACK_IMPORTED_MODULE_3__["ExpensesError"]({ error: error }));
            }));
        }));
    }
    ExpensesEffects.ctorParameters = function () { return [
        { type: _services_expenses_service__WEBPACK_IMPORTED_MODULE_2__["ExpensesService"] },
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] },
        { type: _services_expenses_service__WEBPACK_IMPORTED_MODULE_2__["ExpensesService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
    ]; };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], ExpensesEffects.prototype, "query$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], ExpensesEffects.prototype, "added$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], ExpensesEffects.prototype, "edit$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], ExpensesEffects.prototype, "delete$", void 0);
    ExpensesEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_expenses_service__WEBPACK_IMPORTED_MODULE_2__["ExpensesService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _services_expenses_service__WEBPACK_IMPORTED_MODULE_2__["ExpensesService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], ExpensesEffects);
    return ExpensesEffects;
}());



/***/ }),

/***/ "./src/app/expenses/store/expenses.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/expenses/store/expenses.reducer.ts ***!
  \****************************************************/
/*! exports provided: ExpensesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesReducer", function() { return ExpensesReducer; });
/* harmony import */ var _expenses_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expenses.state */ "./src/app/expenses/store/expenses.state.ts");
/* harmony import */ var _expenses_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expenses.actions */ "./src/app/expenses/store/expenses.actions.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


function ExpensesReducer(state, action) {
    if (state === void 0) { state = _expenses_state__WEBPACK_IMPORTED_MODULE_0__["ExpensesInitialState"]; }
    switch (action.type) {
        case _expenses_actions__WEBPACK_IMPORTED_MODULE_1__["ExpensesActionTypes"].EXPENSES_QUERY: {
            return Object.assign({}, state, {
                isLoading: true,
            });
        }
        case _expenses_actions__WEBPACK_IMPORTED_MODULE_1__["ExpensesActionTypes"].EXPENSES_ADD_QUERY: {
            return Object.assign({}, state, {
                isLoading: true,
            });
        }
        case _expenses_actions__WEBPACK_IMPORTED_MODULE_1__["ExpensesActionTypes"].EXPENSES_LOADED: {
            return Object.assign({}, state, {
                expenses: action.payload.expenses,
                isLoading: false,
            });
        }
        case _expenses_actions__WEBPACK_IMPORTED_MODULE_1__["ExpensesActionTypes"].EXPENSES_ERROR: {
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

/***/ "./src/app/expenses/store/expenses.selectors.ts":
/*!******************************************************!*\
  !*** ./src/app/expenses/store/expenses.selectors.ts ***!
  \******************************************************/
/*! exports provided: getExpensesState, getExpenses, getIsLoading, getError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExpensesState", function() { return getExpensesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExpenses", function() { return getExpenses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return getIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var getExpensesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('expenses');
var getExpenses = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getExpensesState, function (expenses) { return expenses.expenses; });
var getIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getExpensesState, function (expenses) { return expenses.isLoading; });
var getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getExpensesState, function (expenses) { return expenses.error; });


/***/ }),

/***/ "./src/app/expenses/store/expenses.state.ts":
/*!**************************************************!*\
  !*** ./src/app/expenses/store/expenses.state.ts ***!
  \**************************************************/
/*! exports provided: ExpensesInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensesInitialState", function() { return ExpensesInitialState; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ExpensesInitialState = {
    expenses: [],
    isLoading: true,
    error: null
};


/***/ })

}]);
//# sourceMappingURL=expenses-expenses-module.js.map