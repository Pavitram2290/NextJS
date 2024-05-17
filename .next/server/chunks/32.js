"use strict";
exports.id = 32;
exports.ids = [32];
exports.modules = {

/***/ 7032:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__, axios__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function PriceList() {
    const [pricing, setPricing] = useState([]);
    const getPricingList = ()=>{
        const apiUrl = "https://us-central1-yasa-21022022.cloudfunctions.net/GetPackages";
        const headers = {
            langid: 2
        };
        axios.get(apiUrl, {
            headers
        }).then((response)=>{
            setPricing(response.data.Data);
        }).catch((error)=>{
            console.error("Error posting data:", error);
        });
    };
    useEffect(()=>{
        getPricingList();
    }, []);
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            /*#__PURE__*/ _jsx(Swiper, {
                modules: [
                    Autoplay,
                    Pagination,
                    Navigation
                ],
                slidesPerView: 3,
                spaceBetween: 30,
                // centeredSlides={true}
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false
                },
                pagination: {
                    clickable: true,
                    el: ".block-gallery-pagination2"
                },
                // navigation={{
                //     prevEl: ".prev",
                //     nextEl: ".next",
                // }}
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    },
                    1350: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                },
                className: "swiper-wrapper",
                children: pricing?.map((price)=>/*#__PURE__*/ _jsx(SwiperSlide, {
                        className: "swiper-slide",
                        children: /*#__PURE__*/ _jsx("div", {
                            className: "item",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "cis-pricing-wrap",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "pricing-box",
                                    children: /*#__PURE__*/ _jsxs("div", {
                                        className: "inner",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "name",
                                                children: [
                                                    price?.Value,
                                                    /*#__PURE__*/ _jsx("span", {
                                                        className: "badge-popular",
                                                        children: price?.Discount
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "price",
                                                children: /*#__PURE__*/ _jsx("div", {
                                                    className: "number",
                                                    children: price?.Price
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "desc",
                                                children: /*#__PURE__*/ _jsx("p", {
                                                    children: price?.NumberofClasses
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("h2", {
                                                className: "desc",
                                                children: price?.PerHourCharges
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "button-wrap",
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: "/book-private-class",
                                                    className: "button fullfield",
                                                    title: " جرب أول عرض لك",
                                                    children: "جرب أول عرض لك"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    }, price?.ID))
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "swiper-pagination block-gallery-pagination2"
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;