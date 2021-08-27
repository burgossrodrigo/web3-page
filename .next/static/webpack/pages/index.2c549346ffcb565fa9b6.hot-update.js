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








function Header(_ref) {
  _s();

  var openWallets = _ref.openWallets,
      setOpenWallets = _ref.setOpenWallets;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwib3BlbldhbGxldHMiLCJzZXRPcGVuV2FsbGV0cyIsInVzZVdlYjNSZWFjdCIsImFjdGl2ZSIsImVycm9yIiwidXNlU3RhdGUiLCJvcGVuV2FsbGV0Iiwic2V0T3BlbldhbGxldCIsInVzZVN0eWxlIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImJyZWFrcG9pbnRzIiwib25seSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwid2lkdGgiLCJiZXR3ZWVuIiwid2FsbGV0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwicGFkZGluZ1RvcCIsImhlaWdodCIsInBhZGRpbmdCb3R0b20iLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJjdXJzb3IiLCJtYXJnaW4iLCJzcGFjaW5nIiwiY2xhc3NlcyIsInRleHRBbGlnbiIsImFjY291bnQiLCJzdWJzdHJpbmciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLE1BQVQsT0FBK0M7QUFBQTs7QUFBQSxNQUE5QkMsV0FBOEIsUUFBOUJBLFdBQThCO0FBQUEsTUFBakJDLGNBQWlCLFFBQWpCQSxjQUFpQjs7QUFDNUQsc0JBQTBCQyxxRUFBWSxFQUF0QztBQUFBLE1BQVFDLE1BQVIsaUJBQVFBLE1BQVI7QUFBQSxNQUFnQkMsS0FBaEIsaUJBQWdCQSxLQUFoQjs7QUFDQSxrQkFBb0NDLHNEQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU9DLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0YsTUFBTUMsUUFBUSxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxXQUFZO0FBRXRDQyxVQUFJLGdI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QTtBQUFBO0FBQUEsSUFBOUQsQ0FBSCxHQUF5SCxNQUFDLDhFQUFEO0FBQTBCLFlBQVEsRUFBQyxPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXBVLENBRkMsRUFHRSxNQUFDLHFEQUFEO0FBQUssYUFBUyxFQUFFRSxPQUFPLENBQUNiLE1BQXhCO0FBQWdDLFdBQU8sRUFBRSxtQkFBTTtBQUFDWixnQkFBVSxLQUFLLEtBQWYsR0FBdUJDLGFBQWEsQ0FBQyxJQUFELENBQXBDLEdBQTZDQSxhQUFhLENBQUMsS0FBRCxDQUExRDtBQUFrRSxLQUFsSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0hKLE1BQU0sYUFBTThCLE9BQU8sQ0FBQ0MsU0FBUixDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUFOLGdCQUFtQ0QsT0FBTyxDQUFDQyxTQUFSLENBQWtCRCxPQUFPLENBQUNFLE1BQVIsR0FBaUIsQ0FBbkMsQ0FBbkMsSUFBNkUscUJBRGhGLENBSEYsQ0FEQSxDQURGO0FBWUQ7O0dBMUZ1QnBDLE07VUFDSUcsNkQ7OztLQURKSCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJjNTQ5MzQ2ZmZjYjU2NWZhOWI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7IFxyXG5pbXBvcnQgeyBXZWIzUmVhY3RQcm92aWRlciwgdXNlV2ViM1JlYWN0LCBVbnN1cHBvcnRlZENoYWluSWRFcnJvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXHJcbmltcG9ydCBDaGFpbklkIGZyb20gJy4vQ2hhaW5JZCdcclxuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9BY2NvdW50J1xyXG5pbXBvcnQgQmFsYW5jZSBmcm9tICcuL0JhbGFuY2UudHN4J1xyXG5pbXBvcnQgeyBBcHBCYXIsIEJhZGdlLCBCb3ggfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEFjY291bnRCYWxhbmNlV2FsbGV0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJhbGFuY2VXYWxsZXQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoe29wZW5XYWxsZXRzLCBzZXRPcGVuV2FsbGV0c30pIHtcclxuICBjb25zdCB7IGFjdGl2ZSwgZXJyb3IgfSA9IHVzZVdlYjNSZWFjdCgpXHJcbiAgY29uc3QgW29wZW5XYWxsZXQsIHNldE9wZW5XYWxsZXRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0XHJcblx0XHRyb290OiB7XHJcblx0XHRcdFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMub25seSgneHMnKV06e1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuXHRcdFx0XHR3aWR0aDogJzEwMCUnXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMuYmV0d2Vlbignc20nLCAneGwnKV06e1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHdpZHRoOiAnNTB2dycsXHJcblx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0XHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHR9LFx0XHJcblx0XHRcdFxyXG5cdFx0d2FsbGV0OiB7XHJcblx0XHRcclxuXHRcdFx0W3RoZW1lLmJyZWFrcG9pbnRzLm9ubHkoJ3hzJyldOntcclxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAnMTBweCAxMHB4IDEwcHggMTBweCcsXHJcblx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCB3aGl0ZScsXHJcblx0XHRcdHBhZGRpbmdUb3A6ICcydmgnLFxyXG5cdFx0XHR3aWR0aDogJzEzJScsXHJcblx0XHRcdGhlaWdodDogJzJ2aCcsXHJcblx0XHRcdHBhZGRpbmdCb3R0b206ICcydmgnLFxyXG5cdFx0XHRwYWRkaW5nTGVmdDogJzJ2dycsXHJcblx0XHRcdHBhZGRpbmdSaWdodDogJzJ2dycsXHJcblx0XHRcdG1hcmdpblRvcDogJzJ2aCcsXHJcblx0XHRcdG1hcmdpbkxlZnQ6ICc3NSUnLFxyXG5cdFx0XHRjdXJzb3I6ICdwb2ludGVyJ1xyXG5cdFx0XHRcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdFt0aGVtZS5icmVha3BvaW50cy5iZXR3ZWVuKCdzbScsICd4bCcpXTp7XHJcblxyXG5cdFx0XHRib3JkZXJSYWRpdXM6ICcxMHB4IDEwcHggMTBweCAxMHB4JyxcclxuXHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkIHdoaXRlJyxcclxuXHRcdFx0cGFkZGluZ1RvcDogJzJ2aCcsXHJcblx0XHRcdHdpZHRoOiAnMTMlJyxcclxuXHRcdFx0aGVpZ2h0OiAnMnZoJyxcclxuXHRcdFx0cGFkZGluZ0JvdHRvbTogJzJ2aCcsXHJcblx0XHRcdHBhZGRpbmdMZWZ0OiAnMnZ3JyxcclxuXHRcdFx0cGFkZGluZ1JpZ2h0OiAnMnZ3JyxcclxuXHRcdFx0bWFyZ2luVG9wOiAnMnZoJyxcclxuXHRcdFx0bWFyZ2luTGVmdDogJzc1JScsXHJcblx0XHRcdGN1cnNvcjogJ3BvaW50ZXInXHRcdFx0XHJcblx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0fSxcclxuXHRcdFx0XHJcblx0XHRtYXJnaW46IHtcclxuXHRcdFxyXG5cdFx0bWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG5cdFx0XHJcblx0XHR9XHRcdFxyXG5cdFx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0fSkpO1xyXG5cclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcdFxyXG5cdFxyXG5cdCAvKiA8Q2hhaW5JZCAvPlxyXG4gICAgICAgIDxBY2NvdW50IC8+XHJcbiAgICAgICAgPEJhbGFuY2UgLz4gKi9cclxuXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8QXBwQmFyIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93J319PlxyXG5cdCAgXHJcblx0ICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzFyZW0nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGZsb2F0OiAncmlnaHQnIH19PnthY3RpdmUgPyA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0gdmFyaWFudD1cImRvdFwiPjxBY2NvdW50QmFsYW5jZVdhbGxldEljb24gZm9udFNpemU9J2xhcmdlJyAvPjwvQmFkZ2U+IDogZXJyb3IgPyA8QmFkZ2UgY29sb3I9XCJlcnJvclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59IHZhcmlhbnQ9XCJkb3RcIj48QWNjb3VudEJhbGFuY2VXYWxsZXRJY29uIGZvbnRTaXplPSdsYXJnZScgLz48L0JhZGdlPiA6IDxBY2NvdW50QmFsYW5jZVdhbGxldEljb24gZm9udFNpemU9J2xhcmdlJyAvPn08L2Rpdj5cclxuICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMud2FsbGV0fSBvbkNsaWNrPXsoKSA9PiB7b3BlbldhbGxldCA9PT0gZmFsc2UgPyBzZXRPcGVuV2FsbGV0KHRydWUpIDogc2V0T3BlbldhbGxldChmYWxzZSl9fSA+XHJcblx0XHR7YWN0aXZlID8gYCR7YWNjb3VudC5zdWJzdHJpbmcoMCwgNil9Li4uJHthY2NvdW50LnN1YnN0cmluZyhhY2NvdW50Lmxlbmd0aCAtIDQpfWAgOiAnQ29ubmVjdCB5b3VyIHdhbGxldCd9XHJcblx0ICA8L0JveD5cclxuXHQgXHJcblx0IDwvQXBwQmFyPiBcclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==