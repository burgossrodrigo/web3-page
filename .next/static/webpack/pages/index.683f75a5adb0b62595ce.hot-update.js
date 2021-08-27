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

  var account = _ref.account,
      openWallet = _ref.openWallet,
      setOpenWallet = _ref.setOpenWallet;

  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__["useWeb3React"])(),
      active = _useWeb3React.active,
      error = _useWeb3React.error;

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

_s(Header, "oMx8kbPXhrr4/acRb67gDYDAPec=", true, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiYWNjb3VudCIsIm9wZW5XYWxsZXQiLCJzZXRPcGVuV2FsbGV0IiwidXNlV2ViM1JlYWN0IiwiYWN0aXZlIiwiZXJyb3IiLCJ1c2VTdHlsZSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJicmVha3BvaW50cyIsIm9ubHkiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwiYmV0d2VlbiIsIndhbGxldCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsInBhZGRpbmdUb3AiLCJoZWlnaHQiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiY3Vyc29yIiwibWFyZ2luIiwic3BhY2luZyIsImNsYXNzZXMiLCJ0ZXh0QWxpZ24iLCJzdWJzdHJpbmciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLE1BQVQsT0FBc0Q7QUFBQTs7QUFBQSxNQUFyQ0MsT0FBcUMsUUFBckNBLE9BQXFDO0FBQUEsTUFBNUJDLFVBQTRCLFFBQTVCQSxVQUE0QjtBQUFBLE1BQWhCQyxhQUFnQixRQUFoQkEsYUFBZ0I7O0FBQ25FLHNCQUEwQkMscUVBQVksRUFBdEM7QUFBQSxNQUFRQyxNQUFSLGlCQUFRQSxNQUFSO0FBQUEsTUFBZ0JDLEtBQWhCLGlCQUFnQkEsS0FBaEI7O0FBRUYsTUFBTUMsUUFBUSxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxXQUFZO0FBRXRDQyxVQUFJLGdIQUVGRCxLQUFLLENBQUNFLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBRkUsRUFFNEI7QUFFOUJDLGVBQU8sRUFBRSxNQUZxQjtB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O0FBQUE7QUFBQTtBQUFBLElBQXBVLENBRkMsRUFHRSxNQUFDLHFEQUFEO0FBQUssYUFBUyxFQUFFRSxPQUFPLENBQUNiLE1BQXhCO0FBQWdDLFdBQU8sRUFBRSxtQkFBTTtBQUFDZixnQkFBVSxLQUFLLEtBQWYsR0FBdUJDLGFBQWEsQ0FBQyxJQUFELENBQXBDLEdBQTZDQSxhQUFhLENBQUMsS0FBRCxDQUExRDtBQUFrRSxLQUFsSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0hFLE1BQU0sYUFBTUosT0FBTyxDQUFDK0IsU0FBUixDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUFOLGdCQUFtQy9CLE9BQU8sQ0FBQytCLFNBQVIsQ0FBa0IvQixPQUFPLENBQUNnQyxNQUFSLEdBQWlCLENBQW5DLENBQW5DLElBQTZFLHFCQURoRixDQUhGLENBREEsQ0FERjtBQVlEOztHQTFGdUJqQyxNO1VBQ0lJLDZEOzs7S0FESkosTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ODNmNzVhNWFkYjBiNjI1OTVjZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnOyBcclxuaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIsIHVzZVdlYjNSZWFjdCwgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xyXG5pbXBvcnQgQ2hhaW5JZCBmcm9tICcuL0NoYWluSWQnXHJcbmltcG9ydCBBY2NvdW50IGZyb20gJy4vQWNjb3VudCdcclxuaW1wb3J0IEJhbGFuY2UgZnJvbSAnLi9CYWxhbmNlLnRzeCdcclxuaW1wb3J0IHsgQXBwQmFyLCBCYWRnZSwgQm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBBY2NvdW50QmFsYW5jZVdhbGxldEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRCYWxhbmNlV2FsbGV0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHthY2NvdW50LCBvcGVuV2FsbGV0LCBzZXRPcGVuV2FsbGV0fSkge1xyXG4gIGNvbnN0IHsgYWN0aXZlLCBlcnJvciB9ID0gdXNlV2ViM1JlYWN0KClcclxuICBcclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdFxyXG5cdFx0cm9vdDoge1xyXG5cdFx0XHRcclxuXHRcdFx0W3RoZW1lLmJyZWFrcG9pbnRzLm9ubHkoJ3hzJyldOntcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ3JvdycsXHJcblx0XHRcdFx0d2lkdGg6ICcxMDAlJ1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0W3RoZW1lLmJyZWFrcG9pbnRzLmJldHdlZW4oJ3NtJywgJ3hsJyldOntcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR3aWR0aDogJzUwdncnLFxyXG5cdFx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcdFxyXG5cdFx0XHRcclxuXHRcdHdhbGxldDoge1xyXG5cdFx0XHJcblx0XHRcdFt0aGVtZS5icmVha3BvaW50cy5vbmx5KCd4cycpXTp7XHJcblx0XHRcdGJvcmRlclJhZGl1czogJzEwcHggMTBweCAxMHB4IDEwcHgnLFxyXG5cdFx0XHRib3JkZXI6ICcxcHggc29saWQgd2hpdGUnLFxyXG5cdFx0XHRwYWRkaW5nVG9wOiAnMnZoJyxcclxuXHRcdFx0d2lkdGg6ICcxMyUnLFxyXG5cdFx0XHRoZWlnaHQ6ICcydmgnLFxyXG5cdFx0XHRwYWRkaW5nQm90dG9tOiAnMnZoJyxcclxuXHRcdFx0cGFkZGluZ0xlZnQ6ICcydncnLFxyXG5cdFx0XHRwYWRkaW5nUmlnaHQ6ICcydncnLFxyXG5cdFx0XHRtYXJnaW5Ub3A6ICcydmgnLFxyXG5cdFx0XHRtYXJnaW5MZWZ0OiAnNzUlJyxcclxuXHRcdFx0Y3Vyc29yOiAncG9pbnRlcidcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRbdGhlbWUuYnJlYWtwb2ludHMuYmV0d2Vlbignc20nLCAneGwnKV06e1xyXG5cclxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAnMTBweCAxMHB4IDEwcHggMTBweCcsXHJcblx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCB3aGl0ZScsXHJcblx0XHRcdHBhZGRpbmdUb3A6ICcydmgnLFxyXG5cdFx0XHR3aWR0aDogJzEzJScsXHJcblx0XHRcdGhlaWdodDogJzJ2aCcsXHJcblx0XHRcdHBhZGRpbmdCb3R0b206ICcydmgnLFxyXG5cdFx0XHRwYWRkaW5nTGVmdDogJzJ2dycsXHJcblx0XHRcdHBhZGRpbmdSaWdodDogJzJ2dycsXHJcblx0XHRcdG1hcmdpblRvcDogJzJ2aCcsXHJcblx0XHRcdG1hcmdpbkxlZnQ6ICc3NSUnLFxyXG5cdFx0XHRjdXJzb3I6ICdwb2ludGVyJ1x0XHRcdFxyXG5cdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0bWFyZ2luOiB7XHJcblx0XHRcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdFxyXG5cdFx0fVx0XHRcclxuXHRcdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdH0pKTtcclxuXHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHRcclxuXHRcclxuXHQgLyogPENoYWluSWQgLz5cclxuICAgICAgICA8QWNjb3VudCAvPlxyXG4gICAgICAgIDxCYWxhbmNlIC8+ICovXHJcblxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPEFwcEJhciBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3Jvdyd9fT5cclxuXHQgIFxyXG5cdCAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcxcmVtJywgdGV4dEFsaWduOiAncmlnaHQnLCBmbG9hdDogJ3JpZ2h0JyB9fT57YWN0aXZlID8gPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59IHZhcmlhbnQ9XCJkb3RcIj48QWNjb3VudEJhbGFuY2VXYWxsZXRJY29uIGZvbnRTaXplPSdsYXJnZScgLz48L0JhZGdlPiA6IGVycm9yID8gPEJhZGdlIGNvbG9yPVwiZXJyb3JcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufSB2YXJpYW50PVwiZG90XCI+PEFjY291bnRCYWxhbmNlV2FsbGV0SWNvbiBmb250U2l6ZT0nbGFyZ2UnIC8+PC9CYWRnZT4gOiA8QWNjb3VudEJhbGFuY2VXYWxsZXRJY29uIGZvbnRTaXplPSdsYXJnZScgLz59PC9kaXY+XHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLndhbGxldH0gb25DbGljaz17KCkgPT4ge29wZW5XYWxsZXQgPT09IGZhbHNlID8gc2V0T3BlbldhbGxldCh0cnVlKSA6IHNldE9wZW5XYWxsZXQoZmFsc2UpfX0gPlxyXG5cdFx0e2FjdGl2ZSA/IGAke2FjY291bnQuc3Vic3RyaW5nKDAsIDYpfS4uLiR7YWNjb3VudC5zdWJzdHJpbmcoYWNjb3VudC5sZW5ndGggLSA0KX1gIDogJ0Nvbm5lY3QgeW91ciB3YWxsZXQnfVxyXG5cdCAgPC9Cb3g+XHJcblx0IFxyXG5cdCA8L0FwcEJhcj4gXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=