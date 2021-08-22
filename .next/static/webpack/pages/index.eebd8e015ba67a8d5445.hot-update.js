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


var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\web3-page\\web3-react\\example\\Components\\Header.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function Header() {
  _s();

  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__["useWeb3React"])(),
      active = _useWeb3React.active,
      error = _useWeb3React.error;

  var useStyle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
    var _root;

    return {
      root: (_root = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_root, theme.breakpoints.only('xs'), {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_root, theme.breakpoints.between('sm', 'xl'), {
        width: '50vw',
        display: 'flex',
        flexDirection: 'column'
      }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_root, "margin", {
        margin: theme.spacing(2)
      }), _root)
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
      lineNumber: 49,
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
      lineNumber: 51,
      columnNumber: 4
    }
  }, active ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Badge"], {
    color: "primary",
    className: classes.margin,
    variant: "dot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 82
    }
  }, __jsx(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 146
    }
  })) : error ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Badge"], {
    color: "error",
    className: classes.margin,
    variant: "dot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 210
    }
  }, __jsx(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 272
    }
  })) : __jsx(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 328
    }
  })), __jsx("div", {
    className: classes.wallet,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, active ? '${account.substring(0, 6)}...${account.substring(account.length - 4)}' : 'Connect your wallet')));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlV2ViM1JlYWN0IiwiYWN0aXZlIiwiZXJyb3IiLCJ1c2VTdHlsZSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJicmVha3BvaW50cyIsIm9ubHkiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwiYmV0d2VlbiIsIm1hcmdpbiIsInNwYWNpbmciLCJjbGFzc2VzIiwidGV4dEFsaWduIiwid2FsbGV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFDL0Isc0JBQTBCQyxxRUFBWSxFQUF0QztBQUFBLE1BQVFDLE1BQVIsaUJBQVFBLE1BQVI7QUFBQSxNQUFnQkMsS0FBaEIsaUJBQWdCQSxLQUFoQjs7QUFFRixNQUFNQyxRQUFRLEdBQUdDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLFdBQVk7QUFFdENDLFVBQUksZ0hBRUZELEtBQUssQ0FBQ0UsV0FBTixDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FGRSxFQUU0QjtBQUU5QkMsZUFBTyxFQUFFLE1BRnFCO0FBRzlCQyxxQkFBYSxFQUFFLEtBSGU7QUFJOUJDLGFBQUssRUFBRTtBQUp1QixPQUY1QixvR0FVRk4sS0FBSyxDQUFDRSxXQUFOLENBQWtCSyxPQUFsQixDQUEwQixJQUExQixFQUFnQyxJQUFoQyxDQVZFLEVBVXFDO0FBRXZDRCxhQUFLLEVBQUUsTUFGZ0M7QUFHdkNGLGVBQU8sRUFBRSxNQUg4QjtBQUl2Q0MscUJBQWEsRUFBRTtBQUp3QixPQVZyQyw4R0FrQk87QUFDVkcsY0FBTSxFQUFFUixLQUFLLENBQUNTLE9BQU4sQ0FBYyxDQUFkO0FBREUsT0FsQlA7QUFGa0MsS0FBWjtBQUFBLEdBQUQsQ0FBM0I7QUE0QkMsTUFBTUMsT0FBTyxHQUFHWixRQUFRLEVBQXhCO0FBRUM7QUFDRjtBQUNBOztBQUVFLFNBQ0UsbUVBQ0EsTUFBQyx3REFBRDtBQUFRLFNBQUssRUFBRTtBQUFDTSxhQUFPLEVBQUUsTUFBVjtBQUFrQkMsbUJBQWEsRUFBRTtBQUFqQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRDtBQUFLLFNBQUssRUFBRTtBQUFFRyxZQUFNLEVBQUUsTUFBVjtBQUFrQkcsZUFBUyxFQUFFLE9BQTdCO0FBQXNDLGVBQU87QUFBN0MsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFFZixNQUFNLEdBQUcsTUFBQyx1REFBRDtBQUFPLFNBQUssRUFBQyxTQUFiO0FBQXVCLGFBQVMsRUFBRWMsT0FBTyxDQUFDRixNQUExQztBQUFrRCxXQUFPLEVBQUMsS0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnRSxNQUFDLDhFQUFEO0FBQTBCLFlBQVEsRUFBQyxPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWhFLENBQUgsR0FBMkhYLEtBQUssR0FBRyxNQUFDLHVEQUFEO0FBQU8sU0FBSyxFQUFDLE9BQWI7QUFBcUIsYUFBUyxFQUFFYSxPQUFPLENBQUNGLE1BQXhDO0FBQWdELFdBQU8sRUFBQyxLQUF4RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQThELE1BQUMsOEVBQUQ7QUFBMEIsWUFBUSxFQUFDLE9BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBOUQsQ0FBSCxHQUF5SCxNQUFDLDhFQUFEO0FBQTBCLFlBQVEsRUFBQyxPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXBVLENBRkMsRUFHRTtBQUFLLGFBQVMsRUFBRUUsT0FBTyxDQUFDRSxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ZoQixNQUFNLEdBQUcsdUVBQUgsR0FBNkUscUJBRGpGLENBSEYsQ0FEQSxDQURGO0FBVUQ7O0dBL0N1QkYsTTtVQUNJQyw2RDs7O0tBREpELE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWViZDhlMDE1YmE2N2E4ZDU0NDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlYjNSZWFjdFByb3ZpZGVyLCB1c2VXZWIzUmVhY3QsIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcclxuaW1wb3J0IENoYWluSWQgZnJvbSAnLi9DaGFpbklkJ1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL0FjY291bnQnXHJcbmltcG9ydCBCYWxhbmNlIGZyb20gJy4vQmFsYW5jZS50c3gnXHJcbmltcG9ydCB7IEFwcEJhciwgQmFkZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEFjY291bnRCYWxhbmNlV2FsbGV0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJhbGFuY2VXYWxsZXQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgeyBhY3RpdmUsIGVycm9yIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG4gIFxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0XHJcblx0XHRyb290OiB7XHJcblx0XHRcdFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMub25seSgneHMnKV06e1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuXHRcdFx0XHR3aWR0aDogJzEwMCUnXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMuYmV0d2Vlbignc20nLCAneGwnKV06e1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHdpZHRoOiAnNTB2dycsXHJcblx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0XHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHQgIG1hcmdpbjoge1xyXG5cdFx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHRcdH1cdFx0XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSkpO1xyXG5cclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcdFxyXG5cdFxyXG5cdCAvKiA8Q2hhaW5JZCAvPlxyXG4gICAgICAgIDxBY2NvdW50IC8+XHJcbiAgICAgICAgPEJhbGFuY2UgLz4gKi9cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8QXBwQmFyIHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93J319PlxyXG5cdCAgXHJcblx0ICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzFyZW0nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGZsb2F0OiAncmlnaHQnIH19PnthY3RpdmUgPyA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0gdmFyaWFudD1cImRvdFwiPjxBY2NvdW50QmFsYW5jZVdhbGxldEljb24gZm9udFNpemU9J2xhcmdlJyAvPjwvQmFkZ2U+IDogZXJyb3IgPyA8QmFkZ2UgY29sb3I9XCJlcnJvclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59IHZhcmlhbnQ9XCJkb3RcIj48QWNjb3VudEJhbGFuY2VXYWxsZXRJY29uIGZvbnRTaXplPSdsYXJnZScgLz48L0JhZGdlPiA6IDxBY2NvdW50QmFsYW5jZVdhbGxldEljb24gZm9udFNpemU9J2xhcmdlJyAvPn08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMud2FsbGV0fT5cclxuXHQgIHthY3RpdmUgPyAnJHthY2NvdW50LnN1YnN0cmluZygwLCA2KX0uLi4ke2FjY291bnQuc3Vic3RyaW5nKGFjY291bnQubGVuZ3RoIC0gNCl9JyA6ICdDb25uZWN0IHlvdXIgd2FsbGV0J308L2Rpdj5cclxuXHQgPC9BcHBCYXI+IFxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9