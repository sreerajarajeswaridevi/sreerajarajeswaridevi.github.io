(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["charts-charts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/components/bar-chart/bar-chart.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/components/bar-chart/bar-chart.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"display: block\">\n  <canvas mdbChart [chartType]=\"chartType\" [datasets]=\"dataset\" [labels]=\"labels\" [colors]=\"chartColors\" [options]=\"chartOptions\"\n    [legend]=\"true\">\n  </canvas>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/components/doughnut-chart/doughnut-chart.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/components/doughnut-chart/doughnut-chart.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"display: block\">\n  <canvas mdbChart [chartType]=\"chartType\" [datasets]=\"dataset\" [labels]=\"labels\" [colors]=\"chartColors\" [options]=\"chartOptions\"\n    [legend]=\"true\">\n  </canvas>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/components/line-chart/line-chart.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/components/line-chart/line-chart.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"display: block\">\n  <canvas mdbChart [chartType]=\"chartType\" height=\"500px\" [datasets]=\"dataset\" [labels]=\"labels\" [colors]=\"chartColors\"\n    [options]=\"chartOptions\" [legend]=\"true\">\n  </canvas>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/components/pie-chart/pie-chart.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/components/pie-chart/pie-chart.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"display: block\">\n  <canvas mdbChart [chartType]=\"chartType\" [datasets]=\"dataset\" [labels]=\"labels\" [colors]=\"chartColors\"\n    [options]=\"chartOptions\" [legend]=\"true\">\n  </canvas>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/containers/charts/charts.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/containers/charts/charts.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"white px-4 py-2\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12\">\n      <h3 class=\"pt-2\">Financial Reports</h3>\n      <p class=\"grey-text pt-1\">Visualisation of consolidated accounts data</p>\n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n        <div class=\"btn-group mr-2 mt-4 row w-100\" role=\"group\" aria-label=\"First group\">\n          <button mdbBtn type=\"button\" (click)=\"activeTab = 'day'\" [color]=\"activeTab === 'day' ? 'primary' : 'white'\"\n            class=\"waves-light col-4 col-md-4 col-lg-3 col-xl-2\" size=\"sm\" mdbWavesEffect>\n            day\n          </button>\n          <button mdbBtn type=\"button\" (click)=\"activeTab = 'week'\" [color]=\"activeTab === 'week' ? 'primary' : 'white'\"\n            class=\"waves-light col-4 col-md-4 col-lg-3 col-xl-2\" size=\"sm\" mdbWavesEffect>\n            week\n          </button>\n          <button mdbBtn type=\"button\" (click)=\"activeTab = 'month'\"\n            [color]=\"activeTab === 'month' ? 'primary' : 'white'\" class=\"waves-light col-4 col-md-4 col-lg-3 col-xl-2\" size=\"sm\" mdbWavesEffect>\n            month\n          </button>\n          <button mdbBtn type=\"button\" (click)=\"activeTab = 'year'\" [color]=\"activeTab === 'year' ? 'primary' : 'white'\"\n            class=\"waves-light col-4 col-md-4 col-lg-3 col-xl-2\" size=\"sm\"\n            mdbWavesEffect>\n            year\n          </button>\n          <button mdbBtn type=\"button\" (click)=\"activeTab = 'custom'\"\n            [color]=\"activeTab === 'custom' ? 'primary' : 'white'\" class=\"waves-light col-4 col-md-4 col-lg-3 col-xl-2\" size=\"sm\" mdbWavesEffect>\n            custom\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"isLoading$\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 300px\">\n  <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n\n<div *ngIf=\"!isLoading$\" class=\"charts-container p-5\" [ngSwitch]=\"activeTab\">\n  <div *ngSwitchCase=\"'day'\">\n    <div class=\"row mb-3\">\n      <div class=\"col-md-12 col-lg-6 mb-2\">\n        <mdb-card>\n          <mdb-card-header>\n            Todays Profit/Loss\n            <span *ngIf=\"pageData.todaysData\" class=\"price ml-2\">&#x20B9;{{ getProfitLoss(pageData.todaysData) }}</span>\n          </mdb-card-header>\n          <mdb-card-body *ngIf=\"pageData.todaysData\">\n            <div class=\"pl-4\">\n              <button mdbBtn color=\"primary\" size=\"sm\" (click)=\"swapPoojasData(pageData.todaysData)\">\n                Poojas\n              </button>\n            </div>\n            <app-bar-chart [dataset]=\"pageData.todaysData.currentOverView.dataSet\"\n              [labels]=\"pageData.todaysData.currentOverView.chartLabels\"></app-bar-chart>\n          </mdb-card-body>\n          <div class=\"\n              p-4\n              d-flex\n              flex-column\n              justify-content-center\n              align-items-center\n            \" *ngIf=\"!pageData.todaysData\">\n            <mdb-icon fas icon=\"times-circle\" class=\"float-right grey-text\" alt=\"no data\"></mdb-icon>\n            <p class=\"grey-text\">No Data Today</p>\n          </div>\n        </mdb-card>\n      </div>\n\n      <div class=\"col-md-6 col-lg-6\" *ngIf=\"pageData.todaysData\">\n        <table class=\"white text-center z-depth-1\" mdbTable>\n          <thead class=\"primary-color text-white\">\n            <tr>\n              <td colspan=\"2\">\n                Todays Profit/Loss\n                <span class=\"ml-2\">&#x20B9;{{ getProfitLoss(pageData.todaysData) }}</span>\n              </td>\n            </tr>\n            <tr *ngIf=\"\n                pageData.todaysData.currentOverView ===\n                  pageData.todaysData.overView;\n                else poojasView\n              \">\n              <th>Expense Type</th>\n              <th>Profit/Loss</th>\n            </tr>\n            <ng-template #poojasView>\n              <tr>\n                <th>Poooja Name</th>\n                <th>Total Amount Received</th>\n              </tr>\n            </ng-template>\n          </thead>\n          <tbody>\n            <tr mdbTableCol *ngFor=\"\n                let value of pageData.todaysData.currentOverView.dataSet[0]\n                  .data;\n                let i = index\n              \">\n              <td>{{ pageData.todaysData.currentOverView.chartLabels[i] }}</td>\n              <th scope=\"row\">{{ value }}</th>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n\n  <!-- this weeks data -->\n  <div *ngSwitchCase=\"'week'\">\n    <div class=\"row mb-3\">\n      <div class=\"col-md-12 col-lg-6 mb-2\">\n        <mdb-card>\n          <mdb-card-header>\n            This Weeks Profit/Loss\n            <span class=\"price ml-2\">&#x20B9;{{ getProfitLoss(pageData.thisWeeksData) }}</span>\n          </mdb-card-header>\n          <mdb-card-body>\n            <div class=\"pl-4\">\n              <button mdbBtn color=\"primary\" size=\"sm\" (click)=\"swapPoojasData(pageData.thisWeeksData)\">\n                Poojas\n              </button>\n            </div>\n            <app-bar-chart [dataset]=\"pageData.thisWeeksData.currentOverView.dataSet\"\n              [labels]=\"pageData.thisWeeksData.currentOverView.chartLabels\"></app-bar-chart>\n            <br /><br />\n            <app-bar-chart [dataset]=\"pageData.thisWeeksData.weeklyOverView.dataSet\"\n              [labels]=\"pageData.thisWeeksData.weeklyOverView.chartLabels\"></app-bar-chart>\n          </mdb-card-body>\n        </mdb-card>\n      </div>\n\n      <div class=\"col-md-6 col-lg-6\" *ngIf=\"pageData.thisWeeksData\">\n        <table class=\"white text-center z-depth-1\" mdbTable>\n          <thead class=\"primary-color text-white\">\n            <tr>\n              <td colspan=\"2\">\n                This Weeks Profit/Loss\n                <span class=\"ml-2\">&#x20B9;{{ getProfitLoss(pageData.thisWeeksData) }}</span>\n              </td>\n            </tr>\n            <tr *ngIf=\"\n                pageData.thisWeeksData.currentOverView ===\n                  pageData.thisWeeksData.overView;\n                else poojasView\n              \">\n              <th>Expense Type</th>\n              <th>Profit/Loss</th>\n            </tr>\n            <ng-template #poojasView>\n              <tr>\n                <th>Poooja Name</th>\n                <th>Total Amount Received</th>\n              </tr>\n            </ng-template>\n          </thead>\n          <tbody>\n            <tr mdbTableCol *ngFor=\"\n                let value of pageData.thisWeeksData.currentOverView.dataSet[0]\n                  .data;\n                let i = index\n              \">\n              <td>\n                {{ pageData.thisWeeksData.currentOverView.chartLabels[i] }}\n              </td>\n              <th scope=\"row\">{{ value }}</th>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  <!-- this weeks data ends here-->\n\n  <!-- this Months data -->\n  <div *ngSwitchCase=\"'month'\">\n    <div class=\"row mb-3\">\n      <div class=\"col-md-12 col-lg-6 mb-4\">\n        <mdb-card>\n          <mdb-card-header>\n            This Months Profit/Loss\n            <span class=\"price ml-2\">&#x20B9;{{ getProfitLoss(pageData.thisMonthsData) }}</span>\n          </mdb-card-header>\n          <mdb-card-body>\n            <div class=\"pl-4\">\n              <button mdbBtn color=\"primary\" size=\"sm\" (click)=\"swapPoojasData(pageData.thisMonthsData)\">\n                Poojas\n              </button>\n            </div>\n            <app-bar-chart [dataset]=\"pageData.thisMonthsData.currentOverView.dataSet\"\n              [labels]=\"pageData.thisMonthsData.currentOverView.chartLabels\"></app-bar-chart>\n          </mdb-card-body>\n        </mdb-card>\n      </div>\n\n      <div class=\"col-md-6 col-lg-6\" *ngIf=\"pageData.thisMonthsData\">\n        <table class=\"white text-center z-depth-1\" mdbTable>\n          <thead class=\"primary-color text-white\">\n            <tr>\n              <td colspan=\"2\">\n                This Months Profit/Loss\n                <span class=\"ml-2\">&#x20B9;{{ getProfitLoss(pageData.thisMonthsData) }}</span>\n              </td>\n            </tr>\n            <tr *ngIf=\"\n                pageData.thisMonthsData.currentOverView ===\n                  pageData.thisMonthsData.overView;\n                else poojasView\n              \">\n              <th>Expense Type</th>\n              <th>Profit/Loss</th>\n            </tr>\n            <ng-template #poojasView>\n              <tr>\n                <th>Poooja Name</th>\n                <th>Total Amount Received</th>\n              </tr>\n            </ng-template>\n          </thead>\n          <tbody>\n            <tr mdbTableCol *ngFor=\"\n                let value of pageData.thisMonthsData.currentOverView.dataSet[0]\n                  .data;\n                let i = index\n              \">\n              <td>\n                {{ pageData.thisMonthsData.currentOverView.chartLabels[i] }}\n              </td>\n              <th scope=\"row\">{{ value }}</th>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"col-12\" *ngIf=\"pageData.thisMonthsData\">\n        <mdb-card>\n          <mdb-card-body>\n            <app-line-chart [dataset]=\"pageData.thisMonthsData.monthlyOverView.dataSet\"\n              [labels]=\"pageData.thisMonthsData.monthlyOverView.chartLabels\"></app-line-chart>\n          </mdb-card-body>\n        </mdb-card>\n      </div>\n\n    </div>\n  </div>\n  <!-- this Months data ends here-->\n\n  <!-- \n    <div class=\"col-md-6\">\n      <mdb-card>\n        <mdb-card-body>\n          <app-pie-chart [dataset]=\"barChartDataset\" [labels]=\"barChartLabels\"></app-pie-chart>\n        </mdb-card-body>\n      </mdb-card>\n    </div>\n  </div>\n\n  <div class=\"row mb-3\">\n    <div class=\"col-md-6 mb-3\">\n      <mdb-card>\n        <mdb-card-body>\n          <app-bar-chart [dataset]=\"barChartDataset\" [labels]=\"barChartLabels\"></app-bar-chart>\n        </mdb-card-body>\n      </mdb-card>\n    </div>\n\n    <div class=\"col-md-6 mb-3\">\n      <mdb-card>\n        <mdb-card-body>\n          <app-doughnut-chart [dataset]=\"barChartDataset\" [labels]=\"barChartLabels\"></app-doughnut-chart>\n        </mdb-card-body>\n      </mdb-card>\n    </div>\n  </div> -->\n</div>");

/***/ }),

/***/ "./src/app/charts/charts-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/charts/charts-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ChartsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsRoutingModule", function() { return ChartsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_charts_charts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/charts/charts.component */ "./src/app/charts/containers/charts/charts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var routes = [
    { path: '', component: _containers_charts_charts_component__WEBPACK_IMPORTED_MODULE_2__["ChartsComponent"] }
];
var ChartsRoutingModule = /** @class */ (function () {
    function ChartsRoutingModule() {
    }
    ChartsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ChartsRoutingModule);
    return ChartsRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _containers_charts_charts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/charts/charts.component */ "./src/app/charts/containers/charts/charts.component.ts");
/* harmony import */ var _components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/line-chart/line-chart.component */ "./src/app/charts/components/line-chart/line-chart.component.ts");
/* harmony import */ var _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts-routing.module */ "./src/app/charts/charts-routing.module.ts");
/* harmony import */ var _store_charts_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/charts.reducer */ "./src/app/charts/store/charts.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_charts_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/charts.effects */ "./src/app/charts/store/charts.effects.ts");
/* harmony import */ var _components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/bar-chart/bar-chart.component */ "./src/app/charts/components/bar-chart/bar-chart.component.ts");
/* harmony import */ var _components_doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/doughnut-chart/doughnut-chart.component */ "./src/app/charts/components/doughnut-chart/doughnut-chart.component.ts");
/* harmony import */ var _components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/pie-chart/pie-chart.component */ "./src/app/charts/components/pie-chart/pie-chart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













var ChartsDataModule = /** @class */ (function () {
    function ChartsDataModule() {
    }
    ChartsDataModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["CardsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ChartsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["TableModule"],
                _charts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChartsRoutingModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["IconsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('charts', _store_charts_reducer__WEBPACK_IMPORTED_MODULE_6__["chartsReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_store_charts_effects__WEBPACK_IMPORTED_MODULE_9__["ChartsEffects"]])
            ],
            declarations: [_containers_charts_charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsComponent"], _components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__["LineChartComponent"], _components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_10__["BarChartComponent"], _components_doughnut_chart_doughnut_chart_component__WEBPACK_IMPORTED_MODULE_11__["DoughnutChartComponent"], _components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_12__["PieChartComponent"]],
            exports: [_containers_charts_charts_component__WEBPACK_IMPORTED_MODULE_3__["ChartsComponent"], _components_line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_4__["LineChartComponent"]]
        })
    ], ChartsDataModule);
    return ChartsDataModule;
}());



/***/ }),

/***/ "./src/app/charts/components/bar-chart/bar-chart.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/charts/components/bar-chart/bar-chart.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jb21wb25lbnRzL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */");

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

var BarChartComponent = /** @class */ (function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BarChartComponent.prototype, "dataset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BarChartComponent.prototype, "labels", void 0);
    BarChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-chart',
            template: __importDefault(__webpack_require__(/*! raw-loader!./bar-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/components/bar-chart/bar-chart.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./bar-chart.component.scss */ "./src/app/charts/components/bar-chart/bar-chart.component.scss")).default]
        })
    ], BarChartComponent);
    return BarChartComponent;
}());



/***/ }),

/***/ "./src/app/charts/components/doughnut-chart/doughnut-chart.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/charts/components/doughnut-chart/doughnut-chart.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jb21wb25lbnRzL2RvdWdobnV0LWNoYXJ0L2RvdWdobnV0LWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/components/doughnut-chart/doughnut-chart.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/charts/components/doughnut-chart/doughnut-chart.component.ts ***!
  \******************************************************************************/
/*! exports provided: DoughnutChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoughnutChartComponent", function() { return DoughnutChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var DoughnutChartComponent = /** @class */ (function () {
    function DoughnutChartComponent() {
        this.chartType = 'doughnut';
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
    DoughnutChartComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoughnutChartComponent.prototype, "dataset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DoughnutChartComponent.prototype, "labels", void 0);
    DoughnutChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-doughnut-chart',
            template: __importDefault(__webpack_require__(/*! raw-loader!./doughnut-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/components/doughnut-chart/doughnut-chart.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./doughnut-chart.component.scss */ "./src/app/charts/components/doughnut-chart/doughnut-chart.component.scss")).default]
        })
    ], DoughnutChartComponent);
    return DoughnutChartComponent;
}());



/***/ }),

/***/ "./src/app/charts/components/line-chart/line-chart.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/charts/components/line-chart/line-chart.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jb21wb25lbnRzL2xpbmUtY2hhcnQvbGluZS1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */");

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

var LineChartComponent = /** @class */ (function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LineChartComponent.prototype, "dataset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LineChartComponent.prototype, "labels", void 0);
    LineChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-line-chart',
            template: __importDefault(__webpack_require__(/*! raw-loader!./line-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/components/line-chart/line-chart.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./line-chart.component.scss */ "./src/app/charts/components/line-chart/line-chart.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], LineChartComponent);
    return LineChartComponent;
}());



/***/ }),

/***/ "./src/app/charts/components/pie-chart/pie-chart.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/charts/components/pie-chart/pie-chart.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jb21wb25lbnRzL3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */");

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

var PieChartComponent = /** @class */ (function () {
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "dataset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PieChartComponent.prototype, "labels", void 0);
    PieChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pie-chart',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pie-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/components/pie-chart/pie-chart.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pie-chart.component.scss */ "./src/app/charts/components/pie-chart/pie-chart.component.scss")).default]
        })
    ], PieChartComponent);
    return PieChartComponent;
}());



/***/ }),

/***/ "./src/app/charts/containers/charts/charts.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/charts/containers/charts/charts.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jb250YWluZXJzL2NoYXJ0cy9jaGFydHMuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_charts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/charts.service */ "./src/app/charts/services/charts.service.ts");
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


var moment = __webpack_require__(/*! ../../../../assets/datepicker/moment.js */ "./src/assets/datepicker/moment.js");
var ChartsComponent = /** @class */ (function () {
    function ChartsComponent(cs) {
        this.cs = cs;
        this.activeTab = 'day';
        this.isLoading$ = false;
        this.dataset = [{ data: [], label: '' }];
        this.chartLabels = [];
        this.barChartDataset = [{ data: [], label: '' }];
        this.barChartchartLabels = [];
        this.pageData = {};
        this.todaysDate = moment();
        this.thisWeekStartDate = this.todaysDate.clone().startOf('isoWeek');
        this.thisWeekEndDate = this.todaysDate.clone().endOf('isoWeek');
        this.thisMonthStartDate = this.todaysDate.clone().startOf('month').format('YYYY-MM-DD');
        this.thisMonthEndDate = this.todaysDate.clone().endOf('month').format('YYYY-MM-DD');
        this.thisYearStartDate = this.todaysDate.clone().startOf('year').format('YYYY-MM-DD');
        this.thisYearEndDate = this.todaysDate.clone().endOf('year').format('YYYY-MM-DD');
    }
    ChartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading$ = true;
        // this.lineChartSub = this.store.select(getLineChartData).subscribe( (data: any) => {
        //   if (data.values) {
        //     this.dataset = [{ data: data.values, label: `${data.currencyName} exchange rates (base EUR)`}];
        //     this.chartLabels = data.chartLabels;
        //   } else {
        //     this.getExchangeRates('USD');
        //   }
        // });
        // this.barChartSub = this.store.select(getBarChartData).subscribe( (data: any) => {
        //   if (data.values) {
        //     this.barChartDataset = [{ data: data.values, label: `${data.date} exchange rates (base ${data.base})`}];
        //     this.barChartchartLabels = data.chartLabels;
        //   } else {
        //     this.getLatestExchangeRates();
        //   }
        // });
        this.cs.getReconsiledBook({ startDate: this.thisYearStartDate, endDate: this.thisYearEndDate })
            .subscribe(function (data) {
            var todaysBook = data.book.find(function (book) { return book.date === moment().format('YYYY-MM-DD'); });
            // const monthBook = data.book.map((book: any) => moment(book.date, 'YYYY-MM-DD').isSame(moment(), 'month'));
            // const yearBook = data.book.map((book: any) => moment(book.date, 'YYYY-MM-DD').isSame(moment(), 'year'));
            // [
            _this.pageData.todaysData = _this.getTodaysData(todaysBook);
            _this.pageData.thisWeeksData = _this.getWeekData(data);
            _this.pageData.thisMonthsData = _this.getMonthData(data);
            // this.pageData.thisWeeksData = this.getTodaysData(weekBook); -- Week Data to continue tomorow
            // this.pageData.thisMonthsData,
            // this.pageData.thisYearsData,
            // ] = [
            //   this.getTodaysData(todaysBook)
            // ];
            _this.isLoading$ = false;
        });
    };
    ChartsComponent.prototype.getMonthData = function (data) {
        var _this = this;
        var monthBook = data.book.filter(function (book) { return moment(book.date, 'YYYY-MM-DD').isSame(_this.thisMonthStartDate, 'Month'); });
        if (!monthBook) {
            return;
        }
        var book = {};
        var monthlyOverView = {
            dataSet: [{ data: [], label: 'Profit/Loss Monthly Data' }],
            chartLabels: []
        };
        monthBook.forEach(function (monthEl, index) {
            if (monthEl) {
                if (index === 0) {
                    book = __assign({}, monthEl);
                }
                else {
                    book.poojas = book.poojas.concat(monthEl.poojas);
                    book.expenses = book.expenses.concat(monthEl.expenses);
                    book.donations = book.donations.concat(monthEl.donations);
                }
                var profitLoss = monthEl.poojas.reduce(function (total, item) { return Number(total) + Number(item.pooja_price); }, 0) -
                    monthEl.expenses.reduce(function (total, item) { return Number(total) + Number(item.cost); }, 0) +
                    monthEl.donations.reduce(function (total, item) { return Number(total) + Number(item.amount); }, 0);
                monthlyOverView.dataSet[0].data.push(profitLoss);
                monthlyOverView.chartLabels.push(monthEl.date);
            }
        });
        return __assign({}, this.getReconsolidatedData(book), { monthlyOverView: monthlyOverView });
    };
    ChartsComponent.prototype.getWeekData = function (data) {
        var _this = this;
        var weekBook = data.book.filter(function (book) { return moment(book.date, 'YYYY-MM-DD').isSame(_this.thisWeekStartDate, 'isoWeek'); });
        if (!weekBook) {
            return;
        }
        var book = {};
        var weeklyOverView = {
            dataSet: [{ data: [], label: 'Profit/Loss Weekly Data' }],
            chartLabels: []
        };
        weekBook.forEach(function (weekEl, index) {
            if (weekEl) {
                if (index === 0) {
                    book = __assign({}, weekEl);
                }
                else {
                    book.poojas = book.poojas.concat(weekEl.poojas);
                    book.expenses = book.expenses.concat(weekEl.expenses);
                    book.donations = book.donations.concat(weekEl.donations);
                }
                var profitLoss = weekEl.poojas.reduce(function (total, item) { return Number(total) + Number(item.pooja_price); }, 0) -
                    weekEl.expenses.reduce(function (total, item) { return Number(total) + Number(item.cost); }, 0) +
                    weekEl.donations.reduce(function (total, item) { return Number(total) + Number(item.amount); }, 0);
                weeklyOverView.dataSet[0].data.push(profitLoss);
                weeklyOverView.chartLabels.push(weekEl.date);
            }
        });
        return __assign({}, this.getReconsolidatedData(book), { weeklyOverView: weeklyOverView });
    };
    ChartsComponent.prototype.getTodaysData = function (book) {
        if (!book) {
            return;
        }
        return this.getReconsolidatedData(book);
    };
    ChartsComponent.prototype.getReconsolidatedData = function (book) {
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
                            book.expenses.reduce(function (total, item) { return Number(total) + Number(item.cost); }, 0),
                            book.donations.reduce(function (total, item) { return Number(total) + Number(item.amount); }, 0)],
                        label: 'Total Amount'
                    }],
                chartLabels: ["poojas (" + book.poojas.length + ")", "expenses (" + book.expenses.length + ")", "donations (" + book.donations.length + ")"]
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
    // getExchangeRates(currency: string) {
    //   this.store.dispatch(new fromCharts.LineChartQuery({ currency }));
    // }
    // getLatestExchangeRates() {
    //   this.store.dispatch(new fromCharts.BarChartQuery());
    // }
    ChartsComponent.prototype.getProfitLoss = function (data) {
        if (data.overView.dataSet[0]) {
            var allTransactions = data.overView.dataSet[0].data;
            if (allTransactions) {
                return allTransactions[0] + allTransactions[2] - allTransactions[1]; // poojas + donations - expense
            }
        }
        return '';
    };
    ChartsComponent.prototype.swapPoojasData = function (obj) {
        obj.currentOverView = obj.currentOverView == obj.poojasOverView ? obj.overView : obj.poojasOverView;
    };
    ChartsComponent.prototype.ngOnDestroy = function () {
        if (this.lineChartSub) {
            this.lineChartSub.unsubscribe();
        }
        if (this.barChartSub) {
            this.barChartSub.unsubscribe();
        }
    };
    ChartsComponent.ctorParameters = function () { return [
        { type: _services_charts_service__WEBPACK_IMPORTED_MODULE_1__["ChartsService"] }
    ]; };
    ChartsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-charts',
            template: __importDefault(__webpack_require__(/*! raw-loader!./charts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/containers/charts/charts.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./charts.component.scss */ "./src/app/charts/containers/charts/charts.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_charts_service__WEBPACK_IMPORTED_MODULE_1__["ChartsService"]])
    ], ChartsComponent);
    return ChartsComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
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





var ChartsService = /** @class */ (function () {
    function ChartsService(http) {
        this.http = http;
        this.startDate = '2018-01-01';
        this.endDate = '2018-01-31';
        this.apiHistoryUrl = 'https://api.exchangeratesapi.io/history';
        this.apiLatestUrl = 'https://api.exchangeratesapi.io/latest';
    }
    ChartsService.prototype.getExchangeRates = function (currency) {
        return this.http.get(this.apiHistoryUrl + "?start_at=" + this.startDate + "&end_at=" + this.endDate + "&symbols=" + currency).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res['rates']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (val) {
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ currencyName: currencyName, values: values, labels: labels });
        }));
    };
    ChartsService.prototype.getLatestExchangeRates = function () {
        return this.http.get(this.apiLatestUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
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
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "?api=getReconciledBook", {
            params: {
                'start_date_ist_YYYYMMDD': request.startDate,
                'end_date_ist_YYYYMMDD': request.endDate
            }
        });
    };
    ChartsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ChartsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ChartsService);
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ChartsActionTypes;
(function (ChartsActionTypes) {
    ChartsActionTypes["LINE_CHART_QUERY"] = "[Charts] Line chart query";
    ChartsActionTypes["LINE_CHART_LOADED"] = "[Charts] Line chart loaded";
    ChartsActionTypes["BAR_CHART_QUERY"] = "[Charts] Bar chart query";
    ChartsActionTypes["BAR_CHART_LOADED"] = "[Charts] Bar chart loaded";
    ChartsActionTypes["CHARTS_ERROR"] = "[Charts] Error";
})(ChartsActionTypes || (ChartsActionTypes = {}));
var LineChartQuery = /** @class */ (function () {
    function LineChartQuery(payload) {
        this.payload = payload;
        this.type = ChartsActionTypes.LINE_CHART_QUERY;
    }
    return LineChartQuery;
}());

var BarChartQuery = /** @class */ (function () {
    function BarChartQuery() {
        this.type = ChartsActionTypes.BAR_CHART_QUERY;
    }
    return BarChartQuery;
}());

var LineChartLoaded = /** @class */ (function () {
    function LineChartLoaded(payload) {
        this.payload = payload;
        this.type = ChartsActionTypes.LINE_CHART_LOADED;
    }
    return LineChartLoaded;
}());

var BarChartLoaded = /** @class */ (function () {
    function BarChartLoaded(payload) {
        this.payload = payload;
        this.type = ChartsActionTypes.BAR_CHART_LOADED;
    }
    return BarChartLoaded;
}());

var ChartsError = /** @class */ (function () {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_charts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/charts.service */ "./src/app/charts/services/charts.service.ts");
/* harmony import */ var _store_charts_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../store/charts.actions */ "./src/app/charts/store/charts.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _charts_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./charts.selectors */ "./src/app/charts/store/charts.selectors.ts");
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









var ChartsEffects = /** @class */ (function () {
    function ChartsEffects(actions$, chartsService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.chartsService = chartsService;
        this.store = store;
        this.lineChartQuery$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_charts_actions__WEBPACK_IMPORTED_MODULE_3__["ChartsActionTypes"].LINE_CHART_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_charts_selectors__WEBPACK_IMPORTED_MODULE_7__["getLineChartData"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var payload = _a[0], chartsData = _a[1];
            if (!chartsData.values || (chartsData.currencyName && chartsData.currencyName !== payload.currency)) {
                return _this.chartsService.getExchangeRates(payload.currency)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return new _store_charts_actions__WEBPACK_IMPORTED_MODULE_3__["LineChartLoaded"]({ lineChartData: data }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_charts_actions__WEBPACK_IMPORTED_MODULE_3__["ChartsError"]({ error: error })); }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_charts_actions__WEBPACK_IMPORTED_MODULE_3__["LineChartLoaded"]({ lineChartData: chartsData }));
        }));
        this.barChartQuery$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_charts_actions__WEBPACK_IMPORTED_MODULE_3__["ChartsActionTypes"].BAR_CHART_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_charts_selectors__WEBPACK_IMPORTED_MODULE_7__["getBarChartData"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_a) {
            var chartData = _a[1];
            if (!chartData.values) {
                return _this.chartsService.getLatestExchangeRates()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return new _store_charts_actions__WEBPACK_IMPORTED_MODULE_3__["BarChartLoaded"]({ barChartData: data }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_charts_actions__WEBPACK_IMPORTED_MODULE_3__["ChartsError"]({ error: error })); }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_charts_actions__WEBPACK_IMPORTED_MODULE_3__["BarChartLoaded"]({ barChartData: chartData }));
        }));
    }
    ChartsEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] },
        { type: _services_charts_service__WEBPACK_IMPORTED_MODULE_2__["ChartsService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
    ]; };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], ChartsEffects.prototype, "lineChartQuery$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], ChartsEffects.prototype, "barChartQuery$", void 0);
    ChartsEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _services_charts_service__WEBPACK_IMPORTED_MODULE_2__["ChartsService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], ChartsEffects);
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


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
/*! exports provided: getChartsState, getLineChartData, getBarChartData, getIsLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChartsState", function() { return getChartsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineChartData", function() { return getLineChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBarChartData", function() { return getBarChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return getIsLoading; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var getChartsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('charts');
var getLineChartData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChartsState, function (charts) { return charts.lineChartData; });
var getBarChartData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChartsState, function (charts) { return charts.barChartData; });
var getIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getChartsState, function (charts) { return charts.barChartLoading && charts.lineChartLoading; });


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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var chartsInitialState = {
    lineChartData: {},
    barChartData: {},
    lineChartLoading: false,
    barChartLoading: false,
    error: null
};


/***/ })

}]);
//# sourceMappingURL=charts-charts-module.js.map