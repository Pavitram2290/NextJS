"use strict";
exports.id = 623;
exports.ids = [623];
exports.modules = {

/***/ 623:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ realDB)
/* harmony export */ });
/* unused harmony exports initFirebase, db */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(492);
/* harmony import */ var _firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(628);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_database__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_0__]);
([_firebase_database__WEBPACK_IMPORTED_MODULE_2__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_app__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
// Modular Firebase v.9 Initialization.



const clientCredentials = {
    apiKey: "AIzaSyAyjsXuQzG2XJsbIuF6uWe9eWKzRfEtHmM",
    authDomain: "yasa-f94a6.firebaseapp.com",
    projectId: "yasa-f94a6",
    storageBucket: "yasa-f94a6.appspot.com",
    messagingSenderId: "709673327432",
    appId: "1:709673327432:web:60e0343a5f99b449a0b17d",
    measurementId: "G-MCJLSLZXHS"
};
function initFirebase() {
    if ("undefined" !== undefined) {
        initializeApp(clientCredentials);
        console.log("Firebase has been init successfully");
    }
}
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(clientCredentials);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);
const realDB = (0,_firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)(app);


});

/***/ })

};
;