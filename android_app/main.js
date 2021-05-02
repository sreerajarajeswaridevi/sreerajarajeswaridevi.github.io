(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/user-detail/user-detail.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/user-detail/user-detail.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdb-card class=\"mb-4\">\r\n  <mdb-card-body class=\"py-4\">\r\n    <div class=\"mb-5 back-button\" (click)=\"closeDetails()\">\r\n      <mdb-icon fas icon=\"arrow-left\" class=\"mr-2\"></mdb-icon>\r\n      <span>Back to user list</span>\r\n    </div>\r\n    <div class=\"d-flex flex-row justify-content-between flex-wrap\">\r\n      <div class=\"d-flex flex-row\">\r\n        <div class=\"mr-4\">\r\n          <img *ngIf=\"user.photoUrl\" src=\"{{ user.photoUrl }}\" height=\"90\" width=\"90\" class=\"rounded-circle z-depth-0\"\r\n            alt=\"avatar image\">\r\n        </div>\r\n\r\n        <div class=\"pt-2\">\r\n          <h4>{{ user.displayName }}</h4>\r\n          <div>\r\n            <span class=\"mr-2\">\r\n            </span>\r\n            <span>\r\n              <mdb-badge *ngIf=\"user.isAdmin\" color=\"purple\">Admin</mdb-badge>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mt-3\">\r\n        <button *ngIf=\"!user.isAdmin\" mdbBtn outline=\"true\" color=\"red\" (click)=\"onAddAdmin()\">Add admin privileges</button>\r\n        <button *ngIf=\"user.isAdmin\" mdbBtn outline=\"true\" color=\"red\" (click)=\"onRemoveAdmin()\">Remove admin\r\n          privileges</button>\r\n      </div>\r\n    </div>\r\n\r\n    <hr class=\"my-5\">\r\n\r\n    <div class=\"d-flex flex-row align-items-center\">\r\n      <h4 class=\"mr-3\">Projects</h4>\r\n      <button mdbBtn color=\"primary\" size=\"sm\" (click)=\"loadProjects()\">Load user projects</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"userProjectsLoading\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 50px\">\r\n      <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <hr class=\"my-5\">\r\n\r\n    <div class=\"d-flex flex-row align-items-center mb-4\">\r\n      <h4 class=\"mr-3\">Customers</h4>\r\n      <button mdbBtn color=\"primary\" size=\"sm\" (click)=\"loadCustomers()\">Load user customers</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"userCustomersLoading\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 50px\">\r\n      <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n\r\n    <app-customers-list *ngIf=\"!userCustomersLoading && customers\" [customers]=\"customers\" (customerDeleted)=\"onCustomerDelete($event)\"></app-customers-list>\r\n  </mdb-card-body>\r\n</mdb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/user/user.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/user/user.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdb-card>\r\n  <mdb-card-header class=\"text-center bg-primary white-text\">\r\n    {{ user?.temple }}\r\n    VKSR Temple\r\n  </mdb-card-header>\r\n  <mdb-card-body class=\"text-center py-2\">\r\n    <div>\r\n      <span class=\"float-left\">\r\n        <mdb-badge *ngIf=\"user.role\" [color]=\"getColor(user.role)\">{{ user.role }}</mdb-badge>\r\n      </span>\r\n      <mdb-icon fas icon=\"trash\" class=\"float-right delete grey-text\" (click)=\"deleteUser()\" alt=\"Delete user\"></mdb-icon>\r\n    </div>\r\n    <div class=\"mt-5\">\r\n      <img *ngIf=\"user.avatar\" src=\"{{ user.avatar }}\" height=\"90\" width=\"90\" class=\"rounded-circle z-depth-0\" alt=\"avatar image\">\r\n    </div>\r\n    <div class=\"mt-3\">\r\n      {{ user.first_name }} {{ user.last_name }}\r\n    </div>\r\n    <p class=\"grey-text small\">{{user.email}}</p>\r\n  </mdb-card-body>\r\n</mdb-card>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/users-list/users-list.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/users-list/users-list.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"users-list d-flex flex-wrap\">\r\n  <div class=\"user\" *ngFor=\"let user of users; trackBy: trackByFn\">\r\n    <app-user [user]=\"user\" (userSelected)=\"onUserSelected($event)\" (addAdmin)=\"onAddAdmin($event)\" (removeUser)=\"onDeleteUser($event)\"></app-user>\r\n  </div>\r\n  <div class=\"user\">\r\n    <mdb-card class=\"flex-wrap py-2 add-card h-100\" (click)=\"onAddUser($event)\">\r\n      <mdb-card-body class=\"text-center my-4 py-4 d-flex flex-column align-items-center justify-content-center\">\r\n        <div class=\"my-4\">\r\n          <mdb-icon fas icon=\"plus\" class=\"float-right mt-1 add fa-lg grey-text\" alt=\"Add user\"></mdb-icon>\r\n        </div>\r\n        <p class=\"grey-text\">Add User</p>\r\n      </mdb-card-body>\r\n    </mdb-card>\r\n  </div>\r\n  \r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/containers/admin/admin.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/containers/admin/admin.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"white p-4\">\r\n  <h3>Admin panel</h3>\r\n  <p class=\"grey-text pt-3\">Change settings for every user in your application</p>\r\n</div>\r\n\r\n<div *ngIf=\"usersListLoading$ | async\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 300px\">\r\n  <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!(usersListLoading$ | async)\" class=\"container-fluid mt-3 pb-5\">\r\n  <app-users-list *ngIf=\"!selectedUser\" [users]=\"users$ | async\" (addUser)=\"openAddUserModal($event)\"\r\n    (deleteUser)=\"onDeleteUser($event)\"></app-users-list>\r\n  \r\n    <!-- <app-user-detail\r\n    *ngIf=\"selectedUser\"\r\n    [user]=\"selectedUser$ | async\"\r\n    [customers]=\"userCustomers$ | async\"\r\n    [userProjectsLoading]=\"userProjectsLoading$ | async\"\r\n    [userCustomersLoading]=\"userCustomersLoading$ | async\"\r\n    (detailsClosed)=\"onDetailsClose()\"\r\n    (projectsLoad)=\"onProjectsLoad()\"\r\n    (customersLoad)=\"onCustomersLoad()\"\r\n    (projectDeleted)=\"onProjectDelete($event)\"\r\n    (customerDeleted)=\"onCustomerDelete($event)\"\r\n    (addAdmin)=\"addAdminPrivileges($event)\"\r\n    (removeAdmin)=\"removeAdminPrivileges($event)\"></app-user-detail> -->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <app-header [user]=\"user$ | async\" [isLoggedIn]=\"isLoggedIn$ | async\" [isLoading]=\"isLoading$ | async\" [isAdmin]=\"isAdmin$ | async\"\r\n    (logout)=\"onLogout($event)\"></app-header>\r\n</header>\r\n\r\n<main>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n<!-- <footer class=\"app-footer\" [ngClass]=\"{'footer-absolute': (isLoggedIn$ | async) || (isLoading$ | async)}\">\r\n  <app-footer></app-footer>\r\n</footer> -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid full-page-container\">\r\n  <div class=\"row h-100 justify-content-center align-items-center\">\r\n    <div class=\"col-lg-4 col-sm-8 animated fadeIn\">\r\n      <!-- Material form login -->\r\n      <mdb-card class=\"z-depth-2\">\r\n\r\n        <div class=\"white text-center py-4\">\r\n          <h5>\r\n            <strong>Log in</strong>\r\n          </h5>\r\n        </div>\r\n\r\n\r\n        <!--Card content-->\r\n        <mdb-card-body class=\"px-lg-5 pt-0\">\r\n          <div *ngIf=\"error$ | async as error\" class=\"alert alert-danger\" role=\"alert\">\r\n            {{ error }}\r\n          </div>\r\n          <!-- Form -->\r\n          <form [formGroup]=\"loginForm\" class=\"text-center\" style=\"color: #757575;\">\r\n\r\n            <!-- Username -->\r\n            <div class=\"md-form\">\r\n              <input mdbValidate [validateSuccess]=\"false\" type=\"email\" id=\"username\" class=\"form-control\" formControlName=\"username\" mdbInput>\r\n              <label for=\"username\">Username</label>\r\n              <mdb-error *ngIf=\"username && username.invalid && (username.dirty || username.touched)\">Username is required</mdb-error>\r\n            </div>\r\n\r\n            <!-- Password -->\r\n            <div class=\"md-form\">\r\n              <input mdbValidate [validateSuccess]=\"false\" type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" mdbInput>\r\n              <label for=\"password\">Password</label>\r\n              <mdb-error *ngIf=\"password && password.invalid && (password.dirty || password.touched)\">Password is required</mdb-error>\r\n            </div>\r\n\r\n            <!-- Sign in button -->\r\n            <button mdbBtn color=\"primary\" block=\"true\" class=\"my-4 waves-effect z-depth-0\"\r\n              mdbWavesEffect type=\"submit\" (click)=\"onLogin()\">Log in</button>\r\n\r\n            <!-- Register -->\r\n            <!-- <p>Not a member?\r\n              <a routerLink=\"/register\">Register</a>\r\n            </p> -->\r\n\r\n            <!-- Social login -->\r\n            <!-- <p>or log in with:</p>\r\n            <a type=\"button\" class=\"mr-4\" (click)=\"onFacebookLogin('facebook')\">\r\n              <mdb-icon fab icon=\"facebook-f\"></mdb-icon>\r\n            </a>\r\n            <a type=\"button\" class=\"mr-4\" (click)=\"onTwitterLogin('twitter')\">\r\n              <mdb-icon fab icon=\"twitter\"></mdb-icon>\r\n            </a>\r\n            <a type=\"button\" (click)=\"onGoogleLogin('google')\">\r\n              <mdb-icon fab icon=\"google-plus-g\"></mdb-icon>\r\n            </a> -->\r\n          </form>\r\n          <!-- Form -->\r\n\r\n        </mdb-card-body>\r\n\r\n      </mdb-card>\r\n      <!-- Material form login -->\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/register/register.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/register/register.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid full-page-container\">\r\n  <div class=\"row h-100 justify-content-center align-items-center\">\r\n    <div class=\"col-lg-4 col-sm-8 animated fadeIn\">\r\n      <!-- Material form login -->\r\n      <mdb-card class=\"z-depth-2\">\r\n\r\n        <div class=\"text-center py-4\">\r\n          <h5>\r\n            <strong>Register</strong>\r\n          </h5>\r\n        </div>\r\n\r\n\r\n        <!--Card content-->\r\n        <mdb-card-body class=\"px-lg-5 pt-0\">\r\n          <div *ngIf=\"error$ | async as error\" class=\"alert alert-danger\" role=\"alert\">\r\n            {{ error }}\r\n          </div>\r\n          <!-- Form -->\r\n          <form [formGroup]=\"registerForm\" class=\"text-center\" style=\"color: #757575;\">\r\n\r\n            <!-- Username -->\r\n            <div class=\"md-form\">\r\n              <input type=\"text\" id=\"username\" class=\"form-control\" formControlName=\"username\" mdbInput>\r\n              <label for=\"username\">Username</label>\r\n            </div>\r\n\r\n            <!-- Username -->\r\n            <div class=\"md-form\">\r\n              <input mdbValidate [validateSuccess]=\"false\" type=\"username\" id=\"username\" class=\"form-control\" formControlName=\"username\" mdbInput>\r\n              <label for=\"username\">Username</label>\r\n              <mdb-error *ngIf=\"username && username.invalid && (username.dirty || username.touched)\">Username is required</mdb-error>\r\n            </div>\r\n\r\n            <!-- Password -->\r\n            <div class=\"md-form\">\r\n              <input mdbValidate [validateSuccess]=\"false\" type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" mdbInput>\r\n              <label for=\"password\">Password</label>\r\n              <mdb-error *ngIf=\"password && password.invalid && password.errors && password.errors.required && (password.dirty || password.touched)\">Password is required</mdb-error>\r\n              <mdb-error *ngIf=\"password && password.invalid && password.errors && password.errors.minlength && (password.dirty || password.touched)\">Password must be at least 6 characters long</mdb-error>\r\n            </div>\r\n\r\n            <!-- Sign in button -->\r\n            <button mdbBtn color=\"primary\" block=\"true\" class=\"my-4 waves-effect z-depth-0\"\r\n              mdbWavesEffect type=\"submit\" (click)=\"onRegister()\">Register</button>\r\n\r\n            <!-- Register -->\r\n            <p>Already have an account?\r\n              <a routerLink=\"/login\">Log In</a>\r\n            </p>\r\n\r\n          </form>\r\n          <!-- Form -->\r\n\r\n        </mdb-card-body>\r\n\r\n      </mdb-card>\r\n      <!-- Material form login -->\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer-copyright text-center text-white py-3 primary-color-dark darken-2\">\r\n  &copy; 2018 Copyright:\r\n  <a class=\"text-white\" href=\"https:/mdbootstrap.com/angular/\">MDBootstrap.com</a>\r\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Navbar-->\r\n<mdb-navbar #navbar SideClass=\"navbar navbar-expand-md navbar-dark blue-gradient font-weight-bold z-depth-1 justify-content-between fixed-top\" [containerInside]=\"false\">\r\n\r\n  <!-- Navbar brand -->\r\n  <mdb-navbar-brand>\r\n      <a class=\"navbar-brand\" routerLink=\"/\">\r\n          <img src=\"https://mdbootstrap.com/img/Marketing/other/logo/logo-mdb-angular-small.png\" height=\"30\" alt=\"\">\r\n      </a>\r\n  </mdb-navbar-brand>\r\n\r\n  <!-- Collapsible content -->\r\n  <links>\r\n\r\n    <!-- Links -->\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li *ngIf=\"isLoggedIn && !isLoading\" class=\"nav-item\">\r\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" mdbWavesEffect>Home<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li *ngIf=\"isLoggedIn && !isLoading\" class=\"nav-item\">\r\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/poojas\" routerLinkActive=\"active\" mdbWavesEffect>Poojas</a>\r\n      </li>\r\n      <li *ngIf=\"isLoggedIn && !isLoading\" class=\"nav-item\">\r\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/expenses\" routerLinkActive=\"active\" mdbWavesEffect>Expenses</a>\r\n      </li>\r\n      <li *ngIf=\"isLoggedIn && !isLoading\" class=\"nav-item\">\r\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/donations\" routerLinkActive=\"active\" mdbWavesEffect>Donations</a>\r\n      </li>\r\n      <li *ngIf=\"isLoggedIn && !isLoading\" class=\"nav-item\">\r\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/profile\" routerLinkActive=\"active\" mdbWavesEffect>Profile</a>\r\n      </li>\r\n      <li *ngIf=\"isLoggedIn && !isLoading && isAdmin\" class=\"nav-item\">\r\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/admin-panel\" routerLinkActive=\"active\" mdbWavesEffect>Admin panel</a>\r\n      </li>\r\n    </ul>\r\n    <!-- Links -->\r\n\r\n    <!-- Search form -->\r\n    <!-- <ul class=\"navbar-nav\" *ngIf=\"!isLoggedIn && !isLoading\">\r\n      <li class=\"nav-item waves-light\">\r\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/login\" mdbWavesEffect>Login</a>\r\n      </li>\r\n      <li class=\"nav-item waves-light\">\r\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/register\" mdbWavesEffect>Register</a>\r\n      </li>\r\n    </ul> -->\r\n    <ul class=\"navbar-nav\" *ngIf=\"isLoggedIn && !isLoading\">\r\n      <li class=\"nav-link waves-light dropdown avatar p-0 avatar-dropdown\" mdbDropdown>\r\n        <a mdbDropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link waves-light\" mdbWavesEffect>\r\n          <img *ngIf=\"user.photoUrl\" src=\"{{ user.photoUrl }}\" height=\"35\" width=\"35\" class=\"rounded-circle z-depth-0\" alt=\"avatar image\">\r\n        </a>\r\n          <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown-primary\" role=\"menu\">\r\n              <div *ngIf=\"user.displayName\" class=\"text-center py-2 px-2\">{{ user.displayName }}</div>\r\n              <div *ngIf=\"!user.displayName\" class=\"text-center py-2 px-2\">Anonymous user</div>\r\n              <div class=\"divider dropdown-divider\"></div>\r\n              <a class=\"dropdown-item text-center waves-light\" mdbWavesEffect (click)=\"onLogout(); navbar.hide()\">Logout</a>\r\n          </div>\r\n      </li>\r\n      <li class=\"nav-item waves-light logout-button\">\r\n        <a class=\"nav-link waves-light\" mdbWavesEffect (click)=\"onLogout(); navbar.hide()\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </links>\r\n  <!-- Collapsible content -->\r\n\r\n</mdb-navbar>\r\n<!--/.Navbar-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/home/home.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/home/home.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"document-body\">\r\n    <app-login *ngIf=\"!(isLoggedIn$ | async)\"></app-login>\r\n    <app-dashboard *ngIf=\"(isLoggedIn$ | async)\"></app-dashboard>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/main/main.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/main/main.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container py-5 pages\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 col-sm-6\">\r\n      <mdb-card class=\"animated fadeIn mb-3\" borderColor=\"border-warning\">\r\n        <a routerLink=\"/poojas\" mdbBtn gradient=\"purple\">Poojas</a>\r\n      </mdb-card>\r\n    </div>\r\n\r\n    <div class=\"col-lg-6 col-sm-6\">\r\n      <mdb-card class=\"animated fadeIn mb-3\" borderColor=\"border-warning\">\r\n        <a routerLink=\"/expenses\" mdbBtn gradient=\"blue\">Expenses</a>\r\n      </mdb-card>\r\n    </div>\r\n  <!-- </div> -->\r\n  <!-- <div class=\"row\"> -->\r\n\r\n    <div class=\"col-lg-6 col-sm-6\">\r\n      <mdb-card class=\"animated fadeIn mb-3\" borderColor=\"border-warning\">\r\n        <a routerLink=\"/donations\" mdbBtn gradient=\"aqua\">Donations</a>\r\n      </mdb-card>\r\n    </div>\r\n\r\n    <div class=\"col-lg-6 col-sm-6\">\r\n      <mdb-card class=\"animated fadeIn mb-3\" borderColor=\"border-warning\">\r\n        <a routerLink=\"/profile\" mdbBtn gradient=\"purple\">Profile</a>\r\n      </mdb-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/page-not-found/page-not-found.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/page-not-found/page-not-found.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row \" >\r\n    <div class=\"col-md-8\">\r\n      <img src=\"https://mdbootstrap.com/img/Marketing/other/logo/logo-mdb-angular-small.png\" alt=\"Error 404\" class=\"img-fluid\">\r\n      <h2 class=\"h2-responsive mt-3 mb-2\">404. That's an error.</h2>\r\n      <h4>The requested URL was not found on this server.</h4>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <img src=\"https://mdbootstrap.com/img/Others/grafika404-bf.png\" alt=\"Error 404\" class=\"img-fluid\">\r\n    </div>\r\n  </div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/split-body/split-body.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/split-body/split-body.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid split-body\" *ngIf=\"!isLoading; else spinner\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 left-section\">\r\n            <ng-content select=\".left-section\"></ng-content>\r\n        </div>\r\n        <div class=\"col-md-4 right-section\">\r\n            <ng-content select=\".right-section\"></ng-content>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<ng-template #spinner>\r\n    <div class=\"container-fluid pt-5 pb-5\">\r\n        <div class=\"pt-3 pb-5\">\r\n            <div class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 200px\">\r\n                <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n                    <span class=\"sr-only\">Loading...</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm-modal/confirm-modal.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm-modal/confirm-modal.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">×</span>\r\n    </button>\r\n    <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Delete</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Are you sure you want to delete this item?</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" mdbBtn color=\"white\" class=\"black-text waves-light\" aria-label=\"Close\" (click)=\"modalRef.hide()\"\r\n      mdbWavesEffect>Cancel</button>\r\n    <button type=\"button\" mdbBtn color=\"red\" class=\"waves-light\" mdbWavesEffect (click)=\"onDelete()\">Delete</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/customers-list/customers-list.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/customers-list/customers-list.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"z-depth-1\">\r\n  <table class=\"table table-striped table-responsive-md btn-table\" mdbTable borderless=\"true\">\r\n    <thead style=\"background-color: transparent\">\r\n      <tr>\r\n        <th>Id</th>\r\n        <th>Name</th>\r\n        <th>Description</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr *ngFor=\"let customer of customers; trackBy: trackByFn\">\r\n        <th scope=\"row\">{{ customer.id }}</th>\r\n        <td>{{ customer.name }}</td>\r\n        <td>{{ customer.description }}</td>\r\n        <td>\r\n          <a (click)=\"onEdit(customer)\" class=\"mr-2\"><mdb-icon fas icon=\"edit\"></mdb-icon></a>\r\n          <a (click)=\"onDelete(customer)\"><mdb-icon fas icon=\"trash\"></mdb-icon></a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/customers-modal/customers-modal.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/customers-modal/customers-modal.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">×</span>\r\n    </button>\r\n    <h4 class=\"modal-title w-100\" id=\"myModalLabel\">{{ heading }}</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form #customerForm=\"ngForm\">\r\n      <div class=\"md-form\">\r\n        <input type=\"text\" id=\"id\" name=\"id\" class=\"form-control\" [(ngModel)]=\"customer.id\" mdbInput mdbValidate [validateSuccess]=\"false\" #id=\"ngModel\" required>\r\n        <label for=\"id\">Id</label>\r\n        <mdb-error *ngIf=\"id && id.invalid && (id.dirty || id.touched)\">Id is required</mdb-error>\r\n      </div>\r\n\r\n      <div class=\"md-form\">\r\n        <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [(ngModel)]=\"customer.name\" mdbInput mdbValidate [validateSuccess]=\"false\" #name=\"ngModel\" required>\r\n        <label for=\"name\">Name</label>\r\n        <mdb-error *ngIf=\"name && name.invalid && (name.dirty || name.touched)\">Name is required</mdb-error>\r\n      </div>\r\n\r\n      <div class=\"md-form\">\r\n        <textarea type=\"text\" id=\"description\" name=\"description\" class=\"md-textarea form-control\" [(ngModel)]=\"customer.description\" mdbInput mdbValidate [validateSuccess]=\"false\" #description=\"ngModel\" required></textarea>\r\n        <label for=\"description\">Description</label>\r\n        <mdb-error *ngIf=\"description && description.invalid && (description.dirty || description.touched)\">Description is required</mdb-error>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" mdbBtn color=\"white\" class=\"black-text waves-light\" aria-label=\"Close\" (click)=\"modalRef.hide()\"\r\n      mdbWavesEffect>Close</button>\r\n    <button type=\"button\" mdbBtn color=\"red\" class=\"relative waves-light\" mdbWavesEffect (click)=\"onSave()\">Save</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/poojas-modal/poojas-modal.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/poojas-modal/poojas-modal.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">×</span>\r\n    </button>\r\n    <div class=\"d-flex flex-column\">\r\n      <h3 class=\"modal-title w-100\" id=\"myModalLabel\">{{ heading }}</h3>\r\n      <span class=\"price\">&#x20B9; {{ price }}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div class=\"left-section\">\r\n      <form #poojasForm=\"ngForm\">\r\n        <div class=\"md-form\">\r\n          <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [(ngModel)]=\"pooja.name\" mdbInput mdbValidate\r\n            [validateSuccess]=\"false\" #name=\"ngModel\" required>\r\n          <label for=\"name\">Name</label>\r\n          <mdb-error *ngIf=\"name && name.invalid && (name.dirty || name.touched)\">Name is required</mdb-error>\r\n        </div>\r\n\r\n        <div class=\"btn-toolbar star-container\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\r\n          <div class=\"md-form hidden\">\r\n            <input type=\"text\" id=\"star\" name=\"star\" class=\"form-control\" [(ngModel)]=\"pooja.star\" mdbInput mdbValidate\r\n              [validateSuccess]=\"false\" #star=\"ngModel\" required>\r\n            <label for=\"star\">Star</label>\r\n            <mdb-error *ngIf=\"star && star.invalid && (star.dirty || star.touched)\">Star is required</mdb-error>\r\n          </div>\r\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\r\n              <button (click)=\"selectStar(star)\"\r\n              *ngFor=\"let star of starSigns\" mdbBtn type=\"button\" color=\"grey\" [outline]=\"star !== pooja.star\" [class.selected]=\"star === pooja.star\"\r\n               mdbWavesEffect>{{star}}</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n        <div class=\"md-form\">\r\n          <textarea type=\"text\" id=\"address\" name=\"address\" class=\"md-textarea form-control\"\r\n            [(ngModel)]=\"response.address\" mdbInput mdbValidate [validateSuccess]=\"false\"></textarea>\r\n          <label for=\"address\">Address (Optional)</label>\r\n        </div>\r\n  \r\n      \r\n    </div>\r\n    <div class=\"right-section\">\r\n      <mdb-card class=\"text-center\">\r\n        <mdb-card-header>\r\n          <div class=\"md-form phone\">\r\n            <input type=\"number\" id=\"phone\" name=\"phone\" class=\"form-control\" [(ngModel)]=\"response.phoneNumber\" mdbInput mdbValidate\r\n              [validateSuccess]=\"false\">\r\n            <label for=\"phone\">Phone Number(Optional)</label>\r\n          </div>\r\n        </mdb-card-header>\r\n        <mdb-card-body>\r\n          <table mdbTable small=\"true\" striped=\"true\">\r\n            <tbody>\r\n              <tr *ngFor=\"let item of response.persons\">\r\n                <th scope=\"row\">{{ item.name }}</th>\r\n                <td>{{ item.star }}</td>\r\n                <td>\r\n                  <mdb-icon fas icon=\"times\" class=\"float-right delete red-text\" (click)=\"deletePooja(item)\" alt=\"Delete\"></mdb-icon>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"p-4 d-flex flex-column justify-content-center align-items-center\" *ngIf=\"response.persons.length === 0\">\r\n            <mdb-icon fas icon=\"times-circle\" class=\"float-right grey-text\" alt=\"no data\"></mdb-icon>\r\n              <p class=\"grey-text\">No data added</p>\r\n          </div>\r\n        </mdb-card-body>\r\n        <mdb-card-footer *ngIf=\"response.persons.length\">\r\n          <span>Total Price: </span> <span class=\"price\">&#x20B9; {{response.totalPrice}}</span>\r\n        </mdb-card-footer>\r\n      </mdb-card>\r\n    </div>\r\n    \r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" mdbBtn class=\"waves-light\" color=\"secondary\" aria-label=\"Close\" (click)=\"addPerson()\"\r\n      mdbWavesEffect [disabled]=\"poojasForm?.invalid\">Add Person</button>\r\n\r\n      <div>\r\n        <button type=\"button\" mdbBtn class=\"waves-light\" aria-label=\"Close\" (click)=\"modalRef.hide()\"\r\n          mdbWavesEffect>Close</button>\r\n        <button type=\"button\" mdbBtn color=\"primary\" [disabled]=\"response.persons.length === 0 \" class=\"relative waves-light\" mdbWavesEffect (click)=\"onSave()\">Save\r\n          changes</button>\r\n\r\n      </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/right-card/right-card.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/right-card/right-card.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card text-center mt-1 mb-2\">\r\n    <ng-content select=\".card-header\"></ng-content>\r\n    <div class=\"card-body\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <div class=\"card-footer text-muted\" *ngIf=\"footer\">{{ footer }}</div>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/user-modal/user-modal.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/user-modal/user-modal.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">×</span>\r\n    </button>\r\n    <h4 class=\"modal-title w-100\" id=\"myModalLabel\">{{ heading }}</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form #userForm=\"ngForm\">\r\n\r\n      <div class=\"md-form\">\r\n        <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" [(ngModel)]=\"user.username\" mdbInput mdbValidate [validateSuccess]=\"false\" #username=\"ngModel\" required>\r\n        <label for=\"username\">Username</label>\r\n        <mdb-error *ngIf=\"username && username.invalid && (username.dirty || username.touched)\">username is required</mdb-error>\r\n      </div>\r\n\r\n      <div class=\"md-form\">\r\n        <input type=\"text\" id=\"password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" mdbInput mdbValidate [validateSuccess]=\"false\" #password=\"ngModel\" required>\r\n        <label for=\"password\">password</label>\r\n        <mdb-error *ngIf=\"password && password.invalid && (password.dirty || password.touched)\">password is required</mdb-error>\r\n      </div>\r\n\r\n      <div class=\"md-form\">\r\n        <input type=\"email\" id=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" name=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" mdbInput mdbValidate [validateSuccess]=\"false\" #email=\"ngModel\" required>\r\n        <label for=\"email\">Email</label>\r\n        <mdb-error *ngIf=\"email && email.invalid && (email.dirty || email.touched)\">Email is required</mdb-error>\r\n      </div>\r\n\r\n      <div class=\"md-form\">\r\n        <input type=\"text\" id=\"temple\" name=\"temple\" class=\"form-control\" [(ngModel)]=\"user.temple\" mdbInput mdbValidate [validateSuccess]=\"false\" #temple=\"ngModel\" required>\r\n        <label for=\"temple\">Temple</label>\r\n        <mdb-error *ngIf=\"temple && temple.invalid && (temple.dirty || temple.touched)\">Temple is required</mdb-error>\r\n      </div>\r\n\r\n      <label for=\"role\">Role</label>\r\n      <div class=\"md-form mt-0\">\r\n        <select class=\"browser-default custom-select form-control pl-1\" type=\"select\" id=\"role\" name=\"role\" [(ngModel)]=\"user.role\" mdbSelect mdbValidate [validateSuccess]=\"false\" #role=\"ngModel\" required>\r\n          <option value=\"\" disabled selected hidden>Select user role</option>\r\n          <option value=\"'admin'\">admin</option>\r\n          <option value=\"'manager'\">manager</option>\r\n          <option value=\"'user'\">user</option>\r\n        </select>\r\n        <mdb-error *ngIf=\"role && role.invalid && (role.dirty || role.touched)\">role is required</mdb-error>\r\n    </div>\r\n\r\n\r\n\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" mdbBtn color=\"white\" class=\"black-text waves-light\" aria-label=\"Close\" (click)=\"modalRef.hide()\"\r\n      mdbWavesEffect>Close</button>\r\n    <button type=\"button\" mdbBtn color=\"primary\" class=\"relative waves-light\" mdbWavesEffect (click)=\"onSave()\">Save</button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./charts/charts.module": [
		"./src/app/charts/charts.module.ts",
		"charts-charts-module"
	],
	"./customers/customers.module": [
		"./src/app/customers/customers.module.ts",
		"customers-customers-module"
	],
	"./donations/donations.module": [
		"./src/app/donations/donations.module.ts",
		"donations-donations-module"
	],
	"./expenses/expenses.module": [
		"./src/app/expenses/expenses.module.ts",
		"expenses-expenses-module"
	],
	"./poojas/poojas.module": [
		"./src/app/poojas/poojas.module.ts",
		"poojas-poojas-module"
	],
	"./profile/profile.module": [
		"./src/app/profile/profile.module.ts",
		"profile-profile-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/admin/admin.component */ "./src/app/admin/containers/admin/admin.component.ts");
/* harmony import */ var _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users-list/users-list.component */ "./src/app/admin/components/users-list/users-list.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/admin/components/user/user.component.ts");
/* harmony import */ var _store_admin_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/admin.reducer */ "./src/app/admin/store/admin.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_admin_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/admin.effects */ "./src/app/admin/store/admin.effects.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user-detail/user-detail.component */ "./src/app/admin/components/user-detail/user-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__["UsersListComponent"], _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"], _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__["UserDetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["CollapseModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["CardsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["BadgeModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["IconsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('admin', _store_admin_reducer__WEBPACK_IMPORTED_MODULE_6__["adminReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_store_admin_effects__WEBPACK_IMPORTED_MODULE_9__["AdminEffects"]])
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/components/user-detail/user-detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/user-detail/user-detail.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-button {\n  cursor: pointer;\n  font-size: 1.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy91c2VyLWRldGFpbC9DOlxcZ2l0IGNvZGVcXEF1ZGl0LVVJLUFuZ3VsYXIvc3JjXFxhcHBcXGFkbWluXFxjb21wb25lbnRzXFx1c2VyLWRldGFpbFxcdXNlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdXNlci1kZXRhaWwvdXNlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFjay1idXR0b24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxufSIsIi5iYWNrLWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/admin/components/user-detail/user-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/user-detail/user-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
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

var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent() {
        this.detailsClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectsLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.customersLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.customerDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    UserDetailComponent.prototype.closeDetails = function () {
        this.detailsClosed.emit();
    };
    UserDetailComponent.prototype.loadProjects = function () {
        this.projectsLoad.emit();
    };
    UserDetailComponent.prototype.loadCustomers = function () {
        this.customersLoad.emit();
    };
    UserDetailComponent.prototype.onProjectDelete = function () {
    };
    UserDetailComponent.prototype.onCustomerDelete = function (customer) {
        this.customerDeleted.emit(customer);
    };
    UserDetailComponent.prototype.onAddAdmin = function () {
        this.addAdmin.emit(this.user);
    };
    UserDetailComponent.prototype.onRemoveAdmin = function () {
        this.removeAdmin.emit(this.user);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UserDetailComponent.prototype, "customers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UserDetailComponent.prototype, "userProjectsLoading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UserDetailComponent.prototype, "userCustomersLoading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "detailsClosed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "projectsLoad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "customersLoad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "customerDeleted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "addAdmin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "removeAdmin", void 0);
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/user-detail/user-detail.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./user-detail.component.scss */ "./src/app/admin/components/user-detail/user-detail.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/user/user.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/user/user.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".delete {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy91c2VyL0M6XFxnaXQgY29kZVxcQXVkaXQtVUktQW5ndWxhci9zcmNcXGFwcFxcYWRtaW5cXGNvbXBvbmVudHNcXHVzZXJcXHVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVsZXRlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSIsIi5kZWxldGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin/components/user/user.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/components/user/user.component.ts ***!
  \*********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
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

var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.userSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.selectUser = function () {
        this.userSelected.emit(this.user);
    };
    UserComponent.prototype.addAdminPrivileges = function () {
        this.addAdmin.emit(this.user);
    };
    UserComponent.prototype.removeAdminPrivileges = function () {
        this.removeAdmin.emit(this.user);
    };
    UserComponent.prototype.deleteUser = function () {
        this.removeUser.emit(this.user);
    };
    UserComponent.prototype.getColor = function (role) {
        switch (role) {
            case 'admin':
                return 'red';
            case 'manager':
                return 'orange';
            default:
                return 'blue';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "userSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "addAdmin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "removeAdmin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "removeUser", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/user/user.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./user.component.scss */ "./src/app/admin/components/user/user.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/users-list/users-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/users-list/users-list.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".users-list {\n  box-sizing: border-box;\n  justify-content: center;\n}\n\n.user {\n  width: 80%;\n  margin: 1rem;\n}\n\n.user .add-card:hover {\n  background-color: whitesmoke;\n  cursor: pointer;\n}\n\n@media (min-width: 768px) {\n  .user {\n    width: calc(50% - 2rem);\n  }\n\n  .users-list {\n    justify-content: normal;\n  }\n}\n\n@media (min-width: 992px) {\n  .user {\n    width: calc(33.3333% - 2rem);\n  }\n}\n\n@media (min-width: 1200px) {\n  .user {\n    width: calc(25% - 3rem);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy91c2Vycy1saXN0L0M6XFxnaXQgY29kZVxcQXVkaXQtVUktQW5ndWxhci9zcmNcXGFwcFxcYWRtaW5cXGNvbXBvbmVudHNcXHVzZXJzLWxpc3RcXHVzZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFSTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtBQ0FOOztBREtBO0VBQ0U7SUFDSSx1QkFBQTtFQ0ZKOztFREtBO0lBQ0ksdUJBQUE7RUNGSjtBQUNGOztBREtBO0VBQ0U7SUFDSSw0QkFBQTtFQ0hKO0FBQ0Y7O0FETUE7RUFDRTtJQUNJLHVCQUFBO0VDSko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJzLWxpc3Qge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi51c2VyIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMXJlbTtcclxuXHJcbiAgLmFkZC1jYXJkIHtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAudXNlciB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDJyZW0pO1xyXG4gIH1cclxuXHJcbiAgLnVzZXJzLWxpc3Qge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC51c2VyIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMzMuMzMzMyUgLSAycmVtKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAudXNlciB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDI1JSAtIDNyZW0pO1xyXG4gIH1cclxufSIsIi51c2Vycy1saXN0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi51c2VyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtO1xufVxuLnVzZXIgLmFkZC1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnVzZXIge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDJyZW0pO1xuICB9XG5cbiAgLnVzZXJzLWxpc3Qge1xuICAgIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnVzZXIge1xuICAgIHdpZHRoOiBjYWxjKDMzLjMzMzMlIC0gMnJlbSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnVzZXIge1xuICAgIHdpZHRoOiBjYWxjKDI1JSAtIDNyZW0pO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/admin/components/users-list/users-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/users-list/users-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
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

var UsersListComponent = /** @class */ (function () {
    function UsersListComponent() {
        this.userSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UsersListComponent.prototype.ngOnInit = function () {
    };
    UsersListComponent.prototype.onUserSelected = function (user) {
        this.userSelected.emit(user);
    };
    UsersListComponent.prototype.onAddUser = function (event) {
        this.addUser.emit(event);
    };
    UsersListComponent.prototype.onDeleteUser = function (user) {
        this.deleteUser.emit(user);
    };
    UsersListComponent.prototype.trackByFn = function (index) {
        return index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UsersListComponent.prototype, "users", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UsersListComponent.prototype, "userSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UsersListComponent.prototype, "addUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UsersListComponent.prototype, "deleteUser", void 0);
    UsersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./users-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/users-list/users-list.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./users-list.component.scss */ "./src/app/admin/components/users-list/users-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/admin/containers/admin/admin.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/containers/admin/admin.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbnRhaW5lcnMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/containers/admin/admin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/containers/admin/admin.component.ts ***!
  \***********************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/admin.actions */ "./src/app/admin/store/admin.actions.ts");
/* harmony import */ var _store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/admin.selectors */ "./src/app/admin/store/admin.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var src_app_shared_components_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/user-modal/user-modal.component */ "./src/app/shared/components/user-modal/user-modal.component.ts");
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








var AdminComponent = /** @class */ (function () {
    function AdminComponent(store, modalService) {
        this.store = store;
        this.modalService = modalService;
        this.modalConfig = {
            class: 'modal-dialog-centered'
        };
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__["getUsersList"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (users) {
            if (!users || (users && users.length === 0)) {
                _this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["GetUsersList"]());
            }
            return users;
        }));
        this.usersListLoading$ = this.store.select(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__["getUsersListLoading"]);
        this.userProjectsLoading$ = this.store.select(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__["getUserProjectsLoading"]);
        this.userCustomersLoading$ = this.store.select(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__["getUserCustomersLoading"]);
    };
    AdminComponent.prototype.onProjectsLoad = function () {
        this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["GetUserProjects"]({ uid: this.uid }));
    };
    AdminComponent.prototype.onCustomersLoad = function () {
        this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["GetUserCustomers"]({ uid: this.uid }));
    };
    AdminComponent.prototype.onDetailsClose = function () {
        this.selectedUser = null;
    };
    AdminComponent.prototype.openProjectConfirmModal = function (project) {
        var _this = this;
        this.modalRef = this.modalService.show(_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], this.modalConfig);
        this.modalRef.content.confirmation
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function (confirmation) {
            if (confirmation) {
                _this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteUserProject"]({
                    userId: _this.selectedUser.key,
                    projectId: project.key
                }));
            }
        });
    };
    AdminComponent.prototype.openCustomerConfirmModal = function (customer) {
        var _this = this;
        this.modalRef = this.modalService.show(_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], this.modalConfig);
        this.modalRef.content.confirmation
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function (confirmation) {
            if (confirmation) {
                _this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteUserCustomer"]({
                    userId: _this.selectedUser.key,
                    customerId: customer.key
                }));
            }
        });
    };
    AdminComponent.prototype.openAddUserModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(src_app_shared_components_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_7__["UserModalComponent"], __assign({}, this.modalConfig, { data: {
                heading: 'Add User'
            } }));
        this.modalRef.content.userData
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function (user) {
            if (user) {
                _this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AddUser"]({
                    user: user
                }));
            }
        });
    };
    AdminComponent.prototype.openUserDeleteConfirmModal = function (user) {
        var _this = this;
        this.modalRef = this.modalService.show(_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], this.modalConfig);
        this.modalRef.content.confirmation
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function (confirmation) {
            if (confirmation) {
                _this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteUser"]({ user: user }));
            }
        });
    };
    AdminComponent.prototype.onDeleteUser = function (user) {
        console.log('user', user);
        this.openUserDeleteConfirmModal(user);
    };
    AdminComponent.prototype.onCustomerDelete = function (customer) {
        this.openCustomerConfirmModal(customer);
    };
    AdminComponent.prototype.onProjectDelete = function (project) {
        this.openProjectConfirmModal(project);
    };
    AdminComponent.prototype.removeAdminPrivileges = function (user) {
        this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveAdminPrivileges"]({ userId: user.key }));
    };
    AdminComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBModalService"] }
    ]; };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __importDefault(__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/containers/admin/admin.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/containers/admin/admin.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBModalService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/guard/admin.guard.ts":
/*!********************************************!*\
  !*** ./src/app/admin/guard/admin.guard.ts ***!
  \********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/services/auth.service */ "./src/app/auth/services/auth.service.ts");
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





// import { AdminService } from '../services/admin.service';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { take, switchMap, map, catchError } from 'rxjs/operators';
var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        var _this = this;
        return this.authService.checkUserRole()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (isAdmin) {
            if (isAdmin) {
                return true;
            }
            else {
                _this.router.navigateByUrl('login');
                return false;
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            _this.router.navigateByUrl('');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }));
    };
    AdminGuard.ctorParameters = function () { return [
        { type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/admin/services/admin.service.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/services/admin.service.ts ***!
  \*************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
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


// import { AngularFireDatabase } from '@angular/fire/database';


var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        this.selectedUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.selectedUser$ = this.selectedUser.asObservable();
    }
    AdminService.prototype.getUsersList = function () {
        // original users list api call goes here
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users?page=2");
    };
    AdminService.prototype.getUserProjects = function (uid) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(uid);
    };
    AdminService.prototype.getUserCustomers = function (uid) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(uid);
    };
    AdminService.prototype.checkAdminRole = function (uid) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(uid);
    };
    AdminService.prototype.deleteUserProject = function (uid, projectId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([uid, projectId]);
    };
    AdminService.prototype.deleteUserCustomer = function (uid, customerId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([uid, customerId]);
    };
    AdminService.prototype.deleteUser = function (user) {
        console.log('deleted', user);
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/users/2");
    };
    AdminService.prototype.addAdminPrivileges = function (uid) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(uid);
    };
    AdminService.prototype.removeAdminPrivileges = function (uid) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(uid);
    };
    AdminService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/admin/store/admin.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/store/admin.actions.ts ***!
  \**********************************************/
/*! exports provided: AdminActionTypes, GetUsersList, DeleteUser, AddUser, UsersListFetched, GetUserProjects, DeleteUserProject, AddAdminPrivileges, UserProjectsLoaded, GetUserCustomers, DeleteUserCustomer, UserCustomersLoaded, RemoveAdminPrivileges, AdminError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminActionTypes", function() { return AdminActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUsersList", function() { return GetUsersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUser", function() { return DeleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUser", function() { return AddUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListFetched", function() { return UsersListFetched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserProjects", function() { return GetUserProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserProject", function() { return DeleteUserProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdminPrivileges", function() { return AddAdminPrivileges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProjectsLoaded", function() { return UserProjectsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserCustomers", function() { return GetUserCustomers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserCustomer", function() { return DeleteUserCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCustomersLoaded", function() { return UserCustomersLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveAdminPrivileges", function() { return RemoveAdminPrivileges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminError", function() { return AdminError; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AdminActionTypes;
(function (AdminActionTypes) {
    AdminActionTypes["GET_USERS_LIST"] = "[Admin] Get Users List";
    AdminActionTypes["DELETE_USER"] = "[Admin] DELETE User";
    AdminActionTypes["USERS_LIST_FETCHED"] = "[Admin] Users list fetched";
    AdminActionTypes["ADD_USER"] = "[Admin] Add User";
    AdminActionTypes["GET_USER_PROJECTS"] = "[Admin] Get user projects";
    AdminActionTypes["USERS_PROJECTS_LOADED"] = "[Admin] User projects loaded";
    AdminActionTypes["DELETE_USER_PROJECT"] = "[Admin] Delete user project";
    AdminActionTypes["GET_USER_CUSTOMERS"] = "[Admin] Get user customers";
    AdminActionTypes["USERS_CUSTOMERS_LOADED"] = "[Admin] User customers loaded";
    AdminActionTypes["DELETE_USER_CUSTOMER"] = "[Admin] Delete user customer";
    AdminActionTypes["ADD_ADMIN_PRIVILEGES"] = "[Admin] Add admin privileges";
    AdminActionTypes["REMOVE_ADMIN_PRIVILEGES"] = "[Admin] Remove admin privileges";
    AdminActionTypes["ADMIN_ERROR"] = "[Admin] Error";
})(AdminActionTypes || (AdminActionTypes = {}));
var GetUsersList = /** @class */ (function () {
    function GetUsersList() {
        this.type = AdminActionTypes.GET_USERS_LIST;
    }
    return GetUsersList;
}());

var DeleteUser = /** @class */ (function () {
    function DeleteUser(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.DELETE_USER;
    }
    return DeleteUser;
}());

var AddUser = /** @class */ (function () {
    function AddUser(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.ADD_USER;
    }
    return AddUser;
}());

var UsersListFetched = /** @class */ (function () {
    function UsersListFetched(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.USERS_LIST_FETCHED;
    }
    return UsersListFetched;
}());

var GetUserProjects = /** @class */ (function () {
    function GetUserProjects(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.GET_USER_PROJECTS;
    }
    return GetUserProjects;
}());

var DeleteUserProject = /** @class */ (function () {
    function DeleteUserProject(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.DELETE_USER_PROJECT;
    }
    return DeleteUserProject;
}());

var AddAdminPrivileges = /** @class */ (function () {
    function AddAdminPrivileges(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.ADD_ADMIN_PRIVILEGES;
    }
    return AddAdminPrivileges;
}());

var UserProjectsLoaded = /** @class */ (function () {
    function UserProjectsLoaded(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.USERS_PROJECTS_LOADED;
    }
    return UserProjectsLoaded;
}());

var GetUserCustomers = /** @class */ (function () {
    function GetUserCustomers(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.GET_USER_CUSTOMERS;
    }
    return GetUserCustomers;
}());

var DeleteUserCustomer = /** @class */ (function () {
    function DeleteUserCustomer(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.DELETE_USER_CUSTOMER;
    }
    return DeleteUserCustomer;
}());

var UserCustomersLoaded = /** @class */ (function () {
    function UserCustomersLoaded(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.USERS_CUSTOMERS_LOADED;
    }
    return UserCustomersLoaded;
}());

var RemoveAdminPrivileges = /** @class */ (function () {
    function RemoveAdminPrivileges(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.REMOVE_ADMIN_PRIVILEGES;
    }
    return RemoveAdminPrivileges;
}());

var AdminError = /** @class */ (function () {
    function AdminError(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.ADMIN_ERROR;
    }
    return AdminError;
}());



/***/ }),

/***/ "./src/app/admin/store/admin.effects.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/store/admin.effects.ts ***!
  \**********************************************/
/*! exports provided: AdminEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEffects", function() { return AdminEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../store/admin.actions */ "./src/app/admin/store/admin.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/admin/services/admin.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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







var AdminEffects = /** @class */ (function () {
    function AdminEffects(actions$, adminService, toastr) {
        var _this = this;
        this.actions$ = actions$;
        this.adminService = adminService;
        this.toastr = toastr;
        this.getUsersList$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].GET_USERS_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.adminService.getUsersList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (users) {
            var usersList = users.data.map(function (res) {
                return {
                    id: res.id,
                    email: res.email,
                    first_name: res.first_name,
                    last_name: res.last_name,
                    avatar: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
                    isAdmin: false,
                    role: 'manager'
                    // isAdmin: res.role === 'admin'    ********uncomment theesese these 2
                    // role: res.role
                };
            });
            return (new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["UsersListFetched"]({ usersList: usersList }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this.toastr.error('Something went wrong. Please try after sometime');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error: error }));
        })); }));
        this.deleteUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].DELETE_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) { return _this.adminService.deleteUser(payload.user.username)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log('result came', res);
            return (new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["GetUsersList"]());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this.toastr.error('Something went wrong. Please try after sometime');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error: error }));
        })); }));
        this.addAdminPrivileges$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].ADD_ADMIN_PRIVILEGES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) { return _this.adminService.addAdminPrivileges(payload.userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error: error })); })); }));
    }
    AdminEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] },
        { type: _services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
    ]; };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AdminEffects.prototype, "getUsersList$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AdminEffects.prototype, "deleteUser$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AdminEffects.prototype, "addAdminPrivileges$", void 0);
    AdminEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], AdminEffects);
    return AdminEffects;
}());



/***/ }),

/***/ "./src/app/admin/store/admin.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/store/admin.reducer.ts ***!
  \**********************************************/
/*! exports provided: adminReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminReducer", function() { return adminReducer; });
/* harmony import */ var _admin_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.state */ "./src/app/admin/store/admin.state.ts");
/* harmony import */ var _admin_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.actions */ "./src/app/admin/store/admin.actions.ts");
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


function adminReducer(state, action) {
    var _a, _b;
    if (state === void 0) { state = _admin_state__WEBPACK_IMPORTED_MODULE_0__["adminInitialState"]; }
    switch (action.type) {
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].GET_USERS_LIST: {
            return Object.assign({}, state, {
                usersListLoading: true
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].DELETE_USER: {
            return Object.assign({}, state, {
                usersListLoading: true
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].USERS_LIST_FETCHED: {
            return Object.assign({}, state, {
                usersList: action.payload.usersList,
                usersListLoading: false
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].GET_USER_PROJECTS: {
            return Object.assign({}, state, {
                userProjectsLoading: true
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].USERS_PROJECTS_LOADED: {
            return Object.assign({}, state, {
                userProjects: __assign({}, state.userProjects, (_a = {}, _a[action.payload.uid] = action.payload.userProjects, _a)),
                userProjectsLoading: false
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].GET_USER_CUSTOMERS: {
            return Object.assign({}, state, {
                userCustomersLoading: true
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].USERS_CUSTOMERS_LOADED: {
            return Object.assign({}, state, {
                userCustomers: __assign({}, state.userCustomers, (_b = {}, _b[action.payload.uid] = action.payload.userCustomers, _b)),
                userCustomersLoading: false
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].ADMIN_ERROR: {
            return Object.assign({}, state, {
                error: action.payload.error
            });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/admin/store/admin.selectors.ts":
/*!************************************************!*\
  !*** ./src/app/admin/store/admin.selectors.ts ***!
  \************************************************/
/*! exports provided: getAdminState, getUsersList, getUsersListLoading, getSelectedUser, getUserProjects, getUserCustomers, getUserProjectsLoading, getUserCustomersLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminState", function() { return getAdminState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersList", function() { return getUsersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersListLoading", function() { return getUsersListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedUser", function() { return getSelectedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProjects", function() { return getUserProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCustomers", function() { return getUserCustomers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProjectsLoading", function() { return getUserProjectsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCustomersLoading", function() { return getUserCustomersLoading; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var getAdminState = function (state) { return state.admin; };
var getUsersList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, function (admin) { return admin.usersList; });
var getUsersListLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, function (admin) { return admin.usersListLoading; });
var getSelectedUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUsersList, function (usersList, uid) { return usersList.filter(function (user) { return user.temple === uid; })[0]; });
var getUserProjects = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, function (admin, uid) {
    if (admin.userProjects.hasOwnProperty(uid)) {
        return admin.userProjects[uid];
    }
    else {
        return null;
    }
});
var getUserCustomers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, function (admin, uid) {
    if (admin.userCustomers.hasOwnProperty(uid)) {
        return admin.userCustomers[uid];
    }
    else {
        return null;
    }
});
var getUserProjectsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, function (admin) { return admin.userProjectsLoading; });
var getUserCustomersLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, function (admin) { return admin.userCustomersLoading; });


/***/ }),

/***/ "./src/app/admin/store/admin.state.ts":
/*!********************************************!*\
  !*** ./src/app/admin/store/admin.state.ts ***!
  \********************************************/
/*! exports provided: adminInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminInitialState", function() { return adminInitialState; });
// import { Project } from 'src/app/projects/models/project.model';
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var adminInitialState = {
    usersList: [],
    usersListLoading: false,
    userProjects: {},
    userProjectsLoading: false,
    userCustomers: {},
    userCustomersLoading: false,
    error: null
};


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/components/register/register.component */ "./src/app/auth/components/register/register.component.ts");
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _core_main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/main/main.component */ "./src/app/core/main/main.component.ts");
/* harmony import */ var _core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/page-not-found/page-not-found.component */ "./src/app/core/page-not-found/page-not-found.component.ts");
/* harmony import */ var _admin_containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/containers/admin/admin.component */ "./src/app/admin/containers/admin/admin.component.ts");
/* harmony import */ var _admin_guard_admin_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/guard/admin.guard */ "./src/app/admin/guard/admin.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





// import { AuthGuard } from './auth/guards/auth.guard';




// import { AdminComponent } from './admin/containers/admin/admin.component';
// import { AdminGuard } from './admin/guard/admin.guard';
var routes = [
    { path: '', component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], children: [
            { path: '', component: _core_main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"] },
            { path: 'poojas', loadChildren: './poojas/poojas.module#PoojasModule' },
            { path: 'expenses', loadChildren: './expenses/expenses.module#ExpensesModule' },
            { path: 'donations', loadChildren: './donations/donations.module#DonationsModule' },
            { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsDataModule' },
            { path: 'admin-panel', component: _admin_containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], canActivate: [_admin_guard_admin_guard__WEBPACK_IMPORTED_MODULE_8__["AdminGuard"]] }
            // { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule', canActivate: [AuthGuard]},
            // { path: 'customers', loadChildren: './customers/customers.module#CustomersModule', canActivate: [AuthGuard]},
            // { path: 'profile', loadChildren: './profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
            // { path: 'charts', loadChildren: './charts/charts.module#ChartsDataModule', canActivate: [AuthGuard] },
            // { path: 'admin-panel', component: AdminComponent, canActivate: [AdminGuard]}
        ] },
    { path: 'register', component: _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'login', component: _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: '**', component: _core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
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




var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]).subscribe(function (user) {
            console.log({ user: user });
        });
        this.user$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]);
        this.isLoggedIn$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoggedIn"]);
        this.isLoading$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoading"]);
        this.isAdmin$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsAdmin"]);
    };
    AppComponent.prototype.onLogout = function (user) {
        console.log('user****************', user);
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LogoutRequested"]({ user: user }));
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


// import { AngularFireModule } from '@angular/fire';









// import { AngularFireAuthModule } from '@angular/fire/auth';

// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireDatabaseModule } from '@angular/fire/database';





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot(),
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_13__["AdminModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                // AngularFireModule.initializeApp(environment.firebase),
                // AngularFireAuthModule,
                // AngularFirestoreModule,
                // AngularFireDatabaseModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot({
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: true,
                }),
                _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_6__["reducers"], {
                    runtimeChecks: {
                        strictStateImmutability: true,
                        strictActionImmutability: true
                    },
                    metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_6__["metaReducers"]
                }),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument() : [],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([])
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/auth.reducer */ "./src/app/auth/store/auth.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_auth_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/auth.effects */ "./src/app/auth/store/auth.effects.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/auth/components/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["InputsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["InputUtilitiesModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["CardsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["WavesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["IconsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('auth', _store_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["authReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_auth_effects__WEBPACK_IMPORTED_MODULE_5__["AuthEffects"]])
            ],
            declarations: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]],
            exports: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/components/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/auth/components/login/login.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _store_auth_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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






var LoginComponent = /** @class */ (function () {
    function LoginComponent(store) {
        this.store = store;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var cachedUsername = localStorage.getItem('username');
        var cachedPassword = localStorage.getItem('password');
        if (cachedUsername && cachedPassword) {
            this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LoginRequested"]({
                username: cachedUsername,
                password: cachedPassword
            }));
        }
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.error$ = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_auth_selectors__WEBPACK_IMPORTED_MODULE_4__["getError"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (error) {
            if (error && (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')) {
                return 'Invalid login or password';
            }
            else {
                return null;
            }
        }));
    };
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () { return this.loginForm.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.loginForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onLogin = function () {
        if (this.loginForm.valid) {
            this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LoginRequested"](this.loginForm.value));
        }
    };
    LoginComponent.prototype.onGoogleLogin = function (authProvider) {
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SocialLogin"]({ authProvider: authProvider }));
    };
    LoginComponent.prototype.onFacebookLogin = function (authProvider) {
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SocialLogin"]({ authProvider: authProvider }));
    };
    LoginComponent.prototype.onTwitterLogin = function (authProvider) {
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SocialLogin"]({ authProvider: authProvider }));
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/components/login/login.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/components/register/register.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/auth/components/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _store_auth_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(store) {
        this.store = store;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
        this.error$ = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_auth_selectors__WEBPACK_IMPORTED_MODULE_4__["getError"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (error) {
            if (error) {
                if (error.code === 'auth/weak-password') {
                    return error.message;
                }
                else if (error.code === 'auth/username-already-in-use') {
                    return 'User with this username address already exist';
                }
            }
            else {
                return null;
            }
        }));
    };
    Object.defineProperty(RegisterComponent.prototype, "username", {
        get: function () { return this.registerForm.get('username'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.registerForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onRegister = function () {
        var username = this.registerForm.value.username;
        var password = this.registerForm.value.password;
        if (this.registerForm.valid) {
            this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["RegisterRequested"]({ username: username, password: password }));
        }
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __importDefault(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/register/register.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/components/register/register.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/models/user.model.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/models/user.model.ts ***!
  \*******************************************/
/*! exports provided: mockUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockUser", function() { return mockUser; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mockUser = {
    user: {
        temple: 'RR',
        displayName: 'MANAGER',
        username: '',
        password: '',
        photoUrl: 'https://img.icons8.com/bubbles/2x/user-male.png',
        role: 'admin',
        email: 'test@gmail.com'
    },
};


/***/ }),

/***/ "./src/app/auth/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model */ "./src/app/auth/models/user.model.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
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

// import { AngularFireAuth } from '@angular/fire/auth';

// import * as firebase from 'firebase/app';
// import { AngularFireDatabase } from '@angular/fire/database';



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.register = function (username, password) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([username, password]);
        // return from(this.afAuth.auth.createUserWithUsernameAndPassword(username, password));
    };
    AuthService.prototype.updateProfile = function (displayName, photoUrl) {
        // const userProfile = this.afAuth.auth.currentUser;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([displayName, photoUrl]);
        // if (userProfile) {
        //   return <any>from(userProfile.updateProfile( { displayName: displayName, photoURL: photoUrl }));
        // }
    };
    AuthService.prototype.login = function (username, password) {
        return this.http.get(
        // `${environment.apiUrl}/api_exec?api=login&user=${username}&pass=${password}&temple=root`,
        src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/login", {
            params: {
                'email': 'eve.holt@reqres.in' || false,
                'password': 'cityslicka' || false
            }
        });
    };
    AuthService.prototype.logout = function (uid) {
        // this.updateOnlineStatus(uid, false);
        // return from(this.afAuth.auth.signOut());
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(uid);
    };
    AuthService.prototype.getUser = function () {
        // const users = this.db.object('users/' + user.temple);
        var data = {
            user: __assign({}, _models_user_model__WEBPACK_IMPORTED_MODULE_2__["mockUser"].user, { username: localStorage.getItem('username'), password: localStorage.getItem('password'), role: localStorage.getItem('role') })
        };
        if (data.user.username && data.user.password) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(data);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
        }
    };
    AuthService.prototype.saveUser = function (username, password, role) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('role', role);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ username: username, password: password, role: role });
    };
    AuthService.prototype.clearLocalData = function () {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    };
    AuthService.prototype.updateOnlineStatus = function (uid, status) {
        // if (status) {
        //   this.db.database.ref().child('users/' + uid).onDisconnect().update( { isOnline: false });
        // }
        // return from(this.db.object('users/' + uid).update({ isOnline: status }));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([uid, status]);
    };
    AuthService.prototype.checkUserRole = function () {
        // return this.db.object('admins/' + uid).valueChanges();
        if (localStorage.getItem('role') === 'admin') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
    };
    AuthService.prototype.getAuthState = function () {
        // return this.afAuth.authState;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null); //modify this for logged in state
    };
    AuthService.prototype.getCurrentUser = function () {
        // return this.afAuth.auth.currentUser;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/store/auth.actions.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.actions.ts ***!
  \********************************************/
/*! exports provided: AuthActionTypes, RegisterRequested, RegisterCompleted, RegisterFailed, UpdateProfile, UpdateProfileSuccess, LoginRequested, LoginSuccess, LoginFailed, SocialLogin, LogoutRequested, LogoutCompleted, SaveUser, UpdateOnlineStatus, CheckUserRole, UpdateUserRole, GetUser, AuthError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRequested", function() { return RegisterRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterCompleted", function() { return RegisterCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFailed", function() { return RegisterFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfile", function() { return UpdateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileSuccess", function() { return UpdateProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequested", function() { return LoginRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFailed", function() { return LoginFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLogin", function() { return SocialLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutRequested", function() { return LogoutRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutCompleted", function() { return LogoutCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveUser", function() { return SaveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOnlineStatus", function() { return UpdateOnlineStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckUserRole", function() { return CheckUserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserRole", function() { return UpdateUserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUser", function() { return GetUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthError", function() { return AuthError; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["REGISTER_REQUESTED"] = "[Auth] REGISTER Requested";
    AuthActionTypes["REGISTER_COMPLETED"] = "[Auth] REGISTER Completed";
    AuthActionTypes["REGISTER_FAILED"] = "[Auth] REGISTER Failed";
    AuthActionTypes["UPDATE_PROFILE"] = "[Auth] Update profile";
    AuthActionTypes["UPDATE_PROFILE_SUCCESS"] = "[Auth] Update profile success";
    AuthActionTypes["LOGIN_REQUESTED"] = "[Auth] LOGIN Requested";
    AuthActionTypes["LOGIN_SUCCESS"] = "[Auth] LOGIN Success";
    AuthActionTypes["LOGIN_FAILED"] = "[Auth] LOGIN Failed";
    AuthActionTypes["SOCIAL_LOGIN"] = "[Auth] Social media login";
    AuthActionTypes["LOGOUT_REQUESTED"] = "[Auth] LOGOUT requested";
    AuthActionTypes["LOGOUT_COMPLETED"] = "[Auth] LOGOUT completed";
    AuthActionTypes["SAVE_USER"] = "[Auth] Save user";
    AuthActionTypes["UPDATE_ONLINE_STATUS"] = "[Auth] Update online status";
    AuthActionTypes["CHECK_USER_ROLE"] = "[Auth] Check user role";
    AuthActionTypes["UPDATE_USER_ROLE"] = "[Auth] Update user role";
    AuthActionTypes["GET_USER"] = "[Auth] GET User";
    AuthActionTypes["AUTH_ERROR"] = "[Auth] Error";
})(AuthActionTypes || (AuthActionTypes = {}));
var RegisterRequested = /** @class */ (function () {
    function RegisterRequested(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.REGISTER_REQUESTED;
    }
    return RegisterRequested;
}());

var RegisterCompleted = /** @class */ (function () {
    function RegisterCompleted() {
        this.type = AuthActionTypes.REGISTER_COMPLETED;
    }
    return RegisterCompleted;
}());

var RegisterFailed = /** @class */ (function () {
    function RegisterFailed(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.REGISTER_FAILED;
    }
    return RegisterFailed;
}());

var UpdateProfile = /** @class */ (function () {
    function UpdateProfile(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UPDATE_PROFILE;
    }
    return UpdateProfile;
}());

var UpdateProfileSuccess = /** @class */ (function () {
    function UpdateProfileSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UPDATE_PROFILE_SUCCESS;
    }
    return UpdateProfileSuccess;
}());

var LoginRequested = /** @class */ (function () {
    function LoginRequested(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_REQUESTED;
    }
    return LoginRequested;
}());

var LoginSuccess = /** @class */ (function () {
    function LoginSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_SUCCESS;
    }
    return LoginSuccess;
}());

var LoginFailed = /** @class */ (function () {
    function LoginFailed() {
        this.type = AuthActionTypes.LOGIN_FAILED;
    }
    return LoginFailed;
}());

var SocialLogin = /** @class */ (function () {
    function SocialLogin(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SOCIAL_LOGIN;
    }
    return SocialLogin;
}());

var LogoutRequested = /** @class */ (function () {
    function LogoutRequested(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGOUT_REQUESTED;
    }
    return LogoutRequested;
}());

var LogoutCompleted = /** @class */ (function () {
    function LogoutCompleted() {
        this.type = AuthActionTypes.LOGOUT_COMPLETED;
    }
    return LogoutCompleted;
}());

var SaveUser = /** @class */ (function () {
    function SaveUser(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SAVE_USER;
    }
    return SaveUser;
}());

var UpdateOnlineStatus = /** @class */ (function () {
    function UpdateOnlineStatus(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UPDATE_ONLINE_STATUS;
    }
    return UpdateOnlineStatus;
}());

var CheckUserRole = /** @class */ (function () {
    function CheckUserRole(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.CHECK_USER_ROLE;
    }
    return CheckUserRole;
}());

var UpdateUserRole = /** @class */ (function () {
    function UpdateUserRole(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UPDATE_USER_ROLE;
    }
    return UpdateUserRole;
}());

var GetUser = /** @class */ (function () {
    function GetUser() {
        this.type = AuthActionTypes.GET_USER;
    }
    return GetUser;
}());

var AuthError = /** @class */ (function () {
    function AuthError(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.AUTH_ERROR;
    }
    return AuthError;
}());



/***/ }),

/***/ "./src/app/auth/store/auth.effects.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.effects.ts ***!
  \********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/user.model */ "./src/app/auth/models/user.model.ts");
/* harmony import */ var _shared_services_gravatar_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/gravatar.service */ "./src/app/shared/services/gravatar.service.ts");
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










var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, authService, gravatarService, router, toastr) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.gravatarService = gravatarService;
        this.router = router;
        this.toastr = toastr;
        this.registerAction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].REGISTER_REQUESTED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) {
            return _this.authService.register(payload.username, payload.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
                var gravatarUrl = _this.gravatarService.getUserGravatar(res.user.username);
                var user = {
                    uid: res.user.temple,
                    displayName: payload.username || res.user.displayName,
                    username: res.user.username,
                    password: res.user.password,
                    email: res.user.email,
                    photoUrl: res.user.photoURL || gravatarUrl,
                    isAdmin: false
                };
                return user;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
                return [
                    new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["RegisterCompleted"](),
                    new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginSuccess"]({ user: user }),
                    new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["SaveUser"]({ user: user })
                ];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { _this.router.navigateByUrl(''); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                _this.toastr.error('Auth Error. Please try after sometime');
                _this.authService.clearLocalData();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error: error }));
            }));
        }));
        this.saveUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].SAVE_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) { return _this.authService.saveUser(payload.user.username, payload.user.password, payload.user.role); }));
        this.updateOnlineStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].UPDATE_ONLINE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) { return _this.authService.updateOnlineStatus(payload.uid, payload.status); }));
        this.checkUserRole$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].CHECK_USER_ROLE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.authService.checkUserRole()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (isAdmin) {
            return new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateUserRole"]({ isAdmin: isAdmin });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.toastr.error('Auth Error. Please try after sometime');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error: error }));
        })); }));
        this.updateProfile$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].UPDATE_PROFILE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (payload) {
            return _this.authService.updateProfile(payload.displayName, payload.photoUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
                var currentUser = _this.authService.getCurrentUser();
                var updatedUser = {
                    uid: currentUser.uid || null,
                    displayName: currentUser.displayName || null,
                    username: currentUser.username || null,
                    photoUrl: currentUser.photoURL || null
                };
                return new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateProfileSuccess"]({ user: updatedUser });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                _this.toastr.error('Auth Error. Please try after sometime');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"](error));
            }));
        }));
        this.loginAction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].LOGIN_REQUESTED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) { return _this.authService.login(payload.username, payload.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            // if (res !== 'logged-in') {
            //   this.authService.clearLocalData();
            //   return of(new auth.AuthError({ error: 'Username and password do not match' }));
            // }
            console.log(res);
            var user = {
                temple: _models_user_model__WEBPACK_IMPORTED_MODULE_7__["mockUser"].user.temple,
                displayName: _models_user_model__WEBPACK_IMPORTED_MODULE_7__["mockUser"].user.displayName,
                photoUrl: _models_user_model__WEBPACK_IMPORTED_MODULE_7__["mockUser"].user.photoUrl,
                isAdmin: _models_user_model__WEBPACK_IMPORTED_MODULE_7__["mockUser"].user.role === 'admin',
                role: _models_user_model__WEBPACK_IMPORTED_MODULE_7__["mockUser"].user.role,
                email: _models_user_model__WEBPACK_IMPORTED_MODULE_7__["mockUser"].user.email,
                username: payload.username,
                password: payload.password
            };
            return new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginSuccess"]({ user: user });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) { return user.payload.user; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
            console.log('login complete');
            console.log({ user: user });
            _this.authService.saveUser(user.username, user.password, user.role);
            return [new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginSuccess"]({ user: user }), new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["SaveUser"]({ user: user }), new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["CheckUserRole"]({ isAdmin: user.isAdmin })];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.router.navigateByUrl(''); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.toastr.error('Auth Error. Please try after sometime');
            _this.authService.clearLocalData();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error: error }));
        })); }));
        this.loginSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].LOGIN_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) {
            return [
                new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateOnlineStatus"]({ uid: payload.user.temple, status: true }),
                new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["CheckUserRole"]({ isAdmin: payload.user.isAdmin })
            ];
        }));
        this.logoutAction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].LOGOUT_REQUESTED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) {
            console.log('payload', payload);
            return _this.authService.logout(payload.user.temple)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LogoutCompleted"](); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.authService.clearLocalData(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.router.navigateByUrl(''); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                _this.toastr.error('Auth Error. Please try after sometime');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error: error }));
            }));
        }));
        this.getUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].GET_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.authService.getAuthState()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (authData) {
            if (authData) {
                var user = {
                    temple: _models_user_model__WEBPACK_IMPORTED_MODULE_7__["mockUser"].user.temple,
                    displayName: _models_user_model__WEBPACK_IMPORTED_MODULE_7__["mockUser"].user.displayName,
                    photoUrl: authData.photoURL,
                    username: authData.username,
                    password: authData.password,
                    email: authData.email
                };
                return new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginSuccess"]({ user: user });
            }
            else {
                return new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginFailed"]();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            _this.toastr.error('Auth Error. Please try after sometime');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error: error }));
        })); }));
        this.init$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["GetUser"]());
        });
    }
    AuthEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _shared_services_gravatar_service__WEBPACK_IMPORTED_MODULE_8__["GravatarService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"] }
    ]; };
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "registerAction$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "saveUser$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "updateOnlineStatus$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "checkUserRole$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "updateProfile$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "loginAction$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "loginSuccess$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "logoutAction$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "getUser$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], AuthEffects.prototype, "init$", void 0);
    AuthEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_services_gravatar_service__WEBPACK_IMPORTED_MODULE_8__["GravatarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/auth/store/auth.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.reducer.ts ***!
  \********************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.state */ "./src/app/auth/store/auth.state.ts");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/store/auth.actions.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


function authReducer(state, action) {
    if (state === void 0) { state = _auth_state__WEBPACK_IMPORTED_MODULE_0__["authInitialState"]; }
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGIN_SUCCESS: {
            return Object.assign({}, state, {
                user: action.payload.user,
                isLoggedIn: true,
                isLoading: false,
                error: null
            });
        }
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].UPDATE_PROFILE_SUCCESS: {
            return Object.assign({}, state, {
                user: action.payload.user,
            });
        }
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].UPDATE_USER_ROLE: {
            return Object.assign({}, state, {
                isAdmin: action.payload.isAdmin
            });
        }
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGIN_FAILED: {
            return Object.assign({}, state, {
                user: null,
                isLoading: false,
                isLoggedIn: false
            });
        }
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].AUTH_ERROR: {
            return Object.assign({}, state, {
                error: action.payload.error
            });
        }
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGOUT_COMPLETED: {
            return Object.assign({}, state, {
                user: null,
                isLoading: false,
                isLoggedIn: false
            });
        }
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGOUT_REQUESTED: {
            return Object.assign({}, state);
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/auth/store/auth.selectors.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/store/auth.selectors.ts ***!
  \**********************************************/
/*! exports provided: getAuthState, getUser, getIsLoggedIn, getIsLoading, getIsAdmin, getError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthState", function() { return getAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoggedIn", function() { return getIsLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return getIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAdmin", function() { return getIsAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var getAuthState = function (state) { return state.auth; };
var getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (auth) { return auth.user; });
var getIsLoggedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (auth) { return auth.isLoggedIn; });
var getIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (auth) { return auth.isLoading; });
var getIsAdmin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (auth) { return auth.isAdmin; });
var getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (auth) { return auth.error; });


/***/ }),

/***/ "./src/app/auth/store/auth.state.ts":
/*!******************************************!*\
  !*** ./src/app/auth/store/auth.state.ts ***!
  \******************************************/
/*! exports provided: authInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInitialState", function() { return authInitialState; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var authInitialState = {
    user: null,
    isAdmin: false,
    isLoggedIn: false,
    isLoading: true,
    error: null
};


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component */ "./src/app/core/main/main.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/core/dashboard/dashboard.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/core/page-not-found/page-not-found.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _split_body_split_body_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./split-body/split-body.component */ "./src/app/core/split-body/split-body.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};












var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["NavbarModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["IconsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"].forRoot(),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["CardsModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"]
            ],
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                _split_body_split_body_component__WEBPACK_IMPORTED_MODULE_11__["SplitBodyComponent"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _split_body_split_body_component__WEBPACK_IMPORTED_MODULE_11__["SplitBodyComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/dashboard/dashboard.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _customers_services_customers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../customers/services/customers.service */ "./src/app/customers/services/customers.service.ts");
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(store, customersService) {
        this.store = store;
        this.customersService = customersService;
        this.projects = [
            {
                title: 'Project 1',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                photoUrl: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg'
            },
            {
                title: 'Project 2',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                photoUrl: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(98).jpg'
            },
            {
                title: 'Project 3',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                photoUrl: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(99).jpg'
            },
            {
                title: 'Project 4',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                photoUrl: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(95).jpg'
            }
        ];
        this.customers = [
            {
                id: 1,
                name: 'Example customer 1',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 2,
                name: 'Example customer 2',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 3,
                name: 'Example customer 3',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 4,
                name: 'Example customer 4',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 5,
                name: 'Example customer 5',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
            }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.initProjects();
        this.initCustomers();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.projectsSub) {
            this.projectsSub.unsubscribe();
        }
        if (this.customersSub) {
            this.customersSub.unsubscribe();
        }
    };
    DashboardComponent.prototype.initProjects = function () {
    };
    DashboardComponent.prototype.initCustomers = function () {
        var _this = this;
        this.customersSub = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_4__["getUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
            if (user) {
                return _this.customersService.get(user.temple);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["empty"])();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1))
            .subscribe(function (customers) {
            if (customers.length === 0) {
                _this.customersService.addCustomers(_this.customers);
            }
        });
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _customers_services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/core/dashboard/dashboard.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _customers_services_customers_service__WEBPACK_IMPORTED_MODULE_3__["CustomersService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/footer/footer.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-item a {\n  color: white;\n  padding-right: 50px;\n  padding-left: 50px;\n}\n\n.navbar-nav {\n  align-items: center;\n}\n\n.nav-link.active {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n\n.logout-button {\n  display: none;\n}\n\n.avatar-dropdown {\n  display: block;\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  .nav-item a {\n    padding-right: 20px;\n    padding-left: 20px;\n  }\n}\n\n@media (max-width: 992px) {\n  .avatar-dropdown {\n    display: none;\n  }\n\n  .logout-button {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvQzpcXGdpdCBjb2RlXFxBdWRpdC1VSS1Bbmd1bGFyL3NyY1xcYXBwXFxjb3JlXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FER0E7RUFDRTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7RUNBRjtBQUNGOztBREdBO0VBQ0U7SUFDRSxhQUFBO0VDREY7O0VESUE7SUFDRSxjQUFBO0VDREY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaXRlbSBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2LWxpbmsuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4ubG9nb3V0LWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmF2YXRhci1kcm9wZG93biB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLm5hdi1pdGVtIGEge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5hdmF0YXItZHJvcGRvd24ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5sb2dvdXQtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufSIsIi5uYXYtaXRlbSBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbi5uYXZiYXItbmF2IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ubG9nb3V0LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hdmF0YXItZHJvcGRvd24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubmF2LWl0ZW0gYSB7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuYXZhdGFyLWRyb3Bkb3duIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmxvZ291dC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.logout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogout = function () {
        this.logout.emit(this.user);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "isLoggedIn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "isLoading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "isAdmin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "logout", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/core/home/home.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".document-body {\n  padding-top: 67px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9ob21lL0M6XFxnaXQgY29kZVxcQXVkaXQtVUktQW5ndWxhci9zcmNcXGFwcFxcY29yZVxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jdW1lbnQtYm9keSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNjdweDtcclxufSIsIi5kb2N1bWVudC1ib2R5IHtcbiAgcGFkZGluZy10b3A6IDY3cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
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




var HomeComponent = /** @class */ (function () {
    function HomeComponent(store) {
        this.store = store;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["getIsLoggedIn"]);
        this.isLoading$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.scss */ "./src/app/core/home/home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/main/main.component.scss":
/*!***********************************************!*\
  !*** ./src/app/core/main/main.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pages a {\n  height: 30vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: large;\n}\n@media only screen and (max-width: 300px) {\n  .pages a {\n    height: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9tYWluL0M6XFxnaXQgY29kZVxcQXVkaXQtVUktQW5ndWxhci9zcmNcXGFwcFxcY29yZVxcbWFpblxcbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0FSO0FER0k7RUFDSTtJQUNJLGFBQUE7RUNEVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZXMge1xyXG4gICAgYSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIucGFnZXMgYSB7XG4gIGhlaWdodDogMzB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XG4gIC5wYWdlcyBhIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/core/main/main.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/main/main.component.ts ***!
  \*********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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


var MainComponent = /** @class */ (function () {
    function MainComponent(router) {
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
        console.log(this.router);
        // this.router.navigateByUrl('poojas'); // for dev purpose only so that current working page loads first
    };
    MainComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __importDefault(__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/main/main.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./main.component.scss */ "./src/app/core/main/main.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/core/page-not-found/page-not-found.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/core/page-not-found/page-not-found.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".row {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 55%;\n  transform: translate(-50%, -50%);\n}\n\n.full {\n  min-height: 40rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlLW5vdC1mb3VuZC9DOlxcZ2l0IGNvZGVcXEF1ZGl0LVVJLUFuZ3VsYXIvc3JjXFxhcHBcXGNvcmVcXHBhZ2Utbm90LWZvdW5kXFxwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7QUNDSjs7QURHRTtFQUNFLGlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDU1JTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuZnVsbCB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHJlbTtcclxuICB9IiwiLnJvdyB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTUlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZnVsbCB7XG4gIG1pbi1oZWlnaHQ6IDQwcmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/core/page-not-found/page-not-found.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __importDefault(__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/page-not-found/page-not-found.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/core/page-not-found/page-not-found.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/split-body/split-body.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/split-body/split-body.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".split-body {\n  height: calc(100vh - 80px);\n  padding-top: 10px;\n  overflow: hidden;\n}\n.split-body .left-section, .split-body .right-section {\n  height: calc(100vh - 80px);\n  overflow-y: auto;\n}\n@media only screen and (max-width: 768px) {\n  .split-body .left-section {\n    height: 50vh;\n  }\n  .split-body .right-section {\n    height: 40vh;\n    border-top: 5px solid lightslategray;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zcGxpdC1ib2R5L0M6XFxnaXQgY29kZVxcQXVkaXQtVUktQW5ndWxhci9zcmNcXGFwcFxcY29yZVxcc3BsaXQtYm9keVxcc3BsaXQtYm9keS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9zcGxpdC1ib2R5L3NwbGl0LWJvZHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREVJO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQ0FOO0FER0k7RUFDRTtJQUNFLFlBQUE7RUNETjtFREdJO0lBQ0UsWUFBQTtJQUNBLG9DQUFBO0VDRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc3BsaXQtYm9keS9zcGxpdC1ib2R5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zcGxpdC1ib2R5IHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIFxyXG4gICAgLmxlZnQtc2VjdGlvbiwgLnJpZ2h0LXNlY3Rpb24ge1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcclxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgIC5sZWZ0LXNlY3Rpb24ge1xyXG4gICAgICAgIGhlaWdodDogNTB2aDtcclxuICAgICAgfSBcclxuICAgICAgLnJpZ2h0LXNlY3Rpb24ge1xyXG4gICAgICAgIGhlaWdodDogNDB2aDtcclxuICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgbGlnaHRzbGF0ZWdyYXk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgIiwiLnNwbGl0LWJvZHkge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc3BsaXQtYm9keSAubGVmdC1zZWN0aW9uLCAuc3BsaXQtYm9keSAucmlnaHQtc2VjdGlvbiB7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3BsaXQtYm9keSAubGVmdC1zZWN0aW9uIHtcbiAgICBoZWlnaHQ6IDUwdmg7XG4gIH1cbiAgLnNwbGl0LWJvZHkgLnJpZ2h0LXNlY3Rpb24ge1xuICAgIGhlaWdodDogNDB2aDtcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgbGlnaHRzbGF0ZWdyYXk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/core/split-body/split-body.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/split-body/split-body.component.ts ***!
  \*********************************************************/
/*! exports provided: SplitBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplitBodyComponent", function() { return SplitBodyComponent; });
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


var SplitBodyComponent = /** @class */ (function () {
    function SplitBodyComponent() {
        this.isLoading = false;
    }
    SplitBodyComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isLoading$) {
            this.isLoading$.subscribe(function (loading) { return _this.isLoading = loading; });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], SplitBodyComponent.prototype, "isLoading$", void 0);
    SplitBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-split-body',
            template: __importDefault(__webpack_require__(/*! raw-loader!./split-body.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/split-body/split-body.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./split-body.component.scss */ "./src/app/core/split-body/split-body.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SplitBodyComponent);
    return SplitBodyComponent;
}());



/***/ }),

/***/ "./src/app/customers/services/customers.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/customers/services/customers.service.ts ***!
  \*********************************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
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
var CustomersService = /** @class */ (function () {
    function CustomersService() {
    }
    Object.defineProperty(CustomersService.prototype, "userId", {
        get: function () {
            return 'uid';
        },
        enumerable: true,
        configurable: true
    });
    CustomersService.prototype.add = function (customer, userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([customer, userId]);
    };
    CustomersService.prototype.addCustomers = function (customers) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(customers);
    };
    CustomersService.prototype.get = function (userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(userId);
    };
    CustomersService.prototype.update = function (customer, userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([customer, userId]);
    };
    CustomersService.prototype.delete = function (customer, userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([customer, userId]);
    };
    CustomersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CustomersService);
    return CustomersService;
}());



/***/ }),

/***/ "./src/app/poojas/models/poojas.model.ts":
/*!***********************************************!*\
  !*** ./src/app/poojas/models/poojas.model.ts ***!
  \***********************************************/
/*! exports provided: starSigns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "starSigns", function() { return starSigns; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var starSigns = [
    'അശ്വതി',
    'ഭരണി',
    'കാർത്തിക',
    'രോഹിണി',
    'മകയിരം',
    'തിരുവാതിര',
    'പുണർതം',
    'പൂയം',
    'ആയില്യം',
    'മകം',
    'പൂരം',
    'ഉത്രം',
    'അത്തം',
    'ചിത്തിര',
    'ചോതി',
    'വിശാഖം',
    'അനിഴം',
    'തൃക്കേട്ട',
    'മൂലം',
    'പൂരാടം',
    'ഉത്രാടം',
    'തിരുവോണം',
    'അവിട്ടം',
    'ചതയം',
    'പൂരുരുട്ടാതി',
    'ഉത്രട്ടാതി',
    'രേവതി',
];


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, clearState, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearState", function() { return clearState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/store/auth.reducer */ "./src/app/auth/store/auth.reducer.ts");
/* harmony import */ var _admin_store_admin_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin/store/admin.reducer */ "./src/app/admin/store/admin.reducer.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var reducers = {
    auth: _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["authReducer"],
    admin: _admin_store_admin_reducer__WEBPACK_IMPORTED_MODULE_1__["adminReducer"]
};
function clearState(reducer) {
    return function (state, action) {
        if (action.type === '[Auth] LOGOUT completed') {
            state = undefined;
        }
        return reducer(state, action);
    };
}
var metaReducers = [clearState];


/***/ }),

/***/ "./src/app/shared/components/confirm-modal/confirm-modal.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-modal/confirm-modal.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/confirm-modal/confirm-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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



var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent(modalRef) {
        this.modalRef = modalRef;
        this.confirmation = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ConfirmModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmModalComponent.prototype.onDelete = function () {
        this.confirmation.next(true);
        this.modalRef.hide();
    };
    ConfirmModalComponent.ctorParameters = function () { return [
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalRef"] }
    ]; };
    ConfirmModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./confirm-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm-modal/confirm-modal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./confirm-modal.component.scss */ "./src/app/shared/components/confirm-modal/confirm-modal.component.scss")).default]
        }),
        __metadata("design:paramtypes", [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalRef"]])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/customers-list/customers-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/customers-list/customers-list.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2N1c3RvbWVycy1saXN0L2N1c3RvbWVycy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/components/customers-list/customers-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/customers-list/customers-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersListComponent", function() { return CustomersListComponent; });
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

var CustomersListComponent = /** @class */ (function () {
    function CustomersListComponent() {
        this.customerDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.customerEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CustomersListComponent.prototype.ngOnInit = function () {
    };
    CustomersListComponent.prototype.onEdit = function (customer) {
        this.customerEdited.emit(customer);
    };
    CustomersListComponent.prototype.onDelete = function (customer) {
        this.customerDeleted.emit(customer);
    };
    CustomersListComponent.prototype.trackByFn = function (index) {
        return index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CustomersListComponent.prototype, "customers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomersListComponent.prototype, "customerDeleted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomersListComponent.prototype, "customerEdited", void 0);
    CustomersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./customers-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/customers-list/customers-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./customers-list.component.scss */ "./src/app/shared/components/customers-list/customers-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], CustomersListComponent);
    return CustomersListComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/customers-modal/customers-modal.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/customers-modal/customers-modal.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2N1c3RvbWVycy1tb2RhbC9jdXN0b21lcnMtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/components/customers-modal/customers-modal.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/customers-modal/customers-modal.component.ts ***!
  \********************************************************************************/
/*! exports provided: CustomersModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModalComponent", function() { return CustomersModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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




var CustomersModalComponent = /** @class */ (function () {
    function CustomersModalComponent(modalRef) {
        this.modalRef = modalRef;
        this.customer = {};
        this.customerData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    CustomersModalComponent.prototype.ngOnInit = function () {
    };
    CustomersModalComponent.prototype.onSave = function () {
        if (this.customerForm.valid) {
            this.customerData.next(this.customer);
            this.modalRef.hide();
        }
        else {
            var controls_1 = this.customerForm.controls;
            Object.keys(controls_1).forEach(function (controlName) { return controls_1[controlName].markAsTouched(); });
        }
    };
    CustomersModalComponent.ctorParameters = function () { return [
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('customerForm', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], CustomersModalComponent.prototype, "customerForm", void 0);
    CustomersModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./customers-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/customers-modal/customers-modal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./customers-modal.component.scss */ "./src/app/shared/components/customers-modal/customers-modal.component.scss")).default]
        }),
        __metadata("design:paramtypes", [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalRef"]])
    ], CustomersModalComponent);
    return CustomersModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/poojas-modal/poojas-modal.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/poojas-modal/poojas-modal.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".price {\n  color: orange;\n  font-weight: bold;\n  font-size: large;\n}\n\n.star-container .hidden {\n  display: none;\n}\n\n.star-container .btn-group {\n  display: inline-block;\n}\n\n.star-container .btn-group button {\n  padding: 5px;\n}\n\n.star-container .btn-group button.selected {\n  background-color: darkgreen;\n  border: 1px solid darkgreen;\n  color: white;\n  font-weight: bold;\n  padding: 20px;\n}\n\n#address {\n  height: 20px;\n}\n\n.modal-body {\n  overflow: auto;\n  display: flex;\n  max-height: 65vh;\n}\n\n.modal-body .left-section {\n  width: 50%;\n}\n\n.modal-body .right-section {\n  width: 50%;\n  padding: 10px 20px;\n}\n\n.modal-footer {\n  justify-content: space-between;\n}\n\n.phone {\n  margin: 0;\n}\n\n.delete {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9vamFzLW1vZGFsL0M6XFxnaXQgY29kZVxcQXVkaXQtVUktQW5ndWxhci9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwb29qYXMtbW9kYWxcXHBvb2phcy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9vamFzLW1vZGFsL3Bvb2phcy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FESUk7RUFDSSxhQUFBO0FDRFI7O0FER0k7RUFDSSxxQkFBQTtBQ0RSOztBREVRO0VBQ0ksWUFBQTtBQ0FaOztBREdRO0VBQ0ksMkJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNEWjs7QURNQTtFQUNJLFlBQUE7QUNISjs7QURNQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURJSTtFQUNJLFVBQUE7QUNGUjs7QURJSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ0ZSOztBRE1BO0VBQ0ksOEJBQUE7QUNISjs7QURNQTtFQUNJLFNBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bvb2phcy1tb2RhbC9wb29qYXMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpY2Uge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLnN0YXItY29udGFpbmVyIHtcclxuXHJcbiAgICAuaGlkZGVuIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1ncm91cCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbi5zZWxlY3RlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZGFya2dyZWVuO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuI2FkZHJlc3Mge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXgtaGVpZ2h0OiA2NXZoO1xyXG4gICAgLmxlZnQtc2VjdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIC5yaWdodC1zZWN0aW9uIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm1vZGFsLWZvb3RlciB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5waG9uZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5kZWxldGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59IiwiLnByaWNlIHtcbiAgY29sb3I6IG9yYW5nZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5zdGFyLWNvbnRhaW5lciAuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zdGFyLWNvbnRhaW5lciAuYnRuLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnN0YXItY29udGFpbmVyIC5idG4tZ3JvdXAgYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4O1xufVxuLnN0YXItY29udGFpbmVyIC5idG4tZ3JvdXAgYnV0dG9uLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNhZGRyZXNzIHtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtaGVpZ2h0OiA2NXZoO1xufVxuLm1vZGFsLWJvZHkgLmxlZnQtc2VjdGlvbiB7XG4gIHdpZHRoOiA1MCU7XG59XG4ubW9kYWwtYm9keSAucmlnaHQtc2VjdGlvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBob25lIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZGVsZXRlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/poojas-modal/poojas-modal.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/poojas-modal/poojas-modal.component.ts ***!
  \**************************************************************************/
/*! exports provided: PoojasModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasModalComponent", function() { return PoojasModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_poojas_models_poojas_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/poojas/models/poojas.model */ "./src/app/poojas/models/poojas.model.ts");
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





// import { MDBModalRef } from 'angular-bootstrap-md';
// import { Poojas } from '../../../poojas/models/poojas.model';
// import { Subject } from 'rxjs';
// import { NgForm } from '@angular/forms';
var PoojasModalComponent = /** @class */ (function () {
    function PoojasModalComponent(modalRef) {
        this.modalRef = modalRef;
        this.pooja = {};
        this.poojasData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.starSigns = src_app_poojas_models_poojas_model__WEBPACK_IMPORTED_MODULE_4__["starSigns"];
        this.response = {
            phoneNumber: '',
            address: '',
            persons: [],
            totalPrice: 0
        };
    }
    PoojasModalComponent.prototype.ngOnInit = function () {
    };
    PoojasModalComponent.prototype.onClose = function () {
        this.modalRef.hide();
    };
    PoojasModalComponent.prototype.onSave = function () {
        if (this.poojasForm.valid && this.response.persons.length > 0) {
            this.poojasData.next(this.response);
            this.modalRef.hide();
        }
        else {
            var controls_1 = this.poojasForm.controls;
            Object.keys(controls_1).forEach(function (controlName) { return controls_1[controlName].markAsTouched(); });
        }
    };
    PoojasModalComponent.prototype.selectStar = function (star) {
        this.pooja.star = star;
    };
    PoojasModalComponent.prototype.deletePooja = function (item) {
        this.response.persons.splice(this.response.persons.indexOf(item), 1);
    };
    PoojasModalComponent.prototype.addPerson = function () {
        this.response.persons.push(this.poojasForm.value);
        this.response.totalPrice += this.price;
        this.poojasForm.reset();
    };
    PoojasModalComponent.ctorParameters = function () { return [
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBModalRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('poojasForm', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], PoojasModalComponent.prototype, "poojasForm", void 0);
    PoojasModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-poojas-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./poojas-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/poojas-modal/poojas-modal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./poojas-modal.component.scss */ "./src/app/shared/components/poojas-modal/poojas-modal.component.scss")).default]
        }),
        __metadata("design:paramtypes", [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBModalRef"]])
    ], PoojasModalComponent);
    return PoojasModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/right-card/right-card.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/right-card/right-card.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JpZ2h0LWNhcmQvcmlnaHQtY2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/right-card/right-card.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/right-card/right-card.component.ts ***!
  \**********************************************************************/
/*! exports provided: RightCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightCardComponent", function() { return RightCardComponent; });
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

var RightCardComponent = /** @class */ (function () {
    function RightCardComponent() {
    }
    RightCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RightCardComponent.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], RightCardComponent.prototype, "footer", void 0);
    RightCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-right-card',
            template: __importDefault(__webpack_require__(/*! raw-loader!./right-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/right-card/right-card.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./right-card.component.scss */ "./src/app/shared/components/right-card/right-card.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], RightCardComponent);
    return RightCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/user-modal/user-modal.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/user-modal/user-modal.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3VzZXItbW9kYWwvdXNlci1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/components/user-modal/user-modal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/user-modal/user-modal.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModalComponent", function() { return UserModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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




var UserModalComponent = /** @class */ (function () {
    function UserModalComponent(modalRef) {
        this.modalRef = modalRef;
        this.user = { username: '', password: '', email: '', role: '', temple: '' };
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    UserModalComponent.prototype.ngOnInit = function () {
    };
    UserModalComponent.prototype.onSave = function () {
        if (this.userForm.valid) {
            this.userData.next(this.user);
            this.modalRef.hide();
        }
        else {
            var controls_1 = this.userForm.controls;
            Object.keys(controls_1).forEach(function (controlName) { return controls_1[controlName].markAsTouched(); });
        }
    };
    UserModalComponent.ctorParameters = function () { return [
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('userForm', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], UserModalComponent.prototype, "userForm", void 0);
    UserModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./user-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/user-modal/user-modal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./user-modal.component.scss */ "./src/app/shared/components/user-modal/user-modal.component.scss")).default]
        }),
        __metadata("design:paramtypes", [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalRef"]])
    ], UserModalComponent);
    return UserModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/gravatar.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/gravatar.service.ts ***!
  \*****************************************************/
/*! exports provided: GravatarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GravatarService", function() { return GravatarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_1__);
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


var GravatarService = /** @class */ (function () {
    function GravatarService() {
    }
    GravatarService.prototype.getUserGravatar = function (username) {
        if (username) {
            return "https://www.gravatar.com/avatar/" + md5__WEBPACK_IMPORTED_MODULE_1__(username);
        }
    };
    GravatarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GravatarService);
    return GravatarService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _components_customers_modal_customers_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/customers-modal/customers-modal.component */ "./src/app/shared/components/customers-modal/customers-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/customers-list/customers-list.component */ "./src/app/shared/components/customers-list/customers-list.component.ts");
/* harmony import */ var _components_poojas_modal_poojas_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/poojas-modal/poojas-modal.component */ "./src/app/shared/components/poojas-modal/poojas-modal.component.ts");
/* harmony import */ var _components_right_card_right_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/right-card/right-card.component */ "./src/app/shared/components/right-card/right-card.component.ts");
/* harmony import */ var _components_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user-modal/user-modal.component */ "./src/app/shared/components/user-modal/user-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"],
                _components_customers_modal_customers_modal_component__WEBPACK_IMPORTED_MODULE_4__["CustomersModalComponent"],
                _components_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_6__["CustomersListComponent"],
                _components_poojas_modal_poojas_modal_component__WEBPACK_IMPORTED_MODULE_7__["PoojasModalComponent"],
                _components_right_card_right_card_component__WEBPACK_IMPORTED_MODULE_8__["RightCardComponent"],
                _components_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_9__["UserModalComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["InputsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["InputUtilitiesModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["IconsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["TableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ModalModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CardsModule"]
            ],
            exports: [_components_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_6__["CustomersListComponent"], _components_poojas_modal_poojas_modal_component__WEBPACK_IMPORTED_MODULE_7__["PoojasModalComponent"], _components_right_card_right_card_component__WEBPACK_IMPORTED_MODULE_8__["RightCardComponent"], _components_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_9__["UserModalComponent"]],
            providers: [],
            entryComponents: [
                _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"],
                _components_customers_modal_customers_modal_component__WEBPACK_IMPORTED_MODULE_4__["CustomersModalComponent"],
                _components_poojas_modal_poojas_modal_component__WEBPACK_IMPORTED_MODULE_7__["PoojasModalComponent"],
                _components_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_9__["UserModalComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false,
    firebase: {},
    apiUrl: 'https://reqres.in/api'
    // apiUrl: 'https://api.sreerajarajeswaridevi.org/dev'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
// https://api.sreerajarajeswaridevi.org/dev/api_exec?api=login&user=kiranbose&pass=Littlepalace30&temple=root


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\git code\Audit-UI-Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map