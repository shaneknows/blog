webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Page */ "./src/components/Page.js");
/* harmony import */ var _src_components_PagePreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/PagePreview */ "./src/components/PagePreview.js");
/* harmony import */ var _src_utils_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/utils/date */ "./src/utils/date.js");
/* harmony import */ var _src_utils_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/utils/content */ "./src/utils/content.js");
/* harmony import */ var _content_index_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content/index.json */ "./content/index.json");
var _content_index_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/index.json */ "./content/index.json", 1);
/* harmony import */ var _content_summary_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content/summary.json */ "./content/summary.json");
var _content_summary_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../content/summary.json */ "./content/summary.json", 1);

var _jsxFileName = "C:\\Users\\shane\\OneDrive\\Documents\\GitHub\\blog\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var Index = function Index(_ref) {
  var props = _ref.props;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(_src_components_Page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    siteTitle: "".concat(_content_index_json__WEBPACK_IMPORTED_MODULE_6__.siteTitle, " - Index"),
    heroTitle: _content_index_json__WEBPACK_IMPORTED_MODULE_6__.siteTitle,
    description: _content_index_json__WEBPACK_IMPORTED_MODULE_6__.description,
    stylesheets: _content_index_json__WEBPACK_IMPORTED_MODULE_6__.stylesheets,
    topLinks: _content_index_json__WEBPACK_IMPORTED_MODULE_6__.topLinks,
    backgroundClass: _content_index_json__WEBPACK_IMPORTED_MODULE_6__.backgroundClass,
    body: Body({
      summaryJson: _content_summary_json__WEBPACK_IMPORTED_MODULE_7__
    }),
    copyright: _content_index_json__WEBPACK_IMPORTED_MODULE_6__.copyright,
    siteId: _content_index_json__WEBPACK_IMPORTED_MODULE_6__.siteId,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

Index.getInitialProps = function _callee(_ref2) {
  var req;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = _ref2.req;
          return _context.abrupt("return", {});

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

function Body(props) {
  var postList = Object(_src_utils_content__WEBPACK_IMPORTED_MODULE_5__["filterPosts"])(props.summaryJson);
  return __jsx("div", {
    className: "center mw6 pa3 pa4-ns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, postList.map(function (article, i) {
    var href = Object(_src_utils_content__WEBPACK_IMPORTED_MODULE_5__["makeUrl"])(article);
    var date = Object(_src_utils_date__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(article.date);
    return __jsx(_src_components_PagePreview__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: article.title,
      preview: article.preview,
      date: date,
      href: href,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.24ea17ac9458a14b0834.hot-update.js.map