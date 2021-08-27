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








function Header(account, openWallet, setOpenWallet) {
  _s();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiYWNjb3VudCIsIm9wZW5XYWxsZXQiLCJzZXRPcGVuV2FsbGV0IiwidXNlV2ViM1JlYWN0IiwiYWN0aXZlIiwiZXJyb3IiLCJ1c2VTdHlsZSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJicmVha3BvaW50cyIsIm9ubHkiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwiYmV0d2VlbiIsIndhbGxldCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsInBhZGRpbmdUb3AiLCJoZWlnaHQiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiY3Vyc29yIiwibWFyZ2luIiwic3BhY2luZyIsImNsYXNzZXMiLCJ0ZXh0QWxpZ24iLCJzdWJzdHJpbmciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLE1BQVQsQ0FBZ0JDLE9BQWhCLEVBQXlCQyxVQUF6QixFQUFxQ0MsYUFBckMsRUFBb0Q7QUFBQTs7QUFDakUsc0JBQTBCQyxxRUFBWSxFQUF0QztBQUFBLE1BQVFDLE1BQVIsaUJBQVFBLE1BQVI7QUFBQSxNQUFnQkMsS0FBaEIsaUJBQWdCQSxLQUFoQjs7QUFFRixNQUFNQyxRQUFRLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLFdBQVk7QUFFdENDLFVBQUksZ0hBRUZELEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FGRSxFQUU0QjtBQUU5QkMsZUFBTyxFQUFFLE1BRnFCO0FBRzlCQyxxQkFBYSxFQUFFLEtBSGU7QUFJOUJDLGFBQUssRUFBRTtBQUp1QixPQUY1QixvR0FV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QUVFLE9BQU8sQ0FBQ2IsTUFBeEI7QUFBZ0MsV0FBTyxFQUFFLG1CQUFNO0FBQUNmLGdCQUFVLEtBQUssS0FBZixHQUF1QkMsYUFBYSxDQUFDLElBQUQsQ0FBcEMsR0FBNkNBLGFBQWEsQ0FBQyxLQUFELENBQTFEO0FBQWtFLEtBQWxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSEUsTUFBTSxhQUFNSixPQUFPLENBQUMrQixTQUFSLENBQWtCLENBQWxCLEVBQXFCLENBQXJCLENBQU4sZ0JBQW1DL0IsT0FBTyxDQUFDK0IsU0FBUixDQUFrQi9CLE9BQU8sQ0FBQ2dDLE1BQVIsR0FBaUIsQ0FBbkMsQ0FBbkMsSUFBNkUscUJBRGhGLENBSEYsQ0FEQSxDQURGO0FBWUQ7O0dBMUZ1QmpDLE07VUFDSUksNkQ7OztLQURKSixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYzZjFiMGRlOTNiZGUzNmQ1OGZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7IFxyXG5pbXBvcnQgeyBXZWIzUmVhY3RQcm92aWRlciwgdXNlV2ViM1JlYWN0LCBVbnN1cHBvcnRlZENoYWluSWRFcnJvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXHJcbmltcG9ydCBDaGFpbklkIGZyb20gJy4vQ2hhaW5JZCdcclxuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9BY2NvdW50J1xyXG5pbXBvcnQgQmFsYW5jZSBmcm9tICcuL0JhbGFuY2UudHN4J1xyXG5pbXBvcnQgeyBBcHBCYXIsIEJhZGdlLCBCb3ggfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEFjY291bnRCYWxhbmNlV2FsbGV0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJhbGFuY2VXYWxsZXQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoYWNjb3VudCwgb3BlbldhbGxldCwgc2V0T3BlbldhbGxldCkge1xyXG4gIGNvbnN0IHsgYWN0aXZlLCBlcnJvciB9ID0gdXNlV2ViM1JlYWN0KClcclxuICBcclxuY29uc3QgdXNlU3R5bGUgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuXHRcdFxyXG5cdFx0cm9vdDoge1xyXG5cdFx0XHRcclxuXHRcdFx0W3RoZW1lLmJyZWFrcG9pbnRzLm9ubHkoJ3hzJyldOntcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ3JvdycsXHJcblx0XHRcdFx0d2lkdGg6ICcxMDAlJ1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdFx0W3RoZW1lLmJyZWFrcG9pbnRzLmJldHdlZW4oJ3NtJywgJ3hsJyldOntcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR3aWR0aDogJzUwdncnLFxyXG5cdFx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcdFxyXG5cdFx0XHRcclxuXHRcdHdhbGxldDoge1xyXG5cdFx0XHJcblx0XHRcdFt0aGVtZS5icmVha3BvaW50cy5vbmx5KCd4cycpXTp7XHJcblx0XHRcdGJvcmRlclJhZGl1czogJzEwcHggMTBweCAxMHB4IDEwcHgnLFxyXG5cdFx0XHRib3JkZXI6ICcxcHggc29saWQgd2hpdGUnLFxyXG5cdFx0XHRwYWRkaW5nVG9wOiAnMnZoJyxcclxuXHRcdFx0d2lkdGg6ICcxMyUnLFxyXG5cdFx0XHRoZWlnaHQ6ICcydmgnLFxyXG5cdFx0XHRwYWRkaW5nQm90dG9tOiAnMnZoJyxcclxuXHRcdFx0cGFkZGluZ0xlZnQ6ICcydncnLFxyXG5cdFx0XHRwYWRkaW5nUmlnaHQ6ICcydncnLFxyXG5cdFx0XHRtYXJnaW5Ub3A6ICcydmgnLFxyXG5cdFx0XHRtYXJnaW5MZWZ0OiAnNzUlJyxcclxuXHRcdFx0Y3Vyc29yOiAncG9pbnRlcidcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRbdGhlbWUuYnJlYWtwb2ludHMuYmV0d2Vlbignc20nLCAneGwnKV06e1xyXG5cclxuXHRcdFx0Ym9yZGVyUmFkaXVzOiAnMTBweCAxMHB4IDEwcHggMTBweCcsXHJcblx0XHRcdGJvcmRlcjogJzFweCBzb2xpZCB3aGl0ZScsXHJcblx0XHRcdHBhZGRpbmdUb3A6ICcydmgnLFxyXG5cdFx0XHR3aWR0aDogJzEzJScsXHJcblx0XHRcdGhlaWdodDogJzJ2aCcsXHJcblx0XHRcdHBhZGRpbmdCb3R0b206ICcydmgnLFxyXG5cdFx0XHRwYWRkaW5nTGVmdDogJzJ2dycsXHJcblx0XHRcdHBhZGRpbmdSaWdodDogJzJ2dycsXHJcblx0XHRcdG1hcmdpblRvcDogJzJ2aCcsXHJcblx0XHRcdG1hcmdpbkxlZnQ6ICc3NSUnLFxyXG5cdFx0XHRjdXJzb3I6ICdwb2ludGVyJ1x0XHRcdFxyXG5cdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0bWFyZ2luOiB7XHJcblx0XHRcclxuXHRcdG1hcmdpbjogdGhlbWUuc3BhY2luZygyKSxcclxuXHRcdFxyXG5cdFx0fVx0XHRcclxuXHRcdFx0XHJcblx0XHRcclxuXHRcdFxyXG5cdH0pKTtcclxuXHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XHRcclxuXHRcclxuXHQgLyogPENoYWluSWQgLz5cclxuICAgICAgICA8QWNjb3VudCAvPlxyXG4gICAgICAgIDxCYWxhbmNlIC8+ICovXHJcblxyXG5cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPEFwcEJhciBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ3Jvdyd9fT5cclxuXHQgIFxyXG5cdCAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcxcmVtJywgdGV4dEFsaWduOiAncmlnaHQnLCBmbG9hdDogJ3JpZ2h0JyB9fT57YWN0aXZlID8gPEJhZGdlIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59IHZhcmlhbnQ9XCJkb3RcIj48QWNjb3VudEJhbGFuY2VXYWxsZXRJY29uIGZvbnRTaXplPSdsYXJnZScgLz48L0JhZGdlPiA6IGVycm9yID8gPEJhZGdlIGNvbG9yPVwiZXJyb3JcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufSB2YXJpYW50PVwiZG90XCI+PEFjY291bnRCYWxhbmNlV2FsbGV0SWNvbiBmb250U2l6ZT0nbGFyZ2UnIC8+PC9CYWRnZT4gOiA8QWNjb3VudEJhbGFuY2VXYWxsZXRJY29uIGZvbnRTaXplPSdsYXJnZScgLz59PC9kaXY+XHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLndhbGxldH0gb25DbGljaz17KCkgPT4ge29wZW5XYWxsZXQgPT09IGZhbHNlID8gc2V0T3BlbldhbGxldCh0cnVlKSA6IHNldE9wZW5XYWxsZXQoZmFsc2UpfX0gPlxyXG5cdFx0e2FjdGl2ZSA/IGAke2FjY291bnQuc3Vic3RyaW5nKDAsIDYpfS4uLiR7YWNjb3VudC5zdWJzdHJpbmcoYWNjb3VudC5sZW5ndGggLSA0KX1gIDogJ0Nvbm5lY3QgeW91ciB3YWxsZXQnfVxyXG5cdCAgPC9Cb3g+XHJcblx0IFxyXG5cdCA8L0FwcEJhcj4gXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=