webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Header.js":
/*!******************************!*\
  !*** ./Components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var _ChainId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChainId */ "./Components/ChainId.js");
/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Account */ "./Components/Account.js");
/* harmony import */ var _Balance_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Balance.tsx */ "./Components/Balance.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/AccountBalanceWallet */ "./node_modules/@material-ui/icons/AccountBalanceWallet.js");
/* harmony import */ var _material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");


var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\blockchain-chess\\Components\\Header.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








function Header() {
  _s();

  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__["useWeb3React"])(),
      active = _useWeb3React.active,
      error = _useWeb3React.error;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      openWallet = _useState[0],
      setOpenWallet = _useState[1];

  var useStyle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
    var _root, _wallet;

    return {
      root: (_root = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_root, theme.breakpoints.only('xs'), {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_root, theme.breakpoints.between('sm', 'xl'), {
        width: '50vw',
        display: 'flex',
        flexDirection: 'column'
      }), _root),
      wallet: (_wallet = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_wallet, theme.breakpoints.only('xs'), {
        borderRadius: '10px 10px 10px 10px',
        border: '1px solid white',
        paddingTop: '2vh',
        width: '13%',
        height: '2vh',
        paddingBottom: '2vh',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        marginTop: '2vh',
        marginLeft: '75%',
        cursor: 'pointer'
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_wallet, theme.breakpoints.between('sm', 'xl'), {
        borderRadius: '10px 10px 10px 10px',
        border: '1px solid white',
        paddingTop: '2vh',
        width: '13%',
        height: '2vh',
        paddingBottom: '2vh',
        paddingLeft: '2vw',
        paddingRight: '2vw',
        marginTop: '2vh',
        marginLeft: '75%',
        cursor: 'pointer'
      }), _wallet),
      margin: {
        margin: theme.spacing(2)
      }
    };
  });
  var classes = useStyle();
  /* <ChainId />
        <Account />
        <Balance /> */

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["AppBar"], {
    style: {
      display: 'flex',
      flexDirection: 'row'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 5
    }
  }, __jsx("div", {
    style: {
      margin: '1rem',
      textAlign: 'right',
      "float": 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 4
    }
  }, active ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Badge"], {
    color: "primary",
    className: classes.margin,
    variant: "dot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 82
    }
  }, __jsx(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 146
    }
  })) : error ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Badge"], {
    color: "error",
    className: classes.margin,
    variant: "dot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 210
    }
  }, __jsx(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 272
    }
  })) : __jsx(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 328
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    className: classes.wallet,
    onClick: function onClick() {
      openWallet === false ? setOpenWallet(true) : setOpenWallet(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, active ? "".concat(account.substring(0, 6), "...").concat(account.substring(account.length - 4)) : 'Connect your wallet')));
}

_s(Header, "XZE54LxnUnsJH9Ji0Sf1QNnrhA4=", true, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_2__["useWeb3React"]];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlV2ViM1JlYWN0IiwiYWN0aXZlIiwiZXJyb3IiLCJ1c2VTdGF0ZSIsIm9wZW5XYWxsZXQiLCJzZXRPcGVuV2FsbGV0IiwidXNlU3R5bGUiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiYnJlYWtwb2ludHMiLCJvbmx5IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsImJldHdlZW4iLCJ3YWxsZXQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJwYWRkaW5nVG9wIiwiaGVpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImN1cnNvciIsIm1hcmdpbiIsInNwYWNpbmciLCJjbGFzc2VzIiwidGV4dEFsaWduIiwiYWNjb3VudCIsInN1YnN0cmluZyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUMvQixzQkFBMEJDLHFFQUFZLEVBQXRDO0FBQUEsTUFBUUMsTUFBUixpQkFBUUEsTUFBUjtBQUFBLE1BQWdCQyxLQUFoQixpQkFBZ0JBLEtBQWhCOztBQUNBLGtCQUFvQ0Msc0RBQVEsQ0FBQyxLQUFELENBQTVDO0FBQUEsTUFBT0MsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDRixNQUFNQyxRQUFRLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLFdBQVk7QUFFdENDLFVBQUksZ0hBRUZELEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FGRSxFQUU0QjtBQUU5QkMsZUFBTyxFQUFFLE1BRnFCO0FBRzlCQyxxQkFBYSxF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QUEsSUFBcFUsQ0FGQyxFQUdFLE1BQUMscURBQUQ7QUFBSyxhQUFTLEVBQUVFLE9BQU8sQ0FBQ2IsTUFBeEI7QUFBZ0MsV0FBTyxFQUFFLG1CQUFNO0FBQUNaLGdCQUFVLEtBQUssS0FBZixHQUF1QkMsYUFBYSxDQUFDLElBQUQsQ0FBcEMsR0FBNkNBLGFBQWEsQ0FBQyxLQUFELENBQTFEO0FBQWtFLEtBQWxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSEosTUFBTSxhQUFNOEIsT0FBTyxDQUFDQyxTQUFSLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLENBQU4sZ0JBQW1DRCxPQUFPLENBQUNDLFNBQVIsQ0FBa0JELE9BQU8sQ0FBQ0UsTUFBUixHQUFpQixDQUFuQyxDQUFuQyxJQUE2RSxxQkFEaEYsQ0FIRixDQURBLENBREY7QUFZRDs7R0ExRnVCbEMsTTtVQUNJQyw2RDs7O0tBREpELE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGU3YWQ2MmUxNTJmMjRhYTU1ZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JzsgXHJcbmltcG9ydCB7IFdlYjNSZWFjdFByb3ZpZGVyLCB1c2VXZWIzUmVhY3QsIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcclxuaW1wb3J0IENoYWluSWQgZnJvbSAnLi9DaGFpbklkJ1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL0FjY291bnQnXHJcbmltcG9ydCBCYWxhbmNlIGZyb20gJy4vQmFsYW5jZS50c3gnXHJcbmltcG9ydCB7IEFwcEJhciwgQmFkZ2UsIEJveCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgQWNjb3VudEJhbGFuY2VXYWxsZXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50QmFsYW5jZVdhbGxldCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCB7IGFjdGl2ZSwgZXJyb3IgfSA9IHVzZVdlYjNSZWFjdCgpXHJcbiAgY29uc3QgW29wZW5XYWxsZXQsIHNldE9wZW5XYWxsZXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0XHJcblx0XHRyb290OiB7XHJcblx0XHRcdFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMub25seSgneHMnKV06e1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuXHRcdFx0XHR3aWR0aDogJzEwMCUnXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMuYmV0d2Vlbignc20nLCAneGwnKV06e1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHdpZHRoOiAnNTB2dycsXHJcblx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0XHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHR9LFx0XHJcblx0XHRcdFxyXG5cdFx0d2FsbGV0OiB7XHJcblx0XHRcclxuXHRcdFx0W3RoZW1lLmJyZWFrcG9pbnRzLm9ubHkoJ3hzJyldOntcclxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAnMTBweCAxMHB4IDEwcHggMTBweCcsXHJcblx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCB3aGl0ZScsXHJcblx0XHRcdHBhZGRpbmdUb3A6ICcydmgnLFxyXG5cdFx0XHR3aWR0aDogJzEzJScsXHJcblx0XHRcdGhlaWdodDogJzJ2aCcsXHJcblx0XHRcdHBhZGRpbmdCb3R0b206ICcydmgnLFxyXG5cdFx0XHRwYWRkaW5nTGVmdDogJzJ2dycsXHJcblx0XHRcdHBhZGRpbmdSaWdodDogJzJ2dycsXHJcblx0XHRcdG1hcmdpblRvcDogJzJ2aCcsXHJcblx0XHRcdG1hcmdpbkxlZnQ6ICc3NSUnLFxyXG5cdFx0XHRjdXJzb3I6ICdwb2ludGVyJ1xyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdFt0aGVtZS5icmVha3BvaW50cy5iZXR3ZWVuKCdzbScsICd4bCcpXTp7XHJcblxyXG5cdFx0XHRib3JkZXJSYWRpdXM6ICcxMHB4IDEwcHggMTBweCAxMHB4JyxcclxuXHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkIHdoaXRlJyxcclxuXHRcdFx0cGFkZGluZ1RvcDogJzJ2aCcsXHJcblx0XHRcdHdpZHRoOiAnMTMlJyxcclxuXHRcdFx0aGVpZ2h0OiAnMnZoJyxcclxuXHRcdFx0cGFkZGluZ0JvdHRvbTogJzJ2aCcsXHJcblx0XHRcdHBhZGRpbmdMZWZ0OiAnMnZ3JyxcclxuXHRcdFx0cGFkZGluZ1JpZ2h0OiAnMnZ3JyxcclxuXHRcdFx0bWFyZ2luVG9wOiAnMnZoJyxcclxuXHRcdFx0bWFyZ2luTGVmdDogJzc1JScsXHJcblx0XHRcdGN1cnNvcjogJ3BvaW50ZXInXHRcdFx0XHJcblx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0fSxcclxuXHRcdFx0XHJcblx0XHRtYXJnaW46IHtcclxuXHRcdFxyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0XHJcblx0XHR9XHRcdFxyXG5cdFx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0fSkpO1xyXG5cclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcdFxyXG5cdFxyXG5cdCAvKiA8Q2hhaW5JZCAvPlxyXG4gICAgICAgIDxBY2NvdW50IC8+XHJcbiAgICAgICAgPEJhbGFuY2UgLz4gKi9cclxuXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8QXBwQmFyIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93J319PlxyXG5cdCAgXHJcblx0ICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzFyZW0nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGZsb2F0OiAncmlnaHQnIH19PnthY3RpdmUgPyA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0gdmFyaWFudD1cImRvdFwiPjxBY2NvdW50QmFsYW5jZVdhbGxldEljb24gZm9udFNpemU9J2xhcmdlJyAvPjwvQmFkZ2U+IDogZXJyb3IgPyA8QmFkZ2UgY29sb3I9XCJlcnJvclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59IHZhcmlhbnQ9XCJkb3RcIj48QWNjb3VudEJhbGFuY2VXYWxsZXRJY29uIGZvbnRTaXplPSdsYXJnZScgLz48L0JhZGdlPiA6IDxBY2NvdW50QmFsYW5jZVdhbGxldEljb24gZm9udFNpemU9J2xhcmdlJyAvPn08L2Rpdj5cclxuICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMud2FsbGV0fSBvbkNsaWNrPXsoKSA9PiB7b3BlbldhbGxldCA9PT0gZmFsc2UgPyBzZXRPcGVuV2FsbGV0KHRydWUpIDogc2V0T3BlbldhbGxldChmYWxzZSl9fSA+XHJcblx0XHR7YWN0aXZlID8gYCR7YWNjb3VudC5zdWJzdHJpbmcoMCwgNil9Li4uJHthY2NvdW50LnN1YnN0cmluZyhhY2NvdW50Lmxlbmd0aCAtIDQpfWAgOiAnQ29ubmVjdCB5b3VyIHdhbGxldCd9XHJcblx0ICA8L0JveD5cclxuXHQgXHJcblx0IDwvQXBwQmFyPiBcclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==