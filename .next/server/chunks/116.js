"use strict";
exports.id = 116;
exports.ids = [116];
exports.modules = {

/***/ 31:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ initFirebase),
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "d": () => (/* binding */ realDB)
/* harmony export */ });
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
        (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(clientCredentials);
        console.log("Firebase has been init successfully");
    }
}
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(clientCredentials);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);
const realDB = (0,_firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)(app);


});

/***/ }),

/***/ 356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ mapUserData)
/* harmony export */ });
const mapUserData = (user)=>{
    const { uid , email , xa , displayName , photoUrl  } = user;
    return {
        id: uid,
        email,
        token: xa,
        name: displayName,
        profilePic: photoUrl
    };
};


/***/ }),

/***/ 593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zl": () => (/* binding */ getUserFromCookie),
/* harmony export */   "rk": () => (/* binding */ setUserCookie),
/* harmony export */   "gq": () => (/* binding */ removeUserCookie)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

const getUserFromCookie = ()=>{
    const cookie = js_cookie__WEBPACK_IMPORTED_MODULE_0___default().get('auth');
    if (!cookie) {
        return;
    }
    return JSON.parse(cookie);
};
const setUserCookie = (user)=>{
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default().set('auth', user, {
        // firebase id tokens expire in one hour
        // set cookie expiry to match
        expires: 1 / 24
    });
};
const removeUserCookie = ()=>js_cookie__WEBPACK_IMPORTED_MODULE_0___default().remove('auth')
;


/***/ })

};
;