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
var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\blockchain-chess\\Components\\Account.js";

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
var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\blockchain-chess\\Components\\Balance.tsx";
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
var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\blockchain-chess\\Components\\ChainId.js";

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
var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\blockchain-chess\\Components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function Header({
  openWallets,
  setOpenWallets
}) {
  const {
    active,
    error
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  const {
    0: openWallet,
    1: setOpenWallet
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
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
    },
    wallet: {
      [theme.breakpoints.only('xs')]: {
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
      },
      [theme.breakpoints.between('sm', 'xl')]: {
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
      }
    },
    margin: {
      margin: theme.spacing(2)
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
      lineNumber: 91,
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
      lineNumber: 93,
      columnNumber: 4
    }
  }, active ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
    color: "primary",
    className: classes.margin,
    variant: "dot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 82
    }
  }, __jsx(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 146
    }
  })) : error ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Badge"], {
    color: "error",
    className: classes.margin,
    variant: "dot",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 210
    }
  }, __jsx(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 272
    }
  })) : __jsx(_material_ui_icons_AccountBalanceWallet__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 328
    }
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    className: classes.wallet,
    onClick: () => {
      openWallet === false ? setOpenWallet(true) : setOpenWallet(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, active ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : 'Connect your wallet')));
}

/***/ }),

/***/ "./Components/Hooks/useWallet.js":
/*!***************************************!*\
  !*** ./Components/Hooks/useWallet.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWallet; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWallet() {
  const {
    0: openWallets,
    1: setOpenWallets
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return {
    openWallets,
    setOpenWallets
  };
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
var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\blockchain-chess\\Components\\Spinner.tsx";
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
var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\blockchain-chess\\Components\\Wallets.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Wallet({
  openWallets
}) {
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

  if (openWallet === true) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("hr", {
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
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
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
          lineNumber: 152,
          columnNumber: 30
        }
      }), connected && __jsx("span", {
        role: "img",
        "aria-label": "check",
        __self: this,
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
      onClick: () => {
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
        lineNumber: 197,
        columnNumber: 9
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
        lineNumber: 219,
        columnNumber: 9
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
        lineNumber: 233,
        columnNumber: 9
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
        lineNumber: 247,
        columnNumber: 9
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
        lineNumber: 261,
        columnNumber: 9
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
        lineNumber: 275,
        columnNumber: 9
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
        lineNumber: 291,
        columnNumber: 13
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
        lineNumber: 304,
        columnNumber: 11
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
/* harmony import */ var _Components_Wallets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Wallets */ "./Components/Wallets.tsx");
/* harmony import */ var _Components_Hooks_useWallet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Hooks/useWallet */ "./Components/Hooks/useWallet.js");
var _jsxFileName = "C:\\Users\\rodri\\web3_projects\\blockchain-chess\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








function getLibrary(provider) {
  const library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_2__["Web3Provider"](provider);
  library.pollingInterval = 12000;
  return library;
}

const wallets = Object(_Components_Hooks_useWallet__WEBPACK_IMPORTED_MODULE_5__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["Web3ReactProvider"], {
    getLibrary: getLibrary,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(_Components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, wallets, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  })), __jsx(_Components_Wallets__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, wallets, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9BY2NvdW50LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvQmFsYW5jZS50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9DaGFpbklkLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvSG9va3MvdXNlV2FsbGV0LmpzIiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvU3Bpbm5lci50c3giLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9XYWxsZXRzLnRzeCIsIndlYnBhY2s6Ly8vLi9jb25uZWN0b3JzLnRzIiwid2VicGFjazovLy8uL2hvb2tzLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZXRoZXJzcHJvamVjdC9wcm92aWRlcnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50QmFsYW5jZVdhbGxldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L2F1dGhlcmV1bS1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvZm9ydG1hdGljLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L2ZyYW1lLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L2xhdHRpY2UtY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvbGVkZ2VyLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L21hZ2ljLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L25ldHdvcmstY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvcG9ydGlzLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L3RvcnVzLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L3RyZXpvci1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC93YWxsZXRjb25uZWN0LWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L3dhbGxldGxpbmstY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJBY2NvdW50IiwiYWNjb3VudCIsInVzZVdlYjNSZWFjdCIsInN1YnN0cmluZyIsImxlbmd0aCIsIkJhbGFuY2UiLCJsaWJyYXJ5IiwiY2hhaW5JZCIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0YWxlIiwiZ2V0QmFsYW5jZSIsInRoZW4iLCJjYXRjaCIsInVuZGVmaW5lZCIsImZvcm1hdEV0aGVyIiwiQ2hhaW5JZCIsIkhlYWRlciIsIm9wZW5XYWxsZXRzIiwic2V0T3BlbldhbGxldHMiLCJhY3RpdmUiLCJlcnJvciIsIm9wZW5XYWxsZXQiLCJzZXRPcGVuV2FsbGV0IiwidXNlU3R5bGUiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiYnJlYWtwb2ludHMiLCJvbmx5IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsImJldHdlZW4iLCJ3YWxsZXQiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJwYWRkaW5nVG9wIiwiaGVpZ2h0IiwicGFkZGluZ0JvdHRvbSIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImN1cnNvciIsIm1hcmdpbiIsInNwYWNpbmciLCJjbGFzc2VzIiwidGV4dEFsaWduIiwiZmxvYXQiLCJ1c2VXYWxsZXQiLCJTcGlubmVyIiwiY29sb3IiLCJyZXN0IiwiV2FsbGV0IiwiQ29ubmVjdG9yTmFtZXMiLCJjb25uZWN0b3JzQnlOYW1lIiwiSW5qZWN0ZWQiLCJpbmplY3RlZCIsIk5ldHdvcmsiLCJuZXR3b3JrIiwiV2FsbGV0Q29ubmVjdCIsIndhbGxldGNvbm5lY3QiLCJXYWxsZXRMaW5rIiwid2FsbGV0bGluayIsIkxlZGdlciIsImxlZGdlciIsIlRyZXpvciIsInRyZXpvciIsIkxhdHRpY2UiLCJsYXR0aWNlIiwiRnJhbWUiLCJmcmFtZSIsIkF1dGhlcmV1bSIsImF1dGhlcmV1bSIsIkZvcnRtYXRpYyIsImZvcnRtYXRpYyIsIk1hZ2ljIiwibWFnaWMiLCJQb3J0aXMiLCJwb3J0aXMiLCJUb3J1cyIsInRvcnVzIiwiZ2V0RXJyb3JNZXNzYWdlIiwiTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IiLCJVbnN1cHBvcnRlZENoYWluSWRFcnJvciIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkIiwiVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckZyYW1lIiwiY29uc29sZSIsImdldExpYnJhcnkiLCJwcm92aWRlciIsIldlYjNQcm92aWRlciIsInBvbGxpbmdJbnRlcnZhbCIsImNvbnRleHQiLCJjb25uZWN0b3IiLCJhY3RpdmF0ZSIsImRlYWN0aXZhdGUiLCJhY3RpdmF0aW5nQ29ubmVjdG9yIiwic2V0QWN0aXZhdGluZ0Nvbm5lY3RvciIsInRyaWVkRWFnZXIiLCJ1c2VFYWdlckNvbm5lY3QiLCJ1c2VJbmFjdGl2ZUxpc3RlbmVyIiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtYXhXaWR0aCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJuYW1lIiwiY3VycmVudENvbm5lY3RvciIsImFjdGl2YXRpbmciLCJjb25uZWN0ZWQiLCJkaXNhYmxlZCIsImJvcmRlckNvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYWxpZ25JdGVtcyIsIm1hcmdpbkJvdHRvbSIsImdldFNpZ25lciIsInNpZ25NZXNzYWdlIiwic2lnbmF0dXJlIiwid2luZG93IiwiYWxlcnQiLCJtZXNzYWdlIiwiY2hhbmdlQ2hhaW5JZCIsImNsb3NlIiwiY2hhbmdlTmV0d29yayIsIlBPTExJTkdfSU5URVJWQUwiLCJSUENfVVJMUyIsInByb2Nlc3MiLCJSUENfVVJMXzQiLCJJbmplY3RlZENvbm5lY3RvciIsInN1cHBvcnRlZENoYWluSWRzIiwiTmV0d29ya0Nvbm5lY3RvciIsInVybHMiLCJkZWZhdWx0Q2hhaW5JZCIsIldhbGxldENvbm5lY3RDb25uZWN0b3IiLCJycGMiLCJxcmNvZGUiLCJXYWxsZXRMaW5rQ29ubmVjdG9yIiwidXJsIiwiYXBwTmFtZSIsIkxlZGdlckNvbm5lY3RvciIsIlRyZXpvckNvbm5lY3RvciIsIm1hbmlmZXN0RW1haWwiLCJtYW5pZmVzdEFwcFVybCIsIkxhdHRpY2VDb25uZWN0b3IiLCJGcmFtZUNvbm5lY3RvciIsIkF1dGhlcmV1bUNvbm5lY3RvciIsIkZvcnRtYXRpY0Nvbm5lY3RvciIsImFwaUtleSIsIk1hZ2ljQ29ubmVjdG9yIiwiZW1haWwiLCJQb3J0aXNDb25uZWN0b3IiLCJkQXBwSWQiLCJuZXR3b3JrcyIsIlRvcnVzQ29ubmVjdG9yIiwidHJpZWQiLCJzZXRUcmllZCIsImlzQXV0aG9yaXplZCIsInN1cHByZXNzIiwiZXRoZXJldW0iLCJvbiIsImhhbmRsZUNvbm5lY3QiLCJsb2ciLCJoYW5kbGVDaGFpbkNoYW5nZWQiLCJoYW5kbGVBY2NvdW50c0NoYW5nZWQiLCJhY2NvdW50cyIsImhhbmRsZU5ldHdvcmtDaGFuZ2VkIiwibmV0d29ya0lkIiwicmVtb3ZlTGlzdGVuZXIiLCJ3YWxsZXRzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDcEIsUUFBTTtBQUFFQztBQUFGLE1BQWNDLHFFQUFZLEVBQWhDO0FBRUEsU0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFFRTtBQUFNLFFBQUksRUFBQyxLQUFYO0FBQWlCLGtCQUFXLE9BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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LHlEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyBXZWIzUmVhY3RQcm92aWRlciwgdXNlV2ViM1JlYWN0LCBVbnN1cHBvcnRlZENoYWluSWRFcnJvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXHJcblxyXG5jb25zdCBBY2NvdW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgYWNjb3VudCB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPkFjY291bnQ8L3NwYW4+XHJcbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwicm9ib3RcIj5cclxuICAgICAgICDwn6SWXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4+XHJcbiAgICAgICAge2FjY291bnQgPT09IG51bGxcclxuICAgICAgICAgID8gJy0nXHJcbiAgICAgICAgICA6IGFjY291bnRcclxuICAgICAgICAgID8gYCR7YWNjb3VudC5zdWJzdHJpbmcoMCwgNil9Li4uJHthY2NvdW50LnN1YnN0cmluZyhhY2NvdW50Lmxlbmd0aCAtIDQpfWBcclxuICAgICAgICAgIDogJyd9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFdlYjNSZWFjdFByb3ZpZGVyLCB1c2VXZWIzUmVhY3QsIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcclxuXHJcbmZ1bmN0aW9uIEJhbGFuY2UoKSB7XHJcbiAgY29uc3QgeyBhY2NvdW50LCBsaWJyYXJ5LCBjaGFpbklkIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSBSZWFjdC51c2VTdGF0ZSgpXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpOiBhbnkgPT4ge1xyXG4gICAgaWYgKCEhYWNjb3VudCAmJiAhIWxpYnJhcnkpIHtcclxuICAgICAgbGV0IHN0YWxlID0gZmFsc2VcclxuXHJcbiAgICAgIGxpYnJhcnlcclxuICAgICAgICAuZ2V0QmFsYW5jZShhY2NvdW50KVxyXG4gICAgICAgIC50aGVuKChiYWxhbmNlOiBhbnkpID0+IHtcclxuICAgICAgICAgIGlmICghc3RhbGUpIHtcclxuICAgICAgICAgICAgc2V0QmFsYW5jZShiYWxhbmNlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgIGlmICghc3RhbGUpIHtcclxuICAgICAgICAgICAgc2V0QmFsYW5jZShudWxsKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHN0YWxlID0gdHJ1ZVxyXG4gICAgICAgIHNldEJhbGFuY2UodW5kZWZpbmVkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2FjY291bnQsIGxpYnJhcnksIGNoYWluSWRdKSAvLyBlbnN1cmVzIHJlZnJlc2ggaWYgcmVmZXJlbnRpYWwgaWRlbnRpdHkgb2YgbGlicmFyeSBkb2Vzbid0IGNoYW5nZSBhY3Jvc3MgY2hhaW5JZHNcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxzcGFuPkJhbGFuY2U8L3NwYW4+XHJcbiAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiZ29sZFwiPlxyXG4gICAgICAgIPCfkrBcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3Bhbj57YmFsYW5jZSA9PT0gbnVsbCA/ICdFcnJvcicgOiBiYWxhbmNlID8gYM6eJHtmb3JtYXRFdGhlcihiYWxhbmNlKX1gIDogJyd9PC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59IiwiaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIsIHVzZVdlYjNSZWFjdCwgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hhaW5JZCgpIHtcclxuICBjb25zdCB7IGNoYWluSWQgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj5DaGFpbiBJZDwvc3Bhbj5cclxuICAgICAgPHNwYW4gcm9sZT1cImltZ1wiIGFyaWEtbGFiZWw9XCJjaGFpblwiPlxyXG4gICAgICAgIOKbk1xyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuPntjaGFpbklkID8/ICcnfTwvc3Bhbj5cclxuICAgIDwvPlxyXG4gIClcclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JzsgXHJcbmltcG9ydCB7IFdlYjNSZWFjdFByb3ZpZGVyLCB1c2VXZWIzUmVhY3QsIFVuc3VwcG9ydGVkQ2hhaW5JZEVycm9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvY29yZSdcclxuaW1wb3J0IENoYWluSWQgZnJvbSAnLi9DaGFpbklkJ1xyXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL0FjY291bnQnXHJcbmltcG9ydCBCYWxhbmNlIGZyb20gJy4vQmFsYW5jZS50c3gnXHJcbmltcG9ydCB7IEFwcEJhciwgQmFkZ2UsIEJveCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgQWNjb3VudEJhbGFuY2VXYWxsZXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50QmFsYW5jZVdhbGxldCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7b3BlbldhbGxldHMsIHNldE9wZW5XYWxsZXRzfSkge1xyXG4gIGNvbnN0IHsgYWN0aXZlLCBlcnJvciB9ID0gdXNlV2ViM1JlYWN0KClcclxuICBjb25zdCBbb3BlbldhbGxldCwgc2V0T3BlbldhbGxldF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcblx0XHRcclxuXHRcdHJvb3Q6IHtcclxuXHRcdFx0XHJcblx0XHRcdFt0aGVtZS5icmVha3BvaW50cy5vbmx5KCd4cycpXTp7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0XHRcdGZsZXhEaXJlY3Rpb246ICdyb3cnLFxyXG5cdFx0XHRcdHdpZHRoOiAnMTAwJSdcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0XHJcblx0XHRcdFt0aGVtZS5icmVha3BvaW50cy5iZXR3ZWVuKCdzbScsICd4bCcpXTp7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0d2lkdGg6ICc1MHZ3JyxcclxuXHRcdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbidcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdH0sXHRcclxuXHRcdFx0XHJcblx0XHR3YWxsZXQ6IHtcclxuXHRcdFxyXG5cdFx0XHRbdGhlbWUuYnJlYWtwb2ludHMub25seSgneHMnKV06e1xyXG5cdFx0XHRib3JkZXJSYWRpdXM6ICcxMHB4IDEwcHggMTBweCAxMHB4JyxcclxuXHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkIHdoaXRlJyxcclxuXHRcdFx0cGFkZGluZ1RvcDogJzJ2aCcsXHJcblx0XHRcdHdpZHRoOiAnMTMlJyxcclxuXHRcdFx0aGVpZ2h0OiAnMnZoJyxcclxuXHRcdFx0cGFkZGluZ0JvdHRvbTogJzJ2aCcsXHJcblx0XHRcdHBhZGRpbmdMZWZ0OiAnMnZ3JyxcclxuXHRcdFx0cGFkZGluZ1JpZ2h0OiAnMnZ3JyxcclxuXHRcdFx0bWFyZ2luVG9wOiAnMnZoJyxcclxuXHRcdFx0bWFyZ2luTGVmdDogJzc1JScsXHJcblx0XHRcdGN1cnNvcjogJ3BvaW50ZXInXHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0W3RoZW1lLmJyZWFrcG9pbnRzLmJldHdlZW4oJ3NtJywgJ3hsJyldOntcclxuXHJcblx0XHRcdGJvcmRlclJhZGl1czogJzEwcHggMTBweCAxMHB4IDEwcHgnLFxyXG5cdFx0XHRib3JkZXI6ICcxcHggc29saWQgd2hpdGUnLFxyXG5cdFx0XHRwYWRkaW5nVG9wOiAnMnZoJyxcclxuXHRcdFx0d2lkdGg6ICcxMyUnLFxyXG5cdFx0XHRoZWlnaHQ6ICcydmgnLFxyXG5cdFx0XHRwYWRkaW5nQm90dG9tOiAnMnZoJyxcclxuXHRcdFx0cGFkZGluZ0xlZnQ6ICcydncnLFxyXG5cdFx0XHRwYWRkaW5nUmlnaHQ6ICcydncnLFxyXG5cdFx0XHRtYXJnaW5Ub3A6ICcydmgnLFxyXG5cdFx0XHRtYXJnaW5MZWZ0OiAnNzUlJyxcclxuXHRcdFx0Y3Vyc29yOiAncG9pbnRlcidcdFx0XHRcclxuXHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR9LFxyXG5cdFx0XHRcclxuXHRcdG1hcmdpbjoge1xyXG5cdFx0XHJcblx0XHRtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiksXHJcblx0XHRcclxuXHRcdH1cdFx0XHJcblx0XHRcdFxyXG5cdFx0XHJcblx0XHRcclxuXHR9KSk7XHJcblxyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZSgpO1x0XHJcblx0XHJcblx0IC8qIDxDaGFpbklkIC8+XHJcbiAgICAgICAgPEFjY291bnQgLz5cclxuICAgICAgICA8QmFsYW5jZSAvPiAqL1xyXG5cclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxBcHBCYXIgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnfX0+XHJcblx0ICBcclxuXHQgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMXJlbScsIHRleHRBbGlnbjogJ3JpZ2h0JywgZmxvYXQ6ICdyaWdodCcgfX0+e2FjdGl2ZSA/IDxCYWRnZSBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufSB2YXJpYW50PVwiZG90XCI+PEFjY291bnRCYWxhbmNlV2FsbGV0SWNvbiBmb250U2l6ZT0nbGFyZ2UnIC8+PC9CYWRnZT4gOiBlcnJvciA/IDxCYWRnZSBjb2xvcj1cImVycm9yXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn0gdmFyaWFudD1cImRvdFwiPjxBY2NvdW50QmFsYW5jZVdhbGxldEljb24gZm9udFNpemU9J2xhcmdlJyAvPjwvQmFkZ2U+IDogPEFjY291bnRCYWxhbmNlV2FsbGV0SWNvbiBmb250U2l6ZT0nbGFyZ2UnIC8+fTwvZGl2PlxyXG4gICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy53YWxsZXR9IG9uQ2xpY2s9eygpID0+IHtvcGVuV2FsbGV0ID09PSBmYWxzZSA/IHNldE9wZW5XYWxsZXQodHJ1ZSkgOiBzZXRPcGVuV2FsbGV0KGZhbHNlKX19ID5cclxuXHRcdHthY3RpdmUgPyBgJHthY2NvdW50LnN1YnN0cmluZygwLCA2KX0uLi4ke2FjY291bnQuc3Vic3RyaW5nKGFjY291bnQubGVuZ3RoIC0gNCl9YCA6ICdDb25uZWN0IHlvdXIgd2FsbGV0J31cclxuXHQgIDwvQm94PlxyXG5cdCBcclxuXHQgPC9BcHBCYXI+IFxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VXYWxsZXQoKXtcclxuXHJcbiAgICBjb25zdCBbb3BlbldhbGxldHMsIHNldE9wZW5XYWxsZXRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybiB7b3BlbldhbGxldHMsIHNldE9wZW5XYWxsZXRzfTtcclxuXHJcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG4vLyA8IS0tIEJ5IFNhbSBIZXJiZXJ0IChAc2hlcmIpLCBmb3IgZXZlcnlvbmUuIE1vcmUgQCBodHRwOi8vZ29vLmdsLzdBSnpiTCAtLT5cclxuZXhwb3J0IGZ1bmN0aW9uIFNwaW5uZXIoeyBjb2xvciwgLi4ucmVzdCB9OiBhbnkpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB3aWR0aD1cIjM4XCIgaGVpZ2h0PVwiMzhcIiB2aWV3Qm94PVwiMCAwIDM4IDM4XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHN0cm9rZT17Y29sb3J9IHsuLi5yZXN0fT5cclxuICAgICAgPGcgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cclxuICAgICAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMSAxKVwiIHN0cm9rZVdpZHRoPVwiMlwiPlxyXG4gICAgICAgICAgPGNpcmNsZSBzdHJva2VPcGFjaXR5PVwiLjVcIiBjeD1cIjE4XCIgY3k9XCIxOFwiIHI9XCIxOFwiIC8+XHJcbiAgICAgICAgICA8cGF0aCBkPVwiTTM2IDE4YzAtOS45NC04LjA2LTE4LTE4LTE4XCI+XHJcbiAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtXHJcbiAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInJvdGF0ZVwiXHJcbiAgICAgICAgICAgICAgZnJvbT1cIjAgMTggMThcIlxyXG4gICAgICAgICAgICAgIHRvPVwiMzYwIDE4IDE4XCJcclxuICAgICAgICAgICAgICBkdXI9XCIxc1wiXHJcbiAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvcGF0aD5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIsIHVzZVdlYjNSZWFjdCwgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xyXG5pbXBvcnQge1xyXG4gIE5vRXRoZXJldW1Qcm92aWRlckVycm9yLFxyXG4gIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZFxyXG59IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QgfSBmcm9tICdAd2ViMy1yZWFjdC93YWxsZXRjb25uZWN0LWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckZyYW1lIH0gZnJvbSAnQHdlYjMtcmVhY3QvZnJhbWUtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9wcm92aWRlcnMnXHJcbmltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvdW5pdHMnXHJcblxyXG5pbXBvcnQgeyB1c2VFYWdlckNvbm5lY3QsIHVzZUluYWN0aXZlTGlzdGVuZXIgfSBmcm9tICcuLi9ob29rcydcclxuaW1wb3J0IHtcclxuICBpbmplY3RlZCxcclxuICBuZXR3b3JrLFxyXG4gIHdhbGxldGNvbm5lY3QsXHJcbiAgd2FsbGV0bGluayxcclxuICBsZWRnZXIsXHJcbiAgdHJlem9yLFxyXG4gIGxhdHRpY2UsXHJcbiAgZnJhbWUsXHJcbiAgYXV0aGVyZXVtLFxyXG4gIGZvcnRtYXRpYyxcclxuICBtYWdpYyxcclxuICBwb3J0aXMsXHJcbiAgdG9ydXNcclxufSBmcm9tICcuLi9jb25uZWN0b3JzJ1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAnLi9TcGlubmVyJ1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXYWxsZXQoe29wZW5XYWxsZXRzfSkge1xyXG5cclxuICBlbnVtIENvbm5lY3Rvck5hbWVzIHtcclxuICAgIEluamVjdGVkID0gJ0luamVjdGVkJyxcclxuICAgIE5ldHdvcmsgPSAnTmV0d29yaycsXHJcbiAgICBXYWxsZXRDb25uZWN0ID0gJ1dhbGxldENvbm5lY3QnLFxyXG4gICAgV2FsbGV0TGluayA9ICdXYWxsZXRMaW5rJyxcclxuICAgIExlZGdlciA9ICdMZWRnZXInLFxyXG4gICAgVHJlem9yID0gJ1RyZXpvcicsXHJcbiAgICBMYXR0aWNlID0gJ0xhdHRpY2UnLFxyXG4gICAgRnJhbWUgPSAnRnJhbWUnLFxyXG4gICAgQXV0aGVyZXVtID0gJ0F1dGhlcmV1bScsXHJcbiAgICBGb3J0bWF0aWMgPSAnRm9ydG1hdGljJyxcclxuICAgIE1hZ2ljID0gJ01hZ2ljJyxcclxuICAgIFBvcnRpcyA9ICdQb3J0aXMnLFxyXG4gICAgVG9ydXMgPSAnVG9ydXMnXHJcbiAgfVxyXG5cclxuY29uc3QgY29ubmVjdG9yc0J5TmFtZTogeyBbY29ubmVjdG9yTmFtZSBpbiBDb25uZWN0b3JOYW1lc106IGFueSB9ID0ge1xyXG4gIFtDb25uZWN0b3JOYW1lcy5JbmplY3RlZF06IGluamVjdGVkLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5OZXR3b3JrXTogbmV0d29yayxcclxuICBbQ29ubmVjdG9yTmFtZXMuV2FsbGV0Q29ubmVjdF06IHdhbGxldGNvbm5lY3QsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLldhbGxldExpbmtdOiB3YWxsZXRsaW5rLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5MZWRnZXJdOiBsZWRnZXIsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLlRyZXpvcl06IHRyZXpvcixcclxuICBbQ29ubmVjdG9yTmFtZXMuTGF0dGljZV06IGxhdHRpY2UsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkZyYW1lXTogZnJhbWUsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkF1dGhlcmV1bV06IGF1dGhlcmV1bSxcclxuICBbQ29ubmVjdG9yTmFtZXMuRm9ydG1hdGljXTogZm9ydG1hdGljLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5NYWdpY106IG1hZ2ljLFxyXG4gIFtDb25uZWN0b3JOYW1lcy5Qb3J0aXNdOiBwb3J0aXMsXHJcbiAgW0Nvbm5lY3Rvck5hbWVzLlRvcnVzXTogdG9ydXNcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKGVycm9yOiBFcnJvcikge1xyXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIE5vRXRoZXJldW1Qcm92aWRlckVycm9yKSB7XHJcbiAgICByZXR1cm4gJ05vIEV0aGVyZXVtIGJyb3dzZXIgZXh0ZW5zaW9uIGRldGVjdGVkLCBpbnN0YWxsIE1ldGFNYXNrIG9uIGRlc2t0b3Agb3IgdmlzaXQgZnJvbSBhIGRBcHAgYnJvd3NlciBvbiBtb2JpbGUuJ1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBVbnN1cHBvcnRlZENoYWluSWRFcnJvcikge1xyXG4gICAgcmV0dXJuIFwiWW91J3JlIGNvbm5lY3RlZCB0byBhbiB1bnN1cHBvcnRlZCBuZXR3b3JrLlwiXHJcbiAgfSBlbHNlIGlmIChcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9ySW5qZWN0ZWQgfHxcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCB8fFxyXG4gICAgZXJyb3IgaW5zdGFuY2VvZiBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZVxyXG4gICkge1xyXG4gICAgcmV0dXJuICdQbGVhc2UgYXV0aG9yaXplIHRoaXMgd2Vic2l0ZSB0byBhY2Nlc3MgeW91ciBFdGhlcmV1bSBhY2NvdW50LidcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIHJldHVybiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4gQ2hlY2sgdGhlIGNvbnNvbGUgZm9yIG1vcmUgZGV0YWlscy4nXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMaWJyYXJ5KHByb3ZpZGVyOiBhbnkpOiBXZWIzUHJvdmlkZXIge1xyXG4gIGNvbnN0IGxpYnJhcnkgPSBuZXcgV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKVxyXG4gIGxpYnJhcnkucG9sbGluZ0ludGVydmFsID0gMTIwMDBcclxuICByZXR1cm4gbGlicmFyeVxyXG59XHJcblxyXG5jb25zdCBjb250ZXh0ID0gdXNlV2ViM1JlYWN0PFdlYjNQcm92aWRlcj4oKVxyXG5jb25zdCB7IGNvbm5lY3RvciwgbGlicmFyeSwgY2hhaW5JZCwgYWNjb3VudCwgYWN0aXZhdGUsIGRlYWN0aXZhdGUsIGFjdGl2ZSwgZXJyb3IgfSA9IGNvbnRleHRcclxuXHJcbi8vIGhhbmRsZSBsb2dpYyB0byByZWNvZ25pemUgdGhlIGNvbm5lY3RvciBjdXJyZW50bHkgYmVpbmcgYWN0aXZhdGVkXHJcbmNvbnN0IFthY3RpdmF0aW5nQ29ubmVjdG9yLCBzZXRBY3RpdmF0aW5nQ29ubmVjdG9yXSA9IFJlYWN0LnVzZVN0YXRlPGFueT4oKVxyXG5SZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGlmIChhY3RpdmF0aW5nQ29ubmVjdG9yICYmIGFjdGl2YXRpbmdDb25uZWN0b3IgPT09IGNvbm5lY3Rvcikge1xyXG4gICAgc2V0QWN0aXZhdGluZ0Nvbm5lY3Rvcih1bmRlZmluZWQpXHJcbiAgfVxyXG59LCBbYWN0aXZhdGluZ0Nvbm5lY3RvciwgY29ubmVjdG9yXSlcclxuXHJcbi8vIGhhbmRsZSBsb2dpYyB0byBlYWdlcmx5IGNvbm5lY3QgdG8gdGhlIGluamVjdGVkIGV0aGVyZXVtIHByb3ZpZGVyLCBpZiBpdCBleGlzdHMgYW5kIGhhcyBncmFudGVkIGFjY2VzcyBhbHJlYWR5XHJcbmNvbnN0IHRyaWVkRWFnZXIgPSB1c2VFYWdlckNvbm5lY3QoKVxyXG5cclxuLy8gaGFuZGxlIGxvZ2ljIHRvIGNvbm5lY3QgaW4gcmVhY3Rpb24gdG8gY2VydGFpbiBldmVudHMgb24gdGhlIGluamVjdGVkIGV0aGVyZXVtIHByb3ZpZGVyLCBpZiBpdCBleGlzdHNcclxudXNlSW5hY3RpdmVMaXN0ZW5lcighdHJpZWRFYWdlciB8fCAhIWFjdGl2YXRpbmdDb25uZWN0b3IpXHJcbmlmKG9wZW5XYWxsZXQgPT09IHRydWUpe1xyXG5yZXR1cm4gKFxyXG4gIDw+XHJcbiAgICA8aHIgc3R5bGU9e3sgbWFyZ2luOiAnMnJlbScgfX0gLz5cclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgZ3JpZEdhcDogJzFyZW0nLFxyXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJyxcclxuICAgICAgICBtYXhXaWR0aDogJzIwcmVtJyxcclxuICAgICAgICBtYXJnaW46ICdhdXRvJ1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7T2JqZWN0LmtleXMoY29ubmVjdG9yc0J5TmFtZSkubWFwKG5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb25uZWN0b3IgPSBjb25uZWN0b3JzQnlOYW1lW25hbWVdXHJcbiAgICAgICAgY29uc3QgYWN0aXZhdGluZyA9IGN1cnJlbnRDb25uZWN0b3IgPT09IGFjdGl2YXRpbmdDb25uZWN0b3JcclxuICAgICAgICBjb25zdCBjb25uZWN0ZWQgPSBjdXJyZW50Q29ubmVjdG9yID09PSBjb25uZWN0b3JcclxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9ICF0cmllZEVhZ2VyIHx8ICEhYWN0aXZhdGluZ0Nvbm5lY3RvciB8fCBjb25uZWN0ZWQgfHwgISFlcnJvclxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhY3RpdmF0aW5nID8gJ29yYW5nZScgOiBjb25uZWN0ZWQgPyAnZ3JlZW4nIDogJ3Vuc2V0JyxcclxuICAgICAgICAgICAgICBjdXJzb3I6IGRpc2FibGVkID8gJ3Vuc2V0JyA6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgIGtleT17bmFtZX1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldEFjdGl2YXRpbmdDb25uZWN0b3IoY3VycmVudENvbm5lY3RvcilcclxuICAgICAgICAgICAgICBhY3RpdmF0ZShjb25uZWN0b3JzQnlOYW1lW25hbWVdKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgdG9wOiAnMCcsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAnMCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwIDAgMCAxcmVtJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7YWN0aXZhdGluZyAmJiA8U3Bpbm5lciBjb2xvcj17J2JsYWNrJ30gc3R5bGU9e3sgaGVpZ2h0OiAnMjUlJywgbWFyZ2luTGVmdDogJy0xcmVtJyB9fSAvPn1cclxuICAgICAgICAgICAgICB7Y29ubmVjdGVkICYmIChcclxuICAgICAgICAgICAgICAgIDxzcGFuIHJvbGU9XCJpbWdcIiBhcmlhLWxhYmVsPVwiY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgICAg4pyFXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtuYW1lfVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgeyhhY3RpdmUgfHwgZXJyb3IpICYmIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgbWFyZ2luVG9wOiAnMnJlbScsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBkZWFjdGl2YXRlKClcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRGVhY3RpdmF0ZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG5cclxuICAgICAgeyEhZXJyb3IgJiYgPGg0IHN0eWxlPXt7IG1hcmdpblRvcDogJzFyZW0nLCBtYXJnaW5Cb3R0b206ICcwJyB9fT57Z2V0RXJyb3JNZXNzYWdlKGVycm9yKX08L2g0Pn1cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxociBzdHlsZT17eyBtYXJnaW46ICcycmVtJyB9fSAvPlxyXG5cclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgZ3JpZEdhcDogJzFyZW0nLFxyXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdmaXQtY29udGVudCcsXHJcbiAgICAgICAgbWF4V2lkdGg6ICcyMHJlbScsXHJcbiAgICAgICAgbWFyZ2luOiAnYXV0bydcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgeyEhKGxpYnJhcnkgJiYgYWNjb3VudCkgJiYgKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGxpYnJhcnlcclxuICAgICAgICAgICAgICAuZ2V0U2lnbmVyKGFjY291bnQpXHJcbiAgICAgICAgICAgICAgLnNpZ25NZXNzYWdlKCfwn5GLJylcclxuICAgICAgICAgICAgICAudGhlbigoc2lnbmF0dXJlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5hbGVydChgU3VjY2VzcyFcXG5cXG4ke3NpZ25hdHVyZX1gKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuYWxlcnQoJ0ZhaWx1cmUhJyArIChlcnJvciAmJiBlcnJvci5tZXNzYWdlID8gYFxcblxcbiR7ZXJyb3IubWVzc2FnZX1gIDogJycpKVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFNpZ24gTWVzc2FnZVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICB7ISEoY29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLk5ldHdvcmtdICYmIGNoYWluSWQpICYmIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNoYW5nZUNoYWluSWQoY2hhaW5JZCA9PT0gMSA/IDQgOiAxKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBTd2l0Y2ggTmV0d29ya3NcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAge2Nvbm5lY3RvciA9PT0gY29ubmVjdG9yc0J5TmFtZVtDb25uZWN0b3JOYW1lcy5XYWxsZXRDb25uZWN0XSAmJiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgaGVpZ2h0OiAnM3JlbScsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jbG9zZSgpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEtpbGwgV2FsbGV0Q29ubmVjdCBTZXNzaW9uXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuV2FsbGV0TGlua10gJiYgKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2xvc2UoKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBLaWxsIFdhbGxldExpbmsgU2Vzc2lvblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApfVxyXG4gICAgICB7Y29ubmVjdG9yID09PSBjb25uZWN0b3JzQnlOYW1lW0Nvbm5lY3Rvck5hbWVzLkZvcnRtYXRpY10gJiYgKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxcmVtJyxcclxuICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIDsoY29ubmVjdG9yIGFzIGFueSkuY2xvc2UoKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBLaWxsIEZvcnRtYXRpYyBTZXNzaW9uXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuTWFnaWNdICYmIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgS2lsbCBNYWdpYyBTZXNzaW9uXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuUG9ydGlzXSAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtjaGFpbklkICE9PSB1bmRlZmluZWQgJiYgKFxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgOyhjb25uZWN0b3IgYXMgYW55KS5jaGFuZ2VOZXR3b3JrKGNoYWluSWQgPT09IDEgPyAxMDAgOiAxKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBTd2l0Y2ggTmV0d29ya3NcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGhlaWdodDogJzNyZW0nLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzFyZW0nLFxyXG4gICAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgS2lsbCBQb3J0aXMgU2Vzc2lvblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtjb25uZWN0b3IgPT09IGNvbm5lY3RvcnNCeU5hbWVbQ29ubmVjdG9yTmFtZXMuVG9ydXNdICYmIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICA7KGNvbm5lY3RvciBhcyBhbnkpLmNsb3NlKClcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgS2lsbCBUb3J1cyBTZXNzaW9uXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICA8Lz5cclxuKVxyXG59XHJcblxyXG5yZXR1cm4oPGRpdiAvPilcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3InXHJcbmltcG9ydCB7IE5ldHdvcmtDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9uZXR3b3JrLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgV2FsbGV0Q29ubmVjdENvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBXYWxsZXRMaW5rQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3Qvd2FsbGV0bGluay1jb25uZWN0b3InXHJcbmltcG9ydCB7IExlZGdlckNvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2xlZGdlci1jb25uZWN0b3InXHJcbmltcG9ydCB7IFRyZXpvckNvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L3RyZXpvci1jb25uZWN0b3InXHJcbmltcG9ydCB7IExhdHRpY2VDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9sYXR0aWNlLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgRnJhbWVDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9mcmFtZS1jb25uZWN0b3InXHJcbmltcG9ydCB7IEF1dGhlcmV1bUNvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2F1dGhlcmV1bS1jb25uZWN0b3InXHJcbmltcG9ydCB7IEZvcnRtYXRpY0Nvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2ZvcnRtYXRpYy1jb25uZWN0b3InXHJcbmltcG9ydCB7IE1hZ2ljQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvbWFnaWMtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBQb3J0aXNDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9wb3J0aXMtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBUb3J1c0Nvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L3RvcnVzLWNvbm5lY3RvcidcclxuXHJcbmNvbnN0IFBPTExJTkdfSU5URVJWQUwgPSAxMjAwMFxyXG5jb25zdCBSUENfVVJMUzogeyBbY2hhaW5JZDogbnVtYmVyXTogc3RyaW5nIH0gPSB7XHJcbiAgMTogcHJvY2Vzcy5lbnYuUlBDX1VSTF8xIGFzIHN0cmluZyxcclxuICA0OiBwcm9jZXNzLmVudi5SUENfVVJMXzQgYXMgc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbmplY3RlZCA9IG5ldyBJbmplY3RlZENvbm5lY3Rvcih7IHN1cHBvcnRlZENoYWluSWRzOiBbMSwgMywgNCwgNSwgNDJdIH0pXHJcblxyXG5leHBvcnQgY29uc3QgbmV0d29yayA9IG5ldyBOZXR3b3JrQ29ubmVjdG9yKHtcclxuICB1cmxzOiB7IDE6IFJQQ19VUkxTWzFdLCA0OiBSUENfVVJMU1s0XSB9LFxyXG4gIGRlZmF1bHRDaGFpbklkOiAxXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qgd2FsbGV0Y29ubmVjdCA9IG5ldyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yKHtcclxuICBycGM6IHsgMTogUlBDX1VSTFNbMV0gfSxcclxuICBxcmNvZGU6IHRydWVcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB3YWxsZXRsaW5rID0gbmV3IFdhbGxldExpbmtDb25uZWN0b3Ioe1xyXG4gIHVybDogUlBDX1VSTFNbMV0sXHJcbiAgYXBwTmFtZTogJ3dlYjMtcmVhY3QgZXhhbXBsZScsXHJcbiAgc3VwcG9ydGVkQ2hhaW5JZHM6IFsxLCAzLCA0LCA1LCA0MiwgMTAsIDEzNywgNjksIDQyMCwgODAwMDFdXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbGVkZ2VyID0gbmV3IExlZGdlckNvbm5lY3Rvcih7IGNoYWluSWQ6IDEsIHVybDogUlBDX1VSTFNbMV0sIHBvbGxpbmdJbnRlcnZhbDogUE9MTElOR19JTlRFUlZBTCB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IHRyZXpvciA9IG5ldyBUcmV6b3JDb25uZWN0b3Ioe1xyXG4gIGNoYWluSWQ6IDEsXHJcbiAgdXJsOiBSUENfVVJMU1sxXSxcclxuICBwb2xsaW5nSW50ZXJ2YWw6IFBPTExJTkdfSU5URVJWQUwsXHJcbiAgbWFuaWZlc3RFbWFpbDogJ2R1bW15QGFiYy54eXonLFxyXG4gIG1hbmlmZXN0QXBwVXJsOiAnaHR0cDovL2xvY2FsaG9zdDoxMjM0J1xyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGxhdHRpY2UgPSBuZXcgTGF0dGljZUNvbm5lY3Rvcih7XHJcbiAgY2hhaW5JZDogNCxcclxuICBhcHBOYW1lOiAnd2ViMy1yZWFjdCcsXHJcbiAgdXJsOiBSUENfVVJMU1s0XVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGZyYW1lID0gbmV3IEZyYW1lQ29ubmVjdG9yKHsgc3VwcG9ydGVkQ2hhaW5JZHM6IFsxXSB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhlcmV1bSA9IG5ldyBBdXRoZXJldW1Db25uZWN0b3IoeyBjaGFpbklkOiA0MiB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcnRtYXRpYyA9IG5ldyBGb3J0bWF0aWNDb25uZWN0b3IoeyBhcGlLZXk6IHByb2Nlc3MuZW52LkZPUlRNQVRJQ19BUElfS0VZIGFzIHN0cmluZywgY2hhaW5JZDogNCB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IG1hZ2ljID0gbmV3IE1hZ2ljQ29ubmVjdG9yKHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk1BR0lDX0FQSV9LRVkgYXMgc3RyaW5nLFxyXG4gIGNoYWluSWQ6IDQsXHJcbiAgZW1haWw6ICdoZWxsb0BleGFtcGxlLm9yZydcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBwb3J0aXMgPSBuZXcgUG9ydGlzQ29ubmVjdG9yKHsgZEFwcElkOiBwcm9jZXNzLmVudi5QT1JUSVNfREFQUF9JRCBhcyBzdHJpbmcsIG5ldHdvcmtzOiBbMSwgMTAwXSB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvcnVzID0gbmV3IFRvcnVzQ29ubmVjdG9yKHsgY2hhaW5JZDogMSB9KVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXHJcblxyXG5pbXBvcnQgeyBpbmplY3RlZCB9IGZyb20gJy4vY29ubmVjdG9ycydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VFYWdlckNvbm5lY3QoKSB7XHJcbiAgY29uc3QgeyBhY3RpdmF0ZSwgYWN0aXZlIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICBjb25zdCBbdHJpZWQsIHNldFRyaWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5qZWN0ZWQuaXNBdXRob3JpemVkKCkudGhlbigoaXNBdXRob3JpemVkOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGlmIChpc0F1dGhvcml6ZWQpIHtcclxuICAgICAgICBhY3RpdmF0ZShpbmplY3RlZCwgdW5kZWZpbmVkLCB0cnVlKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRUcmllZCh0cnVlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VHJpZWQodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LCBbXSkgLy8gaW50ZW50aW9uYWxseSBvbmx5IHJ1bm5pbmcgb24gbW91bnQgKG1ha2Ugc3VyZSBpdCdzIG9ubHkgbW91bnRlZCBvbmNlIDopKVxyXG5cclxuICAvLyBpZiB0aGUgY29ubmVjdGlvbiB3b3JrZWQsIHdhaXQgdW50aWwgd2UgZ2V0IGNvbmZpcm1hdGlvbiBvZiB0aGF0IHRvIGZsaXAgdGhlIGZsYWdcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF0cmllZCAmJiBhY3RpdmUpIHtcclxuICAgICAgc2V0VHJpZWQodHJ1ZSlcclxuICAgIH1cclxuICB9LCBbdHJpZWQsIGFjdGl2ZV0pXHJcblxyXG4gIHJldHVybiB0cmllZFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlSW5hY3RpdmVMaXN0ZW5lcihzdXBwcmVzczogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgY29uc3QgeyBhY3RpdmUsIGVycm9yLCBhY3RpdmF0ZSB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgdXNlRWZmZWN0KCgpOiBhbnkgPT4ge1xyXG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93IGFzIGFueVxyXG4gICAgaWYgKGV0aGVyZXVtICYmIGV0aGVyZXVtLm9uICYmICFhY3RpdmUgJiYgIWVycm9yICYmICFzdXBwcmVzcykge1xyXG4gICAgICBjb25zdCBoYW5kbGVDb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGFuZGxpbmcgJ2Nvbm5lY3QnIGV2ZW50XCIpXHJcbiAgICAgICAgYWN0aXZhdGUoaW5qZWN0ZWQpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaGFuZGxlQ2hhaW5DaGFuZ2VkID0gKGNoYWluSWQ6IHN0cmluZyB8IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGFuZGxpbmcgJ2NoYWluQ2hhbmdlZCcgZXZlbnQgd2l0aCBwYXlsb2FkXCIsIGNoYWluSWQpXHJcbiAgICAgICAgYWN0aXZhdGUoaW5qZWN0ZWQpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaGFuZGxlQWNjb3VudHNDaGFuZ2VkID0gKGFjY291bnRzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGFuZGxpbmcgJ2FjY291bnRzQ2hhbmdlZCcgZXZlbnQgd2l0aCBwYXlsb2FkXCIsIGFjY291bnRzKVxyXG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBhY3RpdmF0ZShpbmplY3RlZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaGFuZGxlTmV0d29ya0NoYW5nZWQgPSAobmV0d29ya0lkOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nICduZXR3b3JrQ2hhbmdlZCcgZXZlbnQgd2l0aCBwYXlsb2FkXCIsIG5ldHdvcmtJZClcclxuICAgICAgICBhY3RpdmF0ZShpbmplY3RlZClcclxuICAgICAgfVxyXG5cclxuICAgICAgZXRoZXJldW0ub24oJ2Nvbm5lY3QnLCBoYW5kbGVDb25uZWN0KVxyXG4gICAgICBldGhlcmV1bS5vbignY2hhaW5DaGFuZ2VkJywgaGFuZGxlQ2hhaW5DaGFuZ2VkKVxyXG4gICAgICBldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywgaGFuZGxlQWNjb3VudHNDaGFuZ2VkKVxyXG4gICAgICBldGhlcmV1bS5vbignbmV0d29ya0NoYW5nZWQnLCBoYW5kbGVOZXR3b3JrQ2hhbmdlZClcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKSB7XHJcbiAgICAgICAgICBldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignY29ubmVjdCcsIGhhbmRsZUNvbm5lY3QpXHJcbiAgICAgICAgICBldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignY2hhaW5DaGFuZ2VkJywgaGFuZGxlQ2hhaW5DaGFuZ2VkKVxyXG4gICAgICAgICAgZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2FjY291bnRzQ2hhbmdlZCcsIGhhbmRsZUFjY291bnRzQ2hhbmdlZClcclxuICAgICAgICAgIGV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCduZXR3b3JrQ2hhbmdlZCcsIGhhbmRsZU5ldHdvcmtDaGFuZ2VkKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFthY3RpdmUsIGVycm9yLCBzdXBwcmVzcywgYWN0aXZhdGVdKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBXZWIzUmVhY3RQcm92aWRlciwgdXNlV2ViM1JlYWN0LCBVbnN1cHBvcnRlZENoYWluSWRFcnJvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXHJcbmltcG9ydCB7XHJcbiAgTm9FdGhlcmV1bVByb3ZpZGVyRXJyb3IsXHJcbiAgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckluamVjdGVkXHJcbn0gZnJvbSAnQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3IgYXMgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yRnJhbWUgfSBmcm9tICdAd2ViMy1yZWFjdC9mcmFtZS1jb25uZWN0b3InXHJcbmltcG9ydCB7IFdlYjNQcm92aWRlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3Byb3ZpZGVycydcclxuaW1wb3J0IHsgZm9ybWF0RXRoZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC91bml0cydcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0NvbXBvbmVudHMvSGVhZGVyJ1xyXG5pbXBvcnQgQ2hhaW5JZCBmcm9tICcuLi9Db21wb25lbnRzL0NoYWluSWQnXHJcbmltcG9ydCBXYWxsZXRzIGZyb20gJy4uL0NvbXBvbmVudHMvV2FsbGV0cydcclxuaW1wb3J0IEFjY291bnQgZnJvbSAnLi4vQ29tcG9uZW50cy9BY2NvdW50J1xyXG5pbXBvcnQgdXNlV2FsbGV0IGZyb20gJy4uL0NvbXBvbmVudHMvSG9va3MvdXNlV2FsbGV0JztcclxuXHJcbmltcG9ydCB7IHVzZUVhZ2VyQ29ubmVjdCwgdXNlSW5hY3RpdmVMaXN0ZW5lciB9IGZyb20gJy4uL2hvb2tzJ1xyXG5pbXBvcnQge1xyXG4gIGluamVjdGVkLFxyXG4gIG5ldHdvcmssXHJcbiAgd2FsbGV0Y29ubmVjdCxcclxuICB3YWxsZXRsaW5rLFxyXG4gIGxlZGdlcixcclxuICB0cmV6b3IsXHJcbiAgbGF0dGljZSxcclxuICBmcmFtZSxcclxuICBhdXRoZXJldW0sXHJcbiAgZm9ydG1hdGljLFxyXG4gIG1hZ2ljLFxyXG4gIHBvcnRpcyxcclxuICB0b3J1c1xyXG59IGZyb20gJy4uL2Nvbm5lY3RvcnMnXHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NwaW5uZXInXHJcblxyXG5mdW5jdGlvbiBnZXRMaWJyYXJ5KHByb3ZpZGVyOiBhbnkpOiBXZWIzUHJvdmlkZXIge1xyXG4gIGNvbnN0IGxpYnJhcnkgPSBuZXcgV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKVxyXG4gIGxpYnJhcnkucG9sbGluZ0ludGVydmFsID0gMTIwMDBcclxuICByZXR1cm4gbGlicmFyeVxyXG59XHJcblxyXG5jb25zdCB3YWxsZXRzID0gdXNlV2FsbGV0KCk7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdlYjNSZWFjdFByb3ZpZGVyIGdldExpYnJhcnk9e2dldExpYnJhcnl9PlxyXG4gICAgICA8SGVhZGVyIHsuLi53YWxsZXRzfSAvPlxyXG4gICAgICA8V2FsbGV0cyB7Li4ud2FsbGV0c30gLz5cclxuICAgIDwvV2ViM1JlYWN0UHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZXRoZXJzcHJvamVjdC9wcm92aWRlcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50QmFsYW5jZVdhbGxldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2ViMy1yZWFjdC9hdXRoZXJldW0tY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvZm9ydG1hdGljLWNvbm5lY3RvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2ViMy1yZWFjdC9mcmFtZS1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L2xhdHRpY2UtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L2xlZGdlci1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvbWFnaWMtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L25ldHdvcmstY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L3BvcnRpcy1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvdG9ydXMtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L3RyZXpvci1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdC1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3Qvd2FsbGV0bGluay1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==