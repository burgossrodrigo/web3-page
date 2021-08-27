webpackHotUpdate_N_E("pages/index",{

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



var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\blockchain-chess\\Components\\Wallets.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









function Wallet() {
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }), __jsx("div", {
    style: {
      display: 'grid',
      gridGap: '1rem',
      gridTemplateColumns: '1fr 1fr',
      maxWidth: '20rem',
      margin: 'auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
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
        lineNumber: 125,
        columnNumber: 11
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
        lineNumber: 140,
        columnNumber: 13
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
        lineNumber: 152,
        columnNumber: 30
      }
    }), connected && __jsx("span", {
      role: "img",
      "aria-label": "check",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 17
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
      lineNumber: 164,
      columnNumber: 5
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
      lineNumber: 166,
      columnNumber: 9
    }
  }, "Deactivate"), !!error && __jsx("h4", {
    style: {
      marginTop: '1rem',
      marginBottom: '0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 19
    }
  }, getErrorMessage(error))), __jsx("hr", {
    style: {
      margin: '2rem'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 5
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
      lineNumber: 187,
      columnNumber: 5
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
      lineNumber: 197,
      columnNumber: 9
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
      lineNumber: 219,
      columnNumber: 9
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
      lineNumber: 233,
      columnNumber: 9
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
      lineNumber: 247,
      columnNumber: 9
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
      lineNumber: 261,
      columnNumber: 9
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
      lineNumber: 275,
      columnNumber: 9
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
      lineNumber: 291,
      columnNumber: 13
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
      lineNumber: 304,
      columnNumber: 11
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
      lineNumber: 319,
      columnNumber: 9
    }
  }, "Kill Torus Session")));
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9XYWxsZXRzLnRzeCJdLCJuYW1lcyI6WyJXYWxsZXQiLCJDb25uZWN0b3JOYW1lcyIsImNvbm5lY3RvcnNCeU5hbWUiLCJJbmplY3RlZCIsImluamVjdGVkIiwiTmV0d29yayIsIm5ldHdvcmsiLCJXYWxsZXRDb25uZWN0Iiwid2FsbGV0Y29ubmVjdCIsIldhbGxldExpbmsiLCJ3YWxsZXRsaW5rIiwiTGVkZ2VyIiwibGVkZ2VyIiwiVHJlem9yIiwidHJlem9yIiwiTGF0dGljZSIsImxhdHRpY2UiLCJGcmFtZSIsImZyYW1lIiwiQXV0aGVyZXVtIiwiYXV0aGVyZXVtIiwiRm9ydG1hdGljIiwiZm9ydG1hdGljIiwiTWFnaWMiLCJtYWdpYyIsIlBvcnRpcyIsInBvcnRpcyIsIlRvcnVzIiwidG9ydXMiLCJnZXRFcnJvck1lc3NhZ2UiLCJlcnJvciIsIk5vRXRoZXJldW1Qcm92aWRlckVycm9yIiwiVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZCIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSIsImNvbnNvbGUiLCJnZXRMaWJyYXJ5IiwicHJvdmlkZXIiLCJsaWJyYXJ5IiwiV2ViM1Byb3ZpZGVyIiwicG9sbGluZ0ludGVydmFsIiwiY29udGV4dCIsInVzZVdlYjNSZWFjdCIsImNvbm5lY3RvciIsImNoYWluSWQiLCJhY2NvdW50IiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiYWN0aXZlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFjdGl2YXRpbmdDb25uZWN0b3IiLCJzZXRBY3RpdmF0aW5nQ29ubmVjdG9yIiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwidHJpZWRFYWdlciIsInVzZUVhZ2VyQ29ubmVjdCIsInVzZUluYWN0aXZlTGlzdGVuZXIiLCJtYXJnaW4iLCJkaXNwbGF5IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXhXaWR0aCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJuYW1lIiwiY3VycmVudENvbm5lY3RvciIsImFjdGl2YXRpbmciLCJjb25uZWN0ZWQiLCJkaXNhYmxlZCIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlckNvbG9yIiwiY3Vyc29yIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwibWFyZ2luTGVmdCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJnZXRTaWduZXIiLCJzaWduTWVzc2FnZSIsInRoZW4iLCJzaWduYXR1cmUiLCJ3aW5kb3ciLCJhbGVydCIsIm1lc3NhZ2UiLCJjaGFuZ2VDaGFpbklkIiwiY2xvc2UiLCJjaGFuZ2VOZXR3b3JrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQWVBO0FBSWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBO0FBQUE7O0FBQUEsTUFFMUJDLGNBRjBCOztBQUFBLGFBRTFCQSxjQUYwQjtBQUUxQkEsa0JBRjBCO0FBRTFCQSxrQkFGMEI7QUFFMUJBLGtCQUYwQjtBQUUxQkEsa0JBRjBCO0FBRTFCQSxrQkFGMEI7QUFFMUJBLGtCQUYwQjtBQUUxQkEsa0JBRjBCO0FBRTFCQSxrQkFGMEI7QUFFMUJBLGtCQUYwQjtBQUUxQkEsa0JBRjBCO0FBRTFCQSxrQkFGMEI7QUFFMUJBLGtCQUYwQjtBQUUxQkEsa0JBRjBCO0FBQUEsS0FFMUJBLGNBRjBCLEtBRTFCQSxjQUYwQjs7QUFrQmpDLE1BQU1DLGdCQUE0RCx5SUFDL0RELGNBQWMsQ0FBQ0UsUUFEZ0QsRUFDckNDLG9EQURxQyxnSEFFL0RILGNBQWMsQ0FBQ0ksT0FGZ0QsRUFFdENDLG1EQUZzQyxnSEFHL0RMLGNBQWMsQ0FBQ00sYUFIZ0QsRUFHaEND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QUsxQyxnQkFBZ0IsQ0FBQ0QsY0FBYyxDQUFDMEIsS0FBaEIsQ0FBOUIsSUFDQztBQUNFLFNBQUssRUFBRTtBQUNMNkMsWUFBTSxFQUFFLE1BREg7QUFFTEMsa0JBQVksRUFBRSxNQUZUO0FBR0xFLFlBQU0sRUFBRTtBQUhILEtBRFQ7QUFNRSxXQUFPLEVBQUUsbUJBQU07QUFDYjtBQUFFL0IsZUFBRCxDQUFtQmlELEtBQW5CO0FBQ0YsS0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQXBJSixDQWhGRixDQURGO0FBcU9DOztHQS9TdUI3RixNO1VBeURSMkMsNkQsRUFZR2Msc0QsRUFHbkJDLDBEOzs7S0F4RXdCMUQsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43NmE3N2UwZjBhY2Q1ZTE4NWVjOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFdlYjNSZWFjdFByb3ZpZGVyLCB1c2VXZWIzUmVhY3QsIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcclxuaW1wb3J0IHtcclxuICBOb0V0aGVyZXVtUHJvdmlkZXJFcnJvcixcclxuICBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9ySW5qZWN0ZWRcclxufSBmcm9tICdAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3InXHJcbmltcG9ydCB7IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JXYWxsZXRDb25uZWN0IH0gZnJvbSAnQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdC1jb25uZWN0b3InXHJcbmltcG9ydCB7IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSB9IGZyb20gJ0B3ZWIzLXJlYWN0L2ZyYW1lLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzJ1xyXG5pbXBvcnQgeyBmb3JtYXRFdGhlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3VuaXRzJ1xyXG5cclxuaW1wb3J0IHsgdXNlRWFnZXJDb25uZWN0LCB1c2VJbmFjdGl2ZUxpc3RlbmVyIH0gZnJvbSAnLi4vaG9va3MnXHJcbmltcG9ydCB7XHJcbiAgaW5qZWN0ZWQsXHJcbiAgbmV0d29yayxcclxuICB3YWxsZXRjb25uZWN0LFxyXG4gIHdhbGxldGxpbmssXHJcbiAgbGVkZ2VyLFxyXG4gIHRyZXpvcixcclxuICBsYXR0aWNlLFxyXG4gIGZyYW1lLFxyXG4gIGF1dGhlcmV1bSxcclxuICBmb3J0bWF0aWMsXHJcbiAgbWFnaWMsXHJcbiAgcG9ydGlzLFxyXG4gIHRvcnVzXHJcbn0gZnJvbSAnLi4vY29ubmVjdG9ycydcclxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4vU3Bpbm5lcidcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2FsbGV0KCkge1xyXG5cclxuICBlbnVtIENvbm5lY3Rvck5hbWVzIHtcclxuICAgIEluamVjdGVkID0gJ0luamVjdGVkJyxcclxuICAgIE5ldHdvcmsgPSAnTmV0d29yaycsXHJcbiAgICBXYWxsZXRDb25uZWN0ID0gJ1dhbGxldENvbm5lY3QnLFxyXG4gICAgV2FsbGV0TGluayA9ICdXYWxsZXRMaW5rJyxcclxuICAgIExlZGdlciA9ICdMZWRnZXInLFxyXG4gICAgVHJlem9yID0gJ1RyZXpvcicsXHJcbiAgICBMYXR0aWNlID0gJ0xhdHRpY2UnLFxyXG4gICAgRnJhbWUgPSAnRnJhbWUnLFxyXG4gICAgQXV0aGVyZXVtID0gJ0F1dGhlcmV1bScsXHJcbiAgICBGb3J0bWF0aWMgPSAnRm9ydG1hdGljJyxcclxuICAgIE1hZ2ljID0gJ01hZ2ljJyxcclxuICAgIFBvcnRpcyA9ICdQb3J0aXMnLFxyXG4gICAgVG9ydXMgPSAnVG9ydXMnXHJcbiAgfVxyXG5cclxuY29uc3QgY29ubmVjdG9yc0J5TmFtZTogeyBbY29ubmVjdG9yTmFtZSBpbiBDb25uZWN0b3JOYW1lc106IGFueSB9ID0ge1xyXG4gIFtDb25uZWN0b3JOYW1lcy5JbmplY3RlZF06IGluamVjdGVkLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5OZXR3b3JrXTogbmV0d29yayxcclxuICBbQ29ubmVjdG9yTmFtZXMuV2FsbGV0Q29ubmVjdF06IHdhbGxldGNvbm5lY3QsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLldhbGxldExpbmtdOiB3YWxsZXRsaW5rLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5MZWRnZXJdOiBsZWRnZXIsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLlRyZXpvcl06IHRyZXpvcixcclxuICBbQ29ubmVjdG9yTmFtZXMuTGF0dGljZV06IGxhdHRpY2UsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkZyYW1lXTogZnJhbWUsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkF1dGhlcmV1bV06IGF1dGhlcmV1bSxcclxuICBbQ29ubmVjdG9yTmFtZXMuRm9ydG1hdGljXTogZm9ydG1hdGljLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5NYWdpY106IG1hZ2ljLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5Qb3J0aXNdOiBwb3J0aXMsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLlRvcnVzXTogdG9ydXNcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKGVycm9yOiBFcnJvcikge1xyXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIE5vRXRoZXJldW1Qcm92aWRlckVycm9yKSB7XHJcbiAgICByZXR1cm4gJ05vIEV0aGVyZXVtIGJyb3dzZXIgZXh0ZW5zaW9uIGRldGVjdGVkLCBpbnN0YWxsIE1ldGFNYXNrIG9uIGRlc2t0b3Agb3IgdmlzaXQgZnJvbSBhIGRBcHAgYnJvd3NlciBvbiBtb2JpbGUuJ1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBVbnN1cHBvcnRlZENoYWluSWRFcnJvcikge1xyXG4gICAgcmV0dXJuIFwiWW91J3JlIGNvbm5lY3RlZCB0byBhbiB1bnN1cHBvcnRlZCBuZXR3b3JrLlwiXHJcbiAgfSBlbHNlIGlmIChcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9ySW5qZWN0ZWQgfHxcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCB8fFxyXG4gICAgZXJyb3IgaW5zdGFuY2VvZiBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZVxyXG4gICkge1xyXG4gICAgcmV0dXJuICdQbGVhc2UgYXV0aG9yaXplIHRoaXMgd2Vic2l0ZSB0byBhY2Nlc3MgeW91ciBFdGhlcmV1bSBhY2NvdW50LidcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIHJldHVybiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4gQ2hlY2sgdGhlIGNvbnNvbGUgZm9yIG1vcmUgZGV0YWlscy4nXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMaWJyYXJ5KHByb3ZpZGVyOiBhbnkpOiBXZWIzUHJvdmlkZXIge1xyXG4gIGNvbnN0IGxpYnJhcnkgPSBuZXcgV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKVxyXG4gIGxpYnJhcnkucG9sbGluZ0ludGVydmFsID0gMTIwMDBcclxuICByZXR1cm4gbGlicmFyeVxyXG59XHJcblxyXG5jb25zdCBjb250ZXh0ID0gdXNlV2ViM1JlYWN0PFdlYjNQcm92aWRlcj4oKVxyXG5jb25zdCB7IGNvbm5lY3RvciwgbGlicmFyeSwgY2hhaW5JZCwgYWNjb3VudCwgYWN0aXZhdGUsIGRlYWN0aXZhdGUsIGFjdGl2ZSwgZXJyb3IgfSA9IGNvbnRleHRcclxuXHJcbi8vIGhhbmRsZSBsb2dpYyB0byByZWNvZ25pemUgdGhlIGNvbm5lY3RvciBjdXJyZW50bHkgYmVpbmcgYWN0aXZhdGVkXHJcbmNvbnN0IFthY3RpdmF0aW5nQ29ubmVjdG9yLCBzZXRBY3RpdmF0aW5nQ29ubmVjdG9yXSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oKVxyXG5SZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGlmIChhY3RpdmF0aW5nQ29ubmVjdG9yICYmIGFjdGl2YXRpbmdDb25uZWN0b3IgPT09IGNvbm5lY3Rvcikge1xyXG4gICAgc2V0QWN0aXZhdGluZ0Nvbm5lY3Rvcih1bmRlZmluZWQpXHJcbiAgfVxyXG59LCBbYWN0aXZhdGluZ0Nvbm5lY3RvciwgY29ubmVjdG9yXSlcclxuXHJcbi8vIGhhbmRsZSBsb2dpYyB0byBlYWdlcmx5IGNvbm5lY3QgdG8gdGhlIGluamVjdGVkIGV0aGVyZXVtIHByb3ZpZGVyLCBpZiBpdCBleGlzdHMgYW5kIGhhcyBncmFudGVkIGFjY2VzcyBhbHJlYWR5XHJcbmNvbnN0IHRyaWVkRWFnZXIgPSB1c2VFYWdlckNvbm5lY3QoKVxyXG5cclxuLy8gaGFuZGxlIGxvZ2ljIHRvIGNvbm5lY3QgaW4gcmVhY3Rpb24gdG8gY2VydGFpbiBldmVudHMgb24gdGhlIGluamVjdGVkIGV0aGVyZXVtIHByb3ZpZGVyLCBpZiBpdCBleGlzdHNcclxudXNlSW5hY3RpdmVMaXN0ZW5lcighdHJpZWRFYWdlciB8fCAhIWFjdGl2YXRpbmdDb25uZWN0b3IpXHJcblxyXG5yZXR1cm4gKFxyXG4gIDw+XHJcbiAgICA8aHIgc3R5bGU9e3sgbWFyZ2luOiAnMnJlbScgfX0gLz5cclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgZ3JpZEdhcDogJzFyZW0nLFxyXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJyxcclxuICAgICAgICBtYXhXaWR0aDogJzIwcmVtJyxcclxuICAgICAgICBtYXJnaW46ICdhdXRvJ1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7T2JqZWN0LmtleXMoY29ubmVjdG9yc0J5TmFtZSkubWFwKG5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb25uZWN0b3IgPSBjb25uZWN0b3JzQnlOYW1lW25hbWVdXHJcbiAgICAgICAgY29uc3QgYWN0aXZhdGluZyA9IGN1cnJlbnRDb25uZWN0b3IgPT09IGFjdGl2YXRpbmdDb25uZWN0b3JcclxuICAgICAgICBjb25zdCBjb25uZWN0ZWQgPSBjdXJyZW50Q29ubmVjdG9yID09PSBjb25uZWN0b3JcclxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9ICF0cmllZEVhZ2VyIHx8ICEhYWN0aXZhdGluZ0Nvbm5lY3RvciB8fCBjb25uZWN0ZWQgfHwgISFlcnJvclxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhY3RpdmF0aW5nID8gJ29yYW5nZScgOiBjb25uZWN0ZWQgPyAnZ3JlZW4nIDogJ3Vuc2V0JyxcclxuICAgICAgICAgICAgICBjdXJzb3I6IGRpc2FibGVkID8gJ3Vuc2V0JyA6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgIGtleT17bmFtZX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEFjdGl2YXRpbmdDb25uZWN0b3IoY3VycmVudENvbm5lY3RvcilcclxuICAgICAgICAgICAgICBhY3RpdmF0ZShjb25uZWN0b3JzQnlOYW1lW25hbWVdKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAnMCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwIDAgMCAxcmVtJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YWN0aXZhdGluZyAmJiA8U3Bpbm5lciBjb2xvcj17J2JsYWNrJ30gc3R5bGU9e3sgaGVpZ2h0OiAnMjUlJywgbWFyZ2luTGVmdDogJy0xcmVtJyB9fSAvPn1cclxuICAgICAgICAgICAgICB7Y29ubmVjdGVkICYmIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAg4pyFXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgeyhhY3RpdmUgfHwgZXJyb3IpICYmIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnMnJlbScsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBkZWFjdGl2YXRlKClcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRGVhY3RpdmF0ZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgeyEhZXJyb3IgJiYgPGg0IHN0eWxlPXt7IG1hcmdpblRvcDogJzFyZW0nLCBtYXJnaW5Cb3R0b206ICcwJyB9fT57Z2V0RXJyb3JNZXNzYWdlKGVycm9yKX08L2g0Pn1cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxociBzdHlsZT17eyBtYXJnaW46ICcycmVtJyB9fSAvPlxyXG5cclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgZ3JpZEdhcDogJzFyZW0nLFxyXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdmaXQtY29udGVudCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyMHJlbScsXHJcbiAgICAgICAgbWFyZ2luOiAnYXV0bydcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgeyEhKGxpYnJhcnkgJiYgYWNjb3VudCkgJiYgKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGxpYnJhcnlcclxuICAgICAgICAgICAgICAuZ2V0U2lnbmVyKGFjY291bnQpXHJcbiAgICAgICAgICAgICAgLnNpZ25NZXNzYWdlKCfwn5GLJylcclxuICAgICAgICAgICAgICAudGhlbigoc2lnbmF0dXJlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChgU3VjY2VzcyFcXG5cXG4ke3NpZ25hdHVyZX1gKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ0ZhaWx1cmUhJyArIChlcnJvciAmJiBlcnJvci5tZXNzYWdlID8gYFxcblxcbiR7ZXJyb3IubWVzc2FnZX1gIDogJycpKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFNpZ24gTWVzc2FnZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICB7ISEoY29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLk5ldHdvcmtdICYmIGNoYWluSWQpICYmIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNoYW5nZUNoYWluSWQoY2hhaW5JZCA9PT0gMSA/IDQgOiAxKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTd2l0Y2ggTmV0d29ya3NcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5XYWxsZXRDb25uZWN0XSAmJiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEtpbGwgV2FsbGV0Q29ubmVjdCBTZXNzaW9uXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuV2FsbGV0TGlua10gJiYgKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2xvc2UoKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBLaWxsIFdhbGxldExpbmsgU2Vzc2lvblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICB7Y29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLkZvcnRtYXRpY10gJiYgKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2xvc2UoKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBLaWxsIEZvcnRtYXRpYyBTZXNzaW9uXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuTWFnaWNdICYmIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgS2lsbCBNYWdpYyBTZXNzaW9uXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuUG9ydGlzXSAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtjaGFpbklkICE9PSB1bmRlZmluZWQgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jaGFuZ2VOZXR3b3JrKGNoYWluSWQgPT09IDEgPyAxMDAgOiAxKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTd2l0Y2ggTmV0d29ya3NcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBQb3J0aXMgU2Vzc2lvblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuVG9ydXNdICYmIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgS2lsbCBUb3J1cyBTZXNzaW9uXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICA8Lz5cclxuKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=