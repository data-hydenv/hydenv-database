(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-console-page-console-page-module~pages-exercise-page-exercise-page-module~pages-home-p~8fad2ad7"],{

/***/ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js ***!
  \************************************************************************************/
/*! exports provided: AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreDocument, AngularFirestoreModule, ENABLE_PERSISTENCE, PERSISTENCE_SETTINGS, SETTINGS, associateQuery, combineChange, combineChanges, docChanges, fromCollectionRef, fromDocRef, fromRef, sortedChanges, validateEventsArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestore", function() { return AngularFirestore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollection", function() { return AngularFirestoreCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreCollectionGroup", function() { return AngularFirestoreCollectionGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreDocument", function() { return AngularFirestoreDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularFirestoreModule", function() { return AngularFirestoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENABLE_PERSISTENCE", function() { return ENABLE_PERSISTENCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERSISTENCE_SETTINGS", function() { return PERSISTENCE_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS", function() { return SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "associateQuery", function() { return associateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineChange", function() { return combineChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineChanges", function() { return combineChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docChanges", function() { return docChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromCollectionRef", function() { return fromCollectionRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromDocRef", function() { return fromDocRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRef", function() { return fromRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortedChanges", function() { return sortedChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEventsArray", function() { return validateEventsArray; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @firebase/firestore */ "./node_modules/@firebase/firestore/dist/index.cjs.js");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T, R
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */

function _fromRef(ref, scheduler = rxjs__WEBPACK_IMPORTED_MODULE_1__["asyncScheduler"]) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((/**
     * @param {?} subscriber
     * @return {?}
     */
    subscriber => {
        /** @type {?} */
        let unsubscribe;
        if (scheduler != null) {
            scheduler.schedule((/**
             * @return {?}
             */
            () => {
                unsubscribe = ref.onSnapshot(subscriber);
            }));
        }
        else {
            unsubscribe = ref.onSnapshot(subscriber);
        }
        return (/**
         * @return {?}
         */
        () => {
            if (unsubscribe != null) {
                unsubscribe();
            }
        });
    }));
}
/**
 * @template R
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
function fromRef(ref, scheduler) {
    return _fromRef(ref, scheduler);
}
/**
 * @template T
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
function fromDocRef(ref, scheduler) {
    return fromRef(ref, scheduler)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} payload
     * @return {?}
     */
    payload => ({ payload, type: 'value' }))));
}
/**
 * @template T
 * @param {?} ref
 * @param {?=} scheduler
 * @return {?}
 */
function fromCollectionRef(ref, scheduler) {
    return fromRef(ref, scheduler).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} payload
     * @return {?}
     */
    payload => ({ payload, type: 'query' }))));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Return a stream of document changes on a query. These results are not in sort order but in
 * order of occurence.
 * @template T
 * @param {?} query
 * @param {?=} scheduler
 * @return {?}
 */
function docChanges(query, scheduler) {
    return fromCollectionRef(query, scheduler)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} action
     * @return {?}
     */
    action => action.payload.docChanges()
        .map((/**
     * @param {?} change
     * @return {?}
     */
    change => ((/** @type {?} */ ({ type: change.type, payload: change }))))))));
}
/**
 * Return a stream of document changes on a query. These results are in sort order.
 * @template T
 * @param {?} query
 * @param {?} events
 * @param {?=} scheduler
 * @return {?}
 */
function sortedChanges(query, events, scheduler) {
    return fromCollectionRef(query, scheduler)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} changes
     * @return {?}
     */
    changes => changes.payload.docChanges())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((/**
     * @param {?} current
     * @param {?} changes
     * @return {?}
     */
    (current, changes) => combineChanges(current, changes, events)), []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} changes
     * @return {?}
     */
    changes => changes.map((/**
     * @param {?} c
     * @return {?}
     */
    c => ((/** @type {?} */ ({ type: c.type, payload: c }))))))));
}
/**
 * Combines the total result set from the current set of changes from an incoming set
 * of changes.
 * @template T
 * @param {?} current
 * @param {?} changes
 * @param {?} events
 * @return {?}
 */
function combineChanges(current, changes, events) {
    changes.forEach((/**
     * @param {?} change
     * @return {?}
     */
    change => {
        // skip unwanted change types
        if (events.indexOf(change.type) > -1) {
            current = combineChange(current, change);
        }
    }));
    return current;
}
/**
 * Creates a new sorted array from a new change.
 * @template T
 * @param {?} combined
 * @param {?} change
 * @return {?}
 */
function combineChange(combined, change) {
    switch (change.type) {
        case 'added':
            if (combined[change.newIndex] && combined[change.newIndex].doc.ref.isEqual(change.doc.ref)) {
                // Not sure why the duplicates are getting fired
            }
            else {
                combined.splice(change.newIndex, 0, change);
            }
            break;
        case 'modified':
            if (combined[change.oldIndex] == null || combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
                // When an item changes position we first remove it
                // and then add it's new position
                if (change.oldIndex !== change.newIndex) {
                    combined.splice(change.oldIndex, 1);
                    combined.splice(change.newIndex, 0, change);
                }
                else {
                    combined.splice(change.newIndex, 1, change);
                }
            }
            break;
        case 'removed':
            if (combined[change.oldIndex] && combined[change.oldIndex].doc.ref.isEqual(change.doc.ref)) {
                combined.splice(change.oldIndex, 1);
            }
            break;
    }
    return combined;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} events
 * @return {?}
 */
function validateEventsArray(events) {
    if (!events || events.length === 0) {
        events = ['added', 'removed', 'modified'];
    }
    return events;
}
/**
 * AngularFirestoreCollection service
 *
 * This class creates a reference to a Firestore Collection. A reference and a query are provided in
 * in the constructor. The query can be the unqueried reference if no query is desired.The class
 * is generic which gives you type safety for data update methods and data streaming.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const collectionRef = firebase.firestore.collection('stocks');
 * const query = collectionRef.where('price', '>', '0.01');
 * const fakeStock = new AngularFirestoreCollection<Stock>(collectionRef, query);
 *
 * // NOTE!: the updates are performed on the reference not the query
 * await fakeStock.add({ name: 'FAKE', price: 0.01 });
 *
 * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
 * fakeStock.valueChanges().subscribe(value => console.log(value));
 * @template T
 */
class AngularFirestoreCollection {
    /**
     * The constructor takes in a CollectionReference and Query to provide wrapper methods
     * for data operations and data streaming.
     *
     * Note: Data operation methods are done on the reference not the query. This means
     * when you update data it is not updating data to the window of your query unless
     * the data fits the criteria of the query. See the AssociatedRefence type for details
     * on this implication.
     * @param {?} ref
     * @param {?} query
     * @param {?} afs
     */
    constructor(ref, query, afs) {
        this.ref = ref;
        this.query = query;
        this.afs = afs;
    }
    /**
     * Listen to the latest change in the stream. This method returns changes
     * as they occur and they are not sorted by query order. This allows you to construct
     * your own data structure.
     * @param {?=} events
     * @return {?}
     */
    stateChanges(events) {
        if (!events || events.length === 0) {
            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
        }
        return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.filter((/**
         * @param {?} change
         * @return {?}
         */
        change => events.indexOf(change.type) > -1)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} changes
         * @return {?}
         */
        changes => changes.length > 0)), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Create a stream of changes as they occur it time. This method is similar to stateChanges()
     * but it collects each event in an array over time.
     * @param {?=} events
     * @return {?}
     */
    auditTrail(events) {
        return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((/**
         * @param {?} current
         * @param {?} action
         * @return {?}
         */
        (current, action) => [...current, ...action]), []));
    }
    /**
     * Create a stream of synchronized changes. This method keeps the local array in sorted
     * query order.
     * @param {?=} events
     * @return {?}
     */
    snapshotChanges(events) {
        /** @type {?} */
        const validatedEvents = validateEventsArray(events);
        /** @type {?} */
        const scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
        return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
    }
    /**
     * @template K
     * @param {?=} options
     * @return {?}
     */
    valueChanges(options = {}) {
        return fromCollectionRef(this.query, this.afs.schedulers.outsideAngular)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.payload.docs.map((/**
         * @param {?} a
         * @return {?}
         */
        a => {
            if (options.idField) {
                return (/** @type {?} */ (Object.assign(Object.assign({}, (/** @type {?} */ (a.data()))), { [options.idField]: a.id })));
            }
            else {
                return a.data();
            }
        })))), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Retrieve the results of the query once.
     * @param {?=} options
     * @return {?}
     */
    get(options) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
    }
    /**
     * Add data to a collection reference.
     *
     * Note: Data operation methods are done on the reference not the query. This means
     * when you update data it is not updating data to the window of your query unless
     * the data fits the criteria of the query.
     * @param {?} data
     * @return {?}
     */
    add(data) {
        return this.ref.add(data);
    }
    /**
     * Create a reference to a single document in a collection.
     * @template T
     * @param {?=} path
     * @return {?}
     */
    doc(path) {
        return new AngularFirestoreDocument(this.ref.doc(path), this.afs);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * AngularFirestoreDocument service
 *
 * This class creates a reference to a Firestore Document. A reference is provided in
 * in the constructor. The class is generic which gives you type safety for data update
 * methods and data streaming.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const fakeStock = new AngularFirestoreDocument<Stock>(doc('stocks/FAKE'));
 * await fakeStock.set({ name: 'FAKE', price: 0.01 });
 * fakeStock.valueChanges().map(snap => {
 *   if(snap.exists) return snap.data();
 *   return null;
 * }).subscribe(value => console.log(value));
 * // OR! Transform using Observable.from() and the data is unwrapped for you
 * Observable.from(fakeStock).subscribe(value => console.log(value));
 * @template T
 */
class AngularFirestoreDocument {
    /**
     * The contstuctor takes in a DocumentReference to provide wrapper methods
     * for data operations, data streaming, and Symbol.observable.
     * @param {?} ref
     * @param {?} afs
     */
    constructor(ref, afs) {
        this.ref = ref;
        this.afs = afs;
    }
    /**
     * Create or overwrite a single document.
     * @param {?} data
     * @param {?=} options
     * @return {?}
     */
    set(data, options) {
        return this.ref.set(data, options);
    }
    /**
     * Update some fields of a document without overwriting the entire document.
     * @param {?} data
     * @return {?}
     */
    update(data) {
        return this.ref.update(data);
    }
    /**
     * Delete a document.
     * @return {?}
     */
    delete() {
        return this.ref.delete();
    }
    /**
     * Create a reference to a sub-collection given a path and an optional query
     * function.
     * @template R
     * @param {?} path
     * @param {?=} queryFn
     * @return {?}
     */
    collection(path, queryFn) {
        /** @type {?} */
        const collectionRef = this.ref.collection(path);
        const { ref, query } = associateQuery(collectionRef, queryFn);
        return new AngularFirestoreCollection(ref, query, this.afs);
    }
    /**
     * Listen to snapshot updates from the document.
     * @return {?}
     */
    snapshotChanges() {
        /** @type {?} */
        const scheduledFromDocRef$ = fromDocRef(this.ref, this.afs.schedulers.outsideAngular);
        return scheduledFromDocRef$.pipe(this.afs.keepUnstableUntilFirst);
    }
    /**
     * Listen to unwrapped snapshot updates from the document.
     * @return {?}
     */
    valueChanges() {
        return this.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} action
         * @return {?}
         */
        action => {
            return action.payload.data();
        })));
    }
    /**
     * Retrieve the document once.
     * @param {?=} options
     * @return {?}
     */
    get(options) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.ref.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * AngularFirestoreCollectionGroup service
 *
 * This class holds a reference to a Firestore Collection Group Query.
 *
 * This class uses Symbol.observable to transform into Observable using Observable.from().
 *
 * This class is rarely used directly and should be created from the AngularFirestore service.
 *
 * Example:
 *
 * const collectionGroup = firebase.firestore.collectionGroup('stocks');
 * const query = collectionRef.where('price', '>', '0.01');
 * const fakeStock = new AngularFirestoreCollectionGroup<Stock>(query, afs);
 *
 * // Subscribe to changes as snapshots. This provides you data updates as well as delta updates.
 * fakeStock.valueChanges().subscribe(value => console.log(value));
 * @template T
 */
class AngularFirestoreCollectionGroup {
    /**
     * The constructor takes in a CollectionGroupQuery to provide wrapper methods
     * for data operations and data streaming.
     * @param {?} query
     * @param {?} afs
     */
    constructor(query, afs) {
        this.query = query;
        this.afs = afs;
    }
    /**
     * Listen to the latest change in the stream. This method returns changes
     * as they occur and they are not sorted by query order. This allows you to construct
     * your own data structure.
     * @param {?=} events
     * @return {?}
     */
    stateChanges(events) {
        if (!events || events.length === 0) {
            return docChanges(this.query, this.afs.schedulers.outsideAngular).pipe(this.afs.keepUnstableUntilFirst);
        }
        return docChanges(this.query, this.afs.schedulers.outsideAngular)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.filter((/**
         * @param {?} change
         * @return {?}
         */
        change => events.indexOf(change.type) > -1)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
         * @param {?} changes
         * @return {?}
         */
        changes => changes.length > 0)), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Create a stream of changes as they occur it time. This method is similar to stateChanges()
     * but it collects each event in an array over time.
     * @param {?=} events
     * @return {?}
     */
    auditTrail(events) {
        return this.stateChanges(events).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])((/**
         * @param {?} current
         * @param {?} action
         * @return {?}
         */
        (current, action) => [...current, ...action]), []));
    }
    /**
     * Create a stream of synchronized changes. This method keeps the local array in sorted
     * query order.
     * @param {?=} events
     * @return {?}
     */
    snapshotChanges(events) {
        /** @type {?} */
        const validatedEvents = validateEventsArray(events);
        /** @type {?} */
        const scheduledSortedChanges$ = sortedChanges(this.query, validatedEvents, this.afs.schedulers.outsideAngular);
        return scheduledSortedChanges$.pipe(this.afs.keepUnstableUntilFirst);
    }
    /**
     * Listen to all documents in the collection and its possible query as an Observable.
     * @return {?}
     */
    valueChanges() {
        /** @type {?} */
        const fromCollectionRefScheduled$ = fromCollectionRef(this.query, this.afs.schedulers.outsideAngular);
        return fromCollectionRefScheduled$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
         * @param {?} actions
         * @return {?}
         */
        actions => actions.payload.docs.map((/**
         * @param {?} a
         * @return {?}
         */
        a => a.data())))), this.afs.keepUnstableUntilFirst);
    }
    /**
     * Retrieve the results of the query once.
     * @param {?=} options
     * @return {?}
     */
    get(options) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.query.get(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["observeOn"])(this.afs.schedulers.insideAngular));
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * The value of this token determines whether or not the firestore will have persistance enabled
 * @type {?}
 */
const ENABLE_PERSISTENCE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.enableFirestorePersistence');
/** @type {?} */
const PERSISTENCE_SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.persistenceSettings');
/** @type {?} */
const SETTINGS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('angularfire2.firestore.settings');
/**
 * A utility methods for associating a collection reference with
 * a query.
 *
 * @param {?} collectionRef - A collection reference to query
 * @param {?=} queryFn - The callback to create a query
 *
 * Example:
 * const { query, ref } = associateQuery(docRef.collection('items'), ref => {
 *  return ref.where('age', '<', 200);
 * });
 * @return {?}
 */
function associateQuery(collectionRef, queryFn = (/**
 * @param {?} ref
 * @return {?}
 */
ref => ref)) {
    /** @type {?} */
    const query = queryFn(collectionRef);
    /** @type {?} */
    const ref = collectionRef;
    return { query, ref };
}
/**
 * AngularFirestore Service
 *
 * This service is the main entry point for this feature module. It provides
 * an API for creating Collection and Reference services. These services can
 * then be used to do data updates and observable streams of the data.
 *
 * Example:
 *
 * import { Component } from '\@angular/core';
 * import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '\@angular/fire/firestore';
 * import { Observable } from 'rxjs/Observable';
 * import { from } from 'rxjs/observable';
 *
 * \@Component({
 *   selector: 'app-my-component',
 *   template: `
 *    <h2>Items for {{ (profile | async)?.name }}
 *    <ul>
 *       <li *ngFor="let item of items | async">{{ item.name }}</li>
 *    </ul>
 *    <div class="control-input">
 *       <input type="text" #itemname />
 *       <button (click)="addItem(itemname.value)">Add Item</button>
 *    </div>
 *   `
 * })
 * export class MyComponent implements OnInit {
 *
 *   // services for data operations and data streaming
 *   private readonly itemsRef: AngularFirestoreCollection<Item>;
 *   private readonly profileRef: AngularFirestoreDocument<Profile>;
 *
 *   // observables for template
 *   items: Observable<Item[]>;
 *   profile: Observable<Profile>;
 *
 *   // inject main service
 *   constructor(private readonly afs: AngularFirestore) {}
 *
 *   ngOnInit() {
 *     this.itemsRef = afs.collection('items', ref => ref.where('user', '==', 'davideast').limit(10));
 *     this.items = this.itemsRef.valueChanges().map(snap => snap.docs.map(data => doc.data()));
 *     // this.items = from(this.itemsRef); // you can also do this with no mapping
 *
 *     this.profileRef = afs.doc('users/davideast');
 *     this.profile = this.profileRef.valueChanges();
 *   }
 *
 *   addItem(name: string) {
 *     const user = 'davideast';
 *     this.itemsRef.add({ name, user });
 *   }
 * }
 */
class AngularFirestore {
    /**
     * Each Feature of AngularFire has a FirebaseApp injected. This way we
     * don't rely on the main Firebase App instance and we can create named
     * apps and use multiple apps.
     * @param {?} options
     * @param {?} nameOrConfig
     * @param {?} shouldEnablePersistence
     * @param {?} settings
     * @param {?} platformId
     * @param {?} zone
     * @param {?} persistenceSettings
     */
    constructor(options, nameOrConfig, shouldEnablePersistence, settings, 
    // tslint:disable-next-line:ban-types
    platformId, zone, persistenceSettings) {
        this.schedulers = new _angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵAngularFireSchedulers"](zone);
        this.keepUnstableUntilFirst = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵkeepUnstableUntilFirstFactory"])(this.schedulers);
        this.firestore = zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const app = Object(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["ɵfirebaseAppFactory"])(options, zone, nameOrConfig);
            // INVESTIGATE this seems to be required because in the browser build registerFirestore is an Object?
            //             seems like we're fighting ngcc. In the server firestore() isn't available, so I have to register
            //             in the browser registerFirestore is not a function... maybe this is an underlying firebase-js-sdk issue
            if (_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["registerFirestore"]) {
                Object(_firebase_firestore__WEBPACK_IMPORTED_MODULE_6__["registerFirestore"])(_firebase_app__WEBPACK_IMPORTED_MODULE_5___default.a);
            }
            /** @type {?} */
            const firestore = app.firestore();
            if (settings) {
                firestore.settings(settings);
            }
            return firestore;
        }));
        if (shouldEnablePersistence && !Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(platformId)) {
            // We need to try/catch here because not all enablePersistence() failures are caught
            // https://github.com/firebase/firebase-js-sdk/issues/608
            /** @type {?} */
            const enablePersistence = (/**
             * @return {?}
             */
            () => {
                try {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.firestore.enablePersistence(persistenceSettings || undefined).then((/**
                     * @return {?}
                     */
                    () => true), (/**
                     * @return {?}
                     */
                    () => false)));
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
                }
            });
            this.persistenceEnabled$ = zone.runOutsideAngular(enablePersistence);
        }
        else {
            this.persistenceEnabled$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false);
        }
    }
    /**
     * @template T
     * @param {?} pathOrRef
     * @param {?=} queryFn
     * @return {?}
     */
    collection(pathOrRef, queryFn) {
        /** @type {?} */
        let collectionRef;
        if (typeof pathOrRef === 'string') {
            collectionRef = this.firestore.collection(pathOrRef);
        }
        else {
            collectionRef = pathOrRef;
        }
        const { ref, query } = associateQuery(collectionRef, queryFn);
        /** @type {?} */
        const refInZone = this.schedulers.ngZone.run((/**
         * @return {?}
         */
        () => ref));
        return new AngularFirestoreCollection(refInZone, query, this);
    }
    /**
     * Create a reference to a Firestore Collection Group based on a collectionId
     * and an optional query function to narrow the result
     * set.
     * @template T
     * @param {?} collectionId
     * @param {?=} queryGroupFn
     * @return {?}
     */
    collectionGroup(collectionId, queryGroupFn) {
        /** @type {?} */
        const queryFn = queryGroupFn || ((/**
         * @param {?} ref
         * @return {?}
         */
        ref => ref));
        /** @type {?} */
        const collectionGroup = this.firestore.collectionGroup(collectionId);
        return new AngularFirestoreCollectionGroup(queryFn(collectionGroup), this);
    }
    /**
     * @template T
     * @param {?} pathOrRef
     * @return {?}
     */
    doc(pathOrRef) {
        /** @type {?} */
        let ref;
        if (typeof pathOrRef === 'string') {
            ref = this.firestore.doc(pathOrRef);
        }
        else {
            ref = pathOrRef;
        }
        /** @type {?} */
        const refInZone = this.schedulers.ngZone.run((/**
         * @return {?}
         */
        () => ref));
        return new AngularFirestoreDocument(refInZone, this);
    }
    /**
     * Returns a generated Firestore Document Id.
     * @return {?}
     */
    createId() {
        return this.firestore.collection('_').doc().id;
    }
}
AngularFirestore.ɵfac = function AngularFirestore_Factory(t) { return new (t || AngularFirestore)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ENABLE_PERSISTENCE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](SETTINGS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](PERSISTENCE_SETTINGS, 8)); };
/** @nocollapse */
AngularFirestore.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [ENABLE_PERSISTENCE,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SETTINGS,] }] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [PERSISTENCE_SETTINGS,] }] }
];
/** @nocollapse */ AngularFirestore.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AngularFirestore_Factory() { return new AngularFirestore(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"], 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ENABLE_PERSISTENCE, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(SETTINGS, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(PERSISTENCE_SETTINGS, 8)); }, token: AngularFirestore, providedIn: "any" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFirestore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'any'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_OPTIONS"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_fire__WEBPACK_IMPORTED_MODULE_3__["FIREBASE_APP_NAME"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [ENABLE_PERSISTENCE]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [SETTINGS]
            }] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [PERSISTENCE_SETTINGS]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AngularFirestoreModule {
    /**
     * Attempt to enable persistent storage, if possible
     * @param {?=} persistenceSettings
     * @return {?}
     */
    static enablePersistence(persistenceSettings) {
        return {
            ngModule: AngularFirestoreModule,
            providers: [
                { provide: ENABLE_PERSISTENCE, useValue: true },
                { provide: PERSISTENCE_SETTINGS, useValue: persistenceSettings },
            ]
        };
    }
}
AngularFirestoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularFirestoreModule });
AngularFirestoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularFirestoreModule_Factory(t) { return new (t || AngularFirestoreModule)(); }, providers: [AngularFirestore] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularFirestoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [AngularFirestore]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DocumentSnapshotExists() { }
if (false) {}
/**
 * @record
 */
function DocumentSnapshotDoesNotExist() { }
if (false) {}
/**
 * @record
 * @template T
 */
function QueryDocumentSnapshot() { }
if (false) {}
/**
 * @record
 * @template T
 */
function QuerySnapshot() { }
if (false) {}
/**
 * @record
 * @template T
 */
function DocumentChange() { }
if (false) {}
/**
 * @record
 * @template T
 */
function DocumentChangeAction() { }
if (false) {}
/**
 * @record
 * @template T
 */
function Action() { }
if (false) {}
/**
 * @record
 * @template T
 */
function Reference() { }
if (false) {}
/**
 * A structure that provides an association between a reference
 * and a query on that reference. Note: Performing operations
 * on the reference can lead to confusing results with complicated
 * queries.
 *
 * Example:
 *
 * const query = ref.where('type', '==', 'Book').
 *                  .where('price', '>' 18.00)
 *                  .where('price', '<' 100.00)
 *                  .where('category', '==', 'Fiction')
 *                  .where('publisher', '==', 'BigPublisher')
 *
 * // This addition would not be a result of the query above
 * ref.add({
 *  type: 'Magazine',
 *  price: 4.99,
 *  category: 'Sports',
 *  publisher: 'SportsPublisher'
 * });
 * @record
 */
function AssociatedReference() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-fire-firestore.js.map

/***/ }),

/***/ "./node_modules/@firebase/firestore/dist/index.cjs.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/firestore/dist/index.cjs.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = __webpack_require__(/*! tslib */ "./node_modules/@firebase/app/node_modules/tslib/tslib.es6.js"), e = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.cjs.js"), n = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js"), r = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.cjs.js"), i = __webpack_require__(/*! @firebase/webchannel-wrapper */ "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js"), o = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.cjs.js");

function s(t) {
    return t && "object" == typeof t && "default" in t ? t : {
        default: t
    };
}

var u =  s(e), a = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
}, c = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, n) || this).code = t, r.message = n, r.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function() {
            return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
    }
    return t.__extends(n, e), n;
}(Error), h = new n.Logger("@firebase/firestore");

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Converts a Base64 encoded string to a binary string. */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Helper methods are needed because variables can't be exported as read/write
function f() {
    return h.logLevel;
}

function l(e) {
    for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
    if (h.logLevel <= n.LogLevel.DEBUG) {
        var o = r.map(v);
        h.debug.apply(h, t.__spreadArrays([ "Firestore (7.20.0): " + e ], o));
    }
}

function p(e) {
    for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
    if (h.logLevel <= n.LogLevel.ERROR) {
        var o = r.map(v);
        h.error.apply(h, t.__spreadArrays([ "Firestore (7.20.0): " + e ], o));
    }
}

function d(e) {
    for (var r = [], i = 1; i < arguments.length; i++) r[i - 1] = arguments[i];
    if (h.logLevel <= n.LogLevel.WARN) {
        var o = r.map(v);
        h.warn.apply(h, t.__spreadArrays([ "Firestore (7.20.0): " + e ], o));
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function v(t) {
    if ("string" == typeof t) return t;
    try {
        return e = t, JSON.stringify(e);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /** Formats an object as a JSON string, suitable for logging. */    var e;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function y(t) {
    void 0 === t && (t = "Unexpected state");
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
        var e = "FIRESTORE (7.20.0) INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
        throw p(e), new Error(e)
    /**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */;
}

function g(t, e) {
    t || y();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function m(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    return t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function w(t) {
    var e = 0;
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function _(t, e) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function b(t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Path represents an ordered sequence of string segments.
 */ var I = /** @class */ function() {
    function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && y(), void 0 === n ? n = t.length - e : n > t.length - e && y(), 
        this.segments = t, this.offset = e, this.t = n;
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.t;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return 0 === t.i(this, e);
    }, t.prototype.child = function(e) {
        var n = this.segments.slice(this.offset, this.limit());
        return e instanceof t ? e.forEach((function(t) {
            n.push(t);
        })) : n.push(e), this.o(n);
    }, 
    /** The index of one past the last segment of the path. */ t.prototype.limit = function() {
        return this.offset + this.length;
    }, t.prototype.u = function(t) {
        return t = void 0 === t ? 1 : t, this.o(this.segments, this.offset + t, this.length - t);
    }, t.prototype.h = function() {
        return this.o(this.segments, this.offset, this.length - 1);
    }, t.prototype.l = function() {
        return this.segments[this.offset];
    }, t.prototype._ = function() {
        return this.get(this.length - 1);
    }, t.prototype.get = function(t) {
        return this.segments[this.offset + t];
    }, t.prototype.m = function() {
        return 0 === this.length;
    }, t.prototype.T = function(t) {
        if (t.length < this.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.I = function(t) {
        if (this.length + 1 !== t.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.forEach = function(t) {
        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }, t.prototype.A = function() {
        return this.segments.slice(this.offset, this.limit());
    }, t.i = function(t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r), o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }, t;
}(), E = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t.__extends(n, e), n.prototype.o = function(t, e, r) {
        return new n(t, e, r);
    }, n.prototype.R = function() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.A().join("/");
    }, n.prototype.toString = function() {
        return this.R();
    }, 
    /**
     * Creates a resource path from the given slash-delimited string.
     */
    n.P = function(t) {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        if (t.indexOf("//") >= 0) throw new c(a.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
        // We may still have an empty segment at the beginning or end if they had a
        // leading or trailing slash (which we allow).
                return new n(t.split("/").filter((function(t) {
            return t.length > 0;
        })));
    }, n.g = function() {
        return new n([]);
    }, n;
}(I), T = /^[_a-zA-Z][_a-zA-Z0-9]*$/, A = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t.__extends(n, e), n.prototype.o = function(t, e, r) {
        return new n(t, e, r);
    }, 
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    n.V = function(t) {
        return T.test(t);
    }, n.prototype.R = function() {
        return this.A().map((function(t) {
            return t = t.replace("\\", "\\\\").replace("`", "\\`"), n.V(t) || (t = "`" + t + "`"), 
            t;
        })).join(".");
    }, n.prototype.toString = function() {
        return this.R();
    }, 
    /**
     * Returns true if this field references the key of a document.
     */
    n.prototype.p = function() {
        return 1 === this.length && "__name__" === this.get(0);
    }, 
    /**
     * The field designating the key of a document.
     */
    n.v = function() {
        return new n([ "__name__" ]);
    }, 
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    n.S = function(t) {
        for (var e = [], r = "", i = 0, o = function() {
            if (0 === r.length) throw new c(a.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            e.push(r), r = "";
        }, s = !1; i < t.length; ) {
            var u = t[i];
            if ("\\" === u) {
                if (i + 1 === t.length) throw new c(a.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                var h = t[i + 1];
                if ("\\" !== h && "." !== h && "`" !== h) throw new c(a.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                r += h, i += 2;
            } else "`" === u ? (s = !s, i++) : "." !== u || s ? (r += u, i++) : (o(), i++);
        }
        if (o(), s) throw new c(a.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new n(e);
    }, n.g = function() {
        return new n([]);
    }, n;
}(I), N = /** @class */ function() {
    function t(t) {
        this.path = t;
    }
    return t.D = function(e) {
        return new t(E.P(e));
    }, t.C = function(e) {
        return new t(E.P(e).u(5));
    }, 
    /** Returns true if the document is in the specified collectionId. */ t.prototype.N = function(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }, t.prototype.isEqual = function(t) {
        return null !== t && 0 === E.i(this.path, t.path);
    }, t.prototype.toString = function() {
        return this.path.toString();
    }, t.i = function(t, e) {
        return E.i(t.path, e.path);
    }, t.F = function(t) {
        return t.length % 2 == 0;
    }, 
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments The segments of the path to the document
     * @return A new instance of DocumentKey
     */
    t.$ = function(e) {
        return new t(new E(e.slice()));
    }, t;
}();

/**
 * A slash-separated path for navigating resources (documents and collections)
 * within Firestore.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Validates that no arguments were passed in the invocation of functionName.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateNoArgs('myFunction', arguments);
 */
function D(t, e) {
    if (0 !== e.length) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + Q(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has the exact number of arguments.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateExactNumberOfArgs('myFunction', arguments, 2);
 */ function S(t, e, n) {
    if (e.length !== n) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires " + Q(n, "argument") + ", but was called with " + Q(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has at least the provided number of
 * arguments (but can have many more).
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateAtLeastNumberOfArgs('myFunction', arguments, 2);
 */ function x(t, e, n) {
    if (e.length < n) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires at least " + Q(n, "argument") + ", but was called with " + Q(e.length, "argument") + ".");
}

/**
 * Validates the invocation of functionName has number of arguments between
 * the values provided.
 *
 * Forward the magic "arguments" variable as second parameter on which the
 * parameter validation is performed:
 * validateBetweenNumberOfArgs('myFunction', arguments, 2, 3);
 */ function k(t, e, n, r) {
    if (e.length < n || e.length > r) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + Q(e.length, "argument") + ".");
}

/**
 * Validates the provided argument is an array and has as least the expected
 * number of elements.
 */
/**
 * Validates the provided positional argument has the native JavaScript type
 * using typeof checks.
 */ function L(t, e, n, r) {
    C(t, e, G(n) + " argument", r);
}

/**
 * Validates the provided argument has the native JavaScript type using
 * typeof checks or is undefined.
 */ function R(t, e, n, r) {
    void 0 !== r && L(t, e, n, r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks.
 */ function O(t, e, n, r) {
    C(t, e, n + " option", r);
}

/**
 * Validates the provided named option has the native JavaScript type using
 * typeof checks or is undefined.
 */ function U(t, e, n, r) {
    void 0 !== r && O(t, e, n, r);
}

/**
 * Validates that the provided named option equals one of the expected values.
 */
/**
 * Validates that the provided named option equals one of the expected values or
 * is undefined.
 */
function P(t, e, n, r, i) {
    void 0 !== r && function(t, e, n, r, i) {
        for (var o = [], s = 0, u = i; s < u.length; s++) {
            var h = u[s];
            if (h === r) return;
            o.push(F(h));
        }
        var f = F(r);
        throw new c(a.INVALID_ARGUMENT, "Invalid value " + f + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + o.join(", "));
    }(t, 0, n, r, i);
}

/**
 * Validates that the provided argument is a valid enum.
 *
 * @param functionName Function making the validation call.
 * @param enums Array containing all possible values for the enum.
 * @param position Position of the argument in `functionName`.
 * @param argument Argument to validate.
 * @return The value as T if the argument can be converted.
 */ function V(t, e, n, r) {
    if (!e.some((function(t) {
        return t === r;
    }))) throw new c(a.INVALID_ARGUMENT, "Invalid value " + F(r) + " provided to function " + t + "() for its " + G(n) + " argument. Acceptable values: " + e.join(", "));
    return r;
}

/** Helper to validate the type of a provided input. */ function C(t, e, n, r) {
    if (!("object" === e ? M(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) {
        var i = F(r);
        throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i);
    }
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */ function M(t) {
    return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
}

/** Returns a string describing the type / value of the provided input. */ function F(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        var e = 
        /** Hacky method to try to get the constructor name for an object. */
        function(t) {
            if (t.constructor) {
                var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                if (e && e.length > 1) return e[1];
            }
            return null;
        }(t);
        return e ? "a custom " + e + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : y();
}

function q(t, e, n) {
    if (void 0 === n) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + G(e) + " argument, but it was undefined.");
}

/**
 * Validates the provided positional argument is an object, and its keys and
 * values match the expected keys and types provided in optionTypes.
 */ function j(t, e, n) {
    _(e, (function(e, r) {
        if (n.indexOf(e) < 0) throw new c(a.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "));
    }));
}

/**
 * Helper method to throw an error that the provided argument did not pass
 * an instanceof check.
 */ function z(t, e, n, r) {
    var i = F(r);
    return new c(a.INVALID_ARGUMENT, "Function " + t + "() requires its " + G(n) + " argument to be a " + e + ", but it was: " + i);
}

function B(t, e, n) {
    if (n <= 0) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires its " + G(e) + " argument to be a positive number, but it was: " + n + ".");
}

/** Converts a number to its english word representation */ function G(t) {
    switch (t) {
      case 1:
        return "first";

      case 2:
        return "second";

      case 3:
        return "third";

      default:
        return t + "th";
    }
}

/**
 * Formats the given word as plural conditionally given the preceding number.
 */ function Q(t, e) {
    return t + " " + e + (1 === t ? "" : "s");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function W(t) {
    // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
    var e = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
    if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n); else 
    // Falls back to Math.random
    for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
    return n;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var K = /** @class */ function() {
    function t() {}
    return t.k = function() {
        for (
        // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""
        // The largest byte value that is a multiple of `char.length`.
        ; n.length < 20; ) for (var r = W(40), i = 0; i < r.length; ++i) 
        // Only accept values that are [0, maxMultiple), this ensures they can
        // be evenly mapped to indices of `chars` via a modulo operation.
        n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
        return n;
    }, t;
}();

function H(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function Y(t, e, n) {
    return t.length === e.length && t.every((function(t, r) {
        return n(t, e[r]);
    }));
}

/**
 * Returns the immediate lexicographically-following string. This is useful to
 * construct an inclusive range for indexeddb iterators.
 */ function $(t) {
    // Return the input string, with an additional NUL byte appended.
    return t + "\0";
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */ var X = /** @class */ function() {
    function t(t) {
        this.M = t;
    }
    return t.fromBase64String = function(e) {
        return new t(atob(e));
    }, t.fromUint8Array = function(e) {
        return new t(
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }(e));
    }, t.prototype.toBase64 = function() {
        return t = this.M, btoa(t);
        /** Converts a binary string to a Base64 encoded string. */        var t;
        /** True if and only if the Base64 conversion functions are available. */    }, 
    t.prototype.toUint8Array = function() {
        return function(t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }(this.M);
    }, t.prototype.O = function() {
        return 2 * this.M.length;
    }, t.prototype.L = function(t) {
        return H(this.M, t.M);
    }, t.prototype.isEqual = function(t) {
        return this.M === t.M;
    }, t;
}();

X.B = new X("");

var Z = /** @class */ function() {
    function t(t) {
        this.q = t;
    }
    return t.fromBase64String = function(e) {
        try {
            return new t(X.fromBase64String(e));
        } catch (e) {
            throw new c(a.INVALID_ARGUMENT, "Failed to construct Bytes from Base64 string: " + e);
        }
    }, t.fromUint8Array = function(e) {
        return new t(X.fromUint8Array(e));
    }, t.prototype.toBase64 = function() {
        return this.q.toBase64();
    }, t.prototype.toUint8Array = function() {
        return this.q.toUint8Array();
    }, t.prototype.toString = function() {
        return "Bytes(base64: " + this.toBase64() + ")";
    }, t.prototype.isEqual = function(t) {
        return this.q.isEqual(t.q);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Helper function to assert Uint8Array is available at runtime. */ function J() {
    if ("undefined" == typeof Uint8Array) throw new c(a.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function tt() {
    if ("undefined" == typeof atob) throw new c(a.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/**
 * Immutable class holding a blob (binary data).
 *
 * This class is directly exposed in the public API. It extends the Bytes class
 * of the firestore-exp API to support `instanceof Bytes` checks during user
 * data conversion.
 *
 * Note that while you can't hide the constructor in JavaScript code, we are
 * using the hack above to make sure no-one outside this module can call it.
 */ var et = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t.__extends(n, e), n.fromBase64String = function(t) {
        S("Blob.fromBase64String", arguments, 1), L("Blob.fromBase64String", "string", 1, t), 
        tt();
        try {
            return new n(X.fromBase64String(t));
        } catch (t) {
            throw new c(a.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t);
        }
    }, n.fromUint8Array = function(t) {
        if (S("Blob.fromUint8Array", arguments, 1), J(), !(t instanceof Uint8Array)) throw z("Blob.fromUint8Array", "Uint8Array", 1, t);
        return new n(X.fromUint8Array(t));
    }, n.prototype.toBase64 = function() {
        return S("Blob.toBase64", arguments, 0), tt(), e.prototype.toBase64.call(this);
    }, n.prototype.toUint8Array = function() {
        return S("Blob.toUint8Array", arguments, 0), J(), e.prototype.toUint8Array.call(this);
    }, n.prototype.toString = function() {
        return "Blob(base64: " + this.toBase64() + ")";
    }, n;
}(Z), nt = 
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId The database to use.
     * @param persistenceKey A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host The Firestore backend host to connect to.
     * @param ssl Whether to use SSL when connecting.
     * @param forceLongPolling Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     */
function(t, e, n, r, i) {
    this.U = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i;
}, rt = /** @class */ function() {
    function t(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    return Object.defineProperty(t.prototype, "W", {
        get: function() {
            return "(default)" === this.database;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return e instanceof t && e.projectId === this.projectId && e.database === this.database;
    }, t.prototype.L = function(t) {
        return H(this.projectId, t.projectId) || H(this.database, t.database);
    }, t;
}(), it = /** @class */ function() {
    function t(t, e) {
        this.j = t, this.K = e, 
        /**
             * The inner map for a key -> value pair. Due to the possibility of
             * collisions we keep a list of entries that we do a linear search through
             * to find an actual match. Note that collisions should be rare, so we still
             * expect near constant time lookups in practice.
             */
        this.G = {}
        /** Get a value for this key, or undefined if it does not exist. */;
    }
    return t.prototype.get = function(t) {
        var e = this.j(t), n = this.G[e];
        if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r], s = o[0], u = o[1];
            if (this.K(s, t)) return u;
        }
    }, t.prototype.has = function(t) {
        return void 0 !== this.get(t);
    }, 
    /** Put this key and value in the map. */ t.prototype.set = function(t, e) {
        var n = this.j(t), r = this.G[n];
        if (void 0 !== r) {
            for (var i = 0; i < r.length; i++) if (this.K(r[i][0], t)) return void (r[i] = [ t, e ]);
            r.push([ t, e ]);
        } else this.G[n] = [ [ t, e ] ];
    }, 
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    t.prototype.delete = function(t) {
        var e = this.j(t), n = this.G[e];
        if (void 0 === n) return !1;
        for (var r = 0; r < n.length; r++) if (this.K(n[r][0], t)) return 1 === n.length ? delete this.G[e] : n.splice(r, 1), 
        !0;
        return !1;
    }, t.prototype.forEach = function(t) {
        _(this.G, (function(e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
                var o = i[r], s = o[0], u = o[1];
                t(s, u);
            }
        }));
    }, t.prototype.m = function() {
        return b(this.G);
    }, t;
}(), ot = /** @class */ function() {
    function t(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new c(a.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new c(a.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new c(a.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new c(a.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    return t.now = function() {
        return t.fromMillis(Date.now());
    }, t.fromDate = function(e) {
        return t.fromMillis(e.getTime());
    }, t.fromMillis = function(e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
    }, t.prototype.toDate = function() {
        return new Date(this.toMillis());
    }, t.prototype.toMillis = function() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }, t.prototype.H = function(t) {
        return this.seconds === t.seconds ? H(this.nanoseconds, t.nanoseconds) : H(this.seconds, t.seconds);
    }, t.prototype.isEqual = function(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }, t.prototype.toString = function() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }, t.prototype.toJSON = function() {
        return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
        };
    }, t.prototype.valueOf = function() {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }, t;
}(), st = /** @class */ function() {
    function t(t) {
        this.timestamp = t;
    }
    return t.Y = function(e) {
        return new t(e);
    }, t.min = function() {
        return new t(new ot(0, 0));
    }, t.prototype.L = function(t) {
        return this.timestamp.H(t.timestamp);
    }, t.prototype.isEqual = function(t) {
        return this.timestamp.isEqual(t.timestamp);
    }, 
    /** Returns a number representation of the version for use in spec tests. */ t.prototype.J = function() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.X = function() {
        return this.timestamp;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns whether a variable is either undefined or null.
 */
function ut(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function at(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return -0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value The value to test for being an integer and in the safe range
 */ function ct(t) {
    return "number" == typeof t && Number.isInteger(t) && !at(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Visible for testing
var ht = function(t, e, n, r, i, o, s) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
    this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, 
    this.startAt = o, this.endAt = s, this.Z = null;
};

/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */ function ft(t, e, n, r, i, o, s) {
    return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), 
    new ht(t, e, n, r, i, o, s);
}

function lt(t) {
    var e = m(t);
    if (null === e.Z) {
        var n = e.path.R();
        null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map((function(t) {
            return function(t) {
                // TODO(b/29183165): Technically, this won't be unique if two values have
                // the same description, such as the int 3 and the string "3". So we should
                // add the types in here somehow, too.
                return t.field.R() + t.op.toString() + ne(t.value);
            }(t);
        })).join(","), n += "|ob:", n += e.orderBy.map((function(t) {
            return (e = t).field.R() + e.dir;
            var e;
        })).join(","), ut(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", 
        n += or(e.startAt)), e.endAt && (n += "|ub:", n += or(e.endAt)), e.Z = n;
    }
    return e.Z;
}

function pt(t, e) {
    if (t.limit !== e.limit) return !1;
    if (t.orderBy.length !== e.orderBy.length) return !1;
    for (var n = 0; n < t.orderBy.length; n++) if (!hr(t.orderBy[n], e.orderBy[n])) return !1;
    if (t.filters.length !== e.filters.length) return !1;
    for (var r = 0; r < t.filters.length; r++) if (i = t.filters[r], o = e.filters[r], 
    i.op !== o.op || !i.field.isEqual(o.field) || !Zt(i.value, o.value)) return !1;
    var i, o;
    return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!ur(t.startAt, e.startAt) && ur(t.endAt, e.endAt);
}

function dt(t) {
    return N.F(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable set of metadata that the local store tracks for each target.
 */ var vt, yt, gt = /** @class */ function() {
    function t(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    r, 
    /** The latest snapshot version seen for this target. */
    i
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , o
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , s) {
        void 0 === i && (i = st.min()), void 0 === o && (o = st.min()), void 0 === s && (s = X.B), 
        this.target = t, this.targetId = e, this.tt = n, this.sequenceNumber = r, this.et = i, 
        this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s;
    }
    /** Creates a new target data instance with an updated sequence number. */    return t.prototype.nt = function(e) {
        return new t(this.target, this.targetId, this.tt, e, this.et, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, 
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.st = function(e, n) {
        return new t(this.target, this.targetId, this.tt, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
    }, 
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.it = function(e) {
        return new t(this.target, this.targetId, this.tt, this.sequenceNumber, this.et, e, this.resumeToken);
    }, t;
}(), mt = 
// TODO(b/33078163): just use simplest form of existence filter for now
function(t) {
    this.count = t;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function wt(t) {
    switch (t) {
      case a.OK:
        return y();

      case a.CANCELLED:
      case a.UNKNOWN:
      case a.DEADLINE_EXCEEDED:
      case a.RESOURCE_EXHAUSTED:
      case a.INTERNAL:
      case a.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case a.UNAUTHENTICATED:
        return !1;

      case a.INVALID_ARGUMENT:
      case a.NOT_FOUND:
      case a.ALREADY_EXISTS:
      case a.PERMISSION_DENIED:
      case a.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case a.ABORTED:
      case a.OUT_OF_RANGE:
      case a.UNIMPLEMENTED:
      case a.DATA_LOSS:
        return !0;

      default:
        return y();
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */ function _t(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return p("GRPC error has no .code"), a.UNKNOWN;
    switch (t) {
      case vt.OK:
        return a.OK;

      case vt.CANCELLED:
        return a.CANCELLED;

      case vt.UNKNOWN:
        return a.UNKNOWN;

      case vt.DEADLINE_EXCEEDED:
        return a.DEADLINE_EXCEEDED;

      case vt.RESOURCE_EXHAUSTED:
        return a.RESOURCE_EXHAUSTED;

      case vt.INTERNAL:
        return a.INTERNAL;

      case vt.UNAVAILABLE:
        return a.UNAVAILABLE;

      case vt.UNAUTHENTICATED:
        return a.UNAUTHENTICATED;

      case vt.INVALID_ARGUMENT:
        return a.INVALID_ARGUMENT;

      case vt.NOT_FOUND:
        return a.NOT_FOUND;

      case vt.ALREADY_EXISTS:
        return a.ALREADY_EXISTS;

      case vt.PERMISSION_DENIED:
        return a.PERMISSION_DENIED;

      case vt.FAILED_PRECONDITION:
        return a.FAILED_PRECONDITION;

      case vt.ABORTED:
        return a.ABORTED;

      case vt.OUT_OF_RANGE:
        return a.OUT_OF_RANGE;

      case vt.UNIMPLEMENTED:
        return a.UNIMPLEMENTED;

      case vt.DATA_LOSS:
        return a.DATA_LOSS;

      default:
        return y();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (yt = vt || (vt = {}))[yt.OK = 0] = "OK", yt[yt.CANCELLED = 1] = "CANCELLED", 
yt[yt.UNKNOWN = 2] = "UNKNOWN", yt[yt.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
yt[yt.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", yt[yt.NOT_FOUND = 5] = "NOT_FOUND", 
yt[yt.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", yt[yt.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
yt[yt.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", yt[yt.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
yt[yt.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", yt[yt.ABORTED = 10] = "ABORTED", 
yt[yt.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", yt[yt.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
yt[yt.INTERNAL = 13] = "INTERNAL", yt[yt.UNAVAILABLE = 14] = "UNAVAILABLE", yt[yt.DATA_LOSS = 15] = "DATA_LOSS";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
var bt = /** @class */ function() {
    function t(t, e) {
        this.i = t, this.root = e || Et.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
        return t.prototype.rt = function(e, n) {
        return new t(this.i, this.root.rt(e, n, this.i).copy(null, null, Et.ot, null, null));
    }, 
    // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(e) {
        return new t(this.i, this.root.remove(e, this.i).copy(null, null, Et.ot, null, null));
    }, 
    // Returns the value of the node with the given key, or null.
    t.prototype.get = function(t) {
        for (var e = this.root; !e.m(); ) {
            var n = this.i(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }, 
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    t.prototype.indexOf = function(t) {
        for (
        // Number of nodes that were pruned when descending right
        var e = 0, n = this.root; !n.m(); ) {
            var r = this.i(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }, t.prototype.m = function() {
        return this.root.m();
    }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function() {
            return this.root.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns the minimum key in the map.
    t.prototype.at = function() {
        return this.root.at();
    }, 
    // Returns the maximum key in the map.
    t.prototype.ct = function() {
        return this.root.ct();
    }, 
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ut = function(t) {
        return this.root.ut(t);
    }, t.prototype.forEach = function(t) {
        this.ut((function(e, n) {
            return t(e, n), !1;
        }));
    }, t.prototype.toString = function() {
        var t = [];
        return this.ut((function(e, n) {
            return t.push(e + ":" + n), !1;
        })), "{" + t.join(", ") + "}";
    }, 
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ht = function(t) {
        return this.root.ht(t);
    }, 
    // Returns an iterator over the SortedMap.
    t.prototype.lt = function() {
        return new It(this.root, null, this.i, !1);
    }, t.prototype._t = function(t) {
        return new It(this.root, t, this.i, !1);
    }, t.prototype.ft = function() {
        return new It(this.root, null, this.i, !0);
    }, t.prototype.dt = function(t) {
        return new It(this.root, t, this.i, !0);
    }, t;
}(), It = /** @class */ function() {
    function t(t, e, n, r) {
        this.wt = r, this.Tt = [];
        for (var i = 1; !t.m(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        r && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this.wt ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.Tt.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
                        this.Tt.push(t), t = this.wt ? t.right : t.left;
        }
    }
    return t.prototype.Et = function() {
        var t = this.Tt.pop(), e = {
            key: t.key,
            value: t.value
        };
        if (this.wt) for (t = t.left; !t.m(); ) this.Tt.push(t), t = t.right; else for (t = t.right; !t.m(); ) this.Tt.push(t), 
        t = t.left;
        return e;
    }, t.prototype.It = function() {
        return this.Tt.length > 0;
    }, t.prototype.At = function() {
        if (0 === this.Tt.length) return null;
        var t = this.Tt[this.Tt.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }, t;
}(), Et = /** @class */ function() {
    function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, 
        this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
        return t.prototype.copy = function(e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
    }, t.prototype.m = function() {
        return !1;
    }, 
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ut = function(t) {
        return this.left.ut(t) || t(this.key, this.value) || this.right.ut(t);
    }, 
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.ht = function(t) {
        return this.right.ht(t) || t(this.key, this.value) || this.left.ht(t);
    }, 
    // Returns the minimum node in the tree.
    t.prototype.min = function() {
        return this.left.m() ? this : this.left.min();
    }, 
    // Returns the maximum key in the tree.
    t.prototype.at = function() {
        return this.min().key;
    }, 
    // Returns the maximum key in the tree.
    t.prototype.ct = function() {
        return this.right.m() ? this.key : this.right.ct();
    }, 
    // Returns new tree, with the key/value added.
    t.prototype.rt = function(t, e, n) {
        var r = this, i = n(t, r.key);
        return (r = i < 0 ? r.copy(null, null, null, r.left.rt(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.rt(t, e, n))).Rt();
    }, t.prototype.Pt = function() {
        if (this.left.m()) return t.EMPTY;
        var e = this;
        return e.left.gt() || e.left.left.gt() || (e = e.yt()), (e = e.copy(null, null, null, e.left.Pt(), null)).Rt();
    }, 
    // Returns new tree, with the specified item removed.
    t.prototype.remove = function(e, n) {
        var r, i = this;
        if (n(e, i.key) < 0) i.left.m() || i.left.gt() || i.left.left.gt() || (i = i.yt()), 
        i = i.copy(null, null, null, i.left.remove(e, n), null); else {
            if (i.left.gt() && (i = i.Vt()), i.right.m() || i.right.gt() || i.right.left.gt() || (i = i.bt()), 
            0 === n(e, i.key)) {
                if (i.right.m()) return t.EMPTY;
                r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.Pt());
            }
            i = i.copy(null, null, null, null, i.right.remove(e, n));
        }
        return i.Rt();
    }, t.prototype.gt = function() {
        return this.color;
    }, 
    // Returns new tree after performing any needed rotations.
    t.prototype.Rt = function() {
        var t = this;
        return t.right.gt() && !t.left.gt() && (t = t.vt()), t.left.gt() && t.left.left.gt() && (t = t.Vt()), 
        t.left.gt() && t.right.gt() && (t = t.St()), t;
    }, t.prototype.yt = function() {
        var t = this.St();
        return t.right.left.gt() && (t = (t = (t = t.copy(null, null, null, null, t.right.Vt())).vt()).St()), 
        t;
    }, t.prototype.bt = function() {
        var t = this.St();
        return t.left.left.gt() && (t = (t = t.Vt()).St()), t;
    }, t.prototype.vt = function() {
        var e = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null);
    }, t.prototype.Vt = function() {
        var e = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e);
    }, t.prototype.St = function() {
        var t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
    }, 
    // For testing.
    t.prototype.Dt = function() {
        var t = this.Ct();
        return Math.pow(2, t) <= this.size + 1;
    }, 
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.Ct = function() {
        if (this.gt() && this.left.gt()) throw y();
        if (this.right.gt()) throw y();
        var t = this.left.Ct();
        if (t !== this.right.Ct()) throw y();
        return t + (this.gt() ? 0 : 1);
    }, t;
}();

// end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
Et.EMPTY = null, Et.RED = !0, Et.ot = !1, 
// end LLRBEmptyNode
Et.EMPTY = new (/** @class */ function() {
    function t() {
        this.size = 0;
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function() {
            throw y();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "value", {
        get: function() {
            throw y();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            throw y();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "left", {
        get: function() {
            throw y();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            throw y();
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns a copy of the current node.
    t.prototype.copy = function(t, e, n, r, i) {
        return this;
    }, 
    // Returns a copy of the tree, with the specified key/value added.
    t.prototype.rt = function(t, e, n) {
        return new Et(t, e);
    }, 
    // Returns a copy of the tree, with the specified key removed.
    t.prototype.remove = function(t, e) {
        return this;
    }, t.prototype.m = function() {
        return !0;
    }, t.prototype.ut = function(t) {
        return !1;
    }, t.prototype.ht = function(t) {
        return !1;
    }, t.prototype.at = function() {
        return null;
    }, t.prototype.ct = function() {
        return null;
    }, t.prototype.gt = function() {
        return !1;
    }, 
    // For testing.
    t.prototype.Dt = function() {
        return !0;
    }, t.prototype.Ct = function() {
        return 0;
    }, t;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var Tt = /** @class */ function() {
    function t(t) {
        this.i = t, this.data = new bt(this.i);
    }
    return t.prototype.has = function(t) {
        return null !== this.data.get(t);
    }, t.prototype.first = function() {
        return this.data.at();
    }, t.prototype.last = function() {
        return this.data.ct();
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.data.size;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.indexOf = function(t) {
        return this.data.indexOf(t);
    }, 
    /** Iterates elements in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.data.ut((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Iterates over `elem`s such that: range[0] <= elem < range[1]. */ t.prototype.Nt = function(t, e) {
        for (var n = this.data._t(t[0]); n.It(); ) {
            var r = n.Et();
            if (this.i(r.key, t[1]) >= 0) return;
            e(r.key);
        }
    }, 
    /**
     * Iterates over `elem`s such that: start <= elem until false is returned.
     */
    t.prototype.Ft = function(t, e) {
        var n;
        for (n = void 0 !== e ? this.data._t(e) : this.data.lt(); n.It(); ) if (!t(n.Et().key)) return;
    }, 
    /** Finds the least element greater than or equal to `elem`. */ t.prototype.$t = function(t) {
        var e = this.data._t(t);
        return e.It() ? e.Et().key : null;
    }, t.prototype.lt = function() {
        return new At(this.data.lt());
    }, t.prototype._t = function(t) {
        return new At(this.data._t(t));
    }, 
    /** Inserts or updates an element */ t.prototype.add = function(t) {
        return this.copy(this.data.remove(t).rt(t, !0));
    }, 
    /** Deletes an element */ t.prototype.delete = function(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }, t.prototype.m = function() {
        return this.data.m();
    }, t.prototype.xt = function(t) {
        var e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((function(t) {
            e = e.add(t);
        })), e;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.data.lt(), r = e.data.lt(); n.It(); ) {
            var i = n.Et().key, o = r.Et().key;
            if (0 !== this.i(i, o)) return !1;
        }
        return !0;
    }, t.prototype.A = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e);
        })), t;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            return t.push(e);
        })), "SortedSet(" + t.toString() + ")";
    }, t.prototype.copy = function(e) {
        var n = new t(this.i);
        return n.data = e, n;
    }, t;
}(), At = /** @class */ function() {
    function t(t) {
        this.kt = t;
    }
    return t.prototype.Et = function() {
        return this.kt.Et().key;
    }, t.prototype.It = function() {
        return this.kt.It();
    }, t;
}(), Nt = new bt(N.i);

function Dt() {
    return Nt;
}

function St() {
    return Dt();
}

var xt = new bt(N.i);

function kt() {
    return xt;
}

var Lt = new bt(N.i), Rt = new Tt(N.i);

function Ot() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = Rt, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
    }
    return n;
}

var Ut = new Tt(H);

function Pt() {
    return Ut;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ var Vt = /** @class */ function() {
    /** The default ordering is by key if the comparator is omitted */
    function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.i = t ? function(e, n) {
            return t(e, n) || N.i(e.key, n.key);
        } : function(t, e) {
            return N.i(t.key, e.key);
        }, this.Mt = kt(), this.Ot = new bt(this.i)
        /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */;
    }
    return t.Lt = function(e) {
        return new t(e.i);
    }, t.prototype.has = function(t) {
        return null != this.Mt.get(t);
    }, t.prototype.get = function(t) {
        return this.Mt.get(t);
    }, t.prototype.first = function() {
        return this.Ot.at();
    }, t.prototype.last = function() {
        return this.Ot.ct();
    }, t.prototype.m = function() {
        return this.Ot.m();
    }, 
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t) {
        var e = this.Mt.get(t);
        return e ? this.Ot.indexOf(e) : -1;
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.Ot.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Iterates documents in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.Ot.ut((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Inserts or updates a document with the same key */ t.prototype.add = function(t) {
        // First remove the element if we have it.
        var e = this.delete(t.key);
        return e.copy(e.Mt.rt(t.key, t), e.Ot.rt(t, null));
    }, 
    /** Deletes a document with a given key */ t.prototype.delete = function(t) {
        var e = this.get(t);
        return e ? this.copy(this.Mt.remove(t), this.Ot.remove(e)) : this;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.Ot.lt(), r = e.Ot.lt(); n.It(); ) {
            var i = n.Et().key, o = r.Et().key;
            if (!i.isEqual(o)) return !1;
        }
        return !0;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }, t.prototype.copy = function(e, n) {
        var r = new t;
        return r.i = this.i, r.Mt = e, r.Ot = n, r;
    }, t;
}(), Ct = /** @class */ function() {
    function t() {
        this.Bt = new bt(N.i);
    }
    return t.prototype.track = function(t) {
        var e = t.doc.key, n = this.Bt.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.Bt = this.Bt.rt(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.Bt = this.Bt.rt(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.Bt = this.Bt.rt(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.Bt = this.Bt.rt(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.Bt = this.Bt.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.Bt = this.Bt.rt(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.Bt = this.Bt.rt(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        y() : this.Bt = this.Bt.rt(e, t);
    }, t.prototype.qt = function() {
        var t = [];
        return this.Bt.ut((function(e, n) {
            t.push(n);
        })), t;
    }, t;
}(), Mt = /** @class */ function() {
    function t(t, e, n, r, i, o, s, u) {
        this.query = t, this.docs = e, this.Ut = n, this.docChanges = r, this.Qt = i, this.fromCache = o, 
        this.Wt = s, this.jt = u
        /** Returns a view snapshot as if all documents in the snapshot were added. */;
    }
    return t.Kt = function(e, n, r, i) {
        var o = [];
        return n.forEach((function(t) {
            o.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new t(e, n, Vt.Lt(n), o, r, i, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return !this.Qt.m();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        if (!(this.fromCache === t.fromCache && this.Wt === t.Wt && this.Qt.isEqual(t.Qt) && Gn(this.query, t.query) && this.docs.isEqual(t.docs) && this.Ut.isEqual(t.Ut))) return !1;
        var e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        return !0;
    }, t;
}(), Ft = /** @class */ function() {
    function t(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    r, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.et = t, this.Gt = e, this.zt = n, this.Ht = r, this.Yt = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
        return t.Jt = function(e, n) {
        var r = new Map;
        return r.set(e, qt.Xt(e, n)), new t(st.min(), r, Pt(), Dt(), Ot());
    }, t;
}(), qt = /** @class */ function() {
    function t(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    r, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this.Zt = e, this.te = n, this.ee = r, this.ne = i
        /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */;
    }
    return t.Xt = function(e, n) {
        return new t(X.B, n, Ot(), Ot(), Ot());
    }, t;
}(), jt = function(
/** The new document applies to all of these targets. */
t, 
/** The new document is removed from all of these targets. */
e, 
/** The key of the document for this change. */
n, 
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
r) {
    this.se = t, this.removedTargetIds = e, this.key = n, this.ie = r;
}, zt = function(t, e) {
    this.targetId = t, this.re = e;
}, Bt = function(
/** What kind of change occurred to the watch target. */
t, 
/** The target IDs that were added/removed/set. */
e, 
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
n
/** An RPC error indicating why the watch failed. */ , r) {
    void 0 === n && (n = X.B), void 0 === r && (r = null), this.state = t, this.targetIds = e, 
    this.resumeToken = n, this.cause = r;
}, Gt = /** @class */ function() {
    function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.oe = 0, 
        /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
        this.ae = Kt(), 
        /** See public getters for explanations of these fields. */
        this.ce = X.B, this.ue = !1, 
        /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
        this.he = !0;
    }
    return Object.defineProperty(t.prototype, "Zt", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function() {
            return this.ue;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */ get: function() {
            return this.ce;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "le", {
        /** Whether this target has pending target adds or target removes. */ get: function() {
            return 0 !== this.oe;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "_e", {
        /** Whether we have modified any state that should trigger a snapshot. */ get: function() {
            return this.he;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    t.prototype.fe = function(t) {
        t.O() > 0 && (this.he = !0, this.ce = t);
    }, 
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    t.prototype.de = function() {
        var t = Ot(), e = Ot(), n = Ot();
        return this.ae.forEach((function(r, i) {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(r);
                break;

              case 2 /* Modified */ :
                e = e.add(r);
                break;

              case 1 /* Removed */ :
                n = n.add(r);
                break;

              default:
                y();
            }
        })), new qt(this.ce, this.ue, t, e, n);
    }, 
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype.we = function() {
        this.he = !1, this.ae = Kt();
    }, t.prototype.me = function(t, e) {
        this.he = !0, this.ae = this.ae.rt(t, e);
    }, t.prototype.Te = function(t) {
        this.he = !0, this.ae = this.ae.remove(t);
    }, t.prototype.Ee = function() {
        this.oe += 1;
    }, t.prototype.Ie = function() {
        this.oe -= 1;
    }, t.prototype.Ae = function() {
        this.he = !0, this.ue = !0;
    }, t;
}(), Qt = /** @class */ function() {
    function t(t) {
        this.Re = t, 
        /** The internal state of all tracked targets. */
        this.Pe = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.ge = Dt(), 
        /** A mapping of document keys to their set of target IDs. */
        this.ye = Wt(), 
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.Ve = new Tt(H)
        /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */;
    }
    return t.prototype.pe = function(t) {
        for (var e = 0, n = t.se; e < n.length; e++) {
            var r = n[e];
            t.ie instanceof Dn ? this.be(r, t.ie) : t.ie instanceof Sn && this.ve(r, t.key, t.ie);
        }
        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            var s = o[i];
            this.ve(s, t.key, t.ie);
        }
    }, 
    /** Processes and adds the WatchTargetChange to the current set of changes. */ t.prototype.Se = function(t) {
        var e = this;
        this.De(t, (function(n) {
            var r = e.Ce(n);
            switch (t.state) {
              case 0 /* NoChange */ :
                e.Ne(n) && r.fe(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.Ie(), r.le || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                r.we(), r.fe(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.Ie(), r.le || e.removeTarget(n);
                break;

              case 3 /* Current */ :
                e.Ne(n) && (r.Ae(), r.fe(t.resumeToken));
                break;

              case 4 /* Reset */ :
                e.Ne(n) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                e.Fe(n), r.fe(t.resumeToken));
                break;

              default:
                y();
            }
        }));
    }, 
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.De = function(t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.Pe.forEach((function(t, r) {
            n.Ne(r) && e(r);
        }));
    }, 
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.$e = function(t) {
        var e = t.targetId, n = t.re.count, r = this.xe(e);
        if (r) {
            var i = r.target;
            if (dt(i)) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var o = new N(i.path);
                this.ve(e, o, new Sn(o, st.min()));
            } else g(1 === n); else this.ke(e) !== n && (
            // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.Fe(e), this.Ve = this.Ve.add(e));
        }
    }, 
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.Me = function(t) {
        var e = this, n = new Map;
        this.Pe.forEach((function(r, i) {
            var o = e.xe(i);
            if (o) {
                if (r.Zt && dt(o.target)) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var s = new N(o.target.path);
                    null !== e.ge.get(s) || e.Oe(i, s) || e.ve(i, s, new Sn(s, t));
                }
                r._e && (n.set(i, r.de()), r.we());
            }
        }));
        var r = Ot();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this.ye.forEach((function(t, n) {
            var i = !0;
            n.Ft((function(t) {
                var n = e.xe(t);
                return !n || 2 /* LimboResolution */ === n.tt || (i = !1, !1);
            })), i && (r = r.add(t));
        }));
        var i = new Ft(t, n, this.Ve, this.ge, r);
        return this.ge = Dt(), this.ye = Wt(), this.Ve = new Tt(H), i;
    }, 
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.be = function(t, e) {
        if (this.Ne(t)) {
            var n = this.Oe(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
            this.Ce(t).me(e.key, n), this.ge = this.ge.rt(e.key, e), this.ye = this.ye.rt(e.key, this.Le(e.key).add(t));
        }
    }, 
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    t.prototype.ve = function(t, e, n) {
        if (this.Ne(t)) {
            var r = this.Ce(t);
            this.Oe(t, e) ? r.me(e, 1 /* Removed */) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            r.Te(e), this.ye = this.ye.rt(e, this.Le(e).delete(t)), n && (this.ge = this.ge.rt(e, n));
        }
    }, t.prototype.removeTarget = function(t) {
        this.Pe.delete(t);
    }, 
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype.ke = function(t) {
        var e = this.Ce(t).de();
        return this.Re.Be(t).size + e.te.size - e.ne.size;
    }, 
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.Ee = function(t) {
        this.Ce(t).Ee();
    }, t.prototype.Ce = function(t) {
        var e = this.Pe.get(t);
        return e || (e = new Gt, this.Pe.set(t, e)), e;
    }, t.prototype.Le = function(t) {
        var e = this.ye.get(t);
        return e || (e = new Tt(H), this.ye = this.ye.rt(t, e)), e;
    }, 
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.Ne = function(t) {
        var e = null !== this.xe(t);
        return e || l("WatchChangeAggregator", "Detected inactive target", t), e;
    }, 
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.xe = function(t) {
        var e = this.Pe.get(t);
        return e && e.le ? null : this.Re.qe(t);
    }, 
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.Fe = function(t) {
        var e = this;
        this.Pe.set(t, new Gt), this.Re.Be(t).forEach((function(n) {
            e.ve(t, n, /*updatedDocument=*/ null);
        }));
    }, 
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.Oe = function(t, e) {
        return this.Re.Be(t).has(e);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ function Wt() {
    return new bt(N.i);
}

function Kt() {
    return new bt(N.i);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   TransformMutation (see TransformMutation.applyTo()). They can only exist in
 *   the local view of a document. Therefore they do not need to be parsed or
 *   serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function Ht(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the local time at which this timestamp was first set.
 */ function Yt(t) {
    var e = re(t.mapValue.fields.__local_write_time__.timestampValue);
    return new ot(e.seconds, e.nanos);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// A RegExp matching ISO 8601 UTC timestamps with optional fraction.
var $t = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/** Extracts the backend's type order for the provided value. */ function Xt(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? Ht(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : y();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function Zt(t, e) {
    var n = Xt(t);
    if (n !== Xt(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return Yt(t).isEqual(Yt(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            var n = re(t.timestampValue), r = re(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return oe(t.bytesValue).isEqual(oe(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return ie(t.geoPointValue.latitude) === ie(e.geoPointValue.latitude) && ie(t.geoPointValue.longitude) === ie(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return ie(t.integerValue) === ie(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                var n = ie(t.doubleValue), r = ie(e.doubleValue);
                return n === r ? at(n) === at(r) : isNaN(n) && isNaN(r);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return Y(t.arrayValue.values || [], e.arrayValue.values || [], Zt);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
            if (w(n) !== w(r)) return !1;
            for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !Zt(n[i], r[i]))) return !1;
            return !0;
        }(t, e);

      default:
        return y();
    }
}

function Jt(t, e) {
    return void 0 !== (t.values || []).find((function(t) {
        return Zt(t, e);
    }));
}

function te(t, e) {
    var n = Xt(t), r = Xt(e);
    if (n !== r) return H(n, r);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return H(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            var n = ie(t.integerValue || t.doubleValue), r = ie(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return ee(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return ee(Yt(t), Yt(e));

      case 5 /* StringValue */ :
        return H(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            var n = oe(t), r = oe(e);
            return n.L(r);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = H(n[i], r[i]);
                if (0 !== o) return o;
            }
            return H(n.length, r.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            var n = H(ie(t.latitude), ie(e.latitude));
            return 0 !== n ? n : H(ie(t.longitude), ie(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = te(n[i], r[i]);
                if (o) return o;
            }
            return H(n.length, r.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.fields || {}, r = Object.keys(n), i = e.fields || {}, o = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
                        r.sort(), o.sort();
            for (var s = 0; s < r.length && s < o.length; ++s) {
                var u = H(r[s], o[s]);
                if (0 !== u) return u;
                var a = te(n[r[s]], i[o[s]]);
                if (0 !== a) return a;
            }
            return H(r.length, o.length);
        }(t.mapValue, e.mapValue);

      default:
        throw y();
    }
}

function ee(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return H(t, e);
    var n = re(t), r = re(e), i = H(n.seconds, r.seconds);
    return 0 !== i ? i : H(n.nanos, r.nanos);
}

function ne(t) {
    return function t(e) {
        return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function(t) {
            var e = re(t);
            return "time(" + e.seconds + "," + e.nanos + ")";
        }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? oe(e.bytesValue).toBase64() : "referenceValue" in e ? (r = e.referenceValue, 
        N.C(r).toString()) : "geoPointValue" in e ? "geo(" + (n = e.geoPointValue).latitude + "," + n.longitude + ")" : "arrayValue" in e ? function(e) {
            for (var n = "[", r = !0, i = 0, o = e.values || []; i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += t(s);
            }
            return n + "]";
        }(e.arrayValue) : "mapValue" in e ? function(e) {
            for (
            // Iteration order in JavaScript is not guaranteed. To ensure that we generate
            // matching canonical IDs for identical maps, we need to sort the keys.
            var n = "{", r = !0, i = 0, o = Object.keys(e.fields || {}).sort(); i < o.length; i++) {
                var s = o[i];
                r ? r = !1 : n += ",", n += s + ":" + t(e.fields[s]);
            }
            return n + "}";
        }(e.mapValue) : y();
        var n, r;
    }(t);
}

function re(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (g(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0, n = $t.exec(t);
        if (g(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r);
        }
        // Parse the date to get the seconds.
                var i = new Date(t);
        return {
            seconds: Math.floor(i.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: ie(t.seconds),
        nanos: ie(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function ie(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function oe(t) {
    return "string" == typeof t ? X.fromBase64String(t) : X.fromUint8Array(t);
}

/** Returns a reference value for the provided database and key. */ function se(t, e) {
    return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.R()
    };
}

/** Returns true if `value` is an IntegerValue . */ function ue(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */ function ae(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function ce(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function he(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function fe(t) {
    return !!t && "mapValue" in t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var le = {
    asc: "ASCENDING",
    desc: "DESCENDING"
}, pe = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
}, de = function(t, e) {
    this.U = t, this.Ue = e;
};

/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
/**
 * Returns an IntegerValue for `value`.
 */
function ve(t) {
    return {
        integerValue: "" + t
    };
}

/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function ye(t, e) {
    if (t.Ue) {
        if (isNaN(e)) return {
            doubleValue: "NaN"
        };
        if (e === 1 / 0) return {
            doubleValue: "Infinity"
        };
        if (e === -1 / 0) return {
            doubleValue: "-Infinity"
        };
    }
    return {
        doubleValue: at(e) ? "-0" : e
    };
}

/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */ function ge(t, e) {
    return ct(e) ? ve(e) : ye(t, e);
}

/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */ function me(t, e) {
    return t.Ue ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */ function we(t, e) {
    return t.Ue ? e.toBase64() : e.toUint8Array();
}

/**
 * Returns a ByteString based on the proto string value.
 */ function _e(t, e) {
    return me(t, e.X());
}

function be(t) {
    return g(!!t), st.Y(function(t) {
        var e = re(t);
        return new ot(e.seconds, e.nanos);
    }(t));
}

function Ie(t, e) {
    return function(t) {
        return new E([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(e).R();
}

function Ee(t) {
    var e = E.P(t);
    return g(Ge(e)), e;
}

function Te(t, e) {
    return Ie(t.U, e.path);
}

function Ae(t, e) {
    var n = Ee(e);
    return g(n.get(1) === t.U.projectId), g(!n.get(3) && !t.U.database || n.get(3) === t.U.database), 
    new N(xe(n));
}

function Ne(t, e) {
    return Ie(t.U, e);
}

function De(t) {
    var e = Ee(t);
    // In v1beta1 queries for collections at the root did not have a trailing
    // "/documents". In v1 all resource paths contain "/documents". Preserve the
    // ability to read the v1beta1 form for compatibility with queries persisted
    // in the local target cache.
        return 4 === e.length ? E.g() : xe(e);
}

function Se(t) {
    return new E([ "projects", t.U.projectId, "databases", t.U.database ]).R();
}

function xe(t) {
    return g(t.length > 4 && "documents" === t.get(4)), t.u(5)
    /** Creates a Document proto from key and fields (but no create/update time) */;
}

function ke(t, e, n) {
    return {
        name: Te(t, e),
        fields: n.proto.mapValue.fields
    };
}

function Le(t, e) {
    var n;
    if (e instanceof vn) n = {
        update: ke(t, e.key, e.value)
    }; else if (e instanceof bn) n = {
        delete: Te(t, e.key)
    }; else if (e instanceof yn) n = {
        update: ke(t, e.key, e.data),
        updateMask: Be(e.Qe)
    }; else if (e instanceof mn) n = {
        transform: {
            document: Te(t, e.key),
            fieldTransforms: e.fieldTransforms.map((function(t) {
                return function(t, e) {
                    var n = e.transform;
                    if (n instanceof Ye) return {
                        fieldPath: e.field.R(),
                        setToServerValue: "REQUEST_TIME"
                    };
                    if (n instanceof $e) return {
                        fieldPath: e.field.R(),
                        appendMissingElements: {
                            values: n.elements
                        }
                    };
                    if (n instanceof Ze) return {
                        fieldPath: e.field.R(),
                        removeAllFromArray: {
                            values: n.elements
                        }
                    };
                    if (n instanceof tn) return {
                        fieldPath: e.field.R(),
                        increment: n.We
                    };
                    throw y();
                }(0, t);
            }))
        }
    }; else {
        if (!(e instanceof In)) return y();
        n = {
            verify: Te(t, e.key)
        };
    }
    return e.Ke.je || (n.currentDocument = function(t, e) {
        return void 0 !== e.updateTime ? {
            updateTime: _e(t, e.updateTime)
        } : void 0 !== e.exists ? {
            exists: e.exists
        } : y();
    }(t, e.Ke)), n;
}

function Re(t, e) {
    var n = e.currentDocument ? function(t) {
        return void 0 !== t.updateTime ? un.updateTime(be(t.updateTime)) : void 0 !== t.exists ? un.exists(t.exists) : un.Ge();
    }(e.currentDocument) : un.Ge();
    if (e.update) {
        e.update.name;
        var r = Ae(t, e.update.name), i = new En({
            mapValue: {
                fields: e.update.fields
            }
        });
        if (e.updateMask) {
            var o = function(t) {
                var e = t.fieldPaths || [];
                return new rn(e.map((function(t) {
                    return A.S(t);
                })));
            }(e.updateMask);
            return new yn(r, i, o, n);
        }
        return new vn(r, i, n);
    }
    if (e.delete) {
        var s = Ae(t, e.delete);
        return new bn(s, n);
    }
    if (e.transform) {
        var u = Ae(t, e.transform.document), a = e.transform.fieldTransforms.map((function(e) {
            return function(t, e) {
                var n = null;
                if ("setToServerValue" in e) g("REQUEST_TIME" === e.setToServerValue), n = new Ye; else if ("appendMissingElements" in e) {
                    var r = e.appendMissingElements.values || [];
                    n = new $e(r);
                } else if ("removeAllFromArray" in e) {
                    var i = e.removeAllFromArray.values || [];
                    n = new Ze(i);
                } else "increment" in e ? n = new tn(t, e.increment) : y();
                var o = A.S(e.fieldPath);
                return new on(o, n);
            }(t, e);
        }));
        return g(!0 === n.exists), new mn(u, a);
    }
    if (e.verify) {
        var c = Ae(t, e.verify);
        return new In(c, n);
    }
    return y();
}

function Oe(t, e) {
    return {
        documents: [ Ne(t, e.path) ]
    };
}

function Ue(t, e) {
    // Dissect the path into parent, collectionId, and optional key filter.
    var n = {
        structuredQuery: {}
    }, r = e.path;
    null !== e.collectionGroup ? (n.parent = Ne(t, r), n.structuredQuery.from = [ {
        collectionId: e.collectionGroup,
        allDescendants: !0
    } ]) : (n.parent = Ne(t, r.h()), n.structuredQuery.from = [ {
        collectionId: r._()
    } ]);
    var i = function(t) {
        if (0 !== t.length) {
            var e = t.map((function(t) {
                // visible for testing
                return function(t) {
                    if ("==" /* EQUAL */ === t.op) {
                        if (he(t.value)) return {
                            unaryFilter: {
                                field: Fe(t.field),
                                op: "IS_NAN"
                            }
                        };
                        if (ce(t.value)) return {
                            unaryFilter: {
                                field: Fe(t.field),
                                op: "IS_NULL"
                            }
                        };
                    } else if ("!=" /* NOT_EQUAL */ === t.op) {
                        if (he(t.value)) return {
                            unaryFilter: {
                                field: Fe(t.field),
                                op: "IS_NOT_NAN"
                            }
                        };
                        if (ce(t.value)) return {
                            unaryFilter: {
                                field: Fe(t.field),
                                op: "IS_NOT_NULL"
                            }
                        };
                    }
                    return {
                        fieldFilter: {
                            field: Fe(t.field),
                            op: Me(t.op),
                            value: t.value
                        }
                    };
                }(t);
            }));
            return 1 === e.length ? e[0] : {
                compositeFilter: {
                    op: "AND",
                    filters: e
                }
            };
        }
    }(e.filters);
    i && (n.structuredQuery.where = i);
    var o = function(t) {
        if (0 !== t.length) return t.map((function(t) {
            // visible for testing
            return function(t) {
                return {
                    field: Fe(t.field),
                    direction: Ce(t.dir)
                };
            }(t);
        }));
    }(e.orderBy);
    o && (n.structuredQuery.orderBy = o);
    var s = function(t, e) {
        return t.Ue || ut(e) ? e : {
            value: e
        };
    }(t, e.limit);
    return null !== s && (n.structuredQuery.limit = s), e.startAt && (n.structuredQuery.startAt = Pe(e.startAt)), 
    e.endAt && (n.structuredQuery.endAt = Pe(e.endAt)), n;
}

function Pe(t) {
    return {
        before: t.before,
        values: t.position
    };
}

function Ve(t) {
    var e = !!t.before, n = t.values || [];
    return new ir(n, e);
}

// visible for testing
function Ce(t) {
    return le[t];
}

function Me(t) {
    return pe[t];
}

function Fe(t) {
    return {
        fieldPath: t.R()
    };
}

function qe(t) {
    return A.S(t.fieldPath);
}

function je(t) {
    return Yn.create(qe(t.fieldFilter.field), function(t) {
        switch (t) {
          case "EQUAL":
            return "==" /* EQUAL */;

          case "NOT_EQUAL":
            return "!=" /* NOT_EQUAL */;

          case "GREATER_THAN":
            return ">" /* GREATER_THAN */;

          case "GREATER_THAN_OR_EQUAL":
            return ">=" /* GREATER_THAN_OR_EQUAL */;

          case "LESS_THAN":
            return "<" /* LESS_THAN */;

          case "LESS_THAN_OR_EQUAL":
            return "<=" /* LESS_THAN_OR_EQUAL */;

          case "ARRAY_CONTAINS":
            return "array-contains" /* ARRAY_CONTAINS */;

          case "IN":
            return "in" /* IN */;

          case "NOT_IN":
            return "not-in" /* NOT_IN */;

          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any" /* ARRAY_CONTAINS_ANY */;

          case "OPERATOR_UNSPECIFIED":
          default:
            return y();
        }
    }(t.fieldFilter.op), t.fieldFilter.value);
}

function ze(t) {
    switch (t.unaryFilter.op) {
      case "IS_NAN":
        var e = qe(t.unaryFilter.field);
        return Yn.create(e, "==" /* EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NULL":
        var n = qe(t.unaryFilter.field);
        return Yn.create(n, "==" /* EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "IS_NOT_NAN":
        var r = qe(t.unaryFilter.field);
        return Yn.create(r, "!=" /* NOT_EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NOT_NULL":
        var i = qe(t.unaryFilter.field);
        return Yn.create(i, "!=" /* NOT_EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "OPERATOR_UNSPECIFIED":
      default:
        return y();
    }
}

function Be(t) {
    var e = [];
    return t.fields.forEach((function(t) {
        return e.push(t.R());
    })), {
        fieldPaths: e
    };
}

function Ge(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Represents a transform within a TransformMutation. */ var Qe = function() {
    // Make sure that the structural type of `TransformOperation` is unique.
    // See https://github.com/microsoft/TypeScript/issues/5451
    this.ze = void 0;
};

/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */ function We(t, e, n) {
    return t instanceof Ye ? function(t, e) {
        var n = {
            fields: {
                __type__: {
                    stringValue: "server_timestamp"
                },
                __local_write_time__: {
                    timestampValue: {
                        seconds: t.seconds,
                        nanos: t.nanoseconds
                    }
                }
            }
        };
        return e && (n.fields.__previous_value__ = e), {
            mapValue: n
        };
    }(n, e) : t instanceof $e ? Xe(t, e) : t instanceof Ze ? Je(t, e) : function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = He(t, e), r = en(n) + en(t.We);
        return ue(n) && ue(t.We) ? ve(r) : ye(t.serializer, r);
    }(t, e);
}

/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */ function Ke(t, e, n) {
    // The server just sends null as the transform result for array operations,
    // so we have to calculate a result the same as we do for local
    // applications.
    return t instanceof $e ? Xe(t, e) : t instanceof Ze ? Je(t, e) : n;
}

/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @return a base value to store along with the mutation, or null for
 * idempotent transforms.
 */ function He(t, e) {
    return t instanceof tn ? ue(n = e) || function(t) {
        return !!t && "doubleValue" in t;
    }(n) ? e : {
        integerValue: 0
    } : null;
    var n;
}

/** Transforms a value into a server-generated timestamp. */ var Ye = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t.__extends(n, e), n;
}(Qe), $e = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).elements = t, n;
    }
    return t.__extends(n, e), n;
}(Qe);

/** Transforms an array value via a union operation. */ function Xe(t, e) {
    for (var n = nn(e), r = function(t) {
        n.some((function(e) {
            return Zt(e, t);
        })) || n.push(t);
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/** Transforms an array value via a remove operation. */ var Ze = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).elements = t, n;
    }
    return t.__extends(n, e), n;
}(Qe);

function Je(t, e) {
    for (var n = nn(e), r = function(t) {
        n = n.filter((function(e) {
            return !Zt(e, t);
        }));
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */ var tn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).serializer = t, r.We = n, r;
    }
    return t.__extends(n, e), n;
}(Qe);

function en(t) {
    return ie(t.integerValue || t.doubleValue);
}

function nn(t) {
    return ae(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ var rn = /** @class */ function() {
    function t(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort(A.i)
        /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */;
    }
    return t.prototype.He = function(t) {
        for (var e = 0, n = this.fields; e < n.length; e++) {
            if (n[e].T(t)) return !0;
        }
        return !1;
    }, t.prototype.isEqual = function(t) {
        return Y(this.fields, t.fields, (function(t, e) {
            return t.isEqual(e);
        }));
    }, t;
}(), on = function(t, e) {
    this.field = t, this.transform = e;
};

/** A field path and the TransformOperation to perform upon it. */
/** The result of successfully applying a mutation to the backend. */ var sn = function(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t, 
/**
     * The resulting fields returned from the backend after a
     * TransformMutation has been committed. Contains one FieldValue for each
     * FieldTransform that was in the mutation.
     *
     * Will be null if the mutation was not a TransformMutation.
     */
e) {
    this.version = t, this.transformResults = e;
}, un = /** @class */ function() {
    function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new empty Precondition. */;
    }
    return t.Ge = function() {
        return new t;
    }, 
    /** Creates a new Precondition with an exists flag. */ t.exists = function(e) {
        return new t(void 0, e);
    }, 
    /** Creates a new Precondition based on a version a document exists at. */ t.updateTime = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "je", {
        /** Returns whether this Precondition is empty. */ get: function() {
            return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }, t;
}();

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */
/**
 * Returns true if the preconditions is valid for the given document
 * (or null if no document is available).
 */
function an(t, e) {
    return void 0 !== t.updateTime ? e instanceof Dn && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof Dn;
}

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set, Patch, and Transform mutations. For Delete
 * mutations, we reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        null                  Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      null                  null
 * TransformMutation  Document(v3)          Document(v3)
 * TransformMutation  NoDocument(v3)        NoDocument(v3)
 * TransformMutation  null                  null
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     null                  NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set, Patch, and Transform mutations. As deletes
 * have no explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we return an `UnknownDocument` and rely on Watch to send us the
 * updated version.
 *
 * Note that TransformMutations don't create Documents (in the case of being
 * applied to a NoDocument), even though they would on the backend. This is
 * because the client always combines the TransformMutation with a SetMutation
 * or PatchMutation and we only want to apply the transform if the prior
 * mutation resulted in a Document (always true for a SetMutation, but not
 * necessarily for a PatchMutation).
 *
 * ## Subclassing Notes
 *
 * Subclasses of Mutation need to implement applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document.
 */ var cn = function() {};

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing a new remote document. If the input document doesn't match the
 * expected state (e.g. it is null or outdated), an `UnknownDocument` can be
 * returned.
 *
 * @param mutation The mutation to apply.
 * @param maybeDoc The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param mutationResult The result of applying the mutation from the backend.
 * @return The mutated document. The returned document may be an
 *     UnknownDocument if the mutation could not be applied to the locally
 *     cached base document.
 */ function hn(t, e, n) {
    return t instanceof vn ? function(t, e, n) {
        // Unlike applySetMutationToLocalView, if we're applying a mutation to a
        // remote document the server has accepted the mutation so the precondition
        // must have held.
        return new Dn(t.key, n.version, t.value, {
            hasCommittedMutations: !0
        });
    }(t, 0, n) : t instanceof yn ? function(t, e, n) {
        if (!an(t.Ke, e)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new xn(t.key, n.version);
        var r = gn(t, e);
        return new Dn(t.key, n.version, r, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : t instanceof mn ? function(t, e, n) {
        if (g(null != n.transformResults), !an(t.Ke, e)) 
        // Since the mutation was not rejected, we know that the  precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new xn(t.key, n.version);
        var r = wn(t, e), i = 
        /**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use after a
 * TransformMutation has been acknowledged by the server.
 *
 * @param fieldTransforms The field transforms to apply the result to.
 * @param baseDoc The document prior to applying this mutation batch.
 * @param serverTransformResults The transform results received by the server.
 * @return The transform results list.
 */
        function(t, e, n) {
            var r = [];
            g(t.length === n.length);
            for (var i = 0; i < n.length; i++) {
                var o = t[i], s = o.transform, u = null;
                e instanceof Dn && (u = e.field(o.field)), r.push(Ke(s, u, n[i]));
            }
            return r;
        }(t.fieldTransforms, e, n.transformResults), o = n.version, s = _n(t, r.data(), i);
        return new Dn(t.key, o, s, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : function(t, e, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return new Sn(t.key, n.version, {
            hasCommittedMutations: !0
        });
    }(t, 0, n);
}

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing the new local view of a document. Both the input and returned
 * documents can be null.
 *
 * @param mutation The mutation to apply.
 * @param maybeDoc The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param baseDoc The state of the document prior to this mutation batch. The
 *     input document can be null if the client has no knowledge of the
 *     pre-mutation state of the document.
 * @param localWriteTime A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 * @return The mutated document. The returned document may be null, but only
 *     if maybeDoc was null and the mutation would not create a new document.
 */ function fn(t, e, n, r) {
    return t instanceof vn ? function(t, e) {
        if (!an(t.Ke, e)) return e;
        var n = dn(e);
        return new Dn(t.key, n, t.value, {
            Ye: !0
        });
    }(t, e) : t instanceof yn ? function(t, e) {
        if (!an(t.Ke, e)) return e;
        var n = dn(e), r = gn(t, e);
        return new Dn(t.key, n, r, {
            Ye: !0
        });
    }(t, e) : t instanceof mn ? function(t, e, n, r) {
        if (!an(t.Ke, e)) return e;
        var i = wn(t, e), o = function(t, e, n, r) {
            for (var i = [], o = 0, s = t; o < s.length; o++) {
                var u = s[o], a = u.transform, c = null;
                n instanceof Dn && (c = n.field(u.field)), null === c && r instanceof Dn && (
                // If the current document does not contain a value for the mutated
                // field, use the value that existed before applying this mutation
                // batch. This solves an edge case where a PatchMutation clears the
                // values in a nested map before the TransformMutation is applied.
                c = r.field(u.field)), i.push(We(a, c, e));
            }
            return i;
        }(t.fieldTransforms, n, e, r), s = _n(t, i.data(), o);
        return new Dn(t.key, i.version, s, {
            Ye: !0
        });
    }(t, e, r, n) : function(t, e) {
        return an(t.Ke, e) ? new Sn(t.key, st.min()) : e;
    }(t, e);
}

/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @return a base value to store along with the mutation, or null for
 * idempotent mutations.
 */ function ln(t, e) {
    return t instanceof mn ? function(t, e) {
        for (var n = null, r = 0, i = t.fieldTransforms; r < i.length; r++) {
            var o = i[r], s = e instanceof Dn ? e.field(o.field) : void 0, u = He(o.transform, s || null);
            null != u && (n = null == n ? (new Tn).set(o.field, u) : n.set(o.field, u));
        }
        return n ? n.Je() : null;
    }(t, e) : null;
}

function pn(t, e) {
    return t.type === e.type && !!t.key.isEqual(e.key) && !!t.Ke.isEqual(e.Ke) && (0 /* Set */ === t.type ? t.value.isEqual(e.value) : 1 /* Patch */ === t.type ? t.data.isEqual(e.data) && t.Qe.isEqual(e.Qe) : 2 /* Transform */ !== t.type || Y(t.fieldTransforms, t.fieldTransforms, (function(t, e) {
        return function(t, e) {
            return t.field.isEqual(e.field) && function(t, e) {
                return t instanceof $e && e instanceof $e || t instanceof Ze && e instanceof Ze ? Y(t.elements, e.elements, Zt) : t instanceof tn && e instanceof tn ? Zt(t.We, e.We) : t instanceof Ye && e instanceof Ye;
            }(t.transform, e.transform);
        }(t, e);
    })));
}

/**
 * Returns the version from the given document for use as the result of a
 * mutation. Mutations are defined to return the version of the base document
 * only if it is an existing document. Deleted and unknown documents have a
 * post-mutation version of SnapshotVersion.min().
 */ function dn(t) {
    return t instanceof Dn ? t.version : st.min();
}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ var vn = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).key = t, i.value = n, i.Ke = r, i.type = 0 /* Set */ , 
        i;
    }
    return t.__extends(n, e), n;
}(cn), yn = /** @class */ function(e) {
    function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this) || this).key = t, o.data = n, o.Qe = r, o.Ke = i, o.type = 1 /* Patch */ , 
        o;
    }
    return t.__extends(n, e), n;
}(cn);

function gn(t, e) {
    return function(t, e) {
        var n = new Tn(e);
        return t.Qe.fields.forEach((function(e) {
            if (!e.m()) {
                var r = t.data.field(e);
                null !== r ? n.set(e, r) : n.delete(e);
            }
        })), n.Je();
    }(t, e instanceof Dn ? e.data() : En.empty());
}

var mn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.fieldTransforms = n, r.type = 2 /* Transform */ , 
        // NOTE: We set a precondition of exists: true as a safety-check, since we
        // always combine TransformMutations with a SetMutation or PatchMutation which
        // (if successful) should end up with an existing document.
        r.Ke = un.exists(!0), r;
    }
    return t.__extends(n, e), n;
}(cn);

function wn(t, e) {
    return e;
}

function _n(t, e, n) {
    for (var r = new Tn(e), i = 0; i < t.fieldTransforms.length; i++) {
        var o = t.fieldTransforms[i];
        r.set(o.field, n[i]);
    }
    return r.Je();
}

/** A mutation that deletes the document at the given key. */ var bn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.Ke = n, r.type = 3 /* Delete */ , r;
    }
    return t.__extends(n, e), n;
}(cn), In = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).key = t, r.Ke = n, r.type = 4 /* Verify */ , r;
    }
    return t.__extends(n, e), n;
}(cn), En = /** @class */ function() {
    function t(t) {
        this.proto = t;
    }
    return t.empty = function() {
        return new t({
            mapValue: {}
        });
    }, 
    /**
     * Returns the value at the given path or null.
     *
     * @param path the path to search
     * @return The value at the path or if there it doesn't exist.
     */
    t.prototype.field = function(t) {
        if (t.m()) return this.proto;
        for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
            if (!e.mapValue.fields) return null;
            if (!fe(e = e.mapValue.fields[t.get(n)])) return null;
        }
        return (e = (e.mapValue.fields || {})[t._()]) || null;
    }, t.prototype.isEqual = function(t) {
        return Zt(this.proto, t.proto);
    }, t;
}(), Tn = /** @class */ function() {
    /**
     * @param baseObject The object to mutate.
     */
    function t(t) {
        void 0 === t && (t = En.empty()), this.Xe = t, 
        /** A map that contains the accumulated changes in this builder. */
        this.Ze = new Map;
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path The field path to set.
     * @param value The value to set.
     * @return The current Builder instance.
     */    return t.prototype.set = function(t, e) {
        return this.tn(t, e), this;
    }, 
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path The field path to remove.
     * @return The current Builder instance.
     */
    t.prototype.delete = function(t) {
        return this.tn(t, null), this;
    }, 
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */
    t.prototype.tn = function(t, e) {
        for (var n = this.Ze, r = 0; r < t.length - 1; ++r) {
            var i = t.get(r), o = n.get(i);
            o instanceof Map ? 
            // Re-use a previously created map
            n = o : o && 10 /* ObjectValue */ === Xt(o) ? (
            // Convert the existing Protobuf MapValue into a map
            o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : (
            // Create an empty map to represent the current nesting level
            o = new Map, n.set(i, o), n = o);
        }
        n.set(t._(), e);
    }, 
    /** Returns an ObjectValue with all mutations applied. */ t.prototype.Je = function() {
        var t = this.en(A.g(), this.Ze);
        return null != t ? new En(t) : this.Xe;
    }, 
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath The path at the current nesting level. Can be set to
     * FieldValue.emptyPath() to represent the root.
     * @param currentOverlays The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @return The merged data at `currentPath` or null if no modifications
     * were applied.
     */
    t.prototype.en = function(t, e) {
        var n = this, r = !1, i = this.Xe.field(t), o = fe(i) ? // If there is already data at the current path, base our
        Object.assign({}, i.mapValue.fields) : {};
        return e.forEach((function(e, i) {
            if (e instanceof Map) {
                var s = n.en(t.child(i), e);
                null != s && (o[i] = s, r = !0);
            } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
        })), r ? {
            mapValue: {
                fields: o
            }
        } : null;
    }, t;
}();

/**
 * Returns a FieldMask built from all fields in a MapValue.
 */
function An(t) {
    var e = [];
    return _(t.fields || {}, (function(t, n) {
        var r = new A([ t ]);
        if (fe(n)) {
            var i = An(n.mapValue).fields;
            if (0 === i.length) 
            // Preserve the empty map by adding it to the FieldMask.
            e.push(r); else 
            // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (var o = 0, s = i; o < s.length; o++) {
                var u = s[o];
                e.push(r.child(u));
            }
        } else 
        // For nested and non-empty ObjectValues, add the FieldPath of the leaf
        // nodes.
        e.push(r);
    })), new rn(e)
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * The result of a lookup for a given path may be an existing document or a
 * marker that this document does not exist at a given version.
 */;
}

var Nn = function(t, e) {
    this.key = t, this.version = e;
}, Dn = /** @class */ function(e) {
    function n(t, n, r, i) {
        var o = this;
        return (o = e.call(this, t, n) || this).nn = r, o.Ye = !!i.Ye, o.hasCommittedMutations = !!i.hasCommittedMutations, 
        o;
    }
    return t.__extends(n, e), n.prototype.field = function(t) {
        return this.nn.field(t);
    }, n.prototype.data = function() {
        return this.nn;
    }, n.prototype.sn = function() {
        return this.nn.proto;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Ye === t.Ye && this.hasCommittedMutations === t.hasCommittedMutations && this.nn.isEqual(t.nn);
    }, n.prototype.toString = function() {
        return "Document(" + this.key + ", " + this.version + ", " + this.nn.toString() + ", {hasLocalMutations: " + this.Ye + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.Ye || this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
    }), n;
}(Nn), Sn = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), 
        i;
    }
    return t.__extends(n, e), n.prototype.toString = function() {
        return "NoDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(Nn), xn = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t.__extends(n, e), n.prototype.toString = function() {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(n.prototype, "hasPendingWrites", {
        get: function() {
            return !0;
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.isEqual = function(t) {
        return t instanceof n && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, n;
}(Nn);

/**
 * Represents a document in Firestore with a key, version, data and whether the
 * data has local mutations applied to it.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Casts `obj` to `T`. Throws if  `obj` is not an instance of `T`.
 *
 * This cast is used in the Lite and Full SDK to verify instance types for
 * arguments passed to the public API.
 */
function kn(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    if (!(t instanceof e)) throw e.name === t.constructor.name ? new c(a.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass '" + e.name + "' from a different Firestore SDK?") : new c(a.INVALID_ARGUMENT, "Expected type '" + e.name + "', but was '" + t.constructor.name + "'");
    return t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ var Ln = 
/**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
function(t, e, n, r, i, o /* First */ , s, u) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), 
    void 0 === u && (u = null), this.path = t, this.collectionGroup = e, this.rn = n, 
    this.filters = r, this.limit = i, this.on = o, this.startAt = s, this.endAt = u, 
    this.an = null, 
    // The corresponding `Target` of this `Query` instance.
    this.cn = null, this.startAt, this.endAt;
};

/** Creates a new Query instance with the options provided. */ function Rn(t, e, n, r, i, o, s, u) {
    return new Ln(t, e, n, r, i, o, s, u);
}

/** Creates a new Query for a query that matches all documents at `path` */ function On(t) {
    return new Ln(t);
}

/**
 * Helper to convert a collection group query into a collection query at a
 * specific path. This is used when executing collection group queries, since
 * we have to split the query into a set of collection queries at multiple
 * paths.
 */ function Un(t) {
    return !ut(t.limit) && "F" /* First */ === t.on;
}

function Pn(t) {
    return !ut(t.limit) && "L" /* Last */ === t.on;
}

function Vn(t) {
    return t.rn.length > 0 ? t.rn[0].field : null;
}

function Cn(t) {
    for (var e = 0, n = t.filters; e < n.length; e++) {
        var r = n[e];
        if (r.un()) return r.field;
    }
    return null;
}

/**
 * Checks if any of the provided Operators are included in the query and
 * returns the first one that is, or null if none are.
 */
/**
 * Returns whether the query matches a collection group rather than a specific
 * collection.
 */ function Mn(t) {
    return null !== t.collectionGroup;
}

/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */ function Fn(t) {
    var e = kn(t, Ln);
    if (null === e.an) {
        e.an = [];
        var n = Cn(e), r = Vn(e);
        if (null !== n && null === r) 
        // In order to implicitly add key ordering, we must also add the
        // inequality filter field for it to be a valid query.
        // Note that the default inequality field and key ordering is ascending.
        n.p() || e.an.push(new ar(n)), e.an.push(new ar(A.v(), "asc" /* ASCENDING */)); else {
            for (var i = !1, o = 0, s = e.rn; o < s.length; o++) {
                var u = s[o];
                e.an.push(u), u.field.p() && (i = !0);
            }
            if (!i) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                var a = e.rn.length > 0 ? e.rn[e.rn.length - 1].dir : "asc" /* ASCENDING */;
                e.an.push(new ar(A.v(), a));
            }
        }
    }
    return e.an;
}

/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */ function qn(t) {
    var e = kn(t, Ln);
    if (!e.cn) if ("F" /* First */ === e.on) e.cn = ft(e.path, e.collectionGroup, Fn(e), e.filters, e.limit, e.startAt, e.endAt); else {
        for (
        // Flip the orderBy directions since we want the last results
        var n = [], r = 0, i = Fn(e); r < i.length; r++) {
            var o = i[r], s = "desc" /* DESCENDING */ === o.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
            n.push(new ar(o.field, s));
        }
        // We need to swap the cursors to match the now-flipped query ordering.
                var u = e.endAt ? new ir(e.endAt.position, !e.endAt.before) : null, a = e.startAt ? new ir(e.startAt.position, !e.startAt.before) : null;
        // Now return as a LimitType.First query.
                e.cn = ft(e.path, e.collectionGroup, n, e.filters, e.limit, u, a);
    }
    return e.cn;
}

function jn(t, e, n) {
    return new Ln(t.path, t.collectionGroup, t.rn.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
}

function zn(t, e) {
    return new Ln(t.path, t.collectionGroup, t.rn.slice(), t.filters.slice(), t.limit, t.on, e, t.endAt);
}

function Bn(t, e) {
    return new Ln(t.path, t.collectionGroup, t.rn.slice(), t.filters.slice(), t.limit, t.on, t.startAt, e);
}

function Gn(t, e) {
    return pt(qn(t), qn(e)) && t.on === e.on;
}

// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function Qn(t) {
    return lt(qn(t)) + "|lt:" + t.on;
}

function Wn(t) {
    return "Query(target=" + function(t) {
        var e = t.path.R();
        return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), 
        t.filters.length > 0 && (e += ", filters: [" + t.filters.map((function(t) {
            return (e = t).field.R() + " " + e.op + " " + ne(e.value);
            /** Returns a debug description for `filter`. */            var e;
            /** Filter that matches on key fields (i.e. '__name__'). */        })).join(", ") + "]"), 
        ut(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map((function(t) {
            return (e = t).field.R() + " (" + e.dir + ")";
            var e;
        })).join(", ") + "]"), t.startAt && (e += ", startAt: " + or(t.startAt)), t.endAt && (e += ", endAt: " + or(t.endAt)), 
        "Target(" + e + ")";
    }(qn(t)) + "; limitType=" + t.on + ")";
}

/** Returns whether `doc` matches the constraints of `query`. */ function Kn(t, e) {
    return function(t, e) {
        var n = e.key.path;
        return null !== t.collectionGroup ? e.key.N(t.collectionGroup) && t.path.T(n) : N.F(t.path) ? t.path.isEqual(n) : t.path.I(n);
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.rn; n < r.length; n++) {
            var i = r[n];
            // order by key always matches
                        if (!i.field.p() && null === e.field(i.field)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.filters; n < r.length; n++) {
            if (!r[n].matches(e)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        return !(t.startAt && !sr(t.startAt, Fn(t), e)) && (!t.endAt || !sr(t.endAt, Fn(t), e));
    }(t, e);
}

function Hn(t) {
    return function(e, n) {
        for (var r = !1, i = 0, o = Fn(t); i < o.length; i++) {
            var s = o[i], u = cr(s, e, n);
            if (0 !== u) return u;
            r = r || s.field.p();
        }
        return 0;
    };
}

var Yn = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).field = t, i.op = n, i.value = r, i;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    return t.__extends(n, e), n.create = function(t, e, r) {
        if (t.p()) return "in" /* IN */ === e || "not-in" /* NOT_IN */ === e ? this.hn(t, e, r) : new $n(t, e, r);
        if (ce(r)) {
            if ("==" /* EQUAL */ !== e && "!=" /* NOT_EQUAL */ !== e) 
            // TODO(ne-queries): Update error message to include != comparison.
            throw new c(a.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons.");
            return new n(t, e, r);
        }
        if (he(r)) {
            if ("==" /* EQUAL */ !== e && "!=" /* NOT_EQUAL */ !== e) 
            // TODO(ne-queries): Update error message to include != comparison.
            throw new c(a.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons.");
            return new n(t, e, r);
        }
        return "array-contains" /* ARRAY_CONTAINS */ === e ? new tr(t, r) : "in" /* IN */ === e ? new er(t, r) : "not-in" /* NOT_IN */ === e ? new nr(t, r) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e ? new rr(t, r) : new n(t, e, r);
    }, n.hn = function(t, e, n) {
        return "in" /* IN */ === e ? new Xn(t, n) : new Zn(t, n);
    }, n.prototype.matches = function(t) {
        var e = t.field(this.field);
        // Types do not have to match in NOT_EQUAL filters.
                return "!=" /* NOT_EQUAL */ === this.op ? null !== e && this.ln(te(e, this.value)) : null !== e && Xt(this.value) === Xt(e) && this.ln(te(e, this.value));
        // Only compare types with matching backend order (such as double and int).
        }, n.prototype.ln = function(t) {
        switch (this.op) {
          case "<" /* LESS_THAN */ :
            return t < 0;

          case "<=" /* LESS_THAN_OR_EQUAL */ :
            return t <= 0;

          case "==" /* EQUAL */ :
            return 0 === t;

          case "!=" /* NOT_EQUAL */ :
            return 0 !== t;

          case ">" /* GREATER_THAN */ :
            return t > 0;

          case ">=" /* GREATER_THAN_OR_EQUAL */ :
            return t >= 0;

          default:
            return y();
        }
    }, n.prototype.un = function() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ , "!=" /* NOT_EQUAL */ ].indexOf(this.op) >= 0;
    }, n;
}((function() {}));

var $n = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, t, n, r) || this).key = N.C(r.referenceValue), i;
    }
    return t.__extends(n, e), n.prototype.matches = function(t) {
        var e = N.i(t.key, this.key);
        return this.ln(e);
    }, n;
}(Yn), Xn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, "in" /* IN */ , n) || this).keys = Jn("in" /* IN */ , n), 
        r;
    }
    return t.__extends(n, e), n.prototype.matches = function(t) {
        return this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, n;
}(Yn), Zn = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this, t, "not-in" /* NOT_IN */ , n) || this).keys = Jn("not-in" /* NOT_IN */ , n), 
        r;
    }
    return t.__extends(n, e), n.prototype.matches = function(t) {
        return !this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, n;
}(Yn);

/** Filter that matches on key fields within an array. */ function Jn(t, e) {
    var n;
    return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((function(t) {
        return N.C(t.referenceValue);
    }));
}

/** A Filter that implements the array-contains operator. */ var tr = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "array-contains" /* ARRAY_CONTAINS */ , n) || this;
    }
    return t.__extends(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return ae(e) && Jt(e.arrayValue, this.value);
    }, n;
}(Yn), er = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "in" /* IN */ , n) || this;
    }
    return t.__extends(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return null !== e && Jt(this.value.arrayValue, e);
    }, n;
}(Yn), nr = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "not-in" /* NOT_IN */ , n) || this;
    }
    return t.__extends(n, e), n.prototype.matches = function(t) {
        var e = t.field(this.field);
        return null !== e && !Jt(this.value.arrayValue, e);
    }, n;
}(Yn), rr = /** @class */ function(e) {
    function n(t, n) {
        return e.call(this, t, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , n) || this;
    }
    return t.__extends(n, e), n.prototype.matches = function(t) {
        var e = this, n = t.field(this.field);
        return !(!ae(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
            return Jt(e.value.arrayValue, t);
        }));
    }, n;
}(Yn), ir = function(t, e) {
    this.position = t, this.before = e;
};

/** A Filter that implements the IN operator. */ function or(t) {
    // TODO(b/29183165): Make this collision robust.
    return (t.before ? "b" : "a") + ":" + t.position.map((function(t) {
        return ne(t);
    })).join(",");
}

/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */ function sr(t, e, n) {
    for (var r = 0, i = 0; i < t.position.length; i++) {
        var o = e[i], s = t.position[i];
        if (r = o.field.p() ? N.i(N.C(s.referenceValue), n.key) : te(s, n.field(o.field)), 
        "desc" /* DESCENDING */ === o.dir && (r *= -1), 0 !== r) break;
    }
    return t.before ? r <= 0 : r < 0;
}

function ur(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.before !== e.before || t.position.length !== e.position.length) return !1;
    for (var n = 0; n < t.position.length; n++) if (!Zt(t.position[n], e.position[n])) return !1;
    return !0;
}

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ var ar = function(t, e /* ASCENDING */) {
    void 0 === e && (e = "asc"), this.field = t, this.dir = e;
};

function cr(t, e, n) {
    var r = t.field.p() ? N.i(e.key, n.key) : function(t, e, n) {
        var r = e.field(t), i = n.field(t);
        return null !== r && null !== i ? te(r, i) : y();
    }(t.field, e, n);
    switch (t.dir) {
      case "asc" /* ASCENDING */ :
        return r;

      case "desc" /* DESCENDING */ :
        return -1 * r;

      default:
        return y();
    }
}

function hr(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var fr = function() {
    var t = this;
    this.promise = new Promise((function(e, n) {
        t.resolve = e, t.reject = n;
    }));
}, lr = /** @class */ function() {
    function t(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , r
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i) {
        void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), 
        this._n = t, this.fn = e, this.dn = n, this.wn = r, this.mn = i, this.Tn = 0, this.En = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.In = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    return t.prototype.reset = function() {
        this.Tn = 0;
    }, 
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.An = function() {
        this.Tn = this.mn;
    }, 
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype.Rn = function(t) {
        var e = this;
        // Cancel any pending backoff operation.
                this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var n = Math.floor(this.Tn + this.Pn()), r = Math.max(0, Date.now() - this.In), i = Math.max(0, n - r);
        // Guard against lastAttemptTime being in the future due to a clock change.
                i > 0 && l("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.Tn + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), 
        this.En = this._n.gn(this.fn, i, (function() {
            return e.In = Date.now(), t();
        })), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.Tn *= this.wn, this.Tn < this.dn && (this.Tn = this.dn), this.Tn > this.mn && (this.Tn = this.mn);
    }, t.prototype.yn = function() {
        null !== this.En && (this.En.Vn(), this.En = null);
    }, t.prototype.cancel = function() {
        null !== this.En && (this.En.cancel(), this.En = null);
    }, 
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ t.prototype.Pn = function() {
        return (Math.random() - .5) * this.Tn;
    }, t;
}(), pr = /** @class */ function() {
    function t(t) {
        var e = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
                this.pn = null, this.bn = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.vn = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.Sn = !1, t((function(t) {
            e.vn = !0, e.result = t, e.pn && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            e.pn(t);
        }), (function(t) {
            e.vn = !0, e.error = t, e.bn && e.bn(t);
        }));
    }
    return t.prototype.catch = function(t) {
        return this.next(void 0, t);
    }, t.prototype.next = function(e, n) {
        var r = this;
        return this.Sn && y(), this.Sn = !0, this.vn ? this.error ? this.Dn(n, this.error) : this.Cn(e, this.result) : new t((function(t, i) {
            r.pn = function(n) {
                r.Cn(e, n).next(t, i);
            }, r.bn = function(e) {
                r.Dn(n, e).next(t, i);
            };
        }));
    }, t.prototype.Nn = function() {
        var t = this;
        return new Promise((function(e, n) {
            t.next(e, n);
        }));
    }, t.prototype.Fn = function(e) {
        try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
        } catch (e) {
            return t.reject(e);
        }
    }, t.prototype.Cn = function(e, n) {
        return e ? this.Fn((function() {
            return e(n);
        })) : t.resolve(n);
    }, t.prototype.Dn = function(e, n) {
        return e ? this.Fn((function() {
            return e(n);
        })) : t.reject(n);
    }, t.resolve = function(e) {
        return new t((function(t, n) {
            t(e);
        }));
    }, t.reject = function(e) {
        return new t((function(t, n) {
            n(e);
        }));
    }, t.$n = function(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
        return new t((function(t, n) {
            var r = 0, i = 0, o = !1;
            e.forEach((function(e) {
                ++r, e.next((function() {
                    ++i, o && i === r && t();
                }), (function(t) {
                    return n(t);
                }));
            })), o = !0, i === r && t();
        }));
    }, 
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    t.xn = function(e) {
        for (var n = t.resolve(!1), r = function(e) {
            n = n.next((function(n) {
                return n ? t.resolve(n) : e();
            }));
        }, i = 0, o = e; i < o.length; i++) {
            r(o[i]);
        }
        return n;
    }, t.forEach = function(t, e) {
        var n = this, r = [];
        return t.forEach((function(t, i) {
            r.push(e.call(n, t, i));
        })), this.$n(r);
    }, t;
}(), dr = /** @class */ function() {
    /*
     * Creates a new SimpleDb wrapper for IndexedDb database `name`.
     *
     * Note that `version` must not be a downgrade. IndexedDB does not support
     * downgrading the schema version. We currently do not support any way to do
     * versioning outside of IndexedDB's versioning mechanism, as only
     * version-upgrade transactions are allowed to do things like create
     * objectstores.
     */
    function e(t, n, i) {
        this.name = t, this.version = n, this.kn = i, 
        // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
        // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
        // whatever reason it's much harder to hit after 12.2 so we only proactively
        // log on 12.2.
        12.2 === e.Mn(r.getUA()) && p("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
    }
    /** Deletes the specified database. */    return e.delete = function(t) {
        return l("SimpleDb", "Removing database:", t), _r(window.indexedDB.deleteDatabase(t)).Nn();
    }, 
    /** Returns true if IndexedDB is available in the current environment. */ e.On = function() {
        if ("undefined" == typeof indexedDB) return !1;
        if (e.Ln()) return !0;
        // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.
                var t = r.getUA(), n = e.Mn(t), i = 0 < n && n < 10, o = e.Bn(t), s = 0 < o && o < 4.5;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // iOS Safari: Disable for users running iOS version < 10.
                return !(t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0 || i || s);
    }, 
    /**
     * Returns true if the backing IndexedDB store is the Node IndexedDBShim
     * (see https://github.com/axemclion/IndexedDBShim).
     */
    e.Ln = function() {
        var t;
        return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.qn);
    }, 
    /** Helper to get a typed SimpleDbStore from a transaction. */ e.Un = function(t, e) {
        return t.store(e);
    }, 
    // visible for testing
    /** Parse User Agent to determine iOS version. Returns -1 if not found. */
    e.Mn = function(t) {
        var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, 
    // visible for testing
    /** Parse User Agent to determine Android version. Returns -1 if not found. */
    e.Bn = function(t) {
        var e = t.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, 
    /**
     * Opens the specified database, creating or upgrading it if necessary.
     */
    e.prototype.Qn = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            var e, n = this;
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.db ? [ 3 /*break*/ , 2 ] : (l("SimpleDb", "Opening database:", this.name), 
                    e = this, [ 4 /*yield*/ , new Promise((function(t, e) {
                        // TODO(mikelehen): Investigate browser compatibility.
                        // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
                        // suggests IE9 and older WebKit browsers handle upgrade
                        // differently. They expect setVersion, as described here:
                        // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
                        var r = indexedDB.open(n.name, n.version);
                        r.onsuccess = function(e) {
                            var n = e.target.result;
                            t(n);
                        }, r.onblocked = function() {
                            e(new yr("Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
                        }, r.onerror = function(t) {
                            var n = t.target.error;
                            "VersionError" === n.name ? e(new c(a.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : e(new yr(n));
                        }, r.onupgradeneeded = function(t) {
                            l("SimpleDb", 'Database "' + n.name + '" requires upgrade from version:', t.oldVersion);
                            var e = t.target.result;
                            n.kn.createOrUpgrade(e, r.transaction, t.oldVersion, n.version).next((function() {
                                l("SimpleDb", "Database upgrade to version " + n.version + " complete");
                            }));
                        };
                    })) ]);

                  case 1:
                    e.db = t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ , (this.Wn && (this.db.onversionchange = function(t) {
                        return n.Wn(t);
                    }), this.db) ];
                }
            }));
        }));
    }, e.prototype.jn = function(t) {
        this.Wn = t, this.db && (this.db.onversionchange = function(e) {
            return t(e);
        });
    }, e.prototype.runTransaction = function(e, n, r) {
        return t.__awaiter(this, void 0, void 0, (function() {
            var i, o, s, u, a;
            return t.__generator(this, (function(c) {
                switch (c.label) {
                  case 0:
                    i = "readonly" === e, o = 0, s = function() {
                        var e, s, a, c, h;
                        return t.__generator(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                ++o, t.label = 1;

                              case 1:
                                return t.trys.push([ 1, 4, , 5 ]), [ 4 /*yield*/ , u.Qn() ];

                              case 2:
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                return u.db = t.sent(), e = mr.open(u.db, i ? "readonly" : "readwrite", n), s = r(e).catch((function(t) {
                                    // Abort the transaction if there was an error.
                                    return e.abort(t), pr.reject(t);
                                })).Nn(), a = {}, s.catch((function() {})), [ 4 /*yield*/ , e.Kn ];

                              case 3:
                                return [ 2 /*return*/ , (a.value = (
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                t.sent(), s), a) ];

                              case 4:
                                return c = t.sent(), h = "FirebaseError" !== c.name && o < 3, l("SimpleDb", "Transaction failed with error: %s. Retrying: %s.", c.message, h), 
                                u.close(), h ? [ 3 /*break*/ , 5 ] : [ 2 /*return*/ , {
                                    value: Promise.reject(c)
                                } ];

                              case 5:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }, u = this, c.label = 1;

                  case 1:
                    return [ 5 /*yield**/ , s() ];

                  case 2:
                    if ("object" == typeof (a = c.sent())) return [ 2 /*return*/ , a.value ];
                    c.label = 3;

                  case 3:
                    return [ 3 /*break*/ , 1 ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.close = function() {
        this.db && this.db.close(), this.db = void 0;
    }, e;
}(), vr = /** @class */ function() {
    function t(t) {
        this.Gn = t, this.zn = !1, this.Hn = null;
    }
    return Object.defineProperty(t.prototype, "vn", {
        get: function() {
            return this.zn;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Yn", {
        get: function() {
            return this.Hn;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cursor", {
        set: function(t) {
            this.Gn = t;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * This function can be called to stop iteration at any point.
     */
    t.prototype.done = function() {
        this.zn = !0;
    }, 
    /**
     * This function can be called to skip to that next key, which could be
     * an index or a primary key.
     */
    t.prototype.Jn = function(t) {
        this.Hn = t;
    }, 
    /**
     * Delete the current cursor value from the object store.
     *
     * NOTE: You CANNOT do this with a keysOnly query.
     */
    t.prototype.delete = function() {
        return _r(this.Gn.delete());
    }, t;
}(), yr = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this, a.UNAVAILABLE, "IndexedDB transaction failed: " + t) || this).name = "IndexedDbTransactionError", 
        n;
    }
    return t.__extends(n, e), n;
}(c);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */
/** Verifies whether `e` is an IndexedDbTransactionError. */ function gr(t) {
    // Use name equality, as instanceof checks on errors don't work with errors
    // that wrap other errors.
    return "IndexedDbTransactionError" === t.name;
}

/**
 * Wraps an IDBTransaction and exposes a store() method to get a handle to a
 * specific object store.
 */ var mr = /** @class */ function() {
    function t(t) {
        var e = this;
        this.transaction = t, this.aborted = !1, 
        /**
             * A promise that resolves with the result of the IndexedDb transaction.
             */
        this.Xn = new fr, this.transaction.oncomplete = function() {
            e.Xn.resolve();
        }, this.transaction.onabort = function() {
            t.error ? e.Xn.reject(new yr(t.error)) : e.Xn.resolve();
        }, this.transaction.onerror = function(t) {
            var n = Ir(t.target.error);
            e.Xn.reject(new yr(n));
        };
    }
    return t.open = function(e, n, r) {
        try {
            return new t(e.transaction(r, n));
        } catch (e) {
            throw new yr(e);
        }
    }, Object.defineProperty(t.prototype, "Kn", {
        get: function() {
            return this.Xn.promise;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.abort = function(t) {
        t && this.Xn.reject(t), this.aborted || (l("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), 
        this.aborted = !0, this.transaction.abort());
    }, 
    /**
     * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
     * operations performed on the SimpleDbStore happen within the context of this
     * transaction and it cannot be used anymore once the transaction is
     * completed.
     *
     * Note that we can't actually enforce that the KeyType and ValueType are
     * correct, but they allow type safety through the rest of the consuming code.
     */
    t.prototype.store = function(t) {
        var e = this.transaction.objectStore(t);
        return new wr(e);
    }, t;
}(), wr = /** @class */ function() {
    function t(t) {
        this.store = t;
    }
    return t.prototype.put = function(t, e) {
        var n;
        return void 0 !== e ? (l("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (l("SimpleDb", "PUT", this.store.name, "<auto-key>", t), 
        n = this.store.put(t)), _r(n);
    }, 
    /**
     * Adds a new value into an Object Store and returns the new key. Similar to
     * IndexedDb's `add()`, this method will fail on primary key collisions.
     *
     * @param value The object to write.
     * @return The key of the value to add.
     */
    t.prototype.add = function(t) {
        return l("SimpleDb", "ADD", this.store.name, t, t), _r(this.store.add(t));
    }, 
    /**
     * Gets the object with the specified key from the specified store, or null
     * if no object exists with the specified key.
     *
     * @key The key of the object to get.
     * @return The object with the specified key or null if no object exists.
     */
    t.prototype.get = function(t) {
        var e = this;
        // We're doing an unsafe cast to ValueType.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return _r(this.store.get(t)).next((function(n) {
            // Normalize nonexistence to null.
            return void 0 === n && (n = null), l("SimpleDb", "GET", e.store.name, t, n), n;
        }));
    }, t.prototype.delete = function(t) {
        return l("SimpleDb", "DELETE", this.store.name, t), _r(this.store.delete(t));
    }, 
    /**
     * If we ever need more of the count variants, we can add overloads. For now,
     * all we need is to count everything in a store.
     *
     * Returns the number of rows in the store.
     */
    t.prototype.count = function() {
        return l("SimpleDb", "COUNT", this.store.name), _r(this.store.count());
    }, t.prototype.Zn = function(t, e) {
        var n = this.cursor(this.options(t, e)), r = [];
        return this.ts(n, (function(t, e) {
            r.push(e);
        })).next((function() {
            return r;
        }));
    }, t.prototype.es = function(t, e) {
        l("SimpleDb", "DELETE ALL", this.store.name);
        var n = this.options(t, e);
        n.ns = !1;
        var r = this.cursor(n);
        return this.ts(r, (function(t, e, n) {
            return n.delete();
        }));
    }, t.prototype.ss = function(t, e) {
        var n;
        e ? n = t : (n = {}, e = t);
        var r = this.cursor(n);
        return this.ts(r, e);
    }, 
    /**
     * Iterates over a store, but waits for the given callback to complete for
     * each entry before iterating the next entry. This allows the callback to do
     * asynchronous work to determine if this iteration should continue.
     *
     * The provided callback should return `true` to continue iteration, and
     * `false` otherwise.
     */
    t.prototype.rs = function(t) {
        var e = this.cursor({});
        return new pr((function(n, r) {
            e.onerror = function(t) {
                var e = Ir(t.target.error);
                r(e);
            }, e.onsuccess = function(e) {
                var r = e.target.result;
                r ? t(r.primaryKey, r.value).next((function(t) {
                    t ? r.continue() : n();
                })) : n();
            };
        }));
    }, t.prototype.ts = function(t, e) {
        var n = [];
        return new pr((function(r, i) {
            t.onerror = function(t) {
                i(t.target.error);
            }, t.onsuccess = function(t) {
                var i = t.target.result;
                if (i) {
                    var o = new vr(i), s = e(i.primaryKey, i.value, o);
                    if (s instanceof pr) {
                        var u = s.catch((function(t) {
                            return o.done(), pr.reject(t);
                        }));
                        n.push(u);
                    }
                    o.vn ? r() : null === o.Yn ? i.continue() : i.continue(o.Yn);
                } else r();
            };
        })).next((function() {
            return pr.$n(n);
        }));
    }, t.prototype.options = function(t, e) {
        var n = void 0;
        return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
            index: n,
            range: e
        };
    }, t.prototype.cursor = function(t) {
        var e = "next";
        if (t.reverse && (e = "prev"), t.index) {
            var n = this.store.index(t.index);
            return t.ns ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }
        return this.store.openCursor(t.range, e);
    }, t;
}();

/**
 * A wrapper around an IDBObjectStore providing an API that:
 *
 * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
 * methods for acting against the object store.
 * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
 * method return a PersistencePromise instead.
 * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
 * intermediate IndexedDB types (IDBCursorWithValue, etc.)
 */
/**
 * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
 * handlers to resolve / reject the PersistencePromise as appropriate.
 */
function _r(t) {
    return new pr((function(e, n) {
        t.onsuccess = function(t) {
            var n = t.target.result;
            e(n);
        }, t.onerror = function(t) {
            var e = Ir(t.target.error);
            n(e);
        };
    }));
}

// Guard so we only report the error once.
var br = !1;

function Ir(t) {
    var e = dr.Mn(r.getUA());
    if (e >= 12.2 && e < 13) {
        var n = "An internal error was encountered in the Indexed Database server";
        if (t.message.indexOf(n) >= 0) {
            // Wrap error in a more descriptive one.
            var i = new c("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
            return br || (br = !0, 
            // Throw a global exception outside of this promise chain, for the user to
            // potentially catch.
            setTimeout((function() {
                throw i;
            }), 0)), i;
        }
    }
    return t;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** The Platform's 'window' implementation or null if not available. */ function Er() {
    // `window` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof window ? window : null;
}

/** The Platform's 'document' implementation or null if not available. */ function Tr() {
    // `document` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof document ? document : null;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ var Ar = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.os = t, this.fn = e, this.cs = n, this.op = r, this.us = i, this.hs = new fr, 
        this.then = this.hs.promise.then.bind(this.hs.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.hs.promise.catch((function(t) {}))
        /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue The queue to schedule the operation on.
     * @param id A Timer ID identifying the type of operation this is.
     * @param delayMs The delay (ms) before the operation should be scheduled.
     * @param op The operation to run.
     * @param removalCallback A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */;
    }
    return t.ls = function(e, n, r, i, o) {
        var s = new t(e, n, Date.now() + r, i, o);
        return s.start(r), s;
    }, 
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t) {
        var e = this;
        this._s = setTimeout((function() {
            return e.fs();
        }), t);
    }, 
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.Vn = function() {
        return this.fs();
    }, 
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t) {
        null !== this._s && (this.clearTimeout(), this.hs.reject(new c(a.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }, t.prototype.fs = function() {
        var t = this;
        this.os.ds((function() {
            return null !== t._s ? (t.clearTimeout(), t.op().then((function(e) {
                return t.hs.resolve(e);
            }))) : Promise.resolve();
        }));
    }, t.prototype.clearTimeout = function() {
        null !== this._s && (this.us(this), clearTimeout(this._s), this._s = null);
    }, t;
}(), Nr = /** @class */ function() {
    function e() {
        var t = this;
        // The last promise in the queue.
                this.ws = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.Ts = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.Es = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.Is = [], 
        // visible for testing
        this.As = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.Rs = !1, 
        // List of TimerIds to fast-forward delays for.
        this.Ps = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.gs = new lr(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.ys = function() {
            var e = Tr();
            e && l("AsyncQueue", "Visibility state changed to  ", e.visibilityState), t.gs.yn();
        };
        var e = Tr();
        e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.ys);
    }
    return Object.defineProperty(e.prototype, "Vs", {
        // Is this AsyncQueue being shut down? If true, this instance will not enqueue
        // any new operations, Promises from enqueue requests will not resolve.
        get: function() {
            return this.Es;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    e.prototype.ds = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }, 
    /**
     * Regardless if the queue has initialized shutdown, adds a new operation to the
     * queue without waiting for it to complete (i.e. we ignore the Promise result).
     */
    e.prototype.ps = function(t) {
        this.bs(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.vs(t);
    }, 
    /**
     * Initialize the shutdown of this queue. Once this method is called, the
     * only possible way to request running an operation is through
     * `enqueueEvenWhileRestricted()`.
     */
    e.prototype.Ss = function() {
        if (!this.Es) {
            this.Es = !0;
            var t = Tr();
            t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.ys);
        }
    }, 
    /**
     * Adds a new operation to the queue. Returns a promise that will be resolved
     * when the promise returned by the new operation is (with its value).
     */
    e.prototype.enqueue = function(t) {
        return this.bs(), this.Es ? new Promise((function(t) {})) : this.vs(t);
    }, 
    /**
     * Enqueue a retryable operation.
     *
     * A retryable operation is rescheduled with backoff if it fails with a
     * IndexedDbTransactionError (the error type used by SimpleDb). All
     * retryable operations are executed in order and only run if all prior
     * operations were retried successfully.
     */
    e.prototype.Ds = function(t) {
        var e = this;
        this.Ts.push(t), this.ds((function() {
            return e.Cs();
        }));
    }, 
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */
    e.prototype.Cs = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            var e, n = this;
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    if (0 === this.Ts.length) return [ 3 /*break*/ , 5 ];
                    t.label = 1;

                  case 1:
                    return t.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , this.Ts[0]() ];

                  case 2:
                    return t.sent(), this.Ts.shift(), this.gs.reset(), [ 3 /*break*/ , 4 ];

                  case 3:
                    if (!gr(e = t.sent())) throw e;
                    // Failure will be handled by AsyncQueue
                                        return l("AsyncQueue", "Operation failed with retryable error: " + e), 
                    [ 3 /*break*/ , 4 ];

                  case 4:
                    this.Ts.length > 0 && 
                    // If there are additional operations, we re-schedule `retryNextOp()`.
                    // This is necessary to run retryable operations that failed during
                    // their initial attempt since we don't know whether they are already
                    // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
                    // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
                    // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
                    // call scheduled here.
                    // Since `backoffAndRun()` cancels an existing backoff and schedules a
                    // new backoff on every call, there is only ever a single additional
                    // operation in the queue.
                    this.gs.Rn((function() {
                        return n.Cs();
                    })), t.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.vs = function(t) {
        var e = this, n = this.ws.then((function() {
            return e.Rs = !0, t().catch((function(t) {
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw e.As = t, e.Rs = !1, p("INTERNAL UNHANDLED ERROR: ", 
                /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error Error or FirestoreError
 */
                function(t) {
                    var e = t.message || "";
                    return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), 
                    e;
                }(t)), t;
            })).then((function(t) {
                return e.Rs = !1, t;
            }));
        }));
        return this.ws = n, n;
    }, 
    /**
     * Schedules an operation to be queued on the AsyncQueue once the specified
     * `delayMs` has elapsed. The returned DelayedOperation can be used to cancel
     * or fast-forward the operation prior to its running.
     */
    e.prototype.gn = function(t, e, n) {
        var r = this;
        this.bs(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.Ps.indexOf(t) > -1 && (e = 0);
        var i = Ar.ls(this, t, e, n, (function(t) {
            return r.Ns(t);
        }));
        return this.Is.push(i), i;
    }, e.prototype.bs = function() {
        this.As && y();
    }, 
    /**
     * Verifies there's an operation currently in-progress on the AsyncQueue.
     * Unfortunately we can't verify that the running code is in the promise chain
     * of that operation, so this isn't a foolproof check, but it should be enough
     * to catch some bugs.
     */
    e.prototype.Fs = function() {}, 
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    e.prototype.$s = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            var e;
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , e = this.ws ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    if (e !== this.ws) return [ 3 /*break*/ , 0 ];
                    t.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    e.prototype.xs = function(t) {
        for (var e = 0, n = this.Is; e < n.length; e++) {
            if (n[e].fn === t) return !0;
        }
        return !1;
    }, 
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId Delayed operations up to and including this TimerId will
     *  be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    e.prototype.ks = function(t) {
        var e = this;
        // Note that draining may generate more delayed ops, so we do that first.
                return this.$s().then((function() {
            // Run ops in the same order they'd run if they ran naturally.
            e.Is.sort((function(t, e) {
                return t.cs - e.cs;
            }));
            for (var n = 0, r = e.Is; n < r.length; n++) {
                var i = r[n];
                if (i.Vn(), "all" /* All */ !== t && i.fn === t) break;
            }
            return e.$s();
        }));
    }, 
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    e.prototype.Ms = function(t) {
        this.Ps.push(t);
    }, 
    /** Called once a DelayedOperation is run or canceled. */ e.prototype.Ns = function(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.Is.indexOf(t);
        this.Is.splice(e, 1);
    }, e;
}();

/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */
function Dr(t, e) {
    if (p("AsyncQueue", e + ": " + t), gr(t)) return new c(a.UNAVAILABLE, e + ": " + t);
    throw t;
}

var Sr = function() {
    this.Os = void 0, this.listeners = [];
}, xr = function() {
    this.Ls = new it((function(t) {
        return Qn(t);
    }), Gn), this.onlineState = "Unknown" /* Unknown */ , this.Bs = new Set;
};

function kr(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i, o, s, u, a, c;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                if (r = m(e), i = n.query, o = !1, (s = r.Ls.get(i)) || (o = !0, s = new Sr), !o) return [ 3 /*break*/ , 4 ];
                t.label = 1;

              case 1:
                return t.trys.push([ 1, 3, , 4 ]), u = s, [ 4 /*yield*/ , r.qs(i) ];

              case 2:
                return u.Os = t.sent(), [ 3 /*break*/ , 4 ];

              case 3:
                return a = t.sent(), c = Dr(a, "Initialization of query '" + Wn(n.query) + "' failed"), 
                [ 2 /*return*/ , void n.onError(c) ];

              case 4:
                return r.Ls.set(i, s), s.listeners.push(n), 
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                n.Us(r.onlineState), s.Os && n.Qs(s.Os) && Pr(r), [ 2 /*return*/ ];
            }
        }));
    }));
}

function Lr(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i, o, s, u;
        return t.__generator(this, (function(t) {
            return r = m(e), i = n.query, o = !1, (s = r.Ls.get(i)) && (u = s.listeners.indexOf(n)) >= 0 && (s.listeners.splice(u, 1), 
            o = 0 === s.listeners.length), o ? [ 2 /*return*/ , (r.Ls.delete(i), r.Ws(i)) ] : [ 2 /*return*/ ];
        }));
    }));
}

function Rr(t, e) {
    for (var n = m(t), r = !1, i = 0, o = e; i < o.length; i++) {
        var s = o[i], u = s.query, a = n.Ls.get(u);
        if (a) {
            for (var c = 0, h = a.listeners; c < h.length; c++) {
                h[c].Qs(s) && (r = !0);
            }
            a.Os = s;
        }
    }
    r && Pr(n);
}

function Or(t, e, n) {
    var r = m(t), i = r.Ls.get(e);
    if (i) for (var o = 0, s = i.listeners; o < s.length; o++) {
        s[o].onError(n);
    }
    // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
    // after an error.
        r.Ls.delete(e);
}

function Ur(t, e) {
    var n = m(t);
    n.onlineState = e;
    var r = !1;
    n.Ls.forEach((function(t, n) {
        for (var i = 0, o = n.listeners; i < o.length; i++) {
            // Run global snapshot listeners if a consistent snapshot has been emitted.
            o[i].Us(e) && (r = !0);
        }
    })), r && Pr(n);
}

// Call all global snapshot listeners that have been set.
function Pr(t) {
    t.Bs.forEach((function(t) {
        t.next();
    }));
}

/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */ var Vr = /** @class */ function() {
    function t(t, e, n) {
        this.query = t, this.js = e, 
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.Ks = !1, this.Gs = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {}
        /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */;
    }
    return t.prototype.Qs = function(t) {
        if (!this.options.includeMetadataChanges) {
            for (
            // Remove the metadata only changes.
            var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 /* Metadata */ !== i.type && e.push(i);
            }
            t = new Mt(t.query, t.docs, t.Ut, e, t.Qt, t.fromCache, t.Wt, 
            /* excludesMetadataChanges= */ !0);
        }
        var o = !1;
        return this.Ks ? this.zs(t) && (this.js.next(t), o = !0) : this.Hs(t, this.onlineState) && (this.Ys(t), 
        o = !0), this.Gs = t, o;
    }, t.prototype.onError = function(t) {
        this.js.error(t);
    }, 
    /** Returns whether a snapshot was raised. */ t.prototype.Us = function(t) {
        this.onlineState = t;
        var e = !1;
        return this.Gs && !this.Ks && this.Hs(this.Gs, t) && (this.Ys(this.Gs), e = !0), 
        e;
    }, t.prototype.Hs = function(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                var n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return !(this.options.Js && n || t.docs.m() && "Offline" /* Offline */ !== e);
        // Raise data from cache if we have any documents or we are offline
        }, t.prototype.zs = function(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.Gs && this.Gs.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.Wt && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }, t.prototype.Ys = function(t) {
        t = Mt.Kt(t.query, t.docs, t.Qt, t.fromCache), this.Ks = !0, this.js.next(t);
    }, t;
}(), Cr = /** @class */ function() {
    function t(t) {
        this.uid = t;
    }
    return t.prototype.Xs = function() {
        return null != this.uid;
    }, 
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.Zs = function() {
        return this.Xs() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t) {
        return t.uid === this.uid;
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Simple wrapper around a nullable UID. Mostly exists to make code more
 * readable.
 */
/** A user with a null UID. */ Cr.UNAUTHENTICATED = new Cr(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
Cr.ti = new Cr("google-credentials-uid"), Cr.ei = new Cr("first-party-uid");

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * `ListenSequence` is a monotonic sequence. It is initialized with a minimum value to
 * exceed. All subsequent calls to next will return increasing values. If provided with a
 * `SequenceNumberSyncer`, it will additionally bump its next value when told of a new value, as
 * well as write out sequence numbers that it produces via `next()`.
 */
var Mr = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e.ni = function(t) {
            return n.si(t);
        }, this.ii = function(t) {
            return e.ri(t);
        });
    }
    return t.prototype.si = function(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
        var t = ++this.previousValue;
        return this.ii && this.ii(t), t;
    }, t;
}();

/** Assembles the key for a client state in WebStorage */
function Fr(t, e) {
    return "firestore_clients_" + t + "_" + e;
}

// The format of the WebStorage key that stores the mutation state is:
//     firestore_mutations_<persistence_prefix>_<batch_id>
//     (for unauthenticated users)
// or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
// 'user_uid' is last to avoid needing to escape '_' characters that it might
// contain.
/** Assembles the key for a mutation batch in WebStorage */ function qr(t, e, n) {
    var r = "firestore_mutations_" + t + "_" + n;
    return e.Xs() && (r += "_" + e.uid), r;
}

// The format of the WebStorage key that stores a query target's metadata is:
//     firestore_targets_<persistence_prefix>_<target_id>
/** Assembles the key for a query state in WebStorage */ function jr(t, e) {
    return "firestore_targets_" + t + "_" + e;
}

// The WebStorage prefix that stores the primary tab's online state. The
// format of the key is:
//     firestore_online_state_<persistence_prefix>
/**
 * Holds the state of a mutation batch, including its user ID, batch ID and
 * whether the batch is 'pending', 'acknowledged' or 'rejected'.
 */
// Visible for testing
Mr.oi = -1;

var zr = /** @class */ function() {
    function t(t, e, n, r) {
        this.user = t, this.batchId = e, this.state = n, this.error = r
        /**
     * Parses a MutationMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.ai = function(e, n, r) {
        var i = JSON.parse(r), o = "object" == typeof i && -1 !== [ "pending", "acknowledged", "rejected" ].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error), s = void 0;
        return o && i.error && ((o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (s = new c(i.error.code, i.error.message))), 
        o ? new t(e, n, i.state, s) : (p("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), 
        null);
    }, t.prototype.ci = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), Br = /** @class */ function() {
    function t(t, e, n) {
        this.targetId = t, this.state = e, this.error = n
        /**
     * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.ai = function(e, n) {
        var r = JSON.parse(n), i = "object" == typeof r && -1 !== [ "not-current", "current", "rejected" ].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error), o = void 0;
        return i && r.error && ((i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new c(r.error.code, r.error.message))), 
        i ? new t(e, r.state, o) : (p("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), 
        null);
    }, t.prototype.ci = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), Gr = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.activeTargetIds = e
        /**
     * Parses a RemoteClientState from the JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.ai = function(e, n) {
        for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = Pt(), s = 0; i && s < r.activeTargetIds.length; ++s) i = ct(r.activeTargetIds[s]), 
        o = o.add(r.activeTargetIds[s]);
        return i ? new t(e, o) : (p("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), 
        null);
    }, t;
}(), Qr = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.onlineState = e
        /**
     * Parses a SharedOnlineState from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.ai = function(e) {
        var n = JSON.parse(e);
        return "object" == typeof n && -1 !== [ "Unknown", "Online", "Offline" ].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (p("SharedClientState", "Failed to parse online state: " + e), 
        null);
    }, t;
}(), Wr = /** @class */ function() {
    function t() {
        this.activeTargetIds = Pt();
    }
    return t.prototype.ui = function(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }, t.prototype.hi = function(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }, 
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.ci = function() {
        var t = {
            activeTargetIds: this.activeTargetIds.A(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }, t;
}(), Kr = /** @class */ function() {
    function e(t, e, n, r, i) {
        this.window = t, this._n = e, this.persistenceKey = n, this.li = r, this._i = null, 
        this.fi = null, this.ni = null, this.di = this.wi.bind(this), this.mi = new bt(H), 
        this.Ti = !1, 
        /**
             * Captures WebStorage events that occur before `start()` is called. These
             * events are replayed once `WebStorageSharedClientState` is started.
             */
        this.Ei = [];
        // Escape the special characters mentioned here:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.storage = this.window.localStorage, this.currentUser = i, this.Ii = Fr(this.persistenceKey, this.li), 
        this.Ai = 
        /** Assembles the key for the current sequence number. */
        function(t) {
            return "firestore_sequence_number_" + t;
        }(this.persistenceKey), this.mi = this.mi.rt(this.li, new Wr), this.Ri = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), 
        this.Pi = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.gi = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), 
        this.yi = 
        /** Assembles the key for the online state of the primary tab. */
        function(t) {
            return "firestore_online_state_" + t;
        }(this.persistenceKey), 
        // Rather than adding the storage observer during start(), we add the
        // storage observer during initialization. This ensures that we collect
        // events before other components populate their initial state (during their
        // respective start() calls). Otherwise, we might for example miss a
        // mutation that is added after LocalStore's start() processed the existing
        // mutations but before we observe WebStorage events.
        this.window.addEventListener("storage", this.di);
    }
    /** Returns 'true' if WebStorage is available in the current environment. */    return e.On = function(t) {
        return !(!t || !t.localStorage);
    }, e.prototype.start = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            var e, n, r, i, o, s, u, a, c, h, f, l = this;
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this._i.Vi() ];

                  case 1:
                    for (e = t.sent(), n = 0, r = e; n < r.length; n++) (i = r[n]) !== this.li && (o = this.getItem(Fr(this.persistenceKey, i))) && (s = Gr.ai(i, o)) && (this.mi = this.mi.rt(s.clientId, s));
                    for (this.pi(), (u = this.storage.getItem(this.yi)) && (a = this.bi(u)) && this.vi(a), 
                    c = 0, h = this.Ei; c < h.length; c++) f = h[c], this.wi(f);
                    return this.Ei = [], 
                    // Register a window unload hook to remove the client metadata entry from
                    // WebStorage even if `shutdown()` was not called.
                    this.window.addEventListener("unload", (function() {
                        return l.Si();
                    })), this.Ti = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.ri = function(t) {
        this.setItem(this.Ai, JSON.stringify(t));
    }, e.prototype.Di = function() {
        return this.Ci(this.mi);
    }, e.prototype.Ni = function(t) {
        var e = !1;
        return this.mi.forEach((function(n, r) {
            r.activeTargetIds.has(t) && (e = !0);
        })), e;
    }, e.prototype.Fi = function(t) {
        this.$i(t, "pending");
    }, e.prototype.xi = function(t, e, n) {
        this.$i(t, e, n), 
        // Once a final mutation result is observed by other clients, they no longer
        // access the mutation's metadata entry. Since WebStorage replays events
        // in order, it is safe to delete the entry right after updating it.
        this.ki(t);
    }, e.prototype.Mi = function(t) {
        var e = "not-current";
        // Lookup an existing query state if the target ID was already registered
        // by another tab
                if (this.Ni(t)) {
            var n = this.storage.getItem(jr(this.persistenceKey, t));
            if (n) {
                var r = Br.ai(t, n);
                r && (e = r.state);
            }
        }
        return this.Oi.ui(t), this.pi(), e;
    }, e.prototype.Li = function(t) {
        this.Oi.hi(t), this.pi();
    }, e.prototype.Bi = function(t) {
        return this.Oi.activeTargetIds.has(t);
    }, e.prototype.qi = function(t) {
        this.removeItem(jr(this.persistenceKey, t));
    }, e.prototype.Ui = function(t, e, n) {
        this.Qi(t, e, n);
    }, e.prototype.Wi = function(t, e, n) {
        var r = this;
        e.forEach((function(t) {
            r.ki(t);
        })), this.currentUser = t, n.forEach((function(t) {
            r.Fi(t);
        }));
    }, e.prototype.ji = function(t) {
        this.Ki(t);
    }, e.prototype.Si = function() {
        this.Ti && (this.window.removeEventListener("storage", this.di), this.removeItem(this.Ii), 
        this.Ti = !1);
    }, e.prototype.getItem = function(t) {
        var e = this.storage.getItem(t);
        return l("SharedClientState", "READ", t, e), e;
    }, e.prototype.setItem = function(t, e) {
        l("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
    }, e.prototype.removeItem = function(t) {
        l("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
    }, e.prototype.wi = function(e) {
        var n = this, r = e;
        // Note: The function is typed to take Event to be interface-compatible with
        // `Window.addEventListener`.
                if (r.storageArea === this.storage) {
            if (l("SharedClientState", "EVENT", r.key, r.newValue), r.key === this.Ii) return void p("Received WebStorage notification for local change. Another client might have garbage-collected our state");
            this._n.Ds((function() {
                return t.__awaiter(n, void 0, void 0, (function() {
                    var e, n, i, o, s, u;
                    return t.__generator(this, (function(t) {
                        if (this.Ti) {
                            if (null !== r.key) if (this.Ri.test(r.key)) {
                                if (null == r.newValue) return e = this.Gi(r.key), [ 2 /*return*/ , this.zi(e, null) ];
                                if (n = this.Hi(r.key, r.newValue)) return [ 2 /*return*/ , this.zi(n.clientId, n) ];
                            } else if (this.Pi.test(r.key)) {
                                if (null !== r.newValue && (i = this.Yi(r.key, r.newValue))) return [ 2 /*return*/ , this.Ji(i) ];
                            } else if (this.gi.test(r.key)) {
                                if (null !== r.newValue && (o = this.Xi(r.key, r.newValue))) return [ 2 /*return*/ , this.Zi(o) ];
                            } else if (r.key === this.yi) {
                                if (null !== r.newValue && (s = this.bi(r.newValue))) return [ 2 /*return*/ , this.vi(s) ];
                            } else r.key === this.Ai && (u = function(t) {
                                var e = Mr.oi;
                                if (null != t) try {
                                    var n = JSON.parse(t);
                                    g("number" == typeof n), e = n;
                                } catch (t) {
                                    p("SharedClientState", "Failed to read sequence number from WebStorage", t);
                                }
                                return e;
                            }(r.newValue)) !== Mr.oi && this.ni(u);
                        } else this.Ei.push(r);
                        return [ 2 /*return*/ ];
                    }));
                }));
            }));
        }
    }, Object.defineProperty(e.prototype, "Oi", {
        get: function() {
            return this.mi.get(this.li);
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.pi = function() {
        this.setItem(this.Ii, this.Oi.ci());
    }, e.prototype.$i = function(t, e, n) {
        var r = new zr(this.currentUser, t, e, n), i = qr(this.persistenceKey, this.currentUser, t);
        this.setItem(i, r.ci());
    }, e.prototype.ki = function(t) {
        var e = qr(this.persistenceKey, this.currentUser, t);
        this.removeItem(e);
    }, e.prototype.Ki = function(t) {
        var e = {
            clientId: this.li,
            onlineState: t
        };
        this.storage.setItem(this.yi, JSON.stringify(e));
    }, e.prototype.Qi = function(t, e, n) {
        var r = jr(this.persistenceKey, t), i = new Br(t, e, n);
        this.setItem(r, i.ci());
    }, 
    /**
     * Parses a client state key in WebStorage. Returns null if the key does not
     * match the expected key format.
     */
    e.prototype.Gi = function(t) {
        var e = this.Ri.exec(t);
        return e ? e[1] : null;
    }, 
    /**
     * Parses a client state in WebStorage. Returns 'null' if the value could not
     * be parsed.
     */
    e.prototype.Hi = function(t, e) {
        var n = this.Gi(t);
        return Gr.ai(n, e);
    }, 
    /**
     * Parses a mutation batch state in WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    e.prototype.Yi = function(t, e) {
        var n = this.Pi.exec(t), r = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
        return zr.ai(new Cr(i), r, e);
    }, 
    /**
     * Parses a query target state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    e.prototype.Xi = function(t, e) {
        var n = this.gi.exec(t), r = Number(n[1]);
        return Br.ai(r, e);
    }, 
    /**
     * Parses an online state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    e.prototype.bi = function(t) {
        return Qr.ai(t);
    }, e.prototype.Ji = function(e) {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(t) {
                return e.user.uid === this.currentUser.uid ? [ 2 /*return*/ , this._i.tr(e.batchId, e.state, e.error) ] : (l("SharedClientState", "Ignoring mutation for non-active user " + e.user.uid), 
                [ 2 /*return*/ ]);
            }));
        }));
    }, e.prototype.Zi = function(t) {
        return this._i.er(t.targetId, t.state, t.error);
    }, e.prototype.zi = function(t, e) {
        var n = this, r = e ? this.mi.rt(t, e) : this.mi.remove(t), i = this.Ci(this.mi), o = this.Ci(r), s = [], u = [];
        return o.forEach((function(t) {
            i.has(t) || s.push(t);
        })), i.forEach((function(t) {
            o.has(t) || u.push(t);
        })), this._i.nr(s, u).then((function() {
            n.mi = r;
        }));
    }, e.prototype.vi = function(t) {
        // We check whether the client that wrote this online state is still active
        // by comparing its client ID to the list of clients kept active in
        // IndexedDb. If a client does not update their IndexedDb client state
        // within 5 seconds, it is considered inactive and we don't emit an online
        // state event.
        this.mi.get(t.clientId) && this.fi(t.onlineState);
    }, e.prototype.Ci = function(t) {
        var e = Pt();
        return t.forEach((function(t, n) {
            e = e.xt(n.activeTargetIds);
        })), e;
    }, e;
}(), Hr = /** @class */ function() {
    function t() {
        this.sr = new Wr, this.ir = {}, this.fi = null, this.ni = null;
    }
    return t.prototype.Fi = function(t) {
        // No op.
    }, t.prototype.xi = function(t, e, n) {
        // No op.
    }, t.prototype.Mi = function(t) {
        return this.sr.ui(t), this.ir[t] || "not-current";
    }, t.prototype.Ui = function(t, e, n) {
        this.ir[t] = e;
    }, t.prototype.Li = function(t) {
        this.sr.hi(t);
    }, t.prototype.Bi = function(t) {
        return this.sr.activeTargetIds.has(t);
    }, t.prototype.qi = function(t) {
        delete this.ir[t];
    }, t.prototype.Di = function() {
        return this.sr.activeTargetIds;
    }, t.prototype.Ni = function(t) {
        return this.sr.activeTargetIds.has(t);
    }, t.prototype.start = function() {
        return this.sr = new Wr, Promise.resolve();
    }, t.prototype.Wi = function(t, e, n) {
        // No op.
    }, t.prototype.ji = function(t) {
        // No op.
    }, t.prototype.Si = function() {}, t.prototype.ri = function(t) {}, t;
}(), Yr = /** @class */ function() {
    /**
     * @param batchId The unique ID of this mutation batch.
     * @param localWriteTime The original write time of this mutation.
     * @param baseMutations Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    function t(t, e, n, r) {
        this.batchId = t, this.rr = e, this.baseMutations = n, this.mutations = r
        /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     * @param batchResult The result of applying the MutationBatch to the
     * backend.
     */;
    }
    return t.prototype.ar = function(t, e, n) {
        for (var r = n.cr, i = 0; i < this.mutations.length; i++) {
            var o = this.mutations[i];
            o.key.isEqual(t) && (e = hn(o, e, r[i]));
        }
        return e;
    }, 
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey The key of the document to apply mutations to.
     * @param maybeDoc The document to apply mutations to.
     */
    t.prototype.ur = function(t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var n = 0, r = this.baseMutations; n < r.length; n++) {
            var i = r[n];
            i.key.isEqual(t) && (e = fn(i, e, e, this.rr));
        }
        // Second, apply all user-provided mutations.
        for (var o = e, s = 0, u = this.mutations; s < u.length; s++) {
            var a = u[s];
            a.key.isEqual(t) && (e = fn(a, e, o, this.rr));
        }
        return e;
    }, 
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    t.prototype.hr = function(t) {
        var e = this, n = t;
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
                return this.mutations.forEach((function(r) {
            var i = e.ur(r.key, t.get(r.key));
            i && (n = n.rt(r.key, i));
        })), n;
    }, t.prototype.keys = function() {
        return this.mutations.reduce((function(t, e) {
            return t.add(e.key);
        }), Ot());
    }, t.prototype.isEqual = function(t) {
        return this.batchId === t.batchId && Y(this.mutations, t.mutations, (function(t, e) {
            return pn(t, e);
        })) && Y(this.baseMutations, t.baseMutations, (function(t, e) {
            return pn(t, e);
        }));
    }, t;
}(), $r = /** @class */ function() {
    function t(t, e, n, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    r) {
        this.batch = t, this.lr = e, this.cr = n, this._r = r
        /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=>version mapping (docVersions).
     */;
    }
    return t.from = function(e, n, r) {
        g(e.mutations.length === r.length);
        for (var i = Lt, o = e.mutations, s = 0; s < o.length; s++) i = i.rt(o[s].key, r[s].version);
        return new t(e, n, r, i);
    }, t;
}(), Xr = /** @class */ function() {
    function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.dr = new it((function(t) {
            return t.toString();
        }), (function(t, e) {
            return t.isEqual(e);
        })), this.wr = !1;
    }
    return Object.defineProperty(t.prototype, "readTime", {
        get: function() {
            return this.mr;
        },
        set: function(t) {
            this.mr = t;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Tr = function(t, e) {
        this.Er(), this.readTime = e, this.dr.set(t.key, t);
    }, 
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.Ir = function(t, e) {
        this.Er(), e && (this.readTime = e), this.dr.set(t, null);
    }, 
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKey The key of the entry to look up.
     * @return The cached Document or NoDocument entry, or null if we have nothing
     * cached.
     */
    t.prototype.Ar = function(t, e) {
        this.Er();
        var n = this.dr.get(e);
        return void 0 !== n ? pr.resolve(n) : this.Rr(t, e);
    }, 
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys The keys of the entries to look up.
     * @return A map of cached `Document`s or `NoDocument`s, indexed by key. If an
     *     entry cannot be found, the corresponding key will be mapped to a null
     *     value.
     */
    t.prototype.getEntries = function(t, e) {
        return this.Pr(t, e);
    }, 
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t) {
        return this.Er(), this.wr = !0, this.gr(t);
    }, 
    /** Helper to assert this.changes is not null  */ t.prototype.Er = function() {}, 
    t;
}(), Zr = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", Jr = /** @class */ function() {
    function t() {
        this.yr = [];
    }
    return t.prototype.Vr = function(t) {
        this.yr.push(t);
    }, t.prototype.pr = function() {
        this.yr.forEach((function(t) {
            return t();
        }));
    }, t;
}(), ti = /** @class */ function() {
    function t(t, e, n) {
        this.br = t, this.vr = e, this.Sr = n
        /**
     * Get the local view of the document identified by `key`.
     *
     * @return Local view of the document or null if we don't have any cached
     * state for it.
     */;
    }
    return t.prototype.Dr = function(t, e) {
        var n = this;
        return this.vr.Cr(t, e).next((function(r) {
            return n.Nr(t, e, r);
        }));
    }, 
    /** Internal version of `getDocument` that allows reusing batches. */ t.prototype.Nr = function(t, e, n) {
        return this.br.Ar(t, e).next((function(t) {
            for (var r = 0, i = n; r < i.length; r++) {
                t = i[r].ur(e, t);
            }
            return t;
        }));
    }, 
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.Fr = function(t, e, n) {
        var r = St();
        return e.forEach((function(t, e) {
            for (var i = 0, o = n; i < o.length; i++) {
                e = o[i].ur(t, e);
            }
            r = r.rt(t, e);
        })), r;
    }, 
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    t.prototype.$r = function(t, e) {
        var n = this;
        return this.br.getEntries(t, e).next((function(e) {
            return n.kr(t, e);
        }));
    }, 
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */
    t.prototype.kr = function(t, e) {
        var n = this;
        return this.vr.Mr(t, e).next((function(r) {
            var i = n.Fr(t, e, r), o = Dt();
            return i.forEach((function(t, e) {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                e || (e = new Sn(t, st.min())), o = o.rt(t, e);
            })), o;
        }));
    }, 
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction The persistence transaction.
     * @param query The query to match documents against.
     * @param sinceReadTime If not set to SnapshotVersion.min(), return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    t.prototype.Or = function(t, e, n) {
        /**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */
        return function(t) {
            return N.F(t.path) && null === t.collectionGroup && 0 === t.filters.length;
        }(e) ? this.Lr(t, e.path) : Mn(e) ? this.Br(t, e, n) : this.qr(t, e, n);
    }, t.prototype.Lr = function(t, e) {
        // Just do a simple document lookup.
        return this.Dr(t, new N(e)).next((function(t) {
            var e = kt();
            return t instanceof Dn && (e = e.rt(t.key, t)), e;
        }));
    }, t.prototype.Br = function(t, e, n) {
        var r = this, i = e.collectionGroup, o = kt();
        return this.Sr.Ur(t, i).next((function(s) {
            return pr.forEach(s, (function(s) {
                var u = function(t, e) {
                    return new Ln(e, 
                    /*collectionGroup=*/ null, t.rn.slice(), t.filters.slice(), t.limit, t.on, t.startAt, t.endAt);
                }(e, s.child(i));
                return r.qr(t, u, n).next((function(t) {
                    t.forEach((function(t, e) {
                        o = o.rt(t, e);
                    }));
                }));
            })).next((function() {
                return o;
            }));
        }));
    }, t.prototype.qr = function(t, e, n) {
        var r, i, o = this;
        // Query the remote documents and overlay mutations.
                return this.br.Or(t, e, n).next((function(n) {
            return r = n, o.vr.Qr(t, e);
        })).next((function(e) {
            return i = e, o.Wr(t, i, r).next((function(t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], s = 0, u = o.mutations; s < u.length; s++) {
                    var a = u[s], c = a.key, h = r.get(c), f = fn(a, h, h, o.rr);
                    r = f instanceof Dn ? r.rt(c, f) : r.remove(c);
                }
            }));
        })).next((function() {
            // Finally, filter out any documents that don't actually match
            // the query.
            return r.forEach((function(t, n) {
                Kn(e, n) || (r = r.remove(t));
            })), r;
        }));
    }, t.prototype.Wr = function(t, e, n) {
        for (var r = Ot(), i = 0, o = e; i < o.length; i++) for (var s = 0, u = o[i].mutations; s < u.length; s++) {
            var a = u[s];
            a instanceof yn && null === n.get(a.key) && (r = r.add(a.key));
        }
        var c = n;
        return this.br.getEntries(t, r).next((function(t) {
            return t.forEach((function(t, e) {
                null !== e && e instanceof Dn && (c = c.rt(t, e));
            })), c;
        }));
    }, t;
}(), ei = /** @class */ function() {
    function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this.jr = n, this.Kr = r;
    }
    return t.Gr = function(e, n) {
        for (var r = Ot(), i = Ot(), o = 0, s = n.docChanges; o < s.length; o++) {
            var u = s[o];
            switch (u.type) {
              case 0 /* Added */ :
                r = r.add(u.doc.key);
                break;

              case 1 /* Removed */ :
                i = i.add(u.doc.key);
                // do nothing
                        }
        }
        return new t(e, n.fromCache, r, i);
    }, t;
}();

/**
 * Holds the state of a query target, including its target ID and whether the
 * target is 'not-current', 'current' or 'rejected'.
 */
// Visible for testing
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ni(t, e) {
    var n = t[0], r = t[1], i = e[0], o = e[1], s = H(n, i);
    return 0 === s ? H(r, o) : s;
}

/**
 * Used to calculate the nth sequence number. Keeps a rolling buffer of the
 * lowest n values passed to `addElement`, and finally reports the largest of
 * them in `maxValue`.
 */ var ri = /** @class */ function() {
    function t(t) {
        this.zr = t, this.buffer = new Tt(ni), this.Hr = 0;
    }
    return t.prototype.Yr = function() {
        return ++this.Hr;
    }, t.prototype.Jr = function(t) {
        var e = [ t, this.Yr() ];
        if (this.buffer.size < this.zr) this.buffer = this.buffer.add(e); else {
            var n = this.buffer.last();
            ni(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
        }
    }, Object.defineProperty(t.prototype, "maxValue", {
        get: function() {
            // Guaranteed to be non-empty. If we decide we are not collecting any
            // sequence numbers, nthSequenceNumber below short-circuits. If we have
            // decided that we are collecting n sequence numbers, it's because n is some
            // percentage of the existing sequence numbers. That means we should never
            // be in a situation where we are collecting sequence numbers but don't
            // actually have any.
            return this.buffer.last()[0];
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), ii = {
    Xr: !1,
    Zr: 0,
    eo: 0,
    no: 0
}, oi = /** @class */ function() {
    function t(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    e, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    n) {
        this.so = t, this.io = e, this.ro = n;
    }
    return t.oo = function(e) {
        return new t(e, t.ao, t.co);
    }, t;
}();

oi.uo = -1, oi.ho = 1048576, oi.lo = 41943040, oi.ao = 10, oi.co = 1e3, oi._o = new oi(oi.lo, oi.ao, oi.co), 
oi.fo = new oi(oi.uo, 0, 0);

/**
 * This class is responsible for the scheduling of LRU garbage collection. It handles checking
 * whether or not GC is enabled, as well as which delay to use before the next run.
 */
var si = /** @class */ function() {
    function e(t, e) {
        this.do = t, this.os = e, this.wo = !1, this.mo = null;
    }
    return e.prototype.start = function(t) {
        this.do.params.so !== oi.uo && this.To(t);
    }, e.prototype.stop = function() {
        this.mo && (this.mo.cancel(), this.mo = null);
    }, Object.defineProperty(e.prototype, "Ti", {
        get: function() {
            return null !== this.mo;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.To = function(e) {
        var n = this, r = this.wo ? 3e5 : 6e4;
        l("LruGarbageCollector", "Garbage collection scheduled in " + r + "ms"), this.mo = this.os.gn("lru_garbage_collection" /* LruGarbageCollection */ , r, (function() {
            return t.__awaiter(n, void 0, void 0, (function() {
                var n;
                return t.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        this.mo = null, this.wo = !0, t.label = 1;

                      case 1:
                        return t.trys.push([ 1, 3, , 7 ]), [ 4 /*yield*/ , e.Eo(this.do) ];

                      case 2:
                        return t.sent(), [ 3 /*break*/ , 7 ];

                      case 3:
                        return gr(n = t.sent()) ? (l("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", n), 
                        [ 3 /*break*/ , 6 ]) : [ 3 /*break*/ , 4 ];

                      case 4:
                        return [ 4 /*yield*/ , Eo(n) ];

                      case 5:
                        t.sent(), t.label = 6;

                      case 6:
                        return [ 3 /*break*/ , 7 ];

                      case 7:
                        return [ 4 /*yield*/ , this.To(e) ];

                      case 8:
                        return t.sent(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, e;
}(), ui = /** @class */ function() {
    function t(t, e) {
        this.Io = t, this.params = e
        /** Given a percentile of target to collect, returns the number of targets to collect. */;
    }
    return t.prototype.Ao = function(t, e) {
        return this.Io.Ro(t).next((function(t) {
            return Math.floor(e / 100 * t);
        }));
    }, 
    /** Returns the nth sequence number, counting in order from the smallest. */ t.prototype.Po = function(t, e) {
        var n = this;
        if (0 === e) return pr.resolve(Mr.oi);
        var r = new ri(e);
        return this.Io.De(t, (function(t) {
            return r.Jr(t.sequenceNumber);
        })).next((function() {
            return n.Io.yo(t, (function(t) {
                return r.Jr(t);
            }));
        })).next((function() {
            return r.maxValue;
        }));
    }, 
    /**
     * Removes targets with a sequence number equal to or less than the given upper bound, and removes
     * document associations with those targets.
     */
    t.prototype.Vo = function(t, e, n) {
        return this.Io.Vo(t, e, n);
    }, 
    /**
     * Removes documents that have a sequence number equal to or less than the upper bound and are not
     * otherwise pinned.
     */
    t.prototype.po = function(t, e) {
        return this.Io.po(t, e);
    }, t.prototype.bo = function(t, e) {
        var n = this;
        return this.params.so === oi.uo ? (l("LruGarbageCollector", "Garbage collection skipped; disabled"), 
        pr.resolve(ii)) : this.vo(t).next((function(r) {
            return r < n.params.so ? (l("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.so), 
            ii) : n.So(t, e);
        }));
    }, t.prototype.vo = function(t) {
        return this.Io.vo(t);
    }, t.prototype.So = function(t, e) {
        var r, i, o, s, u, a, c, h = this, p = Date.now();
        return this.Ao(t, this.params.io).next((function(e) {
            // Cap at the configured max
            return e > h.params.ro ? (l("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.ro + " from " + e), 
            i = h.params.ro) : i = e, s = Date.now(), h.Po(t, i);
        })).next((function(n) {
            return r = n, u = Date.now(), h.Vo(t, r, e);
        })).next((function(e) {
            return o = e, a = Date.now(), h.po(t, r);
        })).next((function(t) {
            return c = Date.now(), f() <= n.LogLevel.DEBUG && l("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - p) + "ms\n\tDetermined least recently used " + i + " in " + (u - s) + "ms\n\tRemoved " + o + " targets in " + (a - u) + "ms\n\tRemoved " + t + " documents in " + (c - a) + "ms\nTotal Duration: " + (c - p) + "ms"), 
            pr.resolve({
                Xr: !0,
                Zr: i,
                eo: o,
                no: t
            });
        }));
    }, t;
}();

/** Implements the steps for LRU garbage collection. */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */
function ai(t) {
    for (var e = "", n = 0; n < t.length; n++) e.length > 0 && (e = hi(e)), e = ci(t.get(n), e);
    return hi(e);
}

/** Encodes a single segment of a resource path into the given result */ function ci(t, e) {
    for (var n = e, r = t.length, i = 0; i < r; i++) {
        var o = t.charAt(i);
        switch (o) {
          case "\0":
            n += "";
            break;

          case "":
            n += "";
            break;

          default:
            n += o;
        }
    }
    return n;
}

/** Encodes a path separator into the given result */ function hi(t) {
    return t + "";
}

/**
 * Decodes the given IndexedDb-compatible string form of a resource path into
 * a ResourcePath instance. Note that this method is not suitable for use with
 * decoding resource names from the server; those are One Platform format
 * strings.
 */ function fi(t) {
    // Event the empty path must encode as a path of at least length 2. A path
    // with exactly 2 must be the empty path.
    var e = t.length;
    if (g(e >= 2), 2 === e) return g("" === t.charAt(0) && "" === t.charAt(1)), E.g();
    // Escape characters cannot exist past the second-to-last position in the
    // source value.
        for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        var s = t.indexOf("", o);
        switch ((s < 0 || s > n) && y(), t.charAt(s + 1)) {
          case "":
            var u = t.substring(o, s), a = void 0;
            0 === i.length ? 
            // Avoid copying for the common case of a segment that excludes \0
            // and \001
            a = u : (a = i += u, i = ""), r.push(a);
            break;

          case "":
            i += t.substring(o, s), i += "\0";
            break;

          case "":
            // The escape character can be used in the output to encode itself.
            i += t.substring(o, s + 1);
            break;

          default:
            y();
        }
        o = s + 2;
    }
    return new E(r);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Serializer for values stored in the LocalStore. */ var li = function(t) {
    this.Do = t;
};

/** Decodes a remote document from storage locally to a Document. */ function pi(t, e) {
    if (e.document) return function(t, e, n) {
        var r = Ae(t, e.name), i = be(e.updateTime), o = new En({
            mapValue: {
                fields: e.fields
            }
        });
        return new Dn(r, i, o, {
            hasCommittedMutations: !!n
        });
    }(t.Do, e.document, !!e.hasCommittedMutations);
    if (e.noDocument) {
        var n = N.$(e.noDocument.path), r = mi(e.noDocument.readTime);
        return new Sn(n, r, {
            hasCommittedMutations: !!e.hasCommittedMutations
        });
    }
    if (e.unknownDocument) {
        var i = N.$(e.unknownDocument.path), o = mi(e.unknownDocument.version);
        return new xn(i, o);
    }
    return y();
}

/** Encodes a document for storage locally. */ function di(t, e, n) {
    var r = vi(n), i = e.key.path.h().A();
    if (e instanceof Dn) {
        var o = function(t, e) {
            return {
                name: Te(t, e.key),
                fields: e.sn().mapValue.fields,
                updateTime: me(t, e.version.X())
            };
        }(t.Do, e), s = e.hasCommittedMutations;
        return new Bi(
        /* unknownDocument= */ null, 
        /* noDocument= */ null, o, s, r, i);
    }
    if (e instanceof Sn) {
        var u = e.key.path.A(), a = gi(e.version), c = e.hasCommittedMutations;
        return new Bi(
        /* unknownDocument= */ null, new ji(u, a), 
        /* document= */ null, c, r, i);
    }
    if (e instanceof xn) {
        var h = e.key.path.A(), f = gi(e.version);
        return new Bi(new zi(h, f), 
        /* noDocument= */ null, 
        /* document= */ null, 
        /* hasCommittedMutations= */ !0, r, i);
    }
    return y();
}

function vi(t) {
    var e = t.X();
    return [ e.seconds, e.nanoseconds ];
}

function yi(t) {
    var e = new ot(t[0], t[1]);
    return st.Y(e);
}

function gi(t) {
    var e = t.X();
    return new Vi(e.seconds, e.nanoseconds);
}

function mi(t) {
    var e = new ot(t.seconds, t.nanoseconds);
    return st.Y(e);
}

/** Encodes a batch of mutations into a DbMutationBatch for local storage. */
/** Decodes a DbMutationBatch into a MutationBatch */ function wi(t, e) {
    var n = (e.baseMutations || []).map((function(e) {
        return Re(t.Do, e);
    })), r = e.mutations.map((function(e) {
        return Re(t.Do, e);
    })), i = ot.fromMillis(e.localWriteTimeMs);
    return new Yr(e.batchId, i, n, r);
}

/** Decodes a DbTarget into TargetData */ function _i(t) {
    var e, n, r = mi(t.readTime), i = void 0 !== t.lastLimboFreeSnapshotVersion ? mi(t.lastLimboFreeSnapshotVersion) : st.min();
    return void 0 !== t.query.documents ? (g(1 === (n = t.query).documents.length), 
    e = qn(On(De(n.documents[0])))) : e = function(t) {
        var e = De(t.parent), n = t.structuredQuery, r = n.from ? n.from.length : 0, i = null;
        if (r > 0) {
            g(1 === r);
            var o = n.from[0];
            o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
        }
        var s = [];
        n.where && (s = function t(e) {
            return e ? void 0 !== e.unaryFilter ? [ ze(e) ] : void 0 !== e.fieldFilter ? [ je(e) ] : void 0 !== e.compositeFilter ? e.compositeFilter.filters.map((function(e) {
                return t(e);
            })).reduce((function(t, e) {
                return t.concat(e);
            })) : y() : [];
        }(n.where));
        var u = [];
        n.orderBy && (u = n.orderBy.map((function(t) {
            return function(t) {
                return new ar(qe(t.field), 
                // visible for testing
                function(t) {
                    switch (t) {
                      case "ASCENDING":
                        return "asc" /* ASCENDING */;

                      case "DESCENDING":
                        return "desc" /* DESCENDING */;

                      default:
                        return;
                    }
                }(t.direction));
            }(t);
        })));
        var a = null;
        n.limit && (a = function(t) {
            var e;
            return ut(e = "object" == typeof t ? t.value : t) ? null : e;
        }(n.limit));
        var c = null;
        n.startAt && (c = Ve(n.startAt));
        var h = null;
        return n.endAt && (h = Ve(n.endAt)), qn(Rn(e, i, u, s, a, "F" /* First */ , c, h));
    }(t.query), new gt(e, t.targetId, 0 /* Listen */ , t.lastListenSequenceNumber, r, i, X.fromBase64String(t.resumeToken))
    /** Encodes TargetData into a DbTarget for storage locally. */;
}

function bi(t, e) {
    var n, r = gi(e.et), i = gi(e.lastLimboFreeSnapshotVersion);
    n = dt(e.target) ? Oe(t.Do, e.target) : Ue(t.Do, e.target);
    // We can't store the resumeToken as a ByteString in IndexedDb, so we
    // convert it to a base64 string for storage.
    var o = e.resumeToken.toBase64();
    // lastListenSequenceNumber is always 0 until we do real GC.
        return new Qi(e.targetId, lt(e.target), r, o, e.sequenceNumber, i, n);
}

/**
 * A helper function for figuring out what kind of query has been stored.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A mutation queue for a specific user, backed by IndexedDB. */ var Ii = /** @class */ function() {
    function t(
    /**
     * The normalized userId (e.g. null UID => "" userId) used to store /
     * retrieve mutations.
     */
    t, e, n, r) {
        this.userId = t, this.serializer = e, this.Sr = n, this.Co = r, 
        /**
             * Caches the document keys for pending mutation batches. If the mutation
             * has been removed from IndexedDb, the cached value may continue to
             * be used to retrieve the batch's document keys. To remove a cached value
             * locally, `removeCachedMutationKeys()` should be invoked either directly
             * or through `removeMutationBatches()`.
             *
             * With multi-tab, when the primary client acknowledges or rejects a mutation,
             * this cache is used by secondary clients to invalidate the local
             * view of the documents that were previously affected by the mutation.
             */
        // PORTING NOTE: Multi-tab only.
        this.No = {}
        /**
     * Creates a new mutation queue for the given user.
     * @param user The user for which to create a mutation queue.
     * @param serializer The serializer to use when persisting to IndexedDb.
     */;
    }
    return t.Fo = function(e, n, r, i) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        return g("" !== e.uid), new t(e.Xs() ? e.uid : "", n, r, i);
    }, t.prototype.$o = function(t) {
        var e = !0, n = IDBKeyRange.bound([ this.userId, Number.NEGATIVE_INFINITY ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return Ai(t).ss({
            index: Fi.userMutationsIndex,
            range: n
        }, (function(t, n, r) {
            e = !1, r.done();
        })).next((function() {
            return e;
        }));
    }, t.prototype.xo = function(t, e, n, r) {
        var i = this, o = Ni(t), s = Ai(t);
        // The IndexedDb implementation in Chrome (and Firefox) does not handle
        // compound indices that include auto-generated keys correctly. To ensure
        // that the index entry is added correctly in all browsers, we perform two
        // writes: The first write is used to retrieve the next auto-generated Batch
        // ID, and the second write populates the index and stores the actual
        // mutation batch.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
        // We write an empty object to obtain key
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return s.add({}).next((function(u) {
            g("number" == typeof u);
            for (var a = new Yr(u, e, n, r), c = function(t, e, n) {
                var r = n.baseMutations.map((function(e) {
                    return Le(t.Do, e);
                })), i = n.mutations.map((function(e) {
                    return Le(t.Do, e);
                }));
                return new Fi(e, n.batchId, n.rr.toMillis(), r, i);
            }(i.serializer, i.userId, a), h = [], f = new Tt((function(t, e) {
                return H(t.R(), e.R());
            })), l = 0, p = r; l < p.length; l++) {
                var d = p[l], v = qi.key(i.userId, d.key.path, u);
                f = f.add(d.key.path.h()), h.push(s.put(c)), h.push(o.put(v, qi.PLACEHOLDER));
            }
            return f.forEach((function(e) {
                h.push(i.Sr.ko(t, e));
            })), t.Vr((function() {
                i.No[u] = a.keys();
            })), pr.$n(h).next((function() {
                return a;
            }));
        }));
    }, t.prototype.Mo = function(t, e) {
        var n = this;
        return Ai(t).get(e).next((function(t) {
            return t ? (g(t.userId === n.userId), wi(n.serializer, t)) : null;
        }));
    }, 
    /**
     * Returns the document keys for the mutation batch with the given batchId.
     * For primary clients, this method returns `null` after
     * `removeMutationBatches()` has been called. Secondary clients return a
     * cached result until `removeCachedMutationKeys()` is invoked.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Oo = function(t, e) {
        var n = this;
        return this.No[e] ? pr.resolve(this.No[e]) : this.Mo(t, e).next((function(t) {
            if (t) {
                var r = t.keys();
                return n.No[e] = r, r;
            }
            return null;
        }));
    }, t.prototype.Lo = function(t, e) {
        var n = this, r = e + 1, i = IDBKeyRange.lowerBound([ this.userId, r ]), o = null;
        return Ai(t).ss({
            index: Fi.userMutationsIndex,
            range: i
        }, (function(t, e, i) {
            e.userId === n.userId && (g(e.batchId >= r), o = wi(n.serializer, e)), i.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.Bo = function(t) {
        var e = IDBKeyRange.upperBound([ this.userId, Number.POSITIVE_INFINITY ]), n = -1;
        return Ai(t).ss({
            index: Fi.userMutationsIndex,
            range: e,
            reverse: !0
        }, (function(t, e, r) {
            n = e.batchId, r.done();
        })).next((function() {
            return n;
        }));
    }, t.prototype.qo = function(t) {
        var e = this, n = IDBKeyRange.bound([ this.userId, -1 ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return Ai(t).Zn(Fi.userMutationsIndex, n).next((function(t) {
            return t.map((function(t) {
                return wi(e.serializer, t);
            }));
        }));
    }, t.prototype.Cr = function(t, e) {
        var n = this, r = qi.prefixForPath(this.userId, e.path), i = IDBKeyRange.lowerBound(r), o = [];
        // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.
                return Ni(t).ss({
            range: i
        }, (function(r, i, s) {
            var u = r[0], a = r[1], c = r[2], h = fi(a);
            // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.
                        if (u === n.userId && e.path.isEqual(h)) 
            // Look up the mutation batch in the store.
            return Ai(t).get(c).next((function(t) {
                if (!t) throw y();
                g(t.userId === n.userId), o.push(wi(n.serializer, t));
            }));
            s.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.Mr = function(t, e) {
        var n = this, r = new Tt(H), i = [];
        return e.forEach((function(e) {
            var o = qi.prefixForPath(n.userId, e.path), s = IDBKeyRange.lowerBound(o), u = Ni(t).ss({
                range: s
            }, (function(t, i, o) {
                var s = t[0], u = t[1], a = t[2], c = fi(u);
                // Only consider rows matching exactly the specific key of
                // interest. Note that because we order by path first, and we
                // order terminators before path separators, we'll encounter all
                // the index rows for documentKey contiguously. In particular, all
                // the rows for documentKey will occur before any rows for
                // documents nested in a subcollection beneath documentKey so we
                // can stop as soon as we hit any such row.
                                s === n.userId && e.path.isEqual(c) ? r = r.add(a) : o.done();
            }));
            i.push(u);
        })), pr.$n(i).next((function() {
            return n.Uo(t, r);
        }));
    }, t.prototype.Qr = function(t, e) {
        var n = this, r = e.path, i = r.length + 1, o = qi.prefixForPath(this.userId, r), s = IDBKeyRange.lowerBound(o), u = new Tt(H);
        return Ni(t).ss({
            range: s
        }, (function(t, e, o) {
            var s = t[0], a = t[1], c = t[2], h = fi(a);
            s === n.userId && r.T(h) ? 
            // Rows with document keys more than one segment longer than the
            // query path can't be matches. For example, a query on 'rooms'
            // can't match the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            h.length === i && (u = u.add(c)) : o.done();
        })).next((function() {
            return n.Uo(t, u);
        }));
    }, t.prototype.Uo = function(t, e) {
        var n = this, r = [], i = [];
        // TODO(rockwood): Implement this using iterate.
        return e.forEach((function(e) {
            i.push(Ai(t).get(e).next((function(t) {
                if (null === t) throw y();
                g(t.userId === n.userId), r.push(wi(n.serializer, t));
            })));
        })), pr.$n(i).next((function() {
            return r;
        }));
    }, t.prototype.Qo = function(t, e) {
        var n = this;
        return Ti(t.Wo, this.userId, e).next((function(r) {
            return t.Vr((function() {
                n.jo(e.batchId);
            })), pr.forEach(r, (function(e) {
                return n.Co.Ko(t, e);
            }));
        }));
    }, 
    /**
     * Clears the cached keys for a mutation batch. This method should be
     * called by secondary clients after they process mutation updates.
     *
     * Note that this method does not have to be called from primary clients as
     * the corresponding cache entries are cleared when an acknowledged or
     * rejected batch is removed from the mutation queue.
     */
    // PORTING NOTE: Multi-tab only
    t.prototype.jo = function(t) {
        delete this.No[t];
    }, t.prototype.Go = function(t) {
        var e = this;
        return this.$o(t).next((function(n) {
            if (!n) return pr.resolve();
            // Verify that there are no entries in the documentMutations index if
            // the queue is empty.
                        var r = IDBKeyRange.lowerBound(qi.prefixForUser(e.userId)), i = [];
            return Ni(t).ss({
                range: r
            }, (function(t, n, r) {
                if (t[0] === e.userId) {
                    var o = fi(t[1]);
                    i.push(o);
                } else r.done();
            })).next((function() {
                g(0 === i.length);
            }));
        }));
    }, t.prototype.zo = function(t, e) {
        return Ei(t, this.userId, e);
    }, 
    // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
    /** Returns the mutation queue's metadata from IndexedDb. */
    t.prototype.Ho = function(t) {
        var e = this;
        return Di(t).get(this.userId).next((function(t) {
            return t || new Mi(e.userId, -1, 
            /*lastStreamToken=*/ "");
        }));
    }, t;
}();

/**
 * @return true if the mutation queue for the given user contains a pending
 *         mutation for the given key.
 */ function Ei(t, e, n) {
    var r = qi.prefixForPath(e, n.path), i = r[1], o = IDBKeyRange.lowerBound(r), s = !1;
    return Ni(t).ss({
        range: o,
        ns: !0
    }, (function(t, n, r) {
        var o = t[0], u = t[1];
        t[2];
        o === e && u === i && (s = !0), r.done();
    })).next((function() {
        return s;
    }));
}

/** Returns true if any mutation queue contains the given document. */
/**
 * Delete a mutation batch and the associated document mutations.
 * @return A PersistencePromise of the document mutations that were removed.
 */ function Ti(t, e, n) {
    var r = t.store(Fi.store), i = t.store(qi.store), o = [], s = IDBKeyRange.only(n.batchId), u = 0, a = r.ss({
        range: s
    }, (function(t, e, n) {
        return u++, n.delete();
    }));
    o.push(a.next((function() {
        g(1 === u);
    })));
    for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
        var l = f[h], p = qi.key(e, l.key.path, n.batchId);
        o.push(i.delete(p)), c.push(l.key);
    }
    return pr.$n(o).next((function() {
        return c;
    }));
}

/**
 * Helper to get a typed SimpleDbStore for the mutations object store.
 */ function Ai(t) {
    return uo.Un(t, Fi.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function Ni(t) {
    return uo.Un(t, qi.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function Di(t) {
    return uo.Un(t, Mi.store);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Si = /** @class */ function() {
    /**
     * @param {LocalSerializer} serializer The document serializer.
     * @param {IndexManager} indexManager The query indexes that need to be maintained.
     */
    function t(t, e) {
        this.serializer = t, this.Sr = e
        /**
     * Adds the supplied entries to the cache.
     *
     * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */;
    }
    return t.prototype.Tr = function(t, e, n) {
        return ki(t).put(Li(e), n);
    }, 
    /**
     * Removes a document from the cache.
     *
     * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */
    t.prototype.Ir = function(t, e) {
        var n = ki(t), r = Li(e);
        return n.delete(r);
    }, 
    /**
     * Updates the current cache size.
     *
     * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
     * cache's metadata.
     */
    t.prototype.updateMetadata = function(t, e) {
        var n = this;
        return this.getMetadata(t).next((function(r) {
            return r.byteSize += e, n.Yo(t, r);
        }));
    }, t.prototype.Ar = function(t, e) {
        var n = this;
        return ki(t).get(Li(e)).next((function(t) {
            return n.Jo(t);
        }));
    }, 
    /**
     * Looks up an entry in the cache.
     *
     * @param documentKey The key of the entry to look up.
     * @return The cached MaybeDocument entry and its size, or null if we have nothing cached.
     */
    t.prototype.Xo = function(t, e) {
        var n = this;
        return ki(t).get(Li(e)).next((function(t) {
            var e = n.Jo(t);
            return e ? {
                Zo: e,
                size: Ri(t)
            } : null;
        }));
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = St();
        return this.ta(t, e, (function(t, e) {
            var i = n.Jo(e);
            r = r.rt(t, i);
        })).next((function() {
            return r;
        }));
    }, 
    /**
     * Looks up several entries in the cache.
     *
     * @param documentKeys The set of keys entries to look up.
     * @return A map of MaybeDocuments indexed by key (if a document cannot be
     *     found, the key will be mapped to null) and a map of sizes indexed by
     *     key (zero if the key cannot be found).
     */
    t.prototype.ea = function(t, e) {
        var n = this, r = St(), i = new bt(N.i);
        return this.ta(t, e, (function(t, e) {
            var o = n.Jo(e);
            o ? (r = r.rt(t, o), i = i.rt(t, Ri(e))) : (r = r.rt(t, null), i = i.rt(t, 0));
        })).next((function() {
            return {
                na: r,
                sa: i
            };
        }));
    }, t.prototype.ta = function(t, e, n) {
        if (e.m()) return pr.resolve();
        var r = IDBKeyRange.bound(e.first().path.A(), e.last().path.A()), i = e.lt(), o = i.Et();
        return ki(t).ss({
            range: r
        }, (function(t, e, r) {
            // Go through keys not found in cache.
            for (var s = N.$(t); o && N.i(o, s) < 0; ) n(o, null), o = i.Et();
            o && o.isEqual(s) && (
            // Key found in cache.
            n(o, e), o = i.It() ? i.Et() : null), 
            // Skip to the next key (if there is one).
            o ? r.Jn(o.path.A()) : r.done();
        })).next((function() {
            // The rest of the keys are not in the cache. One case where `iterate`
            // above won't go through them is when the cache is empty.
            for (;o; ) n(o, null), o = i.It() ? i.Et() : null;
        }));
    }, t.prototype.Or = function(t, e, n) {
        var r = this, i = kt(), o = e.path.length + 1, s = {};
        if (n.isEqual(st.min())) {
            // Documents are ordered by key, so we can use a prefix scan to narrow
            // down the documents we need to match the query against.
            var u = e.path.A();
            s.range = IDBKeyRange.lowerBound(u);
        } else {
            // Execute an index-free query and filter by read time. This is safe
            // since all document changes to queries that have a
            // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
            var a = e.path.A(), c = vi(n);
            s.range = IDBKeyRange.lowerBound([ a, c ], 
            /* open= */ !0), s.index = Bi.collectionReadTimeIndex;
        }
        return ki(t).ss(s, (function(t, n, s) {
            // The query is actually returning any path that starts with the query
            // path prefix which may include documents in subcollections. For
            // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
            // shouldn't match it. Fix this by discarding rows with document keys
            // more than one segment longer than the query path.
            if (t.length === o) {
                var u = pi(r.serializer, n);
                e.path.T(u.key.path) ? u instanceof Dn && Kn(e, u) && (i = i.rt(u.key, u)) : s.done();
            }
        })).next((function() {
            return i;
        }));
    }, 
    /**
     * Returns the set of documents that have changed since the specified read
     * time.
     */
    // PORTING NOTE: This is only used for multi-tab synchronization.
    t.prototype.ia = function(t, e) {
        var n = this, r = Dt(), i = vi(e), o = ki(t), s = IDBKeyRange.lowerBound(i, !0);
        return o.ss({
            index: Bi.readTimeIndex,
            range: s
        }, (function(t, e) {
            // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
            // the documents directly since we want to keep sentinel deletes.
            var o = pi(n.serializer, e);
            r = r.rt(o.key, o), i = e.readTime;
        })).next((function() {
            return {
                ra: r,
                readTime: yi(i)
            };
        }));
    }, 
    /**
     * Returns the read time of the most recently read document in the cache, or
     * SnapshotVersion.min() if not available.
     */
    // PORTING NOTE: This is only used for multi-tab synchronization.
    t.prototype.oa = function(t) {
        var e = ki(t), n = st.min();
        // If there are no existing entries, we return SnapshotVersion.min().
                return e.ss({
            index: Bi.readTimeIndex,
            reverse: !0
        }, (function(t, e, r) {
            e.readTime && (n = yi(e.readTime)), r.done();
        })).next((function() {
            return n;
        }));
    }, t.prototype.aa = function(e) {
        return new t.ca(this, !!e && e.ua);
    }, t.prototype.ha = function(t) {
        return this.getMetadata(t).next((function(t) {
            return t.byteSize;
        }));
    }, t.prototype.getMetadata = function(t) {
        return xi(t).get(Gi.key).next((function(t) {
            return g(!!t), t;
        }));
    }, t.prototype.Yo = function(t, e) {
        return xi(t).put(Gi.key, e);
    }, 
    /**
     * Decodes `remoteDoc` and returns the document (or null, if the document
     * corresponds to the format used for sentinel deletes).
     */
    t.prototype.Jo = function(t) {
        if (t) {
            var e = pi(this.serializer, t);
            return e instanceof Sn && e.version.isEqual(st.min()) ? null : e;
        }
        return null;
    }, t;
}();

/**
 * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
 *
 * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
 * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
 * when we apply the changes.
 */ function xi(t) {
    return uo.Un(t, Gi.store);
}

/**
 * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
 */ function ki(t) {
    return uo.Un(t, Bi.store);
}

function Li(t) {
    return t.path.A();
}

/**
 * Retrusn an approximate size for the given document.
 */ function Ri(t) {
    var e;
    if (t.document) e = t.document; else if (t.unknownDocument) e = t.unknownDocument; else {
        if (!t.noDocument) throw y();
        e = t.noDocument;
    }
    return JSON.stringify(e).length;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory implementation of IndexManager.
 */ Si.ca = /** @class */ function(e) {
    /**
     * @param documentCache The IndexedDbRemoteDocumentCache to apply the changes to.
     * @param trackRemovals Whether to create sentinel deletes that can be tracked by
     * `getNewDocumentChanges()`.
     */
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).la = t, r.ua = n, 
        // A map of document sizes prior to applying the changes in this buffer.
        r._a = new it((function(t) {
            return t.toString();
        }), (function(t, e) {
            return t.isEqual(e);
        })), r;
    }
    return t.__extends(n, e), n.prototype.gr = function(t) {
        var e = this, n = [], r = 0, i = new Tt((function(t, e) {
            return H(t.R(), e.R());
        }));
        return this.dr.forEach((function(o, s) {
            var u = e._a.get(o);
            if (s) {
                var a = di(e.la.serializer, s, e.readTime);
                i = i.add(o.path.h());
                var c = Ri(a);
                r += c - u, n.push(e.la.Tr(t, o, a));
            } else if (r -= u, e.ua) {
                // In order to track removals, we store a "sentinel delete" in the
                // RemoteDocumentCache. This entry is represented by a NoDocument
                // with a version of 0 and ignored by `maybeDecodeDocument()` but
                // preserved in `getNewDocumentChanges()`.
                var h = di(e.la.serializer, new Sn(o, st.min()), e.readTime);
                n.push(e.la.Tr(t, o, h));
            } else n.push(e.la.Ir(t, o));
        })), i.forEach((function(r) {
            n.push(e.la.Sr.ko(t, r));
        })), n.push(this.la.updateMetadata(t, r)), pr.$n(n);
    }, n.prototype.Rr = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute a delta later.
                return this.la.Xo(t, e).next((function(t) {
            return null === t ? (n._a.set(e, 0), null) : (n._a.set(e, t.size), t.Zo);
        }));
    }, n.prototype.Pr = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute
        // a delta later.
                return this.la.ea(t, e).next((function(t) {
            var e = t.na;
            // Note: `getAllFromCache` returns two maps instead of a single map from
            // keys to `DocumentSizeEntry`s. This is to allow returning the
            // `NullableMaybeDocumentMap` directly, without a conversion.
            return t.sa.forEach((function(t, e) {
                n._a.set(t, e);
            })), e;
        }));
    }, n;
}(Xr);

var Oi = /** @class */ function() {
    function t() {
        this.fa = new Ui;
    }
    return t.prototype.ko = function(t, e) {
        return this.fa.add(e), pr.resolve();
    }, t.prototype.Ur = function(t, e) {
        return pr.resolve(this.fa.getEntries(e));
    }, t;
}(), Ui = /** @class */ function() {
    function t() {
        this.index = {};
    }
    // Returns false if the entry already existed.
        return t.prototype.add = function(t) {
        var e = t._(), n = t.h(), r = this.index[e] || new Tt(E.i), i = !r.has(n);
        return this.index[e] = r.add(n), i;
    }, t.prototype.has = function(t) {
        var e = t._(), n = t.h(), r = this.index[e];
        return r && r.has(n);
    }, t.prototype.getEntries = function(t) {
        return (this.index[t] || new Tt(E.i)).A();
    }, t;
}(), Pi = /** @class */ function() {
    function t(t) {
        this.serializer = t;
    }
    /**
     * Performs database creation and schema upgrades.
     *
     * Note that in production, this method is only ever used to upgrade the schema
     * to SCHEMA_VERSION. Different values of toVersion are only used for testing
     * and local feature development.
     */    return t.prototype.createOrUpgrade = function(t, e, n, r) {
        var i = this;
        g(n < r && n >= 0 && r <= 10);
        var o = new mr(e);
        n < 1 && r >= 1 && (function(t) {
            t.createObjectStore(Ci.store);
        }(t), function(t) {
            t.createObjectStore(Mi.store, {
                keyPath: Mi.keyPath
            }), t.createObjectStore(Fi.store, {
                keyPath: Fi.keyPath,
                autoIncrement: !0
            }).createIndex(Fi.userMutationsIndex, Fi.userMutationsKeyPath, {
                unique: !0
            }), t.createObjectStore(qi.store);
        }(t), Yi(t), function(t) {
            t.createObjectStore(Bi.store);
        }(t));
        // Migration 2 to populate the targetGlobal object no longer needed since
        // migration 3 unconditionally clears it.
        var s = pr.resolve();
        return n < 3 && r >= 3 && (
        // Brand new clients don't need to drop and recreate--only clients that
        // potentially have corrupt data.
        0 !== n && (function(t) {
            t.deleteObjectStore(Wi.store), t.deleteObjectStore(Qi.store), t.deleteObjectStore(Ki.store);
        }(t), Yi(t)), s = s.next((function() {
            /**
     * Creates the target global singleton row.
     *
     * @param {IDBTransaction} txn The version upgrade transaction for indexeddb
     */
            return function(t) {
                var e = t.store(Ki.store), n = new Ki(
                /*highestTargetId=*/ 0, 
                /*lastListenSequenceNumber=*/ 0, st.min().X(), 
                /*targetCount=*/ 0);
                return e.put(Ki.key, n);
            }(o);
        }))), n < 4 && r >= 4 && (0 !== n && (
        // Schema version 3 uses auto-generated keys to generate globally unique
        // mutation batch IDs (this was previously ensured internally by the
        // client). To migrate to the new schema, we have to read all mutations
        // and write them back out. We preserve the existing batch IDs to guarantee
        // consistency with other object stores. Any further mutation batch IDs will
        // be auto-generated.
        s = s.next((function() {
            return function(t, e) {
                return e.store(Fi.store).Zn().next((function(n) {
                    t.deleteObjectStore(Fi.store), t.createObjectStore(Fi.store, {
                        keyPath: Fi.keyPath,
                        autoIncrement: !0
                    }).createIndex(Fi.userMutationsIndex, Fi.userMutationsKeyPath, {
                        unique: !0
                    });
                    var r = e.store(Fi.store), i = n.map((function(t) {
                        return r.put(t);
                    }));
                    return pr.$n(i);
                }));
            }(t, o);
        }))), s = s.next((function() {
            !function(t) {
                t.createObjectStore($i.store, {
                    keyPath: $i.keyPath
                });
            }(t);
        }))), n < 5 && r >= 5 && (s = s.next((function() {
            return i.removeAcknowledgedMutations(o);
        }))), n < 6 && r >= 6 && (s = s.next((function() {
            return function(t) {
                t.createObjectStore(Gi.store);
            }(t), i.addDocumentGlobal(o);
        }))), n < 7 && r >= 7 && (s = s.next((function() {
            return i.ensureSequenceNumbers(o);
        }))), n < 8 && r >= 8 && (s = s.next((function() {
            return i.createCollectionParentIndex(t, o);
        }))), n < 9 && r >= 9 && (s = s.next((function() {
            // Multi-Tab used to manage its own changelog, but this has been moved
            // to the DbRemoteDocument object store itself. Since the previous change
            // log only contained transient data, we can drop its object store.
            !function(t) {
                t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
            }(t), function(t) {
                var e = t.objectStore(Bi.store);
                e.createIndex(Bi.readTimeIndex, Bi.readTimeIndexPath, {
                    unique: !1
                }), e.createIndex(Bi.collectionReadTimeIndex, Bi.collectionReadTimeIndexPath, {
                    unique: !1
                });
            }(e);
        }))), n < 10 && r >= 10 && (s = s.next((function() {
            return i.rewriteCanonicalIds(o);
        }))), s;
    }, t.prototype.addDocumentGlobal = function(t) {
        var e = 0;
        return t.store(Bi.store).ss((function(t, n) {
            e += Ri(n);
        })).next((function() {
            var n = new Gi(e);
            return t.store(Gi.store).put(Gi.key, n);
        }));
    }, t.prototype.removeAcknowledgedMutations = function(t) {
        var e = this, n = t.store(Mi.store), r = t.store(Fi.store);
        return n.Zn().next((function(n) {
            return pr.forEach(n, (function(n) {
                var i = IDBKeyRange.bound([ n.userId, -1 ], [ n.userId, n.lastAcknowledgedBatchId ]);
                return r.Zn(Fi.userMutationsIndex, i).next((function(r) {
                    return pr.forEach(r, (function(r) {
                        g(r.userId === n.userId);
                        var i = wi(e.serializer, r);
                        return Ti(t, n.userId, i).next((function() {}));
                    }));
                }));
            }));
        }));
    }, 
    /**
     * Ensures that every document in the remote document cache has a corresponding sentinel row
     * with a sequence number. Missing rows are given the most recently used sequence number.
     */
    t.prototype.ensureSequenceNumbers = function(t) {
        var e = t.store(Wi.store), n = t.store(Bi.store);
        return t.store(Ki.store).get(Ki.key).next((function(t) {
            var r = [];
            return n.ss((function(n, i) {
                var o = new E(n), s = function(t) {
                    return [ 0, ai(t) ];
                }(o);
                r.push(e.get(s).next((function(n) {
                    return n ? pr.resolve() : function(n) {
                        return e.put(new Wi(0, ai(n), t.highestListenSequenceNumber));
                    }(o);
                })));
            })).next((function() {
                return pr.$n(r);
            }));
        }));
    }, t.prototype.createCollectionParentIndex = function(t, e) {
        // Create the index.
        t.createObjectStore(Hi.store, {
            keyPath: Hi.keyPath
        });
        var n = e.store(Hi.store), r = new Ui, i = function(t) {
            if (r.add(t)) {
                var e = t._(), i = t.h();
                return n.put({
                    collectionId: e,
                    parent: ai(i)
                });
            }
        };
        // Helper to add an index entry iff we haven't already written it.
        // Index existing remote documents.
                return e.store(Bi.store).ss({
            ns: !0
        }, (function(t, e) {
            var n = new E(t);
            return i(n.h());
        })).next((function() {
            return e.store(qi.store).ss({
                ns: !0
            }, (function(t, e) {
                t[0];
                var n = t[1], r = (t[2], fi(n));
                return i(r.h());
            }));
        }));
    }, t.prototype.rewriteCanonicalIds = function(t) {
        var e = this, n = t.store(Qi.store);
        return n.ss((function(t, r) {
            var i = _i(r), o = bi(e.serializer, i);
            return n.put(o);
        }));
    }, t;
}(), Vi = function(t, e) {
    this.seconds = t, this.nanoseconds = e;
}, Ci = function(t, 
/** Whether to allow shared access from multiple tabs. */
e, n) {
    this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
};

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */
/**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */
Ci.store = "owner", 
/**
     * The key string used for the single object that exists in the
     * DbPrimaryClient store.
     */
Ci.key = "owner";

var Mi = function(
/**
     * The normalized user ID to which this queue belongs.
     */
t, 
/**
     * An identifier for the highest numbered batch that has been acknowledged
     * by the server. All MutationBatches in this queue with batchIds less
     * than or equal to this value are considered to have been acknowledged by
     * the server.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
e, 
/**
     * A stream token that was previously sent by the server.
     *
     * See StreamingWriteRequest in datastore.proto for more details about
     * usage.
     *
     * After sending this token, earlier tokens may not be used anymore so
     * only a single stream token is retained.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
n) {
    this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
};

/** Name of the IndexedDb object store.  */ Mi.store = "mutationQueues", 
/** Keys are automatically assigned via the userId property. */
Mi.keyPath = "userId";

/**
 * An object to be stored in the 'mutations' store in IndexedDb.
 *
 * Represents a batch of user-level mutations intended to be sent to the server
 * in a single write. Each user-level batch gets a separate DbMutationBatch
 * with a new batchId.
 */
var Fi = function(
/**
     * The normalized user ID to which this batch belongs.
     */
t, 
/**
     * An identifier for this batch, allocated using an auto-generated key.
     */
e, 
/**
     * The local write time of the batch, stored as milliseconds since the
     * epoch.
     */
n, 
/**
     * A list of "mutations" that represent a partial base state from when this
     * write batch was initially created. During local application of the write
     * batch, these baseMutations are applied prior to the real writes in order
     * to override certain document fields from the remote document cache. This
     * is necessary in the case of non-idempotent writes (e.g. `increment()`
     * transforms) to make sure that the local view of the modified documents
     * doesn't flicker if the remote document cache receives the result of the
     * non-idempotent write before the write is removed from the queue.
     *
     * These mutations are never sent to the backend.
     */
r, 
/**
     * A list of mutations to apply. All mutations will be applied atomically.
     *
     * Mutations are serialized via toMutation().
     */
i) {
    this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, 
    this.mutations = i;
};

/** Name of the IndexedDb object store.  */ Fi.store = "mutations", 
/** Keys are automatically assigned via the userId, batchId properties. */
Fi.keyPath = "batchId", 
/** The index name for lookup of mutations by user. */
Fi.userMutationsIndex = "userMutationsIndex", 
/** The user mutations index is keyed by [userId, batchId] pairs. */
Fi.userMutationsKeyPath = [ "userId", "batchId" ];

var qi = /** @class */ function() {
    function t() {}
    /**
     * Creates a [userId] key for use in the DbDocumentMutations index to iterate
     * over all of a user's document mutations.
     */    return t.prefixForUser = function(t) {
        return [ t ];
    }, 
    /**
     * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
     * index to iterate over all at document mutations for a given path or lower.
     */
    t.prefixForPath = function(t, e) {
        return [ t, ai(e) ];
    }, 
    /**
     * Creates a full index key of [userId, encodedPath, batchId] for inserting
     * and deleting into the DbDocumentMutations index.
     */
    t.key = function(t, e, n) {
        return [ t, ai(e), n ];
    }, t;
}();

qi.store = "documentMutations", 
/**
     * Because we store all the useful information for this store in the key,
     * there is no useful information to store as the value. The raw (unencoded)
     * path cannot be stored because IndexedDb doesn't store prototype
     * information.
     */
qi.PLACEHOLDER = new qi;

var ji = function(t, e) {
    this.path = t, this.readTime = e;
}, zi = function(t, e) {
    this.path = t, this.version = e;
}, Bi = 
// TODO: We are currently storing full document keys almost three times
// (once as part of the primary key, once - partly - as `parentPath` and once
// inside the encoded documents). During our next migration, we should
// rewrite the primary key as parentPath + document ID which would allow us
// to drop one value.
function(
/**
     * Set to an instance of DbUnknownDocument if the data for a document is
     * not known, but it is known that a document exists at the specified
     * version (e.g. it had a successful update applied to it)
     */
t, 
/**
     * Set to an instance of a DbNoDocument if it is known that no document
     * exists.
     */
e, 
/**
     * Set to an instance of a Document if there's a cached version of the
     * document.
     */
n, 
/**
     * Documents that were written to the remote document store based on
     * a write acknowledgment are marked with `hasCommittedMutations`. These
     * documents are potentially inconsistent with the backend's copy and use
     * the write's commit version as their document version.
     */
r, 
/**
     * When the document was read from the backend. Undefined for data written
     * prior to schema version 9.
     */
i, 
/**
     * The path of the collection this document is part of. Undefined for data
     * written prior to schema version 9.
     */
o) {
    this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, 
    this.readTime = i, this.parentPath = o;
};

/**
 * Represents a document that is known to exist but whose data is unknown.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ Bi.store = "remoteDocuments", 
/**
     * An index that provides access to all entries sorted by read time (which
     * corresponds to the last modification time of each row).
     *
     * This index is used to provide a changelog for Multi-Tab.
     */
Bi.readTimeIndex = "readTimeIndex", Bi.readTimeIndexPath = "readTime", 
/**
     * An index that provides access to documents in a collection sorted by read
     * time.
     *
     * This index is used to allow the RemoteDocumentCache to fetch newly changed
     * documents in a collection.
     */
Bi.collectionReadTimeIndex = "collectionReadTimeIndex", Bi.collectionReadTimeIndexPath = [ "parentPath", "readTime" ];

/**
 * Contains a single entry that has metadata about the remote document cache.
 */
var Gi = 
/**
     * @param byteSize Approximately the total size in bytes of all the documents in the document
     * cache.
     */
function(t) {
    this.byteSize = t;
};

Gi.store = "remoteDocumentGlobal", Gi.key = "remoteDocumentGlobalKey";

var Qi = function(
/**
     * An auto-generated sequential numeric identifier for the query.
     *
     * Queries are stored using their canonicalId as the key, but these
     * canonicalIds can be quite long so we additionally assign a unique
     * queryId which can be used by referenced data structures (e.g.
     * indexes) to minimize the on-disk cost.
     */
t, 
/**
     * The canonical string representing this query. This is not unique.
     */
e, 
/**
     * The last readTime received from the Watch Service for this query.
     *
     * This is the same value as TargetChange.read_time in the protos.
     */
n, 
/**
     * An opaque, server-assigned token that allows watching a query to be
     * resumed after disconnecting without retransmitting all the data
     * that matches the query. The resume token essentially identifies a
     * point in time from which the server should resume sending results.
     *
     * This is related to the snapshotVersion in that the resumeToken
     * effectively also encodes that value, but the resumeToken is opaque
     * and sometimes encodes additional information.
     *
     * A consequence of this is that the resumeToken should be used when
     * asking the server to reason about where this client is in the watch
     * stream, but the client should use the snapshotVersion for its own
     * purposes.
     *
     * This is the same value as TargetChange.resume_token in the protos.
     */
r, 
/**
     * A sequence number representing the last time this query was
     * listened to, used for garbage collection purposes.
     *
     * Conventionally this would be a timestamp value, but device-local
     * clocks are unreliable and they must be able to create new listens
     * even while disconnected. Instead this should be a monotonically
     * increasing number that's incremented on each listen call.
     *
     * This is different from the queryId since the queryId is an
     * immutable identifier assigned to the Query on first use while
     * lastListenSequenceNumber is updated every time the query is
     * listened to.
     */
i, 
/**
     * Denotes the maximum snapshot version at which the associated query view
     * contained no limbo documents.  Undefined for data written prior to
     * schema version 9.
     */
o, 
/**
     * The query for this target.
     *
     * Because canonical ids are not unique we must store the actual query. We
     * use the proto to have an object we can persist without having to
     * duplicate translation logic to and from a `Query` object.
     */
s) {
    this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, 
    this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s;
};

Qi.store = "targets", 
/** Keys are automatically assigned via the targetId property. */
Qi.keyPath = "targetId", 
/** The name of the queryTargets index. */
Qi.queryTargetsIndexName = "queryTargetsIndex", 
/**
     * The index of all canonicalIds to the targets that they match. This is not
     * a unique mapping because canonicalId does not promise a unique name for all
     * possible queries, so we append the targetId to make the mapping unique.
     */
Qi.queryTargetsKeyPath = [ "canonicalId", "targetId" ];

/**
 * An object representing an association between a target and a document, or a
 * sentinel row marking the last sequence number at which a document was used.
 * Each document cached must have a corresponding sentinel row before lru
 * garbage collection is enabled.
 *
 * The target associations and sentinel rows are co-located so that orphaned
 * documents and their sequence numbers can be identified efficiently via a scan
 * of this store.
 */
var Wi = function(
/**
     * The targetId identifying a target or 0 for a sentinel row.
     */
t, 
/**
     * The path to the document, as encoded in the key.
     */
e, 
/**
     * If this is a sentinel row, this should be the sequence number of the last
     * time the document specified by `path` was used. Otherwise, it should be
     * `undefined`.
     */
n) {
    this.targetId = t, this.path = e, this.sequenceNumber = n;
};

/** Name of the IndexedDb object store.  */ Wi.store = "targetDocuments", 
/** Keys are automatically assigned via the targetId, path properties. */
Wi.keyPath = [ "targetId", "path" ], 
/** The index name for the reverse index. */
Wi.documentTargetsIndex = "documentTargetsIndex", 
/** We also need to create the reverse index for these properties. */
Wi.documentTargetsKeyPath = [ "path", "targetId" ];

/**
 * A record of global state tracked across all Targets, tracked separately
 * to avoid the need for extra indexes.
 *
 * This should be kept in-sync with the proto used in the iOS client.
 */
var Ki = function(
/**
     * The highest numbered target id across all targets.
     *
     * See DbTarget.targetId.
     */
t, 
/**
     * The highest numbered lastListenSequenceNumber across all targets.
     *
     * See DbTarget.lastListenSequenceNumber.
     */
e, 
/**
     * A global snapshot version representing the last consistent snapshot we
     * received from the backend. This is monotonically increasing and any
     * snapshots received from the backend prior to this version (e.g. for
     * targets resumed with a resumeToken) should be suppressed (buffered)
     * until the backend has caught up to this snapshot version again. This
     * prevents our cache from ever going backwards in time.
     */
n, 
/**
     * The number of targets persisted.
     */
r) {
    this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, 
    this.targetCount = r;
};

/**
 * The key string used for the single object that exists in the
 * DbTargetGlobal store.
 */ Ki.key = "targetGlobalKey", Ki.store = "targetGlobal";

/**
 * An object representing an association between a Collection id (e.g. 'messages')
 * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
 * This is used to efficiently find all collections to query when performing
 * a Collection Group query.
 */
var Hi = function(
/**
     * The collectionId (e.g. 'messages')
     */
t, 
/**
     * The path to the parent (either a document location or an empty path for
     * a root-level collection).
     */
e) {
    this.collectionId = t, this.parent = e;
};

/** Name of the IndexedDb object store. */ function Yi(t) {
    t.createObjectStore(Wi.store, {
        keyPath: Wi.keyPath
    }).createIndex(Wi.documentTargetsIndex, Wi.documentTargetsKeyPath, {
        unique: !0
    }), 
    // NOTE: This is unique only because the TargetId is the suffix.
    t.createObjectStore(Qi.store, {
        keyPath: Qi.keyPath
    }).createIndex(Qi.queryTargetsIndexName, Qi.queryTargetsKeyPath, {
        unique: !0
    }), t.createObjectStore(Ki.store);
}

Hi.store = "collectionParents", 
/** Keys are automatically assigned via the collectionId, parent properties. */
Hi.keyPath = [ "collectionId", "parent" ];

var $i = function(
// Note: Previous schema versions included a field
// "lastProcessedDocumentChangeId". Don't use anymore.
/** The auto-generated client id assigned at client startup. */
t, 
/** The last time this state was updated. */
e, 
/** Whether the client's network connection is enabled. */
n, 
/** Whether this client is running in a foreground tab. */
r) {
    this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r;
};

/** Name of the IndexedDb object store. */ $i.store = "clientMetadata", 
/** Keys are automatically assigned via the clientId properties. */
$i.keyPath = "clientId";

var Xi = t.__spreadArrays(t.__spreadArrays(t.__spreadArrays([ Mi.store, Fi.store, qi.store, Bi.store, Qi.store, Ci.store, Ki.store, Wi.store ], [ $i.store ]), [ Gi.store ]), [ Hi.store ]), Zi = /** @class */ function() {
    function t() {
        /**
         * An in-memory copy of the index entries we've already written since the SDK
         * launched. Used to avoid re-writing the same entry repeatedly.
         *
         * This is *NOT* a complete cache of what's in persistence and so can never be used to
         * satisfy reads.
         */
        this.da = new Ui;
    }
    /**
     * Adds a new entry to the collection parent index.
     *
     * Repeated calls for the same collectionPath should be avoided within a
     * transaction as IndexedDbIndexManager only caches writes once a transaction
     * has been committed.
     */    return t.prototype.ko = function(t, e) {
        var n = this;
        if (!this.da.has(e)) {
            var r = e._(), i = e.h();
            t.Vr((function() {
                // Add the collection to the in memory cache only if the transaction was
                // successfully committed.
                n.da.add(e);
            }));
            var o = {
                collectionId: r,
                parent: ai(i)
            };
            return Ji(t).put(o);
        }
        return pr.resolve();
    }, t.prototype.Ur = function(t, e) {
        var n = [], r = IDBKeyRange.bound([ e, "" ], [ $(e), "" ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return Ji(t).Zn(r).next((function(t) {
            for (var r = 0, i = t; r < i.length; r++) {
                var o = i[r];
                // This collectionId guard shouldn't be necessary (and isn't as long
                // as we're running in a real browser), but there's a bug in
                // indexeddbshim that breaks our range in our tests running in node:
                // https://github.com/axemclion/IndexedDBShim/issues/334
                                if (o.collectionId !== e) break;
                n.push(fi(o.parent));
            }
            return n;
        }));
    }, t;
}();

// V2 is no longer usable (see comment at top of file)
// Visible for testing
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A persisted implementation of IndexManager.
 */
/**
 * Helper to get a typed SimpleDbStore for the collectionParents
 * document store.
 */
function Ji(t) {
    return uo.Un(t, Hi.store);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Offset to ensure non-overlapping target ids. */
/**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */ var to = /** @class */ function() {
    function t(t) {
        this.wa = t;
    }
    return t.prototype.next = function() {
        return this.wa += 2, this.wa;
    }, t.ma = function() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
    }, t.Ta = function() {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
    }, t;
}(), eo = /** @class */ function() {
    function t(t, e) {
        this.Co = t, this.serializer = e;
    }
    // PORTING NOTE: We don't cache global metadata for the target cache, since
    // some of it (in particular `highestTargetId`) can be modified by secondary
    // tabs. We could perhaps be more granular (and e.g. still cache
    // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
    // to IndexedDb whenever we need to read metadata. We can revisit if it turns
    // out to have a meaningful performance impact.
        return t.prototype.Ea = function(t) {
        var e = this;
        return this.Ia(t).next((function(n) {
            var r = new to(n.highestTargetId);
            return n.highestTargetId = r.next(), e.Aa(t, n).next((function() {
                return n.highestTargetId;
            }));
        }));
    }, t.prototype.Ra = function(t) {
        return this.Ia(t).next((function(t) {
            return st.Y(new ot(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
        }));
    }, t.prototype.Pa = function(t) {
        return this.Ia(t).next((function(t) {
            return t.highestListenSequenceNumber;
        }));
    }, t.prototype.ga = function(t, e, n) {
        var r = this;
        return this.Ia(t).next((function(i) {
            return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.X()), 
            e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.Aa(t, i);
        }));
    }, t.prototype.ya = function(t, e) {
        var n = this;
        return this.Va(t, e).next((function() {
            return n.Ia(t).next((function(r) {
                return r.targetCount += 1, n.pa(e, r), n.Aa(t, r);
            }));
        }));
    }, t.prototype.ba = function(t, e) {
        return this.Va(t, e);
    }, t.prototype.va = function(t, e) {
        var n = this;
        return this.Sa(t, e.targetId).next((function() {
            return no(t).delete(e.targetId);
        })).next((function() {
            return n.Ia(t);
        })).next((function(e) {
            return g(e.targetCount > 0), e.targetCount -= 1, n.Aa(t, e);
        }));
    }, 
    /**
     * Drops any targets with sequence number less than or equal to the upper bound, excepting those
     * present in `activeTargetIds`. Document associations for the removed targets are also removed.
     * Returns the number of targets removed.
     */
    t.prototype.Vo = function(t, e, n) {
        var r = this, i = 0, o = [];
        return no(t).ss((function(s, u) {
            var a = _i(u);
            a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.va(t, a)));
        })).next((function() {
            return pr.$n(o);
        })).next((function() {
            return i;
        }));
    }, 
    /**
     * Call provided function with each `TargetData` that we have cached.
     */
    t.prototype.De = function(t, e) {
        return no(t).ss((function(t, n) {
            var r = _i(n);
            e(r);
        }));
    }, t.prototype.Ia = function(t) {
        return ro(t).get(Ki.key).next((function(t) {
            return g(null !== t), t;
        }));
    }, t.prototype.Aa = function(t, e) {
        return ro(t).put(Ki.key, e);
    }, t.prototype.Va = function(t, e) {
        return no(t).put(bi(this.serializer, e));
    }, 
    /**
     * In-place updates the provided metadata to account for values in the given
     * TargetData. Saving is done separately. Returns true if there were any
     * changes to the metadata.
     */
    t.prototype.pa = function(t, e) {
        var n = !1;
        return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), 
        t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, 
        n = !0), n;
    }, t.prototype.Da = function(t) {
        return this.Ia(t).next((function(t) {
            return t.targetCount;
        }));
    }, t.prototype.Ca = function(t, e) {
        // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficient.
        var n = lt(e), r = IDBKeyRange.bound([ n, Number.NEGATIVE_INFINITY ], [ n, Number.POSITIVE_INFINITY ]), i = null;
        return no(t).ss({
            range: r,
            index: Qi.queryTargetsIndexName
        }, (function(t, n, r) {
            var o = _i(n);
            // After finding a potential match, check that the target is
            // actually equal to the requested target.
                        pt(e, o.target) && (i = o, r.done());
        })).next((function() {
            return i;
        }));
    }, t.prototype.Na = function(t, e, n) {
        var r = this, i = [], o = io(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return e.forEach((function(e) {
            var s = ai(e.path);
            i.push(o.put(new Wi(n, s))), i.push(r.Co.Fa(t, n, e));
        })), pr.$n(i);
    }, t.prototype.$a = function(t, e, n) {
        var r = this, i = io(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return pr.forEach(e, (function(e) {
            var o = ai(e.path);
            return pr.$n([ i.delete([ n, o ]), r.Co.xa(t, n, e) ]);
        }));
    }, t.prototype.Sa = function(t, e) {
        var n = io(t), r = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return n.delete(r);
    }, t.prototype.ka = function(t, e) {
        var n = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), r = io(t), i = Ot();
        return r.ss({
            range: n,
            ns: !0
        }, (function(t, e, n) {
            var r = fi(t[1]), o = new N(r);
            i = i.add(o);
        })).next((function() {
            return i;
        }));
    }, t.prototype.zo = function(t, e) {
        var n = ai(e.path), r = IDBKeyRange.bound([ n ], [ $(n) ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), i = 0;
        return io(t).ss({
            index: Wi.documentTargetsIndex,
            ns: !0,
            range: r
        }, (function(t, e, n) {
            var r = t[0];
            // Having a sentinel row for a document does not count as containing that document;
            // For the target cache, containing the document means the document is part of some
            // target.
                        t[1];
            0 !== r && (i++, n.done());
        })).next((function() {
            return i > 0;
        }));
    }, 
    /**
     * Looks up a TargetData entry by target ID.
     *
     * @param targetId The target ID of the TargetData entry to look up.
     * @return The cached TargetData entry, or null if the cache has no entry for
     * the target.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.qe = function(t, e) {
        return no(t).get(e).next((function(t) {
            return t ? _i(t) : null;
        }));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Helper to get a typed SimpleDbStore for the queries object store.
 */
function no(t) {
    return uo.Un(t, Qi.store);
}

/**
 * Helper to get a typed SimpleDbStore for the target globals object store.
 */ function ro(t) {
    return uo.Un(t, Ki.store);
}

/**
 * Helper to get a typed SimpleDbStore for the document target object store.
 */ function io(t) {
    return uo.Un(t, Wi.store);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var oo = "Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.", so = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).Wo = t, r.Ma = n, r;
    }
    return t.__extends(n, e), n;
}(Jr), uo = /** @class */ function() {
    function e(
    /**
     * Whether to synchronize the in-memory state of multiple tabs and share
     * access to local persistence.
     */
    t, n, r, i, o, s, u, h, f, 
    /**
     * If set to true, forcefully obtains database access. Existing tabs will
     * no longer be able to access IndexedDB.
     */
    l) {
        if (this.allowTabSynchronization = t, this.persistenceKey = n, this.clientId = r, 
        this._n = o, this.window = s, this.document = u, this.Oa = f, this.La = l, this.Ba = null, 
        this.qa = !1, this.isPrimary = !1, this.networkEnabled = !0, 
        /** Our window.unload handler, if registered. */
        this.Ua = null, this.inForeground = !1, 
        /** Our 'visibilitychange' listener if registered. */
        this.Qa = null, 
        /** The client metadata refresh task. */
        this.Wa = null, 
        /** The last time we garbage collected the client metadata object store. */
        this.ja = Number.NEGATIVE_INFINITY, 
        /** A listener to notify on primary state changes. */
        this.Ka = function(t) {
            return Promise.resolve();
        }, !e.On()) throw new c(a.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
        this.Co = new ho(this, i), this.Ga = n + "main", this.serializer = new li(h), this.za = new dr(this.Ga, 10, new Pi(this.serializer)), 
        this.Ha = new eo(this.Co, this.serializer), this.Sr = new Zi, this.br = new Si(this.serializer, this.Sr), 
        this.window && this.window.localStorage ? this.Ya = this.window.localStorage : (this.Ya = null, 
        !1 === l && p("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
    }
    return e.Un = function(t, e) {
        if (t instanceof so) return dr.Un(t.Wo, e);
        throw y();
    }, 
    /**
     * Attempt to start IndexedDb persistence.
     *
     * @return {Promise<void>} Whether persistence was enabled.
     */
    e.prototype.start = function() {
        var t = this;
        // NOTE: This is expected to fail sometimes (in the case of another tab
        // already having the persistence lock), so it's the first thing we should
        // do.
                return this.Ja().then((function() {
            if (!t.isPrimary && !t.allowTabSynchronization) 
            // Fail `start()` if `synchronizeTabs` is disabled and we cannot
            // obtain the primary lease.
            throw new c(a.FAILED_PRECONDITION, oo);
            return t.Xa(), t.Za(), t.tc(), t.runTransaction("getHighestListenSequenceNumber", "readonly", (function(e) {
                return t.Ha.Pa(e);
            }));
        })).then((function(e) {
            t.Ba = new Mr(e, t.Oa);
        })).then((function() {
            t.qa = !0;
        })).catch((function(e) {
            return t.za && t.za.close(), Promise.reject(e);
        }));
    }, 
    /**
     * Registers a listener that gets called when the primary state of the
     * instance changes. Upon registering, this listener is invoked immediately
     * with the current primary state.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    e.prototype.ec = function(e) {
        var n = this;
        return this.Ka = function(r) {
            return t.__awaiter(n, void 0, void 0, (function() {
                return t.__generator(this, (function(t) {
                    return this.Ti ? [ 2 /*return*/ , e(r) ] : [ 2 /*return*/ ];
                }));
            }));
        }, e(this.isPrimary);
    }, 
    /**
     * Registers a listener that gets called when the database receives a
     * version change event indicating that it has deleted.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    e.prototype.nc = function(e) {
        var n = this;
        this.za.jn((function(r) {
            return t.__awaiter(n, void 0, void 0, (function() {
                return t.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return null === r.newVersion ? [ 4 /*yield*/ , e() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, 
    /**
     * Adjusts the current network state in the client's metadata, potentially
     * affecting the primary lease.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    e.prototype.sc = function(e) {
        var n = this;
        this.networkEnabled !== e && (this.networkEnabled = e, 
        // Schedule a primary lease refresh for immediate execution. The eventual
        // lease update will be propagated via `primaryStateListener`.
        this._n.ds((function() {
            return t.__awaiter(n, void 0, void 0, (function() {
                return t.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return this.Ti ? [ 4 /*yield*/ , this.Ja() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })));
    }, 
    /**
     * Updates the client metadata in IndexedDb and attempts to either obtain or
     * extend the primary lease for the local client. Asynchronously notifies the
     * primary state listener if the client either newly obtained or released its
     * primary lease.
     */
    e.prototype.Ja = function() {
        var t = this;
        return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (function(e) {
            return co(e).put(new $i(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next((function() {
                if (t.isPrimary) return t.ic(e).next((function(e) {
                    e || (t.isPrimary = !1, t._n.Ds((function() {
                        return t.Ka(!1);
                    })));
                }));
            })).next((function() {
                return t.rc(e);
            })).next((function(n) {
                return t.isPrimary && !n ? t.oc(e).next((function() {
                    return !1;
                })) : !!n && t.ac(e).next((function() {
                    return !0;
                }));
            }));
        })).catch((function(e) {
            if (gr(e)) 
            // Proceed with the existing state. Any subsequent access to
            // IndexedDB will verify the lease.
            return l("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary;
            if (!t.allowTabSynchronization) throw e;
            return l("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), 
            /* isPrimary= */ !1;
        })).then((function(e) {
            t.isPrimary !== e && t._n.Ds((function() {
                return t.Ka(e);
            })), t.isPrimary = e;
        }));
    }, e.prototype.ic = function(t) {
        var e = this;
        return ao(t).get(Ci.key).next((function(t) {
            return pr.resolve(e.cc(t));
        }));
    }, e.prototype.uc = function(t) {
        return co(t).delete(this.clientId);
    }, 
    /**
     * If the garbage collection threshold has passed, prunes the
     * RemoteDocumentChanges and the ClientMetadata store based on the last update
     * time of all clients.
     */
    e.prototype.hc = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            var n, r, i, o, s = this;
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return !this.isPrimary || this.lc(this.ja, 18e5) ? [ 3 /*break*/ , 2 ] : (this.ja = Date.now(), 
                    [ 4 /*yield*/ , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (function(t) {
                        var n = e.Un(t, $i.store);
                        return n.Zn().next((function(t) {
                            var e = s._c(t, 18e5), r = t.filter((function(t) {
                                return -1 === e.indexOf(t);
                            }));
                            // Delete metadata for clients that are no longer considered active.
                                                        return pr.forEach(r, (function(t) {
                                return n.delete(t.clientId);
                            })).next((function() {
                                return r;
                            }));
                        }));
                    })).catch((function() {
                        return [];
                    })) ]);

                  case 1:
                    // Delete potential leftover entries that may continue to mark the
                    // inactive clients as zombied in LocalStorage.
                    // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
                    // the client atomically, but we can't. So we opt to delete the IndexedDb
                    // entries first to avoid potentially reviving a zombied client.
                    if (n = t.sent(), this.Ya) for (r = 0, i = n; r < i.length; r++) o = i[r], this.Ya.removeItem(this.fc(o.clientId));
                    t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Schedules a recurring timer to update the client metadata and to either
     * extend or acquire the primary lease if the client is eligible.
     */
    e.prototype.tc = function() {
        var t = this;
        this.Wa = this._n.gn("client_metadata_refresh" /* ClientMetadataRefresh */ , 4e3, (function() {
            return t.Ja().then((function() {
                return t.hc();
            })).then((function() {
                return t.tc();
            }));
        }));
    }, 
    /** Checks whether `client` is the local client. */ e.prototype.cc = function(t) {
        return !!t && t.ownerId === this.clientId;
    }, 
    /**
     * Evaluate the state of all active clients and determine whether the local
     * client is or can act as the holder of the primary lease. Returns whether
     * the client is eligible for the lease, but does not actually acquire it.
     * May return 'false' even if there is no active leaseholder and another
     * (foreground) client should become leaseholder instead.
     */
    e.prototype.rc = function(t) {
        var e = this;
        return this.La ? pr.resolve(!0) : ao(t).get(Ci.key).next((function(n) {
            // A client is eligible for the primary lease if:
            // - its network is enabled and the client's tab is in the foreground.
            // - its network is enabled and no other client's tab is in the
            //   foreground.
            // - every clients network is disabled and the client's tab is in the
            //   foreground.
            // - every clients network is disabled and no other client's tab is in
            //   the foreground.
            // - the `forceOwningTab` setting was passed in.
            if (null !== n && e.lc(n.leaseTimestampMs, 5e3) && !e.dc(n.ownerId)) {
                if (e.cc(n) && e.networkEnabled) return !0;
                if (!e.cc(n)) {
                    if (!n.allowTabSynchronization) 
                    // Fail the `canActAsPrimary` check if the current leaseholder has
                    // not opted into multi-tab synchronization. If this happens at
                    // client startup, we reject the Promise returned by
                    // `enablePersistence()` and the user can continue to use Firestore
                    // with in-memory persistence.
                    // If this fails during a lease refresh, we will instead block the
                    // AsyncQueue from executing further operations. Note that this is
                    // acceptable since mixing & matching different `synchronizeTabs`
                    // settings is not supported.
                    // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                    // no longer be turned off.
                    throw new c(a.FAILED_PRECONDITION, oo);
                    return !1;
                }
            }
            return !(!e.networkEnabled || !e.inForeground) || co(t).Zn().next((function(t) {
                return void 0 === e._c(t, 5e3).find((function(t) {
                    if (e.clientId !== t.clientId) {
                        var n = !e.networkEnabled && t.networkEnabled, r = !e.inForeground && t.inForeground, i = e.networkEnabled === t.networkEnabled;
                        if (n || r && i) return !0;
                    }
                    return !1;
                }));
            }));
        })).next((function(t) {
            return e.isPrimary !== t && l("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), 
            t;
        }));
    }, e.prototype.Si = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            var e = this;
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                    // has obtained the primary lease.
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    return this.qa = !1, this.wc(), this.Wa && (this.Wa.cancel(), this.Wa = null), this.mc(), 
                    this.Tc(), [ 4 /*yield*/ , this.za.runTransaction("readwrite", [ Ci.store, $i.store ], (function(t) {
                        var n = new so(t, Mr.oi);
                        return e.oc(n).next((function() {
                            return e.uc(n);
                        }));
                    })) ];

                  case 1:
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                    // has obtained the primary lease.
                    return t.sent(), this.za.close(), 
                    // Remove the entry marking the client as zombied from LocalStorage since
                    // we successfully deleted its metadata from IndexedDb.
                    this.Ec(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns clients that are not zombied and have an updateTime within the
     * provided threshold.
     */
    e.prototype._c = function(t, e) {
        var n = this;
        return t.filter((function(t) {
            return n.lc(t.updateTimeMs, e) && !n.dc(t.clientId);
        }));
    }, 
    /**
     * Returns the IDs of the clients that are currently active. If multi-tab
     * is not supported, returns an array that only contains the local client's
     * ID.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    e.prototype.Vi = function() {
        var t = this;
        return this.runTransaction("getActiveClients", "readonly", (function(e) {
            return co(e).Zn().next((function(e) {
                return t._c(e, 18e5).map((function(t) {
                    return t.clientId;
                }));
            }));
        }));
    }, Object.defineProperty(e.prototype, "Ti", {
        get: function() {
            return this.qa;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.Ic = function(t) {
        return Ii.Fo(t, this.serializer, this.Sr, this.Co);
    }, e.prototype.Ac = function() {
        return this.Ha;
    }, e.prototype.Rc = function() {
        return this.br;
    }, e.prototype.Pc = function() {
        return this.Sr;
    }, e.prototype.runTransaction = function(t, e, n) {
        var r = this;
        l("IndexedDbPersistence", "Starting transaction:", t);
        var i, o = "readonly" === e ? "readonly" : "readwrite";
        // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.
        return this.za.runTransaction(o, Xi, (function(o) {
            return i = new so(o, r.Ba ? r.Ba.next() : Mr.oi), "readwrite-primary" === e ? r.ic(i).next((function(t) {
                return !!t || r.rc(i);
            })).next((function(e) {
                if (!e) throw p("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, 
                r._n.Ds((function() {
                    return r.Ka(!1);
                })), new c(a.FAILED_PRECONDITION, Zr);
                return n(i);
            })).next((function(t) {
                return r.ac(i).next((function() {
                    return t;
                }));
            })) : r.gc(i).next((function() {
                return n(i);
            }));
        })).then((function(t) {
            return i.pr(), t;
        }));
    }, 
    /**
     * Verifies that the current tab is the primary leaseholder or alternatively
     * that the leaseholder has opted into multi-tab synchronization.
     */
    // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
    // be turned off.
    e.prototype.gc = function(t) {
        var e = this;
        return ao(t).get(Ci.key).next((function(t) {
            if (null !== t && e.lc(t.leaseTimestampMs, 5e3) && !e.dc(t.ownerId) && !e.cc(t) && !(e.La || e.allowTabSynchronization && t.allowTabSynchronization)) throw new c(a.FAILED_PRECONDITION, oo);
        }));
    }, 
    /**
     * Obtains or extends the new primary lease for the local client. This
     * method does not verify that the client is eligible for this lease.
     */
    e.prototype.ac = function(t) {
        var e = new Ci(this.clientId, this.allowTabSynchronization, Date.now());
        return ao(t).put(Ci.key, e);
    }, e.On = function() {
        return dr.On();
    }, 
    /** Checks the primary lease and removes it if we are the current primary. */ e.prototype.oc = function(t) {
        var e = this, n = ao(t);
        return n.get(Ci.key).next((function(t) {
            return e.cc(t) ? (l("IndexedDbPersistence", "Releasing primary lease."), n.delete(Ci.key)) : pr.resolve();
        }));
    }, 
    /** Verifies that `updateTimeMs` is within `maxAgeMs`. */ e.prototype.lc = function(t, e) {
        var n = Date.now();
        return !(t < n - e || t > n && (p("Detected an update time that is in the future: " + t + " > " + n), 
        1));
    }, e.prototype.Xa = function() {
        var t = this;
        null !== this.document && "function" == typeof this.document.addEventListener && (this.Qa = function() {
            t._n.ds((function() {
                return t.inForeground = "visible" === t.document.visibilityState, t.Ja();
            }));
        }, this.document.addEventListener("visibilitychange", this.Qa), this.inForeground = "visible" === this.document.visibilityState);
    }, e.prototype.mc = function() {
        this.Qa && (this.document.removeEventListener("visibilitychange", this.Qa), this.Qa = null);
    }, 
    /**
     * Attaches a window.unload handler that will synchronously write our
     * clientId to a "zombie client id" location in LocalStorage. This can be used
     * by tabs trying to acquire the primary lease to determine that the lease
     * is no longer valid even if the timestamp is recent. This is particularly
     * important for the refresh case (so the tab correctly re-acquires the
     * primary lease). LocalStorage is used for this rather than IndexedDb because
     * it is a synchronous API and so can be used reliably from  an unload
     * handler.
     */
    e.prototype.Za = function() {
        var t, e = this;
        "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.Ua = function() {
            // Note: In theory, this should be scheduled on the AsyncQueue since it
            // accesses internal state. We execute this code directly during shutdown
            // to make sure it gets a chance to run.
            e.wc(), e._n.ds((function() {
                return e.Si();
            }));
        }, this.window.addEventListener("unload", this.Ua));
    }, e.prototype.Tc = function() {
        this.Ua && (this.window.removeEventListener("unload", this.Ua), this.Ua = null);
    }, 
    /**
     * Returns whether a client is "zombied" based on its LocalStorage entry.
     * Clients become zombied when their tab closes without running all of the
     * cleanup logic in `shutdown()`.
     */
    e.prototype.dc = function(t) {
        var e;
        try {
            var n = null !== (null === (e = this.Ya) || void 0 === e ? void 0 : e.getItem(this.fc(t)));
            return l("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), 
            n;
        } catch (t) {
            // Gracefully handle if LocalStorage isn't working.
            return p("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
        }
    }, 
    /**
     * Record client as zombied (a client that had its tab closed). Zombied
     * clients are ignored during primary tab selection.
     */
    e.prototype.wc = function() {
        if (this.Ya) try {
            this.Ya.setItem(this.fc(this.clientId), String(Date.now()));
        } catch (t) {
            // Gracefully handle if LocalStorage isn't available / working.
            p("Failed to set zombie client id.", t);
        }
    }, 
    /** Removes the zombied client entry if it exists. */ e.prototype.Ec = function() {
        if (this.Ya) try {
            this.Ya.removeItem(this.fc(this.clientId));
        } catch (t) {
            // Ignore
        }
    }, e.prototype.fc = function(t) {
        return "firestore_zombie_" + this.persistenceKey + "_" + t;
    }, e;
}();

/**
 * Oldest acceptable age in milliseconds for client metadata before the client
 * is considered inactive and its associated data is garbage collected.
 */
/**
 * Helper to get a typed SimpleDbStore for the primary client object store.
 */
function ao(t) {
    return uo.Un(t, Ci.store);
}

/**
 * Helper to get a typed SimpleDbStore for the client metadata object store.
 */ function co(t) {
    return uo.Un(t, $i.store);
}

/** Provides LRU functionality for IndexedDB persistence. */ var ho = /** @class */ function() {
    function t(t, e) {
        this.db = t, this.do = new ui(this, e);
    }
    return t.prototype.Ro = function(t) {
        var e = this.yc(t);
        return this.db.Ac().Da(t).next((function(t) {
            return e.next((function(e) {
                return t + e;
            }));
        }));
    }, t.prototype.yc = function(t) {
        var e = 0;
        return this.yo(t, (function(t) {
            e++;
        })).next((function() {
            return e;
        }));
    }, t.prototype.De = function(t, e) {
        return this.db.Ac().De(t, e);
    }, t.prototype.yo = function(t, e) {
        return this.Vc(t, (function(t, n) {
            return e(n);
        }));
    }, t.prototype.Fa = function(t, e, n) {
        return fo(t, n);
    }, t.prototype.xa = function(t, e, n) {
        return fo(t, n);
    }, t.prototype.Vo = function(t, e, n) {
        return this.db.Ac().Vo(t, e, n);
    }, t.prototype.Ko = function(t, e) {
        return fo(t, e);
    }, 
    /**
     * Returns true if anything would prevent this document from being garbage
     * collected, given that the document in question is not present in any
     * targets and has a sequence number less than or equal to the upper bound for
     * the collection run.
     */
    t.prototype.bc = function(t, e) {
        return function(t, e) {
            var n = !1;
            return Di(t).rs((function(r) {
                return Ei(t, r, e).next((function(t) {
                    return t && (n = !0), pr.resolve(!t);
                }));
            })).next((function() {
                return n;
            }));
        }(t, e);
    }, t.prototype.po = function(t, e) {
        var n = this, r = this.db.Rc().aa(), i = [], o = 0;
        return this.Vc(t, (function(s, u) {
            if (u <= e) {
                var a = n.bc(t, s).next((function(e) {
                    if (!e) 
                    // Our size accounting requires us to read all documents before
                    // removing them.
                    return o++, r.Ar(t, s).next((function() {
                        return r.Ir(s), io(t).delete([ 0, ai(s.path) ]);
                    }));
                }));
                i.push(a);
            }
        })).next((function() {
            return pr.$n(i);
        })).next((function() {
            return r.apply(t);
        })).next((function() {
            return o;
        }));
    }, t.prototype.removeTarget = function(t, e) {
        var n = e.nt(t.Ma);
        return this.db.Ac().ba(t, n);
    }, t.prototype.vc = function(t, e) {
        return fo(t, e);
    }, 
    /**
     * Call provided function for each document in the cache that is 'orphaned'. Orphaned
     * means not a part of any target, so the only entry in the target-document index for
     * that document will be the sentinel row (targetId 0), which will also have the sequence
     * number for the last time the document was accessed.
     */
    t.prototype.Vc = function(t, e) {
        var n, r = io(t), i = Mr.oi;
        return r.ss({
            index: Wi.documentTargetsIndex
        }, (function(t, r) {
            var o = t[0], s = (t[1], r.path), u = r.sequenceNumber;
            0 === o ? (
            // if nextToReport is valid, report it, this is a new key so the
            // last one must not be a member of any targets.
            i !== Mr.oi && e(new N(fi(n)), i), 
            // set nextToReport to be this sequence number. It's the next one we
            // might report, if we don't find any targets for this document.
            // Note that the sequence number must be defined when the targetId
            // is 0.
            i = u, n = s) : 
            // set nextToReport to be invalid, we know we don't need to report
            // this one since we found a target for it.
            i = Mr.oi;
        })).next((function() {
            // Since we report sequence numbers after getting to the next key, we
            // need to check if the last key we iterated over was an orphaned
            // document and report it.
            i !== Mr.oi && e(new N(fi(n)), i);
        }));
    }, t.prototype.vo = function(t) {
        return this.db.Rc().ha(t);
    }, t;
}();

function fo(t, e) {
    return io(t).put(
    /**
 * @return A value suitable for writing a sentinel row in the target-document
 * store.
 */
    function(t, e) {
        return new Wi(0, ai(t.path), e);
    }(e, t.Ma));
}

/**
 * Generates a string used as a prefix when storing data in IndexedDB and
 * LocalStorage.
 */ function lo(t, e) {
    // Use two different prefix formats:
    //   * firestore / persistenceKey / projectID . databaseID / ...
    //   * firestore / persistenceKey / projectID / ...
    // projectIDs are DNS-compatible names and cannot contain dots
    // so there's no danger of collisions.
    var n = t.projectId;
    return t.W || (n += "." + t.database), "firestore/" + e + "/" + n + "/"
    /**
 * Implements `LocalStore` interface.
 *
 * Note: some field defined in this class might have public access level, but
 * the class is not exported so they are only accessible from this module.
 * This is useful to implement optional features (like bundles) in free
 * functions, such that they are tree-shakeable.
 */;
}

var po = /** @class */ function() {
    function t(
    /** Manages our in-memory or durable persistence. */
    t, e, n) {
        this.persistence = t, this.Sc = e, 
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.Dc = new bt(H), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.Cc = new it((function(t) {
            return lt(t);
        }), pt), 
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this.Nc = st.min(), this.vr = t.Ic(n), this.Fc = t.Rc(), this.Ha = t.Ac(), this.$c = new ti(this.Fc, this.vr, this.persistence.Pc()), 
        this.Sc.xc(this.$c);
    }
    return t.prototype.Eo = function(t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
            return t.bo(n, e.Dc);
        }));
    }, t;
}();

/**
 * Acknowledges the given batch.
 *
 * On the happy path when a batch is acknowledged, the local store will
 *
 *  + remove the batch from the mutation queue;
 *  + apply the changes to the remote document cache;
 *  + recalculate the latency compensated view implied by those changes (there
 *    may be mutations in the queue that affect the documents but haven't been
 *    acknowledged yet); and
 *  + give the changed documents back the sync engine
 *
 * @returns The resulting (modified) documents.
 */ function vo(t, e) {
    var n = m(t);
    return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(t) {
        var r = e.batch.keys(), i = n.Fc.aa({
            ua: !0
        });
        return function(t, e, n, r) {
            var i = n.batch, o = i.keys(), s = pr.resolve();
            return o.forEach((function(t) {
                s = s.next((function() {
                    return r.Ar(e, t);
                })).next((function(e) {
                    var o = e, s = n._r.get(t);
                    g(null !== s), (!o || o.version.L(s) < 0) && ((o = i.ar(t, o, n)) && 
                    // We use the commitVersion as the readTime rather than the
                    // document's updateTime since the updateTime is not advanced
                    // for updates that do not modify the underlying document.
                    r.Tr(o, n.lr));
                }));
            })), s.next((function() {
                return t.vr.Qo(e, i);
            }));
        }(n, t, e, i).next((function() {
            return i.apply(t);
        })).next((function() {
            return n.vr.Go(t);
        })).next((function() {
            return n.$c.$r(t, r);
        }));
    }));
}

/**
 * Removes mutations from the MutationQueue for the specified batch;
 * LocalDocuments will be recalculated.
 *
 * @returns The resulting modified documents.
 */
/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */ function yo(t) {
    var e = m(t);
    return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(t) {
        return e.Ha.Ra(t);
    }));
}

/**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */ function go(t, e) {
    var n = m(t), r = e.et, i = n.Dc;
    return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(t) {
        var o = n.Fc.aa({
            ua: !0
        });
        // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                i = n.Dc;
        var s = [];
        e.Gt.forEach((function(e, o) {
            var u = i.get(o);
            if (u) {
                // Only update the remote keys if the target is still active. This
                // ensures that we can persist the updated target data along with
                // the updated assignment.
                s.push(n.Ha.$a(t, e.ne, o).next((function() {
                    return n.Ha.Na(t, e.te, o);
                })));
                var a = e.resumeToken;
                // Update the resume token if the change includes one.
                                if (a.O() > 0) {
                    var c = u.st(a, r).nt(t.Ma);
                    i = i.rt(o, c), 
                    // Update the target data if there are target changes (or if
                    // sufficient time has passed since the last update).
                    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
                    function(t, e, n) {
                        // Always persist target data if we don't already have a resume token.
                        return g(e.resumeToken.O() > 0), 0 === t.resumeToken.O() || (
                        // Don't allow resume token changes to be buffered indefinitely. This
                        // allows us to be reasonably up-to-date after a crash and avoids needing
                        // to loop over all active queries on shutdown. Especially in the browser
                        // we may not get time to do anything interesting while the current tab is
                        // closing.
                        e.et.J() - t.et.J() >= 3e8 || n.te.size + n.ee.size + n.ne.size > 0);
                    }(u, c, e) && s.push(n.Ha.ba(t, c));
                }
            }
        }));
        var u = Dt(), a = Ot();
        // HACK: The only reason we allow a null snapshot version is so that we
        // can synthesize remote events when we get permission denied errors while
        // trying to resolve the state of a locally cached document that is in
        // limbo.
                if (e.Ht.forEach((function(t, e) {
            a = a.add(t);
        })), 
        // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
        // documents in advance in a single call.
        s.push(o.getEntries(t, a).next((function(i) {
            e.Ht.forEach((function(a, c) {
                var h = i.get(a);
                // Note: The order of the steps below is important, since we want
                // to ensure that rejected limbo resolutions (which fabricate
                // NoDocuments with SnapshotVersion.min()) never add documents to
                // cache.
                                c instanceof Sn && c.version.isEqual(st.min()) ? (
                // NoDocuments with SnapshotVersion.min() are used in manufactured
                // events. We remove these documents from cache since we lost
                // access.
                o.Ir(a, r), u = u.rt(a, c)) : null == h || c.version.L(h.version) > 0 || 0 === c.version.L(h.version) && h.hasPendingWrites ? (o.Tr(c, r), 
                u = u.rt(a, c)) : l("LocalStore", "Ignoring outdated watch update for ", a, ". Current version:", h.version, " Watch version:", c.version), 
                e.Yt.has(a) && s.push(n.persistence.Co.vc(t, a));
            }));
        }))), !r.isEqual(st.min())) {
            var c = n.Ha.Ra(t).next((function(e) {
                return n.Ha.ga(t, t.Ma, r);
            }));
            s.push(c);
        }
        return pr.$n(s).next((function() {
            return o.apply(t);
        })).next((function() {
            return n.$c.kr(t, u);
        }));
    })).then((function(t) {
        return n.Dc = i, t;
    }));
}

/**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */ function mo(t, e) {
    var n = m(t);
    return n.persistence.runTransaction("Get next mutation batch", "readonly", (function(t) {
        return void 0 === e && (e = -1), n.vr.Lo(t, e);
    }));
}

/**
 * Reads the current value of a Document with a given key or null if not
 * found - used for testing.
 */
/**
 * Assigns the given target an internal ID so that its results can be pinned so
 * they don't get GC'd. A target must be allocated in the local store before
 * the store can be used to manage its view.
 *
 * Allocating an already allocated `Target` will return the existing `TargetData`
 * for that `Target`.
 */ function wo(t, e) {
    var n = m(t);
    return n.persistence.runTransaction("Allocate target", "readwrite", (function(t) {
        var r;
        return n.Ha.Ca(t, e).next((function(i) {
            return i ? (
            // This target has been listened to previously, so reuse the
            // previous targetID.
            // TODO(mcg): freshen last accessed date?
            r = i, pr.resolve(r)) : n.Ha.Ea(t).next((function(i) {
                return r = new gt(e, i, 0 /* Listen */ , t.Ma), n.Ha.ya(t, r).next((function() {
                    return r;
                }));
            }));
        }));
    })).then((function(t) {
        // If Multi-Tab is enabled, the existing target data may be newer than
        // the in-memory data
        var r = n.Dc.get(t.targetId);
        return (null === r || t.et.L(r.et) > 0) && (n.Dc = n.Dc.rt(t.targetId, t), n.Cc.set(e, t.targetId)), 
        t;
    }));
}

/**
 * Returns the TargetData as seen by the LocalStore, including updates that may
 * have not yet been persisted to the TargetCache.
 */
// Visible for testing.
/**
 * Unpins all the documents associated with the given target. If
 * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
 * directly removes the associated target data from the target cache.
 *
 * Releasing a non-existing `Target` is a no-op.
 */
// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
function _o(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var i, o, s, u;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                i = m(e), o = i.Dc.get(n), s = r ? "readwrite" : "readwrite-primary", t.label = 1;

              case 1:
                return t.trys.push([ 1, 4, , 5 ]), r ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , i.persistence.runTransaction("Release target", s, (function(t) {
                    return i.persistence.Co.removeTarget(t, o);
                })) ];

              case 2:
                t.sent(), t.label = 3;

              case 3:
                return [ 3 /*break*/ , 5 ];

              case 4:
                if (!gr(u = t.sent())) throw u;
                // All `releaseTarget` does is record the final metadata state for the
                // target, but we've been recording this periodically during target
                // activity. If we lose this write this could cause a very slight
                // difference in the order of target deletion during GC, but we
                // don't define exact LRU semantics so this is acceptable.
                                return l("LocalStore", "Failed to update sequence numbers for target " + n + ": " + u), 
                [ 3 /*break*/ , 5 ];

              case 5:
                return i.Dc = i.Dc.remove(n), i.Cc.delete(o.target), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults Whether results from previous executions can
 * be used to optimize this query execution.
 */ function bo(t, e, n) {
    var r = m(t), i = st.min(), o = Ot();
    return r.persistence.runTransaction("Execute query", "readonly", (function(t) {
        return function(t, e, n) {
            var r = m(t), i = r.Cc.get(n);
            return void 0 !== i ? pr.resolve(r.Dc.get(i)) : r.Ha.Ca(e, n);
        }(r, t, qn(e)).next((function(e) {
            if (e) return i = e.lastLimboFreeSnapshotVersion, r.Ha.ka(t, e.targetId).next((function(t) {
                o = t;
            }));
        })).next((function() {
            return r.Sc.Or(t, e, n ? i : st.min(), n ? o : Ot());
        })).next((function(t) {
            return {
                documents: t,
                kc: o
            };
        }));
    }));
}

// PORTING NOTE: Multi-Tab only.
function Io(t, e) {
    var n = m(t), r = m(n.Ha), i = n.Dc.get(e);
    return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (function(t) {
        return r.qe(t, e).next((function(t) {
            return t ? t.target : null;
        }));
    }));
}

/**
 * Returns the set of documents that have been updated since the last call.
 * If this is the first call, returns the set of changes since client
 * initialization. Further invocations will return document that have changed
 * since the prior call.
 */
// PORTING NOTE: Multi-Tab only.
/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err An error returned by a LocalStore operation.
 * @return A Promise that resolves after we recovered, or the original error.
 */ function Eo(e) {
    return t.__awaiter(this, void 0, void 0, (function() {
        return t.__generator(this, (function(t) {
            if (e.code !== a.FAILED_PRECONDITION || e.message !== Zr) throw e;
            return l("LocalStore", "Unexpectedly lost primary lease"), [ 2 /*return*/ ];
        }));
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */ var To = /** @class */ function() {
    function t() {
        // A set of outstanding references to a document sorted by key.
        this.Mc = new Tt(Ao.Oc), 
        // A set of outstanding references to a document sorted by target id.
        this.Lc = new Tt(Ao.Bc)
        /** Returns true if the reference set contains no references. */;
    }
    return t.prototype.m = function() {
        return this.Mc.m();
    }, 
    /** Adds a reference to the given document key for the given ID. */ t.prototype.Fa = function(t, e) {
        var n = new Ao(t, e);
        this.Mc = this.Mc.add(n), this.Lc = this.Lc.add(n);
    }, 
    /** Add references to the given document keys for the given ID. */ t.prototype.qc = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.Fa(t, e);
        }));
    }, 
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype.xa = function(t, e) {
        this.Uc(new Ao(t, e));
    }, t.prototype.Qc = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.xa(t, e);
        }));
    }, 
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.Wc = function(t) {
        var e = this, n = new N(new E([])), r = new Ao(n, t), i = new Ao(n, t + 1), o = [];
        return this.Lc.Nt([ r, i ], (function(t) {
            e.Uc(t), o.push(t.key);
        })), o;
    }, t.prototype.jc = function() {
        var t = this;
        this.Mc.forEach((function(e) {
            return t.Uc(e);
        }));
    }, t.prototype.Uc = function(t) {
        this.Mc = this.Mc.delete(t), this.Lc = this.Lc.delete(t);
    }, t.prototype.Kc = function(t) {
        var e = new N(new E([])), n = new Ao(e, t), r = new Ao(e, t + 1), i = Ot();
        return this.Lc.Nt([ n, r ], (function(t) {
            i = i.add(t.key);
        })), i;
    }, t.prototype.zo = function(t) {
        var e = new Ao(t, 0), n = this.Mc.$t(e);
        return null !== n && t.isEqual(n.key);
    }, t;
}(), Ao = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.Gc = e
        /** Compare by key then by ID */;
    }
    return t.Oc = function(t, e) {
        return N.i(t.key, e.key) || H(t.Gc, e.Gc);
    }, 
    /** Compare by ID then by key */ t.Bc = function(t, e) {
        return H(t.Gc, e.Gc) || N.i(t.key, e.key);
    }, t;
}(), No = function(t, e) {
    this.user = e, this.type = "OAuth", this.zc = {}, 
    // Set the headers using Object Literal notation to avoid minification
    this.zc.Authorization = "Bearer " + t;
}, Do = /** @class */ function() {
    function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.Hc = null;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(null);
    }, t.prototype.Yc = function() {}, t.prototype.Jc = function(t) {
        this.Hc = t, 
        // Fire with initial user.
        t(Cr.UNAUTHENTICATED);
    }, t.prototype.Xc = function() {
        this.Hc = null;
    }, t;
}(), So = /** @class */ function() {
    function t(t) {
        var e = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */        this.Zc = null, 
        /** Tracks the current User. */
        this.currentUser = Cr.UNAUTHENTICATED, this.tu = !1, 
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.eu = 0, 
        /** The listener registered with setChangeListener(). */
        this.Hc = null, this.forceRefresh = !1, this.Zc = function() {
            e.eu++, e.currentUser = e.nu(), e.tu = !0, e.Hc && e.Hc(e.currentUser);
        }, this.eu = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.Zc) : (
        // if auth is not available, invoke tokenListener once with null token
        this.Zc(null), t.get().then((function(t) {
            e.auth = t, e.Zc && 
            // tokenListener can be removed by removeChangeListener()
            e.auth.addAuthTokenListener(e.Zc);
        }), (function() {})));
    }
    return t.prototype.getToken = function() {
        var t = this, e = this.eu, n = this.forceRefresh;
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
                return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            return t.eu !== e ? (l("FirebaseCredentialsProvider", "getToken aborted due to token change."), 
            t.getToken()) : n ? (g("string" == typeof n.accessToken), new No(n.accessToken, t.currentUser)) : null;
        })) : Promise.resolve(null);
    }, t.prototype.Yc = function() {
        this.forceRefresh = !0;
    }, t.prototype.Jc = function(t) {
        this.Hc = t, 
        // Fire the initial event
        this.tu && t(this.currentUser);
    }, t.prototype.Xc = function() {
        this.auth && this.auth.removeAuthTokenListener(this.Zc), this.Zc = null, this.Hc = null;
    }, 
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.nu = function() {
        var t = this.auth && this.auth.getUid();
        return g(null === t || "string" == typeof t), new Cr(t);
    }, t;
}(), xo = /** @class */ function() {
    function t(t, e) {
        this.su = t, this.iu = e, this.type = "FirstParty", this.user = Cr.ei;
    }
    return Object.defineProperty(t.prototype, "zc", {
        get: function() {
            var t = {
                "X-Goog-AuthUser": this.iu
            }, e = this.su.auth.ru([]);
            return e && (t.Authorization = e), t;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), ko = /** @class */ function() {
    function t(t, e) {
        this.su = t, this.iu = e;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(new xo(this.su, this.iu));
    }, t.prototype.Jc = function(t) {
        // Fire with initial uid.
        t(Cr.ei);
    }, t.prototype.Xc = function() {}, t.prototype.Yc = function() {}, t;
}(), Lo = /** @class */ function() {
    function e(t, e, n, r, i, o) {
        this._n = t, this.ou = n, this.au = r, this.cu = i, this.listener = o, this.state = 0 /* Initial */ , 
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.uu = 0, this.hu = null, this.stream = null, this.gs = new lr(t, e)
        /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */;
    }
    return e.prototype.lu = function() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }, 
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    e.prototype._u = function() {
        return 2 /* Open */ === this.state;
    }, 
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    e.prototype.start = function() {
        3 /* Error */ !== this.state ? this.auth() : this.fu();
    }, 
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    e.prototype.stop = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.lu() ? [ 4 /*yield*/ , this.close(0 /* Initial */) ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    e.prototype.du = function() {
        this.state = 0 /* Initial */ , this.gs.reset();
    }, 
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    e.prototype.wu = function() {
        var t = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
                this._u() && null === this.hu && (this.hu = this._n.gn(this.ou, 6e4, (function() {
            return t.mu();
        })));
    }, 
    /** Sends a message to the underlying stream. */ e.prototype.Tu = function(t) {
        this.Eu(), this.stream.send(t);
    }, 
    /** Called by the idle timer when the stream should close due to inactivity. */ e.prototype.mu = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(t) {
                return this._u() ? [ 2 /*return*/ , this.close(0 /* Initial */) ] : [ 2 /*return*/ ];
            }));
        }));
    }, 
    /** Marks the stream as active again. */ e.prototype.Eu = function() {
        this.hu && (this.hu.cancel(), this.hu = null);
    }, 
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState the intended state of the stream after closing.
     * @param error the error the connection was closed with.
     */
    e.prototype.close = function(e, n) {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    // Notify the listener that the stream closed.
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    return this.Eu(), this.gs.cancel(), 
                    // Invalidates any stream-related callbacks (e.g. from auth or the
                    // underlying stream), guaranteeing they won't execute.
                    this.uu++, 3 /* Error */ !== e ? 
                    // If this is an intentional close ensure we don't delay our next connection attempt.
                    this.gs.reset() : n && n.code === a.RESOURCE_EXHAUSTED ? (
                    // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                    p(n.toString()), p("Using maximum backoff delay to prevent overloading the backend."), 
                    this.gs.An()) : n && n.code === a.UNAUTHENTICATED && 
                    // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                    // just expired.
                    this.cu.Yc(), 
                    // Clean up the underlying stream because we are no longer interested in events.
                    null !== this.stream && (this.Iu(), this.stream.close(), this.stream = null), 
                    // This state must be assigned before calling onClose() to allow the callback to
                    // inhibit backoff or otherwise manipulate the state in its non-started state.
                    this.state = e, [ 4 /*yield*/ , this.listener.Au(n) ];

                  case 1:
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    // Notify the listener that the stream closed.
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    e.prototype.Iu = function() {}, e.prototype.auth = function() {
        var t = this;
        this.state = 1 /* Starting */;
        var e = this.Ru(this.uu), n = this.uu;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.cu.getToken().then((function(e) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.uu === n && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t.Pu(e);
        }), (function(n) {
            e((function() {
                var e = new c(a.UNKNOWN, "Fetching auth token failed: " + n.message);
                return t.gu(e);
            }));
        }));
    }, e.prototype.Pu = function(t) {
        var e = this, n = this.Ru(this.uu);
        this.stream = this.yu(t), this.stream.Vu((function() {
            n((function() {
                return e.state = 2 /* Open */ , e.listener.Vu();
            }));
        })), this.stream.Au((function(t) {
            n((function() {
                return e.gu(t);
            }));
        })), this.stream.onMessage((function(t) {
            n((function() {
                return e.onMessage(t);
            }));
        }));
    }, e.prototype.fu = function() {
        var e = this;
        this.state = 4 /* Backoff */ , this.gs.Rn((function() {
            return t.__awaiter(e, void 0, void 0, (function() {
                return t.__generator(this, (function(t) {
                    return this.state = 0 /* Initial */ , this.start(), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, 
    // Visible for tests
    e.prototype.gu = function(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return l("PersistentStream", "close with error: " + t), this.stream = null, this.close(3 /* Error */ , t);
    }, 
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    e.prototype.Ru = function(t) {
        var e = this;
        return function(n) {
            e._n.ds((function() {
                return e.uu === t ? n() : (l("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve());
            }));
        };
    }, e;
}(), Ro = /** @class */ function(e) {
    function n(t, n, r, i, o) {
        var s = this;
        return (s = e.call(this, t, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , n, r, o) || this).serializer = i, 
        s;
    }
    return t.__extends(n, e), n.prototype.yu = function(t) {
        return this.au.pu("Listen", t);
    }, n.prototype.onMessage = function(t) {
        // A successful response means the stream is healthy
        this.gs.reset();
        var e = function(t, e) {
            var n;
            if ("targetChange" in e) {
                e.targetChange;
                // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
                // if unset
                var r = function(t) {
                    return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : y();
                }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], o = function(t, e) {
                    return t.Ue ? (g(void 0 === e || "string" == typeof e), X.fromBase64String(e || "")) : (g(void 0 === e || e instanceof Uint8Array), 
                    X.fromUint8Array(e || new Uint8Array));
                }(t, e.targetChange.resumeToken), s = e.targetChange.cause, u = s && function(t) {
                    var e = void 0 === t.code ? a.UNKNOWN : _t(t.code);
                    return new c(e, t.message || "");
                }(s);
                n = new Bt(r, i, o, u || null);
            } else if ("documentChange" in e) {
                e.documentChange;
                var h = e.documentChange;
                h.document, h.document.name, h.document.updateTime;
                var f = Ae(t, h.document.name), l = be(h.document.updateTime), p = new En({
                    mapValue: {
                        fields: h.document.fields
                    }
                }), d = new Dn(f, l, p, {}), v = h.targetIds || [], m = h.removedTargetIds || [];
                n = new jt(v, m, d.key, d);
            } else if ("documentDelete" in e) {
                e.documentDelete;
                var w = e.documentDelete;
                w.document;
                var _ = Ae(t, w.document), b = w.readTime ? be(w.readTime) : st.min(), I = new Sn(_, b), E = w.removedTargetIds || [];
                n = new jt([], E, I.key, I);
            } else if ("documentRemove" in e) {
                e.documentRemove;
                var T = e.documentRemove;
                T.document;
                var A = Ae(t, T.document), N = T.removedTargetIds || [];
                n = new jt([], N, A, null);
            } else {
                if (!("filter" in e)) return y();
                e.filter;
                var D = e.filter;
                D.targetId;
                var S = D.count || 0, x = new mt(S), k = D.targetId;
                n = new zt(k, x);
            }
            return n;
        }(this.serializer, t), n = function(t) {
            // We have only reached a consistent snapshot for the entire stream if there
            // is a read_time set and it applies to all targets (i.e. the list of
            // targets is empty). The backend is guaranteed to send such responses.
            if (!("targetChange" in t)) return st.min();
            var e = t.targetChange;
            return e.targetIds && e.targetIds.length ? st.min() : e.readTime ? be(e.readTime) : st.min();
        }(t);
        return this.listener.bu(e, n);
    }, 
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    n.prototype.vu = function(t) {
        var e = {};
        e.database = Se(this.serializer), e.addTarget = function(t, e) {
            var n, r = e.target;
            return (n = dt(r) ? {
                documents: Oe(t, r)
            } : {
                query: Ue(t, r)
            }).targetId = e.targetId, e.resumeToken.O() > 0 && (n.resumeToken = we(t, e.resumeToken)), 
            n;
        }(this.serializer, t);
        var n = function(t, e) {
            var n = function(t, e) {
                switch (e) {
                  case 0 /* Listen */ :
                    return null;

                  case 1 /* ExistenceFilterMismatch */ :
                    return "existence-filter-mismatch";

                  case 2 /* LimboResolution */ :
                    return "limbo-document";

                  default:
                    return y();
                }
            }(0, e.tt);
            return null == n ? null : {
                "goog-listen-tags": n
            };
        }(this.serializer, t);
        n && (e.labels = n), this.Tu(e);
    }, 
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    n.prototype.Su = function(t) {
        var e = {};
        e.database = Se(this.serializer), e.removeTarget = t, this.Tu(e);
    }, n;
}(Lo), Oo = /** @class */ function(e) {
    function n(t, n, r, i, o) {
        var s = this;
        return (s = e.call(this, t, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , n, r, o) || this).serializer = i, 
        s.Du = !1, s;
    }
    return t.__extends(n, e), Object.defineProperty(n.prototype, "Cu", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function() {
            return this.Du;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Override of PersistentStream.start
    n.prototype.start = function() {
        this.Du = !1, this.lastStreamToken = void 0, e.prototype.start.call(this);
    }, n.prototype.Iu = function() {
        this.Du && this.Nu([]);
    }, n.prototype.yu = function(t) {
        return this.au.pu("Write", t);
    }, n.prototype.onMessage = function(t) {
        if (
        // Always capture the last stream token.
        g(!!t.streamToken), this.lastStreamToken = t.streamToken, this.Du) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.gs.reset();
            var e = function(t, e) {
                return t && t.length > 0 ? (g(void 0 !== e), t.map((function(t) {
                    return function(t, e) {
                        // NOTE: Deletes don't have an updateTime.
                        var n = t.updateTime ? be(t.updateTime) : be(e);
                        n.isEqual(st.min()) && (
                        // The Firestore Emulator currently returns an update time of 0 for
                        // deletes of non-existing documents (rather than null). This breaks the
                        // test "get deleted doc while offline with source=cache" as NoDocuments
                        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
                        // TODO(#2149): Remove this when Emulator is fixed
                        n = be(e));
                        var r = null;
                        return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), 
                        new sn(n, r);
                    }(t, e);
                }))) : [];
            }(t.writeResults, t.commitTime), n = be(t.commitTime);
            return this.listener.Fu(n, e);
        }
        // The first response is always the handshake response
                return g(!t.writeResults || 0 === t.writeResults.length), this.Du = !0, 
        this.listener.$u();
    }, 
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    n.prototype.xu = function() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = Se(this.serializer), this.Tu(t);
    }, 
    /** Sends a group of mutations to the Firestore backend to apply. */ n.prototype.Nu = function(t) {
        var e = this, n = {
            streamToken: this.lastStreamToken,
            writes: t.map((function(t) {
                return Le(e.serializer, t);
            }))
        };
        this.Tu(n);
    }, n;
}(Lo), Uo = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this) || this).credentials = t, i.au = n, i.serializer = r, i.ku = !1, 
        i;
    }
    return t.__extends(n, e), n.prototype.Mu = function() {
        if (this.ku) throw new c(a.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /** Gets an auth token and invokes the provided RPC. */ n.prototype.Ou = function(t, e, n) {
        var r = this;
        return this.Mu(), this.credentials.getToken().then((function(i) {
            return r.au.Ou(t, e, n, i);
        })).catch((function(t) {
            throw t.code === a.UNAUTHENTICATED && r.credentials.Yc(), t;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC with streamed results. */ n.prototype.Lu = function(t, e, n) {
        var r = this;
        return this.Mu(), this.credentials.getToken().then((function(i) {
            return r.au.Lu(t, e, n, i);
        })).catch((function(t) {
            throw t.code === a.UNAUTHENTICATED && r.credentials.Yc(), t;
        }));
    }, n.prototype.terminate = function() {
        this.ku = !1;
    }, n;
}((function() {})), Po = /** @class */ function() {
    function t(t, e) {
        this.os = t, this.fi = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.Bu = 0, 
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.qu = null, 
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.Uu = !0
        /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */;
    }
    return t.prototype.Qu = function() {
        var t = this;
        0 === this.Bu && (this.Wu("Unknown" /* Unknown */), this.qu = this.os.gn("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (function() {
            return t.qu = null, t.ju("Backend didn't respond within 10 seconds."), t.Wu("Offline" /* Offline */), 
            Promise.resolve();
        })));
    }, 
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.Ku = function(t) {
        "Online" /* Online */ === this.state ? this.Wu("Unknown" /* Unknown */) : (this.Bu++, 
        this.Bu >= 1 && (this.Gu(), this.ju("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.Wu("Offline" /* Offline */)));
    }, 
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t) {
        this.Gu(), this.Bu = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Uu = !1), this.Wu(t);
    }, t.prototype.Wu = function(t) {
        t !== this.state && (this.state = t, this.fi(t));
    }, t.prototype.ju = function(t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.Uu ? (p(e), this.Uu = !1) : l("OnlineStateTracker", e);
    }, t.prototype.Gu = function() {
        null !== this.qu && (this.qu.cancel(), this.qu = null);
    }, t;
}(), Vo = /** @class */ function() {
    function e(
    /**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
    e, 
    /** The client-side proxy for interacting with the backend. */
    n, r, i, o) {
        var s = this;
        this.zu = e, this.Hu = n, this.os = r, 
        /**
             * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
             * LocalStore via fillWritePipeline() and have or will send to the write
             * stream.
             *
             * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
             * restart the write stream. When the stream is established the writes in the
             * pipeline will be sent in order.
             *
             * Writes remain in writePipeline until they are acknowledged by the backend
             * and thus will automatically be re-sent if the stream is interrupted /
             * restarted before they're acknowledged.
             *
             * Write responses from the backend are linked to their originating request
             * purely based on order, and so we can just shift() writes from the front of
             * the writePipeline as we receive responses.
             */
        this.Yu = [], 
        /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
        this.Ju = new Map, this.Xu = null, 
        /**
             * A set of reasons for why the RemoteStore may be offline. If empty, the
             * RemoteStore may start its network connections.
             */
        this.Zu = new Set, this.th = {}, this.eh = o, this.eh.nh((function(e) {
            r.ds((function() {
                return t.__awaiter(s, void 0, void 0, (function() {
                    return t.__generator(this, (function(e) {
                        switch (e.label) {
                          case 0:
                            return Ko(this) ? (l("RemoteStore", "Restarting streams for network reachability change."), 
                            [ 4 /*yield*/ , function(e) {
                                return t.__awaiter(this, void 0, void 0, (function() {
                                    var n;
                                    return t.__generator(this, (function(t) {
                                        switch (t.label) {
                                          case 0:
                                            return (n = m(e)).Zu.add(4 /* ConnectivityChange */), [ 4 /*yield*/ , Fo(n) ];

                                          case 1:
                                            return t.sent(), n.sh.du(), n.ih.du(), n.rh.set("Unknown" /* Unknown */), n.Zu.delete(4 /* ConnectivityChange */), 
                                            [ 4 /*yield*/ , Mo(n) ];

                                          case 2:
                                            return t.sent(), [ 2 /*return*/ ];
                                        }
                                    }));
                                }));
                            }(this) ]) : [ 3 /*break*/ , 2 ];

                          case 1:
                            e.sent(), e.label = 2;

                          case 2:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            }));
        })), this.rh = new Po(r, i), 
        // Create streams (but note they're not started yet).
        this.ih = function(t, e, n) {
            var r = m(t);
            return r.Mu(), new Ro(e, r.au, r.credentials, r.serializer, n);
        }(this.Hu, r, {
            Vu: Yo.bind(null, this),
            Au: $o.bind(null, this),
            bu: Xo.bind(null, this)
        }), this.sh = function(t, e, n) {
            var r = m(t);
            return r.Mu(), new Oo(e, r.au, r.credentials, r.serializer, n);
        }(this.Hu, r, {
            Vu: rs.bind(null, this),
            Au: ss.bind(null, this),
            $u: is.bind(null, this),
            Fu: os.bind(null, this)
        });
    }
    return e.prototype.start = function() {
        return Co(this);
    }, e;
}();

/** Re-enables the network. Idempotent. */
function Co(t) {
    var e = m(t);
    return e.Zu.delete(0 /* UserDisabled */), Mo(e);
}

function Mo(e) {
    return t.__awaiter(this, void 0, void 0, (function() {
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return Ko(e) ? (Wo(e) ? Qo(e) : e.rh.set("Unknown" /* Unknown */), [ 4 /*yield*/ , ts(e) ]) : [ 3 /*break*/ , 2 ];

              case 1:
                // This will start the write stream if necessary.
                t.sent(), t.label = 2;

              case 2:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */ function Fo(e) {
    return t.__awaiter(this, void 0, void 0, (function() {
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return [ 4 /*yield*/ , e.sh.stop() ];

              case 1:
                return t.sent(), [ 4 /*yield*/ , e.ih.stop() ];

              case 2:
                return t.sent(), e.Yu.length > 0 && (l("RemoteStore", "Stopping write stream with " + e.Yu.length + " pending writes"), 
                e.Yu = []), Ho(e), [ 2 /*return*/ ];
            }
        }));
    }));
}

function qo(e) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var n;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return n = m(e), l("RemoteStore", "RemoteStore shutting down."), n.Zu.add(5 /* Shutdown */), 
                [ 4 /*yield*/ , Fo(n) ];

              case 1:
                return t.sent(), n.eh.Si(), 
                // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                // triggering spurious listener events with cached data, etc.
                n.rh.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Starts new listen for the given target. Uses resume token if provided. It
 * is a no-op if the target of given `TargetData` is already being listened to.
 */ function jo(t, e) {
    var n = m(t);
    n.Ju.has(e.targetId) || (
    // Mark this as something the client is currently listening for.
    n.Ju.set(e.targetId, e), Wo(n) ? 
    // The listen will be sent in onWatchStreamOpen
    Qo(n) : n.ih._u() && Bo(n, e));
}

/**
 * Removes the listen from server. It is a no-op if the given target id is
 * not being listened to.
 */ function zo(t, e) {
    var n = m(t);
    n.Ju.delete(e), n.ih._u() && Go(n, e), 0 === n.Ju.size && (n.ih._u() ? n.ih.wu() : Ko(n) && 
    // Revert to OnlineState.Unknown if the watch stream is not open and we
    // have no listeners, since without any listens to send we cannot
    // confirm if the stream is healthy and upgrade to OnlineState.Online.
    n.rh.set("Unknown" /* Unknown */));
}

/**
 * We need to increment the the expected number of pending responses we're due
 * from watch so we wait for the ack to process any messages from this target.
 */ function Bo(t, e) {
    t.Xu.Ee(e.targetId), t.ih.vu(e)
    /**
 * We need to increment the expected number of pending responses we're due
 * from watch so we wait for the removal on the server before we process any
 * messages from this target.
 */;
}

function Go(t, e) {
    t.Xu.Ee(e), t.ih.Su(e);
}

function Qo(t) {
    t.Xu = new Qt({
        Be: function(e) {
            return t.th.Be(e);
        },
        qe: function(e) {
            return t.Ju.get(e) || null;
        }
    }), t.ih.start(), t.rh.Qu()
    /**
 * Returns whether the watch stream should be started because it's necessary
 * and has not yet been started.
 */;
}

function Wo(t) {
    return Ko(t) && !t.ih.lu() && t.Ju.size > 0;
}

function Ko(t) {
    return 0 === m(t).Zu.size;
}

function Ho(t) {
    t.Xu = null;
}

function Yo(e) {
    return t.__awaiter(this, void 0, void 0, (function() {
        return t.__generator(this, (function(t) {
            return e.Ju.forEach((function(t, n) {
                Bo(e, t);
            })), [ 2 /*return*/ ];
        }));
    }));
}

function $o(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        return t.__generator(this, (function(t) {
            return Ho(e), 
            // If we still need the watch stream, retry the connection.
            Wo(e) ? (e.rh.Ku(n), Qo(e)) : 
            // No need to restart watch stream because there are no active targets.
            // The online state is set to unknown because there is no active attempt
            // at establishing a connection
            e.rh.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
        }));
    }));
}

function Xo(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var i, o, s;
        return t.__generator(this, (function(u) {
            switch (u.label) {
              case 0:
                if (e.rh.set("Online" /* Online */), !(n instanceof Bt && 2 /* Removed */ === n.state && n.cause)) 
                // Mark the client as online since we got a message from the server
                return [ 3 /*break*/ , 6 ];
                u.label = 1;

              case 1:
                return u.trys.push([ 1, 3, , 5 ]), [ 4 /*yield*/ , 
                /** Handles an error on a target */
                function(e, n) {
                    return t.__awaiter(this, void 0, void 0, (function() {
                        var r, i, o, s;
                        return t.__generator(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                r = n.cause, i = 0, o = n.targetIds, t.label = 1;

                              case 1:
                                return i < o.length ? (s = o[i], e.Ju.has(s) ? [ 4 /*yield*/ , e.th.oh(s, r) ] : [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 5 ];

                              case 2:
                                t.sent(), e.Ju.delete(s), e.Xu.removeTarget(s), t.label = 3;

                              case 3:
                                t.label = 4;

                              case 4:
                                return i++, [ 3 /*break*/ , 1 ];

                              case 5:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(e, n) ];

              case 2:
                return u.sent(), [ 3 /*break*/ , 5 ];

              case 3:
                return i = u.sent(), l("RemoteStore", "Failed to remove targets %s: %s ", n.targetIds.join(","), i), 
                [ 4 /*yield*/ , Zo(e, i) ];

              case 4:
                return u.sent(), [ 3 /*break*/ , 5 ];

              case 5:
                return [ 3 /*break*/ , 13 ];

              case 6:
                if (n instanceof jt ? e.Xu.pe(n) : n instanceof zt ? e.Xu.$e(n) : e.Xu.Se(n), r.isEqual(st.min())) return [ 3 /*break*/ , 13 ];
                u.label = 7;

              case 7:
                return u.trys.push([ 7, 11, , 13 ]), [ 4 /*yield*/ , yo(e.zu) ];

              case 8:
                return o = u.sent(), r.L(o) >= 0 ? [ 4 /*yield*/ , 
                /**
                 * Takes a batch of changes from the Datastore, repackages them as a
                 * RemoteEvent, and passes that on to the listener, which is typically the
                 * SyncEngine.
                 */
                function(t, e) {
                    var n = t.Xu.Me(e);
                    // Update in-memory resume tokens. LocalStore will update the
                    // persistent view of these when applying the completed RemoteEvent.
                                        return n.Gt.forEach((function(n, r) {
                        if (n.resumeToken.O() > 0) {
                            var i = t.Ju.get(r);
                            // A watched target might have been removed already.
                                                        i && t.Ju.set(r, i.st(n.resumeToken, e));
                        }
                    })), 
                    // Re-establish listens for the targets that have been invalidated by
                    // existence filter mismatches.
                    n.zt.forEach((function(e) {
                        var n = t.Ju.get(e);
                        if (n) {
                            // Clear the resume token for the target, since we're in a known mismatch
                            // state.
                            t.Ju.set(e, n.st(X.B, n.et)), 
                            // Cause a hard reset by unwatching and rewatching immediately, but
                            // deliberately don't send a resume token so that we get a full update.
                            Go(t, e);
                            // Mark the target we send as being on behalf of an existence filter
                            // mismatch, but don't actually retain that in listenTargets. This ensures
                            // that we flag the first re-listen this way without impacting future
                            // listens of this target (that might happen e.g. on reconnect).
                            var r = new gt(n.target, e, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                            Bo(t, r);
                        }
                    })), t.th.ah(n);
                }(e, r) ] : [ 3 /*break*/ , 10 ];

                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                              case 9:
                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                u.sent(), u.label = 10;

              case 10:
                return [ 3 /*break*/ , 13 ];

              case 11:
                return l("RemoteStore", "Failed to raise snapshot:", s = u.sent()), [ 4 /*yield*/ , Zo(e, s) ];

              case 12:
                return u.sent(), [ 3 /*break*/ , 13 ];

              case 13:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */ function Zo(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var i = this;
        return t.__generator(this, (function(o) {
            switch (o.label) {
              case 0:
                if (!gr(n)) throw n;
                // Disable network and raise offline snapshots
                return e.Zu.add(1 /* IndexedDbFailed */), [ 4 /*yield*/ , Fo(e) ];

              case 1:
                // Disable network and raise offline snapshots
                return o.sent(), e.rh.set("Offline" /* Offline */), r || (
                // Use a simple read operation to determine if IndexedDB recovered.
                // Ideally, we would expose a health check directly on SimpleDb, but
                // RemoteStore only has access to persistence through LocalStore.
                r = function() {
                    return yo(e.zu);
                }), 
                // Probe IndexedDB periodically and re-enable network
                e.os.Ds((function() {
                    return t.__awaiter(i, void 0, void 0, (function() {
                        return t.__generator(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                return l("RemoteStore", "Retrying IndexedDB access"), [ 4 /*yield*/ , r() ];

                              case 1:
                                return t.sent(), e.Zu.delete(1 /* IndexedDbFailed */), [ 4 /*yield*/ , Mo(e) ];

                              case 2:
                                return t.sent(), [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */ function Jo(t, e) {
    return e().catch((function(n) {
        return Zo(t, n, e);
    }));
}

function ts(e) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var n, r, i, o;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                n = m(e), r = n.Yu.length > 0 ? n.Yu[n.Yu.length - 1].batchId : -1, t.label = 1;

              case 1:
                if (!
                /**
 * Returns true if we can add to the write pipeline (i.e. the network is
 * enabled and the write pipeline is not full).
 */
                function(t) {
                    return Ko(t) && t.Yu.length < 10;
                }
                /**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */ (n)) return [ 3 /*break*/ , 7 ];
                t.label = 2;

              case 2:
                return t.trys.push([ 2, 4, , 6 ]), [ 4 /*yield*/ , mo(n.zu, r) ];

              case 3:
                return null === (i = t.sent()) ? (0 === n.Yu.length && n.sh.wu(), [ 3 /*break*/ , 7 ]) : (r = i.batchId, 
                function(t, e) {
                    t.Yu.push(e), t.sh._u() && t.sh.Cu && t.sh.Nu(e.mutations);
                }(n, i), [ 3 /*break*/ , 6 ]);

              case 4:
                return o = t.sent(), [ 4 /*yield*/ , Zo(n, o) ];

              case 5:
                return t.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 3 /*break*/ , 1 ];

              case 7:
                return es(n) && ns(n), [ 2 /*return*/ ];
            }
        }));
    }));
}

function es(t) {
    return Ko(t) && !t.sh.lu() && t.Yu.length > 0;
}

function ns(t) {
    t.sh.start();
}

function rs(e) {
    return t.__awaiter(this, void 0, void 0, (function() {
        return t.__generator(this, (function(t) {
            return e.sh.xu(), [ 2 /*return*/ ];
        }));
    }));
}

function is(e) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var n, r, i;
        return t.__generator(this, (function(t) {
            // Send the write pipeline now that the stream is established.
            for (n = 0, r = e.Yu; n < r.length; n++) i = r[n], e.sh.Nu(i.mutations);
            return [ 2 /*return*/ ];
        }));
    }));
}

function os(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var i, o;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return i = e.Yu.shift(), o = $r.from(i, n, r), [ 4 /*yield*/ , Jo(e, (function() {
                    return e.th.uh(o);
                })) ];

              case 1:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return t.sent(), [ 4 /*yield*/ , ts(e) ];

              case 2:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return t.sent(), [ 2 /*return*/ ];
            }
        }));
    }));
}

function ss(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        return t.__generator(this, (function(r) {
            switch (r.label) {
              case 0:
                return n && e.sh.Cu ? [ 4 /*yield*/ , function(e, n) {
                    return t.__awaiter(this, void 0, void 0, (function() {
                        var r, i;
                        return t.__generator(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                return wt(i = n.code) && i !== a.ABORTED ? (r = e.Yu.shift(), 
                                // In this case it's also unlikely that the server itself is melting
                                // down -- this was just a bad request so inhibit backoff on the next
                                // restart.
                                e.sh.du(), [ 4 /*yield*/ , Jo(e, (function() {
                                    return e.th.hh(r.batchId, n);
                                })) ]) : [ 3 /*break*/ , 3 ];

                              case 1:
                                // It's possible that with the completion of this mutation
                                // another slot has freed up.
                                return t.sent(), [ 4 /*yield*/ , ts(e) ];

                              case 2:
                                // In this case it's also unlikely that the server itself is melting
                                // down -- this was just a bad request so inhibit backoff on the next
                                // restart.
                                // It's possible that with the completion of this mutation
                                // another slot has freed up.
                                t.sent(), t.label = 3;

                              case 3:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(e, n) ] : [ 3 /*break*/ , 2 ];

                // This error affects the actual write.
                              case 1:
                // This error affects the actual write.
                r.sent(), r.label = 2;

              case 2:
                // If the write stream closed after the write handshake completes, a write
                // operation failed and we fail the pending operation.
                // The write stream might have been started by refilling the write
                // pipeline for failed writes
                return es(e) && ns(e), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Toggles the network state when the client gains or loses its primary lease.
 */ function us(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return r = m(e), n ? (r.Zu.delete(2 /* IsSecondary */), [ 4 /*yield*/ , Mo(r) ]) : [ 3 /*break*/ , 2 ];

              case 1:
                return t.sent(), [ 3 /*break*/ , 5 ];

              case 2:
                return (i = n) ? [ 3 /*break*/ , 4 ] : (r.Zu.add(2 /* IsSecondary */), [ 4 /*yield*/ , Fo(r) ]);

              case 3:
                t.sent(), i = r.rh.set("Unknown" /* Unknown */), t.label = 4;

              case 4:
                i, t.label = 5;

              case 5:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var as = function(t) {
    this.key = t;
}, cs = function(t) {
    this.key = t;
}, hs = /** @class */ function() {
    function t(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.lh = e, this._h = null, 
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this.Zt = !1, 
        /** Documents in the view but not in the remote target */
        this.fh = Ot(), 
        /** Document Keys that have local changes */
        this.Qt = Ot(), this.dh = Hn(t), this.wh = new Vt(this.dh);
    }
    return Object.defineProperty(t.prototype, "mh", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function() {
            return this.lh;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges The doc changes to apply to this view.
     * @param previousChanges If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @return a new set of docs, changes, and refill flag.
     */
    t.prototype.Th = function(t, e) {
        var n = this, r = e ? e.Eh : new Ct, i = e ? e.wh : this.wh, o = e ? e.Qt : this.Qt, s = i, u = !1, a = Un(this.query) && i.size === this.query.limit ? i.last() : null, c = Pn(this.query) && i.size === this.query.limit ? i.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.ut((function(t, e) {
            var h = i.get(t), f = e instanceof Dn ? e : null;
            f && (f = Kn(n.query, f) ? f : null);
            var l = !!h && n.Qt.has(h.key), p = !!f && (f.Ye || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            n.Qt.has(f.key) && f.hasCommittedMutations), d = !1;
            // Calculate change
            h && f ? h.data().isEqual(f.data()) ? l !== p && (r.track({
                type: 3 /* Metadata */ ,
                doc: f
            }), d = !0) : n.Ih(h, f) || (r.track({
                type: 2 /* Modified */ ,
                doc: f
            }), d = !0, (a && n.dh(f, a) > 0 || c && n.dh(f, c) < 0) && (
            // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            u = !0)) : !h && f ? (r.track({
                type: 0 /* Added */ ,
                doc: f
            }), d = !0) : h && !f && (r.track({
                type: 1 /* Removed */ ,
                doc: h
            }), d = !0, (a || c) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            u = !0)), d && (f ? (s = s.add(f), o = p ? o.add(t) : o.delete(t)) : (s = s.delete(t), 
            o = o.delete(t)));
        })), Un(this.query) || Pn(this.query)) for (;s.size > this.query.limit; ) {
            var h = Un(this.query) ? s.last() : s.first();
            s = s.delete(h.key), o = o.delete(h.key), r.track({
                type: 1 /* Removed */ ,
                doc: h
            });
        }
        return {
            wh: s,
            Eh: r,
            Ah: u,
            Qt: o
        };
    }, t.prototype.Ih = function(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.Ye && e.hasCommittedMutations && !e.Ye;
    }, 
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges The set of changes to make to the view's docs.
     * @param updateLimboDocuments Whether to update limbo documents based on this
     *        change.
     * @param targetChange A target change to apply for computing limbo docs and
     *        sync state.
     * @return A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    t.prototype.gr = function(t, e, n) {
        var r = this, i = this.wh;
        this.wh = t.wh, this.Qt = t.Qt;
        // Sort changes based on type and query comparator
        var o = t.Eh.qt();
        o.sort((function(t, e) {
            return function(t, e) {
                var n = function(t) {
                    switch (t) {
                      case 0 /* Added */ :
                        return 1;

                      case 2 /* Modified */ :
                      case 3 /* Metadata */ :
                        // A metadata change is converted to a modified change at the public
                        // api layer.  Since we sort by document key and then change type,
                        // metadata and modified changes must be sorted equivalently.
                        return 2;

                      case 1 /* Removed */ :
                        return 0;

                      default:
                        return y();
                    }
                };
                return n(t) - n(e);
            }(t.type, e.type) || r.dh(t.doc, e.doc);
        })), this.Rh(n);
        var s = e ? this.Ph() : [], u = 0 === this.fh.size && this.Zt ? 1 /* Synced */ : 0 /* Local */ , a = u !== this._h;
        return this._h = u, 0 !== o.length || a ? {
            snapshot: new Mt(this.query, t.wh, i, o, t.Qt, 0 /* Local */ === u, a, 
            /* excludesMetadataChanges= */ !1),
            gh: s
        } : {
            gh: s
        };
        // no changes
        }, 
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.Us = function(t) {
        return this.Zt && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.Zt = !1, this.gr({
            wh: this.wh,
            Eh: new Ct,
            Qt: this.Qt,
            Ah: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            gh: []
        };
    }, 
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.yh = function(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.lh.has(t) && 
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.wh.has(t) && !this.wh.get(t).Ye;
    }, 
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.Rh = function(t) {
        var e = this;
        t && (t.te.forEach((function(t) {
            return e.lh = e.lh.add(t);
        })), t.ee.forEach((function(t) {})), t.ne.forEach((function(t) {
            return e.lh = e.lh.delete(t);
        })), this.Zt = t.Zt);
    }, t.prototype.Ph = function() {
        var t = this;
        // We can only determine limbo documents when we're in-sync with the server.
                if (!this.Zt) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                var e = this.fh;
        this.fh = Ot(), this.wh.forEach((function(e) {
            t.yh(e.key) && (t.fh = t.fh.add(e.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        var n = [];
        return e.forEach((function(e) {
            t.fh.has(e) || n.push(new cs(e));
        })), this.fh.forEach((function(t) {
            e.has(t) || n.push(new as(t));
        })), n;
    }, 
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @return The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Vh = function(t) {
        this.lh = t.kc, this.fh = Ot();
        var e = this.Th(t.documents);
        return this.gr(e, /*updateLimboDocuments=*/ !0);
    }, 
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.ph = function() {
        return Mt.Kt(this.query, this.wh, this.Qt, 0 /* Local */ === this._h);
    }, t;
}(), fs = function(
/**
     * The query itself.
     */
t, 
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
e, 
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
n) {
    this.query = t, this.targetId = e, this.view = n;
}, ls = function(t) {
    this.key = t, 
    /**
             * Set to true once we've received a document. This is used in
             * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
             * decide whether it needs to manufacture a delete event for the target once
             * the target is CURRENT.
             */
    this.bh = !1;
}, ps = /** @class */ function() {
    function t(t, e, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    n, r, i) {
        this.zu = t, this.Sh = e, this.Dh = n, this.currentUser = r, this.Ch = i, this.Nh = null, 
        this.Fh = new it((function(t) {
            return Qn(t);
        }), Gn), this.$h = new Map, 
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query.
             */
        this.xh = [], 
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.kh = new bt(N.i), 
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.Mh = new Map, this.Oh = new To, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.Lh = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.Bh = new Map, this.qh = to.Ta(), this.onlineState = "Unknown" /* Unknown */ , 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.Uh = void 0;
    }
    return Object.defineProperty(t.prototype, "Qh", {
        get: function() {
            return !0 === this.Uh;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.subscribe = function(t) {
        this.Nh = t;
    }, t.prototype.Wh = function(t) {}, t;
}();

/**
 * Initiates the new listen, resolves promise when listen enqueued to the
 * server. All the subsequent view snapshots or errors are sent to the
 * subscribed handlers. Returns the initial snapshot.
 */
function ds(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i, o, s, u, a;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return (r = qs(e)).Wh("listen()"), (s = r.Fh.get(n)) ? (
                // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                // already exists when EventManager calls us for the first time. This
                // happens when the primary tab is already listening to this query on
                // behalf of another tab and the user of the primary also starts listening
                // to the query. EventManager will not have an assigned target ID in this
                // case and calls `listen` to obtain this ID.
                i = s.targetId, r.Dh.Mi(i), o = s.view.ph(), [ 3 /*break*/ , 4 ]) : [ 3 /*break*/ , 1 ];

              case 1:
                return [ 4 /*yield*/ , wo(r.zu, qn(n)) ];

              case 2:
                return u = t.sent(), a = r.Dh.Mi(u.targetId), i = u.targetId, [ 4 /*yield*/ , vs(r, n, i, "current" === a) ];

              case 3:
                o = t.sent(), r.Qh && jo(r.Sh, u), t.label = 4;

              case 4:
                return [ 2 /*return*/ , o ];
            }
        }));
    }));
}

/**
 * Registers a view for a previously unknown query and computes its initial
 * snapshot.
 */ function vs(e, n, r, i) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var o, s, u, a, c, h;
        return t.__generator(this, (function(f) {
            switch (f.label) {
              case 0:
                // PORTING NOTE: On Web only, we inject the code that registers new Limbo
                // targets based on view changes. This allows us to only depend on Limbo
                // changes when user code includes queries.
                return e.jh = function(n, r, i) {
                    return function(e, n, r, i) {
                        return t.__awaiter(this, void 0, void 0, (function() {
                            var o, s, u;
                            return t.__generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return o = n.view.Th(r), o.Ah ? [ 4 /*yield*/ , bo(e.zu, n.query, 
                                    /* usePreviousResults= */ !1).then((function(t) {
                                        var e = t.documents;
                                        return n.view.Th(e, o);
                                    })) ] : [ 3 /*break*/ , 2 ];

                                  case 1:
                                    // The query has a limit and some docs were removed, so we need
                                    // to re-run the query against the local store to make sure we
                                    // didn't lose any good docs that had been past the limit.
                                    o = t.sent(), t.label = 2;

                                  case 2:
                                    return s = i && i.Gt.get(n.targetId), u = n.view.gr(o, 
                                    /* updateLimboDocuments= */ e.Qh, s), [ 2 /*return*/ , (Ns(e, n.targetId, u.gh), 
                                    u.snapshot) ];
                                }
                            }));
                        }));
                    }(e, n, r, i);
                }, [ 4 /*yield*/ , bo(e.zu, n, 
                /* usePreviousResults= */ !0) ];

              case 1:
                return o = f.sent(), s = new hs(n, o.kc), u = s.Th(o.documents), a = qt.Xt(r, i && "Offline" /* Offline */ !== e.onlineState), 
                c = s.gr(u, 
                /* updateLimboDocuments= */ e.Qh, a), Ns(e, r, c.gh), h = new fs(n, r, s), [ 2 /*return*/ , (e.Fh.set(n, h), 
                e.$h.has(r) ? e.$h.get(r).push(n) : e.$h.set(r, [ n ]), c.snapshot) ];
            }
        }));
    }));
}

/** Stops listening to the query. */ function ys(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i, o;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                // Only clean up the query view and target if this is the only query mapped
                // to the target.
                return (r = m(e)).Wh("unlisten()"), i = r.Fh.get(n), (o = r.$h.get(i.targetId)).length > 1 ? [ 2 /*return*/ , (r.$h.set(i.targetId, o.filter((function(t) {
                    return !Gn(t, n);
                }))), void r.Fh.delete(n)) ] : r.Qh ? (
                // We need to remove the local query target first to allow us to verify
                // whether any other client is still interested in this target.
                r.Dh.Li(i.targetId), r.Dh.Ni(i.targetId) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , _o(r.zu, i.targetId, 
                /*keepPersistedTargetData=*/ !1).then((function() {
                    r.Dh.qi(i.targetId), zo(r.Sh, i.targetId), Ts(r, i.targetId);
                })).catch(Eo) ]) : [ 3 /*break*/ , 3 ];

              case 1:
                t.sent(), t.label = 2;

              case 2:
                return [ 3 /*break*/ , 5 ];

              case 3:
                return Ts(r, i.targetId), [ 4 /*yield*/ , _o(r.zu, i.targetId, 
                /*keepPersistedTargetData=*/ !0) ];

              case 4:
                t.sent(), t.label = 5;

              case 5:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */
/**
 * Applies one remote event to the sync engine, notifying any views of the
 * changes, and releasing any pending mutation batches that would become
 * visible because of the snapshot version the remote event contains.
 */
function gs(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                (r = m(e)).Wh("applyRemoteEvent()"), t.label = 1;

              case 1:
                return t.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , go(r.zu, n) ];

              case 2:
                return i = t.sent(), 
                // Update `receivedDocument` as appropriate for any limbo targets.
                n.Gt.forEach((function(t, e) {
                    var n = r.Mh.get(e);
                    n && (
                    // Since this is a limbo resolution lookup, it's for a single document
                    // and it could be added, modified, or removed, but not a combination.
                    g(t.te.size + t.ee.size + t.ne.size <= 1), t.te.size > 0 ? n.bh = !0 : t.ee.size > 0 ? g(n.bh) : t.ne.size > 0 && (g(n.bh), 
                    n.bh = !1));
                })), [ 4 /*yield*/ , xs(r, i, n) ];

              case 3:
                // Update `receivedDocument` as appropriate for any limbo targets.
                return t.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , Eo(t.sent()) ];

              case 5:
                return t.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */ function ms(t, e, n) {
    var r = m(t);
    // If we are the secondary client, we explicitly ignore the remote store's
    // online state (the local client may go offline, even though the primary
    // tab remains online) and only apply the primary tab's online state from
    // SharedClientState.
        if (r.Qh && 0 /* RemoteStore */ === n || !r.Qh && 1 /* SharedClientState */ === n) {
        r.Wh("applyOnlineStateChange()");
        var i = [];
        r.Fh.forEach((function(t, n) {
            var r = n.view.Us(e);
            r.snapshot && i.push(r.snapshot);
        })), r.Nh.Kh(e), r.Nh.bu(i), r.onlineState = e, r.Qh && r.Dh.ji(e);
    }
}

/**
 * Rejects the listen for the given targetID. This can be triggered by the
 * backend for any active target.
 *
 * @param syncEngine The sync engine implementation.
 * @param targetId The targetID corresponds to one previously initiated by the
 * user as part of TargetData passed to listen() on RemoteStore.
 * @param err A description of the condition that has forced the rejection.
 * Nearly always this will be an indication that the user is no longer
 * authorized to see the data matching the target.
 */ function ws(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var i, o, s, u, a, c;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return (i = m(e)).Wh("rejectListens()"), 
                // PORTING NOTE: Multi-tab only.
                i.Dh.Ui(n, "rejected", r), o = i.Mh.get(n), (s = o && o.key) ? (u = (u = new bt(N.i)).rt(s, new Sn(s, st.min())), 
                a = Ot().add(s), c = new Ft(st.min(), 
                /* targetChanges= */ new Map, 
                /* targetMismatches= */ new Tt(H), u, a), [ 4 /*yield*/ , gs(i, c) ]) : [ 3 /*break*/ , 2 ];

              case 1:
                return t.sent(), 
                // Since this query failed, we won't want to manually unlisten to it.
                // We only remove it from bookkeeping after we successfully applied the
                // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
                // this query when the RemoteStore restarts the Watch stream, which should
                // re-trigger the target failure.
                i.kh = i.kh.remove(s), i.Mh.delete(n), Ss(i), [ 3 /*break*/ , 4 ];

              case 2:
                return [ 4 /*yield*/ , _o(i.zu, n, 
                /* keepPersistedTargetData */ !1).then((function() {
                    return Ts(i, n, r);
                })).catch(Eo) ];

              case 3:
                t.sent(), t.label = 4;

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function _s(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i, o;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                (r = m(e)).Wh("applySuccessfulWrite()"), i = n.batch.batchId, t.label = 1;

              case 1:
                return t.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , vo(r.zu, n) ];

              case 2:
                return o = t.sent(), 
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                Es(r, i, /*error=*/ null), Is(r, i), r.Dh.xi(i, "acknowledged"), [ 4 /*yield*/ , xs(r, o) ];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                return t.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , Eo(t.sent()) ];

              case 5:
                return t.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function bs(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var i, o;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                (i = m(e)).Wh("rejectFailedWrite()"), t.label = 1;

              case 1:
                return t.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , function(t, e) {
                    var n = m(t);
                    return n.persistence.runTransaction("Reject batch", "readwrite-primary", (function(t) {
                        var r;
                        return n.vr.Mo(t, e).next((function(e) {
                            return g(null !== e), r = e.keys(), n.vr.Qo(t, e);
                        })).next((function() {
                            return n.vr.Go(t);
                        })).next((function() {
                            return n.$c.$r(t, r);
                        }));
                    }));
                }(i.zu, n) ];

              case 2:
                return o = t.sent(), 
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                Es(i, n, r), Is(i, n), i.Dh.xi(n, "rejected", r), [ 4 /*yield*/ , xs(i, o) ];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                return t.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , Eo(t.sent()) ];

              case 5:
                return t.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Registers a user callback that resolves when all pending mutations at the moment of calling
 * are acknowledged .
 */
/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */
function Is(t, e) {
    (t.Bh.get(e) || []).forEach((function(t) {
        t.resolve();
    })), t.Bh.delete(e)
    /** Reject all outstanding callbacks waiting for pending writes to complete. */;
}

function Es(t, e, n) {
    var r = m(t), i = r.Lh[r.currentUser.Zs()];
    // NOTE: Mutations restored from persistence won't have callbacks, so it's
    // okay for there to be no callback for this ID.
    if (i) {
        var o = i.get(e);
        o && (n ? o.reject(n) : o.resolve(), i = i.remove(e)), r.Lh[r.currentUser.Zs()] = i;
    }
}

function Ts(t, e, n) {
    void 0 === n && (n = null), t.Dh.Li(e);
    for (var r = 0, i = t.$h.get(e); r < i.length; r++) {
        var o = i[r];
        t.Fh.delete(o), n && t.Nh.Gh(o, n);
    }
    t.$h.delete(e), t.Qh && t.Oh.Wc(e).forEach((function(e) {
        t.Oh.zo(e) || 
        // We removed the last reference for this key
        As(t, e);
    }));
}

function As(t, e) {
    // It's possible that the target already got removed because the query failed. In that case,
    // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
    var n = t.kh.get(e);
    null !== n && (zo(t.Sh, n), t.kh = t.kh.remove(e), t.Mh.delete(n), Ss(t));
}

function Ns(t, e, n) {
    for (var r = 0, i = n; r < i.length; r++) {
        var o = i[r];
        o instanceof as ? (t.Oh.Fa(o.key, e), Ds(t, o)) : o instanceof cs ? (l("SyncEngine", "Document no longer in limbo: " + o.key), 
        t.Oh.xa(o.key, e), t.Oh.zo(o.key) || 
        // We removed the last reference for this key
        As(t, o.key)) : y();
    }
}

function Ds(t, e) {
    var n = e.key;
    t.kh.get(n) || (l("SyncEngine", "New document in limbo: " + n), t.xh.push(n), Ss(t));
}

/**
 * Starts listens for documents in limbo that are enqueued for resolution,
 * subject to a maximum number of concurrent resolutions.
 *
 * Without bounding the number of concurrent resolutions, the server can fail
 * with "resource exhausted" errors which can lead to pathological client
 * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
 */ function Ss(t) {
    for (;t.xh.length > 0 && t.kh.size < t.Ch; ) {
        var e = t.xh.shift(), n = t.qh.next();
        t.Mh.set(n, new ls(e)), t.kh = t.kh.rt(e, n), jo(t.Sh, new gt(qn(On(e.path)), n, 2 /* LimboResolution */ , Mr.oi));
    }
}

function xs(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var i, o, s, u;
        return t.__generator(this, (function(a) {
            switch (a.label) {
              case 0:
                return i = m(e), o = [], s = [], u = [], i.Fh.forEach((function(t, e) {
                    u.push(i.jh(e, n, r).then((function(t) {
                        if (t) {
                            i.Qh && i.Dh.Ui(e.targetId, t.fromCache ? "not-current" : "current"), o.push(t);
                            var n = ei.Gr(e.targetId, t);
                            s.push(n);
                        }
                    })));
                })), [ 4 /*yield*/ , Promise.all(u) ];

              case 1:
                return a.sent(), i.Nh.bu(o), [ 4 /*yield*/ , function(e, n) {
                    return t.__awaiter(this, void 0, void 0, (function() {
                        var r, i, o, s, u, a, c, h, f;
                        return t.__generator(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                r = m(e), t.label = 1;

                              case 1:
                                return t.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , r.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(t) {
                                    return pr.forEach(n, (function(e) {
                                        return pr.forEach(e.jr, (function(n) {
                                            return r.persistence.Co.Fa(t, e.targetId, n);
                                        })).next((function() {
                                            return pr.forEach(e.Kr, (function(n) {
                                                return r.persistence.Co.xa(t, e.targetId, n);
                                            }));
                                        }));
                                    }));
                                })) ];

                              case 2:
                                return t.sent(), [ 3 /*break*/ , 4 ];

                              case 3:
                                if (!gr(i = t.sent())) throw i;
                                // If `notifyLocalViewChanges` fails, we did not advance the sequence
                                // number for the documents that were included in this transaction.
                                // This might trigger them to be deleted earlier than they otherwise
                                // would have, but it should not invalidate the integrity of the data.
                                                                return l("LocalStore", "Failed to update sequence numbers: " + i), 
                                [ 3 /*break*/ , 4 ];

                              case 4:
                                for (o = 0, s = n; o < s.length; o++) u = s[o], a = u.targetId, u.fromCache || (c = r.Dc.get(a), 
                                h = c.et, f = c.it(h), 
                                // Advance the last limbo free snapshot version
                                r.Dc = r.Dc.rt(a, f));
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(i.zu, s) ];

              case 2:
                return a.sent(), [ 2 /*return*/ ];
            }
        }));
    }));
}

function ks(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i;
        return t.__generator(this, (function(o) {
            switch (o.label) {
              case 0:
                return (r = m(e)).currentUser.isEqual(n) ? [ 3 /*break*/ , 3 ] : (l("SyncEngine", "User change. New user:", n.Zs()), 
                [ 4 /*yield*/ , 
                /**
                 * Tells the LocalStore that the currently authenticated user has changed.
                 *
                 * In response the local store switches the mutation queue to the new user and
                 * returns any resulting document changes.
                 */
                // PORTING NOTE: Android and iOS only return the documents affected by the
                // change.
                function(e, n) {
                    return t.__awaiter(this, void 0, void 0, (function() {
                        var r, i, o, s;
                        return t.__generator(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                return r = m(e), i = r.vr, o = r.$c, [ 4 /*yield*/ , r.persistence.runTransaction("Handle user change", "readonly", (function(t) {
                                    // Swap out the mutation queue, grabbing the pending mutation batches
                                    // before and after.
                                    var e;
                                    return r.vr.qo(t).next((function(s) {
                                        return e = s, i = r.persistence.Ic(n), 
                                        // Recreate our LocalDocumentsView using the new
                                        // MutationQueue.
                                        o = new ti(r.Fc, i, r.persistence.Pc()), i.qo(t);
                                    })).next((function(n) {
                                        for (var r = [], i = [], s = Ot(), u = 0, a = e
                                        // Union the old/new changed keys.
                                        ; u < a.length; u++) {
                                            var c = a[u];
                                            r.push(c.batchId);
                                            for (var h = 0, f = c.mutations; h < f.length; h++) {
                                                var l = f[h];
                                                s = s.add(l.key);
                                            }
                                        }
                                        for (var p = 0, d = n; p < d.length; p++) {
                                            var v = d[p];
                                            i.push(v.batchId);
                                            for (var y = 0, g = v.mutations; y < g.length; y++) {
                                                var m = g[y];
                                                s = s.add(m.key);
                                            }
                                        }
                                        // Return the set of all (potentially) changed documents and the list
                                        // of mutation batch IDs that were affected by change.
                                                                                return o.$r(t, s).next((function(t) {
                                            return {
                                                zh: t,
                                                Hh: r,
                                                Yh: i
                                            };
                                        }));
                                    }));
                                })) ];

                              case 1:
                                return s = t.sent(), [ 2 /*return*/ , (r.vr = i, r.$c = o, r.Sc.xc(r.$c), s) ];
                            }
                        }));
                    }));
                }(r.zu, n) ]);

              case 1:
                return i = o.sent(), r.currentUser = n, 
                // Fails tasks waiting for pending writes requested by previous user.
                function(t, e) {
                    t.Bh.forEach((function(t) {
                        t.forEach((function(t) {
                            t.reject(new c(a.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
                        }));
                    })), t.Bh.clear();
                }(r), 
                // TODO(b/114226417): Consider calling this only in the primary tab.
                r.Dh.Wi(n, i.Hh, i.Yh), [ 4 /*yield*/ , xs(r, i.zh) ];

              case 2:
                o.sent(), o.label = 3;

              case 3:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function Ls(t, e) {
    var n = m(t), r = n.Mh.get(e);
    if (r && r.bh) return Ot().add(r.key);
    var i = Ot(), o = n.$h.get(e);
    if (!o) return i;
    for (var s = 0, u = o; s < u.length; s++) {
        var a = u[s], c = n.Fh.get(a);
        i = i.xt(c.view.mh);
    }
    return i;
}

/**
 * Reconcile the list of synced documents in an existing view with those
 * from persistence.
 */ function Rs(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i, o;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return [ 4 /*yield*/ , bo((r = m(e)).zu, n.query, 
                /* usePreviousResults= */ !0) ];

              case 1:
                return i = t.sent(), o = n.view.Vh(i), [ 2 /*return*/ , (r.Qh && Ns(r, n.targetId, o.gh), 
                o) ];
            }
        }));
    }));
}

/** Applies a mutation state to an existing batch.  */
// PORTING NOTE: Multi-Tab only.
function Os(e, n, r, i) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var o, s;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return (o = m(e)).Wh("applyBatchState()"), [ 4 /*yield*/ , function(t, e) {
                    var n = m(t), r = m(n.vr);
                    return n.persistence.runTransaction("Lookup mutation documents", "readonly", (function(t) {
                        return r.Oo(t, e).next((function(e) {
                            return e ? n.$c.$r(t, e) : pr.resolve(null);
                        }));
                    }));
                }(o.zu, n) ];

              case 1:
                return null === (s = t.sent()) ? [ 3 /*break*/ , 6 ] : "pending" !== r ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , ts(o.Sh) ];

              case 2:
                // If we are the primary client, we need to send this write to the
                // backend. Secondary clients will ignore these writes since their remote
                // connection is disabled.
                return t.sent(), [ 3 /*break*/ , 4 ];

              case 3:
                "acknowledged" === r || "rejected" === r ? (
                // NOTE: Both these methods are no-ops for batches that originated from
                // other clients.
                Es(o, n, i || null), function(t, e) {
                    m(m(t).vr).jo(e);
                }(o.zu, n)) : y(), t.label = 4;

              case 4:
                return [ 4 /*yield*/ , xs(o, s) ];

              case 5:
                return t.sent(), [ 3 /*break*/ , 7 ];

              case 6:
                // A throttled tab may not have seen the mutation before it was completed
                // and removed from the mutation queue, in which case we won't have cached
                // the affected documents. In this case we can safely ignore the update
                // since that means we didn't apply the mutation locally at all (if we
                // had, we would have cached the affected documents), and so we will just
                // see any resulting document changes via normal remote document updates
                // as applicable.
                l("SyncEngine", "Cannot apply mutation batch with id: " + n), t.label = 7;

              case 7:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.
function Us(e, n) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i, o, s, u, a, c, h;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return qs(r = m(e)), js(r), !0 !== n || !0 === r.Uh ? [ 3 /*break*/ , 3 ] : (i = r.Dh.Di(), 
                [ 4 /*yield*/ , Ps(r, i.A()) ]);

              case 1:
                return o = t.sent(), r.Uh = !0, [ 4 /*yield*/ , us(r.Sh, !0) ];

              case 2:
                for (t.sent(), s = 0, u = o; s < u.length; s++) a = u[s], jo(r.Sh, a);
                return [ 3 /*break*/ , 7 ];

              case 3:
                return !1 !== n || !1 === r.Uh ? [ 3 /*break*/ , 7 ] : (c = [], h = Promise.resolve(), 
                r.$h.forEach((function(t, e) {
                    r.Dh.Bi(e) ? c.push(e) : h = h.then((function() {
                        return Ts(r, e), _o(r.zu, e, 
                        /*keepPersistedTargetData=*/ !0);
                    })), zo(r.Sh, e);
                })), [ 4 /*yield*/ , h ]);

              case 4:
                return t.sent(), [ 4 /*yield*/ , Ps(r, c) ];

              case 5:
                return t.sent(), 
                // PORTING NOTE: Multi-Tab only.
                function(t) {
                    var e = m(t);
                    e.Mh.forEach((function(t, n) {
                        zo(e.Sh, n);
                    })), e.Oh.jc(), e.Mh = new Map, e.kh = new bt(N.i);
                }(r), r.Uh = !1, [ 4 /*yield*/ , us(r.Sh, !1) ];

              case 6:
                t.sent(), t.label = 7;

              case 7:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function Ps(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var r, i, o, s, u, a, c, h, f, l, p, d, v, y;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                r = m(e), i = [], o = [], s = 0, u = n, t.label = 1;

              case 1:
                return s < u.length ? (a = u[s], c = void 0, (h = r.$h.get(a)) && 0 !== h.length ? [ 4 /*yield*/ , wo(r.zu, qn(h[0])) ] : [ 3 /*break*/ , 7 ]) : [ 3 /*break*/ , 13 ];

              case 2:
                // For queries that have a local View, we fetch their current state
                // from LocalStore (as the resume token and the snapshot version
                // might have changed) and reconcile their views with the persisted
                // state (the list of syncedDocuments may have gotten out of sync).
                c = t.sent(), f = 0, l = h, t.label = 3;

              case 3:
                return f < l.length ? (p = l[f], d = r.Fh.get(p), [ 4 /*yield*/ , Rs(r, d) ]) : [ 3 /*break*/ , 6 ];

              case 4:
                (v = t.sent()).snapshot && o.push(v.snapshot), t.label = 5;

              case 5:
                return f++, [ 3 /*break*/ , 3 ];

              case 6:
                return [ 3 /*break*/ , 11 ];

              case 7:
                return [ 4 /*yield*/ , Io(r.zu, a) ];

              case 8:
                return y = t.sent(), [ 4 /*yield*/ , wo(r.zu, y) ];

              case 9:
                return c = t.sent(), [ 4 /*yield*/ , vs(r, Vs(y), a, 
                /*current=*/ !1) ];

              case 10:
                t.sent(), t.label = 11;

              case 11:
                i.push(c), t.label = 12;

              case 12:
                return s++, [ 3 /*break*/ , 1 ];

              case 13:
                return [ 2 /*return*/ , (r.Nh.bu(o), i) ];
            }
        }));
    }));
}

/**
 * Creates a `Query` object from the specified `Target`. There is no way to
 * obtain the original `Query`, so we synthesize a `Query` from the `Target`
 * object.
 *
 * The synthesized result might be different from the original `Query`, but
 * since the synthesized `Query` should return the same results as the
 * original one (only the presentation of results might differ), the potential
 * difference will not cause issues.
 */
// PORTING NOTE: Multi-Tab only.
function Vs(t) {
    return Rn(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F" /* First */ , t.startAt, t.endAt);
}

/** Returns the IDs of the clients that are currently active. */
// PORTING NOTE: Multi-Tab only.
function Cs(t) {
    var e = m(t);
    return m(m(e.zu).persistence).Vi();
}

/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.
function Ms(e, n, r, i) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var o, s, u;
        return t.__generator(this, (function(t) {
            switch (t.label) {
              case 0:
                return (o = m(e)).Uh ? (
                // If we receive a target state notification via WebStorage, we are
                // either already secondary or another tab has taken the primary lease.
                l("SyncEngine", "Ignoring unexpected query state notification."), [ 3 /*break*/ , 8 ]) : [ 3 /*break*/ , 1 ];

              case 1:
                if (!o.$h.has(n)) return [ 3 /*break*/ , 8 ];
                switch (r) {
                  case "current":
                  case "not-current":
                    return [ 3 /*break*/ , 2 ];

                  case "rejected":
                    return [ 3 /*break*/ , 5 ];
                }
                return [ 3 /*break*/ , 7 ];

              case 2:
                return [ 4 /*yield*/ , function(t) {
                    var e = m(t), n = m(e.Fc);
                    return e.persistence.runTransaction("Get new document changes", "readonly", (function(t) {
                        return n.ia(t, e.Nc);
                    })).then((function(t) {
                        var n = t.ra, r = t.readTime;
                        return e.Nc = r, n;
                    }));
                }(o.zu) ];

              case 3:
                return s = t.sent(), u = Ft.Jt(n, "current" === r), [ 4 /*yield*/ , xs(o, s, u) ];

              case 4:
                return t.sent(), [ 3 /*break*/ , 8 ];

              case 5:
                return [ 4 /*yield*/ , _o(o.zu, n, 
                /* keepPersistedTargetData */ !0) ];

              case 6:
                return t.sent(), Ts(o, n, i), [ 3 /*break*/ , 8 ];

              case 7:
                y(), t.label = 8;

              case 8:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/** Adds or removes Watch targets for queries from different tabs. */ function Fs(e, n, r) {
    return t.__awaiter(this, void 0, void 0, (function() {
        var i, o, s, u, a, c, h, f, p, d;
        return t.__generator(this, (function(v) {
            switch (v.label) {
              case 0:
                if (!(i = qs(e)).Uh) return [ 3 /*break*/ , 10 ];
                o = 0, s = n, v.label = 1;

              case 1:
                return o < s.length ? (u = s[o], i.$h.has(u) ? (
                // A target might have been added in a previous attempt
                l("SyncEngine", "Adding an already active target " + u), [ 3 /*break*/ , 5 ]) : [ 4 /*yield*/ , Io(i.zu, u) ]) : [ 3 /*break*/ , 6 ];

              case 2:
                return a = v.sent(), [ 4 /*yield*/ , wo(i.zu, a) ];

              case 3:
                return c = v.sent(), [ 4 /*yield*/ , vs(i, Vs(a), c.targetId, 
                /*current=*/ !1) ];

              case 4:
                v.sent(), jo(i.Sh, c), v.label = 5;

              case 5:
                return o++, [ 3 /*break*/ , 1 ];

              case 6:
                h = function(e) {
                    return t.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return i.$h.has(e) ? [ 4 /*yield*/ , _o(i.zu, e, 
                            /* keepPersistedTargetData */ !1).then((function() {
                                zo(i.Sh, e), Ts(i, e);
                            })).catch(Eo) ] : [ 3 /*break*/ , 2 ];

                            // Release queries that are still active.
                                                      case 1:
                            // Release queries that are still active.
                            t.sent(), t.label = 2;

                          case 2:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }, f = 0, p = r, v.label = 7;

              case 7:
                return f < p.length ? (d = p[f], [ 5 /*yield**/ , h(d) ]) : [ 3 /*break*/ , 10 ];

              case 8:
                v.sent(), v.label = 9;

              case 9:
                return f++, [ 3 /*break*/ , 7 ];

              case 10:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function qs(t) {
    var e = m(t);
    return e.Sh.th.ah = gs.bind(null, e), e.Sh.th.Be = Ls.bind(null, e), e.Sh.th.oh = ws.bind(null, e), 
    e;
}

function js(t) {
    var e = m(t);
    return e.Sh.th.uh = _s.bind(null, e), e.Sh.th.hh = bs.bind(null, e), e;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// TOOD(b/140938512): Drop SimpleQueryEngine and rename IndexFreeQueryEngine.
/**
 * A query engine that takes advantage of the target document mapping in the
 * QueryCache. The IndexFreeQueryEngine optimizes query execution by only
 * reading the documents that previously matched a query plus any documents that were
 * edited after the query was last listened to.
 *
 * There are some cases where Index-Free queries are not guaranteed to produce
 * the same results as full collection scans. In these cases, the
 * IndexFreeQueryEngine falls back to full query processing. These cases are:
 *
 * - Limit queries where a document that matched the query previously no longer
 *   matches the query.
 *
 * - Limit queries where a document edit may cause the document to sort below
 *   another document that is in the local cache.
 *
 * - Queries that have never been CURRENT or free of Limbo documents.
 */ var zs = /** @class */ function() {
    function t() {}
    return t.prototype.xc = function(t) {
        this.Jh = t;
    }, t.prototype.Or = function(t, e, r, i) {
        var o = this;
        // Queries that match all documents don't benefit from using
        // IndexFreeQueries. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
                return function(t) {
            return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.rn.length || 1 === t.rn.length && t.rn[0].field.p());
        }(e) || r.isEqual(st.min()) ? this.Xh(t, e) : this.Jh.$r(t, i).next((function(s) {
            var u = o.Zh(e, s);
            return (Un(e) || Pn(e)) && o.Ah(e.on, u, i, r) ? o.Xh(t, e) : (f() <= n.LogLevel.DEBUG && l("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", r.toString(), Wn(e)), 
            o.Jh.Or(t, e, r).next((function(t) {
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                return u.forEach((function(e) {
                    t = t.rt(e.key, e);
                })), t;
            })));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }, 
    /** Applies the query filter and sorting to the provided documents.  */ t.prototype.Zh = function(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new Tt(Hn(t));
        return e.forEach((function(e, r) {
            r instanceof Dn && Kn(t, r) && (n = n.add(r));
        })), n;
    }, 
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion The version of the snapshot when the query
     * was last synchronized.
     */
    t.prototype.Ah = function(t, e, n, r) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                var i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version.L(r) > 0);
    }, t.prototype.Xh = function(t, e) {
        return f() <= n.LogLevel.DEBUG && l("IndexFreeQueryEngine", "Using full collection scan to execute query:", Wn(e)), 
        this.Jh.Or(t, e, st.min());
    }, t;
}(), Bs = /** @class */ function() {
    function t(t, e) {
        this.Sr = t, this.Co = e, 
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this.vr = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.tl = 1, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.el = new Tt(Ao.Oc);
    }
    return t.prototype.$o = function(t) {
        return pr.resolve(0 === this.vr.length);
    }, t.prototype.xo = function(t, e, n, r) {
        var i = this.tl;
        this.tl++, this.vr.length > 0 && this.vr[this.vr.length - 1];
        var o = new Yr(i, e, n, r);
        this.vr.push(o);
        // Track references by document key and index collection parents.
        for (var s = 0, u = r; s < u.length; s++) {
            var a = u[s];
            this.el = this.el.add(new Ao(a.key, i)), this.Sr.ko(t, a.key.path.h());
        }
        return pr.resolve(o);
    }, t.prototype.Mo = function(t, e) {
        return pr.resolve(this.nl(e));
    }, t.prototype.Lo = function(t, e) {
        var n = e + 1, r = this.sl(n), i = r < 0 ? 0 : r;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return pr.resolve(this.vr.length > i ? this.vr[i] : null);
    }, t.prototype.Bo = function() {
        return pr.resolve(0 === this.vr.length ? -1 : this.tl - 1);
    }, t.prototype.qo = function(t) {
        return pr.resolve(this.vr.slice());
    }, t.prototype.Cr = function(t, e) {
        var n = this, r = new Ao(e, 0), i = new Ao(e, Number.POSITIVE_INFINITY), o = [];
        return this.el.Nt([ r, i ], (function(t) {
            var e = n.nl(t.Gc);
            o.push(e);
        })), pr.resolve(o);
    }, t.prototype.Mr = function(t, e) {
        var n = this, r = new Tt(H);
        return e.forEach((function(t) {
            var e = new Ao(t, 0), i = new Ao(t, Number.POSITIVE_INFINITY);
            n.el.Nt([ e, i ], (function(t) {
                r = r.add(t.Gc);
            }));
        })), pr.resolve(this.il(r));
    }, t.prototype.Qr = function(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path, r = n.length + 1, i = n;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
                N.F(i) || (i = i.child(""));
        var o = new Ao(new N(i), 0), s = new Tt(H);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                return this.el.Ft((function(t) {
            var e = t.key.path;
            return !!n.T(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === r && (s = s.add(t.Gc)), !0);
        }), o), pr.resolve(this.il(s));
    }, t.prototype.il = function(t) {
        var e = this, n = [];
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
                return t.forEach((function(t) {
            var r = e.nl(t);
            null !== r && n.push(r);
        })), n;
    }, t.prototype.Qo = function(t, e) {
        var n = this;
        g(0 === this.rl(e.batchId, "removed")), this.vr.shift();
        var r = this.el;
        return pr.forEach(e.mutations, (function(i) {
            var o = new Ao(i.key, e.batchId);
            return r = r.delete(o), n.Co.Ko(t, i.key);
        })).next((function() {
            n.el = r;
        }));
    }, t.prototype.jo = function(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }, t.prototype.zo = function(t, e) {
        var n = new Ao(e, 0), r = this.el.$t(n);
        return pr.resolve(e.isEqual(r && r.key));
    }, t.prototype.Go = function(t) {
        return this.vr.length, pr.resolve();
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId The batchId to search for
     * @param action A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype.rl = function(t, e) {
        return this.sl(t);
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @return The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    t.prototype.sl = function(t) {
        return 0 === this.vr.length ? 0 : t - this.vr[0].batchId;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        }, 
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype.nl = function(t) {
        var e = this.sl(t);
        return e < 0 || e >= this.vr.length ? null : this.vr[e];
    }, t;
}(), Gs = /** @class */ function() {
    /**
     * @param sizer Used to assess the size of a document. For eager GC, this is expected to just
     * return 0 to avoid unnecessarily doing the work of calculating the size.
     */
    function t(t, e) {
        this.Sr = t, this.ol = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new bt(N.i), 
        /** Size of all cached documents. */
        this.size = 0
        /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */;
    }
    return t.prototype.Tr = function(t, e, n) {
        var r = e.key, i = this.docs.get(r), o = i ? i.size : 0, s = this.ol(e);
        return this.docs = this.docs.rt(r, {
            Zo: e,
            size: s,
            readTime: n
        }), this.size += s - o, this.Sr.ko(t, r.path.h());
    }, 
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype.Ir = function(t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }, t.prototype.Ar = function(t, e) {
        var n = this.docs.get(e);
        return pr.resolve(n ? n.Zo : null);
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = St();
        return e.forEach((function(t) {
            var e = n.docs.get(t);
            r = r.rt(t, e ? e.Zo : null);
        })), pr.resolve(r);
    }, t.prototype.Or = function(t, e, n) {
        for (var r = kt(), i = new N(e.path.child("")), o = this.docs._t(i)
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.It(); ) {
            var s = o.Et(), u = s.key, a = s.value, c = a.Zo, h = a.readTime;
            if (!e.path.T(u.path)) break;
            h.L(n) <= 0 || c instanceof Dn && Kn(e, c) && (r = r.rt(c.key, c));
        }
        return pr.resolve(r);
    }, t.prototype.al = function(t, e) {
        return pr.forEach(this.docs, (function(t) {
            return e(t);
        }));
    }, t.prototype.aa = function(e) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new t.ca(this);
    }, t.prototype.ha = function(t) {
        return pr.resolve(this.size);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Handles the details of adding and updating documents in the MemoryRemoteDocumentCache.
 */
Gs.ca = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).la = t, n;
    }
    return t.__extends(n, e), n.prototype.gr = function(t) {
        var e = this, n = [];
        return this.dr.forEach((function(r, i) {
            i ? n.push(e.la.Tr(t, i, e.readTime)) : e.la.Ir(r);
        })), pr.$n(n);
    }, n.prototype.Rr = function(t, e) {
        return this.la.Ar(t, e);
    }, n.prototype.Pr = function(t, e) {
        return this.la.getEntries(t, e);
    }, n;
}(Xr);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Qs = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /**
             * Maps a target to the data about that target
             */
        this.cl = new it((function(t) {
            return lt(t);
        }), pt), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = st.min(), 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.ul = 0, 
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this.hl = new To, this.targetCount = 0, this.ll = to.ma();
    }
    return t.prototype.De = function(t, e) {
        return this.cl.forEach((function(t, n) {
            return e(n);
        })), pr.resolve();
    }, t.prototype.Ra = function(t) {
        return pr.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.Pa = function(t) {
        return pr.resolve(this.ul);
    }, t.prototype.Ea = function(t) {
        return this.highestTargetId = this.ll.next(), pr.resolve(this.highestTargetId);
    }, t.prototype.ga = function(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.ul && (this.ul = e), 
        pr.resolve();
    }, t.prototype.Va = function(t) {
        this.cl.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.ll = new to(e), this.highestTargetId = e), t.sequenceNumber > this.ul && (this.ul = t.sequenceNumber);
    }, t.prototype.ya = function(t, e) {
        return this.Va(e), this.targetCount += 1, pr.resolve();
    }, t.prototype.ba = function(t, e) {
        return this.Va(e), pr.resolve();
    }, t.prototype.va = function(t, e) {
        return this.cl.delete(e.target), this.hl.Wc(e.targetId), this.targetCount -= 1, 
        pr.resolve();
    }, t.prototype.Vo = function(t, e, n) {
        var r = this, i = 0, o = [];
        return this.cl.forEach((function(s, u) {
            u.sequenceNumber <= e && null === n.get(u.targetId) && (r.cl.delete(s), o.push(r.Sa(t, u.targetId)), 
            i++);
        })), pr.$n(o).next((function() {
            return i;
        }));
    }, t.prototype.Da = function(t) {
        return pr.resolve(this.targetCount);
    }, t.prototype.Ca = function(t, e) {
        var n = this.cl.get(e) || null;
        return pr.resolve(n);
    }, t.prototype.Na = function(t, e, n) {
        return this.hl.qc(e, n), pr.resolve();
    }, t.prototype.$a = function(t, e, n) {
        this.hl.Qc(e, n);
        var r = this.persistence.Co, i = [];
        return r && e.forEach((function(e) {
            i.push(r.Ko(t, e));
        })), pr.$n(i);
    }, t.prototype.Sa = function(t, e) {
        return this.hl.Wc(e), pr.resolve();
    }, t.prototype.ka = function(t, e) {
        var n = this.hl.Kc(e);
        return pr.resolve(n);
    }, t.prototype.zo = function(t, e) {
        return pr.resolve(this.hl.zo(e));
    }, t;
}(), Ws = /** @class */ function() {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function t(t) {
        var e = this;
        this._l = {}, this.Ba = new Mr(0), this.qa = !1, this.qa = !0, this.Co = t(this), 
        this.Ha = new Qs(this), this.Sr = new Oi, this.br = new Gs(this.Sr, (function(t) {
            return e.Co.fl(t);
        }));
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, t.prototype.Si = function() {
        // No durable state to ensure is closed on shutdown.
        return this.qa = !1, Promise.resolve();
    }, Object.defineProperty(t.prototype, "Ti", {
        get: function() {
            return this.qa;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.nc = function() {
        // No op.
    }, t.prototype.sc = function() {
        // No op.
    }, t.prototype.Pc = function() {
        return this.Sr;
    }, t.prototype.Ic = function(t) {
        var e = this._l[t.Zs()];
        return e || (e = new Bs(this.Sr, this.Co), this._l[t.Zs()] = e), e;
    }, t.prototype.Ac = function() {
        return this.Ha;
    }, t.prototype.Rc = function() {
        return this.br;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        l("MemoryPersistence", "Starting transaction:", t);
        var i = new Ks(this.Ba.next());
        return this.Co.dl(), n(i).next((function(t) {
            return r.Co.wl(i).next((function() {
                return t;
            }));
        })).Nn().then((function(t) {
            return i.pr(), t;
        }));
    }, t.prototype.ml = function(t, e) {
        return pr.xn(Object.values(this._l).map((function(n) {
            return function() {
                return n.zo(t, e);
            };
        })));
    }, t;
}(), Ks = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Ma = t, n;
    }
    return t.__extends(n, e), n;
}(Jr), Hs = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /** Tracks all documents that are active in Query views. */
        this.Tl = new To, 
        /** The list of documents that are potentially GCed after each transaction. */
        this.El = null;
    }
    return t.Il = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "Al", {
        get: function() {
            if (this.El) return this.El;
            throw y();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.Fa = function(t, e, n) {
        return this.Tl.Fa(n, e), this.Al.delete(n.toString()), pr.resolve();
    }, t.prototype.xa = function(t, e, n) {
        return this.Tl.xa(n, e), this.Al.add(n.toString()), pr.resolve();
    }, t.prototype.Ko = function(t, e) {
        return this.Al.add(e.toString()), pr.resolve();
    }, t.prototype.removeTarget = function(t, e) {
        var n = this;
        this.Tl.Wc(e.targetId).forEach((function(t) {
            return n.Al.add(t.toString());
        }));
        var r = this.persistence.Ac();
        return r.ka(t, e.targetId).next((function(t) {
            t.forEach((function(t) {
                return n.Al.add(t.toString());
            }));
        })).next((function() {
            return r.va(t, e);
        }));
    }, t.prototype.dl = function() {
        this.El = new Set;
    }, t.prototype.wl = function(t) {
        var e = this, n = this.persistence.Rc().aa();
        // Remove newly orphaned documents.
                return pr.forEach(this.Al, (function(r) {
            var i = N.D(r);
            return e.Rl(t, i).next((function(t) {
                t || n.Ir(i);
            }));
        })).next((function() {
            return e.El = null, n.apply(t);
        }));
    }, t.prototype.vc = function(t, e) {
        var n = this;
        return this.Rl(t, e).next((function(t) {
            t ? n.Al.delete(e.toString()) : n.Al.add(e.toString());
        }));
    }, t.prototype.fl = function(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }, t.prototype.Rl = function(t, e) {
        var n = this;
        return pr.xn([ function() {
            return pr.resolve(n.Tl.zo(e));
        }, function() {
            return n.persistence.Ac().zo(t, e);
        }, function() {
            return n.persistence.ml(t, e);
        } ]);
    }, t;
}(), Ys = /** @class */ function() {
    function t(t) {
        this.Pl = t.Pl, this.gl = t.gl;
    }
    return t.prototype.Vu = function(t) {
        this.yl = t;
    }, t.prototype.Au = function(t) {
        this.Vl = t;
    }, t.prototype.onMessage = function(t) {
        this.pl = t;
    }, t.prototype.close = function() {
        this.gl();
    }, t.prototype.send = function(t) {
        this.Pl(t);
    }, t.prototype.bl = function() {
        this.yl();
    }, t.prototype.vl = function(t) {
        this.Vl(t);
    }, t.prototype.Sl = function(t) {
        this.pl(t);
    }, t;
}(), $s = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery"
}, Xs = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this, t) || this).forceLongPolling = t.forceLongPolling, n;
    }
    /**
     * Base class for all Rest-based connections to the backend (WebChannel and
     * HTTP).
     */
    return t.__extends(n, e), n.prototype.xl = function(t, e, n, r) {
        return new Promise((function(o, s) {
            var u = new i.XhrIo;
            u.listenOnce(i.EventType.COMPLETE, (function() {
                try {
                    switch (u.getLastErrorCode()) {
                      case i.ErrorCode.NO_ERROR:
                        var e = u.getResponseJson();
                        l("Connection", "XHR received:", JSON.stringify(e)), o(e);
                        break;

                      case i.ErrorCode.TIMEOUT:
                        l("Connection", 'RPC "' + t + '" timed out'), s(new c(a.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case i.ErrorCode.HTTP_ERROR:
                        var n = u.getStatus();
                        if (l("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", u.getResponseText()), 
                        n > 0) {
                            var r = u.getResponseJson().error;
                            if (r && r.status && r.message) {
                                var h = function(t) {
                                    var e = t.toLowerCase().replace("_", "-");
                                    return Object.values(a).indexOf(e) >= 0 ? e : a.UNKNOWN;
                                }(r.status);
                                s(new c(h, r.message));
                            } else s(new c(a.UNKNOWN, "Server responded with status " + u.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        s(new c(a.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        y();
                    }
                } finally {
                    l("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            var h = JSON.stringify(r);
            u.send(e, "POST", h, n, 15);
        }));
    }, n.prototype.pu = function(t, e) {
        var n = [ this.Cl, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], o = i.createWebChannelTransport(), s = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: "projects/" + this.U.projectId + "/databases/" + this.U.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling
        };
        this.$l(s.initMessageHeaders, e), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        r.isMobileCordova() || r.isReactNative() || r.isElectron() || r.isIE() || r.isUWP() || r.isBrowserExtension() || (s.httpHeadersOverwriteParam = "$httpHeaders");
        var u = n.join("");
        l("Connection", "Creating WebChannel: " + u, s);
        var h = o.createWebChannel(u, s), f = !1, p = !1, v = new Ys({
            Pl: function(t) {
                p ? l("Connection", "Not sending because WebChannel is closed:", t) : (f || (l("Connection", "Opening WebChannel transport."), 
                h.open(), f = !0), l("Connection", "WebChannel sending:", t), h.send(t));
            },
            gl: function() {
                return h.close();
            }
        }), y = function(t, e) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            h.listen(t, (function(t) {
                try {
                    e(t);
                } catch (t) {
                    setTimeout((function() {
                        throw t;
                    }), 0);
                }
            }));
        };
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
        return y(i.WebChannel.EventType.OPEN, (function() {
            p || l("Connection", "WebChannel transport opened.");
        })), y(i.WebChannel.EventType.CLOSE, (function() {
            p || (p = !0, l("Connection", "WebChannel transport closed"), v.vl());
        })), y(i.WebChannel.EventType.ERROR, (function(t) {
            p || (p = !0, d("Connection", "WebChannel transport errored:", t), v.vl(new c(a.UNAVAILABLE, "The operation could not be completed")));
        })), y(i.WebChannel.EventType.MESSAGE, (function(t) {
            var e;
            if (!p) {
                var n = t.data[0];
                g(!!n);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                var r = n, i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    l("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var o = i.status, s = function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var e = vt[t];
                        if (void 0 !== e) return _t(e);
                    }(o), u = i.message;
                    void 0 === s && (s = a.INTERNAL, u = "Unknown error status: " + o + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    p = !0, v.vl(new c(s, u)), h.close();
                } else l("Connection", "WebChannel received:", n), v.Sl(n);
            }
        })), setTimeout((function() {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            v.bl();
        }), 0), v;
    }, n;
}(/** @class */ function() {
    function t(t) {
        this.Dl = t, this.U = t.U;
        var e = t.ssl ? "https" : "http";
        this.Cl = e + "://" + t.host, this.Nl = "projects/" + this.U.projectId + "/databases/" + this.U.database + "/documents";
    }
    return t.prototype.Ou = function(t, e, n, r) {
        var i = this.Fl(t, e);
        l("RestConnection", "Sending: ", i, n);
        var o = {};
        return this.$l(o, r), this.xl(t, i, o, n).then((function(t) {
            return l("RestConnection", "Received: ", t), t;
        }), (function(e) {
            throw d("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n), 
            e;
        }));
    }, t.prototype.Lu = function(t, e, n, r) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.Ou(t, e, n, r);
    }, 
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */
    t.prototype.$l = function(t, e) {
        if (t["X-Goog-Api-Client"] = "gl-js/ fire/7.20.0", 
        // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid triggering preflight requests.
        t["Content-Type"] = "text/plain", e) for (var n in e.zc) e.zc.hasOwnProperty(n) && (t[n] = e.zc[n]);
    }, t.prototype.Fl = function(t, e) {
        var n = $s[t];
        return this.Cl + "/v1/" + e + ":" + n;
    }, t;
}()), Zs = /** @class */ function() {
    function t() {
        var t = this;
        this.kl = function() {
            return t.Ml();
        }, this.Ol = function() {
            return t.Ll();
        }, this.Bl = [], this.ql();
    }
    return t.prototype.nh = function(t) {
        this.Bl.push(t);
    }, t.prototype.Si = function() {
        window.removeEventListener("online", this.kl), window.removeEventListener("offline", this.Ol);
    }, t.prototype.ql = function() {
        window.addEventListener("online", this.kl), window.addEventListener("offline", this.Ol);
    }, t.prototype.Ml = function() {
        l("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, e = this.Bl; t < e.length; t++) {
            (0, e[t])(0 /* AVAILABLE */);
        }
    }, t.prototype.Ll = function() {
        l("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, e = this.Bl; t < e.length; t++) {
            (0, e[t])(1 /* UNAVAILABLE */);
        }
    }, 
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.On = function() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
}(), Js = /** @class */ function() {
    function t() {}
    return t.prototype.nh = function(t) {
        // No-op.
    }, t.prototype.Si = function() {
        // No-op.
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A memory-backed instance of Persistence. Data is stored only in RAM and
 * not persisted across sessions.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Initializes the WebChannelConnection for the browser. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tu(t) {
    return new de(t, /* useProto3Json= */ !0);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var eu = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.", nu = /** @class */ function() {
    function e() {}
    return e.prototype.initialize = function(e) {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Dh = this.Ul(e), this.persistence = this.Ql(e), [ 4 /*yield*/ , this.persistence.start() ];

                  case 1:
                    return t.sent(), this.Wl = this.jl(e), this.zu = this.Kl(e), [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.jl = function(t) {
        return null;
    }, e.prototype.Kl = function(t) {
        /** Manages our in-memory or durable persistence. */
        return e = this.persistence, n = new zs, r = t.Gl, new po(e, n, r);
        var e, n, r;
    }, e.prototype.Ql = function(t) {
        if (t.Hl.zl) throw new c(a.FAILED_PRECONDITION, eu);
        return new Ws(Hs.Il);
    }, e.prototype.Ul = function(t) {
        return new Hr;
    }, e.prototype.terminate = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Wl && this.Wl.stop(), [ 4 /*yield*/ , this.Dh.Si() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.persistence.Si() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.clearPersistence = function(t, e) {
        throw new c(a.FAILED_PRECONDITION, eu);
    }, e;
}(), ru = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).Yl = t, n;
    }
    return t.__extends(n, e), n.prototype.initialize = function(n) {
        return t.__awaiter(this, void 0, void 0, (function() {
            var r, i = this;
            return t.__generator(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return [ 4 /*yield*/ , e.prototype.initialize.call(this, n) ];

                  case 1:
                    return o.sent(), [ 4 /*yield*/ , this.Yl.initialize(this, n) ];

                  case 2:
                    return o.sent(), r = this.Yl._i, this.Dh instanceof Kr ? (this.Dh._i = {
                        tr: Os.bind(null, r),
                        er: Ms.bind(null, r),
                        nr: Fs.bind(null, r),
                        Vi: Cs.bind(null, r)
                    }, [ 4 /*yield*/ , this.Dh.start() ]) : [ 3 /*break*/ , 4 ];

                  case 3:
                    o.sent(), o.label = 4;

                  case 4:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return [ 4 /*yield*/ , this.persistence.ec((function(e) {
                        return t.__awaiter(i, void 0, void 0, (function() {
                            return t.__generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , Us(this.Yl._i, e) ];

                                  case 1:
                                    return t.sent(), this.Wl && (e && !this.Wl.Ti ? this.Wl.start(this.zu) : e || this.Wl.stop()), 
                                    [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 5:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return o.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, n.prototype.Ul = function(t) {
        if (t.Hl.zl && t.Hl.synchronizeTabs) {
            var e = Er();
            if (!Kr.On(e)) throw new c(a.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
            var n = lo(t.Dl.U, t.Dl.persistenceKey);
            return new Kr(e, t.os, n, t.clientId, t.Gl);
        }
        return new Hr;
    }, n;
}(/** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t.__extends(n, e), n.prototype.initialize = function(n) {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return [ 4 /*yield*/ , e.prototype.initialize.call(this, n) ];

                  case 1:
                    return r.sent(), [ 4 /*yield*/ , function(e) {
                        return t.__awaiter(this, void 0, void 0, (function() {
                            var n, r;
                            return t.__generator(this, (function(t) {
                                return n = m(e), r = m(n.Fc), [ 2 /*return*/ , n.persistence.runTransaction("Synchronize last document change read time", "readonly", (function(t) {
                                    return r.oa(t);
                                })).then((function(t) {
                                    n.Nc = t;
                                })) ];
                            }));
                        }));
                    }(this.zu) ];

                  case 2:
                    return r.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, n.prototype.jl = function(t) {
        var e = this.persistence.Co.do;
        return new si(e, t.os);
    }, n.prototype.Ql = function(t) {
        var e = lo(t.Dl.U, t.Dl.persistenceKey), n = tu(t.Dl.U);
        return new uo(t.Hl.synchronizeTabs, e, t.clientId, oi.oo(t.Hl.cacheSizeBytes), t.os, Er(), Tr(), n, this.Dh, t.Hl.La);
    }, n.prototype.Ul = function(t) {
        return new Hr;
    }, n.prototype.clearPersistence = function(e, n) {
        return function(e) {
            return t.__awaiter(this, void 0, void 0, (function() {
                var n;
                return t.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return dr.On() ? (n = e + "main", [ 4 /*yield*/ , dr.delete(n) ]) : [ 2 /*return*/ , Promise.resolve() ];

                      case 1:
                        return t.sent(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }(lo(e, n));
    }, n;
}(nu)), iu = /** @class */ function() {
    function e() {}
    return e.prototype.initialize = function(e, n) {
        return t.__awaiter(this, void 0, void 0, (function() {
            var r = this;
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.zu ? [ 3 /*break*/ , 2 ] : (this.zu = e.zu, this.Dh = e.Dh, this.Hu = this.Jl(n), 
                    this.Sh = this.Xl(n), this._i = this.Zl(n), this.t_ = this.e_(n), this._i.subscribe({
                        bu: Rr.bind(null, this.t_),
                        Gh: Or.bind(null, this.t_),
                        Kh: Ur.bind(null, this.t_)
                    }), this.Dh.fi = function(t) {
                        return ms(r._i, t, 1 /* SharedClientState */);
                    }, this.Sh.th.n_ = ks.bind(null, this._i), [ 4 /*yield*/ , us(this.Sh, this._i.Qh) ]);

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.e_ = function(t) {
        return new xr;
    }, e.prototype.Jl = function(t) {
        var e, n = tu(t.Dl.U), r = (e = t.Dl, new Xs(e));
        /** Return the Platform-specific connectivity monitor. */ return function(t, e, n) {
            return new Uo(t, e, n);
        }(t.credentials, r, n);
    }, e.prototype.Xl = function(t) {
        var e, n, r, i, o, s = this;
        return e = this.zu, n = this.Hu, r = t.os, i = function(t) {
            return ms(s._i, t, 0 /* RemoteStore */);
        }, o = Zs.On() ? new Zs : new Js, new Vo(e, n, r, i, o);
    }, e.prototype.Zl = function(t) {
        return function(t, e, 
        // PORTING NOTE: Manages state synchronization in multi-tab environments.
        n, r, i, o) {
            var s = new ps(t, e, n, r, i);
            return o && (s.Uh = !0), s;
        }(this.zu, this.Sh, this.Dh, t.Gl, t.Ch, !t.Hl.zl || !t.Hl.synchronizeTabs);
    }, e.prototype.terminate = function() {
        return qo(this.Sh);
    }, e;
}();

/**
 * Provides all components needed for Firestore with in-memory persistence.
 * Uses EagerGC garbage collection.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ou(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        for (var n = t, r = 0, i = [ "next", "error", "complete" ]; r < i.length; r++) {
            var o = i[r];
            if (o in n && "function" == typeof n[o]) return !0;
        }
        return !1;
    }(t);
}

var su = /** @class */ function() {
    function t(t) {
        this.observer = t, 
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
    }
    return t.prototype.next = function(t) {
        this.observer.next && this.s_(this.observer.next, t);
    }, t.prototype.error = function(t) {
        this.observer.error ? this.s_(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
    }, t.prototype.i_ = function() {
        this.muted = !0;
    }, t.prototype.s_ = function(t, e) {
        var n = this;
        this.muted || setTimeout((function() {
            n.muted || t(e);
        }), 0);
    }, t;
}(), uu = function(t) {
    !function(t, e, n, r) {
        if (!(e instanceof Array) || e.length < 1) throw new c(a.INVALID_ARGUMENT, "Function FieldPath() requires its fieldNames argument to be an array with at least " + Q(1, "element") + ".");
    }(0, t);
    for (var e = 0; e < t.length; ++e) if (L("FieldPath", "string", e, t[e]), 0 === t[e].length) throw new c(a.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
    this.r_ = new A(t);
}, au = /** @class */ function(e) {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames A list of field names.
     */
    function n() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return e.call(this, t) || this;
    }
    return t.__extends(n, e), n.documentId = function() {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new n(A.v().R());
    }, n.prototype.isEqual = function(t) {
        if (!(t instanceof n)) throw z("isEqual", "FieldPath", 1, t);
        return this.r_.isEqual(t.r_);
    }, n;
}(uu), cu = new RegExp("[~\\*/\\[\\]]"), hu = function() {
    /** A pointer to the implementing class. */
    this.o_ = this;
}, fu = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).a_ = t, n;
    }
    return t.__extends(n, e), n.prototype.c_ = function(t) {
        if (2 /* MergeSet */ !== t.u_) throw 1 /* Update */ === t.u_ ? t.h_(this.a_ + "() can only appear at the top level of your update data") : t.h_(this.a_ + "() cannot be used with set() unless you pass {merge:true}");
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
                return t.Qe.push(t.path), null;
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(hu);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.
/**
 * A field class base class that is shared by the lite, full and legacy SDK,
 * which supports shared code that deals with FieldPaths.
 */
/**
 * Creates a child context for parsing SerializableFieldValues.
 *
 * This is different than calling `ParseContext.contextWith` because it keeps
 * the fieldTransforms and fieldMask separate.
 *
 * The created context has its `dataSource` set to `UserDataSource.Argument`.
 * Although these values are used with writes, any elements in these FieldValues
 * are not considered writes since they cannot contain any FieldValue sentinels,
 * etc.
 *
 * @param fieldValue The sentinel FieldValue for which to create a child
 *     context.
 * @param context The parent context.
 * @param arrayElement Whether or not the FieldValue has an array.
 */
function lu(t, e, n) {
    return new Au({
        u_: 3 /* Argument */ ,
        l_: e.settings.l_,
        methodName: t.a_,
        __: n
    }, e.U, e.serializer, e.ignoreUndefinedProperties);
}

var pu = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).a_ = t, n;
    }
    return t.__extends(n, e), n.prototype.c_ = function(t) {
        return new on(t.path, new Ye);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n;
    }, n;
}(hu), du = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).a_ = t, r.f_ = n, r;
    }
    return t.__extends(n, e), n.prototype.c_ = function(t) {
        var e = lu(this, t, 
        /*array=*/ !0), n = this.f_.map((function(t) {
            return Lu(t, e);
        })), r = new $e(n);
        return new on(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(hu), vu = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).a_ = t, r.f_ = n, r;
    }
    return t.__extends(n, e), n.prototype.c_ = function(t) {
        var e = lu(this, t, 
        /*array=*/ !0), n = this.f_.map((function(t) {
            return Lu(t, e);
        })), r = new Ze(n);
        return new on(t.path, r);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(hu), yu = /** @class */ function(e) {
    function n(t, n) {
        var r = this;
        return (r = e.call(this) || this).a_ = t, r.d_ = n, r;
    }
    return t.__extends(n, e), n.prototype.c_ = function(t) {
        var e = new tn(t.serializer, ge(t.serializer, this.d_));
        return new on(t.path, e);
    }, n.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, n;
}(hu), gu = /** @class */ function(e) {
    function n() {
        return e.call(this) || this;
    }
    return t.__extends(n, e), n.delete = function() {
        return D("FieldValue.delete", arguments), new mu(new fu("FieldValue.delete"));
    }, n.serverTimestamp = function() {
        return D("FieldValue.serverTimestamp", arguments), new mu(new pu("FieldValue.serverTimestamp"));
    }, n.arrayUnion = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we'd need the Firestore instance to do this.
                return x("FieldValue.arrayUnion", arguments, 1), new mu(new du("FieldValue.arrayUnion", t));
    }, n.arrayRemove = function() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        // NOTE: We don't actually parse the data until it's used in set() or
        // update() since we'd need the Firestore instance to do this.
                return x("FieldValue.arrayRemove", arguments, 1), new mu(new vu("FieldValue.arrayRemove", t));
    }, n.increment = function(t) {
        return L("FieldValue.increment", "number", 1, t), S("FieldValue.increment", arguments, 1), 
        new mu(new yu("FieldValue.increment", t));
    }, n;
}(hu), mu = /** @class */ function(e) {
    function n(t) {
        var n = this;
        return (n = e.call(this) || this).o_ = t, n.a_ = t.a_, n;
    }
    return t.__extends(n, e), n.prototype.c_ = function(t) {
        return this.o_.c_(t);
    }, n.prototype.isEqual = function(t) {
        return t instanceof n && this.o_.isEqual(t.o_);
    }, n;
}(gu), wu = /** @class */ function() {
    function t(t, e) {
        if (S("GeoPoint", arguments, 2), L("GeoPoint", "number", 1, t), L("GeoPoint", "number", 2, e), 
        !isFinite(t) || t < -90 || t > 90) throw new c(a.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new c(a.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this.w_ = t, this.m_ = e;
    }
    return Object.defineProperty(t.prototype, "latitude", {
        /**
         * Returns the latitude of this geo point, a number between -90 and 90.
         */
        get: function() {
            return this.w_;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * Returns the longitude of this geo point, a number between -180 and 180.
         */
        get: function() {
            return this.m_;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.w_ === t.w_ && this.m_ === t.m_;
    }, t.prototype.toJSON = function() {
        return {
            latitude: this.w_,
            longitude: this.m_
        };
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.H = function(t) {
        return H(this.w_, t.w_) || H(this.m_, t.m_);
    }, t;
}(), _u = /^__.*__$/, bu = function(t, e, n) {
    this.T_ = t, this.E_ = e, this.I_ = n;
}, Iu = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.Qe = e, this.fieldTransforms = n;
    }
    return t.prototype.A_ = function(t, e) {
        var n = [];
        return null !== this.Qe ? n.push(new yn(t, this.data, this.Qe, e)) : n.push(new vn(t, this.data, e)), 
        this.fieldTransforms.length > 0 && n.push(new mn(t, this.fieldTransforms)), n;
    }, t;
}(), Eu = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.Qe = e, this.fieldTransforms = n;
    }
    return t.prototype.A_ = function(t, e) {
        var n = [ new yn(t, this.data, this.Qe, e) ];
        return this.fieldTransforms.length > 0 && n.push(new mn(t, this.fieldTransforms)), 
        n;
    }, t;
}();

function Tu(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw y();
    }
}

/** A "context" object passed around while parsing user data. */ var Au = /** @class */ function() {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings The settings for the parser.
     * @param databaseId The database ID of the Firestore instance.
     * @param serializer The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms A mutable list of field transforms encountered while
     *     parsing the data.
     * @param fieldMask A mutable list of field paths encountered while parsing
     *     the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function t(t, e, n, r, i, o) {
        this.settings = t, this.U = e, this.serializer = n, this.ignoreUndefinedProperties = r, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.R_(), this.fieldTransforms = i || [], this.Qe = o || [];
    }
    return Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this.settings.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "u_", {
        get: function() {
            return this.settings.u_;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Returns a new context with the specified settings overwritten. */ t.prototype.P_ = function(e) {
        return new t(Object.assign(Object.assign({}, this.settings), e), this.U, this.serializer, this.ignoreUndefinedProperties, this.fieldTransforms, this.Qe);
    }, t.prototype.g_ = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.P_({
            path: n,
            __: !1
        });
        return r.y_(t), r;
    }, t.prototype.V_ = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.P_({
            path: n,
            __: !1
        });
        return r.R_(), r;
    }, t.prototype.p_ = function(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.P_({
            path: void 0,
            __: !0
        });
    }, t.prototype.h_ = function(t) {
        return Cu(t, this.settings.methodName, this.settings.b_ || !1, this.path, this.settings.l_);
    }, 
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ t.prototype.contains = function(t) {
        return void 0 !== this.Qe.find((function(e) {
            return t.T(e);
        })) || void 0 !== this.fieldTransforms.find((function(e) {
            return t.T(e.field);
        }));
    }, t.prototype.R_ = function() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (var t = 0; t < this.path.length; t++) this.y_(this.path.get(t));
    }, t.prototype.y_ = function(t) {
        if (0 === t.length) throw this.h_("Document fields must not be empty");
        if (Tu(this.u_) && _u.test(t)) throw this.h_('Document fields cannot begin and end with "__"');
    }, t;
}(), Nu = /** @class */ function() {
    function t(t, e, n) {
        this.U = t, this.ignoreUndefinedProperties = e, this.serializer = n || tu(t)
        /** Creates a new top-level parse context. */;
    }
    return t.prototype.v_ = function(t, e, n, r) {
        return void 0 === r && (r = !1), new Au({
            u_: t,
            methodName: e,
            l_: n,
            path: A.g(),
            __: !1,
            b_: r
        }, this.U, this.serializer, this.ignoreUndefinedProperties);
    }, t;
}();

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */
/** Parse document data from a set() call. */ function Du(t, e, n, r, i, o) {
    void 0 === o && (o = {});
    var s = t.v_(o.merge || o.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , e, n, i);
    Uu("Data must be an object, but it was:", s, r);
    var u, h, f = Ru(r, s);
    if (o.merge) u = new rn(s.Qe), h = s.fieldTransforms; else if (o.mergeFields) {
        for (var l = [], p = 0, d = o.mergeFields; p < d.length; p++) {
            var v = d[p], g = void 0;
            if (v instanceof uu) g = v.r_; else {
                if ("string" != typeof v) throw y();
                g = Vu(e, v, n);
            }
            if (!s.contains(g)) throw new c(a.INVALID_ARGUMENT, "Field '" + g + "' is specified in your field mask but missing from your input data.");
            Mu(l, g) || l.push(g);
        }
        u = new rn(l), h = s.fieldTransforms.filter((function(t) {
            return u.He(t.field);
        }));
    } else u = null, h = s.fieldTransforms;
    return new Iu(new En(f), u, h);
}

/** Parse update data from an update() call. */ function Su(t, e, n, r) {
    var i = t.v_(1 /* Update */ , e, n);
    Uu("Data must be an object, but it was:", i, r);
    var o = [], s = new Tn;
    _(r, (function(t, r) {
        var u = Vu(e, t, n), a = i.V_(u);
        if (r instanceof hu && r.o_ instanceof fu) 
        // Add it to the field mask, but don't add anything to updateData.
        o.push(u); else {
            var c = Lu(r, a);
            null != c && (o.push(u), s.set(u, c));
        }
    }));
    var u = new rn(o);
    return new Eu(s.Je(), u, i.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function xu(t, e, n, r, i, o) {
    var s = t.v_(1 /* Update */ , e, n), u = [ Pu(e, r, n) ], h = [ i ];
    if (o.length % 2 != 0) throw new c(a.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
    for (var f = 0; f < o.length; f += 2) u.push(Pu(e, o[f])), h.push(o[f + 1]);
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (var l = [], p = new Tn, d = u.length - 1; d >= 0; --d) if (!Mu(l, u[d])) {
        var v = u[d], y = h[d], g = s.V_(v);
        if (y instanceof hu && y.o_ instanceof fu) 
        // Add it to the field mask, but don't add anything to updateData.
        l.push(v); else {
            var m = Lu(y, g);
            null != m && (l.push(v), p.set(v, m));
        }
    }
    var w = new rn(l);
    return new Eu(p.Je(), w, s.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function ku(t, e, n, r) {
    return void 0 === r && (r = !1), Lu(n, t.v_(r ? 4 /* ArrayArgument */ : 3 /* Argument */ , e));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input Data to be parsed.
 * @param context A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @return The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function Lu(t, e) {
    if (Ou(t)) return Uu("Unsupported field value:", e, t), Ru(t, e);
    if (t instanceof hu) 
    // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    return function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!Tu(e.u_)) throw e.h_(t.a_ + "() can only be used with update() and set()");
        if (!e.path) throw e.h_(t.a_ + "() is not currently supported inside arrays");
        var n = t.c_(e);
        n && e.fieldTransforms.push(n);
    }(t, e), null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.Qe.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.__ && 4 /* ArrayArgument */ !== e.u_) throw e.h_("Nested arrays are not supported");
        return function(t, e) {
            for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                var s = Lu(o[i], e.p_(r));
                null == s && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                s = {
                    nullValue: "NULL_VALUE"
                }), n.push(s), r++;
            }
            return {
                arrayValue: {
                    values: n
                }
            };
        }(t, e);
    }
    return function(t, e) {
        if (null === t) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return ge(e.serializer, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            var n = ot.fromDate(t);
            return {
                timestampValue: me(e.serializer, n)
            };
        }
        if (t instanceof ot) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            var r = new ot(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: me(e.serializer, r)
            };
        }
        if (t instanceof wu) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof Z) return {
            bytesValue: we(e.serializer, t.q)
        };
        if (t instanceof bu) {
            var i = e.U, o = t.T_;
            if (!o.isEqual(i)) throw e.h_("Document reference is for database " + o.projectId + "/" + o.database + " but should be for database " + i.projectId + "/" + i.database);
            return {
                referenceValue: Ie(t.T_ || e.U, t.E_.path)
            };
        }
        if (void 0 === t && e.ignoreUndefinedProperties) return null;
        throw e.h_("Unsupported field value: " + F(t));
    }(t, e);
}

function Ru(t, e) {
    var n = {};
    return b(t) ? 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.Qe.push(e.path) : _(t, (function(t, r) {
        var i = Lu(r, e.g_(t));
        null != i && (n[t] = i);
    })), {
        mapValue: {
            fields: n
        }
    };
}

function Ou(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof ot || t instanceof wu || t instanceof Z || t instanceof bu || t instanceof hu);
}

function Uu(t, e, n) {
    if (!Ou(n) || !M(n)) {
        var r = F(n);
        throw "an object" === r ? e.h_(t + " a custom object") : e.h_(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function Pu(t, e, n) {
    if (e instanceof uu) return e.r_;
    if ("string" == typeof e) return Vu(t, e);
    throw Cu("Field path arguments must be of type string or FieldPath.", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
}

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName The publicly visible method name
 * @param path The dot-separated string form of a field path which will be split
 * on dots.
 * @param targetDoc The document against which the field path will be evaluated.
 */ function Vu(e, n, r) {
    try {
        return function(e) {
            if (e.search(cu) >= 0) throw new c(a.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'");
            try {
                return new (au.bind.apply(au, t.__spreadArrays([ void 0 ], e.split("."))));
            } catch (t) {
                throw new c(a.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            }
        }(n).r_;
    } catch (n) {
        throw Cu((i = n) instanceof Error ? i.message : i.toString(), e, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, r);
    }
    /**
 * Extracts the message from a caught exception, which should be an Error object
 * though JS doesn't guarantee that.
 */    var i;
    /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */}

function Cu(t, e, n, r, i) {
    var o = r && !r.m(), s = void 0 !== i, u = "Function " + e + "() called with invalid data";
    n && (u += " (via `toFirestore()`)");
    var h = "";
    return (o || s) && (h += " (found", o && (h += " in field " + r), s && (h += " in document " + i), 
    h += ")"), new c(a.INVALID_ARGUMENT, (u += ". ") + t + h);
}

function Mu(t, e) {
    return t.some((function(t) {
        return t.isEqual(e);
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ var Fu = /** @class */ function() {
    function e(t) {
        this.Hu = t, 
        // The version of each document that was read during this transaction.
        this.S_ = new Map, this.mutations = [], this.D_ = !1, 
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.C_ = null, 
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this.N_ = new Set;
    }
    return e.prototype.F_ = function(e) {
        return t.__awaiter(this, void 0, void 0, (function() {
            var n, r = this;
            return t.__generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    if (this.x_(), this.mutations.length > 0) throw new c(a.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    return [ 4 /*yield*/ , function(e, n) {
                        return t.__awaiter(this, void 0, void 0, (function() {
                            var r, i, o, s, u, a;
                            return t.__generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return r = m(e), i = Se(r.serializer) + "/documents", o = {
                                        documents: n.map((function(t) {
                                            return Te(r.serializer, t);
                                        }))
                                    }, [ 4 /*yield*/ , r.Lu("BatchGetDocuments", i, o) ];

                                  case 1:
                                    return s = t.sent(), u = new Map, s.forEach((function(t) {
                                        var e = function(t, e) {
                                            return "found" in e ? function(t, e) {
                                                g(!!e.found), e.found.name, e.found.updateTime;
                                                var n = Ae(t, e.found.name), r = be(e.found.updateTime), i = new En({
                                                    mapValue: {
                                                        fields: e.found.fields
                                                    }
                                                });
                                                return new Dn(n, r, i, {});
                                            }(t, e) : "missing" in e ? function(t, e) {
                                                g(!!e.missing), g(!!e.readTime);
                                                var n = Ae(t, e.missing), r = be(e.readTime);
                                                return new Sn(n, r);
                                            }(t, e) : y();
                                        }(r.serializer, t);
                                        u.set(e.key.toString(), e);
                                    })), a = [], [ 2 /*return*/ , (n.forEach((function(t) {
                                        var e = u.get(t.toString());
                                        g(!!e), a.push(e);
                                    })), a) ];
                                }
                            }));
                        }));
                    }(this.Hu, e) ];

                  case 1:
                    return [ 2 /*return*/ , ((n = i.sent()).forEach((function(t) {
                        t instanceof Sn || t instanceof Dn ? r.k_(t) : y();
                    })), n) ];
                }
            }));
        }));
    }, e.prototype.set = function(t, e) {
        this.write(e.A_(t, this.Ke(t))), this.N_.add(t.toString());
    }, e.prototype.update = function(t, e) {
        try {
            this.write(e.A_(t, this.M_(t)));
        } catch (t) {
            this.C_ = t;
        }
        this.N_.add(t.toString());
    }, e.prototype.delete = function(t) {
        this.write([ new bn(t, this.Ke(t)) ]), this.N_.add(t.toString());
    }, e.prototype.commit = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            var e, n = this;
            return t.__generator(this, (function(r) {
                switch (r.label) {
                  case 0:
                    if (this.x_(), this.C_) throw this.C_;
                    return e = this.S_, 
                    // For each mutation, note that the doc was written.
                    this.mutations.forEach((function(t) {
                        e.delete(t.key.toString());
                    })), 
                    // For each document that was read but not written to, we want to perform
                    // a `verify` operation.
                    e.forEach((function(t, e) {
                        var r = N.D(e);
                        n.mutations.push(new In(r, n.Ke(r)));
                    })), [ 4 /*yield*/ , function(e, n) {
                        return t.__awaiter(this, void 0, void 0, (function() {
                            var r, i, o;
                            return t.__generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return r = m(e), i = Se(r.serializer) + "/documents", o = {
                                        writes: n.map((function(t) {
                                            return Le(r.serializer, t);
                                        }))
                                    }, [ 4 /*yield*/ , r.Ou("Commit", i, o) ];

                                  case 1:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    }(this.Hu, this.mutations) ];

                  case 1:
                    // For each mutation, note that the doc was written.
                    return r.sent(), this.D_ = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.k_ = function(t) {
        var e;
        if (t instanceof Dn) e = t.version; else {
            if (!(t instanceof Sn)) throw y();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
                        e = st.min();
        }
        var n = this.S_.get(t.key.toString());
        if (n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new c(a.ABORTED, "Document version changed between two reads.");
        } else this.S_.set(t.key.toString(), e);
    }, 
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    e.prototype.Ke = function(t) {
        var e = this.S_.get(t.toString());
        return !this.N_.has(t.toString()) && e ? un.updateTime(e) : un.Ge();
    }, 
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    e.prototype.M_ = function(t) {
        var e = this.S_.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.N_.has(t.toString()) && e) {
            if (e.isEqual(st.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new c(a.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return un.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
                return un.exists(!0);
    }, e.prototype.write = function(t) {
        this.x_(), this.mutations = this.mutations.concat(t);
    }, e.prototype.x_ = function() {}, e;
}(), qu = /** @class */ function() {
    function e(t, e, n, r) {
        this.os = t, this.Hu = e, this.updateFunction = n, this.hs = r, this.O_ = 5, this.gs = new lr(this.os, "transaction_retry" /* TransactionRetry */)
        /** Runs the transaction and sets the result on deferred. */;
    }
    return e.prototype.run = function() {
        this.L_();
    }, e.prototype.L_ = function() {
        var e = this;
        this.gs.Rn((function() {
            return t.__awaiter(e, void 0, void 0, (function() {
                var e, n, r = this;
                return t.__generator(this, (function(t) {
                    return e = new Fu(this.Hu), (n = this.B_(e)) && n.then((function(t) {
                        r.os.ds((function() {
                            return e.commit().then((function() {
                                r.hs.resolve(t);
                            })).catch((function(t) {
                                r.q_(t);
                            }));
                        }));
                    })).catch((function(t) {
                        r.q_(t);
                    })), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, e.prototype.B_ = function(t) {
        try {
            var e = this.updateFunction(t);
            return !ut(e) && e.catch && e.then ? e : (this.hs.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.hs.reject(t), null;
        }
    }, e.prototype.q_ = function(t) {
        var e = this;
        this.O_ > 0 && this.U_(t) ? (this.O_ -= 1, this.os.ds((function() {
            return e.L_(), Promise.resolve();
        }))) : this.hs.reject(t);
    }, e.prototype.U_ = function(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !wt(e);
        }
        return !1;
    }, e;
}(), ju = /** @class */ function() {
    function e(t, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    e) {
        this.credentials = t, this.os = e, this.clientId = K.k(), 
        // We defer our initialization until we get the current user from
        // setChangeListener(). We block the async queue until we got the initial
        // user and the initialization is completed. This will prevent any scheduled
        // work from happening before initialization is completed.
        // If initializationDone resolved then the FirestoreClient is in a usable
        // state.
        this.Q_ = new fr
        /**
     * Starts up the FirestoreClient, returning only whether or not enabling
     * persistence succeeded.
     *
     * The intent here is to "do the right thing" as far as users are concerned.
     * Namely, in cases where offline persistence is requested and possible,
     * enable it, but otherwise fall back to persistence disabled. For the most
     * part we expect this to succeed one way or the other so we don't expect our
     * users to actually wait on the firestore.enablePersistence Promise since
     * they generally won't care.
     *
     * Of course some users actually do care about whether or not persistence
     * was successfully enabled, so the Promise returned from this method
     * indicates this outcome.
     *
     * This presents a problem though: even before enablePersistence resolves or
     * rejects, users may have made calls to e.g. firestore.collection() which
     * means that the FirestoreClient in there will be available and will be
     * enqueuing actions on the async queue.
     *
     * Meanwhile any failure of an operation on the async queue causes it to
     * panic and reject any further work, on the premise that unhandled errors
     * are fatal.
     *
     * Consequently the fallback is handled internally here in start, and if the
     * fallback succeeds we signal success to the async queue even though the
     * start() itself signals failure.
     *
     * @param databaseInfo The connection information for the current instance.
     * @param offlineComponentProvider Provider that returns all components
     * required for memory-only or IndexedDB persistence.
     * @param onlineComponentProvider Provider that returns all components
     * required for online support.
     * @param persistenceSettings Settings object to configure offline
     *     persistence.
     * @returns A deferred result indicating the user-visible result of enabling
     *     offline persistence. This method will reject this if IndexedDB fails to
     *     start for any reason. If usePersistence is false this is
     *     unconditionally resolved.
     */;
    }
    return e.prototype.start = function(e, n, r, i) {
        var o = this;
        this.W_(), this.Dl = e;
        // If usePersistence is true, certain classes of errors while starting are
        // recoverable but only by falling back to persistence disabled.
        // If there's an error in the first case but not in recovery we cannot
        // reject the promise blocking the async queue because this will cause the
        // async queue to panic.
        var s = new fr, u = !1;
        // Return only the result of enabling persistence. Note that this does not
        // need to await the completion of initializationDone because the result of
        // this method should not reflect any other kind of failure to start.
        return this.credentials.Jc((function(e) {
            if (!u) return u = !0, l("FirestoreClient", "Initializing. user=", e.uid), o.j_(n, r, i, e, s).then(o.Q_.resolve, o.Q_.reject);
            o.os.Ds((function() {
                return function(e, n) {
                    return t.__awaiter(this, void 0, void 0, (function() {
                        var r, i;
                        return t.__generator(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                return (r = m(e)).os.Fs(), l("RemoteStore", "RemoteStore received new credentials"), 
                                i = Ko(r), 
                                // Tear down and re-create our network streams. This will ensure we get a
                                // fresh auth token for the new user and re-fill the write pipeline with
                                // new mutations from the LocalStore (since mutations are per-user).
                                r.Zu.add(3 /* CredentialChange */), [ 4 /*yield*/ , Fo(r) ];

                              case 1:
                                return t.sent(), i && 
                                // Don't set the network status to Unknown if we are offline.
                                r.rh.set("Unknown" /* Unknown */), [ 4 /*yield*/ , r.th.n_(n) ];

                              case 2:
                                return t.sent(), r.Zu.delete(3 /* CredentialChange */), [ 4 /*yield*/ , Mo(r) ];

                              case 3:
                                // Tear down and re-create our network streams. This will ensure we get a
                                // fresh auth token for the new user and re-fill the write pipeline with
                                // new mutations from the LocalStore (since mutations are per-user).
                                return t.sent(), [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(o.Sh, e);
            }));
        })), 
        // Block the async queue until initialization is done
        this.os.ds((function() {
            return o.Q_.promise;
        })), s.promise;
    }, 
    /** Enables the network connection and requeues all pending operations. */ e.prototype.enableNetwork = function() {
        var t = this;
        return this.W_(), this.os.enqueue((function() {
            return t.persistence.sc(!0), Co(t.Sh);
        }));
    }, 
    /**
     * Initializes persistent storage, attempting to use IndexedDB if
     * usePersistence is true or memory-only if false.
     *
     * If IndexedDB fails because it's already open in another tab or because the
     * platform can't possibly support our implementation then this method rejects
     * the persistenceResult and falls back on memory-only persistence.
     *
     * @param offlineComponentProvider Provider that returns all components
     * required for memory-only or IndexedDB persistence.
     * @param onlineComponentProvider Provider that returns all components
     * required for online support.
     * @param persistenceSettings Settings object to configure offline persistence
     * @param user The initial user
     * @param persistenceResult A deferred result indicating the user-visible
     *     result of enabling offline persistence. This method will reject this if
     *     IndexedDB fails to start for any reason. If usePersistence is false
     *     this is unconditionally resolved.
     * @returns a Promise indicating whether or not initialization should
     *     continue, i.e. that one of the persistence implementations actually
     *     succeeded.
     */
    e.prototype.j_ = function(e, n, r, i, o) {
        return t.__awaiter(this, void 0, void 0, (function() {
            var s, u, a = this;
            return t.__generator(this, (function(c) {
                switch (c.label) {
                  case 0:
                    return c.trys.push([ 0, 3, , 4 ]), s = {
                        os: this.os,
                        Dl: this.Dl,
                        clientId: this.clientId,
                        credentials: this.credentials,
                        Gl: i,
                        Ch: 100,
                        Hl: r
                    }, [ 4 /*yield*/ , e.initialize(s) ];

                  case 1:
                    return c.sent(), [ 4 /*yield*/ , n.initialize(e, s) ];

                  case 2:
                    return c.sent(), this.persistence = e.persistence, this.Dh = e.Dh, this.zu = e.zu, 
                    this.Wl = e.Wl, this.Hu = n.Hu, this.Sh = n.Sh, this._i = n._i, this.K_ = n.t_, 
                    this.K_.qs = ds.bind(null, this._i), this.K_.Ws = ys.bind(null, this._i), 
                    // When a user calls clearPersistence() in one client, all other clients
                    // need to be terminated to allow the delete to succeed.
                    this.persistence.nc((function() {
                        return t.__awaiter(a, void 0, void 0, (function() {
                            return t.__generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , this.terminate() ];

                                  case 1:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })), o.resolve(), [ 3 /*break*/ , 4 ];

                  case 3:
                    // An unknown failure on the first stage shuts everything down.
                    if (u = c.sent(), 
                    // Regardless of whether or not the retry succeeds, from an user
                    // perspective, offline persistence has failed.
                    o.reject(u), !this.G_(u)) throw u;
                    return [ 2 /*return*/ , (console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + u), 
                    this.j_(new nu, new iu, {
                        zl: !1
                    }, i, o)) ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Decides whether the provided error allows us to gracefully disable
     * persistence (as opposed to crashing the client).
     */
    e.prototype.G_ = function(t) {
        return "FirebaseError" === t.name ? t.code === a.FAILED_PRECONDITION || t.code === a.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 
        // When the browser is out of quota we could get either quota exceeded
        // or an aborted error depending on whether the error happened during
        // schema migration.
        22 === t.code || 20 === t.code || 
        // Firefox Private Browsing mode disables IndexedDb and returns
        // INVALID_STATE for any usage.
        11 === t.code;
    }, 
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    e.prototype.W_ = function() {
        if (this.os.Vs) throw new c(a.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /** Disables the network connection. Pending operations will not complete. */ e.prototype.disableNetwork = function() {
        var e = this;
        return this.W_(), this.os.enqueue((function() {
            return e.persistence.sc(!1), function(e) {
                return t.__awaiter(this, void 0, void 0, (function() {
                    var n;
                    return t.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            return (n = m(e)).Zu.add(0 /* UserDisabled */), [ 4 /*yield*/ , Fo(n) ];

                          case 1:
                            return t.sent(), 
                            // Set the OnlineState to Offline so get()s return from cache, etc.
                            n.rh.set("Offline" /* Offline */), [ 2 /*return*/ ];
                        }
                    }));
                }));
            }(e.Sh);
        }));
    }, e.prototype.terminate = function() {
        var e = this;
        this.os.Ss();
        var n = new fr;
        return this.os.ps((function() {
            return t.__awaiter(e, void 0, void 0, (function() {
                var e, r;
                return t.__generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return t.trys.push([ 0, 4, , 5 ]), 
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        this.Wl && this.Wl.stop(), [ 4 /*yield*/ , qo(this.Sh) ];

                      case 1:
                        return t.sent(), [ 4 /*yield*/ , this.Dh.Si() ];

                      case 2:
                        return t.sent(), [ 4 /*yield*/ , this.persistence.Si() ];

                      case 3:
                        // PORTING NOTE: LocalStore does not need an explicit shutdown on web.
                        return t.sent(), 
                        // `removeChangeListener` must be called after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving
                        // auth tokens.
                        this.credentials.Xc(), n.resolve(), [ 3 /*break*/ , 5 ];

                      case 4:
                        return e = t.sent(), r = Dr(e, "Failed to shutdown persistence"), n.reject(r), [ 3 /*break*/ , 5 ];

                      case 5:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })), n.promise;
    }, 
    /**
     * Returns a Promise that resolves when all writes that were pending at the time this
     * method was called received server acknowledgement. An acknowledgement can be either acceptance
     * or rejection.
     */
    e.prototype.waitForPendingWrites = function() {
        var e = this;
        this.W_();
        var n = new fr;
        return this.os.ds((function() {
            return function(e, n) {
                return t.__awaiter(this, void 0, void 0, (function() {
                    var r, i, o, s, u;
                    return t.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            Ko((r = m(e)).Sh) || l("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), 
                            t.label = 1;

                          case 1:
                            return t.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , function(t) {
                                var e = m(t);
                                return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(t) {
                                    return e.vr.Bo(t);
                                }));
                            }(r.zu) ];

                          case 2:
                            return -1 === (i = t.sent()) ? [ 2 /*return*/ , void n.resolve() ] : ((o = r.Bh.get(i) || []).push(n), 
                            r.Bh.set(i, o), [ 3 /*break*/ , 4 ]);

                          case 3:
                            return s = t.sent(), u = Dr(s, "Initialization of waitForPendingWrites() operation failed"), 
                            n.reject(u), [ 3 /*break*/ , 4 ];

                          case 4:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            }(e._i, n);
        })), n.promise;
    }, e.prototype.listen = function(t, e, n) {
        var r = this;
        this.W_();
        var i = new su(n), o = new Vr(t, i, e);
        return this.os.ds((function() {
            return kr(r.K_, o);
        })), function() {
            i.i_(), r.os.ds((function() {
                return Lr(r.K_, o);
            }));
        };
    }, e.prototype.z_ = function(e) {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.W_(), [ 4 /*yield*/ , this.Q_.promise ];

                  case 1:
                    return [ 2 /*return*/ , (n.sent(), function(e, n, r) {
                        return t.__awaiter(this, void 0, void 0, (function() {
                            var i, o = this;
                            return t.__generator(this, (function(s) {
                                switch (s.label) {
                                  case 0:
                                    return i = new fr, [ 4 /*yield*/ , e.enqueue((function() {
                                        return t.__awaiter(o, void 0, void 0, (function() {
                                            var e, o, s;
                                            return t.__generator(this, (function(t) {
                                                switch (t.label) {
                                                  case 0:
                                                    return t.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , function(t, e) {
                                                        var n = m(t);
                                                        return n.persistence.runTransaction("read document", "readonly", (function(t) {
                                                            return n.$c.Dr(t, e);
                                                        }));
                                                    }(n, r) ];

                                                  case 1:
                                                    return (e = t.sent()) instanceof Dn ? i.resolve(e) : e instanceof Sn ? i.resolve(null) : i.reject(new c(a.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), 
                                                    [ 3 /*break*/ , 3 ];

                                                  case 2:
                                                    return o = t.sent(), s = Dr(o, "Failed to get document '" + r + " from cache"), 
                                                    i.reject(s), [ 3 /*break*/ , 3 ];

                                                  case 3:
                                                    return [ 2 /*return*/ ];
                                                }
                                            }));
                                        }));
                                    })) ];

                                  case 1:
                                    return [ 2 /*return*/ , (s.sent(), i.promise) ];
                                }
                            }));
                        }));
                    }(this.os, this.zu, e)) ];
                }
            }));
        }));
    }, e.prototype.H_ = function(e, n) {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.W_(), [ 4 /*yield*/ , this.Q_.promise ];

                  case 1:
                    return [ 2 /*return*/ , (t.sent(), function(t, e, n, r) {
                        var i = new fr, o = zu(t, e, On(n.path), {
                            includeMetadataChanges: !0,
                            Js: !0
                        }, {
                            next: function(t) {
                                // Remove query first before passing event to user to avoid
                                // user actions affecting the now stale query.
                                o();
                                var e = t.docs.has(n);
                                !e && t.fromCache ? 
                                // TODO(dimond): If we're online and the document doesn't
                                // exist then we resolve with a doc.exists set to false. If
                                // we're offline however, we reject the Promise in this
                                // case. Two options: 1) Cache the negative response from
                                // the server so we can deliver that even when you're
                                // offline 2) Actually reject the Promise in the online case
                                // if the document doesn't exist.
                                i.reject(new c(a.UNAVAILABLE, "Failed to get document because the client is offline.")) : e && t.fromCache && r && "server" === r.source ? i.reject(new c(a.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(t);
                            },
                            error: function(t) {
                                return i.reject(t);
                            }
                        });
                        return i.promise;
                    }(this.os, this.K_, e, n)) ];
                }
            }));
        }));
    }, e.prototype.Y_ = function(e) {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return this.W_(), [ 4 /*yield*/ , this.Q_.promise ];

                  case 1:
                    return [ 2 /*return*/ , (n.sent(), function(e, n, r) {
                        return t.__awaiter(this, void 0, void 0, (function() {
                            var i, o = this;
                            return t.__generator(this, (function(s) {
                                switch (s.label) {
                                  case 0:
                                    return i = new fr, [ 4 /*yield*/ , e.enqueue((function() {
                                        return t.__awaiter(o, void 0, void 0, (function() {
                                            var e, o, s, u, a, c;
                                            return t.__generator(this, (function(t) {
                                                switch (t.label) {
                                                  case 0:
                                                    return t.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , bo(n, r, 
                                                    /* usePreviousResults= */ !0) ];

                                                  case 1:
                                                    return e = t.sent(), o = new hs(r, e.kc), s = o.Th(e.documents), u = o.gr(s, 
                                                    /* updateLimboDocuments= */ !1), i.resolve(u.snapshot), [ 3 /*break*/ , 3 ];

                                                  case 2:
                                                    return a = t.sent(), c = Dr(a, "Failed to execute query '" + r + " against cache"), 
                                                    i.reject(c), [ 3 /*break*/ , 3 ];

                                                  case 3:
                                                    return [ 2 /*return*/ ];
                                                }
                                            }));
                                        }));
                                    })) ];

                                  case 1:
                                    return [ 2 /*return*/ , (s.sent(), i.promise) ];
                                }
                            }));
                        }));
                    }(this.os, this.zu, e)) ];
                }
            }));
        }));
    }, e.prototype.J_ = function(e, n) {
        return t.__awaiter(this, void 0, void 0, (function() {
            return t.__generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.W_(), [ 4 /*yield*/ , this.Q_.promise ];

                  case 1:
                    return [ 2 /*return*/ , (t.sent(), function(t, e, n, r) {
                        var i = new fr, o = zu(t, e, n, {
                            includeMetadataChanges: !0,
                            Js: !0
                        }, {
                            next: function(t) {
                                // Remove query first before passing event to user to avoid
                                // user actions affecting the now stale query.
                                o(), t.fromCache && r && "server" === r.source ? i.reject(new c(a.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(t);
                            },
                            error: function(t) {
                                return i.reject(t);
                            }
                        });
                        return i.promise;
                    }(this.os, this.K_, e, n)) ];
                }
            }));
        }));
    }, e.prototype.write = function(e) {
        var n = this;
        this.W_();
        var r = new fr;
        return this.os.ds((function() {
            return function(e, n, r) {
                return t.__awaiter(this, void 0, void 0, (function() {
                    var i, o, s, u;
                    return t.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            (i = js(e)).Wh("write()"), t.label = 1;

                          case 1:
                            return t.trys.push([ 1, 5, , 6 ]), [ 4 /*yield*/ , 
                            /* Accepts locally generated Mutations and commit them to storage. */
                            function(t, e) {
                                var n, r = m(t), i = ot.now(), o = e.reduce((function(t, e) {
                                    return t.add(e.key);
                                }), Ot());
                                return r.persistence.runTransaction("Locally write mutations", "readwrite", (function(t) {
                                    return r.$c.$r(t, o).next((function(o) {
                                        n = o;
                                        for (
                                        // For non-idempotent mutations (such as `FieldValue.increment()`),
                                        // we record the base state in a separate patch mutation. This is
                                        // later used to guarantee consistent values and prevents flicker
                                        // even if the backend sends us an update that already includes our
                                        // transform.
                                        var s = [], u = 0, a = e; u < a.length; u++) {
                                            var c = a[u], h = ln(c, n.get(c.key));
                                            null != h && 
                                            // NOTE: The base state should only be applied if there's some
                                            // existing document to override, so use a Precondition of
                                            // exists=true
                                            s.push(new yn(c.key, h, An(h.proto.mapValue), un.exists(!0)));
                                        }
                                        return r.vr.xo(t, i, s, e);
                                    }));
                                })).then((function(t) {
                                    var e = t.hr(n);
                                    return {
                                        batchId: t.batchId,
                                        dr: e
                                    };
                                }));
                            }(i.zu, n) ];

                          case 2:
                            return o = t.sent(), i.Dh.Fi(o.batchId), function(t, e, n) {
                                var r = t.Lh[t.currentUser.Zs()];
                                r || (r = new bt(H)), r = r.rt(e, n), t.Lh[t.currentUser.Zs()] = r;
                            }(i, o.batchId, r), [ 4 /*yield*/ , xs(i, o.dr) ];

                          case 3:
                            return t.sent(), [ 4 /*yield*/ , ts(i.Sh) ];

                          case 4:
                            return t.sent(), [ 3 /*break*/ , 6 ];

                          case 5:
                            return s = t.sent(), u = Dr(s, "Failed to persist write"), r.reject(u), [ 3 /*break*/ , 6 ];

                          case 6:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            }(n._i, e, r);
        })), r.promise;
    }, e.prototype.U = function() {
        return this.Dl.U;
    }, e.prototype.X_ = function(e) {
        var n = this;
        this.W_();
        var r = new su(e);
        return this.os.ds((function() {
            return t.__awaiter(n, void 0, void 0, (function() {
                return t.__generator(this, (function(t) {
                    return [ 2 /*return*/ , function(t, e) {
                        m(t).Bs.add(e), 
                        // Immediately fire an initial event, indicating all existing listeners
                        // are in-sync.
                        e.next();
                    }(this.K_, r) ];
                }));
            }));
        })), function() {
            r.i_(), n.os.ds((function() {
                return t.__awaiter(n, void 0, void 0, (function() {
                    return t.__generator(this, (function(t) {
                        return [ 2 /*return*/ , function(t, e) {
                            m(t).Bs.delete(e);
                        }(this.K_, r) ];
                    }));
                }));
            }));
        };
    }, Object.defineProperty(e.prototype, "Z_", {
        get: function() {
            // Technically, the asyncQueue is still running, but only accepting operations
            // related to termination or supposed to be run after termination. It is effectively
            // terminated to the eyes of users.
            return this.os.Vs;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Takes an updateFunction in which a set of reads and writes can be performed
     * atomically. In the updateFunction, the client can read and write values
     * using the supplied transaction object. After the updateFunction, all
     * changes will be committed. If a retryable error occurs (ex: some other
     * client has changed any of the data referenced), then the updateFunction
     * will be called again after a backoff. If the updateFunction still fails
     * after all retries, then the transaction will be rejected.
     *
     * The transaction object passed to the updateFunction contains methods for
     * accessing documents and collections. Unlike other datastore access, data
     * accessed with the transaction will not reflect local changes that have not
     * been committed. For this reason, it is required that all reads are
     * performed before any writes. Transactions must be performed while online.
     */
    e.prototype.transaction = function(t) {
        var e = this;
        this.W_();
        var n = new fr;
        return this.os.ds((function() {
            return new qu(e.os, e.Hu, t, n).run(), Promise.resolve();
        })), n.promise;
    }, e;
}();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * TransactionRunner encapsulates the logic needed to run and retry transactions
 * with backoff.
 */ function zu(t, e, n, r, i) {
    var o = new su(i), s = new Vr(n, o, r);
    return t.ds((function() {
        return kr(e, s);
    })), function() {
        o.i_(), t.ds((function() {
            return Lr(e, s);
        }));
    };
}

var Bu = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.U = t, this.timestampsInSnapshots = e, this.tf = n, this.ef = r, this.nf = i;
    }
    return t.prototype.sf = function(t) {
        switch (Xt(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return ie(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.if(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.rf(t);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return this.nf(oe(t.bytesValue));

          case 7 /* RefValue */ :
            return this.af(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.cf(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.uf(t.arrayValue);

          case 10 /* ObjectValue */ :
            return this.hf(t.mapValue);

          default:
            throw y();
        }
    }, t.prototype.hf = function(t) {
        var e = this, n = {};
        return _(t.fields || {}, (function(t, r) {
            n[t] = e.sf(r);
        })), n;
    }, t.prototype.cf = function(t) {
        return new wu(ie(t.latitude), ie(t.longitude));
    }, t.prototype.uf = function(t) {
        var e = this;
        return (t.values || []).map((function(t) {
            return e.sf(t);
        }));
    }, t.prototype.rf = function(t) {
        switch (this.tf) {
          case "previous":
            var e = function t(e) {
                var n = e.mapValue.fields.__previous_value__;
                return Ht(n) ? t(n) : n;
            }(t);
            return null == e ? null : this.sf(e);

          case "estimate":
            return this.if(Yt(t));

          default:
            return null;
        }
    }, t.prototype.if = function(t) {
        var e = re(t), n = new ot(e.seconds, e.nanos);
        return this.timestampsInSnapshots ? n : n.toDate();
    }, t.prototype.af = function(t) {
        var e = E.P(t);
        g(Ge(e));
        var n = new rt(e.get(1), e.get(3)), r = new N(e.u(5));
        return n.isEqual(this.U) || 
        // TODO(b/64130202): Somehow support foreign references.
        p("Document " + r + " contains a document reference within a different database (" + n.projectId + "/" + n.database + ") which is not supported. It will be treated as a reference in the current database (" + this.U.projectId + "/" + this.U.database + ") instead."), 
        this.ef(r);
    }, t;
}(), Gu = oi.uo, Qu = /** @class */ function() {
    function t(t) {
        var e, n, r, i;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new c(a.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        } else O("settings", "non-empty string", "host", t.host), this.host = t.host, U("settings", "boolean", "ssl", t.ssl), 
        this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (j("settings", t, [ "host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling", "ignoreUndefinedProperties" ]), 
        U("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, 
        U("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), U("settings", "boolean", "ignoreUndefinedProperties", t.ignoreUndefinedProperties), 
        // Nobody should set timestampsInSnapshots anymore, but the error depends on
        // whether they set it to true or false...
        !0 === t.timestampsInSnapshots ? p("The setting 'timestampsInSnapshots: true' is no longer required and should be removed.") : !1 === t.timestampsInSnapshots && p("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."), 
        this.timestampsInSnapshots = null === (n = t.timestampsInSnapshots) || void 0 === n || n, 
        this.ignoreUndefinedProperties = null !== (r = t.ignoreUndefinedProperties) && void 0 !== r && r, 
        U("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = oi.lo; else {
            if (t.cacheSizeBytes !== Gu && t.cacheSizeBytes < oi.ho) throw new c(a.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + oi.ho);
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        U("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), 
        this.experimentalForceLongPolling = null !== (i = t.experimentalForceLongPolling) && void 0 !== i && i;
    }
    return t.prototype.isEqual = function(t) {
        return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
    }, t;
}(), Wu = /** @class */ function() {
    // Note: We are using `MemoryComponentProvider` as a default
    // ComponentProvider to ensure backwards compatibility with the format
    // expected by the console build.
    function e(n, r, i, o) {
        var s = this;
        if (void 0 === i && (i = new nu), void 0 === o && (o = new iu), this.lf = i, this._f = o, 
        this.ff = null, 
        // Public for use in tests.
        // TODO(mikelehen): Use modularized initialization instead.
        this.df = new Nr, this.INTERNAL = {
            delete: function() {
                return t.__awaiter(s, void 0, void 0, (function() {
                    return t.__generator(this, (function(t) {
                        switch (t.label) {
                          case 0:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return this.wf(), [ 4 /*yield*/ , this.mf.terminate() ];

                          case 1:
                            // The client must be initalized to ensure that all subsequent API usage
                            // throws an exception.
                            return t.sent(), [ 2 /*return*/ ];
                        }
                    }));
                }));
            }
        }, "object" == typeof n.options) {
            // This is very likely a Firebase app object
            // TODO(b/34177605): Can we somehow use instanceof?
            var u = n;
            this.ff = u, this.T_ = e.Tf(u), this.Ef = u.name, this.If = new So(r);
        } else {
            var h = n;
            if (!h.projectId) throw new c(a.INVALID_ARGUMENT, "Must provide projectId");
            this.T_ = new rt(h.projectId, h.database), 
            // Use a default persistenceKey that lines up with FirebaseApp.
            this.Ef = "[DEFAULT]", this.If = new Do;
        }
        this.Af = new Qu({});
    }
    return Object.defineProperty(e.prototype, "Rf", {
        get: function() {
            return this.Pf || (
            // Lazy initialize UserDataReader once the settings are frozen
            this.Pf = new Nu(this.T_, this.Af.ignoreUndefinedProperties)), this.Pf;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.settings = function(t) {
        S("Firestore.settings", arguments, 1), L("Firestore.settings", "object", 1, t), 
        t.merge && 
        // Remove the property from the settings once the merge is completed
        delete (t = Object.assign(Object.assign({}, this.Af), t)).merge;
        var e = new Qu(t);
        if (this.mf && !this.Af.isEqual(e)) throw new c(a.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
        this.Af = e, void 0 !== e.credentials && (this.If = function(t) {
            if (!t) return new Do;
            switch (t.type) {
              case "gapi":
                var e = t.gf;
                // Make sure this really is a Gapi client.
                                return g(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new ko(e, t.iu || "0");

              case "provider":
                return t.gf;

              default:
                throw new c(a.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(e.credentials));
    }, e.prototype.enableNetwork = function() {
        return this.wf(), this.mf.enableNetwork();
    }, e.prototype.disableNetwork = function() {
        return this.wf(), this.mf.disableNetwork();
    }, e.prototype.enablePersistence = function(t) {
        var e, n;
        if (this.mf) throw new c(a.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
        var r = !1, i = !1;
        if (t && (void 0 !== t.experimentalTabSynchronization && p("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."), 
        r = null !== (n = null !== (e = t.synchronizeTabs) && void 0 !== e ? e : t.experimentalTabSynchronization) && void 0 !== n && n, 
        i = !!t.experimentalForceOwningTab && t.experimentalForceOwningTab, r && i)) throw new c(a.INVALID_ARGUMENT, "The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.");
        return this.yf(this.lf, this._f, {
            zl: !0,
            cacheSizeBytes: this.Af.cacheSizeBytes,
            synchronizeTabs: r,
            La: i
        });
    }, e.prototype.clearPersistence = function() {
        return t.__awaiter(this, void 0, void 0, (function() {
            var e, n = this;
            return t.__generator(this, (function(r) {
                if (void 0 !== this.mf && !this.mf.Z_) throw new c(a.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
                return e = new fr, [ 2 /*return*/ , (this.df.ps((function() {
                    return t.__awaiter(n, void 0, void 0, (function() {
                        var n;
                        return t.__generator(this, (function(t) {
                            switch (t.label) {
                              case 0:
                                return t.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , this.lf.clearPersistence(this.T_, this.Ef) ];

                              case 1:
                                return t.sent(), e.resolve(), [ 3 /*break*/ , 3 ];

                              case 2:
                                return n = t.sent(), e.reject(n), [ 3 /*break*/ , 3 ];

                              case 3:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), e.promise) ];
            }));
        }));
    }, e.prototype.terminate = function() {
        return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete();
    }, Object.defineProperty(e.prototype, "Vf", {
        get: function() {
            return this.wf(), this.mf.Z_;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.waitForPendingWrites = function() {
        return this.wf(), this.mf.waitForPendingWrites();
    }, e.prototype.onSnapshotsInSync = function(t) {
        if (this.wf(), ou(t)) return this.mf.X_(t);
        L("Firestore.onSnapshotsInSync", "function", 1, t);
        var e = {
            next: t
        };
        return this.mf.X_(e);
    }, e.prototype.wf = function() {
        return this.mf || 
        // Kick off starting the client but don't actually wait for it.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.yf(new nu, new iu, {
            zl: !1
        }), this.mf;
    }, e.prototype.pf = function() {
        return new nt(this.T_, this.Ef, this.Af.host, this.Af.ssl, this.Af.experimentalForceLongPolling);
    }, e.prototype.yf = function(t, e, n) {
        var r = this.pf();
        return this.mf = new ju(this.If, this.df), this.mf.start(r, t, e, n);
    }, e.Tf = function(t) {
        if (e = t.options, "projectId", !Object.prototype.hasOwnProperty.call(e, "projectId")) throw new c(a.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
        var e, n = t.options.projectId;
        /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */        if (!n || "string" != typeof n) throw new c(a.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
        return new rt(n);
    }, Object.defineProperty(e.prototype, "app", {
        get: function() {
            if (!this.ff) throw new c(a.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.ff;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.collection = function(t) {
        return S("Firestore.collection", arguments, 1), L("Firestore.collection", "non-empty string", 1, t), 
        this.wf(), new ua(E.P(t), this, 
        /* converter= */ null);
    }, e.prototype.doc = function(t) {
        return S("Firestore.doc", arguments, 1), L("Firestore.doc", "non-empty string", 1, t), 
        this.wf(), Yu.bf(E.P(t), this, 
        /* converter= */ null);
    }, e.prototype.collectionGroup = function(t) {
        if (S("Firestore.collectionGroup", arguments, 1), L("Firestore.collectionGroup", "non-empty string", 1, t), 
        t.indexOf("/") >= 0) throw new c(a.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.");
        return this.wf(), new oa(
        /**
 * Creates a new Query for a collection group query that matches all documents
 * within the provided collection group.
 */
        function(t) {
            return new Ln(E.g(), t);
        }(t), this, 
        /* converter= */ null);
    }, e.prototype.runTransaction = function(t) {
        var e = this;
        return S("Firestore.runTransaction", arguments, 1), L("Firestore.runTransaction", "function", 1, t), 
        this.wf().transaction((function(n) {
            return t(new Ku(e, n));
        }));
    }, e.prototype.batch = function() {
        return this.wf(), new Hu(this);
    }, Object.defineProperty(e, "logLevel", {
        get: function() {
            switch (f()) {
              case n.LogLevel.DEBUG:
                return "debug";

              case n.LogLevel.ERROR:
                return "error";

              case n.LogLevel.SILENT:
                return "silent";

              case n.LogLevel.WARN:
                return "warn";

              case n.LogLevel.INFO:
                return "info";

              case n.LogLevel.VERBOSE:
                return "verbose";

              default:
                // The default log level is error
                return "error";
            }
        },
        enumerable: !1,
        configurable: !0
    }), e.setLogLevel = function(t) {
        var e;
        S("Firestore.setLogLevel", arguments, 1), V("setLogLevel", [ "debug", "error", "silent", "warn", "info", "verbose" ], 1, t), 
        e = t, h.setLogLevel(e);
    }, 
    // Note: this is not a property because the minifier can't work correctly with
    // the way TypeScript compiler outputs properties.
    e.prototype.vf = function() {
        return this.Af.timestampsInSnapshots;
    }, 
    // Visible for testing.
    e.prototype.Sf = function() {
        return this.Af;
    }, e;
}(), Ku = /** @class */ function() {
    function t(t, e) {
        this.Df = t, this.Cf = e;
    }
    return t.prototype.get = function(t) {
        var e = this;
        S("Transaction.get", arguments, 1);
        var n = fa("Transaction.get", t, this.Df);
        return this.Cf.F_([ n.E_ ]).then((function(t) {
            if (!t || 1 !== t.length) return y();
            var r = t[0];
            if (r instanceof Sn) return new Xu(e.Df, n.E_, null, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.I_);
            if (r instanceof Dn) return new Xu(e.Df, n.E_, r, 
            /* fromCache= */ !1, 
            /* hasPendingWrites= */ !1, n.I_);
            throw y();
        }));
    }, t.prototype.set = function(t, e, n) {
        k("Transaction.set", arguments, 2, 3);
        var r = fa("Transaction.set", t, this.Df);
        n = aa("Transaction.set", n);
        var i = pa(r.I_, e, n), o = Du(this.Df.Rf, "Transaction.set", r.E_, i, null !== r.I_, n);
        return this.Cf.set(r.E_, o), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return "string" == typeof e || e instanceof au ? (x("Transaction.update", arguments, 3), 
        r = fa("Transaction.update", t, this.Df), i = xu(this.Df.Rf, "Transaction.update", r.E_, e, n, o)) : (S("Transaction.update", arguments, 2), 
        r = fa("Transaction.update", t, this.Df), i = Su(this.Df.Rf, "Transaction.update", r.E_, e)), 
        this.Cf.update(r.E_, i), this;
    }, t.prototype.delete = function(t) {
        S("Transaction.delete", arguments, 1);
        var e = fa("Transaction.delete", t, this.Df);
        return this.Cf.delete(e.E_), this;
    }, t;
}(), Hu = /** @class */ function() {
    function t(t) {
        this.Df = t, this.Nf = [], this.Ff = !1;
    }
    return t.prototype.set = function(t, e, n) {
        k("WriteBatch.set", arguments, 2, 3), this.$f();
        var r = fa("WriteBatch.set", t, this.Df);
        n = aa("WriteBatch.set", n);
        var i = pa(r.I_, e, n), o = Du(this.Df.Rf, "WriteBatch.set", r.E_, i, null !== r.I_, n);
        return this.Nf = this.Nf.concat(o.A_(r.E_, un.Ge())), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s];
        return this.$f(), "string" == typeof e || e instanceof au ? (x("WriteBatch.update", arguments, 3), 
        r = fa("WriteBatch.update", t, this.Df), i = xu(this.Df.Rf, "WriteBatch.update", r.E_, e, n, o)) : (S("WriteBatch.update", arguments, 2), 
        r = fa("WriteBatch.update", t, this.Df), i = Su(this.Df.Rf, "WriteBatch.update", r.E_, e)), 
        this.Nf = this.Nf.concat(i.A_(r.E_, un.exists(!0))), this;
    }, t.prototype.delete = function(t) {
        S("WriteBatch.delete", arguments, 1), this.$f();
        var e = fa("WriteBatch.delete", t, this.Df);
        return this.Nf = this.Nf.concat(new bn(e.E_, un.Ge())), this;
    }, t.prototype.commit = function() {
        return this.$f(), this.Ff = !0, this.Nf.length > 0 ? this.Df.wf().write(this.Nf) : Promise.resolve();
    }, t.prototype.$f = function() {
        if (this.Ff) throw new c(a.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
}(), Yu = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        return (i = e.call(this, n.T_, t, r) || this).E_ = t, i.firestore = n, i.I_ = r, 
        i.mf = i.firestore.wf(), i;
    }
    return t.__extends(n, e), n.bf = function(t, e, r) {
        if (t.length % 2 != 0) throw new c(a.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.R() + " has " + t.length);
        return new n(new N(t), e, r);
    }, Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.E_.path._();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            return new ua(this.E_.path.h(), this.firestore, this.I_);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.E_.path.R();
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.collection = function(t) {
        if (S("DocumentReference.collection", arguments, 1), L("DocumentReference.collection", "non-empty string", 1, t), 
        !t) throw new c(a.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
        var e = E.P(t);
        return new ua(this.E_.path.child(e), this.firestore, 
        /* converter= */ null);
    }, n.prototype.isEqual = function(t) {
        if (!(t instanceof n)) throw z("isEqual", "DocumentReference", 1, t);
        return this.firestore === t.firestore && this.E_.isEqual(t.E_) && this.I_ === t.I_;
    }, n.prototype.set = function(t, e) {
        k("DocumentReference.set", arguments, 1, 2), e = aa("DocumentReference.set", e);
        var n = pa(this.I_, t, e), r = Du(this.firestore.Rf, "DocumentReference.set", this.E_, n, null !== this.I_, e);
        return this.mf.write(r.A_(this.E_, un.Ge()));
    }, n.prototype.update = function(t, e) {
        for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
        return "string" == typeof t || t instanceof au ? (x("DocumentReference.update", arguments, 2), 
        n = xu(this.firestore.Rf, "DocumentReference.update", this.E_, t, e, r)) : (S("DocumentReference.update", arguments, 1), 
        n = Su(this.firestore.Rf, "DocumentReference.update", this.E_, t)), this.mf.write(n.A_(this.E_, un.exists(!0)));
    }, n.prototype.delete = function() {
        return S("DocumentReference.delete", arguments, 0), this.mf.write([ new bn(this.E_, un.Ge()) ]);
    }, n.prototype.onSnapshot = function() {
        for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
        k("DocumentReference.onSnapshot", arguments, 1, 4);
        var s = {
            includeMetadataChanges: !1
        }, u = 0;
        "object" != typeof i[u] || ou(i[u]) || (j("DocumentReference.onSnapshot", s = i[u], [ "includeMetadataChanges" ]), 
        U("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), 
        u++);
        var a = {
            includeMetadataChanges: s.includeMetadataChanges
        };
        if (ou(i[u])) {
            var c = i[u];
            i[u] = null === (t = c.next) || void 0 === t ? void 0 : t.bind(c), i[u + 1] = null === (e = c.error) || void 0 === e ? void 0 : e.bind(c), 
            i[u + 2] = null === (n = c.complete) || void 0 === n ? void 0 : n.bind(c);
        } else L("DocumentReference.onSnapshot", "function", u, i[u]), R("DocumentReference.onSnapshot", "function", u + 1, i[u + 1]), 
        R("DocumentReference.onSnapshot", "function", u + 2, i[u + 2]);
        var h = {
            next: function(t) {
                i[u] && i[u](r.xf(t));
            },
            error: i[u + 1],
            complete: i[u + 2]
        };
        return this.mf.listen(On(this.E_.path), a, h);
    }, n.prototype.get = function(t) {
        var e = this;
        k("DocumentReference.get", arguments, 0, 1), ha("DocumentReference.get", t);
        var n = this.firestore.wf();
        return t && "cache" === t.source ? n.z_(this.E_).then((function(t) {
            return new Xu(e.firestore, e.E_, t, 
            /*fromCache=*/ !0, t instanceof Dn && t.Ye, e.I_);
        })) : n.H_(this.E_, t).then((function(t) {
            return e.xf(t);
        }));
    }, n.prototype.withConverter = function(t) {
        return new n(this.E_, this.firestore, t);
    }, 
    /**
     * Converts a ViewSnapshot that contains the current document to a
     * DocumentSnapshot.
     */
    n.prototype.xf = function(t) {
        var e = t.docs.get(this.E_);
        return new Xu(this.firestore, this.E_, e, t.fromCache, t.hasPendingWrites, this.I_);
    }, n;
}(bu), $u = /** @class */ function() {
    function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e;
    }
    return t.prototype.isEqual = function(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }, t;
}(), Xu = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.Df = t, this.E_ = e, this.kf = n, this.Mf = r, this.Of = i, this.I_ = o;
    }
    return t.prototype.data = function(t) {
        var e = this;
        if (k("DocumentSnapshot.data", arguments, 0, 1), t = ca("DocumentSnapshot.data", t), 
        this.kf) {
            // We only want to use the converter and create a new DocumentSnapshot
            // if a converter has been provided.
            if (this.I_) {
                var n = new Zu(this.Df, this.E_, this.kf, this.Mf, this.Of, 
                /* converter= */ null);
                return this.I_.fromFirestore(n, t);
            }
            return new Bu(this.Df.T_, this.Df.vf(), t.serverTimestamps || "none", (function(t) {
                return new Yu(t, e.Df, /* converter= */ null);
            }), (function(t) {
                return new et(t);
            })).sf(this.kf.sn());
        }
    }, t.prototype.get = function(t, e) {
        var n = this;
        if (k("DocumentSnapshot.get", arguments, 1, 2), e = ca("DocumentSnapshot.get", e), 
        this.kf) {
            var r = this.kf.data().field(Pu("DocumentSnapshot.get", t, this.E_));
            if (null !== r) return new Bu(this.Df.T_, this.Df.vf(), e.serverTimestamps || "none", (function(t) {
                return new Yu(t, n.Df, n.I_);
            }), (function(t) {
                return new et(t);
            })).sf(r);
        }
    }, Object.defineProperty(t.prototype, "id", {
        get: function() {
            return this.E_.path._();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ref", {
        get: function() {
            return new Yu(this.E_, this.Df, this.I_);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "exists", {
        get: function() {
            return null !== this.kf;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "metadata", {
        get: function() {
            return new $u(this.Of, this.Mf);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw z("isEqual", "DocumentSnapshot", 1, e);
        return this.Df === e.Df && this.Mf === e.Mf && this.E_.isEqual(e.E_) && (null === this.kf ? null === e.kf : this.kf.isEqual(e.kf)) && this.I_ === e.I_;
    }, t;
}(), Zu = /** @class */ function(e) {
    function n() {
        return null !== e && e.apply(this, arguments) || this;
    }
    return t.__extends(n, e), n.prototype.data = function(t) {
        return e.prototype.data.call(this, t);
    }, n;
}(Xu);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// settings() defaults:
function Ju(t, e, n, r, i, o, s) {
    var u;
    if (i.p()) {
        if ("array-contains" /* ARRAY_CONTAINS */ === o || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === o) throw new c(a.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
        if ("in" /* IN */ === o || "not-in" /* NOT_IN */ === o) {
            na(s, o);
            for (var h = [], f = 0, l = s; f < l.length; f++) {
                var p = l[f];
                h.push(ea(r, t, p));
            }
            u = {
                arrayValue: {
                    values: h
                }
            };
        } else u = ea(r, t, s);
    } else "in" /* IN */ !== o && "not-in" /* NOT_IN */ !== o && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== o || na(s, o), 
    u = ku(n, e, s, 
    /* allowArrays= */ "in" /* IN */ === o || "not-in" /* NOT_IN */ === o);
    var d = Yn.create(i, o, u);
    return function(t, e) {
        if (e.un()) {
            var n = Cn(t);
            if (null !== n && !n.isEqual(e.field)) throw new c(a.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
            var r = Vn(t);
            null !== r && ra(t, e.field, r);
        }
        var i = function(t, e) {
            for (var n = 0, r = t.filters; n < r.length; n++) {
                var i = r[n];
                if (e.indexOf(i.op) >= 0) return i.op;
            }
            return null;
        }(t, 
        /**
 * Given an operator, returns the set of operators that cannot be used with it.
 *
 * Operators in a query must adhere to the following set of rules:
 * 1. Only one array operator is allowed.
 * 2. Only one disjunctive operator is allowed.
 * 3. NOT_EQUAL cannot be used with another NOT_EQUAL operator.
 * 4. NOT_IN cannot be used with array, disjunctive, or NOT_EQUAL operators.
 *
 * Array operators: ARRAY_CONTAINS, ARRAY_CONTAINS_ANY
 * Disjunctive operators: IN, ARRAY_CONTAINS_ANY, NOT_IN
 */
        function(t) {
            switch (t) {
              case "!=" /* NOT_EQUAL */ :
                return [ "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ];

              case "array-contains" /* ARRAY_CONTAINS */ :
                return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "not-in" /* NOT_IN */ ];

              case "in" /* IN */ :
                return [ "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

              case "array-contains-any" /* ARRAY_CONTAINS_ANY */ :
                return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

              case "not-in" /* NOT_IN */ :
                return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ , "!=" /* NOT_EQUAL */ ];

              default:
                return [];
            }
        }(e.op));
        if (null !== i) 
        // Special case when it's a duplicate op to give a slightly clearer error message.
        throw i === e.op ? new c(a.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new c(a.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.");
    }(t, d), d;
}

function ta(t, e, n) {
    if (null !== t.startAt) throw new c(a.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
    if (null !== t.endAt) throw new c(a.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
    var r = new ar(e, n);
    return function(t, e) {
        if (null === Vn(t)) {
            // This is the first order by. It must match any inequality.
            var n = Cn(t);
            null !== n && ra(t, n, e.field);
        }
    }(t, r), r
    /**
 * Create a Bound from a query and a document.
 *
 * Note that the Bound will always include the key of the document
 * and so only the provided document will compare equal to the returned
 * position.
 *
 * Will throw if the document does not contain all fields of the order by
 * of the query or if any of the fields in the order by are an uncommitted
 * server timestamp.
 */
    /**
 * Parses the given documentIdValue into a ReferenceValue, throwing
 * appropriate errors if the value is anything other than a DocumentReference
 * or String, or if the string is malformed.
 */;
}

function ea(t, e, n) {
    if ("string" == typeof n) {
        if ("" === n) throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!Mn(e) && -1 !== n.indexOf("/")) throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
        var r = e.path.child(E.P(n));
        if (!N.F(r)) throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
        return se(t, new N(r));
    }
    if (n instanceof bu) return se(t, n.E_);
    throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + F(n) + ".");
}

/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */ function na(t, e) {
    if (!Array.isArray(t) || 0 === t.length) throw new c(a.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
    if (t.length > 10) throw new c(a.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
    if ("in" /* IN */ === e || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === e) {
        if (t.indexOf(null) >= 0) throw new c(a.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array.");
        if (t.filter((function(t) {
            return Number.isNaN(t);
        })).length > 0) throw new c(a.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.");
    }
}

function ra(t, e, n) {
    if (!n.isEqual(e)) throw new c(a.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.");
}

function ia(t) {
    if (Pn(t) && 0 === t.rn.length) throw new c(a.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}

var oa = /** @class */ function() {
    function e(t, e, n) {
        this.Lf = t, this.firestore = e, this.I_ = n;
    }
    return e.prototype.where = function(t, n, r) {
        // TODO(ne-queries): Add 'not-in' and '!=' to validation.
        var i;
        S("Query.where", arguments, 3), q("Query.where", 3, r), i = "not-in" === n || "!=" === n ? n : V("Query.where", [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , "==" /* EQUAL */ , ">=" /* GREATER_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , "array-contains" /* ARRAY_CONTAINS */ , "in" /* IN */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ ], 2, n);
        var o = Pu("Query.where", t), s = Ju(this.Lf, "Query.where", this.firestore.Rf, this.firestore.T_, o, i, r);
        return new e(function(t, e) {
            var n = t.filters.concat([ e ]);
            return new Ln(t.path, t.collectionGroup, t.rn.slice(), n, t.limit, t.on, t.startAt, t.endAt);
        }(this.Lf, s), this.firestore, this.I_);
    }, e.prototype.orderBy = function(t, n) {
        var r;
        if (k("Query.orderBy", arguments, 1, 2), R("Query.orderBy", "non-empty string", 2, n), 
        void 0 === n || "asc" === n) r = "asc" /* ASCENDING */; else {
            if ("desc" !== n) throw new c(a.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
            r = "desc" /* DESCENDING */;
        }
        var i = Pu("Query.orderBy", t), o = ta(this.Lf, i, r);
        return new e(function(t, e) {
            // TODO(dimond): validate that orderBy does not list the same key twice.
            var n = t.rn.concat([ e ]);
            return new Ln(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.on, t.startAt, t.endAt);
        }(this.Lf, o), this.firestore, this.I_);
    }, e.prototype.limit = function(t) {
        return S("Query.limit", arguments, 1), L("Query.limit", "number", 1, t), B("Query.limit", 1, t), 
        new e(jn(this.Lf, t, "F" /* First */), this.firestore, this.I_);
    }, e.prototype.limitToLast = function(t) {
        return S("Query.limitToLast", arguments, 1), L("Query.limitToLast", "number", 1, t), 
        B("Query.limitToLast", 1, t), new e(jn(this.Lf, t, "L" /* Last */), this.firestore, this.I_);
    }, e.prototype.startAt = function(t) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        x("Query.startAt", arguments, 1);
        var i = this.Bf("Query.startAt", t, n, 
        /*before=*/ !0);
        return new e(zn(this.Lf, i), this.firestore, this.I_);
    }, e.prototype.startAfter = function(t) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        x("Query.startAfter", arguments, 1);
        var i = this.Bf("Query.startAfter", t, n, 
        /*before=*/ !1);
        return new e(zn(this.Lf, i), this.firestore, this.I_);
    }, e.prototype.endBefore = function(t) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        x("Query.endBefore", arguments, 1);
        var i = this.Bf("Query.endBefore", t, n, 
        /*before=*/ !0);
        return new e(Bn(this.Lf, i), this.firestore, this.I_);
    }, e.prototype.endAt = function(t) {
        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        x("Query.endAt", arguments, 1);
        var i = this.Bf("Query.endAt", t, n, 
        /*before=*/ !1);
        return new e(Bn(this.Lf, i), this.firestore, this.I_);
    }, e.prototype.isEqual = function(t) {
        if (!(t instanceof e)) throw z("isEqual", "Query", 1, t);
        return this.firestore === t.firestore && Gn(this.Lf, t.Lf) && this.I_ === t.I_;
    }, e.prototype.withConverter = function(t) {
        return new e(this.Lf, this.firestore, t);
    }, 
    /** Helper function to create a bound from a document or fields */ e.prototype.Bf = function(e, n, r, i) {
        if (q(e, 1, n), n instanceof Xu) return S(e, t.__spreadArrays([ n ], r), 1), function(t, e, n, r, i) {
            if (!r) throw new c(a.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "().");
            // Because people expect to continue/end a query at the exact document
            // provided, we need to use the implicit sort order rather than the explicit
            // sort order, because it's guaranteed to contain the document key. That way
            // the position becomes unambiguous and the query continues/ends exactly at
            // the provided document. Without the key (by using the explicit sort
            // orders), multiple documents could match the position, yielding duplicate
            // results.
            for (var o = [], s = 0, u = Fn(t); s < u.length; s++) {
                var h = u[s];
                if (h.field.p()) o.push(se(e, r.key)); else {
                    var f = r.field(h.field);
                    if (Ht(f)) throw new c(a.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + h.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                    if (null === f) {
                        var l = h.field.R();
                        throw new c(a.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + l + "' (used as the orderBy) does not exist.");
                    }
                    o.push(f);
                }
            }
            return new ir(o, i);
        }(this.Lf, this.firestore.T_, e, n.kf, i);
        var o = [ n ].concat(r);
        return function(t, e, n, r, i, o) {
            // Use explicit order by's because it has to match the query the user made
            var s = t.rn;
            if (i.length > s.length) throw new c(a.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
            for (var u = [], h = 0; h < i.length; h++) {
                var f = i[h];
                if (s[h].field.p()) {
                    if ("string" != typeof f) throw new c(a.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof f);
                    if (!Mn(t) && -1 !== f.indexOf("/")) throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + f + "' contains a slash.");
                    var l = t.path.child(E.P(f));
                    if (!N.F(l)) throw new c(a.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + l + "' is not because it contains an odd number of segments.");
                    var p = new N(l);
                    u.push(se(e, p));
                } else {
                    var d = ku(n, r, f);
                    u.push(d);
                }
            }
            return new ir(u, o);
        }(this.Lf, this.firestore.T_, this.firestore.Rf, e, o, i);
    }, e.prototype.onSnapshot = function() {
        for (var t, e, n, r = this, i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
        k("Query.onSnapshot", arguments, 1, 4);
        var s = {}, u = 0;
        if ("object" != typeof i[u] || ou(i[u]) || (j("Query.onSnapshot", s = i[u], [ "includeMetadataChanges" ]), 
        U("Query.onSnapshot", "boolean", "includeMetadataChanges", s.includeMetadataChanges), 
        u++), ou(i[u])) {
            var a = i[u];
            i[u] = null === (t = a.next) || void 0 === t ? void 0 : t.bind(a), i[u + 1] = null === (e = a.error) || void 0 === e ? void 0 : e.bind(a), 
            i[u + 2] = null === (n = a.complete) || void 0 === n ? void 0 : n.bind(a);
        } else L("Query.onSnapshot", "function", u, i[u]), R("Query.onSnapshot", "function", u + 1, i[u + 1]), 
        R("Query.onSnapshot", "function", u + 2, i[u + 2]);
        var c = {
            next: function(t) {
                i[u] && i[u](new sa(r.firestore, r.Lf, t, r.I_));
            },
            error: i[u + 1],
            complete: i[u + 2]
        };
        return ia(this.Lf), this.firestore.wf().listen(this.Lf, s, c);
    }, e.prototype.get = function(t) {
        var e = this;
        k("Query.get", arguments, 0, 1), ha("Query.get", t), ia(this.Lf);
        var n = this.firestore.wf();
        return (t && "cache" === t.source ? n.Y_(this.Lf) : n.J_(this.Lf, t)).then((function(t) {
            return new sa(e.firestore, e.Lf, t, e.I_);
        }));
    }, e;
}(), sa = /** @class */ function() {
    function t(t, e, n, r) {
        this.Df = t, this.qf = e, this.Uf = n, this.I_ = r, this.Qf = null, this.Wf = null, 
        this.metadata = new $u(n.hasPendingWrites, n.fromCache);
    }
    return Object.defineProperty(t.prototype, "docs", {
        get: function() {
            var t = [];
            return this.forEach((function(e) {
                return t.push(e);
            })), t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "empty", {
        get: function() {
            return this.Uf.docs.m();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.Uf.docs.size;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.forEach = function(t, e) {
        var n = this;
        k("QuerySnapshot.forEach", arguments, 1, 2), L("QuerySnapshot.forEach", "function", 1, t), 
        this.Uf.docs.forEach((function(r) {
            t.call(e, n.jf(r, n.metadata.fromCache, n.Uf.Qt.has(r.key)));
        }));
    }, Object.defineProperty(t.prototype, "query", {
        get: function() {
            return new oa(this.qf, this.Df, this.I_);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.docChanges = function(t) {
        t && (j("QuerySnapshot.docChanges", t, [ "includeMetadataChanges" ]), U("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges));
        var e = !(!t || !t.includeMetadataChanges);
        if (e && this.Uf.jt) throw new c(a.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.Qf && this.Wf === e || (this.Qf = 
        /**
     * Calculates the array of DocumentChanges for a given ViewSnapshot.
     *
     * Exported for testing.
     *
     * @param snapshot The ViewSnapshot that represents the expected state.
     * @param includeMetadataChanges Whether to include metadata changes.
     * @param converter A factory function that returns a QueryDocumentSnapshot.
     * @return An object that matches the DocumentChange API.
     */
        function(t, e, n) {
            if (t.Ut.m()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                var r = 0;
                return t.docChanges.map((function(e) {
                    var i = n(e.doc, t.fromCache, t.Qt.has(e.doc.key));
                    return e.doc, {
                        type: "added",
                        doc: i,
                        oldIndex: -1,
                        newIndex: r++
                    };
                }));
            }
            // A DocumentSet that is updated incrementally as changes are applied to use
            // to lookup the index of a document.
            var i = t.Ut;
            return t.docChanges.filter((function(t) {
                return e || 3 /* Metadata */ !== t.type;
            })).map((function(e) {
                var r = n(e.doc, t.fromCache, t.Qt.has(e.doc.key)), o = -1, s = -1;
                return 0 /* Added */ !== e.type && (o = i.indexOf(e.doc.key), i = i.delete(e.doc.key)), 
                1 /* Removed */ !== e.type && (s = (i = i.add(e.doc)).indexOf(e.doc.key)), {
                    type: la(e.type),
                    doc: r,
                    oldIndex: o,
                    newIndex: s
                };
            }));
        }(this.Uf, e, this.jf.bind(this)), this.Wf = e), this.Qf;
    }, 
    /** Check the equality. The call can be very expensive. */ t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) throw z("isEqual", "QuerySnapshot", 1, e);
        return this.Df === e.Df && Gn(this.qf, e.qf) && this.Uf.isEqual(e.Uf) && this.I_ === e.I_;
    }, t.prototype.jf = function(t, e, n) {
        return new Zu(this.Df, t.key, t, e, n, this.I_);
    }, t;
}(), ua = /** @class */ function(e) {
    function n(t, n, r) {
        var i = this;
        if ((i = e.call(this, On(t), n, r) || this).Kf = t, t.length % 2 != 1) throw new c(a.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.R() + " has " + t.length);
        return i;
    }
    return t.__extends(n, e), Object.defineProperty(n.prototype, "id", {
        get: function() {
            return this.Lf.path._();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "parent", {
        get: function() {
            var t = this.Lf.path.h();
            return t.m() ? null : new Yu(new N(t), this.firestore, 
            /* converter= */ null);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(n.prototype, "path", {
        get: function() {
            return this.Lf.path.R();
        },
        enumerable: !1,
        configurable: !0
    }), n.prototype.doc = function(t) {
        k("CollectionReference.doc", arguments, 0, 1), 
        // We allow omission of 'pathString' but explicitly prohibit passing in both
        // 'undefined' and 'null'.
        0 === arguments.length && (t = K.k()), L("CollectionReference.doc", "non-empty string", 1, t);
        var e = E.P(t);
        return Yu.bf(this.Lf.path.child(e), this.firestore, this.I_);
    }, n.prototype.add = function(t) {
        S("CollectionReference.add", arguments, 1), L("CollectionReference.add", "object", 1, this.I_ ? this.I_.toFirestore(t) : t);
        var e = this.doc();
        return e.set(t).then((function() {
            return e;
        }));
    }, n.prototype.withConverter = function(t) {
        return new n(this.Kf, this.firestore, t);
    }, n;
}(oa);

function aa(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (j(t, e, [ "merge", "mergeFields" ]), U(t, "boolean", "merge", e.merge), function(t, e, n, r, i) {
        void 0 !== r && function(t, e, n, r, i) {
            if (!(r instanceof Array)) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + F(r));
            for (var o = 0; o < r.length; ++o) if (!i(r[o])) throw new c(a.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + F(r[o]));
        }(t, e, n, r, i);
    }(t, "mergeFields", "a string or a FieldPath", e.mergeFields, (function(t) {
        return "string" == typeof t || t instanceof au;
    })), void 0 !== e.mergeFields && void 0 !== e.merge) throw new c(a.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
    return e;
}

function ca(t, e) {
    return void 0 === e ? {} : (j(t, e, [ "serverTimestamps" ]), P(t, 0, "serverTimestamps", e.serverTimestamps, [ "estimate", "previous", "none" ]), 
    e);
}

function ha(t, e) {
    R(t, "object", 1, e), e && (j(t, e, [ "source" ]), P(t, 0, "source", e.source, [ "default", "server", "cache" ]));
}

function fa(t, e, n) {
    if (e instanceof bu) {
        if (e.firestore !== n) throw new c(a.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
        return e;
    }
    throw z(t, "DocumentReference", 1, e);
}

function la(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return y();
    }
}

/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function pa(t, e, n) {
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e;
}

var da = {
    Firestore: Wu,
    GeoPoint: wu,
    Timestamp: ot,
    Blob: et,
    Transaction: Ku,
    WriteBatch: Hu,
    DocumentReference: Yu,
    DocumentSnapshot: Xu,
    Query: oa,
    QueryDocumentSnapshot: Zu,
    QuerySnapshot: sa,
    CollectionReference: ua,
    FieldPath: au,
    FieldValue: gu,
    setLogLevel: Wu.setLogLevel,
    CACHE_SIZE_UNLIMITED: Gu
};

/**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase The FirebaseNamespace to register Firestore with
 * @param firestoreFactory A factory function that returns a new Firestore
 *    instance.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */ function va(t) {
    !function(t, e) {
        t.INTERNAL.registerComponent(new o.Component("firestore", (function(t) {
            return function(t, e) {
                var n = new iu, r = new ru(n);
                return new Wu(t, e, r, n);
            }(t.getProvider("app").getImmediate(), t.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, da)));
    }(t), t.registerVersion("@firebase/firestore", "1.16.7");
}

va(u.default), exports.__PRIVATE_registerFirestore = va;
//# sourceMappingURL=index.cjs.js.map


/***/ }),

/***/ "./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@firebase/webchannel-wrapper/dist/index.esm.js ***!
  \*********************************************************************/
/*! exports provided: default, ErrorCode, EventType, WebChannel, XhrIo, createWebChannelTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorCode", function() { return esm_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return esm_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebChannel", function() { return esm_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrIo", function() { return esm_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWebChannelTransport", function() { return esm_1; });
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
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var g, goog = goog || {}, k = commonjsGlobal || self;
function aa() { }
function ba(a) { var b = typeof a; return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"; }
function ca(a) { var b = ba(a); return "array" == b || "object" == b && "number" == typeof a.length; }
function n(a) { var b = typeof a; return "object" == b && null != a || "function" == b; }
function da(a) { return Object.prototype.hasOwnProperty.call(a, ea) && a[ea] || (a[ea] = ++fa); }
var ea = "closure_uid_" + (1E9 * Math.random() >>> 0), fa = 0;
function ha(a, b, c) { return a.call.apply(a.bind, arguments); }
function ja(a, b, c) { if (!a)
    throw Error(); if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () { var e = Array.prototype.slice.call(arguments); Array.prototype.unshift.apply(e, d); return a.apply(b, e); };
} return function () { return a.apply(b, arguments); }; }
function p(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? p = ha : p = ja; return p.apply(null, arguments); }
function ka(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function () { var d = c.slice(); d.push.apply(d, arguments); return a.apply(this, d); }; }
var q = Date.now;
function r(a, b) { function c() { } c.prototype = b.prototype; a.S = b.prototype; a.prototype = new c; a.prototype.constructor = a; }
function u() { this.j = this.j; this.i = this.i; }
var la = 0;
u.prototype.j = !1;
u.prototype.ja = function () { if (!this.j && (this.j = !0, this.G(), 0 != la)) {
    var a = da(this);
} };
u.prototype.G = function () { if (this.i)
    for (; this.i.length;)
        this.i.shift()(); };
var na = Array.prototype.indexOf ? function (a, b) { return Array.prototype.indexOf.call(a, b, void 0); } : function (a, b) { if ("string" === typeof a)
    return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0); for (var c = 0; c < a.length; c++)
    if (c in a && a[c] === b)
        return c; return -1; }, oa = Array.prototype.forEach ? function (a, b, c) { Array.prototype.forEach.call(a, b, c); } : function (a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
    f in e && b.call(c, e[f], f, a); };
function pa(a) { a: {
    var b = qa;
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a;
        }
    b = -1;
} return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]; }
function ra(a) { return Array.prototype.concat.apply([], arguments); }
function sa(a) { var b = a.length; if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++)
        c[d] = a[d];
    return c;
} return []; }
function ta(a) { return /^[\s\xa0]*$/.test(a); }
var ua = String.prototype.trim ? function (a) { return a.trim(); } : function (a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]; };
function v(a, b) { return -1 != a.indexOf(b); }
function xa(a, b) { return a < b ? -1 : a > b ? 1 : 0; }
var w;
a: {
    var ya = k.navigator;
    if (ya) {
        var za = ya.userAgent;
        if (za) {
            w = za;
            break a;
        }
    }
    w = "";
}
function Aa(a, b, c) { for (var d in a)
    b.call(c, a[d], d, a); }
function Ba(a) { var b = {}; for (var c in a)
    b[c] = a[c]; return b; }
var Ca = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Da(a, b) { var c, d; for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
        a[c] = d[c];
    for (var f = 0; f < Ca.length; f++)
        c = Ca[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
} }
function Ea(a) { Ea[" "](a); return a; }
Ea[" "] = aa;
function Fa(a, b) { var c = Ga; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a); }
var Ha = v(w, "Opera"), x = v(w, "Trident") || v(w, "MSIE"), Ia = v(w, "Edge"), Ja = Ia || x, Ka = v(w, "Gecko") && !(v(w.toLowerCase(), "webkit") && !v(w, "Edge")) && !(v(w, "Trident") || v(w, "MSIE")) && !v(w, "Edge"), La = v(w.toLowerCase(), "webkit") && !v(w, "Edge");
function Ma() { var a = k.document; return a ? a.documentMode : void 0; }
var Na;
a: {
    var Oa = "", Pa = function () { var a = w; if (Ka)
        return /rv:([^\);]+)(\)|;)/.exec(a); if (Ia)
        return /Edge\/([\d\.]+)/.exec(a); if (x)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (La)
        return /WebKit\/(\S+)/.exec(a); if (Ha)
        return /(?:Version)[ \/]?(\S+)/.exec(a); }();
    Pa && (Oa = Pa ? Pa[1] : "");
    if (x) {
        var Qa = Ma();
        if (null != Qa && Qa > parseFloat(Oa)) {
            Na = String(Qa);
            break a;
        }
    }
    Na = Oa;
}
var Ga = {};
function Ra(a) { return Fa(a, function () { {
    var b = 0;
    var e = ua(String(Na)).split("."), f = ua(String(a)).split("."), h = Math.max(e.length, f.length);
    for (var m = 0; 0 == b && m < h; m++) {
        var c = e[m] || "", d = f[m] || "";
        do {
            c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
            d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
            if (0 == c[0].length && 0 == d[0].length)
                break;
            b = xa(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || xa(0 == c[2].length, 0 == d[2].length) || xa(c[2], d[2]);
            c = c[3];
            d = d[3];
        } while (0 == b);
    }
} return 0 <= b; }); }
var Sa;
if (k.document && x) {
    var Ta = Ma();
    Sa = Ta ? Ta : parseInt(Na, 10) || void 0;
}
else
    Sa = void 0;
var Ua = Sa;
var Va = !x || 9 <= Number(Ua), Wa = x && !Ra("9"), Xa = function () { if (!k.addEventListener || !Object.defineProperty)
    return !1; var a = !1, b = Object.defineProperty({}, "passive", { get: function () { a = !0; } }); try {
    k.addEventListener("test", aa, b), k.removeEventListener("test", aa, b);
}
catch (c) { } return a; }();
function y(a, b) { this.type = a; this.a = this.target = b; this.defaultPrevented = !1; }
y.prototype.b = function () { this.defaultPrevented = !0; };
function A(a, b) {
    y.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.c = null;
    if (a) {
        var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;
        if (b = a.relatedTarget) {
            if (Ka) {
                a: {
                    try {
                        Ea(b.nodeName);
                        var e = !0;
                        break a;
                    }
                    catch (f) { }
                    e = !1;
                }
                e || (b = null);
            }
        }
        else
            "mouseover" ==
                c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey =
            a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Ya[a.pointerType] || "";
        this.c = a;
        a.defaultPrevented && this.b();
    }
}
r(A, y);
var Ya = { 2: "touch", 3: "pen", 4: "mouse" };
A.prototype.b = function () { A.S.b.call(this); var a = this.c; if (a.preventDefault)
    a.preventDefault();
else if (a.returnValue = !1, Wa)
    try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
            a.keyCode = -1;
    }
    catch (b) { } };
var C = "closure_listenable_" + (1E6 * Math.random() | 0), Za = 0;
function $a(a, b, c, d, e) { this.listener = a; this.proxy = null; this.src = b; this.type = c; this.capture = !!d; this.ca = e; this.key = ++Za; this.Y = this.Z = !1; }
function ab(a) { a.Y = !0; a.listener = null; a.proxy = null; a.src = null; a.ca = null; }
function bb(a) { this.src = a; this.a = {}; this.b = 0; }
bb.prototype.add = function (a, b, c, d, e) { var f = a.toString(); a = this.a[f]; a || (a = this.a[f] = [], this.b++); var h = cb(a, b, d, e); -1 < h ? (b = a[h], c || (b.Z = !1)) : (b = new $a(b, this.src, f, !!d, e), b.Z = c, a.push(b)); return b; };
function db(a, b) { var c = b.type; if (c in a.a) {
    var d = a.a[c], e = na(d, b), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && (ab(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
} }
function cb(a, b, c, d) { for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.Y && f.listener == b && f.capture == !!c && f.ca == d)
        return e;
} return -1; }
var eb = "closure_lm_" + (1E6 * Math.random() | 0), fb = {};
function hb(a, b, c, d, e) { if (d && d.once)
    return ib(a, b, c, d, e); if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        hb(a, b[f], c, d, e);
    return null;
} c = jb(c); return a && a[C] ? a.va(b, c, n(d) ? !!d.capture : !!d, e) : kb(a, b, c, !1, d, e); }
function kb(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    var h = n(e) ? !!e.capture : !!e;
    if (h && !Va)
        return null;
    var m = lb(a);
    m || (a[eb] = m = new bb(a));
    c = m.add(b, c, d, h, f);
    if (c.proxy)
        return c;
    d = mb();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
        Xa || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent)
        a.attachEvent(nb(b.toString()), d);
    else if (a.addListener && a.removeListener)
        a.addListener(d);
    else
        throw Error("addEventListener and attachEvent are unavailable.");
    return c;
}
function mb() { var a = ob, b = Va ? function (c) { return a.call(b.src, b.listener, c); } : function (c) { c = a.call(b.src, b.listener, c); if (!c)
    return c; }; return b; }
function ib(a, b, c, d, e) { if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        ib(a, b[f], c, d, e);
    return null;
} c = jb(c); return a && a[C] ? a.wa(b, c, n(d) ? !!d.capture : !!d, e) : kb(a, b, c, !0, d, e); }
function pb(a, b, c, d, e) { if (Array.isArray(b))
    for (var f = 0; f < b.length; f++)
        pb(a, b[f], c, d, e);
else
    (d = n(d) ? !!d.capture : !!d, c = jb(c), a && a[C]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = cb(f, c, d, e), -1 < c && (ab(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = lb(a)) && (b = a.a[b.toString()], a = -1, b && (a = cb(b, c, d, e)), (c = -1 < a ? b[a] : null) && rb(c)); }
function rb(a) { if ("number" !== typeof a && a && !a.Y) {
    var b = a.src;
    if (b && b[C])
        db(b.c, a);
    else {
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(nb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        (c = lb(b)) ? (db(c, a), 0 == c.b && (c.src = null, b[eb] = null)) : ab(a);
    }
} }
function nb(a) { return a in fb ? fb[a] : fb[a] = "on" + a; }
function sb(a, b) { var c = a.listener, d = a.ca || a.src; a.Z && rb(a); return c.call(d, b); }
function ob(a, b) { if (a.Y)
    return !0; if (!Va) {
    if (!b)
        a: {
            b = ["window", "event"];
            for (var c = k, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) {
                    b = null;
                    break a;
                }
            b = c;
        }
    b = new A(b, this);
    return sb(a, b);
} return sb(a, new A(b, this)); }
function lb(a) { a = a[eb]; return a instanceof bb ? a : null; }
var tb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function jb(a) { if ("function" == ba(a))
    return a; a[tb] || (a[tb] = function (b) { return a.handleEvent(b); }); return a[tb]; }
function D() { u.call(this); this.c = new bb(this); this.J = this; this.C = null; }
r(D, u);
D.prototype[C] = !0;
g = D.prototype;
g.addEventListener = function (a, b, c, d) { hb(this, a, b, c, d); };
g.removeEventListener = function (a, b, c, d) { pb(this, a, b, c, d); };
g.dispatchEvent = function (a) { var b, c = this.C; if (c)
    for (b = []; c; c = c.C)
        b.push(c); c = this.J; var d = a.type || a; if ("string" === typeof a)
    a = new y(a, c);
else if (a instanceof y)
    a.target = a.target || c;
else {
    var e = a;
    a = new y(d, c);
    Da(a, e);
} e = !0; if (b)
    for (var f = b.length - 1; 0 <= f; f--) {
        var h = a.a = b[f];
        e = ub(h, d, !0, a) && e;
    } h = a.a = c; e = ub(h, d, !0, a) && e; e = ub(h, d, !1, a) && e; if (b)
    for (f = 0; f < b.length; f++)
        h = a.a = b[f], e = ub(h, d, !1, a) && e; return e; };
g.G = function () { D.S.G.call(this); if (this.c) {
    var a = this.c, c;
    for (c in a.a) {
        for (var d = a.a[c], e = 0; e < d.length; e++)
            ab(d[e]);
        delete a.a[c];
        a.b--;
    }
} this.C = null; };
g.va = function (a, b, c, d) { return this.c.add(String(a), b, !1, c, d); };
g.wa = function (a, b, c, d) { return this.c.add(String(a), b, !0, c, d); };
function ub(a, b, c, d) { b = a.c.a[String(b)]; if (!b)
    return !0; b = b.concat(); for (var e = !0, f = 0; f < b.length; ++f) {
    var h = b[f];
    if (h && !h.Y && h.capture == c) {
        var m = h.listener, l = h.ca || h.src;
        h.Z && db(a.c, h);
        e = !1 !== m.call(l, d) && e;
    }
} return e && !d.defaultPrevented; }
var vb = k.JSON.stringify;
function wb() { this.b = this.a = null; }
var yb = new /** @class */ (function () {
    function class_1(a, b, c) {
        this.f = c;
        this.c = a;
        this.g = b;
        this.b = 0;
        this.a = null;
    }
    class_1.prototype.get = function () { var a; 0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c(); return a; };
    return class_1;
}())(function () { return new xb; }, function (a) { a.reset(); }, 100);
wb.prototype.add = function (a, b) { var c = yb.get(); c.set(a, b); this.b ? this.b.next = c : this.a = c; this.b = c; };
function zb() { var a = Ab, b = null; a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null); return b; }
function xb() { this.next = this.b = this.a = null; }
xb.prototype.set = function (a, b) { this.a = a; this.b = b; this.next = null; };
xb.prototype.reset = function () { this.next = this.b = this.a = null; };
function Bb(a) { k.setTimeout(function () { throw a; }, 0); }
function Cb(a, b) { Db || Eb(); Fb || (Db(), Fb = !0); Ab.add(a, b); }
var Db;
function Eb() { var a = k.Promise.resolve(void 0); Db = function () { a.then(Gb); }; }
var Fb = !1, Ab = new wb;
function Gb() { for (var a; a = zb();) {
    try {
        a.a.call(a.b);
    }
    catch (c) {
        Bb(c);
    }
    var b = yb;
    b.g(a);
    b.b < b.f && (b.b++, a.next = b.a, b.a = a);
} Fb = !1; }
function Hb(a, b) { D.call(this); this.b = a || 1; this.a = b || k; this.f = p(this.Ya, this); this.g = q(); }
r(Hb, D);
g = Hb.prototype;
g.aa = !1;
g.M = null;
g.Ya = function () { if (this.aa) {
    var a = q() - this.g;
    0 < a && a < .8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - a) : (this.M && (this.a.clearTimeout(this.M), this.M = null), this.dispatchEvent("tick"), this.aa && (Ib(this), this.start()));
} };
g.start = function () { this.aa = !0; this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q()); };
function Ib(a) { a.aa = !1; a.M && (a.a.clearTimeout(a.M), a.M = null); }
g.G = function () { Hb.S.G.call(this); Ib(this); delete this.a; };
function Jb(a, b, c) { if ("function" == ba(a))
    c && (a = p(a, c));
else if (a && "function" == typeof a.handleEvent)
    a = p(a.handleEvent, a);
else
    throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0); }
function Kb(a) { a.a = Jb(function () { a.a = null; a.c && (a.c = !1, Kb(a)); }, a.h); var b = a.b; a.b = null; a.g.apply(null, b); }
var Lb = /** @class */ (function (_super) {
    __extends(Lb, _super);
    function Lb(a, b, c) {
        var _this = _super.call(this) || this;
        _this.g = null != c ? a.bind(c) : a;
        _this.h = b;
        _this.b = null;
        _this.c = !1;
        _this.a = null;
        return _this;
    }
    Lb.prototype.f = function (a) { this.b = arguments; this.a ? this.c = !0 : Kb(this); };
    Lb.prototype.G = function () { _super.prototype.G.call(this); this.a && (k.clearTimeout(this.a), this.a = null, this.c = !1, this.b = null); };
    return Lb;
}(u));
function E(a) { u.call(this); this.b = a; this.a = {}; }
r(E, u);
var Mb = [];
function Nb(a, b, c, d) { Array.isArray(c) || (c && (Mb[0] = c.toString()), c = Mb); for (var e = 0; e < c.length; e++) {
    var f = hb(b, c[e], d || a.handleEvent, !1, a.b || a);
    if (!f)
        break;
    a.a[f.key] = f;
} }
function Ob(a) { Aa(a.a, function (b, c) { this.a.hasOwnProperty(c) && rb(b); }, a); a.a = {}; }
E.prototype.G = function () { E.S.G.call(this); Ob(this); };
E.prototype.handleEvent = function () { throw Error("EventHandler.handleEvent not implemented"); };
function Pb() { this.a = !0; }
function Qb(a, b, c, d, e, f) { a.info(function () { if (a.a)
    if (f) {
        var h = "";
        for (var m = f.split("&"), l = 0; l < m.length; l++) {
            var t = m[l].split("=");
            if (1 < t.length) {
                var B = t[0];
                t = t[1];
                var z = B.split("_");
                h = 2 <= z.length && "type" == z[1] ? h + (B + "=" + t + "&") : h + (B + "=redacted&");
            }
        }
    }
    else
        h = null;
else
    h = f; return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + h; }); }
function Rb(a, b, c, d, e, f, h) { a.info(function () { return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + h; }); }
function F(a, b, c, d) { a.info(function () { return "XMLHTTP TEXT (" + b + "): " + Sb(a, c) + (d ? " " + d : ""); }); }
function Tb(a, b) { a.info(function () { return "TIMEOUT: " + b; }); }
Pb.prototype.info = function () { };
function Sb(a, b) { if (!a.a)
    return b; if (!b)
    return null; try {
    var c = JSON.parse(b);
    if (c)
        for (a = 0; a < c.length; a++)
            if (Array.isArray(c[a])) {
                var d = c[a];
                if (!(2 > d.length)) {
                    var e = d[1];
                    if (Array.isArray(e) && !(1 > e.length)) {
                        var f = e[0];
                        if ("noop" != f && "stop" != f && "close" != f)
                            for (var h = 1; h < e.length; h++)
                                e[h] = "";
                    }
                }
            }
    return vb(c);
}
catch (m) {
    return b;
} }
var Ub = null;
function Vb() { return Ub = Ub || new D; }
function Wb(a) { y.call(this, "serverreachability", a); }
r(Wb, y);
function G(a) { var b = Vb(); b.dispatchEvent(new Wb(b, a)); }
function Xb(a) { y.call(this, "statevent", a); }
r(Xb, y);
function H(a) { var b = Vb(); b.dispatchEvent(new Xb(b, a)); }
function Yb(a) { y.call(this, "timingevent", a); }
r(Yb, y);
function I(a, b) { if ("function" != ba(a))
    throw Error("Fn must not be null and must be a function"); return k.setTimeout(function () { a(); }, b); }
var Zb = { NO_ERROR: 0, Za: 1, gb: 2, fb: 3, bb: 4, eb: 5, hb: 6, Da: 7, TIMEOUT: 8, kb: 9 };
var $b = { ab: "complete", ob: "success", Ea: "error", Da: "abort", mb: "ready", nb: "readystatechange", TIMEOUT: "timeout", ib: "incrementaldata", lb: "progress", cb: "downloadprogress", pb: "uploadprogress" };
function ac() { }
ac.prototype.a = null;
function bc(a) { var b; (b = a.a) || (b = a.a = {}); return b; }
function cc() { }
var J = { OPEN: "a", $a: "b", Ea: "c", jb: "d" };
function dc() { y.call(this, "d"); }
r(dc, y);
function ec() { y.call(this, "c"); }
r(ec, y);
var fc;
function gc() { }
r(gc, ac);
fc = new gc;
function K(a, b, c, d) { this.g = a; this.c = b; this.f = c; this.T = d || 1; this.J = new E(this); this.P = hc; a = Ja ? 125 : void 0; this.R = new Hb(a); this.B = null; this.b = !1; this.j = this.l = this.i = this.H = this.u = this.U = this.o = null; this.s = []; this.a = null; this.D = 0; this.h = this.m = null; this.N = -1; this.A = !1; this.O = 0; this.F = null; this.W = this.C = this.V = this.I = !1; }
var hc = 45E3, ic = {}, jc = {};
g = K.prototype;
g.setTimeout = function (a) { this.P = a; };
function kc(a, b, c) { a.H = 1; a.i = lc(L(b)); a.j = c; a.I = !0; mc(a, null); }
function mc(a, b) { a.u = q(); M(a); a.l = L(a.i); var c = a.l, d = a.T; Array.isArray(d) || (d = [String(d)]); nc(c.b, "t", d); a.D = 0; a.a = oc(a.g, a.g.C ? b : null); 0 < a.O && (a.F = new Lb(p(a.Ca, a, a.a), a.O)); Nb(a.J, a.a, "readystatechange", a.Wa); b = a.B ? Ba(a.B) : {}; a.j ? (a.m || (a.m = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.ba(a.l, a.m, a.j, b)) : (a.m = "GET", a.a.ba(a.l, a.m, null, b)); G(1); Qb(a.c, a.m, a.l, a.f, a.T, a.j); }
g.Wa = function (a) { a = a.target; var b = this.F; b && 3 == N(a) ? b.f() : this.Ca(a); };
g.Ca = function (a) {
    try {
        if (a == this.a)
            a: {
                var b = N(this.a), c = this.a.ua(), d = this.a.X();
                if (!(3 > b || 3 == b && !Ja && !this.a.$())) {
                    this.A || 4 != b || 7 == c || (8 == c || 0 >= d ? G(3) : G(2));
                    pc(this);
                    var e = this.a.X();
                    this.N = e;
                    var f = this.a.$();
                    this.b = 200 == e;
                    Rb(this.c, this.m, this.l, this.f, this.T, b, e);
                    if (this.b) {
                        if (this.V && !this.C) {
                            b: {
                                if (this.a) {
                                    var h, m = this.a;
                                    if ((h = m.a ? m.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !ta(h)) {
                                        var l = h;
                                        break b;
                                    }
                                }
                                l = null;
                            }
                            if (l)
                                F(this.c, this.f, l, "Initial handshake response via X-HTTP-Initial-Response"),
                                    this.C = !0, qc(this, l);
                            else {
                                this.b = !1;
                                this.h = 3;
                                H(12);
                                O(this);
                                rc(this);
                                break a;
                            }
                        }
                        this.I ? (tc(this, b, f), Ja && this.b && 3 == b && (Nb(this.J, this.R, "tick", this.Va), this.R.start())) : (F(this.c, this.f, f, null), qc(this, f));
                        4 == b && O(this);
                        this.b && !this.A && (4 == b ? uc(this.g, this) : (this.b = !1, M(this)));
                    }
                    else
                        400 == e && 0 < f.indexOf("Unknown SID") ? (this.h = 3, H(12)) : (this.h = 0, H(13)), O(this), rc(this);
                }
            }
    }
    catch (t) { }
    finally { }
};
function tc(a, b, c) { for (var d = !0; !a.A && a.D < c.length;) {
    var e = vc(a, c);
    if (e == jc) {
        4 == b && (a.h = 4, H(14), d = !1);
        F(a.c, a.f, null, "[Incomplete Response]");
        break;
    }
    else if (e == ic) {
        a.h = 4;
        H(15);
        F(a.c, a.f, c, "[Invalid Chunk]");
        d = !1;
        break;
    }
    else
        F(a.c, a.f, e, null), qc(a, e);
} 4 == b && 0 == c.length && (a.h = 1, H(16), d = !1); a.b = a.b && d; d ? 0 < c.length && !a.W && (a.W = !0, b = a.g, b.a == a && b.V && !b.F && (b.c.info("Great, no buffering proxy detected. Bytes received: " + c.length), xc(b), b.F = !0)) : (F(a.c, a.f, c, "[Invalid Chunked Response]"), O(a), rc(a)); }
g.Va = function () { if (this.a) {
    var a = N(this.a), b = this.a.$();
    this.D < b.length && (pc(this), tc(this, a, b), this.b && 4 != a && M(this));
} };
function vc(a, b) { var c = a.D, d = b.indexOf("\n", c); if (-1 == d)
    return jc; c = Number(b.substring(c, d)); if (isNaN(c))
    return ic; d += 1; if (d + c > b.length)
    return jc; b = b.substr(d, c); a.D = d + c; return b; }
g.cancel = function () { this.A = !0; O(this); };
function M(a) { a.U = q() + a.P; yc(a, a.P); }
function yc(a, b) { if (null != a.o)
    throw Error("WatchDog timer not null"); a.o = I(p(a.Ua, a), b); }
function pc(a) { a.o && (k.clearTimeout(a.o), a.o = null); }
g.Ua = function () { this.o = null; var a = q(); 0 <= a - this.U ? (Tb(this.c, this.l), 2 != this.H && (G(3), H(17)), O(this), this.h = 2, rc(this)) : yc(this, this.U - a); };
function rc(a) { 0 == a.g.v || a.A || uc(a.g, a); }
function O(a) { pc(a); var b = a.F; b && "function" == typeof b.ja && b.ja(); a.F = null; Ib(a.R); Ob(a.J); a.a && (b = a.a, a.a = null, b.abort(), b.ja()); }
function qc(a, b) {
    try {
        var c = a.g;
        if (0 != c.v && (c.a == a || zc(c.b, a)))
            if (c.I = a.N, !a.C && zc(c.b, a) && 3 == c.v) {
                try {
                    var d = c.ka.a.parse(b);
                }
                catch (sc) {
                    d = null;
                }
                if (Array.isArray(d) && 3 == d.length) {
                    var e = d;
                    if (0 == e[0])
                        a: {
                            if (!c.j) {
                                if (c.a)
                                    if (c.a.u + 3E3 < a.u)
                                        Ac(c), Bc(c);
                                    else
                                        break a;
                                Cc(c);
                                H(18);
                            }
                        }
                    else
                        c.oa = e[1], 0 < c.oa - c.P && 37500 > e[2] && c.H && 0 == c.o && !c.m && (c.m = I(p(c.Ra, c), 6E3));
                    if (1 >= Dc(c.b) && c.ea) {
                        try {
                            c.ea();
                        }
                        catch (sc) { }
                        c.ea = void 0;
                    }
                }
                else
                    P(c, 11);
            }
            else if ((a.C || c.a == a) && Ac(c), !ta(b))
                for (b = d = c.ka.a.parse(b), d = 0; d < b.length; d++)
                    if (e =
                        b[d], c.P = e[0], e = e[1], 2 == c.v)
                        if ("c" == e[0]) {
                            c.J = e[1];
                            c.ga = e[2];
                            var f = e[3];
                            null != f && (c.ha = f, c.c.info("VER=" + c.ha));
                            var h = e[4];
                            null != h && (c.pa = h, c.c.info("SVER=" + c.pa));
                            var m = e[5];
                            if (null != m && "number" === typeof m && 0 < m) {
                                var l = 1.5 * m;
                                c.D = l;
                                c.c.info("backChannelRequestTimeoutMs_=" + l);
                            }
                            l = c;
                            var t = a.a;
                            if (t) {
                                var B = t.a ? t.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                                if (B) {
                                    var z = l.b;
                                    !z.a && (v(B, "spdy") || v(B, "quic") || v(B, "h2")) && (z.f = z.g, z.a = new Set, z.b && (Ec(z, z.b), z.b = null));
                                }
                                if (l.A) {
                                    var qb = t.a ? t.a.getResponseHeader("X-HTTP-Session-Id") :
                                        null;
                                    qb && (l.na = qb, Q(l.B, l.A, qb));
                                }
                            }
                            c.v = 3;
                            c.f && c.f.ta();
                            c.V && (c.N = q() - a.u, c.c.info("Handshake RTT: " + c.N + "ms"));
                            l = c;
                            var va = a;
                            l.la = Fc(l, l.C ? l.ga : null, l.fa);
                            if (va.C) {
                                Gc(l.b, va);
                                var wa = va, wc = l.D;
                                wc && wa.setTimeout(wc);
                                wa.o && (pc(wa), M(wa));
                                l.a = va;
                            }
                            else
                                Hc(l);
                            0 < c.g.length && Ic(c);
                        }
                        else
                            "stop" != e[0] && "close" != e[0] || P(c, 7);
                    else
                        3 == c.v && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? P(c, 7) : Jc(c) : "noop" != e[0] && c.f && c.f.sa(e), c.o = 0);
        G(4);
    }
    catch (sc) { }
}
function Kc(a) { if (a.K && "function" == typeof a.K)
    return a.K(); if ("string" === typeof a)
    return a.split(""); if (ca(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d]);
    return b;
} b = []; c = 0; for (d in a)
    b[c++] = a[d]; return a = b; }
function Lc(a, b) { if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b, void 0);
else if (ca(a) || "string" === typeof a)
    oa(a, b, void 0);
else {
    if (a.L && "function" == typeof a.L)
        var c = a.L();
    else if (a.K && "function" == typeof a.K)
        c = void 0;
    else if (ca(a) || "string" === typeof a) {
        c = [];
        for (var d = a.length, e = 0; e < d; e++)
            c.push(e);
    }
    else
        for (e in c = [], d = 0, a)
            c[d++] = e;
    d = Kc(a);
    e = d.length;
    for (var f = 0; f < e; f++)
        b.call(void 0, d[f], c && c[f], a);
} }
function R(a, b) { this.b = {}; this.a = []; this.c = 0; var c = arguments.length; if (1 < c) {
    if (c % 2)
        throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2)
        this.set(arguments[d], arguments[d + 1]);
}
else if (a)
    if (a instanceof R)
        for (c = a.L(), d = 0; d < c.length; d++)
            this.set(c[d], a.get(c[d]));
    else
        for (d in a)
            this.set(d, a[d]); }
g = R.prototype;
g.K = function () { Mc(this); for (var a = [], b = 0; b < this.a.length; b++)
    a.push(this.b[this.a[b]]); return a; };
g.L = function () { Mc(this); return this.a.concat(); };
function Mc(a) { if (a.c != a.a.length) {
    for (var b = 0, c = 0; b < a.a.length;) {
        var d = a.a[b];
        S(a.b, d) && (a.a[c++] = d);
        b++;
    }
    a.a.length = c;
} if (a.c != a.a.length) {
    var e = {};
    for (c = b = 0; b < a.a.length;)
        d = a.a[b], S(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    a.a.length = c;
} }
g.get = function (a, b) { return S(this.b, a) ? this.b[a] : b; };
g.set = function (a, b) { S(this.b, a) || (this.c++, this.a.push(a)); this.b[a] = b; };
g.forEach = function (a, b) { for (var c = this.L(), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
} };
function S(a, b) { return Object.prototype.hasOwnProperty.call(a, b); }
var Nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Oc(a, b) { if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
        }
        else
            f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
} }
function T(a, b) { this.c = this.j = this.f = ""; this.h = null; this.i = this.g = ""; this.a = !1; if (a instanceof T) {
    this.a = void 0 !== b ? b : a.a;
    Pc(this, a.f);
    this.j = a.j;
    Qc(this, a.c);
    Rc(this, a.h);
    this.g = a.g;
    b = a.b;
    var c = new U;
    c.c = b.c;
    b.a && (c.a = new R(b.a), c.b = b.b);
    Sc(this, c);
    this.i = a.i;
}
else
    a && (c = String(a).match(Nc)) ? (this.a = !!b, Pc(this, c[1] || "", !0), this.j = Tc(c[2] || ""), Qc(this, c[3] || "", !0), Rc(this, c[4]), this.g = Tc(c[5] || "", !0), Sc(this, c[6] || "", !0), this.i = Tc(c[7] || "")) : (this.a = !!b, this.b = new U(null, this.a)); }
T.prototype.toString = function () { var a = [], b = this.f; b && a.push(Uc(b, Vc, !0), ":"); var c = this.c; if (c || "file" == b)
    a.push("//"), (b = this.j) && a.push(Uc(b, Vc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c)); if (c = this.g)
    this.c && "/" != c.charAt(0) && a.push("/"), a.push(Uc(c, "/" == c.charAt(0) ? Wc : Xc, !0)); (c = this.b.toString()) && a.push("?", c); (c = this.i) && a.push("#", Uc(c, Yc)); return a.join(""); };
function L(a) { return new T(a); }
function Pc(a, b, c) { a.f = c ? Tc(b, !0) : b; a.f && (a.f = a.f.replace(/:$/, "")); }
function Qc(a, b, c) { a.c = c ? Tc(b, !0) : b; }
function Rc(a, b) { if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b)
        throw Error("Bad port number " + b);
    a.h = b;
}
else
    a.h = null; }
function Sc(a, b, c) { b instanceof U ? (a.b = b, Zc(a.b, a.a)) : (c || (b = Uc(b, $c)), a.b = new U(b, a.a)); }
function Q(a, b, c) { a.b.set(b, c); }
function lc(a) { Q(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36)); return a; }
function ad(a) { return a instanceof T ? L(a) : new T(a, void 0); }
function bd(a, b, c, d) { var e = new T(null, void 0); a && Pc(e, a); b && Qc(e, b); c && Rc(e, c); d && (e.g = d); return e; }
function Tc(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""; }
function Uc(a, b, c) { return "string" === typeof a ? (a = encodeURI(a).replace(b, cd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null; }
function cd(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16); }
var Vc = /[#\/\?@]/g, Xc = /[#\?:]/g, Wc = /[#\?]/g, $c = /[#\?@]/g, Yc = /#/g;
function U(a, b) { this.b = this.a = null; this.c = a || null; this.f = !!b; }
function V(a) { a.a || (a.a = new R, a.b = 0, a.c && Oc(a.c, function (b, c) { a.add(decodeURIComponent(b.replace(/\+/g, " ")), c); })); }
g = U.prototype;
g.add = function (a, b) { V(this); this.c = null; a = W(this, a); var c = this.a.get(a); c || this.a.set(a, c = []); c.push(b); this.b += 1; return this; };
function dd(a, b) { V(a); b = W(a, b); S(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, S(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Mc(a))); }
function ed(a, b) { V(a); b = W(a, b); return S(a.a.b, b); }
g.forEach = function (a, b) { V(this); this.a.forEach(function (c, d) { oa(c, function (e) { a.call(b, e, d, this); }, this); }, this); };
g.L = function () { V(this); for (var a = this.a.K(), b = this.a.L(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++)
        c.push(b[d]); return c; };
g.K = function (a) { V(this); var b = []; if ("string" === typeof a)
    ed(this, a) && (b = ra(b, this.a.get(W(this, a))));
else {
    a = this.a.K();
    for (var c = 0; c < a.length; c++)
        b = ra(b, a[c]);
} return b; };
g.set = function (a, b) { V(this); this.c = null; a = W(this, a); ed(this, a) && (this.b -= this.a.get(a).length); this.a.set(a, [b]); this.b += 1; return this; };
g.get = function (a, b) { if (!a)
    return b; a = this.K(a); return 0 < a.length ? String(a[0]) : b; };
function nc(a, b, c) { dd(a, b); 0 < c.length && (a.c = null, a.a.set(W(a, b), sa(c)), a.b += c.length); }
g.toString = function () { if (this.c)
    return this.c; if (!this.a)
    return ""; for (var a = [], b = this.a.L(), c = 0; c < b.length; c++) {
    var d = b[c], e = encodeURIComponent(String(d));
    d = this.K(d);
    for (var f = 0; f < d.length; f++) {
        var h = e;
        "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
        a.push(h);
    }
} return this.c = a.join("&"); };
function W(a, b) { b = String(b); a.f && (b = b.toLowerCase()); return b; }
function Zc(a, b) { b && !a.f && (V(a), a.c = null, a.a.forEach(function (c, d) { var e = d.toLowerCase(); d != e && (dd(this, d), nc(this, e, c)); }, a)); a.f = b; }
function fd(a, b) { this.b = a; this.a = b; }
function gd(a) { this.g = a || hd; k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ia && k.ia.ya && k.ia.ya() && k.ia.ya().qb); this.f = a ? this.g : 1; this.a = null; 1 < this.f && (this.a = new Set); this.b = null; this.c = []; }
var hd = 10;
function id(a) { return a.b ? !0 : a.a ? a.a.size >= a.f : !1; }
function Dc(a) { return a.b ? 1 : a.a ? a.a.size : 0; }
function zc(a, b) { return a.b ? a.b == b : a.a ? a.a.has(b) : !1; }
function Ec(a, b) { a.a ? a.a.add(b) : a.b = b; }
function Gc(a, b) { a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a.delete(b); }
gd.prototype.cancel = function () {
    var e_1, _a;
    this.c = jd(this);
    if (this.b)
        this.b.cancel(), this.b = null;
    else if (this.a && 0 !== this.a.size) {
        try {
            for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                a.cancel();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.a.clear();
    }
};
function jd(a) {
    var e_2, _a;
    if (null != a.b)
        return a.c.concat(a.b.s);
    if (null != a.a && 0 !== a.a.size) {
        var b = a.c;
        try {
            for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                b = b.concat(c.s);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return b;
    }
    return sa(a.c);
}
function kd() { }
kd.prototype.stringify = function (a) { return k.JSON.stringify(a, void 0); };
kd.prototype.parse = function (a) { return k.JSON.parse(a, void 0); };
function ld() { this.a = new kd; }
function md(a, b, c) { var d = c || ""; try {
    Lc(a, function (e, f) { var h = e; n(e) && (h = vb(e)); b.push(d + f + "=" + encodeURIComponent(h)); });
}
catch (e) {
    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
} }
function nd(a, b) { var c = new Pb; if (k.Image) {
    var d = new Image;
    d.onload = ka(od, c, d, "TestLoadImage: loaded", !0, b);
    d.onerror = ka(od, c, d, "TestLoadImage: error", !1, b);
    d.onabort = ka(od, c, d, "TestLoadImage: abort", !1, b);
    d.ontimeout = ka(od, c, d, "TestLoadImage: timeout", !1, b);
    k.setTimeout(function () { if (d.ontimeout)
        d.ontimeout(); }, 1E4);
    d.src = a;
}
else
    b(!1); }
function od(a, b, c, d, e) { try {
    b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
}
catch (f) { } }
var pd = k.JSON.parse;
function X(a) { D.call(this); this.headers = new R; this.H = a || null; this.b = !1; this.s = this.a = null; this.B = ""; this.h = 0; this.f = ""; this.g = this.A = this.l = this.u = !1; this.o = 0; this.m = null; this.I = qd; this.D = this.F = !1; }
r(X, D);
var qd = "", rd = /^https?$/i, sd = ["POST", "PUT"];
g = X.prototype;
g.ba = function (a, b, c, d) {
    if (this.a)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.B = a;
    this.f = "";
    this.h = 0;
    this.u = !1;
    this.b = !0;
    this.a = new XMLHttpRequest;
    this.s = this.H ? bc(this.H) : bc(fc);
    this.a.onreadystatechange = p(this.za, this);
    try {
        this.A = !0, this.a.open(b, String(a), !0), this.A = !1;
    }
    catch (f) {
        td(this, f);
        return;
    }
    a = c || "";
    var e = new R(this.headers);
    d && Lc(d, function (f, h) { e.set(h, f); });
    d = pa(e.L());
    c = k.FormData && a instanceof k.FormData;
    !(0 <=
        na(sd, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (f, h) { this.a.setRequestHeader(h, f); }, this);
    this.I && (this.a.responseType = this.I);
    "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
    try {
        ud(this), 0 < this.o && ((this.D = vd(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = p(this.xa, this)) : this.m = Jb(this.xa, this.o, this)), this.l = !0, this.a.send(a), this.l = !1;
    }
    catch (f) {
        td(this, f);
    }
};
function vd(a) { return x && Ra(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout; }
function qa(a) { return "content-type" == a.toLowerCase(); }
g.xa = function () { "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8)); };
function td(a, b) { a.b = !1; a.a && (a.g = !0, a.a.abort(), a.g = !1); a.f = b; a.h = 5; wd(a); xd(a); }
function wd(a) { a.u || (a.u = !0, a.dispatchEvent("complete"), a.dispatchEvent("error")); }
g.abort = function (a) { this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), xd(this)); };
g.G = function () { this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), xd(this, !0)); X.S.G.call(this); };
g.za = function () { this.j || (this.A || this.l || this.g ? yd(this) : this.Ta()); };
g.Ta = function () { yd(this); };
function yd(a) {
    if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != N(a) || 2 != a.X()))
        if (a.l && 4 == N(a))
            Jb(a.za, 0, a);
        else if (a.dispatchEvent("readystatechange"), 4 == N(a)) {
            a.b = !1;
            try {
                var b = a.X();
                a: switch (b) {
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = !0;
                        break a;
                    default: c = !1;
                }
                var d;
                if (!(d = c)) {
                    var e;
                    if (e = 0 === b) {
                        var f = String(a.B).match(Nc)[1] || null;
                        if (!f && k.self && k.self.location) {
                            var h = k.self.location.protocol;
                            f = h.substr(0, h.length - 1);
                        }
                        e = !rd.test(f ? f.toLowerCase() : "");
                    }
                    d = e;
                }
                if (d)
                    a.dispatchEvent("complete"),
                        a.dispatchEvent("success");
                else {
                    a.h = 6;
                    try {
                        var m = 2 < N(a) ? a.a.statusText : "";
                    }
                    catch (l) {
                        m = "";
                    }
                    a.f = m + " [" + a.X() + "]";
                    wd(a);
                }
            }
            finally {
                xd(a);
            }
        }
}
function xd(a, b) { if (a.a) {
    ud(a);
    var c = a.a, d = a.s[0] ? aa : null;
    a.a = null;
    a.s = null;
    b || a.dispatchEvent("ready");
    try {
        c.onreadystatechange = d;
    }
    catch (e) { }
} }
function ud(a) { a.a && a.D && (a.a.ontimeout = null); a.m && (k.clearTimeout(a.m), a.m = null); }
function N(a) { return a.a ? a.a.readyState : 0; }
g.X = function () { try {
    return 2 < N(this) ? this.a.status : -1;
}
catch (a) {
    return -1;
} };
g.$ = function () { try {
    return this.a ? this.a.responseText : "";
}
catch (a) {
    return "";
} };
g.Na = function (a) { if (this.a) {
    var b = this.a.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return pd(b);
} };
g.ua = function () { return this.h; };
g.Qa = function () { return "string" === typeof this.f ? this.f : String(this.f); };
function zd(a) { var b = ""; Aa(a, function (c, d) { b += d; b += ":"; b += c; b += "\r\n"; }); return b; }
function Ad(a, b, c) { a: {
    for (d in c) {
        var d = !1;
        break a;
    }
    d = !0;
} d || (c = zd(c), "string" === typeof a ? (null != c && encodeURIComponent(String(c))) : Q(a, b, c)); }
function Bd(a, b, c) { return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b; }
function Cd(a) {
    this.pa = 0;
    this.g = [];
    this.c = new Pb;
    this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.W = this.i = this.O = this.l = null;
    this.La = this.R = 0;
    this.Ia = Bd("failFast", !1, a);
    this.H = this.m = this.j = this.h = this.f = null;
    this.T = !0;
    this.I = this.oa = this.P = -1;
    this.U = this.o = this.u = 0;
    this.Fa = Bd("baseRetryDelayMs", 5E3, a);
    this.Ma = Bd("retryDelaySeedMs", 1E4, a);
    this.Ja = Bd("forwardChannelMaxRetries", 2, a);
    this.ma = Bd("forwardChannelRequestTimeoutMs", 2E4, a);
    this.Ka = a && a.g || void 0;
    this.D = void 0;
    this.C = a && a.supportsCrossDomainXhr ||
        !1;
    this.J = "";
    this.b = new gd(a && a.concurrentRequestLimit);
    this.ka = new ld;
    this.da = a && a.fastHandshake || !1;
    this.Ga = a && a.b || !1;
    a && a.f && (this.c.a = !1);
    a && a.forceLongPolling && (this.T = !1);
    this.V = !this.da && this.T && a && a.c || !1;
    this.ea = void 0;
    this.N = 0;
    this.F = !1;
    this.s = null;
}
g = Cd.prototype;
g.ha = 8;
g.v = 1;
function Jc(a) { Dd(a); if (3 == a.v) {
    var b = a.R++, c = L(a.B);
    Q(c, "SID", a.J);
    Q(c, "RID", b);
    Q(c, "TYPE", "terminate");
    Ed(a, c);
    b = new K(a, a.c, b, void 0);
    b.H = 2;
    b.i = lc(L(c));
    c = !1;
    k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b.i.toString(), ""));
    !c && k.Image && ((new Image).src = b.i, c = !0);
    c || (b.a = oc(b.g, null), b.a.ba(b.i));
    b.u = q();
    M(b);
} Fd(a); }
function Bc(a) { a.a && (xc(a), a.a.cancel(), a.a = null); }
function Dd(a) { Bc(a); a.j && (k.clearTimeout(a.j), a.j = null); Ac(a); a.b.cancel(); a.h && ("number" === typeof a.h && k.clearTimeout(a.h), a.h = null); }
function Gd(a, b) { a.g.push(new fd(a.La++, b)); 3 == a.v && Ic(a); }
function Ic(a) { id(a.b) || a.h || (a.h = !0, Cb(a.Ba, a), a.u = 0); }
function Hd(a, b) { if (Dc(a.b) >= a.b.f - (a.h ? 1 : 0))
    return !1; if (a.h)
    return a.g = b.s.concat(a.g), !0; if (1 == a.v || 2 == a.v || a.u >= (a.Ia ? 0 : a.Ja))
    return !1; a.h = I(p(a.Ba, a, b), Id(a, a.u)); a.u++; return !0; }
g.Ba = function (a) {
    if (this.h)
        if (this.h = null, 1 == this.v) {
            if (!a) {
                this.R = Math.floor(1E5 * Math.random());
                a = this.R++;
                var b = new K(this, this.c, a, void 0), c = this.l;
                this.O && (c ? (c = Ba(c), Da(c, this.O)) : c = this.O);
                null === this.i && (b.B = c);
                var d;
                if (this.da)
                    a: {
                        for (var e = d = 0; e < this.g.length; e++) {
                            b: {
                                var f = this.g[e];
                                if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b;
                                }
                                f = void 0;
                            }
                            if (void 0 === f)
                                break;
                            d += f;
                            if (4096 < d) {
                                d = e;
                                break a;
                            }
                            if (4096 === d || e === this.g.length - 1) {
                                d = e + 1;
                                break a;
                            }
                        }
                        d = 1E3;
                    }
                else
                    d = 1E3;
                d = Jd(this, b, d);
                e = L(this.B);
                Q(e, "RID", a);
                Q(e, "CVER", 22);
                this.A && Q(e, "X-HTTP-Session-Id", this.A);
                Ed(this, e);
                this.i && c && Ad(e, this.i, c);
                Ec(this.b, b);
                this.Ga && Q(e, "TYPE", "init");
                this.da ? (Q(e, "$req", d), Q(e, "SID", "null"), b.V = !0, kc(b, e, null)) : kc(b, e, d);
                this.v = 2;
            }
        }
        else
            3 == this.v && (a ? Kd(this, a) : 0 == this.g.length || id(this.b) || Kd(this));
};
function Kd(a, b) { var c; b ? c = b.f : c = a.R++; var d = L(a.B); Q(d, "SID", a.J); Q(d, "RID", c); Q(d, "AID", a.P); Ed(a, d); a.i && a.l && Ad(d, a.i, a.l); c = new K(a, a.c, c, a.u + 1); null === a.i && (c.B = a.l); b && (a.g = b.s.concat(a.g)); b = Jd(a, c, 1E3); c.setTimeout(Math.round(.5 * a.ma) + Math.round(.5 * a.ma * Math.random())); Ec(a.b, c); kc(c, d, b); }
function Ed(a, b) { a.f && Lc({}, function (c, d) { Q(b, d, c); }); }
function Jd(a, b, c) { c = Math.min(a.g.length, c); var d = a.f ? p(a.f.Ha, a.f, a) : null; a: for (var e = a.g, f = -1;;) {
    var h = ["count=" + c];
    -1 == f ? 0 < c ? (f = e[0].b, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
    for (var m = !0, l = 0; l < c; l++) {
        var t = e[l].b, B = e[l].a;
        t -= f;
        if (0 > t)
            f = Math.max(0, e[l].b - 100), m = !1;
        else
            try {
                md(B, h, "req" + t + "_");
            }
            catch (z) {
                d && d(B);
            }
    }
    if (m) {
        d = h.join("&");
        break a;
    }
} a = a.g.splice(0, c); b.s = a; return d; }
function Hc(a) { a.a || a.j || (a.U = 1, Cb(a.Aa, a), a.o = 0); }
function Cc(a) { if (a.a || a.j || 3 <= a.o)
    return !1; a.U++; a.j = I(p(a.Aa, a), Id(a, a.o)); a.o++; return !0; }
g.Aa = function () { this.j = null; Ld(this); if (this.V && !(this.F || null == this.a || 0 >= this.N)) {
    var a = 2 * this.N;
    this.c.info("BP detection timer enabled: " + a);
    this.s = I(p(this.Sa, this), a);
} };
g.Sa = function () { this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = !1, this.F = !0, Bc(this), Ld(this)); };
function xc(a) { null != a.s && (k.clearTimeout(a.s), a.s = null); }
function Ld(a) { a.a = new K(a, a.c, "rpc", a.U); null === a.i && (a.a.B = a.l); a.a.O = 0; var b = L(a.la); Q(b, "RID", "rpc"); Q(b, "SID", a.J); Q(b, "CI", a.H ? "0" : "1"); Q(b, "AID", a.P); Ed(a, b); Q(b, "TYPE", "xmlhttp"); a.i && a.l && Ad(b, a.i, a.l); a.D && a.a.setTimeout(a.D); var c = a.a; a = a.ga; c.H = 1; c.i = lc(L(b)); c.j = null; c.I = !0; mc(c, a); }
g.Ra = function () { null != this.m && (this.m = null, Bc(this), Cc(this), H(19)); };
function Ac(a) { null != a.m && (k.clearTimeout(a.m), a.m = null); }
function uc(a, b) { var c = null; if (a.a == b) {
    Ac(a);
    xc(a);
    a.a = null;
    var d = 2;
}
else if (zc(a.b, b))
    c = b.s, Gc(a.b, b), d = 1;
else
    return; a.I = b.N; if (0 != a.v)
    if (b.b)
        if (1 == d) {
            c = b.j ? b.j.length : 0;
            b = q() - b.u;
            var e = a.u;
            d = Vb();
            d.dispatchEvent(new Yb(d, c, b, e));
            Ic(a);
        }
        else
            Hc(a);
    else if (e = b.h, 3 == e || 0 == e && 0 < a.I || !(1 == d && Hd(a, b) || 2 == d && Cc(a)))
        switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
            case 1:
                P(a, 5);
                break;
            case 4:
                P(a, 10);
                break;
            case 3:
                P(a, 6);
                break;
            default: P(a, 2);
        } }
function Id(a, b) { var c = a.Fa + Math.floor(Math.random() * a.Ma); a.f || (c *= 2); return c * b; }
function P(a, b) { a.c.info("Error code " + b); if (2 == b) {
    var c = null;
    a.f && (c = null);
    var d = p(a.Xa, a);
    c || (c = new T("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Pc(c, "https"), lc(c));
    nd(c.toString(), d);
}
else
    H(2); a.v = 0; a.f && a.f.ra(b); Fd(a); Dd(a); }
g.Xa = function (a) { a ? (this.c.info("Successfully pinged google.com"), H(2)) : (this.c.info("Failed to ping google.com"), H(1)); };
function Fd(a) { a.v = 0; a.I = -1; if (a.f) {
    if (0 != jd(a.b).length || 0 != a.g.length)
        a.b.c.length = 0, sa(a.g), a.g.length = 0;
    a.f.qa();
} }
function Fc(a, b, c) { var d = ad(c); if ("" != d.c)
    b && Qc(d, b + "." + d.c), Rc(d, d.h);
else {
    var e = k.location;
    d = bd(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
} a.W && Aa(a.W, function (f, h) { Q(d, h, f); }); b = a.A; c = a.na; b && c && Q(d, b, c); Q(d, "VER", a.ha); Ed(a, d); return d; }
function oc(a, b) { if (b && !a.C)
    throw Error("Can't create secondary domain capable XhrIo object."); b = new X(a.Ka); b.F = a.C; return b; }
function Md() { }
g = Md.prototype;
g.ta = function () { };
g.sa = function () { };
g.ra = function () { };
g.qa = function () { };
g.Ha = function () { };
function Nd() { if (x && !(10 <= Number(Ua)))
    throw Error("Environmental error: no available transport."); }
Nd.prototype.a = function (a, b) { return new Y(a, b); };
function Y(a, b) {
    D.call(this);
    this.a = new Cd(b);
    this.l = a;
    this.b = b && b.messageUrlParams || null;
    a = b && b.messageHeaders || null;
    b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
    this.a.l = a;
    a = b && b.initMessageHeaders || null;
    b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = { "X-WebChannel-Content-Type": b.messageContentType });
    b && b.a && (a ? a["X-WebChannel-Client-Profile"] = b.a : a = { "X-WebChannel-Client-Profile": b.a });
    this.a.O =
        a;
    (a = b && b.httpHeadersOverwriteParam) && !ta(a) && (this.a.i = a);
    this.h = b && b.supportsCrossDomainXhr || !1;
    this.g = b && b.sendRawJson || !1;
    (b = b && b.httpSessionIdParam) && !ta(b) && (this.a.A = b, a = this.b, null !== a && b in a && (a = this.b, b in a && delete a[b]));
    this.f = new Z(this);
}
r(Y, D);
g = Y.prototype;
g.addEventListener = function (a, b, c, d) { Y.S.addEventListener.call(this, a, b, c, d); };
g.removeEventListener = function (a, b, c, d) { Y.S.removeEventListener.call(this, a, b, c, d); };
g.Oa = function () { this.a.f = this.f; this.h && (this.a.C = !0); var a = this.a, b = this.l, c = this.b || void 0; H(0); a.fa = b; a.W = c || {}; a.H = a.T; a.B = Fc(a, null, a.fa); Ic(a); };
g.close = function () { Jc(this.a); };
g.Pa = function (a) { if ("string" === typeof a) {
    var b = {};
    b.__data__ = a;
    Gd(this.a, b);
}
else
    this.g ? (b = {}, b.__data__ = vb(a), Gd(this.a, b)) : Gd(this.a, a); };
g.G = function () { this.a.f = null; delete this.f; Jc(this.a); delete this.a; Y.S.G.call(this); };
function Od(a) { dc.call(this); var b = a.__sm__; if (b) {
    a: {
        for (var c in b) {
            a = c;
            break a;
        }
        a = void 0;
    }
    (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b;
}
else
    this.data = a; }
r(Od, dc);
function Pd() { ec.call(this); this.status = 1; }
r(Pd, ec);
function Z(a) { this.a = a; }
r(Z, Md);
Z.prototype.ta = function () { this.a.dispatchEvent("a"); };
Z.prototype.sa = function (a) { this.a.dispatchEvent(new Od(a)); };
Z.prototype.ra = function (a) { this.a.dispatchEvent(new Pd(a)); };
Z.prototype.qa = function () { this.a.dispatchEvent("b"); }; /*

 Copyright 2017 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Nd.prototype.createWebChannel = Nd.prototype.a;
Y.prototype.send = Y.prototype.Pa;
Y.prototype.open = Y.prototype.Oa;
Y.prototype.close = Y.prototype.close;
Zb.NO_ERROR = 0;
Zb.TIMEOUT = 8;
Zb.HTTP_ERROR = 6;
$b.COMPLETE = "complete";
cc.EventType = J;
J.OPEN = "a";
J.CLOSE = "b";
J.ERROR = "c";
J.MESSAGE = "d";
D.prototype.listen = D.prototype.va;
X.prototype.listenOnce = X.prototype.wa;
X.prototype.getLastError = X.prototype.Qa;
X.prototype.getLastErrorCode = X.prototype.ua;
X.prototype.getStatus = X.prototype.X;
X.prototype.getResponseJson = X.prototype.Na;
X.prototype.getResponseText = X.prototype.$;
X.prototype.send = X.prototype.ba;
var esm = { createWebChannelTransport: function () { return new Nd; }, ErrorCode: Zb, EventType: $b, WebChannel: cc, XhrIo: X };
var esm_1 = esm.createWebChannelTransport;
var esm_2 = esm.ErrorCode;
var esm_3 = esm.EventType;
var esm_4 = esm.WebChannel;
var esm_5 = esm.XhrIo;

/* harmony default export */ __webpack_exports__["default"] = (esm);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/firestore/dist/index.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/index.esm.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/firestore */ "./node_modules/@firebase/firestore/dist/index.cjs.js");
/* harmony import */ var _firebase_firestore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_firebase_firestore__WEBPACK_IMPORTED_MODULE_0__);

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/localforage/dist/localforage.js":
/*!******************************************************!*\
  !*** ./node_modules/localforage/dist/localforage.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*!
    localForage -- Offline Storage, Improved
    Version 1.9.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
'use strict';
var immediate = _dereq_(1);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
'use strict';
if (typeof global.Promise !== 'function') {
  global.Promise = _dereq_(2);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"2":2}],4:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    } catch (e) {
        return;
    }
}

var idb = getIDB();

function isIndexedDBValid() {
    try {
        // Initialize IndexedDB; fall back to vendor-prefixed versions
        // if needed.
        if (!idb || !idb.open) {
            return false;
        }
        // We mimic PouchDB here;
        //
        // We test for openDatabase because IE Mobile identifies itself
        // as Safari. Oh the lulz...
        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

        // Safari <10.1 does not meet our requirements for IDB support
        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
        // Safari 10.1 shipped with fetch, we can use that to detect it.
        // Note: this creates issues with `window.fetch` polyfills and
        // overrides; see:
        // https://github.com/localForage/localForage/issues/856
        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
        // some outdated implementations of IDB that appear on Samsung
        // and HTC Android devices <4.4 are missing IDBKeyRange
        // See: https://github.com/mozilla/localForage/issues/128
        // See: https://github.com/mozilla/localForage/issues/272
        typeof IDBKeyRange !== 'undefined';
    } catch (e) {
        return false;
    }
}

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
        return new Blob(parts, properties);
    } catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}

// This is CommonJS because lie is an external dependency, so Rollup
// can just ignore it.
if (typeof Promise === 'undefined') {
    // In the "nopromises" build this will just throw if you don't have
    // a global promise object, but it would throw anyway later.
    _dereq_(3);
}
var Promise$1 = Promise;

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function executeTwoCallbacks(promise, callback, errorCallback) {
    if (typeof callback === 'function') {
        promise.then(callback);
    }

    if (typeof errorCallback === 'function') {
        promise["catch"](errorCallback);
    }
}

function normalizeKey(key) {
    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    return key;
}

function getCallback() {
    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        return arguments[arguments.length - 1];
    }
}

// Some code originally from async_storage.js in
// [Gaia](https://github.com/mozilla-b2g/gaia).

var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
var supportsBlobs = void 0;
var dbContexts = {};
var toString = Object.prototype.toString;

// Transaction Modes
var READ_ONLY = 'readonly';
var READ_WRITE = 'readwrite';

// Transform a binary string to an array buffer, because otherwise
// weird stuff happens when you try to work with the binary string directly.
// It is known.
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function _binStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
// Code borrowed from PouchDB. See:
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
//
function _checkBlobSupportWithoutCaching(idb) {
    return new Promise$1(function (resolve) {
        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
        var blob = createBlob(['']);
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

        txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
        };

        txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
        };
    })["catch"](function () {
        return false; // error, so assume unsupported
    });
}

function _checkBlobSupport(idb) {
    if (typeof supportsBlobs === 'boolean') {
        return Promise$1.resolve(supportsBlobs);
    }
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
        supportsBlobs = value;
        return supportsBlobs;
    });
}

function _deferReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Create a deferred object representing the current database operation.
    var deferredOperation = {};

    deferredOperation.promise = new Promise$1(function (resolve, reject) {
        deferredOperation.resolve = resolve;
        deferredOperation.reject = reject;
    });

    // Enqueue the deferred operation.
    dbContext.deferredOperations.push(deferredOperation);

    // Chain its promise to the database readiness.
    if (!dbContext.dbReady) {
        dbContext.dbReady = deferredOperation.promise;
    } else {
        dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
        });
    }
}

function _advanceReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Resolve its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.resolve();
        return deferredOperation.promise;
    }
}

function _rejectReadiness(dbInfo, err) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Reject its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.reject(err);
        return deferredOperation.promise;
    }
}

function _getConnection(dbInfo, upgradeNeeded) {
    return new Promise$1(function (resolve, reject) {
        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

        if (dbInfo.db) {
            if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
            } else {
                return resolve(dbInfo.db);
            }
        }

        var dbArgs = [dbInfo.name];

        if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
        }

        var openreq = idb.open.apply(idb, dbArgs);

        if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
                var db = openreq.result;
                try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                } catch (ex) {
                    if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                        throw ex;
                    }
                }
            };
        }

        openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
        };

        openreq.onsuccess = function () {
            resolve(openreq.result);
            _advanceReadiness(dbInfo);
        };
    });
}

function _getOriginalConnection(dbInfo) {
    return _getConnection(dbInfo, false);
}

function _getUpgradedConnection(dbInfo) {
    return _getConnection(dbInfo, true);
}

function _isUpgradeNeeded(dbInfo, defaultVersion) {
    if (!dbInfo.db) {
        return true;
    }

    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
    var isDowngrade = dbInfo.version < dbInfo.db.version;
    var isUpgrade = dbInfo.version > dbInfo.db.version;

    if (isDowngrade) {
        // If the version is not the default one
        // then warn for impossible downgrade.
        if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }
        // Align the versions to prevent errors.
        dbInfo.version = dbInfo.db.version;
    }

    if (isUpgrade || isNewStore) {
        // If the store is new then increment the version (if needed).
        // This will trigger an "upgradeneeded" event which is required
        // for creating a store.
        if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
            }
        }

        return true;
    }

    return false;
}

// encode a blob for indexeddb engines that don't support blobs
function _encodeBlob(blob) {
    return new Promise$1(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
            });
        };
        reader.readAsBinaryString(blob);
    });
}

// decode an encoded blob
function _decodeBlob(encodedBlob) {
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
    return createBlob([arrayBuff], { type: encodedBlob.type });
}

// is this one of our fancy encoded blobs?
function _isEncodedBlob(value) {
    return value && value.__local_forage_encoded_blob;
}

// Specialize the default `ready()` function by making it dependent
// on the current database operations. Thus, the driver will be actually
// ready when it's been initialized (default) *and* there are no pending
// operations on the database (initiated by some other instances).
function _fullyReady(callback) {
    var self = this;

    var promise = self._initReady().then(function () {
        var dbContext = dbContexts[self._dbInfo.name];

        if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
        }
    });

    executeTwoCallbacks(promise, callback, callback);
    return promise;
}

// Try to establish a new db connection to replace the
// current one which is broken (i.e. experiencing
// InvalidStateError while creating a transaction).
function _tryReconnect(dbInfo) {
    _deferReadiness(dbInfo);

    var dbContext = dbContexts[dbInfo.name];
    var forages = dbContext.forages;

    for (var i = 0; i < forages.length; i++) {
        var forage = forages[i];
        if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
        }
    }
    dbInfo.db = null;

    return _getOriginalConnection(dbInfo).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        // store the latest db reference
        // in case the db was upgraded
        dbInfo.db = dbContext.db = db;
        for (var i = 0; i < forages.length; i++) {
            forages[i]._dbInfo.db = db;
        }
    })["catch"](function (err) {
        _rejectReadiness(dbInfo, err);
        throw err;
    });
}

// FF doesn't like Promises (micro-tasks) and IDDB store operations,
// so we have to do it with callbacks
function createTransaction(dbInfo, mode, callback, retries) {
    if (retries === undefined) {
        retries = 1;
    }

    try {
        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
        callback(null, tx);
    } catch (err) {
        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
            return Promise$1.resolve().then(function () {
                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                    // increase the db version, to create the new ObjectStore
                    if (dbInfo.db) {
                        dbInfo.version = dbInfo.db.version + 1;
                    }
                    // Reopen the database for upgrading.
                    return _getUpgradedConnection(dbInfo);
                }
            }).then(function () {
                return _tryReconnect(dbInfo).then(function () {
                    createTransaction(dbInfo, mode, callback, retries - 1);
                });
            })["catch"](callback);
        }

        callback(err);
    }
}

function createDbContext() {
    return {
        // Running localForages sharing a database.
        forages: [],
        // Shared database.
        db: null,
        // Database readiness (promise).
        dbReady: null,
        // Deferred operations on the database.
        deferredOperations: []
    };
}

// Open the IndexedDB database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    // Get the current context of the database;
    var dbContext = dbContexts[dbInfo.name];

    // ...or create a new context.
    if (!dbContext) {
        dbContext = createDbContext();
        // Register the new context in the global container.
        dbContexts[dbInfo.name] = dbContext;
    }

    // Register itself as a running localForage in the current context.
    dbContext.forages.push(self);

    // Replace the default `ready()` function with the specialized one.
    if (!self._initReady) {
        self._initReady = self.ready;
        self.ready = _fullyReady;
    }

    // Create an array of initialization states of the related localForages.
    var initPromises = [];

    function ignoreErrors() {
        // Don't handle errors here,
        // just makes sure related localForages aren't pending.
        return Promise$1.resolve();
    }

    for (var j = 0; j < dbContext.forages.length; j++) {
        var forage = dbContext.forages[j];
        if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
        }
    }

    // Take a snapshot of the related localForages.
    var forages = dbContext.forages.slice(0);

    // Initialize the connection process only when
    // all the related localForages aren't pending.
    return Promise$1.all(initPromises).then(function () {
        dbInfo.db = dbContext.db;
        // Get the connection or open a new one without upgrade.
        return _getOriginalConnection(dbInfo);
    }).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        dbInfo.db = dbContext.db = db;
        self._dbInfo = dbInfo;
        // Share the final connection amongst related localForages.
        for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];
            if (forage !== self) {
                // Self is already up-to-date.
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
            }
        }
    });
}

function getItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.get(key);

                    req.onsuccess = function () {
                        var value = req.result;
                        if (value === undefined) {
                            value = null;
                        }
                        if (_isEncodedBlob(value)) {
                            value = _decodeBlob(value);
                        }
                        resolve(value);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items stored in database.
function iterate(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (cursor) {
                            var value = cursor.value;
                            if (_isEncodedBlob(value)) {
                                value = _decodeBlob(value);
                            }
                            var result = iterator(value, cursor.key, iterationNumber++);

                            // when the iterator callback returns any
                            // (non-`undefined`) value, then we stop
                            // the iteration immediately
                            if (result !== void 0) {
                                resolve(result);
                            } else {
                                cursor["continue"]();
                            }
                        } else {
                            resolve();
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);

    return promise;
}

function setItem(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        var dbInfo;
        self.ready().then(function () {
            dbInfo = self._dbInfo;
            if (toString.call(value) === '[object Blob]') {
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                    if (blobSupport) {
                        return value;
                    }
                    return _encodeBlob(value);
                });
            }
            return value;
        }).then(function (value) {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);

                    // The reason we don't _save_ null is because IE 10 does
                    // not support saving the `null` type in IndexedDB. How
                    // ironic, given the bug below!
                    // See: https://github.com/mozilla/localForage/issues/161
                    if (value === null) {
                        value = undefined;
                    }

                    var req = store.put(value, key);

                    transaction.oncomplete = function () {
                        // Cast to undefined so the value passed to
                        // callback/promise is the same as what one would get out
                        // of `getItem()` later. This leads to some weirdness
                        // (setItem('foo', undefined) will return `null`), but
                        // it's not my fault localStorage is our baseline and that
                        // it's weird.
                        if (value === undefined) {
                            value = null;
                        }

                        resolve(value);
                    };
                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function removeItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    // We use a Grunt task to make this safe for IE and some
                    // versions of Android (including those used by Cordova).
                    // Normally IE won't like `.delete()` and will insist on
                    // using `['delete']()`, but we have a build step that
                    // fixes this for us now.
                    var req = store["delete"](key);
                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onerror = function () {
                        reject(req.error);
                    };

                    // The request will be also be aborted if we've exceeded our storage
                    // space.
                    transaction.onabort = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function clear(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.clear();

                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function length(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.count();

                    req.onsuccess = function () {
                        resolve(req.result);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function key(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        if (n < 0) {
            resolve(null);

            return;
        }

        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openKeyCursor();

                    req.onsuccess = function () {
                        var cursor = req.result;
                        if (!cursor) {
                            // this means there weren't enough keys
                            resolve(null);

                            return;
                        }

                        if (n === 0) {
                            // We have the first key, return it if that's what they
                            // wanted.
                            resolve(cursor.key);
                        } else {
                            if (!advanced) {
                                // Otherwise, ask the cursor to skip ahead n
                                // records.
                                advanced = true;
                                cursor.advance(n);
                            } else {
                                // When we get here, we've got the nth key.
                                resolve(cursor.key);
                            }
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openKeyCursor();
                    var keys = [];

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                            resolve(keys);
                            return;
                        }

                        keys.push(cursor.key);
                        cursor["continue"]();
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
                forages[i]._dbInfo.db = db;
            }
            return db;
        });

        if (!options.storeName) {
            promise = dbPromise.then(function (db) {
                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                }

                var dropDBPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.deleteDatabase(options.name);

                    req.onerror = req.onblocked = function (err) {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        reject(err);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        resolve(db);
                    };
                });

                return dropDBPromise.then(function (db) {
                    dbContext.db = db;
                    for (var i = 0; i < forages.length; i++) {
                        var _forage = forages[i];
                        _advanceReadiness(_forage._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        } else {
            promise = dbPromise.then(function (db) {
                if (!db.objectStoreNames.contains(options.storeName)) {
                    return;
                }

                var newVersion = db.version + 1;

                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                    forage._dbInfo.version = newVersion;
                }

                var dropObjectPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.open(options.name, newVersion);

                    req.onerror = function (err) {
                        var db = req.result;
                        db.close();
                        reject(err);
                    };

                    req.onupgradeneeded = function () {
                        var db = req.result;
                        db.deleteObjectStore(options.storeName);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        db.close();
                        resolve(db);
                    };
                });

                return dropObjectPromise.then(function (db) {
                    dbContext.db = db;
                    for (var j = 0; j < forages.length; j++) {
                        var _forage2 = forages[j];
                        _forage2._dbInfo.db = db;
                        _advanceReadiness(_forage2._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        }
    }

    executeCallback(promise, callback);
    return promise;
}

var asyncStorage = {
    _driver: 'asyncStorage',
    _initStorage: _initStorage,
    _support: isIndexedDBValid(),
    iterate: iterate,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    length: length,
    key: key,
    keys: keys,
    dropInstance: dropInstance
};

function isWebSQLValid() {
    return typeof openDatabase === 'function';
}

// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
// it to Base64, so this is how we store it to prevent very strange errors with less
// verbose ways of binary <-> string data storage.
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var BLOB_TYPE_PREFIX = '~~local_forage_type~';
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

var SERIALIZED_MARKER = '__lfsc__:';
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

// OMG the serializations!
var TYPE_ARRAYBUFFER = 'arbf';
var TYPE_BLOB = 'blob';
var TYPE_INT8ARRAY = 'si08';
var TYPE_UINT8ARRAY = 'ui08';
var TYPE_UINT8CLAMPEDARRAY = 'uic8';
var TYPE_INT16ARRAY = 'si16';
var TYPE_INT32ARRAY = 'si32';
var TYPE_UINT16ARRAY = 'ur16';
var TYPE_UINT32ARRAY = 'ui32';
var TYPE_FLOAT32ARRAY = 'fl32';
var TYPE_FLOAT64ARRAY = 'fl64';
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

var toString$1 = Object.prototype.toString;

function stringToBuffer(serializedString) {
    // Fill the string into a ArrayBuffer.
    var bufferLength = serializedString.length * 0.75;
    var len = serializedString.length;
    var i;
    var p = 0;
    var encoded1, encoded2, encoded3, encoded4;

    if (serializedString[serializedString.length - 1] === '=') {
        bufferLength--;
        if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = new ArrayBuffer(bufferLength);
    var bytes = new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

        /*jslint bitwise: true */
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
}

// Converts a buffer to a string to store, serialized, in the backend
// storage library.
function bufferToString(buffer) {
    // base64-arraybuffer
    var bytes = new Uint8Array(buffer);
    var base64String = '';
    var i;

    for (i = 0; i < bytes.length; i += 3) {
        /*jslint bitwise: true */
        base64String += BASE_CHARS[bytes[i] >> 2];
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64String += BASE_CHARS[bytes[i + 2] & 63];
    }

    if (bytes.length % 3 === 2) {
        base64String = base64String.substring(0, base64String.length - 1) + '=';
    } else if (bytes.length % 3 === 1) {
        base64String = base64String.substring(0, base64String.length - 2) + '==';
    }

    return base64String;
}

// Serialize a value, afterwards executing a callback (which usually
// instructs the `setItem()` callback/promise to be executed). This is how
// we store binary data with localStorage.
function serialize(value, callback) {
    var valueType = '';
    if (value) {
        valueType = toString$1.call(value);
    }

    // Cannot use `value instanceof ArrayBuffer` or such here, as these
    // checks fail when running the tests using casper.js...
    //
    // TODO: See why those tests fail and use a better solution.
    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with
        // a special marker.
        var buffer;
        var marker = SERIALIZED_MARKER;

        if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
        } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
                marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
                marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
                marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
                marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
                marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
                marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
                marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
                marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
                marker += TYPE_FLOAT64ARRAY;
            } else {
                callback(new Error('Failed to get type for BinaryArray'));
            }
        }

        callback(marker + bufferToString(buffer));
    } else if (valueType === '[object Blob]') {
        // Conver the blob to a binaryArray and then to a string.
        var fileReader = new FileReader();

        fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
        };

        fileReader.readAsArrayBuffer(value);
    } else {
        try {
            callback(JSON.stringify(value));
        } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
        }
    }
}

// Deserialize data we've inserted into a value column/field. We place
// special markers into our strings to mark them as encoded; this isn't
// as nice as a meta field, but it's the only sane thing we can do whilst
// keeping localStorage support intact.
//
// Oftentimes this will just deserialize JSON content, but if we have a
// special marker (SERIALIZED_MARKER, defined above), we will extract
// some kind of arraybuffer/binary data/typed array out of the string.
function deserialize(value) {
    // If we haven't marked this string as being specially serialized (i.e.
    // something other than serialized JSON), we can just return it and be
    // done with it.
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
        return JSON.parse(value);
    }

    // The following code deals with deserializing some kind of Blob or
    // TypedArray. First we separate out the type of data we're dealing
    // with from the data itself.
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

    var blobType;
    // Backwards-compatible blob type serialization strategy.
    // DBs created with older versions of localForage will simply not have the blob type.
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
        blobType = matcher[1];
        serializedString = serializedString.substring(matcher[0].length);
    }
    var buffer = stringToBuffer(serializedString);

    // Return the right type based on the code/type set during
    // serialization.
    switch (type) {
        case TYPE_ARRAYBUFFER:
            return buffer;
        case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
        case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
        case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
        case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
        case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
        case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
        case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
        case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
        case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
        case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
        default:
            throw new Error('Unkown type: ' + type);
    }
}

var localforageSerializer = {
    serialize: serialize,
    deserialize: deserialize,
    stringToBuffer: stringToBuffer,
    bufferToString: bufferToString
};

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

function createDbTable(t, dbInfo, callback, errorCallback) {
    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
}

// Open the WebSQL database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage$1(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
        }
    }

    var dbInfoPromise = new Promise$1(function (resolve, reject) {
        // Open the database; the openDatabase API will automatically
        // create it for us if it doesn't exist.
        try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
        } catch (e) {
            return reject(e);
        }

        // Create our key/value table if it doesn't exist.
        dbInfo.db.transaction(function (t) {
            createDbTable(t, dbInfo, function () {
                self._dbInfo = dbInfo;
                resolve();
            }, function (t, error) {
                reject(error);
            });
        }, reject);
    });

    dbInfo.serializer = localforageSerializer;
    return dbInfoPromise;
}

function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
    t.executeSql(sqlStatement, args, callback, function (t, error) {
        if (error.code === error.SYNTAX_ERR) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
                if (!results.rows.length) {
                    // if the table is missing (was deleted)
                    // re-create it table and retry
                    createDbTable(t, dbInfo, function () {
                        t.executeSql(sqlStatement, args, callback, errorCallback);
                    }, errorCallback);
                } else {
                    errorCallback(t, error);
                }
            }, errorCallback);
        } else {
            errorCallback(t, error);
        }
    }, errorCallback);
}

function getItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;

                    // Check to see if this is serialized content we need to
                    // unpack.
                    if (result) {
                        result = dbInfo.serializer.deserialize(result);
                    }

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function iterate$1(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;

            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                    var rows = results.rows;
                    var length = rows.length;

                    for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;

                        // Check to see if this is serialized content
                        // we need to unpack.
                        if (result) {
                            result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1);

                        // void(0) prevents problems with redefinition
                        // of `undefined`.
                        if (result !== void 0) {
                            resolve(result);
                            return;
                        }
                    }

                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function _setItem(key, value, callback, retriesLeft) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
                value = null;
            }

            // Save the original value to pass to the callback.
            var originalValue = value;

            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    dbInfo.db.transaction(function (t) {
                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);
                        }, function (t, error) {
                            reject(error);
                        });
                    }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                            // We reject the callback outright for now, but
                            // it's worth trying to re-run the transaction.
                            // Even if the user accepts the prompt to use
                            // more storage on Safari, this error will
                            // be called.
                            //
                            // Try to re-run the transaction.
                            if (retriesLeft > 0) {
                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                return;
                            }
                            reject(sqlError);
                        }
                    });
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function setItem$1(key, value, callback) {
    return _setItem.apply(this, [key, value, callback, 1]);
}

function removeItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Deletes every item in the table.
// TODO: Find out if this resets the AUTO_INCREMENT number.
function clear$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Does a simple `COUNT(key)` to get the number of items stored in
// localForage.
function length$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                // Ahhh, SQL makes this one soooooo easy.
                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                    var result = results.rows.item(0).c;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Return the key located at key index X; essentially gets the key from a
// `WHERE id = ?`. This is the most efficient way I can think to implement
// this rarely-used (in my experience) part of the API, but it can seem
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
// the ID of each key will change every time it's updated. Perhaps a stored
// procedure for the `setItem()` SQL would solve this problem?
// TODO: Don't change ID on `setItem()`.
function key$1(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                    var keys = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                    }

                    resolve(keys);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// https://www.w3.org/TR/webdatabase/#databases
// > There is no way to enumerate or delete the databases available for an origin from this API.
function getAllStoreNames(db) {
    return new Promise$1(function (resolve, reject) {
        db.transaction(function (t) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                var storeNames = [];

                for (var i = 0; i < results.rows.length; i++) {
                    storeNames.push(results.rows.item(i).name);
                }

                resolve({
                    db: db,
                    storeNames: storeNames
                });
            }, function (t, error) {
                reject(error);
            });
        }, function (sqlError) {
            reject(sqlError);
        });
    });
}

function dropInstance$1(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            var db;
            if (options.name === currentConfig.name) {
                // use the db reference of the current instance
                db = self._dbInfo.db;
            } else {
                db = openDatabase(options.name, '', '', 0);
            }

            if (!options.storeName) {
                // drop all database tables
                resolve(getAllStoreNames(db));
            } else {
                resolve({
                    db: db,
                    storeNames: [options.storeName]
                });
            }
        }).then(function (operationInfo) {
            return new Promise$1(function (resolve, reject) {
                operationInfo.db.transaction(function (t) {
                    function dropTable(storeName) {
                        return new Promise$1(function (resolve, reject) {
                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                                resolve();
                            }, function (t, error) {
                                reject(error);
                            });
                        });
                    }

                    var operations = [];
                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                        operations.push(dropTable(operationInfo.storeNames[i]));
                    }

                    Promise$1.all(operations).then(function () {
                        resolve();
                    })["catch"](function (e) {
                        reject(e);
                    });
                }, function (sqlError) {
                    reject(sqlError);
                });
            });
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var webSQLStorage = {
    _driver: 'webSQLStorage',
    _initStorage: _initStorage$1,
    _support: isWebSQLValid(),
    iterate: iterate$1,
    getItem: getItem$1,
    setItem: setItem$1,
    removeItem: removeItem$1,
    clear: clear$1,
    length: length$1,
    key: key$1,
    keys: keys$1,
    dropInstance: dropInstance$1
};

function isLocalStorageValid() {
    try {
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
        // in IE8 typeof localStorage.setItem === 'object'
        !!localStorage.setItem;
    } catch (e) {
        return false;
    }
}

function _getKeyPrefix(options, defaultConfig) {
    var keyPrefix = options.name + '/';

    if (options.storeName !== defaultConfig.storeName) {
        keyPrefix += options.storeName + '/';
    }
    return keyPrefix;
}

// Check if localStorage throws when saving an item
function checkIfLocalStorageThrows() {
    var localStorageTestKey = '_localforage_support_test';

    try {
        localStorage.setItem(localStorageTestKey, true);
        localStorage.removeItem(localStorageTestKey);

        return false;
    } catch (e) {
        return true;
    }
}

// Check if localStorage is usable and allows to save an item
// This method checks if localStorage is usable in Safari Private Browsing
// mode, or in any other case where the available quota for localStorage
// is 0 and there wasn't any saved items yet.
function _isLocalStorageUsable() {
    return !checkIfLocalStorageThrows() || localStorage.length > 0;
}

// Config the localStorage backend, using options set in the config.
function _initStorage$2(options) {
    var self = this;
    var dbInfo = {};
    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

    if (!_isLocalStorageUsable()) {
        return Promise$1.reject();
    }

    self._dbInfo = dbInfo;
    dbInfo.serializer = localforageSerializer;

    return Promise$1.resolve();
}

// Remove all keys from the datastore, effectively destroying all data in
// the app's key/value store!
function clear$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var keyPrefix = self._dbInfo.keyPrefix;

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Retrieve an item from the store. Unlike the original async_storage
// library in Gaia, we don't modify return values at all. If a key's value
// is `undefined`, we pass that value to the callback function.
function getItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result = localStorage.getItem(dbInfo.keyPrefix + key);

        // If a result was found, parse it from the serialized
        // string into a JS object. If result isn't truthy, the key
        // is likely undefined and we'll pass it straight to the
        // callback.
        if (result) {
            result = dbInfo.serializer.deserialize(result);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items in the store.
function iterate$2(iterator, callback) {
    var self = this;

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var keyPrefix = dbInfo.keyPrefix;
        var keyPrefixLength = keyPrefix.length;
        var length = localStorage.length;

        // We use a dedicated iterator instead of the `i` variable below
        // so other keys we fetch in localStorage aren't counted in
        // the `iterationNumber` argument passed to the `iterate()`
        // callback.
        //
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
        var iterationNumber = 1;

        for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
                continue;
            }
            var value = localStorage.getItem(key);

            // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.
            if (value) {
                value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
                return value;
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Same as localStorage's key() method, except takes a callback.
function key$2(n, callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result;
        try {
            result = localStorage.key(n);
        } catch (error) {
            result = null;
        }

        // Remove the prefix from the key, if a key is found.
        if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var length = localStorage.length;
        var keys = [];

        for (var i = 0; i < length; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
        }

        return keys;
    });

    executeCallback(promise, callback);
    return promise;
}

// Supply the number of keys in the datastore to the callback function.
function length$2(callback) {
    var self = this;
    var promise = self.keys().then(function (keys) {
        return keys.length;
    });

    executeCallback(promise, callback);
    return promise;
}

// Remove an item from the store, nice and simple.
function removeItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        localStorage.removeItem(dbInfo.keyPrefix + key);
    });

    executeCallback(promise, callback);
    return promise;
}

// Set a key's value and run an optional callback once the value is set.
// Unlike Gaia's implementation, the callback function is passed the value,
// in case you want to operate on that value only after you're sure it
// saved, or something like that.
function setItem$2(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        // Convert undefined values to null.
        // https://github.com/mozilla/localForage/pull/42
        if (value === undefined) {
            value = null;
        }

        // Save the original value to pass to the callback.
        var originalValue = value;

        return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                    } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                            reject(e);
                        }
                        reject(e);
                    }
                }
            });
        });
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance$2(options, callback) {
    callback = getCallback.apply(this, arguments);

    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        var currentConfig = this.config();
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            if (!options.storeName) {
                resolve(options.name + '/');
            } else {
                resolve(_getKeyPrefix(options, self._defaultConfig));
            }
        }).then(function (keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var key = localStorage.key(i);

                if (key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key);
                }
            }
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var localStorageWrapper = {
    _driver: 'localStorageWrapper',
    _initStorage: _initStorage$2,
    _support: isLocalStorageValid(),
    iterate: iterate$2,
    getItem: getItem$2,
    setItem: setItem$2,
    removeItem: removeItem$2,
    clear: clear$2,
    length: length$2,
    key: key$2,
    keys: keys$2,
    dropInstance: dropInstance$2
};

var sameValue = function sameValue(x, y) {
    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
};

var includes = function includes(array, searchElement) {
    var len = array.length;
    var i = 0;
    while (i < len) {
        if (sameValue(array[i], searchElement)) {
            return true;
        }
        i++;
    }

    return false;
};

var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

// Drivers are stored here when `defineDriver()` is called.
// They are shared across all instances of localForage.
var DefinedDrivers = {};

var DriverSupport = {};

var DefaultDrivers = {
    INDEXEDDB: asyncStorage,
    WEBSQL: webSQLStorage,
    LOCALSTORAGE: localStorageWrapper
};

var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

var OptionalDriverMethods = ['dropInstance'];

var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

var DefaultConfig = {
    description: '',
    driver: DefaultDriverOrder.slice(),
    name: 'localforage',
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
    // we can use without a prompt.
    size: 4980736,
    storeName: 'keyvaluepairs',
    version: 1.0
};

function callWhenReady(localForageInstance, libraryMethod) {
    localForageInstance[libraryMethod] = function () {
        var _args = arguments;
        return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
        });
    };
}

function extend() {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg) {
            for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                    } else {
                        arguments[0][_key] = arg[_key];
                    }
                }
            }
        }
    }

    return arguments[0];
}

var LocalForage = function () {
    function LocalForage(options) {
        _classCallCheck(this, LocalForage);

        for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;

                if (!DefinedDrivers[driverName]) {
                    // we don't need to wait for the promise,
                    // since the default drivers can be defined
                    // in a blocking manner
                    this.defineDriver(driver);
                }
            }
        }

        this._defaultConfig = extend({}, DefaultConfig);
        this._config = extend({}, this._defaultConfig, options);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;

        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver)["catch"](function () {});
    }

    // Set any config values for localForage; can be called anytime before
    // the first API call (e.g. `getItem`, `setItem`).
    // We loop through options so we don't overwrite existing config
    // values.


    LocalForage.prototype.config = function config(options) {
        // If the options argument is an object, we use it to set values.
        // Otherwise, we return either a specified config value or all
        // config values.
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
                return new Error("Can't call config() after localforage " + 'has been used.');
            }

            for (var i in options) {
                if (i === 'storeName') {
                    options[i] = options[i].replace(/\W/g, '_');
                }

                if (i === 'version' && typeof options[i] !== 'number') {
                    return new Error('Database version must be a number.');
                }

                this._config[i] = options[i];
            }

            // after all config options are set and
            // the driver option is used, try setting it
            if ('driver' in options && options.driver) {
                return this.setDriver(this._config.driver);
            }

            return true;
        } else if (typeof options === 'string') {
            return this._config[options];
        } else {
            return this._config;
        }
    };

    // Used to define a custom driver, shared across all instances of
    // localForage.


    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
        var promise = new Promise$1(function (resolve, reject) {
            try {
                var driverName = driverObject._driver;
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                // A driver name should be defined and not overlap with the
                // library-defined, default drivers.
                if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                }

                var driverMethods = LibraryMethods.concat('_initStorage');
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                    var driverMethodName = driverMethods[i];

                    // when the property is there,
                    // it should be a method even when optional
                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                        reject(complianceError);
                        return;
                    }
                }

                var configureMissingMethods = function configureMissingMethods() {
                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                        return function () {
                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                            var promise = Promise$1.reject(error);
                            executeCallback(promise, arguments[arguments.length - 1]);
                            return promise;
                        };
                    };

                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                        var optionalDriverMethod = OptionalDriverMethods[_i];
                        if (!driverObject[optionalDriverMethod]) {
                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                        }
                    }
                };

                configureMissingMethods();

                var setDriverSupport = function setDriverSupport(support) {
                    if (DefinedDrivers[driverName]) {
                        console.info('Redefining LocalForage driver: ' + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    // don't use a then, so that we can define
                    // drivers that have simple _support methods
                    // in a blocking manner
                    resolve();
                };

                if ('_support' in driverObject) {
                    if (driverObject._support && typeof driverObject._support === 'function') {
                        driverObject._support().then(setDriverSupport, reject);
                    } else {
                        setDriverSupport(!!driverObject._support);
                    }
                } else {
                    setDriverSupport(true);
                }
            } catch (e) {
                reject(e);
            }
        });

        executeTwoCallbacks(promise, callback, errorCallback);
        return promise;
    };

    LocalForage.prototype.driver = function driver() {
        return this._driver || null;
    };

    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
        return getDriverPromise;
    };

    LocalForage.prototype.getSerializer = function getSerializer(callback) {
        var serializerPromise = Promise$1.resolve(localforageSerializer);
        executeTwoCallbacks(serializerPromise, callback);
        return serializerPromise;
    };

    LocalForage.prototype.ready = function ready(callback) {
        var self = this;

        var promise = self._driverSet.then(function () {
            if (self._ready === null) {
                self._ready = self._initDriver();
            }

            return self._ready;
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
    };

    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
        var self = this;

        if (!isArray(drivers)) {
            drivers = [drivers];
        }

        var supportedDrivers = this._getSupportedDrivers(drivers);

        function setDriverToConfig() {
            self._config.driver = self.driver();
        }

        function extendSelfWithDriver(driver) {
            self._extend(driver);
            setDriverToConfig();

            self._ready = self._initStorage(self._config);
            return self._ready;
        }

        function initDriver(supportedDrivers) {
            return function () {
                var currentDriverIndex = 0;

                function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                }

                return driverPromiseLoop();
            };
        }

        // There might be a driver initialization in progress
        // so wait for it to finish in order to avoid a possible
        // race condition to set _dbInfo
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
        }) : Promise$1.resolve();

        this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;

            return self.getDriver(driverName).then(function (driver) {
                self._driver = driver._driver;
                setDriverToConfig();
                self._wrapLibraryMethodsWithReady();
                self._initDriver = initDriver(supportedDrivers);
            });
        })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
        });

        executeTwoCallbacks(this._driverSet, callback, errorCallback);
        return this._driverSet;
    };

    LocalForage.prototype.supports = function supports(driverName) {
        return !!DriverSupport[driverName];
    };

    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
    };

    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
        var supportedDrivers = [];
        for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
            }
        }
        return supportedDrivers;
    };

    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
        // Add a stub for each driver API method that delays the call to the
        // corresponding driver method until localForage is ready. These stubs
        // will be replaced by the driver methods as soon as the driver is
        // loaded, so there is no performance impact.
        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
        }
    };

    LocalForage.prototype.createInstance = function createInstance(options) {
        return new LocalForage(options);
    };

    return LocalForage;
}();

// The actual localForage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.


var localforage_js = new LocalForage();

module.exports = localforage_js;

},{"3":3}]},{},[4])(4)
});


/***/ }),

/***/ "./src/app/core/exercise.service.ts":
/*!******************************************!*\
  !*** ./src/app/core/exercise.service.ts ***!
  \******************************************/
/*! exports provided: ExerciseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseService", function() { return ExerciseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.service */ "./src/app/core/settings.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");







class ExerciseService {
    constructor(settings, http, firestore) {
        this.settings = settings;
        this.http = http;
        this.firestore = firestore;
        // distribute track information to the application
        this.tracksCache = [];
        this.tracks = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.tracksCache);
        // distribute exercise information to the application
        this.exerciseCache = [];
        this.exercises = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.exerciseCache);
        // handle subscriptions
        this.subscriptions();
        // and check sync status
        this.checkSyncStatus();
    }
    /**
     * Subscribe to Firestore and check if a sync is necessary.
     * Subscribe to tracks and exercises only if out of sync.
     */
    checkSyncStatus() {
        // first get local version
        localforage__WEBPACK_IMPORTED_MODULE_1__["getItem"]('versions').then((v) => {
            if (v) {
                this.localVersions = v;
            }
            else {
                // set a negative version to force sync
                this.localVersions = { tracks: -1, exercises: -1 };
            }
        }).then(() => {
            // subscribe to firebase version
            this.firestore.collection('config').doc('sync').valueChanges().subscribe({
                next: (v) => {
                    // store the versions
                    this.remoteVersions = v;
                    // check the version
                    if (this.localVersions.tracks < this.remoteVersions.tracks) {
                        this.syncTracks();
                    }
                    else {
                        this.loadLocalTracks();
                    }
                    if (this.localVersions.exercises < this.remoteVersions.exercises) {
                        this.syncExercises();
                    }
                    else {
                        this.loadLocalExercises();
                    }
                }
            });
        });
    }
    /**
     * Load the current set of tracks from local storage
     */
    loadLocalTracks() {
        localforage__WEBPACK_IMPORTED_MODULE_1__["getItem"]('tracks').then((t) => {
            this.tracksCache = t;
            this.tracks.next(this.tracksCache);
        });
    }
    /**
     * Load the current set of exercises from local storage
     */
    loadLocalExercises() {
        localforage__WEBPACK_IMPORTED_MODULE_1__["getItem"]('exercises').then((e) => {
            this.exerciseCache = e;
            this.exercises.next(this.exerciseCache);
        });
    }
    /**
     * There is version mismatch between the local and remote version
     * of the tracks. Sync and update the local version number.
     */
    syncTracks() {
        this.firestore.collection('tracks').snapshotChanges().subscribe({
            next: refs => {
                this.tracksCache = refs.map(ref => {
                    return Object.assign({ id: ref.payload.doc.id }, ref.payload.doc.data());
                });
                // save to storage
                localforage__WEBPACK_IMPORTED_MODULE_1__["setItem"]('tracks', this.tracksCache).then(() => {
                    // publish new tracks
                    this.tracks.next(this.tracksCache);
                    // set new version
                    localforage__WEBPACK_IMPORTED_MODULE_1__["setItem"]('versions', Object.assign(Object.assign({}, this.localVersions), { tracks: this.remoteVersions.tracks }));
                });
            }
        });
    }
    /**
     * THere is a version mismatch between the local and reomte version
     * of the exercises. Sync and update the local version number.
     */
    syncExercises() {
        this.firestore.collection('exercises').snapshotChanges().subscribe({
            next: refs => {
                this.exerciseCache = refs.map(ref => {
                    return Object.assign({ id: ref.payload.doc.id }, ref.payload.doc.data());
                });
                // save to storage
                localforage__WEBPACK_IMPORTED_MODULE_1__["setItem"]('exercises', this.exerciseCache).then(() => {
                    // publish new exercises
                    this.exercises.next(this.exerciseCache);
                    // set the new exercise version
                    localforage__WEBPACK_IMPORTED_MODULE_1__["setItem"]('versions', Object.assign(Object.assign({}, this.localVersions), { exercises: this.remoteVersions.exercises }));
                });
            }
        });
    }
    subscriptions() {
        // subscribe to the current backend URL
        this.settings.backend.subscribe({
            next: url => this.backendUrl = url
        });
    }
    /**
     * Execute a given SQL query against the database backend.
     * @param query - SQL query.
     */
    executeSql(query, explain) {
        const opt = { params: { sql: query } };
        // TODO: for now, only text output EXPLAINs are included
        if (explain) {
            opt.params['explain'] = explain;
        }
        return new Promise((resolve, reject) => {
            this.http.get(this.backendUrl + 'execute', opt).subscribe({
                next: res => resolve(res),
                error: error => reject(error)
            });
        });
    }
    getExerciseById(id) {
        return new Promise((resolve, reject) => {
            const exercise = this.exerciseCache.find(e => e.id === id);
            if (exercise) {
                resolve(exercise);
            }
            else {
                reject();
            }
        });
    }
    getTrackIds() {
        return new Promise(resolve => {
            resolve(this.tracksCache.map(t => t.id));
        });
    }
}
ExerciseService.ɵfac = function ExerciseService_Factory(t) { return new (t || ExerciseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"])); };
ExerciseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExerciseService, factory: ExerciseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExerciseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _settings_service__WEBPACK_IMPORTED_MODULE_3__["SettingsService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~pages-console-page-console-page-module~pages-exercise-page-exercise-page-module~pages-home-p~8fad2ad7.js.map