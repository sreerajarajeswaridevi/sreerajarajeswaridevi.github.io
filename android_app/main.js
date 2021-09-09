(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/temple-list/temple-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/temple-list/temple-list.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"temples-list d-flex flex-wrap my-4\" ngif=\"temples?.length > 0\">\n  <mdb-card>\n    <mdb-card-header class=\"text-left bg-primary white-text w-100\">\n      <blockquote class=\"blockquote bq-success\">\n        <h3 class=\"header\">Temples List</h3>\n        <p class=\"py-0\">Add or remove temples (for Admin)</p>\n      </blockquote>\n    </mdb-card-header>\n    <mdb-card-body class=\"py-2\">\n      <form #templeForm=\"ngForm\">\n      <table mdbTable striped=\"true\">\n          <thead>\n            <tr>\n              <th>Temple Name</th>\n              <th>Code</th>\n              <th>Email</th>\n              <th>Address</th>\n              <th *ngIf=\"isAdmin\">Added By</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of temples\">\n              <td scope=\"row\">{{ item.temple_name }}</td>\n              <td>{{ item.temple_code }}</td>\n              <td>{{ item.temple_email }}</td>\n              <td>{{ item.temple_address }}</td>\n              <td *ngIf=\"isAdmin\">{{ item.added_by }}</td>\n            </tr>\n            <tr class=\"bg-white\" *ngIf=\"!(isLoading$ | async)\">\n              <td>\n                <div class=\"md-form\">\n                  <input type=\"text\" id=\"add_temple_temple_name\" name=\"temple_name\" class=\"form-control\" #temple_name=\"ngModel\"\n                    [(ngModel)]=\"newTemple.temple_name\" mdbInput mdbValidate [validateSuccess]=\"false\" required>\n                  <label for=\"temple_name\">Temple Name</label>\n                  <mdb-error *ngIf=\"temple_name && temple_name.invalid && (temple_name.dirty || temple_name.touched)\">Temple\n                    name is required</mdb-error>\n                </div>\n              </td>\n              <td>\n                <div class=\"md-form\">\n                  <input type=\"text\" id=\"add_temple_temple_code\" name=\"temple_code\" class=\"form-control\" #temple_code=\"ngModel\"\n                    [(ngModel)]=\"newTemple.temple_code\" mdbInput mdbValidate [validateSuccess]=\"false\" required>\n                  <label for=\"temple_code\">Temple Code</label>\n                  <mdb-error *ngIf=\"temple_code && temple_code.invalid && (temple_code.dirty || temple_code.touched)\">Temple\n                    Code is required</mdb-error>\n                </div>\n              </td>\n              <td>\n                <div class=\"md-form\">\n                  <input type=\"text\" id=\"add_temple_email\" name=\"temple_email\" class=\"form-control\" #temple_email=\"ngModel\"\n                    [(ngModel)]=\"newTemple.temple_email\" mdbInput mdbValidate [validateSuccess]=\"false\" required>\n                  <label for=\"temple_email\">Email</label>\n                  <mdb-error *ngIf=\"temple_email && temple_email.invalid && (temple_email.dirty || temple_email.touched)\">Email is required\n                  </mdb-error>\n                </div>\n              </td>\n              <td>\n                <div class=\"md-form\" style=\"margin-top: 15px;\">\n                  <textarea type=\"text\" id=\"add_temple_address\" name=\"temple_address\" class=\"my-0 py-0 md-textarea form-control\"\n                    #temple_address=\"ngModel\" [(ngModel)]=\"newTemple.temple_address\" mdbInput mdbValidate\n                    [validateSuccess]=\"false\"></textarea>\n                  <label for=\"temple_address\">Address</label>\n                  <!-- <mdb-error *ngIf=\"address && address.invalid && (address.dirty || address.touched)\">Address is required</mdb-error> -->\n                </div>\n                <!-- <a class=\"btn btn-primary btn-floating\" (click)=\"onAddTemple()\" style=\"background-color: #3b5998; height: 45px\" href=\"javascript:void(0)\" role=\"button\"\n                    >\n                    Add\n                  </a> -->\n              </td>\n              <td>\n                <button mdbBtn [disabled]=\"templeForm?.invalid || loadingAddTemple\" class=\"mt-4 btn btn-floating add\"\n                  (click)=\"onAddTemple()\" size=\"sm\" gradient=\"purple\" mdbWavesEffect>\n                  <mdb-icon fas icon=\"plus\" class=\"white-text\"></mdb-icon> <span class=\"pl-2 white-text\">Add</span>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        \n        <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center my-4\">\n        <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n    </form>\n      </mdb-card-body>\n  </mdb-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/user-detail/user-detail.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/user-detail/user-detail.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdb-card class=\"mb-4\">\n  <mdb-card-body class=\"py-4\">\n    <div class=\"mb-5 back-button\" (click)=\"closeDetails()\">\n      <mdb-icon fas icon=\"arrow-left\" class=\"mr-2\"></mdb-icon>\n      <span>Back to user list</span>\n    </div>\n    <div class=\"d-flex flex-row justify-content-between flex-wrap\">\n      <div class=\"d-flex flex-row\">\n        <div class=\"mr-4\">\n          <img *ngIf=\"user.photoUrl\" src=\"{{ user.photoUrl }}\" height=\"90\" width=\"90\" class=\"rounded-circle z-depth-0\"\n            alt=\"avatar image\">\n        </div>\n\n        <div class=\"pt-2\">\n          <h4>{{ user.displayName }}</h4>\n          <div>\n            <span class=\"mr-2\">\n            </span>\n            <span>\n              <mdb-badge *ngIf=\"user.isAdmin\" color=\"purple\">Admin</mdb-badge>\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"mt-3\">\n        <button *ngIf=\"!user.isAdmin\" mdbBtn outline=\"true\" color=\"red\" (click)=\"onAddAdmin()\">Add admin privileges</button>\n        <button *ngIf=\"user.isAdmin\" mdbBtn outline=\"true\" color=\"red\" (click)=\"onRemoveAdmin()\">Remove admin\n          privileges</button>\n      </div>\n    </div>\n\n    <hr class=\"my-5\">\n\n    <div class=\"d-flex flex-row align-items-center\">\n      <h4 class=\"mr-3\">Projects</h4>\n      <button mdbBtn color=\"primary\" size=\"sm\" (click)=\"loadProjects()\">Load user projects</button>\n    </div>\n\n    <div *ngIf=\"userProjectsLoading\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 50px\">\n      <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </div>\n\n\n    <hr class=\"my-5\">\n\n    <div class=\"d-flex flex-row align-items-center mb-4\">\n      <h4 class=\"mr-3\">Customers</h4>\n      <button mdbBtn color=\"primary\" size=\"sm\" (click)=\"loadCustomers()\">Load user customers</button>\n    </div>\n\n    <div *ngIf=\"userCustomersLoading\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 50px\">\n      <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </div>\n\n    <app-customers-list *ngIf=\"!userCustomersLoading && customers\" [customers]=\"customers\" (customerDeleted)=\"onCustomerDelete($event)\"></app-customers-list>\n  </mdb-card-body>\n</mdb-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/containers/admin/admin.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/containers/admin/admin.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"white py-2 px-4\">\n  <blockquote class=\"blockquote bq-success\">\n    <h3 class=\"header\">Users List</h3>\n    <p class=\"grey-text py-0\">Change settings for every user in your application</p>\n  </blockquote>\n</div>\n\n<div *ngIf=\"usersListLoading$ | async\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 300px\">\n  <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n\n<div *ngIf=\"!(usersListLoading$ | async)\" class=\"container-fluid mt-3 pb-5\">\n  <app-users-list *ngIf=\"!selectedUser\" [users]=\"users$ | async\" (addUser)=\"openAddUserModal($event)\"\n    (deleteUser)=\"onDeleteUser($event)\"></app-users-list>\n    <app-temple-list></app-temple-list>\n    <!-- <app-user-detail\n    *ngIf=\"selectedUser\"\n    [user]=\"selectedUser$ | async\"\n    [customers]=\"userCustomers$ | async\"\n    [userProjectsLoading]=\"userProjectsLoading$ | async\"\n    [userCustomersLoading]=\"userCustomersLoading$ | async\"\n    (detailsClosed)=\"onDetailsClose()\"\n    (projectsLoad)=\"onProjectsLoad()\"\n    (customersLoad)=\"onCustomersLoad()\"\n    (projectDeleted)=\"onProjectDelete($event)\"\n    (customerDeleted)=\"onCustomerDelete($event)\"\n    (addAdmin)=\"addAdminPrivileges($event)\"\n    (removeAdmin)=\"removeAdminPrivileges($event)\"></app-user-detail> -->\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <app-header [user]=\"user$ | async\" [isLoggedIn]=\"isLoggedIn$ | async\" [isLoading]=\"isLoading$ | async\" [isAdmin]=\"isAdmin$ | async\"\n    (logout)=\"onLogout($event)\"></app-header>\n</header>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n<app-pwa></app-pwa>\n\n<!-- <footer class=\"app-footer\" [ngClass]=\"{'footer-absolute': (isLoggedIn$ | async) || (isLoading$ | async)}\">\n  <app-footer></app-footer>\n</footer> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid full-page-container\">\n  <div class=\"row h-100 justify-content-center align-items-center\">\n    <div class=\"col-lg-4 col-sm-8 animated fadeIn\">\n      <!-- Material form login -->\n    <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\">\n      <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </div>\n      <mdb-card class=\"z-depth-2\" *ngIf=\"!(isLoading$ | async)\">\n\n        <div class=\"white text-center py-4\">\n          <img src=\"assets/images/RR-logo.png\" class=\"pb-2\" height=\"100\" alt=\"\">\n          <h5>\n            <strong>Log in</strong>\n          </h5>\n        </div>\n\n\n        <!--Card content-->\n        <mdb-card-body class=\"px-lg-5 pt-0\">\n          <div *ngIf=\"error$ | async as error\" class=\"alert alert-danger\" role=\"alert\">\n            {{ error }}\n          </div>\n          <!-- Form -->\n          <form [formGroup]=\"loginForm\" class=\"text-center\" style=\"color: #757575;\">\n\n            <!-- Username -->\n            <div class=\"md-form\">\n              <input mdbValidate [validateSuccess]=\"false\" type=\"email\" id=\"username\" class=\"form-control\" formControlName=\"username\" mdbInput>\n              <label for=\"username\">Username</label>\n              <mdb-error *ngIf=\"username && username.invalid && (username.dirty || username.touched)\">Username is required</mdb-error>\n            </div>\n\n            <!-- Password -->\n            <div class=\"md-form\">\n              <input mdbValidate [validateSuccess]=\"false\" type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" mdbInput>\n              <label for=\"password\">Password</label>\n              <mdb-error *ngIf=\"password && password.invalid && (password.dirty || password.touched)\">Password is required</mdb-error>\n            </div>\n\n            <!-- Sign in button -->\n            <button mdbBtn color=\"primary\" block=\"true\" class=\"my-4 waves-effect z-depth-0\"\n              mdbWavesEffect type=\"submit\" (click)=\"onLogin()\">Log in</button>\n\n            <!-- Register -->\n            <!-- <p>Not a member?\n              <a routerLink=\"/register\">Register</a>\n            </p> -->\n\n            <!-- Social login -->\n            <!-- <p>or log in with:</p>\n            <a type=\"button\" class=\"mr-4\" (click)=\"onFacebookLogin('facebook')\">\n              <mdb-icon fab icon=\"facebook-f\"></mdb-icon>\n            </a>\n            <a type=\"button\" class=\"mr-4\" (click)=\"onTwitterLogin('twitter')\">\n              <mdb-icon fab icon=\"twitter\"></mdb-icon>\n            </a>\n            <a type=\"button\" (click)=\"onGoogleLogin('google')\">\n              <mdb-icon fab icon=\"google-plus-g\"></mdb-icon>\n            </a> -->\n          </form>\n          <!-- Form -->\n\n        </mdb-card-body>\n\n      </mdb-card>\n      <!-- Material form login -->\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/register/register.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/register/register.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid full-page-container\">\n  <div class=\"row h-100 justify-content-center align-items-center\">\n    <div class=\"col-lg-4 col-sm-8 animated fadeIn\">\n      <!-- Material form login -->\n      <mdb-card class=\"z-depth-2\">\n\n        <div class=\"text-center py-4\">\n          <h5>\n            <strong>Register</strong>\n          </h5>\n        </div>\n\n\n        <!--Card content-->\n        <mdb-card-body class=\"px-lg-5 pt-0\">\n          <div *ngIf=\"error$ | async as error\" class=\"alert alert-danger\" role=\"alert\">\n            {{ error }}\n          </div>\n          <!-- Form -->\n          <form [formGroup]=\"registerForm\" class=\"text-center\" style=\"color: #757575;\">\n\n            <!-- Username -->\n            <div class=\"md-form\">\n              <input type=\"text\" id=\"username\" class=\"form-control\" formControlName=\"username\" mdbInput>\n              <label for=\"username\">Username</label>\n            </div>\n\n            <!-- Username -->\n            <div class=\"md-form\">\n              <input mdbValidate [validateSuccess]=\"false\" type=\"username\" id=\"username\" class=\"form-control\" formControlName=\"username\" mdbInput>\n              <label for=\"username\">Username</label>\n              <mdb-error *ngIf=\"username && username.invalid && (username.dirty || username.touched)\">Username is required</mdb-error>\n            </div>\n\n            <!-- Password -->\n            <div class=\"md-form\">\n              <input mdbValidate [validateSuccess]=\"false\" type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" mdbInput>\n              <label for=\"password\">Password</label>\n              <mdb-error *ngIf=\"password && password.invalid && password.errors && password.errors.required && (password.dirty || password.touched)\">Password is required</mdb-error>\n              <mdb-error *ngIf=\"password && password.invalid && password.errors && password.errors.minlength && (password.dirty || password.touched)\">Password must be at least 6 characters long</mdb-error>\n            </div>\n\n            <!-- Sign in button -->\n            <button mdbBtn color=\"primary\" block=\"true\" class=\"my-4 waves-effect z-depth-0\"\n              mdbWavesEffect type=\"submit\" (click)=\"onRegister()\">Register</button>\n\n            <!-- Register -->\n            <p>Already have an account?\n              <a routerLink=\"/login\">Log In</a>\n            </p>\n\n          </form>\n          <!-- Form -->\n\n        </mdb-card-body>\n\n      </mdb-card>\n      <!-- Material form login -->\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer-copyright text-center text-white py-3 primary-color-dark darken-2\">\n  &copy; 2018 Copyright:\n  <a class=\"text-white\" href=\"https:/mdbootstrap.com/angular/\">MDBootstrap.com</a>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/header/header.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Navbar-->\n<mdb-navbar #navbar SideClass=\"navbar navbar-expand-md navbar-dark blue-gradient font-weight-bold z-depth-1 justify-content-between fixed-top\" [containerInside]=\"false\">\n\n  <!-- Navbar brand -->\n  <mdb-navbar-brand>\n      <a class=\"navbar-brand\" routerLink=\"/\">\n          <img src=\"assets/images/RR-logo.png\" height=\"40\" alt=\"\">\n      </a>\n  </mdb-navbar-brand>\n\n  <!-- Collapsible content -->\n  <links>\n\n    <!-- Links -->\n    <ul class=\"navbar-nav mr-auto\">\n      <li *ngIf=\"isLoggedIn && !isLoading\" class=\"nav-item\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" mdbWavesEffect>Home<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li *ngIf=\"isLoggedIn && !isLoading && !user.isAdmin\" class=\"nav-item\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/poojas\" routerLinkActive=\"active\" mdbWavesEffect>Poojas</a>\n      </li>\n      <li *ngIf=\"isLoggedIn && !isLoading && !user.isAdmin\" class=\"nav-item\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/expenses\" routerLinkActive=\"active\" mdbWavesEffect>Expenses</a>\n      </li>\n      <li *ngIf=\"isLoggedIn && !isLoading && !user.isAdmin\" class=\"nav-item\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/donations\" routerLinkActive=\"active\" mdbWavesEffect>Donations</a>\n      </li>\n      <li *ngIf=\"isLoggedIn && !isLoading && user.role === 'manager'\" class=\"nav-item\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/reports\" routerLinkActive=\"active\" mdbWavesEffect>Reports</a>\n      </li>\n      <!-- <li *ngIf=\"isLoggedIn && !isLoading\" class=\"nav-item\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/settings\" routerLinkActive=\"active\" mdbWavesEffect>Settings</a>\n      </li> -->\n      <li *ngIf=\"isLoggedIn && !isLoading && isAdmin\" class=\"nav-item\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/admin-panel\" routerLinkActive=\"active\" mdbWavesEffect>Admin panel</a>\n      </li>\n    </ul>\n    <!-- Links -->\n\n    <!-- Search form -->\n    <!-- <ul class=\"navbar-nav\" *ngIf=\"!isLoggedIn && !isLoading\">\n      <li class=\"nav-item waves-light\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/login\" mdbWavesEffect>Login</a>\n      </li>\n      <li class=\"nav-item waves-light\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/register\" mdbWavesEffect>Register</a>\n      </li>\n    </ul> -->\n    <ul class=\"navbar-nav\" *ngIf=\"isLoggedIn && !isLoading\">\n      <li class=\"nav-link waves-light dropdown avatar p-0 avatar-dropdown\" mdbDropdown>\n        <a mdbDropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link waves-light\" mdbWavesEffect>\n          <img *ngIf=\"user.photoUrl\" src=\"{{ user.photoUrl }}\" height=\"35\" width=\"35\" class=\"rounded-circle z-depth-0\" alt=\"avatar image\">\n        </a>\n          <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown-primary\" role=\"menu\">\n              <div *ngIf=\"user.displayName\" class=\"text-center py-2 px-2\">{{ user.displayName }}</div>\n              <div *ngIf=\"!user.displayName\" class=\"text-center py-2 px-2\">Anonymous user</div>\n              <div class=\"divider dropdown-divider\"></div>\n              <div>\n                  <a *ngIf=\"isLoggedIn && !isLoading\" class=\"dropdown-item text-center waves-light\" (click)=\"navbar.hide()\" routerLink=\"/settings\" routerLinkActive=\"active\" mdbWavesEffect>Settings</a>\n              </div>\n              <div class=\"divider dropdown-divider\"></div>\n              <a class=\"dropdown-item text-center waves-light\" mdbWavesEffect (click)=\"onLogout(); navbar.hide()\">Logout</a>\n          </div>\n      </li>\n      <li class=\"nav-item waves-light logout-button\">\n        <a class=\"nav-link waves-light\" mdbWavesEffect (click)=\"navbar.hide()\" routerLink=\"/settings\" routerLinkActive=\"active\">Settings</a>\n      </li>\n      <li class=\"nav-item waves-light logout-button\">\n        <a class=\"nav-link waves-light\" mdbWavesEffect (click)=\"onLogout(); navbar.hide()\">Logout</a>\n      </li>\n    </ul>\n  </links>\n  <!-- Collapsible content -->\n\n</mdb-navbar>\n<!--/.Navbar-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/home/home.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/home/home.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"document-body\">\n    <app-login *ngIf=\"!(isLoggedIn$ | async)\"></app-login>\n    <app-dashboard *ngIf=\"(isLoggedIn$ | async)\"></app-dashboard>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/main/main.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/main/main.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container py-5 pages\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-sm-6\" *ngIf=\"!isAdmin\">\n      <mdb-card class=\"animated fadeIn mb-3\" borderColor=\"border-warning\">\n        <a routerLink=\"/poojas\" mdbBtn gradient=\"blue\">\n          <div class=\"d-flex-center flex-column\">\n            <mdb-icon fas icon=\"gopuram\" size=\"4x\" class=\"white-text mb-2\"></mdb-icon>\n            <span>Poojas</span>\n          </div>\n          </a>\n      </mdb-card>\n    </div>\n\n    <div class=\"col-lg-6 col-sm-6\" *ngIf=\"!isAdmin\">\n      <mdb-card class=\"animated fadeIn mb-3\" borderColor=\"border-warning\">\n        <a routerLink=\"/expenses\" mdbBtn gradient=\"blue\">\n          <div class=\"d-flex-center flex-column\">\n            <mdb-icon fas icon=\"file-invoice-dollar\" size=\"4x\" class=\"white-text mb-2\"></mdb-icon>\n            <span>Expenses</span>\n          </div></a>\n      </mdb-card>\n    </div>\n  <!-- </div> -->\n  <!-- <div class=\"row\"> -->\n\n    <div class=\"col-lg-6 col-sm-6\" *ngIf=\"!isAdmin\">\n      <mdb-card class=\"animated fadeIn mb-3\" borderColor=\"border-warning\">\n        <a routerLink=\"/donations\" mdbBtn gradient=\"blue\">\n          <div class=\"d-flex-center flex-column\">\n            <mdb-icon fas icon=\"hand-holding-usd\" size=\"4x\" class=\"white-text mb-2\"></mdb-icon>\n            <span>Donations</span>\n          </div>\n        </a>\n      </mdb-card>\n    </div>\n\n    <div class=\"col-lg-6 col-sm-6\" *ngIf=\"isAdmin\">\n      <mdb-card class=\"animated fadeIn mb-3\" borderColor=\"border-warning\">\n        <a routerLink=\"/admin-panel\" mdbBtn gradient=\"blue\">\n          <div class=\"d-flex-center flex-column\">\n            <mdb-icon fas icon=\"mask\" size=\"4x\" class=\"white-text mb-2\"></mdb-icon>\n            <span>Admin Panel</span>\n          </div>\n        </a>\n      </mdb-card>\n    </div>\n\n    <div class=\"col-lg-6 col-sm-6\" *ngIf=\"role === 'manager'\">\n      <mdb-card class=\"animated fadeIn mb-3\" borderColor=\"border-warning\">\n        <a routerLink=\"/reports\" mdbBtn gradient=\"blue\">\n          <div class=\"d-flex-center flex-column\">\n            <mdb-icon fas icon=\"file-contract\" size=\"4x\" class=\"white-text mb-2\"></mdb-icon>\n            <span>Reports</span>\n          </div>\n        </a>\n      </mdb-card>\n    </div>\n\n    <div class=\"col-lg-6 col-sm-6\">\n      <mdb-card class=\"animated fadeIn mb-3\" borderColor=\"border-warning\">\n        <a routerLink=\"/settings\" mdbBtn gradient=\"blue\">\n          <div class=\"d-flex-center flex-column\">\n            <mdb-icon fas icon=\"tools\" size=\"4x\" class=\"white-text mb-2\"></mdb-icon>\n            <span>Settings</span>\n          </div>\n        </a>\n      </mdb-card>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/page-not-found/page-not-found.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/page-not-found/page-not-found.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row \" >\n    <div class=\"col-md-4\">\n      <img src=\"https://www.sreerajarajeswaridevi.org/images/lampleft.png\" alt=\"Error 404\" class=\"img-fluid\">\n      <h2 class=\"h2-responsive mt-3 mb-2\">404. That's an error.</h2>\n      <h4>The requested URL was not found on this server.</h4>\n    </div>\n    <div class=\"col-md-4\">\n      <img src=\"https://mdbootstrap.com/img/Others/grafika404-bf.png\" alt=\"Error 404\" class=\"img-fluid\">\n    </div>\n    <div class=\"col-md-4\">\n      <img src=\"https://www.sreerajarajeswaridevi.org/images/lampright.png\" alt=\"Error 404\" class=\"img-fluid\">\n    </div>\n  </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/split-body/split-body.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/split-body/split-body.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid split-body\" *ngIf=\"!isLoading; else spinner\">\n    <div class=\"row\">\n        <div class=\"col-md-8 left-section\">\n            <ng-content select=\".left-section\"></ng-content>\n        </div>\n        <div class=\"col-md-4 right-section\">\n            <ng-content select=\".right-section\"></ng-content>\n        </div>\n    </div>\n</div>\n\n\n<ng-template #spinner>\n    <div class=\"container-fluid pt-5 pb-5\">\n        <div class=\"pt-3 pb-5\">\n            <div class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 200px\">\n                <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\n                    <span class=\"sr-only\">Loading...</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm-modal/confirm-modal.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm-modal/confirm-modal.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">×</span>\n    </button>\n    <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Delete</h4>\n  </div>\n  <div class=\"modal-body\">\n    <p>Are you sure you want to delete this item?</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" mdbBtn color=\"white\" class=\"black-text waves-light\" aria-label=\"Close\" (click)=\"modalRef.hide()\"\n      mdbWavesEffect>Cancel</button>\n    <button type=\"button\" mdbBtn color=\"red\" class=\"waves-light\" mdbWavesEffect (click)=\"onDelete()\">Delete</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/customers-list/customers-list.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/customers-list/customers-list.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"z-depth-1\">\n  <table class=\"table table-striped table-responsive-md btn-table\" mdbTable borderless=\"true\">\n    <thead style=\"background-color: transparent\">\n      <tr>\n        <th>Id</th>\n        <th>Name</th>\n        <th>Description</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let customer of customers; trackBy: trackByFn\">\n        <th scope=\"row\">{{ customer.id }}</th>\n        <td>{{ customer.name }}</td>\n        <td>{{ customer.description }}</td>\n        <td>\n          <a (click)=\"onEdit(customer)\" class=\"mr-2\"><mdb-icon fas icon=\"edit\"></mdb-icon></a>\n          <a (click)=\"onDelete(customer)\"><mdb-icon fas icon=\"trash\"></mdb-icon></a>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/customers-modal/customers-modal.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/customers-modal/customers-modal.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">×</span>\n    </button>\n    <h4 class=\"modal-title w-100\" id=\"myModalLabel\">{{ heading }}</h4>\n  </div>\n  <div class=\"modal-body\">\n    <form #customerForm=\"ngForm\">\n      <div class=\"md-form\">\n        <input type=\"text\" id=\"id\" name=\"id\" class=\"form-control\" [(ngModel)]=\"customer.id\" mdbInput mdbValidate [validateSuccess]=\"false\" #id=\"ngModel\" required>\n        <label for=\"id\">Id</label>\n        <mdb-error *ngIf=\"id && id.invalid && (id.dirty || id.touched)\">Id is required</mdb-error>\n      </div>\n\n      <div class=\"md-form\">\n        <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [(ngModel)]=\"customer.name\" mdbInput mdbValidate [validateSuccess]=\"false\" #name=\"ngModel\" required>\n        <label for=\"name\">Name</label>\n        <mdb-error *ngIf=\"name && name.invalid && (name.dirty || name.touched)\">Name is required</mdb-error>\n      </div>\n\n      <div class=\"md-form\">\n        <textarea type=\"text\" id=\"description\" name=\"description\" class=\"md-textarea form-control\" [(ngModel)]=\"customer.description\" mdbInput mdbValidate [validateSuccess]=\"false\" #description=\"ngModel\" required></textarea>\n        <label for=\"description\">Description</label>\n        <mdb-error *ngIf=\"description && description.invalid && (description.dirty || description.touched)\">Description is required</mdb-error>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" mdbBtn color=\"white\" class=\"black-text waves-light\" aria-label=\"Close\" (click)=\"modalRef.hide()\"\n      mdbWavesEffect>Close</button>\n    <button type=\"button\" mdbBtn color=\"red\" class=\"relative waves-light\" mdbWavesEffect (click)=\"onSave()\">Save</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/poojas-modal/poojas-modal.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/poojas-modal/poojas-modal.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\n  <div class=\"modal-header bg-primary white-text\">\n    <div class=\"d-flex flex-column w-100\">\n      <div class=\"d-flex \">\n        <h3 class=\"modal-title w-100\" id=\"myModalLabel\">{{ heading }}</h3>\n      </div>\n      <div class=\"d-flex mr-4 align-items-center datepicker\">\n        <span class=\"price\">&#x20B9;{{ price }}</span>\n        \n        <button mdbWavesEffect mdbBtn type=\"button\" color=\"white\" rounded=\"true\" class=\"pull-right text-lg\" rrDatePicker [date]=\"selectedDate\" \n        (click)=\"dateClicked($event)\" header=\"Select Date\" (dateSelected)=\"datePicked($event)\">\n        <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> <span appDateTransform [date]=\"response?.ist_YYYYMMDD\"></span>\n      </button>\n      </div>\n    </div>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">×</span>\n    </button>\n    \n   \n  </div>\n  <mdb-card class=\"text-center\">\n    <mdb-card-header>\n      <div class=\"pl-2 pr-2 row container\">\n        <div class=\"phone col-md-6 col-xs-12\">\n          <label for=\"phone\" class=\"float-left\">Phone Number *</label>\n          <input type=\"text\" id=\"phone\" name=\"phone\" class=\"form-control\" [(ngModel)]=\"response.phone_number\" mdbInput mdbValidate\n            [validateSuccess]=\"false\" required #phone=\"ngModel\" (blur)=\"fetchPeopleData(phone.value)\" >\n        <mdb-error class=\"float-left\" *ngIf=\"phone && phone.invalid && (phone.dirty || phone.touched)\">phone number is required</mdb-error>\n        </div>\n        <div class=\"col-md-6 col-xs-12\">\n          <label class=\"float-left\"  for=\"address\">Address (Optional)</label>\n          <textarea type=\"text\" id=\"address\" name=\"address\" class=\"md-textarea form-control\"\n            [(ngModel)]=\"response.address\" mdbInput mdbValidate [validateSuccess]=\"false\"></textarea>\n        </div>\n      </div>\n      \n    </mdb-card-header>\n  </mdb-card>\n\n  <div class=\"modal-body\">\n    \n    <div class=\"left-section\">\n      <form #poojasForm=\"ngForm\">\n        <div class=\"md-form\">\n          <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [(ngModel)]=\"pooja.pooja_name\" mdbInput mdbValidate\n            [validateSuccess]=\"false\" #name=\"ngModel\" required>\n          <label for=\"name\">Name</label>\n          <mdb-error *ngIf=\"name && name.invalid && (name.dirty || name.touched)\">Name is required</mdb-error>\n        </div>\n\n        <div class=\"btn-toolbar star-container\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n          <div class=\"md-form hidden\">\n            <input type=\"text\" id=\"nakshatram\" name=\"nakshatram\" class=\"form-control\" [(ngModel)]=\"pooja.nakshatram\" mdbInput mdbValidate\n              [validateSuccess]=\"false\" #nakshatram=\"ngModel\" required>\n            <label for=\"nakshatram\">Nakshatram</label>\n            <mdb-error *ngIf=\"nakshatram && nakshatram.invalid && (nakshatram.dirty || nakshatram.touched)\">Nakshatram is required</mdb-error>\n          </div>\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n              <button (click)=\"selectStar(star)\"\n              *ngFor=\"let star of starSigns\" mdbBtn type=\"button\" color=\"grey\" [outline]=\"star !== pooja.nakshatram\" [class.selected]=\"star === pooja.nakshatram\"\n               mdbWavesEffect>{{star}}</button>\n          </div>\n        </div>\n      </form>\n       \n  \n      \n    </div>\n    <div class=\"right-section\">\n      <mdb-card class=\"text-center\">\n        <mdb-card-body>\n          <table mdbTable small=\"true\" striped=\"true\" class=\"bhakthar-table\" *ngIf=\"!peopleFetching\">\n            <tbody>\n              <tr *ngFor=\"let item of response.bhakthar\">\n                <th scope=\"row\">{{ item.name }}</th>\n                <td>{{ item.nakshatram }}</td>\n                <td>\n                  <mdb-icon fas icon=\"times\" class=\"float-right delete red-text\" (click)=\"deleteEntry(item)\" alt=\"Delete\"></mdb-icon>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"p-4 d-flex flex-column justify-content-center align-items-center\" *ngIf=\"!peopleFetching && response.bhakthar.length === 0\">\n            <mdb-icon fas icon=\"times-circle\" class=\"float-right grey-text\" alt=\"no data\"></mdb-icon>\n            <p class=\"grey-text\">No data added</p>\n          </div>\n          <div class=\"p-4 d-flex flex-column justify-content-center align-items-center\" *ngIf=\"peopleFetching\">\n            <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\n              <span class=\"sr-only\">Loading...</span>\n            </div>\n          </div>\n        </mdb-card-body>\n        <mdb-card-footer *ngIf=\"response.bhakthar.length\">\n          <span>Total Price: </span> <span class=\"price\">&#x20B9; {{response.pooja_price}}</span>\n        </mdb-card-footer>\n      </mdb-card>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" mdbBtn class=\"waves-light\" color=\"secondary\" aria-label=\"Close\" (click)=\"addPerson()\"\n      mdbWavesEffect [disabled]=\"poojasForm?.invalid\">Add Person</button>\n\n      <div class=\"d-flex\">\n        <button type=\"button\" mdbBtn class=\"waves-light\" aria-label=\"Close\" (click)=\"modalRef.hide()\"\n          mdbWavesEffect>Close</button>\n        <button type=\"button\" mdbBtn color=\"success\" [disabled]=\"peopleFetching || response.bhakthar.length === 0 || response.phone_number === ''\" class=\"relative waves-light\" mdbWavesEffect (click)=\"onSave()\">Save & Print</button>\n      </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/printer/printer.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/printer/printer.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button #buttonRef [style.display]=\"hidden ? 'none': ''\" (click)=\"triggerPrint()\">\n    <span>{{text}}</span>\n    <mdb-icon fas icon=\"print\" class=\"float-left fa-lg mr-2\" alt=\"no data\"></mdb-icon>\n</button>\n\n<div class=\"content\">\n\n    <div class=\"bills\">\n        <div #bill>\n            <header style=\"display: flex; flex-direction: column; justify-content: center; align-items: center; \">\n                <span\n                    style=\"word-wrap: break-word; font-size: 16px; border-bottom: 1px solid black; font-weight: bold; text-align: center;justify-content: center;\">{{temple.temple_name}}</span>\n                <span>{{temple.address}}</span>\n                <!-- <span>Ph: {{temple.phone_number}}</span> -->\n            </header>\n\n            <body *ngIf=\"type === 'pooja' && size === 'bill' && poojas\">\n                <div style=\"border-bottom: 1px dotted black; border-top: 1px dotted black;display: flex; flex-direction: column; justify-content: center; align-items: center; \"\n                    *ngIf=\"poojas[0]?.receipt_number\">\n                    <th>Receipt No: {{poojas[0]?.receipt_number}}</th>\n                </div>\n                <div style=\"border-bottom: 1px dotted black; border-top: 1px dotted black;display: flex; flex-direction: column; justify-content: center; align-items: center; \"\n                    *ngIf=\"poojas[0]?.pooja_name\">\n                    <th><b>{{poojas[0]?.pooja_name}}</b></th>\n                </div>\n                <br>\n                <table style=\"border-collapse: collapse; width: 100%;\">\n                    <tbody *ngFor=\"let pooja of poojas\" style=\"border-bottom: 1px dotted black\">\n                        <tr *ngIf=\"pooja?.name\">\n                            <td>Name</td>\n                            <td>{{pooja?.name}}</td>\n                        </tr>\n                        <tr *ngIf=\"pooja?.nakshatram\">\n                            <td>Nakshatram</td>\n                            <td>{{pooja?.nakshatram}}</td>\n                        </tr>\n                        <tr *ngIf=\"pooja?.pooja_price\">\n                            <td>Amount</td>\n                            <td>&#x20B9; {{pooja?.pooja_price}}</td>\n                        </tr>\n                    </tbody>\n\n                    <tbody *ngIf=\"poojas[0]\">\n                        <tr *ngIf=\"poojas[0]?.address\">\n                            <td>Address</td>\n                            <td>{{poojas[0]?.address}}</td>\n                        </tr>\n                        <tr *ngIf=\"poojas[0]?.phone_number\" style=\"border-bottom: 1px dotted black;\">\n                            <td>Phone</td>\n                            <td>{{poojas[0]?.phone_number}}</td>\n                        </tr>\n                    </tbody>\n                    <tfoot>\n                        <tr>\n                            <td><br></td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px dashed black; margin-top: 10px; background-color: whitesmoke;\">\n                            <td style=\"font-size: 16px; font-weight: bold;\"><b>Total Amount</b></td>\n                            <td style=\"font-size: 16px; font-weight: bold;\"><b>&#x20B9; {{getTotalPrice(poojas,\n                                    'pooja_price')}}</b></td>\n                        </tr>\n                        <tr>\n                            <td><br></td>\n                        </tr>\n                        <tr>\n                            <td>\n                                Billed by:\n                            </td>\n                            <td>\n                                {{temple?.displayName}}\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                Date-Time\n                            </td>\n                            <td>\n                                {{getCurrentDate()}}\n                            </td>\n                        </tr>\n                    </tfoot>\n                </table>\n            </body>\n\n\n            <body *ngIf=\"type === 'expense' && size === 'bill' && expense\">\n                <div style=\"border-bottom: 1px dotted black; border-top: 1px dotted black;display: flex; flex-direction: column; justify-content: center; align-items: center; \"\n                    *ngIf=\"expense?.receipt_number\">\n                    <th>Receipt No: {{expense?.receipt_number}}</th>\n                </div>\n                <div\n                    style=\"border-bottom: 1px dotted black; border-top: 1px dotted black;display: flex; flex-direction: column; justify-content: center; align-items: center; \">\n                    <th><b>{{expense?.item === 'Salary' ? 'Salary Slip' : 'Expense Receipt'}}</b></th>\n                </div>\n                <br>\n                <table style=\"border-collapse: collapse;\">\n                    <tbody style=\"border-bottom: 1px dotted black\">\n                        <tr *ngIf=\"expense?.item\">\n                            <td>Item</td>\n                            <td>{{expense?.item}}</td>\n                        </tr>\n                        <tr *ngIf=\"expense?.description\">\n                            <td colspan=\"2\" *ngIf=\"expense.item !== 'Salary'; else salary\">{{expense?.description}}</td>\n                            <ng-template #salary>\n                                <td>Paid To:</td>\n                                <td>{{expense.description}}</td>\n                            </ng-template>\n                        </tr>\n                        <tr *ngIf=\"expense?.cost\">\n                            <td>Cost</td>\n                            <td>&#x20B9; {{expense?.cost}}</td>\n                        </tr>\n                    </tbody>\n                    <tfoot>\n                        <tr>\n                            <td><br></td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px dashed black; margin-top: 10px; background-color: whitesmoke;\">\n                            <td style=\"font-size: 16px; font-weight: bold;\"><b>Total Amount</b></td>\n                            <td style=\"font-size: 16px; font-weight: bold;\"><b>&#x20B9; {{expense?.cost}}</b></td>\n                        </tr>\n                        <tr>\n                            <td><br></td>\n                        </tr>\n                        <tr>\n                            <td>\n                                Added by:\n                            </td>\n                            <td>\n                                {{expense?.added_by}}\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                Date\n                            </td>\n                            <td>\n                                {{expense?.expense_date}}\n                            </td>\n                        </tr>\n                    </tfoot>\n                </table>\n            </body>\n\n\n            <body *ngIf=\"type === 'donation' && size === 'bill' && donation\">\n                <div style=\"border-bottom: 1px dotted black; border-top: 1px dotted black;display: flex; flex-direction: column; justify-content: center; align-items: center; \"\n                    *ngIf=\"donation?.receipt_number\">\n                    <th>Receipt No: {{donation?.receipt_number}}</th>\n                </div>\n                <div\n                    style=\"border-bottom: 1px dotted black; border-top: 1px dotted black;display: flex; flex-direction: column; justify-content: center; align-items: center; \">\n                    <th><b>Donation Received</b></th>\n                </div>\n                <br>\n                <table style=\"border-collapse: collapse;\">\n                    <tbody style=\"border-bottom: 1px dotted black\">\n                        <tr *ngIf=\"donation?.name\">\n                            <td>Name</td>\n                            <td>{{donation?.name}}</td>\n                        </tr>\n                        <tr *ngIf=\"donation?.nakshatram\">\n                            <td>Nakshathram</td>\n                            <td>{{donation?.nakshatram}}</td>\n                        </tr>\n                        <tr *ngIf=\"donation?.address\">\n                            <td>\n                                <Address></Address>\n                            </td>\n                            <td>{{donation?.address}}</td>\n                        </tr>\n                        <tr *ngIf=\"donation?.phone_number\">\n                            <td>Phone</td>\n                            <td>{{donation?.phone_number}}</td>\n                        </tr>\n                        <tr *ngIf=\"donation?.amount\">\n                            <td>Amount</td>\n                            <td>&#x20B9; {{donation?.amount}}</td>\n                        </tr>\n                    </tbody>\n                    <tfoot>\n                        <tr>\n                            <td><br></td>\n                        </tr>\n                        <tr style=\"border-bottom: 1px dashed black; margin-top: 10px; background-color: whitesmoke;\">\n                            <td style=\"font-size: 16px; font-weight: bold;\"><b>Total Amount</b></td>\n                            <td style=\"font-size: 16px; font-weight: bold;\"><b>&#x20B9; {{donation?.amount}}</b></td>\n                        </tr>\n                        <tr>\n                            <td><br></td>\n                        </tr>\n                        <tr>\n                            <td>\n                                Added by:\n                            </td>\n                            <td>\n                                {{donation?.added_by}}\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                Date\n                            </td>\n                            <td>\n                                {{donation?.donation_date}}\n                            </td>\n                        </tr>\n                    </tfoot>\n                </table>\n            </body>\n\n\n            <body *ngIf=\"type === 'report' && reports\" class=\"report\">\n                <div\n                    style=\"border-bottom: 1px dotted black; border-top: 1px dotted black;display: flex; flex-direction: column; justify-content: center; align-items: center;\">\n                    <th><b>Consolidated Finance Report</b></th>\n                    <tr><span>period: {{reportPeriod}}</span></tr>\n                </div>\n                <br>\n                <section *ngFor=\"let report of reports\">\n                    <p style=\"font-weight: bold;padding-bottom: 10px; border-bottom: 1px solid dimgray;\">Date:\n                        <b>{{report.date}}</b>\n                    </p>\n                    <table *ngIf=\"report?.poojas.length\">\n                        <p class=\"heading\">Poojas</p>\n                        <tr><br><br></tr>\n                        <tbody style=\"border: 1px dotted black\">\n                            <tr>\n                                <td style=\"font-weight: bold;\">Date</td>\n                                <td style=\"font-weight: bold;\">Pooja Name</td>\n                                <td style=\"font-weight: bold;\">Person Name</td>\n                                <td style=\"font-weight: bold;\">Nakshathram</td>\n                                <td style=\"font-weight: bold;\">Phone</td>\n                                <td style=\"font-weight: bold;\">Amount</td>\n                            </tr>\n                            <tr *ngFor=\"let pooja of report.poojas\">\n                                <td>{{pooja.pooja_date}}</td>\n                                <td>{{pooja.pooja_name}}</td>\n                                <td>{{pooja.name}}</td>\n                                <td>{{pooja.nakshatram}}</td>\n                                <td>{{pooja.phone_number}}</td>\n                                <td><b>&#x20B9; {{pooja.pooja_price}}</b></td>\n                            </tr>\n                            <tr>\n                                <td colspan=\"5\" style=\"font-weight: bold;\">Total Amount</td>\n                                <td><b>&#x20B9; {{getTotalPrice(report.poojas, 'pooja_price')}}</b></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <br><br>\n                    <table *ngIf=\"report?.expenses.length\">\n                        <p class=\"heading\">Expenses</p>\n                        <tr><br></tr>\n                        <tbody style=\"border: 1px dotted black\">\n                            <tr>\n                                <td style=\"font-weight: bold;\">Date</td>\n                                <td style=\"font-weight: bold;\">Item</td>\n                                <td style=\"font-weight: bold;\">Description</td>\n                                <td style=\"font-weight: bold;\">Added By</td>\n                                <td style=\"font-weight: bold;\">Amount</td>\n                            </tr>\n                            <tr *ngFor=\"let expense of report.expenses\">\n                                <td>{{expense.expense_date}}</td>\n                                <td>{{expense.item}}</td>\n                                <td>{{expense.description}}</td>\n                                <td>{{expense.added_by}}</td>\n                                <td><b>&#x20B9; {{expense.cost}}</b></td>\n                            </tr>\n                            <tr>\n                                <td colspan=\"4\" style=\"font-weight: bold;\">Total Expense</td>\n                                <td><b>&#x20B9; {{getTotalPrice(report.expenses, 'cost')}}</b></td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <br><br>\n\n                    <table *ngIf=\"report?.donations.length\">\n                        <p class=\"heading\">Donations</p>\n                        <br>\n                        <tbody style=\"border: 1px dotted black\">\n                            <tr>\n                                <td style=\"font-weight: bold;\">Date</td>\n                                <td style=\"font-weight: bold;\">Name</td>\n                                <td style=\"font-weight: bold;\">Nakshatram</td>\n                                <td style=\"font-weight: bold;\">Phone Number</td>\n                                <td style=\"font-weight: bold;\">Address</td>\n                                <td style=\"font-weight: bold;\">Added By</td>\n                                <td style=\"font-weight: bold;\">Amount</td>\n                            </tr>\n                            <tr *ngFor=\"let expense of report.donations\">\n                                <td>{{expense.donation_date}}</td>\n                                <td>{{expense.name}}</td>\n                                <td>{{expense.nakshatram}}</td>\n                                <td>{{expense.phone_number}}</td>\n                                <td>{{expense.address}}</td>\n                                <td>{{expense.added_by}}</td>\n                                <td><b>&#x20B9; {{expense.amount}}</b></td>\n                            </tr>\n                            <tr>\n                                <td colspan=\"6\" style=\"font-weight: bold;\">Total Donations</td>\n                                <td><b>&#x20B9; {{getTotalPrice(report.donations, 'amount')}}</b></td>\n                            </tr>\n                        </tbody>\n                        <br><br>\n                    </table>\n                </section>\n                <div>\n                    <br><br>\n                    <footer>\n                        Generated Date:\n                        {{getCurrentDate()}}\n                    </footer>\n                </div>\n\n            </body>\n\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pwa/pwa.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pwa/pwa.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sw\">\n    <button *ngIf=\"Pwa.promptEvent\" class=\"install-button\" mdbBtn type=\"button\" gradient=\"purple\" rounded=\"true\" mdbWavesEffect\n        (click)=\"installPwa()\">Install App</button>\n    \n    <button *ngIf=\"showUpdateButton\" class=\"update-button\" mdbBtn type=\"button\" gradient=\"purple\" rounded=\"true\" mdbWavesEffect\n        (click)=\"updateSoftware()\">Update App</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/right-card/right-card.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/right-card/right-card.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card text-center mt-1 mb-2\">\n    <ng-content select=\".card-header\"></ng-content>\n    <div class=\"card-body p-0\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"card-footer text-muted\" *ngIf=\"footer\">{{ footer }}\n    </div>\n    <ng-content select=\"div[role=footer]\"></ng-content>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/user-modal/user-modal.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/user-modal/user-modal.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">×</span>\n    </button>\n    <h4 class=\"modal-title w-100\" id=\"myModalLabel\">{{ heading }}</h4>\n  </div>\n  <div class=\"modal-body\">\n    <form #userForm=\"ngForm\">\n\n      <div class=\"d-flex align-items-center\">\n      <div class=\"md-form w-100\">\n          <input type=\"text\" id=\"add_user_username\" name=\"username\" class=\"form-control\" [(ngModel)]=\"user.username\" mdbInput mdbValidate [validateSuccess]=\"false\" #username=\"ngModel\" required>\n          <label for=\"username\">Username</label>\n          <mdb-error *ngIf=\"username && username.invalid && (username.dirty || username.touched)\">username is required</mdb-error>\n        </div>\n        <span *ngIf=\"user.temple_code\">@{{ user.temple_code }}</span>\n      </div>\n\n      <div class=\"md-form\">\n        <input type=\"password\" id=\"add_user_password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" mdbInput mdbValidate [validateSuccess]=\"false\" #password=\"ngModel\" required>\n        <label for=\"password\">password</label>\n        <mdb-error *ngIf=\"password && password.invalid && (password.dirty || password.touched)\">password is required</mdb-error>\n      </div>\n\n      <div class=\"md-form\">\n        <input type=\"email\" id=\"add_user_email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" name=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" mdbInput mdbValidate [validateSuccess]=\"false\" #email=\"ngModel\" required>\n        <label for=\"email\">Email</label>\n        <mdb-error *ngIf=\"email && email.invalid && (email.dirty || email.touched)\">Email is required</mdb-error>\n      </div>\n\n      <!-- <div class=\"md-form\">\n        <input type=\"text\" id=\"add_user_temple\" name=\"temple\" class=\"form-control\" [(ngModel)]=\"user.temple\" mdbInput mdbValidate [validateSuccess]=\"false\" #temple=\"ngModel\" required>\n        <label for=\"temple\">Temple</label>\n        <mdb-error *ngIf=\"temple && temple.invalid && (temple.dirty || temple.touched)\">Temple is required</mdb-error>\n      </div> -->\n\n      <label for=\"role\" *ngIf=\"templeList.length > 1\">Temple</label>\n      <div class=\"md-form mt-0\" *ngIf=\"templeList.length > 1\">\n        <select class=\"browser-default custom-select form-control pl-1\" type=\"select\" id=\"add_user_temple\" name=\"temple\" [(ngModel)]=\"user.temple_code\" mdbSelect mdbValidate [validateSuccess]=\"false\" #temple=\"ngModel\" required>\n          <option value=\"\" disabled selected hidden>Select user temple</option>\n          <option [value]=\"temple.temple_code\" *ngFor=\"let temple of templeList\">{{ temple.temple_name }}</option>\n        </select>\n        <mdb-error *ngIf=\"temple && temple.invalid && (temple.dirty || temple.touched)\">temple is required</mdb-error>\n    </div>\n\n      <label for=\"role\">Role</label>\n      <div class=\"md-form mt-0\">\n        <select class=\"browser-default custom-select form-control pl-1\" type=\"select\" id=\"add_user_role\" name=\"role\" [(ngModel)]=\"user.role\" mdbSelect mdbValidate [validateSuccess]=\"false\" #role=\"ngModel\" required>\n          <option value=\"\" disabled selected hidden>Select user role</option>\n          <option value=\"admin\" *ngIf=\"isAdmin\">admin</option>\n          <option value=\"manager\">manager</option>\n          <option value=\"user\">user</option>\n        </select>\n        <mdb-error *ngIf=\"role && role.invalid && (role.dirty || role.touched)\">role is required</mdb-error>\n    </div>\n\n\n\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" mdbBtn color=\"white\" class=\"black-text waves-light\" aria-label=\"Close\" (click)=\"modalRef.hide()\"\n      mdbWavesEffect>Close</button>\n    <button type=\"button\" mdbBtn color=\"success\" [disabled]=\"userForm.invalid\" class=\"relative waves-light\" mdbWavesEffect (click)=\"onSave()\">Save</button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/user/user.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/user/user.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdb-card>\n  <mdb-card-header class=\"text-center bg-primary white-text\">\n    {{ user?.temple }}\n  </mdb-card-header>\n  <mdb-card-body class=\"text-center py-2\">\n    <div>\n      <span class=\"float-left\">\n        <mdb-badge *ngIf=\"user.role\" [color]=\"getColor(user.role)\">{{ user.role }}</mdb-badge>\n      </span>\n      <mdb-icon *ngIf=\"loggedInUser.username !== user.username\" fas icon=\"trash\" class=\"float-right delete grey-text\" (click)=\"deleteUser()\" alt=\"Delete user\"></mdb-icon>\n    </div>\n    <div class=\"mt-5\">\n      <img *ngIf=\"user.avatar\" src=\"{{ user.avatar }}\" height=\"90\" width=\"90\" class=\"rounded-circle z-depth-0\" alt=\"avatar image\">\n    </div>\n    <div class=\"mt-3 username\">\n      {{ user.username }}\n    </div>\n    <p class=\"grey-text small\">{{user.email}}</p>\n  </mdb-card-body>\n</mdb-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/users-list/users-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/users-list/users-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"users-list d-flex flex-wrap\">\n  <div class=\"user\" *ngFor=\"let user of users; trackBy: trackByFn\">\n    <app-user [user]=\"user\" (userSelected)=\"onUserSelected($event)\" (addAdmin)=\"onAddAdmin($event)\" (removeUser)=\"onDeleteUser($event)\"></app-user>\n  </div>\n  <div class=\"user\">\n    <mdb-card class=\"flex-wrap py-2 add-card h-100\" (click)=\"onAddUser($event)\">\n      <mdb-card-body class=\"text-center my-4 py-4 d-flex flex-column align-items-center justify-content-center\">\n        <div class=\"my-4\">\n          <mdb-icon fas icon=\"plus\" class=\"float-right mt-1 add fa-lg grey-text\" alt=\"Add user\"></mdb-icon>\n        </div>\n        <p class=\"grey-text\">Add User</p>\n      </mdb-card-body>\n    </mdb-card>\n  </div>\n  \n</div>\n");

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
		"default~poojas-poojas-module~profile-profile-module"
	],
	"./profile/profile.module": [
		"./src/app/profile/profile.module.ts",
		"default~poojas-poojas-module~profile-profile-module",
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
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
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
/* harmony import */ var _store_admin_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/admin.reducer */ "./src/app/admin/store/admin.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_admin_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/admin.effects */ "./src/app/admin/store/admin.effects.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/user-detail/user-detail.component */ "./src/app/admin/components/user-detail/user-detail.component.ts");
/* harmony import */ var _components_temple_list_temple_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/temple-list/temple-list.component */ "./src/app/admin/components/temple-list/temple-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
            declarations: [_containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailComponent"], _components_temple_list_temple_list_component__WEBPACK_IMPORTED_MODULE_11__["TempleListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["CardsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["DropdownModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["BadgeModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["IconsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["TableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["InputsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__["InputUtilitiesModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature('admin', _store_admin_reducer__WEBPACK_IMPORTED_MODULE_4__["adminReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_store_admin_effects__WEBPACK_IMPORTED_MODULE_7__["AdminEffects"]])
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/components/temple-list/temple-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/temple-list/temple-list.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".temples-list {\n  box-sizing: border-box;\n  justify-content: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.temples-list mdb-card {\n  min-width: 50%;\n}\n.temples-list mdb-card mdb-card-body {\n  overflow: auto;\n}\n.temple {\n  width: 80%;\n  margin: 1rem;\n}\n.temple .add-card:hover {\n  background-color: whitesmoke;\n  cursor: pointer;\n}\n.add {\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9BdWRpdC1VSS1Bbmd1bGFyL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy90ZW1wbGUtbGlzdC90ZW1wbGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy90ZW1wbGUtbGlzdC90ZW1wbGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSxjQUFBO0FDQ0o7QURBSTtFQUNFLGNBQUE7QUNFTjtBREdBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUNBRjtBREdJO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FDRE47QURNQTtFQUNFLFlBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdGVtcGxlLWxpc3QvdGVtcGxlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVtcGxlcy1saXN0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gIG1kYi1jYXJkIHtcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgICBtZGItY2FyZC1ib2R5IHtcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG4udGVtcGxlIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtO1xuXG4gIC5hZGQtY2FyZCB7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4uYWRkIHtcbiAgaGVpZ2h0OiA0MHB4O1xufSIsIi50ZW1wbGVzLWxpc3Qge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4udGVtcGxlcy1saXN0IG1kYi1jYXJkIHtcbiAgbWluLXdpZHRoOiA1MCU7XG59XG4udGVtcGxlcy1saXN0IG1kYi1jYXJkIG1kYi1jYXJkLWJvZHkge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRlbXBsZSB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMXJlbTtcbn1cbi50ZW1wbGUgLmFkZC1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkIHtcbiAgaGVpZ2h0OiA0MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/components/temple-list/temple-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/temple-list/temple-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: TempleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempleListComponent", function() { return TempleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var _store_admin_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/admin.actions */ "./src/app/admin/store/admin.actions.ts");
/* harmony import */ var _store_admin_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/admin.selectors */ "./src/app/admin/store/admin.selectors.ts");
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






var TempleListComponent = /** @class */ (function () {
    function TempleListComponent(store) {
        this.store = store;
        this.temples = [];
        this.newTemple = {};
        this.loadingAddTemple = false;
        this.isAdmin = false;
        //  this.initFormGroup();
    }
    TempleListComponent.prototype.initFormGroup = function () {
        if (this.templeForm) {
            this.templeForm.reset();
        }
    };
    TempleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTempleList();
        this.isLoading$ = this.store.select(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_5__["getTemplesListLoading"]);
        this.store.select(src_app_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["getUser"]).subscribe(function (user) {
            _this.isAdmin = user.isAdmin;
            _this.initFormGroup();
        });
    };
    TempleListComponent.prototype.getTempleList = function () {
        var _this = this;
        this.store.select(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_5__["getTemplesList"]).subscribe(function (temples) {
            _this.temples = temples;
            _this.initFormGroup();
        });
        this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_4__["GetTemples"]());
    };
    TempleListComponent.prototype.onAddTemple = function () {
        this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_4__["AddTemple"]({ temple: this.templeForm.value }));
    };
    TempleListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('templeForm', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], TempleListComponent.prototype, "templeForm", void 0);
    TempleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-temple-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./temple-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/temple-list/temple-list.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./temple-list.component.scss */ "./src/app/admin/components/temple-list/temple-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], TempleListComponent);
    return TempleListComponent;
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
/* harmony default export */ __webpack_exports__["default"] = (".back-button {\n  cursor: pointer;\n  font-size: 1.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9BdWRpdC1VSS1Bbmd1bGFyL3NyYy9hcHAvYWRtaW4vY29tcG9uZW50cy91c2VyLWRldGFpbC91c2VyLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy91c2VyLWRldGFpbC91c2VyLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy91c2VyLWRldGFpbC91c2VyLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjhyZW07XG59IiwiLmJhY2stYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn0iXX0= */");

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
/* harmony import */ var src_app_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
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
        this.isAdmin = false;
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
        this.store.select(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__["getTemplesList"]).subscribe(function (temples) {
            _this.templeList = temples;
        });
        this.store.select(src_app_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_8__["getUser"]).subscribe(function (user) {
            _this.isAdmin = user.isAdmin;
        });
    };
    AdminComponent.prototype.openAddUserModal = function () {
        var _this = this;
        this.modalRef = this.modalService.show(src_app_shared_components_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_7__["UserModalComponent"], __assign({}, this.modalConfig, { data: {
                heading: 'Add User',
                templeList: this.templeList
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

/***/ "./src/app/admin/guard/manager.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/guard/manager.guard.ts ***!
  \**********************************************/
/*! exports provided: ManagerGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerGuard", function() { return ManagerGuard; });
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
var ManagerGuard = /** @class */ (function () {
    function ManagerGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ManagerGuard.prototype.canActivate = function () {
        var _this = this;
        return this.authService.checkIfManger()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (isManager) {
            if (isManager) {
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
    ManagerGuard.ctorParameters = function () { return [
        { type: src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    ManagerGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ManagerGuard);
    return ManagerGuard;
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
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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



// import { AngularFireDatabase } from '@angular/fire/database';


var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
        this.selectedUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.selectedUser$ = this.selectedUser.asObservable();
    }
    AdminService.prototype.getUsersList = function () {
        // original users list api call goes here
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "?api=listUsers");
    };
    // addPooja(temple: any) {
    //   return this.http.post(
    //     `${environment.apiUrl}/users`,
    //     {
    //       ...temple
    //     }
    //   );
    // }
    AdminService.prototype.addUser = function (user) {
        var enc = Object(crypto_js__WEBPACK_IMPORTED_MODULE_2__["SHA256"])(user.password).toString();
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "?api=addUser", { params: {
                "add_username": user.username + "@" + user.temple_code,
                "add_password": enc,
                "add_role": user.role,
                "add_email": user.email
            }
        });
    };
    AdminService.prototype.deleteUser = function (username) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "?api=deleteUser", {
            params: {
                'delete_username': username
            }
        });
    };
    AdminService.prototype.getTempleList = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "?api=listTemples");
    };
    AdminService.prototype.addTemple = function (temple) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "?api=addTemple", {
            params: __assign({}, temple)
        });
    };
    AdminService.prototype.getUserCustomers = function (uid) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(uid);
    };
    AdminService.prototype.checkAdminRole = function (uid) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(uid);
    };
    AdminService.prototype.deleteUserProject = function (uid, projectId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([uid, projectId]);
    };
    AdminService.prototype.deleteUserCustomer = function (uid, customerId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([uid, customerId]);
    };
    AdminService.prototype.addAdminPrivileges = function (uid) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(uid);
    };
    AdminService.prototype.removeAdminPrivileges = function (uid) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(uid);
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
/*! exports provided: AdminActionTypes, GetUsersList, DeleteUser, AddUser, GetTemples, DeleteTemples, AddTemple, TemplesLoaded, UsersListFetched, GetUserProjects, DeleteUserProject, AdminError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminActionTypes", function() { return AdminActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUsersList", function() { return GetUsersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUser", function() { return DeleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUser", function() { return AddUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTemples", function() { return GetTemples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTemples", function() { return DeleteTemples; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTemple", function() { return AddTemple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplesLoaded", function() { return TemplesLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListFetched", function() { return UsersListFetched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserProjects", function() { return GetUserProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserProject", function() { return DeleteUserProject; });
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
    AdminActionTypes["GET_TEMPLES"] = "[Admin] Get TEMPLES";
    AdminActionTypes["TEMPLES_LOADED"] = "[Admin] TEMPLES loaded";
    AdminActionTypes["DELETE_TEMPLES"] = "[Admin] Delete TEMPLES";
    AdminActionTypes["ADD_TEMPLE_QUERY"] = "[Admin] Add TEMPLE Query";
    AdminActionTypes["TEMPLE_ADDED"] = "[Admin] temple added";
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

var GetTemples = /** @class */ (function () {
    function GetTemples() {
        this.type = AdminActionTypes.GET_TEMPLES;
    }
    return GetTemples;
}());

var DeleteTemples = /** @class */ (function () {
    function DeleteTemples(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.DELETE_TEMPLES;
    }
    return DeleteTemples;
}());

var AddTemple = /** @class */ (function () {
    function AddTemple(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.ADD_TEMPLE_QUERY;
    }
    return AddTemple;
}());

// export class TempleAdded implements Action {
//   readonly type = AdminActionTypes.TEMPLE_ADDED;
//   constructor(public payload: { temple: any }) {}
// }
var TemplesLoaded = /** @class */ (function () {
    function TemplesLoaded(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.TEMPLES_LOADED;
    }
    return TemplesLoaded;
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







var AdminEffects = /** @class */ (function () {
    function AdminEffects(actions$, adminService, toastr) {
        var _this = this;
        this.actions$ = actions$;
        this.adminService = adminService;
        this.toastr = toastr;
        this.getUsersList$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].GET_USERS_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.adminService.getUsersList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (users) {
            var usersList = users.userList.map(function (res) {
                return __assign({}, res, { avatar: 'https://img.icons8.com/bubbles/2x/user-male.png', isAdmin: res.role === 'admin' });
            });
            return (new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["UsersListFetched"]({ usersList: usersList }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this.toastr.error('Something went wrong. Please try after sometime');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error: error }));
        })); }));
        this.deleteUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].DELETE_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) { return _this.adminService.deleteUser(payload.user.username)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return (new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["GetUsersList"]());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this.toastr.error('Something went wrong. Please try after sometime');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error: error }));
        })); }));
        this.addUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].ADD_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) { return _this.adminService.addUser(payload.user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            console.log('result came', res);
            return (new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["GetUsersList"]());
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this.toastr.error('Something went wrong. Please try after sometime');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error: error }));
        })); }));
        //  @Effect({ dispatch: false })
        // addAdminPrivileges$ = this.actions$.pipe(
        //   ofType(fromAdmin.AdminActionTypes.ADD_ADMIN_PRIVILEGES),
        //   map( (action: fromAdmin.AddAdminPrivileges) => action.payload),
        //   switchMap( (payload: any) => this.adminService.addAdminPrivileges(payload.userId)
        //     .pipe(
        //       catchError( (error: any) => of(new fromAdmin.AdminError({ error })))
        //     )
        //   )
        // );
        this.getTemples$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].GET_TEMPLES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.adminService.getTempleList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return (new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["TemplesLoaded"]({ temples: data.templeList }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this.toastr.error('Something went wrong. Please try after sometime');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error: error }));
        })); }));
        this.addTemple$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].ADD_TEMPLE_QUERY), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) {
            console.log(payload);
            return _this.adminService.addTemple(payload.temple)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (list) {
                console.log(list.data);
                return (new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["GetTemples"]());
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                _this.toastr.error('Something went wrong. Please try after sometime');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error: error }));
            }));
        }));
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
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AdminEffects.prototype, "addUser$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AdminEffects.prototype, "getTemples$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AdminEffects.prototype, "addTemple$", void 0);
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
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


function adminReducer(state, action) {
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
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].GET_TEMPLES: {
            return Object.assign({}, state, {
                templesListLoading: true
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].DELETE_TEMPLES: {
            return Object.assign({}, state, {
                templesListLoading: true
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].ADD_TEMPLE_QUERY: {
            return Object.assign({}, state, {
                templesListLoading: true,
                temple: action.payload.temple
            });
        }
        // case AdminActionTypes.TEMPLE_ADDED: {
        //   return Object.assign({}, state, {
        //     temples: action.payload.temple,
        //   });
        // }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].TEMPLES_LOADED: {
            return Object.assign({}, state, {
                temples: action.payload.temples,
                templesListLoading: false
            });
        }
        // case AdminActionTypes.GET_USER_PROJECTS: {
        //   return Object.assign({}, state, {
        //     userProjectsLoading: true
        //   });
        // }
        // case AdminActionTypes.USERS_PROJECTS_LOADED: {
        //   return Object.assign({}, state, {
        //     userProjects: {...state.userProjects, [action.payload.uid]: action.payload.userProjects},
        //     userProjectsLoading: false
        //   });
        // }
        // case AdminActionTypes.GET_USER_CUSTOMERS: {
        //   return Object.assign({}, state, {
        //     userCustomersLoading: true
        //   });
        // }
        // case AdminActionTypes.USERS_CUSTOMERS_LOADED: {
        //   return Object.assign({}, state, {
        //     userCustomers: {...state.userCustomers, [action.payload.uid]: action.payload.userCustomers},
        //     userCustomersLoading: false
        //   });
        // }
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
/*! exports provided: getAdminState, getUsersList, getUsersListLoading, getTemplesList, getTemplesListLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminState", function() { return getAdminState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersList", function() { return getUsersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersListLoading", function() { return getUsersListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplesList", function() { return getTemplesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplesListLoading", function() { return getTemplesListLoading; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var getAdminState = function (state) { return state.admin; };
var getUsersList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, function (admin) { return admin.usersList; });
var getUsersListLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, function (admin) { return admin.usersListLoading; });
var getTemplesList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, function (admin) { return admin.temples; });
var getTemplesListLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, function (admin) { return admin.templesListLoading; });


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
    temples: [],
    usersListLoading: false,
    templesListLoading: false,
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
/* harmony import */ var _admin_guard_manager_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/guard/manager.guard */ "./src/app/admin/guard/manager.guard.ts");
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
            { path: 'settings', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'admin-panel', component: _admin_containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], canActivate: [_admin_guard_admin_guard__WEBPACK_IMPORTED_MODULE_8__["AdminGuard"]] },
            { path: 'reports', loadChildren: './charts/charts.module#ChartsDataModule', canActivate: [_admin_guard_manager_guard__WEBPACK_IMPORTED_MODULE_9__["ManagerGuard"]] },
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
/* harmony import */ var _interceptors_api_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./interceptors/api.interceptor */ "./src/app/interceptors/api.interceptor.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
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
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([]),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__["ServiceWorkerModule"].register('./ngsw-worker.js', {
                    // enabled: environment.production,
                    enabled: true,
                    // Register the ServiceWorker as soon as the app is stable
                    // or after 30 seconds (whichever comes first).
                    registrationStrategy: 'registerWhenStable:30000'
                })
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], useClass: _interceptors_api_interceptor__WEBPACK_IMPORTED_MODULE_17__["APIInterceptor"], multi: true },],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
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
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_6__);
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
        this.isLoading$ = this.store.select(_store_auth_selectors__WEBPACK_IMPORTED_MODULE_4__["getIsLoading"]);
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
            var request = __assign({}, this.loginForm.value);
            request.password = crypto_js__WEBPACK_IMPORTED_MODULE_6__["SHA256"](request.password);
            this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LoginRequested"](request));
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_auth_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
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
// import { mockUser } from '../models/user.model';




var AuthService = /** @class */ (function () {
    function AuthService(http, store) {
        var _this = this;
        this.http = http;
        this.store = store;
        this.store.select(_store_auth_selectors__WEBPACK_IMPORTED_MODULE_5__["getUser"]).subscribe(function (user) {
            _this.user = user;
        });
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
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "?api=login&username=" + username + "&password=" + password);
    };
    AuthService.prototype.logout = function (uid) {
        // this.updateOnlineStatus(uid, false);
        // return from(this.afAuth.auth.signOut());
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(uid);
    };
    AuthService.prototype.getUser = function () {
        // const users = this.db.object('users/' + user.temple);
        return this.store.select(_store_auth_selectors__WEBPACK_IMPORTED_MODULE_5__["getUser"]);
        // const data = {
        //   user: {
        //     ...mockUser.user,
        //     username: localStorage.getItem('username'),
        //     password: localStorage.getItem('password'),
        //     role: localStorage.getItem('role'),
        //   }
        // };
        // if (data.user.username && data.user.password) {
        //   return of(data);
        // } else {
        //   return of(null);
        // }
    };
    AuthService.prototype.saveUser = function (username, password, role) {
        window.user_id = username;
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('role', role);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ username: username, password: password, role: role });
    };
    AuthService.prototype.clearLocalData = function () {
        window.user_id = undefined;
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.removeItem('role');
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
        if (this.user && this.user.role === 'admin') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
    };
    AuthService.prototype.checkIfManger = function () {
        // return this.db.object('admins/' + uid).valueChanges();
        if (this.user && this.user.role === 'manager') {
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
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
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
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
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








// import { GravatarService } from '../../shared/services/gravatar.service';

var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, authService, router, toastr) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        // @Effect()
        // registerAction$ = this.actions$.pipe(
        //   ofType(auth.AuthActionTypes.REGISTER_REQUESTED),
        //   map((action: auth.RegisterRequested) => action.payload),
        //   switchMap(payload =>
        //     this.authService.register(payload.username, payload.password).pipe(
        //       map((res: any) => {
        //         const gravatarUrl = this.gravatarService.getUserGravatar(res.user.username);
        //         const user = {
        //           uid: res.user.temple,
        //           displayName: payload.username || res.user.displayName,
        //           username: res.user.username,
        //           password: res.user.password,
        //           email: res.user.email,
        //           photoUrl: res.user.photoURL || gravatarUrl,
        //           isAdmin: false
        //         };
        //         return user;
        //       }),
        //       switchMap((user: User) => {
        //         return [
        //           new auth.RegisterCompleted(),
        //           new auth.LoginSuccess({ user }),
        //           new auth.SaveUser({ user })
        //         ];
        //       }),
        //       tap(() => { this.router.navigateByUrl(''); }),
        //       catchError(error => {
        //         this.toastr.error('Auth Error. Please try after sometime');
        //         this.authService.clearLocalData();
        //         return of(new auth.AuthError({ error }))
        //       })
        //     )
        //   )
        // );
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
            if (res && !res.hasOwnProperty('role')) {
                _this.authService.clearLocalData();
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error: 'Username and password do not match' }));
            }
            var user = {
                temple_name: res.temple_name,
                temple_code: res.temple_code,
                address: res.temple_address || 'Temporary Address',
                phone_number: res.phone_number || '99999999',
                displayName: payload.username,
                photoUrl: _models_user_model__WEBPACK_IMPORTED_MODULE_7__["mockUser"].user.photoUrl,
                isAdmin: res.role === 'admin',
                role: res.role,
                email: res.email,
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
            _this.toastr.error('Login failed. Please check your username and password.');
            _this.authService.clearLocalData();
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error: error }));
        })); }));
        this.loginSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].LOGIN_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) {
            return [
                new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["CheckUserRole"]({ isAdmin: payload.user.isAdmin })
            ];
        }));
        this.logoutAction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].LOGOUT_REQUESTED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) {
            console.log('payload', payload);
            return _this.authService.logout(payload.user.username)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LogoutCompleted"](); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.authService.clearLocalData(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.router.navigateByUrl(''); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
                _this.toastr.error('Auth Error. Please try after sometime');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error: error }));
            }));
        }));
        this.getUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].GET_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.authService.getUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (authData) {
            if (authData) {
                var user = {
                    temple_code: authData.temple_code,
                    temple_name: authData.temple_name,
                    displayName: authData.username,
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
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }
    ]; };
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
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]])
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
                error: action.payload.error,
                isLoading: false
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
            return Object.assign({}, state, {
                isLoading: true
            });
        }
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGIN_REQUESTED: {
            return Object.assign({}, state, {
                isLoading: true
            });
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
/*! exports provided: getAuthState, getUser, getIsLoggedIn, getIsLoading, getIsAdmin, getError, isManager, isAdmin, isUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthState", function() { return getAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoggedIn", function() { return getIsLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return getIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAdmin", function() { return getIsAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isManager", function() { return isManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdmin", function() { return isAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUser", function() { return isUser; });
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
var isManager = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (auth) {
    if (auth && auth.user && auth.user.role) {
        return auth.user.role === 'manager';
    }
    return false;
});
var isAdmin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (auth) {
    if (auth && auth.user && auth.user.role) {
        return auth.user.role === 'admin';
    }
    return false;
});
var isUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (auth) {
    if (auth && auth.user && auth.user.role) {
        return auth.user.role === 'user';
    }
    return false;
});


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
/* harmony import */ var _directives_date_picker_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../directives/date-picker.directive */ "./src/app/directives/date-picker.directive.ts");
/* harmony import */ var _directives_date_transform_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../directives/date-transform.directive */ "./src/app/directives/date-transform.directive.ts");
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
                _split_body_split_body_component__WEBPACK_IMPORTED_MODULE_11__["SplitBodyComponent"],
                _directives_date_picker_directive__WEBPACK_IMPORTED_MODULE_12__["DatePickerDirective"],
                _directives_date_transform_directive__WEBPACK_IMPORTED_MODULE_13__["DateTransformDirective"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _split_body_split_body_component__WEBPACK_IMPORTED_MODULE_11__["SplitBodyComponent"],
                _directives_date_picker_directive__WEBPACK_IMPORTED_MODULE_12__["DatePickerDirective"],
                _directives_date_transform_directive__WEBPACK_IMPORTED_MODULE_13__["DateTransformDirective"]
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/dashboard/dashboard.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/core/dashboard/dashboard.component.scss")).default]
        })
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
/* harmony default export */ __webpack_exports__["default"] = (".nav-item a {\n  color: white;\n  padding-right: 50px;\n  padding-left: 50px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.navbar-nav {\n  align-items: center;\n}\n\n.nav-link.active {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n\n.logout-button {\n  display: none;\n}\n\n.avatar-dropdown {\n  display: block;\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  .nav-item a {\n    padding-right: 20px;\n    padding-left: 20px;\n  }\n}\n\n@media (max-width: 992px) {\n  .avatar-dropdown {\n    display: none;\n  }\n\n  .logout-button {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9BdWRpdC1VSS1Bbmd1bGFyL3NyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBRE9BO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BO0VBQ0UsYUFBQTtBQ0pGOztBRE9BO0VBQ0UsY0FBQTtBQ0pGOztBRFFBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLGtCQUFBO0VDTEY7QUFDRjs7QURRQTtFQUNFO0lBQ0UsYUFBQTtFQ05GOztFRFNBO0lBQ0UsY0FBQTtFQ05GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWl0ZW0gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm5hdmJhci1uYXYge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2YmFyLWJyYW5kIGltZyB7XG4gIC8vIGJhY2tncm91bmQ6IHdoaXRlO1xuICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5uYXYtbGluay5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmxvZ291dC1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYXZhdGFyLWRyb3Bkb3duIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubmF2LWl0ZW0gYSB7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hdmF0YXItZHJvcGRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubG9nb3V0LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iLCIubmF2LWl0ZW0gYSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm5hdmJhci1uYXYge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2LWxpbmsuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5sb2dvdXQtYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmF2YXRhci1kcm9wZG93biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC5uYXYtaXRlbSBhIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5hdmF0YXItZHJvcGRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubG9nb3V0LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".document-body {\n  padding-top: 67px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9BdWRpdC1VSS1Bbmd1bGFyL3NyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3VtZW50LWJvZHkge1xuICAgIHBhZGRpbmctdG9wOiA2N3B4O1xufSIsIi5kb2N1bWVudC1ib2R5IHtcbiAgcGFkZGluZy10b3A6IDY3cHg7XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".pages a {\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: large;\n}\n@media only screen and (max-width: 600px) {\n  .pages a {\n    height: 140px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9BdWRpdC1VSS1Bbmd1bGFyL3NyYy9hcHAvY29yZS9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREdJO0VBQ0k7SUFDSSxhQUFBO0VDRFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VzIHtcbiAgICBhIHtcbiAgICAgICAgaGVpZ2h0OiAyMHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIGEge1xuICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIucGFnZXMgYSB7XG4gIGhlaWdodDogMjB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5wYWdlcyBhIHtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICB9XG59Il19 */");

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
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
    function MainComponent(store) {
        this.store = store;
        this.isAdmin = false;
        this.role = '';
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.router.navigateByUrl('expenses'); // for dev purpose only so that current working page loads first
        this.store.select(src_app_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]).subscribe(function (user) {
            _this.isAdmin = user.isAdmin;
            _this.role = user.role;
        });
    };
    MainComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
    ]; };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __importDefault(__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/main/main.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./main.component.scss */ "./src/app/core/main/main.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
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
/* harmony default export */ __webpack_exports__["default"] = (".row {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 55%;\n  transform: translate(-50%, -50%);\n}\n\n.full {\n  min-height: 40rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9BdWRpdC1VSS1Bbmd1bGFyL3NyYy9hcHAvY29yZS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBRUEsZ0NBQUE7QUNDSjs7QURHRTtFQUNFLGlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1NSU7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIFxuICBcbiAgLmZ1bGwge1xuICAgIG1pbi1oZWlnaHQ6IDQwcmVtO1xuICB9IiwiLnJvdyB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTUlO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uZnVsbCB7XG4gIG1pbi1oZWlnaHQ6IDQwcmVtO1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".split-body {\n  padding-top: 10px;\n}\n@media only screen and (max-width: 768px) {\n  .split-body .right-section {\n    margin-top: 20px;\n    padding: 20px 5px;\n    border-top: 5px solid lightslategray;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9BdWRpdC1VSS1Bbmd1bGFyL3NyYy9hcHAvY29yZS9zcGxpdC1ib2R5L3NwbGl0LWJvZHkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvc3BsaXQtYm9keS9zcGxpdC1ib2R5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksaUJBQUE7QUNESjtBRFNJO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0NBQUE7RUNQTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9zcGxpdC1ib2R5L3NwbGl0LWJvZHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zcGxpdC1ib2R5IHtcbiAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xuICBcbiAgICAvLyAubGVmdC1zZWN0aW9uLCAucmlnaHQtc2VjdGlvbiB7XG4gICAgLy8gICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcbiAgICAvLyAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLy8gfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLnJpZ2h0LXNlY3Rpb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDVweDtcbiAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGxpZ2h0c2xhdGVncmF5O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAiLCIuc3BsaXQtYm9keSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3BsaXQtYm9keSAucmlnaHQtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nOiAyMHB4IDVweDtcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgbGlnaHRzbGF0ZWdyYXk7XG4gIH1cbn0iXX0= */");

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

/***/ "./src/app/directives/date-picker.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/date-picker.directive.ts ***!
  \*****************************************************/
/*! exports provided: DatePickerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerDirective", function() { return DatePickerDirective; });
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

var moment = __webpack_require__(/*! ../../assets/datepicker/moment.js */ "./src/assets/datepicker/moment.js");
var DatePickerDirective = /** @class */ (function () {
    function DatePickerDirective(elementRef) {
        this.header = '';
        this.dateSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.retry = 5;
        elementRef.nativeElement.style.cursor = 'pointer';
        this.init();
    }
    DatePickerDirective.prototype.onClick = function () {
        // console.log(this.datePickerTarget);
        this.datePickerTarget.click();
        if (this.picker) {
            this.picker.open();
            this.setHeader();
        }
    };
    DatePickerDirective.prototype.setHeader = function () {
        var _this = this;
        // console.log(moment(momentT));
        // // console.log(momentT);
        // const sone =  moment.tz.guess();
        // const timezone = moment.tz(sone).zoneAbbr();
        //   console.log('momo ', timezone);
        setTimeout(function () {
            var headerEl = document.querySelector('.c-datepicker__header-day');
            headerEl.innerHTML = _this.header + headerEl.innerHTML;
            if (_this.header) {
                document.querySelector('.js-day').style.lineHeight = '1.2';
            }
        }, 0);
    };
    DatePickerDirective.prototype.init = function () {
        var _this = this;
        this.datePickerTarget = document.querySelector('.rr-datepicker-trigger');
        if (this.datePickerTarget) {
            this.datePickerTarget.addEventListener('createDatePicker', function ($ev) {
                var MaterialDatetimePicker = $ev.detail.datePickerRef;
                _this.picker = new MaterialDatetimePicker({
                    default: _this.date || moment(),
                    startDate: _this.startDate || moment().subtract('1', 'month'),
                    endDate: _this.endDate || moment().add('1', 'month')
                }).on('submit', function (date) {
                    _this.date = date;
                    _this.dateSelected.emit(date);
                });
            });
        }
        else if (this.retry > 0) {
            /**
             * Section to retry date picker init 5 times
             * if datepicker JS is not rendered during component init. After 5 tries, it withdraws the directive init.
             */
            setTimeout(function () {
                _this.retry--;
                // console.log({retry: this.retry});
                _this.init();
            }, 100);
        }
    };
    DatePickerDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatePickerDirective.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatePickerDirective.prototype, "date", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatePickerDirective.prototype, "startDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DatePickerDirective.prototype, "endDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DatePickerDirective.prototype, "dateSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DatePickerDirective.prototype, "onClick", null);
    DatePickerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[rrDatePicker]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DatePickerDirective);
    return DatePickerDirective;
}());



/***/ }),

/***/ "./src/app/directives/date-transform.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/directives/date-transform.directive.ts ***!
  \********************************************************/
/*! exports provided: DateTransformDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTransformDirective", function() { return DateTransformDirective; });
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

var moment = __webpack_require__(/*! ../../assets/datepicker/moment.js */ "./src/assets/datepicker/moment.js");
var DateTransformDirective = /** @class */ (function () {
    function DateTransformDirective(elementRef) {
        this.format = "dddd DD/MM/YYYY";
        this.date = moment().format('YYYY-MM-DD');
        this.elementRef = elementRef;
    }
    DateTransformDirective.prototype.ngOnChanges = function () {
        this.elementRef.nativeElement.innerHTML = moment(this.date, 'YYYY-MM-DD').format(this.format);
    };
    DateTransformDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DateTransformDirective.prototype, "format", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DateTransformDirective.prototype, "date", void 0);
    DateTransformDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDateTransform]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], DateTransformDirective);
    return DateTransformDirective;
}());



/***/ }),

/***/ "./src/app/expenses/indexedDB/indexedDB.module.ts":
/*!********************************************************!*\
  !*** ./src/app/expenses/indexedDB/indexedDB.module.ts ***!
  \********************************************************/
/*! exports provided: migrationFactory, IndexedDBModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "migrationFactory", function() { return migrationFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedDBModule", function() { return IndexedDBModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_indexed_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-indexed-db */ "./node_modules/ngx-indexed-db/fesm2015/ngx-indexed-db.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


function migrationFactory() {
    // The animal table was added with version 2 but none of the existing tables or data needed
    // to be modified so a migrator for that version is not included.
    return {
        1: function (db, transaction) {
            console.log(db);
            var store1 = transaction.objectStore('expenses');
            store1.createIndex('item', 'item', { unique: true });
            store1.createIndex('frequency', 'frequency', { unique: false });
            var store2 = transaction.objectStore('salary');
            store2.createIndex('person', 'person', { unique: true });
            store2.createIndex('amount', 'amount', { unique: false });
            store2.createIndex('frequency', 'frequency', { unique: false });
        }
    };
}
var dbConfig = {
    name: 'RRDB',
    version: 1,
    objectStoresMeta: [{
            store: 'expenses',
            storeConfig: { keyPath: 'item', autoIncrement: false },
            storeSchema: [
                { name: 'item', keypath: 'item', options: { unique: true } },
                { name: 'frequency', keypath: 'frequency', options: { unique: false } }
            ]
        }, {
            store: 'salary',
            storeConfig: { keyPath: 'person', autoIncrement: false },
            storeSchema: [
                { name: 'person', keypath: 'person', options: { unique: true } },
                { name: 'amount', keypath: 'amount', options: { unique: false } },
                { name: 'frequency', keypath: 'frequency', options: { unique: false } }
            ]
        }],
    migrationFactory: migrationFactory
};
var IndexedDBModule = /** @class */ (function () {
    function IndexedDBModule() {
    }
    IndexedDBModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                ngx_indexed_db__WEBPACK_IMPORTED_MODULE_1__["NgxIndexedDBModule"].forRoot(dbConfig)
            ]
        })
    ], IndexedDBModule);
    return IndexedDBModule;
}());



/***/ }),

/***/ "./src/app/interceptors/api.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/interceptors/api.interceptor.ts ***!
  \*************************************************/
/*! exports provided: APIInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIInterceptor", function() { return APIInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
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



/** Pass untouched request through to the next request handler. */
var APIInterceptor = /** @class */ (function () {
    function APIInterceptor(store) {
        var _this = this;
        this.store = store;
        this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]).subscribe(function (user) {
            _this.user = user;
        });
    }
    APIInterceptor.prototype.intercept = function (req, next) {
        if (this.user && !req.url.includes('login')) {
            var authReq = req.clone({
                url: req.url + "&username=" + this.user.username + "&password=" + this.user.password
            });
            return next.handle(authReq);
        }
        return next.handle(req);
    };
    APIInterceptor.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
    ]; };
    APIInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], APIInterceptor);
    return APIInterceptor;
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

/***/ "./src/app/poojas/services/poojas.service.ts":
/*!***************************************************!*\
  !*** ./src/app/poojas/services/poojas.service.ts ***!
  \***************************************************/
/*! exports provided: PoojasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoojasService", function() { return PoojasService; });
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




var PoojasService = /** @class */ (function () {
    function PoojasService(http) {
        this.http = http;
    }
    Object.defineProperty(PoojasService.prototype, "userId", {
        get: function () {
            return 'uid';
        },
        enumerable: true,
        configurable: true
    });
    PoojasService.prototype.addPoojaType = function (newPooja) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "?api=addPoojaType", {
            params: __assign({}, newPooja)
        });
    };
    PoojasService.prototype.addPooja = function (newPooja) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "?api=addPooja", __assign({}, newPooja));
    };
    PoojasService.prototype.getPoojaTypes = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "?api=listPoojaTypes");
    };
    PoojasService.prototype.getPoojas = function (date) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "?api=listPoojas", {
            params: {
                'ist_YYYYMMDD': date
            }
        });
    };
    PoojasService.prototype.update = function (poojas, userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([poojas, userId]);
    };
    PoojasService.prototype.deletePoojaType = function (pooja_code) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "?api=deletePoojaType", {
            params: {
                pooja_code: pooja_code
            }
        });
    };
    PoojasService.prototype.getPersonsByPhoneNumber = function (phoneNumber) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "?api=getPersonsByPhoneNumber", {
            params: {
                phone_number: phoneNumber
            }
        });
    };
    PoojasService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PoojasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PoojasService);
    return PoojasService;
}());



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
/* harmony default export */ __webpack_exports__["default"] = (".star-container .hidden {\n  display: none;\n}\n.star-container .btn-group {\n  display: inline-block;\n}\n.star-container .btn-group button {\n  padding: 5px;\n}\n.star-container .btn-group button.selected {\n  background-color: darkgreen;\n  border: 1px solid darkgreen;\n  color: white;\n  font-weight: bold;\n  padding: 20px;\n}\n#address {\n  min-height: 40px;\n}\n.modal-title {\n  text-transform: uppercase;\n}\n.modal-body {\n  overflow: auto;\n  display: flex;\n  max-height: 65vh;\n}\n.modal-body .left-section {\n  width: 50%;\n}\n.modal-body .right-section {\n  width: 50%;\n  padding: 10px 20px;\n}\n@media only screen and (max-width: 768px) {\n  .modal-body {\n    flex-direction: column;\n  }\n  .modal-body .left-section {\n    width: 100%;\n  }\n  .modal-body .right-section {\n    width: 100%;\n  }\n}\n@media only screen and (max-height: 500px) {\n  .modal-body {\n    max-height: 45vh !important;\n  }\n}\n.modal-footer {\n  justify-content: space-between;\n}\n.phone {\n  margin: 0;\n}\n.delete {\n  cursor: pointer;\n}\n.datepicker {\n  display: flex;\n  justify-content: space-between;\n}\n.datepicker button {\n  font-size: large;\n}\n.bhakthar-table {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9BdWRpdC1VSS1Bbmd1bGFyL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9vamFzLW1vZGFsL3Bvb2phcy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9vamFzLW1vZGFsL3Bvb2phcy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGFBQUE7QUNGUjtBRElJO0VBQ0kscUJBQUE7QUNGUjtBREdRO0VBQ0ksWUFBQTtBQ0RaO0FESVE7RUFDSSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ0ZaO0FET0E7RUFDSSxnQkFBQTtBQ0pKO0FET0E7RUFDSSx5QkFBQTtBQ0pKO0FET0E7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDSko7QURNSTtFQUNJLFVBQUE7QUNKUjtBRE1JO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDSlI7QURPSTtFQWJKO0lBY1Esc0JBQUE7RUNKTjtFREtNO0lBQ0ksV0FBQTtFQ0hWO0VES007SUFDSSxXQUFBO0VDSFY7QUFDRjtBRFFBO0VBQ0k7SUFDSSwyQkFBQTtFQ0xOO0FBQ0Y7QURRQTtFQUNJLDhCQUFBO0FDTko7QURTQTtFQUNJLFNBQUE7QUNOSjtBRFNBO0VBQ0ksZUFBQTtBQ05KO0FEUUE7RUFHSSxhQUFBO0VBQ0EsOEJBQUE7QUNQSjtBRFFJO0VBQ0ksZ0JBQUE7QUNOUjtBRFVBO0VBQ0ksZ0JBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Bvb2phcy1tb2RhbC9wb29qYXMtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zdGFyLWNvbnRhaW5lciB7XG5cbiAgICAuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmJ0bi1ncm91cCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJ1dHRvbi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JlZW47XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiNhZGRyZXNzIHtcbiAgICBtaW4taGVpZ2h0OiA0MHB4O1xufVxuXG4ubW9kYWwtdGl0bGUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC1oZWlnaHQ6IDY1dmg7XG4gIFxuICAgIC5sZWZ0LXNlY3Rpb24ge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbiAgICAucmlnaHQtc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5sZWZ0LXNlY3Rpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnJpZ2h0LXNlY3Rpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgXG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgIC5tb2RhbC1ib2R5IHtcbiAgICAgICAgbWF4LWhlaWdodDogNDV2aCAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGhvbmUge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmRlbGV0ZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRhdGVwaWNrZXIge1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyByaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBidXR0b24ge1xuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIH1cbn1cblxuLmJoYWt0aGFyLXRhYmxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufSIsIi5zdGFyLWNvbnRhaW5lciAuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zdGFyLWNvbnRhaW5lciAuYnRuLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnN0YXItY29udGFpbmVyIC5idG4tZ3JvdXAgYnV0dG9uIHtcbiAgcGFkZGluZzogNXB4O1xufVxuLnN0YXItY29udGFpbmVyIC5idG4tZ3JvdXAgYnV0dG9uLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNhZGRyZXNzIHtcbiAgbWluLWhlaWdodDogNDBweDtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LWhlaWdodDogNjV2aDtcbn1cbi5tb2RhbC1ib2R5IC5sZWZ0LXNlY3Rpb24ge1xuICB3aWR0aDogNTAlO1xufVxuLm1vZGFsLWJvZHkgLnJpZ2h0LXNlY3Rpb24ge1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5tb2RhbC1ib2R5IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5tb2RhbC1ib2R5IC5sZWZ0LXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tb2RhbC1ib2R5IC5yaWdodC1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAubW9kYWwtYm9keSB7XG4gICAgbWF4LWhlaWdodDogNDV2aCAhaW1wb3J0YW50O1xuICB9XG59XG4ubW9kYWwtZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGhvbmUge1xuICBtYXJnaW46IDA7XG59XG5cbi5kZWxldGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXRlcGlja2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRhdGVwaWNrZXIgYnV0dG9uIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmJoYWt0aGFyLXRhYmxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */");

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
/* harmony import */ var src_app_poojas_services_poojas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/poojas/services/poojas.service */ "./src/app/poojas/services/poojas.service.ts");
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
var moment = __webpack_require__(/*! ../../../../assets/datepicker/moment.js */ "./src/assets/datepicker/moment.js");
var PoojasModalComponent = /** @class */ (function () {
    function PoojasModalComponent(modalRef, poojaService) {
        this.modalRef = modalRef;
        this.poojaService = poojaService;
        this.defaultDate = moment();
        this.startDate = moment();
        this.endDate = moment().add('30', 'days');
        this.selectedDate = moment();
        this.pooja = {};
        this.poojasData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.starSigns = src_app_poojas_models_poojas_model__WEBPACK_IMPORTED_MODULE_4__["starSigns"];
        this.response = {
            pooja_code: '',
            phone_number: '',
            address: '',
            bhakthar: [],
            pooja_price: '0',
            ist_YYYYMMDD: this.selectedDate.format('YYYY-MM-DD')
        };
        this.peopleFetching = false;
    }
    PoojasModalComponent.prototype.ngOnInit = function () {
        this.response.pooja_code = this.code;
    };
    PoojasModalComponent.prototype.onClose = function () {
        this.modalRef.hide();
    };
    PoojasModalComponent.prototype.datePicked = function (date) {
        console.log(date);
        this.response.ist_YYYYMMDD = date.format('YYYY-MM-DD');
        this.selectedDate = date;
    };
    PoojasModalComponent.prototype.dateClicked = function (date) {
        console.log(date);
    };
    PoojasModalComponent.prototype.onSave = function () {
        if (this.response.bhakthar.length > 0) {
            this.poojasData.next(this.response);
            this.modalRef.hide();
        }
        else {
            var controls_1 = this.poojasForm.controls;
            Object.keys(controls_1).forEach(function (controlName) { return controls_1[controlName].markAsTouched(); });
        }
    };
    PoojasModalComponent.prototype.selectStar = function (star) {
        this.pooja.nakshatram = star;
    };
    PoojasModalComponent.prototype.deleteEntry = function (item) {
        this.response.bhakthar.splice(this.response.bhakthar.indexOf(item), 1);
    };
    PoojasModalComponent.prototype.addPerson = function () {
        this.response.bhakthar.push(this.poojasForm.value);
        this.response.pooja_price = "" + (+(this.price) + +(this.response.pooja_price));
        this.poojasForm.reset();
    };
    PoojasModalComponent.prototype.fetchPeopleData = function (phoneNumber) {
        var _this = this;
        this.peopleFetching = true;
        if (phoneNumber.length > 3) {
            this.poojaService.getPersonsByPhoneNumber(phoneNumber).subscribe(function (data) {
                _this.peopleFetching = false;
                if (data && data.persons) {
                    _this.response.bhakthar = data.persons;
                    _this.response.pooja_price = "" + +(_this.price) * data.persons.length;
                    _this.poojasForm.reset();
                }
            }, function () {
                _this.peopleFetching = false;
            });
        }
    };
    PoojasModalComponent.ctorParameters = function () { return [
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBModalRef"] },
        { type: src_app_poojas_services_poojas_service__WEBPACK_IMPORTED_MODULE_5__["PoojasService"] }
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
        __metadata("design:paramtypes", [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBModalRef"],
            src_app_poojas_services_poojas_service__WEBPACK_IMPORTED_MODULE_5__["PoojasService"]])
    ], PoojasModalComponent);
    return PoojasModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/printer/printer.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/printer/printer.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  border: none;\n  outline: none;\n  background-color: transparent;\n}\n\n.content {\n  display: none;\n}\n\n@media print {\n  .content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9BdWRpdC1VSS1Bbmd1bGFyL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJpbnRlci9wcmludGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcmludGVyL3ByaW50ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0FDQUo7O0FER0E7RUFDSTtJQUNJLGFBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7RUNBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJpbnRlci9wcmludGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbn1cblxuIiwiYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/printer/printer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/printer/printer.component.ts ***!
  \****************************************************************/
/*! exports provided: PrinterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrinterComponent", function() { return PrinterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
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
var PrinterComponent = /** @class */ (function () {
    function PrinterComponent(store, cdr) {
        var _this = this;
        this.store = store;
        this.cdr = cdr;
        this.type = 'pooja';
        this.size = 'bill';
        this.text = '';
        this.reportPeriod = '';
        this.hidden = false;
        this.triggerPrint = function () {
            _this.cdr.detectChanges();
            setTimeout(function () {
                _this.newWindowPrint(_this.bill.nativeElement.innerHTML);
            }, 0);
        };
        this.store.select(src_app_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]).subscribe(function (user) {
            _this.temple = user;
        });
    }
    PrinterComponent.prototype.ngOnInit = function () {
    };
    PrinterComponent.prototype.getTotalPrice = function (poojas, key) {
        return poojas.reduce(function (a, b) { return +(b[key]) + a; }, 0);
    };
    PrinterComponent.prototype.getCurrentDate = function () {
        return moment().format("DD-MM-YYYY HH:mm");
    };
    PrinterComponent.prototype.newWindowPrint = function (content) {
        var printerWindow = window.open('', '', 'width=2in');
        printerWindow.document.write("\n    <html> \n      <style> \n        header {max-width: 100%!important; word-break: break-word; } \n        .heading{font-weight: bold; border-bottom: 1px dotted black; margin: 5px 10px;} \n        .report table td {border: 1px solid black;} td{word-break:break-word;} \n        .report table {border-collapse: collapse; width: 90%; margin-left: 2%;} \n        .report tr td:first-child {min-width: 80px;} \n      </style>\n    ");
        printerWindow.document.write('<body>');
        printerWindow.document.write(content);
        if (this.type !== 'report') {
            printerWindow.document.write("\n      <br><br><hr>\n      <span style=\"color: gray;\n      border: 1px dotted black;\n      padding: 5px;\">Duplicate copy</span>\n      <br><br>\n      " + (localStorage.getItem('printerPageSize') === 'bill' ? "\n        <style>\n        html{\n          width: 2in;\n        }\n      </style>" : "") + "\n      ");
            printerWindow.document.write(content);
        }
        printerWindow.document.write('</body></html>');
        printerWindow.document.close();
        printerWindow.focus();
        printerWindow.print();
        printerWindow.onfocus = function () { setTimeout(function () { printerWindow.close(); }, 500); };
    };
    PrinterComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrinterComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PrinterComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrinterComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrinterComponent.prototype, "reportPeriod", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrinterComponent.prototype, "poojas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrinterComponent.prototype, "expense", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrinterComponent.prototype, "donation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrinterComponent.prototype, "reports", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrinterComponent.prototype, "hidden", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('buttonRef', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PrinterComponent.prototype, "buttonRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('bill', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PrinterComponent.prototype, "bill", void 0);
    PrinterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-printer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./printer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/printer/printer.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./printer.component.scss */ "./src/app/shared/components/printer/printer.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], PrinterComponent);
    return PrinterComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/pwa/pwa.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/pwa/pwa.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sw {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9BdWRpdC1VSS1Bbmd1bGFyL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHdhL3B3YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHdhL3B3YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wd2EvcHdhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgYm90dG9tOiAyMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIiwiLnN3IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMjBweDtcbiAgYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/pwa/pwa.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/pwa/pwa.component.ts ***!
  \********************************************************/
/*! exports provided: PwaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PwaComponent", function() { return PwaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pwa_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pwa-service.service */ "./src/app/shared/services/pwa-service.service.ts");
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


var PwaComponent = /** @class */ (function () {
    function PwaComponent(Pwa) {
        this.Pwa = Pwa;
        this.showUpdateButton = false;
    }
    PwaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Pwa.askUserToUpdate.subscribe(function () {
            _this.showUpdateButton = true;
        });
    };
    PwaComponent.prototype.installPwa = function () {
        this.Pwa.promptEvent.prompt();
    };
    PwaComponent.prototype.updateSoftware = function () {
        this.Pwa.updateSoftware();
    };
    PwaComponent.ctorParameters = function () { return [
        { type: _services_pwa_service_service__WEBPACK_IMPORTED_MODULE_1__["PwaService"] }
    ]; };
    PwaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pwa',
            template: __importDefault(__webpack_require__(/*! raw-loader!./pwa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pwa/pwa.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./pwa.component.scss */ "./src/app/shared/components/pwa/pwa.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_services_pwa_service_service__WEBPACK_IMPORTED_MODULE_1__["PwaService"]])
    ], PwaComponent);
    return PwaComponent;
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
/* harmony default export */ __webpack_exports__["default"] = (".card-body {\n  max-height: 100vh;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9BdWRpdC1VSS1Bbmd1bGFyL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmlnaHQtY2FyZC9yaWdodC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9yaWdodC1jYXJkL3JpZ2h0LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JpZ2h0LWNhcmQvcmlnaHQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufSIsIi5jYXJkLWJvZHkge1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59Il19 */");

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

/***/ "./src/app/shared/components/tabs/tab.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/tabs/tab.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav li {\n  cursor: pointer;\n}\n.nav li a {\n  font-size: large;\n  padding: 10px;\n  font-weight: bold;\n  color: gray;\n}\n.nav li a.active {\n  color: #4285f4;\n}\n.tab.active {\n  color: gray;\n}\n.tab-close {\n  color: gray;\n  text-align: right;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9BdWRpdC1VSS1Bbmd1bGFyL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFicy90YWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RhYnMvdGFiLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGO0FEQ0U7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNDSjtBRENFO0VBQ0UsY0FBQTtBQ0NKO0FER0E7RUFDRSxXQUFBO0FDQUY7QURHQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RhYnMvdGFiLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdiBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICBhIHtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IGdyYXk7XG4gIH1cbiAgYS5hY3RpdmUge1xuICAgIGNvbG9yOiAjNDI4NWY0O1xuICB9XG59XG5cbi50YWIuYWN0aXZlIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi50YWItY2xvc2Uge1xuICBjb2xvcjogZ3JheTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCIubmF2IGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm5hdiBsaSBhIHtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBncmF5O1xufVxuLm5hdiBsaSBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjNDI4NWY0O1xufVxuXG4udGFiLmFjdGl2ZSB7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4udGFiLWNsb3NlIHtcbiAgY29sb3I6IGdyYXk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/tabs/tab.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/tabs/tab.component.ts ***!
  \*********************************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */
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

var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.active = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('tabTitle'),
        __metadata("design:type", String)
    ], TabComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabComponent.prototype, "active", void 0);
    TabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rr-tab',
            template: "\n     <div [hidden]=\"!active\" class=\"pane\">\n       <ng-content></ng-content>\n     </div>\n   ",
            styles: ["\n     .pane{\n       padding: 1em;\n     }\n   "]
        })
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/tabs/tabs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/tabs/tabs.component.ts ***!
  \**********************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab.component */ "./src/app/shared/components/tabs/tab.component.ts");
/**
 * The main component that renders single TabComponent
 * instances.
 */
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


var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
    }
    // contentChildren are set
    TabsComponent.prototype.ngAfterContentInit = function () {
        // get all active tabs
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    TabsComponent.prototype.selectTab = function (tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
        // activate the tab the user has clicked on.
        tab.active = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_tab_component__WEBPACK_IMPORTED_MODULE_1__["TabComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], TabsComponent.prototype, "tabs", void 0);
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'rr-tabs',
            template: "\n      <ul class=\"nav nav-tabs navbar-nav d-flex flex-row\">\n        <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" [class.nav-item]=\"true\">\n          <a [class]=\"'nav-link waves-light'\" [class.active]=\"tab.active\">{{tab.title}}</a>\n        </li>\n      </ul>\n      <ng-content></ng-content>\n    ",
            styles: [__importDefault(__webpack_require__(/*! ./tab.component.scss */ "./src/app/shared/components/tabs/tab.component.scss")).default]
        })
    ], TabsComponent);
    return TabsComponent;
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
/* harmony import */ var src_app_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
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
    function UserModalComponent(modalRef, store) {
        this.modalRef = modalRef;
        this.store = store;
        this.isAdmin = false;
        this.user = { username: '', password: '', email: '', role: '' };
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    UserModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(src_app_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_4__["getUser"]).subscribe(function (user) {
            _this.isAdmin = user.isAdmin;
        });
        if (this.templeList.length === 1) {
            this.user.temple_code = this.templeList[0].temple_code;
        }
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
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
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
        __metadata("design:paramtypes", [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalRef"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]])
    ], UserModalComponent);
    return UserModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/user/user.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/user/user.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".delete {\n  cursor: pointer;\n}\n\n:host, .username {\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9BdWRpdC1VSS1Bbmd1bGFyL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGV0ZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QsIC51c2VybmFtZSB7XG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XG59IiwiLmRlbGV0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuOmhvc3QsIC51c2VybmFtZSB7XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/user/user.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/user/user.component.ts ***!
  \**********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
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
    function UserComponent(store) {
        this.store = store;
        this.userSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(src_app_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]).subscribe(function (user) {
            _this.loggedInUser = user;
        });
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
    UserComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
    ]; };
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/user/user.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./user.component.scss */ "./src/app/shared/components/user/user.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/users-list/users-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/users-list/users-list.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".users-list {\n  box-sizing: border-box;\n  justify-content: center;\n}\n\n.user {\n  width: 80%;\n  margin: 1rem;\n}\n\n.user .add-card:hover {\n  background-color: whitesmoke;\n  cursor: pointer;\n}\n\n@media (min-width: 768px) {\n  .user {\n    width: calc(50% - 2rem);\n  }\n\n  .users-list {\n    justify-content: normal;\n  }\n}\n\n@media (min-width: 992px) {\n  .user {\n    width: calc(33.3333% - 2rem);\n  }\n}\n\n@media (min-width: 1200px) {\n  .user {\n    width: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9BdWRpdC1VSS1Bbmd1bGFyL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy91c2Vycy1saXN0L3VzZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVJO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FDQU47O0FES0E7RUFDRTtJQUNJLHVCQUFBO0VDRko7O0VES0E7SUFDSSx1QkFBQTtFQ0ZKO0FBQ0Y7O0FES0E7RUFDRTtJQUNJLDRCQUFBO0VDSEo7QUFDRjs7QURNQTtFQUNFO0lBQ0ksV0FBQTtFQ0pKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy91c2Vycy1saXN0L3VzZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcnMtbGlzdCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udXNlciB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMXJlbTtcblxuICAuYWRkLWNhcmQge1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC51c2VyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDJyZW0pO1xuICB9XG5cbiAgLnVzZXJzLWxpc3Qge1xuICAgICAganVzdGlmeS1jb250ZW50OiBub3JtYWw7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC51c2VyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDMzLjMzMzMlIC0gMnJlbSk7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAudXNlciB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgfVxufSIsIi51c2Vycy1saXN0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi51c2VyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtO1xufVxuLnVzZXIgLmFkZC1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnVzZXIge1xuICAgIHdpZHRoOiBjYWxjKDUwJSAtIDJyZW0pO1xuICB9XG5cbiAgLnVzZXJzLWxpc3Qge1xuICAgIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnVzZXIge1xuICAgIHdpZHRoOiBjYWxjKDMzLjMzMzMlIC0gMnJlbSk7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnVzZXIge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/users-list/users-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/users-list/users-list.component.ts ***!
  \**********************************************************************/
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
            template: __importDefault(__webpack_require__(/*! raw-loader!./users-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/users-list/users-list.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./users-list.component.scss */ "./src/app/shared/components/users-list/users-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/pwa-service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/pwa-service.service.ts ***!
  \********************************************************/
/*! exports provided: PwaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PwaService", function() { return PwaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
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



var PwaService = /** @class */ (function () {
    function PwaService(swUpdate) {
        var _this = this;
        this.swUpdate = swUpdate;
        this.$askUserToUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.askUserToUpdate = this.$askUserToUpdate.asObservable();
        this.swUpdate.available.subscribe(function (event) {
            _this.$askUserToUpdate.next(event);
        });
        window.addEventListener('beforeinstallprompt', function (event) {
            _this.promptEvent = event;
        });
    }
    PwaService.prototype.updateSoftware = function () {
        window.location.reload();
    };
    PwaService.ctorParameters = function () { return [
        { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"] }
    ]; };
    PwaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_1__["SwUpdate"]])
    ], PwaService);
    return PwaService;
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
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/users-list/users-list.component */ "./src/app/shared/components/users-list/users-list.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/shared/components/user/user.component.ts");
/* harmony import */ var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/tabs/tabs.component */ "./src/app/shared/components/tabs/tabs.component.ts");
/* harmony import */ var _components_tabs_tab_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/tabs/tab.component */ "./src/app/shared/components/tabs/tab.component.ts");
/* harmony import */ var _components_printer_printer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/printer/printer.component */ "./src/app/shared/components/printer/printer.component.ts");
/* harmony import */ var _expenses_indexedDB_indexedDB_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../expenses/indexedDB/indexedDB.module */ "./src/app/expenses/indexedDB/indexedDB.module.ts");
/* harmony import */ var _components_pwa_pwa_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pwa/pwa.component */ "./src/app/shared/components/pwa/pwa.component.ts");
/* harmony import */ var _services_pwa_service_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/pwa-service.service */ "./src/app/shared/services/pwa-service.service.ts");
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
                _components_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_9__["UserModalComponent"],
                _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_11__["UsersListComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
                _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"],
                _components_tabs_tab_component__WEBPACK_IMPORTED_MODULE_14__["TabComponent"],
                _components_printer_printer_component__WEBPACK_IMPORTED_MODULE_15__["PrinterComponent"],
                _components_pwa_pwa_component__WEBPACK_IMPORTED_MODULE_17__["PwaComponent"]
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
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CardsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CollapseModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["DropdownModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["BadgeModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
                _expenses_indexedDB_indexedDB_module__WEBPACK_IMPORTED_MODULE_16__["IndexedDBModule"]
            ],
            exports: [
                _components_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_6__["CustomersListComponent"],
                _components_poojas_modal_poojas_modal_component__WEBPACK_IMPORTED_MODULE_7__["PoojasModalComponent"],
                _components_right_card_right_card_component__WEBPACK_IMPORTED_MODULE_8__["RightCardComponent"],
                _components_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_9__["UserModalComponent"],
                _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_11__["UsersListComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
                _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"],
                _components_tabs_tab_component__WEBPACK_IMPORTED_MODULE_14__["TabComponent"],
                _components_printer_printer_component__WEBPACK_IMPORTED_MODULE_15__["PrinterComponent"],
                _components_pwa_pwa_component__WEBPACK_IMPORTED_MODULE_17__["PwaComponent"]
            ],
            providers: [_services_pwa_service_service__WEBPACK_IMPORTED_MODULE_18__["PwaService"]],
            entryComponents: [
                _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"],
                _components_customers_modal_customers_modal_component__WEBPACK_IMPORTED_MODULE_4__["CustomersModalComponent"],
                _components_poojas_modal_poojas_modal_component__WEBPACK_IMPORTED_MODULE_7__["PoojasModalComponent"],
                _components_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_9__["UserModalComponent"],
                _components_printer_printer_component__WEBPACK_IMPORTED_MODULE_15__["PrinterComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/assets/datepicker/moment.js":
/*!*****************************************!*\
  !*** ./src/assets/datepicker/moment.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {(function (global, factory) {
   true ? module.exports = factory() :
  undefined
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
  return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
  hookCallback = callback;
}

function isArray(input) {
  return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
  // IE8 will treat undefined and null as object if it wasn't for
  // input != null
  return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
  var k;
  for (k in obj) {
      // even if its not own property I'd still call it non-empty
      return false;
  }
  return true;
}

function isNumber(input) {
  return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
  return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
  var res = [], i;
  for (i = 0; i < arr.length; ++i) {
      res.push(fn(arr[i], i));
  }
  return res;
}

function hasOwnProp(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
  for (var i in b) {
      if (hasOwnProp(b, i)) {
          a[i] = b[i];
      }
  }

  if (hasOwnProp(b, 'toString')) {
      a.toString = b.toString;
  }

  if (hasOwnProp(b, 'valueOf')) {
      a.valueOf = b.valueOf;
  }

  return a;
}

function createUTC (input, format, locale, strict) {
  return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
  // We need to deep clone this object.
  return {
      empty           : false,
      unusedTokens    : [],
      unusedInput     : [],
      overflow        : -2,
      charsLeftOver   : 0,
      nullInput       : false,
      invalidMonth    : null,
      invalidFormat   : false,
      userInvalidated : false,
      iso             : false,
      parsedDateParts : [],
      meridiem        : null
  };
}

function getParsingFlags(m) {
  if (m._pf == null) {
      m._pf = defaultParsingFlags();
  }
  return m._pf;
}

var some;
if (Array.prototype.some) {
  some = Array.prototype.some;
} else {
  some = function (fun) {
      var t = Object(this);
      var len = t.length >>> 0;

      for (var i = 0; i < len; i++) {
          if (i in t && fun.call(this, t[i], i, t)) {
              return true;
          }
      }

      return false;
  };
}

var some$1 = some;

function isValid(m) {
  if (m._isValid == null) {
      var flags = getParsingFlags(m);
      var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
          return i != null;
      });
      var isNowValid = !isNaN(m._d.getTime()) &&
          flags.overflow < 0 &&
          !flags.empty &&
          !flags.invalidMonth &&
          !flags.invalidWeekday &&
          !flags.nullInput &&
          !flags.invalidFormat &&
          !flags.userInvalidated &&
          (!flags.meridiem || (flags.meridiem && parsedParts));

      if (m._strict) {
          isNowValid = isNowValid &&
              flags.charsLeftOver === 0 &&
              flags.unusedTokens.length === 0 &&
              flags.bigHour === undefined;
      }

      if (Object.isFrozen == null || !Object.isFrozen(m)) {
          m._isValid = isNowValid;
      }
      else {
          return isNowValid;
      }
  }
  return m._isValid;
}

function createInvalid (flags) {
  var m = createUTC(NaN);
  if (flags != null) {
      extend(getParsingFlags(m), flags);
  }
  else {
      getParsingFlags(m).userInvalidated = true;
  }

  return m;
}

function isUndefined(input) {
  return input === void 0;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
  var i, prop, val;

  if (!isUndefined(from._isAMomentObject)) {
      to._isAMomentObject = from._isAMomentObject;
  }
  if (!isUndefined(from._i)) {
      to._i = from._i;
  }
  if (!isUndefined(from._f)) {
      to._f = from._f;
  }
  if (!isUndefined(from._l)) {
      to._l = from._l;
  }
  if (!isUndefined(from._strict)) {
      to._strict = from._strict;
  }
  if (!isUndefined(from._tzm)) {
      to._tzm = from._tzm;
  }
  if (!isUndefined(from._isUTC)) {
      to._isUTC = from._isUTC;
  }
  if (!isUndefined(from._offset)) {
      to._offset = from._offset;
  }
  if (!isUndefined(from._pf)) {
      to._pf = getParsingFlags(from);
  }
  if (!isUndefined(from._locale)) {
      to._locale = from._locale;
  }

  if (momentProperties.length > 0) {
      for (i in momentProperties) {
          prop = momentProperties[i];
          val = from[prop];
          if (!isUndefined(val)) {
              to[prop] = val;
          }
      }
  }

  return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
  copyConfig(this, config);
  this._d = new Date(config._d != null ? config._d.getTime() : NaN);
  if (!this.isValid()) {
      this._d = new Date(NaN);
  }
  // Prevent infinite loop in case updateOffset creates new moment
  // objects.
  if (updateInProgress === false) {
      updateInProgress = true;
      hooks.updateOffset(this);
      updateInProgress = false;
  }
}

function isMoment (obj) {
  return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
  if (number < 0) {
      // -0 -> 0
      return Math.ceil(number) || 0;
  } else {
      return Math.floor(number);
  }
}

function toInt(argumentForCoercion) {
  var coercedNumber = +argumentForCoercion,
      value = 0;

  if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
  }

  return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
  var len = Math.min(array1.length, array2.length),
      lengthDiff = Math.abs(array1.length - array2.length),
      diffs = 0,
      i;
  for (i = 0; i < len; i++) {
      if ((dontConvert && array1[i] !== array2[i]) ||
          (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
          diffs++;
      }
  }
  return diffs + lengthDiff;
}

function warn(msg) {
  if (hooks.suppressDeprecationWarnings === false &&
          (typeof console !==  'undefined') && console.warn) {
      console.warn('Deprecation warning: ' + msg);
  }
}

function deprecate(msg, fn) {
  var firstTime = true;

  return extend(function () {
      if (hooks.deprecationHandler != null) {
          hooks.deprecationHandler(null, msg);
      }
      if (firstTime) {
          var args = [];
          var arg;
          for (var i = 0; i < arguments.length; i++) {
              arg = '';
              if (typeof arguments[i] === 'object') {
                  arg += '\n[' + i + '] ';
                  for (var key in arguments[0]) {
                      arg += key + ': ' + arguments[0][key] + ', ';
                  }
                  arg = arg.slice(0, -2); // Remove trailing comma and space
              } else {
                  arg = arguments[i];
              }
              args.push(arg);
          }
          warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
          firstTime = false;
      }
      return fn.apply(this, arguments);
  }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
  if (hooks.deprecationHandler != null) {
      hooks.deprecationHandler(name, msg);
  }
  if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
  }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
  return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
  var prop, i;
  for (i in config) {
      prop = config[i];
      if (isFunction(prop)) {
          this[i] = prop;
      } else {
          this['_' + i] = prop;
      }
  }
  this._config = config;
  // Lenient ordinal parsing accepts just a number in addition to
  // number + (possibly) stuff coming from _ordinalParseLenient.
  this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
  var res = extend({}, parentConfig), prop;
  for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
          if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
              res[prop] = {};
              extend(res[prop], parentConfig[prop]);
              extend(res[prop], childConfig[prop]);
          } else if (childConfig[prop] != null) {
              res[prop] = childConfig[prop];
          } else {
              delete res[prop];
          }
      }
  }
  for (prop in parentConfig) {
      if (hasOwnProp(parentConfig, prop) &&
              !hasOwnProp(childConfig, prop) &&
              isObject(parentConfig[prop])) {
          // make sure changes to properties don't modify parent config
          res[prop] = extend({}, res[prop]);
      }
  }
  return res;
}

function Locale(config) {
  if (config != null) {
      this.set(config);
  }
}

var keys;

if (Object.keys) {
  keys = Object.keys;
} else {
  keys = function (obj) {
      var i, res = [];
      for (i in obj) {
          if (hasOwnProp(obj, i)) {
              res.push(i);
          }
      }
      return res;
  };
}

var keys$1 = keys;

var defaultCalendar = {
  sameDay : '[Today at] LT',
  nextDay : '[Tomorrow at] LT',
  nextWeek : 'dddd [at] LT',
  lastDay : '[Yesterday at] LT',
  lastWeek : '[Last] dddd [at] LT',
  sameElse : 'L'
};

function calendar (key, mom, now) {
  var output = this._calendar[key] || this._calendar['sameElse'];
  return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
  LTS  : 'h:mm:ss A',
  LT   : 'h:mm A',
  L    : 'MM/DD/YYYY',
  LL   : 'MMMM D, YYYY',
  LLL  : 'MMMM D, YYYY h:mm A',
  LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
  var format = this._longDateFormat[key],
      formatUpper = this._longDateFormat[key.toUpperCase()];

  if (format || !formatUpper) {
      return format;
  }

  this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
      return val.slice(1);
  });

  return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
  return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultOrdinalParse = /\d{1,2}/;

function ordinal (number) {
  return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
  future : 'in %s',
  past   : '%s ago',
  s  : 'a few seconds',
  m  : 'a minute',
  mm : '%d minutes',
  h  : 'an hour',
  hh : '%d hours',
  d  : 'a day',
  dd : '%d days',
  M  : 'a month',
  MM : '%d months',
  y  : 'a year',
  yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
  var output = this._relativeTime[string];
  return (isFunction(output)) ?
      output(number, withoutSuffix, string, isFuture) :
      output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
  var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
  return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
  var lowerCase = unit.toLowerCase();
  aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
  return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
  var normalizedInput = {},
      normalizedProp,
      prop;

  for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
          normalizedProp = normalizeUnits(prop);
          if (normalizedProp) {
              normalizedInput[normalizedProp] = inputObject[prop];
          }
      }
  }

  return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
  priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
  var units = [];
  for (var u in unitsObj) {
      units.push({unit: u, priority: priorities[u]});
  }
  units.sort(function (a, b) {
      return a.priority - b.priority;
  });
  return units;
}

function makeGetSet (unit, keepTime) {
  return function (value) {
      if (value != null) {
          set$1(this, unit, value);
          hooks.updateOffset(this, keepTime);
          return this;
      } else {
          return get(this, unit);
      }
  };
}

function get (mom, unit) {
  return mom.isValid() ?
      mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
  if (mom.isValid()) {
      mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
  }
}

// MOMENTS

function stringGet (units) {
  units = normalizeUnits(units);
  if (isFunction(this[units])) {
      return this[units]();
  }
  return this;
}


function stringSet (units, value) {
  if (typeof units === 'object') {
      units = normalizeObjectUnits(units);
      var prioritized = getPrioritizedUnits(units);
      for (var i = 0; i < prioritized.length; i++) {
          this[prioritized[i].unit](units[prioritized[i].unit]);
      }
  } else {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
          return this[units](value);
      }
  }
  return this;
}

function zeroFill(number, targetLength, forceSign) {
  var absNumber = '' + Math.abs(number),
      zerosToFill = targetLength - absNumber.length,
      sign = number >= 0;
  return (sign ? (forceSign ? '+' : '') : '-') +
      Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
  var func = callback;
  if (typeof callback === 'string') {
      func = function () {
          return this[callback]();
      };
  }
  if (token) {
      formatTokenFunctions[token] = func;
  }
  if (padded) {
      formatTokenFunctions[padded[0]] = function () {
          return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
  }
  if (ordinal) {
      formatTokenFunctions[ordinal] = function () {
          return this.localeData().ordinal(func.apply(this, arguments), token);
      };
  }
}

function removeFormattingTokens(input) {
  if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, '');
  }
  return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
  var array = format.match(formattingTokens), i, length;

  for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
          array[i] = formatTokenFunctions[array[i]];
      } else {
          array[i] = removeFormattingTokens(array[i]);
      }
  }

  return function (mom) {
      var output = '', i;
      for (i = 0; i < length; i++) {
          output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
      }
      return output;
  };
}

// format date using native date object
function formatMoment(m, format) {
  if (!m.isValid()) {
      return m.localeData().invalidDate();
  }

  format = expandFormat(format, m.localeData());
  formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

  return formatFunctions[format](m);
}

function expandFormat(format, locale) {
  var i = 5;

  function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
  }

  localFormattingTokens.lastIndex = 0;
  while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
      localFormattingTokens.lastIndex = 0;
      i -= 1;
  }

  return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
  regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
      return (isStrict && strictRegex) ? strictRegex : regex;
  };
}

function getParseRegexForToken (token, config) {
  if (!hasOwnProp(regexes, token)) {
      return new RegExp(unescapeFormat(token));
  }

  return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
  return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
      return p1 || p2 || p3 || p4;
  }));
}

function regexEscape(s) {
  return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
  var i, func = callback;
  if (typeof token === 'string') {
      token = [token];
  }
  if (isNumber(callback)) {
      func = function (input, array) {
          array[callback] = toInt(input);
      };
  }
  for (i = 0; i < token.length; i++) {
      tokens[token[i]] = func;
  }
}

function addWeekParseToken (token, callback) {
  addParseToken(token, function (input, array, config, token) {
      config._w = config._w || {};
      callback(input, config._w, config, token);
  });
}

function addTimeToArrayFromToken(token, input, config) {
  if (input != null && hasOwnProp(tokens, token)) {
      tokens[token](input, config._a, config, token);
  }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

var indexOf;

if (Array.prototype.indexOf) {
  indexOf = Array.prototype.indexOf;
} else {
  indexOf = function (o) {
      // I know
      var i;
      for (i = 0; i < this.length; ++i) {
          if (this[i] === o) {
              return i;
          }
      }
      return -1;
  };
}

var indexOf$1 = indexOf;

function daysInMonth(year, month) {
  return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
  return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
  return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
  return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
  return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
  return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
  array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
  var month = config._locale.monthsParse(input, token, config._strict);
  // if we didn't find a month name, mark the date as invalid.
  if (month != null) {
      array[MONTH] = month;
  } else {
      getParsingFlags(config).invalidMonth = input;
  }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
  if (!m) {
      return this._months;
  }
  return isArray(this._months) ? this._months[m.month()] :
      this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
  if (!m) {
      return this._monthsShort;
  }
  return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
      this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
  var i, ii, mom, llc = monthName.toLocaleLowerCase();
  if (!this._monthsParse) {
      // this is not used
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i = 0; i < 12; ++i) {
          mom = createUTC([2000, i]);
          this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
          this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
      }
  }

  if (strict) {
      if (format === 'MMM') {
          ii = indexOf$1.call(this._shortMonthsParse, llc);
          return ii !== -1 ? ii : null;
      } else {
          ii = indexOf$1.call(this._longMonthsParse, llc);
          return ii !== -1 ? ii : null;
      }
  } else {
      if (format === 'MMM') {
          ii = indexOf$1.call(this._shortMonthsParse, llc);
          if (ii !== -1) {
              return ii;
          }
          ii = indexOf$1.call(this._longMonthsParse, llc);
          return ii !== -1 ? ii : null;
      } else {
          ii = indexOf$1.call(this._longMonthsParse, llc);
          if (ii !== -1) {
              return ii;
          }
          ii = indexOf$1.call(this._shortMonthsParse, llc);
          return ii !== -1 ? ii : null;
      }
  }
}

function localeMonthsParse (monthName, format, strict) {
  var i, mom, regex;

  if (this._monthsParseExact) {
      return handleStrictParse.call(this, monthName, format, strict);
  }

  if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
  }

  // TODO: add sorting
  // Sorting makes sure if one month (or abbr) is a prefix of another
  // see sorting in computeMonthsParse
  for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);
      if (strict && !this._longMonthsParse[i]) {
          this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
          this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
      }
      if (!strict && !this._monthsParse[i]) {
          regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
          this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      // test the regex
      if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
          return i;
      } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
          return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
          return i;
      }
  }
}

// MOMENTS

function setMonth (mom, value) {
  var dayOfMonth;

  if (!mom.isValid()) {
      // No op
      return mom;
  }

  if (typeof value === 'string') {
      if (/^\d+$/.test(value)) {
          value = toInt(value);
      } else {
          value = mom.localeData().monthsParse(value);
          // TODO: Another silent failure?
          if (!isNumber(value)) {
              return mom;
          }
      }
  }

  dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
  mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
  return mom;
}

function getSetMonth (value) {
  if (value != null) {
      setMonth(this, value);
      hooks.updateOffset(this, true);
      return this;
  } else {
      return get(this, 'Month');
  }
}

function getDaysInMonth () {
  return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
  if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
          computeMonthsParse.call(this);
      }
      if (isStrict) {
          return this._monthsShortStrictRegex;
      } else {
          return this._monthsShortRegex;
      }
  } else {
      if (!hasOwnProp(this, '_monthsShortRegex')) {
          this._monthsShortRegex = defaultMonthsShortRegex;
      }
      return this._monthsShortStrictRegex && isStrict ?
          this._monthsShortStrictRegex : this._monthsShortRegex;
  }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
  if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
          computeMonthsParse.call(this);
      }
      if (isStrict) {
          return this._monthsStrictRegex;
      } else {
          return this._monthsRegex;
      }
  } else {
      if (!hasOwnProp(this, '_monthsRegex')) {
          this._monthsRegex = defaultMonthsRegex;
      }
      return this._monthsStrictRegex && isStrict ?
          this._monthsStrictRegex : this._monthsRegex;
  }
}

function computeMonthsParse () {
  function cmpLenRev(a, b) {
      return b.length - a.length;
  }

  var shortPieces = [], longPieces = [], mixedPieces = [],
      i, mom;
  for (i = 0; i < 12; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, i]);
      shortPieces.push(this.monthsShort(mom, ''));
      longPieces.push(this.months(mom, ''));
      mixedPieces.push(this.months(mom, ''));
      mixedPieces.push(this.monthsShort(mom, ''));
  }
  // Sorting makes sure if one month (or abbr) is a prefix of another it
  // will match the longer piece.
  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);
  for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
  }
  for (i = 0; i < 24; i++) {
      mixedPieces[i] = regexEscape(mixedPieces[i]);
  }

  this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
  this._monthsShortRegex = this._monthsRegex;
  this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
  this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

// FORMATTING

addFormatToken('Y', 0, 0, function () {
  var y = this.year();
  return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
  return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
  array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
  array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
  array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
  return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
  return isLeapYear(this.year());
}

function createDate (y, m, d, h, M, s, ms) {
  //can't just apply() to create a date:
  //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
  var date = new Date(y, m, d, h, M, s, ms);

  //the date constructor remaps years 0-99 to 1900-1999
  if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
      date.setFullYear(y);
  }
  return date;
}

function createUTCDate (y) {
  var date = new Date(Date.UTC.apply(null, arguments));

  //the Date.UTC function remaps years 0-99 to 1900-1999
  if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
  }
  return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
  var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
      fwd = 7 + dow - doy,
      // first-week day local weekday -- which local weekday is fwd
      fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

  return -fwdlw + fwd - 1;
}

//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
  var localWeekday = (7 + weekday - dow) % 7,
      weekOffset = firstWeekOffset(year, dow, doy),
      dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
      resYear, resDayOfYear;

  if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
  } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
  } else {
      resYear = year;
      resDayOfYear = dayOfYear;
  }

  return {
      year: resYear,
      dayOfYear: resDayOfYear
  };
}

function weekOfYear(mom, dow, doy) {
  var weekOffset = firstWeekOffset(mom.year(), dow, doy),
      week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
      resWeek, resYear;

  if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
  } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
  } else {
      resYear = mom.year();
      resWeek = week;
  }

  return {
      week: resWeek,
      year: resYear
  };
}

function weeksInYear(year, dow, doy) {
  var weekOffset = firstWeekOffset(year, dow, doy),
      weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
  return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
  week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
  return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
  dow : 0, // Sunday is the first day of the week.
  doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
  return this._week.dow;
}

function localeFirstDayOfYear () {
  return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
  var week = this.localeData().week(this);
  return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
  var week = weekOfYear(this, 1, 4).week;
  return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
  return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
  return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
  return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
  return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
  return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
  return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
  var weekday = config._locale.weekdaysParse(input, token, config._strict);
  // if we didn't get a weekday name, mark the date as invalid
  if (weekday != null) {
      week.d = weekday;
  } else {
      getParsingFlags(config).invalidWeekday = input;
  }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
  week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
  if (typeof input !== 'string') {
      return input;
  }

  if (!isNaN(input)) {
      return parseInt(input, 10);
  }

  input = locale.weekdaysParse(input);
  if (typeof input === 'number') {
      return input;
  }

  return null;
}

function parseIsoWeekday(input, locale) {
  if (typeof input === 'string') {
      return locale.weekdaysParse(input) % 7 || 7;
  }
  return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
  if (!m) {
      return this._weekdays;
  }
  return isArray(this._weekdays) ? this._weekdays[m.day()] :
      this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
  return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
  return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
  var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
  if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];

      for (i = 0; i < 7; ++i) {
          mom = createUTC([2000, 1]).day(i);
          this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
          this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
          this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
      }
  }

  if (strict) {
      if (format === 'dddd') {
          ii = indexOf$1.call(this._weekdaysParse, llc);
          return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
          ii = indexOf$1.call(this._shortWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
      } else {
          ii = indexOf$1.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
      }
  } else {
      if (format === 'dddd') {
          ii = indexOf$1.call(this._weekdaysParse, llc);
          if (ii !== -1) {
              return ii;
          }
          ii = indexOf$1.call(this._shortWeekdaysParse, llc);
          if (ii !== -1) {
              return ii;
          }
          ii = indexOf$1.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
          ii = indexOf$1.call(this._shortWeekdaysParse, llc);
          if (ii !== -1) {
              return ii;
          }
          ii = indexOf$1.call(this._weekdaysParse, llc);
          if (ii !== -1) {
              return ii;
          }
          ii = indexOf$1.call(this._minWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
      } else {
          ii = indexOf$1.call(this._minWeekdaysParse, llc);
          if (ii !== -1) {
              return ii;
          }
          ii = indexOf$1.call(this._weekdaysParse, llc);
          if (ii !== -1) {
              return ii;
          }
          ii = indexOf$1.call(this._shortWeekdaysParse, llc);
          return ii !== -1 ? ii : null;
      }
  }
}

function localeWeekdaysParse (weekdayName, format, strict) {
  var i, mom, regex;

  if (this._weekdaysParseExact) {
      return handleStrictParse$1.call(this, weekdayName, format, strict);
  }

  if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
  }

  for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already

      mom = createUTC([2000, 1]).day(i);
      if (strict && !this._fullWeekdaysParse[i]) {
          this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
          this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
          this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
      }
      if (!this._weekdaysParse[i]) {
          regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
          this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      // test the regex
      if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
          return i;
      } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
          return i;
      } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
          return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
          return i;
      }
  }
}

// MOMENTS

function getSetDayOfWeek (input) {
  if (!this.isValid()) {
      return input != null ? this : NaN;
  }
  var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
  if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, 'd');
  } else {
      return day;
  }
}

function getSetLocaleDayOfWeek (input) {
  if (!this.isValid()) {
      return input != null ? this : NaN;
  }
  var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
  if (!this.isValid()) {
      return input != null ? this : NaN;
  }

  // behaves the same as moment#day except
  // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
  // as a setter, sunday should belong to the previous week.

  if (input != null) {
      var weekday = parseIsoWeekday(input, this.localeData());
      return this.day(this.day() % 7 ? weekday : weekday - 7);
  } else {
      return this.day() || 7;
  }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
  if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
      }
      if (isStrict) {
          return this._weekdaysStrictRegex;
      } else {
          return this._weekdaysRegex;
      }
  } else {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
          this._weekdaysRegex = defaultWeekdaysRegex;
      }
      return this._weekdaysStrictRegex && isStrict ?
          this._weekdaysStrictRegex : this._weekdaysRegex;
  }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
  if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
      }
      if (isStrict) {
          return this._weekdaysShortStrictRegex;
      } else {
          return this._weekdaysShortRegex;
      }
  } else {
      if (!hasOwnProp(this, '_weekdaysShortRegex')) {
          this._weekdaysShortRegex = defaultWeekdaysShortRegex;
      }
      return this._weekdaysShortStrictRegex && isStrict ?
          this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
  }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
  if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
          computeWeekdaysParse.call(this);
      }
      if (isStrict) {
          return this._weekdaysMinStrictRegex;
      } else {
          return this._weekdaysMinRegex;
      }
  } else {
      if (!hasOwnProp(this, '_weekdaysMinRegex')) {
          this._weekdaysMinRegex = defaultWeekdaysMinRegex;
      }
      return this._weekdaysMinStrictRegex && isStrict ?
          this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
  }
}


function computeWeekdaysParse () {
  function cmpLenRev(a, b) {
      return b.length - a.length;
  }

  var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
      i, mom, minp, shortp, longp;
  for (i = 0; i < 7; i++) {
      // make the regex if we don't have it already
      mom = createUTC([2000, 1]).day(i);
      minp = this.weekdaysMin(mom, '');
      shortp = this.weekdaysShort(mom, '');
      longp = this.weekdays(mom, '');
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
  }
  // Sorting makes sure if one weekday (or abbr) is a prefix of another it
  // will match the longer piece.
  minPieces.sort(cmpLenRev);
  shortPieces.sort(cmpLenRev);
  longPieces.sort(cmpLenRev);
  mixedPieces.sort(cmpLenRev);
  for (i = 0; i < 7; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
      mixedPieces[i] = regexEscape(mixedPieces[i]);
  }

  this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
  this._weekdaysShortRegex = this._weekdaysRegex;
  this._weekdaysMinRegex = this._weekdaysRegex;

  this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
  this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
  this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
  return this.hours() % 12 || 12;
}

function kFormat() {
  return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
  return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
  return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
      zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
  return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
  return '' + this.hours() + zeroFill(this.minutes(), 2) +
      zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
  addFormatToken(token, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
  });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
  return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['a', 'A'], function (input, array, config) {
  config._isPm = config._locale.isPM(input);
  config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
  array[HOUR] = toInt(input);
  getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
  var pos = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos));
  array[MINUTE] = toInt(input.substr(pos));
  getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
  var pos1 = input.length - 4;
  var pos2 = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos1));
  array[MINUTE] = toInt(input.substr(pos1, 2));
  array[SECOND] = toInt(input.substr(pos2));
  getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
  var pos = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos));
  array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
  var pos1 = input.length - 4;
  var pos2 = input.length - 2;
  array[HOUR] = toInt(input.substr(0, pos1));
  array[MINUTE] = toInt(input.substr(pos1, 2));
  array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
  // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
  // Using charAt should be more compatible.
  return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
  if (hours > 11) {
      return isLower ? 'pm' : 'PM';
  } else {
      return isLower ? 'am' : 'AM';
  }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
  calendar: defaultCalendar,
  longDateFormat: defaultLongDateFormat,
  invalidDate: defaultInvalidDate,
  ordinal: defaultOrdinal,
  ordinalParse: defaultOrdinalParse,
  relativeTime: defaultRelativeTime,

  months: defaultLocaleMonths,
  monthsShort: defaultLocaleMonthsShort,

  week: defaultLocaleWeek,

  weekdays: defaultLocaleWeekdays,
  weekdaysMin: defaultLocaleWeekdaysMin,
  weekdaysShort: defaultLocaleWeekdaysShort,

  meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
  return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
  var i = 0, j, next, locale, split;

  while (i < names.length) {
      split = normalizeLocale(names[i]).split('-');
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split('-') : null;
      while (j > 0) {
          locale = loadLocale(split.slice(0, j).join('-'));
          if (locale) {
              return locale;
          }
          if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
              //the next array item is better than a shallower substring of this one
              break;
          }
          j--;
      }
      i++;
  }
  return null;
}

function loadLocale(name) {
  var oldLocale = null;
  // TODO: Find a better way to register and load all the locales in Node
  if (!locales[name] && (typeof module !== 'undefined') &&
          module && module.exports) {
      try {
          oldLocale = globalLocale._abbr;
          !(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
          // because defineLocale currently also sets the global locale, we
          // want to undo that for lazy loaded locales
          getSetGlobalLocale(oldLocale);
      } catch (e) { }
  }
  return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
  var data;
  if (key) {
      if (isUndefined(values)) {
          data = getLocale(key);
      }
      else {
          data = defineLocale(key, values);
      }

      if (data) {
          // moment.duration._locale = moment._locale = data;
          globalLocale = data;
      }
  }

  return globalLocale._abbr;
}

function defineLocale (name, config) {
  if (config !== null) {
      var parentConfig = baseConfig;
      config.abbr = name;
      if (locales[name] != null) {
          deprecateSimple('defineLocaleOverride',
                  'use moment.updateLocale(localeName, config) to change ' +
                  'an existing locale. moment.defineLocale(localeName, ' +
                  'config) should only be used for creating a new locale ' +
                  'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
          parentConfig = locales[name]._config;
      } else if (config.parentLocale != null) {
          if (locales[config.parentLocale] != null) {
              parentConfig = locales[config.parentLocale]._config;
          } else {
              if (!localeFamilies[config.parentLocale]) {
                  localeFamilies[config.parentLocale] = [];
              }
              localeFamilies[config.parentLocale].push({
                  name: name,
                  config: config
              });
              return null;
          }
      }
      locales[name] = new Locale(mergeConfigs(parentConfig, config));

      if (localeFamilies[name]) {
          localeFamilies[name].forEach(function (x) {
              defineLocale(x.name, x.config);
          });
      }

      // backwards compat for now: also set the locale
      // make sure we set the locale AFTER all child locales have been
      // created, so we won't end up with the child locale set.
      getSetGlobalLocale(name);


      return locales[name];
  } else {
      // useful for testing
      delete locales[name];
      return null;
  }
}

function updateLocale(name, config) {
  if (config != null) {
      var locale, parentConfig = baseConfig;
      // MERGE
      if (locales[name] != null) {
          parentConfig = locales[name]._config;
      }
      config = mergeConfigs(parentConfig, config);
      locale = new Locale(config);
      locale.parentLocale = locales[name];
      locales[name] = locale;

      // backwards compat for now: also set the locale
      getSetGlobalLocale(name);
  } else {
      // pass null for config to unupdate, useful for tests
      if (locales[name] != null) {
          if (locales[name].parentLocale != null) {
              locales[name] = locales[name].parentLocale;
          } else if (locales[name] != null) {
              delete locales[name];
          }
      }
  }
  return locales[name];
}

// returns locale data
function getLocale (key) {
  var locale;

  if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
  }

  if (!key) {
      return globalLocale;
  }

  if (!isArray(key)) {
      //short-circuit everything else
      locale = loadLocale(key);
      if (locale) {
          return locale;
      }
      key = [key];
  }

  return chooseLocale(key);
}

function listLocales() {
  return keys$1(locales);
}

function checkOverflow (m) {
  var overflow;
  var a = m._a;

  if (a && getParsingFlags(m).overflow === -2) {
      overflow =
          a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
          a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
          a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
          a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
          a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
          a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
          -1;

      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
          overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
          overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
          overflow = WEEKDAY;
      }

      getParsingFlags(m).overflow = overflow;
  }

  return m;
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
  ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
  ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
  ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
  ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
  ['YYYY-DDD', /\d{4}-\d{3}/],
  ['YYYY-MM', /\d{4}-\d\d/, false],
  ['YYYYYYMMDD', /[+-]\d{10}/],
  ['YYYYMMDD', /\d{8}/],
  // YYYYMM is NOT allowed by the standard
  ['GGGG[W]WWE', /\d{4}W\d{3}/],
  ['GGGG[W]WW', /\d{4}W\d{2}/, false],
  ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
  ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
  ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
  ['HH:mm:ss', /\d\d:\d\d:\d\d/],
  ['HH:mm', /\d\d:\d\d/],
  ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
  ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
  ['HHmmss', /\d\d\d\d\d\d/],
  ['HHmm', /\d\d\d\d/],
  ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
  var i, l,
      string = config._i,
      match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
      allowTime, dateFormat, timeFormat, tzFormat;

  if (match) {
      getParsingFlags(config).iso = true;

      for (i = 0, l = isoDates.length; i < l; i++) {
          if (isoDates[i][1].exec(match[1])) {
              dateFormat = isoDates[i][0];
              allowTime = isoDates[i][2] !== false;
              break;
          }
      }
      if (dateFormat == null) {
          config._isValid = false;
          return;
      }
      if (match[3]) {
          for (i = 0, l = isoTimes.length; i < l; i++) {
              if (isoTimes[i][1].exec(match[3])) {
                  // match[2] should be 'T' or space
                  timeFormat = (match[2] || ' ') + isoTimes[i][0];
                  break;
              }
          }
          if (timeFormat == null) {
              config._isValid = false;
              return;
          }
      }
      if (!allowTime && timeFormat != null) {
          config._isValid = false;
          return;
      }
      if (match[4]) {
          if (tzRegex.exec(match[4])) {
              tzFormat = 'Z';
          } else {
              config._isValid = false;
              return;
          }
      }
      config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
      configFromStringAndFormat(config);
  } else {
      config._isValid = false;
  }
}

// date from iso format or fallback
function configFromString(config) {
  var matched = aspNetJsonRegex.exec(config._i);

  if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
  }

  configFromISO(config);
  if (config._isValid === false) {
      delete config._isValid;
      hooks.createFromInputFallback(config);
  }
}

hooks.createFromInputFallback = deprecate(
  'value provided is not in a recognized ISO format. moment construction falls back to js Date(), ' +
  'which is not reliable across all browsers and versions. Non ISO date formats are ' +
  'discouraged and will be removed in an upcoming major release. Please refer to ' +
  'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
  function (config) {
      config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
  }
);

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
  if (a != null) {
      return a;
  }
  if (b != null) {
      return b;
  }
  return c;
}

function currentDateArray(config) {
  // hooks is actually the exported moment object
  var nowValue = new Date(hooks.now());
  if (config._useUTC) {
      return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
  }
  return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
  var i, date, input = [], currentDate, yearToUse;

  if (config._d) {
      return;
  }

  currentDate = currentDateArray(config);

  //compute day of the year from weeks and weekdays
  if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
  }

  //if the day of the year is set, figure out what it is
  if (config._dayOfYear) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

      if (config._dayOfYear > daysInYear(yearToUse)) {
          getParsingFlags(config)._overflowDayOfYear = true;
      }

      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
  }

  // Default to current date.
  // * if no year, month, day of month are given, default to today
  // * if day of month is given, default month and year
  // * if month is given, default only year
  // * if year is given, don't default anything
  for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
  }

  // Zero out whatever was not defaulted, including time
  for (; i < 7; i++) {
      config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
  }

  // Check for 24:00:00.000
  if (config._a[HOUR] === 24 &&
          config._a[MINUTE] === 0 &&
          config._a[SECOND] === 0 &&
          config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
  }

  config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
  // Apply timezone offset from input. The actual utcOffset can be changed
  // with parseZone.
  if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
  }

  if (config._nextDay) {
      config._a[HOUR] = 24;
  }
}

function dayOfYearFromWeekInfo(config) {
  var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

  w = config._w;
  if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;

      // TODO: We need to take the current isoWeekYear, but that depends on
      // how we interpret now (local, utc, fixed offset). So create
      // a now version of current config (take local/utc/offset flags, and
      // create now).
      weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
      if (weekday < 1 || weekday > 7) {
          weekdayOverflow = true;
      }
  } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;

      var curWeek = weekOfYear(createLocal(), dow, doy);

      weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

      // Default to current week.
      week = defaults(w.w, curWeek.week);

      if (w.d != null) {
          // weekday -- low day numbers are considered next week
          weekday = w.d;
          if (weekday < 0 || weekday > 6) {
              weekdayOverflow = true;
          }
      } else if (w.e != null) {
          // local weekday -- counting starts from begining of week
          weekday = w.e + dow;
          if (w.e < 0 || w.e > 6) {
              weekdayOverflow = true;
          }
      } else {
          // default to begining of week
          weekday = dow;
      }
  }
  if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
  } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
  } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
  }
}

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
  // TODO: Move this to another part of the creation flow to prevent circular deps
  if (config._f === hooks.ISO_8601) {
      configFromISO(config);
      return;
  }

  config._a = [];
  getParsingFlags(config).empty = true;

  // This array is used to make a Date, either with `new Date` or `Date.UTC`
  var string = '' + config._i,
      i, parsedInput, tokens, token, skipped,
      stringLength = string.length,
      totalParsedInputLength = 0;

  tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

  for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
      // console.log('token', token, 'parsedInput', parsedInput,
      //         'regex', getParseRegexForToken(token, config));
      if (parsedInput) {
          skipped = string.substr(0, string.indexOf(parsedInput));
          if (skipped.length > 0) {
              getParsingFlags(config).unusedInput.push(skipped);
          }
          string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
          totalParsedInputLength += parsedInput.length;
      }
      // don't parse if it's not a known token
      if (formatTokenFunctions[token]) {
          if (parsedInput) {
              getParsingFlags(config).empty = false;
          }
          else {
              getParsingFlags(config).unusedTokens.push(token);
          }
          addTimeToArrayFromToken(token, parsedInput, config);
      }
      else if (config._strict && !parsedInput) {
          getParsingFlags(config).unusedTokens.push(token);
      }
  }

  // add remaining unparsed input length to the string
  getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
  if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
  }

  // clear _12h flag if hour is <= 12
  if (config._a[HOUR] <= 12 &&
      getParsingFlags(config).bigHour === true &&
      config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = undefined;
  }

  getParsingFlags(config).parsedDateParts = config._a.slice(0);
  getParsingFlags(config).meridiem = config._meridiem;
  // handle meridiem
  config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

  configFromArray(config);
  checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
  var isPm;

  if (meridiem == null) {
      // nothing to do
      return hour;
  }
  if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
  } else if (locale.isPM != null) {
      // Fallback
      isPm = locale.isPM(meridiem);
      if (isPm && hour < 12) {
          hour += 12;
      }
      if (!isPm && hour === 12) {
          hour = 0;
      }
      return hour;
  } else {
      // this is not supposed to happen
      return hour;
  }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
  var tempConfig,
      bestMoment,

      scoreToBeat,
      i,
      currentScore;

  if (config._f.length === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
  }

  for (i = 0; i < config._f.length; i++) {
      currentScore = 0;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
          tempConfig._useUTC = config._useUTC;
      }
      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);

      if (!isValid(tempConfig)) {
          continue;
      }

      // if there is any input that was not parsed add a penalty for that format
      currentScore += getParsingFlags(tempConfig).charsLeftOver;

      //or tokens
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

      getParsingFlags(tempConfig).score = currentScore;

      if (scoreToBeat == null || currentScore < scoreToBeat) {
          scoreToBeat = currentScore;
          bestMoment = tempConfig;
      }
  }

  extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
  if (config._d) {
      return;
  }

  var i = normalizeObjectUnits(config._i);
  config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
      return obj && parseInt(obj, 10);
  });

  configFromArray(config);
}

function createFromConfig (config) {
  var res = new Moment(checkOverflow(prepareConfig(config)));
  if (res._nextDay) {
      // Adding is smart enough around DST
      res.add(1, 'd');
      res._nextDay = undefined;
  }

  return res;
}

function prepareConfig (config) {
  var input = config._i,
      format = config._f;

  config._locale = config._locale || getLocale(config._l);

  if (input === null || (format === undefined && input === '')) {
      return createInvalid({nullInput: true});
  }

  if (typeof input === 'string') {
      config._i = input = config._locale.preparse(input);
  }

  if (isMoment(input)) {
      return new Moment(checkOverflow(input));
  } else if (isDate(input)) {
      config._d = input;
  } else if (isArray(format)) {
      configFromStringAndArray(config);
  } else if (format) {
      configFromStringAndFormat(config);
  }  else {
      configFromInput(config);
  }

  if (!isValid(config)) {
      config._d = null;
  }

  return config;
}

function configFromInput(config) {
  var input = config._i;
  if (input === undefined) {
      config._d = new Date(hooks.now());
  } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
  } else if (typeof input === 'string') {
      configFromString(config);
  } else if (isArray(input)) {
      config._a = map(input.slice(0), function (obj) {
          return parseInt(obj, 10);
      });
      configFromArray(config);
  } else if (typeof(input) === 'object') {
      configFromObject(config);
  } else if (isNumber(input)) {
      // from milliseconds
      config._d = new Date(input);
  } else {
      hooks.createFromInputFallback(config);
  }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
  var c = {};

  if (locale === true || locale === false) {
      strict = locale;
      locale = undefined;
  }

  if ((isObject(input) && isObjectEmpty(input)) ||
          (isArray(input) && input.length === 0)) {
      input = undefined;
  }
  // object construction must be done this way.
  // https://github.com/moment/moment/issues/1423
  c._isAMomentObject = true;
  c._useUTC = c._isUTC = isUTC;
  c._l = locale;
  c._i = input;
  c._f = format;
  c._strict = strict;

  return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
  return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
  'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
  function () {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
          return other < this ? this : other;
      } else {
          return createInvalid();
      }
  }
);

var prototypeMax = deprecate(
  'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
  function () {
      var other = createLocal.apply(null, arguments);
      if (this.isValid() && other.isValid()) {
          return other > this ? this : other;
      } else {
          return createInvalid();
      }
  }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
  var res, i;
  if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
  }
  if (!moments.length) {
      return createLocal();
  }
  res = moments[0];
  for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
          res = moments[i];
      }
  }
  return res;
}

// TODO: Use [].sort instead?
function min () {
  var args = [].slice.call(arguments, 0);

  return pickBy('isBefore', args);
}

function max () {
  var args = [].slice.call(arguments, 0);

  return pickBy('isAfter', args);
}

var now = function () {
  return Date.now ? Date.now() : +(new Date());
};

function Duration (duration) {
  var normalizedInput = normalizeObjectUnits(duration),
      years = normalizedInput.year || 0,
      quarters = normalizedInput.quarter || 0,
      months = normalizedInput.month || 0,
      weeks = normalizedInput.week || 0,
      days = normalizedInput.day || 0,
      hours = normalizedInput.hour || 0,
      minutes = normalizedInput.minute || 0,
      seconds = normalizedInput.second || 0,
      milliseconds = normalizedInput.millisecond || 0;

  // representation for dateAddRemove
  this._milliseconds = +milliseconds +
      seconds * 1e3 + // 1000
      minutes * 6e4 + // 1000 * 60
      hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
  // Because of dateAddRemove treats 24 hours as different from a
  // day when working around DST, we need to store them separately
  this._days = +days +
      weeks * 7;
  // It is impossible translate months into days without knowing
  // which months you are are talking about, so we have to store
  // it separately.
  this._months = +months +
      quarters * 3 +
      years * 12;

  this._data = {};

  this._locale = getLocale();

  this._bubble();
}

function isDuration (obj) {
  return obj instanceof Duration;
}

function absRound (number) {
  if (number < 0) {
      return Math.round(-1 * number) * -1;
  } else {
      return Math.round(number);
  }
}

// FORMATTING

function offset (token, separator) {
  addFormatToken(token, 0, 0, function () {
      var offset = this.utcOffset();
      var sign = '+';
      if (offset < 0) {
          offset = -offset;
          sign = '-';
      }
      return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
  });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
  config._useUTC = true;
  config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
  var matches = (string || '').match(matcher);

  if (matches === null) {
      return null;
  }

  var chunk   = matches[matches.length - 1] || [];
  var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
  var minutes = +(parts[1] * 60) + toInt(parts[2]);

  return minutes === 0 ?
    0 :
    parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
  var res, diff;
  if (model._isUTC) {
      res = model.clone();
      diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
      // Use low-level api, because this fn is low-level api.
      res._d.setTime(res._d.valueOf() + diff);
      hooks.updateOffset(res, false);
      return res;
  } else {
      return createLocal(input).local();
  }
}

function getDateOffset (m) {
  // On Firefox.24 Date#getTimezoneOffset returns a floating point.
  // https://github.com/moment/moment/pull/1871
  return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime) {
  var offset = this._offset || 0,
      localAdjust;
  if (!this.isValid()) {
      return input != null ? this : NaN;
  }
  if (input != null) {
      if (typeof input === 'string') {
          input = offsetFromString(matchShortOffset, input);
          if (input === null) {
              return this;
          }
      } else if (Math.abs(input) < 16) {
          input = input * 60;
      }
      if (!this._isUTC && keepLocalTime) {
          localAdjust = getDateOffset(this);
      }
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) {
          this.add(localAdjust, 'm');
      }
      if (offset !== input) {
          if (!keepLocalTime || this._changeInProgress) {
              addSubtract(this, createDuration(input - offset, 'm'), 1, false);
          } else if (!this._changeInProgress) {
              this._changeInProgress = true;
              hooks.updateOffset(this, true);
              this._changeInProgress = null;
          }
      }
      return this;
  } else {
      return this._isUTC ? offset : getDateOffset(this);
  }
}

function getSetZone (input, keepLocalTime) {
  if (input != null) {
      if (typeof input !== 'string') {
          input = -input;
      }

      this.utcOffset(input, keepLocalTime);

      return this;
  } else {
      return -this.utcOffset();
  }
}

function setOffsetToUTC (keepLocalTime) {
  return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
  if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;

      if (keepLocalTime) {
          this.subtract(getDateOffset(this), 'm');
      }
  }
  return this;
}

function setOffsetToParsedOffset () {
  if (this._tzm != null) {
      this.utcOffset(this._tzm);
  } else if (typeof this._i === 'string') {
      var tZone = offsetFromString(matchOffset, this._i);
      if (tZone != null) {
          this.utcOffset(tZone);
      }
      else {
          this.utcOffset(0, true);
      }
  }
  return this;
}

function hasAlignedHourOffset (input) {
  if (!this.isValid()) {
      return false;
  }
  input = input ? createLocal(input).utcOffset() : 0;

  return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
  return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset()
  );
}

function isDaylightSavingTimeShifted () {
  if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
  }

  var c = {};

  copyConfig(c, this);
  c = prepareConfig(c);

  if (c._a) {
      var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
      this._isDSTShifted = this.isValid() &&
          compareArrays(c._a, other.toArray()) > 0;
  } else {
      this._isDSTShifted = false;
  }

  return this._isDSTShifted;
}

function isLocal () {
  return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
  return this.isValid() ? this._isUTC : false;
}

function isUtc () {
  return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
  var duration = input,
      // matching against regexp is expensive, do it on demand
      match = null,
      sign,
      ret,
      diffRes;

  if (isDuration(input)) {
      duration = {
          ms : input._milliseconds,
          d  : input._days,
          M  : input._months
      };
  } else if (isNumber(input)) {
      duration = {};
      if (key) {
          duration[key] = input;
      } else {
          duration.milliseconds = input;
      }
  } else if (!!(match = aspNetRegex.exec(input))) {
      sign = (match[1] === '-') ? -1 : 1;
      duration = {
          y  : 0,
          d  : toInt(match[DATE])                         * sign,
          h  : toInt(match[HOUR])                         * sign,
          m  : toInt(match[MINUTE])                       * sign,
          s  : toInt(match[SECOND])                       * sign,
          ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
      };
  } else if (!!(match = isoRegex.exec(input))) {
      sign = (match[1] === '-') ? -1 : 1;
      duration = {
          y : parseIso(match[2], sign),
          M : parseIso(match[3], sign),
          w : parseIso(match[4], sign),
          d : parseIso(match[5], sign),
          h : parseIso(match[6], sign),
          m : parseIso(match[7], sign),
          s : parseIso(match[8], sign)
      };
  } else if (duration == null) {// checks for null or undefined
      duration = {};
  } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
      diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
  }

  ret = new Duration(duration);

  if (isDuration(input) && hasOwnProp(input, '_locale')) {
      ret._locale = input._locale;
  }

  return ret;
}

createDuration.fn = Duration.prototype;

function parseIso (inp, sign) {
  // We'd normally use ~~inp for this, but unfortunately it also
  // converts floats to ints.
  // inp may be undefined, so careful calling replace on it.
  var res = inp && parseFloat(inp.replace(',', '.'));
  // apply sign while we're at it
  return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
  var res = {milliseconds: 0, months: 0};

  res.months = other.month() - base.month() +
      (other.year() - base.year()) * 12;
  if (base.clone().add(res.months, 'M').isAfter(other)) {
      --res.months;
  }

  res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

  return res;
}

function momentsDifference(base, other) {
  var res;
  if (!(base.isValid() && other.isValid())) {
      return {milliseconds: 0, months: 0};
  }

  other = cloneWithOffset(other, base);
  if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
  } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
  }

  return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
  return function (val, period) {
      var dur, tmp;
      //invert the arguments, but complain about it
      if (period !== null && !isNaN(+period)) {
          deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
          'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
          tmp = val; val = period; period = tmp;
      }

      val = typeof val === 'string' ? +val : val;
      dur = createDuration(val, period);
      addSubtract(this, dur, direction);
      return this;
  };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
  var milliseconds = duration._milliseconds,
      days = absRound(duration._days),
      months = absRound(duration._months);

  if (!mom.isValid()) {
      // No op
      return;
  }

  updateOffset = updateOffset == null ? true : updateOffset;

  if (milliseconds) {
      mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
  }
  if (days) {
      set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
  }
  if (months) {
      setMonth(mom, get(mom, 'Month') + months * isAdding);
  }
  if (updateOffset) {
      hooks.updateOffset(mom, days || months);
  }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
  var diff = myMoment.diff(now, 'days', true);
  return diff < -6 ? 'sameElse' :
          diff < -1 ? 'lastWeek' :
          diff < 0 ? 'lastDay' :
          diff < 1 ? 'sameDay' :
          diff < 2 ? 'nextDay' :
          diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
  // We want to compare the start of today, vs this.
  // Getting start-of-today depends on whether we're local/utc/offset or not.
  var now = time || createLocal(),
      sod = cloneWithOffset(now, this).startOf('day'),
      format = hooks.calendarFormat(this, sod) || 'sameElse';

  var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

  return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
  return new Moment(this);
}

function isAfter (input, units) {
  var localInput = isMoment(input) ? input : createLocal(input);
  if (!(this.isValid() && localInput.isValid())) {
      return false;
  }
  units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
  if (units === 'millisecond') {
      return this.valueOf() > localInput.valueOf();
  } else {
      return localInput.valueOf() < this.clone().startOf(units).valueOf();
  }
}

function isBefore (input, units) {
  var localInput = isMoment(input) ? input : createLocal(input);
  if (!(this.isValid() && localInput.isValid())) {
      return false;
  }
  units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
  if (units === 'millisecond') {
      return this.valueOf() < localInput.valueOf();
  } else {
      return this.clone().endOf(units).valueOf() < localInput.valueOf();
  }
}

function isBetween (from, to, units, inclusivity) {
  inclusivity = inclusivity || '()';
  return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
      (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
  var localInput = isMoment(input) ? input : createLocal(input),
      inputMs;
  if (!(this.isValid() && localInput.isValid())) {
      return false;
  }
  units = normalizeUnits(units || 'millisecond');
  if (units === 'millisecond') {
      return this.valueOf() === localInput.valueOf();
  } else {
      inputMs = localInput.valueOf();
      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
  }
}

function isSameOrAfter (input, units) {
  return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
  return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
  var that,
      zoneDelta,
      delta, output;

  if (!this.isValid()) {
      return NaN;
  }

  that = cloneWithOffset(input, this);

  if (!that.isValid()) {
      return NaN;
  }

  zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

  units = normalizeUnits(units);

  if (units === 'year' || units === 'month' || units === 'quarter') {
      output = monthDiff(this, that);
      if (units === 'quarter') {
          output = output / 3;
      } else if (units === 'year') {
          output = output / 12;
      }
  } else {
      delta = this - that;
      output = units === 'second' ? delta / 1e3 : // 1000
          units === 'minute' ? delta / 6e4 : // 1000 * 60
          units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
          units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
          units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
          delta;
  }
  return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
  // difference in months
  var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
      // b is in (anchor - 1 month, anchor + 1 month)
      anchor = a.clone().add(wholeMonthDiff, 'months'),
      anchor2, adjust;

  if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
      // linear across the month
      adjust = (b - anchor) / (anchor - anchor2);
  } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
      // linear across the month
      adjust = (b - anchor) / (anchor2 - anchor);
  }

  //check for negative zero, return zero if negative zero
  return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
  return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString () {
  var m = this.clone().utc();
  if (0 < m.year() && m.year() <= 9999) {
      if (isFunction(Date.prototype.toISOString)) {
          // native implementation is ~50x faster, use it when we can
          return this.toDate().toISOString();
      } else {
          return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
      }
  } else {
      return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
  }
}

/**
* Return a human readable representation of a moment that can
* also be evaluated to get a new moment which is the same
*
* @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
*/
function inspect () {
  if (!this.isValid()) {
      return 'moment.invalid(/* ' + this._i + ' */)';
  }
  var func = 'moment';
  var zone = '';
  if (!this.isLocal()) {
      func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
      zone = 'Z';
  }
  var prefix = '[' + func + '("]';
  var year = (0 < this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
  var datetime = '-MM-DD[T]HH:mm:ss.SSS';
  var suffix = zone + '[")]';

  return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
  if (!inputString) {
      inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
  }
  var output = formatMoment(this, inputString);
  return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
  if (this.isValid() &&
          ((isMoment(time) && time.isValid()) ||
           createLocal(time).isValid())) {
      return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
  } else {
      return this.localeData().invalidDate();
  }
}

function fromNow (withoutSuffix) {
  return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
  if (this.isValid() &&
          ((isMoment(time) && time.isValid()) ||
           createLocal(time).isValid())) {
      return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
  } else {
      return this.localeData().invalidDate();
  }
}

function toNow (withoutSuffix) {
  return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
  var newLocaleData;

  if (key === undefined) {
      return this._locale._abbr;
  } else {
      newLocaleData = getLocale(key);
      if (newLocaleData != null) {
          this._locale = newLocaleData;
      }
      return this;
  }
}

var lang = deprecate(
  'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
  function (key) {
      if (key === undefined) {
          return this.localeData();
      } else {
          return this.locale(key);
      }
  }
);

function localeData () {
  return this._locale;
}

function startOf (units) {
  units = normalizeUnits(units);
  // the following switch intentionally omits break keywords
  // to utilize falling through the cases.
  switch (units) {
      case 'year':
          this.month(0);
          /* falls through */
      case 'quarter':
      case 'month':
          this.date(1);
          /* falls through */
      case 'week':
      case 'isoWeek':
      case 'day':
      case 'date':
          this.hours(0);
          /* falls through */
      case 'hour':
          this.minutes(0);
          /* falls through */
      case 'minute':
          this.seconds(0);
          /* falls through */
      case 'second':
          this.milliseconds(0);
  }

  // weeks are a special case
  if (units === 'week') {
      this.weekday(0);
  }
  if (units === 'isoWeek') {
      this.isoWeekday(1);
  }

  // quarters are also special
  if (units === 'quarter') {
      this.month(Math.floor(this.month() / 3) * 3);
  }

  return this;
}

function endOf (units) {
  units = normalizeUnits(units);
  if (units === undefined || units === 'millisecond') {
      return this;
  }

  // 'date' is an alias for 'day', so it should be considered as such.
  if (units === 'date') {
      units = 'day';
  }

  return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
  return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
  return Math.floor(this.valueOf() / 1000);
}

function toDate () {
  return new Date(this.valueOf());
}

function toArray () {
  var m = this;
  return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
  var m = this;
  return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
  };
}

function toJSON () {
  // new Date(NaN).toJSON() === null
  return this.isValid() ? this.toISOString() : null;
}

function isValid$1 () {
  return isValid(this);
}

function parsingFlags () {
  return extend({}, getParsingFlags(this));
}

function invalidAt () {
  return getParsingFlags(this).overflow;
}

function creationData() {
  return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
  };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
  return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
  return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
  addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
  week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
  week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
  return getSetWeekYearHelper.call(this,
          input,
          this.week(),
          this.weekday(),
          this.localeData()._week.dow,
          this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
  return getSetWeekYearHelper.call(this,
          input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
  return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
  var weekInfo = this.localeData()._week;
  return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
  var weeksTarget;
  if (input == null) {
      return weekOfYear(this, dow, doy).year;
  } else {
      weeksTarget = weeksInYear(input, dow, doy);
      if (week > weeksTarget) {
          week = weeksTarget;
      }
      return setWeekAll.call(this, input, week, weekday, dow, doy);
  }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
  var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
      date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

  this.year(date.getUTCFullYear());
  this.month(date.getUTCMonth());
  this.date(date.getUTCDate());
  return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
  array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
  return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
  return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
  array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
  config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
  var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
  return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
  return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
  return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
  return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
  return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
  return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
  return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
  return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
  return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
  addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
  array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
  addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
  return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
  return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$1;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
  return createLocal(input * 1000);
}

function createInZone () {
  return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
  return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
  var locale = getLocale();
  var utc = createUTC().set(setter, index);
  return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
  if (isNumber(format)) {
      index = format;
      format = undefined;
  }

  format = format || '';

  if (index != null) {
      return get$1(format, index, field, 'month');
  }

  var i;
  var out = [];
  for (i = 0; i < 12; i++) {
      out[i] = get$1(format, i, field, 'month');
  }
  return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
  if (typeof localeSorted === 'boolean') {
      if (isNumber(format)) {
          index = format;
          format = undefined;
      }

      format = format || '';
  } else {
      format = localeSorted;
      index = format;
      localeSorted = false;

      if (isNumber(format)) {
          index = format;
          format = undefined;
      }

      format = format || '';
  }

  var locale = getLocale(),
      shift = localeSorted ? locale._week.dow : 0;

  if (index != null) {
      return get$1(format, (index + shift) % 7, field, 'day');
  }

  var i;
  var out = [];
  for (i = 0; i < 7; i++) {
      out[i] = get$1(format, (i + shift) % 7, field, 'day');
  }
  return out;
}

function listMonths (format, index) {
  return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
  return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
  return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
  return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
  return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
  ordinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal : function (number) {
      var b = number % 10,
          output = (toInt(number % 100 / 10) === 1) ? 'th' :
          (b === 1) ? 'st' :
          (b === 2) ? 'nd' :
          (b === 3) ? 'rd' : 'th';
      return number + output;
  }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
  var data           = this._data;

  this._milliseconds = mathAbs(this._milliseconds);
  this._days         = mathAbs(this._days);
  this._months       = mathAbs(this._months);

  data.milliseconds  = mathAbs(data.milliseconds);
  data.seconds       = mathAbs(data.seconds);
  data.minutes       = mathAbs(data.minutes);
  data.hours         = mathAbs(data.hours);
  data.months        = mathAbs(data.months);
  data.years         = mathAbs(data.years);

  return this;
}

function addSubtract$1 (duration, input, value, direction) {
  var other = createDuration(input, value);

  duration._milliseconds += direction * other._milliseconds;
  duration._days         += direction * other._days;
  duration._months       += direction * other._months;

  return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
  return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
  return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
  if (number < 0) {
      return Math.floor(number);
  } else {
      return Math.ceil(number);
  }
}

function bubble () {
  var milliseconds = this._milliseconds;
  var days         = this._days;
  var months       = this._months;
  var data         = this._data;
  var seconds, minutes, hours, years, monthsFromDays;

  // if we have a mix of positive and negative values, bubble down first
  // check: https://github.com/moment/moment/issues/2166
  if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
          (milliseconds <= 0 && days <= 0 && months <= 0))) {
      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
      days = 0;
      months = 0;
  }

  // The following code bubbles up values, see the tests for
  // examples of what that means.
  data.milliseconds = milliseconds % 1000;

  seconds           = absFloor(milliseconds / 1000);
  data.seconds      = seconds % 60;

  minutes           = absFloor(seconds / 60);
  data.minutes      = minutes % 60;

  hours             = absFloor(minutes / 60);
  data.hours        = hours % 24;

  days += absFloor(hours / 24);

  // convert days to months
  monthsFromDays = absFloor(daysToMonths(days));
  months += monthsFromDays;
  days -= absCeil(monthsToDays(monthsFromDays));

  // 12 months -> 1 year
  years = absFloor(months / 12);
  months %= 12;

  data.days   = days;
  data.months = months;
  data.years  = years;

  return this;
}

function daysToMonths (days) {
  // 400 years have 146097 days (taking into account leap year rules)
  // 400 years have 12 months === 4800
  return days * 4800 / 146097;
}

function monthsToDays (months) {
  // the reverse of daysToMonths
  return months * 146097 / 4800;
}

function as (units) {
  var days;
  var months;
  var milliseconds = this._milliseconds;

  units = normalizeUnits(units);

  if (units === 'month' || units === 'year') {
      days   = this._days   + milliseconds / 864e5;
      months = this._months + daysToMonths(days);
      return units === 'month' ? months : months / 12;
  } else {
      // handle milliseconds separately because of floating point math errors (issue #1867)
      days = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
          case 'week'   : return days / 7     + milliseconds / 6048e5;
          case 'day'    : return days         + milliseconds / 864e5;
          case 'hour'   : return days * 24    + milliseconds / 36e5;
          case 'minute' : return days * 1440  + milliseconds / 6e4;
          case 'second' : return days * 86400 + milliseconds / 1000;
          // Math.floor prevents floating point math errors here
          case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
          default: throw new Error('Unknown unit ' + units);
      }
  }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
  return (
      this._milliseconds +
      this._days * 864e5 +
      (this._months % 12) * 2592e6 +
      toInt(this._months / 12) * 31536e6
  );
}

function makeAs (alias) {
  return function () {
      return this.as(alias);
  };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function get$2 (units) {
  units = normalizeUnits(units);
  return this[units + 's']();
}

function makeGetter(name) {
  return function () {
      return this._data[name];
  };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
  return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
  s: 45,  // seconds to minute
  m: 45,  // minutes to hour
  h: 22,  // hours to day
  d: 26,  // days to month
  M: 11   // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
  return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
  var duration = createDuration(posNegDuration).abs();
  var seconds  = round(duration.as('s'));
  var minutes  = round(duration.as('m'));
  var hours    = round(duration.as('h'));
  var days     = round(duration.as('d'));
  var months   = round(duration.as('M'));
  var years    = round(duration.as('y'));

  var a = seconds < thresholds.s && ['s', seconds]  ||
          minutes <= 1           && ['m']           ||
          minutes < thresholds.m && ['mm', minutes] ||
          hours   <= 1           && ['h']           ||
          hours   < thresholds.h && ['hh', hours]   ||
          days    <= 1           && ['d']           ||
          days    < thresholds.d && ['dd', days]    ||
          months  <= 1           && ['M']           ||
          months  < thresholds.M && ['MM', months]  ||
          years   <= 1           && ['y']           || ['yy', years];

  a[2] = withoutSuffix;
  a[3] = +posNegDuration > 0;
  a[4] = locale;
  return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
  if (roundingFunction === undefined) {
      return round;
  }
  if (typeof(roundingFunction) === 'function') {
      round = roundingFunction;
      return true;
  }
  return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
  if (thresholds[threshold] === undefined) {
      return false;
  }
  if (limit === undefined) {
      return thresholds[threshold];
  }
  thresholds[threshold] = limit;
  return true;
}

function humanize (withSuffix) {
  var locale = this.localeData();
  var output = relativeTime$1(this, !withSuffix, locale);

  if (withSuffix) {
      output = locale.pastFuture(+this, output);
  }

  return locale.postformat(output);
}

var abs$1 = Math.abs;

function toISOString$1() {
  // for ISO strings we do not use the normal bubbling rules:
  //  * milliseconds bubble up until they become hours
  //  * days do not bubble at all
  //  * months bubble up until they become years
  // This is because there is no context-free conversion between hours and days
  // (think of clock changes)
  // and also not between days and months (28-31 days per month)
  var seconds = abs$1(this._milliseconds) / 1000;
  var days         = abs$1(this._days);
  var months       = abs$1(this._months);
  var minutes, hours, years;

  // 3600 seconds -> 60 minutes -> 1 hour
  minutes           = absFloor(seconds / 60);
  hours             = absFloor(minutes / 60);
  seconds %= 60;
  minutes %= 60;

  // 12 months -> 1 year
  years  = absFloor(months / 12);
  months %= 12;


  // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
  var Y = years;
  var M = months;
  var D = days;
  var h = hours;
  var m = minutes;
  var s = seconds;
  var total = this.asSeconds();

  if (!total) {
      // this is the same as C#'s (Noda) and python (isodate)...
      // but not other JS (goog.date)
      return 'P0D';
  }

  return (total < 0 ? '-' : '') +
      'P' +
      (Y ? Y + 'Y' : '') +
      (M ? M + 'M' : '') +
      (D ? D + 'D' : '') +
      ((h || m || s) ? 'T' : '') +
      (h ? h + 'H' : '') +
      (m ? m + 'M' : '') +
      (s ? s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
  config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
  config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.17.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

return hooks;

})));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

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
    // apiUrl: 'https://reqres.in/api'
    apiUrl: 'https://api.sreerajarajeswaridevi.org/dev/api_exec'
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

module.exports = __webpack_require__(/*! /Volumes/store 1/code/Audit-UI-Angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map