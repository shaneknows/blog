webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Page */ "./src/components/Page.js");
/* harmony import */ var _src_components_PagePreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/PagePreview */ "./src/components/PagePreview.js");
/* harmony import */ var _src_utils_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/utils/date */ "./src/utils/date.js");
/* harmony import */ var _src_utils_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/utils/content */ "./src/utils/content.js");
/* harmony import */ var _content_index_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/index.json */ "./content/index.json");
var _content_index_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/index.json */ "./content/index.json", 1);
/* harmony import */ var _content_summary_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content/summary.json */ "./content/summary.json");
var _content_summary_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/summary.json */ "./content/summary.json", 1);
var _jsxFileName = "C:\\Users\\shane\\OneDrive\\Documents\\GitHub\\blog\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Index(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_src_components_Page__WEBPACK_IMPORTED_MODULE_1__["default"], {
    siteTitle: "".concat(_content_index_json__WEBPACK_IMPORTED_MODULE_5__.siteTitle, " - Index"),
    heroTitle: _content_index_json__WEBPACK_IMPORTED_MODULE_5__.siteTitle,
    description: _content_index_json__WEBPACK_IMPORTED_MODULE_5__.description,
    stylesheets: _content_index_json__WEBPACK_IMPORTED_MODULE_5__.stylesheets,
    topLinks: _content_index_json__WEBPACK_IMPORTED_MODULE_5__.topLinks,
    backgroundClass: _content_index_json__WEBPACK_IMPORTED_MODULE_5__.backgroundClass,
    body: Body({
      summaryJson: _content_summary_json__WEBPACK_IMPORTED_MODULE_6__
    }),
    copyright: _content_index_json__WEBPACK_IMPORTED_MODULE_5__.copyright,
    siteId: _content_index_json__WEBPACK_IMPORTED_MODULE_5__.siteId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
}

function Body(props) {
  var postList = Object(_src_utils_content__WEBPACK_IMPORTED_MODULE_4__["filterPosts"])(props.summaryJson);
  return __jsx("div", {
    className: "center mw6 pa3 pa4-ns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, postList.map(function (article, i) {
    var href = Object(_src_utils_content__WEBPACK_IMPORTED_MODULE_4__["makeUrl"])(article);
    var date = Object(_src_utils_date__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(article.date);
    return __jsx(_src_components_PagePreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: article.title,
      preview: article.preview,
      date: date,
      href: href,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.730f078130586b8e6391.hot-update.js.map