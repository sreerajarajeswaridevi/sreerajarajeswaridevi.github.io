(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/temple-list/temple-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/temple-list/temple-list.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"temples-list d-flex flex-wrap my-4\" ngif=\"temples?.length > 0\">\n  <mdb-card>\n    <mdb-card-header class=\"text-left bg-primary white-text w-100\">\n      <blockquote class=\"blockquote bq-success\">\n        <h3 class=\"header\">Temples List</h3>\n        <p class=\"py-0\">Add or remove temples (for Admin)</p>\n      </blockquote>\n    </mdb-card-header>\n    <mdb-card-body class=\"py-2\">\n      <form #editForm=\"ngForm\">\n      <table mdbTable striped=\"true\">\n          <thead>\n            <tr>\n              <th>Temple Name</th>\n              <th>Code</th>\n              <th>Email</th>\n              <th>Phone Number</th>\n              <th>Address</th>\n              <th>Logo</th>\n              <th>Icon</th>\n              <th>Manthram</th>\n              <th *ngIf=\"isAdmin\">Added By</th>\n              <th>Edit</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of temples; let i = index;\">\n              <ng-container *ngIf=\"editingIndex != i\">\n                <td scope=\"row\">{{ item.temple_name }}</td>\n                <td>{{ item.temple_code }}</td>\n                <td>{{ item.temple_email }}</td>\n                <td>{{ item.phone_number }}</td>\n                <td>{{ item.temple_address }}</td>\n                <td><img class=\"thumbnail\" [src]=\"item.logo\" alt=\"\"> </td>\n                <td><img class=\"thumbnail\" [src]=\"item.icon\" alt=\"\"> </td>\n                <td><span class=\"ellipsis\" [title]=\"item.misc?.manthram\">{{ item.misc?.manthram }}</span></td>  \n                <td *ngIf=\"isAdmin\">{{ item.added_by }}</td>\n                <td>\n                  <mdb-icon fas icon=\"edit\" (click)=\"edit(i)\"></mdb-icon> \n                </td>\n              </ng-container>\n              <!-- <form #editForm=\"ngForm\"> -->\n              <ng-container *ngIf=\"editMode && editingIndex == i\">\n                <!-- ********************************EDITMODE************************* -->\n                <td>\n                  <div class=\"md-form\">\n                    <input type=\"text\" id=\"add_temple_temple_name\" name=\"temple_name\" class=\"form-control\" #temple_name=\"ngModel\"\n                      [(ngModel)]=\"editCache.temple_name\" mdbInput mdbValidate [validateSuccess]=\"false\" required>\n                    <label for=\"temple_name\">Temple Name</label>\n                    <mdb-error *ngIf=\"temple_name && temple_name.invalid && (temple_name.dirty || temple_name.touched)\">Temple\n                      name is required</mdb-error>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"md-form\">\n                    <input disabled type=\"text\" id=\"add_temple_temple_code\" name=\"temple_code\" class=\"form-control\" #temple_code=\"ngModel\"\n                      [(ngModel)]=\"editCache.temple_code\" mdbInput mdbValidate [validateSuccess]=\"false\" required>\n                    <label for=\"temple_code\">Temple Code</label>\n                    <mdb-error *ngIf=\"temple_code && temple_code.invalid && (temple_code.dirty || temple_code.touched)\">Temple\n                      Code is required</mdb-error>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"md-form\">\n                    <input type=\"text\" id=\"add_temple_email\" name=\"temple_email\" class=\"form-control\" #temple_email=\"ngModel\"\n                      [(ngModel)]=\"editCache.temple_email\" mdbInput mdbValidate [validateSuccess]=\"false\" required>\n                    <label for=\"temple_email\">Email</label>\n                    <mdb-error *ngIf=\"temple_email && temple_email.invalid && (temple_email.dirty || temple_email.touched)\">Email is required\n                    </mdb-error>\n                  </div>\n                </td>\n  \n  \n                <td>\n                  <div class=\"md-form\">\n                    <input type=\"text\" id=\"add_phone_number\" name=\"phone_number\" class=\"form-control\" #phone_number=\"ngModel\"\n                      [(ngModel)]=\"editCache.phone_number\" mdbInput mdbValidate [validateSuccess]=\"false\" required>\n                    <label for=\"phone_number\">Phone Number</label>\n                    <mdb-error *ngIf=\"phone_number && phone_number.invalid && (phone_number.dirty || phone_number.touched)\">Phone is required\n                    </mdb-error>\n                  </div>\n                </td>\n  \n                <td>\n                  <div class=\"md-form\" style=\"margin-top: 15px;\">\n                    <textarea type=\"text\" id=\"add_temple_address\" name=\"temple_address\" class=\"my-0 py-0 md-textarea form-control\"\n                      #temple_address=\"ngModel\" [(ngModel)]=\"editCache.temple_address\" mdbInput mdbValidate required\n                      [validateSuccess]=\"false\"></textarea>\n                    <label for=\"temple_address\">Address</label>\n                    <!-- <mdb-error *ngIf=\"address && address.invalid && (address.dirty || address.touched)\">Address is required</mdb-error> -->\n                  </div>\n                  <!-- <a class=\"btn btn-primary btn-floating\" (click)=\"onAddTemple()\" style=\"background-color: #3b5998; height: 45px\" href=\"javascript:void(0)\" role=\"button\"\n                      >\n                      Add\n                    </a> -->\n                </td>\n  \n  \n                <td>\n                  <div class=\"\">\n                    <div class=\"d-flex-center\">\n                      <button mdbBtn class=\"mt-4 btn btn-floating add\"\n                        (click)=\"logoButton.click()\" size=\"sm\" color=\"primary\" outline=\"true\" mdbWavesEffect>\n                        <mdb-icon fas icon=\"plus\" class=\"\"></mdb-icon> <span class=\"pl-2\">Logo</span>\n                      </button>\n                      <span><img class=\"thumbnail\" [src]=\"editedBase64Logo\" alt=\"\"></span>\n                    </div>\n                    <input #logoButton type=\"file\" id=\"add_logo\" name=\"logo\" class=\"form-control\" #logo=\"ngModel\"\n                      [(ngModel)]=\"editedLogo\" mdbInput mdbValidate [validateSuccess]=\"false\" (change)=\"logoEdited($event)\">\n                    <mdb-error *ngIf=\"logo && logo.invalid && (logo.dirty || logo.touched)\">Logo is required\n                    </mdb-error>\n                  </div>\n                </td>\n  \n  \n                <td>\n                  <div class=\"\">\n                    <div class=\"d-flex-center\">\n                      <button mdbBtn class=\"mt-4 btn btn-floating add\"\n                        (click)=\"iconButton.click()\" size=\"sm\" color=\"primary\" outline=\"true\" mdbWavesEffect>\n                        <mdb-icon fas icon=\"plus\" class=\"\"></mdb-icon> <span class=\"pl-2\">Icon</span>\n                      </button>\n                      <span><img class=\"thumbnail\" [src]=\"editedBase64Icon\" alt=\"\"></span>\n                    </div>\n                    <input #iconButton type=\"file\" id=\"add_icon\" name=\"icon\" class=\"form-control\" #icon=\"ngModel\"\n                      [(ngModel)]=\"editedIcon\" mdbInput mdbValidate [validateSuccess]=\"false\" (change)=\"iconEdited($event)\">\n                   \n                    <mdb-error *ngIf=\"icon && icon.invalid && (icon.dirty || icon.touched)\">Icon is required\n                    </mdb-error>\n                  </div>\n                </td>\n  \n  \n                <td>\n                  <div class=\"md-form\">\n                    <input type=\"text\" id=\"add_misc\" name=\"misc\" class=\"form-control\" #misc=\"ngModel\"\n                      [(ngModel)]=\"editCache.misc.manthram\" mdbInput mdbValidate [validateSuccess]=\"false\">\n                    <label for=\"misc\">Misc</label>\n                    <!-- <mdb-error *ngIf=\"misc && misc.invalid && (misc.dirty || misc.touched)\">Misc -->\n                    <!-- </mdb-error> -->\n                  </div>\n                </td>\n  \n                <!-- 2more items are available -\n                # color_scheme\n                # misc -- already added above -->\n  \n                <td colspan=\"2\">\n                  <div class=\"d-flex\">\n                    <button mdbBtn class=\"btn btn-floating add\" [disabled]=\"editForm?.invalid || loadingAddTemple\" \n                    (click)=\"onSaveEdit()\" size=\"sm\" color=\"success\" mdbWavesEffect>\n                    <mdb-icon fas icon=\"save\" class=\"white-text\"></mdb-icon> <span class=\"pl-2 white-text\">Save</span>\n                  </button>\n                  <button mdbBtn class=\"btn btn-floating add\"\n                    (click)=\"onCancelEdit()\" size=\"sm\" color=\"danger\" mdbWavesEffect>\n                    <mdb-icon fas icon=\"times\" class=\"white-text\"></mdb-icon> <span class=\"pl-2 white-text\">Cancel</span>\n                  </button>\n                  </div>\n                </td>\n                \n                <!-- ********************************EDIT MODE END************************* -->\n              </ng-container>\n            <!-- </form> -->\n             \n              \n            </tr>\n     \n          </tbody>\n        </table>\n      </form>\n\n        <form #templeForm=\"ngForm\">\n        <table>\n\n            <tr class=\"bg-white\" *ngIf=\"!(isLoading$ | async) && !editMode\">\n              <td>\n                <div class=\"md-form\">\n                  <input type=\"text\" id=\"add_temple_temple_name\" name=\"temple_name\" class=\"form-control\" #temple_name=\"ngModel\"\n                    [(ngModel)]=\"newTemple.temple_name\" mdbInput mdbValidate [validateSuccess]=\"false\" required>\n                  <label for=\"temple_name\">Temple Name</label>\n                  <mdb-error *ngIf=\"temple_name && temple_name.invalid && (temple_name.dirty || temple_name.touched)\">Temple\n                    name is required</mdb-error>\n                </div>\n              </td>\n              <td>\n                <div class=\"md-form\">\n                  <input type=\"text\" id=\"add_temple_temple_code\" name=\"temple_code\" class=\"form-control\" #temple_code=\"ngModel\"\n                    [(ngModel)]=\"newTemple.temple_code\" mdbInput mdbValidate [validateSuccess]=\"false\" required>\n                  <label for=\"temple_code\">Temple Code</label>\n                  <mdb-error *ngIf=\"temple_code && temple_code.invalid && (temple_code.dirty || temple_code.touched)\">Temple\n                    Code is required</mdb-error>\n                </div>\n              </td>\n              <td>\n                <div class=\"md-form\">\n                  <input type=\"text\" id=\"add_temple_email\" name=\"temple_email\" class=\"form-control\" #temple_email=\"ngModel\"\n                    [(ngModel)]=\"newTemple.temple_email\" mdbInput mdbValidate [validateSuccess]=\"false\" required>\n                  <label for=\"temple_email\">Email</label>\n                  <mdb-error *ngIf=\"temple_email && temple_email.invalid && (temple_email.dirty || temple_email.touched)\">Email is required\n                  </mdb-error>\n                </div>\n              </td>\n\n\n              <td>\n                <div class=\"md-form\">\n                  <input type=\"text\" id=\"add_phone_number\" name=\"phone_number\" class=\"form-control\" #phone_number=\"ngModel\"\n                    [(ngModel)]=\"newTemple.phone_number\" mdbInput mdbValidate [validateSuccess]=\"false\" required>\n                  <label for=\"phone_number\">Phone Number</label>\n                  <mdb-error *ngIf=\"phone_number && phone_number.invalid && (phone_number.dirty || phone_number.touched)\">Phone is required\n                  </mdb-error>\n                </div>\n              </td>\n\n              <td>\n                <div class=\"md-form\" style=\"margin-top: 15px;\">\n                  <textarea type=\"text\" id=\"add_temple_address\" name=\"temple_address\" class=\"my-0 py-0 md-textarea form-control\"\n                    #temple_address=\"ngModel\" [(ngModel)]=\"newTemple.temple_address\" mdbInput mdbValidate required\n                    [validateSuccess]=\"false\"></textarea>\n                  <label for=\"temple_address\">Address</label>\n                  <!-- <mdb-error *ngIf=\"address && address.invalid && (address.dirty || address.touched)\">Address is required</mdb-error> -->\n                </div>\n                <!-- <a class=\"btn btn-primary btn-floating\" (click)=\"onAddTemple()\" style=\"background-color: #3b5998; height: 45px\" href=\"javascript:void(0)\" role=\"button\"\n                    >\n                    Add\n                  </a> -->\n              </td>\n\n\n              <td>\n                <div class=\"\">\n                  <div class=\"d-flex-center\">\n                    <button mdbBtn class=\"mt-4 btn btn-floating add\"\n                      (click)=\"logoButton.click()\" size=\"sm\" color=\"primary\" outline=\"true\" mdbWavesEffect>\n                      <mdb-icon fas icon=\"plus\" class=\"\"></mdb-icon> <span class=\"pl-2\">Logo</span>\n                    </button>\n                    <span><img class=\"thumbnail\" [src]=\"base64Logo\" alt=\"\"></span>\n                  </div>\n                  <input #logoButton type=\"file\" id=\"add_logo\" name=\"logo\" class=\"form-control\" #logo=\"ngModel\"\n                    [(ngModel)]=\"newTemple.logo\" mdbInput mdbValidate [validateSuccess]=\"false\" required (change)=\"logoChanged($event)\">\n                  <mdb-error *ngIf=\"logo && logo.invalid && (logo.dirty || logo.touched)\">Logo is required\n                  </mdb-error>\n                </div>\n              </td>\n\n\n              <td>\n                <div class=\"\">\n                  <div class=\"d-flex-center\">\n                    <button mdbBtn class=\"mt-4 btn btn-floating add\"\n                      (click)=\"iconButton.click()\" size=\"sm\" color=\"primary\" outline=\"true\" mdbWavesEffect>\n                      <mdb-icon fas icon=\"plus\" class=\"\"></mdb-icon> <span class=\"pl-2\">Icon</span>\n                    </button>\n                    <span><img class=\"thumbnail\" [src]=\"base64Icon\" alt=\"\"></span>\n                  </div>\n                  <input #iconButton type=\"file\" id=\"add_icon\" name=\"icon\" class=\"form-control\" #icon=\"ngModel\"\n                    [(ngModel)]=\"newTemple.icon\" mdbInput mdbValidate [validateSuccess]=\"false\" required (change)=\"iconChanged($event)\">\n                 \n                  <mdb-error *ngIf=\"icon && icon.invalid && (icon.dirty || icon.touched)\">Icon is required\n                  </mdb-error>\n                </div>\n              </td>\n\n\n              <td>\n                <div class=\"md-form\">\n                  <input type=\"text\" id=\"add_misc\" name=\"misc\" class=\"form-control\" #misc=\"ngModel\"\n                    [(ngModel)]=\"newTemple.misc\" mdbInput mdbValidate [validateSuccess]=\"false\">\n                  <label for=\"misc\">Misc</label>\n                  <!-- <mdb-error *ngIf=\"misc && misc.invalid && (misc.dirty || misc.touched)\">Misc -->\n                  <!-- </mdb-error> -->\n                </div>\n              </td>\n\n              <!-- 2more items are available -\n              # color_scheme\n              # misc -- already added above -->\n\n              <td>\n                <button mdbBtn [disabled]=\"templeForm?.invalid || loadingAddTemple\" class=\"mt-4 btn btn-floating add\"\n                  (click)=\"onAddTemple()\" size=\"sm\" gradient=\"purple\" mdbWavesEffect>\n                  <mdb-icon fas icon=\"plus\" class=\"white-text\"></mdb-icon> <span class=\"pl-2 white-text\">Add</span>\n                </button>\n              </td>\n            </tr>\n          </table>\n        </form>\n        \n        <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center my-4\">\n        <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      </mdb-card-body>\n  </mdb-card>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"white py-2 px-4\">\n  <blockquote class=\"blockquote bq-success\">\n    <h3 class=\"header\">Users List</h3>\n    <p class=\"grey-text py-0\">Change settings for every user in your application</p>\n  </blockquote>\n</div>\n\n<div *ngIf=\"usersListLoading$ | async\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 300px\">\n  <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n\n<div *ngIf=\"!(usersListLoading$ | async)\" class=\"paper container-fluid mt-3 pb-5\">\n  <app-users-list *ngIf=\"!selectedUser\" [users]=\"users$ | async\" (addUser)=\"openAddUserModal($event)\"\n    (deleteUser)=\"onDeleteUser($event)\"></app-users-list>\n  <app-temple-list></app-temple-list>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <app-header [user]=\"user$ | async\" [isLoggedIn]=\"isLoggedIn$ | async\" [isLoading]=\"isLoading$ | async\" [isAdmin]=\"isAdmin$ | async\"\n    (logout)=\"onLogout($event)\"></app-header>\n</header>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n<app-pwa></app-pwa>\n\n<!-- <footer class=\"app-footer\" [ngClass]=\"{'footer-absolute': (isLoggedIn$ | async) || (isLoading$ | async)}\">\n  <app-footer></app-footer>\n</footer> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid full-page-container\">\n  <div class=\"row h-100 justify-content-center align-items-center\">\n    <div class=\"col-lg-4 col-sm-8 animated fadeIn\">\n      <!-- Material form login -->\n    <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\">\n      <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </div>\n      <mdb-card class=\"z-depth-2\" *ngIf=\"!(isLoading$ | async)\">\n\n        <div class=\"white text-center py-4\">\n          <img src=\"assets/images/RR-logo.png\" class=\"pb-2\" height=\"100\" alt=\"\">\n          <h5>\n            <strong>{{ \"LOGIN.LOGIN\" | translate}}</strong>\n          </h5>\n        </div>\n\n\n        <!--Card content-->\n        <mdb-card-body class=\"px-lg-5 pt-0\">\n          <div *ngIf=\"error$ | async as error\" class=\"alert alert-danger\" role=\"alert\">\n            {{ error }}\n          </div>\n          <!-- Form -->\n          <form [formGroup]=\"loginForm\" class=\"text-center\" style=\"color: #757575;\">\n\n            <!-- Username -->\n            <div class=\"md-form\">\n              <input mdbValidate [validateSuccess]=\"false\" type=\"email\" id=\"username\" class=\"form-control\" formControlName=\"username\" mdbInput>\n              <label for=\"username\">{{ \"LOGIN.USERNAME\" | translate}}</label>\n              <mdb-error *ngIf=\"username && username.invalid && (username.dirty || username.touched)\">Username is required</mdb-error>\n            </div>\n\n            <!-- Password -->\n            <div class=\"md-form\">\n              <input mdbValidate [validateSuccess]=\"false\" type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" mdbInput>\n              <label for=\"password\">{{ \"LOGIN.PASSWORD\" | translate}}</label>\n              <mdb-error *ngIf=\"password && password.invalid && (password.dirty || password.touched)\">Password is required</mdb-error>\n            </div>\n\n            <!-- Sign in button -->\n            <button mdbBtn color=\"primary\" block=\"true\" class=\"my-4 waves-effect z-depth-0\"\n              mdbWavesEffect type=\"submit\" (click)=\"onLogin()\">{{ \"LOGIN.LOGIN\" | translate}}</button>\n\n            <!-- Register -->\n            <!-- <p>Not a member?\n              <a routerLink=\"/register\">Register</a>\n            </p> -->\n\n            <!-- Social login -->\n            <!-- <p>or log in with:</p>\n            <a type=\"button\" class=\"mr-4\" (click)=\"onFacebookLogin('facebook')\">\n              <mdb-icon fab icon=\"facebook-f\"></mdb-icon>\n            </a>\n            <a type=\"button\" class=\"mr-4\" (click)=\"onTwitterLogin('twitter')\">\n              <mdb-icon fab icon=\"twitter\"></mdb-icon>\n            </a>\n            <a type=\"button\" (click)=\"onGoogleLogin('google')\">\n              <mdb-icon fab icon=\"google-plus-g\"></mdb-icon>\n            </a> -->\n          </form>\n          <!-- Form -->\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <div class=\"btn-toolbar row\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n                <blockquote class=\"text-left blockquote bq-success col-md-6 col-sm-12\">\n                </blockquote>\n                <div class=\"btn-group m-2 mt-4 w-100 d-flex-center\" role=\"group\" aria-label=\"First group\">\n                  <span>{{ \"LOGIN.LANGUAGE\" | translate}}</span> \n                  <button mdbBtn type=\"button\" (click)=\"setLanguage('en')\" [color]=\"selectedLanguage === 'en' ? 'info' : 'white'\"\n                    class=\"waves-light col-4 col-md-4 ml-2\" size=\"sm\" mdbWavesEffect>\n                    English\n                  </button>\n                  <button mdbBtn type=\"button\" (click)=\"setLanguage('ml')\" [color]=\"selectedLanguage === 'ml' ? 'info' : 'white'\"\n                    class=\"waves-light col-4 col-md-4\" size=\"sm\" mdbWavesEffect>\n                    മലയാളം\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </mdb-card-body>\n\n      </mdb-card>\n      <!-- Material form login -->\n    </div>\n  </div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<!--Navbar-->\n<mdb-navbar #navbar SideClass=\"navbar navbar-expand-md navbar-dark blue-nav font-weight-bold z-depth-1 justify-content-between fixed-top\" [containerInside]=\"false\">\n\n  <!-- Navbar brand -->\n  <mdb-navbar-brand>\n      <a class=\"navbar-brand\" routerLink=\"/\">\n          <img src=\"assets/images/RR-White-Logo.png\" height=\"40\" alt=\"\">\n      </a>\n  </mdb-navbar-brand>\n\n  <!-- Collapsible content -->\n  <links>\n\n    <!-- Links -->\n    <ul class=\"navbar-nav mr-auto\">\n      <li *ngIf=\"isLoggedIn && !isLoading\" class=\"nav-item\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" mdbWavesEffect>{{\"MAIN.HOME\" | translate}}<span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li *ngIf=\"isLoggedIn && !isLoading && !user.isAdmin\" class=\"nav-item\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/poojas\" routerLinkActive=\"active\" mdbWavesEffect>{{\"MAIN.POOJAS\" | translate}}</a>\n      </li>\n      <li *ngIf=\"isLoggedIn && !isLoading && !user.isAdmin\" class=\"nav-item\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/expenses\" routerLinkActive=\"active\" mdbWavesEffect>{{\"MAIN.EXPENSES\" | translate}}</a>\n      </li>\n      <li *ngIf=\"isLoggedIn && !isLoading && !user.isAdmin\" class=\"nav-item\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/donations\" routerLinkActive=\"active\" mdbWavesEffect>{{\"MAIN.DONATIONS\" | translate}}</a>\n      </li>\n      <li *ngIf=\"isLoggedIn && !isLoading && user.role === 'manager'\" class=\"nav-item\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/reports\" routerLinkActive=\"active\" mdbWavesEffect>{{\"MAIN.REPORTS\" | translate}}</a>\n      </li>\n      <!-- <li *ngIf=\"isLoggedIn && !isLoading\" class=\"nav-item\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/settings\" routerLinkActive=\"active\" mdbWavesEffect>Settings</a>\n      </li> -->\n      <li *ngIf=\"isLoggedIn && !isLoading && isAdmin\" class=\"nav-item\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/admin-panel\" routerLinkActive=\"active\" mdbWavesEffect>{{\"MAIN.ADMIN_PANEL\" | translate}}</a>\n      </li>\n    </ul>\n    <!-- Links -->\n\n    <!-- Search form -->\n    <!-- <ul class=\"navbar-nav\" *ngIf=\"!isLoggedIn && !isLoading\">\n      <li class=\"nav-item waves-light\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/login\" mdbWavesEffect>Login</a>\n      </li>\n      <li class=\"nav-item waves-light\">\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/register\" mdbWavesEffect>Register</a>\n      </li>\n    </ul> -->\n    <ul class=\"navbar-nav\" *ngIf=\"isLoggedIn && !isLoading\">\n      <li class=\"nav-link waves-light dropdown avatar p-0 avatar-dropdown\" mdbDropdown>\n        <a mdbDropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link waves-light\" mdbWavesEffect>\n          <img *ngIf=\"user.photoUrl\" src=\"{{ user.photoUrl }}\" height=\"35\" width=\"35\" class=\"rounded-circle z-depth-0\" alt=\"avatar image\">\n        </a>\n          <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown-primary\" role=\"menu\">\n              <div *ngIf=\"user.displayName\" class=\"text-center py-2 px-2\">{{ user.displayName }}</div>\n              <div *ngIf=\"!user.displayName\" class=\"text-center py-2 px-2\">Anonymous user</div>\n              <div class=\"divider dropdown-divider\"></div>\n              <div>\n                  <a *ngIf=\"isLoggedIn && !isLoading\" class=\"dropdown-item text-center waves-light\" (click)=\"navbar.hide()\" routerLink=\"/settings\" routerLinkActive=\"active\" mdbWavesEffect>{{\"MAIN.SETTINGS\" | translate}}</a>\n              </div>\n              <div class=\"divider dropdown-divider\"></div>\n              <a class=\"dropdown-item text-center waves-light\" mdbWavesEffect (click)=\"onLogout(); navbar.hide()\">{{\"MAIN.LOGOUT\" | translate}}</a>\n          </div>\n      </li>\n      <li class=\"nav-item waves-light logout-button\">\n        <a class=\"nav-link waves-light\" mdbWavesEffect (click)=\"navbar.hide()\" routerLink=\"/settings\" routerLinkActive=\"active\">{{\"MAIN.SETTINGS\" | translate}}</a>\n      </li>\n      <li class=\"nav-item waves-light logout-button\">\n        <a class=\"nav-link waves-light\" mdbWavesEffect (click)=\"onLogout(); navbar.hide()\">{{\"MAIN.LOGOUT\" | translate}}</a>\n      </li>\n    </ul>\n  </links>\n  <!-- Collapsible content -->\n\n</mdb-navbar>\n<!--/.Navbar-->\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container py-5 pages\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-sm-6\" *ngIf=\"!isAdmin\">\n      <mdb-card [@enterAnimation]=\"{value:':enter' ,params: {time: 100}}\" class=\"animated mb-3\" borderColor=\"border-warning\">\n        <a routerLink=\"/poojas\" mdbBtn gradient=\"blue\">\n          <div class=\"d-flex-center flex-column\">\n            <mdb-icon fas icon=\"gopuram\" size=\"4x\" class=\"white-text mb-2\"></mdb-icon>\n            <span>{{ \"MAIN.POOJAS\" | translate}}</span>\n          </div>\n          </a>\n      </mdb-card>\n    </div>\n\n    <div class=\"col-lg-6 col-sm-6\" *ngIf=\"!isAdmin\">\n      <mdb-card [@enterAnimation]=\"{value:':enter' ,params: {time: 150}}\" class=\"animated mb-3\" borderColor=\"border-warning\">\n        <a routerLink=\"/expenses\" mdbBtn gradient=\"blue\">\n          <div class=\"d-flex-center flex-column\">\n            <mdb-icon fas icon=\"file-invoice-dollar\" size=\"4x\" class=\"white-text mb-2\"></mdb-icon>\n            <span>{{ \"MAIN.EXPENSES\" | translate}}</span>\n          </div></a>\n      </mdb-card>\n    </div>\n  <!-- </div> -->\n  <!-- <div class=\"row\"> -->\n\n    <div class=\"col-lg-6 col-sm-6\" *ngIf=\"!isAdmin\">\n      <mdb-card [@enterAnimation]=\"{value:':enter' ,params: {time: 200}}\" class=\"animated mb-3\" borderColor=\"border-warning\">\n        <a routerLink=\"/donations\" mdbBtn gradient=\"blue\">\n          <div class=\"d-flex-center flex-column\">\n            <mdb-icon fas icon=\"hand-holding-usd\" size=\"4x\" class=\"white-text mb-2\"></mdb-icon>\n            <span>{{ \"MAIN.DONATIONS\" | translate}}</span>\n          </div>\n        </a>\n      </mdb-card>\n    </div>\n\n    <div class=\"col-lg-6 col-sm-6\" *ngIf=\"isAdmin\">\n      <mdb-card [@enterAnimation]=\"{value:':enter' ,params: {time: 250}}\" class=\"animated mb-3\" borderColor=\"border-warning\">\n        <a routerLink=\"/admin-panel\" mdbBtn gradient=\"blue\">\n          <div class=\"d-flex-center flex-column\">\n            <mdb-icon fas icon=\"mask\" size=\"4x\" class=\"white-text mb-2\"></mdb-icon>\n            <span>{{ \"MAIN.ADMIN_PANEL\" | translate}}</span>\n          </div>\n        </a>\n      </mdb-card>\n    </div>\n\n    <div class=\"col-lg-6 col-sm-6\" *ngIf=\"role === 'manager'\">\n      <mdb-card [@enterAnimation]=\"{value:':enter' ,params: {time: 300}}\" class=\"animated mb-3\" borderColor=\"border-warning\">\n        <a routerLink=\"/reports\" mdbBtn gradient=\"blue\">\n          <div class=\"d-flex-center flex-column\">\n            <mdb-icon fas icon=\"file-contract\" size=\"4x\" class=\"white-text mb-2\"></mdb-icon>\n            <span>{{ \"MAIN.REPORTS\" | translate}}</span>\n          </div>\n        </a>\n      </mdb-card>\n    </div>\n\n    <div class=\"col-lg-6 col-sm-6\">\n      <mdb-card [@enterAnimation]=\"{value:':enter' ,params: {time: 350}}\" class=\"animated mb-3\" borderColor=\"border-warning\">\n        <a routerLink=\"/settings\" mdbBtn gradient=\"blue\">\n          <div class=\"d-flex-center flex-column\">\n            <mdb-icon fas icon=\"tools\" size=\"4x\" class=\"white-text mb-2\"></mdb-icon>\n            <span>{{ \"MAIN.SETTINGS\" | translate}}</span>\n          </div>\n        </a>\n      </mdb-card>\n    </div>\n\n  </div>\n</div>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/expenses/containers/edit-expense/edit-expense.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expenses/containers/edit-expense/edit-expense.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"modal-content\">\n    <!-- <div class=\"modal-header bg-primary white-text\">\n      <div class=\"d-flex flex-column w-100\">\n        <div class=\"d-flex \">\n          <h3 class=\"modal-title w-100\" id=\"myModalLabel\">{{ heading }}</h3>\n        </div>\n      </div>\n     \n      \n     \n    </div> -->\n\n\n<mdb-card>\n    <mdb-card-header class=\"w-100 d-flex justify-space-between bg-primary white-text\">\n      <div>\n        <blockquote class=\"text-left  blockquote bq-success\">\n          <h3 class=\"header\">{{ \"EXPENSES.Edit_Expense\" | translate }} ({{editedValue.expense_date}})</h3>\n        </blockquote>\n      </div>\n      <!-- <button mdbWavesEffect mdbBtn type=\"button\" rounded=\"true\" color=\"white\" class=\"pull-right text-lg btn-primary\" rrDatePicker [date]=\"expenseDate\" [endDate]=\"endDate\" [startDate]=\"startDate\"\n      header=\"Select Date\" (dateSelected)=\"expDatePicked($event)\">\n      <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> <span appDateTransform [date]=\"expenseDate.format('YYYYMMDD')\"></span>\n    </button> -->\n    \n    <button type=\"button\" class=\"ml-2 close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n        <span aria-hidden=\"true\">×</span>\n      </button>\n    </mdb-card-header>\n\n    <mdb-card-body class=\"py-2\">\n      <form #expenseForm=\"ngForm\" autocomplete=\"on\">\n        <div class=\"d-flex\">\n        <div class=\"md-form\">\n          <input type=\"text\" id=\"item\" name=\"item\" class=\"form-control\" [(ngModel)]=\"editedValue.item\" mdbInput mdbValidate [validateSuccess]=\"false\" #item=\"ngModel\" required>\n          <label for=\"item\">{{ \"EXPENSES.Item\" | translate }}</label>\n          <mdb-error *ngIf=\"item && item.invalid && (item.dirty || item.touched)\">{{ \"EXPENSES.Item\" | translate }} {{\"is_required\" | translate}}</mdb-error>\n        </div>\n        </div>\n\n        <div class=\"md-form\" style=\"margin-top: 15px;\">\n          <textarea type=\"text\" id=\"description\" name=\"description\" class=\"my-0 py-0 md-textarea form-control\" \n          #description=\"ngModel\" [(ngModel)]=\"editedValue.description\" mdbInput mdbValidate\n            [validateSuccess]=\"false\" required></textarea>\n          <label for=\"description\">{{ \"EXPENSES.Description\" | translate }}</label>\n          <mdb-error *ngIf=\"description && description.invalid && (description.dirty || description.touched)\">{{ \"EXPENSES.Description\" | translate }} {{\"is_required\" | translate}}</mdb-error>\n        </div>\n\n        <div class=\"text-lg\">\n          <label for=\"cost\" class=\"grey-text\">{{ \"EXPENSES.Cost\" | translate }}</label>\n          <div class=\"md-form mt-0\">\n            <span class=\"d-flex\">\n              <span class=\"price\">&#x20B9;</span>\n              <input type=\"number\" class=\"form-control price\" id=\"cost\" name=\"cost\" [(ngModel)]=\"editedValue.cost\" #cost=\"ngModel\" mdbValidate [validateSuccess]=\"false\" required>\n            </span>\n            <mdb-error class=\"ml-3\" *ngIf=\"cost && cost.invalid && (cost.dirty || cost.touched)\">{{ \"EXPENSES.Cost\" | translate }} {{\"is_required\" | translate}}</mdb-error>\n          </div>\n        </div>\n\n      </form>\n    </mdb-card-body>\n    <mdb-card-footer class=\"d-flex\">\n      <button type=\"button\" mdbBtn color=\"white\" class=\"relative waves-light pull-right\" mdbWavesEffect (click)=\"expenseForm.reset()\">{{ \"EXPENSES.Clear\" | translate }}\n        </button>\n      <button type=\"button\" mdbBtn color=\"success\" [disabled]=\"expenseForm.invalid\" class=\"relative waves-light pull-right\" mdbWavesEffect (click)=\"onSave()\">{{ \"Save\" | translate }}\n        </button>\n\n    </mdb-card-footer>\n  </mdb-card>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm-modal/confirm-modal.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/confirm-modal/confirm-modal.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">×</span>\n    </button>\n    <h4 class=\"modal-title w-100\" id=\"myModalLabel\">{{\"CONFIRM_MODAL.Delete\" | translate}}</h4>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{\"CONFIRM_MODAL.sure\" | translate}}</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" mdbBtn color=\"white\" class=\"black-text waves-light\" aria-label=\"Close\" (click)=\"modalRef.hide()\"\n      mdbWavesEffect>{{\"CONFIRM_MODAL.cancel\" | translate}}</button>\n    <button type=\"button\" mdbBtn color=\"red\" class=\"waves-light\" mdbWavesEffect (click)=\"onDelete()\">{{\"CONFIRM_MODAL.Delete\" | translate}}</button>\n  </div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\n  <div class=\"modal-header bg-primary white-text\">\n    <div class=\"d-flex flex-column w-100\">\n      <div class=\"d-flex \">\n        <h3 class=\"modal-title w-100\" id=\"myModalLabel\">{{ heading }}</h3>\n      </div>\n      <div class=\"d-flex mr-4 align-items-center datepicker\">\n        <span class=\"price\">&#x20B9;{{ price }}</span>\n\n        <button mdbWavesEffect mdbBtn type=\"button\" color=\"white\" rounded=\"true\" class=\"pull-right text-lg\" rrDatePicker [date]=\"selectedDate\"\n        (click)=\"dateClicked($event)\" header=\"Select Date\" (dateSelected)=\"datePicked($event)\" [endDate]=\"endDate\">\n        <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> <span appDateTransform [date]=\"response?.ist_YYYYMMDD\"></span>\n      </button>\n      </div>\n    </div>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">×</span>\n    </button>\n\n\n  </div>\n  <mdb-card class=\"text-center\">\n    <mdb-card-header>\n      <div class=\"pl-2 pr-2 row container\">\n        <div class=\"phone col-md-6 col-xs-12\">\n          <label for=\"phone\" class=\"float-left\">{{\"POOJAS_MODAL.Phone_Number\" | translate}}</label>\n          <input type=\"text\" id=\"phone\" name=\"phone\" class=\"form-control\" [(ngModel)]=\"response.phone_number\" mdbInput mdbValidate\n            [validateSuccess]=\"false\" #phone=\"ngModel\" (blur)=\"fetchPeopleData(phone.value)\" >\n        <mdb-error class=\"float-left\" *ngIf=\"phone && phone.invalid && (phone.dirty || phone.touched)\">{{\"POOJAS_MODAL.Phone_Number\" | translate}} {{\"is_required\" | translate}}</mdb-error>\n        </div>\n        <div class=\"col-md-6 col-xs-12\">\n          <label class=\"float-left\"  for=\"address\">{{\"POOJAS_MODAL.Address\" | translate}}</label>\n          <textarea type=\"text\" id=\"address\" name=\"address\" class=\"md-textarea form-control\"\n            [(ngModel)]=\"response.address\" mdbInput mdbValidate [validateSuccess]=\"false\"></textarea>\n        </div>\n      </div>\n\n    </mdb-card-header>\n  </mdb-card>\n\n  <div class=\"modal-body\">\n\n    <div class=\"left-section\">\n      <form #poojasForm=\"ngForm\">\n        <div class=\"md-form\">\n          <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [(ngModel)]=\"pooja.pooja_name\" mdbInput mdbValidate\n            [validateSuccess]=\"false\" #name=\"ngModel\" required>\n          <label for=\"name\">{{\"POOJAS_MODAL.Name\" | translate}}</label>\n          <mdb-error *ngIf=\"name && name.invalid && (name.dirty || name.touched)\">{{\"POOJAS_MODAL.Name\" | translate}} {{\"is_required\" | translate}}</mdb-error>\n        </div>\n\n        <div class=\"btn-toolbar star-container\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n          <div class=\"md-form hidden\">\n            <input type=\"text\" id=\"nakshatram\" name=\"nakshatram\" class=\"form-control\" [(ngModel)]=\"pooja.nakshatram\" mdbInput mdbValidate\n              [validateSuccess]=\"false\" #nakshatram=\"ngModel\" required>\n            <label for=\"nakshatram\">{{\"POOJAS_MODAL.Nakshathram\" | translate}}</label>\n            <mdb-error *ngIf=\"nakshatram && nakshatram.invalid && (nakshatram.dirty || nakshatram.touched)\">{{\"POOJAS_MODAL.Nakshathram\" | translate}} {{\"is_required\" | translate}}</mdb-error>\n          </div>\n          <div class=\"btn-group mr-2\" role=\"group\" aria-label=\"First group\">\n              <button (click)=\"selectStar(star)\"\n              *ngFor=\"let star of starSigns\" mdbBtn type=\"button\" color=\"warning\"  [class.selected]=\"star === pooja.nakshatram\"\n               mdbWavesEffect>{{star}}</button>\n          </div>\n        </div>\n      </form>\n\n\n\n    </div>\n    <div class=\"right-section\">\n      <div class=\"amount payment-type-radio mb-4\" id=\"pooja_payment_type_radio\">\n        <div *ngFor=\"let type of paymentTypes\">\n          <input\n            type=\"radio\"\n            class=\"form-check-input\"\n            name=\"pooja_payment_options\"\n            [id]=\"'pooja_' + type.id\"\n            [checked]=\"type.checked\"\n            [(ngModel)]=\"selectedPaymentType\"\n            [value]=\"type.id\"\n            (ngModelChange)=\"updatePaymentTypeStates($event)\"\n            autocomplete=\"off\" />\n          <label class=\"form-check-label\" [for]=\"'pooja_' + type.id\">{{type.label}}</label>\n        </div>\n      </div>\n      <mdb-card class=\"text-center\">\n        <mdb-card-body>\n          <table mdbTable small=\"true\" striped=\"true\" class=\"bhakthar-table\" *ngIf=\"!peopleFetching\">\n            <tbody>\n              <tr *ngFor=\"let item of response.bhakthar\">\n                <th scope=\"row\">{{ item.name }}</th>\n                <td>{{ item.nakshatram }}</td>\n                <td>\n                  <mdb-icon fas icon=\"times\" class=\"float-right delete red-text\" (click)=\"deleteEntry(item)\" alt=\"Delete\"></mdb-icon>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"p-4 d-flex flex-column justify-content-center align-items-center\" *ngIf=\"!peopleFetching && response.bhakthar.length === 0\">\n            <mdb-icon fas icon=\"exclamation-circle\" class=\"float-right grey-text\" alt=\"no data\"></mdb-icon>\n            <p class=\"grey-text\">{{\"POOJAS_MODAL.No_data_added\" | translate}}</p>\n          </div>\n          <div class=\"p-4 d-flex flex-column justify-content-center align-items-center\" *ngIf=\"peopleFetching\">\n            <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\n              <span class=\"sr-only\">{{\"Loading\" | translate}}...</span>\n            </div>\n          </div>\n        </mdb-card-body>\n        <mdb-card-footer *ngIf=\"response.bhakthar.length\">\n          <span>{{\"POOJAS_MODAL.Total_Price\" | translate}} </span> <span class=\"price\">&#x20B9; {{response.pooja_price}}</span>\n        </mdb-card-footer>\n      </mdb-card>\n\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" mdbBtn class=\"waves-light black-text\" color=\"warning\" aria-label=\"Close\" (click)=\"addPerson()\"\n      mdbWavesEffect [disabled]=\"poojasForm?.invalid\">{{\"POOJAS_MODAL.Add_Person\" | translate}}</button>\n\n      <div class=\"d-flex\">\n        <button type=\"button\" mdbBtn class=\"waves-light hide-sm\" aria-label=\"Close\" (click)=\"modalRef.hide()\"\n          mdbWavesEffect>{{\"POOJAS_MODAL.Close\" | translate}}</button>\n        <button type=\"button\" mdbBtn color=\"success\" [disabled]=\"peopleFetching || response.bhakthar.length === 0\" class=\"relative waves-light\" mdbWavesEffect (click)=\"onSave()\">{{\"Save\" | translate}}</button>\n        <button type=\"button\" mdbBtn color=\"success\" [disabled]=\"peopleFetching || response.bhakthar.length === 0\" class=\"relative waves-light\" mdbWavesEffect (click)=\"onSave(true)\">{{\"POOJAS.Print\" | translate}}</button>\n      </div>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/printer/printer.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/printer/printer.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button #buttonRef [style.display]=\"hidden ? 'none': ''\" (click)=\"triggerPrint()\">\n    <span *ngIf=\"text !== ''\">{{\"POOJAS.Print\" | translate}}</span>\n    <mdb-icon fas icon=\"print\" class=\"float-left fa-lg mr-2\" alt=\"no data\"></mdb-icon>\n</button>\n\n<div class=\"content\">\n\n    <div class=\"main-copy\" #bill>\n\t\t<header>\n\t\t\t<img class=\"icon\" [src]=\"temple.icon\" alt=\"\">\n            <div class=\"text\">\n                <h3 class=\"temple-name\">{{temple.temple_name}}</h3>\n                <span class=\"manthram\" *ngIf=\"temple?.misc?.manthram\">{{temple?.misc?.manthram}}</span>\n                <span class=\"address\">{{temple.temple_address}}</span>\n                <span class=\"phone\">Phone : {{temple.phone_number}}</span>\n                <ng-container [ngSwitch]=\"type\">\n                    <div class=\"title\" *ngSwitchCase=\"'pooja'\"><span *ngIf=\"poojas && poojas.length\">{{poojas[0]?.pooja_name}}</span></div>\n                    <div class=\"title\" *ngSwitchCase=\"'expense'\"><span>{{\"Expense_Receipt\" | translate}}</span></div>\n                    <div class=\"title\" *ngSwitchCase=\"'donation'\"><span>{{\"Donations_Receipt\" | translate}}</span></div>\n                </ng-container>\n            </div>\n\t\t</header>\n        <!-- pooja...----------------- -->\n        <body *ngIf=\"type === 'pooja' && poojas\">\n            <title>{{poojas[0]?.pooja_name}} - {{\"Receipt\" | translate}}: {{poojas[0]?.receipt_number}}</title>\n            <!-- <div class=\"title\"><span>{{poojas[0]?.pooja_name}}</span></div> -->\n            <div class=\"date-receipt\">\n                <span>{{\"Date\" | translate}} : <span class=\"db\" appDateTransform [date]=\"poojas[0].pooja_date\" [format]=\"'DD-MM-YYYY'\"></span></span>\n                <span *ngIf=\"poojas[0]?.receipt_number\" class=\"db bt-gray\">{{\"Receipt\" | translate}}: <span >{{poojas[0]?.receipt_number}}</span></span>\n            </div>\n            <br>\n            <div class=\"details\">\n                <div class=\"content w-100\">\n                    <div class=\"row\" *ngIf=\"removePaymentTypePrefixFromAddress(poojas[0]?.address)\">\n                        <span class=\"label\">{{\"DONATIONS.Address\" | translate}} :</span>\n                        <span class=\"value\">{{removePaymentTypePrefixFromAddress(poojas[0]?.address)}}</span>\n                    </div>\n                    <div class=\"row\"  *ngIf=\"poojas[0]?.phone_number && poojas[0]?.phone_number !== '0'\">\n                        <span class=\"label\">{{\"Phone_Number\" | translate}} :</span>\n                        <span class=\"value\">{{poojas[0]?.phone_number}}</span>\n                    </div>\n                    </div>\n                    </div>\n                    <br>\n                   <ng-container *ngIf=\"size !== 'bill'\">\n                    <ng-container *ngFor=\"let splitPooja of splitPoojas; let j = index;\">\n                        <hr class=\"page-break\" *ngIf=\"j > 0\">\n                        <table class=\"pooja-table\">\n                        <thead style=\"background-color: whitesmoke; padding: 10px;\">\n\n                            <tr style=\"font-weight: bold;\">\n                                <td>{{\"No#\" | translate}}</td>\n                                <td>{{\"Name\" | translate}}</td>\n                                <td>{{\"Nakshatram\" | translate}}</td>\n                                <td>{{\"DONATIONS.Payment\" | translate}}</td>\n                                <td>{{\"Amount\" | translate}}</td>\n                            </tr>\n                        </thead>\n                        <tbody style=\"border-bottom: 1px dotted black\">\n                            <ng-container *ngFor=\"let pooja of splitPooja; let i = index;\">\n                                <tr>\n                                    <td>{{i+ (j > 0 ? splitPoojas[j-1].length : j) +1}}</td>\n                                    <td>{{pooja?.name}}</td>\n                                    <td>{{pooja?.nakshatram}}</td>\n                                    <td>{{extractPaymentTypeFromAddress(poojas[0]?.address)}}</td>\n                                    <td appToFixed>&#x20B9; {{(pooja?.pooja_price)}}</td>\n                                </tr>\n\n                            </ng-container>\n                        </tbody>\n                        <tfoot *ngIf=\"j + 1 == splitPoojas.length\">\n                            <tr style=\"border-bottom: 1px dashed black; margin-top: 10px; background-color: whitesmoke;\">\n                                <td colspan=\"3\" style=\"font-weight: bold;\"><b>{{\"Total_Amount\" | translate}}</b></td>\n                                <td style=\"font-weight: bold;\"><b>&#x20B9; {{getTotalPrice(poojas,\n                                        'pooja_price')}}</b></td>\n                            </tr>\n                        </tfoot>\n                    </table>\n                </ng-container>\n\n                </ng-container>\n                    <div *ngIf=\"size === 'bill'\" class=\"bill\">\n                        <div *ngFor=\"let pooja of poojas\" class=\"row-container\">\n                            <div class=\"row\">\n                                <span class=\"label\">{{\"Name\" | translate}} :</span>\n                                <span class=\"value\">{{pooja?.name}}</span>\n                            </div>\n                            <div class=\"row\">\n                                <span class=\"label\">{{\"Nakshatram\" | translate}} :</span>\n                                <span class=\"value\">{{pooja?.nakshatram}}</span>\n                            </div>\n                            <div class=\"row\">\n                                <span class=\"label\">{{\"Amount\" | translate}} :</span>\n                                <span class=\"value\">{{extractPaymentTypeFromAddress(poojas[0]?.address)}}</span>\n                            </div>\n                            <div class=\"row\">\n                                <span class=\"label\">{{\"Amount\" | translate}} :</span>\n                                <span appToFixed class=\"value\">{{(pooja?.pooja_price)}}</span>\n                            </div>\n                        </div>\n                        <table class=\"pooja-table\">\n                            <tfoot>\n                                <tr style=\"border-bottom: 1px dashed black; margin-top: 10px; background-color: whitesmoke;\">\n                                    <td colspan=\"2\" style=\" font-weight: bold;\"><b>{{\"Total_Amount\" | translate}}</b></td>\n                                    <td style=\" font-weight: bold;\"><b>&#x20B9; {{getTotalPrice(poojas,\n                                            'pooja_price')}}</b></td>\n                                </tr>\n                            </tfoot>\n                        </table>\n                    </div>\n                <!-- </div> -->\n            <!-- </div> -->\n        </body>\n\n        <!-- expense_---------------------- -->\n        <body *ngIf=\"type === 'expense' && expense\">\n            <title>{{\"Expense_Receipt\" | translate}} - {{\"Receipt\" | translate}}: {{expense?.receipt_number}}</title>\n\n                <!-- <div class=\"title\"><span>{{\"Expense_Receipt\" | translate}}</span></div> -->\n                <div class=\"date-receipt\">\n                    <span>{{\"Date\" | translate}} : {{expense.expense_date}}</span>\n                    <span class=\"bt-gray\">{{\"Receipt\" | translate}} : {{expense?.receipt_number}}</span>\n                </div>\n                <br>\n                <div class=\"details\">\n                    <div class=\"content w-100\">\n                        <div class=\"row\">\n                            <span class=\"label\">{{\"Item\" | translate}} :</span>\n                            <span class=\"value bold\" style=\"white-space: nowrap;\">{{expense.item}}</span>\n                        </div>\n                        <div class=\"row\">\n                            <span class=\"label\">{{\"Cost\" | translate}} :</span>\n                            <span class=\"value bold\">₹{{expense.cost}}</span>\n                        </div>\n                        <div class=\"row\" *ngIf=\"expense.description\">\n                            <span class=\"label\">{{\"Notes\" | translate}} :</span>\n                            <span class=\"value bold\">{{expense.description}}</span>\n                        </div>\n                        <table class=\"total-amount\">\n                            <tr\n                                style=\"border-bottom: 1px dashed black; margin-top: 10px; background-color: whitesmoke;\">\n                                <td style=\" font-weight: bold;\"><b>{{\"Total_Amount\" | translate}}</b></td>\n                                <td style=\" font-weight: bold;\"><b appToFixed>₹\n                                        {{( expense.cost)}}</b></td>\n                            </tr>\n                        </table>\n\n                    </div>\n                </div>\n\n        </body>\n\n\n        <!-- DONATION---------------------- -->\n        <body *ngIf=\"type === 'donation' && donation\">\n            <title>{{\"Donations_Receipt\" | translate}} - {{\"Receipt\" | translate}}: {{donation?.receipt_number}}</title>\n\n                <!-- <div class=\"title\"><span>{{\"Date\" | translate}}Donation Receipt</span></div> -->\n                <div class=\"date-receipt\">\n                    <span>{{\"Date\" | translate}} : {{donation.donation_date}}</span>\n                    <span class=\"bt-gray\">{{\"Date\" | translate}}Receipt No : {{donation?.receipt_number}}</span>\n                </div>\n                <br>\n                <div class=\"details\">\n                    <div class=\"content w-100\">\n                        <div class=\"row\">\n                            <span class=\"label\">{{\"Name\" | translate}} :</span>\n                            <span class=\"value bold\">{{donation.name}}</span>\n                        </div>\n                        <div class=\"row\" *ngIf=\"donation.item !== 'vanji' && donation.nakshatram\">\n                            <span class=\"label\">{{\"Nakshathram\" | translate}} :</span>\n                            <span class=\"value bold\">{{donation.nakshatram}}</span>\n                        </div>\n                        <div class=\"row\" *ngIf=\"donation.item === 'vanji'\">\n                            <span class=\"label\">{{\"DONATIONS.Item\" | translate}} :</span>\n                            <span class=\"value bold\">{{\"DONATIONS.Vanji\" | translate}}</span>\n                        </div>\n                        <div class=\"row\" *ngIf=\"donation.item === 'festival'\">\n                            <span class=\"label\">{{\"DONATIONS.Item\" | translate}} :</span>\n                            <span class=\"value bold\">{{\"DONATIONS.Festival\" | translate}}</span>\n                        </div>\n                        <div class=\"row\" *ngIf=\"donation.address\">\n                            <span class=\"label\">{{\"Address\" | translate}} :</span>\n                            <span class=\"value bold\">{{donation.address}}</span>\n                        </div>\n\n                        <div class=\"row\" *ngIf=\"donation.description\">\n                            <span class=\"label\">{{\"DONATIONS.Payment\" | translate}} :</span>\n                            <span class=\"value bold\">{{donation.description}}</span>\n                        </div>\n\n                        <div class=\"row\" *ngIf=\"donation.phone_number && donation.phone_number !== '0'\">\n                            <span class=\"label\">{{\"Phone_Number\" | translate}} :</span>\n                            <span class=\"value\">{{donation.phone_number}}</span>\n                        </div>\n                        <div class=\"row\">\n                            <span class=\"label\">{{\"Amount\" | translate}} Received :</span>\n                            <span appToFixed class=\"value bold\">₹{{(donation.amount)}}</span>\n                        </div>\n                        <table class=\"total-amount\">\n                            <tr\n                                style=\"border-bottom: 1px dashed black; margin-top: 10px; background-color: whitesmoke;\">\n                                <td style=\" font-weight: bold;\"><b>{{\"Total_Amount\" | translate}}</b></td>\n                                <td style=\" font-weight: bold;\"><b appToFixed>₹\n                                        {{( donation.amount)}}</b></td>\n                            </tr>\n                        </table>\n\n                    </div>\n                </div>\n\n        </body>\n\n        <!-- REPORT--------------------- -->\n\n        <body *ngIf=\"type === 'report' && reports\" class=\"report\">\n            <div class=\"title\"><span>{{\"REPORTS.Financial_Reports\" | translate}}</span></div>\n            <p>{{\"Period\" | translate}} : {{reportPeriod}}</p>\n            <span style=\"width: 100%; font-weight: bold; display: flex;\n            padding: 5px 5px; background-color: black;color: white;\"\n            >{{\"REPORTS.ProfitLoss\" | translate}} = {{\"Total_Credit\" | translate}} - {{\"Total_Debit\" | translate}} =  <b appToFixed> &#x20B9;{{getOverallProfitLoss()}}</b></span>\n\n\n          <ng-container *ngIf=\"reports.length > 0; else NoReport\">\n            <section *ngFor=\"let report of reports\">\n                <p style=\"font-weight: bold;padding-bottom: 10px; border-bottom: 1px solid dimgray;\">{{\"Date\" | translate}}:\n                    <b appDateTransform [date]=\"report.date\"></b>\n                </p>\n                <table *ngIf=\"report?.poojas.length\">\n                    <p class=\"heading\">{{\"MAIN.POOJAS\" | translate}}</p>\n                    <tbody style=\"border: 1px dotted black\">\n                        <tr>\n                            <td style=\"font-weight: bold;\">{{\"Receipt\" | translate}}</td>\n                            <td style=\"font-weight: bold;\">{{\"Pooja\" | translate}}</td>\n                            <td style=\"font-weight: bold;\">{{\"POOJAS.Name\" | translate}}</td>\n                            <td style=\"font-weight: bold;\">{{\"Nakshathram\" | translate}}</td>\n                            <td style=\"font-weight: bold;\">{{\"DONATIONS.Payment\" | translate}}</td>\n                            <!-- <td style=\"font-weight: bold;\">{{\"Phone_Number\" | translate}}</td> -->\n                            <td style=\"font-weight: bold;\">{{\"Amount\" | translate}}</td>\n                        </tr>\n                        <tr *ngFor=\"let pooja of report.poojas\">\n                            <td>{{pooja?.receipt_number}}</td>\n                            <td>{{pooja?.pooja_name}}</td>\n                            <td>{{pooja?.name}}</td>\n                            <td>{{pooja?.nakshatram}}</td>\n                            <td>{{extractPaymentTypeFromAddress(pooja?.address)}}</td>\n                            <!-- <td>{{pooja.phone_number}}</td> -->\n                            <td style=\"width: 15%; white-space: nowrap; overflow-wrap: break-word;\"><b appToFixed>&#x20B9; {{(pooja.pooja_price)}}</b></td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"5\" style=\"font-weight: bold;\">{{\"DONATIONS.TotalCash\" | translate}}</td>\n                            <td><b>&#x20B9; {{getTotalCash(report.poojas)}}</b></td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"5\" style=\"font-weight: bold;\">{{\"DONATIONS.TotalUPI\" | translate}}</td>\n                            <td><b>&#x20B9; {{getTotalUPI(report.poojas)}}</b></td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"5\" style=\"font-weight: bold;\">{{\"DONATIONS.TotalBankTransfer\" | translate}}</td>\n                            <td><b>&#x20B9; {{getTotalBankTransfer(report.poojas)}}</b></td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"5\" style=\"font-weight: bold;\">{{\"Total_Amount\" | translate}}</td>\n                            <td><b>&#x20B9; {{getTotalPrice(report.poojas, 'pooja_price')}}</b></td>\n                        </tr>\n                    </tbody>\n                    <tr><br><br></tr>\n                </table>\n                <br><br>\n                <br>\n                <table *ngIf=\"report?.poojas.length\">\n                    <span><b>{{\"consolidated_poojawise\" | translate}}</b></span>\n                    <br><br>\n                    <tbody style=\"border: 1px dotted black\">\n                        <tr>\n                            <td style=\"font-weight: bold;\">{{\"Pooja\" | translate}}</td>\n                            <td style=\"font-weight: bold;\">{{\"Amount\" | translate}}</td>\n                        </tr>\n                        <tr *ngFor=\"let pooja of getGroupedReportByPoojas(report.poojas).consolidatedList\">\n                            <td>{{pooja?.pooja_name}}</td>\n                            <td><b appToFixed>&#x20B9; {{(pooja.pooja_price)}}</b></td>\n                        </tr>\n                        <tr>\n                            <td style=\"font-weight: bold;\">{{\"Total_Amount\" | translate}}</td>\n                            <td><b>&#x20B9; {{getGroupedReportByPoojas(report.poojas).totalSum}}</b></td>\n                        </tr>\n                    </tbody>\n                </table>\n                <br><br>\n                <table *ngIf=\"report?.expenses.length\">\n                    <p class=\"heading\">{{\"MAIN.EXPENSES\" | translate}}</p>\n                    <tr><br></tr>\n                    <tbody style=\"border: 1px dotted black; table-layout: fixed; width: 100%;\">\n                        <tr>\n                            <td style=\"font-weight: bold;\">{{\"Date\" | translate}}</td>\n                            <td style=\"font-weight: bold;\">{{\"Item\" | translate}}</td>\n                            <td style=\"font-weight: bold;\">{{\"POOJAS_LIST.Description\" | translate}}</td>\n                            <td style=\"font-weight: bold;\">{{\"POOJAS_LIST.Added_By\" | translate}}</td>\n                            <td style=\"font-weight: bold; width: 15%;\">{{\"Amount\" | translate}}</td>\n                        </tr>\n                        <tr *ngFor=\"let expense of report.expenses\">\n                            <td>{{expense.expense_date}}</td>\n                            <td style=\"white-space: nowrap;\">{{expense.item}}</td>\n                            <td>{{expense.description}}</td>\n                            <td>{{expense.added_by}}</td>\n                            <td style=\"width: 15%; white-space: nowrap; overflow-wrap: break-word;\"><b appToFixed>&#x20B9; {{(expense.cost)}}</b></td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"4\" style=\"font-weight: bold;\">{{\"Total_Expense\" | translate}}</td>\n                            <td><b>&#x20B9; {{getTotalPrice(report.expenses, 'cost')}}</b></td>\n                        </tr>\n                    </tbody>\n                </table>\n                <br>\n\n                <table *ngIf=\"report?.donations.length\">\n                    <p class=\"heading\">{{\"DONATIONS.Donations\" | translate}}</p>\n                    <br>\n                    <tbody style=\"border: 1px dotted black; table-layout: fixed; width: 100%;\">\n                        <tr>\n                            <td style=\"font-weight: bold;\">{{\"Date\" | translate}}</td>\n                            <td style=\"font-weight: bold;\">{{\"Name\" | translate}}</td>\n                            <td style=\"font-weight: bold;\">{{\"Nakshatram\" | translate}}</td>\n                            <td style=\"font-weight: bold;\">{{\"Phone_Number\" | translate}}</td>\n                            <td style=\"font-weight: bold;\">{{\"DONATIONS.Payment\" | translate}}</td>\n                            <td style=\"font-weight: bold;\">{{\"Address\" | translate}}</td>\n                            <td style=\"font-weight: bold; min-width: 15%; \">{{\"Amount\" | translate}}</td>\n                        </tr>\n                        <tr *ngFor=\"let donationRef of report.donations?.grouped?.allDonations\">\n                            <td>{{report.donations[donationRef].donation_date}}</td>\n                            <td>{{report.donations[donationRef].name}}</td>\n                            <td>{{report.donations[donationRef].nakshatram}}</td>\n                            <td>{{report.donations[donationRef].phone_number}}</td>\n                            <td style=\"white-space: nowrap;\">{{report.donations[donationRef].description}}</td>\n                            <td>{{removePaymentTypePrefixFromAddress(report.donations[donationRef].address)}}</td>\n                            <td style=\"width: 15%; white-space: nowrap; overflow-wrap: break-word;\"><b appToFixed>&#x20B9; {{(report.donations[donationRef].amount)}}</b></td>\n                        </tr>\n                        <ng-container *ngIf=\"report.donations?.grouped?.vanji.length > 0\">\n                            <th style=\"padding-top: 20px\">{{\"DONATIONS.Vanji\" | translate}}</th>\n                            <tr *ngFor=\"let donationRef of report.donations?.grouped?.vanji\">\n                                <td>{{report.donations[donationRef].donation_date}}</td>\n                                <td colspan=\"4\">{{report.donations[donationRef].name}}</td>\n                                <td>{{\"DONATIONS.Vanji\" | translate}}</td>\n                                <td><b appToFixed>&#x20B9; {{(report.donations[donationRef].amount)}}</b></td>\n                            </tr>\n                        </ng-container>\n\n                        <ng-container  *ngIf=\"report.donations?.grouped?.festival.length > 0\">\n                            <th style=\"padding-top: 20px\">{{\"DONATIONS.Festival\" | translate}}</th>\n                            <tr *ngFor=\"let donationRef of report.donations?.grouped?.festival\">\n                                <td>{{report.donations[donationRef].donation_date}}</td>\n                                <td>{{report.donations[donationRef].name}}</td>\n                                <td>{{report.donations[donationRef].nakshatram}}</td>\n                                <td></td>\n                                <td>{{report.donations[donationRef].description}}</td>\n                                <td>{{removePaymentTypePrefixFromAddress(report.donations[donationRef].address)}}</td>\n                                <!-- <td>{{\"DONATIONS.Festival\" | translate}}</td> -->\n                                <td><b appToFixed>&#x20B9; {{(report.donations[donationRef].amount)}}</b></td>\n                            </tr>\n                        </ng-container>\n\n                        <tr>\n                            <td colspan=\"6\" style=\"font-weight: bold;\">{{\"DONATIONS.TotalCash\" | translate}}</td>\n                            <td><b>&#x20B9; {{getTotalCash(report.donations)}}</b></td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"6\" style=\"font-weight: bold;\">{{\"DONATIONS.TotalUPI\" | translate}}</td>\n                            <td><b>&#x20B9; {{getTotalUPI(report.donations)}}</b></td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"6\" style=\"font-weight: bold;\">{{\"DONATIONS.TotalBankTransfer\" | translate}}</td>\n                            <td><b>&#x20B9; {{getTotalBankTransfer(report.donations)}}</b></td>\n                        </tr>\n                        <tr>\n                            <td colspan=\"6\" style=\"font-weight: bold;\">{{\"DONATIONS.Total_Donations\" | translate}}</td>\n                            <td><b>&#x20B9; {{getTotalPrice(report.donations, 'amount')}}</b></td>\n                        </tr>\n                    </tbody>\n                </table>\n\n                <h4>{{\"REPORTS.ProfitLoss\" | translate}}</h4>\n                <div class=\"d-flex\">\n                        <table>\n                            <tr>\n                                <td>{{\"Total_Credit\" | translate}}</td>\n                                <td><b>&#x20B9; {{ getTotalCredit(report) }}</b></td>\n                            </tr>\n                            <tr>\n                                <td>{{\"Total_Debit\" | translate}}</td>\n                                <td><b>&#x20B9; {{getTotalPrice(report.expenses, 'cost')}}</b></td>\n                            </tr>\n                            <tr style=\"background-color: black; color: white;\">\n                                <td>{{\"REPORTS.ProfitLoss\" | translate}} = {{\"Total_Credit\" | translate}} - {{\"Total_Debit\" | translate}}</td>\n                                <td><b>&#x20B9; {{getDailyProfitLoss(\n                                    getTotalCredit(report),\n                                    getTotalPrice(report.expenses, 'cost')\n                                    )}}</b></td>\n                            </tr>\n                        </table>\n                    </div>\n            </section>\n        </ng-container>\n        <ng-template #NoReport>\n            <span>No Reports available</span>\n        </ng-template>\n            <div>\n                <br><br>\n                <footer>\n                    {{\"Generated_Date\" | translate}}:\n                    {{getCurrentDate()}}\n                </footer>\n            </div>\n\n        </body>\n\n        <footer>\n            <table class=\"notes\">\n                <tr>\n                    <td>{{\"Billed_By\" | translate}} : {{temple.displayName}}</td>\n                </tr>\n                <tr>\n                    <td></td>\n                    <td style=\"float: right; border-top: 1px dashed black;\">{{\"Authorized_Signature\" | translate}}</td>\n                </tr>\n            </table>\n            <br>\n            <div class=\"footer\">\n                <div class=\"content\">\n                    <span>{{\"ThankYou\" | translate:{phone_number: temple.phone_number, email: temple.email} }}</span>\n                </div>\n                <!-- <p>For Temple Accounting Software, please contact 8547854183 or email us at </p> -->\n            </div>\n        </footer>\n\n\t</div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pwa/pwa.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/pwa/pwa.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sw\">\n    <button *ngIf=\"Pwa.promptEvent\" class=\"install-button\" mdbBtn type=\"button\" gradient=\"purple\" rounded=\"true\" mdbWavesEffect\n        (click)=\"installPwa()\">{{\"Install_App\" | translate}}</button>\n    \n    <button *ngIf=\"showUpdateButton\" class=\"update-button\" mdbBtn type=\"button\" gradient=\"purple\" rounded=\"true\" mdbWavesEffect\n        (click)=\"updateSoftware()\">{{\"Update_App\" | translate}}</button>\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">×</span>\n    </button>\n    <h4 class=\"modal-title w-100\" id=\"myModalLabel\">{{ heading }}</h4>\n  </div>\n  <div class=\"modal-body\">\n    <form #userForm=\"ngForm\">\n\n      <div class=\"d-flex align-items-center\">\n      <div class=\"md-form w-100\">\n          <input type=\"text\" id=\"add_user_username\" name=\"username\" class=\"form-control\" [(ngModel)]=\"user.username\" mdbInput mdbValidate [validateSuccess]=\"false\" #username=\"ngModel\" required>\n          <label for=\"username\">{{\"LOGIN.USERNAME\" | translate}}</label>\n          <mdb-error *ngIf=\"username && username.invalid && (username.dirty || username.touched)\">{{\"LOGIN.USERNAME\" | translate}} {{\"is_required\" | translate}}</mdb-error>\n        </div>\n        <span *ngIf=\"user.temple_code\">@{{ user.temple_code }}</span>\n      </div>\n\n      <div class=\"md-form\">\n        <input type=\"password\" id=\"add_user_password\" name=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" mdbInput mdbValidate [validateSuccess]=\"false\" #password=\"ngModel\" required>\n        <label for=\"password\">{{\"LOGIN.PASSWORD\" | translate}}</label>\n        <mdb-error *ngIf=\"password && password.invalid && (password.dirty || password.touched)\">{{\"LOGIN.PASSWORD\" | translate}} {{\"is_required\" | translate}}</mdb-error>\n      </div>\n\n      <div class=\"md-form\">\n        <input type=\"email\" id=\"add_user_email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\" name=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" mdbInput mdbValidate [validateSuccess]=\"false\" #email=\"ngModel\" required>\n        <label for=\"email\">{{\"LOGIN.Email\" | translate}}</label>\n        <mdb-error *ngIf=\"email && email.invalid && (email.dirty || email.touched)\">{{\"LOGIN.Email\" | translate}} {{\"is_required\" | translate}}</mdb-error>\n      </div>\n\n      <!-- <div class=\"md-form\">\n        <input type=\"text\" id=\"add_user_temple\" name=\"temple\" class=\"form-control\" [(ngModel)]=\"user.temple\" mdbInput mdbValidate [validateSuccess]=\"false\" #temple=\"ngModel\" required>\n        <label for=\"temple\">Temple</label>\n        <mdb-error *ngIf=\"temple && temple.invalid && (temple.dirty || temple.touched)\">Temple {{\"is_required\" | translate}}</mdb-error>\n      </div> -->\n\n      <label for=\"role\" *ngIf=\"templeList.length > 1\">{{\"LOGIN.Temple\" | translate}}</label>\n      <div class=\"md-form mt-0\" *ngIf=\"templeList.length > 1\">\n        <select class=\"browser-default custom-select form-control pl-1\" type=\"select\" id=\"add_user_temple\" name=\"temple\" [(ngModel)]=\"user.temple_code\" mdbSelect mdbValidate [validateSuccess]=\"false\" #temple=\"ngModel\" required>\n          <option value=\"\" disabled selected hidden>Select user temple</option>\n          <option [value]=\"temple.temple_code\" *ngFor=\"let temple of templeList\">{{ temple.temple_name }}</option>\n        </select>\n        <mdb-error *ngIf=\"temple && temple.invalid && (temple.dirty || temple.touched)\">temple {{\"is_required\" | translate}}</mdb-error>\n    </div>\n\n      <label for=\"role\">{{\"LOGIN.Role\" | translate}}</label>\n      <div class=\"md-form mt-0\">\n        <select class=\"browser-default custom-select form-control pl-1\" type=\"select\" id=\"add_user_role\" name=\"role\" [(ngModel)]=\"user.role\" mdbSelect mdbValidate [validateSuccess]=\"false\" #role=\"ngModel\" required>\n          <option value=\"\" disabled selected hidden>Select user role</option>\n          <option value=\"admin\" *ngIf=\"isAdmin\">admin</option>\n          <option value=\"manager\">manager</option>\n          <option value=\"user\">user</option>\n        </select>\n        <mdb-error *ngIf=\"role && role.invalid && (role.dirty || role.touched)\">role {{\"is_required\" | translate}}</mdb-error>\n    </div>\n\n\n\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" mdbBtn color=\"white\" class=\"black-text waves-light\" aria-label=\"Close\" (click)=\"modalRef.hide()\"\n      mdbWavesEffect>{{\"Close\" | translate}}</button>\n    <button type=\"button\" mdbBtn color=\"success\" [disabled]=\"userForm.invalid\" class=\"relative waves-light\" mdbWavesEffect (click)=\"onSave()\">{{\"Save\" | translate}}</button>\n  </div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex-column\">\n\n<div class=\"float-right\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n  <blockquote class=\"text-left blockquote bq-success col-md-6 col-sm-12\">\n  </blockquote>\n  <div class=\"btn-group mt-4 d-flex float-right\" role=\"group\" aria-label=\"First group\">\n    <span>View: </span> \n    <button mdbBtn type=\"button\" (click)=\"cardView = false\" [color]=\"!cardView ? 'primary' : 'white'\"\n      class=\"waves-light col-4 col-md-4 col-lg-3 col-xl-2 ml-2\" size=\"sm\" mdbWavesEffect>\n      <mdb-icon fas icon=\"th-list\" [class.black-text]=\"cardView\" [class.white-text]=\"!cardView\"></mdb-icon>\n    </button>\n    <button mdbBtn type=\"button\" (click)=\"cardView = true\" [color]=\"cardView ? 'primary' : 'white'\"\n      class=\"waves-light col-4 col-md-4 col-lg-3 col-xl-2\" size=\"sm\" mdbWavesEffect>\n      <mdb-icon fas icon=\"th-large\" [class.black-text]=\"!cardView\" [class.white-text]=\"cardView\"></mdb-icon>\n    </button>\n  </div>\n</div>\n<div class=\"users-list flex-wrap w-100\">\n  \n  <ng-container *ngIf=\"cardView\">\n    <div class=\"user\" *ngFor=\"let user of users; trackBy: trackByFn\">\n      <app-user [user]=\"user\" (userSelected)=\"onUserSelected($event)\" (removeUser)=\"onDeleteUser($event)\"></app-user>\n    </div>\n    <div class=\"user\">\n      <mdb-card class=\"flex-wrap py-2 add-card h-100\" (click)=\"onAddUser($event)\">\n        <mdb-card-body class=\"text-center my-4 py-4 d-flex flex-column align-items-center justify-content-center\">\n          <div class=\"my-4\">\n            <mdb-icon fas icon=\"plus\" class=\"float-right mt-1 add fa-lg grey-text\" alt=\"Add user\"></mdb-icon>\n          </div>\n          <p class=\"grey-text\">Add User</p>\n        </mdb-card-body>\n      </mdb-card>\n    </div>\n  </ng-container>\n\n  <mdb-card class=\"my-4\" *ngIf=\"!cardView\">\n    <mdb-card-header class=\"text-center bg-primary white-text\">\n      Users List\n      <button color=\"white\" mdbBtn type=\"button\" (click)=\"onAddUser($event)\" \n      class=\"waves-light float-right\" size=\"sm\" mdbWavesEffect>\n        <mdb-icon fas icon=\"plus\"></mdb-icon>\n        Add User\n      </button>\n    </mdb-card-header>\n  <mdb-card-body class=\"overflow-auto text-center align-items-center justify-content-center p-0\">\n  <table mdbTable striped=\"true\">\n    <thead>\n      <tr>\n        <th>User Name</th>\n        <th>Role</th>\n        <th>Temple Code</th>\n        <th>Email</th>\n        <th>Delete</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let user of users; let i = index;\">\n        \n          <td scope=\"row\">\n            <div class=\"d-flex-start\">\n              <img *ngIf=\"user.avatar\" src=\"{{ user.avatar }}\" height=\"30\" width=\"30\" class=\"rounded-circle z-depth-0\" alt=\"avatar image\">\n              {{user.username}}\n            </div>\n          </td>\n          <td>\n            <mdb-badge *ngIf=\"user.role\" [color]=\"getColor(user.role)\">{{ user.role }}</mdb-badge>\n          </td>\n          <td>{{ user.temple }}</td>\n          <td>{{ user.email }}</td>\n          <td>\n            <mdb-icon *ngIf=\"loggedInUser.username !== user.username && user.role !== 'admin'\" fas icon=\"trash\" class=\"delete grey-text\" (click)=\"onDeleteUser(user)\" alt=\"Delete user\"></mdb-icon>\n          </td>\n      </tr>\n    </tbody>\n  </table>\n  </mdb-card-body>\n  </mdb-card>\n\n \n  \n</div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".temples-list {\n  box-sizing: border-box;\n  justify-content: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.temples-list mdb-card {\n  min-width: 50%;\n}\n.temples-list mdb-card mdb-card-body {\n  overflow: auto;\n}\n.temple {\n  width: 80%;\n  margin: 1rem;\n}\n.temple .add-card:hover {\n  background-color: whitesmoke;\n  cursor: pointer;\n}\n.add {\n  height: 40px;\n}\ninput[type=file] {\n  display: none;\n}\n.thumbnail {\n  height: 45px;\n}\n.ellipsis {\n  max-width: 100px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0F1ZGl0LVVJLUFuZ3VsYXIvc3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3RlbXBsZS1saXN0L3RlbXBsZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3RlbXBsZS1saXN0L3RlbXBsZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7QUNDSjtBREFJO0VBQ0UsY0FBQTtBQ0VOO0FER0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0FGO0FER0k7RUFDRSw0QkFBQTtFQUNBLGVBQUE7QUNETjtBRE1BO0VBQ0UsWUFBQTtBQ0hGO0FETUE7RUFDRSxhQUFBO0FDSEY7QURNQTtFQUNFLFlBQUE7QUNIRjtBRE1BO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3RlbXBsZS1saXN0L3RlbXBsZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlbXBsZXMtbGlzdCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICBtZGItY2FyZCB7XG4gICAgbWluLXdpZHRoOiA1MCU7XG4gICAgbWRiLWNhcmQtYm9keSB7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG4gIH1cbn1cblxuLnRlbXBsZSB7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogMXJlbTtcblxuICAuYWRkLWNhcmQge1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLmFkZCB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW5wdXRbdHlwZT1maWxlXXtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRodW1ibmFpbCB7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLmVsbGlwc2lzIHtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrOztcbn0iLCIudGVtcGxlcy1saXN0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnRlbXBsZXMtbGlzdCBtZGItY2FyZCB7XG4gIG1pbi13aWR0aDogNTAlO1xufVxuLnRlbXBsZXMtbGlzdCBtZGItY2FyZCBtZGItY2FyZC1ib2R5IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50ZW1wbGUge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDFyZW07XG59XG4udGVtcGxlIC5hZGQtY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZCB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50aHVtYm5haWwge1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi5lbGxpcHNpcyB7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */");

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






var TempleListComponent = /** @class */ (function () {
    function TempleListComponent(store, cdr) {
        this.store = store;
        this.cdr = cdr;
        this.temples = [];
        this.newTemple = {};
        this.loadingAddTemple = false;
        this.isAdmin = false;
        this.selectedLogo = '';
        this.selectedIcon = '';
        this.base64Logo = '';
        this.base64Icon = '';
        this.editMode = false;
        this.editingIndex = -1;
        this.editCache = {};
        this.editedLogo = '';
        this.editedIcon = '';
        this.editedBase64Logo = '';
        this.editedBase64Icon = '';
        this.maxLogoSize = 250000;
        this.maxIconSize = 100000;
        //  this.initFormGroup();
    }
    TempleListComponent.prototype.initFormGroup = function () {
        if (this.templeForm) {
            this.templeForm.reset();
            this.selectedIcon = '';
            this.selectedLogo = '';
            this.base64Icon = '';
            this.base64Logo = '';
        }
        if (this.editForm) {
            this.editForm.reset();
            this.editedIcon = '';
            this.editedLogo = '';
            this.editedBase64Logo = '';
            this.editedBase64Icon = '';
        }
        this.editMode = false;
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
        var temple = __assign({}, this.templeForm.value, { logo: this.base64Logo, icon: this.base64Icon, misc: { manthram: this.templeForm.value.misc } });
        this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_4__["AddTemple"]({ temple: temple }));
        this.initFormGroup();
    };
    TempleListComponent.prototype.logoChanged = function (event) {
        var _this = this;
        if (event.target.files[0].size > this.maxLogoSize) {
            alert('file size too big. Limit is 250Kb');
            return;
        }
        this.selectedLogo = event.target.files[0].name;
        var FR = new FileReader();
        FR.addEventListener("load", function (e) {
            _this.base64Logo = e.target.result;
            _this.cdr.detectChanges();
        });
        FR.readAsDataURL(event.target.files[0]);
    };
    TempleListComponent.prototype.iconChanged = function (event) {
        var _this = this;
        if (event.target.files[0].size > this.maxIconSize) {
            alert('file size too big. Limit is 100Kb');
            return;
        }
        this.selectedIcon = event.target.files[0].name;
        var FR = new FileReader();
        FR.addEventListener("load", function (e) {
            _this.base64Icon = e.target.result;
            _this.cdr.detectChanges();
        });
        FR.readAsDataURL(event.target.files[0]);
    };
    TempleListComponent.prototype.logoEdited = function (event) {
        var _this = this;
        if (event.target.files[0].size > this.maxLogoSize) {
            alert('file size too big. Limit is 250Kb');
            return;
        }
        this.editedLogo = event.target.files[0].name;
        var FR = new FileReader();
        FR.addEventListener("load", function (e) {
            _this.editedBase64Logo = e.target.result;
            _this.cdr.detectChanges();
        });
        FR.readAsDataURL(event.target.files[0]);
    };
    TempleListComponent.prototype.iconEdited = function (event) {
        var _this = this;
        if (event.target.files[0].size > this.maxIconSize) {
            alert('file size too big. Limit is 100Kb');
            return;
        }
        this.editedIcon = event.target.files[0].name;
        var FR = new FileReader();
        FR.addEventListener("load", function (e) {
            _this.editedBase64Icon = e.target.result;
            _this.cdr.detectChanges();
        });
        FR.readAsDataURL(event.target.files[0]);
    };
    TempleListComponent.prototype.onSaveEdit = function () {
        var editingTemple = __assign({}, this.editCache, { logo: this.editedBase64Logo || this.editCache.logo, icon: this.editedBase64Icon || this.editCache.logo });
        this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_4__["AddTemple"]({ temple: editingTemple }));
        this.initFormGroup();
        this.editingIndex = -1;
    };
    TempleListComponent.prototype.onCancelEdit = function () {
        this.editCache = {};
        this.editingIndex = -1;
        this.initFormGroup();
    };
    TempleListComponent.prototype.edit = function (i) {
        var _this = this;
        this.editCache = JSON.parse(JSON.stringify(this.temples[i]));
        this.editedBase64Icon = this.editCache.icon;
        this.editedBase64Logo = this.editCache.logo;
        this.editMode = true;
        this.editingIndex = i;
        setTimeout(function () {
            _this.editForm.control.markAsTouched();
            _this.editForm.control.markAsDirty();
            _this.cdr.detectChanges();
        }, 0);
    };
    TempleListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('templeForm', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], TempleListComponent.prototype, "templeForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editForm', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], TempleListComponent.prototype, "editForm", void 0);
    TempleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-temple-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./temple-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/components/temple-list/temple-list.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__importDefault(__webpack_require__(/*! ./temple-list.component.scss */ "./src/app/admin/components/temple-list/temple-list.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
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
/* harmony default export */ __webpack_exports__["default"] = (".back-button {\n  cursor: pointer;\n  font-size: 1.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0F1ZGl0LVVJLUFuZ3VsYXIvc3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuOHJlbTtcbn0iLCIuYmFjay1idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("@media (min-width: 600px) {\n  .paper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0F1ZGl0LVVJLUFuZ3VsYXIvc3JjL2FwcC9hZG1pbi9jb250YWluZXJzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9jb250YWluZXJzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0k7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb250YWluZXJzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAucGFwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuIiwiQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5wYXBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn0iXX0= */");

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
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "?api=addTemple", __assign({}, temple
        // params: {
        // }
        ));
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
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






var AppComponent = /** @class */ (function () {
    function AppComponent(store, translate) {
        this.store = store;
        this.title = 'app';
        translate.addLangs(['en', 'ml']);
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.onLangChange.subscribe(function () {
            if (localStorage.getItem('language')) {
                translate.use(localStorage.getItem('language') + '');
            }
            else {
                translate.use('en');
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]).subscribe(function (user) {
            console.log({ user: user });
        });
        this.user$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]);
        this.isLoggedIn$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoggedIn"]);
        this.isAdmin$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsAdmin"]);
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.isLoading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoading"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(0));
    };
    AppComponent.prototype.onLogout = function (user) {
        console.log('user****************', user);
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LogoutRequested"]({ user: user }));
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
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









function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__["TranslateHttpLoader"](http, './assets/i18n/');
    // return new TranslateHttpLoader(http, `./${environment.baseHref}/`);
}
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
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]],
                    }
                }),
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
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
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_auth_effects__WEBPACK_IMPORTED_MODULE_5__["AuthEffects"]]),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"]
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
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
    function LoginComponent(store, translate) {
        this.store = store;
        this.translate = translate;
        this.selectedLanguage = 'en';
    }
    LoginComponent.prototype.ngOnInit = function () {
        var cachedUsername = localStorage.getItem('username');
        var cachedPassword = localStorage.getItem('password');
        if (localStorage.getItem('language')) {
            this.selectedLanguage = localStorage.getItem('language') + '';
            this.setLanguage(this.selectedLanguage);
        }
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
    LoginComponent.prototype.setLanguage = function (language) {
        this.selectedLanguage = language;
        localStorage.setItem('language', language);
        this.translate.use(language);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/components/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/components/login/login.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]])
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
        email: 'test@gmail.com',
        misc: ''
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
            var user = __assign({}, res, { displayName: payload.username, photoUrl: _models_user_model__WEBPACK_IMPORTED_MODULE_7__["mockUser"].user.photoUrl, isAdmin: res.role === 'admin', username: payload.username, password: payload.password });
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _directives_to_fixed_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../directives/to-fixed.directive */ "./src/app/directives/to-fixed.directive.ts");
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
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["ButtonsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateModule"]
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
                _directives_date_transform_directive__WEBPACK_IMPORTED_MODULE_13__["DateTransformDirective"],
                _directives_to_fixed_directive__WEBPACK_IMPORTED_MODULE_15__["ToFixedDirective"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _split_body_split_body_component__WEBPACK_IMPORTED_MODULE_11__["SplitBodyComponent"],
                _directives_date_picker_directive__WEBPACK_IMPORTED_MODULE_12__["DatePickerDirective"],
                _directives_date_transform_directive__WEBPACK_IMPORTED_MODULE_13__["DateTransformDirective"],
                _directives_to_fixed_directive__WEBPACK_IMPORTED_MODULE_15__["ToFixedDirective"]
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
/* harmony default export */ __webpack_exports__["default"] = (".nav-item a {\n  color: white;\n  padding-right: 50px;\n  padding-left: 50px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.navbar-nav {\n  align-items: center;\n}\n\n.nav-link.active {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n}\n\n.logout-button {\n  display: none;\n}\n\n.avatar-dropdown {\n  display: block;\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) {\n  .nav-item a {\n    padding-right: 20px;\n    padding-left: 20px;\n  }\n}\n\n@media (max-width: 992px) {\n  .avatar-dropdown {\n    display: none;\n  }\n\n  .logout-button {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0F1ZGl0LVVJLUFuZ3VsYXIvc3JjL2FwcC9jb3JlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FEUUE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxhQUFBO0FDTEY7O0FEUUE7RUFDRSxjQUFBO0FDTEY7O0FEU0E7RUFDRTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7RUNORjtBQUNGOztBRFNBO0VBQ0U7SUFDRSxhQUFBO0VDUEY7O0VEVUE7SUFDRSxjQUFBO0VDUEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtaXRlbSBhIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ubmF2YmFyLW5hdiB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLm5hdmJhci1icmFuZCBpbWcge1xuICAvLyBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubmF2LWxpbmsuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5sb2dvdXQtYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmF2YXRhci1kcm9wZG93biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLm5hdi1pdGVtIGEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuYXZhdGFyLWRyb3Bkb3duIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmxvZ291dC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59IiwiLm5hdi1pdGVtIGEge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5uYXZiYXItbmF2IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ubG9nb3V0LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hdmF0YXItZHJvcGRvd24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAubmF2LWl0ZW0gYSB7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuYXZhdGFyLWRyb3Bkb3duIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmxvZ291dC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".document-body {\n  padding-top: 67px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0F1ZGl0LVVJLUFuZ3VsYXIvc3JjL2FwcC9jb3JlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jdW1lbnQtYm9keSB7XG4gICAgcGFkZGluZy10b3A6IDY3cHg7XG59IiwiLmRvY3VtZW50LWJvZHkge1xuICBwYWRkaW5nLXRvcDogNjdweDtcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".pages a {\n  height: 20vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: large;\n}\n@media only screen and (max-width: 600px) {\n  .pages a {\n    height: 140px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0F1ZGl0LVVJLUFuZ3VsYXIvc3JjL2FwcC9jb3JlL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0FSO0FER0k7RUFDSTtJQUNJLGFBQUE7RUNEVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZXMge1xuICAgIGEge1xuICAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICB9XG4gICAgfVxufSIsIi5wYWdlcyBhIHtcbiAgaGVpZ2h0OiAyMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnBhZ2VzIGEge1xuICAgIGhlaWdodDogMTQwcHg7XG4gIH1cbn0iXX0= */");

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
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
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('enterAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(100%)', opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('{{time}}ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(0)', opacity: 1 })),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(0)', opacity: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('100ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(100%)', opacity: 0 })),
                    ]),
                ]),
            ],
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
/* harmony default export */ __webpack_exports__["default"] = (".row {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 55%;\n  transform: translate(-50%, -50%);\n}\n\n.full {\n  min-height: 40rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0F1ZGl0LVVJLUFuZ3VsYXIvc3JjL2FwcC9jb3JlL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3JlL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSxnQ0FBQTtBQ0NKOztBREdFO0VBQ0UsaUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDU1JTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgXG4gIFxuICAuZnVsbCB7XG4gICAgbWluLWhlaWdodDogNDByZW07XG4gIH0iLCIucm93IHtcbiAgbWFyZ2luOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1NSU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5mdWxsIHtcbiAgbWluLWhlaWdodDogNDByZW07XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".split-body {\n  padding-top: 10px;\n}\n@media only screen and (max-width: 768px) {\n  .split-body .right-section {\n    margin-top: 20px;\n    padding: 20px 5px;\n    border-top: 5px solid lightslategray;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0F1ZGl0LVVJLUFuZ3VsYXIvc3JjL2FwcC9jb3JlL3NwbGl0LWJvZHkvc3BsaXQtYm9keS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9zcGxpdC1ib2R5L3NwbGl0LWJvZHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSxpQkFBQTtBQ0RKO0FEU0k7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQ0FBQTtFQ1BOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3NwbGl0LWJvZHkvc3BsaXQtYm9keS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnNwbGl0LWJvZHkge1xuICAgIC8vIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAgIC8vIC5sZWZ0LXNlY3Rpb24sIC5yaWdodC1zZWN0aW9uIHtcbiAgICAvLyAgIGhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpO1xuICAgIC8vICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAvLyB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAucmlnaHQtc2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggNXB4O1xuICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgbGlnaHRzbGF0ZWdyYXk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICIsIi5zcGxpdC1ib2R5IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zcGxpdC1ib2R5IC5yaWdodC1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHggNXB4O1xuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCBsaWdodHNsYXRlZ3JheTtcbiAgfVxufSJdfQ== */");

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

/***/ "./src/app/directives/to-fixed.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/directives/to-fixed.directive.ts ***!
  \**************************************************/
/*! exports provided: ToFixedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToFixedDirective", function() { return ToFixedDirective; });
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

var ToFixedDirective = /** @class */ (function () {
    function ToFixedDirective(elementRef) {
        this.elementRef = elementRef;
    }
    ToFixedDirective.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.innerHTML = "\u20B9 " + (+(this.elementRef.nativeElement.innerHTML.replace('₹', ''))).toFixed(2);
        this.elementRef.nativeElement.style.whiteSpace = 'nowrap';
    };
    ToFixedDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    ToFixedDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appToFixed]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ToFixedDirective);
    return ToFixedDirective;
}());



/***/ }),

/***/ "./src/app/donations/models/donations.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/donations/models/donations.model.ts ***!
  \*****************************************************/
/*! exports provided: PaymentType, PAYMENT_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentType", function() { return PaymentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_OPTIONS", function() { return PAYMENT_OPTIONS; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PaymentType;
(function (PaymentType) {
    PaymentType["Cash"] = "Cash";
    PaymentType["UPI"] = "UPI";
    PaymentType["NetBanking"] = "NetBanking";
})(PaymentType || (PaymentType = {}));
var PAYMENT_OPTIONS = [
    { id: PaymentType.Cash, label: 'Cash', checked: true },
    { id: PaymentType.UPI, label: 'UPI', checked: false },
    { id: PaymentType.NetBanking, label: 'Net Banking', checked: false }
];


/***/ }),

/***/ "./src/app/expenses/containers/edit-expense/edit-expense.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/expenses/containers/edit-expense/edit-expense.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".justify-space-between {\n  justify-content: space-between;\n}\n\n.price {\n  font-size: 24px;\n}\n\n.table-price {\n  font-weight: bold;\n}\n\n.right-section table {\n  text-align: left;\n  margin-bottom: 0;\n}\n\n.right-section table .total-amount {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.right-section table .delete {\n  cursor: pointer;\n}\n\n.right-section table tr.salary {\n  background-color: #d8fdd8;\n}\n\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.card-body {\n  padding: 0 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0F1ZGl0LVVJLUFuZ3VsYXIvc3JjL2FwcC9leHBlbnNlcy9jb250YWluZXJzL2VkaXQtZXhwZW5zZS9lZGl0LWV4cGVuc2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4cGVuc2VzL2NvbnRhaW5lcnMvZWRpdC1leHBlbnNlL2VkaXQtZXhwZW5zZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRElJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0RSOztBREdRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDRFo7O0FER1E7RUFDSSxlQUFBO0FDRFo7O0FER1E7RUFDSSx5QkFBQTtBQ0RaOztBRE9BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNKSjs7QURPQTtFQUNJLGtCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9leHBlbnNlcy9jb250YWluZXJzL2VkaXQtZXhwZW5zZS9lZGl0LWV4cGVuc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuanVzdGlmeS1zcGFjZS1iZXR3ZWVuIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcmljZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4udGFibGUtcHJpY2Uge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmlnaHQtc2VjdGlvbiB7XG4gXG4gICAgdGFibGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgICAgIC50b3RhbC1hbW91bnQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRlbGV0ZSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgdHIuc2FsYXJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDI1MywgMjE2KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4uY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4gICBcbi5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmc6IDAgMS4yNXJlbTtcbn0iLCIuanVzdGlmeS1zcGFjZS1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJpY2Uge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi50YWJsZS1wcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucmlnaHQtc2VjdGlvbiB0YWJsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucmlnaHQtc2VjdGlvbiB0YWJsZSAudG90YWwtYW1vdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5yaWdodC1zZWN0aW9uIHRhYmxlIC5kZWxldGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmlnaHQtc2VjdGlvbiB0YWJsZSB0ci5zYWxhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhmZGQ4O1xufVxuXG4uY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAwIDEuMjVyZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/expenses/containers/edit-expense/edit-expense.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/expenses/containers/edit-expense/edit-expense.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditExpenseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditExpenseComponent", function() { return EditExpenseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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




var EditExpenseComponent = /** @class */ (function () {
    function EditExpenseComponent(modalRef) {
        this.modalRef = modalRef;
        this.editedExpense = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.editedValue = {};
    }
    EditExpenseComponent.prototype.ngAfterViewInit = function () {
        this.editedValue = Object.assign({}, this.expense);
    };
    EditExpenseComponent.prototype.onSave = function () {
        var edited = __assign({}, this.expense, this.editedValue, { ist_YYYYMMDD: this.expense.expense_date });
        delete (edited.expense_date);
        this.editedExpense.next(edited);
        this.modalRef.hide();
    };
    EditExpenseComponent.ctorParameters = function () { return [
        { type: angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBModalRef"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expenseForm', { static: true }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], EditExpenseComponent.prototype, "expenseForm", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditExpenseComponent.prototype, "expense", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditExpenseComponent.prototype, "heading", void 0);
    EditExpenseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-expense',
            template: __importDefault(__webpack_require__(/*! raw-loader!./edit-expense.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/expenses/containers/edit-expense/edit-expense.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./edit-expense.component.scss */ "./src/app/expenses/containers/edit-expense/edit-expense.component.scss")).default]
        }),
        __metadata("design:paramtypes", [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBModalRef"]])
    ], EditExpenseComponent);
    return EditExpenseComponent;
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
            console.log(transaction);
        },
        2: function (db, transaction) {
            console.log(db);
            var store1 = transaction.objectStore('expenses');
            if (!store1.indexNames.contains('item')) {
                store1.createIndex('item', 'item', { unique: true });
            }
            // store1.createIndex('frequency', 'frequency', { unique: false });
            var store2 = transaction.objectStore('salary');
            if (!store2.indexNames.contains('person')) {
                store2.createIndex('person', 'person', { unique: true });
            }
            var store3 = transaction.objectStore('donations');
            if (!store3.indexNames.contains('donationItem')) {
                store3.createIndex('donationItem', 'donationItem', { unique: true });
            }
            // store2.createIndex('amount', 'amount', { unique: false });
            // store2.createIndex('frequency', 'frequency', { unique: false });
        },
        3: function (db, transaction) {
            console.log(db);
            var store4 = transaction.objectStore('poojaType');
            if (!store4.indexNames.contains('pooja_code')) {
                store4.createIndex('pooja_code', 'pooja_code', { unique: true });
            }
        }
    };
}
var dbConfig = {
    name: 'RRDB',
    version: 3,
    objectStoresMeta: [{
            store: 'expenses',
            storeConfig: { keyPath: 'item', autoIncrement: false },
            storeSchema: [
                { name: 'item', keypath: 'item', options: { unique: true } },
                { name: 'frequency', keypath: 'frequency', options: { unique: false } }
            ]
        },
        {
            store: 'donations',
            storeConfig: { keyPath: 'donationItem', autoIncrement: false },
            storeSchema: [
                { name: 'donationItem', keypath: 'donationItem', options: { unique: true } },
                { name: 'frequency', keypath: 'frequency', options: { unique: false } }
            ]
        },
        {
            store: 'salary',
            storeConfig: { keyPath: 'person', autoIncrement: false },
            storeSchema: [
                { name: 'person', keypath: 'person', options: { unique: true } },
                { name: 'amount', keypath: 'amount', options: { unique: false } },
                { name: 'frequency', keypath: 'frequency', options: { unique: false } }
            ]
        }, {
            store: 'poojaType',
            storeConfig: { keyPath: 'pooja_code', autoIncrement: false },
            storeSchema: [
                { name: 'pooja_code', keypath: 'pooja_code', options: { unique: true } },
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
        if (this.user && !req.url.includes('login') && !req.url.includes('i18n')) {
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
        this.$printClicked = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
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
    PoojasService.prototype.deletePooja = function (pooja) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "?api=deletePooja", {
            params: {
                "uuid": pooja.uuid,
                "phone_number": pooja.phone_number
            }
        });
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
/* harmony default export */ __webpack_exports__["default"] = (".modal-content {\n  max-height: 90vh;\n}\n\n.star-container .hidden {\n  display: none;\n}\n\n.star-container .btn-group {\n  display: inline-block;\n}\n\n.star-container .btn-group button {\n  padding: 10px;\n  font-weight: bold;\n  color: black;\n}\n\n.star-container .btn-group button.selected {\n  background-color: forestgreen !important;\n  border: 1px solid forestgreen !important;\n  color: white;\n  font-weight: 900;\n  font-size: 19px;\n  padding: 10px;\n}\n\n#address {\n  min-height: 40px;\n}\n\n.modal-title {\n  text-transform: uppercase;\n}\n\n.modal-body {\n  overflow: auto;\n  display: flex;\n  max-height: 65vh;\n}\n\n.modal-body .left-section {\n  width: 50%;\n}\n\n.modal-body .right-section {\n  width: 50%;\n  padding: 10px 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .modal-body {\n    flex-direction: column;\n  }\n  .modal-body .left-section {\n    width: 100%;\n  }\n  .modal-body .right-section {\n    width: 100%;\n  }\n}\n\n@media only screen and (max-height: 500px) {\n  .modal-body {\n    max-height: 45vh !important;\n  }\n}\n\n@media only screen and (max-width: 700px) {\n  .hide-sm {\n    display: none;\n  }\n}\n\n.modal-footer {\n  justify-content: space-between;\n}\n\n.phone {\n  margin: 0;\n}\n\n.delete {\n  cursor: pointer;\n}\n\n.datepicker {\n  display: flex;\n  justify-content: space-between;\n}\n\n.datepicker button {\n  font-size: large;\n}\n\n.bhakthar-table {\n  text-align: left;\n}\n\n.payment-type-radio {\n  display: block;\n  width: 100%;\n}\n\n.payment-type-radio > div {\n  display: flex;\n  align-items: center;\n  padding: 12px 0;\n  border-bottom: 1px solid #e9ecef;\n  width: 70%;\n  position: relative;\n}\n\n.payment-type-radio > div:last-child {\n  border-bottom: none;\n}\n\n.payment-type-radio .form-check-input {\n  width: 20px;\n  height: 20px;\n  min-width: 20px;\n  min-height: 20px;\n  margin: 0;\n  margin-right: 12px;\n  cursor: pointer;\n  position: relative;\n  top: 0;\n  flex-shrink: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border: 2px solid #dee2e6;\n  border-radius: 50%;\n  background-color: #fff;\n  transition: all 0.15s ease-in-out;\n  box-sizing: border-box;\n  display: inline-block;\n}\n\n.payment-type-radio .form-check-input:checked {\n  background-color: #28a745;\n  border-color: #28a745;\n  position: relative;\n}\n\n.payment-type-radio .form-check-input:checked::after {\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.payment-type-radio .form-check-input:checked + .form-check-label {\n  color: #28a745;\n  font-weight: 600;\n}\n\n.payment-type-radio .form-check-input:hover {\n  border-color: #28a745;\n}\n\n.payment-type-radio .form-check-input:focus {\n  outline: none;\n  box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.25);\n}\n\n.payment-type-radio .form-check-label {\n  cursor: pointer;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #495057;\n  margin: 0;\n  padding: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: color 0.15s ease-in-out;\n}\n\n.payment-type-radio .form-check-label:hover {\n  color: #28a745;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .payment-type-radio .form-check-input {\n    -webkit-appearance: none;\n    margin-right: 12px;\n  }\n}\n\n@media (max-width: 768px) {\n  .payment-type-radio > div {\n    width: 100%;\n    padding: 15px 0;\n  }\n  .payment-type-radio .form-check-input {\n    width: 20px;\n    height: 20px;\n    margin-right: 15px;\n  }\n  .payment-type-radio .form-check-label {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0F1ZGl0LVVJLUFuZ3VsYXIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wb29qYXMtbW9kYWwvcG9vamFzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wb29qYXMtbW9kYWwvcG9vamFzLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURHSTtFQUNJLGFBQUE7QUNBUjs7QURFSTtFQUNJLHFCQUFBO0FDQVI7O0FEQ1E7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ1o7O0FERVE7RUFDSSx3Q0FBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNBWjs7QURLQTtFQUNJLGdCQUFBO0FDRko7O0FES0E7RUFDSSx5QkFBQTtBQ0ZKOztBREtBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBRElJO0VBQ0ksVUFBQTtBQ0ZSOztBRElJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDRlI7O0FES0k7RUFiSjtJQWNRLHNCQUFBO0VDRk47RURHTTtJQUNJLFdBQUE7RUNEVjtFREdNO0lBQ0ksV0FBQTtFQ0RWO0FBQ0Y7O0FETUE7RUFDSTtJQUNJLDJCQUFBO0VDSE47QUFDRjs7QURLQTtFQUNJO0lBQ0ksYUFBQTtFQ0hOO0FBQ0Y7O0FETUE7RUFDSSw4QkFBQTtBQ0pKOztBRE9BO0VBQ0ksU0FBQTtBQ0pKOztBRE9BO0VBQ0ksZUFBQTtBQ0pKOztBRE1BO0VBR0ksYUFBQTtFQUNBLDhCQUFBO0FDTEo7O0FETUk7RUFDSSxnQkFBQTtBQ0pSOztBRFFBO0VBQ0ksZ0JBQUE7QUNMSjs7QURTQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDTkY7O0FEUUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURRSTtFQUNFLG1CQUFBO0FDTk47O0FEVUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0FDUko7O0FEVUk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNSTjs7QURVTTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUNSUjs7QURXTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ1RSOztBRGFJO0VBQ0UscUJBQUE7QUNYTjs7QURjSTtFQUNFLGFBQUE7RUFDQSw2Q0FBQTtBQ1pOOztBRGdCRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLG1DQUFBO0FDZEo7O0FEZ0JJO0VBQ0UsY0FBQTtBQ2ROOztBRG9CQTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxrQkFBQTtFQ2pCRjtBQUNGOztBRHFCQTtFQUVJO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUNwQko7RUR1QkU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGtCQUFBO0VDckJKO0VEd0JFO0lBQ0UsZUFBQTtFQ3RCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcG9vamFzLW1vZGFsL3Bvb2phcy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xufVxuLnN0YXItY29udGFpbmVyIHtcblxuICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAuYnRuLWdyb3VwIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgYnV0dG9uLnNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGZvcmVzdGdyZWVuIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGZvcmVzdGdyZWVuIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4jYWRkcmVzcyB7XG4gICAgbWluLWhlaWdodDogNDBweDtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtaGVpZ2h0OiA2NXZoO1xuXG4gICAgLmxlZnQtc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuICAgIC5yaWdodC1zZWN0aW9uIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLmxlZnQtc2VjdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAucmlnaHQtc2VjdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgIH1cbiAgICB9XG5cblxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcbiAgICAubW9kYWwtYm9keSB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQ1dmggIWltcG9ydGFudDtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgLmhpZGUtc20ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLm1vZGFsLWZvb3RlciB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGhvbmUge1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmRlbGV0ZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRhdGVwaWNrZXIge1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyByaWdodDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBidXR0b24ge1xuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIH1cbn1cblxuLmJoYWt0aGFyLXRhYmxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5cbi5wYXltZW50LXR5cGUtcmFkaW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG5cbiAgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1pbi13aWR0aDogMjBweDtcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNkZWUyZTY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgJjpjaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gICAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgfVxuXG4gICAgICArIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICMyOGE3NDU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNDAsIDE2NywgNjksIDAuMjUpO1xuICAgIH1cbiAgfVxuXG4gIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMjhhNzQ1O1xuICAgIH1cbiAgfVxufVxuXG4vLyBTYWZhcmkgc3BlY2lmaWMgZml4ZXNcbkBtZWRpYSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDApIHtcbiAgLnBheW1lbnQtdHlwZS1yYWRpbyAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxufVxuXG4vLyBNb2JpbGUgcmVzcG9uc2l2ZW5lc3NcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGF5bWVudC10eXBlLXJhZGlvIHtcbiAgICA+IGRpdiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICB9XG4gICAgXG4gICAgLmZvcm0tY2hlY2staW5wdXQge1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIFxuICAgIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gIH1cbn0iLCIubW9kYWwtY29udGVudCB7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG59XG5cbi5zdGFyLWNvbnRhaW5lciAuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zdGFyLWNvbnRhaW5lciAuYnRuLWdyb3VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnN0YXItY29udGFpbmVyIC5idG4tZ3JvdXAgYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5zdGFyLWNvbnRhaW5lciAuYnRuLWdyb3VwIGJ1dHRvbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGZvcmVzdGdyZWVuICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGZvcmVzdGdyZWVuICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jYWRkcmVzcyB7XG4gIG1pbi1oZWlnaHQ6IDQwcHg7XG59XG5cbi5tb2RhbC10aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC1oZWlnaHQ6IDY1dmg7XG59XG4ubW9kYWwtYm9keSAubGVmdC1zZWN0aW9uIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5tb2RhbC1ib2R5IC5yaWdodC1zZWN0aW9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubW9kYWwtYm9keSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubW9kYWwtYm9keSAubGVmdC1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubW9kYWwtYm9keSAucmlnaHQtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNTAwcHgpIHtcbiAgLm1vZGFsLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IDQ1dmggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xuICAuaGlkZS1zbSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLm1vZGFsLWZvb3RlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnBob25lIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZGVsZXRlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGF0ZXBpY2tlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5kYXRlcGlja2VyIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG5cbi5iaGFrdGhhci10YWJsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5wYXltZW50LXR5cGUtcmFkaW8ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4ucGF5bWVudC10eXBlLXJhZGlvID4gZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTJweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgd2lkdGg6IDcwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBheW1lbnQtdHlwZS1yYWRpbyA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5wYXltZW50LXR5cGUtcmFkaW8gLmZvcm0tY2hlY2staW5wdXQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2UtaW4tb3V0O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ucGF5bWVudC10eXBlLXJhZGlvIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYXltZW50LXR5cGUtcmFkaW8gLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5wYXltZW50LXR5cGUtcmFkaW8gLmZvcm0tY2hlY2staW5wdXQ6Y2hlY2tlZCArIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucGF5bWVudC10eXBlLXJhZGlvIC5mb3JtLWNoZWNrLWlucHV0OmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjhhNzQ1O1xufVxuLnBheW1lbnQtdHlwZS1yYWRpbyAuZm9ybS1jaGVjay1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDQwLCAxNjcsIDY5LCAwLjI1KTtcbn1cbi5wYXltZW50LXR5cGUtcmFkaW8gLmZvcm0tY2hlY2stbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0O1xufVxuLnBheW1lbnQtdHlwZS1yYWRpbyAuZm9ybS1jaGVjay1sYWJlbDpob3ZlciB7XG4gIGNvbG9yOiAjMjhhNzQ1O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSB7XG4gIC5wYXltZW50LXR5cGUtcmFkaW8gLmZvcm0tY2hlY2staW5wdXQge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGF5bWVudC10eXBlLXJhZGlvID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNXB4IDA7XG4gIH1cbiAgLnBheW1lbnQtdHlwZS1yYWRpbyAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuICAucGF5bWVudC10eXBlLXJhZGlvIC5mb3JtLWNoZWNrLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn0iXX0= */");

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
/* harmony import */ var src_app_donations_models_donations_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/donations/models/donations.model */ "./src/app/donations/models/donations.model.ts");
/* harmony import */ var src_app_poojas_models_poojas_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/poojas/models/poojas.model */ "./src/app/poojas/models/poojas.model.ts");
/* harmony import */ var src_app_poojas_services_poojas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/poojas/services/poojas.service */ "./src/app/poojas/services/poojas.service.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils */ "./src/app/shared/utils.ts");
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
        this.endDate = moment().add('6', 'months');
        this.selectedDate = moment();
        this.pooja = {};
        this.poojasData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.starSigns = src_app_poojas_models_poojas_model__WEBPACK_IMPORTED_MODULE_5__["starSigns"];
        this.response = {
            pooja_code: '',
            phone_number: '',
            address: '',
            bhakthar: [],
            pooja_price: '0',
            ist_YYYYMMDD: this.selectedDate.format('YYYY-MM-DD')
        };
        this.peopleFetching = false;
        this.paymentTypes = JSON.parse(JSON.stringify(src_app_donations_models_donations_model__WEBPACK_IMPORTED_MODULE_4__["PAYMENT_OPTIONS"]));
        this.selectedPaymentType = this.paymentTypes[0].id;
    }
    PoojasModalComponent.prototype.updatePaymentTypeStates = function (currentValue) {
        this.paymentTypes = this.paymentTypes.map(function (type) { return (__assign({}, type, { checked: type.id === currentValue })); });
        this.selectedPaymentType = currentValue;
    };
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
    PoojasModalComponent.prototype.onSave = function (isPrint) {
        if (isPrint === void 0) { isPrint = false; }
        if (this.response.bhakthar.length > 0) {
            this.poojaService.$printClicked.next(isPrint);
            this.response.phone_number = this.response.phone_number || '';
            this.response.address = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["prefixAddressWithPaymentType"])(this.selectedPaymentType, this.response.address);
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
        this.response.pooja_price = "" + (Number(this.response.pooja_price) - Number(this.price));
        this.response.bhakthar.splice(this.response.bhakthar.indexOf(item), 1);
    };
    PoojasModalComponent.prototype.addPerson = function () {
        this.response.bhakthar.push(this.poojasForm.value);
        this.response.pooja_price = "" + (+(this.price) + +(this.response.pooja_price));
        this.poojasForm.reset();
    };
    PoojasModalComponent.prototype.fetchPeopleData = function (phoneNumber) {
        var _this = this;
        if (phoneNumber.length > 3) {
            this.peopleFetching = true;
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
        { type: src_app_poojas_services_poojas_service__WEBPACK_IMPORTED_MODULE_6__["PoojasService"] }
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
            src_app_poojas_services_poojas_service__WEBPACK_IMPORTED_MODULE_6__["PoojasService"]])
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
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  border: none;\n  outline: none;\n  background-color: transparent;\n}\n\n.content {\n  display: none;\n}\n\n@media print {\n  .content {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0F1ZGl0LVVJLUFuZ3VsYXIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcmludGVyL3ByaW50ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3ByaW50ZXIvcHJpbnRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7QUNBSjs7QURHQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcmludGVyL3ByaW50ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmJ1dHRvbiB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufVxuXG4iLCJidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufSJdfQ== */");

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
/* harmony import */ var src_app_donations_models_donations_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/donations/models/donations.model */ "./src/app/donations/models/donations.model.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./src/app/shared/utils.ts");
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
        this.text = '';
        this.reportPeriod = '';
        this.totalProfitLoss = '';
        this.hidden = false;
        this.size = 'bill';
        this.splitPoojas = [];
        this.splitPoojasGrouped = [];
        this.removePaymentTypePrefixFromAddress = _utils__WEBPACK_IMPORTED_MODULE_4__["removePaymentTypePrefix"];
        this.extractPaymentTypeFromAddress = _utils__WEBPACK_IMPORTED_MODULE_4__["extractPaymentTypeFromAddress"];
        this.triggerPrint = function () {
            _this.setPoojaData();
            _this.sortReportData();
            _this.cdr.detectChanges();
            setTimeout(function () {
                _this.newWindowPrint(_this.bill.nativeElement.innerHTML);
            }, 0);
        };
        this.store.select(src_app_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]).subscribe(function (user) {
            _this.temple = user;
        });
        this.size = localStorage.getItem('printerPageSize') || 'A4';
    }
    PrinterComponent.prototype.ngAfterViewInit = function () {
        this.setPoojaData();
    };
    PrinterComponent.prototype.sortReportData = function () {
        if (this.reports) {
            this.reports.forEach(function (report) {
                if (report.donations && report.donations.length > 0) {
                    report.donations.grouped = report.donations.reduce(function (acc, donation, index) {
                        if (donation.item === 'vanji') {
                            acc.vanji.push(index);
                        }
                        else if (donation.item === 'festival') {
                            acc.festival.push(index);
                        }
                        else {
                            acc.allDonations.push(index);
                        }
                        return acc;
                    }, {
                        allDonations: [],
                        vanji: [],
                        festival: []
                    });
                }
            });
        }
    };
    PrinterComponent.prototype.setPoojaData = function () {
        var chunkSize = 5;
        if (this.poojas) {
            this.splitPoojas = this.size === 'A4/2' ? this.poojas.reduce(function (all, one, i) {
                if (i < chunkSize) {
                    all[0].push(one);
                    return all;
                }
                var ch = Math.floor((i - chunkSize) / 8);
                all[ch + 1] = [].concat((all[ch + 1] || []), one);
                return all;
            }, [[]]) : [this.poojas];
        }
    };
    PrinterComponent.prototype.getGroupedReportByPoojas = function (poojas) {
        var totalSum = 0;
        var consolidated = poojas.reduce(function (acc, pooja) {
            if (!acc[pooja.pooja_name]) {
                acc[pooja.pooja_name] = {
                    pooja_name: pooja.pooja_name,
                    pooja_price: 0
                };
            }
            acc[pooja.pooja_name].pooja_price += Number(pooja.pooja_price);
            totalSum += Number(pooja.pooja_price);
            return acc;
        }, {});
        var result = [];
        for (var pooja_name in consolidated) {
            result.push(consolidated[pooja_name]);
        }
        return {
            consolidatedList: result,
            totalSum: totalSum.toFixed(2)
        };
    };
    PrinterComponent.prototype.getTotalByPaymentType = function (paymentObj, paymentType) {
        if (!paymentObj || paymentObj.length === 0) {
            return 0;
        }
        var getAmtKey = function (obj) { return obj.hasOwnProperty('pooja_code') ? 'pooja_price' : 'amount'; };
        var filteredPayments = paymentObj
            .filter(function (obj) {
            return obj.hasOwnProperty('pooja_code') ?
                Object(_utils__WEBPACK_IMPORTED_MODULE_4__["extractPaymentTypeFromAddress"])(obj.address) === paymentType :
                obj.description === paymentType;
        });
        console.log({ paymentObj: paymentObj });
        if (filteredPayments.length === 0) {
            return 0;
        }
        var total = filteredPayments
            .reduce(function (total, obj) { return total + Number(obj[getAmtKey(obj)]); }, 0)
            .toFixed(2);
        return total;
    };
    PrinterComponent.prototype.getTotalUPI = function (paymentObj) {
        return this.getTotalByPaymentType(paymentObj, src_app_donations_models_donations_model__WEBPACK_IMPORTED_MODULE_3__["PaymentType"].UPI);
    };
    PrinterComponent.prototype.getTotalCash = function (paymentObj) {
        return this.getTotalByPaymentType(paymentObj, src_app_donations_models_donations_model__WEBPACK_IMPORTED_MODULE_3__["PaymentType"].Cash);
    };
    PrinterComponent.prototype.getTotalBankTransfer = function (paymentObj) {
        return this.getTotalByPaymentType(paymentObj, src_app_donations_models_donations_model__WEBPACK_IMPORTED_MODULE_3__["PaymentType"].NetBanking);
    };
    PrinterComponent.prototype.getTotalPrice = function (poojas, key) {
        return (poojas.reduce(function (a, b) { return +(b[key]) + a; }, 0)).toFixed(2);
    };
    PrinterComponent.prototype.getDailyProfitLoss = function (credit, debit) {
        return (Number(credit) - Number(debit)).toFixed(2);
    };
    PrinterComponent.prototype.getTotalCredit = function (report) {
        var poojasTotal = report.poojas.reduce(function (a, b) { return +(b['pooja_price']) + a; }, 0) || 0;
        var donationsTotal = report.donations.reduce(function (a, b) { return +(b['amount']) + a; }, 0) || 0;
        return (poojasTotal + donationsTotal).toFixed(2);
    };
    PrinterComponent.prototype.getCurrentDate = function () {
        return moment().format("DD-MM-YYYY HH:mm");
    };
    PrinterComponent.prototype.getOverallProfitLoss = function () {
        var total = 0;
        this.reports.forEach(function (report) {
            var poojasTotal = report.poojas.reduce(function (a, b) { return +(b['pooja_price']) + a; }, 0) || 0;
            var donationsTotal = report.donations.reduce(function (a, b) { return +(b['amount']) + a; }, 0) || 0;
            var expensesTotal = report.expenses.reduce(function (a, b) { return +(b['cost']) + a; }, 0) || 0;
            total += (poojasTotal + donationsTotal - expensesTotal);
        });
        return total.toFixed(2);
    };
    PrinterComponent.prototype.newWindowPrint = function (content) {
        var printerWindow = window.open('', '', 'width=1024, height=768');
        printerWindow.document.write("\n    <html>\n    <style>\n    .main-copy,\n\t\t.duplicate-copy {\n\t\t\tfont-family: sans-serif;\n\t\t\tbackground-image: linear-gradient(rgba(255, 255, 255, .9), rgba(255, 255, 255, .9)), url(" + this.temple.logo + ");\n      background-repeat: no-repeat;\n      background-position: top;\n      background-size: contain;\n      font-size: 12px;\n\t\t}\n\n\t\theader {\n\t\t\tmax-width: 100% !important;\n\t\t\tword-break: break-word;\n\t\t}\n    .manthram {\n      font-family: cursive;\n      font-weight: bold;\n      color: darkred;\n    }\n\t\t.heading {\n\t\t\tfont-weight: bold;\n\t\t\tborder-bottom: 1px dotted black;\n\t\t\tmargin: 5px 10px;\n\t\t}\n\n\t\t.report table td {\n\t\t\tborder: 1px solid black;\n\t\t}\n\n    .report section {\n      padding: 20px;\n    }\n\n    .main-copy section:nth-child(even) {\n      background-color: #e7f9ff;\n    }\n\n\t\ttd {\n\t\t\tword-break: break-word;\n\t\t}\n\n\t\t.report table {\n\t\t\tborder-collapse: collapse;\n\t\t\twidth: 90%;\n\t\t\tmargin-left: 2%;\n\t\t}\n\n\t\t.report tr td:first-child {\n\t\t\tmin-width: 80px;\n\t\t}\n\n\t\ttable {\n\t\t\twidth: 100%;\n      font-size: 12px;\n\t\t}\n\n\t\t.address,\n\t\t.phone {\n\t\t\t// background-color: white;\n      color: black;\n\t\t}\n\n\t\theader {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      margin-left: 10%;\n\t\t}\n    .bold {\n      font-weight: bold;\n    }\n    header .text {\n\t\t\tdisplay: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      text-align: center;\n    }\n\n\t\t.temple-name {\n\t\t\tword-wrap: break-word;\n\t\t\ttext-align: center;\n\t\t\tjustify-content: center;\n\t\t\tpadding: 0;\n\t\t\tmargin: 0 0 5px;\n\t\t\tfont-size: 20px;\n      font-family: cursive;\n      font-weight: bolder;\n      color: #460146;\n\t\t}\n\n    .w-100 {\n      width: 100%;\n    }\n\n\t\theader .icon {\n\t\t\tmax-height: 100px;\n\t\t}\n\t\t.title {\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t}\n\n\t\t.title span {\n\t\t\tcolor: black;\n\t\t\tpadding: 5px 10px;\n\t\t\tborder-radius: 5px;\n\t\t\tmargin: 10px 0;\n\t\t\tfont-weight: bolder;\n      font-size: 16px;\n      border: 2px solid gray;\n\t\t}\n\t\t.date-receipt {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-around;\n\t\t\talign-items: center;\n\t\t\tbackground-color: #e7f9ff;\n      border: 1px solid gray;\n\t\t}\n    .page-break {\n      page-break-after: always;\n    }\n\t\t.details {\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tflex-direction: column;\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t.details .row {\n\t\t\tdisplay: flex;\n\t\t\tmargin-bottom: 10px;\n\t\t}\n    .bill .value {\n      font-weight: bold;\n      margin-left: 5px;\n    }\n\t\t.details .row .value {\n\t\t\tmargin-left: 10px;\n\t\t\tborder-bottom: 1px dotted black;\n\t\t\twidth: 100%;\n\t\t\tdisplay: table;\n\t\t\tpadding-left: 20px;\n\t\t}\n\t\t.details .row .label {\n\t\t\twhite-space: pre;\n\t\t\tmargin-right: 10px;\n\t\t}\n\n\t\t.total-amount {\n\t\t\tborder-collapse: collapse;\n\t\t\tbackground: gainsboro;\n\t\t\tpadding: 5px;\n\t\t}\n\n\t\t.notes {\n\t\t\tmargin-top: 10px;\n\t\t}\n\t\t.footer {\n\t\t\tbackground-color: #e7f9ff;\n\t\t\twidth: 100%;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: center;\n\t\t\talign-items: center;\n\t\t\tpadding: 10px;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 10px;\n\t\t}\n    .pooja-table {\n      border-collapse: collapse; width: 100%;\n      font-size: 12px;\n    }\n    .pooja-table td {\n      border: 1px solid darkgoldenrod;\n      padding: 5px;\n      font-weight: bolder;\n      font-size: 14px;\n    }\n\t\t@media print and (max-width: 2in){\n\t\t\t.date-receipt { display: block; }\n\t\t}\n    @media print {\n      table {\n        page-break-inside: auto;\n      }\n      tr {\n        page-break-inside: avoid;\n        page-break-after: auto;\n      }\n      thead {\n        display: table-header-group;\n      }\n      tfoot {\n        display: table-footer-group;\n      }\n    }\n    table {\n      page-break-inside: auto;\n    }\n    tr {\n      page-break-inside: avoid;\n      page-break-after: auto;\n    }\n    thead {\n      display: table-header-group;\n    }\n    tfoot {\n      display: table-footer-group;\n    }\n    " + (localStorage.getItem('duplicateCopyPage') === 'next' ? "\n      .bill-break {\n        page-break-after: always;\n      }\n      " : "") + "\n\n    </style>\n    ");
        printerWindow.document.write('<body><div class="main-copy">');
        printerWindow.document.write(content + '</div>');
        if (this.type !== 'report' && localStorage.getItem('duplicateCopyPage') !== 'never') {
            printerWindow.document.write("\n      <hr class=\"bill-break\"><div class=\"duplicate-copy\">\n      <span style=\"color: gray;\n      border: 1px dotted black;\n      padding: 5px;\">Duplicate copy</span>\n\n      " + (localStorage.getItem('printerPageSize') === 'bill' ? "\n        <style>\n        html{\n          width: 2in;\n        }\n        header, .date-receipt, .details, .row {\n          flex-direction: column;\n        }\n\n        .details .content {\n          width: 100%;\n        }\n\n        .date-receipt {\n          align-items: start;\n        }\n\n        .db {\n          display: inline-block;\n        }\n\n        .bt-gray {\n          border-top: 1px solid gray;\n        }\n\n        .details .row .value {\n          margin: 0;\n          padding: 0;\n          font-weight: bold;\n        }\n\n        .row-container {\n          border: 1px solid gray;\n          padding: 5px;\n        }\n\n      </style>" : "") + "\n      ");
            printerWindow.document.write(content);
        }
        printerWindow.document.write('</div></body></html>');
        printerWindow.document.close();
        printerWindow.focus();
        setTimeout(function () {
            // added delay for loading image logo for bill
            printerWindow.print();
            printerWindow.close();
        }, 20);
        printerWindow.onafterprint = function () { printerWindow.close(); };
        // printerWindow.onfocßus = function () { setTimeout(function () { printerWindow.close(); }, 500); }
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
        __metadata("design:type", Object)
    ], PrinterComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrinterComponent.prototype, "reportPeriod", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PrinterComponent.prototype, "totalProfitLoss", void 0);
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
/* harmony default export */ __webpack_exports__["default"] = (".sw {\n  position: fixed;\n  right: 20px;\n  bottom: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0F1ZGl0LVVJLUFuZ3VsYXIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wd2EvcHdhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wd2EvcHdhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3B3YS9wd2EuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3cge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMjBweDtcbiAgICBib3R0b206IDIwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCIuc3cge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAyMHB4O1xuICBib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".card-body {\n  max-height: 100vh;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0F1ZGl0LVVJLUFuZ3VsYXIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9yaWdodC1jYXJkL3JpZ2h0LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3JpZ2h0LWNhcmQvcmlnaHQtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcmlnaHQtY2FyZC9yaWdodC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYm9keSB7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59IiwiLmNhcmQtYm9keSB7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogYXV0bztcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".nav li {\n  cursor: pointer;\n}\n.nav li a {\n  font-size: large;\n  padding: 10px;\n  font-weight: bold;\n  color: gray;\n}\n.nav li a.active {\n  color: #4285f4;\n}\n.tab.active {\n  color: gray;\n}\n.tab-close {\n  color: gray;\n  text-align: right;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0F1ZGl0LVVJLUFuZ3VsYXIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy90YWJzL3RhYi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFicy90YWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7QURDRTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQ0U7RUFDRSxjQUFBO0FDQ0o7QURHQTtFQUNFLFdBQUE7QUNBRjtBREdBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGFicy90YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIGEge1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxuICBhLmFjdGl2ZSB7XG4gICAgY29sb3I6ICM0Mjg1ZjQ7XG4gIH1cbn1cblxuLnRhYi5hY3RpdmUge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnRhYi1jbG9zZSB7XG4gIGNvbG9yOiBncmF5O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSIsIi5uYXYgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubmF2IGxpIGEge1xuICBmb250LXNpemU6IGxhcmdlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyYXk7XG59XG4ubmF2IGxpIGEuYWN0aXZlIHtcbiAgY29sb3I6ICM0Mjg1ZjQ7XG59XG5cbi50YWIuYWN0aXZlIHtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi50YWItY2xvc2Uge1xuICBjb2xvcjogZ3JheTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".delete {\n  cursor: pointer;\n}\n\n:host, .username {\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0F1ZGl0LVVJLUFuZ3VsYXIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7QUNDSjs7QURDQTtFQUNJLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVsZXRlIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCwgLnVzZXJuYW1lIHtcbiAgICB1c2VyLXNlbGVjdDogdGV4dDtcbn0iLCIuZGVsZXRlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG46aG9zdCwgLnVzZXJuYW1lIHtcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG59Il19 */");

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
/* harmony default export */ __webpack_exports__["default"] = (".users-list {\n  box-sizing: border-box;\n  justify-content: center;\n  align-items: center;\n  display: inline-flex;\n}\n\n.user {\n  width: 80%;\n  margin: 1rem;\n}\n\n.user .add-card:hover {\n  background-color: whitesmoke;\n  cursor: pointer;\n}\n\n.d-flex-start {\n  display: flex;\n  align-items: center;\n}\n\n.d-flex-column {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.group {\n  width: 250px;\n}\n\n.overflow-auto {\n  overflow: auto;\n}\n\n@media (min-width: 768px) {\n  .user {\n    width: calc(50% - 2rem);\n  }\n\n  .users-list {\n    justify-content: center;\n  }\n}\n\n@media (min-width: 992px) {\n  .user {\n    width: calc(33.3333% - 2rem);\n  }\n}\n\n@media (min-width: 1200px) {\n  .user {\n    width: auto;\n  }\n}\n\n@media (min-width: 1000px) {\n  .paper {\n    padding: 0 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL0F1ZGl0LVVJLUFuZ3VsYXIvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy91c2Vycy1saXN0L3VzZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVJO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FDQU47O0FES0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FESUE7RUFDRSxZQUFBO0FDREY7O0FESUE7RUFDRSxjQUFBO0FDREY7O0FER0E7RUFDRTtJQUNJLHVCQUFBO0VDQUo7O0VER0E7SUFDSSx1QkFBQTtFQ0FKO0FBQ0Y7O0FER0E7RUFDRTtJQUNJLDRCQUFBO0VDREo7QUFDRjs7QURJQTtFQUNFO0lBQ0ksV0FBQTtFQ0ZKO0FBQ0Y7O0FES0E7RUFDRTtJQUNJLGNBQUE7RUNISjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJzLWxpc3Qge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi51c2VyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtO1xuXG4gIC5hZGQtY2FyZCB7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4uZC1mbGV4LXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmQtZmxleC1jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmdyb3VwIHtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4ub3ZlcmZsb3ctYXV0byB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC51c2VyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDJyZW0pO1xuICB9XG5cbiAgLnVzZXJzLWxpc3Qge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC51c2VyIHtcbiAgICAgIHdpZHRoOiBjYWxjKDMzLjMzMzMlIC0gMnJlbSk7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAudXNlciB7XG4gICAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gIC5wYXBlciB7XG4gICAgICBwYWRkaW5nOiAwIDIwJTtcbiAgfVxufSAgIiwiLnVzZXJzLWxpc3Qge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi51c2VyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtO1xufVxuLnVzZXIgLmFkZC1jYXJkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZC1mbGV4LXN0YXJ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmQtZmxleC1jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ3JvdXAge1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5vdmVyZmxvdy1hdXRvIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAudXNlciB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMnJlbSk7XG4gIH1cblxuICAudXNlcnMtbGlzdCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAudXNlciB7XG4gICAgd2lkdGg6IGNhbGMoMzMuMzMzMyUgLSAycmVtKTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAudXNlciB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgLnBhcGVyIHtcbiAgICBwYWRkaW5nOiAwIDIwJTtcbiAgfVxufSJdfQ== */");

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



var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(store) {
        this.store = store;
        this.userSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cardView = false;
    }
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(src_app_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]).subscribe(function (user) {
            _this.loggedInUser = user;
        });
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
    UsersListComponent.prototype.getColor = function (role) {
        switch (role) {
            case 'admin':
                return 'red';
            case 'manager':
                return 'orange';
            default:
                return 'blue';
        }
    };
    UsersListComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }
    ]; };
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
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
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
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _expenses_containers_edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../expenses/containers/edit-expense/edit-expense.component */ "./src/app/expenses/containers/edit-expense/edit-expense.component.ts");
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
                _expenses_containers_edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_20__["EditExpenseComponent"],
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
                _expenses_indexedDB_indexedDB_module__WEBPACK_IMPORTED_MODULE_16__["IndexedDBModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateModule"]
            ],
            exports: [
                _components_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_6__["CustomersListComponent"],
                _components_poojas_modal_poojas_modal_component__WEBPACK_IMPORTED_MODULE_7__["PoojasModalComponent"],
                _expenses_containers_edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_20__["EditExpenseComponent"],
                _components_right_card_right_card_component__WEBPACK_IMPORTED_MODULE_8__["RightCardComponent"],
                _components_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_9__["UserModalComponent"],
                _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_11__["UsersListComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"],
                _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"],
                _components_tabs_tab_component__WEBPACK_IMPORTED_MODULE_14__["TabComponent"],
                _components_printer_printer_component__WEBPACK_IMPORTED_MODULE_15__["PrinterComponent"],
                _components_pwa_pwa_component__WEBPACK_IMPORTED_MODULE_17__["PwaComponent"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateModule"]
            ],
            providers: [_services_pwa_service_service__WEBPACK_IMPORTED_MODULE_18__["PwaService"]],
            entryComponents: [
                _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"],
                _components_customers_modal_customers_modal_component__WEBPACK_IMPORTED_MODULE_4__["CustomersModalComponent"],
                _components_poojas_modal_poojas_modal_component__WEBPACK_IMPORTED_MODULE_7__["PoojasModalComponent"],
                _expenses_containers_edit_expense_edit_expense_component__WEBPACK_IMPORTED_MODULE_20__["EditExpenseComponent"],
                _components_user_modal_user_modal_component__WEBPACK_IMPORTED_MODULE_9__["UserModalComponent"],
                _components_printer_printer_component__WEBPACK_IMPORTED_MODULE_15__["PrinterComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/utils.ts":
/*!*********************************!*\
  !*** ./src/app/shared/utils.ts ***!
  \*********************************/
/*! exports provided: PAYMENT_TYPE_RELEASE_DATE, prefixAddressWithPaymentType, removePaymentTypePrefix, extractPaymentTypeFromAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAYMENT_TYPE_RELEASE_DATE", function() { return PAYMENT_TYPE_RELEASE_DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixAddressWithPaymentType", function() { return prefixAddressWithPaymentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePaymentTypePrefix", function() { return removePaymentTypePrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractPaymentTypeFromAddress", function() { return extractPaymentTypeFromAddress; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PAYMENT_TYPE_RELEASE_DATE = new Date('2025-04-29');
var prefixAddressWithPaymentType = function (paymentType, address) {
    return "[" + paymentType + "]|" + (address || '');
};
var removePaymentTypePrefix = function (address) {
    var prefixPattern = /^\[.*?\]\|/;
    return address.replace(prefixPattern, '');
};
var extractPaymentTypeFromAddress = function (address) {
    var prefixPattern = /^\[(.*?)\]\|/;
    var match = address.match(prefixPattern);
    return match ? match[1] : '';
};


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
    apiUrl: 'https://api.sreerajarajeswaridevi.org/dev/api_exec',
    // apiUrl: 'https://api.sreerajarajeswaridevi.org/prod/api_exec',
    baseHref: 'android_app'
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

module.exports = __webpack_require__(/*! /workspaces/Audit-UI-Angular/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map