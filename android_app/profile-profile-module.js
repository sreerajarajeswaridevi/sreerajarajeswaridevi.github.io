(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/components/main-profile/main-profile.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/components/main-profile/main-profile.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdb-card>\n  <mdb-card-body>\n    <h3 class=\"h2-responsive mb-4\">\n      <strong>Profile data</strong>\n    </h3>\n\n    <!--Body-->\n    <!-- <form [formGroup]=\"updateProfileForm\"> -->\n      <table>\n        <tbody>\n      <tr>\n        <td>\n          <h5 class=\"h5-responsive mr-4 grey-text\">User Name</h5>\n        </td>\n        <td>\n        <blockquote class=\"blockquote bq-success\">{{ user.username }}</blockquote>\n      </td>\n      </tr>\n      <tr>\n        <td>\n          <h5 class=\"h5-responsive mr-4 grey-text\">Email</h5>\n        </td>\n  \n        <td>\n          <blockquote class=\"blockquote bq-success\">{{ user.email }}</blockquote>\n        </td>\n        \n      </tr>\n      <tr>\n        <td>\n          <h5 class=\"h5-responsive mr-4 grey-text\">Role</h5>\n        </td>\n        <td>\n          <blockquote class=\"blockquote bq-success\">{{ user.role }}</blockquote>\n        </td>\n          \n      </tr>\n      <tr>\n        <td>\n          <h5 class=\"h5-responsive mr-4 grey-text\">Temple</h5>\n        </td>\n        <td>\n          <blockquote class=\"blockquote bq-success\">{{ user.temple_name }}<small class=\"ml-2\">({{user.temple_code}})</small></blockquote>\n        </td>\n          \n      </tr>\n    </tbody>\n    </table>\n      <!-- <div class=\"text-right\">\n        <button type=\"button\" mdbBtn color=\"primary\" (click)=\"onProfileUpdate()\">Update profile</button>\n      </div> -->\n    <!-- </form> -->\n  </mdb-card-body>\n</mdb-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/components/profile-user/profile-user.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/components/profile-user/profile-user.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdb-card>\n  <mdb-card-body>\n    <div class=\"text-center\">\n      <div class=\"avatar\" style=\"margin-top: -60px\">\n          <img *ngIf=\"user.photoUrl\" src=\"{{ user.photoUrl }}\" height=\"96\" width=\"96\" class=\"rounded-circle z-depth-0\" alt=\"avatar image\">\n      </div>\n\n      <h3 *ngIf=\"user.displayName\" class=\"mt-4\">{{ user.displayName }}</h3>\n      <h3 *ngIf=\"!user.displayName\" class=\"mt-4\">Anonymous user</h3>\n\n      <a mdbBtn class=\"mt-3\" color=\"primary\" (click)=\"onLogout()\">\n        <i class=\"fa fa-sign-out\"></i>\n        Logout\n      </a>\n    </div>\n  </mdb-card-body>\n</mdb-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/containers/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/containers/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"white px-4 py-2\">\n  <blockquote class=\"text-left  blockquote bq-success col-md-6 col-sm-12\">\n    <h4 class=\"header\">Printer Settings</h4>\n    <p class=\"py-0\" *ngIf=\"user.role === 'manager'\">Change your printing preferences here</p>\n  </blockquote>\n\n  <div class=\"row\">\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n        <blockquote class=\"text-left blockquote bq-success col-md-6 col-sm-12\">\n        </blockquote>\n        <div class=\"btn-group m-2 mt-4 w-100 d-flex\" role=\"group\" aria-label=\"First group\">\n          <span>Printer Page Size: </span> \n          <button mdbBtn type=\"button\" (click)=\"setPageSize('A4')\" [color]=\"pageSize === 'A4' ? 'primary' : 'white'\"\n            class=\"waves-light col-4 col-md-4 col-lg-3 col-xl-2 ml-2\" size=\"sm\" mdbWavesEffect>\n            A4\n          </button>\n          <button mdbBtn type=\"button\" (click)=\"setPageSize('bill')\" [color]=\"pageSize === 'bill' ? 'primary' : 'white'\"\n            class=\"waves-light col-4 col-md-4 col-lg-3 col-xl-2\" size=\"sm\" mdbWavesEffect>\n            Bill (2in)\n          </button>\n        </div>\n      </div>\n      \n    </div>\n    <div class=\"col-md-6 col-sm-12\">\n      <div class=\"btn-group m-2 mt-4 w-100 d-flex\" role=\"group\" aria-label=\"First group\">\n        <span>Print duplicate copy in: </span> \n        <button mdbBtn type=\"button\" (click)=\"setDuplicateCopyPage('same')\" [color]=\"duplicatePage === 'same' ? 'primary' : 'white'\"\n          class=\"waves-light col-4 col-md-4 col-lg-3 col-xl-2 ml-2\" size=\"sm\" mdbWavesEffect>\n          Same Page\n        </button>\n        <button mdbBtn type=\"button\" (click)=\"setDuplicateCopyPage('next')\" [color]=\"duplicatePage === 'next' ? 'primary' : 'white'\"\n          class=\"waves-light col-4 col-md-4 col-lg-3 col-xl-2\" size=\"sm\" mdbWavesEffect>\n          Next Page\n        </button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<ng-container *ngIf=\"user.role === 'manager'\">\n  <app-pooja-list></app-pooja-list>\n  \n  <div class=\"white px-4 py-2\" >\n    <blockquote class=\"text-left  blockquote bq-success\">\n      <h3 class=\"header\">Add or remove Users</h3>\n    </blockquote>\n    <app-users-list [users]=\"users$ | async\" (addUser)=\"openAddUserModal($event)\"\n    (deleteUser)=\"onDeleteUser($event)\"></app-users-list>\n  </div>\n\n</ng-container>\n\n<div class=\"container py-5\">\n  <div class=\"row mx-auto py-5\">\n    <div class=\"col-md-4 mt-3\">\n      <app-profile-user [user]=\"user$ | async\" (logout)=\"logoutUser($event)\"></app-profile-user>\n    </div>\n    <div class=\"col-md-8 mt-3\">\n      <app-main-profile [user]=\"user$ | async\" (profileUpdate)=\"updateProfile($event)\"></app-main-profile>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/profile/components/main-profile/main-profile.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/profile/components/main-profile/main-profile.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("blockquote {\n  word-break: break-all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9BdWRpdC1VSS1Bbmd1bGFyL3NyYy9hcHAvcHJvZmlsZS9jb21wb25lbnRzL21haW4tcHJvZmlsZS9tYWluLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvY29tcG9uZW50cy9tYWluLXByb2ZpbGUvbWFpbi1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29tcG9uZW50cy9tYWluLXByb2ZpbGUvbWFpbi1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYmxvY2txdW90ZSB7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xufSIsImJsb2NrcXVvdGUge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59Il19 */");

/***/ }),

/***/ "./src/app/profile/components/main-profile/main-profile.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/profile/components/main-profile/main-profile.component.ts ***!
  \***************************************************************************/
/*! exports provided: MainProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainProfileComponent", function() { return MainProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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


var MainProfileComponent = /** @class */ (function () {
    function MainProfileComponent() {
        this.profileUpdate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MainProfileComponent.prototype.ngOnInit = function () {
        this.updateProfileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.displayName),
            photoUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.user.photoUrl)
        });
    };
    MainProfileComponent.prototype.onProfileUpdate = function () {
        this.profileUpdate.emit(this.updateProfileForm.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MainProfileComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MainProfileComponent.prototype, "profileUpdate", void 0);
    MainProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./main-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/components/main-profile/main-profile.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./main-profile.component.scss */ "./src/app/profile/components/main-profile/main-profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], MainProfileComponent);
    return MainProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/components/profile-user/profile-user.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/profile/components/profile-user/profile-user.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29tcG9uZW50cy9wcm9maWxlLXVzZXIvcHJvZmlsZS11c2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/components/profile-user/profile-user.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/profile/components/profile-user/profile-user.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileUserComponent", function() { return ProfileUserComponent; });
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

var ProfileUserComponent = /** @class */ (function () {
    function ProfileUserComponent() {
        this.logout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProfileUserComponent.prototype.ngOnInit = function () {
    };
    ProfileUserComponent.prototype.onLogout = function () {
        this.logout.emit(this.user);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileUserComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProfileUserComponent.prototype, "logout", void 0);
    ProfileUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-user',
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/components/profile-user/profile-user.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./profile-user.component.scss */ "./src/app/profile/components/profile-user/profile-user.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileUserComponent);
    return ProfileUserComponent;
}());



/***/ }),

/***/ "./src/app/profile/containers/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/profile/containers/profile.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29udGFpbmVycy9wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/containers/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/profile/containers/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../auth/store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var src_app_admin_store_admin_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin/store/admin.selectors */ "./src/app/admin/store/admin.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _admin_store_admin_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../admin/store/admin.actions */ "./src/app/admin/store/admin.actions.ts");
/* harmony import */ var src_app_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var src_app_shared_components_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/components/user-modal/user-modal.component */ "./src/app/shared/components/user-modal/user-modal.component.ts");
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










var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(store, modalService) {
        var _this = this;
        this.store = store;
        this.modalService = modalService;
        this.pageSize = 'A4';
        this.duplicatePage = 'same';
        this.modalConfig = {
            class: 'modal-dialog-centered'
        };
        this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]).subscribe(function (user) {
            _this.user = user;
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]);
        this.users$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_admin_store_admin_selectors__WEBPACK_IMPORTED_MODULE_4__["getUsersList"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
            if (!users || (users && users.length === 0)) {
                _this.store.dispatch(new _admin_store_admin_actions__WEBPACK_IMPORTED_MODULE_6__["GetUsersList"]());
            }
            return users;
        }));
        if (localStorage.getItem('printerPageSize')) {
            this.pageSize = localStorage.getItem('printerPageSize') + '';
        }
        if (localStorage.getItem('duplicateCopyPage')) {
            this.duplicatePage = localStorage.getItem('duplicateCopyPage') + '';
        }
    };
    ProfileComponent.prototype.updateProfile = function (userData) {
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["UpdateProfile"](userData));
    };
    ProfileComponent.prototype.logoutUser = function (user) {
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LogoutRequested"]({ user: user }));
    };
    ProfileComponent.prototype.openAddUserModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(src_app_shared_components_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_9__["UserModalComponent"], __assign({}, this.modalConfig, { data: {
                heading: 'Add User',
                templeList: [{
                        temple_name: this.user.temple_name,
                        temple_code: this.user.temple_code
                    }]
            } }));
        this.modalRef.content.userData
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function (user) {
            if (user) {
                _this.store.dispatch(new _admin_store_admin_actions__WEBPACK_IMPORTED_MODULE_6__["AddUser"]({
                    user: user
                }));
            }
        });
    };
    ProfileComponent.prototype.openUserDeleteConfirmModal = function (user) {
        var _this = this;
        this.modalRef = this.modalService.show(src_app_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalComponent"], this.modalConfig);
        this.modalRef.content.confirmation
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function (confirmation) {
            if (confirmation) {
                _this.store.dispatch(new _admin_store_admin_actions__WEBPACK_IMPORTED_MODULE_6__["DeleteUser"]({ user: user }));
            }
        });
    };
    ProfileComponent.prototype.onDeleteUser = function (user) {
        this.openUserDeleteConfirmModal(user);
    };
    ProfileComponent.prototype.setPageSize = function (size) {
        this.pageSize = size;
        localStorage.setItem('printerPageSize', size);
    };
    ProfileComponent.prototype.setDuplicateCopyPage = function (page) {
        this.duplicatePage = page;
        localStorage.setItem('duplicateCopyPage', page);
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MDBModalService"] }
    ]; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/containers/profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/containers/profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["MDBModalService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/profile.component */ "./src/app/profile/containers/profile.component.ts");
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
    { path: '', component: _containers_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _containers_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/profile.component */ "./src/app/profile/containers/profile.component.ts");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _components_main_profile_main_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main-profile/main-profile.component */ "./src/app/profile/components/main-profile/main-profile.component.ts");
/* harmony import */ var _components_profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile-user/profile-user.component */ "./src/app/profile/components/profile-user/profile-user.component.ts");
/* harmony import */ var _poojas_poojas_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../poojas/poojas.module */ "./src/app/poojas/poojas.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileRoutingModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["CardsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["InputsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _poojas_poojas_module__WEBPACK_IMPORTED_MODULE_8__["PoojasModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
            ],
            declarations: [_containers_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], _components_main_profile_main_profile_component__WEBPACK_IMPORTED_MODULE_6__["MainProfileComponent"], _components_profile_user_profile_user_component__WEBPACK_IMPORTED_MODULE_7__["ProfileUserComponent"]],
            exports: [_containers_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map