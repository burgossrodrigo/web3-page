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

  if (openWallet === true) {
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

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 8
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9XYWxsZXRzLnRzeCJdLCJuYW1lcyI6WyJXYWxsZXQiLCJDb25uZWN0b3JOYW1lcyIsImNvbm5lY3RvcnNCeU5hbWUiLCJJbmplY3RlZCIsImluamVjdGVkIiwiTmV0d29yayIsIm5ldHdvcmsiLCJXYWxsZXRDb25uZWN0Iiwid2FsbGV0Y29ubmVjdCIsIldhbGxldExpbmsiLCJ3YWxsZXRsaW5rIiwiTGVkZ2VyIiwibGVkZ2VyIiwiVHJlem9yIiwidHJlem9yIiwiTGF0dGljZSIsImxhdHRpY2UiLCJGcmFtZSIsImZyYW1lIiwiQXV0aGVyZXVtIiwiYXV0aGVyZXVtIiwiRm9ydG1hdGljIiwiZm9ydG1hdGljIiwiTWFnaWMiLCJtYWdpYyIsIlBvcnRpcyIsInBvcnRpcyIsIlRvcnVzIiwidG9ydXMiLCJnZXRFcnJvck1lc3NhZ2UiLCJlcnJvciIsIk5vRXRoZXJldW1Qcm92aWRlckVycm9yIiwiVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZCIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSIsImNvbnNvbGUiLCJnZXRMaWJyYXJ5IiwicHJvdmlkZXIiLCJsaWJyYXJ5IiwiV2ViM1Byb3ZpZGVyIiwicG9sbGluZ0ludGVydmFsIiwiY29udGV4dCIsInVzZVdlYjNSZWFjdCIsImNvbm5lY3RvciIsImNoYWluSWQiLCJhY2NvdW50IiwiYWN0aXZhdGUiLCJkZWFjdGl2YXRlIiwiYWN0aXZlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFjdGl2YXRpbmdDb25uZWN0b3IiLCJzZXRBY3RpdmF0aW5nQ29ubmVjdG9yIiwidXNlRWZmZWN0IiwidW5kZWZpbmVkIiwidHJpZWRFYWdlciIsInVzZUVhZ2VyQ29ubmVjdCIsInVzZUluYWN0aXZlTGlzdGVuZXIiLCJvcGVuV2FsbGV0IiwibWFyZ2luIiwiZGlzcGxheSIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibWF4V2lkdGgiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwibmFtZSIsImN1cnJlbnRDb25uZWN0b3IiLCJhY3RpdmF0aW5nIiwiY29ubmVjdGVkIiwiZGlzYWJsZWQiLCJoZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJDb2xvciIsImN1cnNvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImFsaWduSXRlbXMiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiZ2V0U2lnbmVyIiwic2lnbk1lc3NhZ2UiLCJ0aGVuIiwic2lnbmF0dXJlIiwid2luZG93IiwiYWxlcnQiLCJtZXNzYWdlIiwiY2hhbmdlQ2hhaW5JZCIsImNsb3NlIiwiY2hhbmdlTmV0d29yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFlQTtBQUllLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTtBQUFBOztBQUFBLE1BRTFCQyxjQUYwQjs7QUFBQSxhQUUxQkEsY0FGMEI7QUFFMUJBLGtCQUYwQjtBQUUxQkEsa0JBRjBCO0FBRTFCQSxrQkFGMEI7QUFFMUJBLGtCQUYwQjtBQUUxQkEsa0JBRjBCO0FBRTFCQSxrQkFGMEI7QUFFMUJBLGtCQUYwQjtBQUUxQkEsa0JBRjBCO0FBRTFCQSxrQkFGMEI7QUFFMUJBLGtCQUYwQjtBQUUxQkEsa0JBRjBCO0FBRTFCQSxrQkFGMEI7QUFFMUJBLGtCQUYwQjtBQUFBLEtBRTFCQSxjQUYwQixLQUUxQkEsY0FGMEI7O0FBa0JqQyxNQUFNQyxnQkFBNEQseUlBQy9ERCxjQUFjLENBQUNFLFFBRGdELEVBQ3JDQyxvREFEcUMsZ0hBRS9ESCxjQUFjLENBQUNJLE9BRmdELEVBRXRDQyxtREFGc0MsZ0hBRy9ETCxjQUFjLENBQUNN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Q0YsT0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQWZGLENBdEdKLEVBbUlHbEQsU0FBUyxLQUFLMUMsZ0JBQWdCLENBQUNELGNBQWMsQ0FBQzBCLEtBQWhCLENBQTlCLElBQ0M7QUFDRSxXQUFLLEVBQUU7QUFDTDhDLGNBQU0sRUFBRSxNQURIO0FBRUxDLG9CQUFZLEVBQUUsTUFGVDtBQUdMRSxjQUFNLEVBQUU7QUFISCxPQURUO0FBTUUsYUFBTyxFQUFFLG1CQUFNO0FBQ2I7QUFBRWhDLGlCQUFELENBQW1Ca0QsS0FBbkI7QUFDRixPQVJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBcElKLENBaEZGLENBREY7QUFxT0M7O0FBRUQsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFFQzs7R0FuVHVCOUYsTTtVQXlEUjJDLDZELEVBWUdjLHNELEVBR25CQywwRDs7O0tBeEV3QjFELE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmU0ZDhmMDZmZmEwZTRhNDg1NjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBXZWIzUmVhY3RQcm92aWRlciwgdXNlV2ViM1JlYWN0LCBVbnN1cHBvcnRlZENoYWluSWRFcnJvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXHJcbmltcG9ydCB7XHJcbiAgTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IsXHJcbiAgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkXHJcbn0gZnJvbSAnQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yRnJhbWUgfSBmcm9tICdAd2ViMy1yZWFjdC9mcmFtZS1jb25uZWN0b3InXHJcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3Byb3ZpZGVycydcclxuaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC91bml0cydcclxuXHJcbmltcG9ydCB7IHVzZUVhZ2VyQ29ubmVjdCwgdXNlSW5hY3RpdmVMaXN0ZW5lciB9IGZyb20gJy4uL2hvb2tzJ1xyXG5pbXBvcnQge1xyXG4gIGluamVjdGVkLFxyXG4gIG5ldHdvcmssXHJcbiAgd2FsbGV0Y29ubmVjdCxcclxuICB3YWxsZXRsaW5rLFxyXG4gIGxlZGdlcixcclxuICB0cmV6b3IsXHJcbiAgbGF0dGljZSxcclxuICBmcmFtZSxcclxuICBhdXRoZXJldW0sXHJcbiAgZm9ydG1hdGljLFxyXG4gIG1hZ2ljLFxyXG4gIHBvcnRpcyxcclxuICB0b3J1c1xyXG59IGZyb20gJy4uL2Nvbm5lY3RvcnMnXHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuL1NwaW5uZXInXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdhbGxldCgpIHtcclxuXHJcbiAgZW51bSBDb25uZWN0b3JOYW1lcyB7XHJcbiAgICBJbmplY3RlZCA9ICdJbmplY3RlZCcsXHJcbiAgICBOZXR3b3JrID0gJ05ldHdvcmsnLFxyXG4gICAgV2FsbGV0Q29ubmVjdCA9ICdXYWxsZXRDb25uZWN0JyxcclxuICAgIFdhbGxldExpbmsgPSAnV2FsbGV0TGluaycsXHJcbiAgICBMZWRnZXIgPSAnTGVkZ2VyJyxcclxuICAgIFRyZXpvciA9ICdUcmV6b3InLFxyXG4gICAgTGF0dGljZSA9ICdMYXR0aWNlJyxcclxuICAgIEZyYW1lID0gJ0ZyYW1lJyxcclxuICAgIEF1dGhlcmV1bSA9ICdBdXRoZXJldW0nLFxyXG4gICAgRm9ydG1hdGljID0gJ0ZvcnRtYXRpYycsXHJcbiAgICBNYWdpYyA9ICdNYWdpYycsXHJcbiAgICBQb3J0aXMgPSAnUG9ydGlzJyxcclxuICAgIFRvcnVzID0gJ1RvcnVzJ1xyXG4gIH1cclxuXHJcbmNvbnN0IGNvbm5lY3RvcnNCeU5hbWU6IHsgW2Nvbm5lY3Rvck5hbWUgaW4gQ29ubmVjdG9yTmFtZXNdOiBhbnkgfSA9IHtcclxuICBbQ29ubmVjdG9yTmFtZXMuSW5qZWN0ZWRdOiBpbmplY3RlZCxcclxuICBbQ29ubmVjdG9yTmFtZXMuTmV0d29ya106IG5ldHdvcmssXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLldhbGxldENvbm5lY3RdOiB3YWxsZXRjb25uZWN0LFxyXG4gIFtDb25uZWN0b3JOYW1lcy5XYWxsZXRMaW5rXTogd2FsbGV0bGluayxcclxuICBbQ29ubmVjdG9yTmFtZXMuTGVkZ2VyXTogbGVkZ2VyLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5UcmV6b3JdOiB0cmV6b3IsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkxhdHRpY2VdOiBsYXR0aWNlLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5GcmFtZV06IGZyYW1lLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5BdXRoZXJldW1dOiBhdXRoZXJldW0sXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkZvcnRtYXRpY106IGZvcnRtYXRpYyxcclxuICBbQ29ubmVjdG9yTmFtZXMuTWFnaWNdOiBtYWdpYyxcclxuICBbQ29ubmVjdG9yTmFtZXMuUG9ydGlzXTogcG9ydGlzLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5Ub3J1c106IHRvcnVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShlcnJvcjogRXJyb3IpIHtcclxuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBOb0V0aGVyZXVtUHJvdmlkZXJFcnJvcikge1xyXG4gICAgcmV0dXJuICdObyBFdGhlcmV1bSBicm93c2VyIGV4dGVuc2lvbiBkZXRlY3RlZCwgaW5zdGFsbCBNZXRhTWFzayBvbiBkZXNrdG9wIG9yIHZpc2l0IGZyb20gYSBkQXBwIGJyb3dzZXIgb24gbW9iaWxlLidcclxuICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IpIHtcclxuICAgIHJldHVybiBcIllvdSdyZSBjb25uZWN0ZWQgdG8gYW4gdW5zdXBwb3J0ZWQgbmV0d29yay5cIlxyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkIHx8XHJcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QgfHxcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yRnJhbWVcclxuICApIHtcclxuICAgIHJldHVybiAnUGxlYXNlIGF1dGhvcml6ZSB0aGlzIHdlYnNpdGUgdG8gYWNjZXNzIHlvdXIgRXRoZXJldW0gYWNjb3VudC4nXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICByZXR1cm4gJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuIENoZWNrIHRoZSBjb25zb2xlIGZvciBtb3JlIGRldGFpbHMuJ1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TGlicmFyeShwcm92aWRlcjogYW55KTogV2ViM1Byb3ZpZGVyIHtcclxuICBjb25zdCBsaWJyYXJ5ID0gbmV3IFdlYjNQcm92aWRlcihwcm92aWRlcilcclxuICBsaWJyYXJ5LnBvbGxpbmdJbnRlcnZhbCA9IDEyMDAwXHJcbiAgcmV0dXJuIGxpYnJhcnlcclxufVxyXG5cclxuY29uc3QgY29udGV4dCA9IHVzZVdlYjNSZWFjdDxXZWIzUHJvdmlkZXI+KClcclxuY29uc3QgeyBjb25uZWN0b3IsIGxpYnJhcnksIGNoYWluSWQsIGFjY291bnQsIGFjdGl2YXRlLCBkZWFjdGl2YXRlLCBhY3RpdmUsIGVycm9yIH0gPSBjb250ZXh0XHJcblxyXG4vLyBoYW5kbGUgbG9naWMgdG8gcmVjb2duaXplIHRoZSBjb25uZWN0b3IgY3VycmVudGx5IGJlaW5nIGFjdGl2YXRlZFxyXG5jb25zdCBbYWN0aXZhdGluZ0Nvbm5lY3Rvciwgc2V0QWN0aXZhdGluZ0Nvbm5lY3Rvcl0gPSBSZWFjdC51c2VTdGF0ZTxhbnk+KClcclxuUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICBpZiAoYWN0aXZhdGluZ0Nvbm5lY3RvciAmJiBhY3RpdmF0aW5nQ29ubmVjdG9yID09PSBjb25uZWN0b3IpIHtcclxuICAgIHNldEFjdGl2YXRpbmdDb25uZWN0b3IodW5kZWZpbmVkKVxyXG4gIH1cclxufSwgW2FjdGl2YXRpbmdDb25uZWN0b3IsIGNvbm5lY3Rvcl0pXHJcblxyXG4vLyBoYW5kbGUgbG9naWMgdG8gZWFnZXJseSBjb25uZWN0IHRvIHRoZSBpbmplY3RlZCBldGhlcmV1bSBwcm92aWRlciwgaWYgaXQgZXhpc3RzIGFuZCBoYXMgZ3JhbnRlZCBhY2Nlc3MgYWxyZWFkeVxyXG5jb25zdCB0cmllZEVhZ2VyID0gdXNlRWFnZXJDb25uZWN0KClcclxuXHJcbi8vIGhhbmRsZSBsb2dpYyB0byBjb25uZWN0IGluIHJlYWN0aW9uIHRvIGNlcnRhaW4gZXZlbnRzIG9uIHRoZSBpbmplY3RlZCBldGhlcmV1bSBwcm92aWRlciwgaWYgaXQgZXhpc3RzXHJcbnVzZUluYWN0aXZlTGlzdGVuZXIoIXRyaWVkRWFnZXIgfHwgISFhY3RpdmF0aW5nQ29ubmVjdG9yKVxyXG5pZihvcGVuV2FsbGV0ID09PSB0cnVlKXtcclxucmV0dXJuIChcclxuICA8PlxyXG4gICAgPGhyIHN0eWxlPXt7IG1hcmdpbjogJzJyZW0nIH19IC8+XHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcclxuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmcicsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyMHJlbScsXHJcbiAgICAgICAgbWFyZ2luOiAnYXV0bydcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge09iamVjdC5rZXlzKGNvbm5lY3RvcnNCeU5hbWUpLm1hcChuYW1lID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50Q29ubmVjdG9yID0gY29ubmVjdG9yc0J5TmFtZVtuYW1lXVxyXG4gICAgICAgIGNvbnN0IGFjdGl2YXRpbmcgPSBjdXJyZW50Q29ubmVjdG9yID09PSBhY3RpdmF0aW5nQ29ubmVjdG9yXHJcbiAgICAgICAgY29uc3QgY29ubmVjdGVkID0gY3VycmVudENvbm5lY3RvciA9PT0gY29ubmVjdG9yXHJcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSAhdHJpZWRFYWdlciB8fCAhIWFjdGl2YXRpbmdDb25uZWN0b3IgfHwgY29ubmVjdGVkIHx8ICEhZXJyb3JcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYWN0aXZhdGluZyA/ICdvcmFuZ2UnIDogY29ubmVjdGVkID8gJ2dyZWVuJyA6ICd1bnNldCcsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiBkaXNhYmxlZCA/ICd1bnNldCcgOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICBrZXk9e25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRBY3RpdmF0aW5nQ29ubmVjdG9yKGN1cnJlbnRDb25uZWN0b3IpXHJcbiAgICAgICAgICAgICAgYWN0aXZhdGUoY29ubmVjdG9yc0J5TmFtZVtuYW1lXSlcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMCAwIDAgMXJlbSdcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2FjdGl2YXRpbmcgJiYgPFNwaW5uZXIgY29sb3I9eydibGFjayd9IHN0eWxlPXt7IGhlaWdodDogJzI1JScsIG1hcmdpbkxlZnQ6ICctMXJlbScgfX0gLz59XHJcbiAgICAgICAgICAgICAge2Nvbm5lY3RlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgIOKchVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgIHsoYWN0aXZlIHx8IGVycm9yKSAmJiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgIG1hcmdpblRvcDogJzJyZW0nLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgZGVhY3RpdmF0ZSgpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIERlYWN0aXZhdGVcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIHshIWVycm9yICYmIDxoNCBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxcmVtJywgbWFyZ2luQm90dG9tOiAnMCcgfX0+e2dldEVycm9yTWVzc2FnZShlcnJvcil9PC9oND59XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aHIgc3R5bGU9e3sgbWFyZ2luOiAnMnJlbScgfX0gLz5cclxuXHJcbiAgICA8ZGl2XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcclxuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgIG1heFdpZHRoOiAnMjByZW0nLFxyXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHshIShsaWJyYXJ5ICYmIGFjY291bnQpICYmIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBsaWJyYXJ5XHJcbiAgICAgICAgICAgICAgLmdldFNpZ25lcihhY2NvdW50KVxyXG4gICAgICAgICAgICAgIC5zaWduTWVzc2FnZSgn8J+RiycpXHJcbiAgICAgICAgICAgICAgLnRoZW4oKHNpZ25hdHVyZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoYFN1Y2Nlc3MhXFxuXFxuJHtzaWduYXR1cmV9YClcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KCdGYWlsdXJlIScgKyAoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSA/IGBcXG5cXG4ke2Vycm9yLm1lc3NhZ2V9YCA6ICcnKSlcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTaWduIE1lc3NhZ2VcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAgeyEhKGNvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5OZXR3b3JrXSAmJiBjaGFpbklkKSAmJiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jaGFuZ2VDaGFpbklkKGNoYWluSWQgPT09IDEgPyA0IDogMSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU3dpdGNoIE5ldHdvcmtzXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuV2FsbGV0Q29ubmVjdF0gJiYgKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2xvc2UoKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBLaWxsIFdhbGxldENvbm5lY3QgU2Vzc2lvblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICB7Y29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLldhbGxldExpbmtdICYmIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgS2lsbCBXYWxsZXRMaW5rIFNlc3Npb25cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5Gb3J0bWF0aWNdICYmIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgS2lsbCBGb3J0bWF0aWMgU2Vzc2lvblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICB7Y29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLk1hZ2ljXSAmJiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEtpbGwgTWFnaWMgU2Vzc2lvblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICB7Y29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLlBvcnRpc10gJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7Y2hhaW5JZCAhPT0gdW5kZWZpbmVkICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2hhbmdlTmV0d29yayhjaGFpbklkID09PSAxID8gMTAwIDogMSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU3dpdGNoIE5ldHdvcmtzXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEtpbGwgUG9ydGlzIFNlc3Npb25cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICB7Y29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLlRvcnVzXSAmJiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEtpbGwgVG9ydXMgU2Vzc2lvblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgPC8+XHJcbilcclxufVxyXG5cclxucmV0dXJuKDxkaXYgLz4pXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=