"use strict";
(() => {
var exports = {};
exports.id = 567;
exports.ids = [567];
exports.modules = {

/***/ 628:
/***/ ((module) => {

module.exports = import("@firebase/database");;

/***/ }),

/***/ 745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 208:
/***/ ((module) => {

module.exports = import("firebase/database");;

/***/ }),

/***/ 492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ 948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(208);
/* harmony import */ var _lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(623);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_database__WEBPACK_IMPORTED_MODULE_0__, _lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_database__WEBPACK_IMPORTED_MODULE_0__, _lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res)=>{
    const dbRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.ref)(_lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_1__/* .realDB */ .d, "counts/" + req.query.id);
    return (0,firebase_database__WEBPACK_IMPORTED_MODULE_0__.onValue)(dbRef, (snapshot)=>{
        res.status(200).json({
            total: snapshot.val()
        });
    }, {
        onlyOnce: true
    });
});

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [623], () => (__webpack_exec__(948)));
module.exports = __webpack_exports__;

})();