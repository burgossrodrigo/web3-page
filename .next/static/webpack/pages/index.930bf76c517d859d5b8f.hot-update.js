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
      lineNumber: 45,
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
      lineNumber: 47,
      columnNumber: 4
    }
  }, active ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Badge"], {
    color: "primary",
    className: classes.margin,
    variant: "dot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 82
    }
  }, __jsx(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 146
    }
  })) : error ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Badge"], {
    color: "primary",
    className: classes.margin,
    variant: "dot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 210
    }
  }, __jsx(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 274
    }
  })) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Badge"], {
    color: "primary",
    className: classes.margin,
    variant: "dot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 330
    }
  }, __jsx(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 394
    }
  })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlV2ViM1JlYWN0IiwiYWN0aXZlIiwiZXJyb3IiLCJ1c2VTdHlsZSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJicmVha3BvaW50cyIsIm9ubHkiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIndpZHRoIiwiYmV0d2VlbiIsImNsYXNzZXMiLCJtYXJnaW4iLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR2UsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUMvQixzQkFBMEJDLHFFQUFZLEVBQXRDO0FBQUEsTUFBUUMsTUFBUixpQkFBUUEsTUFBUjtBQUFBLE1BQWdCQyxLQUFoQixpQkFBZ0JBLEtBQWhCOztBQUVGLE1BQU1DLFFBQVEsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsV0FBWTtBQUV0Q0MsVUFBSSxnSEFFRkQsS0FBSyxDQUFDRSxXQUFOLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUZFLEVBRTRCO0FBRTlCQyxlQUFPLEVBQUUsTUFGcUI7QUFHOUJDLHFCQUFhLEVBQUUsS0FIZTtBQUk5QkMsYUFBSyxFQUFFO0FBSnVCLE9BRjVCLG9HQVVGTixLQUFLLENBQUNFLFdBQU4sQ0FBa0JLLE9BQWxCLENBQTBCLElBQTFCLEVBQWdDLElBQWhDLENBVkUsRUFVcUM7QUFFdkNELGFBQUssRUFBRSxNQUZnQztBQUd2Q0YsZUFBTyxFQUFFLE1BSDhCO0FBSXZDQyxxQkFBYSxFQUFFO0FBSndCLE9BVnJDO0FBRmtDLEtBQVo7QUFBQSxHQUFELENBQTNCO0FBd0JDLE1BQU1HLE9BQU8sR0FBR1YsUUFBUSxFQUF4QjtBQUVDO0FBQ0Y7QUFDQTs7QUFFRSxTQUNFLG1FQUNBLE1BQUMsd0RBQUQ7QUFBUSxTQUFLLEVBQUU7QUFBQ00sYUFBTyxFQUFFLE1BQVY7QUFBa0JDLG1CQUFhLEVBQUU7QUFBakMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUQ7QUFBSyxTQUFLLEVBQUU7QUFBRUksWUFBTSxFQUFFLE1BQVY7QUFBa0JDLGVBQVMsRUFBRSxPQUE3QjtBQUFzQyxlQUFPO0FBQTdDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxRWQsTUFBTSxHQUFHLE1BQUMsdURBQUQ7QUFBTyxTQUFLLEVBQUMsU0FBYjtBQUF1QixhQUFTLEVBQUVZLE9BQU8sQ0FBQ0MsTUFBMUM7QUFBa0QsV0FBTyxFQUFDLEtBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0UsTUFBQyw4RUFBRDtBQUEwQixZQUFRLEVBQUMsT0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFoRSxDQUFILEdBQTJIWixLQUFLLEdBQUcsTUFBQyx1REFBRDtBQUFPLFNBQUssRUFBQyxTQUFiO0FBQXVCLGFBQVMsRUFBRVcsT0FBTyxDQUFDQyxNQUExQztBQUFrRCxXQUFPLEVBQUMsS0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnRSxNQUFDLDhFQUFEO0FBQTBCLFlBQVEsRUFBQyxPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWhFLENBQUgsR0FBMkgsTUFBQyx1REFBRDtBQUFPLFNBQUssRUFBQyxTQUFiO0FBQXVCLGFBQVMsRUFBRUQsT0FBTyxDQUFDQyxNQUExQztBQUFrRCxXQUFPLEVBQUMsS0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnRSxNQUFDLDhFQUFEO0FBQTBCLFlBQVEsRUFBQyxPQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQWhFLENBQXRVLENBRkMsQ0FEQSxDQURGO0FBU0Q7O0dBMUN1QmYsTTtVQUNJQyw2RDs7O0tBREpELE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTMwYmY3NmM1MTdkODU5ZDViOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdlYjNSZWFjdFByb3ZpZGVyLCB1c2VXZWIzUmVhY3QsIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcclxuaW1wb3J0IENoYWluSWQgZnJvbSAnLi9DaGFpbklkJ1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL0FjY291bnQnXHJcbmltcG9ydCBCYWxhbmNlIGZyb20gJy4vQmFsYW5jZS50c3gnXHJcbmltcG9ydCB7IEFwcEJhciwgQmFkZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEFjY291bnRCYWxhbmNlV2FsbGV0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJhbGFuY2VXYWxsZXQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgeyBhY3RpdmUsIGVycm9yIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG4gIFxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0XHJcblx0XHRyb290OiB7XHJcblx0XHRcdFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMub25seSgneHMnKV06e1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuXHRcdFx0XHR3aWR0aDogJzEwMCUnXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMuYmV0d2Vlbignc20nLCAneGwnKV06e1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHdpZHRoOiAnNTB2dycsXHJcblx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0XHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHR9KSk7XHJcblxyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1x0XHJcblx0XHJcblx0IC8qIDxDaGFpbklkIC8+XHJcbiAgICAgICAgPEFjY291bnQgLz5cclxuICAgICAgICA8QmFsYW5jZSAvPiAqL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxBcHBCYXIgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnfX0+XHJcblx0ICBcclxuXHQgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMXJlbScsIHRleHRBbGlnbjogJ3JpZ2h0JywgZmxvYXQ6ICdyaWdodCcgfX0+e2FjdGl2ZSA/IDxCYWRnZSBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufSB2YXJpYW50PVwiZG90XCI+PEFjY291bnRCYWxhbmNlV2FsbGV0SWNvbiBmb250U2l6ZT0nbGFyZ2UnIC8+PC9CYWRnZT4gOiBlcnJvciA/IDxCYWRnZSBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufSB2YXJpYW50PVwiZG90XCI+PEFjY291bnRCYWxhbmNlV2FsbGV0SWNvbiBmb250U2l6ZT0nbGFyZ2UnIC8+PC9CYWRnZT4gOiA8QmFkZ2UgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0gdmFyaWFudD1cImRvdFwiPjxBY2NvdW50QmFsYW5jZVdhbGxldEljb24gZm9udFNpemU9J2xhcmdlJyAvPjwvQmFkZ2U+fTwvZGl2PlxyXG4gICAgICBcclxuXHQgPC9BcHBCYXI+IFxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9