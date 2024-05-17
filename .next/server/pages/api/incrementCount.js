"use strict";
(() => {
var exports = {};
exports.id = 44;
exports.ids = [44];
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

/***/ 463:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(745);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(208);
/* harmony import */ var _lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(623);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_database__WEBPACK_IMPORTED_MODULE_1__, _lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_0__]);
([firebase_database__WEBPACK_IMPORTED_MODULE_1__, _lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



const incrementCount = async (req, res)=>{
    const dbRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.ref)(_lib_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_2__/* .realDB */ .d, "counts/" + req.query.id);
    const { snapshot  } = await (0,firebase_database__WEBPACK_IMPORTED_MODULE_1__.runTransaction)(dbRef, (count)=>{
        if (count === null) {
            return 1;
        }
        return count + 1;
    });
    return res.status(200).json({
        total: snapshot.val()
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (incrementCount);

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [623], () => (__webpack_exec__(463)));
module.exports = __webpack_exports__;

})();