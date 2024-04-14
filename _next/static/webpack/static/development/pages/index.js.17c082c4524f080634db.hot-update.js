webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PaperList.js":
/*!*********************************!*\
  !*** ./components/PaperList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Paper */ "./components/Paper.js");
/* harmony import */ var _components_Pdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pdf */ "./components/Pdf.js");


var _jsxFileName = "/Users/kristofermasson/Developer/hverfablod/components/PaperList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var contenful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");

var splitByYear = function splitByYear(papers) {
  var papersByYears = [];
  papers.forEach(function (paper) {
    var yearOfPublication = new Date(paper.fields.dateOfPublication).getFullYear();
    if (!_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(papersByYears).includes(yearOfPublication.toString())) papersByYears[yearOfPublication] = [];
    papersByYears[yearOfPublication].push(paper.fields);
  });
  return papersByYears;
};

var sortByDate = function sortByDate(papersByYears) {
  papersByYears = papersByYears.map(function (year) {
    return year.sort(function (a, b) {
      return new Date(b.dateOfPublication) - new Date(a.dateOfPublication);
    });
  });
  return papersByYears;
};

var PaperList = function PaperList(_ref) {
  var contentfulContentType = _ref.contentfulContentType;
  var client = contenful.createClient({
    space: '3ar0fsplddpo',
    accessToken: '-2X0RW7MtFVdOBMf8N1X4aEMF0mMWEFo4sq4N-oxV7s'
  });
  var midborginOkkarLogo = '../static/tmp.png';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      papers = _useState[0],
      setPapers = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    client.getEntries({
      content_type: contentfulContentType
    }).then(function (entries) {
      return setPapers(entries.items);
    });
  }, []);
  var papersByYears = sortByDate(splitByYear(papers));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, papersByYears.map(function (papers, year) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      key: year,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("div", {
      className: "year",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, year), __jsx("div", {
      className: "papers",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, papers.map(function (paper) {
      return __jsx(_components_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, paper, {
        key: paper.yearOfPublication,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }));
    })), __jsx("hr", {
      className: "header-ruler",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }));
  }).reverse());
};

/* harmony default export */ __webpack_exports__["default"] = (PaperList);

/***/ })

})
//# sourceMappingURL=index.js.17c082c4524f080634db.hot-update.js.map