(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expenses-expenses-module"],{

/***/ "./node_modules/ngx-indexed-db/fesm2015/ngx-indexed-db.js":
/*!****************************************************************!*\
  !*** ./node_modules/ngx-indexed-db/fesm2015/ngx-indexed-db.js ***!
  \****************************************************************/
/*! exports provided: CONFIG_TOKEN, DBMode, NgxIndexedDBModule, NgxIndexedDBService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_TOKEN", function() { return CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DBMode", function() { return DBMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxIndexedDBModule", function() { return NgxIndexedDBModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxIndexedDBService", function() { return NgxIndexedDBService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/ngx-indexed-db/node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






function openDatabase(indexedDB, dbName, version, upgradeCallback) {
    return new Promise((resolve, reject) => {
        if (!indexedDB) {
            reject('IndexedDB not available');
        }
        const request = indexedDB.open(dbName, version);
        let db;
        request.onsuccess = (event) => {
            db = request.result;
            resolve(db);
        };
        request.onerror = (event) => {
            reject(`IndexedDB error: ${request.error}`);
        };
        if (typeof upgradeCallback === 'function') {
            request.onupgradeneeded = (event) => {
                upgradeCallback(event, db);
            };
        }
    });
}
function CreateObjectStore(indexedDB, dbName, version, storeSchemas, migrationFactory) {
    if (!indexedDB) {
        return;
    }
    const request = indexedDB.open(dbName, version);
    request.onupgradeneeded = (event) => {
        const database = event.target.result;
        storeSchemas.forEach((storeSchema) => {
            if (!database.objectStoreNames.contains(storeSchema.store)) {
                const objectStore = database.createObjectStore(storeSchema.store, storeSchema.storeConfig);
                storeSchema.storeSchema.forEach((schema) => {
                    objectStore.createIndex(schema.name, schema.keypath, schema.options);
                });
            }
        });
        const storeMigrations = migrationFactory && migrationFactory();
        if (storeMigrations) {
            Object.keys(storeMigrations)
                .map((k) => parseInt(k, 10))
                .filter((v) => v > event.oldVersion)
                .sort((a, b) => a - b)
                .forEach((v) => {
                storeMigrations[v](database, request.transaction);
            });
        }
        database.close();
    };
    request.onsuccess = (e) => {
        e.target.result.close();
    };
}

function validateStoreName(db, storeName) {
    return db.objectStoreNames.contains(storeName);
}
function validateBeforeTransaction(db, storeName, reject) {
    if (!db) {
        reject('You need to use the openDatabase function to create a database before you query it!');
    }
    if (!validateStoreName(db, storeName)) {
        reject(`objectStore does not exists: ${storeName}`);
    }
}
function createTransaction(db, options) {
    const trans = db.transaction(options.storeName, options.dbMode);
    trans.onerror = options.error;
    trans.oncomplete = options.complete;
    trans.onabort = options.abort;
    return trans;
}
function optionsGenerator(type, storeName, reject, resolve) {
    return {
        storeName,
        dbMode: type,
        error: (e) => {
            reject(e);
        },
        complete: (e) => {
            resolve(e);
        },
        abort: (e) => {
            reject(e);
        },
    };
}

var DBMode;
(function (DBMode) {
    DBMode["readonly"] = "readonly";
    DBMode["readwrite"] = "readwrite";
})(DBMode || (DBMode = {}));
const CONFIG_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"](null);

class NgxIndexedDBService {
    constructor(dbConfig, platformId) {
        this.dbConfig = dbConfig;
        this.platformId = platformId;
        if (!dbConfig.name) {
            throw new Error('NgxIndexedDB: Please, provide the dbName in the configuration');
        }
        if (!dbConfig.version) {
            throw new Error('NgxIndexedDB: Please, provide the db version in the configuration');
        }
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId);
        if (this.isBrowser) {
            this.indexedDB =
                window.indexedDB ||
                    window.mozIndexedDB ||
                    window.webkitIndexedDB ||
                    window.msIndexedDB;
            CreateObjectStore(this.indexedDB, dbConfig.name, dbConfig.version, dbConfig.objectStoresMeta, dbConfig.migrationFactory);
            openDatabase(this.indexedDB, dbConfig.name).then((db) => {
                if (db.version !== dbConfig.version) {
                    if (true) {
                        console.warn(`
            Your DB Config doesn't match the most recent version of the DB with name ${this.dbConfig.name}, please update it
            DB current version: ${db.version};
            Your configuration: ${dbConfig.version};
            `);
                        console.warn(`Using latest version ${db.version}`);
                    }
                    this.dbConfig.version = db.version;
                }
            });
        }
    }
    /**
     * Allows to crate a new object store ad-hoc
     * @param storeName The name of the store to be created
     * @param migrationFactory The migration factory if exists
     */
    createObjectStore(storeSchema, migrationFactory) {
        const storeSchemas = [storeSchema];
        CreateObjectStore(this.indexedDB, this.dbConfig.name, ++this.dbConfig.version, storeSchemas, migrationFactory);
    }
    /**
     * Adds new entry in the store and returns its key
     * @param storeName The name of the store to add the item
     * @param value The entry to be added
     * @param key The optional key for the entry
     */
    add(storeName, value, key) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new Promise((resolve, reject) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                const transaction = createTransaction(db, optionsGenerator(DBMode.readwrite, storeName, reject, resolve));
                const objectStore = transaction.objectStore(storeName);
                const request = Boolean(key)
                    ? objectStore.add(value, key)
                    : objectStore.add(value);
                request.onsuccess = (evt) => {
                    const result = evt.target.result;
                    resolve(result);
                };
            })
                .catch((reason) => reject(reason));
        }));
    }
    /**
     * Adds new entries in the store and returns its key
     * @param storeName The name of the store to add the item
     * @param values The entries to be added containing optional key attribute
     */
    bulkAdd(storeName, values) {
        const promises = values.map((value) => {
            return new Promise((resolve, reject) => {
                openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                    .then((db) => {
                    const transaction = createTransaction(db, optionsGenerator(DBMode.readwrite, storeName, reject, resolve));
                    const objectStore = transaction.objectStore(storeName);
                    const key = value.key;
                    delete value.key;
                    const request = Boolean(key)
                        ? objectStore.add(value, key)
                        : objectStore.add(value);
                    request.onsuccess = (evt) => {
                        const result = evt.target.result;
                        resolve(result);
                    };
                })
                    .catch((reason) => reject(reason));
            });
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(Promise.resolve(Promise.all(promises)));
    }
    /**
     * Adds new entry in the store and returns the item that was added
     * @param storeName The name of the store to add the item
     * @param value The entry to be added
     * @param key The optional key for the entry
     */
    addItem(storeName, value, key) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new Promise((resolve, reject) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                const transaction = createTransaction(db, optionsGenerator(DBMode.readwrite, storeName, reject, resolve));
                const objectStore = transaction.objectStore(storeName);
                const hasKey = Boolean(key);
                const request = hasKey ? objectStore.add(value, key) : objectStore.add(value);
                request.onsuccess = (evt) => {
                    const result = evt.target.result;
                    const itemKey = hasKey ? key : result;
                    this.getByKey(storeName, itemKey).subscribe((newValue) => {
                        resolve(newValue);
                    });
                };
            })
                .catch((reason) => reject(reason));
        }));
    }
    /**
     * Returns entry by key.
     * @param storeName The name of the store to query
     * @param key The entry key
     */
    getByKey(storeName, key) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new Promise((resolve, reject) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                const transaction = createTransaction(db, optionsGenerator(DBMode.readonly, storeName, reject, resolve));
                const objectStore = transaction.objectStore(storeName);
                const request = objectStore.get(key);
                request.onsuccess = (event) => {
                    resolve(event.target.result);
                };
                request.onerror = (event) => {
                    reject(event);
                };
            })
                .catch((reason) => reject(reason));
        }));
    }
    /**
     * Retrieve multiple entries in the store
     * @param storeName The name of the store to retrieve the items
     * @param keys The ids entries to be retrieve
     */
    bulkGet(storeName, keys) {
        const promises = keys.map((key) => this.getByKey(storeName, key).toPromise());
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(Promise.resolve(Promise.all(promises)));
    }
    /**
     * Returns entry by id.
     * @param storeName The name of the store to query
     * @param id The entry id
     */
    getByID(storeName, id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new Promise((resolve, reject) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, reject);
                const transaction = createTransaction(db, optionsGenerator(DBMode.readonly, storeName, reject, resolve));
                const objectStore = transaction.objectStore(storeName);
                const request = objectStore.get(id);
                request.onsuccess = (event) => {
                    resolve(event.target.result);
                };
            })
                .catch((reason) => reject(reason));
        }));
    }
    /**
     * Returns entry by index.
     * @param storeName The name of the store to query
     * @param indexName The index name to filter
     * @param key The entry key.
     */
    getByIndex(storeName, indexName, key) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new Promise((resolve, reject) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, reject);
                const transaction = createTransaction(db, optionsGenerator(DBMode.readonly, storeName, reject, resolve));
                const objectStore = transaction.objectStore(storeName);
                const index = objectStore.index(indexName);
                const request = index.get(key);
                request.onsuccess = (event) => {
                    resolve(event.target.result);
                };
            })
                .catch((reason) => reject(reason));
        }));
    }
    /**
     * Return all elements from one store
     * @param storeName The name of the store to select the items
     */
    getAll(storeName) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new Promise((resolve, reject) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, reject);
                const transaction = createTransaction(db, optionsGenerator(DBMode.readonly, storeName, reject, resolve));
                const objectStore = transaction.objectStore(storeName);
                const request = objectStore.getAll();
                request.onerror = (evt) => {
                    reject(evt);
                };
                request.onsuccess = ({ target: { result: ResultAll } }) => {
                    resolve(ResultAll);
                };
            })
                .catch((reason) => reject(reason));
        }));
    }
    /**
     * Returns all items from the store after update.
     * @param storeName The name of the store to update
     * @param value The new value for the entry
     * @param key The key of the entry to update if exists
     */
    update(storeName, value, key) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new Promise((resolve, reject) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, reject);
                const transaction = createTransaction(db, optionsGenerator(DBMode.readwrite, storeName, reject, resolve));
                const objectStore = transaction.objectStore(storeName);
                transaction.oncomplete = () => {
                    this.getAll(storeName)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
                        .subscribe((newValues) => {
                        resolve(newValues);
                    });
                };
                key ? objectStore.put(value, key) : objectStore.put(value);
            })
                .catch((reason) => reject(reason));
        }));
    }
    /**
     * Returns the item you updated from the store after the update.
     * @param storeName The name of the store to update
     * @param value The new value for the entry
     * @param key The key of the entry to update
     */
    updateByKey(storeName, value, key) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new Promise((resolve, reject) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, reject);
                const transaction = createTransaction(db, optionsGenerator(DBMode.readwrite, storeName, reject, resolve));
                const objectStore = transaction.objectStore(storeName);
                transaction.oncomplete = () => {
                    this.getByKey(storeName, key).subscribe((newValue) => {
                        resolve(newValue);
                    });
                };
                objectStore.put(value, key);
            })
                .catch((reason) => reject(reason));
        }));
    }
    /**
     * Returns all items from the store after delete.
     * @param storeName The name of the store to have the entry deleted
     * @param key The key of the entry to be deleted
     */
    delete(storeName, key) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new Promise((resolve, reject) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, reject);
                const transaction = createTransaction(db, optionsGenerator(DBMode.readwrite, storeName, reject, resolve));
                const objectStore = transaction.objectStore(storeName);
                objectStore.delete(key);
                transaction.oncomplete = () => {
                    this.getAll(storeName)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
                        .subscribe((newValues) => {
                        resolve(newValues);
                    });
                };
            })
                .catch((reason) => reject(reason));
        }));
    }
    /**
     * Returns true from the store after a successful delete.
     * @param storeName The name of the store to have the entry deleted
     * @param key The key of the entry to be deleted
     */
    deleteByKey(storeName, key) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new Promise((resolve, reject) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, reject);
                const transaction = createTransaction(db, optionsGenerator(DBMode.readwrite, storeName, reject, resolve));
                const objectStore = transaction.objectStore(storeName);
                transaction.oncomplete = () => {
                    resolve(true);
                };
                objectStore.delete(key);
            })
                .catch((reason) => reject(reason));
        }));
    }
    /**
     * Returns true if successfully delete all entries from the store.
     * @param storeName The name of the store to have the entries deleted
     */
    clear(storeName) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new Promise((resolve, reject) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, reject);
                const transaction = createTransaction(db, optionsGenerator(DBMode.readwrite, storeName, reject, resolve));
                const objectStore = transaction.objectStore(storeName);
                objectStore.clear();
                transaction.oncomplete = () => {
                    resolve(true);
                };
            })
                .catch((reason) => reject(reason));
        }));
    }
    /**
     * Returns true if successfully delete the DB.
     */
    deleteDatabase() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const db = yield openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version);
                yield db.close();
                const deleteDBRequest = this.indexedDB.deleteDatabase(this.dbConfig.name);
                deleteDBRequest.onsuccess = () => {
                    resolve(true);
                };
                deleteDBRequest.onerror = reject;
                deleteDBRequest.onblocked = () => {
                    throw new Error(`Unable to delete database because it's blocked`);
                };
            }
            catch (evt) {
                reject(evt);
            }
        })));
    }
    /**
     * Returns the open cursor event
     * @param storeName The name of the store to have the entries deleted
     * @param keyRange The key range which the cursor should be open on
     */
    openCursor(storeName, keyRange) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new Promise((resolve, reject) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, reject);
                const transaction = createTransaction(db, optionsGenerator(DBMode.readonly, storeName, reject, resolve));
                const objectStore = transaction.objectStore(storeName);
                const request = keyRange === undefined ? objectStore.openCursor() : objectStore.openCursor(keyRange);
                request.onsuccess = (event) => {
                    resolve(event);
                };
            })
                .catch((reason) => reject(reason));
        }));
    }
    /**
     * Open a cursor by index filter.
     * @param storeName The name of the store to query.
     * @param indexName The index name to filter.
     * @param keyRange The range value and criteria to apply on the index.
     */
    openCursorByIndex(storeName, indexName, keyRange, mode = DBMode.readonly) {
        const obs = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
            .then((db) => {
            validateBeforeTransaction(db, storeName, (reason) => {
                obs.error(reason);
            });
            const transaction = createTransaction(db, optionsGenerator(mode, storeName, (reason) => {
                obs.error(reason);
            }, () => {
                obs.next();
            }));
            const objectStore = transaction.objectStore(storeName);
            const index = objectStore.index(indexName);
            const request = index.openCursor(keyRange);
            request.onsuccess = (event) => {
                obs.next(event);
            };
        })
            .catch((reason) => obs.error(reason));
        return obs;
    }
    /**
     * Returns all items by an index.
     * @param storeName The name of the store to query
     * @param indexName The index name to filter
     * @param keyRange  The range value and criteria to apply on the index.
     */
    getAllByIndex(storeName, indexName, keyRange) {
        const data = [];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new Promise((resolve, reject) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, reject);
                const transaction = createTransaction(db, optionsGenerator(DBMode.readonly, storeName, reject, resolve));
                const objectStore = transaction.objectStore(storeName);
                const index = objectStore.index(indexName);
                const request = index.openCursor(keyRange);
                request.onsuccess = (event) => {
                    const cursor = event.target.result;
                    if (cursor) {
                        data.push(cursor.value);
                        cursor.continue();
                    }
                    else {
                        resolve(data);
                    }
                };
            })
                .catch((reason) => reject(reason));
        }));
    }
    /**
     * Returns all primary keys by an index.
     * @param storeName The name of the store to query
     * @param indexName The index name to filter
     * @param keyRange  The range value and criteria to apply on the index.
     */
    getAllKeysByIndex(storeName, indexName, keyRange) {
        const data = [];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new Promise((resolve, reject) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, reject);
                const transaction = createTransaction(db, optionsGenerator(DBMode.readonly, storeName, reject, resolve));
                const objectStore = transaction.objectStore(storeName);
                const index = objectStore.index(indexName);
                const request = index.openKeyCursor(keyRange);
                request.onsuccess = (event) => {
                    const cursor = event.target.result;
                    if (cursor) {
                        data.push({ primaryKey: cursor.primaryKey, key: cursor.key });
                        cursor.continue();
                    }
                    else {
                        resolve(data);
                    }
                };
            })
                .catch((reason) => reject(reason));
        }));
    }
    /**
     * Returns the number of rows in a store.
     * @param storeName The name of the store to query
     * @param keyRange  The range value and criteria to apply.
     */
    count(storeName, keyRange) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(new Promise((resolve, reject) => {
            openDatabase(this.indexedDB, this.dbConfig.name, this.dbConfig.version)
                .then((db) => {
                validateBeforeTransaction(db, storeName, reject);
                const transaction = createTransaction(db, optionsGenerator(DBMode.readonly, storeName, reject, resolve));
                const objectStore = transaction.objectStore(storeName);
                const request = objectStore.count(keyRange);
                request.onerror = (e) => reject(e);
                request.onsuccess = (e) => resolve(e.target.result);
            })
                .catch((reason) => reject(reason));
        }));
    }
}
NgxIndexedDBService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
NgxIndexedDBService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [CONFIG_TOKEN,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];

class NgxIndexedDBModule {
    static forRoot(dbConfig) {
        return {
            ngModule: NgxIndexedDBModule,
            providers: [NgxIndexedDBService, { provide: CONFIG_TOKEN, useValue: dbConfig }]
        };
    }
}
NgxIndexedDBModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-indexed-db.js.map


/***/ }),

/***/ "./node_modules/ngx-indexed-db/node_modules/tslib/tslib.es6.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-indexed-db/node_modules/tslib/tslib.es6.js ***!
  \*********************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/expenses/containers/expenses.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expenses/containers/expenses.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-split-body [isLoading$]=\"!isLoading$\">\n  <div class=\"left-section\">\n    <mdb-card>\n      <mdb-card-header class=\"w-100 d-flex justify-space-between bg-primary white-text\">\n        <div>\n          <blockquote class=\"text-left  blockquote bq-success\">\n            <h3 class=\"header\">Add Expense</h3>\n          </blockquote>\n        </div>\n        <button mdbWavesEffect mdbBtn type=\"button\" rounded=\"true\" color=\"white\" class=\"pull-right text-lg btn-primary\" rrDatePicker [date]=\"expenseDate\" [endDate]=\"endDate\" [startDate]=\"startDate\"\n        header=\"Select Date\" (dateSelected)=\"expDatePicked($event)\">\n        <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> <span appDateTransform [date]=\"expenseDate.format('YYYYMMDD')\"></span>\n      </button>\n      </mdb-card-header>\n  \n      <mdb-card-body class=\"py-2\">\n        <form #expenseForm=\"ngForm\">\n          <div class=\"d-flex\">\n          <div class=\"md-form\">\n            <input type=\"text\" id=\"item\" name=\"item\" class=\"form-control\" [(ngModel)]=\"expense.item\" mdbInput mdbValidate [validateSuccess]=\"false\" #item=\"ngModel\" required>\n            <label for=\"item\">Item</label>\n            <mdb-error *ngIf=\"item && item.invalid && (item.dirty || item.touched)\">item is required</mdb-error>\n          </div>\n          <div class=\"suggestion-container\" *ngIf=\"frequentExpenses?.length\">\n            <!-- <mdb-badge class=\"cursor-pointer mr-1\" *ngFor=\"let expenseName of frequentExpenses\" pill=\"true\" [info]=\"expense.item !== expenseName\" [success]=\"expense.item === expenseName\" (click)=\"expense.item = expenseName\">{{ expenseName }}</mdb-badge> -->\n          </div>\n          </div>\n\n          <div class=\"md-form\" style=\"margin-top: 15px;\">\n            <textarea type=\"text\" id=\"description\" name=\"description\" class=\"my-0 py-0 md-textarea form-control\" \n            #description=\"ngModel\" [(ngModel)]=\"expense.description\" mdbInput mdbValidate\n              [validateSuccess]=\"false\" required></textarea>\n            <label for=\"description\">Description</label>\n            <mdb-error *ngIf=\"description && description.invalid && (description.dirty || description.touched)\">Description is required</mdb-error>\n          </div>\n\n          <div class=\"text-lg\">\n            <label for=\"cost\" class=\"grey-text\">Cost</label>\n            <div class=\"md-form mt-0\">\n              <span class=\"d-flex\">\n                <span class=\"price\">&#x20B9;</span>\n                <input type=\"number\" class=\"form-control price\" id=\"cost\" name=\"cost\" [(ngModel)]=\"expense.cost\" #cost=\"ngModel\" mdbValidate [validateSuccess]=\"false\" required>\n              </span>\n              <mdb-error class=\"ml-3\" *ngIf=\"cost && cost.invalid && (cost.dirty || cost.touched)\">Cost is required</mdb-error>\n            </div>\n          </div>\n\n        </form>\n      </mdb-card-body>\n      <mdb-card-footer class=\"d-flex\">\n        <button type=\"button\" mdbBtn color=\"white\" class=\"relative waves-light pull-right\" mdbWavesEffect (click)=\"expenseForm.reset()\">Clear\n          </button>\n        <button type=\"button\" mdbBtn color=\"success\" [disabled]=\"expenseForm.invalid || (isLoading$ | async)\" class=\"relative waves-light pull-right\" mdbWavesEffect (click)=\"onSave()\">Save & Print\n          </button>\n\n      </mdb-card-footer>\n    </mdb-card>\n\n\n    <mdb-card class=\"mt-2\" *ngIf=\"(isManager$ | async)\">\n      <!-- salary section -->\n      <mdb-card-header class=\"w-100 d-flex justify-space-between bg-primary white-text\">\n        <div>\n          <blockquote class=\"text-left  blockquote bq-success\">\n            <h3 class=\"header\">Record Salary</h3>\n          </blockquote>\n        </div>\n        <button mdbWavesEffect mdbBtn type=\"button\" rounded=\"true\" color=\"white\" class=\"pull-right text-lg btn-primary\" rrDatePicker [date]=\"salaryDate\" [endDate]=\"endDate\" [startDate]=\"startDate\"\n        header=\"Select Salary Given Date\" (dateSelected)=\"salDatePicked($event)\">\n        <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> {{ salaryDate.format('dddd DD/MM/YYYY') }}\n      </button>\n      </mdb-card-header>\n  \n      <mdb-card-body class=\"py-2\">\n        <form #salaryForm=\"ngForm\">\n          <div class=\"d-flex\">\n          <div class=\"md-form\">\n            <input type=\"text\" id=\"description\" name=\"description\" class=\"form-control\" [(ngModel)]=\"salary.description\" mdbInput mdbValidate [validateSuccess]=\"false\" #description=\"ngModel\" required>\n            <label for=\"description\">Paid To:</label>\n            <mdb-error *ngIf=\"description && description.invalid && (description.dirty || description.touched)\">Person Name is required</mdb-error>\n          </div>\n          <div class=\"suggestion-container\" *ngIf=\"frequentSalaries?.length\">\n            <!-- <mdb-badge class=\"cursor-pointer mr-1\" *ngFor=\"let item of frequentSalaries\" pill=\"true\" [info]=\"item.person !== salary.description\" [success]=\"item.person === salary.description\" (click)=\"salary.description = item.person; salary.cost = item.amount\">{{ item.person }}</mdb-badge> -->\n          </div>\n          </div>\n\n          <div class=\"text-lg\">\n            <label for=\"cost\" class=\"grey-text\">Amount</label>\n            <div class=\"md-form mt-0\">\n              <span class=\"d-flex\">\n                <span class=\"price\">&#x20B9;</span>\n                <input type=\"number\" class=\"form-control price\" id=\"cost\" name=\"cost\" [(ngModel)]=\"salary.cost\" #cost=\"ngModel\" mdbValidate [validateSuccess]=\"false\" required>\n              </span>\n              <mdb-error class=\"ml-3\" *ngIf=\"cost && cost.invalid && (cost.dirty || cost.touched)\">Amount is required</mdb-error>\n            </div>\n          </div>\n\n        </form>\n      </mdb-card-body>\n      <mdb-card-footer class=\"d-flex\">\n        <button type=\"button\" mdbBtn color=\"white\" class=\"relative waves-light pull-right\" mdbWavesEffect (click)=\"salaryForm.reset()\">Clear\n          </button>\n        <button type=\"button\" mdbBtn color=\"success\" [disabled]=\"salaryForm.invalid || (isLoading$ | async)\" class=\"relative waves-light pull-right\" mdbWavesEffect (click)=\"onSalarySave(salaryForm)\">Save & Print\n          </button>\n      </mdb-card-footer>\n    </mdb-card>\n  </div>\n  <div class=\"right-section pb-4\">\n    <app-right-card [header]=\"'Todays Expenses'\" >\n      <div class=\"card-header bg-primary white-text\">\n        <span class=\"icon-button\" (click)=\"prevDate()\">\n          <mdb-icon *ngIf=\"isManager$ | async\" fas icon=\"chevron-left\" class=\"ml-1 float-left delete cursor-pointer white-text\" alt=\"Left\"></mdb-icon>\n        </span>\n        <span>\n          Expense on \n          <button [disabled]=\"!(isManager$ | async)\" mdbWavesEffect mdbBtn type=\"button\" rounded=\"true\" color=\"white\" class=\"pull-right text-lg btn-primary\" rrDatePicker [date]=\"defaultDate\" [endDate]=\"defaultDate\" [startDate]=\"startDate\"\n          (click)=\"dateClicked($event)\" header=\"Select Date\" (dateSelected)=\"datePicked($event)\">\n            <mdb-icon fas icon=\"calendar-alt mr-2\" size=\"lg\" class=\"calendar\" alt=\"date\"></mdb-icon> {{ formattedDate }}\n          </button>\n        </span>\n        <span class=\"icon-button\" (click)=\"nextDate()\">\n          <mdb-icon *ngIf=\"(isManager$ | async) && selectedDate.format('DD/MM/YYYY') !== defaultDate.format('DD/MM/YYYY')\" mdbtn fas icon=\"chevron-right\" class=\"ml-1 float-right delete cursor-pointer white-text\" alt=\"Right\"></mdb-icon>\n        </span>\n      </div>\n      <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\">\n        <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\n          <span class=\"sr-only\">Loading...</span>\n        </div>\n      </div>\n      <table mdbTable small=\"true\" striped=\"true\" *ngIf=\"!(isLoading$ | async) && todaysExpenseList.length > 0\">\n        <thead>\n          <tr>\n            <th>Item</th>\n            <th>Description</th>\n            <th>Cost</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of todaysExpenseList\" [class.salary]=\"item?.item === 'Salary'\">\n            <td scope=\"row\">{{ item?.item }}</td>\n            <td>{{ item?.description }}</td>\n            <td class=\"table-price\">&#x20B9;{{ item?.cost }}</td>\n            <td>\n              <app-printer [type]=\"'expense'\" [size]=\"'bill'\" [expense]=\"item\"></app-printer> \n              <mdb-icon *ngIf=\"isManager$ | async\" fas icon=\"trash\" class=\"ml-1 float-right delete grey-text\" (click)=\"onDelete(item?.uuid)\" alt=\"Delete\"></mdb-icon>\n            </td>\n          </tr>\n\n          <tr>\n          </tr>\n        </tbody>\n      </table>\n      <div role=\"footer\" *ngIf=\"!(isLoading$ | async)\">\n        <div class=\"card-footer text-muted\">\n          Total: <b class=\"price total-amount\">&#x20B9;{{getTotalExpense()}}</b>\n        </div>\n      </div>\n    </app-right-card>\n\n    <!-- <div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 200px\">\n      <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\n        <span class=\"sr-only\">Loading...</span>\n      </div>\n    </div> -->\n  </div>\n</app-split-body>\n\n<app-printer #appPrinter [type]=\"'expense'\" [hidden]=\"true\"></app-printer>");

/***/ }),

/***/ "./src/app/expenses/containers/expenses.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/expenses/containers/expenses.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".justify-space-between {\n  justify-content: space-between;\n}\n\n.price {\n  font-size: 24px;\n}\n\n.table-price {\n  font-weight: bold;\n}\n\n.right-section table {\n  text-align: left;\n  margin-bottom: 0;\n}\n\n.right-section table .total-amount {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.right-section table .delete {\n  cursor: pointer;\n}\n\n.right-section table tr.salary {\n  background-color: #d8fdd8;\n}\n\n.card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.card-body {\n  padding: 0 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL3N0b3JlIDEvY29kZS9BdWRpdC1VSS1Bbmd1bGFyL3NyYy9hcHAvZXhwZW5zZXMvY29udGFpbmVycy9leHBlbnNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZXhwZW5zZXMvY29udGFpbmVycy9leHBlbnNlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRElJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0RSOztBREdRO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDRFo7O0FER1E7RUFDSSxlQUFBO0FDRFo7O0FER1E7RUFDSSx5QkFBQTtBQ0RaOztBRE9BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNKSjs7QURPQTtFQUNJLGtCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9leHBlbnNlcy9jb250YWluZXJzL2V4cGVuc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmp1c3RpZnktc3BhY2UtYmV0d2VlbiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJpY2Uge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnRhYmxlLXByaWNlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJpZ2h0LXNlY3Rpb24ge1xuIFxuICAgIHRhYmxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICAudG90YWwtYW1vdW50IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kZWxldGUge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIHRyLnNhbGFyeSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyNTMsIDIxNik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLmNhcmQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuICAgXG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwIDEuMjVyZW07XG59IiwiLmp1c3RpZnktc3BhY2UtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByaWNlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4udGFibGUtcHJpY2Uge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJpZ2h0LXNlY3Rpb24gdGFibGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLnJpZ2h0LXNlY3Rpb24gdGFibGUgLnRvdGFsLWFtb3VudCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4ucmlnaHQtc2VjdGlvbiB0YWJsZSAuZGVsZXRlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJpZ2h0LXNlY3Rpb24gdGFibGUgdHIuc2FsYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZmRkODtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMCAxLjI1cmVtO1xufSJdfQ== */");

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
    function ExpensesComponent(store, modalService, idbService) {
        this.store = store;
        this.modalService = modalService;
        this.idbService = idbService;
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
        this.store.dispatch(new _store_expenses_actions__WEBPACK_IMPORTED_MODULE_4__["ExpensesAddQuery"](this.expense));
        var expenseCopy = JSON.parse(JSON.stringify(this.expense));
        this.appPrinter.expense = __assign({}, expenseCopy, { added_by: this.user.displayName, expense_date: this.expense.ist_YYYYMMDD });
        this.appPrinter.triggerPrint();
        this.idbService
            .getByKey('expenses', expenseCopy.item)
            .subscribe(function (data) {
            if (!data) {
                _this.idbService.add('expenses', {
                    item: expenseCopy.item,
                    frequency: 1
                });
            }
            else {
                _this.idbService.update('expenses', {
                    item: expenseCopy.item,
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
        this.store.dispatch(new _store_expenses_actions__WEBPACK_IMPORTED_MODULE_4__["ExpensesAddQuery"](this.salary));
        var salaryCopy = JSON.parse(JSON.stringify(this.salary));
        this.appPrinter.expense = __assign({}, salaryCopy, { added_by: this.user.displayName, expense_date: this.expense.ist_YYYYMMDD });
        this.appPrinter.triggerPrint();
        this.idbService
            .getByKey('salary', salaryCopy.description)
            .subscribe(function (data) {
            if (!data) {
                _this.idbService.add('salary', {
                    person: salaryCopy.description,
                    amount: salaryCopy.cost,
                    frequency: 1
                });
            }
            else {
                _this.idbService.update('salary', {
                    person: salaryCopy.description,
                    amount: salaryCopy.cost,
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
        { type: ngx_indexed_db__WEBPACK_IMPORTED_MODULE_9__["NgxIndexedDBService"] }
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
            ngx_indexed_db__WEBPACK_IMPORTED_MODULE_9__["NgxIndexedDBService"]])
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
    }
    Object.defineProperty(ExpensesService.prototype, "userId", {
        get: function () {
            return 'uid';
        },
        enumerable: true,
        configurable: true
    });
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
    function ExpensesEffects(actions$, expensesService, store) {
        var _this = this;
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
            .pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
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
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _services_expenses_service__WEBPACK_IMPORTED_MODULE_2__["ExpensesService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
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