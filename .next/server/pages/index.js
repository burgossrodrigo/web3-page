module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/Account.js":
/*!*******************************!*\
  !*** ./Components/Account.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\web3-page\\web3-react\\example\\Components\\Account.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Account = () => {
  const {
    account
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Account"), __jsx("span", {
    role: "img",
    "aria-label": "robot",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "\uD83E\uDD16"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, account === null ? '-' : account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : ''));
};

/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ }),

/***/ "./Components/Balance.tsx":
/*!********************************!*\
  !*** ./Components/Balance.tsx ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\web3-page\\web3-react\\example\\Components\\Balance.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Balance() {
  const {
    account,
    library,
    chainId
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  const [balance, setBalance] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (!!account && !!library) {
      let stale = false;
      library.getBalance(account).then(balance => {
        if (!stale) {
          setBalance(balance);
        }
      }).catch(() => {
        if (!stale) {
          setBalance(null);
        }
      });
      return () => {
        stale = true;
        setBalance(undefined);
      };
    }
  }, [account, library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Balance"), __jsx("span", {
    role: "img",
    "aria-label": "gold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "\uD83D\uDCB0"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, balance === null ? 'Error' : balance ? `Ξ${formatEther(balance)}` : ''));
}

/***/ }),

/***/ "./Components/ChainId.js":
/*!*******************************!*\
  !*** ./Components/ChainId.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChainId; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\web3-page\\web3-react\\example\\Components\\ChainId.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ChainId() {
  const {
    chainId
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Chain Id"), __jsx("span", {
    role: "img",
    "aria-label": "chain",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "\u26D3"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, chainId !== null && chainId !== void 0 ? chainId : ''));
}

/***/ }),

/***/ "./Components/Header.js":
/*!******************************!*\
  !*** ./Components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChainId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChainId */ "./Components/ChainId.js");
/* harmony import */ var _Account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Account */ "./Components/Account.js");
/* harmony import */ var _Balance_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Balance.tsx */ "./Components/Balance.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/AccountBalanceWallet */ "@material-ui/icons/AccountBalanceWallet");
/* harmony import */ var _material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\web3-page\\web3-react\\example\\Components\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Header() {
  const {
    active,
    error
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  const useStyle = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(theme => ({
    root: {
      [theme.breakpoints.only('xs')]: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
      },
      [theme.breakpoints.between('sm', 'xl')]: {
        width: '50vw',
        display: 'flex',
        flexDirection: 'column'
      }
    }
  }));
  const classes = useStyle();
  /* <ChainId />
        <Account />
        <Balance /> */

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["AppBar"], {
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
      float: 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }
  }, active ? __jsx(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 82
    }
  }) : error ? __jsx(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 138
    }
  }) : __jsx(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 186
    }
  }))));
}

/***/ }),

/***/ "./Components/Spinner.tsx":
/*!********************************!*\
  !*** ./Components/Spinner.tsx ***!
  \********************************/
/*! exports provided: Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return Spinner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\web3-page\\web3-react\\example\\Components\\Spinner.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

 // <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->

function Spinner(_ref) {
  let {
    color
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["color"]);

  return __jsx("svg", _extends({
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

/***/ }),

/***/ "./Components/Wallets.tsx":
/*!********************************!*\
  !*** ./Components/Wallets.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Wallet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/injected-connector */ "@web3-react/injected-connector");
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/walletconnect-connector */ "@web3-react/walletconnect-connector");
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/frame-connector */ "@web3-react/frame-connector");
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/providers */ "@ethersproject/providers");
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks */ "./hooks.ts");
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../connectors */ "./connectors.ts");
/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Spinner */ "./Components/Spinner.tsx");
var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\web3-page\\web3-react\\example\\Components\\Wallets.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Wallet(openWallet, setOpenWallet) {
  let ConnectorNames;

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

  const connectorsByName = {
    [ConnectorNames.Injected]: _connectors__WEBPACK_IMPORTED_MODULE_7__["injected"],
    [ConnectorNames.Network]: _connectors__WEBPACK_IMPORTED_MODULE_7__["network"],
    [ConnectorNames.WalletConnect]: _connectors__WEBPACK_IMPORTED_MODULE_7__["walletconnect"],
    [ConnectorNames.WalletLink]: _connectors__WEBPACK_IMPORTED_MODULE_7__["walletlink"],
    [ConnectorNames.Ledger]: _connectors__WEBPACK_IMPORTED_MODULE_7__["ledger"],
    [ConnectorNames.Trezor]: _connectors__WEBPACK_IMPORTED_MODULE_7__["trezor"],
    [ConnectorNames.Lattice]: _connectors__WEBPACK_IMPORTED_MODULE_7__["lattice"],
    [ConnectorNames.Frame]: _connectors__WEBPACK_IMPORTED_MODULE_7__["frame"],
    [ConnectorNames.Authereum]: _connectors__WEBPACK_IMPORTED_MODULE_7__["authereum"],
    [ConnectorNames.Fortmatic]: _connectors__WEBPACK_IMPORTED_MODULE_7__["fortmatic"],
    [ConnectorNames.Magic]: _connectors__WEBPACK_IMPORTED_MODULE_7__["magic"],
    [ConnectorNames.Portis]: _connectors__WEBPACK_IMPORTED_MODULE_7__["portis"],
    [ConnectorNames.Torus]: _connectors__WEBPACK_IMPORTED_MODULE_7__["torus"]
  };

  function getErrorMessage(error) {
    if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__["NoEthereumProviderError"]) {
      return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.';
    } else if (error instanceof _web3_react_core__WEBPACK_IMPORTED_MODULE_1__["UnsupportedChainIdError"]) {
      return "You're connected to an unsupported network.";
    } else if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__["UserRejectedRequestError"] || error instanceof _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__["UserRejectedRequestError"] || error instanceof _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_4__["UserRejectedRequestError"]) {
      return 'Please authorize this website to access your Ethereum account.';
    } else {
      console.error(error);
      return 'An unknown error occurred. Check the console for more details.';
    }
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
    const library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__["Web3Provider"](provider);
    library.pollingInterval = 12000;
    return library;
  }

  const context = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error
  } = context; // handle logic to recognize the connector currently being activated

  const [activatingConnector, setActivatingConnector] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]); // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already

  const triedEager = Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useEagerConnect"])(); // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists

  Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useInactiveListener"])(!triedEager || !!activatingConnector);

  if (openWallet === false) {
    __jsx(Navigation, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 4
      }
    });

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Navigation, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 4
      }
    }), __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 4
      }
    }, "Open you wallet"));
  } else {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("hr", {
      style: {
        margin: '2rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 7
      }
    }), __jsx("div", {
      style: {
        display: 'grid',
        gridGap: '1rem',
        gridTemplateColumns: '1fr',
        maxWidth: '20rem',
        margin: 'auto',
        float: 'right'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 7
      }
    }, Object.keys(connectorsByName).map(name => {
      const currentConnector = connectorsByName[name];
      const activating = currentConnector === activatingConnector;
      const connected = currentConnector === connector;
      const disabled = !triedEager || !!activatingConnector || connected || !!error;
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
        onClick: () => {
          setActivatingConnector(currentConnector);
          activate(connectorsByName[name]);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
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
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 15
        }
      }, activating && __jsx(_Spinner__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {
        color: 'black',
        style: {
          height: '25%',
          marginLeft: '-1rem'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 32
        }
      }), connected && __jsx("span", {
        role: "img",
        "aria-label": "check",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183,
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
        lineNumber: 193,
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
      onClick: () => {
        deactivate();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
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
        lineNumber: 211,
        columnNumber: 21
      }
    }, getErrorMessage(error))), __jsx("hr", {
      style: {
        margin: '2rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
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
        lineNumber: 216,
        columnNumber: 7
      }
    }, !!(library && account) && __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: () => {
        library.getSigner(account).signMessage('👋').then(signature => {
          window.alert(`Success!\n\n${signature}`);
        }).catch(error => {
          window.alert('Failure!' + (error && error.message ? `\n\n${error.message}` : ''));
        });
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 11
      }
    }, "Sign Message"), !!(connector === connectorsByName[ConnectorNames.Network] && chainId) && __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: () => {
        ;
        connector.changeChainId(chainId === 1 ? 4 : 1);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 11
      }
    }, "Switch Networks"), connector === connectorsByName[ConnectorNames.WalletConnect] && __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: () => {
        ;
        connector.close();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 11
      }
    }, "Kill WalletConnect Session"), connector === connectorsByName[ConnectorNames.WalletLink] && __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: () => {
        ;
        connector.close();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 11
      }
    }, "Kill WalletLink Session"), connector === connectorsByName[ConnectorNames.Fortmatic] && __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: () => {
        ;
        connector.close();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 290,
        columnNumber: 11
      }
    }, "Kill Fortmatic Session"), connector === connectorsByName[ConnectorNames.Magic] && __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: () => {
        ;
        connector.close();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 11
      }
    }, "Kill Magic Session"), connector === connectorsByName[ConnectorNames.Portis] && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, chainId !== undefined && __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: () => {
        ;
        connector.changeNetwork(chainId === 1 ? 100 : 1);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 15
      }
    }, "Switch Networks"), __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: () => {
        ;
        connector.close();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 13
      }
    }, "Kill Portis Session")), connector === connectorsByName[ConnectorNames.Torus] && __jsx("button", {
      style: {
        height: '3rem',
        borderRadius: '1rem',
        cursor: 'pointer'
      },
      onClick: () => {
        ;
        connector.close();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 11
      }
    }, "Kill Torus Session")));
  }
}

/***/ }),

/***/ "./connectors.ts":
/*!***********************!*\
  !*** ./connectors.ts ***!
  \***********************/
/*! exports provided: injected, network, walletconnect, walletlink, ledger, trezor, lattice, frame, authereum, fortmatic, magic, portis, torus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injected", function() { return injected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "network", function() { return network; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walletconnect", function() { return walletconnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walletlink", function() { return walletlink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ledger", function() { return ledger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trezor", function() { return trezor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lattice", function() { return lattice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frame", function() { return frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authereum", function() { return authereum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fortmatic", function() { return fortmatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magic", function() { return magic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portis", function() { return portis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "torus", function() { return torus; });
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/injected-connector */ "@web3-react/injected-connector");
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_network_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/network-connector */ "@web3-react/network-connector");
/* harmony import */ var _web3_react_network_connector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_network_connector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/walletconnect-connector */ "@web3-react/walletconnect-connector");
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/walletlink-connector */ "@web3-react/walletlink-connector");
/* harmony import */ var _web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _web3_react_ledger_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/ledger-connector */ "@web3-react/ledger-connector");
/* harmony import */ var _web3_react_ledger_connector__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_web3_react_ledger_connector__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _web3_react_trezor_connector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web3-react/trezor-connector */ "@web3-react/trezor-connector");
/* harmony import */ var _web3_react_trezor_connector__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_web3_react_trezor_connector__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _web3_react_lattice_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/lattice-connector */ "@web3-react/lattice-connector");
/* harmony import */ var _web3_react_lattice_connector__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_web3_react_lattice_connector__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/frame-connector */ "@web3-react/frame-connector");
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _web3_react_authereum_connector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @web3-react/authereum-connector */ "@web3-react/authereum-connector");
/* harmony import */ var _web3_react_authereum_connector__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_web3_react_authereum_connector__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _web3_react_fortmatic_connector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @web3-react/fortmatic-connector */ "@web3-react/fortmatic-connector");
/* harmony import */ var _web3_react_fortmatic_connector__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_web3_react_fortmatic_connector__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _web3_react_magic_connector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @web3-react/magic-connector */ "@web3-react/magic-connector");
/* harmony import */ var _web3_react_magic_connector__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_web3_react_magic_connector__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _web3_react_portis_connector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @web3-react/portis-connector */ "@web3-react/portis-connector");
/* harmony import */ var _web3_react_portis_connector__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_web3_react_portis_connector__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _web3_react_torus_connector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @web3-react/torus-connector */ "@web3-react/torus-connector");
/* harmony import */ var _web3_react_torus_connector__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_web3_react_torus_connector__WEBPACK_IMPORTED_MODULE_12__);













const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  1: "https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",
  4: "https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213"
};
const injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__["InjectedConnector"]({
  supportedChainIds: [1, 3, 4, 5, 42]
});
const network = new _web3_react_network_connector__WEBPACK_IMPORTED_MODULE_1__["NetworkConnector"]({
  urls: {
    1: RPC_URLS[1],
    4: RPC_URLS[4]
  },
  defaultChainId: 1
});
const walletconnect = new _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_2__["WalletConnectConnector"]({
  rpc: {
    1: RPC_URLS[1]
  },
  qrcode: true
});
const walletlink = new _web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_3__["WalletLinkConnector"]({
  url: RPC_URLS[1],
  appName: 'web3-react example',
  supportedChainIds: [1, 3, 4, 5, 42, 10, 137, 69, 420, 80001]
});
const ledger = new _web3_react_ledger_connector__WEBPACK_IMPORTED_MODULE_4__["LedgerConnector"]({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL
});
const trezor = new _web3_react_trezor_connector__WEBPACK_IMPORTED_MODULE_5__["TrezorConnector"]({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
  manifestEmail: 'dummy@abc.xyz',
  manifestAppUrl: 'http://localhost:1234'
});
const lattice = new _web3_react_lattice_connector__WEBPACK_IMPORTED_MODULE_6__["LatticeConnector"]({
  chainId: 4,
  appName: 'web3-react',
  url: RPC_URLS[4]
});
const frame = new _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_7__["FrameConnector"]({
  supportedChainIds: [1]
});
const authereum = new _web3_react_authereum_connector__WEBPACK_IMPORTED_MODULE_8__["AuthereumConnector"]({
  chainId: 42
});
const fortmatic = new _web3_react_fortmatic_connector__WEBPACK_IMPORTED_MODULE_9__["FortmaticConnector"]({
  apiKey: "pk_test_A6260FCBAA2EBDFB",
  chainId: 4
});
const magic = new _web3_react_magic_connector__WEBPACK_IMPORTED_MODULE_10__["MagicConnector"]({
  apiKey: "pk_test_398B82F5F0E88874",
  chainId: 4,
  email: 'hello@example.org'
});
const portis = new _web3_react_portis_connector__WEBPACK_IMPORTED_MODULE_11__["PortisConnector"]({
  dAppId: "e9be171c-2b7f-4ff0-8db9-327707511ee2",
  networks: [1, 100]
});
const torus = new _web3_react_torus_connector__WEBPACK_IMPORTED_MODULE_12__["TorusConnector"]({
  chainId: 1
});

/***/ }),

/***/ "./hooks.ts":
/*!******************!*\
  !*** ./hooks.ts ***!
  \******************/
/*! exports provided: useEagerConnect, useInactiveListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEagerConnect", function() { return useEagerConnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInactiveListener", function() { return useInactiveListener; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connectors */ "./connectors.ts");



function useEagerConnect() {
  const {
    activate,
    active
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  const {
    0: tried,
    1: setTried
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _connectors__WEBPACK_IMPORTED_MODULE_2__["injected"].isAuthorized().then(isAuthorized => {
      if (isAuthorized) {
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"], undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }, []); // intentionally only running on mount (make sure it's only mounted once :))
  // if the connection worked, wait until we get confirmation of that to flip the flag

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);
  return tried;
}
function useInactiveListener(suppress = false) {
  const {
    active,
    error,
    activate
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      ethereum
    } = window;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        console.log("Handling 'connect' event");
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
      };

      const handleChainChanged = chainId => {
        console.log("Handling 'chainChanged' event with payload", chainId);
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
      };

      const handleAccountsChanged = accounts => {
        console.log("Handling 'accountsChanged' event with payload", accounts);

        if (accounts.length > 0) {
          activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
        }
      };

      const handleNetworkChanged = networkId => {
        console.log("Handling 'networkChanged' event with payload", networkId);
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
      };

      ethereum.on('connect', handleConnect);
      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);
      ethereum.on('networkChanged', handleNetworkChanged);
      return () => {
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

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ethersproject/providers */ "@ethersproject/providers");
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_providers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Header */ "./Components/Header.js");
/* harmony import */ var _Components_Wallets_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Wallets.tsx */ "./Components/Wallets.tsx");
var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\web3-page\\web3-react\\example\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function getLibrary(provider) {
  const library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_2__["Web3Provider"](provider);
  library.pollingInterval = 12000;
  return library;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["Web3ReactProvider"], {
    getLibrary: getLibrary,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(_Components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx(_Components_Wallets_tsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }
  }));
});

/***/ }),

/***/ "@ethersproject/providers":
/*!*******************************************!*\
  !*** external "@ethersproject/providers" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ethersproject/providers");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AccountBalanceWallet":
/*!**********************************************************!*\
  !*** external "@material-ui/icons/AccountBalanceWallet" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AccountBalanceWallet");

/***/ }),

/***/ "@web3-react/authereum-connector":
/*!**************************************************!*\
  !*** external "@web3-react/authereum-connector" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/authereum-connector");

/***/ }),

/***/ "@web3-react/core":
/*!***********************************!*\
  !*** external "@web3-react/core" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/core");

/***/ }),

/***/ "@web3-react/fortmatic-connector":
/*!**************************************************!*\
  !*** external "@web3-react/fortmatic-connector" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/fortmatic-connector");

/***/ }),

/***/ "@web3-react/frame-connector":
/*!**********************************************!*\
  !*** external "@web3-react/frame-connector" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/frame-connector");

/***/ }),

/***/ "@web3-react/injected-connector":
/*!*************************************************!*\
  !*** external "@web3-react/injected-connector" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ "@web3-react/lattice-connector":
/*!************************************************!*\
  !*** external "@web3-react/lattice-connector" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/lattice-connector");

/***/ }),

/***/ "@web3-react/ledger-connector":
/*!***********************************************!*\
  !*** external "@web3-react/ledger-connector" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/ledger-connector");

/***/ }),

/***/ "@web3-react/magic-connector":
/*!**********************************************!*\
  !*** external "@web3-react/magic-connector" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/magic-connector");

/***/ }),

/***/ "@web3-react/network-connector":
/*!************************************************!*\
  !*** external "@web3-react/network-connector" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/network-connector");

/***/ }),

/***/ "@web3-react/portis-connector":
/*!***********************************************!*\
  !*** external "@web3-react/portis-connector" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/portis-connector");

/***/ }),

/***/ "@web3-react/torus-connector":
/*!**********************************************!*\
  !*** external "@web3-react/torus-connector" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/torus-connector");

/***/ }),

/***/ "@web3-react/trezor-connector":
/*!***********************************************!*\
  !*** external "@web3-react/trezor-connector" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/trezor-connector");

/***/ }),

/***/ "@web3-react/walletconnect-connector":
/*!******************************************************!*\
  !*** external "@web3-react/walletconnect-connector" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/walletconnect-connector");

/***/ }),

/***/ "@web3-react/walletlink-connector":
/*!***************************************************!*\
  !*** external "@web3-react/walletlink-connector" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/walletlink-connector");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9BY2NvdW50LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvQmFsYW5jZS50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9DaGFpbklkLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvU3Bpbm5lci50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9XYWxsZXRzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb25uZWN0b3JzLnRzIiwid2VicGFjazovLy8uL2hvb2tzLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZXRoZXJzcHJvamVjdC9wcm92aWRlcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50QmFsYW5jZVdhbGxldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L2F1dGhlcmV1bS1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvZm9ydG1hdGljLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L2ZyYW1lLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L2xhdHRpY2UtY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvbGVkZ2VyLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L21hZ2ljLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L25ldHdvcmstY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvcG9ydGlzLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L3RvcnVzLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L3RyZXpvci1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC93YWxsZXRjb25uZWN0LWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L3dhbGxldGxpbmstY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJBY2NvdW50IiwiYWNjb3VudCIsInVzZVdlYjNSZWFjdCIsInN1YnN0cmluZyIsImxlbmd0aCIsIkJhbGFuY2UiLCJsaWJyYXJ5IiwiY2hhaW5JZCIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0YWxlIiwiZ2V0QmFsYW5jZSIsInRoZW4iLCJjYXRjaCIsInVuZGVmaW5lZCIsImZvcm1hdEV0aGVyIiwiQ2hhaW5JZCIsIkhlYWRlciIsImFjdGl2ZSIsImVycm9yIiwidXNlU3R5bGUiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiYnJlYWtwb2ludHMiLCJvbmx5IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsImJldHdlZW4iLCJjbGFzc2VzIiwibWFyZ2luIiwidGV4dEFsaWduIiwiZmxvYXQiLCJTcGlubmVyIiwiY29sb3IiLCJyZXN0IiwiV2FsbGV0Iiwib3BlbldhbGxldCIsInNldE9wZW5XYWxsZXQiLCJDb25uZWN0b3JOYW1lcyIsImNvbm5lY3RvcnNCeU5hbWUiLCJJbmplY3RlZCIsImluamVjdGVkIiwiTmV0d29yayIsIm5ldHdvcmsiLCJXYWxsZXRDb25uZWN0Iiwid2FsbGV0Y29ubmVjdCIsIldhbGxldExpbmsiLCJ3YWxsZXRsaW5rIiwiTGVkZ2VyIiwibGVkZ2VyIiwiVHJlem9yIiwidHJlem9yIiwiTGF0dGljZSIsImxhdHRpY2UiLCJGcmFtZSIsImZyYW1lIiwiQXV0aGVyZXVtIiwiYXV0aGVyZXVtIiwiRm9ydG1hdGljIiwiZm9ydG1hdGljIiwiTWFnaWMiLCJtYWdpYyIsIlBvcnRpcyIsInBvcnRpcyIsIlRvcnVzIiwidG9ydXMiLCJnZXRFcnJvck1lc3NhZ2UiLCJOb0V0aGVyZXVtUHJvdmlkZXJFcnJvciIsIlVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIiwiVXNlclJlamVjdGVkUmVxdWVzdEVycm9ySW5qZWN0ZWQiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JXYWxsZXRDb25uZWN0IiwiVXNlclJlamVjdGVkUmVxdWVzdEVycm9yRnJhbWUiLCJjb25zb2xlIiwiZ2V0TGlicmFyeSIsInByb3ZpZGVyIiwiV2ViM1Byb3ZpZGVyIiwicG9sbGluZ0ludGVydmFsIiwiY29udGV4dCIsImNvbm5lY3RvciIsImFjdGl2YXRlIiwiZGVhY3RpdmF0ZSIsImFjdGl2YXRpbmdDb25uZWN0b3IiLCJzZXRBY3RpdmF0aW5nQ29ubmVjdG9yIiwidHJpZWRFYWdlciIsInVzZUVhZ2VyQ29ubmVjdCIsInVzZUluYWN0aXZlTGlzdGVuZXIiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1heFdpZHRoIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm5hbWUiLCJjdXJyZW50Q29ubmVjdG9yIiwiYWN0aXZhdGluZyIsImNvbm5lY3RlZCIsImRpc2FibGVkIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyQ29sb3IiLCJjdXJzb3IiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsImdldFNpZ25lciIsInNpZ25NZXNzYWdlIiwic2lnbmF0dXJlIiwid2luZG93IiwiYWxlcnQiLCJtZXNzYWdlIiwiY2hhbmdlQ2hhaW5JZCIsImNsb3NlIiwiY2hhbmdlTmV0d29yayIsIlBPTExJTkdfSU5URVJWQUwiLCJSUENfVVJMUyIsInByb2Nlc3MiLCJSUENfVVJMXzQiLCJJbmplY3RlZENvbm5lY3RvciIsInN1cHBvcnRlZENoYWluSWRzIiwiTmV0d29ya0Nvbm5lY3RvciIsInVybHMiLCJkZWZhdWx0Q2hhaW5JZCIsIldhbGxldENvbm5lY3RDb25uZWN0b3IiLCJycGMiLCJxcmNvZGUiLCJXYWxsZXRMaW5rQ29ubmVjdG9yIiwidXJsIiwiYXBwTmFtZSIsIkxlZGdlckNvbm5lY3RvciIsIlRyZXpvckNvbm5lY3RvciIsIm1hbmlmZXN0RW1haWwiLCJtYW5pZmVzdEFwcFVybCIsIkxhdHRpY2VDb25uZWN0b3IiLCJGcmFtZUNvbm5lY3RvciIsIkF1dGhlcmV1bUNvbm5lY3RvciIsIkZvcnRtYXRpY0Nvbm5lY3RvciIsImFwaUtleSIsIk1hZ2ljQ29ubmVjdG9yIiwiZW1haWwiLCJQb3J0aXNDb25uZWN0b3IiLCJkQXBwSWQiLCJuZXR3b3JrcyIsIlRvcnVzQ29ubmVjdG9yIiwidHJpZWQiLCJzZXRUcmllZCIsImlzQXV0aG9yaXplZCIsInN1cHByZXNzIiwiZXRoZXJldW0iLCJvbiIsImhhbmRsZUNvbm5lY3QiLCJsb2ciLCJoYW5kbGVDaGFpbkNoYW5nZWQiLCJoYW5kbGVBY2NvdW50c0NoYW5nZWQiLCJhY2NvdW50cyIsImhhbmRsZU5ldHdvcmtDaGFuZ2VkIiwibmV0d29ya0lkIiwicmVtb3ZlTGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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aERELHFEOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG9FOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyBXZWIzUmVhY3RQcm92aWRlciwgdXNlV2ViM1JlYWN0LCBVbnN1cHBvcnRlZENoYWluSWRFcnJvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXHJcblxyXG5jb25zdCBBY2NvdW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYWNjb3VudCB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPkFjY291bnQ8L3NwYW4+XHJcbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwicm9ib3RcIj5cclxuICAgICAgICDwn6SWXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAge2FjY291bnQgPT09IG51bGxcclxuICAgICAgICAgID8gJy0nXHJcbiAgICAgICAgICA6IGFjY291bnRcclxuICAgICAgICAgID8gYCR7YWNjb3VudC5zdWJzdHJpbmcoMCwgNil9Li4uJHthY2NvdW50LnN1YnN0cmluZyhhY2NvdW50Lmxlbmd0aCAtIDQpfWBcclxuICAgICAgICAgIDogJyd9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFdlYjNSZWFjdFByb3ZpZGVyLCB1c2VXZWIzUmVhY3QsIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcclxuXHJcbmZ1bmN0aW9uIEJhbGFuY2UoKSB7XHJcbiAgY29uc3QgeyBhY2NvdW50LCBsaWJyYXJ5LCBjaGFpbklkIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSBSZWFjdC51c2VTdGF0ZSgpXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpOiBhbnkgPT4ge1xyXG4gICAgaWYgKCEhYWNjb3VudCAmJiAhIWxpYnJhcnkpIHtcclxuICAgICAgbGV0IHN0YWxlID0gZmFsc2VcclxuXHJcbiAgICAgIGxpYnJhcnlcclxuICAgICAgICAuZ2V0QmFsYW5jZShhY2NvdW50KVxyXG4gICAgICAgIC50aGVuKChiYWxhbmNlOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmICghc3RhbGUpIHtcclxuICAgICAgICAgICAgc2V0QmFsYW5jZShiYWxhbmNlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIGlmICghc3RhbGUpIHtcclxuICAgICAgICAgICAgc2V0QmFsYW5jZShudWxsKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHN0YWxlID0gdHJ1ZVxyXG4gICAgICAgIHNldEJhbGFuY2UodW5kZWZpbmVkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2FjY291bnQsIGxpYnJhcnksIGNoYWluSWRdKSAvLyBlbnN1cmVzIHJlZnJlc2ggaWYgcmVmZXJlbnRpYWwgaWRlbnRpdHkgb2YgbGlicmFyeSBkb2Vzbid0IGNoYW5nZSBhY3Jvc3MgY2hhaW5JZHNcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPkJhbGFuY2U8L3NwYW4+XHJcbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiZ29sZFwiPlxyXG4gICAgICAgIPCfkrBcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3Bhbj57YmFsYW5jZSA9PT0gbnVsbCA/ICdFcnJvcicgOiBiYWxhbmNlID8gYM6eJHtmb3JtYXRFdGhlcihiYWxhbmNlKX1gIDogJyd9PC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59IiwiaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIsIHVzZVdlYjNSZWFjdCwgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhaW5JZCgpIHtcclxuICBjb25zdCB7IGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj5DaGFpbiBJZDwvc3Bhbj5cclxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJjaGFpblwiPlxyXG4gICAgICAgIOKbk1xyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuPntjaGFpbklkID8/ICcnfTwvc3Bhbj5cclxuICAgIDwvPlxyXG4gIClcclxufSIsImltcG9ydCB7IFdlYjNSZWFjdFByb3ZpZGVyLCB1c2VXZWIzUmVhY3QsIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcclxuaW1wb3J0IENoYWluSWQgZnJvbSAnLi9DaGFpbklkJ1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL0FjY291bnQnXHJcbmltcG9ydCBCYWxhbmNlIGZyb20gJy4vQmFsYW5jZS50c3gnXHJcbmltcG9ydCB7IEFwcEJhciwgQmFkZ2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEFjY291bnRCYWxhbmNlV2FsbGV0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudEJhbGFuY2VXYWxsZXQnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgeyBhY3RpdmUsIGVycm9yIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG4gIFxyXG5jb25zdCB1c2VTdHlsZSA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG5cdFx0XHJcblx0XHRyb290OiB7XHJcblx0XHRcdFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMub25seSgneHMnKV06e1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uOiAncm93JyxcclxuXHRcdFx0XHR3aWR0aDogJzEwMCUnXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMuYmV0d2Vlbignc20nLCAneGwnKV06e1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHdpZHRoOiAnNTB2dycsXHJcblx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0XHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHR9KSk7XHJcblxyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1x0XHJcblx0XHJcblx0IC8qIDxDaGFpbklkIC8+XHJcbiAgICAgICAgPEFjY291bnQgLz5cclxuICAgICAgICA8QmFsYW5jZSAvPiAqL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxBcHBCYXIgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnfX0+XHJcblx0ICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJzFyZW0nLCB0ZXh0QWxpZ246ICdyaWdodCcsIGZsb2F0OiAncmlnaHQnIH19PnthY3RpdmUgPyA8QWNjb3VudEJhbGFuY2VXYWxsZXRJY29uIGZvbnRTaXplPSdsYXJnZScgLz4gOiBlcnJvciA/IDxBY2NvdW50QmFsYW5jZVdhbGxldEljb24gZm9udFNpemU9J2xhcmdlJyAvPiA6IDxBY2NvdW50QmFsYW5jZVdhbGxldEljb24gZm9udFNpemU9J2xhcmdlJyAvPn08L2Rpdj5cclxuICAgICAgXHJcblx0IDwvQXBwQmFyPiBcclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuLy8gPCEtLSBCeSBTYW0gSGVyYmVydCAoQHNoZXJiKSwgZm9yIGV2ZXJ5b25lLiBNb3JlIEAgaHR0cDovL2dvby5nbC83QUp6YkwgLS0+XHJcbmV4cG9ydCBmdW5jdGlvbiBTcGlubmVyKHsgY29sb3IsIC4uLnJlc3QgfTogYW55KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgd2lkdGg9XCIzOFwiIGhlaWdodD1cIjM4XCIgdmlld0JveD1cIjAgMCAzOCAzOFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBzdHJva2U9e2NvbG9yfSB7Li4ucmVzdH0+XHJcbiAgICAgIDxnIGZpbGw9XCJub25lXCIgZmlsbFJ1bGU9XCJldmVub2RkXCI+XHJcbiAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEgMSlcIiBzdHJva2VXaWR0aD1cIjJcIj5cclxuICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlT3BhY2l0eT1cIi41XCIgY3g9XCIxOFwiIGN5PVwiMThcIiByPVwiMThcIiAvPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFwiPlxyXG4gICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybVxyXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJyb3RhdGVcIlxyXG4gICAgICAgICAgICAgIGZyb209XCIwIDE4IDE4XCJcclxuICAgICAgICAgICAgICB0bz1cIjM2MCAxOCAxOFwiXHJcbiAgICAgICAgICAgICAgZHVyPVwiMXNcIlxyXG4gICAgICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L3BhdGg+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFdlYjNSZWFjdFByb3ZpZGVyLCB1c2VXZWIzUmVhY3QsIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcclxuaW1wb3J0IHtcclxuICBOb0V0aGVyZXVtUHJvdmlkZXJFcnJvcixcclxuICBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9ySW5qZWN0ZWRcclxufSBmcm9tICdAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3InXHJcbmltcG9ydCB7IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JXYWxsZXRDb25uZWN0IH0gZnJvbSAnQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdC1jb25uZWN0b3InXHJcbmltcG9ydCB7IFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSB9IGZyb20gJ0B3ZWIzLXJlYWN0L2ZyYW1lLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzJ1xyXG5pbXBvcnQgeyBmb3JtYXRFdGhlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3VuaXRzJ1xyXG5cclxuaW1wb3J0IHsgdXNlRWFnZXJDb25uZWN0LCB1c2VJbmFjdGl2ZUxpc3RlbmVyIH0gZnJvbSAnLi4vaG9va3MnXHJcbmltcG9ydCB7XHJcbiAgaW5qZWN0ZWQsXHJcbiAgbmV0d29yayxcclxuICB3YWxsZXRjb25uZWN0LFxyXG4gIHdhbGxldGxpbmssXHJcbiAgbGVkZ2VyLFxyXG4gIHRyZXpvcixcclxuICBsYXR0aWNlLFxyXG4gIGZyYW1lLFxyXG4gIGF1dGhlcmV1bSxcclxuICBmb3J0bWF0aWMsXHJcbiAgbWFnaWMsXHJcbiAgcG9ydGlzLFxyXG4gIHRvcnVzXHJcbn0gZnJvbSAnLi4vY29ubmVjdG9ycydcclxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4vU3Bpbm5lcidcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2FsbGV0KG9wZW5XYWxsZXQsIHNldE9wZW5XYWxsZXQpIHtcclxuXHJcbmVudW0gQ29ubmVjdG9yTmFtZXMge1xyXG4gIEluamVjdGVkID0gJ0luamVjdGVkJyxcclxuICBOZXR3b3JrID0gJ05ldHdvcmsnLFxyXG4gIFdhbGxldENvbm5lY3QgPSAnV2FsbGV0Q29ubmVjdCcsXHJcbiAgV2FsbGV0TGluayA9ICdXYWxsZXRMaW5rJyxcclxuICBMZWRnZXIgPSAnTGVkZ2VyJyxcclxuICBUcmV6b3IgPSAnVHJlem9yJyxcclxuICBMYXR0aWNlID0gJ0xhdHRpY2UnLFxyXG4gIEZyYW1lID0gJ0ZyYW1lJyxcclxuICBBdXRoZXJldW0gPSAnQXV0aGVyZXVtJyxcclxuICBGb3J0bWF0aWMgPSAnRm9ydG1hdGljJyxcclxuICBNYWdpYyA9ICdNYWdpYycsXHJcbiAgUG9ydGlzID0gJ1BvcnRpcycsXHJcbiAgVG9ydXMgPSAnVG9ydXMnXHJcbn1cclxuXHJcbmNvbnN0IGNvbm5lY3RvcnNCeU5hbWU6IHsgW2Nvbm5lY3Rvck5hbWUgaW4gQ29ubmVjdG9yTmFtZXNdOiBhbnkgfSA9IHtcclxuICBbQ29ubmVjdG9yTmFtZXMuSW5qZWN0ZWRdOiBpbmplY3RlZCxcclxuICBbQ29ubmVjdG9yTmFtZXMuTmV0d29ya106IG5ldHdvcmssXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLldhbGxldENvbm5lY3RdOiB3YWxsZXRjb25uZWN0LFxyXG4gIFtDb25uZWN0b3JOYW1lcy5XYWxsZXRMaW5rXTogd2FsbGV0bGluayxcclxuICBbQ29ubmVjdG9yTmFtZXMuTGVkZ2VyXTogbGVkZ2VyLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5UcmV6b3JdOiB0cmV6b3IsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkxhdHRpY2VdOiBsYXR0aWNlLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5GcmFtZV06IGZyYW1lLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5BdXRoZXJldW1dOiBhdXRoZXJldW0sXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkZvcnRtYXRpY106IGZvcnRtYXRpYyxcclxuICBbQ29ubmVjdG9yTmFtZXMuTWFnaWNdOiBtYWdpYyxcclxuICBbQ29ubmVjdG9yTmFtZXMuUG9ydGlzXTogcG9ydGlzLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5Ub3J1c106IHRvcnVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShlcnJvcjogRXJyb3IpIHtcclxuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBOb0V0aGVyZXVtUHJvdmlkZXJFcnJvcikge1xyXG4gICAgcmV0dXJuICdObyBFdGhlcmV1bSBicm93c2VyIGV4dGVuc2lvbiBkZXRlY3RlZCwgaW5zdGFsbCBNZXRhTWFzayBvbiBkZXNrdG9wIG9yIHZpc2l0IGZyb20gYSBkQXBwIGJyb3dzZXIgb24gbW9iaWxlLidcclxuICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IpIHtcclxuICAgIHJldHVybiBcIllvdSdyZSBjb25uZWN0ZWQgdG8gYW4gdW5zdXBwb3J0ZWQgbmV0d29yay5cIlxyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkIHx8XHJcbiAgICBlcnJvciBpbnN0YW5jZW9mIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QgfHxcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yRnJhbWVcclxuICApIHtcclxuICAgIHJldHVybiAnUGxlYXNlIGF1dGhvcml6ZSB0aGlzIHdlYnNpdGUgdG8gYWNjZXNzIHlvdXIgRXRoZXJldW0gYWNjb3VudC4nXHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICByZXR1cm4gJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQuIENoZWNrIHRoZSBjb25zb2xlIGZvciBtb3JlIGRldGFpbHMuJ1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmVudW0gQ29ubmVjdG9yTmFtZXMge1xyXG4gIEluamVjdGVkID0gJ0luamVjdGVkJyxcclxuICBOZXR3b3JrID0gJ05ldHdvcmsnLFxyXG4gIFdhbGxldENvbm5lY3QgPSAnV2FsbGV0Q29ubmVjdCcsXHJcbiAgV2FsbGV0TGluayA9ICdXYWxsZXRMaW5rJyxcclxuICBMZWRnZXIgPSAnTGVkZ2VyJyxcclxuICBUcmV6b3IgPSAnVHJlem9yJyxcclxuICBMYXR0aWNlID0gJ0xhdHRpY2UnLFxyXG4gIEZyYW1lID0gJ0ZyYW1lJyxcclxuICBBdXRoZXJldW0gPSAnQXV0aGVyZXVtJyxcclxuICBGb3J0bWF0aWMgPSAnRm9ydG1hdGljJyxcclxuICBNYWdpYyA9ICdNYWdpYycsXHJcbiAgUG9ydGlzID0gJ1BvcnRpcycsXHJcbiAgVG9ydXMgPSAnVG9ydXMnXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRMaWJyYXJ5KHByb3ZpZGVyOiBhbnkpOiBXZWIzUHJvdmlkZXIge1xyXG4gIGNvbnN0IGxpYnJhcnkgPSBuZXcgV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKVxyXG4gIGxpYnJhcnkucG9sbGluZ0ludGVydmFsID0gMTIwMDBcclxuICByZXR1cm4gbGlicmFyeVxyXG59XHJcblxyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VXZWIzUmVhY3Q8V2ViM1Byb3ZpZGVyPigpXHJcbiAgY29uc3QgeyBjb25uZWN0b3IsIGxpYnJhcnksIGNoYWluSWQsIGFjY291bnQsIGFjdGl2YXRlLCBkZWFjdGl2YXRlLCBhY3RpdmUsIGVycm9yIH0gPSBjb250ZXh0XHJcblx0XHJcbiAgLy8gaGFuZGxlIGxvZ2ljIHRvIHJlY29nbml6ZSB0aGUgY29ubmVjdG9yIGN1cnJlbnRseSBiZWluZyBhY3RpdmF0ZWRcclxuICBjb25zdCBbYWN0aXZhdGluZ0Nvbm5lY3Rvciwgc2V0QWN0aXZhdGluZ0Nvbm5lY3Rvcl0gPSBSZWFjdC51c2VTdGF0ZTxhbnk+KClcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjdGl2YXRpbmdDb25uZWN0b3IgJiYgYWN0aXZhdGluZ0Nvbm5lY3RvciA9PT0gY29ubmVjdG9yKSB7XHJcbiAgICAgIHNldEFjdGl2YXRpbmdDb25uZWN0b3IodW5kZWZpbmVkKVxyXG4gICAgfVxyXG4gIH0sIFthY3RpdmF0aW5nQ29ubmVjdG9yLCBjb25uZWN0b3JdKVxyXG5cclxuICAvLyBoYW5kbGUgbG9naWMgdG8gZWFnZXJseSBjb25uZWN0IHRvIHRoZSBpbmplY3RlZCBldGhlcmV1bSBwcm92aWRlciwgaWYgaXQgZXhpc3RzIGFuZCBoYXMgZ3JhbnRlZCBhY2Nlc3MgYWxyZWFkeVxyXG4gIGNvbnN0IHRyaWVkRWFnZXIgPSB1c2VFYWdlckNvbm5lY3QoKVxyXG5cclxuICAvLyBoYW5kbGUgbG9naWMgdG8gY29ubmVjdCBpbiByZWFjdGlvbiB0byBjZXJ0YWluIGV2ZW50cyBvbiB0aGUgaW5qZWN0ZWQgZXRoZXJldW0gcHJvdmlkZXIsIGlmIGl0IGV4aXN0c1xyXG4gIHVzZUluYWN0aXZlTGlzdGVuZXIoIXRyaWVkRWFnZXIgfHwgISFhY3RpdmF0aW5nQ29ubmVjdG9yKVxyXG4gIGlmKG9wZW5XYWxsZXQgPT09IGZhbHNlKXtcclxuXHQgIFxyXG5cdCAgPE5hdmlnYXRpb24gLz5cclxuXHQgIHJldHVybig8PlxyXG5cdCAgPE5hdmlnYXRpb24gLz5cclxuXHQgIDxoMT5PcGVuIHlvdSB3YWxsZXQ8L2gxPlxyXG5cdCAgXHJcblx0ICA8Lz4pfVxyXG5cdCAgXHJcblx0ICBcclxuXHQgIGVsc2V7IFx0XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxociBzdHlsZT17eyBtYXJnaW46ICcycmVtJyB9fSAvPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgICAgICAgIGdyaWRHYXA6ICcxcmVtJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnInLFxyXG4gICAgICAgICAgbWF4V2lkdGg6ICcyMHJlbScsXHJcbiAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuXHRcdCAgZmxvYXQ6ICdyaWdodCdcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge09iamVjdC5rZXlzKGNvbm5lY3RvcnNCeU5hbWUpLm1hcChuYW1lID0+IHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb25uZWN0b3IgPSBjb25uZWN0b3JzQnlOYW1lW25hbWVdXHJcbiAgICAgICAgICBjb25zdCBhY3RpdmF0aW5nID0gY3VycmVudENvbm5lY3RvciA9PT0gYWN0aXZhdGluZ0Nvbm5lY3RvclxyXG4gICAgICAgICAgY29uc3QgY29ubmVjdGVkID0gY3VycmVudENvbm5lY3RvciA9PT0gY29ubmVjdG9yXHJcbiAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9ICF0cmllZEVhZ2VyIHx8ICEhYWN0aXZhdGluZ0Nvbm5lY3RvciB8fCBjb25uZWN0ZWQgfHwgISFlcnJvclxyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhY3RpdmF0aW5nID8gJ29yYW5nZScgOiBjb25uZWN0ZWQgPyAnZ3JlZW4nIDogJ3Vuc2V0JyxcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGlzYWJsZWQgPyAndW5zZXQnIDogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgICAgICBrZXk9e25hbWV9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZhdGluZ0Nvbm5lY3RvcihjdXJyZW50Q29ubmVjdG9yKVxyXG4gICAgICAgICAgICAgICAgYWN0aXZhdGUoY29ubmVjdG9yc0J5TmFtZVtuYW1lXSlcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAnMCcsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMCAwIDAgMXJlbSdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2FjdGl2YXRpbmcgJiYgPFNwaW5uZXIgY29sb3I9eydibGFjayd9IHN0eWxlPXt7IGhlaWdodDogJzI1JScsIG1hcmdpbkxlZnQ6ICctMXJlbScgfX0gLz59XHJcbiAgICAgICAgICAgICAgICB7Y29ubmVjdGVkICYmIChcclxuICAgICAgICAgICAgICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJjaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIOKchVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgeyhhY3RpdmUgfHwgZXJyb3IpICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcycmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGRlYWN0aXZhdGUoKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBEZWFjdGl2YXRlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7ISFlcnJvciAmJiA8aDQgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMXJlbScsIG1hcmdpbkJvdHRvbTogJzAnIH19PntnZXRFcnJvck1lc3NhZ2UoZXJyb3IpfTwvaDQ+fVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxociBzdHlsZT17eyBtYXJnaW46ICcycmVtJyB9fSAvPlxyXG5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgICBncmlkR2FwOiAnMXJlbScsXHJcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnZml0LWNvbnRlbnQnLFxyXG4gICAgICAgICAgbWF4V2lkdGg6ICcyMHJlbScsXHJcbiAgICAgICAgICBtYXJnaW46ICdhdXRvJ1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7ISEobGlicmFyeSAmJiBhY2NvdW50KSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIGxpYnJhcnlcclxuICAgICAgICAgICAgICAgIC5nZXRTaWduZXIoYWNjb3VudClcclxuICAgICAgICAgICAgICAgIC5zaWduTWVzc2FnZSgn8J+RiycpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoc2lnbmF0dXJlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgd2luZG93LmFsZXJ0KGBTdWNjZXNzIVxcblxcbiR7c2lnbmF0dXJlfWApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydCgnRmFpbHVyZSEnICsgKGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBgXFxuXFxuJHtlcnJvci5tZXNzYWdlfWAgOiAnJykpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTaWduIE1lc3NhZ2VcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyEhKGNvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5OZXR3b3JrXSAmJiBjaGFpbklkKSAmJiAoXHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2hhbmdlQ2hhaW5JZChjaGFpbklkID09PSAxID8gNCA6IDEpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFN3aXRjaCBOZXR3b3Jrc1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Y29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLldhbGxldENvbm5lY3RdICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEtpbGwgV2FsbGV0Q29ubmVjdCBTZXNzaW9uXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuV2FsbGV0TGlua10gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBXYWxsZXRMaW5rIFNlc3Npb25cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5Gb3J0bWF0aWNdICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEtpbGwgRm9ydG1hdGljIFNlc3Npb25cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5NYWdpY10gJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBNYWdpYyBTZXNzaW9uXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuUG9ydGlzXSAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7Y2hhaW5JZCAhPT0gdW5kZWZpbmVkICYmIChcclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNoYW5nZU5ldHdvcmsoY2hhaW5JZCA9PT0gMSA/IDEwMCA6IDEpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFN3aXRjaCBOZXR3b3Jrc1xyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEtpbGwgUG9ydGlzIFNlc3Npb25cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuVG9ydXNdICYmIChcclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEtpbGwgVG9ydXMgU2Vzc2lvblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxufSIsImltcG9ydCB7IEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBOZXR3b3JrQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvbmV0d29yay1jb25uZWN0b3InXHJcbmltcG9ydCB7IFdhbGxldENvbm5lY3RDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC93YWxsZXRjb25uZWN0LWNvbm5lY3RvcidcclxuaW1wb3J0IHsgV2FsbGV0TGlua0Nvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGxpbmstY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBMZWRnZXJDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9sZWRnZXItY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBUcmV6b3JDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC90cmV6b3ItY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBMYXR0aWNlQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvbGF0dGljZS1jb25uZWN0b3InXHJcbmltcG9ydCB7IEZyYW1lQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvZnJhbWUtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBBdXRoZXJldW1Db25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9hdXRoZXJldW0tY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBGb3J0bWF0aWNDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9mb3J0bWF0aWMtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBNYWdpY0Nvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L21hZ2ljLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgUG9ydGlzQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvcG9ydGlzLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVG9ydXNDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC90b3J1cy1jb25uZWN0b3InXHJcblxyXG5jb25zdCBQT0xMSU5HX0lOVEVSVkFMID0gMTIwMDBcclxuY29uc3QgUlBDX1VSTFM6IHsgW2NoYWluSWQ6IG51bWJlcl06IHN0cmluZyB9ID0ge1xyXG4gIDE6IHByb2Nlc3MuZW52LlJQQ19VUkxfMSBhcyBzdHJpbmcsXHJcbiAgNDogcHJvY2Vzcy5lbnYuUlBDX1VSTF80IGFzIHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5qZWN0ZWQgPSBuZXcgSW5qZWN0ZWRDb25uZWN0b3IoeyBzdXBwb3J0ZWRDaGFpbklkczogWzEsIDMsIDQsIDUsIDQyXSB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IG5ldHdvcmsgPSBuZXcgTmV0d29ya0Nvbm5lY3Rvcih7XHJcbiAgdXJsczogeyAxOiBSUENfVVJMU1sxXSwgNDogUlBDX1VSTFNbNF0gfSxcclxuICBkZWZhdWx0Q2hhaW5JZDogMVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHdhbGxldGNvbm5lY3QgPSBuZXcgV2FsbGV0Q29ubmVjdENvbm5lY3Rvcih7XHJcbiAgcnBjOiB7IDE6IFJQQ19VUkxTWzFdIH0sXHJcbiAgcXJjb2RlOiB0cnVlXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qgd2FsbGV0bGluayA9IG5ldyBXYWxsZXRMaW5rQ29ubmVjdG9yKHtcclxuICB1cmw6IFJQQ19VUkxTWzFdLFxyXG4gIGFwcE5hbWU6ICd3ZWIzLXJlYWN0IGV4YW1wbGUnLFxyXG4gIHN1cHBvcnRlZENoYWluSWRzOiBbMSwgMywgNCwgNSwgNDIsIDEwLCAxMzcsIDY5LCA0MjAsIDgwMDAxXVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGxlZGdlciA9IG5ldyBMZWRnZXJDb25uZWN0b3IoeyBjaGFpbklkOiAxLCB1cmw6IFJQQ19VUkxTWzFdLCBwb2xsaW5nSW50ZXJ2YWw6IFBPTExJTkdfSU5URVJWQUwgfSlcclxuXHJcbmV4cG9ydCBjb25zdCB0cmV6b3IgPSBuZXcgVHJlem9yQ29ubmVjdG9yKHtcclxuICBjaGFpbklkOiAxLFxyXG4gIHVybDogUlBDX1VSTFNbMV0sXHJcbiAgcG9sbGluZ0ludGVydmFsOiBQT0xMSU5HX0lOVEVSVkFMLFxyXG4gIG1hbmlmZXN0RW1haWw6ICdkdW1teUBhYmMueHl6JyxcclxuICBtYW5pZmVzdEFwcFVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MTIzNCdcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBsYXR0aWNlID0gbmV3IExhdHRpY2VDb25uZWN0b3Ioe1xyXG4gIGNoYWluSWQ6IDQsXHJcbiAgYXBwTmFtZTogJ3dlYjMtcmVhY3QnLFxyXG4gIHVybDogUlBDX1VSTFNbNF1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBmcmFtZSA9IG5ldyBGcmFtZUNvbm5lY3Rvcih7IHN1cHBvcnRlZENoYWluSWRzOiBbMV0gfSlcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoZXJldW0gPSBuZXcgQXV0aGVyZXVtQ29ubmVjdG9yKHsgY2hhaW5JZDogNDIgfSlcclxuXHJcbmV4cG9ydCBjb25zdCBmb3J0bWF0aWMgPSBuZXcgRm9ydG1hdGljQ29ubmVjdG9yKHsgYXBpS2V5OiBwcm9jZXNzLmVudi5GT1JUTUFUSUNfQVBJX0tFWSBhcyBzdHJpbmcsIGNoYWluSWQ6IDQgfSlcclxuXHJcbmV4cG9ydCBjb25zdCBtYWdpYyA9IG5ldyBNYWdpY0Nvbm5lY3Rvcih7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5NQUdJQ19BUElfS0VZIGFzIHN0cmluZyxcclxuICBjaGFpbklkOiA0LFxyXG4gIGVtYWlsOiAnaGVsbG9AZXhhbXBsZS5vcmcnXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgcG9ydGlzID0gbmV3IFBvcnRpc0Nvbm5lY3Rvcih7IGRBcHBJZDogcHJvY2Vzcy5lbnYuUE9SVElTX0RBUFBfSUQgYXMgc3RyaW5nLCBuZXR3b3JrczogWzEsIDEwMF0gfSlcclxuXHJcbmV4cG9ydCBjb25zdCB0b3J1cyA9IG5ldyBUb3J1c0Nvbm5lY3Rvcih7IGNoYWluSWQ6IDEgfSlcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xyXG5cclxuaW1wb3J0IHsgaW5qZWN0ZWQgfSBmcm9tICcuL2Nvbm5lY3RvcnMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRWFnZXJDb25uZWN0KCkge1xyXG4gIGNvbnN0IHsgYWN0aXZhdGUsIGFjdGl2ZSB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgY29uc3QgW3RyaWVkLCBzZXRUcmllZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluamVjdGVkLmlzQXV0aG9yaXplZCgpLnRoZW4oKGlzQXV0aG9yaXplZDogYm9vbGVhbikgPT4ge1xyXG4gICAgICBpZiAoaXNBdXRob3JpemVkKSB7XHJcbiAgICAgICAgYWN0aXZhdGUoaW5qZWN0ZWQsIHVuZGVmaW5lZCwgdHJ1ZSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgc2V0VHJpZWQodHJ1ZSlcclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFRyaWVkKHRydWUpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSwgW10pIC8vIGludGVudGlvbmFsbHkgb25seSBydW5uaW5nIG9uIG1vdW50IChtYWtlIHN1cmUgaXQncyBvbmx5IG1vdW50ZWQgb25jZSA6KSlcclxuXHJcbiAgLy8gaWYgdGhlIGNvbm5lY3Rpb24gd29ya2VkLCB3YWl0IHVudGlsIHdlIGdldCBjb25maXJtYXRpb24gb2YgdGhhdCB0byBmbGlwIHRoZSBmbGFnXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghdHJpZWQgJiYgYWN0aXZlKSB7XHJcbiAgICAgIHNldFRyaWVkKHRydWUpXHJcbiAgICB9XHJcbiAgfSwgW3RyaWVkLCBhY3RpdmVdKVxyXG5cclxuICByZXR1cm4gdHJpZWRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUluYWN0aXZlTGlzdGVuZXIoc3VwcHJlc3M6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gIGNvbnN0IHsgYWN0aXZlLCBlcnJvciwgYWN0aXZhdGUgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKTogYW55ID0+IHtcclxuICAgIGNvbnN0IHsgZXRoZXJldW0gfSA9IHdpbmRvdyBhcyBhbnlcclxuICAgIGlmIChldGhlcmV1bSAmJiBldGhlcmV1bS5vbiAmJiAhYWN0aXZlICYmICFlcnJvciAmJiAhc3VwcHJlc3MpIHtcclxuICAgICAgY29uc3QgaGFuZGxlQ29ubmVjdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nICdjb25uZWN0JyBldmVudFwiKVxyXG4gICAgICAgIGFjdGl2YXRlKGluamVjdGVkKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGhhbmRsZUNoYWluQ2hhbmdlZCA9IChjaGFpbklkOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nICdjaGFpbkNoYW5nZWQnIGV2ZW50IHdpdGggcGF5bG9hZFwiLCBjaGFpbklkKVxyXG4gICAgICAgIGFjdGl2YXRlKGluamVjdGVkKVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGhhbmRsZUFjY291bnRzQ2hhbmdlZCA9IChhY2NvdW50czogc3RyaW5nW10pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nICdhY2NvdW50c0NoYW5nZWQnIGV2ZW50IHdpdGggcGF5bG9hZFwiLCBhY2NvdW50cylcclxuICAgICAgICBpZiAoYWNjb3VudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgYWN0aXZhdGUoaW5qZWN0ZWQpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGhhbmRsZU5ldHdvcmtDaGFuZ2VkID0gKG5ldHdvcmtJZDogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJIYW5kbGluZyAnbmV0d29ya0NoYW5nZWQnIGV2ZW50IHdpdGggcGF5bG9hZFwiLCBuZXR3b3JrSWQpXHJcbiAgICAgICAgYWN0aXZhdGUoaW5qZWN0ZWQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGV0aGVyZXVtLm9uKCdjb25uZWN0JywgaGFuZGxlQ29ubmVjdClcclxuICAgICAgZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsIGhhbmRsZUNoYWluQ2hhbmdlZClcclxuICAgICAgZXRoZXJldW0ub24oJ2FjY291bnRzQ2hhbmdlZCcsIGhhbmRsZUFjY291bnRzQ2hhbmdlZClcclxuICAgICAgZXRoZXJldW0ub24oJ25ldHdvcmtDaGFuZ2VkJywgaGFuZGxlTmV0d29ya0NoYW5nZWQpXHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIGlmIChldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcikge1xyXG4gICAgICAgICAgZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2Nvbm5lY3QnLCBoYW5kbGVDb25uZWN0KVxyXG4gICAgICAgICAgZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2NoYWluQ2hhbmdlZCcsIGhhbmRsZUNoYWluQ2hhbmdlZClcclxuICAgICAgICAgIGV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCdhY2NvdW50c0NoYW5nZWQnLCBoYW5kbGVBY2NvdW50c0NoYW5nZWQpXHJcbiAgICAgICAgICBldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignbmV0d29ya0NoYW5nZWQnLCBoYW5kbGVOZXR3b3JrQ2hhbmdlZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBbYWN0aXZlLCBlcnJvciwgc3VwcHJlc3MsIGFjdGl2YXRlXSlcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIsIHVzZVdlYjNSZWFjdCwgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xyXG5pbXBvcnQge1xyXG4gIE5vRXRoZXJldW1Qcm92aWRlckVycm9yLFxyXG4gIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZFxyXG59IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QgfSBmcm9tICdAd2ViMy1yZWFjdC93YWxsZXRjb25uZWN0LWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckZyYW1lIH0gZnJvbSAnQHdlYjMtcmVhY3QvZnJhbWUtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9wcm92aWRlcnMnXHJcbmltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvdW5pdHMnXHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL0NvbXBvbmVudHMvTmF2aWdhdGlvbidcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9Db21wb25lbnRzL0hlYWRlcidcclxuaW1wb3J0IENoYWluSWQgZnJvbSAnLi4vQ29tcG9uZW50cy9DaGFpbklkJ1xyXG5pbXBvcnQgV2FsbGV0cyBmcm9tICcuLi9Db21wb25lbnRzL1dhbGxldHMudHN4J1xyXG5cclxuaW1wb3J0IHsgdXNlRWFnZXJDb25uZWN0LCB1c2VJbmFjdGl2ZUxpc3RlbmVyIH0gZnJvbSAnLi4vaG9va3MnXHJcbmltcG9ydCB7XHJcbiAgaW5qZWN0ZWQsXHJcbiAgbmV0d29yayxcclxuICB3YWxsZXRjb25uZWN0LFxyXG4gIHdhbGxldGxpbmssXHJcbiAgbGVkZ2VyLFxyXG4gIHRyZXpvcixcclxuICBsYXR0aWNlLFxyXG4gIGZyYW1lLFxyXG4gIGF1dGhlcmV1bSxcclxuICBmb3J0bWF0aWMsXHJcbiAgbWFnaWMsXHJcbiAgcG9ydGlzLFxyXG4gIHRvcnVzXHJcbn0gZnJvbSAnLi4vY29ubmVjdG9ycydcclxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3Bpbm5lcidcclxuXHJcbmZ1bmN0aW9uIGdldExpYnJhcnkocHJvdmlkZXI6IGFueSk6IFdlYjNQcm92aWRlciB7XHJcbiAgY29uc3QgbGlicmFyeSA9IG5ldyBXZWIzUHJvdmlkZXIocHJvdmlkZXIpXHJcbiAgbGlicmFyeS5wb2xsaW5nSW50ZXJ2YWwgPSAxMjAwMFxyXG4gIHJldHVybiBsaWJyYXJ5XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxXZWIzUmVhY3RQcm92aWRlciBnZXRMaWJyYXJ5PXtnZXRMaWJyYXJ5fT5cclxuICAgICAgPEhlYWRlciAvPlxyXG5cdCAgPFdhbGxldHMgLz5cclxuICAgIDwvV2ViM1JlYWN0UHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZXRoZXJzcHJvamVjdC9wcm92aWRlcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50QmFsYW5jZVdhbGxldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2ViMy1yZWFjdC9hdXRoZXJldW0tY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvZm9ydG1hdGljLWNvbm5lY3RvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2ViMy1yZWFjdC9mcmFtZS1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L2xhdHRpY2UtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L2xlZGdlci1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvbWFnaWMtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L25ldHdvcmstY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L3BvcnRpcy1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvdG9ydXMtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L3RyZXpvci1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdC1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3Qvd2FsbGV0bGluay1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==