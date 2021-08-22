webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Spinner.tsx":
/*!********************************!*\
  !*** ./Components/Spinner.tsx ***!
  \********************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\web3-page\\web3-react\\example\\Components\\Spinner.tsx";
var _excluded = ["color"];
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
 // <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->

function Spinner(_ref) {
  var color = _ref.color,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  return __jsx("svg", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    width: "38",
    height: "38",
    viewBox: "0 0 38 38",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: color
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), __jsx("g", {
    fill: "none",
    fillRule: "evenodd",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("g", {
    transform: "translate(1 1)",
    strokeWidth: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("circle", {
    strokeOpacity: ".5",
    cx: "18",
    cy: "18",
    r: "18",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M36 18c0-9.94-8.06-18-18-18",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, __jsx("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: "1s",
    repeatCount: "indefinite",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  })))));
}
_c = Spinner;

var _c;

$RefreshReg$(_c, "Spinner");

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

/***/ }),

/***/ "./Components/Wallets.tsx":
/*!********************************!*\
  !*** ./Components/Wallets.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wallet; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/injected-connector */ "./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js");
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web3-react/walletconnect-connector */ "./node_modules/@web3-react/walletconnect-connector/dist/walletconnect-connector.esm.js");
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/frame-connector */ "./node_modules/@web3-react/frame-connector/dist/frame-connector.esm.js");
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ethersproject/providers */ "./node_modules/@ethersproject/providers/lib.esm/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks */ "./hooks.ts");
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../connectors */ "./connectors.ts");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Spinner */ "./Components/Spinner.tsx");



var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\web3-page\\web3-react\\example\\Components\\Wallets.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









function Wallet(openWallet, setOpenWallet) {
  _s();

  var _connectorsByName,
      _this = this;

  var ConnectorNames;

  (function (ConnectorNames) {
    ConnectorNames["Injected"] = "Injected";
    ConnectorNames["Network"] = "Network";
    ConnectorNames["WalletConnect"] = "WalletConnect";
    ConnectorNames["WalletLink"] = "WalletLink";
    ConnectorNames["Ledger"] = "Ledger";
    ConnectorNames["Trezor"] = "Trezor";
    ConnectorNames["Lattice"] = "Lattice";
    ConnectorNames["Frame"] = "Frame";
    ConnectorNames["Authereum"] = "Authereum";
    ConnectorNames["Fortmatic"] = "Fortmatic";
    ConnectorNames["Magic"] = "Magic";
    ConnectorNames["Portis"] = "Portis";
    ConnectorNames["Torus"] = "Torus";
  })(ConnectorNames || (ConnectorNames = {}));

  var connectorsByName = (_connectorsByName = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Injected, _connectors__WEBPACK_IMPORTED_MODULE_9__["injected"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Network, _connectors__WEBPACK_IMPORTED_MODULE_9__["network"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.WalletConnect, _connectors__WEBPACK_IMPORTED_MODULE_9__["walletconnect"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.WalletLink, _connectors__WEBPACK_IMPORTED_MODULE_9__["walletlink"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Ledger, _connectors__WEBPACK_IMPORTED_MODULE_9__["ledger"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Trezor, _connectors__WEBPACK_IMPORTED_MODULE_9__["trezor"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Lattice, _connectors__WEBPACK_IMPORTED_MODULE_9__["lattice"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Frame, _connectors__WEBPACK_IMPORTED_MODULE_9__["frame"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Authereum, _connectors__WEBPACK_IMPORTED_MODULE_9__["authereum"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Fortmatic, _connectors__WEBPACK_IMPORTED_MODULE_9__["fortmatic"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Magic, _connectors__WEBPACK_IMPORTED_MODULE_9__["magic"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Portis, _connectors__WEBPACK_IMPORTED_MODULE_9__["portis"]), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_connectorsByName, ConnectorNames.Torus, _connectors__WEBPACK_IMPORTED_MODULE_9__["torus"]), _connectorsByName);

  function getErrorMessage(error) {
    if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_4__["NoEthereumProviderError"]) {
      return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.';
    } else if (error instanceof _web3_react_core__WEBPACK_IMPORTED_MODULE_3__["UnsupportedChainIdError"]) {
      return "You're connected to an unsupported network.";
    } else if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_4__["UserRejectedRequestError"] || error instanceof _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_5__["UserRejectedRequestError"] || error instanceof _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_6__["UserRejectedRequestError"]) {
      return 'Please authorize this website to access your Ethereum account.';
    } else {
      console.error(error);
      return 'An unknown error occurred. Check the console for more details.';
    }
  }

  function getLibrary(provider) {
    var library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_7__["Web3Provider"](provider);
    library.pollingInterval = 12000;
    return library;
  }

  (function (ConnectorNames) {
    ConnectorNames["Injected"] = "Injected";
    ConnectorNames["Network"] = "Network";
    ConnectorNames["WalletConnect"] = "WalletConnect";
    ConnectorNames["WalletLink"] = "WalletLink";
    ConnectorNames["Ledger"] = "Ledger";
    ConnectorNames["Trezor"] = "Trezor";
    ConnectorNames["Lattice"] = "Lattice";
    ConnectorNames["Frame"] = "Frame";
    ConnectorNames["Authereum"] = "Authereum";
    ConnectorNames["Fortmatic"] = "Fortmatic";
    ConnectorNames["Magic"] = "Magic";
    ConnectorNames["Portis"] = "Portis";
    ConnectorNames["Torus"] = "Torus";
  })(ConnectorNames || (ConnectorNames = {}));

  function getLibrary(provider) {
    var library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_7__["Web3Provider"](provider);
    library.pollingInterval = 12000;
    return library;
  }

  var context = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"])();
  var connector = context.connector,
      library = context.library,
      chainId = context.chainId,
      account = context.account,
      activate = context.activate,
      deactivate = context.deactivate,
      active = context.active,
      error = context.error; // handle logic to recognize the connector currently being activated

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      activatingConnector = _React$useState2[0],
      setActivatingConnector = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]); // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already

  var triedEager = Object(_hooks__WEBPACK_IMPORTED_MODULE_8__["useEagerConnect"])(); // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists

  Object(_hooks__WEBPACK_IMPORTED_MODULE_8__["useInactiveListener"])(!triedEager || !!activatingConnector);

  if (openWallet === false) {
    __jsx(Navigation, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 4
      }
    });

    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Navigation, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 4
      }
    }), __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 4
      }
    }, "Open you wallet"));
  } else {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("hr", {
      style: {
        margin: '2rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 7
      }
    }), __jsx("div", {
      style: {
        display: 'grid',
        gridGap: '1rem',
        gridTemplateColumns: '1fr',
        maxWidth: '20rem',
        margin: 'auto',
        "float": 'right'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 7
      }
    }, Object.keys(connectorsByName).map(function (name) {
      var currentConnector = connectorsByName[name];
      var activating = currentConnector === activatingConnector;
      var connected = currentConnector === connector;
      var disabled = !triedEager || !!activatingConnector || connected || !!error;
      return __jsx("button", {
        style: {
          height: '3rem',
          borderRadius: '1rem',
          borderColor: activating ? 'orange' : connected ? 'green' : 'unset',
          cursor: disabled ? 'unset' : 'pointer',
          position: 'relative'
        },
        disabled: disabled,
        key: name,
        onClick: function onClick() {
          setActivatingConnector(currentConnector);
          activate(connectorsByName[name]);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 13
        }
      }, __jsx("div", {
        style: {
          position: 'absolute',
          top: '0',
          left: '0',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          color: 'black',
          margin: '0 0 0 1rem'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 15
        }
      }, activating && __jsx(_Spinner__WEBPACK_IMPORTED_MODULE_10__["Spinner"], {
        color: 'black',
        style: {
          height: '25%',
          marginLeft: '-1rem'
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 32
        }
      }), connected && __jsx("span", {
        role: "img",
        "aria-label": "check",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 19
        }
      }, "\u2705")), name);
    })), __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 7
      }
    }, (active || error) && __jsx("button", {
      style: {
        height: '3rem',
        marginTop: '2rem',
        borderRadius: '1rem',
        borderColor: 'red',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        deactivate();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 11
      }
    }, "Deactivate"), !!error && __jsx("h4", {
      style: {
        marginTop: '1rem',
        marginBottom: '0'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 21
      }
    }, getErrorMessage(error))), __jsx("hr", {
      style: {
        margin: '2rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 7
      }
    }), __jsx("div", {
      style: {
        display: 'grid',
        gridGap: '1rem',
        gridTemplateColumns: 'fit-content',
        maxWidth: '20rem',
        margin: 'auto'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 7
      }
    }, !!(library && account) && __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        library.getSigner(account).signMessage('👋').then(function (signature) {
          window.alert("Success!\n\n".concat(signature));
        })["catch"](function (error) {
          window.alert('Failure!' + (error && error.message ? "\n\n".concat(error.message) : ''));
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 11
      }
    }, "Sign Message"), !!(connector === connectorsByName[ConnectorNames.Network] && chainId) && __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        ;
        connector.changeChainId(chainId === 1 ? 4 : 1);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 11
      }
    }, "Switch Networks"), connector === connectorsByName[ConnectorNames.WalletConnect] && __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        ;
        connector.close();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 11
      }
    }, "Kill WalletConnect Session"), connector === connectorsByName[ConnectorNames.WalletLink] && __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        ;
        connector.close();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 11
      }
    }, "Kill WalletLink Session"), connector === connectorsByName[ConnectorNames.Fortmatic] && __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        ;
        connector.close();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 11
      }
    }, "Kill Fortmatic Session"), connector === connectorsByName[ConnectorNames.Magic] && __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        ;
        connector.close();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 11
      }
    }, "Kill Magic Session"), connector === connectorsByName[ConnectorNames.Portis] && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, chainId !== undefined && __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        ;
        connector.changeNetwork(chainId === 1 ? 100 : 1);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 324,
        columnNumber: 15
      }
    }, "Switch Networks"), __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        ;
        connector.close();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 13
      }
    }, "Kill Portis Session")), connector === connectorsByName[ConnectorNames.Torus] && __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: function onClick() {
        ;
        connector.close();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 11
      }
    }, "Kill Torus Session")));
  }
}

_s(Wallet, "oVtBozX5lH0j7w1/NhHB2/98yx0=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_3__["useWeb3React"], _hooks__WEBPACK_IMPORTED_MODULE_8__["useEagerConnect"], _hooks__WEBPACK_IMPORTED_MODULE_8__["useInactiveListener"]];
});

_c = Wallet;

var _c;

$RefreshReg$(_c, "Wallet");

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

/***/ }),

/***/ "./hooks.ts":
/*!******************!*\
  !*** ./hooks.ts ***!
  \******************/
/*! exports provided: useEagerConnect, useInactiveListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEagerConnect", function() { return useEagerConnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInactiveListener", function() { return useInactiveListener; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connectors */ "./connectors.ts");
var _s = $RefreshSig$(),
    _s2 = $RefreshSig$();




function useEagerConnect() {
  _s();

  var _useWeb3React = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])(),
      activate = _useWeb3React.activate,
      active = _useWeb3React.active;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      tried = _useState[0],
      setTried = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _connectors__WEBPACK_IMPORTED_MODULE_2__["injected"].isAuthorized().then(function (isAuthorized) {
      if (isAuthorized) {
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"], undefined, true)["catch"](function () {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }, []); // intentionally only running on mount (make sure it's only mounted once :))
  // if the connection worked, wait until we get confirmation of that to flip the flag

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);
  return tried;
}

_s(useEagerConnect, "GLh+9ege4oFDiozdAF2n3i5tC+o=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"]];
});

function useInactiveListener() {
  _s2();

  var suppress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  var _useWeb3React2 = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])(),
      active = _useWeb3React2.active,
      error = _useWeb3React2.error,
      activate = _useWeb3React2.activate;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _ref = window,
        ethereum = _ref.ethereum;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      var handleConnect = function handleConnect() {
        console.log("Handling 'connect' event");
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
      };

      var handleChainChanged = function handleChainChanged(chainId) {
        console.log("Handling 'chainChanged' event with payload", chainId);
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
      };

      var handleAccountsChanged = function handleAccountsChanged(accounts) {
        console.log("Handling 'accountsChanged' event with payload", accounts);

        if (accounts.length > 0) {
          activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
        }
      };

      var handleNetworkChanged = function handleNetworkChanged(networkId) {
        console.log("Handling 'networkChanged' event with payload", networkId);
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
      };

      ethereum.on('connect', handleConnect);
      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);
      ethereum.on('networkChanged', handleNetworkChanged);
      return function () {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect);
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
          ethereum.removeListener('networkChanged', handleNetworkChanged);
        }
      };
    }
  }, [active, error, suppress, activate]);
}

_s2(useInactiveListener, "tg+LUTCYzAVRTYzC32Q8yta1BMA=", false, function () {
  return [_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"]];
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "./node_modules/@web3-react/core/dist/core.esm.js");
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Header */ "./Components/Header.js");
/* harmony import */ var _Components_Wallets_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Wallets.tsx */ "./Components/Wallets.tsx");
var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\web3-page\\web3-react\\example\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["Web3ReactProvider"], {
    getLibrary: getLibrary,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx(_Components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }), __jsx(_Components_Wallets_tsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }
  }));
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9TcGlubmVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9XYWxsZXRzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJTcGlubmVyIiwiY29sb3IiLCJyZXN0IiwiV2FsbGV0Iiwib3BlbldhbGxldCIsInNldE9wZW5XYWxsZXQiLCJDb25uZWN0b3JOYW1lcyIsImNvbm5lY3RvcnNCeU5hbWUiLCJJbmplY3RlZCIsImluamVjdGVkIiwiTmV0d29yayIsIm5ldHdvcmsiLCJXYWxsZXRDb25uZWN0Iiwid2FsbGV0Y29ubmVjdCIsIldhbGxldExpbmsiLCJ3YWxsZXRsaW5rIiwiTGVkZ2VyIiwibGVkZ2VyIiwiVHJlem9yIiwidHJlem9yIiwiTGF0dGljZSIsImxhdHRpY2UiLCJGcmFtZSIsImZyYW1lIiwiQXV0aGVyZXVtIiwiYXV0aGVyZXVtIiwiRm9ydG1hdGljIiwiZm9ydG1hdGljIiwiTWFnaWMiLCJtYWdpYyIsIlBvcnRpcyIsInBvcnRpcyIsIlRvcnVzIiwidG9ydXMiLCJnZXRFcnJvck1lc3NhZ2UiLCJlcnJvciIsIk5vRXRoZXJldW1Qcm92aWRlckVycm9yIiwiVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZCIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSIsImNvbnNvbGUiLCJnZXRMaWJyYXJ5IiwicHJvdmlkZXIiLCJsaWJyYXJ5IiwiV2ViM1Byb3ZpZGVyIiwicG9sbGluZ0ludGVydmFsIiwiY29udGV4dCIsInVzZVdlYjNSZWFjdCIsImNvbm5lY3RvciIsImNoYWluSWQiLCJhY2NvdW50IiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiYWN0aXZlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFjdGl2YXRpbmdDb25uZWN0b3IiLCJzZXRBY3RpdmF0aW5nQ29ubmVjdG9yIiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwidHJpZWRFYWdlciIsInVzZUVhZ2VyQ29ubmVjdCIsInVzZUluYWN0aXZlTGlzdGVuZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXhXaWR0aCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJuYW1lIiwiY3VycmVudENvbm5lY3RvciIsImFjdGl2YXRpbmciLCJjb25uZWN0ZWQiLCJkaXNhYmxlZCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwiY3Vyc29yIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYWxpZ25JdGVtcyIsIm1hcmdpbkxlZnQiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZ2V0U2lnbmVyIiwic2lnbk1lc3NhZ2UiLCJ0aGVuIiwic2lnbmF0dXJlIiwid2luZG93IiwiYWxlcnQiLCJtZXNzYWdlIiwiY2hhbmdlQ2hhaW5JZCIsImNsb3NlIiwiY2hhbmdlTmV0d29yayIsInRyaWVkIiwic2V0VHJpZWQiLCJpc0F1dGhvcml6ZWQiLCJzdXBwcmVzcyIsImV0aGVyZXVtIiwib24iLCJoYW5kbGVDb25uZWN0IiwibG9nIiwiaGFuZGxlQ2hhaW5DaGFuZ2VkIiwiaGFuZGxlQWNjb3VudHNDaGFuZ2VkIiwiYWNjb3VudHMiLCJsZW5ndGgiLCJoYW5kbGVOZXR3b3JrQ2hhbmdlZCIsIm5ldHdvcmtJZCIsInJlbW92ZUxpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FFQTs7QUFDTyxTQUFTQSxPQUFULE9BQTBDO0FBQUEsTUFBdkJDLEtBQXVCLFFBQXZCQSxLQUF1QjtBQUFBLE1BQWJDLElBQWE7O0FBQy9DLFNBQ0U7QUFBSyxTQUFLLEVBQUMsSUFBWDtBQUFnQixVQUFNLEVBQUMs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LFFBQWhCLEVBQTBCbEQsUUFBMUIsQ0FwQ00sQ0FBVDtBQXFDRDs7SUF4Q2VXLG1CO1VBQ3NCZiw2RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakN0QztBQUNBO0FBVUE7QUFFQTtBQXVCZSwyRUFBVztBQUN4QixTQUNFLE1BQUMsa0VBQUQ7QUFBbUIsY0FBVSxFQUFFTixVQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRCxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQyxDQURGO0FBTUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjc4ZTJiYzYzMTIyM2MxNDVjYzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbi8vIDwhLS0gQnkgU2FtIEhlcmJlcnQgKEBzaGVyYiksIGZvciBldmVyeW9uZS4gTW9yZSBAIGh0dHA6Ly9nb28uZ2wvN0FKemJMIC0tPlxyXG5leHBvcnQgZnVuY3Rpb24gU3Bpbm5lcih7IGNvbG9yLCAuLi5yZXN0IH06IGFueSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHdpZHRoPVwiMzhcIiBoZWlnaHQ9XCIzOFwiIHZpZXdCb3g9XCIwIDAgMzggMzhcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3Ryb2tlPXtjb2xvcn0gey4uLnJlc3R9PlxyXG4gICAgICA8ZyBmaWxsPVwibm9uZVwiIGZpbGxSdWxlPVwiZXZlbm9kZFwiPlxyXG4gICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxIDEpXCIgc3Ryb2tlV2lkdGg9XCIyXCI+XHJcbiAgICAgICAgICA8Y2lyY2xlIHN0cm9rZU9wYWNpdHk9XCIuNVwiIGN4PVwiMThcIiBjeT1cIjE4XCIgcj1cIjE4XCIgLz5cclxuICAgICAgICAgIDxwYXRoIGQ9XCJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMThcIj5cclxuICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm1cclxuICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcclxuICAgICAgICAgICAgICB0eXBlPVwicm90YXRlXCJcclxuICAgICAgICAgICAgICBmcm9tPVwiMCAxOCAxOFwiXHJcbiAgICAgICAgICAgICAgdG89XCIzNjAgMTggMThcIlxyXG4gICAgICAgICAgICAgIGR1cj1cIjFzXCJcclxuICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9wYXRoPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9zdmc+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBXZWIzUmVhY3RQcm92aWRlciwgdXNlV2ViM1JlYWN0LCBVbnN1cHBvcnRlZENoYWluSWRFcnJvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXHJcbmltcG9ydCB7XHJcbiAgTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IsXHJcbiAgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkXHJcbn0gZnJvbSAnQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yRnJhbWUgfSBmcm9tICdAd2ViMy1yZWFjdC9mcmFtZS1jb25uZWN0b3InXHJcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3Byb3ZpZGVycydcclxuaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC91bml0cydcclxuXHJcbmltcG9ydCB7IHVzZUVhZ2VyQ29ubmVjdCwgdXNlSW5hY3RpdmVMaXN0ZW5lciB9IGZyb20gJy4uL2hvb2tzJ1xyXG5pbXBvcnQge1xyXG4gIGluamVjdGVkLFxyXG4gIG5ldHdvcmssXHJcbiAgd2FsbGV0Y29ubmVjdCxcclxuICB3YWxsZXRsaW5rLFxyXG4gIGxlZGdlcixcclxuICB0cmV6b3IsXHJcbiAgbGF0dGljZSxcclxuICBmcmFtZSxcclxuICBhdXRoZXJldW0sXHJcbiAgZm9ydG1hdGljLFxyXG4gIG1hZ2ljLFxyXG4gIHBvcnRpcyxcclxuICB0b3J1c1xyXG59IGZyb20gJy4uL2Nvbm5lY3RvcnMnXHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuL1NwaW5uZXInXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhbGxldChvcGVuV2FsbGV0LCBzZXRPcGVuV2FsbGV0KSB7XHJcblxyXG5lbnVtIENvbm5lY3Rvck5hbWVzIHtcclxuICBJbmplY3RlZCA9ICdJbmplY3RlZCcsXHJcbiAgTmV0d29yayA9ICdOZXR3b3JrJyxcclxuICBXYWxsZXRDb25uZWN0ID0gJ1dhbGxldENvbm5lY3QnLFxyXG4gIFdhbGxldExpbmsgPSAnV2FsbGV0TGluaycsXHJcbiAgTGVkZ2VyID0gJ0xlZGdlcicsXHJcbiAgVHJlem9yID0gJ1RyZXpvcicsXHJcbiAgTGF0dGljZSA9ICdMYXR0aWNlJyxcclxuICBGcmFtZSA9ICdGcmFtZScsXHJcbiAgQXV0aGVyZXVtID0gJ0F1dGhlcmV1bScsXHJcbiAgRm9ydG1hdGljID0gJ0ZvcnRtYXRpYycsXHJcbiAgTWFnaWMgPSAnTWFnaWMnLFxyXG4gIFBvcnRpcyA9ICdQb3J0aXMnLFxyXG4gIFRvcnVzID0gJ1RvcnVzJ1xyXG59XHJcblxyXG5jb25zdCBjb25uZWN0b3JzQnlOYW1lOiB7IFtjb25uZWN0b3JOYW1lIGluIENvbm5lY3Rvck5hbWVzXTogYW55IH0gPSB7XHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkluamVjdGVkXTogaW5qZWN0ZWQsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLk5ldHdvcmtdOiBuZXR3b3JrLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5XYWxsZXRDb25uZWN0XTogd2FsbGV0Y29ubmVjdCxcclxuICBbQ29ubmVjdG9yTmFtZXMuV2FsbGV0TGlua106IHdhbGxldGxpbmssXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkxlZGdlcl06IGxlZGdlcixcclxuICBbQ29ubmVjdG9yTmFtZXMuVHJlem9yXTogdHJlem9yLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5MYXR0aWNlXTogbGF0dGljZSxcclxuICBbQ29ubmVjdG9yTmFtZXMuRnJhbWVdOiBmcmFtZSxcclxuICBbQ29ubmVjdG9yTmFtZXMuQXV0aGVyZXVtXTogYXV0aGVyZXVtLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5Gb3J0bWF0aWNdOiBmb3J0bWF0aWMsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLk1hZ2ljXTogbWFnaWMsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLlBvcnRpc106IHBvcnRpcyxcclxuICBbQ29ubmVjdG9yTmFtZXMuVG9ydXNdOiB0b3J1c1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRFcnJvck1lc3NhZ2UoZXJyb3I6IEVycm9yKSB7XHJcbiAgaWYgKGVycm9yIGluc3RhbmNlb2YgTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IpIHtcclxuICAgIHJldHVybiAnTm8gRXRoZXJldW0gYnJvd3NlciBleHRlbnNpb24gZGV0ZWN0ZWQsIGluc3RhbGwgTWV0YU1hc2sgb24gZGVza3RvcCBvciB2aXNpdCBmcm9tIGEgZEFwcCBicm93c2VyIG9uIG1vYmlsZS4nXHJcbiAgfSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yKSB7XHJcbiAgICByZXR1cm4gXCJZb3UncmUgY29ubmVjdGVkIHRvIGFuIHVuc3VwcG9ydGVkIG5ldHdvcmsuXCJcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgZXJyb3IgaW5zdGFuY2VvZiBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZCB8fFxyXG4gICAgZXJyb3IgaW5zdGFuY2VvZiBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JXYWxsZXRDb25uZWN0IHx8XHJcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckZyYW1lXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gJ1BsZWFzZSBhdXRob3JpemUgdGhpcyB3ZWJzaXRlIHRvIGFjY2VzcyB5b3VyIEV0aGVyZXVtIGFjY291bnQuJ1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgcmV0dXJuICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkLiBDaGVjayB0aGUgY29uc29sZSBmb3IgbW9yZSBkZXRhaWxzLidcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldExpYnJhcnkocHJvdmlkZXI6IGFueSk6IFdlYjNQcm92aWRlciB7XHJcbiAgY29uc3QgbGlicmFyeSA9IG5ldyBXZWIzUHJvdmlkZXIocHJvdmlkZXIpXHJcbiAgbGlicmFyeS5wb2xsaW5nSW50ZXJ2YWwgPSAxMjAwMFxyXG4gIHJldHVybiBsaWJyYXJ5XHJcbn1cclxuZW51bSBDb25uZWN0b3JOYW1lcyB7XHJcbiAgSW5qZWN0ZWQgPSAnSW5qZWN0ZWQnLFxyXG4gIE5ldHdvcmsgPSAnTmV0d29yaycsXHJcbiAgV2FsbGV0Q29ubmVjdCA9ICdXYWxsZXRDb25uZWN0JyxcclxuICBXYWxsZXRMaW5rID0gJ1dhbGxldExpbmsnLFxyXG4gIExlZGdlciA9ICdMZWRnZXInLFxyXG4gIFRyZXpvciA9ICdUcmV6b3InLFxyXG4gIExhdHRpY2UgPSAnTGF0dGljZScsXHJcbiAgRnJhbWUgPSAnRnJhbWUnLFxyXG4gIEF1dGhlcmV1bSA9ICdBdXRoZXJldW0nLFxyXG4gIEZvcnRtYXRpYyA9ICdGb3J0bWF0aWMnLFxyXG4gIE1hZ2ljID0gJ01hZ2ljJyxcclxuICBQb3J0aXMgPSAnUG9ydGlzJyxcclxuICBUb3J1cyA9ICdUb3J1cydcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldExpYnJhcnkocHJvdmlkZXI6IGFueSk6IFdlYjNQcm92aWRlciB7XHJcbiAgY29uc3QgbGlicmFyeSA9IG5ldyBXZWIzUHJvdmlkZXIocHJvdmlkZXIpXHJcbiAgbGlicmFyeS5wb2xsaW5nSW50ZXJ2YWwgPSAxMjAwMFxyXG4gIHJldHVybiBsaWJyYXJ5XHJcbn1cclxuXHJcbiAgY29uc3QgY29udGV4dCA9IHVzZVdlYjNSZWFjdDxXZWIzUHJvdmlkZXI+KClcclxuICBjb25zdCB7IGNvbm5lY3RvciwgbGlicmFyeSwgY2hhaW5JZCwgYWNjb3VudCwgYWN0aXZhdGUsIGRlYWN0aXZhdGUsIGFjdGl2ZSwgZXJyb3IgfSA9IGNvbnRleHRcclxuXHRcclxuICAvLyBoYW5kbGUgbG9naWMgdG8gcmVjb2duaXplIHRoZSBjb25uZWN0b3IgY3VycmVudGx5IGJlaW5nIGFjdGl2YXRlZFxyXG4gIGNvbnN0IFthY3RpdmF0aW5nQ29ubmVjdG9yLCBzZXRBY3RpdmF0aW5nQ29ubmVjdG9yXSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aXZhdGluZ0Nvbm5lY3RvciAmJiBhY3RpdmF0aW5nQ29ubmVjdG9yID09PSBjb25uZWN0b3IpIHtcclxuICAgICAgc2V0QWN0aXZhdGluZ0Nvbm5lY3Rvcih1bmRlZmluZWQpXHJcbiAgICB9XHJcbiAgfSwgW2FjdGl2YXRpbmdDb25uZWN0b3IsIGNvbm5lY3Rvcl0pXHJcblxyXG4gIC8vIGhhbmRsZSBsb2dpYyB0byBlYWdlcmx5IGNvbm5lY3QgdG8gdGhlIGluamVjdGVkIGV0aGVyZXVtIHByb3ZpZGVyLCBpZiBpdCBleGlzdHMgYW5kIGhhcyBncmFudGVkIGFjY2VzcyBhbHJlYWR5XHJcbiAgY29uc3QgdHJpZWRFYWdlciA9IHVzZUVhZ2VyQ29ubmVjdCgpXHJcblxyXG4gIC8vIGhhbmRsZSBsb2dpYyB0byBjb25uZWN0IGluIHJlYWN0aW9uIHRvIGNlcnRhaW4gZXZlbnRzIG9uIHRoZSBpbmplY3RlZCBldGhlcmV1bSBwcm92aWRlciwgaWYgaXQgZXhpc3RzXHJcbiAgdXNlSW5hY3RpdmVMaXN0ZW5lcighdHJpZWRFYWdlciB8fCAhIWFjdGl2YXRpbmdDb25uZWN0b3IpXHJcbiAgaWYob3BlbldhbGxldCA9PT0gZmFsc2Upe1xyXG5cdCAgXHJcblx0ICA8TmF2aWdhdGlvbiAvPlxyXG5cdCAgcmV0dXJuKDw+XHJcblx0ICA8TmF2aWdhdGlvbiAvPlxyXG5cdCAgPGgxPk9wZW4geW91IHdhbGxldDwvaDE+XHJcblx0ICBcclxuXHQgIDwvPil9XHJcblx0ICBcclxuXHQgIFxyXG5cdCAgZWxzZXsgXHRcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpbjogJzJyZW0nIH19IC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgICAgZ3JpZEdhcDogJzFyZW0nLFxyXG4gICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmcicsXHJcbiAgICAgICAgICBtYXhXaWR0aDogJzIwcmVtJyxcclxuICAgICAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG5cdFx0ICBmbG9hdDogJ3JpZ2h0J1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7T2JqZWN0LmtleXMoY29ubmVjdG9yc0J5TmFtZSkubWFwKG5hbWUgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudENvbm5lY3RvciA9IGNvbm5lY3RvcnNCeU5hbWVbbmFtZV1cclxuICAgICAgICAgIGNvbnN0IGFjdGl2YXRpbmcgPSBjdXJyZW50Q29ubmVjdG9yID09PSBhY3RpdmF0aW5nQ29ubmVjdG9yXHJcbiAgICAgICAgICBjb25zdCBjb25uZWN0ZWQgPSBjdXJyZW50Q29ubmVjdG9yID09PSBjb25uZWN0b3JcclxuICAgICAgICAgIGNvbnN0IGRpc2FibGVkID0gIXRyaWVkRWFnZXIgfHwgISFhY3RpdmF0aW5nQ29ubmVjdG9yIHx8IGNvbm5lY3RlZCB8fCAhIWVycm9yXHJcblxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFjdGl2YXRpbmcgPyAnb3JhbmdlJyA6IGNvbm5lY3RlZCA/ICdncmVlbicgOiAndW5zZXQnLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkaXNhYmxlZCA/ICd1bnNldCcgOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgIGtleT17bmFtZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmF0aW5nQ29ubmVjdG9yKGN1cnJlbnRDb25uZWN0b3IpXHJcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZShjb25uZWN0b3JzQnlOYW1lW25hbWVdKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46ICcwIDAgMCAxcmVtJ1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YWN0aXZhdGluZyAmJiA8U3Bpbm5lciBjb2xvcj17J2JsYWNrJ30gc3R5bGU9e3sgaGVpZ2h0OiAnMjUlJywgbWFyZ2luTGVmdDogJy0xcmVtJyB9fSAvPn1cclxuICAgICAgICAgICAgICAgIHtjb25uZWN0ZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg4pyFXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge25hbWV9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICB7KGFjdGl2ZSB8fCBlcnJvcikgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIG1hcmdpblRvcDogJzJyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZGVhY3RpdmF0ZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIERlYWN0aXZhdGVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHshIWVycm9yICYmIDxoNCBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxcmVtJywgbWFyZ2luQm90dG9tOiAnMCcgfX0+e2dldEVycm9yTWVzc2FnZShlcnJvcil9PC9oND59XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpbjogJzJyZW0nIH19IC8+XHJcblxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdmaXQtY29udGVudCcsXHJcbiAgICAgICAgICBtYXhXaWR0aDogJzIwcmVtJyxcclxuICAgICAgICAgIG1hcmdpbjogJ2F1dG8nXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHshIShsaWJyYXJ5ICYmIGFjY291bnQpICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGlicmFyeVxyXG4gICAgICAgICAgICAgICAgLmdldFNpZ25lcihhY2NvdW50KVxyXG4gICAgICAgICAgICAgICAgLnNpZ25NZXNzYWdlKCfwn5GLJylcclxuICAgICAgICAgICAgICAgIC50aGVuKChzaWduYXR1cmU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoYFN1Y2Nlc3MhXFxuXFxuJHtzaWduYXR1cmV9YClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdGYWlsdXJlIScgKyAoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSA/IGBcXG5cXG4ke2Vycm9yLm1lc3NhZ2V9YCA6ICcnKSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNpZ24gTWVzc2FnZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7ISEoY29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLk5ldHdvcmtdICYmIGNoYWluSWQpICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jaGFuZ2VDaGFpbklkKGNoYWluSWQgPT09IDEgPyA0IDogMSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU3dpdGNoIE5ldHdvcmtzXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuV2FsbGV0Q29ubmVjdF0gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBXYWxsZXRDb25uZWN0IFNlc3Npb25cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5XYWxsZXRMaW5rXSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2xvc2UoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBLaWxsIFdhbGxldExpbmsgU2Vzc2lvblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Y29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLkZvcnRtYXRpY10gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBGb3J0bWF0aWMgU2Vzc2lvblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Y29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLk1hZ2ljXSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2xvc2UoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBLaWxsIE1hZ2ljIFNlc3Npb25cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5Qb3J0aXNdICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtjaGFpbklkICE9PSB1bmRlZmluZWQgJiYgKFxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2hhbmdlTmV0d29yayhjaGFpbklkID09PSAxID8gMTAwIDogMSlcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU3dpdGNoIE5ldHdvcmtzXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgS2lsbCBQb3J0aXMgU2Vzc2lvblxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5Ub3J1c10gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBUb3J1cyBTZXNzaW9uXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xyXG5cclxuaW1wb3J0IHsgaW5qZWN0ZWQgfSBmcm9tICcuL2Nvbm5lY3RvcnMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRWFnZXJDb25uZWN0KCkge1xyXG4gIGNvbnN0IHsgYWN0aXZhdGUsIGFjdGl2ZSB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgY29uc3QgW3RyaWVkLCBzZXRUcmllZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluamVjdGVkLmlzQXV0aG9yaXplZCgpLnRoZW4oKGlzQXV0aG9yaXplZDogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAoaXNBdXRob3JpemVkKSB7XHJcbiAgICAgICAgYWN0aXZhdGUoaW5qZWN0ZWQsIHVuZGVmaW5lZCwgdHJ1ZSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgc2V0VHJpZWQodHJ1ZSlcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFRyaWVkKHRydWUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSwgW10pIC8vIGludGVudGlvbmFsbHkgb25seSBydW5uaW5nIG9uIG1vdW50IChtYWtlIHN1cmUgaXQncyBvbmx5IG1vdW50ZWQgb25jZSA6KSlcclxuXHJcbiAgLy8gaWYgdGhlIGNvbm5lY3Rpb24gd29ya2VkLCB3YWl0IHVudGlsIHdlIGdldCBjb25maXJtYXRpb24gb2YgdGhhdCB0byBmbGlwIHRoZSBmbGFnXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghdHJpZWQgJiYgYWN0aXZlKSB7XHJcbiAgICAgIHNldFRyaWVkKHRydWUpXHJcbiAgICB9XHJcbiAgfSwgW3RyaWVkLCBhY3RpdmVdKVxyXG5cclxuICByZXR1cm4gdHJpZWRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUluYWN0aXZlTGlzdGVuZXIoc3VwcHJlc3M6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gIGNvbnN0IHsgYWN0aXZlLCBlcnJvciwgYWN0aXZhdGUgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKTogYW55ID0+IHtcclxuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdyBhcyBhbnlcclxuICAgIGlmIChldGhlcmV1bSAmJiBldGhlcmV1bS5vbiAmJiAhYWN0aXZlICYmICFlcnJvciAmJiAhc3VwcHJlc3MpIHtcclxuICAgICAgY29uc3QgaGFuZGxlQ29ubmVjdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nICdjb25uZWN0JyBldmVudFwiKVxyXG4gICAgICAgIGFjdGl2YXRlKGluamVjdGVkKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGhhbmRsZUNoYWluQ2hhbmdlZCA9IChjaGFpbklkOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nICdjaGFpbkNoYW5nZWQnIGV2ZW50IHdpdGggcGF5bG9hZFwiLCBjaGFpbklkKVxyXG4gICAgICAgIGFjdGl2YXRlKGluamVjdGVkKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGhhbmRsZUFjY291bnRzQ2hhbmdlZCA9IChhY2NvdW50czogc3RyaW5nW10pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nICdhY2NvdW50c0NoYW5nZWQnIGV2ZW50IHdpdGggcGF5bG9hZFwiLCBhY2NvdW50cylcclxuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgYWN0aXZhdGUoaW5qZWN0ZWQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGhhbmRsZU5ldHdvcmtDaGFuZ2VkID0gKG5ldHdvcmtJZDogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIYW5kbGluZyAnbmV0d29ya0NoYW5nZWQnIGV2ZW50IHdpdGggcGF5bG9hZFwiLCBuZXR3b3JrSWQpXHJcbiAgICAgICAgYWN0aXZhdGUoaW5qZWN0ZWQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGV0aGVyZXVtLm9uKCdjb25uZWN0JywgaGFuZGxlQ29ubmVjdClcclxuICAgICAgZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsIGhhbmRsZUNoYWluQ2hhbmdlZClcclxuICAgICAgZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsIGhhbmRsZUFjY291bnRzQ2hhbmdlZClcclxuICAgICAgZXRoZXJldW0ub24oJ25ldHdvcmtDaGFuZ2VkJywgaGFuZGxlTmV0d29ya0NoYW5nZWQpXHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGlmIChldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcikge1xyXG4gICAgICAgICAgZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2Nvbm5lY3QnLCBoYW5kbGVDb25uZWN0KVxyXG4gICAgICAgICAgZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2NoYWluQ2hhbmdlZCcsIGhhbmRsZUNoYWluQ2hhbmdlZClcclxuICAgICAgICAgIGV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdhY2NvdW50c0NoYW5nZWQnLCBoYW5kbGVBY2NvdW50c0NoYW5nZWQpXHJcbiAgICAgICAgICBldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignbmV0d29ya0NoYW5nZWQnLCBoYW5kbGVOZXR3b3JrQ2hhbmdlZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbYWN0aXZlLCBlcnJvciwgc3VwcHJlc3MsIGFjdGl2YXRlXSlcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIsIHVzZVdlYjNSZWFjdCwgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xyXG5pbXBvcnQge1xyXG4gIE5vRXRoZXJldW1Qcm92aWRlckVycm9yLFxyXG4gIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZFxyXG59IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QgfSBmcm9tICdAd2ViMy1yZWFjdC93YWxsZXRjb25uZWN0LWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckZyYW1lIH0gZnJvbSAnQHdlYjMtcmVhY3QvZnJhbWUtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9wcm92aWRlcnMnXHJcbmltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvdW5pdHMnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL0NvbXBvbmVudHMvTmF2aWdhdGlvbidcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9Db21wb25lbnRzL0hlYWRlcidcclxuaW1wb3J0IENoYWluSWQgZnJvbSAnLi4vQ29tcG9uZW50cy9DaGFpbklkJ1xyXG5pbXBvcnQgV2FsbGV0cyBmcm9tICcuLi9Db21wb25lbnRzL1dhbGxldHMudHN4J1xyXG5cclxuaW1wb3J0IHsgdXNlRWFnZXJDb25uZWN0LCB1c2VJbmFjdGl2ZUxpc3RlbmVyIH0gZnJvbSAnLi4vaG9va3MnXHJcbmltcG9ydCB7XHJcbiAgaW5qZWN0ZWQsXHJcbiAgbmV0d29yayxcclxuICB3YWxsZXRjb25uZWN0LFxyXG4gIHdhbGxldGxpbmssXHJcbiAgbGVkZ2VyLFxyXG4gIHRyZXpvcixcclxuICBsYXR0aWNlLFxyXG4gIGZyYW1lLFxyXG4gIGF1dGhlcmV1bSxcclxuICBmb3J0bWF0aWMsXHJcbiAgbWFnaWMsXHJcbiAgcG9ydGlzLFxyXG4gIHRvcnVzXHJcbn0gZnJvbSAnLi4vY29ubmVjdG9ycydcclxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3Bpbm5lcidcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8V2ViM1JlYWN0UHJvdmlkZXIgZ2V0TGlicmFyeT17Z2V0TGlicmFyeX0+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuXHQgIDxXYWxsZXRzIC8+XHJcbiAgICA8L1dlYjNSZWFjdFByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==