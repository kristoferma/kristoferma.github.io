webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_PaperList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PaperList */ "./components/PaperList.js");
/* harmony import */ var _components_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Paper */ "./components/Paper.js");
/* harmony import */ var _components_SeeMoreLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SeeMoreLink */ "./components/SeeMoreLink.js");

var _jsxFileName = "/Users/kristofermasson/Developer/hverfablod/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var contentful = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (_ref) {
  var query = _ref.router.query;
  var client = contentful.createClient({
    space: '3ar0fsplddpo',
    accessToken: '-2X0RW7MtFVdOBMf8N1X4aEMF0mMWEFo4sq4N-oxV7s'
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
      lastMidborgPaper = _useState[0],
      setLastMidborgPaper = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(undefined),
      lastLaugardalurPaper = _useState2[0],
      setLastLaugardalurPaper = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    client.getEntries({
      content_type: 'midborgOgHlidar',
      order: '-fields.dateOfPublication'
    }).then(function (entries) {
      return setLastMidborgPaper(entries.items[0]);
    });
    client.getEntries({
      content_type: 'laugardalurHaaleitiOgBustadir',
      order: '-fields.dateOfPublication'
    }).then(function (entries) {
      return setLastLaugardalurPaper(entries.items[0]);
    });
  }, []);
  return __jsx("div", {
    className: "jsx-448062282" + " " + "app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-448062282",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Hverfabl\xF6\xF0 Reykjav\xEDk"), __jsx("meta", {
    name: "Description",
    content: "H\xE9r er a\xF0 finna n\xFDjustu hverfabl\xF6\xF0 Reykjav\xEDkur",
    className: "jsx-448062282",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("header", {
    className: "jsx-448062282",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-448062282" + " " + "header-ads",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-448062282" + " " + "single-ad",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("img", {
    src: "".concat("", "/static/sumardekk.png"),
    alt: "Augl\xFDsing fyrir Dekkjah\xF6llina: Sumari\xF0 er komi\xF0. \xDE\xFA getur panta\xF0 dekk \xE1 dekkjahollinn.is, \xFEau ver\xF0a tilb\xFAin \xFEegar \xFE\xFA m\xE6tir",
    className: "jsx-448062282",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-448062282" + " " + "newest-papers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-448062282" + " " + "paper-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, lastMidborgPaper ? __jsx(_components_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, lastMidborgPaper.fields, {
    fullSize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })) : null, __jsx(_components_SeeMoreLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
    link: "/MidborgOgHlidar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-448062282" + " " + "paper-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, lastLaugardalurPaper ? __jsx(_components_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, lastLaugardalurPaper.fields, {
    fullSize: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })) : null, __jsx(_components_SeeMoreLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
    link: "/LaugardalurHaaleitiOgBustadir",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "448062282",
    __self: this
  }, ".app{margin-top:2%;margin-left:2%;margin-right:2%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.ad{width:30%;}.single-ad{width:100%;}img{max-width:100%;}.header-ads{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row;-ms-flex-flow:row;flex-flow:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.hverfabladid{padding-top:3%;width:30%;}.header-ruler{color:rgb(194,54,51);background-color:rgb(194,54,51);height:5px;width:100%;border-style:none;border-width:0;}.newest-papers{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media screen and (max-device-width:750px){.newest-papers{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}.paper-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;width:100%;}@media screen and (min-device-width:750px){.paper-container{width:40%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcmlzdG9mZXJtYXNzb24vRGV2ZWxvcGVyL2h2ZXJmYWJsb2QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVzQixBQUdvQixBQU9ELEFBTUgsQUFHQyxBQUdJLEFBR0YsQUFLRSxBQUlRLEFBUVYsQUFPVSxBQUtWLEFBU0YsVUE5Q1osQUErQ0MsQ0E1Q0QsR0FoQmdCLENBbUJoQixBQVFXLE1BSXdCLElBSG5DLElBM0JpQixnQkFDSCxRQThCRixXQUNBLFVBMUJZLEFBZVQsQUFpQmUsQUFZUCxDQWpCSixHQVlsQixlQVhlLGVBQ2hCLFdBakN1QixTQW9CTyx3QkE2QlYscUJBNUNHLHdCQUp2QixBQW9Db0IsZ0RBYU0sTUE1Q04sQUFlcEIsdUNBaUJBLG9EQWFZLEVBNUNaLFNBNkNBIiwiZmlsZSI6Ii9Vc2Vycy9rcmlzdG9mZXJtYXNzb24vRGV2ZWxvcGVyL2h2ZXJmYWJsb2QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBQYXBlckxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9QYXBlckxpc3QnXG5pbXBvcnQgUGFwZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QYXBlcidcbmltcG9ydCBTZWVNb3JlTGluayBmcm9tICcuLi9jb21wb25lbnRzL1NlZU1vcmVMaW5rJ1xuY29uc3QgY29udGVudGZ1bCA9IHJlcXVpcmUoJ2NvbnRlbnRmdWwnKVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKCh7IHJvdXRlcjogeyBxdWVyeSB9IH0pID0+IHtcblx0Y29uc3QgY2xpZW50ID0gY29udGVudGZ1bC5jcmVhdGVDbGllbnQoe1xuXHRcdHNwYWNlOiAnM2FyMGZzcGxkZHBvJyxcblx0XHRhY2Nlc3NUb2tlbjogJy0yWDBSVzdNdEZWZE9CTWY4TjFYNGFFTUYwbU1XRUZvNHNxNE4tb3hWN3MnLFxuXHR9KVxuXHRjb25zdCBbbGFzdE1pZGJvcmdQYXBlciwgc2V0TGFzdE1pZGJvcmdQYXBlcl0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpXG5cdGNvbnN0IFtsYXN0TGF1Z2FyZGFsdXJQYXBlciwgc2V0TGFzdExhdWdhcmRhbHVyUGFwZXJdID0gdXNlU3RhdGUodW5kZWZpbmVkKVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNsaWVudFxuXHRcdFx0LmdldEVudHJpZXMoe1xuXHRcdFx0XHRjb250ZW50X3R5cGU6ICdtaWRib3JnT2dIbGlkYXInLFxuXHRcdFx0XHRvcmRlcjogJy1maWVsZHMuZGF0ZU9mUHVibGljYXRpb24nLFxuXHRcdFx0fSlcblx0XHRcdC50aGVuKChlbnRyaWVzKSA9PiBzZXRMYXN0TWlkYm9yZ1BhcGVyKGVudHJpZXMuaXRlbXNbMF0pKVxuXG5cdFx0Y2xpZW50XG5cdFx0XHQuZ2V0RW50cmllcyh7XG5cdFx0XHRcdGNvbnRlbnRfdHlwZTogJ2xhdWdhcmRhbHVySGFhbGVpdGlPZ0J1c3RhZGlyJyxcblx0XHRcdFx0b3JkZXI6ICctZmllbGRzLmRhdGVPZlB1YmxpY2F0aW9uJyxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoZW50cmllcykgPT4gc2V0TGFzdExhdWdhcmRhbHVyUGFwZXIoZW50cmllcy5pdGVtc1swXSkpXG5cdH0sIFtdKVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+SHZlcmZhYmzDtsOwIFJleWtqYXbDrWs8L3RpdGxlPlxuXHRcdFx0XHQ8bWV0YVxuXHRcdFx0XHRcdG5hbWU9XCJEZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0Y29udGVudD1cIkjDqXIgZXIgYcOwIGZpbm5hIG7DvWp1c3R1IGh2ZXJmYWJsw7bDsCBSZXlramF2w61rdXJcIlxuXHRcdFx0XHQvPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItYWRzXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaW5nbGUtYWRcIj5cblx0XHRcdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRcdFx0c3JjPXtgJHtwcm9jZXNzLmVudi5BU1NFVF9QUkVGSVh9L3N0YXRpYy9zdW1hcmRla2sucG5nYH1cblx0XHRcdFx0XHRcdFx0YWx0PVwiQXVnbMO9c2luZyBmeXJpciBEZWtramFow7ZsbGluYTogU3VtYXJpw7AgZXIga29tacOwLiDDnsO6IGdldHVyIHBhbnRhw7AgZGVrayDDoSBkZWtramFob2xsaW5uLmlzLCDDvmF1IHZlcsOwYSB0aWxiw7ppbiDDvmVnYXIgw77DuiBtw6Z0aXJcIlxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmV3ZXN0LXBhcGVyc1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhcGVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdHtsYXN0TWlkYm9yZ1BhcGVyID8gKFxuXHRcdFx0XHRcdFx0PFBhcGVyIHsuLi5sYXN0TWlkYm9yZ1BhcGVyLmZpZWxkc30gZnVsbFNpemUgLz5cblx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHQ8U2VlTW9yZUxpbmsgbGluaz1cIi9NaWRib3JnT2dIbGlkYXJcIj48L1NlZU1vcmVMaW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhcGVyLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdHtsYXN0TGF1Z2FyZGFsdXJQYXBlciA/IChcblx0XHRcdFx0XHRcdDxQYXBlciB7Li4ubGFzdExhdWdhcmRhbHVyUGFwZXIuZmllbGRzfSBmdWxsU2l6ZSAvPlxuXHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdDxTZWVNb3JlTGluayBsaW5rPVwiL0xhdWdhcmRhbHVySGFhbGVpdGlPZ0J1c3RhZGlyXCI+PC9TZWVNb3JlTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzdHlsZSBnbG9iYWwganN4PntgXG5cdFx0XHRcdC5hcHAge1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDIlO1xuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAyJTtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDIlO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0fVxuXHRcdFx0XHRoZWFkZXIge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5hZCB7XG5cdFx0XHRcdFx0d2lkdGg6IDMwJTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuc2luZ2xlLWFkIHtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdG1heC13aWR0aDogMTAwJTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuaGVhZGVyLWFkcyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWZsb3c6IHJvdztcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuaHZlcmZhYmxhZGlkIHtcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMyU7XG5cdFx0XHRcdFx0d2lkdGg6IDMwJTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuaGVhZGVyLXJ1bGVyIHtcblx0XHRcdFx0XHRjb2xvcjogcmdiKDE5NCwgNTQsIDUxKTtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCA1NCwgNTEpO1xuXHRcdFx0XHRcdGhlaWdodDogNXB4O1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGJvcmRlci1zdHlsZTogbm9uZTtcblx0XHRcdFx0XHRib3JkZXItd2lkdGg6IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0Lm5ld2VzdC1wYXBlcnMge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NTBweCkge1xuXHRcdFx0XHRcdC5uZXdlc3QtcGFwZXJzIHtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LnBhcGVyLWNvbnRhaW5lciB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEBtZWRpYSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NTBweCkge1xuXHRcdFx0XHRcdC5wYXBlci1jb250YWluZXIge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDQwJTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdGB9PC9zdHlsZT5cblx0XHQ8L2Rpdj5cblx0KVxufSlcbiJdfQ== */\n/*@ sourceURL=/Users/kristofermasson/Developer/hverfablod/pages/index.js */"));
}));

/***/ })

})
//# sourceMappingURL=index.js.d61d65f8588d8617bf4a.hot-update.js.map