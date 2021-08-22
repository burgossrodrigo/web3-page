(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[5],{

/***/ "./node_modules/@magic-sdk/provider/dist/module/core/json-rpc.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/core/json-rpc.js ***!
  \***********************************************************************/
/*! exports provided: standardizeJsonRpcRequestPayload, createJsonRpcRequestPayload, JsonRpcResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "standardizeJsonRpcRequestPayload", function() { return standardizeJsonRpcRequestPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createJsonRpcRequestPayload", function() { return createJsonRpcRequestPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonRpcResponse", function() { return JsonRpcResponse; });
/* harmony import */ var _util_type_guards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/type-guards */ "./node_modules/@magic-sdk/provider/dist/module/util/type-guards.js");
/* harmony import */ var _util_get_payload_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/get-payload-id */ "./node_modules/@magic-sdk/provider/dist/module/util/get-payload-id.js");
/* eslint-disable no-underscore-dangle, no-param-reassign */


var payloadPreprocessedSymbol = Symbol('Payload pre-processed by Magic SDK');
/**
 * To avoid "pre-processing" a payload more than once (and needlessly
 * incrementing our payload ID generator), we attach a symbol to detect a
 * payloads we've already visited.
 */
function markPayloadAsPreprocessed(payload) {
    Object.defineProperty(payload, payloadPreprocessedSymbol, {
        value: true,
        enumerable: false,
    });
    return payload;
}
/**
 * Returns `true` if the payload has been visited by our "pre-processing," in
 * `standardizeJsonRpcRequestPayload(...)`.
 */
function isPayloadPreprocessed(payload) {
    return !!payload[payloadPreprocessedSymbol];
}
/**
 * Returns a full `JsonRpcRequestPayload` from a potentially incomplete payload
 * object. This method mutates the given `payload` to preserve compatibility
 * with external libraries that perform their own `JsonRpcRequestPayload.id`
 * check to associate responses (such as `web3`).
 *
 * This function is no-op if the payload has already been processed before.
 */
function standardizeJsonRpcRequestPayload(payload) {
    var _a, _b, _c;
    if (!isPayloadPreprocessed(payload)) {
        payload.jsonrpc = (_a = payload.jsonrpc) !== null && _a !== void 0 ? _a : '2.0';
        payload.id = Object(_util_get_payload_id__WEBPACK_IMPORTED_MODULE_1__["getPayloadId"])();
        payload.method = (_b = payload.method) !== null && _b !== void 0 ? _b : 'noop';
        payload.params = (_c = payload.params) !== null && _c !== void 0 ? _c : [];
        markPayloadAsPreprocessed(payload);
    }
    return payload;
}
/**
 * Build a valid JSON RPC payload for emitting to the Magic SDK iframe relayer.
 */
function createJsonRpcRequestPayload(method, params) {
    if (params === void 0) { params = []; }
    return markPayloadAsPreprocessed({
        params: params,
        method: method,
        jsonrpc: '2.0',
        id: Object(_util_get_payload_id__WEBPACK_IMPORTED_MODULE_1__["getPayloadId"])(),
    });
}
/**
 * Formats and standardizes a JSON RPC 2.0 response from a number of potential
 * sources.
 */
var JsonRpcResponse = /** @class */ (function () {
    function JsonRpcResponse(responseOrPayload) {
        if (responseOrPayload instanceof JsonRpcResponse) {
            this._jsonrpc = responseOrPayload.payload.jsonrpc;
            this._id = responseOrPayload.payload.id;
            this._result = responseOrPayload.payload.result;
            this._error = responseOrPayload.payload.error;
        }
        else if (Object(_util_type_guards__WEBPACK_IMPORTED_MODULE_0__["isJsonRpcResponsePayload"])(responseOrPayload)) {
            this._jsonrpc = responseOrPayload.jsonrpc;
            this._id = responseOrPayload.id;
            this._result = responseOrPayload.result;
            this._error = responseOrPayload.error;
        }
        else {
            this._jsonrpc = responseOrPayload.jsonrpc;
            this._id = responseOrPayload.id;
            this._result = undefined;
            this._error = undefined;
        }
    }
    JsonRpcResponse.prototype.applyError = function (error) {
        this._error = error;
        return this;
    };
    JsonRpcResponse.prototype.applyResult = function (result) {
        this._result = result;
        return this;
    };
    Object.defineProperty(JsonRpcResponse.prototype, "hasError", {
        get: function () {
            return typeof this._error !== 'undefined' && this._error !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonRpcResponse.prototype, "hasResult", {
        get: function () {
            return typeof this._result !== 'undefined';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JsonRpcResponse.prototype, "payload", {
        get: function () {
            return {
                jsonrpc: this._jsonrpc,
                id: this._id,
                result: this._result,
                error: this._error,
            };
        },
        enumerable: true,
        configurable: true
    });
    return JsonRpcResponse;
}());

//# sourceMappingURL=json-rpc.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/core/payload-transport.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/core/payload-transport.js ***!
  \********************************************************************************/
/*! exports provided: PayloadTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayloadTransport", function() { return PayloadTransport; });
/* harmony import */ var _magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @magic-sdk/types */ "./node_modules/@magic-sdk/types/dist/module/index.js");
/* harmony import */ var _json_rpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json-rpc */ "./node_modules/@magic-sdk/provider/dist/module/core/json-rpc.js");
/* harmony import */ var _util_promise_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/promise-tools */ "./node_modules/@magic-sdk/provider/dist/module/util/promise-tools.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Get the originating payload from a batch request using the specified `id`.
 */
function getRequestPayloadFromBatch(requestPayload, id) {
    return id && Array.isArray(requestPayload)
        ? requestPayload.find(function (p) { return p.id === id; })
        : requestPayload;
}
/**
 * Ensures the incoming response follows the expected schema and parses for a
 * JSON RPC payload ID.
 */
function standardizeResponse(requestPayload, event) {
    var _a;
    var id = (_a = event.data.response) === null || _a === void 0 ? void 0 : _a.id;
    var requestPayloadResolved = getRequestPayloadFromBatch(requestPayload, id);
    if (id && requestPayloadResolved) {
        // Build a standardized response object
        var response = new _json_rpc__WEBPACK_IMPORTED_MODULE_1__["JsonRpcResponse"](requestPayloadResolved)
            .applyResult(event.data.response.result)
            .applyError(event.data.response.error);
        return { id: id, response: response };
    }
    return {};
}
var PayloadTransport = /** @class */ (function () {
    /**
     * Create an instance of `PayloadTransport`
     *
     * @param overlay - The `IframeController` context to which the event will be
     * posted.
     * @param endpoint - The URL for the relevant iframe context.
     * @param encodedQueryParams - The unique, encoded query parameters for the
     * relevant iframe context.
     */
    function PayloadTransport(endpoint, encodedQueryParams) {
        this.endpoint = endpoint;
        this.encodedQueryParams = encodedQueryParams;
        this.messageHandlers = new Set();
        this.init();
    }
    PayloadTransport.prototype.post = function (overlay, msgType, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, Object(_util_promise_tools__WEBPACK_IMPORTED_MODULE_2__["createAutoCatchingPromise"])(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var batchData, batchIds, acknowledgeResponse, removeResponseListener;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, overlay.ready];
                                case 1:
                                    _a.sent();
                                    batchData = [];
                                    batchIds = Array.isArray(payload) ? payload.map(function (p) { return p.id; }) : [];
                                    return [4 /*yield*/, overlay.postMessage({ msgType: msgType + "-" + this.encodedQueryParams, payload: payload })];
                                case 2:
                                    _a.sent();
                                    acknowledgeResponse = function (removeEventListener) { return function (event) {
                                        var _a = standardizeResponse(payload, event), id = _a.id, response = _a.response;
                                        if (id && response && Array.isArray(payload) && batchIds.includes(id)) {
                                            batchData.push(response);
                                            // For batch requests, we wait for all responses before resolving.
                                            if (batchData.length === payload.length) {
                                                removeEventListener();
                                                resolve(batchData);
                                            }
                                        }
                                        else if (id && response && !Array.isArray(payload) && id === payload.id) {
                                            removeEventListener();
                                            resolve(response);
                                        }
                                    }; };
                                    removeResponseListener = this.on(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicIncomingWindowMessage"].MAGIC_HANDLE_RESPONSE, acknowledgeResponse(function () { return removeResponseListener(); }));
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Listen for events received with the given `msgType`.
     *
     * @param msgType - The `msgType` encoded with the event data.
     * @param handler - A handler function to execute on each event received.
     * @return A `void` function to remove the attached event.
     */
    PayloadTransport.prototype.on = function (msgType, handler) {
        var _this = this;
        var boundHandler = handler.bind(window);
        // We cannot effectively cover this function because it never gets reference
        // by value. The functionality of this callback is tested within
        // `initMessageListener`.
        /* istanbul ignore next */
        var listener = function (event) {
            if (event.data.msgType === msgType + "-" + _this.encodedQueryParams)
                boundHandler(event);
        };
        this.messageHandlers.add(listener);
        return function () { return _this.messageHandlers.delete(listener); };
    };
    return PayloadTransport;
}());

//# sourceMappingURL=payload-transport.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/core/sdk-environment.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/core/sdk-environment.js ***!
  \******************************************************************************/
/*! exports provided: SDKEnvironment, createSDK, envNameToNpmName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKEnvironment", function() { return SDKEnvironment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSDK", function() { return createSDK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "envNameToNpmName", function() { return envNameToNpmName; });
var SDKEnvironment = {};
function createSDK(SDKBaseCtor, environment) {
    Object.assign(SDKEnvironment, environment);
    return SDKBaseCtor;
}
var envNameToNpmName = {
    'magic-sdk': 'magic-sdk',
    'magic-sdk-rn': '@magic-sdk/react-native',
};
//# sourceMappingURL=sdk-environment.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/core/sdk-exceptions.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/core/sdk-exceptions.js ***!
  \*****************************************************************************/
/*! exports provided: MagicSDKError, MagicRPCError, MagicSDKWarning, MagicExtensionError, MagicExtensionWarning, createMissingApiKeyError, createModalNotReadyError, createMalformedResponseError, createExtensionNotInitializedError, createWebAuthnNotSupportError, createWebAuthCreateCredentialError, createIncompatibleExtensionsError, createInvalidArgumentError, createDuplicateIframeWarning, createSynchronousWeb3MethodWarning, createReactNativeEndpointConfigurationWarning, createDeprecationWarning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicSDKError", function() { return MagicSDKError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicRPCError", function() { return MagicRPCError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicSDKWarning", function() { return MagicSDKWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicExtensionError", function() { return MagicExtensionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicExtensionWarning", function() { return MagicExtensionWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMissingApiKeyError", function() { return createMissingApiKeyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createModalNotReadyError", function() { return createModalNotReadyError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMalformedResponseError", function() { return createMalformedResponseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExtensionNotInitializedError", function() { return createExtensionNotInitializedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWebAuthnNotSupportError", function() { return createWebAuthnNotSupportError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWebAuthCreateCredentialError", function() { return createWebAuthCreateCredentialError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIncompatibleExtensionsError", function() { return createIncompatibleExtensionsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInvalidArgumentError", function() { return createInvalidArgumentError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDuplicateIframeWarning", function() { return createDuplicateIframeWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSynchronousWeb3MethodWarning", function() { return createSynchronousWeb3MethodWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactNativeEndpointConfigurationWarning", function() { return createReactNativeEndpointConfigurationWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDeprecationWarning", function() { return createDeprecationWarning; });
/* harmony import */ var _magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @magic-sdk/types */ "./node_modules/@magic-sdk/types/dist/module/index.js");
/* harmony import */ var _util_type_guards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/type-guards */ "./node_modules/@magic-sdk/provider/dist/module/util/type-guards.js");
/* harmony import */ var _sdk_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk-environment */ "./node_modules/@magic-sdk/provider/dist/module/core/sdk-environment.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



// --- Error/warning classes
/**
 * This error type represents internal SDK errors. This could be developer
 * mistakes (or Magic's mistakes), or execution errors unrelated to standard
 * JavaScript exceptions.
 */
var MagicSDKError = /** @class */ (function (_super) {
    __extends(MagicSDKError, _super);
    function MagicSDKError(code, rawMessage) {
        var _this = _super.call(this, "Magic SDK Error: [" + code + "] " + rawMessage) || this;
        _this.code = code;
        _this.rawMessage = rawMessage;
        _this.__proto__ = Error;
        Object.setPrototypeOf(_this, MagicSDKError.prototype);
        return _this;
    }
    return MagicSDKError;
}(Error));

/**
 * This error type communicates exceptions that occur during execution in the
 * Magic `<iframe>` context.
 */
var MagicRPCError = /** @class */ (function (_super) {
    __extends(MagicRPCError, _super);
    function MagicRPCError(sourceError) {
        var _this = _super.call(this) || this;
        _this.__proto__ = Error;
        var codeNormalized = Number(sourceError === null || sourceError === void 0 ? void 0 : sourceError.code);
        _this.rawMessage = (sourceError === null || sourceError === void 0 ? void 0 : sourceError.message) || 'Internal error';
        _this.code = Object(_util_type_guards__WEBPACK_IMPORTED_MODULE_1__["isJsonRpcErrorCode"])(codeNormalized) ? codeNormalized : _magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["RPCErrorCode"].InternalError;
        _this.message = "Magic RPC Error: [" + _this.code + "] " + _this.rawMessage;
        Object.setPrototypeOf(_this, MagicRPCError.prototype);
        return _this;
    }
    return MagicRPCError;
}(Error));

/**
 * In contrast to `SDKError` objects, this "warning" type communicates important
 * context that does not rise to the level of an exception. These should be
 * logged rather than thrown.
 */
var MagicSDKWarning = /** @class */ (function () {
    function MagicSDKWarning(code, rawMessage) {
        this.code = code;
        this.rawMessage = rawMessage;
        this.message = "Magic SDK Warning: [" + code + "] " + rawMessage;
    }
    /**
     * Logs this warning to the console.
     */
    MagicSDKWarning.prototype.log = function () {
        console.warn(this.message);
    };
    return MagicSDKWarning;
}());

/**
 * This error type is reserved for communicating errors that arise during
 * execution of Magic SDK Extension methods. Compare this to the `SDKError`
 * type, specifically in context of Extensions.
 */
var MagicExtensionError = /** @class */ (function (_super) {
    __extends(MagicExtensionError, _super);
    function MagicExtensionError(ext, code, rawMessage, data) {
        var _this = _super.call(this, "Magic Extension Error (" + ext.name + "): [" + code + "] " + rawMessage) || this;
        _this.code = code;
        _this.rawMessage = rawMessage;
        _this.data = data;
        _this.__proto__ = Error;
        Object.setPrototypeOf(_this, MagicExtensionError.prototype);
        return _this;
    }
    return MagicExtensionError;
}(Error));

/**
 * In contrast to `MagicExtensionError` objects, this "warning" type
 * communicates important context that does not rise to the level of an
 * exception. These should be logged rather than thrown.
 */
var MagicExtensionWarning = /** @class */ (function () {
    function MagicExtensionWarning(ext, code, rawMessage) {
        this.code = code;
        this.rawMessage = rawMessage;
        this.message = "Magic Extension Warning (" + ext.name + "): [" + code + "] " + rawMessage;
    }
    /**
     * Logs this warning to the console.
     */
    MagicExtensionWarning.prototype.log = function () {
        console.warn(this.message);
    };
    return MagicExtensionWarning;
}());

// --- SDK error factories
function createMissingApiKeyError() {
    return new MagicSDKError(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["SDKErrorCode"].MissingApiKey, 'Please provide an API key that you acquired from the Magic developer dashboard.');
}
function createModalNotReadyError() {
    return new MagicSDKError(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["SDKErrorCode"].ModalNotReady, 'Modal is not ready.');
}
function createMalformedResponseError() {
    return new MagicSDKError(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["SDKErrorCode"].MalformedResponse, 'Response from the Magic iframe is malformed.');
}
function createExtensionNotInitializedError(member) {
    return new MagicSDKError(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["SDKErrorCode"].ExtensionNotInitialized, "Extensions must be initialized with a Magic SDK instance before `Extension." + member + "` can be accessed. Do not invoke `Extension." + member + "` inside an extension constructor.");
}
function createWebAuthnNotSupportError() {
    return new MagicSDKError(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["SDKErrorCode"].WebAuthnNotSupported, 'WebAuthn is not supported in this device.');
}
function createWebAuthCreateCredentialError(message) {
    return new MagicSDKError(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["SDKErrorCode"].WebAuthnCreateCredentialError, "Error creating credential: " + message);
}
function createIncompatibleExtensionsError(extensions) {
    var npmName = _sdk_environment__WEBPACK_IMPORTED_MODULE_2__["envNameToNpmName"][_sdk_environment__WEBPACK_IMPORTED_MODULE_2__["SDKEnvironment"].sdkName];
    var msg = "Some extensions are incompatible with `" + npmName + "@" + _sdk_environment__WEBPACK_IMPORTED_MODULE_2__["SDKEnvironment"].version + "`:";
    extensions
        .filter(function (ext) { return typeof ext.compat !== 'undefined' && ext.compat !== null; })
        .forEach(function (ext) {
        var compat = ext.compat[npmName];
        /* istanbul ignore else */
        if (typeof compat === 'string') {
            msg += "\n  - Extension `" + ext.name + "` supports version(s) `" + compat + "`";
        }
        else if (!compat) {
            msg += "\n  - Extension `" + ext.name + "` does not support " + _sdk_environment__WEBPACK_IMPORTED_MODULE_2__["SDKEnvironment"].target + " environments.";
        }
        // Else case is irrelevant here here
        // (we filter out extensions with missing `compat` field)
    });
    return new MagicSDKError(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["SDKErrorCode"].IncompatibleExtensions, msg);
}
function createInvalidArgumentError(options) {
    /**
     * Parses the argument index (given by `argument`) to attach the correct ordinal suffix.
     * (i.e.: 1st, 2nd, 3rd, 4th, etc.)
     */
    var ordinalSuffix = function (i) {
        var iAdjusted = i + 1; // Argument is zero-indexed.
        var j = iAdjusted % 10;
        var k = iAdjusted % 100;
        if (j === 1 && k !== 11)
            return iAdjusted + "st";
        if (j === 2 && k !== 12)
            return iAdjusted + "nd";
        if (j === 3 && k !== 13)
            return iAdjusted + "rd";
        return iAdjusted + "th";
    };
    return new MagicSDKError(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["SDKErrorCode"].InvalidArgument, "Invalid " + ordinalSuffix(options.argument) + " argument given to `" + options.procedure + "`.\n" +
        ("  Expected: `" + options.expected + "`\n") +
        ("  Received: `" + options.received + "`"));
}
// --- SDK warning factories
function createDuplicateIframeWarning() {
    return new MagicSDKWarning(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["SDKWarningCode"].DuplicateIframe, 'Duplicate iframes found.');
}
function createSynchronousWeb3MethodWarning() {
    return new MagicSDKWarning(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["SDKWarningCode"].SyncWeb3Method, 'Non-async web3 methods are deprecated in web3 > 1.0 and are not supported by the Magic web3 provider. Please use an async method instead.');
}
function createReactNativeEndpointConfigurationWarning() {
    return new MagicSDKWarning(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["SDKWarningCode"].ReactNativeEndpointConfiguration, "CUSTOM DOMAINS ARE NOT SUPPORTED WHEN USING MAGIC SDK WITH REACT NATIVE! The `endpoint` parameter SHOULD NOT be provided. The Magic `<iframe>` is automatically wrapped by a WebView pointed at `" + _sdk_environment__WEBPACK_IMPORTED_MODULE_2__["SDKEnvironment"].defaultEndpoint + "`. Changing this default behavior will lead to unexpected results and potentially security-threatening bugs.");
}
function createDeprecationWarning(options) {
    var method = options.method, removalVersions = options.removalVersions, useInstead = options.useInstead;
    var npmName = _sdk_environment__WEBPACK_IMPORTED_MODULE_2__["envNameToNpmName"][_sdk_environment__WEBPACK_IMPORTED_MODULE_2__["SDKEnvironment"].sdkName];
    var removalVersion = removalVersions[npmName];
    var useInsteadSuffix = useInstead ? " Use `" + useInstead + "` instead." : '';
    var message = "`" + method + "` will be removed from `" + npmName + "` in version `" + removalVersion + "`." + useInsteadSuffix;
    return new MagicSDKWarning(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["SDKWarningCode"].DeprecationNotice, message);
}
//# sourceMappingURL=sdk-exceptions.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/core/sdk.js":
/*!******************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/core/sdk.js ***!
  \******************************************************************/
/*! exports provided: SDKBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKBase", function() { return SDKBase; });
/* harmony import */ var semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! semver/functions/satisfies */ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/satisfies.js");
/* harmony import */ var semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_base64_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/base64-json */ "./node_modules/@magic-sdk/provider/dist/module/util/base64-json.js");
/* harmony import */ var _sdk_exceptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk-exceptions */ "./node_modules/@magic-sdk/provider/dist/module/core/sdk-exceptions.js");
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/auth */ "./node_modules/@magic-sdk/provider/dist/module/modules/auth/index.js");
/* harmony import */ var _modules_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/user */ "./node_modules/@magic-sdk/provider/dist/module/modules/user/index.js");
/* harmony import */ var _modules_rpc_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/rpc-provider */ "./node_modules/@magic-sdk/provider/dist/module/modules/rpc-provider/index.js");
/* harmony import */ var _util_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/url */ "./node_modules/@magic-sdk/provider/dist/module/util/url.js");
/* harmony import */ var _modules_base_extension__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/base-extension */ "./node_modules/@magic-sdk/provider/dist/module/modules/base-extension.js");
/* harmony import */ var _util_type_guards__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/type-guards */ "./node_modules/@magic-sdk/provider/dist/module/util/type-guards.js");
/* harmony import */ var _sdk_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sdk-environment */ "./node_modules/@magic-sdk/provider/dist/module/core/sdk-environment.js");
/* eslint-disable no-underscore-dangle, no-param-reassign  */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










/**
 * Checks if the given `ext` is compatible with the platform & version of Magic
 * SDK currently in use.
 */
function checkExtensionCompat(ext) {
    if (ext.compat) {
        // Check web compatibility
        if (_sdk_environment__WEBPACK_IMPORTED_MODULE_9__["SDKEnvironment"].sdkName === 'magic-sdk') {
            return typeof ext.compat['magic-sdk'] === 'string'
                ? semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_0___default()(_sdk_environment__WEBPACK_IMPORTED_MODULE_9__["SDKEnvironment"].version, ext.compat['magic-sdk'])
                : !!ext.compat['magic-sdk'];
        }
        // Check React Native compatibility
        /* istanbul ignore else */
        if (_sdk_environment__WEBPACK_IMPORTED_MODULE_9__["SDKEnvironment"].sdkName === 'magic-sdk-rn') {
            return typeof ext.compat['@magic-sdk/react-native'] === 'string'
                ? semver_functions_satisfies__WEBPACK_IMPORTED_MODULE_0___default()(_sdk_environment__WEBPACK_IMPORTED_MODULE_9__["SDKEnvironment"].version, ext.compat['@magic-sdk/react-native'])
                : !!ext.compat['@magic-sdk/react-native'];
        }
        // Else case should be impossible here...
    }
    // To gracefully support older extensions, we assume
    // compatibility when the `compat` field is missing.
    return true;
}
/**
 * Initializes SDK extensions, checks for platform/version compatiblity issues,
 * then consolidates any global configurations provided by those extensions.
 */
function prepareExtensions(options) {
    var _this = this;
    var _a;
    var extensions = (_a = options === null || options === void 0 ? void 0 : options.extensions) !== null && _a !== void 0 ? _a : [];
    var extConfig = {};
    var incompatibleExtensions = [];
    if (Array.isArray(extensions)) {
        extensions.forEach(function (ext) {
            if (checkExtensionCompat(ext)) {
                ext.init(_this);
                _this[ext.name] = ext;
                if (ext instanceof _modules_base_extension__WEBPACK_IMPORTED_MODULE_7__["Extension"].Internal) {
                    if (!Object(_util_type_guards__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(ext.config))
                        extConfig[ext.name] = ext.config;
                }
            }
            else {
                incompatibleExtensions.push(ext);
            }
        });
    }
    else {
        Object.keys(extensions).forEach(function (name) {
            if (checkExtensionCompat(extensions[name])) {
                extensions[name].init(_this);
                var ext = extensions[name];
                _this[name] = ext;
                if (ext instanceof _modules_base_extension__WEBPACK_IMPORTED_MODULE_7__["Extension"].Internal) {
                    if (!Object(_util_type_guards__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(ext.config))
                        extConfig[extensions[name].name] = ext.config;
                }
            }
            else {
                incompatibleExtensions.push(extensions[name]);
            }
        });
    }
    if (incompatibleExtensions.length) {
        throw Object(_sdk_exceptions__WEBPACK_IMPORTED_MODULE_2__["createIncompatibleExtensionsError"])(incompatibleExtensions);
    }
    return extConfig;
}
var SDKBase = /** @class */ (function () {
    /**
     * Creates an instance of Magic SDK.
     */
    function SDKBase(apiKey, options) {
        var _a;
        this.apiKey = apiKey;
        if (!apiKey)
            throw Object(_sdk_exceptions__WEBPACK_IMPORTED_MODULE_2__["createMissingApiKeyError"])();
        if (_sdk_environment__WEBPACK_IMPORTED_MODULE_9__["SDKEnvironment"].target === 'react-native' && (options === null || options === void 0 ? void 0 : options.endpoint)) {
            Object(_sdk_exceptions__WEBPACK_IMPORTED_MODULE_2__["createReactNativeEndpointConfigurationWarning"])().log();
        }
        var defaultEndpoint = _sdk_environment__WEBPACK_IMPORTED_MODULE_9__["SDKEnvironment"].defaultEndpoint, version = _sdk_environment__WEBPACK_IMPORTED_MODULE_9__["SDKEnvironment"].version;
        this.endpoint = Object(_util_url__WEBPACK_IMPORTED_MODULE_6__["createURL"])((_a = options === null || options === void 0 ? void 0 : options.endpoint) !== null && _a !== void 0 ? _a : defaultEndpoint).origin;
        // Assign API Modules
        this.auth = new _modules_auth__WEBPACK_IMPORTED_MODULE_3__["AuthModule"](this);
        this.user = new _modules_user__WEBPACK_IMPORTED_MODULE_4__["UserModule"](this);
        this.rpcProvider = new _modules_rpc_provider__WEBPACK_IMPORTED_MODULE_5__["RPCProviderModule"](this);
        // Prepare Extensions
        var extConfig = prepareExtensions.call(this, options);
        // Build query params for the current `ViewController`
        this.encodedQueryParams = Object(_util_base64_json__WEBPACK_IMPORTED_MODULE_1__["encodeJSON"])({
            API_KEY: this.apiKey,
            DOMAIN_ORIGIN: window.location ? window.location.origin : '',
            ETH_NETWORK: options === null || options === void 0 ? void 0 : options.network,
            host: Object(_util_url__WEBPACK_IMPORTED_MODULE_6__["createURL"])(this.endpoint).host,
            sdk: _sdk_environment__WEBPACK_IMPORTED_MODULE_9__["SDKEnvironment"].sdkName,
            version: version,
            ext: Object(_util_type_guards__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(extConfig) ? undefined : extConfig,
            locale: (options === null || options === void 0 ? void 0 : options.locale) || 'en_US',
        });
    }
    Object.defineProperty(SDKBase.prototype, "transport", {
        /**
         * Represents the JSON RPC payload message channel associated with this
         * `MagicSDK` instance.
         */
        get: function () {
            if (!SDKBase.__transports__.has(this.encodedQueryParams)) {
                SDKBase.__transports__.set(this.encodedQueryParams, new _sdk_environment__WEBPACK_IMPORTED_MODULE_9__["SDKEnvironment"].PayloadTransport(this.endpoint, this.encodedQueryParams));
            }
            return SDKBase.__transports__.get(this.encodedQueryParams);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SDKBase.prototype, "overlay", {
        /**
         * Represents the view controller associated with this `MagicSDK` instance.
         */
        get: function () {
            if (!SDKBase.__overlays__.has(this.encodedQueryParams)) {
                var controller = new _sdk_environment__WEBPACK_IMPORTED_MODULE_9__["SDKEnvironment"].ViewController(this.transport, this.endpoint, this.encodedQueryParams);
                SDKBase.__overlays__.set(this.encodedQueryParams, controller);
            }
            return SDKBase.__overlays__.get(this.encodedQueryParams);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Preloads the Magic view, allowing for faster initial requests in browser
     * environments. Awaiting the returned promise will signal when the Magic view
     * has completed loading and is ready for requests.
     */
    SDKBase.prototype.preload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.overlay.ready];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SDKBase.__transports__ = new Map();
    SDKBase.__overlays__ = new Map();
    return SDKBase;
}());

//# sourceMappingURL=sdk.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/core/view-controller.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/core/view-controller.js ***!
  \******************************************************************************/
/*! exports provided: ViewController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewController", function() { return ViewController; });
/* harmony import */ var _magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @magic-sdk/types */ "./node_modules/@magic-sdk/types/dist/module/index.js");

var ViewController = /** @class */ (function () {
    function ViewController(transport, endpoint, encodedQueryParams) {
        this.transport = transport;
        this.endpoint = endpoint;
        this.encodedQueryParams = encodedQueryParams;
        this.ready = this.waitForReady();
        if (this.init)
            this.init();
        this.listen();
    }
    ViewController.prototype.waitForReady = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.transport.on(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicIncomingWindowMessage"].MAGIC_OVERLAY_READY, function () { return resolve(); });
        });
    };
    /**
     * Listen for messages sent from the underlying Magic `<WebView>`.
     */
    ViewController.prototype.listen = function () {
        var _this = this;
        this.transport.on(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicIncomingWindowMessage"].MAGIC_HIDE_OVERLAY, function () {
            _this.hideOverlay();
        });
        this.transport.on(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicIncomingWindowMessage"].MAGIC_SHOW_OVERLAY, function () {
            _this.showOverlay();
        });
    };
    return ViewController;
}());

//# sourceMappingURL=view-controller.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/index.js ***!
  \***************************************************************/
/*! exports provided: SDKBase, createSDK, PayloadTransport, ViewController, MagicSDKError, MagicRPCError, MagicSDKWarning, MagicExtensionError, MagicExtensionWarning, createMissingApiKeyError, createModalNotReadyError, createMalformedResponseError, createExtensionNotInitializedError, createWebAuthnNotSupportError, createWebAuthCreateCredentialError, createIncompatibleExtensionsError, createInvalidArgumentError, createDuplicateIframeWarning, createSynchronousWeb3MethodWarning, createReactNativeEndpointConfigurationWarning, createDeprecationWarning, Extension, getPayloadId, isPromiEvent, createPromiEvent, createAutoCatchingPromise, encodeJSON, decodeJSON, encodeQueryParameters, decodeQueryParameters, isJsonRpcRequestPayload, isJsonRpcResponsePayload, isMagicPayloadMethod, isJsonRpcErrorCode, isEmpty, createURL, storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/sdk */ "./node_modules/@magic-sdk/provider/dist/module/core/sdk.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKBase", function() { return _core_sdk__WEBPACK_IMPORTED_MODULE_0__["SDKBase"]; });

/* harmony import */ var _core_sdk_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/sdk-environment */ "./node_modules/@magic-sdk/provider/dist/module/core/sdk-environment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSDK", function() { return _core_sdk_environment__WEBPACK_IMPORTED_MODULE_1__["createSDK"]; });

/* harmony import */ var _core_payload_transport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/payload-transport */ "./node_modules/@magic-sdk/provider/dist/module/core/payload-transport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PayloadTransport", function() { return _core_payload_transport__WEBPACK_IMPORTED_MODULE_2__["PayloadTransport"]; });

/* harmony import */ var _core_view_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/view-controller */ "./node_modules/@magic-sdk/provider/dist/module/core/view-controller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewController", function() { return _core_view_controller__WEBPACK_IMPORTED_MODULE_3__["ViewController"]; });

/* harmony import */ var _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/sdk-exceptions */ "./node_modules/@magic-sdk/provider/dist/module/core/sdk-exceptions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MagicSDKError", function() { return _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["MagicSDKError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MagicRPCError", function() { return _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["MagicRPCError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MagicSDKWarning", function() { return _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["MagicSDKWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MagicExtensionError", function() { return _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["MagicExtensionError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MagicExtensionWarning", function() { return _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["MagicExtensionWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMissingApiKeyError", function() { return _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createMissingApiKeyError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createModalNotReadyError", function() { return _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createModalNotReadyError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMalformedResponseError", function() { return _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createMalformedResponseError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createExtensionNotInitializedError", function() { return _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createExtensionNotInitializedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWebAuthnNotSupportError", function() { return _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createWebAuthnNotSupportError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWebAuthCreateCredentialError", function() { return _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createWebAuthCreateCredentialError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIncompatibleExtensionsError", function() { return _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createIncompatibleExtensionsError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInvalidArgumentError", function() { return _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createInvalidArgumentError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDuplicateIframeWarning", function() { return _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createDuplicateIframeWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSynchronousWeb3MethodWarning", function() { return _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createSynchronousWeb3MethodWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createReactNativeEndpointConfigurationWarning", function() { return _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createReactNativeEndpointConfigurationWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDeprecationWarning", function() { return _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createDeprecationWarning"]; });

/* harmony import */ var _modules_base_extension__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/base-extension */ "./node_modules/@magic-sdk/provider/dist/module/modules/base-extension.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Extension", function() { return _modules_base_extension__WEBPACK_IMPORTED_MODULE_5__["Extension"]; });

/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util */ "./node_modules/@magic-sdk/provider/dist/module/util/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPayloadId", function() { return _util__WEBPACK_IMPORTED_MODULE_6__["getPayloadId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromiEvent", function() { return _util__WEBPACK_IMPORTED_MODULE_6__["isPromiEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPromiEvent", function() { return _util__WEBPACK_IMPORTED_MODULE_6__["createPromiEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAutoCatchingPromise", function() { return _util__WEBPACK_IMPORTED_MODULE_6__["createAutoCatchingPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encodeJSON", function() { return _util__WEBPACK_IMPORTED_MODULE_6__["encodeJSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeJSON", function() { return _util__WEBPACK_IMPORTED_MODULE_6__["decodeJSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encodeQueryParameters", function() { return _util__WEBPACK_IMPORTED_MODULE_6__["encodeQueryParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeQueryParameters", function() { return _util__WEBPACK_IMPORTED_MODULE_6__["decodeQueryParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isJsonRpcRequestPayload", function() { return _util__WEBPACK_IMPORTED_MODULE_6__["isJsonRpcRequestPayload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isJsonRpcResponsePayload", function() { return _util__WEBPACK_IMPORTED_MODULE_6__["isJsonRpcResponsePayload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMagicPayloadMethod", function() { return _util__WEBPACK_IMPORTED_MODULE_6__["isMagicPayloadMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isJsonRpcErrorCode", function() { return _util__WEBPACK_IMPORTED_MODULE_6__["isJsonRpcErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _util__WEBPACK_IMPORTED_MODULE_6__["isEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createURL", function() { return _util__WEBPACK_IMPORTED_MODULE_6__["createURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return _util__WEBPACK_IMPORTED_MODULE_6__["storage"]; });








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/modules/auth/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/modules/auth/index.js ***!
  \****************************************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @magic-sdk/types */ "./node_modules/@magic-sdk/types/dist/module/index.js");
/* harmony import */ var _base_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-module */ "./node_modules/@magic-sdk/provider/dist/module/modules/base-module.js");
/* harmony import */ var _core_json_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/json-rpc */ "./node_modules/@magic-sdk/provider/dist/module/core/json-rpc.js");
/* harmony import */ var _util_webauthn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/webauthn */ "./node_modules/@magic-sdk/provider/dist/module/util/webauthn.js");
/* harmony import */ var _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk-exceptions */ "./node_modules/@magic-sdk/provider/dist/module/core/sdk-exceptions.js");
/* harmony import */ var _core_sdk_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk-environment */ "./node_modules/@magic-sdk/provider/dist/module/core/sdk-environment.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AuthModule = /** @class */ (function (_super) {
    __extends(AuthModule, _super);
    function AuthModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initiate the "magic link" login flow for a user. If the flow is successful,
     * this method will return a Decentralized ID token (with a default lifespan
     * of 15 minutes).
     */
    AuthModule.prototype.loginWithMagicLink = function (configuration) {
        var email = configuration.email, _a = configuration.showUI, showUI = _a === void 0 ? true : _a, redirectURI = configuration.redirectURI;
        var requestPayload = Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["createJsonRpcRequestPayload"])(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"].LoginWithMagicLink, [
            { email: email, showUI: showUI, redirectURI: redirectURI },
        ]);
        return this.request(requestPayload);
    };
    /**
     * Log a user in with a special one-time-use credential token. This is
     * currently used during magic link flows with a configured redirect to
     * hydrate the user session at the end of the flow. If the flow is successful,
     * this method will return a Decentralized ID token (with a default lifespan
     * of 15 minutes).
     *
     * If no argument is provided, a credential is automatically parsed from
     * `window.location.search`.
     */
    AuthModule.prototype.loginWithCredential = function (credentialOrQueryString) {
        var credentialResolved = credentialOrQueryString !== null && credentialOrQueryString !== void 0 ? credentialOrQueryString : '';
        if (!credentialOrQueryString && _core_sdk_environment__WEBPACK_IMPORTED_MODULE_5__["SDKEnvironment"].target === 'web') {
            credentialResolved = window.location.search;
            // Remove the query from the redirect callback as a precaution.
            var urlWithoutQuery = window.location.origin + window.location.pathname;
            window.history.replaceState(null, '', urlWithoutQuery);
        }
        var requestPayload = Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["createJsonRpcRequestPayload"])(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"].LoginWithCredential, [credentialResolved]);
        return this.request(requestPayload);
    };
    AuthModule.prototype.registerWithWebAuthn = function (configuration) {
        return __awaiter(this, void 0, void 0, function () {
            var username, _a, nickname, options, credential, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!window.PublicKeyCredential) {
                            throw Object(_core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createWebAuthnNotSupportError"])();
                        }
                        username = configuration.username, _a = configuration.nickname, nickname = _a === void 0 ? '' : _a;
                        return [4 /*yield*/, this.request(Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["createJsonRpcRequestPayload"])(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"].WebAuthnRegistrationStart, [{ username: username }]))];
                    case 1:
                        options = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, navigator.credentials.create({
                                publicKey: options.credential_options,
                            })];
                    case 3:
                        credential = (_b.sent());
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _b.sent();
                        throw Object(_core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createWebAuthCreateCredentialError"])(err_1);
                    case 5: return [2 /*return*/, this.request(Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["createJsonRpcRequestPayload"])(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"].RegisterWithWebAuth, [
                            {
                                id: options.id,
                                nickname: nickname,
                                transport: credential.response.getTransports(),
                                user_agent: navigator.userAgent,
                                registration_response: Object(_util_webauthn__WEBPACK_IMPORTED_MODULE_3__["transformNewAssertionForServer"])(credential),
                            },
                        ]))];
                }
            });
        });
    };
    AuthModule.prototype.loginWithWebAuthn = function (configuration) {
        return __awaiter(this, void 0, void 0, function () {
            var username, transformedCredentialRequestOptions, assertion, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!window.PublicKeyCredential) {
                            throw Object(_core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createWebAuthnNotSupportError"])();
                        }
                        username = configuration.username;
                        return [4 /*yield*/, this.request(Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["createJsonRpcRequestPayload"])(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"].LoginWithWebAuthn, [{ username: username }]))];
                    case 1:
                        transformedCredentialRequestOptions = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, navigator.credentials.get({
                                publicKey: transformedCredentialRequestOptions,
                            })];
                    case 3:
                        assertion = (_a.sent());
                        return [3 /*break*/, 5];
                    case 4:
                        err_2 = _a.sent();
                        throw Object(_core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createWebAuthCreateCredentialError"])(err_2);
                    case 5: return [2 /*return*/, this.request(Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["createJsonRpcRequestPayload"])(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"].WebAuthnLoginVerfiy, [
                            {
                                username: username,
                                assertion_response: Object(_util_webauthn__WEBPACK_IMPORTED_MODULE_3__["transformAssertionForServer"])(assertion),
                            },
                        ]))];
                }
            });
        });
    };
    return AuthModule;
}(_base_module__WEBPACK_IMPORTED_MODULE_1__["BaseModule"]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/modules/base-extension.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/modules/base-extension.js ***!
  \********************************************************************************/
/*! exports provided: Extension */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Extension", function() { return Extension; });
/* harmony import */ var _core_json_rpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/json-rpc */ "./node_modules/@magic-sdk/provider/dist/module/core/json-rpc.js");
/* harmony import */ var _base_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-module */ "./node_modules/@magic-sdk/provider/dist/module/modules/base-module.js");
/* harmony import */ var _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/sdk-exceptions */ "./node_modules/@magic-sdk/provider/dist/module/core/sdk-exceptions.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./node_modules/@magic-sdk/provider/dist/module/util/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var BaseExtension = /** @class */ (function (_super) {
    __extends(BaseExtension, _super);
    function BaseExtension() {
        var _this = _super.call(this, undefined) || this;
        _this.isInitialized = false;
        _this.utils = {
            createPromiEvent: _util__WEBPACK_IMPORTED_MODULE_3__["createPromiEvent"],
            isPromiEvent: _util__WEBPACK_IMPORTED_MODULE_3__["isPromiEvent"],
            encodeJSON: _util__WEBPACK_IMPORTED_MODULE_3__["encodeJSON"],
            decodeJSON: _util__WEBPACK_IMPORTED_MODULE_3__["decodeJSON"],
            encodeQueryParameters: _util__WEBPACK_IMPORTED_MODULE_3__["encodeQueryParameters"],
            decodeQueryParameters: _util__WEBPACK_IMPORTED_MODULE_3__["decodeQueryParameters"],
            createJsonRpcRequestPayload: _core_json_rpc__WEBPACK_IMPORTED_MODULE_0__["createJsonRpcRequestPayload"],
            standardizeJsonRpcRequestPayload: _core_json_rpc__WEBPACK_IMPORTED_MODULE_0__["standardizeJsonRpcRequestPayload"],
            storage: _util__WEBPACK_IMPORTED_MODULE_3__["storage"],
        };
        var sdkAccessFields = ['request', 'transport', 'overlay', 'sdk'];
        // Disallow SDK access before initialization.
        return new Proxy(_this, {
            get: function (target, prop, receiver) {
                if (sdkAccessFields.includes(prop) && !_this.isInitialized) {
                    throw Object(_core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_2__["createExtensionNotInitializedError"])(prop);
                }
                return Reflect.get(target, prop, receiver);
            },
        });
    }
    /**
     * Registers a Magic SDK instance with this Extension.
     */
    BaseExtension.prototype.init = function (sdk) {
        if (this.isInitialized)
            return;
        this.sdk = sdk;
        this.isInitialized = true;
    };
    /**
     * Creates a deprecation warning wrapped with a native Magic SDK warning type.
     * Best practice is to warn users of upcoming deprecations at least one major
     * version before the change is implemented. You can use this method to
     * communicate deprecations in a manner consistent with Magic SDK core code.
     */
    BaseExtension.prototype.createDeprecationWarning = function (options) {
        var method = options.method, removalVersion = options.removalVersion, useInstead = options.useInstead;
        var useInsteadSuffix = useInstead ? " Use `" + useInstead + "` instead." : '';
        var message = "`" + method + "` will be removed from this Extension in version `" + removalVersion + "`." + useInsteadSuffix;
        return new _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_2__["MagicExtensionWarning"](this, 'DEPRECATION_NOTICE', message);
    };
    /**
     * Creates a warning wrapped with a native Magic SDK warning type. This
     * maintains consistency in warning messaging for consumers of Magic SDK and
     * this Extension.
     */
    BaseExtension.prototype.createWarning = function (code, message) {
        return new _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_2__["MagicExtensionWarning"](this, code, message);
    };
    /**
     * Creates an error wrapped with a native Magic SDK error type. This maintains
     * consistency in error handling for consumers of Magic SDK and this
     * Extension.
     */
    BaseExtension.prototype.createError = function (code, message, data) {
        return new _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_2__["MagicExtensionError"](this, code, message, data);
    };
    /**
     * Throws an error wrapped with a native Magic SDK error type. This maintains
     * consistency in error handling for consumers of Magic SDK and this
     * Extension.
     */
    BaseExtension.prototype.raiseError = function (code, message, data) {
        throw new _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_2__["MagicExtensionError"](this, code, message, data);
    };
    return BaseExtension;
}(_base_module__WEBPACK_IMPORTED_MODULE_1__["BaseModule"]));
var InternalExtension = /** @class */ (function (_super) {
    __extends(InternalExtension, _super);
    function InternalExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InternalExtension;
}(BaseExtension));
var Extension = /** @class */ (function (_super) {
    __extends(Extension, _super);
    function Extension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This is a special constructor used to mark an extension as "official." Only
     * official extensions can interact with the iframe using custom JSON RPC
     * methods and business logic. This is intended for internal-use only and
     * provides no advantage to open-source extension developers.
     *
     * @internal
     */
    Extension.Internal = InternalExtension;
    return Extension;
}(BaseExtension));

//# sourceMappingURL=base-extension.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/modules/base-module.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/modules/base-module.js ***!
  \*****************************************************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var _magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @magic-sdk/types */ "./node_modules/@magic-sdk/types/dist/module/index.js");
/* harmony import */ var _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk-exceptions */ "./node_modules/@magic-sdk/provider/dist/module/core/sdk-exceptions.js");
/* harmony import */ var _core_json_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/json-rpc */ "./node_modules/@magic-sdk/provider/dist/module/core/json-rpc.js");
/* harmony import */ var _util_promise_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/promise-tools */ "./node_modules/@magic-sdk/provider/dist/module/util/promise-tools.js");
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};




var BaseModule = /** @class */ (function () {
    function BaseModule(sdk) {
        this.sdk = sdk;
    }
    Object.defineProperty(BaseModule.prototype, "transport", {
        /**
         * The `PayloadTransport` for the SDK instance registered to this module.
         */
        get: function () {
            return this.sdk.transport;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseModule.prototype, "overlay", {
        /**
         * The `ViewController` for the SDK instance registered to this module.
         */
        get: function () {
            return this.sdk.overlay;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Emits promisified requests to the Magic `<iframe>` context.
     */
    BaseModule.prototype.request = function (payload) {
        var responsePromise = this.transport.post(this.overlay, _magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicOutgoingWindowMessage"].MAGIC_HANDLE_REQUEST, Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["standardizeJsonRpcRequestPayload"])(payload));
        // PromiEvent-ify the response.
        var promiEvent = Object(_util_promise_tools__WEBPACK_IMPORTED_MODULE_3__["createPromiEvent"])(function (resolve, reject) {
            responsePromise
                .then(function (res) {
                cleanupEvents();
                if (res.hasError)
                    reject(new _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_1__["MagicRPCError"](res.payload.error));
                else if (res.hasResult)
                    resolve(res.payload.result);
                else
                    throw Object(_core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_1__["createMalformedResponseError"])();
            })
                .catch(function (err) {
                cleanupEvents();
                reject(err);
            });
        });
        // Listen for events from the `<iframe>` associated with the current payload
        // and emit those to `PromiEvent` subscribers.
        var cleanupEvents = this.transport.on(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicIncomingWindowMessage"].MAGIC_HANDLE_EVENT, function (evt) {
            var _a;
            var response = evt.data.response;
            if (response.id === payload.id && ((_a = response.result) === null || _a === void 0 ? void 0 : _a.event)) {
                var _b = response.result, event_1 = _b.event, _c = _b.params, params = _c === void 0 ? [] : _c;
                promiEvent.emit.apply(promiEvent, __spread([event_1], params));
            }
        });
        return promiEvent;
    };
    return BaseModule;
}());

//# sourceMappingURL=base-module.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/modules/rpc-provider/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/modules/rpc-provider/index.js ***!
  \************************************************************************************/
/*! exports provided: RPCProviderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPCProviderModule", function() { return RPCProviderModule; });
/* harmony import */ var _magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @magic-sdk/types */ "./node_modules/@magic-sdk/types/dist/module/index.js");
/* harmony import */ var _base_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-module */ "./node_modules/@magic-sdk/provider/dist/module/modules/base-module.js");
/* harmony import */ var _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk-exceptions */ "./node_modules/@magic-sdk/provider/dist/module/core/sdk-exceptions.js");
/* harmony import */ var _core_json_rpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/json-rpc */ "./node_modules/@magic-sdk/provider/dist/module/core/json-rpc.js");
/* harmony import */ var _util_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/events */ "./node_modules/@magic-sdk/provider/dist/module/util/events.js");
/* eslint-disable consistent-return, prefer-spread */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var _a = Object(_util_events__WEBPACK_IMPORTED_MODULE_4__["createTypedEmitter"])(), createBoundEmitterMethod = _a.createBoundEmitterMethod, createChainingEmitterMethod = _a.createChainingEmitterMethod;
/** */
var RPCProviderModule = /** @class */ (function (_super) {
    __extends(RPCProviderModule, _super);
    function RPCProviderModule() {
        // Implements EIP 1193:
        // https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isMagic = true;
        _this.on = createChainingEmitterMethod('on', _this);
        _this.once = createChainingEmitterMethod('once', _this);
        _this.addListener = createChainingEmitterMethod('addListener', _this);
        _this.off = createChainingEmitterMethod('off', _this);
        _this.removeListener = createChainingEmitterMethod('removeListener', _this);
        _this.removeAllListeners = createChainingEmitterMethod('removeAllListeners', _this);
        _this.emit = createBoundEmitterMethod('emit');
        _this.eventNames = createBoundEmitterMethod('eventNames');
        _this.listeners = createBoundEmitterMethod('listeners');
        _this.listenerCount = createBoundEmitterMethod('listenerCount');
        return _this;
    }
    /* eslint-enable prettier/prettier */
    RPCProviderModule.prototype.sendAsync = function (payload, onRequestComplete) {
        if (!onRequestComplete) {
            throw Object(_core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_2__["createInvalidArgumentError"])({
                procedure: 'Magic.rpcProvider.sendAsync',
                argument: 1,
                expected: 'function',
                received: onRequestComplete === null ? 'null' : typeof onRequestComplete,
            });
        }
        if (Array.isArray(payload)) {
            this.transport
                .post(this.overlay, _magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicOutgoingWindowMessage"].MAGIC_HANDLE_REQUEST, payload.map(function (p) { return Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_3__["standardizeJsonRpcRequestPayload"])(p); }))
                .then(function (batchResponse) {
                onRequestComplete(null, batchResponse.map(function (response) { return (__assign(__assign({}, response.payload), { error: response.hasError ? new _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_2__["MagicRPCError"](response.payload.error) : null })); }));
            });
        }
        else {
            var finalPayload = Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_3__["standardizeJsonRpcRequestPayload"])(payload);
            this.transport
                .post(this.overlay, _magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicOutgoingWindowMessage"].MAGIC_HANDLE_REQUEST, finalPayload)
                .then(function (response) {
                onRequestComplete(response.hasError ? new _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_2__["MagicRPCError"](response.payload.error) : null, response.payload);
            });
        }
    };
    /* eslint-enable prettier/prettier */
    RPCProviderModule.prototype.send = function (payloadOrMethod, onRequestCompleteOrParams) {
        // Case #1
        // Web3 >= 1.0.0-beta.38 calls `send` with method and parameters.
        if (typeof payloadOrMethod === 'string') {
            var payload = Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_3__["createJsonRpcRequestPayload"])(payloadOrMethod, Array.isArray(onRequestCompleteOrParams) ? onRequestCompleteOrParams : []);
            return this.request(payload);
        }
        // Case #2
        // Web3 <= 1.0.0-beta.37 uses `send` with a callback for async queries.
        if (Array.isArray(payloadOrMethod) || !!onRequestCompleteOrParams) {
            /* eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion */
            this.sendAsync(payloadOrMethod, onRequestCompleteOrParams);
            return;
        }
        // Case #3
        // Legacy synchronous methods (unsupported).
        var warning = Object(_core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_2__["createSynchronousWeb3MethodWarning"])();
        warning.log();
        return new _core_json_rpc__WEBPACK_IMPORTED_MODULE_3__["JsonRpcResponse"](payloadOrMethod).applyError({
            code: -32603,
            message: warning.rawMessage,
        }).payload;
    };
    RPCProviderModule.prototype.enable = function () {
        var requestPayload = Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_3__["createJsonRpcRequestPayload"])('eth_accounts');
        return this.request(requestPayload);
    };
    return RPCProviderModule;
}(_base_module__WEBPACK_IMPORTED_MODULE_1__["BaseModule"]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/modules/user/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/modules/user/index.js ***!
  \****************************************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @magic-sdk/types */ "./node_modules/@magic-sdk/types/dist/module/index.js");
/* harmony import */ var _base_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-module */ "./node_modules/@magic-sdk/provider/dist/module/modules/base-module.js");
/* harmony import */ var _core_json_rpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/json-rpc */ "./node_modules/@magic-sdk/provider/dist/module/core/json-rpc.js");
/* harmony import */ var _util_webauthn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/webauthn */ "./node_modules/@magic-sdk/provider/dist/module/util/webauthn.js");
/* harmony import */ var _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk-exceptions */ "./node_modules/@magic-sdk/provider/dist/module/core/sdk-exceptions.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var UserModule = /** @class */ (function (_super) {
    __extends(UserModule, _super);
    function UserModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** */
    UserModule.prototype.getIdToken = function (configuration) {
        var requestPayload = Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["createJsonRpcRequestPayload"])(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"].GetIdToken, [configuration]);
        return this.request(requestPayload);
    };
    /** */
    UserModule.prototype.generateIdToken = function (configuration) {
        var requestPayload = Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["createJsonRpcRequestPayload"])(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"].GenerateIdToken, [configuration]);
        return this.request(requestPayload);
    };
    /** */
    UserModule.prototype.getMetadata = function () {
        var requestPayload = Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["createJsonRpcRequestPayload"])(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"].GetMetadata);
        return this.request(requestPayload);
    };
    /** */
    UserModule.prototype.updateEmail = function (configuration) {
        var email = configuration.email, _a = configuration.showUI, showUI = _a === void 0 ? true : _a;
        var requestPayload = Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["createJsonRpcRequestPayload"])(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"].UpdateEmail, [{ email: email, showUI: showUI }]);
        return this.request(requestPayload);
    };
    /** */
    UserModule.prototype.isLoggedIn = function () {
        var requestPayload = Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["createJsonRpcRequestPayload"])(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"].IsLoggedIn);
        return this.request(requestPayload);
    };
    /** */
    UserModule.prototype.logout = function () {
        var requestPayload = Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["createJsonRpcRequestPayload"])(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"].Logout);
        return this.request(requestPayload);
    };
    UserModule.prototype.getWebAuthnInfo = function () {
        var requestPayload = Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["createJsonRpcRequestPayload"])(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"].GetWebAuthnInfo, []);
        return this.request(requestPayload);
    };
    UserModule.prototype.updateWebAuthnInfo = function (configuration) {
        var id = configuration.id, nickname = configuration.nickname;
        var requestPayload = Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["createJsonRpcRequestPayload"])(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"].UpdateWebAuthnInfo, [
            {
                webAuthnCredentialsId: id,
                nickname: nickname,
            },
        ]);
        return this.request(requestPayload);
    };
    UserModule.prototype.unregisterWebAuthnDevice = function (id) {
        var requestPayload = Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["createJsonRpcRequestPayload"])(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"].UnregisterWebAuthDevice, [
            {
                webAuthnCredentialsId: id,
            },
        ]);
        return this.request(requestPayload);
    };
    UserModule.prototype.registerWebAuthnDevice = function (nickname) {
        if (nickname === void 0) { nickname = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var options, credential, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!window.PublicKeyCredential) {
                            throw Object(_core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createWebAuthnNotSupportError"])();
                        }
                        return [4 /*yield*/, this.request(Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["createJsonRpcRequestPayload"])(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"].RegisterWebAuthDeviceStart, []))];
                    case 1:
                        options = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, navigator.credentials.create({
                                publicKey: options.credential_options,
                            })];
                    case 3:
                        credential = (_a.sent());
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        throw Object(_core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_4__["createWebAuthCreateCredentialError"])(err_1);
                    case 5: return [2 /*return*/, this.request(Object(_core_json_rpc__WEBPACK_IMPORTED_MODULE_2__["createJsonRpcRequestPayload"])(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"].RegisterWebAuthDevice, [
                            {
                                nickname: nickname,
                                transport: credential.response.getTransports(),
                                user_agent: navigator.userAgent,
                                registration_response: Object(_util_webauthn__WEBPACK_IMPORTED_MODULE_3__["transformNewAssertionForServer"])(credential),
                            },
                        ]))];
                }
            });
        });
    };
    return UserModule;
}(_base_module__WEBPACK_IMPORTED_MODULE_1__["BaseModule"]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/util/base64-json.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/util/base64-json.js ***!
  \**************************************************************************/
/*! exports provided: encodeJSON, decodeJSON, encodeQueryParameters, decodeQueryParameters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeJSON", function() { return encodeJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeJSON", function() { return decodeJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeQueryParameters", function() { return encodeQueryParameters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeQueryParameters", function() { return decodeQueryParameters; });
/* harmony import */ var _core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk-exceptions */ "./node_modules/@magic-sdk/provider/dist/module/core/sdk-exceptions.js");

/**
 * Given a JSON-serializable object, encode as a Base64 string.
 */
function encodeJSON(options) {
    return btoa(JSON.stringify(options));
}
/**
 * Given a Base64 JSON string, decode a JavaScript object.
 */
function decodeJSON(queryString) {
    return JSON.parse(atob(queryString));
}
// --- DEPRECATED!
/**
 * Given a JSON-serializable object, encode as a Base64 string.
 *
 * @deprecated
 */
/* istanbul ignore next */
function encodeQueryParameters(options) {
    Object(_core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_0__["createDeprecationWarning"])({
        method: 'encodeQueryParameters()',
        removalVersions: { 'magic-sdk': 'v3.0.0', '@magic-sdk/react-native': 'v3.0.0' },
        useInstead: 'encodeJSON()',
    }).log();
    return btoa(JSON.stringify(options));
}
/**
 * Given a Base64 JSON string, decode a JavaScript object.
 *
 * @deprecated
 */
/* istanbul ignore next */
function decodeQueryParameters(queryString) {
    Object(_core_sdk_exceptions__WEBPACK_IMPORTED_MODULE_0__["createDeprecationWarning"])({
        method: 'decodeQueryParameters()',
        removalVersions: { 'magic-sdk': 'v3.0.0', '@magic-sdk/react-native': 'v3.0.0' },
        useInstead: 'decodeJSON()',
    }).log();
    return JSON.parse(atob(queryString));
}
//# sourceMappingURL=base64-json.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/util/events.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/util/events.js ***!
  \*********************************************************************/
/*! exports provided: TypedEmitter, createTypedEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypedEmitter", function() { return TypedEmitter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTypedEmitter", function() { return createTypedEmitter; });
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/@magic-sdk/provider/node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * An extension of `EventEmitter` (provided by `eventemitter3`) with an adjusted
 * type interface that supports the unique structure of Magic SDK modules.
 */
var TypedEmitter = /** @class */ (function (_super) {
    __extends(TypedEmitter, _super);
    function TypedEmitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TypedEmitter;
}(eventemitter3__WEBPACK_IMPORTED_MODULE_0___default.a));

/**
 * Creates a `TypedEmitter` instance and returns helper functions for easily
 * mixing `TypedEmitter` methods into other objects.
 */
function createTypedEmitter() {
    var emitter = new TypedEmitter();
    var createChainingEmitterMethod = function (method, source) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            emitter[method].apply(emitter, args);
            return source;
        };
    };
    var createBoundEmitterMethod = function (method) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return emitter[method].apply(emitter, args);
        };
    };
    return {
        emitter: emitter,
        createChainingEmitterMethod: createChainingEmitterMethod,
        createBoundEmitterMethod: createBoundEmitterMethod,
    };
}
//# sourceMappingURL=events.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/util/get-payload-id.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/util/get-payload-id.js ***!
  \*****************************************************************************/
/*! exports provided: getPayloadId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPayloadId", function() { return getPayloadId; });
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function createIntGenerator() {
    var index;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                index = 0;
                _a.label = 1;
            case 1:
                if (false) {}
                if (!(index < Number.MAX_SAFE_INTEGER)) return [3 /*break*/, 3];
                return [4 /*yield*/, ++index];
            case 2:
                _a.sent();
                return [3 /*break*/, 4];
            case 3:
                index = 0;
                _a.label = 4;
            case 4: return [3 /*break*/, 1];
            case 5: return [2 /*return*/];
        }
    });
}
var intGenerator = createIntGenerator();
/**
 * Get an integer ID for attaching to a JSON RPC request payload.
 */
function getPayloadId() {
    return intGenerator.next().value;
}
//# sourceMappingURL=get-payload-id.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/util/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/util/index.js ***!
  \********************************************************************/
/*! exports provided: getPayloadId, isPromiEvent, createPromiEvent, createAutoCatchingPromise, encodeJSON, decodeJSON, encodeQueryParameters, decodeQueryParameters, isJsonRpcRequestPayload, isJsonRpcResponsePayload, isMagicPayloadMethod, isJsonRpcErrorCode, isEmpty, createURL, storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get_payload_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-payload-id */ "./node_modules/@magic-sdk/provider/dist/module/util/get-payload-id.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPayloadId", function() { return _get_payload_id__WEBPACK_IMPORTED_MODULE_0__["getPayloadId"]; });

/* harmony import */ var _promise_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promise-tools */ "./node_modules/@magic-sdk/provider/dist/module/util/promise-tools.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromiEvent", function() { return _promise_tools__WEBPACK_IMPORTED_MODULE_1__["isPromiEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPromiEvent", function() { return _promise_tools__WEBPACK_IMPORTED_MODULE_1__["createPromiEvent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createAutoCatchingPromise", function() { return _promise_tools__WEBPACK_IMPORTED_MODULE_1__["createAutoCatchingPromise"]; });

/* harmony import */ var _base64_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base64-json */ "./node_modules/@magic-sdk/provider/dist/module/util/base64-json.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encodeJSON", function() { return _base64_json__WEBPACK_IMPORTED_MODULE_2__["encodeJSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeJSON", function() { return _base64_json__WEBPACK_IMPORTED_MODULE_2__["decodeJSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "encodeQueryParameters", function() { return _base64_json__WEBPACK_IMPORTED_MODULE_2__["encodeQueryParameters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decodeQueryParameters", function() { return _base64_json__WEBPACK_IMPORTED_MODULE_2__["decodeQueryParameters"]; });

/* harmony import */ var _type_guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type-guards */ "./node_modules/@magic-sdk/provider/dist/module/util/type-guards.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isJsonRpcRequestPayload", function() { return _type_guards__WEBPACK_IMPORTED_MODULE_3__["isJsonRpcRequestPayload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isJsonRpcResponsePayload", function() { return _type_guards__WEBPACK_IMPORTED_MODULE_3__["isJsonRpcResponsePayload"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMagicPayloadMethod", function() { return _type_guards__WEBPACK_IMPORTED_MODULE_3__["isMagicPayloadMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isJsonRpcErrorCode", function() { return _type_guards__WEBPACK_IMPORTED_MODULE_3__["isJsonRpcErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _type_guards__WEBPACK_IMPORTED_MODULE_3__["isEmpty"]; });

/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./url */ "./node_modules/@magic-sdk/provider/dist/module/util/url.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createURL", function() { return _url__WEBPACK_IMPORTED_MODULE_4__["createURL"]; });

/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ "./node_modules/@magic-sdk/provider/dist/module/util/storage.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "storage", function() { return _storage__WEBPACK_IMPORTED_MODULE_5__; });







//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/util/promise-tools.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/util/promise-tools.js ***!
  \****************************************************************************/
/*! exports provided: isPromiEvent, createPromiEvent, createAutoCatchingPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromiEvent", function() { return isPromiEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPromiEvent", function() { return createPromiEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAutoCatchingPromise", function() { return createAutoCatchingPromise; });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./node_modules/@magic-sdk/provider/dist/module/util/events.js");

var promiEventBrand = Symbol('isPromiEvent');
/**
 * Returns `true` if the given `value` is a `PromiEvent`.
 */
function isPromiEvent(value) {
    return !!value[promiEventBrand];
}
/**
 * Create a native JavaScript `Promise` overloaded with strongly-typed methods
 * from `EventEmitter`.
 */
function createPromiEvent(executor) {
    var promise = createAutoCatchingPromise(executor);
    var _a = Object(_events__WEBPACK_IMPORTED_MODULE_0__["createTypedEmitter"])(), createBoundEmitterMethod = _a.createBoundEmitterMethod, createChainingEmitterMethod = _a.createChainingEmitterMethod;
    // We save the original `Promise` methods to the following symbols so we can
    // access them internally.
    var thenSymbol = Symbol('Promise.then');
    var catchSymbol = Symbol('Promise.catch');
    var finallySymbol = Symbol('Promise.finally');
    /**
     * Ensures the next object in the `PromiEvent` chain is overloaded with
     * `EventEmitter` methods.
     */
    var createChainingPromiseMethod = function (method, source) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var nextPromise = source[method].apply(source, args);
        return promiEvent(nextPromise);
    }; };
    /**
     * Builds a `PromiEvent` by assigning `EventEmitter` methods to a native
     * `Promise` object.
     */
    var promiEvent = function (source) {
        var _a;
        return Object.assign(source, (_a = {},
            _a[promiEventBrand] = true,
            _a[thenSymbol] = source[thenSymbol] || source.then,
            _a[catchSymbol] = source[catchSymbol] || source.catch,
            _a[finallySymbol] = source[finallySymbol] || source.finally,
            _a.then = createChainingPromiseMethod(thenSymbol, source),
            _a.catch = createChainingPromiseMethod(catchSymbol, source),
            _a.finally = createChainingPromiseMethod(finallySymbol, source),
            _a.on = createChainingEmitterMethod('on', source),
            _a.once = createChainingEmitterMethod('once', source),
            _a.addListener = createChainingEmitterMethod('addListener', source),
            _a.off = createChainingEmitterMethod('off', source),
            _a.removeListener = createChainingEmitterMethod('removeListener', source),
            _a.removeAllListeners = createChainingEmitterMethod('removeAllListeners', source),
            _a.emit = createBoundEmitterMethod('emit'),
            _a.eventNames = createBoundEmitterMethod('eventNames'),
            _a.listeners = createBoundEmitterMethod('listeners'),
            _a.listenerCount = createBoundEmitterMethod('listenerCount'),
            _a));
    };
    var result = promiEvent(promise.then(function (resolved) {
        // Emit default completion events and resolve result.
        result.emit('done', resolved);
        result.emit('settled');
        return resolved;
    }, function (err) {
        // Emit default error events and re-throw.
        result.emit('error', err);
        result.emit('settled');
        throw err;
    }));
    return result;
}
/**
 * Creates a `Promise` with an **async executor** that automatically catches
 * errors occurring within the executor. Nesting promises in this way is usually
 * deemed an _anti-pattern_, but it's useful and clean when promisifying the
 * event-based code that's inherent to JSON RPC.
 *
 * So, here we solve the issue of nested promises by ensuring that no errors
 * mistakenly go unhandled!
 */
function createAutoCatchingPromise(executor) {
    return new Promise(function (resolve, reject) {
        var result = executor(resolve, reject);
        Promise.resolve(result).catch(reject);
    });
}
//# sourceMappingURL=promise-tools.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/util/storage.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/util/storage.js ***!
  \**********************************************************************/
/*! exports provided: getItem, setItem, removeItem, clear, length, key, keys, iterate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setItem", function() { return setItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "key", function() { return key; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterate", function() { return iterate; });
/* harmony import */ var _core_sdk_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk-environment */ "./node_modules/@magic-sdk/provider/dist/module/core/sdk-environment.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};

var lf;
/**
 * Proxies `localforage` methods with strong-typing.
 */
function proxyLocalForageMethod(method) {
    var _this = this;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!lf) return [3 /*break*/, 2];
                        return [4 /*yield*/, _core_sdk_environment__WEBPACK_IMPORTED_MODULE_0__["SDKEnvironment"].configureStorage()];
                    case 1:
                        lf = _a.sent();
                        _a.label = 2;
                    case 2: return [4 /*yield*/, lf.ready()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, lf[method].apply(lf, __spread(args))];
                }
            });
        });
    };
}
var getItem = proxyLocalForageMethod('getItem');
var setItem = proxyLocalForageMethod('setItem');
var removeItem = proxyLocalForageMethod('removeItem');
var clear = proxyLocalForageMethod('clear');
var length = proxyLocalForageMethod('length');
var key = proxyLocalForageMethod('key');
var keys = proxyLocalForageMethod('keys');
var iterate = proxyLocalForageMethod('iterate');
//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/util/type-guards.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/util/type-guards.js ***!
  \**************************************************************************/
/*! exports provided: isJsonRpcRequestPayload, isJsonRpcResponsePayload, isMagicPayloadMethod, isJsonRpcErrorCode, isEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJsonRpcRequestPayload", function() { return isJsonRpcRequestPayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJsonRpcResponsePayload", function() { return isJsonRpcResponsePayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMagicPayloadMethod", function() { return isMagicPayloadMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJsonRpcErrorCode", function() { return isJsonRpcErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony import */ var _magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @magic-sdk/types */ "./node_modules/@magic-sdk/types/dist/module/index.js");
/**
 * This file contains our type guards.
 *
 * Type guards are a feature of TypeScript which narrow the type signature of
 * intesection types (types that can be one thing or another).
 *
 * @see
 * https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types
 */

/**
 * Assert `value` is `undefined`.
 */
function isUndefined(value) {
    return typeof value === 'undefined';
}
/**
 * Assert `value` is `null`.
 */
function isNull(value) {
    return value === null;
}
/**
 * Assert `value` is `null` or `undefined`.
 */
function isNil(value) {
    return isNull(value) || isUndefined(value);
}
/**
 * Assert `value` is a `JsonRpcRequestPayload` object.
 */
function isJsonRpcRequestPayload(value) {
    if (isNil(value))
        return false;
    return (!isUndefined(value.jsonrpc) && !isUndefined(value.id) && !isUndefined(value.method) && !isUndefined(value.params));
}
/**
 * Assert `value` is a `JsonRpcResponsePayload` object.
 */
function isJsonRpcResponsePayload(value) {
    if (isNil(value))
        return false;
    return (!isUndefined(value.jsonrpc) && !isUndefined(value.id) && (!isUndefined(value.result) || !isUndefined(value.error)));
}
/**
 * Assert `value` is a Magic SDK payload method identifier.
 */
function isMagicPayloadMethod(value) {
    if (isNil(value))
        return false;
    return typeof value === 'string' && Object.values(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"]).includes(value);
}
/**
 * Assert `value` is an expected JSON RPC error code.
 */
function isJsonRpcErrorCode(value) {
    if (isNil(value))
        return false;
    return typeof value === 'number' && Object.values(_magic_sdk_types__WEBPACK_IMPORTED_MODULE_0__["RPCErrorCode"]).includes(value);
}
/**
 * Assert `value` is an empty, plain object.
 */
function isEmpty(value) {
    if (!value)
        return true;
    for (var key in value) {
        /* istanbul ignore else */
        if (Object.hasOwnProperty.call(value, key)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=type-guards.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/util/url.js":
/*!******************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/util/url.js ***!
  \******************************************************************/
/*! exports provided: createURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createURL", function() { return createURL; });
/**
 * Builds a `URL` object safely.
 */
function createURL(url, base) {
    // Safari raises an error if `undefined` is given to the second argument of
    // the `URL` constructor.
    return base ? new URL(url, base) : new URL(url);
}
//# sourceMappingURL=url.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/dist/module/util/webauthn.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/dist/module/util/webauthn.js ***!
  \***********************************************************************/
/*! exports provided: transformNewAssertionForServer, transformAssertionForServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformNewAssertionForServer", function() { return transformNewAssertionForServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformAssertionForServer", function() { return transformAssertionForServer; });
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
/* eslint-disable */
/* istanbul ignore next  */
function fromByteArray(uint8) {
    var i;
    var extraBytes = uint8.length % 3; // if we have 1 byte left, pad 2 bytes
    var output = '';
    var temp;
    var length;
    function encode(num) {
        return lookup.charAt(num);
    }
    function tripletToBase64(num) {
        return encode((num >> 18) & 0x3f) + encode((num >> 12) & 0x3f) + encode((num >> 6) & 0x3f) + encode(num & 0x3f);
    }
    // go through the array every three bytes, we'll deal with trailing stuff later
    for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
        temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
        output += tripletToBase64(temp);
    }
    // pad the end with zeros, but make sure to not forget the extra bytes
    switch (extraBytes) {
        case 1:
            temp = uint8[uint8.length - 1];
            output += encode(temp >> 2);
            output += encode((temp << 4) & 0x3f);
            output += '==';
            break;
        case 2:
            temp = (uint8[uint8.length - 2] << 8) + uint8[uint8.length - 1];
            output += encode(temp >> 10);
            output += encode((temp >> 4) & 0x3f);
            output += encode((temp << 2) & 0x3f);
            output += '=';
            break;
        default:
            break;
    }
    return output;
}
/* istanbul ignore next  */
function b64enc(buf) {
    return fromByteArray(buf).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}
/* istanbul ignore next  */
function b64RawEnc(buf) {
    return fromByteArray(buf).replace(/\+/g, '-').replace(/\//g, '_');
}
/* istanbul ignore next  */
function hexEncode(buf) {
    return Array.from(buf)
        .map(function (x) {
        return ("0" + x.toString(16)).substr(-2);
    })
        .join('');
}
/**
 * Transforms the binary data in the credential into base64 strings
 * for posting to the server.
 * @param {PublicKeyCredential} newAssertion
 */
/* istanbul ignore next  */
var transformNewAssertionForServer = function (newAssertion) {
    var attObj = new Uint8Array(newAssertion.response.attestationObject);
    var clientDataJSON = new Uint8Array(newAssertion.response.clientDataJSON);
    var rawId = new Uint8Array(newAssertion.rawId);
    var registrationClientExtensions = newAssertion.getClientExtensionResults();
    return {
        id: newAssertion.id,
        rawId: b64enc(rawId),
        type: newAssertion.type,
        attObj: b64enc(attObj),
        clientData: b64enc(clientDataJSON),
        registrationClientExtensions: JSON.stringify(registrationClientExtensions),
    };
};
/**
 * Encodes the binary data in the assertion into strings for posting to the server.
 * @param {PublicKeyCredential} newAssertion
 */
/* istanbul ignore next  */
var transformAssertionForServer = function (newAssertion) {
    var authData = new Uint8Array(newAssertion.response.authenticatorData);
    var clientDataJSON = new Uint8Array(newAssertion.response.clientDataJSON);
    var rawId = new Uint8Array(newAssertion.rawId);
    var sig = new Uint8Array(newAssertion.response.signature);
    var assertionClientExtensions = newAssertion.getClientExtensionResults();
    return {
        id: newAssertion.id,
        rawId: b64enc(rawId),
        type: newAssertion.type,
        authData: b64RawEnc(authData),
        clientData: b64RawEnc(clientDataJSON),
        signature: hexEncode(sig),
        assertionClientExtensions: JSON.stringify(assertionClientExtensions),
    };
};
//# sourceMappingURL=webauthn.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/eventemitter3/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/eventemitter3/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/semver/classes/comparator.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/semver/classes/comparator.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const ANY = Symbol('SemVer ANY')
// hoisted class for cyclic dependency
class Comparator {
  static get ANY () {
    return ANY
  }
  constructor (comp, options) {
    options = parseOptions(options)

    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp
      } else {
        comp = comp.value
      }
    }

    debug('comparator', comp, options)
    this.options = options
    this.loose = !!options.loose
    this.parse(comp)

    if (this.semver === ANY) {
      this.value = ''
    } else {
      this.value = this.operator + this.semver.version
    }

    debug('comp', this)
  }

  parse (comp) {
    const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    const m = comp.match(r)

    if (!m) {
      throw new TypeError(`Invalid comparator: ${comp}`)
    }

    this.operator = m[1] !== undefined ? m[1] : ''
    if (this.operator === '=') {
      this.operator = ''
    }

    // if it literally is just '>' or '' then allow anything.
    if (!m[2]) {
      this.semver = ANY
    } else {
      this.semver = new SemVer(m[2], this.options.loose)
    }
  }

  toString () {
    return this.value
  }

  test (version) {
    debug('Comparator.test', version, this.options.loose)

    if (this.semver === ANY || version === ANY) {
      return true
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    return cmp(version, this.operator, this.semver, this.options)
  }

  intersects (comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required')
    }

    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      }
    }

    if (this.operator === '') {
      if (this.value === '') {
        return true
      }
      return new Range(comp.value, options).test(this.value)
    } else if (comp.operator === '') {
      if (comp.value === '') {
        return true
      }
      return new Range(this.value, options).test(comp.semver)
    }

    const sameDirectionIncreasing =
      (this.operator === '>=' || this.operator === '>') &&
      (comp.operator === '>=' || comp.operator === '>')
    const sameDirectionDecreasing =
      (this.operator === '<=' || this.operator === '<') &&
      (comp.operator === '<=' || comp.operator === '<')
    const sameSemVer = this.semver.version === comp.semver.version
    const differentDirectionsInclusive =
      (this.operator === '>=' || this.operator === '<=') &&
      (comp.operator === '>=' || comp.operator === '<=')
    const oppositeDirectionsLessThan =
      cmp(this.semver, '<', comp.semver, options) &&
      (this.operator === '>=' || this.operator === '>') &&
        (comp.operator === '<=' || comp.operator === '<')
    const oppositeDirectionsGreaterThan =
      cmp(this.semver, '>', comp.semver, options) &&
      (this.operator === '<=' || this.operator === '<') &&
        (comp.operator === '>=' || comp.operator === '>')

    return (
      sameDirectionIncreasing ||
      sameDirectionDecreasing ||
      (sameSemVer && differentDirectionsInclusive) ||
      oppositeDirectionsLessThan ||
      oppositeDirectionsGreaterThan
    )
  }
}

module.exports = Comparator

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/parse-options.js")
const {re, t} = __webpack_require__(/*! ../internal/re */ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/re.js")
const cmp = __webpack_require__(/*! ../functions/cmp */ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/cmp.js")
const debug = __webpack_require__(/*! ../internal/debug */ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__(/*! ./semver */ "./node_modules/@magic-sdk/provider/node_modules/semver/classes/semver.js")
const Range = __webpack_require__(/*! ./range */ "./node_modules/@magic-sdk/provider/node_modules/semver/classes/range.js")


/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/semver/classes/range.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/semver/classes/range.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// hoisted class for cyclic dependency
class Range {
  constructor (range, options) {
    options = parseOptions(options)

    if (range instanceof Range) {
      if (
        range.loose === !!options.loose &&
        range.includePrerelease === !!options.includePrerelease
      ) {
        return range
      } else {
        return new Range(range.raw, options)
      }
    }

    if (range instanceof Comparator) {
      // just put it in the set and return
      this.raw = range.value
      this.set = [[range]]
      this.format()
      return this
    }

    this.options = options
    this.loose = !!options.loose
    this.includePrerelease = !!options.includePrerelease

    // First, split based on boolean or ||
    this.raw = range
    this.set = range
      .split(/\s*\|\|\s*/)
      // map the range to a 2d array of comparators
      .map(range => this.parseRange(range.trim()))
      // throw out any comparator lists that are empty
      // this generally means that it was not a valid range, which is allowed
      // in loose mode, but will still throw if the WHOLE range is invalid.
      .filter(c => c.length)

    if (!this.set.length) {
      throw new TypeError(`Invalid SemVer Range: ${range}`)
    }

    // if we have any that are not the null set, throw out null sets.
    if (this.set.length > 1) {
      // keep the first one, in case they're all null sets
      const first = this.set[0]
      this.set = this.set.filter(c => !isNullSet(c[0]))
      if (this.set.length === 0)
        this.set = [first]
      else if (this.set.length > 1) {
        // if we have any that are *, then the range is just *
        for (const c of this.set) {
          if (c.length === 1 && isAny(c[0])) {
            this.set = [c]
            break
          }
        }
      }
    }

    this.format()
  }

  format () {
    this.range = this.set
      .map((comps) => {
        return comps.join(' ').trim()
      })
      .join('||')
      .trim()
    return this.range
  }

  toString () {
    return this.range
  }

  parseRange (range) {
    range = range.trim()

    // memoize range parsing for performance.
    // this is a very hot path, and fully deterministic.
    const memoOpts = Object.keys(this.options).join(',')
    const memoKey = `parseRange:${memoOpts}:${range}`
    const cached = cache.get(memoKey)
    if (cached)
      return cached

    const loose = this.options.loose
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE]
    range = range.replace(hr, hyphenReplace(this.options.includePrerelease))
    debug('hyphen replace', range)
    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace)
    debug('comparator trim', range, re[t.COMPARATORTRIM])

    // `~ 1.2.3` => `~1.2.3`
    range = range.replace(re[t.TILDETRIM], tildeTrimReplace)

    // `^ 1.2.3` => `^1.2.3`
    range = range.replace(re[t.CARETTRIM], caretTrimReplace)

    // normalize spaces
    range = range.split(/\s+/).join(' ')

    // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    const compRe = loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR]
    const rangeList = range
      .split(' ')
      .map(comp => parseComparator(comp, this.options))
      .join(' ')
      .split(/\s+/)
      // >=0.0.0 is equivalent to *
      .map(comp => replaceGTE0(comp, this.options))
      // in loose mode, throw out any that are not valid comparators
      .filter(this.options.loose ? comp => !!comp.match(compRe) : () => true)
      .map(comp => new Comparator(comp, this.options))

    // if any comparators are the null set, then replace with JUST null set
    // if more than one comparator, remove any * comparators
    // also, don't include the same comparator more than once
    const l = rangeList.length
    const rangeMap = new Map()
    for (const comp of rangeList) {
      if (isNullSet(comp))
        return [comp]
      rangeMap.set(comp.value, comp)
    }
    if (rangeMap.size > 1 && rangeMap.has(''))
      rangeMap.delete('')

    const result = [...rangeMap.values()]
    cache.set(memoKey, result)
    return result
  }

  intersects (range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required')
    }

    return this.set.some((thisComparators) => {
      return (
        isSatisfiable(thisComparators, options) &&
        range.set.some((rangeComparators) => {
          return (
            isSatisfiable(rangeComparators, options) &&
            thisComparators.every((thisComparator) => {
              return rangeComparators.every((rangeComparator) => {
                return thisComparator.intersects(rangeComparator, options)
              })
            })
          )
        })
      )
    })
  }

  // if ANY of the sets match ALL of its comparators, then pass
  test (version) {
    if (!version) {
      return false
    }

    if (typeof version === 'string') {
      try {
        version = new SemVer(version, this.options)
      } catch (er) {
        return false
      }
    }

    for (let i = 0; i < this.set.length; i++) {
      if (testSet(this.set[i], version, this.options)) {
        return true
      }
    }
    return false
  }
}
module.exports = Range

const LRU = __webpack_require__(/*! lru-cache */ "./node_modules/lru-cache/index.js")
const cache = new LRU({ max: 1000 })

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/parse-options.js")
const Comparator = __webpack_require__(/*! ./comparator */ "./node_modules/@magic-sdk/provider/node_modules/semver/classes/comparator.js")
const debug = __webpack_require__(/*! ../internal/debug */ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/debug.js")
const SemVer = __webpack_require__(/*! ./semver */ "./node_modules/@magic-sdk/provider/node_modules/semver/classes/semver.js")
const {
  re,
  t,
  comparatorTrimReplace,
  tildeTrimReplace,
  caretTrimReplace
} = __webpack_require__(/*! ../internal/re */ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/re.js")

const isNullSet = c => c.value === '<0.0.0-0'
const isAny = c => c.value === ''

// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options) => {
  let result = true
  const remainingComparators = comparators.slice()
  let testComparator = remainingComparators.pop()

  while (result && remainingComparators.length) {
    result = remainingComparators.every((otherComparator) => {
      return testComparator.intersects(otherComparator, options)
    })

    testComparator = remainingComparators.pop()
  }

  return result
}

// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options) => {
  debug('comp', comp, options)
  comp = replaceCarets(comp, options)
  debug('caret', comp)
  comp = replaceTildes(comp, options)
  debug('tildes', comp)
  comp = replaceXRanges(comp, options)
  debug('xrange', comp)
  comp = replaceStars(comp, options)
  debug('stars', comp)
  return comp
}

const isX = id => !id || id.toLowerCase() === 'x' || id === '*'

// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
const replaceTildes = (comp, options) =>
  comp.trim().split(/\s+/).map((comp) => {
    return replaceTilde(comp, options)
  }).join(' ')

const replaceTilde = (comp, options) => {
  const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE]
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('tilde', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0 <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      // ~1.2 == >=1.2.0 <1.3.0-0
      ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`
    } else if (pr) {
      debug('replaceTilde pr', pr)
      ret = `>=${M}.${m}.${p}-${pr
      } <${M}.${+m + 1}.0-0`
    } else {
      // ~1.2.3 == >=1.2.3 <1.3.0-0
      ret = `>=${M}.${m}.${p
      } <${M}.${+m + 1}.0-0`
    }

    debug('tilde return', ret)
    return ret
  })
}

// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
const replaceCarets = (comp, options) =>
  comp.trim().split(/\s+/).map((comp) => {
    return replaceCaret(comp, options)
  }).join(' ')

const replaceCaret = (comp, options) => {
  debug('caret', comp, options)
  const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET]
  const z = options.includePrerelease ? '-0' : ''
  return comp.replace(r, (_, M, m, p, pr) => {
    debug('caret', comp, _, M, m, p, pr)
    let ret

    if (isX(M)) {
      ret = ''
    } else if (isX(m)) {
      ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`
    } else if (isX(p)) {
      if (M === '0') {
        ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`
      } else {
        ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`
      }
    } else if (pr) {
      debug('replaceCaret pr', pr)
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p}-${pr
          } <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p}-${pr
        } <${+M + 1}.0.0-0`
      }
    } else {
      debug('no pr')
      if (M === '0') {
        if (m === '0') {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${m}.${+p + 1}-0`
        } else {
          ret = `>=${M}.${m}.${p
          }${z} <${M}.${+m + 1}.0-0`
        }
      } else {
        ret = `>=${M}.${m}.${p
        } <${+M + 1}.0.0-0`
      }
    }

    debug('caret return', ret)
    return ret
  })
}

const replaceXRanges = (comp, options) => {
  debug('replaceXRanges', comp, options)
  return comp.split(/\s+/).map((comp) => {
    return replaceXRange(comp, options)
  }).join(' ')
}

const replaceXRange = (comp, options) => {
  comp = comp.trim()
  const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE]
  return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
    debug('xRange', comp, ret, gtlt, M, m, p, pr)
    const xM = isX(M)
    const xm = xM || isX(m)
    const xp = xm || isX(p)
    const anyX = xp

    if (gtlt === '=' && anyX) {
      gtlt = ''
    }

    // if we're including prereleases in the match, then we need
    // to fix this to -0, the lowest possible prerelease value
    pr = options.includePrerelease ? '-0' : ''

    if (xM) {
      if (gtlt === '>' || gtlt === '<') {
        // nothing is allowed
        ret = '<0.0.0-0'
      } else {
        // nothing is forbidden
        ret = '*'
      }
    } else if (gtlt && anyX) {
      // we know patch is an x, because we have any x at all.
      // replace X with 0
      if (xm) {
        m = 0
      }
      p = 0

      if (gtlt === '>') {
        // >1 => >=2.0.0
        // >1.2 => >=1.3.0
        gtlt = '>='
        if (xm) {
          M = +M + 1
          m = 0
          p = 0
        } else {
          m = +m + 1
          p = 0
        }
      } else if (gtlt === '<=') {
        // <=0.7.x is actually <0.8.0, since any 0.7.x should
        // pass.  Similarly, <=7.x is actually <8.0.0, etc.
        gtlt = '<'
        if (xm) {
          M = +M + 1
        } else {
          m = +m + 1
        }
      }

      if (gtlt === '<')
        pr = '-0'

      ret = `${gtlt + M}.${m}.${p}${pr}`
    } else if (xm) {
      ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`
    } else if (xp) {
      ret = `>=${M}.${m}.0${pr
      } <${M}.${+m + 1}.0-0`
    }

    debug('xRange return', ret)

    return ret
  })
}

// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options) => {
  debug('replaceStars', comp, options)
  // Looseness is ignored here.  star is always as loose as it gets!
  return comp.trim().replace(re[t.STAR], '')
}

const replaceGTE0 = (comp, options) => {
  debug('replaceGTE0', comp, options)
  return comp.trim()
    .replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '')
}

// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
const hyphenReplace = incPr => ($0,
  from, fM, fm, fp, fpr, fb,
  to, tM, tm, tp, tpr, tb) => {
  if (isX(fM)) {
    from = ''
  } else if (isX(fm)) {
    from = `>=${fM}.0.0${incPr ? '-0' : ''}`
  } else if (isX(fp)) {
    from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`
  } else if (fpr) {
    from = `>=${from}`
  } else {
    from = `>=${from}${incPr ? '-0' : ''}`
  }

  if (isX(tM)) {
    to = ''
  } else if (isX(tm)) {
    to = `<${+tM + 1}.0.0-0`
  } else if (isX(tp)) {
    to = `<${tM}.${+tm + 1}.0-0`
  } else if (tpr) {
    to = `<=${tM}.${tm}.${tp}-${tpr}`
  } else if (incPr) {
    to = `<${tM}.${tm}.${+tp + 1}-0`
  } else {
    to = `<=${to}`
  }

  return (`${from} ${to}`).trim()
}

const testSet = (set, version, options) => {
  for (let i = 0; i < set.length; i++) {
    if (!set[i].test(version)) {
      return false
    }
  }

  if (version.prerelease.length && !options.includePrerelease) {
    // Find the set of versions that are allowed to have prereleases
    // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
    // That should allow `1.2.3-pr.2` to pass.
    // However, `1.2.4-alpha.notready` should NOT be allowed,
    // even though it's within the range set by the comparators.
    for (let i = 0; i < set.length; i++) {
      debug(set[i].semver)
      if (set[i].semver === Comparator.ANY) {
        continue
      }

      if (set[i].semver.prerelease.length > 0) {
        const allowed = set[i].semver
        if (allowed.major === version.major &&
            allowed.minor === version.minor &&
            allowed.patch === version.patch) {
          return true
        }
      }
    }

    // Version has a -pre, but it's not one of the ones we like.
    return false
  }

  return true
}


/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/semver/classes/semver.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/semver/classes/semver.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const debug = __webpack_require__(/*! ../internal/debug */ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/debug.js")
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __webpack_require__(/*! ../internal/constants */ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/constants.js")
const { re, t } = __webpack_require__(/*! ../internal/re */ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/re.js")

const parseOptions = __webpack_require__(/*! ../internal/parse-options */ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/parse-options.js")
const { compareIdentifiers } = __webpack_require__(/*! ../internal/identifiers */ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/identifiers.js")
class SemVer {
  constructor (version, options) {
    options = parseOptions(options)

    if (version instanceof SemVer) {
      if (version.loose === !!options.loose &&
          version.includePrerelease === !!options.includePrerelease) {
        return version
      } else {
        version = version.version
      }
    } else if (typeof version !== 'string') {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      )
    }

    debug('SemVer', version, options)
    this.options = options
    this.loose = !!options.loose
    // this isn't actually relevant for versions, but keep it so that we
    // don't run into trouble passing this.options around.
    this.includePrerelease = !!options.includePrerelease

    const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL])

    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`)
    }

    this.raw = version

    // these are actually numbers
    this.major = +m[1]
    this.minor = +m[2]
    this.patch = +m[3]

    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError('Invalid major version')
    }

    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError('Invalid minor version')
    }

    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError('Invalid patch version')
    }

    // numberify any prerelease numeric ids
    if (!m[4]) {
      this.prerelease = []
    } else {
      this.prerelease = m[4].split('.').map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num
          }
        }
        return id
      })
    }

    this.build = m[5] ? m[5].split('.') : []
    this.format()
  }

  format () {
    this.version = `${this.major}.${this.minor}.${this.patch}`
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join('.')}`
    }
    return this.version
  }

  toString () {
    return this.version
  }

  compare (other) {
    debug('SemVer.compare', this.version, this.options, other)
    if (!(other instanceof SemVer)) {
      if (typeof other === 'string' && other === this.version) {
        return 0
      }
      other = new SemVer(other, this.options)
    }

    if (other.version === this.version) {
      return 0
    }

    return this.compareMain(other) || this.comparePre(other)
  }

  compareMain (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    return (
      compareIdentifiers(this.major, other.major) ||
      compareIdentifiers(this.minor, other.minor) ||
      compareIdentifiers(this.patch, other.patch)
    )
  }

  comparePre (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    // NOT having a prerelease is > having one
    if (this.prerelease.length && !other.prerelease.length) {
      return -1
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0
    }

    let i = 0
    do {
      const a = this.prerelease[i]
      const b = other.prerelease[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  compareBuild (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options)
    }

    let i = 0
    do {
      const a = this.build[i]
      const b = other.build[i]
      debug('prerelease compare', i, a, b)
      if (a === undefined && b === undefined) {
        return 0
      } else if (b === undefined) {
        return 1
      } else if (a === undefined) {
        return -1
      } else if (a === b) {
        continue
      } else {
        return compareIdentifiers(a, b)
      }
    } while (++i)
  }

  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc (release, identifier) {
    switch (release) {
      case 'premajor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor = 0
        this.major++
        this.inc('pre', identifier)
        break
      case 'preminor':
        this.prerelease.length = 0
        this.patch = 0
        this.minor++
        this.inc('pre', identifier)
        break
      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        this.prerelease.length = 0
        this.inc('patch', identifier)
        this.inc('pre', identifier)
        break
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.
      case 'prerelease':
        if (this.prerelease.length === 0) {
          this.inc('patch', identifier)
        }
        this.inc('pre', identifier)
        break

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if (
          this.minor !== 0 ||
          this.patch !== 0 ||
          this.prerelease.length === 0
        ) {
          this.major++
        }
        this.minor = 0
        this.patch = 0
        this.prerelease = []
        break
      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++
        }
        this.patch = 0
        this.prerelease = []
        break
      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if (this.prerelease.length === 0) {
          this.patch++
        }
        this.prerelease = []
        break
      // This probably shouldn't be used publicly.
      // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
      case 'pre':
        if (this.prerelease.length === 0) {
          this.prerelease = [0]
        } else {
          let i = this.prerelease.length
          while (--i >= 0) {
            if (typeof this.prerelease[i] === 'number') {
              this.prerelease[i]++
              i = -2
            }
          }
          if (i === -1) {
            // didn't increment anything
            this.prerelease.push(0)
          }
        }
        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          if (this.prerelease[0] === identifier) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = [identifier, 0]
            }
          } else {
            this.prerelease = [identifier, 0]
          }
        }
        break

      default:
        throw new Error(`invalid increment argument: ${release}`)
    }
    this.format()
    this.raw = this.version
    return this
  }
}

module.exports = SemVer


/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/cmp.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/semver/functions/cmp.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const eq = __webpack_require__(/*! ./eq */ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/eq.js")
const neq = __webpack_require__(/*! ./neq */ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/neq.js")
const gt = __webpack_require__(/*! ./gt */ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/gt.js")
const gte = __webpack_require__(/*! ./gte */ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/gte.js")
const lt = __webpack_require__(/*! ./lt */ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/lt.js")
const lte = __webpack_require__(/*! ./lte */ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/lte.js")

const cmp = (a, op, b, loose) => {
  switch (op) {
    case '===':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a === b

    case '!==':
      if (typeof a === 'object')
        a = a.version
      if (typeof b === 'object')
        b = b.version
      return a !== b

    case '':
    case '=':
    case '==':
      return eq(a, b, loose)

    case '!=':
      return neq(a, b, loose)

    case '>':
      return gt(a, b, loose)

    case '>=':
      return gte(a, b, loose)

    case '<':
      return lt(a, b, loose)

    case '<=':
      return lte(a, b, loose)

    default:
      throw new TypeError(`Invalid operator: ${op}`)
  }
}
module.exports = cmp


/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/compare.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/semver/functions/compare.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const SemVer = __webpack_require__(/*! ../classes/semver */ "./node_modules/@magic-sdk/provider/node_modules/semver/classes/semver.js")
const compare = (a, b, loose) =>
  new SemVer(a, loose).compare(new SemVer(b, loose))

module.exports = compare


/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/eq.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/semver/functions/eq.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/compare.js")
const eq = (a, b, loose) => compare(a, b, loose) === 0
module.exports = eq


/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/gt.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/semver/functions/gt.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/compare.js")
const gt = (a, b, loose) => compare(a, b, loose) > 0
module.exports = gt


/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/gte.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/semver/functions/gte.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/compare.js")
const gte = (a, b, loose) => compare(a, b, loose) >= 0
module.exports = gte


/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/lt.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/semver/functions/lt.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/compare.js")
const lt = (a, b, loose) => compare(a, b, loose) < 0
module.exports = lt


/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/lte.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/semver/functions/lte.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/compare.js")
const lte = (a, b, loose) => compare(a, b, loose) <= 0
module.exports = lte


/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/neq.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/semver/functions/neq.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const compare = __webpack_require__(/*! ./compare */ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/compare.js")
const neq = (a, b, loose) => compare(a, b, loose) !== 0
module.exports = neq


/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/semver/functions/satisfies.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/semver/functions/satisfies.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Range = __webpack_require__(/*! ../classes/range */ "./node_modules/@magic-sdk/provider/node_modules/semver/classes/range.js")
const satisfies = (version, range, options) => {
  try {
    range = new Range(range, options)
  } catch (er) {
    return false
  }
  return range.test(version)
}
module.exports = satisfies


/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/constants.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/semver/internal/constants.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0'

const MAX_LENGTH = 256
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */ 9007199254740991

// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16

module.exports = {
  SEMVER_SPEC_VERSION,
  MAX_LENGTH,
  MAX_SAFE_INTEGER,
  MAX_SAFE_COMPONENT_LENGTH
}


/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/debug.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/semver/internal/debug.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {const debug = (
  typeof process === 'object' &&
  process.env &&
  process.env.NODE_DEBUG &&
  /\bsemver\b/i.test(process.env.NODE_DEBUG)
) ? (...args) => console.error('SEMVER', ...args)
  : () => {}

module.exports = debug

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/identifiers.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/semver/internal/identifiers.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const numeric = /^[0-9]+$/
const compareIdentifiers = (a, b) => {
  const anum = numeric.test(a)
  const bnum = numeric.test(b)

  if (anum && bnum) {
    a = +a
    b = +b
  }

  return a === b ? 0
    : (anum && !bnum) ? -1
    : (bnum && !anum) ? 1
    : a < b ? -1
    : 1
}

const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a)

module.exports = {
  compareIdentifiers,
  rcompareIdentifiers
}


/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/parse-options.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/semver/internal/parse-options.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// parse out just the options we care about so we always get a consistent
// obj with keys in a consistent order.
const opts = ['includePrerelease', 'loose', 'rtl']
const parseOptions = options =>
  !options ? {}
  : typeof options !== 'object' ? { loose: true }
  : opts.filter(k => options[k]).reduce((options, k) => {
    options[k] = true
    return options
  }, {})
module.exports = parseOptions


/***/ }),

/***/ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/re.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@magic-sdk/provider/node_modules/semver/internal/re.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const { MAX_SAFE_COMPONENT_LENGTH } = __webpack_require__(/*! ./constants */ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/constants.js")
const debug = __webpack_require__(/*! ./debug */ "./node_modules/@magic-sdk/provider/node_modules/semver/internal/debug.js")
exports = module.exports = {}

// The actual regexps go on exports.re
const re = exports.re = []
const src = exports.src = []
const t = exports.t = {}
let R = 0

const createToken = (name, value, isGlobal) => {
  const index = R++
  debug(index, value)
  t[name] = index
  src[index] = value
  re[index] = new RegExp(value, isGlobal ? 'g' : undefined)
}

// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.

// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.

createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*')
createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+')

// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.

createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*')

// ## Main Version
// Three dot-separated numeric identifiers.

createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})\\.` +
                   `(${src[t.NUMERICIDENTIFIER]})`)

createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` +
                        `(${src[t.NUMERICIDENTIFIERLOOSE]})`)

// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.

createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NUMERICIDENTIFIER]
}|${src[t.NONNUMERICIDENTIFIER]})`)

createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NUMERICIDENTIFIERLOOSE]
}|${src[t.NONNUMERICIDENTIFIER]})`)

// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.

createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]
}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`)

createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]
}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`)

// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.

createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+')

// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.

createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]
}(?:\\.${src[t.BUILDIDENTIFIER]})*))`)

// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.

// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.

createToken('FULLPLAIN', `v?${src[t.MAINVERSION]
}${src[t.PRERELEASE]}?${
  src[t.BUILD]}?`)

createToken('FULL', `^${src[t.FULLPLAIN]}$`)

// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]
}${src[t.PRERELEASELOOSE]}?${
  src[t.BUILD]}?`)

createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`)

createToken('GTLT', '((?:<|>)?=?)')

// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`)
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`)

createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:\\.(${src[t.XRANGEIDENTIFIER]})` +
                   `(?:${src[t.PRERELEASE]})?${
                     src[t.BUILD]}?` +
                   `)?)?`)

createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` +
                        `(?:${src[t.PRERELEASELOOSE]})?${
                          src[t.BUILD]}?` +
                        `)?)?`)

createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`)
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`)

// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCE', `${'(^|[^\\d])' +
              '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` +
              `(?:$|[^\\d])`)
createToken('COERCERTL', src[t.COERCE], true)

// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)')

createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true)
exports.tildeTrimReplace = '$1~'

createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`)
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`)

// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)')

createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true)
exports.caretTrimReplace = '$1^'

createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`)
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`)

// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`)
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`)

// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]
}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true)
exports.comparatorTrimReplace = '$1$2$3'

// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` +
                   `\\s+-\\s+` +
                   `(${src[t.XRANGEPLAIN]})` +
                   `\\s*$`)

createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s+-\\s+` +
                        `(${src[t.XRANGEPLAINLOOSE]})` +
                        `\\s*$`)

// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*')
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\.0\.0\\s*$')
createToken('GTE0PRE', '^\\s*>=\\s*0\.0\.0-0\\s*$')


/***/ }),

/***/ "./node_modules/@magic-sdk/types/dist/module/core/exception-types.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@magic-sdk/types/dist/module/core/exception-types.js ***!
  \***************************************************************************/
/*! exports provided: SDKErrorCode, SDKWarningCode, RPCErrorCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKErrorCode", function() { return SDKErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDKWarningCode", function() { return SDKWarningCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RPCErrorCode", function() { return RPCErrorCode; });
var SDKErrorCode;
(function (SDKErrorCode) {
    SDKErrorCode["MissingApiKey"] = "MISSING_API_KEY";
    SDKErrorCode["ModalNotReady"] = "MODAL_NOT_READY";
    SDKErrorCode["MalformedResponse"] = "MALFORMED_RESPONSE";
    SDKErrorCode["InvalidArgument"] = "INVALID_ARGUMENT";
    SDKErrorCode["ExtensionNotInitialized"] = "EXTENSION_NOT_INITIALIZED";
    SDKErrorCode["WebAuthnNotSupported"] = "WEBAUTHN_NOT_SUPPORTED";
    SDKErrorCode["IncompatibleExtensions"] = "INCOMPATIBLE_EXTENSIONS";
    SDKErrorCode["WebAuthnCreateCredentialError"] = "WEBAUTHN_CREATE_CREDENTIAL_ERROR";
})(SDKErrorCode || (SDKErrorCode = {}));
var SDKWarningCode;
(function (SDKWarningCode) {
    SDKWarningCode["SyncWeb3Method"] = "SYNC_WEB3_METHOD";
    SDKWarningCode["DuplicateIframe"] = "DUPLICATE_IFRAME";
    SDKWarningCode["ReactNativeEndpointConfiguration"] = "REACT_NATIVE_ENDPOINT_CONFIGURATION";
    SDKWarningCode["DeprecationNotice"] = "DEPRECATION_NOTICE";
})(SDKWarningCode || (SDKWarningCode = {}));
var RPCErrorCode;
(function (RPCErrorCode) {
    // Standard JSON RPC 2.0 Error Codes
    RPCErrorCode[RPCErrorCode["ParseError"] = -32700] = "ParseError";
    RPCErrorCode[RPCErrorCode["InvalidRequest"] = -32600] = "InvalidRequest";
    RPCErrorCode[RPCErrorCode["MethodNotFound"] = -32601] = "MethodNotFound";
    RPCErrorCode[RPCErrorCode["InvalidParams"] = -32602] = "InvalidParams";
    RPCErrorCode[RPCErrorCode["InternalError"] = -32603] = "InternalError";
    // Custom RPC Error Codes
    RPCErrorCode[RPCErrorCode["MagicLinkFailedVerification"] = -10000] = "MagicLinkFailedVerification";
    RPCErrorCode[RPCErrorCode["MagicLinkExpired"] = -10001] = "MagicLinkExpired";
    RPCErrorCode[RPCErrorCode["MagicLinkRateLimited"] = -10002] = "MagicLinkRateLimited";
    RPCErrorCode[RPCErrorCode["MagicLinkInvalidRedirectURL"] = -10006] = "MagicLinkInvalidRedirectURL";
    RPCErrorCode[RPCErrorCode["UserAlreadyLoggedIn"] = -10003] = "UserAlreadyLoggedIn";
    RPCErrorCode[RPCErrorCode["UpdateEmailFailed"] = -10004] = "UpdateEmailFailed";
    RPCErrorCode[RPCErrorCode["UserRequestEditEmail"] = -10005] = "UserRequestEditEmail";
})(RPCErrorCode || (RPCErrorCode = {}));
//# sourceMappingURL=exception-types.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/types/dist/module/core/json-rpc-types.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@magic-sdk/types/dist/module/core/json-rpc-types.js ***!
  \**************************************************************************/
/*! exports provided: MagicPayloadMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicPayloadMethod", function() { return MagicPayloadMethod; });
// --- Payload methods
/**
 * Enum of JSON RPC methods for interacting with the Magic SDK authentication
 * relayer.
 */
var MagicPayloadMethod;
(function (MagicPayloadMethod) {
    MagicPayloadMethod["LoginWithMagicLink"] = "magic_auth_login_with_magic_link";
    MagicPayloadMethod["LoginWithCredential"] = "magic_auth_login_with_credential";
    MagicPayloadMethod["GetIdToken"] = "magic_auth_get_id_token";
    MagicPayloadMethod["GenerateIdToken"] = "magic_auth_generate_id_token";
    MagicPayloadMethod["GetMetadata"] = "magic_auth_get_metadata";
    MagicPayloadMethod["IsLoggedIn"] = "magic_auth_is_logged_in";
    MagicPayloadMethod["Logout"] = "magic_auth_logout";
    MagicPayloadMethod["UpdateEmail"] = "magic_auth_update_email";
    MagicPayloadMethod["WebAuthnRegistrationStart"] = "magic_auth_webauthn_registration_start";
    MagicPayloadMethod["RegisterWithWebAuth"] = "magic_auth_webauthn_register";
    MagicPayloadMethod["LoginWithWebAuthn"] = "magic_auth_login_with_web_authn";
    MagicPayloadMethod["WebAuthnLoginVerfiy"] = "magic_auth_login_with_webauthn_verify";
    MagicPayloadMethod["GetWebAuthnInfo"] = "magic_user_get_webauthn_credentials";
    MagicPayloadMethod["UpdateWebAuthnInfo"] = "magic_user_update_webauthn";
    MagicPayloadMethod["UnregisterWebAuthDevice"] = "magic_user_unregister_webauthn";
    MagicPayloadMethod["RegisterWebAuthDeviceStart"] = "magic_auth_register_webauthn_device_start";
    MagicPayloadMethod["RegisterWebAuthDevice"] = "magic_auth_register_webauthn_device";
})(MagicPayloadMethod || (MagicPayloadMethod = {}));
//# sourceMappingURL=json-rpc-types.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/types/dist/module/core/message-types.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@magic-sdk/types/dist/module/core/message-types.js ***!
  \*************************************************************************/
/*! exports provided: MagicIncomingWindowMessage, MagicOutgoingWindowMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicIncomingWindowMessage", function() { return MagicIncomingWindowMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicOutgoingWindowMessage", function() { return MagicOutgoingWindowMessage; });
var MagicIncomingWindowMessage;
(function (MagicIncomingWindowMessage) {
    MagicIncomingWindowMessage["MAGIC_HANDLE_RESPONSE"] = "MAGIC_HANDLE_RESPONSE";
    MagicIncomingWindowMessage["MAGIC_OVERLAY_READY"] = "MAGIC_OVERLAY_READY";
    MagicIncomingWindowMessage["MAGIC_SHOW_OVERLAY"] = "MAGIC_SHOW_OVERLAY";
    MagicIncomingWindowMessage["MAGIC_HIDE_OVERLAY"] = "MAGIC_HIDE_OVERLAY";
    MagicIncomingWindowMessage["MAGIC_HANDLE_EVENT"] = "MAGIC_HANDLE_EVENT";
})(MagicIncomingWindowMessage || (MagicIncomingWindowMessage = {}));
var MagicOutgoingWindowMessage;
(function (MagicOutgoingWindowMessage) {
    MagicOutgoingWindowMessage["MAGIC_HANDLE_REQUEST"] = "MAGIC_HANDLE_REQUEST";
})(MagicOutgoingWindowMessage || (MagicOutgoingWindowMessage = {}));
//# sourceMappingURL=message-types.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/types/dist/module/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@magic-sdk/types/dist/module/index.js ***!
  \************************************************************/
/*! exports provided: MagicPayloadMethod, MagicIncomingWindowMessage, MagicOutgoingWindowMessage, SDKErrorCode, SDKWarningCode, RPCErrorCode, EthChainType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_json_rpc_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/json-rpc-types */ "./node_modules/@magic-sdk/types/dist/module/core/json-rpc-types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MagicPayloadMethod", function() { return _core_json_rpc_types__WEBPACK_IMPORTED_MODULE_0__["MagicPayloadMethod"]; });

/* harmony import */ var _core_message_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/message-types */ "./node_modules/@magic-sdk/types/dist/module/core/message-types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MagicIncomingWindowMessage", function() { return _core_message_types__WEBPACK_IMPORTED_MODULE_1__["MagicIncomingWindowMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MagicOutgoingWindowMessage", function() { return _core_message_types__WEBPACK_IMPORTED_MODULE_1__["MagicOutgoingWindowMessage"]; });

/* harmony import */ var _core_exception_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/exception-types */ "./node_modules/@magic-sdk/types/dist/module/core/exception-types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKErrorCode", function() { return _core_exception_types__WEBPACK_IMPORTED_MODULE_2__["SDKErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKWarningCode", function() { return _core_exception_types__WEBPACK_IMPORTED_MODULE_2__["SDKWarningCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RPCErrorCode", function() { return _core_exception_types__WEBPACK_IMPORTED_MODULE_2__["RPCErrorCode"]; });

/* harmony import */ var _modules_rpc_provider_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/rpc-provider-types */ "./node_modules/@magic-sdk/types/dist/module/modules/rpc-provider-types.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EthChainType", function() { return _modules_rpc_provider_types__WEBPACK_IMPORTED_MODULE_3__["EthChainType"]; });

// Only re-export types that are intended for the public API from this file.




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@magic-sdk/types/dist/module/modules/rpc-provider-types.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@magic-sdk/types/dist/module/modules/rpc-provider-types.js ***!
  \*********************************************************************************/
/*! exports provided: EthChainType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthChainType", function() { return EthChainType; });
var EthChainType;
(function (EthChainType) {
    EthChainType["Harmony"] = "HARMONY";
})(EthChainType || (EthChainType = {}));
//# sourceMappingURL=rpc-provider-types.js.map

/***/ }),

/***/ "./node_modules/localforage-driver-memory/_bundle/umd.js":
/*!***************************************************************!*\
  !*** ./node_modules/localforage-driver-memory/_bundle/umd.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
MIT License

Copyright (c) 2018 Arturas Molcanovas <a.molcanovas@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/


(function (global, factory) {
     true ? factory(exports) :
    undefined;
}(typeof self !== 'undefined' ? self : this, function (exports) { 'use strict';

    var _driver = 'localforage-driver-memory';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /*!
    MIT License

    Copyright (c) 2018 Arturas Molcanovas <a.molcanovas@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

    */

    /**
     * Abstracts constructing a Blob object, so it also works in older
     * browsers that don't support the native Blob constructor. (i.e.
     * old QtWebKit versions, at least).
     * Abstracts constructing a Blob object, so it also works in older
     * browsers that don't support the native Blob constructor. (i.e.
     * old QtWebKit versions, at least).
     *
     * @param parts
     * @param properties
     */
    function createBlob(parts, properties) {
        /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
        parts = parts || [];
        properties = properties || {};
        try {
            return new Blob(parts, properties);
        }
        catch (e) {
            if (e.name !== 'TypeError') {
                throw e;
            }
            //tslint:disable-next-line:variable-name
            var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder
                : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder
                    : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder
                        : WebKitBlobBuilder;
            var builder = new Builder();
            for (var i = 0; i < parts.length; i += 1) {
                builder.append(parts[i]);
            }
            return builder.getBlob(properties.type);
        }
    }

    var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;
    var SERIALIZED_MARKER_LENGTH = "__lfsc__:" /* SERIALIZED_MARKER */.length;
    var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + "arbf" /* TYPE_ARRAYBUFFER */.length;
    //tslint:disable:no-magic-numbers no-bitwise prefer-switch no-unbound-method
    var toString = Object.prototype.toString;
    function stringToBuffer(serializedString) {
        // Fill the string into a ArrayBuffer.
        var bufferLength = serializedString.length * 0.75;
        var len = serializedString.length;
        if (serializedString[serializedString.length - 1] === '=') {
            bufferLength--;
            if (serializedString[serializedString.length - 2] === '=') {
                bufferLength--;
            }
        }
        var buffer = new ArrayBuffer(bufferLength);
        var bytes = new Uint8Array(buffer);
        for (var i = 0, p = 0; i < len; i += 4) {
            var encoded1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" /* BASE_CHARS */.indexOf(serializedString[i]);
            var encoded2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" /* BASE_CHARS */.indexOf(serializedString[i + 1]);
            var encoded3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" /* BASE_CHARS */.indexOf(serializedString[i + 2]);
            var encoded4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" /* BASE_CHARS */.indexOf(serializedString[i + 3]);
            bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
            bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
            bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
        }
        return buffer;
    }
    /**
     * Converts a buffer to a string to store, serialized, in the backend
     * storage library.
     */
    function bufferToString(buffer) {
        // base64-arraybuffer
        var bytes = new Uint8Array(buffer);
        var base64String = '';
        for (var i = 0; i < bytes.length; i += 3) {
            /*jslint bitwise: true */
            base64String += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" /* BASE_CHARS */[bytes[i] >> 2];
            base64String += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" /* BASE_CHARS */[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
            base64String +=
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" /* BASE_CHARS */[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
            base64String += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/" /* BASE_CHARS */[bytes[i + 2] & 63];
        }
        if (bytes.length % 3 === 2) {
            base64String = base64String.substring(0, base64String.length - 1) + '=';
        }
        else if (bytes.length % 3 === 1) {
            base64String = base64String.substring(0, base64String.length - 2) + '==';
        }
        return base64String;
    }
    /**
     * Serialize a value, afterwards executing a callback (which usually
     * instructs the `setItem()` callback/promise to be executed). This is how
     * we store binary data with localStorage.
     * @param value
     * @param callback
     */
    function serialize(value, callback) {
        var valueType = '';
        if (value) {
            valueType = toString.call(value);
        }
        // Cannot use `value instanceof ArrayBuffer` or such here, as these
        // checks fail when running the tests using casper.js...
        if (value && (valueType === '[object ArrayBuffer]' ||
            (value.buffer && toString.call(value.buffer) === '[object ArrayBuffer]'))) {
            // Convert binary arrays to a string and prefix the string with
            // a special marker.
            var buffer = void 0;
            var marker = "__lfsc__:" /* SERIALIZED_MARKER */;
            if (value instanceof ArrayBuffer) {
                buffer = value;
                marker += "arbf" /* TYPE_ARRAYBUFFER */;
            }
            else {
                buffer = value.buffer;
                if (valueType === '[object Int8Array]') {
                    marker += "si08" /* TYPE_INT8ARRAY */;
                }
                else if (valueType === '[object Uint8Array]') {
                    marker += "ui08" /* TYPE_UINT8ARRAY */;
                }
                else if (valueType === '[object Uint8ClampedArray]') {
                    marker += "uic8" /* TYPE_UINT8CLAMPEDARRAY */;
                }
                else if (valueType === '[object Int16Array]') {
                    marker += "si16" /* TYPE_INT16ARRAY */;
                }
                else if (valueType === '[object Uint16Array]') {
                    marker += "ur16" /* TYPE_UINT16ARRAY */;
                }
                else if (valueType === '[object Int32Array]') {
                    marker += "si32" /* TYPE_INT32ARRAY */;
                }
                else if (valueType === '[object Uint32Array]') {
                    marker += "ui32" /* TYPE_UINT32ARRAY */;
                }
                else if (valueType === '[object Float32Array]') {
                    marker += "fl32" /* TYPE_FLOAT32ARRAY */;
                }
                else if (valueType === '[object Float64Array]') {
                    marker += "fl64" /* TYPE_FLOAT64ARRAY */;
                }
                else {
                    callback(new Error('Failed to get type for BinaryArray'));
                }
            }
            callback(marker + bufferToString(buffer));
        }
        else if (valueType === '[object Blob]') {
            // Convert the blob to a binaryArray and then to a string.
            var fileReader = new FileReader();
            fileReader.onload = function () {
                // Backwards-compatible prefix for the blob type.
                //tslint:disable-next-line:restrict-plus-operands
                var str = "~~local_forage_type~" /* BLOB_TYPE_PREFIX */ + value.type + "~" + bufferToString(this.result);
                callback("__lfsc__:" /* SERIALIZED_MARKER */ + "blob" /* TYPE_BLOB */ + str);
            };
            fileReader.readAsArrayBuffer(value);
        }
        else {
            try {
                callback(JSON.stringify(value));
            }
            catch (e) {
                console.error('Couldn\'t convert value into a JSON string: ', value);
                callback(null, e);
            }
        }
    }
    /**
     * Deserialize data we've inserted into a value column/field. We place
     * special markers into our strings to mark them as encoded; this isn't
     * as nice as a meta field, but it's the only sane thing we can do whilst
     * keeping localStorage support intact.
     *
     * Oftentimes this will just deserialize JSON content, but if we have a
     * special marker (SERIALIZED_MARKER, defined above), we will extract
     * some kind of arraybuffer/binary data/typed array out of the string.
     * @param value
     */
    function deserialize(value) {
        // If we haven't marked this string as being specially serialized (i.e.
        // something other than serialized JSON), we can just return it and be
        // done with it.
        if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== "__lfsc__:" /* SERIALIZED_MARKER */) {
            return JSON.parse(value);
        }
        // The following code deals with deserializing some kind of Blob or
        // TypedArray. First we separate out the type of data we're dealing
        // with from the data itself.
        var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
        var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);
        var blobType;
        // Backwards-compatible blob type serialization strategy.
        // DBs created with older versions of localForage will simply not have the blob type.
        if (type === "blob" /* TYPE_BLOB */ && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
            var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
            blobType = matcher[1];
            serializedString = serializedString.substring(matcher[0].length);
        }
        var buffer = stringToBuffer(serializedString);
        // Return the right type based on the code/type set during
        // serialization.
        switch (type) {
            case "arbf" /* TYPE_ARRAYBUFFER */:
                return buffer;
            case "blob" /* TYPE_BLOB */:
                return createBlob([buffer], { type: blobType });
            case "si08" /* TYPE_INT8ARRAY */:
                return new Int8Array(buffer);
            case "ui08" /* TYPE_UINT8ARRAY */:
                return new Uint8Array(buffer);
            case "uic8" /* TYPE_UINT8CLAMPEDARRAY */:
                return new Uint8ClampedArray(buffer);
            case "si16" /* TYPE_INT16ARRAY */:
                return new Int16Array(buffer);
            case "ur16" /* TYPE_UINT16ARRAY */:
                return new Uint16Array(buffer);
            case "si32" /* TYPE_INT32ARRAY */:
                return new Int32Array(buffer);
            case "ui32" /* TYPE_UINT32ARRAY */:
                return new Uint32Array(buffer);
            case "fl32" /* TYPE_FLOAT32ARRAY */:
                return new Float32Array(buffer);
            case "fl64" /* TYPE_FLOAT64ARRAY */:
                return new Float64Array(buffer);
            default:
                throw new Error('Unkown type: ' + type);
        }
    }

    function clone(obj) {
        var e_1, _a;
        if (obj === null || typeof (obj) !== 'object' || 'isActiveClone' in obj) {
            return obj;
        }
        var temp = obj instanceof Date ? new Date(obj) : (obj.constructor());
        try {
            for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    obj['isActiveClone'] = null;
                    temp[key] = clone(obj[key]);
                    delete obj['isActiveClone'];
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return temp;
    }

    function getKeyPrefix(options, defaultConfig) {
        return (options.name || defaultConfig.name) + "/" + (options.storeName || defaultConfig.storeName) + "/";
    }

    function executeCallback(promise, callback) {
        if (callback) {
            promise.then(function (result) {
                callback(null, result);
            }, function (error) {
                callback(error);
            });
        }
    }

    function getCallback() {
        var _args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
        }
        if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
            return arguments[arguments.length - 1];
        }
    }

    //tslint:disable-next-line:no-ignored-initial-value
    function dropInstanceCommon(options, callback) {
        var _this = this;
        callback = getCallback.apply(this, arguments);
        options = (typeof options !== 'function' && options) || {};
        if (!options.name) {
            var currentConfig = this.config();
            options.name = options.name || currentConfig.name;
            options.storeName = options.storeName || currentConfig.storeName;
        }
        var promise;
        if (!options.name) {
            promise = Promise.reject('Invalid arguments');
        }
        else {
            promise = new Promise(function (resolve) {
                if (!options.storeName) {
                    resolve(options.name + "/");
                }
                else {
                    resolve(getKeyPrefix(options, _this._defaultConfig));
                }
            });
        }
        return { promise: promise, callback: callback };
    }

    function normaliseKey(key) {
        // Cast the key to a string, as that's all we can set as a key.
        if (typeof key !== 'string') {
            console.warn(key + " used as a key, but it is not a string.");
            key = String(key);
        }
        return key;
    }

    var serialiser = {
        bufferToString: bufferToString,
        deserialize: deserialize,
        serialize: serialize,
        stringToBuffer: stringToBuffer
    };

    var stores = {};
    /** @internal */
    var Store = /** @class */ (function () {
        function Store(kp) {
            this.kp = kp;
            this.data = {};
        }
        Store.resolve = function (kp) {
            if (!stores[kp]) {
                stores[kp] = new Store(kp);
            }
            return stores[kp];
        };
        Store.prototype.clear = function () {
            this.data = {};
        };
        Store.prototype.drop = function () {
            this.clear();
            delete stores[this.kp];
        };
        Store.prototype.get = function (key) {
            return this.data[key];
        };
        Store.prototype.key = function (idx) {
            return this.keys()[idx];
        };
        Store.prototype.keys = function () {
            return Object.keys(this.data);
        };
        Store.prototype.rm = function (k) {
            delete this.data[k];
        };
        Store.prototype.set = function (k, v) {
            this.data[k] = v;
        };
        return Store;
    }());

    function _initStorage(options) {
        var opts = options ? clone(options) : {};
        var kp = getKeyPrefix(opts, this._defaultConfig);
        var store = Store.resolve(kp);
        this._dbInfo = opts;
        this._dbInfo.serializer = serialiser;
        this._dbInfo.keyPrefix = kp;
        this._dbInfo.mStore = store;
        return Promise.resolve();
    }

    function clear(callback) {
        var _this = this;
        var promise = this.ready().then(function () {
            _this._dbInfo.mStore.clear();
        });
        executeCallback(promise, callback);
        return promise;
    }

    function dropInstance(_options, _cb) {
        var _a = dropInstanceCommon.apply(this, arguments), promise = _a.promise, callback = _a.callback;
        var outPromise = promise.then(function (keyPrefix) {
            Store.resolve(keyPrefix).drop();
        });
        executeCallback(outPromise, callback);
        return promise;
    }

    function getItem(key$, callback) {
        var _this = this;
        key$ = normaliseKey(key$);
        var promise = this.ready().then(function () {
            var result = _this._dbInfo.mStore.get(key$);
            // Deserialise if the result is not null or undefined
            return result == null ? null : _this._dbInfo.serializer.deserialize(result); //tslint:disable-line:triple-equals
        });
        executeCallback(promise, callback);
        return promise;
    }

    function iterate(iterator, callback) {
        var _this = this;
        var promise = this.ready().then(function () {
            var store = _this._dbInfo.mStore;
            var keys = store.keys();
            for (var i = 0; i < keys.length; i++) {
                var value = store.get(keys[i]);
                // If a result was found, parse it from the serialized
                // string into a JS object. If result isn't truthy, the
                // key is likely undefined and we'll pass it straight
                // to the iterator.
                if (value) {
                    value = _this._dbInfo.serializer.deserialize(value);
                }
                value = iterator(value, keys[i], i + 1);
                if (value !== undefined) {
                    return value;
                }
            }
        });
        executeCallback(promise, callback);
        return promise;
    }

    function key(idx, callback) {
        var _this = this;
        var promise = this.ready().then(function () {
            var result;
            try {
                result = _this._dbInfo.mStore.key(idx);
                if (result === undefined) {
                    result = null;
                }
            }
            catch (_a) {
                result = null;
            }
            return result;
        });
        executeCallback(promise, callback);
        return promise;
    }

    function keys(callback) {
        var _this = this;
        var promise = this.ready().then(function () {
            return _this._dbInfo.mStore.keys();
        });
        executeCallback(promise, callback);
        return promise;
    }

    function length(callback) {
        var promise = this.keys().then(function (keys$) { return keys$.length; });
        executeCallback(promise, callback);
        return promise;
    }

    function removeItem(key$, callback) {
        var _this = this;
        key$ = normaliseKey(key$);
        var promise = this.ready().then(function () {
            _this._dbInfo.mStore.rm(key$);
        });
        executeCallback(promise, callback);
        return promise;
    }

    function setItem(key$, value, callback) {
        var _this = this;
        key$ = normaliseKey(key$);
        var promise = this.ready().then(function () {
            if (value === undefined) {
                value = null;
            }
            // Save the original value to pass to the callback.
            var originalValue = value;
            return new Promise(function (resolve, reject) {
                _this._dbInfo.serializer.serialize(value, function (value$, error) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        try {
                            _this._dbInfo.mStore.set(key$, value$);
                            resolve(originalValue);
                        }
                        catch (e) {
                            reject(e);
                        }
                    }
                });
            });
        });
        executeCallback(promise, callback);
        return promise;
    }

    var _support = true;

    exports._support = _support;
    exports._driver = _driver;
    exports._initStorage = _initStorage;
    exports.clear = clear;
    exports.dropInstance = dropInstance;
    exports.getItem = getItem;
    exports.iterate = iterate;
    exports.key = key;
    exports.keys = keys;
    exports.length = length;
    exports.removeItem = removeItem;
    exports.setItem = setItem;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=umd.js.map


/***/ }),

/***/ "./node_modules/localforage/dist/localforage.js":
/*!******************************************************!*\
  !*** ./node_modules/localforage/dist/localforage.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;/*!
    localForage -- Offline Storage, Improved
    Version 1.10.0
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
'use strict';
var immediate = _dereq_(1);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
'use strict';
if (typeof global.Promise !== 'function') {
  global.Promise = _dereq_(2);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"2":2}],4:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    } catch (e) {
        return;
    }
}

var idb = getIDB();

function isIndexedDBValid() {
    try {
        // Initialize IndexedDB; fall back to vendor-prefixed versions
        // if needed.
        if (!idb || !idb.open) {
            return false;
        }
        // We mimic PouchDB here;
        //
        // We test for openDatabase because IE Mobile identifies itself
        // as Safari. Oh the lulz...
        var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform);

        var hasFetch = typeof fetch === 'function' && fetch.toString().indexOf('[native code') !== -1;

        // Safari <10.1 does not meet our requirements for IDB support
        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
        // Safari 10.1 shipped with fetch, we can use that to detect it.
        // Note: this creates issues with `window.fetch` polyfills and
        // overrides; see:
        // https://github.com/localForage/localForage/issues/856
        return (!isSafari || hasFetch) && typeof indexedDB !== 'undefined' &&
        // some outdated implementations of IDB that appear on Samsung
        // and HTC Android devices <4.4 are missing IDBKeyRange
        // See: https://github.com/mozilla/localForage/issues/128
        // See: https://github.com/mozilla/localForage/issues/272
        typeof IDBKeyRange !== 'undefined';
    } catch (e) {
        return false;
    }
}

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
        return new Blob(parts, properties);
    } catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}

// This is CommonJS because lie is an external dependency, so Rollup
// can just ignore it.
if (typeof Promise === 'undefined') {
    // In the "nopromises" build this will just throw if you don't have
    // a global promise object, but it would throw anyway later.
    _dereq_(3);
}
var Promise$1 = Promise;

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function executeTwoCallbacks(promise, callback, errorCallback) {
    if (typeof callback === 'function') {
        promise.then(callback);
    }

    if (typeof errorCallback === 'function') {
        promise["catch"](errorCallback);
    }
}

function normalizeKey(key) {
    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    return key;
}

function getCallback() {
    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        return arguments[arguments.length - 1];
    }
}

// Some code originally from async_storage.js in
// [Gaia](https://github.com/mozilla-b2g/gaia).

var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
var supportsBlobs = void 0;
var dbContexts = {};
var toString = Object.prototype.toString;

// Transaction Modes
var READ_ONLY = 'readonly';
var READ_WRITE = 'readwrite';

// Transform a binary string to an array buffer, because otherwise
// weird stuff happens when you try to work with the binary string directly.
// It is known.
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function _binStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
// Code borrowed from PouchDB. See:
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
//
function _checkBlobSupportWithoutCaching(idb) {
    return new Promise$1(function (resolve) {
        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
        var blob = createBlob(['']);
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

        txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
        };

        txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
        };
    })["catch"](function () {
        return false; // error, so assume unsupported
    });
}

function _checkBlobSupport(idb) {
    if (typeof supportsBlobs === 'boolean') {
        return Promise$1.resolve(supportsBlobs);
    }
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
        supportsBlobs = value;
        return supportsBlobs;
    });
}

function _deferReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Create a deferred object representing the current database operation.
    var deferredOperation = {};

    deferredOperation.promise = new Promise$1(function (resolve, reject) {
        deferredOperation.resolve = resolve;
        deferredOperation.reject = reject;
    });

    // Enqueue the deferred operation.
    dbContext.deferredOperations.push(deferredOperation);

    // Chain its promise to the database readiness.
    if (!dbContext.dbReady) {
        dbContext.dbReady = deferredOperation.promise;
    } else {
        dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
        });
    }
}

function _advanceReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Resolve its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.resolve();
        return deferredOperation.promise;
    }
}

function _rejectReadiness(dbInfo, err) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Reject its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.reject(err);
        return deferredOperation.promise;
    }
}

function _getConnection(dbInfo, upgradeNeeded) {
    return new Promise$1(function (resolve, reject) {
        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

        if (dbInfo.db) {
            if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
            } else {
                return resolve(dbInfo.db);
            }
        }

        var dbArgs = [dbInfo.name];

        if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
        }

        var openreq = idb.open.apply(idb, dbArgs);

        if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
                var db = openreq.result;
                try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                } catch (ex) {
                    if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                        throw ex;
                    }
                }
            };
        }

        openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
        };

        openreq.onsuccess = function () {
            var db = openreq.result;
            db.onversionchange = function (e) {
                // Triggered when the database is modified (e.g. adding an objectStore) or
                // deleted (even when initiated by other sessions in different tabs).
                // Closing the connection here prevents those operations from being blocked.
                // If the database is accessed again later by this instance, the connection
                // will be reopened or the database recreated as needed.
                e.target.close();
            };
            resolve(db);
            _advanceReadiness(dbInfo);
        };
    });
}

function _getOriginalConnection(dbInfo) {
    return _getConnection(dbInfo, false);
}

function _getUpgradedConnection(dbInfo) {
    return _getConnection(dbInfo, true);
}

function _isUpgradeNeeded(dbInfo, defaultVersion) {
    if (!dbInfo.db) {
        return true;
    }

    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
    var isDowngrade = dbInfo.version < dbInfo.db.version;
    var isUpgrade = dbInfo.version > dbInfo.db.version;

    if (isDowngrade) {
        // If the version is not the default one
        // then warn for impossible downgrade.
        if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }
        // Align the versions to prevent errors.
        dbInfo.version = dbInfo.db.version;
    }

    if (isUpgrade || isNewStore) {
        // If the store is new then increment the version (if needed).
        // This will trigger an "upgradeneeded" event which is required
        // for creating a store.
        if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
            }
        }

        return true;
    }

    return false;
}

// encode a blob for indexeddb engines that don't support blobs
function _encodeBlob(blob) {
    return new Promise$1(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
            });
        };
        reader.readAsBinaryString(blob);
    });
}

// decode an encoded blob
function _decodeBlob(encodedBlob) {
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
    return createBlob([arrayBuff], { type: encodedBlob.type });
}

// is this one of our fancy encoded blobs?
function _isEncodedBlob(value) {
    return value && value.__local_forage_encoded_blob;
}

// Specialize the default `ready()` function by making it dependent
// on the current database operations. Thus, the driver will be actually
// ready when it's been initialized (default) *and* there are no pending
// operations on the database (initiated by some other instances).
function _fullyReady(callback) {
    var self = this;

    var promise = self._initReady().then(function () {
        var dbContext = dbContexts[self._dbInfo.name];

        if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
        }
    });

    executeTwoCallbacks(promise, callback, callback);
    return promise;
}

// Try to establish a new db connection to replace the
// current one which is broken (i.e. experiencing
// InvalidStateError while creating a transaction).
function _tryReconnect(dbInfo) {
    _deferReadiness(dbInfo);

    var dbContext = dbContexts[dbInfo.name];
    var forages = dbContext.forages;

    for (var i = 0; i < forages.length; i++) {
        var forage = forages[i];
        if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
        }
    }
    dbInfo.db = null;

    return _getOriginalConnection(dbInfo).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        // store the latest db reference
        // in case the db was upgraded
        dbInfo.db = dbContext.db = db;
        for (var i = 0; i < forages.length; i++) {
            forages[i]._dbInfo.db = db;
        }
    })["catch"](function (err) {
        _rejectReadiness(dbInfo, err);
        throw err;
    });
}

// FF doesn't like Promises (micro-tasks) and IDDB store operations,
// so we have to do it with callbacks
function createTransaction(dbInfo, mode, callback, retries) {
    if (retries === undefined) {
        retries = 1;
    }

    try {
        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
        callback(null, tx);
    } catch (err) {
        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
            return Promise$1.resolve().then(function () {
                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                    // increase the db version, to create the new ObjectStore
                    if (dbInfo.db) {
                        dbInfo.version = dbInfo.db.version + 1;
                    }
                    // Reopen the database for upgrading.
                    return _getUpgradedConnection(dbInfo);
                }
            }).then(function () {
                return _tryReconnect(dbInfo).then(function () {
                    createTransaction(dbInfo, mode, callback, retries - 1);
                });
            })["catch"](callback);
        }

        callback(err);
    }
}

function createDbContext() {
    return {
        // Running localForages sharing a database.
        forages: [],
        // Shared database.
        db: null,
        // Database readiness (promise).
        dbReady: null,
        // Deferred operations on the database.
        deferredOperations: []
    };
}

// Open the IndexedDB database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    // Get the current context of the database;
    var dbContext = dbContexts[dbInfo.name];

    // ...or create a new context.
    if (!dbContext) {
        dbContext = createDbContext();
        // Register the new context in the global container.
        dbContexts[dbInfo.name] = dbContext;
    }

    // Register itself as a running localForage in the current context.
    dbContext.forages.push(self);

    // Replace the default `ready()` function with the specialized one.
    if (!self._initReady) {
        self._initReady = self.ready;
        self.ready = _fullyReady;
    }

    // Create an array of initialization states of the related localForages.
    var initPromises = [];

    function ignoreErrors() {
        // Don't handle errors here,
        // just makes sure related localForages aren't pending.
        return Promise$1.resolve();
    }

    for (var j = 0; j < dbContext.forages.length; j++) {
        var forage = dbContext.forages[j];
        if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
        }
    }

    // Take a snapshot of the related localForages.
    var forages = dbContext.forages.slice(0);

    // Initialize the connection process only when
    // all the related localForages aren't pending.
    return Promise$1.all(initPromises).then(function () {
        dbInfo.db = dbContext.db;
        // Get the connection or open a new one without upgrade.
        return _getOriginalConnection(dbInfo);
    }).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        dbInfo.db = dbContext.db = db;
        self._dbInfo = dbInfo;
        // Share the final connection amongst related localForages.
        for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];
            if (forage !== self) {
                // Self is already up-to-date.
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
            }
        }
    });
}

function getItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.get(key);

                    req.onsuccess = function () {
                        var value = req.result;
                        if (value === undefined) {
                            value = null;
                        }
                        if (_isEncodedBlob(value)) {
                            value = _decodeBlob(value);
                        }
                        resolve(value);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items stored in database.
function iterate(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (cursor) {
                            var value = cursor.value;
                            if (_isEncodedBlob(value)) {
                                value = _decodeBlob(value);
                            }
                            var result = iterator(value, cursor.key, iterationNumber++);

                            // when the iterator callback returns any
                            // (non-`undefined`) value, then we stop
                            // the iteration immediately
                            if (result !== void 0) {
                                resolve(result);
                            } else {
                                cursor["continue"]();
                            }
                        } else {
                            resolve();
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);

    return promise;
}

function setItem(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        var dbInfo;
        self.ready().then(function () {
            dbInfo = self._dbInfo;
            if (toString.call(value) === '[object Blob]') {
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                    if (blobSupport) {
                        return value;
                    }
                    return _encodeBlob(value);
                });
            }
            return value;
        }).then(function (value) {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);

                    // The reason we don't _save_ null is because IE 10 does
                    // not support saving the `null` type in IndexedDB. How
                    // ironic, given the bug below!
                    // See: https://github.com/mozilla/localForage/issues/161
                    if (value === null) {
                        value = undefined;
                    }

                    var req = store.put(value, key);

                    transaction.oncomplete = function () {
                        // Cast to undefined so the value passed to
                        // callback/promise is the same as what one would get out
                        // of `getItem()` later. This leads to some weirdness
                        // (setItem('foo', undefined) will return `null`), but
                        // it's not my fault localStorage is our baseline and that
                        // it's weird.
                        if (value === undefined) {
                            value = null;
                        }

                        resolve(value);
                    };
                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function removeItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    // We use a Grunt task to make this safe for IE and some
                    // versions of Android (including those used by Cordova).
                    // Normally IE won't like `.delete()` and will insist on
                    // using `['delete']()`, but we have a build step that
                    // fixes this for us now.
                    var req = store["delete"](key);
                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onerror = function () {
                        reject(req.error);
                    };

                    // The request will be also be aborted if we've exceeded our storage
                    // space.
                    transaction.onabort = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function clear(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.clear();

                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function length(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.count();

                    req.onsuccess = function () {
                        resolve(req.result);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function key(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        if (n < 0) {
            resolve(null);

            return;
        }

        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openKeyCursor();

                    req.onsuccess = function () {
                        var cursor = req.result;
                        if (!cursor) {
                            // this means there weren't enough keys
                            resolve(null);

                            return;
                        }

                        if (n === 0) {
                            // We have the first key, return it if that's what they
                            // wanted.
                            resolve(cursor.key);
                        } else {
                            if (!advanced) {
                                // Otherwise, ask the cursor to skip ahead n
                                // records.
                                advanced = true;
                                cursor.advance(n);
                            } else {
                                // When we get here, we've got the nth key.
                                resolve(cursor.key);
                            }
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openKeyCursor();
                    var keys = [];

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                            resolve(keys);
                            return;
                        }

                        keys.push(cursor.key);
                        cursor["continue"]();
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
                forages[i]._dbInfo.db = db;
            }
            return db;
        });

        if (!options.storeName) {
            promise = dbPromise.then(function (db) {
                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                }

                var dropDBPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.deleteDatabase(options.name);

                    req.onerror = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        reject(req.error);
                    };

                    req.onblocked = function () {
                        // Closing all open connections in onversionchange handler should prevent this situation, but if
                        // we do get here, it just means the request remains pending - eventually it will succeed or error
                        console.warn('dropInstance blocked for database "' + options.name + '" until all open connections are closed');
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        resolve(db);
                    };
                });

                return dropDBPromise.then(function (db) {
                    dbContext.db = db;
                    for (var i = 0; i < forages.length; i++) {
                        var _forage = forages[i];
                        _advanceReadiness(_forage._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        } else {
            promise = dbPromise.then(function (db) {
                if (!db.objectStoreNames.contains(options.storeName)) {
                    return;
                }

                var newVersion = db.version + 1;

                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                    forage._dbInfo.version = newVersion;
                }

                var dropObjectPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.open(options.name, newVersion);

                    req.onerror = function (err) {
                        var db = req.result;
                        db.close();
                        reject(err);
                    };

                    req.onupgradeneeded = function () {
                        var db = req.result;
                        db.deleteObjectStore(options.storeName);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        db.close();
                        resolve(db);
                    };
                });

                return dropObjectPromise.then(function (db) {
                    dbContext.db = db;
                    for (var j = 0; j < forages.length; j++) {
                        var _forage2 = forages[j];
                        _forage2._dbInfo.db = db;
                        _advanceReadiness(_forage2._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        }
    }

    executeCallback(promise, callback);
    return promise;
}

var asyncStorage = {
    _driver: 'asyncStorage',
    _initStorage: _initStorage,
    _support: isIndexedDBValid(),
    iterate: iterate,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    length: length,
    key: key,
    keys: keys,
    dropInstance: dropInstance
};

function isWebSQLValid() {
    return typeof openDatabase === 'function';
}

// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
// it to Base64, so this is how we store it to prevent very strange errors with less
// verbose ways of binary <-> string data storage.
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var BLOB_TYPE_PREFIX = '~~local_forage_type~';
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

var SERIALIZED_MARKER = '__lfsc__:';
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

// OMG the serializations!
var TYPE_ARRAYBUFFER = 'arbf';
var TYPE_BLOB = 'blob';
var TYPE_INT8ARRAY = 'si08';
var TYPE_UINT8ARRAY = 'ui08';
var TYPE_UINT8CLAMPEDARRAY = 'uic8';
var TYPE_INT16ARRAY = 'si16';
var TYPE_INT32ARRAY = 'si32';
var TYPE_UINT16ARRAY = 'ur16';
var TYPE_UINT32ARRAY = 'ui32';
var TYPE_FLOAT32ARRAY = 'fl32';
var TYPE_FLOAT64ARRAY = 'fl64';
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

var toString$1 = Object.prototype.toString;

function stringToBuffer(serializedString) {
    // Fill the string into a ArrayBuffer.
    var bufferLength = serializedString.length * 0.75;
    var len = serializedString.length;
    var i;
    var p = 0;
    var encoded1, encoded2, encoded3, encoded4;

    if (serializedString[serializedString.length - 1] === '=') {
        bufferLength--;
        if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = new ArrayBuffer(bufferLength);
    var bytes = new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

        /*jslint bitwise: true */
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
}

// Converts a buffer to a string to store, serialized, in the backend
// storage library.
function bufferToString(buffer) {
    // base64-arraybuffer
    var bytes = new Uint8Array(buffer);
    var base64String = '';
    var i;

    for (i = 0; i < bytes.length; i += 3) {
        /*jslint bitwise: true */
        base64String += BASE_CHARS[bytes[i] >> 2];
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64String += BASE_CHARS[bytes[i + 2] & 63];
    }

    if (bytes.length % 3 === 2) {
        base64String = base64String.substring(0, base64String.length - 1) + '=';
    } else if (bytes.length % 3 === 1) {
        base64String = base64String.substring(0, base64String.length - 2) + '==';
    }

    return base64String;
}

// Serialize a value, afterwards executing a callback (which usually
// instructs the `setItem()` callback/promise to be executed). This is how
// we store binary data with localStorage.
function serialize(value, callback) {
    var valueType = '';
    if (value) {
        valueType = toString$1.call(value);
    }

    // Cannot use `value instanceof ArrayBuffer` or such here, as these
    // checks fail when running the tests using casper.js...
    //
    // TODO: See why those tests fail and use a better solution.
    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with
        // a special marker.
        var buffer;
        var marker = SERIALIZED_MARKER;

        if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
        } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
                marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
                marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
                marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
                marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
                marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
                marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
                marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
                marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
                marker += TYPE_FLOAT64ARRAY;
            } else {
                callback(new Error('Failed to get type for BinaryArray'));
            }
        }

        callback(marker + bufferToString(buffer));
    } else if (valueType === '[object Blob]') {
        // Conver the blob to a binaryArray and then to a string.
        var fileReader = new FileReader();

        fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
        };

        fileReader.readAsArrayBuffer(value);
    } else {
        try {
            callback(JSON.stringify(value));
        } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
        }
    }
}

// Deserialize data we've inserted into a value column/field. We place
// special markers into our strings to mark them as encoded; this isn't
// as nice as a meta field, but it's the only sane thing we can do whilst
// keeping localStorage support intact.
//
// Oftentimes this will just deserialize JSON content, but if we have a
// special marker (SERIALIZED_MARKER, defined above), we will extract
// some kind of arraybuffer/binary data/typed array out of the string.
function deserialize(value) {
    // If we haven't marked this string as being specially serialized (i.e.
    // something other than serialized JSON), we can just return it and be
    // done with it.
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
        return JSON.parse(value);
    }

    // The following code deals with deserializing some kind of Blob or
    // TypedArray. First we separate out the type of data we're dealing
    // with from the data itself.
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

    var blobType;
    // Backwards-compatible blob type serialization strategy.
    // DBs created with older versions of localForage will simply not have the blob type.
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
        blobType = matcher[1];
        serializedString = serializedString.substring(matcher[0].length);
    }
    var buffer = stringToBuffer(serializedString);

    // Return the right type based on the code/type set during
    // serialization.
    switch (type) {
        case TYPE_ARRAYBUFFER:
            return buffer;
        case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
        case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
        case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
        case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
        case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
        case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
        case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
        case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
        case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
        case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
        default:
            throw new Error('Unkown type: ' + type);
    }
}

var localforageSerializer = {
    serialize: serialize,
    deserialize: deserialize,
    stringToBuffer: stringToBuffer,
    bufferToString: bufferToString
};

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

function createDbTable(t, dbInfo, callback, errorCallback) {
    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
}

// Open the WebSQL database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage$1(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
        }
    }

    var dbInfoPromise = new Promise$1(function (resolve, reject) {
        // Open the database; the openDatabase API will automatically
        // create it for us if it doesn't exist.
        try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
        } catch (e) {
            return reject(e);
        }

        // Create our key/value table if it doesn't exist.
        dbInfo.db.transaction(function (t) {
            createDbTable(t, dbInfo, function () {
                self._dbInfo = dbInfo;
                resolve();
            }, function (t, error) {
                reject(error);
            });
        }, reject);
    });

    dbInfo.serializer = localforageSerializer;
    return dbInfoPromise;
}

function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
    t.executeSql(sqlStatement, args, callback, function (t, error) {
        if (error.code === error.SYNTAX_ERR) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
                if (!results.rows.length) {
                    // if the table is missing (was deleted)
                    // re-create it table and retry
                    createDbTable(t, dbInfo, function () {
                        t.executeSql(sqlStatement, args, callback, errorCallback);
                    }, errorCallback);
                } else {
                    errorCallback(t, error);
                }
            }, errorCallback);
        } else {
            errorCallback(t, error);
        }
    }, errorCallback);
}

function getItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;

                    // Check to see if this is serialized content we need to
                    // unpack.
                    if (result) {
                        result = dbInfo.serializer.deserialize(result);
                    }

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function iterate$1(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;

            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                    var rows = results.rows;
                    var length = rows.length;

                    for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;

                        // Check to see if this is serialized content
                        // we need to unpack.
                        if (result) {
                            result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1);

                        // void(0) prevents problems with redefinition
                        // of `undefined`.
                        if (result !== void 0) {
                            resolve(result);
                            return;
                        }
                    }

                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function _setItem(key, value, callback, retriesLeft) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
                value = null;
            }

            // Save the original value to pass to the callback.
            var originalValue = value;

            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    dbInfo.db.transaction(function (t) {
                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);
                        }, function (t, error) {
                            reject(error);
                        });
                    }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                            // We reject the callback outright for now, but
                            // it's worth trying to re-run the transaction.
                            // Even if the user accepts the prompt to use
                            // more storage on Safari, this error will
                            // be called.
                            //
                            // Try to re-run the transaction.
                            if (retriesLeft > 0) {
                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                return;
                            }
                            reject(sqlError);
                        }
                    });
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function setItem$1(key, value, callback) {
    return _setItem.apply(this, [key, value, callback, 1]);
}

function removeItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Deletes every item in the table.
// TODO: Find out if this resets the AUTO_INCREMENT number.
function clear$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Does a simple `COUNT(key)` to get the number of items stored in
// localForage.
function length$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                // Ahhh, SQL makes this one soooooo easy.
                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                    var result = results.rows.item(0).c;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Return the key located at key index X; essentially gets the key from a
// `WHERE id = ?`. This is the most efficient way I can think to implement
// this rarely-used (in my experience) part of the API, but it can seem
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
// the ID of each key will change every time it's updated. Perhaps a stored
// procedure for the `setItem()` SQL would solve this problem?
// TODO: Don't change ID on `setItem()`.
function key$1(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                    var keys = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                    }

                    resolve(keys);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// https://www.w3.org/TR/webdatabase/#databases
// > There is no way to enumerate or delete the databases available for an origin from this API.
function getAllStoreNames(db) {
    return new Promise$1(function (resolve, reject) {
        db.transaction(function (t) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                var storeNames = [];

                for (var i = 0; i < results.rows.length; i++) {
                    storeNames.push(results.rows.item(i).name);
                }

                resolve({
                    db: db,
                    storeNames: storeNames
                });
            }, function (t, error) {
                reject(error);
            });
        }, function (sqlError) {
            reject(sqlError);
        });
    });
}

function dropInstance$1(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            var db;
            if (options.name === currentConfig.name) {
                // use the db reference of the current instance
                db = self._dbInfo.db;
            } else {
                db = openDatabase(options.name, '', '', 0);
            }

            if (!options.storeName) {
                // drop all database tables
                resolve(getAllStoreNames(db));
            } else {
                resolve({
                    db: db,
                    storeNames: [options.storeName]
                });
            }
        }).then(function (operationInfo) {
            return new Promise$1(function (resolve, reject) {
                operationInfo.db.transaction(function (t) {
                    function dropTable(storeName) {
                        return new Promise$1(function (resolve, reject) {
                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                                resolve();
                            }, function (t, error) {
                                reject(error);
                            });
                        });
                    }

                    var operations = [];
                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                        operations.push(dropTable(operationInfo.storeNames[i]));
                    }

                    Promise$1.all(operations).then(function () {
                        resolve();
                    })["catch"](function (e) {
                        reject(e);
                    });
                }, function (sqlError) {
                    reject(sqlError);
                });
            });
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var webSQLStorage = {
    _driver: 'webSQLStorage',
    _initStorage: _initStorage$1,
    _support: isWebSQLValid(),
    iterate: iterate$1,
    getItem: getItem$1,
    setItem: setItem$1,
    removeItem: removeItem$1,
    clear: clear$1,
    length: length$1,
    key: key$1,
    keys: keys$1,
    dropInstance: dropInstance$1
};

function isLocalStorageValid() {
    try {
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
        // in IE8 typeof localStorage.setItem === 'object'
        !!localStorage.setItem;
    } catch (e) {
        return false;
    }
}

function _getKeyPrefix(options, defaultConfig) {
    var keyPrefix = options.name + '/';

    if (options.storeName !== defaultConfig.storeName) {
        keyPrefix += options.storeName + '/';
    }
    return keyPrefix;
}

// Check if localStorage throws when saving an item
function checkIfLocalStorageThrows() {
    var localStorageTestKey = '_localforage_support_test';

    try {
        localStorage.setItem(localStorageTestKey, true);
        localStorage.removeItem(localStorageTestKey);

        return false;
    } catch (e) {
        return true;
    }
}

// Check if localStorage is usable and allows to save an item
// This method checks if localStorage is usable in Safari Private Browsing
// mode, or in any other case where the available quota for localStorage
// is 0 and there wasn't any saved items yet.
function _isLocalStorageUsable() {
    return !checkIfLocalStorageThrows() || localStorage.length > 0;
}

// Config the localStorage backend, using options set in the config.
function _initStorage$2(options) {
    var self = this;
    var dbInfo = {};
    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

    if (!_isLocalStorageUsable()) {
        return Promise$1.reject();
    }

    self._dbInfo = dbInfo;
    dbInfo.serializer = localforageSerializer;

    return Promise$1.resolve();
}

// Remove all keys from the datastore, effectively destroying all data in
// the app's key/value store!
function clear$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var keyPrefix = self._dbInfo.keyPrefix;

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Retrieve an item from the store. Unlike the original async_storage
// library in Gaia, we don't modify return values at all. If a key's value
// is `undefined`, we pass that value to the callback function.
function getItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result = localStorage.getItem(dbInfo.keyPrefix + key);

        // If a result was found, parse it from the serialized
        // string into a JS object. If result isn't truthy, the key
        // is likely undefined and we'll pass it straight to the
        // callback.
        if (result) {
            result = dbInfo.serializer.deserialize(result);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items in the store.
function iterate$2(iterator, callback) {
    var self = this;

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var keyPrefix = dbInfo.keyPrefix;
        var keyPrefixLength = keyPrefix.length;
        var length = localStorage.length;

        // We use a dedicated iterator instead of the `i` variable below
        // so other keys we fetch in localStorage aren't counted in
        // the `iterationNumber` argument passed to the `iterate()`
        // callback.
        //
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
        var iterationNumber = 1;

        for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
                continue;
            }
            var value = localStorage.getItem(key);

            // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.
            if (value) {
                value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
                return value;
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Same as localStorage's key() method, except takes a callback.
function key$2(n, callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result;
        try {
            result = localStorage.key(n);
        } catch (error) {
            result = null;
        }

        // Remove the prefix from the key, if a key is found.
        if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var length = localStorage.length;
        var keys = [];

        for (var i = 0; i < length; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
        }

        return keys;
    });

    executeCallback(promise, callback);
    return promise;
}

// Supply the number of keys in the datastore to the callback function.
function length$2(callback) {
    var self = this;
    var promise = self.keys().then(function (keys) {
        return keys.length;
    });

    executeCallback(promise, callback);
    return promise;
}

// Remove an item from the store, nice and simple.
function removeItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        localStorage.removeItem(dbInfo.keyPrefix + key);
    });

    executeCallback(promise, callback);
    return promise;
}

// Set a key's value and run an optional callback once the value is set.
// Unlike Gaia's implementation, the callback function is passed the value,
// in case you want to operate on that value only after you're sure it
// saved, or something like that.
function setItem$2(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        // Convert undefined values to null.
        // https://github.com/mozilla/localForage/pull/42
        if (value === undefined) {
            value = null;
        }

        // Save the original value to pass to the callback.
        var originalValue = value;

        return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                    } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                            reject(e);
                        }
                        reject(e);
                    }
                }
            });
        });
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance$2(options, callback) {
    callback = getCallback.apply(this, arguments);

    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        var currentConfig = this.config();
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            if (!options.storeName) {
                resolve(options.name + '/');
            } else {
                resolve(_getKeyPrefix(options, self._defaultConfig));
            }
        }).then(function (keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var key = localStorage.key(i);

                if (key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key);
                }
            }
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var localStorageWrapper = {
    _driver: 'localStorageWrapper',
    _initStorage: _initStorage$2,
    _support: isLocalStorageValid(),
    iterate: iterate$2,
    getItem: getItem$2,
    setItem: setItem$2,
    removeItem: removeItem$2,
    clear: clear$2,
    length: length$2,
    key: key$2,
    keys: keys$2,
    dropInstance: dropInstance$2
};

var sameValue = function sameValue(x, y) {
    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
};

var includes = function includes(array, searchElement) {
    var len = array.length;
    var i = 0;
    while (i < len) {
        if (sameValue(array[i], searchElement)) {
            return true;
        }
        i++;
    }

    return false;
};

var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

// Drivers are stored here when `defineDriver()` is called.
// They are shared across all instances of localForage.
var DefinedDrivers = {};

var DriverSupport = {};

var DefaultDrivers = {
    INDEXEDDB: asyncStorage,
    WEBSQL: webSQLStorage,
    LOCALSTORAGE: localStorageWrapper
};

var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

var OptionalDriverMethods = ['dropInstance'];

var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

var DefaultConfig = {
    description: '',
    driver: DefaultDriverOrder.slice(),
    name: 'localforage',
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
    // we can use without a prompt.
    size: 4980736,
    storeName: 'keyvaluepairs',
    version: 1.0
};

function callWhenReady(localForageInstance, libraryMethod) {
    localForageInstance[libraryMethod] = function () {
        var _args = arguments;
        return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
        });
    };
}

function extend() {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg) {
            for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                    } else {
                        arguments[0][_key] = arg[_key];
                    }
                }
            }
        }
    }

    return arguments[0];
}

var LocalForage = function () {
    function LocalForage(options) {
        _classCallCheck(this, LocalForage);

        for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;

                if (!DefinedDrivers[driverName]) {
                    // we don't need to wait for the promise,
                    // since the default drivers can be defined
                    // in a blocking manner
                    this.defineDriver(driver);
                }
            }
        }

        this._defaultConfig = extend({}, DefaultConfig);
        this._config = extend({}, this._defaultConfig, options);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;

        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver)["catch"](function () {});
    }

    // Set any config values for localForage; can be called anytime before
    // the first API call (e.g. `getItem`, `setItem`).
    // We loop through options so we don't overwrite existing config
    // values.


    LocalForage.prototype.config = function config(options) {
        // If the options argument is an object, we use it to set values.
        // Otherwise, we return either a specified config value or all
        // config values.
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
                return new Error("Can't call config() after localforage " + 'has been used.');
            }

            for (var i in options) {
                if (i === 'storeName') {
                    options[i] = options[i].replace(/\W/g, '_');
                }

                if (i === 'version' && typeof options[i] !== 'number') {
                    return new Error('Database version must be a number.');
                }

                this._config[i] = options[i];
            }

            // after all config options are set and
            // the driver option is used, try setting it
            if ('driver' in options && options.driver) {
                return this.setDriver(this._config.driver);
            }

            return true;
        } else if (typeof options === 'string') {
            return this._config[options];
        } else {
            return this._config;
        }
    };

    // Used to define a custom driver, shared across all instances of
    // localForage.


    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
        var promise = new Promise$1(function (resolve, reject) {
            try {
                var driverName = driverObject._driver;
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                // A driver name should be defined and not overlap with the
                // library-defined, default drivers.
                if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                }

                var driverMethods = LibraryMethods.concat('_initStorage');
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                    var driverMethodName = driverMethods[i];

                    // when the property is there,
                    // it should be a method even when optional
                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                        reject(complianceError);
                        return;
                    }
                }

                var configureMissingMethods = function configureMissingMethods() {
                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                        return function () {
                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                            var promise = Promise$1.reject(error);
                            executeCallback(promise, arguments[arguments.length - 1]);
                            return promise;
                        };
                    };

                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                        var optionalDriverMethod = OptionalDriverMethods[_i];
                        if (!driverObject[optionalDriverMethod]) {
                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                        }
                    }
                };

                configureMissingMethods();

                var setDriverSupport = function setDriverSupport(support) {
                    if (DefinedDrivers[driverName]) {
                        console.info('Redefining LocalForage driver: ' + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    // don't use a then, so that we can define
                    // drivers that have simple _support methods
                    // in a blocking manner
                    resolve();
                };

                if ('_support' in driverObject) {
                    if (driverObject._support && typeof driverObject._support === 'function') {
                        driverObject._support().then(setDriverSupport, reject);
                    } else {
                        setDriverSupport(!!driverObject._support);
                    }
                } else {
                    setDriverSupport(true);
                }
            } catch (e) {
                reject(e);
            }
        });

        executeTwoCallbacks(promise, callback, errorCallback);
        return promise;
    };

    LocalForage.prototype.driver = function driver() {
        return this._driver || null;
    };

    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
        return getDriverPromise;
    };

    LocalForage.prototype.getSerializer = function getSerializer(callback) {
        var serializerPromise = Promise$1.resolve(localforageSerializer);
        executeTwoCallbacks(serializerPromise, callback);
        return serializerPromise;
    };

    LocalForage.prototype.ready = function ready(callback) {
        var self = this;

        var promise = self._driverSet.then(function () {
            if (self._ready === null) {
                self._ready = self._initDriver();
            }

            return self._ready;
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
    };

    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
        var self = this;

        if (!isArray(drivers)) {
            drivers = [drivers];
        }

        var supportedDrivers = this._getSupportedDrivers(drivers);

        function setDriverToConfig() {
            self._config.driver = self.driver();
        }

        function extendSelfWithDriver(driver) {
            self._extend(driver);
            setDriverToConfig();

            self._ready = self._initStorage(self._config);
            return self._ready;
        }

        function initDriver(supportedDrivers) {
            return function () {
                var currentDriverIndex = 0;

                function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                }

                return driverPromiseLoop();
            };
        }

        // There might be a driver initialization in progress
        // so wait for it to finish in order to avoid a possible
        // race condition to set _dbInfo
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
        }) : Promise$1.resolve();

        this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;

            return self.getDriver(driverName).then(function (driver) {
                self._driver = driver._driver;
                setDriverToConfig();
                self._wrapLibraryMethodsWithReady();
                self._initDriver = initDriver(supportedDrivers);
            });
        })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
        });

        executeTwoCallbacks(this._driverSet, callback, errorCallback);
        return this._driverSet;
    };

    LocalForage.prototype.supports = function supports(driverName) {
        return !!DriverSupport[driverName];
    };

    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
    };

    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
        var supportedDrivers = [];
        for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
            }
        }
        return supportedDrivers;
    };

    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
        // Add a stub for each driver API method that delays the call to the
        // corresponding driver method until localForage is ready. These stubs
        // will be replaced by the driver methods as soon as the driver is
        // loaded, so there is no performance impact.
        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
        }
    };

    LocalForage.prototype.createInstance = function createInstance(options) {
        return new LocalForage(options);
    };

    return LocalForage;
}();

// The actual localForage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.


var localforage_js = new LocalForage();

module.exports = localforage_js;

},{"3":3}]},{},[4])(4)
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lru-cache/index.js":
/*!*****************************************!*\
  !*** ./node_modules/lru-cache/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// A linked list to keep track of recently-used-ness
const Yallist = __webpack_require__(/*! yallist */ "./node_modules/yallist/yallist.js")

const MAX = Symbol('max')
const LENGTH = Symbol('length')
const LENGTH_CALCULATOR = Symbol('lengthCalculator')
const ALLOW_STALE = Symbol('allowStale')
const MAX_AGE = Symbol('maxAge')
const DISPOSE = Symbol('dispose')
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet')
const LRU_LIST = Symbol('lruList')
const CACHE = Symbol('cache')
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet')

const naiveLength = () => 1

// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
  constructor (options) {
    if (typeof options === 'number')
      options = { max: options }

    if (!options)
      options = {}

    if (options.max && (typeof options.max !== 'number' || options.max < 0))
      throw new TypeError('max must be a non-negative number')
    // Kind of weird to have a default max of Infinity, but oh well.
    const max = this[MAX] = options.max || Infinity

    const lc = options.length || naiveLength
    this[LENGTH_CALCULATOR] = (typeof lc !== 'function') ? naiveLength : lc
    this[ALLOW_STALE] = options.stale || false
    if (options.maxAge && typeof options.maxAge !== 'number')
      throw new TypeError('maxAge must be a number')
    this[MAX_AGE] = options.maxAge || 0
    this[DISPOSE] = options.dispose
    this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false
    this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false
    this.reset()
  }

  // resize the cache when the max changes.
  set max (mL) {
    if (typeof mL !== 'number' || mL < 0)
      throw new TypeError('max must be a non-negative number')

    this[MAX] = mL || Infinity
    trim(this)
  }
  get max () {
    return this[MAX]
  }

  set allowStale (allowStale) {
    this[ALLOW_STALE] = !!allowStale
  }
  get allowStale () {
    return this[ALLOW_STALE]
  }

  set maxAge (mA) {
    if (typeof mA !== 'number')
      throw new TypeError('maxAge must be a non-negative number')

    this[MAX_AGE] = mA
    trim(this)
  }
  get maxAge () {
    return this[MAX_AGE]
  }

  // resize the cache when the lengthCalculator changes.
  set lengthCalculator (lC) {
    if (typeof lC !== 'function')
      lC = naiveLength

    if (lC !== this[LENGTH_CALCULATOR]) {
      this[LENGTH_CALCULATOR] = lC
      this[LENGTH] = 0
      this[LRU_LIST].forEach(hit => {
        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)
        this[LENGTH] += hit.length
      })
    }
    trim(this)
  }
  get lengthCalculator () { return this[LENGTH_CALCULATOR] }

  get length () { return this[LENGTH] }
  get itemCount () { return this[LRU_LIST].length }

  rforEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].tail; walker !== null;) {
      const prev = walker.prev
      forEachStep(this, fn, walker, thisp)
      walker = prev
    }
  }

  forEach (fn, thisp) {
    thisp = thisp || this
    for (let walker = this[LRU_LIST].head; walker !== null;) {
      const next = walker.next
      forEachStep(this, fn, walker, thisp)
      walker = next
    }
  }

  keys () {
    return this[LRU_LIST].toArray().map(k => k.key)
  }

  values () {
    return this[LRU_LIST].toArray().map(k => k.value)
  }

  reset () {
    if (this[DISPOSE] &&
        this[LRU_LIST] &&
        this[LRU_LIST].length) {
      this[LRU_LIST].forEach(hit => this[DISPOSE](hit.key, hit.value))
    }

    this[CACHE] = new Map() // hash of items by key
    this[LRU_LIST] = new Yallist() // list of items in order of use recency
    this[LENGTH] = 0 // length of items in the list
  }

  dump () {
    return this[LRU_LIST].map(hit =>
      isStale(this, hit) ? false : {
        k: hit.key,
        v: hit.value,
        e: hit.now + (hit.maxAge || 0)
      }).toArray().filter(h => h)
  }

  dumpLru () {
    return this[LRU_LIST]
  }

  set (key, value, maxAge) {
    maxAge = maxAge || this[MAX_AGE]

    if (maxAge && typeof maxAge !== 'number')
      throw new TypeError('maxAge must be a number')

    const now = maxAge ? Date.now() : 0
    const len = this[LENGTH_CALCULATOR](value, key)

    if (this[CACHE].has(key)) {
      if (len > this[MAX]) {
        del(this, this[CACHE].get(key))
        return false
      }

      const node = this[CACHE].get(key)
      const item = node.value

      // dispose of the old one before overwriting
      // split out into 2 ifs for better coverage tracking
      if (this[DISPOSE]) {
        if (!this[NO_DISPOSE_ON_SET])
          this[DISPOSE](key, item.value)
      }

      item.now = now
      item.maxAge = maxAge
      item.value = value
      this[LENGTH] += len - item.length
      item.length = len
      this.get(key)
      trim(this)
      return true
    }

    const hit = new Entry(key, value, len, now, maxAge)

    // oversized objects fall out of cache automatically.
    if (hit.length > this[MAX]) {
      if (this[DISPOSE])
        this[DISPOSE](key, value)

      return false
    }

    this[LENGTH] += hit.length
    this[LRU_LIST].unshift(hit)
    this[CACHE].set(key, this[LRU_LIST].head)
    trim(this)
    return true
  }

  has (key) {
    if (!this[CACHE].has(key)) return false
    const hit = this[CACHE].get(key).value
    return !isStale(this, hit)
  }

  get (key) {
    return get(this, key, true)
  }

  peek (key) {
    return get(this, key, false)
  }

  pop () {
    const node = this[LRU_LIST].tail
    if (!node)
      return null

    del(this, node)
    return node.value
  }

  del (key) {
    del(this, this[CACHE].get(key))
  }

  load (arr) {
    // reset the cache
    this.reset()

    const now = Date.now()
    // A previous serialized cache has the most recent items first
    for (let l = arr.length - 1; l >= 0; l--) {
      const hit = arr[l]
      const expiresAt = hit.e || 0
      if (expiresAt === 0)
        // the item was created without expiration in a non aged cache
        this.set(hit.k, hit.v)
      else {
        const maxAge = expiresAt - now
        // dont add already expired items
        if (maxAge > 0) {
          this.set(hit.k, hit.v, maxAge)
        }
      }
    }
  }

  prune () {
    this[CACHE].forEach((value, key) => get(this, key, false))
  }
}

const get = (self, key, doUse) => {
  const node = self[CACHE].get(key)
  if (node) {
    const hit = node.value
    if (isStale(self, hit)) {
      del(self, node)
      if (!self[ALLOW_STALE])
        return undefined
    } else {
      if (doUse) {
        if (self[UPDATE_AGE_ON_GET])
          node.value.now = Date.now()
        self[LRU_LIST].unshiftNode(node)
      }
    }
    return hit.value
  }
}

const isStale = (self, hit) => {
  if (!hit || (!hit.maxAge && !self[MAX_AGE]))
    return false

  const diff = Date.now() - hit.now
  return hit.maxAge ? diff > hit.maxAge
    : self[MAX_AGE] && (diff > self[MAX_AGE])
}

const trim = self => {
  if (self[LENGTH] > self[MAX]) {
    for (let walker = self[LRU_LIST].tail;
      self[LENGTH] > self[MAX] && walker !== null;) {
      // We know that we're about to delete this one, and also
      // what the next least recently used key will be, so just
      // go ahead and set it now.
      const prev = walker.prev
      del(self, walker)
      walker = prev
    }
  }
}

const del = (self, node) => {
  if (node) {
    const hit = node.value
    if (self[DISPOSE])
      self[DISPOSE](hit.key, hit.value)

    self[LENGTH] -= hit.length
    self[CACHE].delete(hit.key)
    self[LRU_LIST].removeNode(node)
  }
}

class Entry {
  constructor (key, value, length, now, maxAge) {
    this.key = key
    this.value = value
    this.length = length
    this.now = now
    this.maxAge = maxAge || 0
  }
}

const forEachStep = (self, fn, node, thisp) => {
  let hit = node.value
  if (isStale(self, hit)) {
    del(self, node)
    if (!self[ALLOW_STALE])
      hit = undefined
  }
  if (hit)
    fn.call(thisp, hit.value, hit.key, self)
}

module.exports = LRUCache


/***/ }),

/***/ "./node_modules/magic-sdk/dist/module/iframe-controller.js":
/*!*****************************************************************!*\
  !*** ./node_modules/magic-sdk/dist/module/iframe-controller.js ***!
  \*****************************************************************/
/*! exports provided: IframeController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeController", function() { return IframeController; });
/* harmony import */ var _magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @magic-sdk/provider */ "./node_modules/@magic-sdk/provider/dist/module/index.js");
/* eslint-disable no-underscore-dangle */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

/**
 * Magic `<iframe>` overlay styles. These base styles enable `<iframe>` UI
 * to render above all other DOM content.
 */
var overlayStyles = {
    display: 'none',
    position: 'fixed',
    top: '0',
    right: '0',
    width: '100%',
    height: '100%',
    borderRadius: '0',
    border: 'none',
    zIndex: '2147483647',
};
/**
 * Apply iframe styles to the given element.
 * @param elem - An element to apply styles using CSSOM.
 */
function applyOverlayStyles(elem) {
    var e_1, _a;
    try {
        for (var _b = __values(Object.entries(overlayStyles)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), cssProperty = _d[0], value = _d[1];
            /* eslint-disable-next-line no-param-reassign */
            elem.style[cssProperty] = value;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
/**
 * Checks if the given query params are associated with an active `<iframe>`
 * instance.
 *
 * @param encodedQueryParams - The unique, encoded query parameters to check for
 * duplicates against.
 */
function checkForSameSrcInstances(encodedQueryParams) {
    var iframes = [].slice.call(document.querySelectorAll('.magic-iframe'));
    return Boolean(iframes.find(function (iframe) { return iframe.src.includes(encodedQueryParams); }));
}
/**
 * View controller for the Magic `<iframe>` overlay.
 */
var IframeController = /** @class */ (function (_super) {
    __extends(IframeController, _super);
    function IframeController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IframeController.prototype.init = function () {
        this.iframe = this.createIframe();
    };
    IframeController.prototype.createIframe = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var onload = function () {
                if (!checkForSameSrcInstances(encodeURIComponent(_this.encodedQueryParams))) {
                    var iframe = document.createElement('iframe');
                    iframe.classList.add('magic-iframe');
                    iframe.dataset.magicIframeLabel = Object(_magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__["createURL"])(_this.endpoint).host;
                    iframe.src = Object(_magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__["createURL"])("/send?params=" + encodeURIComponent(_this.encodedQueryParams), _this.endpoint).href;
                    applyOverlayStyles(iframe);
                    document.body.appendChild(iframe);
                    resolve(iframe);
                }
                else {
                    Object(_magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__["createDuplicateIframeWarning"])().log();
                }
            };
            // Check DOM state and load...
            if (['loaded', 'interactive', 'complete'].includes(document.readyState)) {
                onload();
            }
            else {
                // ...or check load events to load
                window.addEventListener('load', onload, false);
            }
        });
    };
    IframeController.prototype.showOverlay = function () {
        return __awaiter(this, void 0, void 0, function () {
            var overlayResolved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.iframe];
                    case 1:
                        overlayResolved = _a.sent();
                        overlayResolved.style.display = 'block';
                        return [2 /*return*/];
                }
            });
        });
    };
    IframeController.prototype.hideOverlay = function () {
        return __awaiter(this, void 0, void 0, function () {
            var overlayResolved;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.iframe];
                    case 1:
                        overlayResolved = _a.sent();
                        overlayResolved.style.display = 'none';
                        return [2 /*return*/];
                }
            });
        });
    };
    IframeController.prototype.postMessage = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var iframe;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.iframe];
                    case 1:
                        iframe = _a.sent();
                        if (iframe && iframe.contentWindow) {
                            iframe.contentWindow.postMessage(data, this.endpoint);
                        }
                        else {
                            throw Object(_magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__["createModalNotReadyError"])();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return IframeController;
}(_magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__["ViewController"]));

//# sourceMappingURL=iframe-controller.js.map

/***/ }),

/***/ "./node_modules/magic-sdk/dist/module/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/magic-sdk/dist/module/index.js ***!
  \*****************************************************/
/*! exports provided: Extension, SDKError, ExtensionError, ExtensionWarning, RPCError, SDKWarning, isPromiEvent, MagicPayloadMethod, MagicIncomingWindowMessage, MagicOutgoingWindowMessage, SDKErrorCode, SDKWarningCode, RPCErrorCode, EthChainType, Magic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Magic", function() { return Magic; });
/* harmony import */ var _magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @magic-sdk/provider */ "./node_modules/@magic-sdk/provider/dist/module/index.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var localforage_driver_memory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! localforage-driver-memory */ "./node_modules/localforage-driver-memory/_bundle/umd.js");
/* harmony import */ var localforage_driver_memory__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(localforage_driver_memory__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _iframe_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iframe-controller */ "./node_modules/magic-sdk/dist/module/iframe-controller.js");
/* harmony import */ var _web_transport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-transport */ "./node_modules/magic-sdk/dist/module/web-transport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Extension", function() { return _magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__["Extension"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKError", function() { return _magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__["MagicSDKError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtensionError", function() { return _magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__["MagicExtensionError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtensionWarning", function() { return _magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__["MagicExtensionWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RPCError", function() { return _magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__["MagicRPCError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKWarning", function() { return _magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__["MagicSDKWarning"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPromiEvent", function() { return _magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__["isPromiEvent"]; });

/* harmony import */ var _magic_sdk_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @magic-sdk/types */ "./node_modules/@magic-sdk/types/dist/module/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MagicPayloadMethod", function() { return _magic_sdk_types__WEBPACK_IMPORTED_MODULE_5__["MagicPayloadMethod"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MagicIncomingWindowMessage", function() { return _magic_sdk_types__WEBPACK_IMPORTED_MODULE_5__["MagicIncomingWindowMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MagicOutgoingWindowMessage", function() { return _magic_sdk_types__WEBPACK_IMPORTED_MODULE_5__["MagicOutgoingWindowMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKErrorCode", function() { return _magic_sdk_types__WEBPACK_IMPORTED_MODULE_5__["SDKErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SDKWarningCode", function() { return _magic_sdk_types__WEBPACK_IMPORTED_MODULE_5__["SDKWarningCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RPCErrorCode", function() { return _magic_sdk_types__WEBPACK_IMPORTED_MODULE_5__["RPCErrorCode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EthChainType", function() { return _magic_sdk_types__WEBPACK_IMPORTED_MODULE_5__["EthChainType"]; });

/* eslint-disable no-underscore-dangle */
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var Magic = Object(_magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__["createSDK"])(_magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__["SDKBase"], {
    target: 'web',
    sdkName: 'magic-sdk',
    version: '2.7.0',
    defaultEndpoint: 'https://auth.magic.link/',
    ViewController: _iframe_controller__WEBPACK_IMPORTED_MODULE_3__["IframeController"],
    PayloadTransport: _web_transport__WEBPACK_IMPORTED_MODULE_4__["WebTransport"],
    configureStorage: /* istanbul ignore next */ function () { return __awaiter(void 0, void 0, void 0, function () {
        var lf;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    lf = localforage__WEBPACK_IMPORTED_MODULE_1___default.a.createInstance({
                        name: 'MagicAuthLocalStorageDB',
                        storeName: 'MagicAuthLocalStorage',
                    });
                    return [4 /*yield*/, lf.defineDriver(localforage_driver_memory__WEBPACK_IMPORTED_MODULE_2__)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, lf.setDriver([localforage__WEBPACK_IMPORTED_MODULE_1___default.a.INDEXEDDB, localforage__WEBPACK_IMPORTED_MODULE_1___default.a.LOCALSTORAGE, localforage_driver_memory__WEBPACK_IMPORTED_MODULE_2__["_driver"]])];
                case 2:
                    _a.sent();
                    return [2 /*return*/, lf];
            }
        });
    }); },
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/magic-sdk/dist/module/web-transport.js":
/*!*************************************************************!*\
  !*** ./node_modules/magic-sdk/dist/module/web-transport.js ***!
  \*************************************************************/
/*! exports provided: WebTransport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebTransport", function() { return WebTransport; });
/* harmony import */ var _magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @magic-sdk/provider */ "./node_modules/@magic-sdk/provider/dist/module/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

var WebTransport = /** @class */ (function (_super) {
    __extends(WebTransport, _super);
    function WebTransport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initialize the underlying `Window.onmessage` event listener.
     */
    WebTransport.prototype.init = function () {
        var _this = this;
        window.addEventListener('message', function (event) {
            var e_1, _a;
            var _b;
            if (event.origin === _this.endpoint) {
                if (event.data && event.data.msgType && _this.messageHandlers.size) {
                    // If the response object is undefined, we ensure it's at least an
                    // empty object before passing to the event listener.
                    /* eslint-disable-next-line no-param-reassign */
                    event.data.response = (_b = event.data.response) !== null && _b !== void 0 ? _b : {};
                    try {
                        for (var _c = __values(_this.messageHandlers.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var handler = _d.value;
                            handler(event);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            }
        });
    };
    return WebTransport;
}(_magic_sdk_provider__WEBPACK_IMPORTED_MODULE_0__["PayloadTransport"]));

//# sourceMappingURL=web-transport.js.map

/***/ }),

/***/ "./node_modules/yallist/iterator.js":
/*!******************************************!*\
  !*** ./node_modules/yallist/iterator.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (Yallist) {
  Yallist.prototype[Symbol.iterator] = function* () {
    for (let walker = this.head; walker; walker = walker.next) {
      yield walker.value
    }
  }
}


/***/ }),

/***/ "./node_modules/yallist/yallist.js":
/*!*****************************************!*\
  !*** ./node_modules/yallist/yallist.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = Yallist

Yallist.Node = Node
Yallist.create = Yallist

function Yallist (list) {
  var self = this
  if (!(self instanceof Yallist)) {
    self = new Yallist()
  }

  self.tail = null
  self.head = null
  self.length = 0

  if (list && typeof list.forEach === 'function') {
    list.forEach(function (item) {
      self.push(item)
    })
  } else if (arguments.length > 0) {
    for (var i = 0, l = arguments.length; i < l; i++) {
      self.push(arguments[i])
    }
  }

  return self
}

Yallist.prototype.removeNode = function (node) {
  if (node.list !== this) {
    throw new Error('removing node which does not belong to this list')
  }

  var next = node.next
  var prev = node.prev

  if (next) {
    next.prev = prev
  }

  if (prev) {
    prev.next = next
  }

  if (node === this.head) {
    this.head = next
  }
  if (node === this.tail) {
    this.tail = prev
  }

  node.list.length--
  node.next = null
  node.prev = null
  node.list = null

  return next
}

Yallist.prototype.unshiftNode = function (node) {
  if (node === this.head) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var head = this.head
  node.list = this
  node.next = head
  if (head) {
    head.prev = node
  }

  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

Yallist.prototype.pushNode = function (node) {
  if (node === this.tail) {
    return
  }

  if (node.list) {
    node.list.removeNode(node)
  }

  var tail = this.tail
  node.list = this
  node.prev = tail
  if (tail) {
    tail.next = node
  }

  this.tail = node
  if (!this.head) {
    this.head = node
  }
  this.length++
}

Yallist.prototype.push = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    push(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.unshift = function () {
  for (var i = 0, l = arguments.length; i < l; i++) {
    unshift(this, arguments[i])
  }
  return this.length
}

Yallist.prototype.pop = function () {
  if (!this.tail) {
    return undefined
  }

  var res = this.tail.value
  this.tail = this.tail.prev
  if (this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  this.length--
  return res
}

Yallist.prototype.shift = function () {
  if (!this.head) {
    return undefined
  }

  var res = this.head.value
  this.head = this.head.next
  if (this.head) {
    this.head.prev = null
  } else {
    this.tail = null
  }
  this.length--
  return res
}

Yallist.prototype.forEach = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.head, i = 0; walker !== null; i++) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.next
  }
}

Yallist.prototype.forEachReverse = function (fn, thisp) {
  thisp = thisp || this
  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {
    fn.call(thisp, walker.value, i, this)
    walker = walker.prev
  }
}

Yallist.prototype.get = function (n) {
  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.next
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.getReverse = function (n) {
  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {
    // abort out of the list early if we hit a cycle
    walker = walker.prev
  }
  if (i === n && walker !== null) {
    return walker.value
  }
}

Yallist.prototype.map = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.head; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.next
  }
  return res
}

Yallist.prototype.mapReverse = function (fn, thisp) {
  thisp = thisp || this
  var res = new Yallist()
  for (var walker = this.tail; walker !== null;) {
    res.push(fn.call(thisp, walker.value, this))
    walker = walker.prev
  }
  return res
}

Yallist.prototype.reduce = function (fn, initial) {
  var acc
  var walker = this.head
  if (arguments.length > 1) {
    acc = initial
  } else if (this.head) {
    walker = this.head.next
    acc = this.head.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = 0; walker !== null; i++) {
    acc = fn(acc, walker.value, i)
    walker = walker.next
  }

  return acc
}

Yallist.prototype.reduceReverse = function (fn, initial) {
  var acc
  var walker = this.tail
  if (arguments.length > 1) {
    acc = initial
  } else if (this.tail) {
    walker = this.tail.prev
    acc = this.tail.value
  } else {
    throw new TypeError('Reduce of empty list with no initial value')
  }

  for (var i = this.length - 1; walker !== null; i--) {
    acc = fn(acc, walker.value, i)
    walker = walker.prev
  }

  return acc
}

Yallist.prototype.toArray = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.head; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.next
  }
  return arr
}

Yallist.prototype.toArrayReverse = function () {
  var arr = new Array(this.length)
  for (var i = 0, walker = this.tail; walker !== null; i++) {
    arr[i] = walker.value
    walker = walker.prev
  }
  return arr
}

Yallist.prototype.slice = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {
    walker = walker.next
  }
  for (; walker !== null && i < to; i++, walker = walker.next) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.sliceReverse = function (from, to) {
  to = to || this.length
  if (to < 0) {
    to += this.length
  }
  from = from || 0
  if (from < 0) {
    from += this.length
  }
  var ret = new Yallist()
  if (to < from || to < 0) {
    return ret
  }
  if (from < 0) {
    from = 0
  }
  if (to > this.length) {
    to = this.length
  }
  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {
    walker = walker.prev
  }
  for (; walker !== null && i > from; i--, walker = walker.prev) {
    ret.push(walker.value)
  }
  return ret
}

Yallist.prototype.splice = function (start, deleteCount, ...nodes) {
  if (start > this.length) {
    start = this.length - 1
  }
  if (start < 0) {
    start = this.length + start;
  }

  for (var i = 0, walker = this.head; walker !== null && i < start; i++) {
    walker = walker.next
  }

  var ret = []
  for (var i = 0; walker && i < deleteCount; i++) {
    ret.push(walker.value)
    walker = this.removeNode(walker)
  }
  if (walker === null) {
    walker = this.tail
  }

  if (walker !== this.head && walker !== this.tail) {
    walker = walker.prev
  }

  for (var i = 0; i < nodes.length; i++) {
    walker = insert(this, walker, nodes[i])
  }
  return ret;
}

Yallist.prototype.reverse = function () {
  var head = this.head
  var tail = this.tail
  for (var walker = head; walker !== null; walker = walker.prev) {
    var p = walker.prev
    walker.prev = walker.next
    walker.next = p
  }
  this.head = tail
  this.tail = head
  return this
}

function insert (self, node, value) {
  var inserted = node === self.head ?
    new Node(value, null, node, self) :
    new Node(value, node, node.next, self)

  if (inserted.next === null) {
    self.tail = inserted
  }
  if (inserted.prev === null) {
    self.head = inserted
  }

  self.length++

  return inserted
}

function push (self, item) {
  self.tail = new Node(item, self.tail, null, self)
  if (!self.head) {
    self.head = self.tail
  }
  self.length++
}

function unshift (self, item) {
  self.head = new Node(item, null, self.head, self)
  if (!self.tail) {
    self.tail = self.head
  }
  self.length++
}

function Node (value, prev, next, list) {
  if (!(this instanceof Node)) {
    return new Node(value, prev, next, list)
  }

  this.list = list
  this.value = value

  if (prev) {
    prev.next = this
    this.prev = prev
  } else {
    this.prev = null
  }

  if (next) {
    next.prev = this
    this.next = next
  } else {
    this.next = null
  }
}

try {
  // add if support for Symbol.iterator is present
  __webpack_require__(/*! ./iterator.js */ "./node_modules/yallist/iterator.js")(Yallist)
} catch (er) {}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvZGlzdC9tb2R1bGUvY29yZS9qc29uLXJwYy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvZGlzdC9tb2R1bGUvY29yZS9wYXlsb2FkLXRyYW5zcG9ydC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvZGlzdC9tb2R1bGUvY29yZS9zZGstZW52aXJvbm1lbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWFnaWMtc2RrL3Byb3ZpZGVyL2Rpc3QvbW9kdWxlL2NvcmUvc2RrLWV4Y2VwdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWFnaWMtc2RrL3Byb3ZpZGVyL2Rpc3QvbW9kdWxlL2NvcmUvc2RrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hZ2ljLXNkay9wcm92aWRlci9kaXN0L21vZHVsZS9jb3JlL3ZpZXctY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvZGlzdC9tb2R1bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWFnaWMtc2RrL3Byb3ZpZGVyL2Rpc3QvbW9kdWxlL21vZHVsZXMvYXV0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvZGlzdC9tb2R1bGUvbW9kdWxlcy9iYXNlLWV4dGVuc2lvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvZGlzdC9tb2R1bGUvbW9kdWxlcy9iYXNlLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvZGlzdC9tb2R1bGUvbW9kdWxlcy9ycGMtcHJvdmlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWFnaWMtc2RrL3Byb3ZpZGVyL2Rpc3QvbW9kdWxlL21vZHVsZXMvdXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvZGlzdC9tb2R1bGUvdXRpbC9iYXNlNjQtanNvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvZGlzdC9tb2R1bGUvdXRpbC9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWFnaWMtc2RrL3Byb3ZpZGVyL2Rpc3QvbW9kdWxlL3V0aWwvZ2V0LXBheWxvYWQtaWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWFnaWMtc2RrL3Byb3ZpZGVyL2Rpc3QvbW9kdWxlL3V0aWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWFnaWMtc2RrL3Byb3ZpZGVyL2Rpc3QvbW9kdWxlL3V0aWwvcHJvbWlzZS10b29scy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvZGlzdC9tb2R1bGUvdXRpbC9zdG9yYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hZ2ljLXNkay9wcm92aWRlci9kaXN0L21vZHVsZS91dGlsL3R5cGUtZ3VhcmRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hZ2ljLXNkay9wcm92aWRlci9kaXN0L21vZHVsZS91dGlsL3VybC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvZGlzdC9tb2R1bGUvdXRpbC93ZWJhdXRobi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvbm9kZV9tb2R1bGVzL2V2ZW50ZW1pdHRlcjMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWFnaWMtc2RrL3Byb3ZpZGVyL25vZGVfbW9kdWxlcy9zZW12ZXIvY2xhc3Nlcy9jb21wYXJhdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hZ2ljLXNkay9wcm92aWRlci9ub2RlX21vZHVsZXMvc2VtdmVyL2NsYXNzZXMvcmFuZ2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWFnaWMtc2RrL3Byb3ZpZGVyL25vZGVfbW9kdWxlcy9zZW12ZXIvY2xhc3Nlcy9zZW12ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWFnaWMtc2RrL3Byb3ZpZGVyL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2NtcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvY29tcGFyZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvZXEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWFnaWMtc2RrL3Byb3ZpZGVyL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2d0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hZ2ljLXNkay9wcm92aWRlci9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9ndGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWFnaWMtc2RrL3Byb3ZpZGVyL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL2x0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hZ2ljLXNkay9wcm92aWRlci9ub2RlX21vZHVsZXMvc2VtdmVyL2Z1bmN0aW9ucy9sdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWFnaWMtc2RrL3Byb3ZpZGVyL25vZGVfbW9kdWxlcy9zZW12ZXIvZnVuY3Rpb25zL25lcS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvbm9kZV9tb2R1bGVzL3NlbXZlci9mdW5jdGlvbnMvc2F0aXNmaWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hZ2ljLXNkay9wcm92aWRlci9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9pZGVudGlmaWVycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvcHJvdmlkZXIvbm9kZV9tb2R1bGVzL3NlbXZlci9pbnRlcm5hbC9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hZ2ljLXNkay9wcm92aWRlci9ub2RlX21vZHVsZXMvc2VtdmVyL2ludGVybmFsL3JlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hZ2ljLXNkay90eXBlcy9kaXN0L21vZHVsZS9jb3JlL2V4Y2VwdGlvbi10eXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvdHlwZXMvZGlzdC9tb2R1bGUvY29yZS9qc29uLXJwYy10eXBlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvdHlwZXMvZGlzdC9tb2R1bGUvY29yZS9tZXNzYWdlLXR5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hZ2ljLXNkay90eXBlcy9kaXN0L21vZHVsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYWdpYy1zZGsvdHlwZXMvZGlzdC9tb2R1bGUvbW9kdWxlcy9ycGMtcHJvdmlkZXItdHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2NhbGZvcmFnZS1kcml2ZXItbWVtb3J5L19idW5kbGUvdW1kLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9jYWxmb3JhZ2UvZGlzdC9sb2NhbGZvcmFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xydS1jYWNoZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hZ2ljLXNkay9kaXN0L21vZHVsZS9pZnJhbWUtY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hZ2ljLXNkay9kaXN0L21vZHVsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hZ2ljLXNkay9kaXN0L21vZHVsZS93ZWItdHJhbnNwb3J0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMveWFsbGlzdC9pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3lhbGxpc3QveWFsbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDK0Q7QUFDVDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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UDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsV0FBVyxHQUFHLFdBQVcsR0FBRyxXQUFXO0FBQzdEO0FBQ0EsMEJBQTBCLDBCQUEwQjtBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0EsOEJBQThCLFNBQVM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGlCQUFpQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxVQUFVO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUSxnQkFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMEJBQTBCO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVB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QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLENBQUMsRUFBRSxNQUFNO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLHFJQUFxSTtBQUN0SSxDQUFDLEVBQUUsTUFBTTtBQUNUOztBQUVBLG9HQUFvRyxtQkFBbUIsRUFBRSxtQkFBbUIsOEhBQThIOztBQUUxUSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHFCQUFxQjtBQUNyQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MseUJBQXlCO0FBQzdEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxtQkFBbUIsb0JBQW9CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDhCQUE4QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQkFBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvQkFBb0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixvQkFBb0I7QUFDbkQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBLG1DQUFtQyxvQkFBb0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLG1HQUFtRztBQUNuRztBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0Isb0JBQW9CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsbUNBQW1DLG9CQUFvQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixtR0FBbUc7QUFDbkc7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxrQkFBa0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxT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cUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkMsUUFBUTtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLFlBQVk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsaURBQWlELFFBQVE7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCOztBQUUzQixpQkFBaUI7QUFDakIsb0JBQW9COztBQUVwQjtBQUNBO0FBQ0EsMENBQTBDLGlCQUFpQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEMsaUJBQWlCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUJBQWlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLG1CQUFPLENBQUMseURBQWU7QUFDekIsQ0FBQyIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbmltcG9ydCB7IGlzSnNvblJwY1Jlc3BvbnNlUGF5bG9hZCB9IGZyb20gJy4uL3V0aWwvdHlwZS1ndWFyZHMnO1xuaW1wb3J0IHsgZ2V0UGF5bG9hZElkIH0gZnJvbSAnLi4vdXRpbC9nZXQtcGF5bG9hZC1pZCc7XG52YXIgcGF5bG9hZFByZXByb2Nlc3NlZFN5bWJvbCA9IFN5bWJvbCgnUGF5bG9hZCBwcmUtcHJvY2Vzc2VkIGJ5IE1hZ2ljIFNESycpO1xuLyoqXG4gKiBUbyBhdm9pZCBcInByZS1wcm9jZXNzaW5nXCIgYSBwYXlsb2FkIG1vcmUgdGhhbiBvbmNlIChhbmQgbmVlZGxlc3NseVxuICogaW5jcmVtZW50aW5nIG91ciBwYXlsb2FkIElEIGdlbmVyYXRvciksIHdlIGF0dGFjaCBhIHN5bWJvbCB0byBkZXRlY3QgYVxuICogcGF5bG9hZHMgd2UndmUgYWxyZWFkeSB2aXNpdGVkLlxuICovXG5mdW5jdGlvbiBtYXJrUGF5bG9hZEFzUHJlcHJvY2Vzc2VkKHBheWxvYWQpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocGF5bG9hZCwgcGF5bG9hZFByZXByb2Nlc3NlZFN5bWJvbCwge1xuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgfSk7XG4gICAgcmV0dXJuIHBheWxvYWQ7XG59XG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwYXlsb2FkIGhhcyBiZWVuIHZpc2l0ZWQgYnkgb3VyIFwicHJlLXByb2Nlc3NpbmcsXCIgaW5cbiAqIGBzdGFuZGFyZGl6ZUpzb25ScGNSZXF1ZXN0UGF5bG9hZCguLi4pYC5cbiAqL1xuZnVuY3Rpb24gaXNQYXlsb2FkUHJlcHJvY2Vzc2VkKHBheWxvYWQpIHtcbiAgICByZXR1cm4gISFwYXlsb2FkW3BheWxvYWRQcmVwcm9jZXNzZWRTeW1ib2xdO1xufVxuLyoqXG4gKiBSZXR1cm5zIGEgZnVsbCBgSnNvblJwY1JlcXVlc3RQYXlsb2FkYCBmcm9tIGEgcG90ZW50aWFsbHkgaW5jb21wbGV0ZSBwYXlsb2FkXG4gKiBvYmplY3QuIFRoaXMgbWV0aG9kIG11dGF0ZXMgdGhlIGdpdmVuIGBwYXlsb2FkYCB0byBwcmVzZXJ2ZSBjb21wYXRpYmlsaXR5XG4gKiB3aXRoIGV4dGVybmFsIGxpYnJhcmllcyB0aGF0IHBlcmZvcm0gdGhlaXIgb3duIGBKc29uUnBjUmVxdWVzdFBheWxvYWQuaWRgXG4gKiBjaGVjayB0byBhc3NvY2lhdGUgcmVzcG9uc2VzIChzdWNoIGFzIGB3ZWIzYCkuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBpcyBuby1vcCBpZiB0aGUgcGF5bG9hZCBoYXMgYWxyZWFkeSBiZWVuIHByb2Nlc3NlZCBiZWZvcmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFuZGFyZGl6ZUpzb25ScGNSZXF1ZXN0UGF5bG9hZChwYXlsb2FkKSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgaWYgKCFpc1BheWxvYWRQcmVwcm9jZXNzZWQocGF5bG9hZCkpIHtcbiAgICAgICAgcGF5bG9hZC5qc29ucnBjID0gKF9hID0gcGF5bG9hZC5qc29ucnBjKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnMi4wJztcbiAgICAgICAgcGF5bG9hZC5pZCA9IGdldFBheWxvYWRJZCgpO1xuICAgICAgICBwYXlsb2FkLm1ldGhvZCA9IChfYiA9IHBheWxvYWQubWV0aG9kKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnbm9vcCc7XG4gICAgICAgIHBheWxvYWQucGFyYW1zID0gKF9jID0gcGF5bG9hZC5wYXJhbXMpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IFtdO1xuICAgICAgICBtYXJrUGF5bG9hZEFzUHJlcHJvY2Vzc2VkKHBheWxvYWQpO1xuICAgIH1cbiAgICByZXR1cm4gcGF5bG9hZDtcbn1cbi8qKlxuICogQnVpbGQgYSB2YWxpZCBKU09OIFJQQyBwYXlsb2FkIGZvciBlbWl0dGluZyB0byB0aGUgTWFnaWMgU0RLIGlmcmFtZSByZWxheWVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSnNvblJwY1JlcXVlc3RQYXlsb2FkKG1ldGhvZCwgcGFyYW1zKSB7XG4gICAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7IHBhcmFtcyA9IFtdOyB9XG4gICAgcmV0dXJuIG1hcmtQYXlsb2FkQXNQcmVwcm9jZXNzZWQoe1xuICAgICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIGpzb25ycGM6ICcyLjAnLFxuICAgICAgICBpZDogZ2V0UGF5bG9hZElkKCksXG4gICAgfSk7XG59XG4vKipcbiAqIEZvcm1hdHMgYW5kIHN0YW5kYXJkaXplcyBhIEpTT04gUlBDIDIuMCByZXNwb25zZSBmcm9tIGEgbnVtYmVyIG9mIHBvdGVudGlhbFxuICogc291cmNlcy5cbiAqL1xudmFyIEpzb25ScGNSZXNwb25zZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBKc29uUnBjUmVzcG9uc2UocmVzcG9uc2VPclBheWxvYWQpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlT3JQYXlsb2FkIGluc3RhbmNlb2YgSnNvblJwY1Jlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzLl9qc29ucnBjID0gcmVzcG9uc2VPclBheWxvYWQucGF5bG9hZC5qc29ucnBjO1xuICAgICAgICAgICAgdGhpcy5faWQgPSByZXNwb25zZU9yUGF5bG9hZC5wYXlsb2FkLmlkO1xuICAgICAgICAgICAgdGhpcy5fcmVzdWx0ID0gcmVzcG9uc2VPclBheWxvYWQucGF5bG9hZC5yZXN1bHQ7XG4gICAgICAgICAgICB0aGlzLl9lcnJvciA9IHJlc3BvbnNlT3JQYXlsb2FkLnBheWxvYWQuZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNKc29uUnBjUmVzcG9uc2VQYXlsb2FkKHJlc3BvbnNlT3JQYXlsb2FkKSkge1xuICAgICAgICAgICAgdGhpcy5fanNvbnJwYyA9IHJlc3BvbnNlT3JQYXlsb2FkLmpzb25ycGM7XG4gICAgICAgICAgICB0aGlzLl9pZCA9IHJlc3BvbnNlT3JQYXlsb2FkLmlkO1xuICAgICAgICAgICAgdGhpcy5fcmVzdWx0ID0gcmVzcG9uc2VPclBheWxvYWQucmVzdWx0O1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSByZXNwb25zZU9yUGF5bG9hZC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2pzb25ycGMgPSByZXNwb25zZU9yUGF5bG9hZC5qc29ucnBjO1xuICAgICAgICAgICAgdGhpcy5faWQgPSByZXNwb25zZU9yUGF5bG9hZC5pZDtcbiAgICAgICAgICAgIHRoaXMuX3Jlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIEpzb25ScGNSZXNwb25zZS5wcm90b3R5cGUuYXBwbHlFcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICB0aGlzLl9lcnJvciA9IGVycm9yO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEpzb25ScGNSZXNwb25zZS5wcm90b3R5cGUuYXBwbHlSZXN1bHQgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIHRoaXMuX3Jlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSnNvblJwY1Jlc3BvbnNlLnByb3RvdHlwZSwgXCJoYXNFcnJvclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9lcnJvciAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5fZXJyb3IgIT09IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShKc29uUnBjUmVzcG9uc2UucHJvdG90eXBlLCBcImhhc1Jlc3VsdFwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9yZXN1bHQgIT09ICd1bmRlZmluZWQnO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSnNvblJwY1Jlc3BvbnNlLnByb3RvdHlwZSwgXCJwYXlsb2FkXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGpzb25ycGM6IHRoaXMuX2pzb25ycGMsXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuX2lkLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogdGhpcy5fcmVzdWx0LFxuICAgICAgICAgICAgICAgIGVycm9yOiB0aGlzLl9lcnJvcixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiBKc29uUnBjUmVzcG9uc2U7XG59KCkpO1xuZXhwb3J0IHsgSnNvblJwY1Jlc3BvbnNlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1qc29uLXJwYy5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgTWFnaWNJbmNvbWluZ1dpbmRvd01lc3NhZ2UsIH0gZnJvbSAnQG1hZ2ljLXNkay90eXBlcyc7XG5pbXBvcnQgeyBKc29uUnBjUmVzcG9uc2UgfSBmcm9tICcuL2pzb24tcnBjJztcbmltcG9ydCB7IGNyZWF0ZUF1dG9DYXRjaGluZ1Byb21pc2UgfSBmcm9tICcuLi91dGlsL3Byb21pc2UtdG9vbHMnO1xuLyoqXG4gKiBHZXQgdGhlIG9yaWdpbmF0aW5nIHBheWxvYWQgZnJvbSBhIGJhdGNoIHJlcXVlc3QgdXNpbmcgdGhlIHNwZWNpZmllZCBgaWRgLlxuICovXG5mdW5jdGlvbiBnZXRSZXF1ZXN0UGF5bG9hZEZyb21CYXRjaChyZXF1ZXN0UGF5bG9hZCwgaWQpIHtcbiAgICByZXR1cm4gaWQgJiYgQXJyYXkuaXNBcnJheShyZXF1ZXN0UGF5bG9hZClcbiAgICAgICAgPyByZXF1ZXN0UGF5bG9hZC5maW5kKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwLmlkID09PSBpZDsgfSlcbiAgICAgICAgOiByZXF1ZXN0UGF5bG9hZDtcbn1cbi8qKlxuICogRW5zdXJlcyB0aGUgaW5jb21pbmcgcmVzcG9uc2UgZm9sbG93cyB0aGUgZXhwZWN0ZWQgc2NoZW1hIGFuZCBwYXJzZXMgZm9yIGFcbiAqIEpTT04gUlBDIHBheWxvYWQgSUQuXG4gKi9cbmZ1bmN0aW9uIHN0YW5kYXJkaXplUmVzcG9uc2UocmVxdWVzdFBheWxvYWQsIGV2ZW50KSB7XG4gICAgdmFyIF9hO1xuICAgIHZhciBpZCA9IChfYSA9IGV2ZW50LmRhdGEucmVzcG9uc2UpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZDtcbiAgICB2YXIgcmVxdWVzdFBheWxvYWRSZXNvbHZlZCA9IGdldFJlcXVlc3RQYXlsb2FkRnJvbUJhdGNoKHJlcXVlc3RQYXlsb2FkLCBpZCk7XG4gICAgaWYgKGlkICYmIHJlcXVlc3RQYXlsb2FkUmVzb2x2ZWQpIHtcbiAgICAgICAgLy8gQnVpbGQgYSBzdGFuZGFyZGl6ZWQgcmVzcG9uc2Ugb2JqZWN0XG4gICAgICAgIHZhciByZXNwb25zZSA9IG5ldyBKc29uUnBjUmVzcG9uc2UocmVxdWVzdFBheWxvYWRSZXNvbHZlZClcbiAgICAgICAgICAgIC5hcHBseVJlc3VsdChldmVudC5kYXRhLnJlc3BvbnNlLnJlc3VsdClcbiAgICAgICAgICAgIC5hcHBseUVycm9yKGV2ZW50LmRhdGEucmVzcG9uc2UuZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBpZDogaWQsIHJlc3BvbnNlOiByZXNwb25zZSB9O1xuICAgIH1cbiAgICByZXR1cm4ge307XG59XG52YXIgUGF5bG9hZFRyYW5zcG9ydCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgYFBheWxvYWRUcmFuc3BvcnRgXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3ZlcmxheSAtIFRoZSBgSWZyYW1lQ29udHJvbGxlcmAgY29udGV4dCB0byB3aGljaCB0aGUgZXZlbnQgd2lsbCBiZVxuICAgICAqIHBvc3RlZC5cbiAgICAgKiBAcGFyYW0gZW5kcG9pbnQgLSBUaGUgVVJMIGZvciB0aGUgcmVsZXZhbnQgaWZyYW1lIGNvbnRleHQuXG4gICAgICogQHBhcmFtIGVuY29kZWRRdWVyeVBhcmFtcyAtIFRoZSB1bmlxdWUsIGVuY29kZWQgcXVlcnkgcGFyYW1ldGVycyBmb3IgdGhlXG4gICAgICogcmVsZXZhbnQgaWZyYW1lIGNvbnRleHQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gUGF5bG9hZFRyYW5zcG9ydChlbmRwb2ludCwgZW5jb2RlZFF1ZXJ5UGFyYW1zKSB7XG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSBlbmRwb2ludDtcbiAgICAgICAgdGhpcy5lbmNvZGVkUXVlcnlQYXJhbXMgPSBlbmNvZGVkUXVlcnlQYXJhbXM7XG4gICAgICAgIHRoaXMubWVzc2FnZUhhbmRsZXJzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG4gICAgUGF5bG9hZFRyYW5zcG9ydC5wcm90b3R5cGUucG9zdCA9IGZ1bmN0aW9uIChvdmVybGF5LCBtc2dUeXBlLCBwYXlsb2FkKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGNyZWF0ZUF1dG9DYXRjaGluZ1Byb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIF9fYXdhaXRlcihfdGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiYXRjaERhdGEsIGJhdGNoSWRzLCBhY2tub3dsZWRnZVJlc3BvbnNlLCByZW1vdmVSZXNwb25zZUxpc3RlbmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCBvdmVybGF5LnJlYWR5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2hEYXRhID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXRjaElkcyA9IEFycmF5LmlzQXJyYXkocGF5bG9hZCkgPyBwYXlsb2FkLm1hcChmdW5jdGlvbiAocCkgeyByZXR1cm4gcC5pZDsgfSkgOiBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG92ZXJsYXkucG9zdE1lc3NhZ2UoeyBtc2dUeXBlOiBtc2dUeXBlICsgXCItXCIgKyB0aGlzLmVuY29kZWRRdWVyeVBhcmFtcywgcGF5bG9hZDogcGF5bG9hZCB9KV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFja25vd2xlZGdlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVtb3ZlRXZlbnRMaXN0ZW5lcikgeyByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9hID0gc3RhbmRhcmRpemVSZXNwb25zZShwYXlsb2FkLCBldmVudCksIGlkID0gX2EuaWQsIHJlc3BvbnNlID0gX2EucmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkICYmIHJlc3BvbnNlICYmIEFycmF5LmlzQXJyYXkocGF5bG9hZCkgJiYgYmF0Y2hJZHMuaW5jbHVkZXMoaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoRGF0YS5wdXNoKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGJhdGNoIHJlcXVlc3RzLCB3ZSB3YWl0IGZvciBhbGwgcmVzcG9uc2VzIGJlZm9yZSByZXNvbHZpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYXRjaERhdGEubGVuZ3RoID09PSBwYXlsb2FkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShiYXRjaERhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlkICYmIHJlc3BvbnNlICYmICFBcnJheS5pc0FycmF5KHBheWxvYWQpICYmIGlkID09PSBwYXlsb2FkLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTsgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVJlc3BvbnNlTGlzdGVuZXIgPSB0aGlzLm9uKE1hZ2ljSW5jb21pbmdXaW5kb3dNZXNzYWdlLk1BR0lDX0hBTkRMRV9SRVNQT05TRSwgYWNrbm93bGVkZ2VSZXNwb25zZShmdW5jdGlvbiAoKSB7IHJldHVybiByZW1vdmVSZXNwb25zZUxpc3RlbmVyKCk7IH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7IH0pXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIExpc3RlbiBmb3IgZXZlbnRzIHJlY2VpdmVkIHdpdGggdGhlIGdpdmVuIGBtc2dUeXBlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtc2dUeXBlIC0gVGhlIGBtc2dUeXBlYCBlbmNvZGVkIHdpdGggdGhlIGV2ZW50IGRhdGEuXG4gICAgICogQHBhcmFtIGhhbmRsZXIgLSBBIGhhbmRsZXIgZnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBlYWNoIGV2ZW50IHJlY2VpdmVkLlxuICAgICAqIEByZXR1cm4gQSBgdm9pZGAgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBhdHRhY2hlZCBldmVudC5cbiAgICAgKi9cbiAgICBQYXlsb2FkVHJhbnNwb3J0LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChtc2dUeXBlLCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBib3VuZEhhbmRsZXIgPSBoYW5kbGVyLmJpbmQod2luZG93KTtcbiAgICAgICAgLy8gV2UgY2Fubm90IGVmZmVjdGl2ZWx5IGNvdmVyIHRoaXMgZnVuY3Rpb24gYmVjYXVzZSBpdCBuZXZlciBnZXRzIHJlZmVyZW5jZVxuICAgICAgICAvLyBieSB2YWx1ZS4gVGhlIGZ1bmN0aW9uYWxpdHkgb2YgdGhpcyBjYWxsYmFjayBpcyB0ZXN0ZWQgd2l0aGluXG4gICAgICAgIC8vIGBpbml0TWVzc2FnZUxpc3RlbmVyYC5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICAgICAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YS5tc2dUeXBlID09PSBtc2dUeXBlICsgXCItXCIgKyBfdGhpcy5lbmNvZGVkUXVlcnlQYXJhbXMpXG4gICAgICAgICAgICAgICAgYm91bmRIYW5kbGVyKGV2ZW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tZXNzYWdlSGFuZGxlcnMuYWRkKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm1lc3NhZ2VIYW5kbGVycy5kZWxldGUobGlzdGVuZXIpOyB9O1xuICAgIH07XG4gICAgcmV0dXJuIFBheWxvYWRUcmFuc3BvcnQ7XG59KCkpO1xuZXhwb3J0IHsgUGF5bG9hZFRyYW5zcG9ydCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF5bG9hZC10cmFuc3BvcnQuanMubWFwIiwiZXhwb3J0IHZhciBTREtFbnZpcm9ubWVudCA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNESyhTREtCYXNlQ3RvciwgZW52aXJvbm1lbnQpIHtcbiAgICBPYmplY3QuYXNzaWduKFNES0Vudmlyb25tZW50LCBlbnZpcm9ubWVudCk7XG4gICAgcmV0dXJuIFNES0Jhc2VDdG9yO1xufVxuZXhwb3J0IHZhciBlbnZOYW1lVG9OcG1OYW1lID0ge1xuICAgICdtYWdpYy1zZGsnOiAnbWFnaWMtc2RrJyxcbiAgICAnbWFnaWMtc2RrLXJuJzogJ0BtYWdpYy1zZGsvcmVhY3QtbmF0aXZlJyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZGstZW52aXJvbm1lbnQuanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgeyBSUENFcnJvckNvZGUsIFNES0Vycm9yQ29kZSwgU0RLV2FybmluZ0NvZGUgfSBmcm9tICdAbWFnaWMtc2RrL3R5cGVzJztcbmltcG9ydCB7IGlzSnNvblJwY0Vycm9yQ29kZSB9IGZyb20gJy4uL3V0aWwvdHlwZS1ndWFyZHMnO1xuaW1wb3J0IHsgU0RLRW52aXJvbm1lbnQsIGVudk5hbWVUb05wbU5hbWUgfSBmcm9tICcuL3Nkay1lbnZpcm9ubWVudCc7XG4vLyAtLS0gRXJyb3Ivd2FybmluZyBjbGFzc2VzXG4vKipcbiAqIFRoaXMgZXJyb3IgdHlwZSByZXByZXNlbnRzIGludGVybmFsIFNESyBlcnJvcnMuIFRoaXMgY291bGQgYmUgZGV2ZWxvcGVyXG4gKiBtaXN0YWtlcyAob3IgTWFnaWMncyBtaXN0YWtlcyksIG9yIGV4ZWN1dGlvbiBlcnJvcnMgdW5yZWxhdGVkIHRvIHN0YW5kYXJkXG4gKiBKYXZhU2NyaXB0IGV4Y2VwdGlvbnMuXG4gKi9cbnZhciBNYWdpY1NES0Vycm9yID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNYWdpY1NES0Vycm9yLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1hZ2ljU0RLRXJyb3IoY29kZSwgcmF3TWVzc2FnZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBcIk1hZ2ljIFNESyBFcnJvcjogW1wiICsgY29kZSArIFwiXSBcIiArIHJhd01lc3NhZ2UpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgICBfdGhpcy5yYXdNZXNzYWdlID0gcmF3TWVzc2FnZTtcbiAgICAgICAgX3RoaXMuX19wcm90b19fID0gRXJyb3I7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgTWFnaWNTREtFcnJvci5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBNYWdpY1NES0Vycm9yO1xufShFcnJvcikpO1xuZXhwb3J0IHsgTWFnaWNTREtFcnJvciB9O1xuLyoqXG4gKiBUaGlzIGVycm9yIHR5cGUgY29tbXVuaWNhdGVzIGV4Y2VwdGlvbnMgdGhhdCBvY2N1ciBkdXJpbmcgZXhlY3V0aW9uIGluIHRoZVxuICogTWFnaWMgYDxpZnJhbWU+YCBjb250ZXh0LlxuICovXG52YXIgTWFnaWNSUENFcnJvciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTWFnaWNSUENFcnJvciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNYWdpY1JQQ0Vycm9yKHNvdXJjZUVycm9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLl9fcHJvdG9fXyA9IEVycm9yO1xuICAgICAgICB2YXIgY29kZU5vcm1hbGl6ZWQgPSBOdW1iZXIoc291cmNlRXJyb3IgPT09IG51bGwgfHwgc291cmNlRXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNvdXJjZUVycm9yLmNvZGUpO1xuICAgICAgICBfdGhpcy5yYXdNZXNzYWdlID0gKHNvdXJjZUVycm9yID09PSBudWxsIHx8IHNvdXJjZUVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzb3VyY2VFcnJvci5tZXNzYWdlKSB8fCAnSW50ZXJuYWwgZXJyb3InO1xuICAgICAgICBfdGhpcy5jb2RlID0gaXNKc29uUnBjRXJyb3JDb2RlKGNvZGVOb3JtYWxpemVkKSA/IGNvZGVOb3JtYWxpemVkIDogUlBDRXJyb3JDb2RlLkludGVybmFsRXJyb3I7XG4gICAgICAgIF90aGlzLm1lc3NhZ2UgPSBcIk1hZ2ljIFJQQyBFcnJvcjogW1wiICsgX3RoaXMuY29kZSArIFwiXSBcIiArIF90aGlzLnJhd01lc3NhZ2U7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgTWFnaWNSUENFcnJvci5wcm90b3R5cGUpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBNYWdpY1JQQ0Vycm9yO1xufShFcnJvcikpO1xuZXhwb3J0IHsgTWFnaWNSUENFcnJvciB9O1xuLyoqXG4gKiBJbiBjb250cmFzdCB0byBgU0RLRXJyb3JgIG9iamVjdHMsIHRoaXMgXCJ3YXJuaW5nXCIgdHlwZSBjb21tdW5pY2F0ZXMgaW1wb3J0YW50XG4gKiBjb250ZXh0IHRoYXQgZG9lcyBub3QgcmlzZSB0byB0aGUgbGV2ZWwgb2YgYW4gZXhjZXB0aW9uLiBUaGVzZSBzaG91bGQgYmVcbiAqIGxvZ2dlZCByYXRoZXIgdGhhbiB0aHJvd24uXG4gKi9cbnZhciBNYWdpY1NES1dhcm5pbmcgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTWFnaWNTREtXYXJuaW5nKGNvZGUsIHJhd01lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5yYXdNZXNzYWdlID0gcmF3TWVzc2FnZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJNYWdpYyBTREsgV2FybmluZzogW1wiICsgY29kZSArIFwiXSBcIiArIHJhd01lc3NhZ2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvZ3MgdGhpcyB3YXJuaW5nIHRvIHRoZSBjb25zb2xlLlxuICAgICAqL1xuICAgIE1hZ2ljU0RLV2FybmluZy5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLndhcm4odGhpcy5tZXNzYWdlKTtcbiAgICB9O1xuICAgIHJldHVybiBNYWdpY1NES1dhcm5pbmc7XG59KCkpO1xuZXhwb3J0IHsgTWFnaWNTREtXYXJuaW5nIH07XG4vKipcbiAqIFRoaXMgZXJyb3IgdHlwZSBpcyByZXNlcnZlZCBmb3IgY29tbXVuaWNhdGluZyBlcnJvcnMgdGhhdCBhcmlzZSBkdXJpbmdcbiAqIGV4ZWN1dGlvbiBvZiBNYWdpYyBTREsgRXh0ZW5zaW9uIG1ldGhvZHMuIENvbXBhcmUgdGhpcyB0byB0aGUgYFNES0Vycm9yYFxuICogdHlwZSwgc3BlY2lmaWNhbGx5IGluIGNvbnRleHQgb2YgRXh0ZW5zaW9ucy5cbiAqL1xudmFyIE1hZ2ljRXh0ZW5zaW9uRXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1hZ2ljRXh0ZW5zaW9uRXJyb3IsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTWFnaWNFeHRlbnNpb25FcnJvcihleHQsIGNvZGUsIHJhd01lc3NhZ2UsIGRhdGEpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgXCJNYWdpYyBFeHRlbnNpb24gRXJyb3IgKFwiICsgZXh0Lm5hbWUgKyBcIik6IFtcIiArIGNvZGUgKyBcIl0gXCIgKyByYXdNZXNzYWdlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgX3RoaXMucmF3TWVzc2FnZSA9IHJhd01lc3NhZ2U7XG4gICAgICAgIF90aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICBfdGhpcy5fX3Byb3RvX18gPSBFcnJvcjtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKF90aGlzLCBNYWdpY0V4dGVuc2lvbkVycm9yLnByb3RvdHlwZSk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgcmV0dXJuIE1hZ2ljRXh0ZW5zaW9uRXJyb3I7XG59KEVycm9yKSk7XG5leHBvcnQgeyBNYWdpY0V4dGVuc2lvbkVycm9yIH07XG4vKipcbiAqIEluIGNvbnRyYXN0IHRvIGBNYWdpY0V4dGVuc2lvbkVycm9yYCBvYmplY3RzLCB0aGlzIFwid2FybmluZ1wiIHR5cGVcbiAqIGNvbW11bmljYXRlcyBpbXBvcnRhbnQgY29udGV4dCB0aGF0IGRvZXMgbm90IHJpc2UgdG8gdGhlIGxldmVsIG9mIGFuXG4gKiBleGNlcHRpb24uIFRoZXNlIHNob3VsZCBiZSBsb2dnZWQgcmF0aGVyIHRoYW4gdGhyb3duLlxuICovXG52YXIgTWFnaWNFeHRlbnNpb25XYXJuaW5nID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1hZ2ljRXh0ZW5zaW9uV2FybmluZyhleHQsIGNvZGUsIHJhd01lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5jb2RlID0gY29kZTtcbiAgICAgICAgdGhpcy5yYXdNZXNzYWdlID0gcmF3TWVzc2FnZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJNYWdpYyBFeHRlbnNpb24gV2FybmluZyAoXCIgKyBleHQubmFtZSArIFwiKTogW1wiICsgY29kZSArIFwiXSBcIiArIHJhd01lc3NhZ2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIExvZ3MgdGhpcyB3YXJuaW5nIHRvIHRoZSBjb25zb2xlLlxuICAgICAqL1xuICAgIE1hZ2ljRXh0ZW5zaW9uV2FybmluZy5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLndhcm4odGhpcy5tZXNzYWdlKTtcbiAgICB9O1xuICAgIHJldHVybiBNYWdpY0V4dGVuc2lvbldhcm5pbmc7XG59KCkpO1xuZXhwb3J0IHsgTWFnaWNFeHRlbnNpb25XYXJuaW5nIH07XG4vLyAtLS0gU0RLIGVycm9yIGZhY3Rvcmllc1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1pc3NpbmdBcGlLZXlFcnJvcigpIHtcbiAgICByZXR1cm4gbmV3IE1hZ2ljU0RLRXJyb3IoU0RLRXJyb3JDb2RlLk1pc3NpbmdBcGlLZXksICdQbGVhc2UgcHJvdmlkZSBhbiBBUEkga2V5IHRoYXQgeW91IGFjcXVpcmVkIGZyb20gdGhlIE1hZ2ljIGRldmVsb3BlciBkYXNoYm9hcmQuJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kYWxOb3RSZWFkeUVycm9yKCkge1xuICAgIHJldHVybiBuZXcgTWFnaWNTREtFcnJvcihTREtFcnJvckNvZGUuTW9kYWxOb3RSZWFkeSwgJ01vZGFsIGlzIG5vdCByZWFkeS4nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYWxmb3JtZWRSZXNwb25zZUVycm9yKCkge1xuICAgIHJldHVybiBuZXcgTWFnaWNTREtFcnJvcihTREtFcnJvckNvZGUuTWFsZm9ybWVkUmVzcG9uc2UsICdSZXNwb25zZSBmcm9tIHRoZSBNYWdpYyBpZnJhbWUgaXMgbWFsZm9ybWVkLicpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUV4dGVuc2lvbk5vdEluaXRpYWxpemVkRXJyb3IobWVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBNYWdpY1NES0Vycm9yKFNES0Vycm9yQ29kZS5FeHRlbnNpb25Ob3RJbml0aWFsaXplZCwgXCJFeHRlbnNpb25zIG11c3QgYmUgaW5pdGlhbGl6ZWQgd2l0aCBhIE1hZ2ljIFNESyBpbnN0YW5jZSBiZWZvcmUgYEV4dGVuc2lvbi5cIiArIG1lbWJlciArIFwiYCBjYW4gYmUgYWNjZXNzZWQuIERvIG5vdCBpbnZva2UgYEV4dGVuc2lvbi5cIiArIG1lbWJlciArIFwiYCBpbnNpZGUgYW4gZXh0ZW5zaW9uIGNvbnN0cnVjdG9yLlwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXZWJBdXRobk5vdFN1cHBvcnRFcnJvcigpIHtcbiAgICByZXR1cm4gbmV3IE1hZ2ljU0RLRXJyb3IoU0RLRXJyb3JDb2RlLldlYkF1dGhuTm90U3VwcG9ydGVkLCAnV2ViQXV0aG4gaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGRldmljZS4nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXZWJBdXRoQ3JlYXRlQ3JlZGVudGlhbEVycm9yKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gbmV3IE1hZ2ljU0RLRXJyb3IoU0RLRXJyb3JDb2RlLldlYkF1dGhuQ3JlYXRlQ3JlZGVudGlhbEVycm9yLCBcIkVycm9yIGNyZWF0aW5nIGNyZWRlbnRpYWw6IFwiICsgbWVzc2FnZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5jb21wYXRpYmxlRXh0ZW5zaW9uc0Vycm9yKGV4dGVuc2lvbnMpIHtcbiAgICB2YXIgbnBtTmFtZSA9IGVudk5hbWVUb05wbU5hbWVbU0RLRW52aXJvbm1lbnQuc2RrTmFtZV07XG4gICAgdmFyIG1zZyA9IFwiU29tZSBleHRlbnNpb25zIGFyZSBpbmNvbXBhdGlibGUgd2l0aCBgXCIgKyBucG1OYW1lICsgXCJAXCIgKyBTREtFbnZpcm9ubWVudC52ZXJzaW9uICsgXCJgOlwiO1xuICAgIGV4dGVuc2lvbnNcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZXh0KSB7IHJldHVybiB0eXBlb2YgZXh0LmNvbXBhdCAhPT0gJ3VuZGVmaW5lZCcgJiYgZXh0LmNvbXBhdCAhPT0gbnVsbDsgfSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGV4dCkge1xuICAgICAgICB2YXIgY29tcGF0ID0gZXh0LmNvbXBhdFtucG1OYW1lXTtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKHR5cGVvZiBjb21wYXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBtc2cgKz0gXCJcXG4gIC0gRXh0ZW5zaW9uIGBcIiArIGV4dC5uYW1lICsgXCJgIHN1cHBvcnRzIHZlcnNpb24ocykgYFwiICsgY29tcGF0ICsgXCJgXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWNvbXBhdCkge1xuICAgICAgICAgICAgbXNnICs9IFwiXFxuICAtIEV4dGVuc2lvbiBgXCIgKyBleHQubmFtZSArIFwiYCBkb2VzIG5vdCBzdXBwb3J0IFwiICsgU0RLRW52aXJvbm1lbnQudGFyZ2V0ICsgXCIgZW52aXJvbm1lbnRzLlwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVsc2UgY2FzZSBpcyBpcnJlbGV2YW50IGhlcmUgaGVyZVxuICAgICAgICAvLyAod2UgZmlsdGVyIG91dCBleHRlbnNpb25zIHdpdGggbWlzc2luZyBgY29tcGF0YCBmaWVsZClcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IE1hZ2ljU0RLRXJyb3IoU0RLRXJyb3JDb2RlLkluY29tcGF0aWJsZUV4dGVuc2lvbnMsIG1zZyk7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52YWxpZEFyZ3VtZW50RXJyb3Iob3B0aW9ucykge1xuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgYXJndW1lbnQgaW5kZXggKGdpdmVuIGJ5IGBhcmd1bWVudGApIHRvIGF0dGFjaCB0aGUgY29ycmVjdCBvcmRpbmFsIHN1ZmZpeC5cbiAgICAgKiAoaS5lLjogMXN0LCAybmQsIDNyZCwgNHRoLCBldGMuKVxuICAgICAqL1xuICAgIHZhciBvcmRpbmFsU3VmZml4ID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIGlBZGp1c3RlZCA9IGkgKyAxOyAvLyBBcmd1bWVudCBpcyB6ZXJvLWluZGV4ZWQuXG4gICAgICAgIHZhciBqID0gaUFkanVzdGVkICUgMTA7XG4gICAgICAgIHZhciBrID0gaUFkanVzdGVkICUgMTAwO1xuICAgICAgICBpZiAoaiA9PT0gMSAmJiBrICE9PSAxMSlcbiAgICAgICAgICAgIHJldHVybiBpQWRqdXN0ZWQgKyBcInN0XCI7XG4gICAgICAgIGlmIChqID09PSAyICYmIGsgIT09IDEyKVxuICAgICAgICAgICAgcmV0dXJuIGlBZGp1c3RlZCArIFwibmRcIjtcbiAgICAgICAgaWYgKGogPT09IDMgJiYgayAhPT0gMTMpXG4gICAgICAgICAgICByZXR1cm4gaUFkanVzdGVkICsgXCJyZFwiO1xuICAgICAgICByZXR1cm4gaUFkanVzdGVkICsgXCJ0aFwiO1xuICAgIH07XG4gICAgcmV0dXJuIG5ldyBNYWdpY1NES0Vycm9yKFNES0Vycm9yQ29kZS5JbnZhbGlkQXJndW1lbnQsIFwiSW52YWxpZCBcIiArIG9yZGluYWxTdWZmaXgob3B0aW9ucy5hcmd1bWVudCkgKyBcIiBhcmd1bWVudCBnaXZlbiB0byBgXCIgKyBvcHRpb25zLnByb2NlZHVyZSArIFwiYC5cXG5cIiArXG4gICAgICAgIChcIiAgRXhwZWN0ZWQ6IGBcIiArIG9wdGlvbnMuZXhwZWN0ZWQgKyBcImBcXG5cIikgK1xuICAgICAgICAoXCIgIFJlY2VpdmVkOiBgXCIgKyBvcHRpb25zLnJlY2VpdmVkICsgXCJgXCIpKTtcbn1cbi8vIC0tLSBTREsgd2FybmluZyBmYWN0b3JpZXNcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEdXBsaWNhdGVJZnJhbWVXYXJuaW5nKCkge1xuICAgIHJldHVybiBuZXcgTWFnaWNTREtXYXJuaW5nKFNES1dhcm5pbmdDb2RlLkR1cGxpY2F0ZUlmcmFtZSwgJ0R1cGxpY2F0ZSBpZnJhbWVzIGZvdW5kLicpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN5bmNocm9ub3VzV2ViM01ldGhvZFdhcm5pbmcoKSB7XG4gICAgcmV0dXJuIG5ldyBNYWdpY1NES1dhcm5pbmcoU0RLV2FybmluZ0NvZGUuU3luY1dlYjNNZXRob2QsICdOb24tYXN5bmMgd2ViMyBtZXRob2RzIGFyZSBkZXByZWNhdGVkIGluIHdlYjMgPiAxLjAgYW5kIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBNYWdpYyB3ZWIzIHByb3ZpZGVyLiBQbGVhc2UgdXNlIGFuIGFzeW5jIG1ldGhvZCBpbnN0ZWFkLicpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlYWN0TmF0aXZlRW5kcG9pbnRDb25maWd1cmF0aW9uV2FybmluZygpIHtcbiAgICByZXR1cm4gbmV3IE1hZ2ljU0RLV2FybmluZyhTREtXYXJuaW5nQ29kZS5SZWFjdE5hdGl2ZUVuZHBvaW50Q29uZmlndXJhdGlvbiwgXCJDVVNUT00gRE9NQUlOUyBBUkUgTk9UIFNVUFBPUlRFRCBXSEVOIFVTSU5HIE1BR0lDIFNESyBXSVRIIFJFQUNUIE5BVElWRSEgVGhlIGBlbmRwb2ludGAgcGFyYW1ldGVyIFNIT1VMRCBOT1QgYmUgcHJvdmlkZWQuIFRoZSBNYWdpYyBgPGlmcmFtZT5gIGlzIGF1dG9tYXRpY2FsbHkgd3JhcHBlZCBieSBhIFdlYlZpZXcgcG9pbnRlZCBhdCBgXCIgKyBTREtFbnZpcm9ubWVudC5kZWZhdWx0RW5kcG9pbnQgKyBcImAuIENoYW5naW5nIHRoaXMgZGVmYXVsdCBiZWhhdmlvciB3aWxsIGxlYWQgdG8gdW5leHBlY3RlZCByZXN1bHRzIGFuZCBwb3RlbnRpYWxseSBzZWN1cml0eS10aHJlYXRlbmluZyBidWdzLlwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZXByZWNhdGlvbldhcm5pbmcob3B0aW9ucykge1xuICAgIHZhciBtZXRob2QgPSBvcHRpb25zLm1ldGhvZCwgcmVtb3ZhbFZlcnNpb25zID0gb3B0aW9ucy5yZW1vdmFsVmVyc2lvbnMsIHVzZUluc3RlYWQgPSBvcHRpb25zLnVzZUluc3RlYWQ7XG4gICAgdmFyIG5wbU5hbWUgPSBlbnZOYW1lVG9OcG1OYW1lW1NES0Vudmlyb25tZW50LnNka05hbWVdO1xuICAgIHZhciByZW1vdmFsVmVyc2lvbiA9IHJlbW92YWxWZXJzaW9uc1tucG1OYW1lXTtcbiAgICB2YXIgdXNlSW5zdGVhZFN1ZmZpeCA9IHVzZUluc3RlYWQgPyBcIiBVc2UgYFwiICsgdXNlSW5zdGVhZCArIFwiYCBpbnN0ZWFkLlwiIDogJyc7XG4gICAgdmFyIG1lc3NhZ2UgPSBcImBcIiArIG1ldGhvZCArIFwiYCB3aWxsIGJlIHJlbW92ZWQgZnJvbSBgXCIgKyBucG1OYW1lICsgXCJgIGluIHZlcnNpb24gYFwiICsgcmVtb3ZhbFZlcnNpb24gKyBcImAuXCIgKyB1c2VJbnN0ZWFkU3VmZml4O1xuICAgIHJldHVybiBuZXcgTWFnaWNTREtXYXJuaW5nKFNES1dhcm5pbmdDb2RlLkRlcHJlY2F0aW9uTm90aWNlLCBtZXNzYWdlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNkay1leGNlcHRpb25zLmpzLm1hcCIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnbiAgKi9cbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgc2VtdmVyU2F0aXNmaWVzIGZyb20gJ3NlbXZlci9mdW5jdGlvbnMvc2F0aXNmaWVzJztcbmltcG9ydCB7IGVuY29kZUpTT04gfSBmcm9tICcuLi91dGlsL2Jhc2U2NC1qc29uJztcbmltcG9ydCB7IGNyZWF0ZU1pc3NpbmdBcGlLZXlFcnJvciwgY3JlYXRlUmVhY3ROYXRpdmVFbmRwb2ludENvbmZpZ3VyYXRpb25XYXJuaW5nLCBjcmVhdGVJbmNvbXBhdGlibGVFeHRlbnNpb25zRXJyb3IsIH0gZnJvbSAnLi9zZGstZXhjZXB0aW9ucyc7XG5pbXBvcnQgeyBBdXRoTW9kdWxlIH0gZnJvbSAnLi4vbW9kdWxlcy9hdXRoJztcbmltcG9ydCB7IFVzZXJNb2R1bGUgfSBmcm9tICcuLi9tb2R1bGVzL3VzZXInO1xuaW1wb3J0IHsgUlBDUHJvdmlkZXJNb2R1bGUgfSBmcm9tICcuLi9tb2R1bGVzL3JwYy1wcm92aWRlcic7XG5pbXBvcnQgeyBjcmVhdGVVUkwgfSBmcm9tICcuLi91dGlsL3VybCc7XG5pbXBvcnQgeyBFeHRlbnNpb24gfSBmcm9tICcuLi9tb2R1bGVzL2Jhc2UtZXh0ZW5zaW9uJztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi91dGlsL3R5cGUtZ3VhcmRzJztcbmltcG9ydCB7IFNES0Vudmlyb25tZW50IH0gZnJvbSAnLi9zZGstZW52aXJvbm1lbnQnO1xuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGBleHRgIGlzIGNvbXBhdGlibGUgd2l0aCB0aGUgcGxhdGZvcm0gJiB2ZXJzaW9uIG9mIE1hZ2ljXG4gKiBTREsgY3VycmVudGx5IGluIHVzZS5cbiAqL1xuZnVuY3Rpb24gY2hlY2tFeHRlbnNpb25Db21wYXQoZXh0KSB7XG4gICAgaWYgKGV4dC5jb21wYXQpIHtcbiAgICAgICAgLy8gQ2hlY2sgd2ViIGNvbXBhdGliaWxpdHlcbiAgICAgICAgaWYgKFNES0Vudmlyb25tZW50LnNka05hbWUgPT09ICdtYWdpYy1zZGsnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGV4dC5jb21wYXRbJ21hZ2ljLXNkayddID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgID8gc2VtdmVyU2F0aXNmaWVzKFNES0Vudmlyb25tZW50LnZlcnNpb24sIGV4dC5jb21wYXRbJ21hZ2ljLXNkayddKVxuICAgICAgICAgICAgICAgIDogISFleHQuY29tcGF0WydtYWdpYy1zZGsnXTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBSZWFjdCBOYXRpdmUgY29tcGF0aWJpbGl0eVxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAoU0RLRW52aXJvbm1lbnQuc2RrTmFtZSA9PT0gJ21hZ2ljLXNkay1ybicpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZXh0LmNvbXBhdFsnQG1hZ2ljLXNkay9yZWFjdC1uYXRpdmUnXSA9PT0gJ3N0cmluZydcbiAgICAgICAgICAgICAgICA/IHNlbXZlclNhdGlzZmllcyhTREtFbnZpcm9ubWVudC52ZXJzaW9uLCBleHQuY29tcGF0WydAbWFnaWMtc2RrL3JlYWN0LW5hdGl2ZSddKVxuICAgICAgICAgICAgICAgIDogISFleHQuY29tcGF0WydAbWFnaWMtc2RrL3JlYWN0LW5hdGl2ZSddO1xuICAgICAgICB9XG4gICAgICAgIC8vIEVsc2UgY2FzZSBzaG91bGQgYmUgaW1wb3NzaWJsZSBoZXJlLi4uXG4gICAgfVxuICAgIC8vIFRvIGdyYWNlZnVsbHkgc3VwcG9ydCBvbGRlciBleHRlbnNpb25zLCB3ZSBhc3N1bWVcbiAgICAvLyBjb21wYXRpYmlsaXR5IHdoZW4gdGhlIGBjb21wYXRgIGZpZWxkIGlzIG1pc3NpbmcuXG4gICAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIEluaXRpYWxpemVzIFNESyBleHRlbnNpb25zLCBjaGVja3MgZm9yIHBsYXRmb3JtL3ZlcnNpb24gY29tcGF0aWJsaXR5IGlzc3VlcyxcbiAqIHRoZW4gY29uc29saWRhdGVzIGFueSBnbG9iYWwgY29uZmlndXJhdGlvbnMgcHJvdmlkZWQgYnkgdGhvc2UgZXh0ZW5zaW9ucy5cbiAqL1xuZnVuY3Rpb24gcHJlcGFyZUV4dGVuc2lvbnMob3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgdmFyIF9hO1xuICAgIHZhciBleHRlbnNpb25zID0gKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmV4dGVuc2lvbnMpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFtdO1xuICAgIHZhciBleHRDb25maWcgPSB7fTtcbiAgICB2YXIgaW5jb21wYXRpYmxlRXh0ZW5zaW9ucyA9IFtdO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGV4dGVuc2lvbnMpKSB7XG4gICAgICAgIGV4dGVuc2lvbnMuZm9yRWFjaChmdW5jdGlvbiAoZXh0KSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tFeHRlbnNpb25Db21wYXQoZXh0KSkge1xuICAgICAgICAgICAgICAgIGV4dC5pbml0KF90aGlzKTtcbiAgICAgICAgICAgICAgICBfdGhpc1tleHQubmFtZV0gPSBleHQ7XG4gICAgICAgICAgICAgICAgaWYgKGV4dCBpbnN0YW5jZW9mIEV4dGVuc2lvbi5JbnRlcm5hbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzRW1wdHkoZXh0LmNvbmZpZykpXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRDb25maWdbZXh0Lm5hbWVdID0gZXh0LmNvbmZpZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmNvbXBhdGlibGVFeHRlbnNpb25zLnB1c2goZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBPYmplY3Qua2V5cyhleHRlbnNpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tFeHRlbnNpb25Db21wYXQoZXh0ZW5zaW9uc1tuYW1lXSkpIHtcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zW25hbWVdLmluaXQoX3RoaXMpO1xuICAgICAgICAgICAgICAgIHZhciBleHQgPSBleHRlbnNpb25zW25hbWVdO1xuICAgICAgICAgICAgICAgIF90aGlzW25hbWVdID0gZXh0O1xuICAgICAgICAgICAgICAgIGlmIChleHQgaW5zdGFuY2VvZiBFeHRlbnNpb24uSW50ZXJuYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0VtcHR5KGV4dC5jb25maWcpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZXh0Q29uZmlnW2V4dGVuc2lvbnNbbmFtZV0ubmFtZV0gPSBleHQuY29uZmlnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluY29tcGF0aWJsZUV4dGVuc2lvbnMucHVzaChleHRlbnNpb25zW25hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpbmNvbXBhdGlibGVFeHRlbnNpb25zLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBjcmVhdGVJbmNvbXBhdGlibGVFeHRlbnNpb25zRXJyb3IoaW5jb21wYXRpYmxlRXh0ZW5zaW9ucyk7XG4gICAgfVxuICAgIHJldHVybiBleHRDb25maWc7XG59XG52YXIgU0RLQmFzZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE1hZ2ljIFNESy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTREtCYXNlKGFwaUtleSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuICAgICAgICBpZiAoIWFwaUtleSlcbiAgICAgICAgICAgIHRocm93IGNyZWF0ZU1pc3NpbmdBcGlLZXlFcnJvcigpO1xuICAgICAgICBpZiAoU0RLRW52aXJvbm1lbnQudGFyZ2V0ID09PSAncmVhY3QtbmF0aXZlJyAmJiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmVuZHBvaW50KSkge1xuICAgICAgICAgICAgY3JlYXRlUmVhY3ROYXRpdmVFbmRwb2ludENvbmZpZ3VyYXRpb25XYXJuaW5nKCkubG9nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlZmF1bHRFbmRwb2ludCA9IFNES0Vudmlyb25tZW50LmRlZmF1bHRFbmRwb2ludCwgdmVyc2lvbiA9IFNES0Vudmlyb25tZW50LnZlcnNpb247XG4gICAgICAgIHRoaXMuZW5kcG9pbnQgPSBjcmVhdGVVUkwoKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmVuZHBvaW50KSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBkZWZhdWx0RW5kcG9pbnQpLm9yaWdpbjtcbiAgICAgICAgLy8gQXNzaWduIEFQSSBNb2R1bGVzXG4gICAgICAgIHRoaXMuYXV0aCA9IG5ldyBBdXRoTW9kdWxlKHRoaXMpO1xuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlck1vZHVsZSh0aGlzKTtcbiAgICAgICAgdGhpcy5ycGNQcm92aWRlciA9IG5ldyBSUENQcm92aWRlck1vZHVsZSh0aGlzKTtcbiAgICAgICAgLy8gUHJlcGFyZSBFeHRlbnNpb25zXG4gICAgICAgIHZhciBleHRDb25maWcgPSBwcmVwYXJlRXh0ZW5zaW9ucy5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuICAgICAgICAvLyBCdWlsZCBxdWVyeSBwYXJhbXMgZm9yIHRoZSBjdXJyZW50IGBWaWV3Q29udHJvbGxlcmBcbiAgICAgICAgdGhpcy5lbmNvZGVkUXVlcnlQYXJhbXMgPSBlbmNvZGVKU09OKHtcbiAgICAgICAgICAgIEFQSV9LRVk6IHRoaXMuYXBpS2V5LFxuICAgICAgICAgICAgRE9NQUlOX09SSUdJTjogd2luZG93LmxvY2F0aW9uID8gd2luZG93LmxvY2F0aW9uLm9yaWdpbiA6ICcnLFxuICAgICAgICAgICAgRVRIX05FVFdPUks6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5uZXR3b3JrLFxuICAgICAgICAgICAgaG9zdDogY3JlYXRlVVJMKHRoaXMuZW5kcG9pbnQpLmhvc3QsXG4gICAgICAgICAgICBzZGs6IFNES0Vudmlyb25tZW50LnNka05hbWUsXG4gICAgICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxuICAgICAgICAgICAgZXh0OiBpc0VtcHR5KGV4dENvbmZpZykgPyB1bmRlZmluZWQgOiBleHRDb25maWcsXG4gICAgICAgICAgICBsb2NhbGU6IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSB8fCAnZW5fVVMnLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNES0Jhc2UucHJvdG90eXBlLCBcInRyYW5zcG9ydFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXByZXNlbnRzIHRoZSBKU09OIFJQQyBwYXlsb2FkIG1lc3NhZ2UgY2hhbm5lbCBhc3NvY2lhdGVkIHdpdGggdGhpc1xuICAgICAgICAgKiBgTWFnaWNTREtgIGluc3RhbmNlLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIVNES0Jhc2UuX190cmFuc3BvcnRzX18uaGFzKHRoaXMuZW5jb2RlZFF1ZXJ5UGFyYW1zKSkge1xuICAgICAgICAgICAgICAgIFNES0Jhc2UuX190cmFuc3BvcnRzX18uc2V0KHRoaXMuZW5jb2RlZFF1ZXJ5UGFyYW1zLCBuZXcgU0RLRW52aXJvbm1lbnQuUGF5bG9hZFRyYW5zcG9ydCh0aGlzLmVuZHBvaW50LCB0aGlzLmVuY29kZWRRdWVyeVBhcmFtcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFNES0Jhc2UuX190cmFuc3BvcnRzX18uZ2V0KHRoaXMuZW5jb2RlZFF1ZXJ5UGFyYW1zKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNES0Jhc2UucHJvdG90eXBlLCBcIm92ZXJsYXlcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogUmVwcmVzZW50cyB0aGUgdmlldyBjb250cm9sbGVyIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGBNYWdpY1NES2AgaW5zdGFuY2UuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghU0RLQmFzZS5fX292ZXJsYXlzX18uaGFzKHRoaXMuZW5jb2RlZFF1ZXJ5UGFyYW1zKSkge1xuICAgICAgICAgICAgICAgIHZhciBjb250cm9sbGVyID0gbmV3IFNES0Vudmlyb25tZW50LlZpZXdDb250cm9sbGVyKHRoaXMudHJhbnNwb3J0LCB0aGlzLmVuZHBvaW50LCB0aGlzLmVuY29kZWRRdWVyeVBhcmFtcyk7XG4gICAgICAgICAgICAgICAgU0RLQmFzZS5fX292ZXJsYXlzX18uc2V0KHRoaXMuZW5jb2RlZFF1ZXJ5UGFyYW1zLCBjb250cm9sbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBTREtCYXNlLl9fb3ZlcmxheXNfXy5nZXQodGhpcy5lbmNvZGVkUXVlcnlQYXJhbXMpO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBQcmVsb2FkcyB0aGUgTWFnaWMgdmlldywgYWxsb3dpbmcgZm9yIGZhc3RlciBpbml0aWFsIHJlcXVlc3RzIGluIGJyb3dzZXJcbiAgICAgKiBlbnZpcm9ubWVudHMuIEF3YWl0aW5nIHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgc2lnbmFsIHdoZW4gdGhlIE1hZ2ljIHZpZXdcbiAgICAgKiBoYXMgY29tcGxldGVkIGxvYWRpbmcgYW5kIGlzIHJlYWR5IGZvciByZXF1ZXN0cy5cbiAgICAgKi9cbiAgICBTREtCYXNlLnByb3RvdHlwZS5wcmVsb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMub3ZlcmxheS5yZWFkeV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBTREtCYXNlLl9fdHJhbnNwb3J0c19fID0gbmV3IE1hcCgpO1xuICAgIFNES0Jhc2UuX19vdmVybGF5c19fID0gbmV3IE1hcCgpO1xuICAgIHJldHVybiBTREtCYXNlO1xufSgpKTtcbmV4cG9ydCB7IFNES0Jhc2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNkay5qcy5tYXAiLCJpbXBvcnQgeyBNYWdpY0luY29taW5nV2luZG93TWVzc2FnZSB9IGZyb20gJ0BtYWdpYy1zZGsvdHlwZXMnO1xudmFyIFZpZXdDb250cm9sbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFZpZXdDb250cm9sbGVyKHRyYW5zcG9ydCwgZW5kcG9pbnQsIGVuY29kZWRRdWVyeVBhcmFtcykge1xuICAgICAgICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcbiAgICAgICAgdGhpcy5lbmRwb2ludCA9IGVuZHBvaW50O1xuICAgICAgICB0aGlzLmVuY29kZWRRdWVyeVBhcmFtcyA9IGVuY29kZWRRdWVyeVBhcmFtcztcbiAgICAgICAgdGhpcy5yZWFkeSA9IHRoaXMud2FpdEZvclJlYWR5KCk7XG4gICAgICAgIGlmICh0aGlzLmluaXQpXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5saXN0ZW4oKTtcbiAgICB9XG4gICAgVmlld0NvbnRyb2xsZXIucHJvdG90eXBlLndhaXRGb3JSZWFkeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICBfdGhpcy50cmFuc3BvcnQub24oTWFnaWNJbmNvbWluZ1dpbmRvd01lc3NhZ2UuTUFHSUNfT1ZFUkxBWV9SRUFEWSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzb2x2ZSgpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gZm9yIG1lc3NhZ2VzIHNlbnQgZnJvbSB0aGUgdW5kZXJseWluZyBNYWdpYyBgPFdlYlZpZXc+YC5cbiAgICAgKi9cbiAgICBWaWV3Q29udHJvbGxlci5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLnRyYW5zcG9ydC5vbihNYWdpY0luY29taW5nV2luZG93TWVzc2FnZS5NQUdJQ19ISURFX09WRVJMQVksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmhpZGVPdmVybGF5KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRyYW5zcG9ydC5vbihNYWdpY0luY29taW5nV2luZG93TWVzc2FnZS5NQUdJQ19TSE9XX09WRVJMQVksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnNob3dPdmVybGF5KCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFZpZXdDb250cm9sbGVyO1xufSgpKTtcbmV4cG9ydCB7IFZpZXdDb250cm9sbGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD12aWV3LWNvbnRyb2xsZXIuanMubWFwIiwiZXhwb3J0IHsgU0RLQmFzZSB9IGZyb20gJy4vY29yZS9zZGsnO1xuZXhwb3J0IHsgY3JlYXRlU0RLIH0gZnJvbSAnLi9jb3JlL3Nkay1lbnZpcm9ubWVudCc7XG5leHBvcnQgeyBQYXlsb2FkVHJhbnNwb3J0IH0gZnJvbSAnLi9jb3JlL3BheWxvYWQtdHJhbnNwb3J0JztcbmV4cG9ydCB7IFZpZXdDb250cm9sbGVyIH0gZnJvbSAnLi9jb3JlL3ZpZXctY29udHJvbGxlcic7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUvc2RrLWV4Y2VwdGlvbnMnO1xuZXhwb3J0IHsgRXh0ZW5zaW9uIH0gZnJvbSAnLi9tb2R1bGVzL2Jhc2UtZXh0ZW5zaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbCc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBNYWdpY1BheWxvYWRNZXRob2QsIH0gZnJvbSAnQG1hZ2ljLXNkay90eXBlcyc7XG5pbXBvcnQgeyBCYXNlTW9kdWxlIH0gZnJvbSAnLi4vYmFzZS1tb2R1bGUnO1xuaW1wb3J0IHsgY3JlYXRlSnNvblJwY1JlcXVlc3RQYXlsb2FkIH0gZnJvbSAnLi4vLi4vY29yZS9qc29uLXJwYyc7XG5pbXBvcnQgeyB0cmFuc2Zvcm1OZXdBc3NlcnRpb25Gb3JTZXJ2ZXIsIHRyYW5zZm9ybUFzc2VydGlvbkZvclNlcnZlciB9IGZyb20gJy4uLy4uL3V0aWwvd2ViYXV0aG4nO1xuaW1wb3J0IHsgY3JlYXRlV2ViQXV0aENyZWF0ZUNyZWRlbnRpYWxFcnJvciwgY3JlYXRlV2ViQXV0aG5Ob3RTdXBwb3J0RXJyb3IgfSBmcm9tICcuLi8uLi9jb3JlL3Nkay1leGNlcHRpb25zJztcbmltcG9ydCB7IFNES0Vudmlyb25tZW50IH0gZnJvbSAnLi4vLi4vY29yZS9zZGstZW52aXJvbm1lbnQnO1xudmFyIEF1dGhNb2R1bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEF1dGhNb2R1bGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQXV0aE1vZHVsZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbml0aWF0ZSB0aGUgXCJtYWdpYyBsaW5rXCIgbG9naW4gZmxvdyBmb3IgYSB1c2VyLiBJZiB0aGUgZmxvdyBpcyBzdWNjZXNzZnVsLFxuICAgICAqIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGEgRGVjZW50cmFsaXplZCBJRCB0b2tlbiAod2l0aCBhIGRlZmF1bHQgbGlmZXNwYW5cbiAgICAgKiBvZiAxNSBtaW51dGVzKS5cbiAgICAgKi9cbiAgICBBdXRoTW9kdWxlLnByb3RvdHlwZS5sb2dpbldpdGhNYWdpY0xpbmsgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICB2YXIgZW1haWwgPSBjb25maWd1cmF0aW9uLmVtYWlsLCBfYSA9IGNvbmZpZ3VyYXRpb24uc2hvd1VJLCBzaG93VUkgPSBfYSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9hLCByZWRpcmVjdFVSSSA9IGNvbmZpZ3VyYXRpb24ucmVkaXJlY3RVUkk7XG4gICAgICAgIHZhciByZXF1ZXN0UGF5bG9hZCA9IGNyZWF0ZUpzb25ScGNSZXF1ZXN0UGF5bG9hZChNYWdpY1BheWxvYWRNZXRob2QuTG9naW5XaXRoTWFnaWNMaW5rLCBbXG4gICAgICAgICAgICB7IGVtYWlsOiBlbWFpbCwgc2hvd1VJOiBzaG93VUksIHJlZGlyZWN0VVJJOiByZWRpcmVjdFVSSSB9LFxuICAgICAgICBdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChyZXF1ZXN0UGF5bG9hZCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBMb2cgYSB1c2VyIGluIHdpdGggYSBzcGVjaWFsIG9uZS10aW1lLXVzZSBjcmVkZW50aWFsIHRva2VuLiBUaGlzIGlzXG4gICAgICogY3VycmVudGx5IHVzZWQgZHVyaW5nIG1hZ2ljIGxpbmsgZmxvd3Mgd2l0aCBhIGNvbmZpZ3VyZWQgcmVkaXJlY3QgdG9cbiAgICAgKiBoeWRyYXRlIHRoZSB1c2VyIHNlc3Npb24gYXQgdGhlIGVuZCBvZiB0aGUgZmxvdy4gSWYgdGhlIGZsb3cgaXMgc3VjY2Vzc2Z1bCxcbiAgICAgKiB0aGlzIG1ldGhvZCB3aWxsIHJldHVybiBhIERlY2VudHJhbGl6ZWQgSUQgdG9rZW4gKHdpdGggYSBkZWZhdWx0IGxpZmVzcGFuXG4gICAgICogb2YgMTUgbWludXRlcykuXG4gICAgICpcbiAgICAgKiBJZiBubyBhcmd1bWVudCBpcyBwcm92aWRlZCwgYSBjcmVkZW50aWFsIGlzIGF1dG9tYXRpY2FsbHkgcGFyc2VkIGZyb21cbiAgICAgKiBgd2luZG93LmxvY2F0aW9uLnNlYXJjaGAuXG4gICAgICovXG4gICAgQXV0aE1vZHVsZS5wcm90b3R5cGUubG9naW5XaXRoQ3JlZGVudGlhbCA9IGZ1bmN0aW9uIChjcmVkZW50aWFsT3JRdWVyeVN0cmluZykge1xuICAgICAgICB2YXIgY3JlZGVudGlhbFJlc29sdmVkID0gY3JlZGVudGlhbE9yUXVlcnlTdHJpbmcgIT09IG51bGwgJiYgY3JlZGVudGlhbE9yUXVlcnlTdHJpbmcgIT09IHZvaWQgMCA/IGNyZWRlbnRpYWxPclF1ZXJ5U3RyaW5nIDogJyc7XG4gICAgICAgIGlmICghY3JlZGVudGlhbE9yUXVlcnlTdHJpbmcgJiYgU0RLRW52aXJvbm1lbnQudGFyZ2V0ID09PSAnd2ViJykge1xuICAgICAgICAgICAgY3JlZGVudGlhbFJlc29sdmVkID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgcXVlcnkgZnJvbSB0aGUgcmVkaXJlY3QgY2FsbGJhY2sgYXMgYSBwcmVjYXV0aW9uLlxuICAgICAgICAgICAgdmFyIHVybFdpdGhvdXRRdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgJycsIHVybFdpdGhvdXRRdWVyeSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlcXVlc3RQYXlsb2FkID0gY3JlYXRlSnNvblJwY1JlcXVlc3RQYXlsb2FkKE1hZ2ljUGF5bG9hZE1ldGhvZC5Mb2dpbldpdGhDcmVkZW50aWFsLCBbY3JlZGVudGlhbFJlc29sdmVkXSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QocmVxdWVzdFBheWxvYWQpO1xuICAgIH07XG4gICAgQXV0aE1vZHVsZS5wcm90b3R5cGUucmVnaXN0ZXJXaXRoV2ViQXV0aG4gPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdXNlcm5hbWUsIF9hLCBuaWNrbmFtZSwgb3B0aW9ucywgY3JlZGVudGlhbCwgZXJyXzE7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXdpbmRvdy5QdWJsaWNLZXlDcmVkZW50aWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlV2ViQXV0aG5Ob3RTdXBwb3J0RXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lID0gY29uZmlndXJhdGlvbi51c2VybmFtZSwgX2EgPSBjb25maWd1cmF0aW9uLm5pY2tuYW1lLCBuaWNrbmFtZSA9IF9hID09PSB2b2lkIDAgPyAnJyA6IF9hO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5yZXF1ZXN0KGNyZWF0ZUpzb25ScGNSZXF1ZXN0UGF5bG9hZChNYWdpY1BheWxvYWRNZXRob2QuV2ViQXV0aG5SZWdpc3RyYXRpb25TdGFydCwgW3sgdXNlcm5hbWU6IHVzZXJuYW1lIH1dKSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzIsIDQsICwgNV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbmF2aWdhdG9yLmNyZWRlbnRpYWxzLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY0tleTogb3B0aW9ucy5jcmVkZW50aWFsX29wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsID0gKF9iLnNlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVXZWJBdXRoQ3JlYXRlQ3JlZGVudGlhbEVycm9yKGVycl8xKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5yZXF1ZXN0KGNyZWF0ZUpzb25ScGNSZXF1ZXN0UGF5bG9hZChNYWdpY1BheWxvYWRNZXRob2QuUmVnaXN0ZXJXaXRoV2ViQXV0aCwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG9wdGlvbnMuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0OiBjcmVkZW50aWFsLnJlc3BvbnNlLmdldFRyYW5zcG9ydHMoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9hZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uX3Jlc3BvbnNlOiB0cmFuc2Zvcm1OZXdBc3NlcnRpb25Gb3JTZXJ2ZXIoY3JlZGVudGlhbCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQXV0aE1vZHVsZS5wcm90b3R5cGUubG9naW5XaXRoV2ViQXV0aG4gPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdXNlcm5hbWUsIHRyYW5zZm9ybWVkQ3JlZGVudGlhbFJlcXVlc3RPcHRpb25zLCBhc3NlcnRpb24sIGVycl8yO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuUHVibGljS2V5Q3JlZGVudGlhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVdlYkF1dGhuTm90U3VwcG9ydEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZSA9IGNvbmZpZ3VyYXRpb24udXNlcm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlcXVlc3QoY3JlYXRlSnNvblJwY1JlcXVlc3RQYXlsb2FkKE1hZ2ljUGF5bG9hZE1ldGhvZC5Mb2dpbldpdGhXZWJBdXRobiwgW3sgdXNlcm5hbWU6IHVzZXJuYW1lIH1dKSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZENyZWRlbnRpYWxSZXF1ZXN0T3B0aW9ucyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsyLCA0LCAsIDVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIG5hdmlnYXRvci5jcmVkZW50aWFscy5nZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdWJsaWNLZXk6IHRyYW5zZm9ybWVkQ3JlZGVudGlhbFJlcXVlc3RPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0aW9uID0gKF9hLnNlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyXzIgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVXZWJBdXRoQ3JlYXRlQ3JlZGVudGlhbEVycm9yKGVycl8yKTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qLywgdGhpcy5yZXF1ZXN0KGNyZWF0ZUpzb25ScGNSZXF1ZXN0UGF5bG9hZChNYWdpY1BheWxvYWRNZXRob2QuV2ViQXV0aG5Mb2dpblZlcmZpeSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnRpb25fcmVzcG9uc2U6IHRyYW5zZm9ybUFzc2VydGlvbkZvclNlcnZlcihhc3NlcnRpb24pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBBdXRoTW9kdWxlO1xufShCYXNlTW9kdWxlKSk7XG5leHBvcnQgeyBBdXRoTW9kdWxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbmltcG9ydCB7IGNyZWF0ZUpzb25ScGNSZXF1ZXN0UGF5bG9hZCwgc3RhbmRhcmRpemVKc29uUnBjUmVxdWVzdFBheWxvYWQgfSBmcm9tICcuLi9jb3JlL2pzb24tcnBjJztcbmltcG9ydCB7IEJhc2VNb2R1bGUgfSBmcm9tICcuL2Jhc2UtbW9kdWxlJztcbmltcG9ydCB7IGNyZWF0ZUV4dGVuc2lvbk5vdEluaXRpYWxpemVkRXJyb3IsIE1hZ2ljRXh0ZW5zaW9uRXJyb3IsIE1hZ2ljRXh0ZW5zaW9uV2FybmluZyB9IGZyb20gJy4uL2NvcmUvc2RrLWV4Y2VwdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlUHJvbWlFdmVudCwgZW5jb2RlSlNPTiwgZGVjb2RlSlNPTiwgZW5jb2RlUXVlcnlQYXJhbWV0ZXJzLCBkZWNvZGVRdWVyeVBhcmFtZXRlcnMsIHN0b3JhZ2UsIGlzUHJvbWlFdmVudCwgfSBmcm9tICcuLi91dGlsJztcbnZhciBCYXNlRXh0ZW5zaW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhCYXNlRXh0ZW5zaW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEJhc2VFeHRlbnNpb24oKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHVuZGVmaW5lZCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy51dGlscyA9IHtcbiAgICAgICAgICAgIGNyZWF0ZVByb21pRXZlbnQ6IGNyZWF0ZVByb21pRXZlbnQsXG4gICAgICAgICAgICBpc1Byb21pRXZlbnQ6IGlzUHJvbWlFdmVudCxcbiAgICAgICAgICAgIGVuY29kZUpTT046IGVuY29kZUpTT04sXG4gICAgICAgICAgICBkZWNvZGVKU09OOiBkZWNvZGVKU09OLFxuICAgICAgICAgICAgZW5jb2RlUXVlcnlQYXJhbWV0ZXJzOiBlbmNvZGVRdWVyeVBhcmFtZXRlcnMsXG4gICAgICAgICAgICBkZWNvZGVRdWVyeVBhcmFtZXRlcnM6IGRlY29kZVF1ZXJ5UGFyYW1ldGVycyxcbiAgICAgICAgICAgIGNyZWF0ZUpzb25ScGNSZXF1ZXN0UGF5bG9hZDogY3JlYXRlSnNvblJwY1JlcXVlc3RQYXlsb2FkLFxuICAgICAgICAgICAgc3RhbmRhcmRpemVKc29uUnBjUmVxdWVzdFBheWxvYWQ6IHN0YW5kYXJkaXplSnNvblJwY1JlcXVlc3RQYXlsb2FkLFxuICAgICAgICAgICAgc3RvcmFnZTogc3RvcmFnZSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNka0FjY2Vzc0ZpZWxkcyA9IFsncmVxdWVzdCcsICd0cmFuc3BvcnQnLCAnb3ZlcmxheScsICdzZGsnXTtcbiAgICAgICAgLy8gRGlzYWxsb3cgU0RLIGFjY2VzcyBiZWZvcmUgaW5pdGlhbGl6YXRpb24uXG4gICAgICAgIHJldHVybiBuZXcgUHJveHkoX3RoaXMsIHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2RrQWNjZXNzRmllbGRzLmluY2x1ZGVzKHByb3ApICYmICFfdGhpcy5pc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZUV4dGVuc2lvbk5vdEluaXRpYWxpemVkRXJyb3IocHJvcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBNYWdpYyBTREsgaW5zdGFuY2Ugd2l0aCB0aGlzIEV4dGVuc2lvbi5cbiAgICAgKi9cbiAgICBCYXNlRXh0ZW5zaW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKHNkaykge1xuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLnNkayA9IHNkaztcbiAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBkZXByZWNhdGlvbiB3YXJuaW5nIHdyYXBwZWQgd2l0aCBhIG5hdGl2ZSBNYWdpYyBTREsgd2FybmluZyB0eXBlLlxuICAgICAqIEJlc3QgcHJhY3RpY2UgaXMgdG8gd2FybiB1c2VycyBvZiB1cGNvbWluZyBkZXByZWNhdGlvbnMgYXQgbGVhc3Qgb25lIG1ham9yXG4gICAgICogdmVyc2lvbiBiZWZvcmUgdGhlIGNoYW5nZSBpcyBpbXBsZW1lbnRlZC4gWW91IGNhbiB1c2UgdGhpcyBtZXRob2QgdG9cbiAgICAgKiBjb21tdW5pY2F0ZSBkZXByZWNhdGlvbnMgaW4gYSBtYW5uZXIgY29uc2lzdGVudCB3aXRoIE1hZ2ljIFNESyBjb3JlIGNvZGUuXG4gICAgICovXG4gICAgQmFzZUV4dGVuc2lvbi5wcm90b3R5cGUuY3JlYXRlRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kLCByZW1vdmFsVmVyc2lvbiA9IG9wdGlvbnMucmVtb3ZhbFZlcnNpb24sIHVzZUluc3RlYWQgPSBvcHRpb25zLnVzZUluc3RlYWQ7XG4gICAgICAgIHZhciB1c2VJbnN0ZWFkU3VmZml4ID0gdXNlSW5zdGVhZCA/IFwiIFVzZSBgXCIgKyB1c2VJbnN0ZWFkICsgXCJgIGluc3RlYWQuXCIgOiAnJztcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcImBcIiArIG1ldGhvZCArIFwiYCB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGlzIEV4dGVuc2lvbiBpbiB2ZXJzaW9uIGBcIiArIHJlbW92YWxWZXJzaW9uICsgXCJgLlwiICsgdXNlSW5zdGVhZFN1ZmZpeDtcbiAgICAgICAgcmV0dXJuIG5ldyBNYWdpY0V4dGVuc2lvbldhcm5pbmcodGhpcywgJ0RFUFJFQ0FUSU9OX05PVElDRScsIG1lc3NhZ2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHdhcm5pbmcgd3JhcHBlZCB3aXRoIGEgbmF0aXZlIE1hZ2ljIFNESyB3YXJuaW5nIHR5cGUuIFRoaXNcbiAgICAgKiBtYWludGFpbnMgY29uc2lzdGVuY3kgaW4gd2FybmluZyBtZXNzYWdpbmcgZm9yIGNvbnN1bWVycyBvZiBNYWdpYyBTREsgYW5kXG4gICAgICogdGhpcyBFeHRlbnNpb24uXG4gICAgICovXG4gICAgQmFzZUV4dGVuc2lvbi5wcm90b3R5cGUuY3JlYXRlV2FybmluZyA9IGZ1bmN0aW9uIChjb2RlLCBtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiBuZXcgTWFnaWNFeHRlbnNpb25XYXJuaW5nKHRoaXMsIGNvZGUsIG1lc3NhZ2UpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhbiBlcnJvciB3cmFwcGVkIHdpdGggYSBuYXRpdmUgTWFnaWMgU0RLIGVycm9yIHR5cGUuIFRoaXMgbWFpbnRhaW5zXG4gICAgICogY29uc2lzdGVuY3kgaW4gZXJyb3IgaGFuZGxpbmcgZm9yIGNvbnN1bWVycyBvZiBNYWdpYyBTREsgYW5kIHRoaXNcbiAgICAgKiBFeHRlbnNpb24uXG4gICAgICovXG4gICAgQmFzZUV4dGVuc2lvbi5wcm90b3R5cGUuY3JlYXRlRXJyb3IgPSBmdW5jdGlvbiAoY29kZSwgbWVzc2FnZSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IE1hZ2ljRXh0ZW5zaW9uRXJyb3IodGhpcywgY29kZSwgbWVzc2FnZSwgZGF0YSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaHJvd3MgYW4gZXJyb3Igd3JhcHBlZCB3aXRoIGEgbmF0aXZlIE1hZ2ljIFNESyBlcnJvciB0eXBlLiBUaGlzIG1haW50YWluc1xuICAgICAqIGNvbnNpc3RlbmN5IGluIGVycm9yIGhhbmRsaW5nIGZvciBjb25zdW1lcnMgb2YgTWFnaWMgU0RLIGFuZCB0aGlzXG4gICAgICogRXh0ZW5zaW9uLlxuICAgICAqL1xuICAgIEJhc2VFeHRlbnNpb24ucHJvdG90eXBlLnJhaXNlRXJyb3IgPSBmdW5jdGlvbiAoY29kZSwgbWVzc2FnZSwgZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgTWFnaWNFeHRlbnNpb25FcnJvcih0aGlzLCBjb2RlLCBtZXNzYWdlLCBkYXRhKTtcbiAgICB9O1xuICAgIHJldHVybiBCYXNlRXh0ZW5zaW9uO1xufShCYXNlTW9kdWxlKSk7XG52YXIgSW50ZXJuYWxFeHRlbnNpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEludGVybmFsRXh0ZW5zaW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEludGVybmFsRXh0ZW5zaW9uKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIHJldHVybiBJbnRlcm5hbEV4dGVuc2lvbjtcbn0oQmFzZUV4dGVuc2lvbikpO1xudmFyIEV4dGVuc2lvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRXh0ZW5zaW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEV4dGVuc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIGEgc3BlY2lhbCBjb25zdHJ1Y3RvciB1c2VkIHRvIG1hcmsgYW4gZXh0ZW5zaW9uIGFzIFwib2ZmaWNpYWwuXCIgT25seVxuICAgICAqIG9mZmljaWFsIGV4dGVuc2lvbnMgY2FuIGludGVyYWN0IHdpdGggdGhlIGlmcmFtZSB1c2luZyBjdXN0b20gSlNPTiBSUENcbiAgICAgKiBtZXRob2RzIGFuZCBidXNpbmVzcyBsb2dpYy4gVGhpcyBpcyBpbnRlbmRlZCBmb3IgaW50ZXJuYWwtdXNlIG9ubHkgYW5kXG4gICAgICogcHJvdmlkZXMgbm8gYWR2YW50YWdlIHRvIG9wZW4tc291cmNlIGV4dGVuc2lvbiBkZXZlbG9wZXJzLlxuICAgICAqXG4gICAgICogQGludGVybmFsXG4gICAgICovXG4gICAgRXh0ZW5zaW9uLkludGVybmFsID0gSW50ZXJuYWxFeHRlbnNpb247XG4gICAgcmV0dXJuIEV4dGVuc2lvbjtcbn0oQmFzZUV4dGVuc2lvbikpO1xuZXhwb3J0IHsgRXh0ZW5zaW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1iYXNlLWV4dGVuc2lvbi5qcy5tYXAiLCJ2YXIgX19yZWFkID0gKHRoaXMgJiYgdGhpcy5fX3JlYWQpIHx8IGZ1bmN0aW9uIChvLCBuKSB7XG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xuICAgIGlmICghbSkgcmV0dXJuIG87XG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XG4gICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxuICAgIGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XG4gICAgfVxuICAgIHJldHVybiBhcjtcbn07XG52YXIgX19zcHJlYWQgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcbiAgICByZXR1cm4gYXI7XG59O1xuaW1wb3J0IHsgTWFnaWNPdXRnb2luZ1dpbmRvd01lc3NhZ2UsIE1hZ2ljSW5jb21pbmdXaW5kb3dNZXNzYWdlIH0gZnJvbSAnQG1hZ2ljLXNkay90eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVNYWxmb3JtZWRSZXNwb25zZUVycm9yLCBNYWdpY1JQQ0Vycm9yIH0gZnJvbSAnLi4vY29yZS9zZGstZXhjZXB0aW9ucyc7XG5pbXBvcnQgeyBzdGFuZGFyZGl6ZUpzb25ScGNSZXF1ZXN0UGF5bG9hZCB9IGZyb20gJy4uL2NvcmUvanNvbi1ycGMnO1xuaW1wb3J0IHsgY3JlYXRlUHJvbWlFdmVudCB9IGZyb20gJy4uL3V0aWwvcHJvbWlzZS10b29scyc7XG52YXIgQmFzZU1vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCYXNlTW9kdWxlKHNkaykge1xuICAgICAgICB0aGlzLnNkayA9IHNkaztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJhc2VNb2R1bGUucHJvdG90eXBlLCBcInRyYW5zcG9ydFwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYFBheWxvYWRUcmFuc3BvcnRgIGZvciB0aGUgU0RLIGluc3RhbmNlIHJlZ2lzdGVyZWQgdG8gdGhpcyBtb2R1bGUuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkay50cmFuc3BvcnQ7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCYXNlTW9kdWxlLnByb3RvdHlwZSwgXCJvdmVybGF5XCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBgVmlld0NvbnRyb2xsZXJgIGZvciB0aGUgU0RLIGluc3RhbmNlIHJlZ2lzdGVyZWQgdG8gdGhpcyBtb2R1bGUuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkay5vdmVybGF5O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBFbWl0cyBwcm9taXNpZmllZCByZXF1ZXN0cyB0byB0aGUgTWFnaWMgYDxpZnJhbWU+YCBjb250ZXh0LlxuICAgICAqL1xuICAgIEJhc2VNb2R1bGUucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiAocGF5bG9hZCkge1xuICAgICAgICB2YXIgcmVzcG9uc2VQcm9taXNlID0gdGhpcy50cmFuc3BvcnQucG9zdCh0aGlzLm92ZXJsYXksIE1hZ2ljT3V0Z29pbmdXaW5kb3dNZXNzYWdlLk1BR0lDX0hBTkRMRV9SRVFVRVNULCBzdGFuZGFyZGl6ZUpzb25ScGNSZXF1ZXN0UGF5bG9hZChwYXlsb2FkKSk7XG4gICAgICAgIC8vIFByb21pRXZlbnQtaWZ5IHRoZSByZXNwb25zZS5cbiAgICAgICAgdmFyIHByb21pRXZlbnQgPSBjcmVhdGVQcm9taUV2ZW50KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlUHJvbWlzZVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwRXZlbnRzKCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5oYXNFcnJvcilcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBNYWdpY1JQQ0Vycm9yKHJlcy5wYXlsb2FkLmVycm9yKSk7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLmhhc1Jlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMucGF5bG9hZC5yZXN1bHQpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlTWFsZm9ybWVkUmVzcG9uc2VFcnJvcigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIGNsZWFudXBFdmVudHMoKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gTGlzdGVuIGZvciBldmVudHMgZnJvbSB0aGUgYDxpZnJhbWU+YCBhc3NvY2lhdGVkIHdpdGggdGhlIGN1cnJlbnQgcGF5bG9hZFxuICAgICAgICAvLyBhbmQgZW1pdCB0aG9zZSB0byBgUHJvbWlFdmVudGAgc3Vic2NyaWJlcnMuXG4gICAgICAgIHZhciBjbGVhbnVwRXZlbnRzID0gdGhpcy50cmFuc3BvcnQub24oTWFnaWNJbmNvbWluZ1dpbmRvd01lc3NhZ2UuTUFHSUNfSEFORExFX0VWRU5ULCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBldnQuZGF0YS5yZXNwb25zZTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5pZCA9PT0gcGF5bG9hZC5pZCAmJiAoKF9hID0gcmVzcG9uc2UucmVzdWx0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9iID0gcmVzcG9uc2UucmVzdWx0LCBldmVudF8xID0gX2IuZXZlbnQsIF9jID0gX2IucGFyYW1zLCBwYXJhbXMgPSBfYyA9PT0gdm9pZCAwID8gW10gOiBfYztcbiAgICAgICAgICAgICAgICBwcm9taUV2ZW50LmVtaXQuYXBwbHkocHJvbWlFdmVudCwgX19zcHJlYWQoW2V2ZW50XzFdLCBwYXJhbXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taUV2ZW50O1xuICAgIH07XG4gICAgcmV0dXJuIEJhc2VNb2R1bGU7XG59KCkpO1xuZXhwb3J0IHsgQmFzZU1vZHVsZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZS1tb2R1bGUuanMubWFwIiwiLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4sIHByZWZlci1zcHJlYWQgKi9cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmltcG9ydCB7IE1hZ2ljT3V0Z29pbmdXaW5kb3dNZXNzYWdlLCB9IGZyb20gJ0BtYWdpYy1zZGsvdHlwZXMnO1xuaW1wb3J0IHsgQmFzZU1vZHVsZSB9IGZyb20gJy4uL2Jhc2UtbW9kdWxlJztcbmltcG9ydCB7IGNyZWF0ZUludmFsaWRBcmd1bWVudEVycm9yLCBNYWdpY1JQQ0Vycm9yLCBjcmVhdGVTeW5jaHJvbm91c1dlYjNNZXRob2RXYXJuaW5nLCB9IGZyb20gJy4uLy4uL2NvcmUvc2RrLWV4Y2VwdGlvbnMnO1xuaW1wb3J0IHsgY3JlYXRlSnNvblJwY1JlcXVlc3RQYXlsb2FkLCBzdGFuZGFyZGl6ZUpzb25ScGNSZXF1ZXN0UGF5bG9hZCwgSnNvblJwY1Jlc3BvbnNlIH0gZnJvbSAnLi4vLi4vY29yZS9qc29uLXJwYyc7XG5pbXBvcnQgeyBjcmVhdGVUeXBlZEVtaXR0ZXIgfSBmcm9tICcuLi8uLi91dGlsL2V2ZW50cyc7XG52YXIgX2EgPSBjcmVhdGVUeXBlZEVtaXR0ZXIoKSwgY3JlYXRlQm91bmRFbWl0dGVyTWV0aG9kID0gX2EuY3JlYXRlQm91bmRFbWl0dGVyTWV0aG9kLCBjcmVhdGVDaGFpbmluZ0VtaXR0ZXJNZXRob2QgPSBfYS5jcmVhdGVDaGFpbmluZ0VtaXR0ZXJNZXRob2Q7XG4vKiogKi9cbnZhciBSUENQcm92aWRlck1vZHVsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoUlBDUHJvdmlkZXJNb2R1bGUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gUlBDUHJvdmlkZXJNb2R1bGUoKSB7XG4gICAgICAgIC8vIEltcGxlbWVudHMgRUlQIDExOTM6XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ldGhlcmV1bS9FSVBzL2Jsb2IvbWFzdGVyL0VJUFMvZWlwLTExOTMubWRcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlzTWFnaWMgPSB0cnVlO1xuICAgICAgICBfdGhpcy5vbiA9IGNyZWF0ZUNoYWluaW5nRW1pdHRlck1ldGhvZCgnb24nLCBfdGhpcyk7XG4gICAgICAgIF90aGlzLm9uY2UgPSBjcmVhdGVDaGFpbmluZ0VtaXR0ZXJNZXRob2QoJ29uY2UnLCBfdGhpcyk7XG4gICAgICAgIF90aGlzLmFkZExpc3RlbmVyID0gY3JlYXRlQ2hhaW5pbmdFbWl0dGVyTWV0aG9kKCdhZGRMaXN0ZW5lcicsIF90aGlzKTtcbiAgICAgICAgX3RoaXMub2ZmID0gY3JlYXRlQ2hhaW5pbmdFbWl0dGVyTWV0aG9kKCdvZmYnLCBfdGhpcyk7XG4gICAgICAgIF90aGlzLnJlbW92ZUxpc3RlbmVyID0gY3JlYXRlQ2hhaW5pbmdFbWl0dGVyTWV0aG9kKCdyZW1vdmVMaXN0ZW5lcicsIF90aGlzKTtcbiAgICAgICAgX3RoaXMucmVtb3ZlQWxsTGlzdGVuZXJzID0gY3JlYXRlQ2hhaW5pbmdFbWl0dGVyTWV0aG9kKCdyZW1vdmVBbGxMaXN0ZW5lcnMnLCBfdGhpcyk7XG4gICAgICAgIF90aGlzLmVtaXQgPSBjcmVhdGVCb3VuZEVtaXR0ZXJNZXRob2QoJ2VtaXQnKTtcbiAgICAgICAgX3RoaXMuZXZlbnROYW1lcyA9IGNyZWF0ZUJvdW5kRW1pdHRlck1ldGhvZCgnZXZlbnROYW1lcycpO1xuICAgICAgICBfdGhpcy5saXN0ZW5lcnMgPSBjcmVhdGVCb3VuZEVtaXR0ZXJNZXRob2QoJ2xpc3RlbmVycycpO1xuICAgICAgICBfdGhpcy5saXN0ZW5lckNvdW50ID0gY3JlYXRlQm91bmRFbWl0dGVyTWV0aG9kKCdsaXN0ZW5lckNvdW50Jyk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyogZXNsaW50LWVuYWJsZSBwcmV0dGllci9wcmV0dGllciAqL1xuICAgIFJQQ1Byb3ZpZGVyTW9kdWxlLnByb3RvdHlwZS5zZW5kQXN5bmMgPSBmdW5jdGlvbiAocGF5bG9hZCwgb25SZXF1ZXN0Q29tcGxldGUpIHtcbiAgICAgICAgaWYgKCFvblJlcXVlc3RDb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhyb3cgY3JlYXRlSW52YWxpZEFyZ3VtZW50RXJyb3Ioe1xuICAgICAgICAgICAgICAgIHByb2NlZHVyZTogJ01hZ2ljLnJwY1Byb3ZpZGVyLnNlbmRBc3luYycsXG4gICAgICAgICAgICAgICAgYXJndW1lbnQ6IDEsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZWQ6IG9uUmVxdWVzdENvbXBsZXRlID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIG9uUmVxdWVzdENvbXBsZXRlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGF5bG9hZCkpIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0XG4gICAgICAgICAgICAgICAgLnBvc3QodGhpcy5vdmVybGF5LCBNYWdpY091dGdvaW5nV2luZG93TWVzc2FnZS5NQUdJQ19IQU5ETEVfUkVRVUVTVCwgcGF5bG9hZC5tYXAoZnVuY3Rpb24gKHApIHsgcmV0dXJuIHN0YW5kYXJkaXplSnNvblJwY1JlcXVlc3RQYXlsb2FkKHApOyB9KSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoYmF0Y2hSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIG9uUmVxdWVzdENvbXBsZXRlKG51bGwsIGJhdGNoUmVzcG9uc2UubWFwKGZ1bmN0aW9uIChyZXNwb25zZSkgeyByZXR1cm4gKF9fYXNzaWduKF9fYXNzaWduKHt9LCByZXNwb25zZS5wYXlsb2FkKSwgeyBlcnJvcjogcmVzcG9uc2UuaGFzRXJyb3IgPyBuZXcgTWFnaWNSUENFcnJvcihyZXNwb25zZS5wYXlsb2FkLmVycm9yKSA6IG51bGwgfSkpOyB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBmaW5hbFBheWxvYWQgPSBzdGFuZGFyZGl6ZUpzb25ScGNSZXF1ZXN0UGF5bG9hZChwYXlsb2FkKTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNwb3J0XG4gICAgICAgICAgICAgICAgLnBvc3QodGhpcy5vdmVybGF5LCBNYWdpY091dGdvaW5nV2luZG93TWVzc2FnZS5NQUdJQ19IQU5ETEVfUkVRVUVTVCwgZmluYWxQYXlsb2FkKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIG9uUmVxdWVzdENvbXBsZXRlKHJlc3BvbnNlLmhhc0Vycm9yID8gbmV3IE1hZ2ljUlBDRXJyb3IocmVzcG9uc2UucGF5bG9hZC5lcnJvcikgOiBudWxsLCByZXNwb25zZS5wYXlsb2FkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIHByZXR0aWVyL3ByZXR0aWVyICovXG4gICAgUlBDUHJvdmlkZXJNb2R1bGUucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAocGF5bG9hZE9yTWV0aG9kLCBvblJlcXVlc3RDb21wbGV0ZU9yUGFyYW1zKSB7XG4gICAgICAgIC8vIENhc2UgIzFcbiAgICAgICAgLy8gV2ViMyA+PSAxLjAuMC1iZXRhLjM4IGNhbGxzIGBzZW5kYCB3aXRoIG1ldGhvZCBhbmQgcGFyYW1ldGVycy5cbiAgICAgICAgaWYgKHR5cGVvZiBwYXlsb2FkT3JNZXRob2QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YXIgcGF5bG9hZCA9IGNyZWF0ZUpzb25ScGNSZXF1ZXN0UGF5bG9hZChwYXlsb2FkT3JNZXRob2QsIEFycmF5LmlzQXJyYXkob25SZXF1ZXN0Q29tcGxldGVPclBhcmFtcykgPyBvblJlcXVlc3RDb21wbGV0ZU9yUGFyYW1zIDogW10pO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChwYXlsb2FkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDYXNlICMyXG4gICAgICAgIC8vIFdlYjMgPD0gMS4wLjAtYmV0YS4zNyB1c2VzIGBzZW5kYCB3aXRoIGEgY2FsbGJhY2sgZm9yIGFzeW5jIHF1ZXJpZXMuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBheWxvYWRPck1ldGhvZCkgfHwgISFvblJlcXVlc3RDb21wbGV0ZU9yUGFyYW1zKSB7XG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVubmVjZXNzYXJ5LXR5cGUtYXNzZXJ0aW9uICovXG4gICAgICAgICAgICB0aGlzLnNlbmRBc3luYyhwYXlsb2FkT3JNZXRob2QsIG9uUmVxdWVzdENvbXBsZXRlT3JQYXJhbXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhc2UgIzNcbiAgICAgICAgLy8gTGVnYWN5IHN5bmNocm9ub3VzIG1ldGhvZHMgKHVuc3VwcG9ydGVkKS5cbiAgICAgICAgdmFyIHdhcm5pbmcgPSBjcmVhdGVTeW5jaHJvbm91c1dlYjNNZXRob2RXYXJuaW5nKCk7XG4gICAgICAgIHdhcm5pbmcubG9nKCk7XG4gICAgICAgIHJldHVybiBuZXcgSnNvblJwY1Jlc3BvbnNlKHBheWxvYWRPck1ldGhvZCkuYXBwbHlFcnJvcih7XG4gICAgICAgICAgICBjb2RlOiAtMzI2MDMsXG4gICAgICAgICAgICBtZXNzYWdlOiB3YXJuaW5nLnJhd01lc3NhZ2UsXG4gICAgICAgIH0pLnBheWxvYWQ7XG4gICAgfTtcbiAgICBSUENQcm92aWRlck1vZHVsZS5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVxdWVzdFBheWxvYWQgPSBjcmVhdGVKc29uUnBjUmVxdWVzdFBheWxvYWQoJ2V0aF9hY2NvdW50cycpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHJlcXVlc3RQYXlsb2FkKTtcbiAgICB9O1xuICAgIHJldHVybiBSUENQcm92aWRlck1vZHVsZTtcbn0oQmFzZU1vZHVsZSkpO1xuZXhwb3J0IHsgUlBDUHJvdmlkZXJNb2R1bGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsInZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCB7IE1hZ2ljUGF5bG9hZE1ldGhvZCwgfSBmcm9tICdAbWFnaWMtc2RrL3R5cGVzJztcbmltcG9ydCB7IEJhc2VNb2R1bGUgfSBmcm9tICcuLi9iYXNlLW1vZHVsZSc7XG5pbXBvcnQgeyBjcmVhdGVKc29uUnBjUmVxdWVzdFBheWxvYWQgfSBmcm9tICcuLi8uLi9jb3JlL2pzb24tcnBjJztcbmltcG9ydCB7IHRyYW5zZm9ybU5ld0Fzc2VydGlvbkZvclNlcnZlciB9IGZyb20gJy4uLy4uL3V0aWwvd2ViYXV0aG4nO1xuaW1wb3J0IHsgY3JlYXRlV2ViQXV0aENyZWF0ZUNyZWRlbnRpYWxFcnJvciwgY3JlYXRlV2ViQXV0aG5Ob3RTdXBwb3J0RXJyb3IgfSBmcm9tICcuLi8uLi9jb3JlL3Nkay1leGNlcHRpb25zJztcbnZhciBVc2VyTW9kdWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhVc2VyTW9kdWxlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFVzZXJNb2R1bGUoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqICovXG4gICAgVXNlck1vZHVsZS5wcm90b3R5cGUuZ2V0SWRUb2tlbiA9IGZ1bmN0aW9uIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgIHZhciByZXF1ZXN0UGF5bG9hZCA9IGNyZWF0ZUpzb25ScGNSZXF1ZXN0UGF5bG9hZChNYWdpY1BheWxvYWRNZXRob2QuR2V0SWRUb2tlbiwgW2NvbmZpZ3VyYXRpb25dKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChyZXF1ZXN0UGF5bG9hZCk7XG4gICAgfTtcbiAgICAvKiogKi9cbiAgICBVc2VyTW9kdWxlLnByb3RvdHlwZS5nZW5lcmF0ZUlkVG9rZW4gPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICB2YXIgcmVxdWVzdFBheWxvYWQgPSBjcmVhdGVKc29uUnBjUmVxdWVzdFBheWxvYWQoTWFnaWNQYXlsb2FkTWV0aG9kLkdlbmVyYXRlSWRUb2tlbiwgW2NvbmZpZ3VyYXRpb25dKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChyZXF1ZXN0UGF5bG9hZCk7XG4gICAgfTtcbiAgICAvKiogKi9cbiAgICBVc2VyTW9kdWxlLnByb3RvdHlwZS5nZXRNZXRhZGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcXVlc3RQYXlsb2FkID0gY3JlYXRlSnNvblJwY1JlcXVlc3RQYXlsb2FkKE1hZ2ljUGF5bG9hZE1ldGhvZC5HZXRNZXRhZGF0YSk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QocmVxdWVzdFBheWxvYWQpO1xuICAgIH07XG4gICAgLyoqICovXG4gICAgVXNlck1vZHVsZS5wcm90b3R5cGUudXBkYXRlRW1haWwgPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICB2YXIgZW1haWwgPSBjb25maWd1cmF0aW9uLmVtYWlsLCBfYSA9IGNvbmZpZ3VyYXRpb24uc2hvd1VJLCBzaG93VUkgPSBfYSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9hO1xuICAgICAgICB2YXIgcmVxdWVzdFBheWxvYWQgPSBjcmVhdGVKc29uUnBjUmVxdWVzdFBheWxvYWQoTWFnaWNQYXlsb2FkTWV0aG9kLlVwZGF0ZUVtYWlsLCBbeyBlbWFpbDogZW1haWwsIHNob3dVSTogc2hvd1VJIH1dKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChyZXF1ZXN0UGF5bG9hZCk7XG4gICAgfTtcbiAgICAvKiogKi9cbiAgICBVc2VyTW9kdWxlLnByb3RvdHlwZS5pc0xvZ2dlZEluID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVxdWVzdFBheWxvYWQgPSBjcmVhdGVKc29uUnBjUmVxdWVzdFBheWxvYWQoTWFnaWNQYXlsb2FkTWV0aG9kLklzTG9nZ2VkSW4pO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHJlcXVlc3RQYXlsb2FkKTtcbiAgICB9O1xuICAgIC8qKiAqL1xuICAgIFVzZXJNb2R1bGUucHJvdG90eXBlLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcXVlc3RQYXlsb2FkID0gY3JlYXRlSnNvblJwY1JlcXVlc3RQYXlsb2FkKE1hZ2ljUGF5bG9hZE1ldGhvZC5Mb2dvdXQpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHJlcXVlc3RQYXlsb2FkKTtcbiAgICB9O1xuICAgIFVzZXJNb2R1bGUucHJvdG90eXBlLmdldFdlYkF1dGhuSW5mbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlcXVlc3RQYXlsb2FkID0gY3JlYXRlSnNvblJwY1JlcXVlc3RQYXlsb2FkKE1hZ2ljUGF5bG9hZE1ldGhvZC5HZXRXZWJBdXRobkluZm8sIFtdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChyZXF1ZXN0UGF5bG9hZCk7XG4gICAgfTtcbiAgICBVc2VyTW9kdWxlLnByb3RvdHlwZS51cGRhdGVXZWJBdXRobkluZm8gPSBmdW5jdGlvbiAoY29uZmlndXJhdGlvbikge1xuICAgICAgICB2YXIgaWQgPSBjb25maWd1cmF0aW9uLmlkLCBuaWNrbmFtZSA9IGNvbmZpZ3VyYXRpb24ubmlja25hbWU7XG4gICAgICAgIHZhciByZXF1ZXN0UGF5bG9hZCA9IGNyZWF0ZUpzb25ScGNSZXF1ZXN0UGF5bG9hZChNYWdpY1BheWxvYWRNZXRob2QuVXBkYXRlV2ViQXV0aG5JbmZvLCBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2ViQXV0aG5DcmVkZW50aWFsc0lkOiBpZCxcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChyZXF1ZXN0UGF5bG9hZCk7XG4gICAgfTtcbiAgICBVc2VyTW9kdWxlLnByb3RvdHlwZS51bnJlZ2lzdGVyV2ViQXV0aG5EZXZpY2UgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgdmFyIHJlcXVlc3RQYXlsb2FkID0gY3JlYXRlSnNvblJwY1JlcXVlc3RQYXlsb2FkKE1hZ2ljUGF5bG9hZE1ldGhvZC5VbnJlZ2lzdGVyV2ViQXV0aERldmljZSwgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdlYkF1dGhuQ3JlZGVudGlhbHNJZDogaWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChyZXF1ZXN0UGF5bG9hZCk7XG4gICAgfTtcbiAgICBVc2VyTW9kdWxlLnByb3RvdHlwZS5yZWdpc3RlcldlYkF1dGhuRGV2aWNlID0gZnVuY3Rpb24gKG5pY2tuYW1lKSB7XG4gICAgICAgIGlmIChuaWNrbmFtZSA9PT0gdm9pZCAwKSB7IG5pY2tuYW1lID0gJyc7IH1cbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbnMsIGNyZWRlbnRpYWwsIGVycl8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF3aW5kb3cuUHVibGljS2V5Q3JlZGVudGlhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVdlYkF1dGhuTm90U3VwcG9ydEVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLnJlcXVlc3QoY3JlYXRlSnNvblJwY1JlcXVlc3RQYXlsb2FkKE1hZ2ljUGF5bG9hZE1ldGhvZC5SZWdpc3RlcldlYkF1dGhEZXZpY2VTdGFydCwgW10pKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMiwgNCwgLCA1XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBuYXZpZ2F0b3IuY3JlZGVudGlhbHMuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljS2V5OiBvcHRpb25zLmNyZWRlbnRpYWxfb3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWwgPSAoX2Euc2VudCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVdlYkF1dGhDcmVhdGVDcmVkZW50aWFsRXJyb3IoZXJyXzEpO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbMiAvKnJldHVybiovLCB0aGlzLnJlcXVlc3QoY3JlYXRlSnNvblJwY1JlcXVlc3RQYXlsb2FkKE1hZ2ljUGF5bG9hZE1ldGhvZC5SZWdpc3RlcldlYkF1dGhEZXZpY2UsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwb3J0OiBjcmVkZW50aWFsLnJlc3BvbnNlLmdldFRyYW5zcG9ydHMoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9hZ2VudDogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uX3Jlc3BvbnNlOiB0cmFuc2Zvcm1OZXdBc3NlcnRpb25Gb3JTZXJ2ZXIoY3JlZGVudGlhbCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFVzZXJNb2R1bGU7XG59KEJhc2VNb2R1bGUpKTtcbmV4cG9ydCB7IFVzZXJNb2R1bGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZURlcHJlY2F0aW9uV2FybmluZyB9IGZyb20gJy4uL2NvcmUvc2RrLWV4Y2VwdGlvbnMnO1xuLyoqXG4gKiBHaXZlbiBhIEpTT04tc2VyaWFsaXphYmxlIG9iamVjdCwgZW5jb2RlIGFzIGEgQmFzZTY0IHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZUpTT04ob3B0aW9ucykge1xuICAgIHJldHVybiBidG9hKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpKTtcbn1cbi8qKlxuICogR2l2ZW4gYSBCYXNlNjQgSlNPTiBzdHJpbmcsIGRlY29kZSBhIEphdmFTY3JpcHQgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlSlNPTihxdWVyeVN0cmluZykge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGF0b2IocXVlcnlTdHJpbmcpKTtcbn1cbi8vIC0tLSBERVBSRUNBVEVEIVxuLyoqXG4gKiBHaXZlbiBhIEpTT04tc2VyaWFsaXphYmxlIG9iamVjdCwgZW5jb2RlIGFzIGEgQmFzZTY0IHN0cmluZy5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVF1ZXJ5UGFyYW1ldGVycyhvcHRpb25zKSB7XG4gICAgY3JlYXRlRGVwcmVjYXRpb25XYXJuaW5nKHtcbiAgICAgICAgbWV0aG9kOiAnZW5jb2RlUXVlcnlQYXJhbWV0ZXJzKCknLFxuICAgICAgICByZW1vdmFsVmVyc2lvbnM6IHsgJ21hZ2ljLXNkayc6ICd2My4wLjAnLCAnQG1hZ2ljLXNkay9yZWFjdC1uYXRpdmUnOiAndjMuMC4wJyB9LFxuICAgICAgICB1c2VJbnN0ZWFkOiAnZW5jb2RlSlNPTigpJyxcbiAgICB9KS5sb2coKTtcbiAgICByZXR1cm4gYnRvYShKU09OLnN0cmluZ2lmeShvcHRpb25zKSk7XG59XG4vKipcbiAqIEdpdmVuIGEgQmFzZTY0IEpTT04gc3RyaW5nLCBkZWNvZGUgYSBKYXZhU2NyaXB0IG9iamVjdC5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVF1ZXJ5UGFyYW1ldGVycyhxdWVyeVN0cmluZykge1xuICAgIGNyZWF0ZURlcHJlY2F0aW9uV2FybmluZyh7XG4gICAgICAgIG1ldGhvZDogJ2RlY29kZVF1ZXJ5UGFyYW1ldGVycygpJyxcbiAgICAgICAgcmVtb3ZhbFZlcnNpb25zOiB7ICdtYWdpYy1zZGsnOiAndjMuMC4wJywgJ0BtYWdpYy1zZGsvcmVhY3QtbmF0aXZlJzogJ3YzLjAuMCcgfSxcbiAgICAgICAgdXNlSW5zdGVhZDogJ2RlY29kZUpTT04oKScsXG4gICAgfSkubG9nKCk7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoYXRvYihxdWVyeVN0cmluZykpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YmFzZTY0LWpzb24uanMubWFwIiwidmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG4gICAgfTtcbn0pKCk7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xuLyoqXG4gKiBBbiBleHRlbnNpb24gb2YgYEV2ZW50RW1pdHRlcmAgKHByb3ZpZGVkIGJ5IGBldmVudGVtaXR0ZXIzYCkgd2l0aCBhbiBhZGp1c3RlZFxuICogdHlwZSBpbnRlcmZhY2UgdGhhdCBzdXBwb3J0cyB0aGUgdW5pcXVlIHN0cnVjdHVyZSBvZiBNYWdpYyBTREsgbW9kdWxlcy5cbiAqL1xudmFyIFR5cGVkRW1pdHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoVHlwZWRFbWl0dGVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFR5cGVkRW1pdHRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICByZXR1cm4gVHlwZWRFbWl0dGVyO1xufShFdmVudEVtaXR0ZXIpKTtcbmV4cG9ydCB7IFR5cGVkRW1pdHRlciB9O1xuLyoqXG4gKiBDcmVhdGVzIGEgYFR5cGVkRW1pdHRlcmAgaW5zdGFuY2UgYW5kIHJldHVybnMgaGVscGVyIGZ1bmN0aW9ucyBmb3IgZWFzaWx5XG4gKiBtaXhpbmcgYFR5cGVkRW1pdHRlcmAgbWV0aG9kcyBpbnRvIG90aGVyIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUeXBlZEVtaXR0ZXIoKSB7XG4gICAgdmFyIGVtaXR0ZXIgPSBuZXcgVHlwZWRFbWl0dGVyKCk7XG4gICAgdmFyIGNyZWF0ZUNoYWluaW5nRW1pdHRlck1ldGhvZCA9IGZ1bmN0aW9uIChtZXRob2QsIHNvdXJjZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW1pdHRlclttZXRob2RdLmFwcGx5KGVtaXR0ZXIsIGFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHZhciBjcmVhdGVCb3VuZEVtaXR0ZXJNZXRob2QgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZW1pdHRlclttZXRob2RdLmFwcGx5KGVtaXR0ZXIsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW1pdHRlcjogZW1pdHRlcixcbiAgICAgICAgY3JlYXRlQ2hhaW5pbmdFbWl0dGVyTWV0aG9kOiBjcmVhdGVDaGFpbmluZ0VtaXR0ZXJNZXRob2QsXG4gICAgICAgIGNyZWF0ZUJvdW5kRW1pdHRlck1ldGhvZDogY3JlYXRlQm91bmRFbWl0dGVyTWV0aG9kLFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudHMuanMubWFwIiwidmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5mdW5jdGlvbiBjcmVhdGVJbnRHZW5lcmF0b3IoKSB7XG4gICAgdmFyIGluZGV4O1xuICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgaWYgKCF0cnVlKSByZXR1cm4gWzMgLypicmVhayovLCA1XTtcbiAgICAgICAgICAgICAgICBpZiAoIShpbmRleCA8IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgKytpbmRleF07XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDQ7XG4gICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xuICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbnZhciBpbnRHZW5lcmF0b3IgPSBjcmVhdGVJbnRHZW5lcmF0b3IoKTtcbi8qKlxuICogR2V0IGFuIGludGVnZXIgSUQgZm9yIGF0dGFjaGluZyB0byBhIEpTT04gUlBDIHJlcXVlc3QgcGF5bG9hZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBheWxvYWRJZCgpIHtcbiAgICByZXR1cm4gaW50R2VuZXJhdG9yLm5leHQoKS52YWx1ZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdldC1wYXlsb2FkLWlkLmpzLm1hcCIsImV4cG9ydCAqIGZyb20gJy4vZ2V0LXBheWxvYWQtaWQnO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9taXNlLXRvb2xzJztcbmV4cG9ydCAqIGZyb20gJy4vYmFzZTY0LWpzb24nO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlLWd1YXJkcyc7XG5leHBvcnQgKiBmcm9tICcuL3VybCc7XG5pbXBvcnQgKiBhcyBzdG9yYWdlXzEgZnJvbSAnLi9zdG9yYWdlJztcbmV4cG9ydCB7IHN0b3JhZ2VfMSBhcyBzdG9yYWdlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgeyBjcmVhdGVUeXBlZEVtaXR0ZXIgfSBmcm9tICcuL2V2ZW50cyc7XG52YXIgcHJvbWlFdmVudEJyYW5kID0gU3ltYm9sKCdpc1Byb21pRXZlbnQnKTtcbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGdpdmVuIGB2YWx1ZWAgaXMgYSBgUHJvbWlFdmVudGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb21pRXZlbnQodmFsdWUpIHtcbiAgICByZXR1cm4gISF2YWx1ZVtwcm9taUV2ZW50QnJhbmRdO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBuYXRpdmUgSmF2YVNjcmlwdCBgUHJvbWlzZWAgb3ZlcmxvYWRlZCB3aXRoIHN0cm9uZ2x5LXR5cGVkIG1ldGhvZHNcbiAqIGZyb20gYEV2ZW50RW1pdHRlcmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9taUV2ZW50KGV4ZWN1dG9yKSB7XG4gICAgdmFyIHByb21pc2UgPSBjcmVhdGVBdXRvQ2F0Y2hpbmdQcm9taXNlKGV4ZWN1dG9yKTtcbiAgICB2YXIgX2EgPSBjcmVhdGVUeXBlZEVtaXR0ZXIoKSwgY3JlYXRlQm91bmRFbWl0dGVyTWV0aG9kID0gX2EuY3JlYXRlQm91bmRFbWl0dGVyTWV0aG9kLCBjcmVhdGVDaGFpbmluZ0VtaXR0ZXJNZXRob2QgPSBfYS5jcmVhdGVDaGFpbmluZ0VtaXR0ZXJNZXRob2Q7XG4gICAgLy8gV2Ugc2F2ZSB0aGUgb3JpZ2luYWwgYFByb21pc2VgIG1ldGhvZHMgdG8gdGhlIGZvbGxvd2luZyBzeW1ib2xzIHNvIHdlIGNhblxuICAgIC8vIGFjY2VzcyB0aGVtIGludGVybmFsbHkuXG4gICAgdmFyIHRoZW5TeW1ib2wgPSBTeW1ib2woJ1Byb21pc2UudGhlbicpO1xuICAgIHZhciBjYXRjaFN5bWJvbCA9IFN5bWJvbCgnUHJvbWlzZS5jYXRjaCcpO1xuICAgIHZhciBmaW5hbGx5U3ltYm9sID0gU3ltYm9sKCdQcm9taXNlLmZpbmFsbHknKTtcbiAgICAvKipcbiAgICAgKiBFbnN1cmVzIHRoZSBuZXh0IG9iamVjdCBpbiB0aGUgYFByb21pRXZlbnRgIGNoYWluIGlzIG92ZXJsb2FkZWQgd2l0aFxuICAgICAqIGBFdmVudEVtaXR0ZXJgIG1ldGhvZHMuXG4gICAgICovXG4gICAgdmFyIGNyZWF0ZUNoYWluaW5nUHJvbWlzZU1ldGhvZCA9IGZ1bmN0aW9uIChtZXRob2QsIHNvdXJjZSkgeyByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXh0UHJvbWlzZSA9IHNvdXJjZVttZXRob2RdLmFwcGx5KHNvdXJjZSwgYXJncyk7XG4gICAgICAgIHJldHVybiBwcm9taUV2ZW50KG5leHRQcm9taXNlKTtcbiAgICB9OyB9O1xuICAgIC8qKlxuICAgICAqIEJ1aWxkcyBhIGBQcm9taUV2ZW50YCBieSBhc3NpZ25pbmcgYEV2ZW50RW1pdHRlcmAgbWV0aG9kcyB0byBhIG5hdGl2ZVxuICAgICAqIGBQcm9taXNlYCBvYmplY3QuXG4gICAgICovXG4gICAgdmFyIHByb21pRXZlbnQgPSBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc291cmNlLCAoX2EgPSB7fSxcbiAgICAgICAgICAgIF9hW3Byb21pRXZlbnRCcmFuZF0gPSB0cnVlLFxuICAgICAgICAgICAgX2FbdGhlblN5bWJvbF0gPSBzb3VyY2VbdGhlblN5bWJvbF0gfHwgc291cmNlLnRoZW4sXG4gICAgICAgICAgICBfYVtjYXRjaFN5bWJvbF0gPSBzb3VyY2VbY2F0Y2hTeW1ib2xdIHx8IHNvdXJjZS5jYXRjaCxcbiAgICAgICAgICAgIF9hW2ZpbmFsbHlTeW1ib2xdID0gc291cmNlW2ZpbmFsbHlTeW1ib2xdIHx8IHNvdXJjZS5maW5hbGx5LFxuICAgICAgICAgICAgX2EudGhlbiA9IGNyZWF0ZUNoYWluaW5nUHJvbWlzZU1ldGhvZCh0aGVuU3ltYm9sLCBzb3VyY2UpLFxuICAgICAgICAgICAgX2EuY2F0Y2ggPSBjcmVhdGVDaGFpbmluZ1Byb21pc2VNZXRob2QoY2F0Y2hTeW1ib2wsIHNvdXJjZSksXG4gICAgICAgICAgICBfYS5maW5hbGx5ID0gY3JlYXRlQ2hhaW5pbmdQcm9taXNlTWV0aG9kKGZpbmFsbHlTeW1ib2wsIHNvdXJjZSksXG4gICAgICAgICAgICBfYS5vbiA9IGNyZWF0ZUNoYWluaW5nRW1pdHRlck1ldGhvZCgnb24nLCBzb3VyY2UpLFxuICAgICAgICAgICAgX2Eub25jZSA9IGNyZWF0ZUNoYWluaW5nRW1pdHRlck1ldGhvZCgnb25jZScsIHNvdXJjZSksXG4gICAgICAgICAgICBfYS5hZGRMaXN0ZW5lciA9IGNyZWF0ZUNoYWluaW5nRW1pdHRlck1ldGhvZCgnYWRkTGlzdGVuZXInLCBzb3VyY2UpLFxuICAgICAgICAgICAgX2Eub2ZmID0gY3JlYXRlQ2hhaW5pbmdFbWl0dGVyTWV0aG9kKCdvZmYnLCBzb3VyY2UpLFxuICAgICAgICAgICAgX2EucmVtb3ZlTGlzdGVuZXIgPSBjcmVhdGVDaGFpbmluZ0VtaXR0ZXJNZXRob2QoJ3JlbW92ZUxpc3RlbmVyJywgc291cmNlKSxcbiAgICAgICAgICAgIF9hLnJlbW92ZUFsbExpc3RlbmVycyA9IGNyZWF0ZUNoYWluaW5nRW1pdHRlck1ldGhvZCgncmVtb3ZlQWxsTGlzdGVuZXJzJywgc291cmNlKSxcbiAgICAgICAgICAgIF9hLmVtaXQgPSBjcmVhdGVCb3VuZEVtaXR0ZXJNZXRob2QoJ2VtaXQnKSxcbiAgICAgICAgICAgIF9hLmV2ZW50TmFtZXMgPSBjcmVhdGVCb3VuZEVtaXR0ZXJNZXRob2QoJ2V2ZW50TmFtZXMnKSxcbiAgICAgICAgICAgIF9hLmxpc3RlbmVycyA9IGNyZWF0ZUJvdW5kRW1pdHRlck1ldGhvZCgnbGlzdGVuZXJzJyksXG4gICAgICAgICAgICBfYS5saXN0ZW5lckNvdW50ID0gY3JlYXRlQm91bmRFbWl0dGVyTWV0aG9kKCdsaXN0ZW5lckNvdW50JyksXG4gICAgICAgICAgICBfYSkpO1xuICAgIH07XG4gICAgdmFyIHJlc3VsdCA9IHByb21pRXZlbnQocHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXNvbHZlZCkge1xuICAgICAgICAvLyBFbWl0IGRlZmF1bHQgY29tcGxldGlvbiBldmVudHMgYW5kIHJlc29sdmUgcmVzdWx0LlxuICAgICAgICByZXN1bHQuZW1pdCgnZG9uZScsIHJlc29sdmVkKTtcbiAgICAgICAgcmVzdWx0LmVtaXQoJ3NldHRsZWQnKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgLy8gRW1pdCBkZWZhdWx0IGVycm9yIGV2ZW50cyBhbmQgcmUtdGhyb3cuXG4gICAgICAgIHJlc3VsdC5lbWl0KCdlcnJvcicsIGVycik7XG4gICAgICAgIHJlc3VsdC5lbWl0KCdzZXR0bGVkJyk7XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ3JlYXRlcyBhIGBQcm9taXNlYCB3aXRoIGFuICoqYXN5bmMgZXhlY3V0b3IqKiB0aGF0IGF1dG9tYXRpY2FsbHkgY2F0Y2hlc1xuICogZXJyb3JzIG9jY3VycmluZyB3aXRoaW4gdGhlIGV4ZWN1dG9yLiBOZXN0aW5nIHByb21pc2VzIGluIHRoaXMgd2F5IGlzIHVzdWFsbHlcbiAqIGRlZW1lZCBhbiBfYW50aS1wYXR0ZXJuXywgYnV0IGl0J3MgdXNlZnVsIGFuZCBjbGVhbiB3aGVuIHByb21pc2lmeWluZyB0aGVcbiAqIGV2ZW50LWJhc2VkIGNvZGUgdGhhdCdzIGluaGVyZW50IHRvIEpTT04gUlBDLlxuICpcbiAqIFNvLCBoZXJlIHdlIHNvbHZlIHRoZSBpc3N1ZSBvZiBuZXN0ZWQgcHJvbWlzZXMgYnkgZW5zdXJpbmcgdGhhdCBubyBlcnJvcnNcbiAqIG1pc3Rha2VubHkgZ28gdW5oYW5kbGVkIVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQXV0b0NhdGNoaW5nUHJvbWlzZShleGVjdXRvcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBleGVjdXRvcihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICBQcm9taXNlLnJlc29sdmUocmVzdWx0KS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHJvbWlzZS10b29scy5qcy5tYXAiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xudmFyIF9fcmVhZCA9ICh0aGlzICYmIHRoaXMuX19yZWFkKSB8fCBmdW5jdGlvbiAobywgbikge1xuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcbiAgICBpZiAoIW0pIHJldHVybiBvO1xuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xuICAgIHRyeSB7XG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cbiAgICBmaW5hbGx5IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxuICAgIH1cbiAgICByZXR1cm4gYXI7XG59O1xudmFyIF9fc3ByZWFkID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZCkgfHwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XG4gICAgcmV0dXJuIGFyO1xufTtcbmltcG9ydCB7IFNES0Vudmlyb25tZW50IH0gZnJvbSAnLi4vY29yZS9zZGstZW52aXJvbm1lbnQnO1xudmFyIGxmO1xuLyoqXG4gKiBQcm94aWVzIGBsb2NhbGZvcmFnZWAgbWV0aG9kcyB3aXRoIHN0cm9uZy10eXBpbmcuXG4gKi9cbmZ1bmN0aW9uIHByb3h5TG9jYWxGb3JhZ2VNZXRob2QobWV0aG9kKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISFsZikgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBTREtFbnZpcm9ubWVudC5jb25maWd1cmVTdG9yYWdlKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZiA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gWzQgLyp5aWVsZCovLCBsZi5yZWFkeSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGxmW21ldGhvZF0uYXBwbHkobGYsIF9fc3ByZWFkKGFyZ3MpKV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59XG5leHBvcnQgdmFyIGdldEl0ZW0gPSBwcm94eUxvY2FsRm9yYWdlTWV0aG9kKCdnZXRJdGVtJyk7XG5leHBvcnQgdmFyIHNldEl0ZW0gPSBwcm94eUxvY2FsRm9yYWdlTWV0aG9kKCdzZXRJdGVtJyk7XG5leHBvcnQgdmFyIHJlbW92ZUl0ZW0gPSBwcm94eUxvY2FsRm9yYWdlTWV0aG9kKCdyZW1vdmVJdGVtJyk7XG5leHBvcnQgdmFyIGNsZWFyID0gcHJveHlMb2NhbEZvcmFnZU1ldGhvZCgnY2xlYXInKTtcbmV4cG9ydCB2YXIgbGVuZ3RoID0gcHJveHlMb2NhbEZvcmFnZU1ldGhvZCgnbGVuZ3RoJyk7XG5leHBvcnQgdmFyIGtleSA9IHByb3h5TG9jYWxGb3JhZ2VNZXRob2QoJ2tleScpO1xuZXhwb3J0IHZhciBrZXlzID0gcHJveHlMb2NhbEZvcmFnZU1ldGhvZCgna2V5cycpO1xuZXhwb3J0IHZhciBpdGVyYXRlID0gcHJveHlMb2NhbEZvcmFnZU1ldGhvZCgnaXRlcmF0ZScpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3RvcmFnZS5qcy5tYXAiLCIvKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyBvdXIgdHlwZSBndWFyZHMuXG4gKlxuICogVHlwZSBndWFyZHMgYXJlIGEgZmVhdHVyZSBvZiBUeXBlU2NyaXB0IHdoaWNoIG5hcnJvdyB0aGUgdHlwZSBzaWduYXR1cmUgb2ZcbiAqIGludGVzZWN0aW9uIHR5cGVzICh0eXBlcyB0aGF0IGNhbiBiZSBvbmUgdGhpbmcgb3IgYW5vdGhlcikuXG4gKlxuICogQHNlZVxuICogaHR0cHM6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnL2RvY3MvaGFuZGJvb2svYWR2YW5jZWQtdHlwZXMuaHRtbCN0eXBlLWd1YXJkcy1hbmQtZGlmZmVyZW50aWF0aW5nLXR5cGVzXG4gKi9cbmltcG9ydCB7IE1hZ2ljUGF5bG9hZE1ldGhvZCwgUlBDRXJyb3JDb2RlIH0gZnJvbSAnQG1hZ2ljLXNkay90eXBlcyc7XG4vKipcbiAqIEFzc2VydCBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuLyoqXG4gKiBBc3NlcnQgYHZhbHVlYCBpcyBgbnVsbGAuXG4gKi9cbmZ1bmN0aW9uIGlzTnVsbCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbn1cbi8qKlxuICogQXNzZXJ0IGB2YWx1ZWAgaXMgYG51bGxgIG9yIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBpc05pbCh2YWx1ZSkge1xuICAgIHJldHVybiBpc051bGwodmFsdWUpIHx8IGlzVW5kZWZpbmVkKHZhbHVlKTtcbn1cbi8qKlxuICogQXNzZXJ0IGB2YWx1ZWAgaXMgYSBgSnNvblJwY1JlcXVlc3RQYXlsb2FkYCBvYmplY3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0pzb25ScGNSZXF1ZXN0UGF5bG9hZCh2YWx1ZSkge1xuICAgIGlmIChpc05pbCh2YWx1ZSkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKCFpc1VuZGVmaW5lZCh2YWx1ZS5qc29ucnBjKSAmJiAhaXNVbmRlZmluZWQodmFsdWUuaWQpICYmICFpc1VuZGVmaW5lZCh2YWx1ZS5tZXRob2QpICYmICFpc1VuZGVmaW5lZCh2YWx1ZS5wYXJhbXMpKTtcbn1cbi8qKlxuICogQXNzZXJ0IGB2YWx1ZWAgaXMgYSBgSnNvblJwY1Jlc3BvbnNlUGF5bG9hZGAgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNKc29uUnBjUmVzcG9uc2VQYXlsb2FkKHZhbHVlKSB7XG4gICAgaWYgKGlzTmlsKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAoIWlzVW5kZWZpbmVkKHZhbHVlLmpzb25ycGMpICYmICFpc1VuZGVmaW5lZCh2YWx1ZS5pZCkgJiYgKCFpc1VuZGVmaW5lZCh2YWx1ZS5yZXN1bHQpIHx8ICFpc1VuZGVmaW5lZCh2YWx1ZS5lcnJvcikpKTtcbn1cbi8qKlxuICogQXNzZXJ0IGB2YWx1ZWAgaXMgYSBNYWdpYyBTREsgcGF5bG9hZCBtZXRob2QgaWRlbnRpZmllci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTWFnaWNQYXlsb2FkTWV0aG9kKHZhbHVlKSB7XG4gICAgaWYgKGlzTmlsKHZhbHVlKSlcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIE9iamVjdC52YWx1ZXMoTWFnaWNQYXlsb2FkTWV0aG9kKS5pbmNsdWRlcyh2YWx1ZSk7XG59XG4vKipcbiAqIEFzc2VydCBgdmFsdWVgIGlzIGFuIGV4cGVjdGVkIEpTT04gUlBDIGVycm9yIGNvZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0pzb25ScGNFcnJvckNvZGUodmFsdWUpIHtcbiAgICBpZiAoaXNOaWwodmFsdWUpKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgT2JqZWN0LnZhbHVlcyhSUENFcnJvckNvZGUpLmluY2x1ZGVzKHZhbHVlKTtcbn1cbi8qKlxuICogQXNzZXJ0IGB2YWx1ZWAgaXMgYW4gZW1wdHksIHBsYWluIG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD10eXBlLWd1YXJkcy5qcy5tYXAiLCIvKipcbiAqIEJ1aWxkcyBhIGBVUkxgIG9iamVjdCBzYWZlbHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVUkwodXJsLCBiYXNlKSB7XG4gICAgLy8gU2FmYXJpIHJhaXNlcyBhbiBlcnJvciBpZiBgdW5kZWZpbmVkYCBpcyBnaXZlbiB0byB0aGUgc2Vjb25kIGFyZ3VtZW50IG9mXG4gICAgLy8gdGhlIGBVUkxgIGNvbnN0cnVjdG9yLlxuICAgIHJldHVybiBiYXNlID8gbmV3IFVSTCh1cmwsIGJhc2UpIDogbmV3IFVSTCh1cmwpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXJsLmpzLm1hcCIsInZhciBsb29rdXAgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5KHVpbnQ4KSB7XG4gICAgdmFyIGk7XG4gICAgdmFyIGV4dHJhQnl0ZXMgPSB1aW50OC5sZW5ndGggJSAzOyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICAgIHZhciBvdXRwdXQgPSAnJztcbiAgICB2YXIgdGVtcDtcbiAgICB2YXIgbGVuZ3RoO1xuICAgIGZ1bmN0aW9uIGVuY29kZShudW0pIHtcbiAgICAgICAgcmV0dXJuIGxvb2t1cC5jaGFyQXQobnVtKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0KG51bSkge1xuICAgICAgICByZXR1cm4gZW5jb2RlKChudW0gPj4gMTgpICYgMHgzZikgKyBlbmNvZGUoKG51bSA+PiAxMikgJiAweDNmKSArIGVuY29kZSgobnVtID4+IDYpICYgMHgzZikgKyBlbmNvZGUobnVtICYgMHgzZik7XG4gICAgfVxuICAgIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSB1aW50OC5sZW5ndGggLSBleHRyYUJ5dGVzOyBpIDwgbGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgdGVtcCA9ICh1aW50OFtpXSA8PCAxNikgKyAodWludDhbaSArIDFdIDw8IDgpICsgdWludDhbaSArIDJdO1xuICAgICAgICBvdXRwdXQgKz0gdHJpcGxldFRvQmFzZTY0KHRlbXApO1xuICAgIH1cbiAgICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gICAgc3dpdGNoIChleHRyYUJ5dGVzKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRlbXAgPSB1aW50OFt1aW50OC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAyKTtcbiAgICAgICAgICAgIG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgNCkgJiAweDNmKTtcbiAgICAgICAgICAgIG91dHB1dCArPSAnPT0nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHRlbXAgPSAodWludDhbdWludDgubGVuZ3RoIC0gMl0gPDwgOCkgKyB1aW50OFt1aW50OC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIG91dHB1dCArPSBlbmNvZGUodGVtcCA+PiAxMCk7XG4gICAgICAgICAgICBvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wID4+IDQpICYgMHgzZik7XG4gICAgICAgICAgICBvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDIpICYgMHgzZik7XG4gICAgICAgICAgICBvdXRwdXQgKz0gJz0nO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dDtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYjY0ZW5jKGJ1Zikge1xuICAgIHJldHVybiBmcm9tQnl0ZUFycmF5KGJ1ZikucmVwbGFjZSgvXFwrL2csICctJykucmVwbGFjZSgvXFwvL2csICdfJykucmVwbGFjZSgvPS9nLCAnJyk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGI2NFJhd0VuYyhidWYpIHtcbiAgICByZXR1cm4gZnJvbUJ5dGVBcnJheShidWYpLnJlcGxhY2UoL1xcKy9nLCAnLScpLnJlcGxhY2UoL1xcLy9nLCAnXycpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBoZXhFbmNvZGUoYnVmKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oYnVmKVxuICAgICAgICAubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiAoXCIwXCIgKyB4LnRvU3RyaW5nKDE2KSkuc3Vic3RyKC0yKTtcbiAgICB9KVxuICAgICAgICAuam9pbignJyk7XG59XG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGJpbmFyeSBkYXRhIGluIHRoZSBjcmVkZW50aWFsIGludG8gYmFzZTY0IHN0cmluZ3NcbiAqIGZvciBwb3N0aW5nIHRvIHRoZSBzZXJ2ZXIuXG4gKiBAcGFyYW0ge1B1YmxpY0tleUNyZWRlbnRpYWx9IG5ld0Fzc2VydGlvblxuICovXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmV4cG9ydCB2YXIgdHJhbnNmb3JtTmV3QXNzZXJ0aW9uRm9yU2VydmVyID0gZnVuY3Rpb24gKG5ld0Fzc2VydGlvbikge1xuICAgIHZhciBhdHRPYmogPSBuZXcgVWludDhBcnJheShuZXdBc3NlcnRpb24ucmVzcG9uc2UuYXR0ZXN0YXRpb25PYmplY3QpO1xuICAgIHZhciBjbGllbnREYXRhSlNPTiA9IG5ldyBVaW50OEFycmF5KG5ld0Fzc2VydGlvbi5yZXNwb25zZS5jbGllbnREYXRhSlNPTik7XG4gICAgdmFyIHJhd0lkID0gbmV3IFVpbnQ4QXJyYXkobmV3QXNzZXJ0aW9uLnJhd0lkKTtcbiAgICB2YXIgcmVnaXN0cmF0aW9uQ2xpZW50RXh0ZW5zaW9ucyA9IG5ld0Fzc2VydGlvbi5nZXRDbGllbnRFeHRlbnNpb25SZXN1bHRzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IG5ld0Fzc2VydGlvbi5pZCxcbiAgICAgICAgcmF3SWQ6IGI2NGVuYyhyYXdJZCksXG4gICAgICAgIHR5cGU6IG5ld0Fzc2VydGlvbi50eXBlLFxuICAgICAgICBhdHRPYmo6IGI2NGVuYyhhdHRPYmopLFxuICAgICAgICBjbGllbnREYXRhOiBiNjRlbmMoY2xpZW50RGF0YUpTT04pLFxuICAgICAgICByZWdpc3RyYXRpb25DbGllbnRFeHRlbnNpb25zOiBKU09OLnN0cmluZ2lmeShyZWdpc3RyYXRpb25DbGllbnRFeHRlbnNpb25zKSxcbiAgICB9O1xufTtcbi8qKlxuICogRW5jb2RlcyB0aGUgYmluYXJ5IGRhdGEgaW4gdGhlIGFzc2VydGlvbiBpbnRvIHN0cmluZ3MgZm9yIHBvc3RpbmcgdG8gdGhlIHNlcnZlci5cbiAqIEBwYXJhbSB7UHVibGljS2V5Q3JlZGVudGlhbH0gbmV3QXNzZXJ0aW9uXG4gKi9cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZXhwb3J0IHZhciB0cmFuc2Zvcm1Bc3NlcnRpb25Gb3JTZXJ2ZXIgPSBmdW5jdGlvbiAobmV3QXNzZXJ0aW9uKSB7XG4gICAgdmFyIGF1dGhEYXRhID0gbmV3IFVpbnQ4QXJyYXkobmV3QXNzZXJ0aW9uLnJlc3BvbnNlLmF1dGhlbnRpY2F0b3JEYXRhKTtcbiAgICB2YXIgY2xpZW50RGF0YUpTT04gPSBuZXcgVWludDhBcnJheShuZXdBc3NlcnRpb24ucmVzcG9uc2UuY2xpZW50RGF0YUpTT04pO1xuICAgIHZhciByYXdJZCA9IG5ldyBVaW50OEFycmF5KG5ld0Fzc2VydGlvbi5yYXdJZCk7XG4gICAgdmFyIHNpZyA9IG5ldyBVaW50OEFycmF5KG5ld0Fzc2VydGlvbi5yZXNwb25zZS5zaWduYXR1cmUpO1xuICAgIHZhciBhc3NlcnRpb25DbGllbnRFeHRlbnNpb25zID0gbmV3QXNzZXJ0aW9uLmdldENsaWVudEV4dGVuc2lvblJlc3VsdHMoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBpZDogbmV3QXNzZXJ0aW9uLmlkLFxuICAgICAgICByYXdJZDogYjY0ZW5jKHJhd0lkKSxcbiAgICAgICAgdHlwZTogbmV3QXNzZXJ0aW9uLnR5cGUsXG4gICAgICAgIGF1dGhEYXRhOiBiNjRSYXdFbmMoYXV0aERhdGEpLFxuICAgICAgICBjbGllbnREYXRhOiBiNjRSYXdFbmMoY2xpZW50RGF0YUpTT04pLFxuICAgICAgICBzaWduYXR1cmU6IGhleEVuY29kZShzaWcpLFxuICAgICAgICBhc3NlcnRpb25DbGllbnRFeHRlbnNpb25zOiBKU09OLnN0cmluZ2lmeShhc3NlcnRpb25DbGllbnRFeHRlbnNpb25zKSxcbiAgICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdlYmF1dGhuLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBwcmVmaXggPSAnfic7XG5cbi8qKlxuICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIGEgc3RvcmFnZSBmb3Igb3VyIGBFRWAgb2JqZWN0cy5cbiAqIEFuIGBFdmVudHNgIGluc3RhbmNlIGlzIGEgcGxhaW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGV2ZW50IG5hbWVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gRXZlbnRzKCkge31cblxuLy9cbi8vIFdlIHRyeSB0byBub3QgaW5oZXJpdCBmcm9tIGBPYmplY3QucHJvdG90eXBlYC4gSW4gc29tZSBlbmdpbmVzIGNyZWF0aW5nIGFuXG4vLyBpbnN0YW5jZSBpbiB0aGlzIHdheSBpcyBmYXN0ZXIgdGhhbiBjYWxsaW5nIGBPYmplY3QuY3JlYXRlKG51bGwpYCBkaXJlY3RseS5cbi8vIElmIGBPYmplY3QuY3JlYXRlKG51bGwpYCBpcyBub3Qgc3VwcG9ydGVkIHdlIHByZWZpeCB0aGUgZXZlbnQgbmFtZXMgd2l0aCBhXG4vLyBjaGFyYWN0ZXIgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGJ1aWx0LWluIG9iamVjdCBwcm9wZXJ0aWVzIGFyZSBub3Rcbi8vIG92ZXJyaWRkZW4gb3IgdXNlZCBhcyBhbiBhdHRhY2sgdmVjdG9yLlxuLy9cbmlmIChPYmplY3QuY3JlYXRlKSB7XG4gIEV2ZW50cy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4gIC8vXG4gIC8vIFRoaXMgaGFjayBpcyBuZWVkZWQgYmVjYXVzZSB0aGUgYF9fcHJvdG9fX2AgcHJvcGVydHkgaXMgc3RpbGwgaW5oZXJpdGVkIGluXG4gIC8vIHNvbWUgb2xkIGJyb3dzZXJzIGxpa2UgQW5kcm9pZCA0LCBpUGhvbmUgNS4xLCBPcGVyYSAxMSBhbmQgU2FmYXJpIDUuXG4gIC8vXG4gIGlmICghbmV3IEV2ZW50cygpLl9fcHJvdG9fXykgcHJlZml4ID0gZmFsc2U7XG59XG5cbi8qKlxuICogUmVwcmVzZW50YXRpb24gb2YgYSBzaW5nbGUgZXZlbnQgbGlzdGVuZXIuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29uY2U9ZmFsc2VdIFNwZWNpZnkgaWYgdGhlIGxpc3RlbmVyIGlzIGEgb25lLXRpbWUgbGlzdGVuZXIuXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEVFKGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHRoaXMuZm4gPSBmbjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5vbmNlID0gb25jZSB8fCBmYWxzZTtcbn1cblxuLyoqXG4gKiBBZGQgYSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge0V2ZW50RW1pdHRlcn0gZW1pdHRlciBSZWZlcmVuY2UgdG8gdGhlIGBFdmVudEVtaXR0ZXJgIGluc3RhbmNlLlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gb25jZSBTcGVjaWZ5IGlmIHRoZSBsaXN0ZW5lciBpcyBhIG9uZS10aW1lIGxpc3RlbmVyLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFkZExpc3RlbmVyKGVtaXR0ZXIsIGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICBpZiAodHlwZW9mIGZuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGxpc3RlbmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IGVtaXR0ZXIsIG9uY2UpXG4gICAgLCBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghZW1pdHRlci5fZXZlbnRzW2V2dF0pIGVtaXR0ZXIuX2V2ZW50c1tldnRdID0gbGlzdGVuZXIsIGVtaXR0ZXIuX2V2ZW50c0NvdW50Kys7XG4gIGVsc2UgaWYgKCFlbWl0dGVyLl9ldmVudHNbZXZ0XS5mbikgZW1pdHRlci5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2UgZW1pdHRlci5fZXZlbnRzW2V2dF0gPSBbZW1pdHRlci5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXTtcblxuICByZXR1cm4gZW1pdHRlcjtcbn1cblxuLyoqXG4gKiBDbGVhciBldmVudCBieSBuYW1lLlxuICpcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIFJlZmVyZW5jZSB0byB0aGUgYEV2ZW50RW1pdHRlcmAgaW5zdGFuY2UuXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZ0IFRoZSBFdmVudCBuYW1lLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2xlYXJFdmVudChlbWl0dGVyLCBldnQpIHtcbiAgaWYgKC0tZW1pdHRlci5fZXZlbnRzQ291bnQgPT09IDApIGVtaXR0ZXIuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgZWxzZSBkZWxldGUgZW1pdHRlci5fZXZlbnRzW2V2dF07XG59XG5cbi8qKlxuICogTWluaW1hbCBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UgdGhhdCBpcyBtb2xkZWQgYWdhaW5zdCB0aGUgTm9kZS5qc1xuICogYEV2ZW50RW1pdHRlcmAgaW50ZXJmYWNlLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBsaXN0aW5nIHRoZSBldmVudHMgZm9yIHdoaWNoIHRoZSBlbWl0dGVyIGhhcyByZWdpc3RlcmVkXG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmV2ZW50TmFtZXMgPSBmdW5jdGlvbiBldmVudE5hbWVzKCkge1xuICB2YXIgbmFtZXMgPSBbXVxuICAgICwgZXZlbnRzXG4gICAgLCBuYW1lO1xuXG4gIGlmICh0aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgcmV0dXJuIG5hbWVzO1xuXG4gIGZvciAobmFtZSBpbiAoZXZlbnRzID0gdGhpcy5fZXZlbnRzKSkge1xuICAgIGlmIChoYXMuY2FsbChldmVudHMsIG5hbWUpKSBuYW1lcy5wdXNoKHByZWZpeCA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lKTtcbiAgfVxuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgcmV0dXJuIG5hbWVzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGV2ZW50cykpO1xuICB9XG5cbiAgcmV0dXJuIG5hbWVzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gVGhlIHJlZ2lzdGVyZWQgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudFxuICAgICwgaGFuZGxlcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWhhbmRsZXJzKSByZXR1cm4gW107XG4gIGlmIChoYW5kbGVycy5mbikgcmV0dXJuIFtoYW5kbGVycy5mbl07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKSB7XG4gICAgZWVbaV0gPSBoYW5kbGVyc1tpXS5mbjtcbiAgfVxuXG4gIHJldHVybiBlZTtcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBudW1iZXIgb2YgbGlzdGVuZXJzIGxpc3RlbmluZyB0byBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7KFN0cmluZ3xTeW1ib2wpfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEByZXR1cm5zIHtOdW1iZXJ9IFRoZSBudW1iZXIgb2YgbGlzdGVuZXJzLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbiBsaXN0ZW5lckNvdW50KGV2ZW50KSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoIWxpc3RlbmVycykgcmV0dXJuIDA7XG4gIGlmIChsaXN0ZW5lcnMuZm4pIHJldHVybiAxO1xuICByZXR1cm4gbGlzdGVuZXJzLmxlbmd0aDtcbn07XG5cbi8qKlxuICogQ2FsbHMgZWFjaCBvZiB0aGUgbGlzdGVuZXJzIHJlZ2lzdGVyZWQgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHJldHVybnMge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgZXZlbnQgaGFkIGxpc3RlbmVycywgZWxzZSBgZmFsc2VgLlxuICogQHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50LCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgYXJnc1xuICAgICwgaTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnMuZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgY2FzZSAxOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQpLCB0cnVlO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExKSwgdHJ1ZTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIpLCB0cnVlO1xuICAgICAgY2FzZSA0OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMpLCB0cnVlO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgNjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCwgYTUpLCB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm4uYXBwbHkobGlzdGVuZXJzLmNvbnRleHQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAsIGo7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzW2ldLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgICBjYXNlIDE6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0KTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMik7IGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIsIGEzKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFhcmdzKSBmb3IgKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmFwcGx5KGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGxpc3RlbmVyIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBbY29udGV4dD10aGlzXSBUaGUgY29udGV4dCB0byBpbnZva2UgdGhlIGxpc3RlbmVyIHdpdGguXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgZmFsc2UpO1xufTtcblxuLyoqXG4gKiBBZGQgYSBvbmUtdGltZSBsaXN0ZW5lciBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8U3ltYm9sKX0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgbGlzdGVuZXIgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZShldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgcmV0dXJuIGFkZExpc3RlbmVyKHRoaXMsIGV2ZW50LCBmbiwgY29udGV4dCwgdHJ1ZSk7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbGlzdGVuZXJzIG9mIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IG1hdGNoIHRoaXMgZnVuY3Rpb24uXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgT25seSByZW1vdmUgdGhlIGxpc3RlbmVycyB0aGF0IGhhdmUgdGhpcyBjb250ZXh0LlxuICogQHBhcmFtIHtCb29sZWFufSBvbmNlIE9ubHkgcmVtb3ZlIG9uZS10aW1lIGxpc3RlbmVycy5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gdGhpcztcbiAgaWYgKCFmbikge1xuICAgIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKFxuICAgICAgbGlzdGVuZXJzLmZuID09PSBmbiAmJlxuICAgICAgKCFvbmNlIHx8IGxpc3RlbmVycy5vbmNlKSAmJlxuICAgICAgKCFjb250ZXh0IHx8IGxpc3RlbmVycy5jb250ZXh0ID09PSBjb250ZXh0KVxuICAgICkge1xuICAgICAgY2xlYXJFdmVudCh0aGlzLCBldnQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMCwgZXZlbnRzID0gW10sIGxlbmd0aCA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBsaXN0ZW5lcnNbaV0uZm4gIT09IGZuIHx8XG4gICAgICAgIChvbmNlICYmICFsaXN0ZW5lcnNbaV0ub25jZSkgfHxcbiAgICAgICAgKGNvbnRleHQgJiYgbGlzdGVuZXJzW2ldLmNvbnRleHQgIT09IGNvbnRleHQpXG4gICAgICApIHtcbiAgICAgICAgZXZlbnRzLnB1c2gobGlzdGVuZXJzW2ldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvL1xuICAgIC8vIFJlc2V0IHRoZSBhcnJheSwgb3IgcmVtb3ZlIGl0IGNvbXBsZXRlbHkgaWYgd2UgaGF2ZSBubyBtb3JlIGxpc3RlbmVycy5cbiAgICAvL1xuICAgIGlmIChldmVudHMubGVuZ3RoKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGV2ZW50cy5sZW5ndGggPT09IDEgPyBldmVudHNbMF0gOiBldmVudHM7XG4gICAgZWxzZSBjbGVhckV2ZW50KHRoaXMsIGV2dCk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMsIG9yIHRob3NlIG9mIHRoZSBzcGVjaWZpZWQgZXZlbnQuXG4gKlxuICogQHBhcmFtIHsoU3RyaW5nfFN5bWJvbCl9IFtldmVudF0gVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KSB7XG4gIHZhciBldnQ7XG5cbiAgaWYgKGV2ZW50KSB7XG4gICAgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcbiAgICBpZiAodGhpcy5fZXZlbnRzW2V2dF0pIGNsZWFyRXZlbnQodGhpcywgZXZ0KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vL1xuLy8gQWxpYXMgbWV0aG9kcyBuYW1lcyBiZWNhdXNlIHBlb3BsZSByb2xsIGxpa2UgdGhhdC5cbi8vXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgcHJlZml4LlxuLy9cbkV2ZW50RW1pdHRlci5wcmVmaXhlZCA9IHByZWZpeDtcblxuLy9cbi8vIEFsbG93IGBFdmVudEVtaXR0ZXJgIHRvIGJlIGltcG9ydGVkIGFzIG1vZHVsZSBuYW1lc3BhY2UuXG4vL1xuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbn1cbiIsImNvbnN0IEFOWSA9IFN5bWJvbCgnU2VtVmVyIEFOWScpXG4vLyBob2lzdGVkIGNsYXNzIGZvciBjeWNsaWMgZGVwZW5kZW5jeVxuY2xhc3MgQ29tcGFyYXRvciB7XG4gIHN0YXRpYyBnZXQgQU5ZICgpIHtcbiAgICByZXR1cm4gQU5ZXG4gIH1cbiAgY29uc3RydWN0b3IgKGNvbXAsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gcGFyc2VPcHRpb25zKG9wdGlvbnMpXG5cbiAgICBpZiAoY29tcCBpbnN0YW5jZW9mIENvbXBhcmF0b3IpIHtcbiAgICAgIGlmIChjb21wLmxvb3NlID09PSAhIW9wdGlvbnMubG9vc2UpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXAgPSBjb21wLnZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGVidWcoJ2NvbXBhcmF0b3InLCBjb21wLCBvcHRpb25zKVxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnNcbiAgICB0aGlzLmxvb3NlID0gISFvcHRpb25zLmxvb3NlXG4gICAgdGhpcy5wYXJzZShjb21wKVxuXG4gICAgaWYgKHRoaXMuc2VtdmVyID09PSBBTlkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5vcGVyYXRvciArIHRoaXMuc2VtdmVyLnZlcnNpb25cbiAgICB9XG5cbiAgICBkZWJ1ZygnY29tcCcsIHRoaXMpXG4gIH1cblxuICBwYXJzZSAoY29tcCkge1xuICAgIGNvbnN0IHIgPSB0aGlzLm9wdGlvbnMubG9vc2UgPyByZVt0LkNPTVBBUkFUT1JMT09TRV0gOiByZVt0LkNPTVBBUkFUT1JdXG4gICAgY29uc3QgbSA9IGNvbXAubWF0Y2gocilcblxuICAgIGlmICghbSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBjb21wYXJhdG9yOiAke2NvbXB9YClcbiAgICB9XG5cbiAgICB0aGlzLm9wZXJhdG9yID0gbVsxXSAhPT0gdW5kZWZpbmVkID8gbVsxXSA6ICcnXG4gICAgaWYgKHRoaXMub3BlcmF0b3IgPT09ICc9Jykge1xuICAgICAgdGhpcy5vcGVyYXRvciA9ICcnXG4gICAgfVxuXG4gICAgLy8gaWYgaXQgbGl0ZXJhbGx5IGlzIGp1c3QgJz4nIG9yICcnIHRoZW4gYWxsb3cgYW55dGhpbmcuXG4gICAgaWYgKCFtWzJdKSB7XG4gICAgICB0aGlzLnNlbXZlciA9IEFOWVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbXZlciA9IG5ldyBTZW1WZXIobVsyXSwgdGhpcy5vcHRpb25zLmxvb3NlKVxuICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVxuICB9XG5cbiAgdGVzdCAodmVyc2lvbikge1xuICAgIGRlYnVnKCdDb21wYXJhdG9yLnRlc3QnLCB2ZXJzaW9uLCB0aGlzLm9wdGlvbnMubG9vc2UpXG5cbiAgICBpZiAodGhpcy5zZW12ZXIgPT09IEFOWSB8fCB2ZXJzaW9uID09PSBBTlkpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2ZXJzaW9uID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmVyc2lvbiA9IG5ldyBTZW1WZXIodmVyc2lvbiwgdGhpcy5vcHRpb25zKVxuICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNtcCh2ZXJzaW9uLCB0aGlzLm9wZXJhdG9yLCB0aGlzLnNlbXZlciwgdGhpcy5vcHRpb25zKVxuICB9XG5cbiAgaW50ZXJzZWN0cyAoY29tcCwgb3B0aW9ucykge1xuICAgIGlmICghKGNvbXAgaW5zdGFuY2VvZiBDb21wYXJhdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYSBDb21wYXJhdG9yIGlzIHJlcXVpcmVkJylcbiAgICB9XG5cbiAgICBpZiAoIW9wdGlvbnMgfHwgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBsb29zZTogISFvcHRpb25zLFxuICAgICAgICBpbmNsdWRlUHJlcmVsZWFzZTogZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcGVyYXRvciA9PT0gJycpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlID09PSAnJykge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBSYW5nZShjb21wLnZhbHVlLCBvcHRpb25zKS50ZXN0KHRoaXMudmFsdWUpXG4gICAgfSBlbHNlIGlmIChjb21wLm9wZXJhdG9yID09PSAnJykge1xuICAgICAgaWYgKGNvbXAudmFsdWUgPT09ICcnKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFJhbmdlKHRoaXMudmFsdWUsIG9wdGlvbnMpLnRlc3QoY29tcC5zZW12ZXIpXG4gICAgfVxuXG4gICAgY29uc3Qgc2FtZURpcmVjdGlvbkluY3JlYXNpbmcgPVxuICAgICAgKHRoaXMub3BlcmF0b3IgPT09ICc+PScgfHwgdGhpcy5vcGVyYXRvciA9PT0gJz4nKSAmJlxuICAgICAgKGNvbXAub3BlcmF0b3IgPT09ICc+PScgfHwgY29tcC5vcGVyYXRvciA9PT0gJz4nKVxuICAgIGNvbnN0IHNhbWVEaXJlY3Rpb25EZWNyZWFzaW5nID1cbiAgICAgICh0aGlzLm9wZXJhdG9yID09PSAnPD0nIHx8IHRoaXMub3BlcmF0b3IgPT09ICc8JykgJiZcbiAgICAgIChjb21wLm9wZXJhdG9yID09PSAnPD0nIHx8IGNvbXAub3BlcmF0b3IgPT09ICc8JylcbiAgICBjb25zdCBzYW1lU2VtVmVyID0gdGhpcy5zZW12ZXIudmVyc2lvbiA9PT0gY29tcC5zZW12ZXIudmVyc2lvblxuICAgIGNvbnN0IGRpZmZlcmVudERpcmVjdGlvbnNJbmNsdXNpdmUgPVxuICAgICAgKHRoaXMub3BlcmF0b3IgPT09ICc+PScgfHwgdGhpcy5vcGVyYXRvciA9PT0gJzw9JykgJiZcbiAgICAgIChjb21wLm9wZXJhdG9yID09PSAnPj0nIHx8IGNvbXAub3BlcmF0b3IgPT09ICc8PScpXG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb25zTGVzc1RoYW4gPVxuICAgICAgY21wKHRoaXMuc2VtdmVyLCAnPCcsIGNvbXAuc2VtdmVyLCBvcHRpb25zKSAmJlxuICAgICAgKHRoaXMub3BlcmF0b3IgPT09ICc+PScgfHwgdGhpcy5vcGVyYXRvciA9PT0gJz4nKSAmJlxuICAgICAgICAoY29tcC5vcGVyYXRvciA9PT0gJzw9JyB8fCBjb21wLm9wZXJhdG9yID09PSAnPCcpXG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb25zR3JlYXRlclRoYW4gPVxuICAgICAgY21wKHRoaXMuc2VtdmVyLCAnPicsIGNvbXAuc2VtdmVyLCBvcHRpb25zKSAmJlxuICAgICAgKHRoaXMub3BlcmF0b3IgPT09ICc8PScgfHwgdGhpcy5vcGVyYXRvciA9PT0gJzwnKSAmJlxuICAgICAgICAoY29tcC5vcGVyYXRvciA9PT0gJz49JyB8fCBjb21wLm9wZXJhdG9yID09PSAnPicpXG5cbiAgICByZXR1cm4gKFxuICAgICAgc2FtZURpcmVjdGlvbkluY3JlYXNpbmcgfHxcbiAgICAgIHNhbWVEaXJlY3Rpb25EZWNyZWFzaW5nIHx8XG4gICAgICAoc2FtZVNlbVZlciAmJiBkaWZmZXJlbnREaXJlY3Rpb25zSW5jbHVzaXZlKSB8fFxuICAgICAgb3Bwb3NpdGVEaXJlY3Rpb25zTGVzc1RoYW4gfHxcbiAgICAgIG9wcG9zaXRlRGlyZWN0aW9uc0dyZWF0ZXJUaGFuXG4gICAgKVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcGFyYXRvclxuXG5jb25zdCBwYXJzZU9wdGlvbnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9wYXJzZS1vcHRpb25zJylcbmNvbnN0IHtyZSwgdH0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9yZScpXG5jb25zdCBjbXAgPSByZXF1aXJlKCcuLi9mdW5jdGlvbnMvY21wJylcbmNvbnN0IGRlYnVnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZGVidWcnKVxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi9zZW12ZXInKVxuY29uc3QgUmFuZ2UgPSByZXF1aXJlKCcuL3JhbmdlJylcbiIsIi8vIGhvaXN0ZWQgY2xhc3MgZm9yIGN5Y2xpYyBkZXBlbmRlbmN5XG5jbGFzcyBSYW5nZSB7XG4gIGNvbnN0cnVjdG9yIChyYW5nZSwgb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBwYXJzZU9wdGlvbnMob3B0aW9ucylcblxuICAgIGlmIChyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHJhbmdlLmxvb3NlID09PSAhIW9wdGlvbnMubG9vc2UgJiZcbiAgICAgICAgcmFuZ2UuaW5jbHVkZVByZXJlbGVhc2UgPT09ICEhb3B0aW9ucy5pbmNsdWRlUHJlcmVsZWFzZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiByYW5nZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSYW5nZShyYW5nZS5yYXcsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJhbmdlIGluc3RhbmNlb2YgQ29tcGFyYXRvcikge1xuICAgICAgLy8ganVzdCBwdXQgaXQgaW4gdGhlIHNldCBhbmQgcmV0dXJuXG4gICAgICB0aGlzLnJhdyA9IHJhbmdlLnZhbHVlXG4gICAgICB0aGlzLnNldCA9IFtbcmFuZ2VdXVxuICAgICAgdGhpcy5mb3JtYXQoKVxuICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5sb29zZSA9ICEhb3B0aW9ucy5sb29zZVxuICAgIHRoaXMuaW5jbHVkZVByZXJlbGVhc2UgPSAhIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2VcblxuICAgIC8vIEZpcnN0LCBzcGxpdCBiYXNlZCBvbiBib29sZWFuIG9yIHx8XG4gICAgdGhpcy5yYXcgPSByYW5nZVxuICAgIHRoaXMuc2V0ID0gcmFuZ2VcbiAgICAgIC5zcGxpdCgvXFxzKlxcfFxcfFxccyovKVxuICAgICAgLy8gbWFwIHRoZSByYW5nZSB0byBhIDJkIGFycmF5IG9mIGNvbXBhcmF0b3JzXG4gICAgICAubWFwKHJhbmdlID0+IHRoaXMucGFyc2VSYW5nZShyYW5nZS50cmltKCkpKVxuICAgICAgLy8gdGhyb3cgb3V0IGFueSBjb21wYXJhdG9yIGxpc3RzIHRoYXQgYXJlIGVtcHR5XG4gICAgICAvLyB0aGlzIGdlbmVyYWxseSBtZWFucyB0aGF0IGl0IHdhcyBub3QgYSB2YWxpZCByYW5nZSwgd2hpY2ggaXMgYWxsb3dlZFxuICAgICAgLy8gaW4gbG9vc2UgbW9kZSwgYnV0IHdpbGwgc3RpbGwgdGhyb3cgaWYgdGhlIFdIT0xFIHJhbmdlIGlzIGludmFsaWQuXG4gICAgICAuZmlsdGVyKGMgPT4gYy5sZW5ndGgpXG5cbiAgICBpZiAoIXRoaXMuc2V0Lmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBTZW1WZXIgUmFuZ2U6ICR7cmFuZ2V9YClcbiAgICB9XG5cbiAgICAvLyBpZiB3ZSBoYXZlIGFueSB0aGF0IGFyZSBub3QgdGhlIG51bGwgc2V0LCB0aHJvdyBvdXQgbnVsbCBzZXRzLlxuICAgIGlmICh0aGlzLnNldC5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBrZWVwIHRoZSBmaXJzdCBvbmUsIGluIGNhc2UgdGhleSdyZSBhbGwgbnVsbCBzZXRzXG4gICAgICBjb25zdCBmaXJzdCA9IHRoaXMuc2V0WzBdXG4gICAgICB0aGlzLnNldCA9IHRoaXMuc2V0LmZpbHRlcihjID0+ICFpc051bGxTZXQoY1swXSkpXG4gICAgICBpZiAodGhpcy5zZXQubGVuZ3RoID09PSAwKVxuICAgICAgICB0aGlzLnNldCA9IFtmaXJzdF1cbiAgICAgIGVsc2UgaWYgKHRoaXMuc2V0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gaWYgd2UgaGF2ZSBhbnkgdGhhdCBhcmUgKiwgdGhlbiB0aGUgcmFuZ2UgaXMganVzdCAqXG4gICAgICAgIGZvciAoY29uc3QgYyBvZiB0aGlzLnNldCkge1xuICAgICAgICAgIGlmIChjLmxlbmd0aCA9PT0gMSAmJiBpc0FueShjWzBdKSkge1xuICAgICAgICAgICAgdGhpcy5zZXQgPSBbY11cbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtYXQoKVxuICB9XG5cbiAgZm9ybWF0ICgpIHtcbiAgICB0aGlzLnJhbmdlID0gdGhpcy5zZXRcbiAgICAgIC5tYXAoKGNvbXBzKSA9PiB7XG4gICAgICAgIHJldHVybiBjb21wcy5qb2luKCcgJykudHJpbSgpXG4gICAgICB9KVxuICAgICAgLmpvaW4oJ3x8JylcbiAgICAgIC50cmltKClcbiAgICByZXR1cm4gdGhpcy5yYW5nZVxuICB9XG5cbiAgdG9TdHJpbmcgKCkge1xuICAgIHJldHVybiB0aGlzLnJhbmdlXG4gIH1cblxuICBwYXJzZVJhbmdlIChyYW5nZSkge1xuICAgIHJhbmdlID0gcmFuZ2UudHJpbSgpXG5cbiAgICAvLyBtZW1vaXplIHJhbmdlIHBhcnNpbmcgZm9yIHBlcmZvcm1hbmNlLlxuICAgIC8vIHRoaXMgaXMgYSB2ZXJ5IGhvdCBwYXRoLCBhbmQgZnVsbHkgZGV0ZXJtaW5pc3RpYy5cbiAgICBjb25zdCBtZW1vT3B0cyA9IE9iamVjdC5rZXlzKHRoaXMub3B0aW9ucykuam9pbignLCcpXG4gICAgY29uc3QgbWVtb0tleSA9IGBwYXJzZVJhbmdlOiR7bWVtb09wdHN9OiR7cmFuZ2V9YFxuICAgIGNvbnN0IGNhY2hlZCA9IGNhY2hlLmdldChtZW1vS2V5KVxuICAgIGlmIChjYWNoZWQpXG4gICAgICByZXR1cm4gY2FjaGVkXG5cbiAgICBjb25zdCBsb29zZSA9IHRoaXMub3B0aW9ucy5sb29zZVxuICAgIC8vIGAxLjIuMyAtIDEuMi40YCA9PiBgPj0xLjIuMyA8PTEuMi40YFxuICAgIGNvbnN0IGhyID0gbG9vc2UgPyByZVt0LkhZUEhFTlJBTkdFTE9PU0VdIDogcmVbdC5IWVBIRU5SQU5HRV1cbiAgICByYW5nZSA9IHJhbmdlLnJlcGxhY2UoaHIsIGh5cGhlblJlcGxhY2UodGhpcy5vcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlKSlcbiAgICBkZWJ1ZygnaHlwaGVuIHJlcGxhY2UnLCByYW5nZSlcbiAgICAvLyBgPiAxLjIuMyA8IDEuMi41YCA9PiBgPjEuMi4zIDwxLjIuNWBcbiAgICByYW5nZSA9IHJhbmdlLnJlcGxhY2UocmVbdC5DT01QQVJBVE9SVFJJTV0sIGNvbXBhcmF0b3JUcmltUmVwbGFjZSlcbiAgICBkZWJ1ZygnY29tcGFyYXRvciB0cmltJywgcmFuZ2UsIHJlW3QuQ09NUEFSQVRPUlRSSU1dKVxuXG4gICAgLy8gYH4gMS4yLjNgID0+IGB+MS4yLjNgXG4gICAgcmFuZ2UgPSByYW5nZS5yZXBsYWNlKHJlW3QuVElMREVUUklNXSwgdGlsZGVUcmltUmVwbGFjZSlcblxuICAgIC8vIGBeIDEuMi4zYCA9PiBgXjEuMi4zYFxuICAgIHJhbmdlID0gcmFuZ2UucmVwbGFjZShyZVt0LkNBUkVUVFJJTV0sIGNhcmV0VHJpbVJlcGxhY2UpXG5cbiAgICAvLyBub3JtYWxpemUgc3BhY2VzXG4gICAgcmFuZ2UgPSByYW5nZS5zcGxpdCgvXFxzKy8pLmpvaW4oJyAnKVxuXG4gICAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIHJhbmdlIGlzIGNvbXBsZXRlbHkgdHJpbW1lZCBhbmRcbiAgICAvLyByZWFkeSB0byBiZSBzcGxpdCBpbnRvIGNvbXBhcmF0b3JzLlxuXG4gICAgY29uc3QgY29tcFJlID0gbG9vc2UgPyByZVt0LkNPTVBBUkFUT1JMT09TRV0gOiByZVt0LkNPTVBBUkFUT1JdXG4gICAgY29uc3QgcmFuZ2VMaXN0ID0gcmFuZ2VcbiAgICAgIC5zcGxpdCgnICcpXG4gICAgICAubWFwKGNvbXAgPT4gcGFyc2VDb21wYXJhdG9yKGNvbXAsIHRoaXMub3B0aW9ucykpXG4gICAgICAuam9pbignICcpXG4gICAgICAuc3BsaXQoL1xccysvKVxuICAgICAgLy8gPj0wLjAuMCBpcyBlcXVpdmFsZW50IHRvICpcbiAgICAgIC5tYXAoY29tcCA9PiByZXBsYWNlR1RFMChjb21wLCB0aGlzLm9wdGlvbnMpKVxuICAgICAgLy8gaW4gbG9vc2UgbW9kZSwgdGhyb3cgb3V0IGFueSB0aGF0IGFyZSBub3QgdmFsaWQgY29tcGFyYXRvcnNcbiAgICAgIC5maWx0ZXIodGhpcy5vcHRpb25zLmxvb3NlID8gY29tcCA9PiAhIWNvbXAubWF0Y2goY29tcFJlKSA6ICgpID0+IHRydWUpXG4gICAgICAubWFwKGNvbXAgPT4gbmV3IENvbXBhcmF0b3IoY29tcCwgdGhpcy5vcHRpb25zKSlcblxuICAgIC8vIGlmIGFueSBjb21wYXJhdG9ycyBhcmUgdGhlIG51bGwgc2V0LCB0aGVuIHJlcGxhY2Ugd2l0aCBKVVNUIG51bGwgc2V0XG4gICAgLy8gaWYgbW9yZSB0aGFuIG9uZSBjb21wYXJhdG9yLCByZW1vdmUgYW55ICogY29tcGFyYXRvcnNcbiAgICAvLyBhbHNvLCBkb24ndCBpbmNsdWRlIHRoZSBzYW1lIGNvbXBhcmF0b3IgbW9yZSB0aGFuIG9uY2VcbiAgICBjb25zdCBsID0gcmFuZ2VMaXN0Lmxlbmd0aFxuICAgIGNvbnN0IHJhbmdlTWFwID0gbmV3IE1hcCgpXG4gICAgZm9yIChjb25zdCBjb21wIG9mIHJhbmdlTGlzdCkge1xuICAgICAgaWYgKGlzTnVsbFNldChjb21wKSlcbiAgICAgICAgcmV0dXJuIFtjb21wXVxuICAgICAgcmFuZ2VNYXAuc2V0KGNvbXAudmFsdWUsIGNvbXApXG4gICAgfVxuICAgIGlmIChyYW5nZU1hcC5zaXplID4gMSAmJiByYW5nZU1hcC5oYXMoJycpKVxuICAgICAgcmFuZ2VNYXAuZGVsZXRlKCcnKVxuXG4gICAgY29uc3QgcmVzdWx0ID0gWy4uLnJhbmdlTWFwLnZhbHVlcygpXVxuICAgIGNhY2hlLnNldChtZW1vS2V5LCByZXN1bHQpXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgaW50ZXJzZWN0cyAocmFuZ2UsIG9wdGlvbnMpIHtcbiAgICBpZiAoIShyYW5nZSBpbnN0YW5jZW9mIFJhbmdlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYSBSYW5nZSBpcyByZXF1aXJlZCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2V0LnNvbWUoKHRoaXNDb21wYXJhdG9ycykgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgaXNTYXRpc2ZpYWJsZSh0aGlzQ29tcGFyYXRvcnMsIG9wdGlvbnMpICYmXG4gICAgICAgIHJhbmdlLnNldC5zb21lKChyYW5nZUNvbXBhcmF0b3JzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIGlzU2F0aXNmaWFibGUocmFuZ2VDb21wYXJhdG9ycywgb3B0aW9ucykgJiZcbiAgICAgICAgICAgIHRoaXNDb21wYXJhdG9ycy5ldmVyeSgodGhpc0NvbXBhcmF0b3IpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJhbmdlQ29tcGFyYXRvcnMuZXZlcnkoKHJhbmdlQ29tcGFyYXRvcikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzQ29tcGFyYXRvci5pbnRlcnNlY3RzKHJhbmdlQ29tcGFyYXRvciwgb3B0aW9ucylcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICAvLyBpZiBBTlkgb2YgdGhlIHNldHMgbWF0Y2ggQUxMIG9mIGl0cyBjb21wYXJhdG9ycywgdGhlbiBwYXNzXG4gIHRlc3QgKHZlcnNpb24pIHtcbiAgICBpZiAoIXZlcnNpb24pIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdmVyc2lvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZlcnNpb24gPSBuZXcgU2VtVmVyKHZlcnNpb24sIHRoaXMub3B0aW9ucylcbiAgICAgIH0gY2F0Y2ggKGVyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0ZXN0U2V0KHRoaXMuc2V0W2ldLCB2ZXJzaW9uLCB0aGlzLm9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFJhbmdlXG5cbmNvbnN0IExSVSA9IHJlcXVpcmUoJ2xydS1jYWNoZScpXG5jb25zdCBjYWNoZSA9IG5ldyBMUlUoeyBtYXg6IDEwMDAgfSlcblxuY29uc3QgcGFyc2VPcHRpb25zID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcGFyc2Utb3B0aW9ucycpXG5jb25zdCBDb21wYXJhdG9yID0gcmVxdWlyZSgnLi9jb21wYXJhdG9yJylcbmNvbnN0IGRlYnVnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvZGVidWcnKVxuY29uc3QgU2VtVmVyID0gcmVxdWlyZSgnLi9zZW12ZXInKVxuY29uc3Qge1xuICByZSxcbiAgdCxcbiAgY29tcGFyYXRvclRyaW1SZXBsYWNlLFxuICB0aWxkZVRyaW1SZXBsYWNlLFxuICBjYXJldFRyaW1SZXBsYWNlXG59ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcmUnKVxuXG5jb25zdCBpc051bGxTZXQgPSBjID0+IGMudmFsdWUgPT09ICc8MC4wLjAtMCdcbmNvbnN0IGlzQW55ID0gYyA9PiBjLnZhbHVlID09PSAnJ1xuXG4vLyB0YWtlIGEgc2V0IG9mIGNvbXBhcmF0b3JzIGFuZCBkZXRlcm1pbmUgd2hldGhlciB0aGVyZVxuLy8gZXhpc3RzIGEgdmVyc2lvbiB3aGljaCBjYW4gc2F0aXNmeSBpdFxuY29uc3QgaXNTYXRpc2ZpYWJsZSA9IChjb21wYXJhdG9ycywgb3B0aW9ucykgPT4ge1xuICBsZXQgcmVzdWx0ID0gdHJ1ZVxuICBjb25zdCByZW1haW5pbmdDb21wYXJhdG9ycyA9IGNvbXBhcmF0b3JzLnNsaWNlKClcbiAgbGV0IHRlc3RDb21wYXJhdG9yID0gcmVtYWluaW5nQ29tcGFyYXRvcnMucG9wKClcblxuICB3aGlsZSAocmVzdWx0ICYmIHJlbWFpbmluZ0NvbXBhcmF0b3JzLmxlbmd0aCkge1xuICAgIHJlc3VsdCA9IHJlbWFpbmluZ0NvbXBhcmF0b3JzLmV2ZXJ5KChvdGhlckNvbXBhcmF0b3IpID0+IHtcbiAgICAgIHJldHVybiB0ZXN0Q29tcGFyYXRvci5pbnRlcnNlY3RzKG90aGVyQ29tcGFyYXRvciwgb3B0aW9ucylcbiAgICB9KVxuXG4gICAgdGVzdENvbXBhcmF0b3IgPSByZW1haW5pbmdDb21wYXJhdG9ycy5wb3AoKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vLyBjb21wcmlzZWQgb2YgeHJhbmdlcywgdGlsZGVzLCBzdGFycywgYW5kIGd0bHQncyBhdCB0aGlzIHBvaW50LlxuLy8gYWxyZWFkeSByZXBsYWNlZCB0aGUgaHlwaGVuIHJhbmdlc1xuLy8gdHVybiBpbnRvIGEgc2V0IG9mIEpVU1QgY29tcGFyYXRvcnMuXG5jb25zdCBwYXJzZUNvbXBhcmF0b3IgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBkZWJ1ZygnY29tcCcsIGNvbXAsIG9wdGlvbnMpXG4gIGNvbXAgPSByZXBsYWNlQ2FyZXRzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCdjYXJldCcsIGNvbXApXG4gIGNvbXAgPSByZXBsYWNlVGlsZGVzKGNvbXAsIG9wdGlvbnMpXG4gIGRlYnVnKCd0aWxkZXMnLCBjb21wKVxuICBjb21wID0gcmVwbGFjZVhSYW5nZXMoY29tcCwgb3B0aW9ucylcbiAgZGVidWcoJ3hyYW5nZScsIGNvbXApXG4gIGNvbXAgPSByZXBsYWNlU3RhcnMoY29tcCwgb3B0aW9ucylcbiAgZGVidWcoJ3N0YXJzJywgY29tcClcbiAgcmV0dXJuIGNvbXBcbn1cblxuY29uc3QgaXNYID0gaWQgPT4gIWlkIHx8IGlkLnRvTG93ZXJDYXNlKCkgPT09ICd4JyB8fCBpZCA9PT0gJyonXG5cbi8vIH4sIH4+IC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuLy8gfjIsIH4yLngsIH4yLngueCwgfj4yLCB+PjIueCB+PjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMC0wXG4vLyB+Mi4wLCB+Mi4wLngsIH4+Mi4wLCB+PjIuMC54IC0tPiA+PTIuMC4wIDwyLjEuMC0wXG4vLyB+MS4yLCB+MS4yLngsIH4+MS4yLCB+PjEuMi54IC0tPiA+PTEuMi4wIDwxLjMuMC0wXG4vLyB+MS4yLjMsIH4+MS4yLjMgLS0+ID49MS4yLjMgPDEuMy4wLTBcbi8vIH4xLjIuMCwgfj4xLjIuMCAtLT4gPj0xLjIuMCA8MS4zLjAtMFxuY29uc3QgcmVwbGFjZVRpbGRlcyA9IChjb21wLCBvcHRpb25zKSA9PlxuICBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcCgoY29tcCkgPT4ge1xuICAgIHJldHVybiByZXBsYWNlVGlsZGUoY29tcCwgb3B0aW9ucylcbiAgfSkuam9pbignICcpXG5cbmNvbnN0IHJlcGxhY2VUaWxkZSA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHIgPSBvcHRpb25zLmxvb3NlID8gcmVbdC5USUxERUxPT1NFXSA6IHJlW3QuVElMREVdXG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgKF8sIE0sIG0sIHAsIHByKSA9PiB7XG4gICAgZGVidWcoJ3RpbGRlJywgY29tcCwgXywgTSwgbSwgcCwgcHIpXG4gICAgbGV0IHJldFxuXG4gICAgaWYgKGlzWChNKSkge1xuICAgICAgcmV0ID0gJydcbiAgICB9IGVsc2UgaWYgKGlzWChtKSkge1xuICAgICAgcmV0ID0gYD49JHtNfS4wLjAgPCR7K00gKyAxfS4wLjAtMGBcbiAgICB9IGVsc2UgaWYgKGlzWChwKSkge1xuICAgICAgLy8gfjEuMiA9PSA+PTEuMi4wIDwxLjMuMC0wXG4gICAgICByZXQgPSBgPj0ke019LiR7bX0uMCA8JHtNfS4keyttICsgMX0uMC0wYFxuICAgIH0gZWxzZSBpZiAocHIpIHtcbiAgICAgIGRlYnVnKCdyZXBsYWNlVGlsZGUgcHInLCBwcilcbiAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3B9LSR7cHJcbiAgICAgIH0gPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gfjEuMi4zID09ID49MS4yLjMgPDEuMy4wLTBcbiAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3BcbiAgICAgIH0gPCR7TX0uJHsrbSArIDF9LjAtMGBcbiAgICB9XG5cbiAgICBkZWJ1ZygndGlsZGUgcmV0dXJuJywgcmV0KVxuICAgIHJldHVybiByZXRcbiAgfSlcbn1cblxuLy8gXiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbi8vIF4yLCBeMi54LCBeMi54LnggLS0+ID49Mi4wLjAgPDMuMC4wLTBcbi8vIF4yLjAsIF4yLjAueCAtLT4gPj0yLjAuMCA8My4wLjAtMFxuLy8gXjEuMiwgXjEuMi54IC0tPiA+PTEuMi4wIDwyLjAuMC0wXG4vLyBeMS4yLjMgLS0+ID49MS4yLjMgPDIuMC4wLTBcbi8vIF4xLjIuMCAtLT4gPj0xLjIuMCA8Mi4wLjAtMFxuY29uc3QgcmVwbGFjZUNhcmV0cyA9IChjb21wLCBvcHRpb25zKSA9PlxuICBjb21wLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcCgoY29tcCkgPT4ge1xuICAgIHJldHVybiByZXBsYWNlQ2FyZXQoY29tcCwgb3B0aW9ucylcbiAgfSkuam9pbignICcpXG5cbmNvbnN0IHJlcGxhY2VDYXJldCA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIGRlYnVnKCdjYXJldCcsIGNvbXAsIG9wdGlvbnMpXG4gIGNvbnN0IHIgPSBvcHRpb25zLmxvb3NlID8gcmVbdC5DQVJFVExPT1NFXSA6IHJlW3QuQ0FSRVRdXG4gIGNvbnN0IHogPSBvcHRpb25zLmluY2x1ZGVQcmVyZWxlYXNlID8gJy0wJyA6ICcnXG4gIHJldHVybiBjb21wLnJlcGxhY2UociwgKF8sIE0sIG0sIHAsIHByKSA9PiB7XG4gICAgZGVidWcoJ2NhcmV0JywgY29tcCwgXywgTSwgbSwgcCwgcHIpXG4gICAgbGV0IHJldFxuXG4gICAgaWYgKGlzWChNKSkge1xuICAgICAgcmV0ID0gJydcbiAgICB9IGVsc2UgaWYgKGlzWChtKSkge1xuICAgICAgcmV0ID0gYD49JHtNfS4wLjAke3p9IDwkeytNICsgMX0uMC4wLTBgXG4gICAgfSBlbHNlIGlmIChpc1gocCkpIHtcbiAgICAgIGlmIChNID09PSAnMCcpIHtcbiAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LjAke3p9IDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uMCR7en0gPCR7K00gKyAxfS4wLjAtMGBcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHByKSB7XG4gICAgICBkZWJ1ZygncmVwbGFjZUNhcmV0IHByJywgcHIpXG4gICAgICBpZiAoTSA9PT0gJzAnKSB7XG4gICAgICAgIGlmIChtID09PSAnMCcpIHtcbiAgICAgICAgICByZXQgPSBgPj0ke019LiR7bX0uJHtwfS0ke3ByXG4gICAgICAgICAgfSA8JHtNfS4ke219LiR7K3AgKyAxfS0wYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3B9LSR7cHJcbiAgICAgICAgICB9IDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3B9LSR7cHJcbiAgICAgICAgfSA8JHsrTSArIDF9LjAuMC0wYFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1Zygnbm8gcHInKVxuICAgICAgaWYgKE0gPT09ICcwJykge1xuICAgICAgICBpZiAobSA9PT0gJzAnKSB7XG4gICAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cFxuICAgICAgICAgIH0ke3p9IDwke019LiR7bX0uJHsrcCArIDF9LTBgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0ID0gYD49JHtNfS4ke219LiR7cFxuICAgICAgICAgIH0ke3p9IDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IGA+PSR7TX0uJHttfS4ke3BcbiAgICAgICAgfSA8JHsrTSArIDF9LjAuMC0wYFxuICAgICAgfVxuICAgIH1cblxuICAgIGRlYnVnKCdjYXJldCByZXR1cm4nLCByZXQpXG4gICAgcmV0dXJuIHJldFxuICB9KVxufVxuXG5jb25zdCByZXBsYWNlWFJhbmdlcyA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIGRlYnVnKCdyZXBsYWNlWFJhbmdlcycsIGNvbXAsIG9wdGlvbnMpXG4gIHJldHVybiBjb21wLnNwbGl0KC9cXHMrLykubWFwKChjb21wKSA9PiB7XG4gICAgcmV0dXJuIHJlcGxhY2VYUmFuZ2UoY29tcCwgb3B0aW9ucylcbiAgfSkuam9pbignICcpXG59XG5cbmNvbnN0IHJlcGxhY2VYUmFuZ2UgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBjb21wID0gY29tcC50cmltKClcbiAgY29uc3QgciA9IG9wdGlvbnMubG9vc2UgPyByZVt0LlhSQU5HRUxPT1NFXSA6IHJlW3QuWFJBTkdFXVxuICByZXR1cm4gY29tcC5yZXBsYWNlKHIsIChyZXQsIGd0bHQsIE0sIG0sIHAsIHByKSA9PiB7XG4gICAgZGVidWcoJ3hSYW5nZScsIGNvbXAsIHJldCwgZ3RsdCwgTSwgbSwgcCwgcHIpXG4gICAgY29uc3QgeE0gPSBpc1goTSlcbiAgICBjb25zdCB4bSA9IHhNIHx8IGlzWChtKVxuICAgIGNvbnN0IHhwID0geG0gfHwgaXNYKHApXG4gICAgY29uc3QgYW55WCA9IHhwXG5cbiAgICBpZiAoZ3RsdCA9PT0gJz0nICYmIGFueVgpIHtcbiAgICAgIGd0bHQgPSAnJ1xuICAgIH1cblxuICAgIC8vIGlmIHdlJ3JlIGluY2x1ZGluZyBwcmVyZWxlYXNlcyBpbiB0aGUgbWF0Y2gsIHRoZW4gd2UgbmVlZFxuICAgIC8vIHRvIGZpeCB0aGlzIHRvIC0wLCB0aGUgbG93ZXN0IHBvc3NpYmxlIHByZXJlbGVhc2UgdmFsdWVcbiAgICBwciA9IG9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgPyAnLTAnIDogJydcblxuICAgIGlmICh4TSkge1xuICAgICAgaWYgKGd0bHQgPT09ICc+JyB8fCBndGx0ID09PSAnPCcpIHtcbiAgICAgICAgLy8gbm90aGluZyBpcyBhbGxvd2VkXG4gICAgICAgIHJldCA9ICc8MC4wLjAtMCdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vdGhpbmcgaXMgZm9yYmlkZGVuXG4gICAgICAgIHJldCA9ICcqJ1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZ3RsdCAmJiBhbnlYKSB7XG4gICAgICAvLyB3ZSBrbm93IHBhdGNoIGlzIGFuIHgsIGJlY2F1c2Ugd2UgaGF2ZSBhbnkgeCBhdCBhbGwuXG4gICAgICAvLyByZXBsYWNlIFggd2l0aCAwXG4gICAgICBpZiAoeG0pIHtcbiAgICAgICAgbSA9IDBcbiAgICAgIH1cbiAgICAgIHAgPSAwXG5cbiAgICAgIGlmIChndGx0ID09PSAnPicpIHtcbiAgICAgICAgLy8gPjEgPT4gPj0yLjAuMFxuICAgICAgICAvLyA+MS4yID0+ID49MS4zLjBcbiAgICAgICAgZ3RsdCA9ICc+PSdcbiAgICAgICAgaWYgKHhtKSB7XG4gICAgICAgICAgTSA9ICtNICsgMVxuICAgICAgICAgIG0gPSAwXG4gICAgICAgICAgcCA9IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtID0gK20gKyAxXG4gICAgICAgICAgcCA9IDBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChndGx0ID09PSAnPD0nKSB7XG4gICAgICAgIC8vIDw9MC43LnggaXMgYWN0dWFsbHkgPDAuOC4wLCBzaW5jZSBhbnkgMC43Lnggc2hvdWxkXG4gICAgICAgIC8vIHBhc3MuICBTaW1pbGFybHksIDw9Ny54IGlzIGFjdHVhbGx5IDw4LjAuMCwgZXRjLlxuICAgICAgICBndGx0ID0gJzwnXG4gICAgICAgIGlmICh4bSkge1xuICAgICAgICAgIE0gPSArTSArIDFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtID0gK20gKyAxXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGd0bHQgPT09ICc8JylcbiAgICAgICAgcHIgPSAnLTAnXG5cbiAgICAgIHJldCA9IGAke2d0bHQgKyBNfS4ke219LiR7cH0ke3ByfWBcbiAgICB9IGVsc2UgaWYgKHhtKSB7XG4gICAgICByZXQgPSBgPj0ke019LjAuMCR7cHJ9IDwkeytNICsgMX0uMC4wLTBgXG4gICAgfSBlbHNlIGlmICh4cCkge1xuICAgICAgcmV0ID0gYD49JHtNfS4ke219LjAke3ByXG4gICAgICB9IDwke019LiR7K20gKyAxfS4wLTBgXG4gICAgfVxuXG4gICAgZGVidWcoJ3hSYW5nZSByZXR1cm4nLCByZXQpXG5cbiAgICByZXR1cm4gcmV0XG4gIH0pXG59XG5cbi8vIEJlY2F1c2UgKiBpcyBBTkQtZWQgd2l0aCBldmVyeXRoaW5nIGVsc2UgaW4gdGhlIGNvbXBhcmF0b3IsXG4vLyBhbmQgJycgbWVhbnMgXCJhbnkgdmVyc2lvblwiLCBqdXN0IHJlbW92ZSB0aGUgKnMgZW50aXJlbHkuXG5jb25zdCByZXBsYWNlU3RhcnMgPSAoY29tcCwgb3B0aW9ucykgPT4ge1xuICBkZWJ1ZygncmVwbGFjZVN0YXJzJywgY29tcCwgb3B0aW9ucylcbiAgLy8gTG9vc2VuZXNzIGlzIGlnbm9yZWQgaGVyZS4gIHN0YXIgaXMgYWx3YXlzIGFzIGxvb3NlIGFzIGl0IGdldHMhXG4gIHJldHVybiBjb21wLnRyaW0oKS5yZXBsYWNlKHJlW3QuU1RBUl0sICcnKVxufVxuXG5jb25zdCByZXBsYWNlR1RFMCA9IChjb21wLCBvcHRpb25zKSA9PiB7XG4gIGRlYnVnKCdyZXBsYWNlR1RFMCcsIGNvbXAsIG9wdGlvbnMpXG4gIHJldHVybiBjb21wLnRyaW0oKVxuICAgIC5yZXBsYWNlKHJlW29wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UgPyB0LkdURTBQUkUgOiB0LkdURTBdLCAnJylcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBwYXNzZWQgdG8gc3RyaW5nLnJlcGxhY2UocmVbdC5IWVBIRU5SQU5HRV0pXG4vLyBNLCBtLCBwYXRjaCwgcHJlcmVsZWFzZSwgYnVpbGRcbi8vIDEuMiAtIDMuNC41ID0+ID49MS4yLjAgPD0zLjQuNVxuLy8gMS4yLjMgLSAzLjQgPT4gPj0xLjIuMCA8My41LjAtMCBBbnkgMy40Lnggd2lsbCBkb1xuLy8gMS4yIC0gMy40ID0+ID49MS4yLjAgPDMuNS4wLTBcbmNvbnN0IGh5cGhlblJlcGxhY2UgPSBpbmNQciA9PiAoJDAsXG4gIGZyb20sIGZNLCBmbSwgZnAsIGZwciwgZmIsXG4gIHRvLCB0TSwgdG0sIHRwLCB0cHIsIHRiKSA9PiB7XG4gIGlmIChpc1goZk0pKSB7XG4gICAgZnJvbSA9ICcnXG4gIH0gZWxzZSBpZiAoaXNYKGZtKSkge1xuICAgIGZyb20gPSBgPj0ke2ZNfS4wLjAke2luY1ByID8gJy0wJyA6ICcnfWBcbiAgfSBlbHNlIGlmIChpc1goZnApKSB7XG4gICAgZnJvbSA9IGA+PSR7Zk19LiR7Zm19LjAke2luY1ByID8gJy0wJyA6ICcnfWBcbiAgfSBlbHNlIGlmIChmcHIpIHtcbiAgICBmcm9tID0gYD49JHtmcm9tfWBcbiAgfSBlbHNlIHtcbiAgICBmcm9tID0gYD49JHtmcm9tfSR7aW5jUHIgPyAnLTAnIDogJyd9YFxuICB9XG5cbiAgaWYgKGlzWCh0TSkpIHtcbiAgICB0byA9ICcnXG4gIH0gZWxzZSBpZiAoaXNYKHRtKSkge1xuICAgIHRvID0gYDwkeyt0TSArIDF9LjAuMC0wYFxuICB9IGVsc2UgaWYgKGlzWCh0cCkpIHtcbiAgICB0byA9IGA8JHt0TX0uJHsrdG0gKyAxfS4wLTBgXG4gIH0gZWxzZSBpZiAodHByKSB7XG4gICAgdG8gPSBgPD0ke3RNfS4ke3RtfS4ke3RwfS0ke3Rwcn1gXG4gIH0gZWxzZSBpZiAoaW5jUHIpIHtcbiAgICB0byA9IGA8JHt0TX0uJHt0bX0uJHsrdHAgKyAxfS0wYFxuICB9IGVsc2Uge1xuICAgIHRvID0gYDw9JHt0b31gXG4gIH1cblxuICByZXR1cm4gKGAke2Zyb219ICR7dG99YCkudHJpbSgpXG59XG5cbmNvbnN0IHRlc3RTZXQgPSAoc2V0LCB2ZXJzaW9uLCBvcHRpb25zKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFzZXRbaV0udGVzdCh2ZXJzaW9uKSkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaWYgKHZlcnNpb24ucHJlcmVsZWFzZS5sZW5ndGggJiYgIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UpIHtcbiAgICAvLyBGaW5kIHRoZSBzZXQgb2YgdmVyc2lvbnMgdGhhdCBhcmUgYWxsb3dlZCB0byBoYXZlIHByZXJlbGVhc2VzXG4gICAgLy8gRm9yIGV4YW1wbGUsIF4xLjIuMy1wci4xIGRlc3VnYXJzIHRvID49MS4yLjMtcHIuMSA8Mi4wLjBcbiAgICAvLyBUaGF0IHNob3VsZCBhbGxvdyBgMS4yLjMtcHIuMmAgdG8gcGFzcy5cbiAgICAvLyBIb3dldmVyLCBgMS4yLjQtYWxwaGEubm90cmVhZHlgIHNob3VsZCBOT1QgYmUgYWxsb3dlZCxcbiAgICAvLyBldmVuIHRob3VnaCBpdCdzIHdpdGhpbiB0aGUgcmFuZ2Ugc2V0IGJ5IHRoZSBjb21wYXJhdG9ycy5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNldC5sZW5ndGg7IGkrKykge1xuICAgICAgZGVidWcoc2V0W2ldLnNlbXZlcilcbiAgICAgIGlmIChzZXRbaV0uc2VtdmVyID09PSBDb21wYXJhdG9yLkFOWSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoc2V0W2ldLnNlbXZlci5wcmVyZWxlYXNlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYWxsb3dlZCA9IHNldFtpXS5zZW12ZXJcbiAgICAgICAgaWYgKGFsbG93ZWQubWFqb3IgPT09IHZlcnNpb24ubWFqb3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQubWlub3IgPT09IHZlcnNpb24ubWlub3IgJiZcbiAgICAgICAgICAgIGFsbG93ZWQucGF0Y2ggPT09IHZlcnNpb24ucGF0Y2gpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVmVyc2lvbiBoYXMgYSAtcHJlLCBidXQgaXQncyBub3Qgb25lIG9mIHRoZSBvbmVzIHdlIGxpa2UuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuIiwiY29uc3QgZGVidWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9kZWJ1ZycpXG5jb25zdCB7IE1BWF9MRU5HVEgsIE1BWF9TQUZFX0lOVEVHRVIgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2NvbnN0YW50cycpXG5jb25zdCB7IHJlLCB0IH0gPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9yZScpXG5cbmNvbnN0IHBhcnNlT3B0aW9ucyA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3BhcnNlLW9wdGlvbnMnKVxuY29uc3QgeyBjb21wYXJlSWRlbnRpZmllcnMgfSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lkZW50aWZpZXJzJylcbmNsYXNzIFNlbVZlciB7XG4gIGNvbnN0cnVjdG9yICh2ZXJzaW9uLCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHBhcnNlT3B0aW9ucyhvcHRpb25zKVxuXG4gICAgaWYgKHZlcnNpb24gaW5zdGFuY2VvZiBTZW1WZXIpIHtcbiAgICAgIGlmICh2ZXJzaW9uLmxvb3NlID09PSAhIW9wdGlvbnMubG9vc2UgJiZcbiAgICAgICAgICB2ZXJzaW9uLmluY2x1ZGVQcmVyZWxlYXNlID09PSAhIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2UpIHtcbiAgICAgICAgcmV0dXJuIHZlcnNpb25cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcnNpb24gPSB2ZXJzaW9uLnZlcnNpb25cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2ZXJzaW9uICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBWZXJzaW9uOiAke3ZlcnNpb259YClcbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbi5sZW5ndGggPiBNQVhfTEVOR1RIKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBgdmVyc2lvbiBpcyBsb25nZXIgdGhhbiAke01BWF9MRU5HVEh9IGNoYXJhY3RlcnNgXG4gICAgICApXG4gICAgfVxuXG4gICAgZGVidWcoJ1NlbVZlcicsIHZlcnNpb24sIG9wdGlvbnMpXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9uc1xuICAgIHRoaXMubG9vc2UgPSAhIW9wdGlvbnMubG9vc2VcbiAgICAvLyB0aGlzIGlzbid0IGFjdHVhbGx5IHJlbGV2YW50IGZvciB2ZXJzaW9ucywgYnV0IGtlZXAgaXQgc28gdGhhdCB3ZVxuICAgIC8vIGRvbid0IHJ1biBpbnRvIHRyb3VibGUgcGFzc2luZyB0aGlzLm9wdGlvbnMgYXJvdW5kLlxuICAgIHRoaXMuaW5jbHVkZVByZXJlbGVhc2UgPSAhIW9wdGlvbnMuaW5jbHVkZVByZXJlbGVhc2VcblxuICAgIGNvbnN0IG0gPSB2ZXJzaW9uLnRyaW0oKS5tYXRjaChvcHRpb25zLmxvb3NlID8gcmVbdC5MT09TRV0gOiByZVt0LkZVTExdKVxuXG4gICAgaWYgKCFtKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIFZlcnNpb246ICR7dmVyc2lvbn1gKVxuICAgIH1cblxuICAgIHRoaXMucmF3ID0gdmVyc2lvblxuXG4gICAgLy8gdGhlc2UgYXJlIGFjdHVhbGx5IG51bWJlcnNcbiAgICB0aGlzLm1ham9yID0gK21bMV1cbiAgICB0aGlzLm1pbm9yID0gK21bMl1cbiAgICB0aGlzLnBhdGNoID0gK21bM11cblxuICAgIGlmICh0aGlzLm1ham9yID4gTUFYX1NBRkVfSU5URUdFUiB8fCB0aGlzLm1ham9yIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBtYWpvciB2ZXJzaW9uJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5taW5vciA+IE1BWF9TQUZFX0lOVEVHRVIgfHwgdGhpcy5taW5vciA8IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgbWlub3IgdmVyc2lvbicpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGF0Y2ggPiBNQVhfU0FGRV9JTlRFR0VSIHx8IHRoaXMucGF0Y2ggPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIHBhdGNoIHZlcnNpb24nKVxuICAgIH1cblxuICAgIC8vIG51bWJlcmlmeSBhbnkgcHJlcmVsZWFzZSBudW1lcmljIGlkc1xuICAgIGlmICghbVs0XSkge1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gW11cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcmVyZWxlYXNlID0gbVs0XS5zcGxpdCgnLicpLm1hcCgoaWQpID0+IHtcbiAgICAgICAgaWYgKC9eWzAtOV0rJC8udGVzdChpZCkpIHtcbiAgICAgICAgICBjb25zdCBudW0gPSAraWRcbiAgICAgICAgICBpZiAobnVtID49IDAgJiYgbnVtIDwgTUFYX1NBRkVfSU5URUdFUikge1xuICAgICAgICAgICAgcmV0dXJuIG51bVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWRcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5idWlsZCA9IG1bNV0gPyBtWzVdLnNwbGl0KCcuJykgOiBbXVxuICAgIHRoaXMuZm9ybWF0KClcbiAgfVxuXG4gIGZvcm1hdCAoKSB7XG4gICAgdGhpcy52ZXJzaW9uID0gYCR7dGhpcy5tYWpvcn0uJHt0aGlzLm1pbm9yfS4ke3RoaXMucGF0Y2h9YFxuICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoKSB7XG4gICAgICB0aGlzLnZlcnNpb24gKz0gYC0ke3RoaXMucHJlcmVsZWFzZS5qb2luKCcuJyl9YFxuICAgIH1cbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uXG4gIH1cblxuICB0b1N0cmluZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVyc2lvblxuICB9XG5cbiAgY29tcGFyZSAob3RoZXIpIHtcbiAgICBkZWJ1ZygnU2VtVmVyLmNvbXBhcmUnLCB0aGlzLnZlcnNpb24sIHRoaXMub3B0aW9ucywgb3RoZXIpXG4gICAgaWYgKCEob3RoZXIgaW5zdGFuY2VvZiBTZW1WZXIpKSB7XG4gICAgICBpZiAodHlwZW9mIG90aGVyID09PSAnc3RyaW5nJyAmJiBvdGhlciA9PT0gdGhpcy52ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiAwXG4gICAgICB9XG4gICAgICBvdGhlciA9IG5ldyBTZW1WZXIob3RoZXIsIHRoaXMub3B0aW9ucylcbiAgICB9XG5cbiAgICBpZiAob3RoZXIudmVyc2lvbiA9PT0gdGhpcy52ZXJzaW9uKSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbXBhcmVNYWluKG90aGVyKSB8fCB0aGlzLmNvbXBhcmVQcmUob3RoZXIpXG4gIH1cblxuICBjb21wYXJlTWFpbiAob3RoZXIpIHtcbiAgICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpIHtcbiAgICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5vcHRpb25zKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5tYWpvciwgb3RoZXIubWFqb3IpIHx8XG4gICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5taW5vciwgb3RoZXIubWlub3IpIHx8XG4gICAgICBjb21wYXJlSWRlbnRpZmllcnModGhpcy5wYXRjaCwgb3RoZXIucGF0Y2gpXG4gICAgKVxuICB9XG5cbiAgY29tcGFyZVByZSAob3RoZXIpIHtcbiAgICBpZiAoIShvdGhlciBpbnN0YW5jZW9mIFNlbVZlcikpIHtcbiAgICAgIG90aGVyID0gbmV3IFNlbVZlcihvdGhlciwgdGhpcy5vcHRpb25zKVxuICAgIH1cblxuICAgIC8vIE5PVCBoYXZpbmcgYSBwcmVyZWxlYXNlIGlzID4gaGF2aW5nIG9uZVxuICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfSBlbHNlIGlmICghdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCAmJiBvdGhlci5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByZXJlbGVhc2UubGVuZ3RoICYmICFvdGhlci5wcmVyZWxlYXNlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG5cbiAgICBsZXQgaSA9IDBcbiAgICBkbyB7XG4gICAgICBjb25zdCBhID0gdGhpcy5wcmVyZWxlYXNlW2ldXG4gICAgICBjb25zdCBiID0gb3RoZXIucHJlcmVsZWFzZVtpXVxuICAgICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpXG4gICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfSBlbHNlIGlmIChiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICAgIH0gZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfSBlbHNlIGlmIChhID09PSBiKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpXG4gICAgICB9XG4gICAgfSB3aGlsZSAoKytpKVxuICB9XG5cbiAgY29tcGFyZUJ1aWxkIChvdGhlcikge1xuICAgIGlmICghKG90aGVyIGluc3RhbmNlb2YgU2VtVmVyKSkge1xuICAgICAgb3RoZXIgPSBuZXcgU2VtVmVyKG90aGVyLCB0aGlzLm9wdGlvbnMpXG4gICAgfVxuXG4gICAgbGV0IGkgPSAwXG4gICAgZG8ge1xuICAgICAgY29uc3QgYSA9IHRoaXMuYnVpbGRbaV1cbiAgICAgIGNvbnN0IGIgPSBvdGhlci5idWlsZFtpXVxuICAgICAgZGVidWcoJ3ByZXJlbGVhc2UgY29tcGFyZScsIGksIGEsIGIpXG4gICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkICYmIGIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMFxuICAgICAgfSBlbHNlIGlmIChiID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIDFcbiAgICAgIH0gZWxzZSBpZiAoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfSBlbHNlIGlmIChhID09PSBiKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29tcGFyZUlkZW50aWZpZXJzKGEsIGIpXG4gICAgICB9XG4gICAgfSB3aGlsZSAoKytpKVxuICB9XG5cbiAgLy8gcHJlbWlub3Igd2lsbCBidW1wIHRoZSB2ZXJzaW9uIHVwIHRvIHRoZSBuZXh0IG1pbm9yIHJlbGVhc2UsIGFuZCBpbW1lZGlhdGVseVxuICAvLyBkb3duIHRvIHByZS1yZWxlYXNlLiBwcmVtYWpvciBhbmQgcHJlcGF0Y2ggd29yayB0aGUgc2FtZSB3YXkuXG4gIGluYyAocmVsZWFzZSwgaWRlbnRpZmllcikge1xuICAgIHN3aXRjaCAocmVsZWFzZSkge1xuICAgICAgY2FzZSAncHJlbWFqb3InOlxuICAgICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID0gMFxuICAgICAgICB0aGlzLnBhdGNoID0gMFxuICAgICAgICB0aGlzLm1pbm9yID0gMFxuICAgICAgICB0aGlzLm1ham9yKytcbiAgICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdwcmVtaW5vcic6XG4gICAgICAgIHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPSAwXG4gICAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICAgIHRoaXMubWlub3IrK1xuICAgICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcilcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3ByZXBhdGNoJzpcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBhbHJlYWR5IGEgcHJlcmVsZWFzZSwgaXQgd2lsbCBidW1wIHRvIHRoZSBuZXh0IHZlcnNpb25cbiAgICAgICAgLy8gZHJvcCBhbnkgcHJlcmVsZWFzZXMgdGhhdCBtaWdodCBhbHJlYWR5IGV4aXN0LCBzaW5jZSB0aGV5IGFyZSBub3RcbiAgICAgICAgLy8gcmVsZXZhbnQgYXQgdGhpcyBwb2ludC5cbiAgICAgICAgdGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9IDBcbiAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcilcbiAgICAgICAgdGhpcy5pbmMoJ3ByZScsIGlkZW50aWZpZXIpXG4gICAgICAgIGJyZWFrXG4gICAgICAvLyBJZiB0aGUgaW5wdXQgaXMgYSBub24tcHJlcmVsZWFzZSB2ZXJzaW9uLCB0aGlzIGFjdHMgdGhlIHNhbWUgYXNcbiAgICAgIC8vIHByZXBhdGNoLlxuICAgICAgY2FzZSAncHJlcmVsZWFzZSc6XG4gICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5pbmMoJ3BhdGNoJywgaWRlbnRpZmllcilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluYygncHJlJywgaWRlbnRpZmllcilcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSAnbWFqb3InOlxuICAgICAgICAvLyBJZiB0aGlzIGlzIGEgcHJlLW1ham9yIHZlcnNpb24sIGJ1bXAgdXAgdG8gdGhlIHNhbWUgbWFqb3IgdmVyc2lvbi5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIGluY3JlbWVudCBtYWpvci5cbiAgICAgICAgLy8gMS4wLjAtNSBidW1wcyB0byAxLjAuMFxuICAgICAgICAvLyAxLjEuMCBidW1wcyB0byAyLjAuMFxuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5taW5vciAhPT0gMCB8fFxuICAgICAgICAgIHRoaXMucGF0Y2ggIT09IDAgfHxcbiAgICAgICAgICB0aGlzLnByZXJlbGVhc2UubGVuZ3RoID09PSAwXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMubWFqb3IrK1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubWlub3IgPSAwXG4gICAgICAgIHRoaXMucGF0Y2ggPSAwXG4gICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtdXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdtaW5vcic6XG4gICAgICAgIC8vIElmIHRoaXMgaXMgYSBwcmUtbWlub3IgdmVyc2lvbiwgYnVtcCB1cCB0byB0aGUgc2FtZSBtaW5vciB2ZXJzaW9uLlxuICAgICAgICAvLyBPdGhlcndpc2UgaW5jcmVtZW50IG1pbm9yLlxuICAgICAgICAvLyAxLjIuMC01IGJ1bXBzIHRvIDEuMi4wXG4gICAgICAgIC8vIDEuMi4xIGJ1bXBzIHRvIDEuMy4wXG4gICAgICAgIGlmICh0aGlzLnBhdGNoICE9PSAwIHx8IHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLm1pbm9yKytcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhdGNoID0gMFxuICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAncGF0Y2gnOlxuICAgICAgICAvLyBJZiB0aGlzIGlzIG5vdCBhIHByZS1yZWxlYXNlIHZlcnNpb24sIGl0IHdpbGwgaW5jcmVtZW50IHRoZSBwYXRjaC5cbiAgICAgICAgLy8gSWYgaXQgaXMgYSBwcmUtcmVsZWFzZSBpdCB3aWxsIGJ1bXAgdXAgdG8gdGhlIHNhbWUgcGF0Y2ggdmVyc2lvbi5cbiAgICAgICAgLy8gMS4yLjAtNSBwYXRjaGVzIHRvIDEuMi4wXG4gICAgICAgIC8vIDEuMi4wIHBhdGNoZXMgdG8gMS4yLjFcbiAgICAgICAgaWYgKHRoaXMucHJlcmVsZWFzZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLnBhdGNoKytcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbXVxuICAgICAgICBicmVha1xuICAgICAgLy8gVGhpcyBwcm9iYWJseSBzaG91bGRuJ3QgYmUgdXNlZCBwdWJsaWNseS5cbiAgICAgIC8vIDEuMC4wICdwcmUnIHdvdWxkIGJlY29tZSAxLjAuMC0wIHdoaWNoIGlzIHRoZSB3cm9uZyBkaXJlY3Rpb24uXG4gICAgICBjYXNlICdwcmUnOlxuICAgICAgICBpZiAodGhpcy5wcmVyZWxlYXNlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFswXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBpID0gdGhpcy5wcmVyZWxlYXNlLmxlbmd0aFxuICAgICAgICAgIHdoaWxlICgtLWkgPj0gMCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnByZXJlbGVhc2VbaV0gPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZVtpXSsrXG4gICAgICAgICAgICAgIGkgPSAtMlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIGRpZG4ndCBpbmNyZW1lbnQgYW55dGhpbmdcbiAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZS5wdXNoKDApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpZGVudGlmaWVyKSB7XG4gICAgICAgICAgLy8gMS4yLjAtYmV0YS4xIGJ1bXBzIHRvIDEuMi4wLWJldGEuMixcbiAgICAgICAgICAvLyAxLjIuMC1iZXRhLmZvb2JseiBvciAxLjIuMC1iZXRhIGJ1bXBzIHRvIDEuMi4wLWJldGEuMFxuICAgICAgICAgIGlmICh0aGlzLnByZXJlbGVhc2VbMF0gPT09IGlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIGlmIChpc05hTih0aGlzLnByZXJlbGVhc2VbMV0pKSB7XG4gICAgICAgICAgICAgIHRoaXMucHJlcmVsZWFzZSA9IFtpZGVudGlmaWVyLCAwXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnByZXJlbGVhc2UgPSBbaWRlbnRpZmllciwgMF1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhbGlkIGluY3JlbWVudCBhcmd1bWVudDogJHtyZWxlYXNlfWApXG4gICAgfVxuICAgIHRoaXMuZm9ybWF0KClcbiAgICB0aGlzLnJhdyA9IHRoaXMudmVyc2lvblxuICAgIHJldHVybiB0aGlzXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZW1WZXJcbiIsImNvbnN0IGVxID0gcmVxdWlyZSgnLi9lcScpXG5jb25zdCBuZXEgPSByZXF1aXJlKCcuL25lcScpXG5jb25zdCBndCA9IHJlcXVpcmUoJy4vZ3QnKVxuY29uc3QgZ3RlID0gcmVxdWlyZSgnLi9ndGUnKVxuY29uc3QgbHQgPSByZXF1aXJlKCcuL2x0JylcbmNvbnN0IGx0ZSA9IHJlcXVpcmUoJy4vbHRlJylcblxuY29uc3QgY21wID0gKGEsIG9wLCBiLCBsb29zZSkgPT4ge1xuICBzd2l0Y2ggKG9wKSB7XG4gICAgY2FzZSAnPT09JzpcbiAgICAgIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpXG4gICAgICAgIGEgPSBhLnZlcnNpb25cbiAgICAgIGlmICh0eXBlb2YgYiA9PT0gJ29iamVjdCcpXG4gICAgICAgIGIgPSBiLnZlcnNpb25cbiAgICAgIHJldHVybiBhID09PSBiXG5cbiAgICBjYXNlICchPT0nOlxuICAgICAgaWYgKHR5cGVvZiBhID09PSAnb2JqZWN0JylcbiAgICAgICAgYSA9IGEudmVyc2lvblxuICAgICAgaWYgKHR5cGVvZiBiID09PSAnb2JqZWN0JylcbiAgICAgICAgYiA9IGIudmVyc2lvblxuICAgICAgcmV0dXJuIGEgIT09IGJcblxuICAgIGNhc2UgJyc6XG4gICAgY2FzZSAnPSc6XG4gICAgY2FzZSAnPT0nOlxuICAgICAgcmV0dXJuIGVxKGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnIT0nOlxuICAgICAgcmV0dXJuIG5lcShhLCBiLCBsb29zZSlcblxuICAgIGNhc2UgJz4nOlxuICAgICAgcmV0dXJuIGd0KGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnPj0nOlxuICAgICAgcmV0dXJuIGd0ZShhLCBiLCBsb29zZSlcblxuICAgIGNhc2UgJzwnOlxuICAgICAgcmV0dXJuIGx0KGEsIGIsIGxvb3NlKVxuXG4gICAgY2FzZSAnPD0nOlxuICAgICAgcmV0dXJuIGx0ZShhLCBiLCBsb29zZSlcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIG9wZXJhdG9yOiAke29wfWApXG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gY21wXG4iLCJjb25zdCBTZW1WZXIgPSByZXF1aXJlKCcuLi9jbGFzc2VzL3NlbXZlcicpXG5jb25zdCBjb21wYXJlID0gKGEsIGIsIGxvb3NlKSA9PlxuICBuZXcgU2VtVmVyKGEsIGxvb3NlKS5jb21wYXJlKG5ldyBTZW1WZXIoYiwgbG9vc2UpKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBhcmVcbiIsImNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgZXEgPSAoYSwgYiwgbG9vc2UpID0+IGNvbXBhcmUoYSwgYiwgbG9vc2UpID09PSAwXG5tb2R1bGUuZXhwb3J0cyA9IGVxXG4iLCJjb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGd0ID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+IDBcbm1vZHVsZS5leHBvcnRzID0gZ3RcbiIsImNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgZ3RlID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSA+PSAwXG5tb2R1bGUuZXhwb3J0cyA9IGd0ZVxuIiwiY29uc3QgY29tcGFyZSA9IHJlcXVpcmUoJy4vY29tcGFyZScpXG5jb25zdCBsdCA9IChhLCBiLCBsb29zZSkgPT4gY29tcGFyZShhLCBiLCBsb29zZSkgPCAwXG5tb2R1bGUuZXhwb3J0cyA9IGx0XG4iLCJjb25zdCBjb21wYXJlID0gcmVxdWlyZSgnLi9jb21wYXJlJylcbmNvbnN0IGx0ZSA9IChhLCBiLCBsb29zZSkgPT4gY29tcGFyZShhLCBiLCBsb29zZSkgPD0gMFxubW9kdWxlLmV4cG9ydHMgPSBsdGVcbiIsImNvbnN0IGNvbXBhcmUgPSByZXF1aXJlKCcuL2NvbXBhcmUnKVxuY29uc3QgbmVxID0gKGEsIGIsIGxvb3NlKSA9PiBjb21wYXJlKGEsIGIsIGxvb3NlKSAhPT0gMFxubW9kdWxlLmV4cG9ydHMgPSBuZXFcbiIsImNvbnN0IFJhbmdlID0gcmVxdWlyZSgnLi4vY2xhc3Nlcy9yYW5nZScpXG5jb25zdCBzYXRpc2ZpZXMgPSAodmVyc2lvbiwgcmFuZ2UsIG9wdGlvbnMpID0+IHtcbiAgdHJ5IHtcbiAgICByYW5nZSA9IG5ldyBSYW5nZShyYW5nZSwgb3B0aW9ucylcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICByZXR1cm4gcmFuZ2UudGVzdCh2ZXJzaW9uKVxufVxubW9kdWxlLmV4cG9ydHMgPSBzYXRpc2ZpZXNcbiIsIi8vIE5vdGU6IHRoaXMgaXMgdGhlIHNlbXZlci5vcmcgdmVyc2lvbiBvZiB0aGUgc3BlYyB0aGF0IGl0IGltcGxlbWVudHNcbi8vIE5vdCBuZWNlc3NhcmlseSB0aGUgcGFja2FnZSB2ZXJzaW9uIG9mIHRoaXMgY29kZS5cbmNvbnN0IFNFTVZFUl9TUEVDX1ZFUlNJT04gPSAnMi4wLjAnXG5cbmNvbnN0IE1BWF9MRU5HVEggPSAyNTZcbmNvbnN0IE1BWF9TQUZFX0lOVEVHRVIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fFxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyA5MDA3MTk5MjU0NzQwOTkxXG5cbi8vIE1heCBzYWZlIHNlZ21lbnQgbGVuZ3RoIGZvciBjb2VyY2lvbi5cbmNvbnN0IE1BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEggPSAxNlxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgU0VNVkVSX1NQRUNfVkVSU0lPTixcbiAgTUFYX0xFTkdUSCxcbiAgTUFYX1NBRkVfSU5URUdFUixcbiAgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSFxufVxuIiwiY29uc3QgZGVidWcgPSAoXG4gIHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JyAmJlxuICBwcm9jZXNzLmVudiAmJlxuICBwcm9jZXNzLmVudi5OT0RFX0RFQlVHICYmXG4gIC9cXGJzZW12ZXJcXGIvaS50ZXN0KHByb2Nlc3MuZW52Lk5PREVfREVCVUcpXG4pID8gKC4uLmFyZ3MpID0+IGNvbnNvbGUuZXJyb3IoJ1NFTVZFUicsIC4uLmFyZ3MpXG4gIDogKCkgPT4ge31cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJ1Z1xuIiwiY29uc3QgbnVtZXJpYyA9IC9eWzAtOV0rJC9cbmNvbnN0IGNvbXBhcmVJZGVudGlmaWVycyA9IChhLCBiKSA9PiB7XG4gIGNvbnN0IGFudW0gPSBudW1lcmljLnRlc3QoYSlcbiAgY29uc3QgYm51bSA9IG51bWVyaWMudGVzdChiKVxuXG4gIGlmIChhbnVtICYmIGJudW0pIHtcbiAgICBhID0gK2FcbiAgICBiID0gK2JcbiAgfVxuXG4gIHJldHVybiBhID09PSBiID8gMFxuICAgIDogKGFudW0gJiYgIWJudW0pID8gLTFcbiAgICA6IChibnVtICYmICFhbnVtKSA/IDFcbiAgICA6IGEgPCBiID8gLTFcbiAgICA6IDFcbn1cblxuY29uc3QgcmNvbXBhcmVJZGVudGlmaWVycyA9IChhLCBiKSA9PiBjb21wYXJlSWRlbnRpZmllcnMoYiwgYSlcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNvbXBhcmVJZGVudGlmaWVycyxcbiAgcmNvbXBhcmVJZGVudGlmaWVyc1xufVxuIiwiLy8gcGFyc2Ugb3V0IGp1c3QgdGhlIG9wdGlvbnMgd2UgY2FyZSBhYm91dCBzbyB3ZSBhbHdheXMgZ2V0IGEgY29uc2lzdGVudFxuLy8gb2JqIHdpdGgga2V5cyBpbiBhIGNvbnNpc3RlbnQgb3JkZXIuXG5jb25zdCBvcHRzID0gWydpbmNsdWRlUHJlcmVsZWFzZScsICdsb29zZScsICdydGwnXVxuY29uc3QgcGFyc2VPcHRpb25zID0gb3B0aW9ucyA9PlxuICAhb3B0aW9ucyA/IHt9XG4gIDogdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnID8geyBsb29zZTogdHJ1ZSB9XG4gIDogb3B0cy5maWx0ZXIoayA9PiBvcHRpb25zW2tdKS5yZWR1Y2UoKG9wdGlvbnMsIGspID0+IHtcbiAgICBvcHRpb25zW2tdID0gdHJ1ZVxuICAgIHJldHVybiBvcHRpb25zXG4gIH0sIHt9KVxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZU9wdGlvbnNcbiIsImNvbnN0IHsgTUFYX1NBRkVfQ09NUE9ORU5UX0xFTkdUSCB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKVxuY29uc3QgZGVidWcgPSByZXF1aXJlKCcuL2RlYnVnJylcbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9XG5cbi8vIFRoZSBhY3R1YWwgcmVnZXhwcyBnbyBvbiBleHBvcnRzLnJlXG5jb25zdCByZSA9IGV4cG9ydHMucmUgPSBbXVxuY29uc3Qgc3JjID0gZXhwb3J0cy5zcmMgPSBbXVxuY29uc3QgdCA9IGV4cG9ydHMudCA9IHt9XG5sZXQgUiA9IDBcblxuY29uc3QgY3JlYXRlVG9rZW4gPSAobmFtZSwgdmFsdWUsIGlzR2xvYmFsKSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gUisrXG4gIGRlYnVnKGluZGV4LCB2YWx1ZSlcbiAgdFtuYW1lXSA9IGluZGV4XG4gIHNyY1tpbmRleF0gPSB2YWx1ZVxuICByZVtpbmRleF0gPSBuZXcgUmVnRXhwKHZhbHVlLCBpc0dsb2JhbCA/ICdnJyA6IHVuZGVmaW5lZClcbn1cblxuLy8gVGhlIGZvbGxvd2luZyBSZWd1bGFyIEV4cHJlc3Npb25zIGNhbiBiZSB1c2VkIGZvciB0b2tlbml6aW5nLFxuLy8gdmFsaWRhdGluZywgYW5kIHBhcnNpbmcgU2VtVmVyIHZlcnNpb24gc3RyaW5ncy5cblxuLy8gIyMgTnVtZXJpYyBJZGVudGlmaWVyXG4vLyBBIHNpbmdsZSBgMGAsIG9yIGEgbm9uLXplcm8gZGlnaXQgZm9sbG93ZWQgYnkgemVybyBvciBtb3JlIGRpZ2l0cy5cblxuY3JlYXRlVG9rZW4oJ05VTUVSSUNJREVOVElGSUVSJywgJzB8WzEtOV1cXFxcZConKVxuY3JlYXRlVG9rZW4oJ05VTUVSSUNJREVOVElGSUVSTE9PU0UnLCAnWzAtOV0rJylcblxuLy8gIyMgTm9uLW51bWVyaWMgSWRlbnRpZmllclxuLy8gWmVybyBvciBtb3JlIGRpZ2l0cywgZm9sbG93ZWQgYnkgYSBsZXR0ZXIgb3IgaHlwaGVuLCBhbmQgdGhlbiB6ZXJvIG9yXG4vLyBtb3JlIGxldHRlcnMsIGRpZ2l0cywgb3IgaHlwaGVucy5cblxuY3JlYXRlVG9rZW4oJ05PTk5VTUVSSUNJREVOVElGSUVSJywgJ1xcXFxkKlthLXpBLVotXVthLXpBLVowLTktXSonKVxuXG4vLyAjIyBNYWluIFZlcnNpb25cbi8vIFRocmVlIGRvdC1zZXBhcmF0ZWQgbnVtZXJpYyBpZGVudGlmaWVycy5cblxuY3JlYXRlVG9rZW4oJ01BSU5WRVJTSU9OJywgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSXX0pXFxcXC5gICtcbiAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgIGAoJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUl19KWApXG5cbmNyZWF0ZVRva2VuKCdNQUlOVkVSU0lPTkxPT1NFJywgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfSlcXFxcLmAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCgke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSTE9PU0VdfSlgKVxuXG4vLyAjIyBQcmUtcmVsZWFzZSBWZXJzaW9uIElkZW50aWZpZXJcbi8vIEEgbnVtZXJpYyBpZGVudGlmaWVyLCBvciBhIG5vbi1udW1lcmljIGlkZW50aWZpZXIuXG5cbmNyZWF0ZVRva2VuKCdQUkVSRUxFQVNFSURFTlRJRklFUicsIGAoPzoke3NyY1t0Lk5VTUVSSUNJREVOVElGSUVSXVxufXwke3NyY1t0Lk5PTk5VTUVSSUNJREVOVElGSUVSXX0pYClcblxuY3JlYXRlVG9rZW4oJ1BSRVJFTEVBU0VJREVOVElGSUVSTE9PU0UnLCBgKD86JHtzcmNbdC5OVU1FUklDSURFTlRJRklFUkxPT1NFXVxufXwke3NyY1t0Lk5PTk5VTUVSSUNJREVOVElGSUVSXX0pYClcblxuLy8gIyMgUHJlLXJlbGVhc2UgVmVyc2lvblxuLy8gSHlwaGVuLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBkb3Qtc2VwYXJhdGVkIHByZS1yZWxlYXNlIHZlcnNpb25cbi8vIGlkZW50aWZpZXJzLlxuXG5jcmVhdGVUb2tlbignUFJFUkVMRUFTRScsIGAoPzotKCR7c3JjW3QuUFJFUkVMRUFTRUlERU5USUZJRVJdXG59KD86XFxcXC4ke3NyY1t0LlBSRVJFTEVBU0VJREVOVElGSUVSXX0pKikpYClcblxuY3JlYXRlVG9rZW4oJ1BSRVJFTEVBU0VMT09TRScsIGAoPzotPygke3NyY1t0LlBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdXG59KD86XFxcXC4ke3NyY1t0LlBSRVJFTEVBU0VJREVOVElGSUVSTE9PU0VdfSkqKSlgKVxuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YSBJZGVudGlmaWVyXG4vLyBBbnkgY29tYmluYXRpb24gb2YgZGlnaXRzLCBsZXR0ZXJzLCBvciBoeXBoZW5zLlxuXG5jcmVhdGVUb2tlbignQlVJTERJREVOVElGSUVSJywgJ1swLTlBLVphLXotXSsnKVxuXG4vLyAjIyBCdWlsZCBNZXRhZGF0YVxuLy8gUGx1cyBzaWduLCBmb2xsb3dlZCBieSBvbmUgb3IgbW9yZSBwZXJpb2Qtc2VwYXJhdGVkIGJ1aWxkIG1ldGFkYXRhXG4vLyBpZGVudGlmaWVycy5cblxuY3JlYXRlVG9rZW4oJ0JVSUxEJywgYCg/OlxcXFwrKCR7c3JjW3QuQlVJTERJREVOVElGSUVSXVxufSg/OlxcXFwuJHtzcmNbdC5CVUlMRElERU5USUZJRVJdfSkqKSlgKVxuXG4vLyAjIyBGdWxsIFZlcnNpb24gU3RyaW5nXG4vLyBBIG1haW4gdmVyc2lvbiwgZm9sbG93ZWQgb3B0aW9uYWxseSBieSBhIHByZS1yZWxlYXNlIHZlcnNpb24gYW5kXG4vLyBidWlsZCBtZXRhZGF0YS5cblxuLy8gTm90ZSB0aGF0IHRoZSBvbmx5IG1ham9yLCBtaW5vciwgcGF0Y2gsIGFuZCBwcmUtcmVsZWFzZSBzZWN0aW9ucyBvZlxuLy8gdGhlIHZlcnNpb24gc3RyaW5nIGFyZSBjYXB0dXJpbmcgZ3JvdXBzLiAgVGhlIGJ1aWxkIG1ldGFkYXRhIGlzIG5vdCBhXG4vLyBjYXB0dXJpbmcgZ3JvdXAsIGJlY2F1c2UgaXQgc2hvdWxkIG5vdCBldmVyIGJlIHVzZWQgaW4gdmVyc2lvblxuLy8gY29tcGFyaXNvbi5cblxuY3JlYXRlVG9rZW4oJ0ZVTExQTEFJTicsIGB2PyR7c3JjW3QuTUFJTlZFUlNJT05dXG59JHtzcmNbdC5QUkVSRUxFQVNFXX0/JHtcbiAgc3JjW3QuQlVJTERdfT9gKVxuXG5jcmVhdGVUb2tlbignRlVMTCcsIGBeJHtzcmNbdC5GVUxMUExBSU5dfSRgKVxuXG4vLyBsaWtlIGZ1bGwsIGJ1dCBhbGxvd3MgdjEuMi4zIGFuZCA9MS4yLjMsIHdoaWNoIHBlb3BsZSBkbyBzb21ldGltZXMuXG4vLyBhbHNvLCAxLjAuMGFscGhhMSAocHJlcmVsZWFzZSB3aXRob3V0IHRoZSBoeXBoZW4pIHdoaWNoIGlzIHByZXR0eVxuLy8gY29tbW9uIGluIHRoZSBucG0gcmVnaXN0cnkuXG5jcmVhdGVUb2tlbignTE9PU0VQTEFJTicsIGBbdj1cXFxcc10qJHtzcmNbdC5NQUlOVkVSU0lPTkxPT1NFXVxufSR7c3JjW3QuUFJFUkVMRUFTRUxPT1NFXX0/JHtcbiAgc3JjW3QuQlVJTERdfT9gKVxuXG5jcmVhdGVUb2tlbignTE9PU0UnLCBgXiR7c3JjW3QuTE9PU0VQTEFJTl19JGApXG5cbmNyZWF0ZVRva2VuKCdHVExUJywgJygoPzo8fD4pPz0/KScpXG5cbi8vIFNvbWV0aGluZyBsaWtlIFwiMi4qXCIgb3IgXCIxLjIueFwiLlxuLy8gTm90ZSB0aGF0IFwieC54XCIgaXMgYSB2YWxpZCB4UmFuZ2UgaWRlbnRpZmVyLCBtZWFuaW5nIFwiYW55IHZlcnNpb25cIlxuLy8gT25seSB0aGUgZmlyc3QgaXRlbSBpcyBzdHJpY3RseSByZXF1aXJlZC5cbmNyZWF0ZVRva2VuKCdYUkFOR0VJREVOVElGSUVSTE9PU0UnLCBgJHtzcmNbdC5OVU1FUklDSURFTlRJRklFUkxPT1NFXX18eHxYfFxcXFwqYClcbmNyZWF0ZVRva2VuKCdYUkFOR0VJREVOVElGSUVSJywgYCR7c3JjW3QuTlVNRVJJQ0lERU5USUZJRVJdfXx4fFh8XFxcXCpgKVxuXG5jcmVhdGVUb2tlbignWFJBTkdFUExBSU4nLCBgW3Y9XFxcXHNdKigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJdfSlgICtcbiAgICAgICAgICAgICAgICAgICBgKD86XFxcXC4oJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSXX0pYCArXG4gICAgICAgICAgICAgICAgICAgYCg/OlxcXFwuKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUl19KWAgK1xuICAgICAgICAgICAgICAgICAgIGAoPzoke3NyY1t0LlBSRVJFTEVBU0VdfSk/JHtcbiAgICAgICAgICAgICAgICAgICAgIHNyY1t0LkJVSUxEXX0/YCArXG4gICAgICAgICAgICAgICAgICAgYCk/KT9gKVxuXG5jcmVhdGVUb2tlbignWFJBTkdFUExBSU5MT09TRScsIGBbdj1cXFxcc10qKCR7c3JjW3QuWFJBTkdFSURFTlRJRklFUkxPT1NFXX0pYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKD86XFxcXC4oJHtzcmNbdC5YUkFOR0VJREVOVElGSUVSTE9PU0VdfSlgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAoPzpcXFxcLigke3NyY1t0LlhSQU5HRUlERU5USUZJRVJMT09TRV19KWAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCg/OiR7c3JjW3QuUFJFUkVMRUFTRUxPT1NFXX0pPyR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1t0LkJVSUxEXX0/YCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgKT8pP2ApXG5cbmNyZWF0ZVRva2VuKCdYUkFOR0UnLCBgXiR7c3JjW3QuR1RMVF19XFxcXHMqJHtzcmNbdC5YUkFOR0VQTEFJTl19JGApXG5jcmVhdGVUb2tlbignWFJBTkdFTE9PU0UnLCBgXiR7c3JjW3QuR1RMVF19XFxcXHMqJHtzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXX0kYClcblxuLy8gQ29lcmNpb24uXG4vLyBFeHRyYWN0IGFueXRoaW5nIHRoYXQgY291bGQgY29uY2VpdmFibHkgYmUgYSBwYXJ0IG9mIGEgdmFsaWQgc2VtdmVyXG5jcmVhdGVUb2tlbignQ09FUkNFJywgYCR7JyhefFteXFxcXGRdKScgK1xuICAgICAgICAgICAgICAnKFxcXFxkezEsJ30ke01BWF9TQUZFX0NPTVBPTkVOVF9MRU5HVEh9fSlgICtcbiAgICAgICAgICAgICAgYCg/OlxcXFwuKFxcXFxkezEsJHtNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RIfX0pKT9gICtcbiAgICAgICAgICAgICAgYCg/OlxcXFwuKFxcXFxkezEsJHtNQVhfU0FGRV9DT01QT05FTlRfTEVOR1RIfX0pKT9gICtcbiAgICAgICAgICAgICAgYCg/OiR8W15cXFxcZF0pYClcbmNyZWF0ZVRva2VuKCdDT0VSQ0VSVEwnLCBzcmNbdC5DT0VSQ0VdLCB0cnVlKVxuXG4vLyBUaWxkZSByYW5nZXMuXG4vLyBNZWFuaW5nIGlzIFwicmVhc29uYWJseSBhdCBvciBncmVhdGVyIHRoYW5cIlxuY3JlYXRlVG9rZW4oJ0xPTkVUSUxERScsICcoPzp+Pj8pJylcblxuY3JlYXRlVG9rZW4oJ1RJTERFVFJJTScsIGAoXFxcXHMqKSR7c3JjW3QuTE9ORVRJTERFXX1cXFxccytgLCB0cnVlKVxuZXhwb3J0cy50aWxkZVRyaW1SZXBsYWNlID0gJyQxfidcblxuY3JlYXRlVG9rZW4oJ1RJTERFJywgYF4ke3NyY1t0LkxPTkVUSUxERV19JHtzcmNbdC5YUkFOR0VQTEFJTl19JGApXG5jcmVhdGVUb2tlbignVElMREVMT09TRScsIGBeJHtzcmNbdC5MT05FVElMREVdfSR7c3JjW3QuWFJBTkdFUExBSU5MT09TRV19JGApXG5cbi8vIENhcmV0IHJhbmdlcy5cbi8vIE1lYW5pbmcgaXMgXCJhdCBsZWFzdCBhbmQgYmFja3dhcmRzIGNvbXBhdGlibGUgd2l0aFwiXG5jcmVhdGVUb2tlbignTE9ORUNBUkVUJywgJyg/OlxcXFxeKScpXG5cbmNyZWF0ZVRva2VuKCdDQVJFVFRSSU0nLCBgKFxcXFxzKikke3NyY1t0LkxPTkVDQVJFVF19XFxcXHMrYCwgdHJ1ZSlcbmV4cG9ydHMuY2FyZXRUcmltUmVwbGFjZSA9ICckMV4nXG5cbmNyZWF0ZVRva2VuKCdDQVJFVCcsIGBeJHtzcmNbdC5MT05FQ0FSRVRdfSR7c3JjW3QuWFJBTkdFUExBSU5dfSRgKVxuY3JlYXRlVG9rZW4oJ0NBUkVUTE9PU0UnLCBgXiR7c3JjW3QuTE9ORUNBUkVUXX0ke3NyY1t0LlhSQU5HRVBMQUlOTE9PU0VdfSRgKVxuXG4vLyBBIHNpbXBsZSBndC9sdC9lcSB0aGluZywgb3IganVzdCBcIlwiIHRvIGluZGljYXRlIFwiYW55IHZlcnNpb25cIlxuY3JlYXRlVG9rZW4oJ0NPTVBBUkFUT1JMT09TRScsIGBeJHtzcmNbdC5HVExUXX1cXFxccyooJHtzcmNbdC5MT09TRVBMQUlOXX0pJHxeJGApXG5jcmVhdGVUb2tlbignQ09NUEFSQVRPUicsIGBeJHtzcmNbdC5HVExUXX1cXFxccyooJHtzcmNbdC5GVUxMUExBSU5dfSkkfF4kYClcblxuLy8gQW4gZXhwcmVzc2lvbiB0byBzdHJpcCBhbnkgd2hpdGVzcGFjZSBiZXR3ZWVuIHRoZSBndGx0IGFuZCB0aGUgdGhpbmdcbi8vIGl0IG1vZGlmaWVzLCBzbyB0aGF0IGA+IDEuMi4zYCA9PT4gYD4xLjIuM2BcbmNyZWF0ZVRva2VuKCdDT01QQVJBVE9SVFJJTScsIGAoXFxcXHMqKSR7c3JjW3QuR1RMVF1cbn1cXFxccyooJHtzcmNbdC5MT09TRVBMQUlOXX18JHtzcmNbdC5YUkFOR0VQTEFJTl19KWAsIHRydWUpXG5leHBvcnRzLmNvbXBhcmF0b3JUcmltUmVwbGFjZSA9ICckMSQyJDMnXG5cbi8vIFNvbWV0aGluZyBsaWtlIGAxLjIuMyAtIDEuMi40YFxuLy8gTm90ZSB0aGF0IHRoZXNlIGFsbCB1c2UgdGhlIGxvb3NlIGZvcm0sIGJlY2F1c2UgdGhleSdsbCBiZVxuLy8gY2hlY2tlZCBhZ2FpbnN0IGVpdGhlciB0aGUgc3RyaWN0IG9yIGxvb3NlIGNvbXBhcmF0b3IgZm9ybVxuLy8gbGF0ZXIuXG5jcmVhdGVUb2tlbignSFlQSEVOUkFOR0UnLCBgXlxcXFxzKigke3NyY1t0LlhSQU5HRVBMQUlOXX0pYCArXG4gICAgICAgICAgICAgICAgICAgYFxcXFxzKy1cXFxccytgICtcbiAgICAgICAgICAgICAgICAgICBgKCR7c3JjW3QuWFJBTkdFUExBSU5dfSlgICtcbiAgICAgICAgICAgICAgICAgICBgXFxcXHMqJGApXG5cbmNyZWF0ZVRva2VuKCdIWVBIRU5SQU5HRUxPT1NFJywgYF5cXFxccyooJHtzcmNbdC5YUkFOR0VQTEFJTkxPT1NFXX0pYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgXFxcXHMrLVxcXFxzK2AgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCgke3NyY1t0LlhSQU5HRVBMQUlOTE9PU0VdfSlgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBcXFxccyokYClcblxuLy8gU3RhciByYW5nZXMgYmFzaWNhbGx5IGp1c3QgYWxsb3cgYW55dGhpbmcgYXQgYWxsLlxuY3JlYXRlVG9rZW4oJ1NUQVInLCAnKDx8Pik/PT9cXFxccypcXFxcKicpXG4vLyA+PTAuMC4wIGlzIGxpa2UgYSBzdGFyXG5jcmVhdGVUb2tlbignR1RFMCcsICdeXFxcXHMqPj1cXFxccyowXFwuMFxcLjBcXFxccyokJylcbmNyZWF0ZVRva2VuKCdHVEUwUFJFJywgJ15cXFxccyo+PVxcXFxzKjBcXC4wXFwuMC0wXFxcXHMqJCcpXG4iLCJleHBvcnQgdmFyIFNES0Vycm9yQ29kZTtcbihmdW5jdGlvbiAoU0RLRXJyb3JDb2RlKSB7XG4gICAgU0RLRXJyb3JDb2RlW1wiTWlzc2luZ0FwaUtleVwiXSA9IFwiTUlTU0lOR19BUElfS0VZXCI7XG4gICAgU0RLRXJyb3JDb2RlW1wiTW9kYWxOb3RSZWFkeVwiXSA9IFwiTU9EQUxfTk9UX1JFQURZXCI7XG4gICAgU0RLRXJyb3JDb2RlW1wiTWFsZm9ybWVkUmVzcG9uc2VcIl0gPSBcIk1BTEZPUk1FRF9SRVNQT05TRVwiO1xuICAgIFNES0Vycm9yQ29kZVtcIkludmFsaWRBcmd1bWVudFwiXSA9IFwiSU5WQUxJRF9BUkdVTUVOVFwiO1xuICAgIFNES0Vycm9yQ29kZVtcIkV4dGVuc2lvbk5vdEluaXRpYWxpemVkXCJdID0gXCJFWFRFTlNJT05fTk9UX0lOSVRJQUxJWkVEXCI7XG4gICAgU0RLRXJyb3JDb2RlW1wiV2ViQXV0aG5Ob3RTdXBwb3J0ZWRcIl0gPSBcIldFQkFVVEhOX05PVF9TVVBQT1JURURcIjtcbiAgICBTREtFcnJvckNvZGVbXCJJbmNvbXBhdGlibGVFeHRlbnNpb25zXCJdID0gXCJJTkNPTVBBVElCTEVfRVhURU5TSU9OU1wiO1xuICAgIFNES0Vycm9yQ29kZVtcIldlYkF1dGhuQ3JlYXRlQ3JlZGVudGlhbEVycm9yXCJdID0gXCJXRUJBVVRITl9DUkVBVEVfQ1JFREVOVElBTF9FUlJPUlwiO1xufSkoU0RLRXJyb3JDb2RlIHx8IChTREtFcnJvckNvZGUgPSB7fSkpO1xuZXhwb3J0IHZhciBTREtXYXJuaW5nQ29kZTtcbihmdW5jdGlvbiAoU0RLV2FybmluZ0NvZGUpIHtcbiAgICBTREtXYXJuaW5nQ29kZVtcIlN5bmNXZWIzTWV0aG9kXCJdID0gXCJTWU5DX1dFQjNfTUVUSE9EXCI7XG4gICAgU0RLV2FybmluZ0NvZGVbXCJEdXBsaWNhdGVJZnJhbWVcIl0gPSBcIkRVUExJQ0FURV9JRlJBTUVcIjtcbiAgICBTREtXYXJuaW5nQ29kZVtcIlJlYWN0TmF0aXZlRW5kcG9pbnRDb25maWd1cmF0aW9uXCJdID0gXCJSRUFDVF9OQVRJVkVfRU5EUE9JTlRfQ09ORklHVVJBVElPTlwiO1xuICAgIFNES1dhcm5pbmdDb2RlW1wiRGVwcmVjYXRpb25Ob3RpY2VcIl0gPSBcIkRFUFJFQ0FUSU9OX05PVElDRVwiO1xufSkoU0RLV2FybmluZ0NvZGUgfHwgKFNES1dhcm5pbmdDb2RlID0ge30pKTtcbmV4cG9ydCB2YXIgUlBDRXJyb3JDb2RlO1xuKGZ1bmN0aW9uIChSUENFcnJvckNvZGUpIHtcbiAgICAvLyBTdGFuZGFyZCBKU09OIFJQQyAyLjAgRXJyb3IgQ29kZXNcbiAgICBSUENFcnJvckNvZGVbUlBDRXJyb3JDb2RlW1wiUGFyc2VFcnJvclwiXSA9IC0zMjcwMF0gPSBcIlBhcnNlRXJyb3JcIjtcbiAgICBSUENFcnJvckNvZGVbUlBDRXJyb3JDb2RlW1wiSW52YWxpZFJlcXVlc3RcIl0gPSAtMzI2MDBdID0gXCJJbnZhbGlkUmVxdWVzdFwiO1xuICAgIFJQQ0Vycm9yQ29kZVtSUENFcnJvckNvZGVbXCJNZXRob2ROb3RGb3VuZFwiXSA9IC0zMjYwMV0gPSBcIk1ldGhvZE5vdEZvdW5kXCI7XG4gICAgUlBDRXJyb3JDb2RlW1JQQ0Vycm9yQ29kZVtcIkludmFsaWRQYXJhbXNcIl0gPSAtMzI2MDJdID0gXCJJbnZhbGlkUGFyYW1zXCI7XG4gICAgUlBDRXJyb3JDb2RlW1JQQ0Vycm9yQ29kZVtcIkludGVybmFsRXJyb3JcIl0gPSAtMzI2MDNdID0gXCJJbnRlcm5hbEVycm9yXCI7XG4gICAgLy8gQ3VzdG9tIFJQQyBFcnJvciBDb2Rlc1xuICAgIFJQQ0Vycm9yQ29kZVtSUENFcnJvckNvZGVbXCJNYWdpY0xpbmtGYWlsZWRWZXJpZmljYXRpb25cIl0gPSAtMTAwMDBdID0gXCJNYWdpY0xpbmtGYWlsZWRWZXJpZmljYXRpb25cIjtcbiAgICBSUENFcnJvckNvZGVbUlBDRXJyb3JDb2RlW1wiTWFnaWNMaW5rRXhwaXJlZFwiXSA9IC0xMDAwMV0gPSBcIk1hZ2ljTGlua0V4cGlyZWRcIjtcbiAgICBSUENFcnJvckNvZGVbUlBDRXJyb3JDb2RlW1wiTWFnaWNMaW5rUmF0ZUxpbWl0ZWRcIl0gPSAtMTAwMDJdID0gXCJNYWdpY0xpbmtSYXRlTGltaXRlZFwiO1xuICAgIFJQQ0Vycm9yQ29kZVtSUENFcnJvckNvZGVbXCJNYWdpY0xpbmtJbnZhbGlkUmVkaXJlY3RVUkxcIl0gPSAtMTAwMDZdID0gXCJNYWdpY0xpbmtJbnZhbGlkUmVkaXJlY3RVUkxcIjtcbiAgICBSUENFcnJvckNvZGVbUlBDRXJyb3JDb2RlW1wiVXNlckFscmVhZHlMb2dnZWRJblwiXSA9IC0xMDAwM10gPSBcIlVzZXJBbHJlYWR5TG9nZ2VkSW5cIjtcbiAgICBSUENFcnJvckNvZGVbUlBDRXJyb3JDb2RlW1wiVXBkYXRlRW1haWxGYWlsZWRcIl0gPSAtMTAwMDRdID0gXCJVcGRhdGVFbWFpbEZhaWxlZFwiO1xuICAgIFJQQ0Vycm9yQ29kZVtSUENFcnJvckNvZGVbXCJVc2VyUmVxdWVzdEVkaXRFbWFpbFwiXSA9IC0xMDAwNV0gPSBcIlVzZXJSZXF1ZXN0RWRpdEVtYWlsXCI7XG59KShSUENFcnJvckNvZGUgfHwgKFJQQ0Vycm9yQ29kZSA9IHt9KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1leGNlcHRpb24tdHlwZXMuanMubWFwIiwiLy8gLS0tIFBheWxvYWQgbWV0aG9kc1xuLyoqXG4gKiBFbnVtIG9mIEpTT04gUlBDIG1ldGhvZHMgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIE1hZ2ljIFNESyBhdXRoZW50aWNhdGlvblxuICogcmVsYXllci5cbiAqL1xuZXhwb3J0IHZhciBNYWdpY1BheWxvYWRNZXRob2Q7XG4oZnVuY3Rpb24gKE1hZ2ljUGF5bG9hZE1ldGhvZCkge1xuICAgIE1hZ2ljUGF5bG9hZE1ldGhvZFtcIkxvZ2luV2l0aE1hZ2ljTGlua1wiXSA9IFwibWFnaWNfYXV0aF9sb2dpbl93aXRoX21hZ2ljX2xpbmtcIjtcbiAgICBNYWdpY1BheWxvYWRNZXRob2RbXCJMb2dpbldpdGhDcmVkZW50aWFsXCJdID0gXCJtYWdpY19hdXRoX2xvZ2luX3dpdGhfY3JlZGVudGlhbFwiO1xuICAgIE1hZ2ljUGF5bG9hZE1ldGhvZFtcIkdldElkVG9rZW5cIl0gPSBcIm1hZ2ljX2F1dGhfZ2V0X2lkX3Rva2VuXCI7XG4gICAgTWFnaWNQYXlsb2FkTWV0aG9kW1wiR2VuZXJhdGVJZFRva2VuXCJdID0gXCJtYWdpY19hdXRoX2dlbmVyYXRlX2lkX3Rva2VuXCI7XG4gICAgTWFnaWNQYXlsb2FkTWV0aG9kW1wiR2V0TWV0YWRhdGFcIl0gPSBcIm1hZ2ljX2F1dGhfZ2V0X21ldGFkYXRhXCI7XG4gICAgTWFnaWNQYXlsb2FkTWV0aG9kW1wiSXNMb2dnZWRJblwiXSA9IFwibWFnaWNfYXV0aF9pc19sb2dnZWRfaW5cIjtcbiAgICBNYWdpY1BheWxvYWRNZXRob2RbXCJMb2dvdXRcIl0gPSBcIm1hZ2ljX2F1dGhfbG9nb3V0XCI7XG4gICAgTWFnaWNQYXlsb2FkTWV0aG9kW1wiVXBkYXRlRW1haWxcIl0gPSBcIm1hZ2ljX2F1dGhfdXBkYXRlX2VtYWlsXCI7XG4gICAgTWFnaWNQYXlsb2FkTWV0aG9kW1wiV2ViQXV0aG5SZWdpc3RyYXRpb25TdGFydFwiXSA9IFwibWFnaWNfYXV0aF93ZWJhdXRobl9yZWdpc3RyYXRpb25fc3RhcnRcIjtcbiAgICBNYWdpY1BheWxvYWRNZXRob2RbXCJSZWdpc3RlcldpdGhXZWJBdXRoXCJdID0gXCJtYWdpY19hdXRoX3dlYmF1dGhuX3JlZ2lzdGVyXCI7XG4gICAgTWFnaWNQYXlsb2FkTWV0aG9kW1wiTG9naW5XaXRoV2ViQXV0aG5cIl0gPSBcIm1hZ2ljX2F1dGhfbG9naW5fd2l0aF93ZWJfYXV0aG5cIjtcbiAgICBNYWdpY1BheWxvYWRNZXRob2RbXCJXZWJBdXRobkxvZ2luVmVyZml5XCJdID0gXCJtYWdpY19hdXRoX2xvZ2luX3dpdGhfd2ViYXV0aG5fdmVyaWZ5XCI7XG4gICAgTWFnaWNQYXlsb2FkTWV0aG9kW1wiR2V0V2ViQXV0aG5JbmZvXCJdID0gXCJtYWdpY191c2VyX2dldF93ZWJhdXRobl9jcmVkZW50aWFsc1wiO1xuICAgIE1hZ2ljUGF5bG9hZE1ldGhvZFtcIlVwZGF0ZVdlYkF1dGhuSW5mb1wiXSA9IFwibWFnaWNfdXNlcl91cGRhdGVfd2ViYXV0aG5cIjtcbiAgICBNYWdpY1BheWxvYWRNZXRob2RbXCJVbnJlZ2lzdGVyV2ViQXV0aERldmljZVwiXSA9IFwibWFnaWNfdXNlcl91bnJlZ2lzdGVyX3dlYmF1dGhuXCI7XG4gICAgTWFnaWNQYXlsb2FkTWV0aG9kW1wiUmVnaXN0ZXJXZWJBdXRoRGV2aWNlU3RhcnRcIl0gPSBcIm1hZ2ljX2F1dGhfcmVnaXN0ZXJfd2ViYXV0aG5fZGV2aWNlX3N0YXJ0XCI7XG4gICAgTWFnaWNQYXlsb2FkTWV0aG9kW1wiUmVnaXN0ZXJXZWJBdXRoRGV2aWNlXCJdID0gXCJtYWdpY19hdXRoX3JlZ2lzdGVyX3dlYmF1dGhuX2RldmljZVwiO1xufSkoTWFnaWNQYXlsb2FkTWV0aG9kIHx8IChNYWdpY1BheWxvYWRNZXRob2QgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9anNvbi1ycGMtdHlwZXMuanMubWFwIiwiZXhwb3J0IHZhciBNYWdpY0luY29taW5nV2luZG93TWVzc2FnZTtcbihmdW5jdGlvbiAoTWFnaWNJbmNvbWluZ1dpbmRvd01lc3NhZ2UpIHtcbiAgICBNYWdpY0luY29taW5nV2luZG93TWVzc2FnZVtcIk1BR0lDX0hBTkRMRV9SRVNQT05TRVwiXSA9IFwiTUFHSUNfSEFORExFX1JFU1BPTlNFXCI7XG4gICAgTWFnaWNJbmNvbWluZ1dpbmRvd01lc3NhZ2VbXCJNQUdJQ19PVkVSTEFZX1JFQURZXCJdID0gXCJNQUdJQ19PVkVSTEFZX1JFQURZXCI7XG4gICAgTWFnaWNJbmNvbWluZ1dpbmRvd01lc3NhZ2VbXCJNQUdJQ19TSE9XX09WRVJMQVlcIl0gPSBcIk1BR0lDX1NIT1dfT1ZFUkxBWVwiO1xuICAgIE1hZ2ljSW5jb21pbmdXaW5kb3dNZXNzYWdlW1wiTUFHSUNfSElERV9PVkVSTEFZXCJdID0gXCJNQUdJQ19ISURFX09WRVJMQVlcIjtcbiAgICBNYWdpY0luY29taW5nV2luZG93TWVzc2FnZVtcIk1BR0lDX0hBTkRMRV9FVkVOVFwiXSA9IFwiTUFHSUNfSEFORExFX0VWRU5UXCI7XG59KShNYWdpY0luY29taW5nV2luZG93TWVzc2FnZSB8fCAoTWFnaWNJbmNvbWluZ1dpbmRvd01lc3NhZ2UgPSB7fSkpO1xuZXhwb3J0IHZhciBNYWdpY091dGdvaW5nV2luZG93TWVzc2FnZTtcbihmdW5jdGlvbiAoTWFnaWNPdXRnb2luZ1dpbmRvd01lc3NhZ2UpIHtcbiAgICBNYWdpY091dGdvaW5nV2luZG93TWVzc2FnZVtcIk1BR0lDX0hBTkRMRV9SRVFVRVNUXCJdID0gXCJNQUdJQ19IQU5ETEVfUkVRVUVTVFwiO1xufSkoTWFnaWNPdXRnb2luZ1dpbmRvd01lc3NhZ2UgfHwgKE1hZ2ljT3V0Z29pbmdXaW5kb3dNZXNzYWdlID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lc3NhZ2UtdHlwZXMuanMubWFwIiwiLy8gT25seSByZS1leHBvcnQgdHlwZXMgdGhhdCBhcmUgaW50ZW5kZWQgZm9yIHRoZSBwdWJsaWMgQVBJIGZyb20gdGhpcyBmaWxlLlxuZXhwb3J0ICogZnJvbSAnLi9jb3JlL2pzb24tcnBjLXR5cGVzJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9tZXNzYWdlLXR5cGVzJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZS9leGNlcHRpb24tdHlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2R1bGVzL3JwYy1wcm92aWRlci10eXBlcyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgdmFyIEV0aENoYWluVHlwZTtcbihmdW5jdGlvbiAoRXRoQ2hhaW5UeXBlKSB7XG4gICAgRXRoQ2hhaW5UeXBlW1wiSGFybW9ueVwiXSA9IFwiSEFSTU9OWVwiO1xufSkoRXRoQ2hhaW5UeXBlIHx8IChFdGhDaGFpblR5cGUgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnBjLXByb3ZpZGVyLXR5cGVzLmpzLm1hcCIsIi8qIVxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSAyMDE4IEFydHVyYXMgTW9sY2Fub3ZhcyA8YS5tb2xjYW5vdmFzQGdtYWlsLmNvbT5cblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbmNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblNPRlRXQVJFLlxuXG4qL1xuXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gZmFjdG9yeShleHBvcnRzKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKCdsb2NhbGZvcmFnZS1kcml2ZXItbWVtb3J5JywgWydleHBvcnRzJ10sIGZhY3RvcnkpIDpcbiAgICBmYWN0b3J5KGdsb2JhbC5Mb2NhbGZvcmFnZURyaXZlck1lbW9yeSA9IHt9KTtcbn0odHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uIChleHBvcnRzKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBfZHJpdmVyID0gJ2xvY2FsZm9yYWdlLWRyaXZlci1tZW1vcnknO1xuXG4gICAgLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG4gICAgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuICAgIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG4gICAgVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG4gICAgS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG4gICAgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuICAgIE1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG4gICAgU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbiAgICBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxuICAgIGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgICAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxuXG4gICAgLyohXG4gICAgTUlUIExpY2Vuc2VcblxuICAgIENvcHlyaWdodCAoYykgMjAxOCBBcnR1cmFzIE1vbGNhbm92YXMgPGEubW9sY2Fub3Zhc0BnbWFpbC5jb20+XG5cbiAgICBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gICAgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICAgIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAgICB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gICAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gICAgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICAgIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gICAgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gICAgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gICAgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICAgIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gICAgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAgICBTT0ZUV0FSRS5cblxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBYnN0cmFjdHMgY29uc3RydWN0aW5nIGEgQmxvYiBvYmplY3QsIHNvIGl0IGFsc28gd29ya3MgaW4gb2xkZXJcbiAgICAgKiBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIG5hdGl2ZSBCbG9iIGNvbnN0cnVjdG9yLiAoaS5lLlxuICAgICAqIG9sZCBRdFdlYktpdCB2ZXJzaW9ucywgYXQgbGVhc3QpLlxuICAgICAqIEFic3RyYWN0cyBjb25zdHJ1Y3RpbmcgYSBCbG9iIG9iamVjdCwgc28gaXQgYWxzbyB3b3JrcyBpbiBvbGRlclxuICAgICAqIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aGUgbmF0aXZlIEJsb2IgY29uc3RydWN0b3IuIChpLmUuXG4gICAgICogb2xkIFF0V2ViS2l0IHZlcnNpb25zLCBhdCBsZWFzdCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcGFydHNcbiAgICAgKiBAcGFyYW0gcHJvcGVydGllc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUJsb2IocGFydHMsIHByb3BlcnRpZXMpIHtcbiAgICAgICAgLyogZ2xvYmFsIEJsb2JCdWlsZGVyLE1TQmxvYkJ1aWxkZXIsTW96QmxvYkJ1aWxkZXIsV2ViS2l0QmxvYkJ1aWxkZXIgKi9cbiAgICAgICAgcGFydHMgPSBwYXJ0cyB8fCBbXTtcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEJsb2IocGFydHMsIHByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5uYW1lICE9PSAnVHlwZUVycm9yJykge1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3RzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gICAgICAgICAgICB2YXIgQnVpbGRlciA9IHR5cGVvZiBCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBCbG9iQnVpbGRlclxuICAgICAgICAgICAgICAgIDogdHlwZW9mIE1TQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gTVNCbG9iQnVpbGRlclxuICAgICAgICAgICAgICAgICAgICA6IHR5cGVvZiBNb3pCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBNb3pCbG9iQnVpbGRlclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBXZWJLaXRCbG9iQnVpbGRlcjtcbiAgICAgICAgICAgIHZhciBidWlsZGVyID0gbmV3IEJ1aWxkZXIoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBidWlsZGVyLmFwcGVuZChwYXJ0c1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYnVpbGRlci5nZXRCbG9iKHByb3BlcnRpZXMudHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgQkxPQl9UWVBFX1BSRUZJWF9SRUdFWCA9IC9efn5sb2NhbF9mb3JhZ2VfdHlwZX4oW15+XSspfi87XG4gICAgdmFyIFNFUklBTElaRURfTUFSS0VSX0xFTkdUSCA9IFwiX19sZnNjX186XCIgLyogU0VSSUFMSVpFRF9NQVJLRVIgKi8ubGVuZ3RoO1xuICAgIHZhciBUWVBFX1NFUklBTElaRURfTUFSS0VSX0xFTkdUSCA9IFNFUklBTElaRURfTUFSS0VSX0xFTkdUSCArIFwiYXJiZlwiIC8qIFRZUEVfQVJSQVlCVUZGRVIgKi8ubGVuZ3RoO1xuICAgIC8vdHNsaW50OmRpc2FibGU6bm8tbWFnaWMtbnVtYmVycyBuby1iaXR3aXNlIHByZWZlci1zd2l0Y2ggbm8tdW5ib3VuZC1tZXRob2RcbiAgICB2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICAgIGZ1bmN0aW9uIHN0cmluZ1RvQnVmZmVyKHNlcmlhbGl6ZWRTdHJpbmcpIHtcbiAgICAgICAgLy8gRmlsbCB0aGUgc3RyaW5nIGludG8gYSBBcnJheUJ1ZmZlci5cbiAgICAgICAgdmFyIGJ1ZmZlckxlbmd0aCA9IHNlcmlhbGl6ZWRTdHJpbmcubGVuZ3RoICogMC43NTtcbiAgICAgICAgdmFyIGxlbiA9IHNlcmlhbGl6ZWRTdHJpbmcubGVuZ3RoO1xuICAgICAgICBpZiAoc2VyaWFsaXplZFN0cmluZ1tzZXJpYWxpemVkU3RyaW5nLmxlbmd0aCAtIDFdID09PSAnPScpIHtcbiAgICAgICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZWRTdHJpbmdbc2VyaWFsaXplZFN0cmluZy5sZW5ndGggLSAyXSA9PT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpO1xuICAgICAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgICAgICAgICAgdmFyIGVuY29kZWQxID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCIgLyogQkFTRV9DSEFSUyAqLy5pbmRleE9mKHNlcmlhbGl6ZWRTdHJpbmdbaV0pO1xuICAgICAgICAgICAgdmFyIGVuY29kZWQyID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCIgLyogQkFTRV9DSEFSUyAqLy5pbmRleE9mKHNlcmlhbGl6ZWRTdHJpbmdbaSArIDFdKTtcbiAgICAgICAgICAgIHZhciBlbmNvZGVkMyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiIC8qIEJBU0VfQ0hBUlMgKi8uaW5kZXhPZihzZXJpYWxpemVkU3RyaW5nW2kgKyAyXSk7XG4gICAgICAgICAgICB2YXIgZW5jb2RlZDQgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIiAvKiBCQVNFX0NIQVJTICovLmluZGV4T2Yoc2VyaWFsaXplZFN0cmluZ1tpICsgM10pO1xuICAgICAgICAgICAgYnl0ZXNbcCsrXSA9IChlbmNvZGVkMSA8PCAyKSB8IChlbmNvZGVkMiA+PiA0KTtcbiAgICAgICAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQyICYgMTUpIDw8IDQpIHwgKGVuY29kZWQzID4+IDIpO1xuICAgICAgICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDMgJiAzKSA8PCA2KSB8IChlbmNvZGVkNCAmIDYzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIGJ1ZmZlciB0byBhIHN0cmluZyB0byBzdG9yZSwgc2VyaWFsaXplZCwgaW4gdGhlIGJhY2tlbmRcbiAgICAgKiBzdG9yYWdlIGxpYnJhcnkuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYnVmZmVyVG9TdHJpbmcoYnVmZmVyKSB7XG4gICAgICAgIC8vIGJhc2U2NC1hcnJheWJ1ZmZlclxuICAgICAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgICB2YXIgYmFzZTY0U3RyaW5nID0gJyc7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgICAgIC8qanNsaW50IGJpdHdpc2U6IHRydWUgKi9cbiAgICAgICAgICAgIGJhc2U2NFN0cmluZyArPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIiAvKiBCQVNFX0NIQVJTICovW2J5dGVzW2ldID4+IDJdO1xuICAgICAgICAgICAgYmFzZTY0U3RyaW5nICs9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiIC8qIEJBU0VfQ0hBUlMgKi9bKChieXRlc1tpXSAmIDMpIDw8IDQpIHwgKGJ5dGVzW2kgKyAxXSA+PiA0KV07XG4gICAgICAgICAgICBiYXNlNjRTdHJpbmcgKz1cbiAgICAgICAgICAgICAgICBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIiAvKiBCQVNFX0NIQVJTICovWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07XG4gICAgICAgICAgICBiYXNlNjRTdHJpbmcgKz0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCIgLyogQkFTRV9DSEFSUyAqL1tieXRlc1tpICsgMl0gJiA2M107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ5dGVzLmxlbmd0aCAlIDMgPT09IDIpIHtcbiAgICAgICAgICAgIGJhc2U2NFN0cmluZyA9IGJhc2U2NFN0cmluZy5zdWJzdHJpbmcoMCwgYmFzZTY0U3RyaW5nLmxlbmd0aCAtIDEpICsgJz0nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJ5dGVzLmxlbmd0aCAlIDMgPT09IDEpIHtcbiAgICAgICAgICAgIGJhc2U2NFN0cmluZyA9IGJhc2U2NFN0cmluZy5zdWJzdHJpbmcoMCwgYmFzZTY0U3RyaW5nLmxlbmd0aCAtIDIpICsgJz09JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmFzZTY0U3RyaW5nO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemUgYSB2YWx1ZSwgYWZ0ZXJ3YXJkcyBleGVjdXRpbmcgYSBjYWxsYmFjayAod2hpY2ggdXN1YWxseVxuICAgICAqIGluc3RydWN0cyB0aGUgYHNldEl0ZW0oKWAgY2FsbGJhY2svcHJvbWlzZSB0byBiZSBleGVjdXRlZCkuIFRoaXMgaXMgaG93XG4gICAgICogd2Ugc3RvcmUgYmluYXJ5IGRhdGEgd2l0aCBsb2NhbFN0b3JhZ2UuXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2VyaWFsaXplKHZhbHVlLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgdmFsdWVUeXBlID0gJyc7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWVUeXBlID0gdG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2Fubm90IHVzZSBgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcmAgb3Igc3VjaCBoZXJlLCBhcyB0aGVzZVxuICAgICAgICAvLyBjaGVja3MgZmFpbCB3aGVuIHJ1bm5pbmcgdGhlIHRlc3RzIHVzaW5nIGNhc3Blci5qcy4uLlxuICAgICAgICBpZiAodmFsdWUgJiYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyB8fFxuICAgICAgICAgICAgKHZhbHVlLmJ1ZmZlciAmJiB0b1N0cmluZy5jYWxsKHZhbHVlLmJ1ZmZlcikgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpKSkge1xuICAgICAgICAgICAgLy8gQ29udmVydCBiaW5hcnkgYXJyYXlzIHRvIGEgc3RyaW5nIGFuZCBwcmVmaXggdGhlIHN0cmluZyB3aXRoXG4gICAgICAgICAgICAvLyBhIHNwZWNpYWwgbWFya2VyLlxuICAgICAgICAgICAgdmFyIGJ1ZmZlciA9IHZvaWQgMDtcbiAgICAgICAgICAgIHZhciBtYXJrZXIgPSBcIl9fbGZzY19fOlwiIC8qIFNFUklBTElaRURfTUFSS0VSICovO1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgICAgICAgICAgICBidWZmZXIgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gXCJhcmJmXCIgLyogVFlQRV9BUlJBWUJVRkZFUiAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1ZmZlciA9IHZhbHVlLmJ1ZmZlcjtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBJbnQ4QXJyYXldJykge1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXIgKz0gXCJzaTA4XCIgLyogVFlQRV9JTlQ4QVJSQVkgKi87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgVWludDhBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlciArPSBcInVpMDhcIiAvKiBUWVBFX1VJTlQ4QVJSQVkgKi87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJykge1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXIgKz0gXCJ1aWM4XCIgLyogVFlQRV9VSU5UOENMQU1QRURBUlJBWSAqLztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBJbnQxNkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyICs9IFwic2kxNlwiIC8qIFRZUEVfSU5UMTZBUlJBWSAqLztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50MTZBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlciArPSBcInVyMTZcIiAvKiBUWVBFX1VJTlQxNkFSUkFZICovO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEludDMyQXJyYXldJykge1xuICAgICAgICAgICAgICAgICAgICBtYXJrZXIgKz0gXCJzaTMyXCIgLyogVFlQRV9JTlQzMkFSUkFZICovO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IFVpbnQzMkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyICs9IFwidWkzMlwiIC8qIFRZUEVfVUlOVDMyQVJSQVkgKi87XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFya2VyICs9IFwiZmwzMlwiIC8qIFRZUEVfRkxPQVQzMkFSUkFZICovO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmtlciArPSBcImZsNjRcIiAvKiBUWVBFX0ZMT0FUNjRBUlJBWSAqLztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignRmFpbGVkIHRvIGdldCB0eXBlIGZvciBCaW5hcnlBcnJheScpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxsYmFjayhtYXJrZXIgKyBidWZmZXJUb1N0cmluZyhidWZmZXIpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZVR5cGUgPT09ICdbb2JqZWN0IEJsb2JdJykge1xuICAgICAgICAgICAgLy8gQ29udmVydCB0aGUgYmxvYiB0byBhIGJpbmFyeUFycmF5IGFuZCB0aGVuIHRvIGEgc3RyaW5nLlxuICAgICAgICAgICAgdmFyIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gQmFja3dhcmRzLWNvbXBhdGlibGUgcHJlZml4IGZvciB0aGUgYmxvYiB0eXBlLlxuICAgICAgICAgICAgICAgIC8vdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnJlc3RyaWN0LXBsdXMtb3BlcmFuZHNcbiAgICAgICAgICAgICAgICB2YXIgc3RyID0gXCJ+fmxvY2FsX2ZvcmFnZV90eXBlflwiIC8qIEJMT0JfVFlQRV9QUkVGSVggKi8gKyB2YWx1ZS50eXBlICsgXCJ+XCIgKyBidWZmZXJUb1N0cmluZyh0aGlzLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soXCJfX2xmc2NfXzpcIiAvKiBTRVJJQUxJWkVEX01BUktFUiAqLyArIFwiYmxvYlwiIC8qIFRZUEVfQkxPQiAqLyArIHN0cik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcih2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvdWxkblxcJ3QgY29udmVydCB2YWx1ZSBpbnRvIGEgSlNPTiBzdHJpbmc6ICcsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZXNlcmlhbGl6ZSBkYXRhIHdlJ3ZlIGluc2VydGVkIGludG8gYSB2YWx1ZSBjb2x1bW4vZmllbGQuIFdlIHBsYWNlXG4gICAgICogc3BlY2lhbCBtYXJrZXJzIGludG8gb3VyIHN0cmluZ3MgdG8gbWFyayB0aGVtIGFzIGVuY29kZWQ7IHRoaXMgaXNuJ3RcbiAgICAgKiBhcyBuaWNlIGFzIGEgbWV0YSBmaWVsZCwgYnV0IGl0J3MgdGhlIG9ubHkgc2FuZSB0aGluZyB3ZSBjYW4gZG8gd2hpbHN0XG4gICAgICoga2VlcGluZyBsb2NhbFN0b3JhZ2Ugc3VwcG9ydCBpbnRhY3QuXG4gICAgICpcbiAgICAgKiBPZnRlbnRpbWVzIHRoaXMgd2lsbCBqdXN0IGRlc2VyaWFsaXplIEpTT04gY29udGVudCwgYnV0IGlmIHdlIGhhdmUgYVxuICAgICAqIHNwZWNpYWwgbWFya2VyIChTRVJJQUxJWkVEX01BUktFUiwgZGVmaW5lZCBhYm92ZSksIHdlIHdpbGwgZXh0cmFjdFxuICAgICAqIHNvbWUga2luZCBvZiBhcnJheWJ1ZmZlci9iaW5hcnkgZGF0YS90eXBlZCBhcnJheSBvdXQgb2YgdGhlIHN0cmluZy5cbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBkZXNlcmlhbGl6ZSh2YWx1ZSkge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlbid0IG1hcmtlZCB0aGlzIHN0cmluZyBhcyBiZWluZyBzcGVjaWFsbHkgc2VyaWFsaXplZCAoaS5lLlxuICAgICAgICAvLyBzb21ldGhpbmcgb3RoZXIgdGhhbiBzZXJpYWxpemVkIEpTT04pLCB3ZSBjYW4ganVzdCByZXR1cm4gaXQgYW5kIGJlXG4gICAgICAgIC8vIGRvbmUgd2l0aCBpdC5cbiAgICAgICAgaWYgKHZhbHVlLnN1YnN0cmluZygwLCBTRVJJQUxJWkVEX01BUktFUl9MRU5HVEgpICE9PSBcIl9fbGZzY19fOlwiIC8qIFNFUklBTElaRURfTUFSS0VSICovKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIGRlYWxzIHdpdGggZGVzZXJpYWxpemluZyBzb21lIGtpbmQgb2YgQmxvYiBvclxuICAgICAgICAvLyBUeXBlZEFycmF5LiBGaXJzdCB3ZSBzZXBhcmF0ZSBvdXQgdGhlIHR5cGUgb2YgZGF0YSB3ZSdyZSBkZWFsaW5nXG4gICAgICAgIC8vIHdpdGggZnJvbSB0aGUgZGF0YSBpdHNlbGYuXG4gICAgICAgIHZhciBzZXJpYWxpemVkU3RyaW5nID0gdmFsdWUuc3Vic3RyaW5nKFRZUEVfU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIKTtcbiAgICAgICAgdmFyIHR5cGUgPSB2YWx1ZS5zdWJzdHJpbmcoU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RILCBUWVBFX1NFUklBTElaRURfTUFSS0VSX0xFTkdUSCk7XG4gICAgICAgIHZhciBibG9iVHlwZTtcbiAgICAgICAgLy8gQmFja3dhcmRzLWNvbXBhdGlibGUgYmxvYiB0eXBlIHNlcmlhbGl6YXRpb24gc3RyYXRlZ3kuXG4gICAgICAgIC8vIERCcyBjcmVhdGVkIHdpdGggb2xkZXIgdmVyc2lvbnMgb2YgbG9jYWxGb3JhZ2Ugd2lsbCBzaW1wbHkgbm90IGhhdmUgdGhlIGJsb2IgdHlwZS5cbiAgICAgICAgaWYgKHR5cGUgPT09IFwiYmxvYlwiIC8qIFRZUEVfQkxPQiAqLyAmJiBCTE9CX1RZUEVfUFJFRklYX1JFR0VYLnRlc3Qoc2VyaWFsaXplZFN0cmluZykpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVyID0gc2VyaWFsaXplZFN0cmluZy5tYXRjaChCTE9CX1RZUEVfUFJFRklYX1JFR0VYKTtcbiAgICAgICAgICAgIGJsb2JUeXBlID0gbWF0Y2hlclsxXTtcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRTdHJpbmcgPSBzZXJpYWxpemVkU3RyaW5nLnN1YnN0cmluZyhtYXRjaGVyWzBdLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJ1ZmZlciA9IHN0cmluZ1RvQnVmZmVyKHNlcmlhbGl6ZWRTdHJpbmcpO1xuICAgICAgICAvLyBSZXR1cm4gdGhlIHJpZ2h0IHR5cGUgYmFzZWQgb24gdGhlIGNvZGUvdHlwZSBzZXQgZHVyaW5nXG4gICAgICAgIC8vIHNlcmlhbGl6YXRpb24uXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcImFyYmZcIiAvKiBUWVBFX0FSUkFZQlVGRkVSICovOlxuICAgICAgICAgICAgICAgIHJldHVybiBidWZmZXI7XG4gICAgICAgICAgICBjYXNlIFwiYmxvYlwiIC8qIFRZUEVfQkxPQiAqLzpcbiAgICAgICAgICAgICAgICByZXR1cm4gY3JlYXRlQmxvYihbYnVmZmVyXSwgeyB0eXBlOiBibG9iVHlwZSB9KTtcbiAgICAgICAgICAgIGNhc2UgXCJzaTA4XCIgLyogVFlQRV9JTlQ4QVJSQVkgKi86XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgICAgIGNhc2UgXCJ1aTA4XCIgLyogVFlQRV9VSU5UOEFSUkFZICovOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgICAgICAgY2FzZSBcInVpYzhcIiAvKiBUWVBFX1VJTlQ4Q0xBTVBFREFSUkFZICovOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDhDbGFtcGVkQXJyYXkoYnVmZmVyKTtcbiAgICAgICAgICAgIGNhc2UgXCJzaTE2XCIgLyogVFlQRV9JTlQxNkFSUkFZICovOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSW50MTZBcnJheShidWZmZXIpO1xuICAgICAgICAgICAgY2FzZSBcInVyMTZcIiAvKiBUWVBFX1VJTlQxNkFSUkFZICovOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDE2QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgICAgIGNhc2UgXCJzaTMyXCIgLyogVFlQRV9JTlQzMkFSUkFZICovOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSW50MzJBcnJheShidWZmZXIpO1xuICAgICAgICAgICAgY2FzZSBcInVpMzJcIiAvKiBUWVBFX1VJTlQzMkFSUkFZICovOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWludDMyQXJyYXkoYnVmZmVyKTtcbiAgICAgICAgICAgIGNhc2UgXCJmbDMyXCIgLyogVFlQRV9GTE9BVDMyQVJSQVkgKi86XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoYnVmZmVyKTtcbiAgICAgICAgICAgIGNhc2UgXCJmbDY0XCIgLyogVFlQRV9GTE9BVDY0QVJSQVkgKi86XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBGbG9hdDY0QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtvd24gdHlwZTogJyArIHR5cGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvbmUob2JqKSB7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiAob2JqKSAhPT0gJ29iamVjdCcgfHwgJ2lzQWN0aXZlQ2xvbmUnIGluIG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGVtcCA9IG9iaiBpbnN0YW5jZW9mIERhdGUgPyBuZXcgRGF0ZShvYmopIDogKG9iai5jb25zdHJ1Y3RvcigpKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoT2JqZWN0LmtleXMob2JqKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqWydpc0FjdGl2ZUNsb25lJ10gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wW2tleV0gPSBjbG9uZShvYmpba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvYmpbJ2lzQWN0aXZlQ2xvbmUnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGlmIChfYyAmJiAhX2MuZG9uZSAmJiAoX2EgPSBfYi5yZXR1cm4pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRLZXlQcmVmaXgob3B0aW9ucywgZGVmYXVsdENvbmZpZykge1xuICAgICAgICByZXR1cm4gKG9wdGlvbnMubmFtZSB8fCBkZWZhdWx0Q29uZmlnLm5hbWUpICsgXCIvXCIgKyAob3B0aW9ucy5zdG9yZU5hbWUgfHwgZGVmYXVsdENvbmZpZy5zdG9yZU5hbWUpICsgXCIvXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDYWxsYmFjaygpIHtcbiAgICAgICAgdmFyIF9hcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBfYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICYmIHR5cGVvZiBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlnbm9yZWQtaW5pdGlhbC12YWx1ZVxuICAgIGZ1bmN0aW9uIGRyb3BJbnN0YW5jZUNvbW1vbihvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjYWxsYmFjayA9IGdldENhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIG9wdGlvbnMgPSAodHlwZW9mIG9wdGlvbnMgIT09ICdmdW5jdGlvbicgJiYgb3B0aW9ucykgfHwge307XG4gICAgICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudENvbmZpZyA9IHRoaXMuY29uZmlnKCk7XG4gICAgICAgICAgICBvcHRpb25zLm5hbWUgPSBvcHRpb25zLm5hbWUgfHwgY3VycmVudENvbmZpZy5uYW1lO1xuICAgICAgICAgICAgb3B0aW9ucy5zdG9yZU5hbWUgPSBvcHRpb25zLnN0b3JlTmFtZSB8fCBjdXJyZW50Q29uZmlnLnN0b3JlTmFtZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvbWlzZTtcbiAgICAgICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlamVjdCgnSW52YWxpZCBhcmd1bWVudHMnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5zdG9yZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvcHRpb25zLm5hbWUgKyBcIi9cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGdldEtleVByZWZpeChvcHRpb25zLCBfdGhpcy5fZGVmYXVsdENvbmZpZykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHByb21pc2U6IHByb21pc2UsIGNhbGxiYWNrOiBjYWxsYmFjayB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5vcm1hbGlzZUtleShrZXkpIHtcbiAgICAgICAgLy8gQ2FzdCB0aGUga2V5IHRvIGEgc3RyaW5nLCBhcyB0aGF0J3MgYWxsIHdlIGNhbiBzZXQgYXMgYSBrZXkuXG4gICAgICAgIGlmICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGtleSArIFwiIHVzZWQgYXMgYSBrZXksIGJ1dCBpdCBpcyBub3QgYSBzdHJpbmcuXCIpO1xuICAgICAgICAgICAga2V5ID0gU3RyaW5nKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG5cbiAgICB2YXIgc2VyaWFsaXNlciA9IHtcbiAgICAgICAgYnVmZmVyVG9TdHJpbmc6IGJ1ZmZlclRvU3RyaW5nLFxuICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemUsXG4gICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplLFxuICAgICAgICBzdHJpbmdUb0J1ZmZlcjogc3RyaW5nVG9CdWZmZXJcbiAgICB9O1xuXG4gICAgdmFyIHN0b3JlcyA9IHt9O1xuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICB2YXIgU3RvcmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFN0b3JlKGtwKSB7XG4gICAgICAgICAgICB0aGlzLmtwID0ga3A7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBTdG9yZS5yZXNvbHZlID0gZnVuY3Rpb24gKGtwKSB7XG4gICAgICAgICAgICBpZiAoIXN0b3Jlc1trcF0pIHtcbiAgICAgICAgICAgICAgICBzdG9yZXNba3BdID0gbmV3IFN0b3JlKGtwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdG9yZXNba3BdO1xuICAgICAgICB9O1xuICAgICAgICBTdG9yZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICAgICAgfTtcbiAgICAgICAgU3RvcmUucHJvdG90eXBlLmRyb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICBkZWxldGUgc3RvcmVzW3RoaXMua3BdO1xuICAgICAgICB9O1xuICAgICAgICBTdG9yZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtrZXldO1xuICAgICAgICB9O1xuICAgICAgICBTdG9yZS5wcm90b3R5cGUua2V5ID0gZnVuY3Rpb24gKGlkeCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMua2V5cygpW2lkeF07XG4gICAgICAgIH07XG4gICAgICAgIFN0b3JlLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZGF0YSk7XG4gICAgICAgIH07XG4gICAgICAgIFN0b3JlLnByb3RvdHlwZS5ybSA9IGZ1bmN0aW9uIChrKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5kYXRhW2tdO1xuICAgICAgICB9O1xuICAgICAgICBTdG9yZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGssIHYpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVtrXSA9IHY7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBTdG9yZTtcbiAgICB9KCkpO1xuXG4gICAgZnVuY3Rpb24gX2luaXRTdG9yYWdlKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG9wdHMgPSBvcHRpb25zID8gY2xvbmUob3B0aW9ucykgOiB7fTtcbiAgICAgICAgdmFyIGtwID0gZ2V0S2V5UHJlZml4KG9wdHMsIHRoaXMuX2RlZmF1bHRDb25maWcpO1xuICAgICAgICB2YXIgc3RvcmUgPSBTdG9yZS5yZXNvbHZlKGtwKTtcbiAgICAgICAgdGhpcy5fZGJJbmZvID0gb3B0cztcbiAgICAgICAgdGhpcy5fZGJJbmZvLnNlcmlhbGl6ZXIgPSBzZXJpYWxpc2VyO1xuICAgICAgICB0aGlzLl9kYkluZm8ua2V5UHJlZml4ID0ga3A7XG4gICAgICAgIHRoaXMuX2RiSW5mby5tU3RvcmUgPSBzdG9yZTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuX2RiSW5mby5tU3RvcmUuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyb3BJbnN0YW5jZShfb3B0aW9ucywgX2NiKSB7XG4gICAgICAgIHZhciBfYSA9IGRyb3BJbnN0YW5jZUNvbW1vbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpLCBwcm9taXNlID0gX2EucHJvbWlzZSwgY2FsbGJhY2sgPSBfYS5jYWxsYmFjaztcbiAgICAgICAgdmFyIG91dFByb21pc2UgPSBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKGtleVByZWZpeCkge1xuICAgICAgICAgICAgU3RvcmUucmVzb2x2ZShrZXlQcmVmaXgpLmRyb3AoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjayhvdXRQcm9taXNlLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEl0ZW0oa2V5JCwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAga2V5JCA9IG5vcm1hbGlzZUtleShrZXkkKTtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gX3RoaXMuX2RiSW5mby5tU3RvcmUuZ2V0KGtleSQpO1xuICAgICAgICAgICAgLy8gRGVzZXJpYWxpc2UgaWYgdGhlIHJlc3VsdCBpcyBub3QgbnVsbCBvciB1bmRlZmluZWRcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQgPT0gbnVsbCA/IG51bGwgOiBfdGhpcy5fZGJJbmZvLnNlcmlhbGl6ZXIuZGVzZXJpYWxpemUocmVzdWx0KTsgLy90c2xpbnQ6ZGlzYWJsZS1saW5lOnRyaXBsZS1lcXVhbHNcbiAgICAgICAgfSk7XG4gICAgICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGl0ZXJhdGUoaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN0b3JlID0gX3RoaXMuX2RiSW5mby5tU3RvcmU7XG4gICAgICAgICAgICB2YXIga2V5cyA9IHN0b3JlLmtleXMoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0b3JlLmdldChrZXlzW2ldKTtcbiAgICAgICAgICAgICAgICAvLyBJZiBhIHJlc3VsdCB3YXMgZm91bmQsIHBhcnNlIGl0IGZyb20gdGhlIHNlcmlhbGl6ZWRcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmcgaW50byBhIEpTIG9iamVjdC4gSWYgcmVzdWx0IGlzbid0IHRydXRoeSwgdGhlXG4gICAgICAgICAgICAgICAgLy8ga2V5IGlzIGxpa2VseSB1bmRlZmluZWQgYW5kIHdlJ2xsIHBhc3MgaXQgc3RyYWlnaHRcbiAgICAgICAgICAgICAgICAvLyB0byB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gX3RoaXMuX2RiSW5mby5zZXJpYWxpemVyLmRlc2VyaWFsaXplKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBpdGVyYXRvcih2YWx1ZSwga2V5c1tpXSwgaSArIDEpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBrZXkoaWR4LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IF90aGlzLl9kYkluZm8ubVN0b3JlLmtleShpZHgpO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24ga2V5cyhjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5fZGJJbmZvLm1TdG9yZS5rZXlzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsZW5ndGgoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmtleXMoKS50aGVuKGZ1bmN0aW9uIChrZXlzJCkgeyByZXR1cm4ga2V5cyQubGVuZ3RoOyB9KTtcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlSXRlbShrZXkkLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBrZXkkID0gbm9ybWFsaXNlS2V5KGtleSQpO1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLl9kYkluZm8ubVN0b3JlLnJtKGtleSQpO1xuICAgICAgICB9KTtcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0SXRlbShrZXkkLCB2YWx1ZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAga2V5JCA9IG5vcm1hbGlzZUtleShrZXkkKTtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNhdmUgdGhlIG9yaWdpbmFsIHZhbHVlIHRvIHBhc3MgdG8gdGhlIGNhbGxiYWNrLlxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX2RiSW5mby5zZXJpYWxpemVyLnNlcmlhbGl6ZSh2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlJCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5fZGJJbmZvLm1TdG9yZS5zZXQoa2V5JCwgdmFsdWUkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9yaWdpbmFsVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgdmFyIF9zdXBwb3J0ID0gdHJ1ZTtcblxuICAgIGV4cG9ydHMuX3N1cHBvcnQgPSBfc3VwcG9ydDtcbiAgICBleHBvcnRzLl9kcml2ZXIgPSBfZHJpdmVyO1xuICAgIGV4cG9ydHMuX2luaXRTdG9yYWdlID0gX2luaXRTdG9yYWdlO1xuICAgIGV4cG9ydHMuY2xlYXIgPSBjbGVhcjtcbiAgICBleHBvcnRzLmRyb3BJbnN0YW5jZSA9IGRyb3BJbnN0YW5jZTtcbiAgICBleHBvcnRzLmdldEl0ZW0gPSBnZXRJdGVtO1xuICAgIGV4cG9ydHMuaXRlcmF0ZSA9IGl0ZXJhdGU7XG4gICAgZXhwb3J0cy5rZXkgPSBrZXk7XG4gICAgZXhwb3J0cy5rZXlzID0ga2V5cztcbiAgICBleHBvcnRzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICBleHBvcnRzLnJlbW92ZUl0ZW0gPSByZW1vdmVJdGVtO1xuICAgIGV4cG9ydHMuc2V0SXRlbSA9IHNldEl0ZW07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11bWQuanMubWFwXG4iLCIvKiFcbiAgICBsb2NhbEZvcmFnZSAtLSBPZmZsaW5lIFN0b3JhZ2UsIEltcHJvdmVkXG4gICAgVmVyc2lvbiAxLjEwLjBcbiAgICBodHRwczovL2xvY2FsZm9yYWdlLmdpdGh1Yi5pby9sb2NhbEZvcmFnZVxuICAgIChjKSAyMDEzLTIwMTcgTW96aWxsYSwgQXBhY2hlIExpY2Vuc2UgMi4wXG4qL1xuKGZ1bmN0aW9uKGYpe2lmKHR5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCIpe21vZHVsZS5leHBvcnRzPWYoKX1lbHNlIGlmKHR5cGVvZiBkZWZpbmU9PT1cImZ1bmN0aW9uXCImJmRlZmluZS5hbWQpe2RlZmluZShbXSxmKX1lbHNle3ZhciBnO2lmKHR5cGVvZiB3aW5kb3chPT1cInVuZGVmaW5lZFwiKXtnPXdpbmRvd31lbHNlIGlmKHR5cGVvZiBnbG9iYWwhPT1cInVuZGVmaW5lZFwiKXtnPWdsb2JhbH1lbHNlIGlmKHR5cGVvZiBzZWxmIT09XCJ1bmRlZmluZWRcIil7Zz1zZWxmfWVsc2V7Zz10aGlzfWcubG9jYWxmb3JhZ2UgPSBmKCl9fSkoZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgKGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIiwgZil9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG4oZnVuY3Rpb24gKGdsb2JhbCl7XG4ndXNlIHN0cmljdCc7XG52YXIgTXV0YXRpb24gPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcblxudmFyIHNjaGVkdWxlRHJhaW47XG5cbntcbiAgaWYgKE11dGF0aW9uKSB7XG4gICAgdmFyIGNhbGxlZCA9IDA7XG4gICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uKG5leHRUaWNrKTtcbiAgICB2YXIgZWxlbWVudCA9IGdsb2JhbC5kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50LCB7XG4gICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlXG4gICAgfSk7XG4gICAgc2NoZWR1bGVEcmFpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGVsZW1lbnQuZGF0YSA9IChjYWxsZWQgPSArK2NhbGxlZCAlIDIpO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoIWdsb2JhbC5zZXRJbW1lZGlhdGUgJiYgdHlwZW9mIGdsb2JhbC5NZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgY2hhbm5lbCA9IG5ldyBnbG9iYWwuTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IG5leHRUaWNrO1xuICAgIHNjaGVkdWxlRHJhaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuICAgIH07XG4gIH0gZWxzZSBpZiAoJ2RvY3VtZW50JyBpbiBnbG9iYWwgJiYgJ29ucmVhZHlzdGF0ZWNoYW5nZScgaW4gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpKSB7XG4gICAgc2NoZWR1bGVEcmFpbiA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgLy8gQ3JlYXRlIGEgPHNjcmlwdD4gZWxlbWVudDsgaXRzIHJlYWR5c3RhdGVjaGFuZ2UgZXZlbnQgd2lsbCBiZSBmaXJlZCBhc3luY2hyb25vdXNseSBvbmNlIGl0IGlzIGluc2VydGVkXG4gICAgICAvLyBpbnRvIHRoZSBkb2N1bWVudC4gRG8gc28sIHRodXMgcXVldWluZyB1cCB0aGUgdGFzay4gUmVtZW1iZXIgdG8gY2xlYW4gdXAgb25jZSBpdCdzIGJlZW4gY2FsbGVkLlxuICAgICAgdmFyIHNjcmlwdEVsID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0RWwub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXh0VGljaygpO1xuXG4gICAgICAgIHNjcmlwdEVsLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgIHNjcmlwdEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0RWwpO1xuICAgICAgICBzY3JpcHRFbCA9IG51bGw7XG4gICAgICB9O1xuICAgICAgZ2xvYmFsLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzY3JpcHRFbCk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBzY2hlZHVsZURyYWluID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2V0VGltZW91dChuZXh0VGljaywgMCk7XG4gICAgfTtcbiAgfVxufVxuXG52YXIgZHJhaW5pbmc7XG52YXIgcXVldWUgPSBbXTtcbi8vbmFtZWQgbmV4dFRpY2sgZm9yIGxlc3MgY29uZnVzaW5nIHN0YWNrIHRyYWNlc1xuZnVuY3Rpb24gbmV4dFRpY2soKSB7XG4gIGRyYWluaW5nID0gdHJ1ZTtcbiAgdmFyIGksIG9sZFF1ZXVlO1xuICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICB3aGlsZSAobGVuKSB7XG4gICAgb2xkUXVldWUgPSBxdWV1ZTtcbiAgICBxdWV1ZSA9IFtdO1xuICAgIGkgPSAtMTtcbiAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICBvbGRRdWV1ZVtpXSgpO1xuICAgIH1cbiAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gIH1cbiAgZHJhaW5pbmcgPSBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbW1lZGlhdGU7XG5mdW5jdGlvbiBpbW1lZGlhdGUodGFzaykge1xuICBpZiAocXVldWUucHVzaCh0YXNrKSA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICBzY2hlZHVsZURyYWluKCk7XG4gIH1cbn1cblxufSkuY2FsbCh0aGlzLHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30pXG59LHt9XSwyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcbnZhciBpbW1lZGlhdGUgPSBfZGVyZXFfKDEpO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gSU5URVJOQUwoKSB7fVxuXG52YXIgaGFuZGxlcnMgPSB7fTtcblxudmFyIFJFSkVDVEVEID0gWydSRUpFQ1RFRCddO1xudmFyIEZVTEZJTExFRCA9IFsnRlVMRklMTEVEJ107XG52YXIgUEVORElORyA9IFsnUEVORElORyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cbmZ1bmN0aW9uIFByb21pc2UocmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiByZXNvbHZlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3Jlc29sdmVyIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG4gIHRoaXMuc3RhdGUgPSBQRU5ESU5HO1xuICB0aGlzLnF1ZXVlID0gW107XG4gIHRoaXMub3V0Y29tZSA9IHZvaWQgMDtcbiAgaWYgKHJlc29sdmVyICE9PSBJTlRFUk5BTCkge1xuICAgIHNhZmVseVJlc29sdmVUaGVuYWJsZSh0aGlzLCByZXNvbHZlcik7XG4gIH1cbn1cblxuUHJvbWlzZS5wcm90b3R5cGVbXCJjYXRjaFwiXSA9IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gIHJldHVybiB0aGlzLnRoZW4obnVsbCwgb25SZWplY3RlZCk7XG59O1xuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICBpZiAodHlwZW9mIG9uRnVsZmlsbGVkICE9PSAnZnVuY3Rpb24nICYmIHRoaXMuc3RhdGUgPT09IEZVTEZJTExFRCB8fFxuICAgIHR5cGVvZiBvblJlamVjdGVkICE9PSAnZnVuY3Rpb24nICYmIHRoaXMuc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgdmFyIHByb21pc2UgPSBuZXcgdGhpcy5jb25zdHJ1Y3RvcihJTlRFUk5BTCk7XG4gIGlmICh0aGlzLnN0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgdmFyIHJlc29sdmVyID0gdGhpcy5zdGF0ZSA9PT0gRlVMRklMTEVEID8gb25GdWxmaWxsZWQgOiBvblJlamVjdGVkO1xuICAgIHVud3JhcChwcm9taXNlLCByZXNvbHZlciwgdGhpcy5vdXRjb21lKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnF1ZXVlLnB1c2gobmV3IFF1ZXVlSXRlbShwcm9taXNlLCBvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuZnVuY3Rpb24gUXVldWVJdGVtKHByb21pc2UsIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gIGlmICh0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLm9uRnVsZmlsbGVkID0gb25GdWxmaWxsZWQ7XG4gICAgdGhpcy5jYWxsRnVsZmlsbGVkID0gdGhpcy5vdGhlckNhbGxGdWxmaWxsZWQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5vblJlamVjdGVkID0gb25SZWplY3RlZDtcbiAgICB0aGlzLmNhbGxSZWplY3RlZCA9IHRoaXMub3RoZXJDYWxsUmVqZWN0ZWQ7XG4gIH1cbn1cblF1ZXVlSXRlbS5wcm90b3R5cGUuY2FsbEZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBoYW5kbGVycy5yZXNvbHZlKHRoaXMucHJvbWlzZSwgdmFsdWUpO1xufTtcblF1ZXVlSXRlbS5wcm90b3R5cGUub3RoZXJDYWxsRnVsZmlsbGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHVud3JhcCh0aGlzLnByb21pc2UsIHRoaXMub25GdWxmaWxsZWQsIHZhbHVlKTtcbn07XG5RdWV1ZUl0ZW0ucHJvdG90eXBlLmNhbGxSZWplY3RlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBoYW5kbGVycy5yZWplY3QodGhpcy5wcm9taXNlLCB2YWx1ZSk7XG59O1xuUXVldWVJdGVtLnByb3RvdHlwZS5vdGhlckNhbGxSZWplY3RlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB1bndyYXAodGhpcy5wcm9taXNlLCB0aGlzLm9uUmVqZWN0ZWQsIHZhbHVlKTtcbn07XG5cbmZ1bmN0aW9uIHVud3JhcChwcm9taXNlLCBmdW5jLCB2YWx1ZSkge1xuICBpbW1lZGlhdGUoZnVuY3Rpb24gKCkge1xuICAgIHZhciByZXR1cm5WYWx1ZTtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuVmFsdWUgPSBmdW5jKHZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gaGFuZGxlcnMucmVqZWN0KHByb21pc2UsIGUpO1xuICAgIH1cbiAgICBpZiAocmV0dXJuVmFsdWUgPT09IHByb21pc2UpIHtcbiAgICAgIGhhbmRsZXJzLnJlamVjdChwcm9taXNlLCBuZXcgVHlwZUVycm9yKCdDYW5ub3QgcmVzb2x2ZSBwcm9taXNlIHdpdGggaXRzZWxmJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVycy5yZXNvbHZlKHByb21pc2UsIHJldHVyblZhbHVlKTtcbiAgICB9XG4gIH0pO1xufVxuXG5oYW5kbGVycy5yZXNvbHZlID0gZnVuY3Rpb24gKHNlbGYsIHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSB0cnlDYXRjaChnZXRUaGVuLCB2YWx1ZSk7XG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgcmV0dXJuIGhhbmRsZXJzLnJlamVjdChzZWxmLCByZXN1bHQudmFsdWUpO1xuICB9XG4gIHZhciB0aGVuYWJsZSA9IHJlc3VsdC52YWx1ZTtcblxuICBpZiAodGhlbmFibGUpIHtcbiAgICBzYWZlbHlSZXNvbHZlVGhlbmFibGUoc2VsZiwgdGhlbmFibGUpO1xuICB9IGVsc2Uge1xuICAgIHNlbGYuc3RhdGUgPSBGVUxGSUxMRUQ7XG4gICAgc2VsZi5vdXRjb21lID0gdmFsdWU7XG4gICAgdmFyIGkgPSAtMTtcbiAgICB2YXIgbGVuID0gc2VsZi5xdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgICAgc2VsZi5xdWV1ZVtpXS5jYWxsRnVsZmlsbGVkKHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNlbGY7XG59O1xuaGFuZGxlcnMucmVqZWN0ID0gZnVuY3Rpb24gKHNlbGYsIGVycm9yKSB7XG4gIHNlbGYuc3RhdGUgPSBSRUpFQ1RFRDtcbiAgc2VsZi5vdXRjb21lID0gZXJyb3I7XG4gIHZhciBpID0gLTE7XG4gIHZhciBsZW4gPSBzZWxmLnF1ZXVlLmxlbmd0aDtcbiAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgIHNlbGYucXVldWVbaV0uY2FsbFJlamVjdGVkKGVycm9yKTtcbiAgfVxuICByZXR1cm4gc2VsZjtcbn07XG5cbmZ1bmN0aW9uIGdldFRoZW4ob2JqKSB7XG4gIC8vIE1ha2Ugc3VyZSB3ZSBvbmx5IGFjY2VzcyB0aGUgYWNjZXNzb3Igb25jZSBhcyByZXF1aXJlZCBieSB0aGUgc3BlY1xuICB2YXIgdGhlbiA9IG9iaiAmJiBvYmoudGhlbjtcbiAgaWYgKG9iaiAmJiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykgJiYgdHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gYXBweVRoZW4oKSB7XG4gICAgICB0aGVuLmFwcGx5KG9iaiwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhZmVseVJlc29sdmVUaGVuYWJsZShzZWxmLCB0aGVuYWJsZSkge1xuICAvLyBFaXRoZXIgZnVsZmlsbCwgcmVqZWN0IG9yIHJlamVjdCB3aXRoIGVycm9yXG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgZnVuY3Rpb24gb25FcnJvcih2YWx1ZSkge1xuICAgIGlmIChjYWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICBoYW5kbGVycy5yZWplY3Qoc2VsZiwgdmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25TdWNjZXNzKHZhbHVlKSB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjYWxsZWQgPSB0cnVlO1xuICAgIGhhbmRsZXJzLnJlc29sdmUoc2VsZiwgdmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJ5VG9VbndyYXAoKSB7XG4gICAgdGhlbmFibGUob25TdWNjZXNzLCBvbkVycm9yKTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSB0cnlDYXRjaCh0cnlUb1Vud3JhcCk7XG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgb25FcnJvcihyZXN1bHQudmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyeUNhdGNoKGZ1bmMsIHZhbHVlKSB7XG4gIHZhciBvdXQgPSB7fTtcbiAgdHJ5IHtcbiAgICBvdXQudmFsdWUgPSBmdW5jKHZhbHVlKTtcbiAgICBvdXQuc3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICB9IGNhdGNoIChlKSB7XG4gICAgb3V0LnN0YXR1cyA9ICdlcnJvcic7XG4gICAgb3V0LnZhbHVlID0gZTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG5Qcm9taXNlLnJlc29sdmUgPSByZXNvbHZlO1xuZnVuY3Rpb24gcmVzb2x2ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiB0aGlzKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHJldHVybiBoYW5kbGVycy5yZXNvbHZlKG5ldyB0aGlzKElOVEVSTkFMKSwgdmFsdWUpO1xufVxuXG5Qcm9taXNlLnJlamVjdCA9IHJlamVjdDtcbmZ1bmN0aW9uIHJlamVjdChyZWFzb24pIHtcbiAgdmFyIHByb21pc2UgPSBuZXcgdGhpcyhJTlRFUk5BTCk7XG4gIHJldHVybiBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbn1cblxuUHJvbWlzZS5hbGwgPSBhbGw7XG5mdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXJhYmxlKSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgIHJldHVybiB0aGlzLnJlamVjdChuZXcgVHlwZUVycm9yKCdtdXN0IGJlIGFuIGFycmF5JykpO1xuICB9XG5cbiAgdmFyIGxlbiA9IGl0ZXJhYmxlLmxlbmd0aDtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICBpZiAoIWxlbikge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmUoW10pO1xuICB9XG5cbiAgdmFyIHZhbHVlcyA9IG5ldyBBcnJheShsZW4pO1xuICB2YXIgcmVzb2x2ZWQgPSAwO1xuICB2YXIgaSA9IC0xO1xuICB2YXIgcHJvbWlzZSA9IG5ldyB0aGlzKElOVEVSTkFMKTtcblxuICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgYWxsUmVzb2x2ZXIoaXRlcmFibGVbaV0sIGkpO1xuICB9XG4gIHJldHVybiBwcm9taXNlO1xuICBmdW5jdGlvbiBhbGxSZXNvbHZlcih2YWx1ZSwgaSkge1xuICAgIHNlbGYucmVzb2x2ZSh2YWx1ZSkudGhlbihyZXNvbHZlRnJvbUFsbCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGZ1bmN0aW9uIHJlc29sdmVGcm9tQWxsKG91dFZhbHVlKSB7XG4gICAgICB2YWx1ZXNbaV0gPSBvdXRWYWx1ZTtcbiAgICAgIGlmICgrK3Jlc29sdmVkID09PSBsZW4gJiYgIWNhbGxlZCkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICBoYW5kbGVycy5yZXNvbHZlKHByb21pc2UsIHZhbHVlcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblByb21pc2UucmFjZSA9IHJhY2U7XG5mdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVyYWJsZSkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICByZXR1cm4gdGhpcy5yZWplY3QobmV3IFR5cGVFcnJvcignbXVzdCBiZSBhbiBhcnJheScpKTtcbiAgfVxuXG4gIHZhciBsZW4gPSBpdGVyYWJsZS5sZW5ndGg7XG4gIHZhciBjYWxsZWQgPSBmYWxzZTtcbiAgaWYgKCFsZW4pIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlKFtdKTtcbiAgfVxuXG4gIHZhciBpID0gLTE7XG4gIHZhciBwcm9taXNlID0gbmV3IHRoaXMoSU5URVJOQUwpO1xuXG4gIHdoaWxlICgrK2kgPCBsZW4pIHtcbiAgICByZXNvbHZlcihpdGVyYWJsZVtpXSk7XG4gIH1cbiAgcmV0dXJuIHByb21pc2U7XG4gIGZ1bmN0aW9uIHJlc29sdmVyKHZhbHVlKSB7XG4gICAgc2VsZi5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgICAgY2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgaGFuZGxlcnMucmVzb2x2ZShwcm9taXNlLCByZXNwb25zZSk7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgICBjYWxsZWQgPSB0cnVlO1xuICAgICAgICBoYW5kbGVycy5yZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbn0se1wiMVwiOjF9XSwzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbihmdW5jdGlvbiAoZ2xvYmFsKXtcbid1c2Ugc3RyaWN0JztcbmlmICh0eXBlb2YgZ2xvYmFsLlByb21pc2UgIT09ICdmdW5jdGlvbicpIHtcbiAgZ2xvYmFsLlByb21pc2UgPSBfZGVyZXFfKDIpO1xufVxuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbn0se1wiMlwiOjJ9XSw0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBnZXRJREIoKSB7XG4gICAgLyogZ2xvYmFsIGluZGV4ZWREQix3ZWJraXRJbmRleGVkREIsbW96SW5kZXhlZERCLE9JbmRleGVkREIsbXNJbmRleGVkREIgKi9cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4ZWREQiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleGVkREI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3ZWJraXRJbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gd2Via2l0SW5kZXhlZERCO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbW96SW5kZXhlZERCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIG1vekluZGV4ZWREQjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIE9JbmRleGVkREIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICByZXR1cm4gT0luZGV4ZWREQjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG1zSW5kZXhlZERCICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIG1zSW5kZXhlZERCO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufVxuXG52YXIgaWRiID0gZ2V0SURCKCk7XG5cbmZ1bmN0aW9uIGlzSW5kZXhlZERCVmFsaWQoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBJbmRleGVkREI7IGZhbGwgYmFjayB0byB2ZW5kb3ItcHJlZml4ZWQgdmVyc2lvbnNcbiAgICAgICAgLy8gaWYgbmVlZGVkLlxuICAgICAgICBpZiAoIWlkYiB8fCAhaWRiLm9wZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBXZSBtaW1pYyBQb3VjaERCIGhlcmU7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIFdlIHRlc3QgZm9yIG9wZW5EYXRhYmFzZSBiZWNhdXNlIElFIE1vYmlsZSBpZGVudGlmaWVzIGl0c2VsZlxuICAgICAgICAvLyBhcyBTYWZhcmkuIE9oIHRoZSBsdWx6Li4uXG4gICAgICAgIHZhciBpc1NhZmFyaSA9IHR5cGVvZiBvcGVuRGF0YWJhc2UgIT09ICd1bmRlZmluZWQnICYmIC8oU2FmYXJpfGlQaG9uZXxpUGFkfGlQb2QpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEvQ2hyb21lLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICEvQmxhY2tCZXJyeS8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pO1xuXG4gICAgICAgIHZhciBoYXNGZXRjaCA9IHR5cGVvZiBmZXRjaCA9PT0gJ2Z1bmN0aW9uJyAmJiBmZXRjaC50b1N0cmluZygpLmluZGV4T2YoJ1tuYXRpdmUgY29kZScpICE9PSAtMTtcblxuICAgICAgICAvLyBTYWZhcmkgPDEwLjEgZG9lcyBub3QgbWVldCBvdXIgcmVxdWlyZW1lbnRzIGZvciBJREIgc3VwcG9ydFxuICAgICAgICAvLyAoc2VlOiBodHRwczovL2dpdGh1Yi5jb20vcG91Y2hkYi9wb3VjaGRiL2lzc3Vlcy81NTcyKS5cbiAgICAgICAgLy8gU2FmYXJpIDEwLjEgc2hpcHBlZCB3aXRoIGZldGNoLCB3ZSBjYW4gdXNlIHRoYXQgdG8gZGV0ZWN0IGl0LlxuICAgICAgICAvLyBOb3RlOiB0aGlzIGNyZWF0ZXMgaXNzdWVzIHdpdGggYHdpbmRvdy5mZXRjaGAgcG9seWZpbGxzIGFuZFxuICAgICAgICAvLyBvdmVycmlkZXM7IHNlZTpcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2xvY2FsRm9yYWdlL2xvY2FsRm9yYWdlL2lzc3Vlcy84NTZcbiAgICAgICAgcmV0dXJuICghaXNTYWZhcmkgfHwgaGFzRmV0Y2gpICYmIHR5cGVvZiBpbmRleGVkREIgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIC8vIHNvbWUgb3V0ZGF0ZWQgaW1wbGVtZW50YXRpb25zIG9mIElEQiB0aGF0IGFwcGVhciBvbiBTYW1zdW5nXG4gICAgICAgIC8vIGFuZCBIVEMgQW5kcm9pZCBkZXZpY2VzIDw0LjQgYXJlIG1pc3NpbmcgSURCS2V5UmFuZ2VcbiAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9pc3N1ZXMvMTI4XG4gICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvaXNzdWVzLzI3MlxuICAgICAgICB0eXBlb2YgSURCS2V5UmFuZ2UgIT09ICd1bmRlZmluZWQnO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuLy8gQWJzdHJhY3RzIGNvbnN0cnVjdGluZyBhIEJsb2Igb2JqZWN0LCBzbyBpdCBhbHNvIHdvcmtzIGluIG9sZGVyXG4vLyBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgdGhlIG5hdGl2ZSBCbG9iIGNvbnN0cnVjdG9yLiAoaS5lLlxuLy8gb2xkIFF0V2ViS2l0IHZlcnNpb25zLCBhdCBsZWFzdCkuXG4vLyBBYnN0cmFjdHMgY29uc3RydWN0aW5nIGEgQmxvYiBvYmplY3QsIHNvIGl0IGFsc28gd29ya3MgaW4gb2xkZXJcbi8vIGJyb3dzZXJzIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aGUgbmF0aXZlIEJsb2IgY29uc3RydWN0b3IuIChpLmUuXG4vLyBvbGQgUXRXZWJLaXQgdmVyc2lvbnMsIGF0IGxlYXN0KS5cbmZ1bmN0aW9uIGNyZWF0ZUJsb2IocGFydHMsIHByb3BlcnRpZXMpIHtcbiAgICAvKiBnbG9iYWwgQmxvYkJ1aWxkZXIsTVNCbG9iQnVpbGRlcixNb3pCbG9iQnVpbGRlcixXZWJLaXRCbG9iQnVpbGRlciAqL1xuICAgIHBhcnRzID0gcGFydHMgfHwgW107XG4gICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMgfHwge307XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG5ldyBCbG9iKHBhcnRzLCBwcm9wZXJ0aWVzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChlLm5hbWUgIT09ICdUeXBlRXJyb3InKSB7XG4gICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBCdWlsZGVyID0gdHlwZW9mIEJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IEJsb2JCdWlsZGVyIDogdHlwZW9mIE1TQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gTVNCbG9iQnVpbGRlciA6IHR5cGVvZiBNb3pCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBNb3pCbG9iQnVpbGRlciA6IFdlYktpdEJsb2JCdWlsZGVyO1xuICAgICAgICB2YXIgYnVpbGRlciA9IG5ldyBCdWlsZGVyKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGJ1aWxkZXIuYXBwZW5kKHBhcnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnVpbGRlci5nZXRCbG9iKHByb3BlcnRpZXMudHlwZSk7XG4gICAgfVxufVxuXG4vLyBUaGlzIGlzIENvbW1vbkpTIGJlY2F1c2UgbGllIGlzIGFuIGV4dGVybmFsIGRlcGVuZGVuY3ksIHNvIFJvbGx1cFxuLy8gY2FuIGp1c3QgaWdub3JlIGl0LlxuaWYgKHR5cGVvZiBQcm9taXNlID09PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEluIHRoZSBcIm5vcHJvbWlzZXNcIiBidWlsZCB0aGlzIHdpbGwganVzdCB0aHJvdyBpZiB5b3UgZG9uJ3QgaGF2ZVxuICAgIC8vIGEgZ2xvYmFsIHByb21pc2Ugb2JqZWN0LCBidXQgaXQgd291bGQgdGhyb3cgYW55d2F5IGxhdGVyLlxuICAgIF9kZXJlcV8oMyk7XG59XG52YXIgUHJvbWlzZSQxID0gUHJvbWlzZTtcblxuZnVuY3Rpb24gZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBleGVjdXRlVHdvQ2FsbGJhY2tzKHByb21pc2UsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlLnRoZW4oY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZXJyb3JDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9taXNlW1wiY2F0Y2hcIl0oZXJyb3JDYWxsYmFjayk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3JtYWxpemVLZXkoa2V5KSB7XG4gICAgLy8gQ2FzdCB0aGUga2V5IHRvIGEgc3RyaW5nLCBhcyB0aGF0J3MgYWxsIHdlIGNhbiBzZXQgYXMgYSBrZXkuXG4gICAgaWYgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihrZXkgKyAnIHVzZWQgYXMgYSBrZXksIGJ1dCBpdCBpcyBub3QgYSBzdHJpbmcuJyk7XG4gICAgICAgIGtleSA9IFN0cmluZyhrZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBrZXk7XG59XG5cbmZ1bmN0aW9uIGdldENhbGxiYWNrKCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoICYmIHR5cGVvZiBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdO1xuICAgIH1cbn1cblxuLy8gU29tZSBjb2RlIG9yaWdpbmFsbHkgZnJvbSBhc3luY19zdG9yYWdlLmpzIGluXG4vLyBbR2FpYV0oaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEtYjJnL2dhaWEpLlxuXG52YXIgREVURUNUX0JMT0JfU1VQUE9SVF9TVE9SRSA9ICdsb2NhbC1mb3JhZ2UtZGV0ZWN0LWJsb2Itc3VwcG9ydCc7XG52YXIgc3VwcG9ydHNCbG9icyA9IHZvaWQgMDtcbnZhciBkYkNvbnRleHRzID0ge307XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vLyBUcmFuc2FjdGlvbiBNb2Rlc1xudmFyIFJFQURfT05MWSA9ICdyZWFkb25seSc7XG52YXIgUkVBRF9XUklURSA9ICdyZWFkd3JpdGUnO1xuXG4vLyBUcmFuc2Zvcm0gYSBiaW5hcnkgc3RyaW5nIHRvIGFuIGFycmF5IGJ1ZmZlciwgYmVjYXVzZSBvdGhlcndpc2Vcbi8vIHdlaXJkIHN0dWZmIGhhcHBlbnMgd2hlbiB5b3UgdHJ5IHRvIHdvcmsgd2l0aCB0aGUgYmluYXJ5IHN0cmluZyBkaXJlY3RseS5cbi8vIEl0IGlzIGtub3duLlxuLy8gRnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE0OTY3NjQ3LyAoY29udGludWVzIG9uIG5leHQgbGluZSlcbi8vIGVuY29kZS1kZWNvZGUtaW1hZ2Utd2l0aC1iYXNlNjQtYnJlYWtzLWltYWdlICgyMDEzLTA0LTIxKVxuZnVuY3Rpb24gX2JpblN0cmluZ1RvQXJyYXlCdWZmZXIoYmluKSB7XG4gICAgdmFyIGxlbmd0aCA9IGJpbi5sZW5ndGg7XG4gICAgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcihsZW5ndGgpO1xuICAgIHZhciBhcnIgPSBuZXcgVWludDhBcnJheShidWYpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYXJyW2ldID0gYmluLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBidWY7XG59XG5cbi8vXG4vLyBCbG9icyBhcmUgbm90IHN1cHBvcnRlZCBpbiBhbGwgdmVyc2lvbnMgb2YgSW5kZXhlZERCLCBub3RhYmx5XG4vLyBDaHJvbWUgPDM3IGFuZCBBbmRyb2lkIDw1LiBJbiB0aG9zZSB2ZXJzaW9ucywgc3RvcmluZyBhIGJsb2Igd2lsbCB0aHJvdy5cbi8vXG4vLyBWYXJpb3VzIG90aGVyIGJsb2IgYnVncyBleGlzdCBpbiBDaHJvbWUgdjM3LTQyIChpbmNsdXNpdmUpLlxuLy8gRGV0ZWN0aW5nIHRoZW0gaXMgZXhwZW5zaXZlIGFuZCBjb25mdXNpbmcgdG8gdXNlcnMsIGFuZCBDaHJvbWUgMzctNDJcbi8vIGlzIGF0IHZlcnkgbG93IHVzYWdlIHdvcmxkd2lkZSwgc28gd2UgZG8gYSBoYWNreSB1c2VyQWdlbnQgY2hlY2sgaW5zdGVhZC5cbi8vXG4vLyBjb250ZW50LXR5cGUgYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDA4MTIwXG4vLyA0MDQgYnVnOiBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDQ3OTE2XG4vLyBGaWxlUmVhZGVyIGJ1ZzogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ0NzgzNlxuLy9cbi8vIENvZGUgYm9ycm93ZWQgZnJvbSBQb3VjaERCLiBTZWU6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vcG91Y2hkYi9wb3VjaGRiL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL25vZGVfbW9kdWxlcy9wb3VjaGRiLWFkYXB0ZXItaWRiL3NyYy9ibG9iU3VwcG9ydC5qc1xuLy9cbmZ1bmN0aW9uIF9jaGVja0Jsb2JTdXBwb3J0V2l0aG91dENhY2hpbmcoaWRiKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgdmFyIHR4biA9IGlkYi50cmFuc2FjdGlvbihERVRFQ1RfQkxPQl9TVVBQT1JUX1NUT1JFLCBSRUFEX1dSSVRFKTtcbiAgICAgICAgdmFyIGJsb2IgPSBjcmVhdGVCbG9iKFsnJ10pO1xuICAgICAgICB0eG4ub2JqZWN0U3RvcmUoREVURUNUX0JMT0JfU1VQUE9SVF9TVE9SRSkucHV0KGJsb2IsICdrZXknKTtcblxuICAgICAgICB0eG4ub25hYm9ydCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdHJhbnNhY3Rpb24gYWJvcnRzIG5vdyBpdHMgZHVlIHRvIG5vdCBiZWluZyBhYmxlIHRvXG4gICAgICAgICAgICAvLyB3cml0ZSB0byB0aGUgZGF0YWJhc2UsIGxpa2VseSBkdWUgdG8gdGhlIGRpc2sgYmVpbmcgZnVsbFxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHR4bi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1hdGNoZWRDaHJvbWUgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICAgICAgICAgIHZhciBtYXRjaGVkRWRnZSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8vKTtcbiAgICAgICAgICAgIC8vIE1TIEVkZ2UgcHJldGVuZHMgdG8gYmUgQ2hyb21lIDQyOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9oaDg2OTMwMSUyOHY9dnMuODUlMjkuYXNweFxuICAgICAgICAgICAgcmVzb2x2ZShtYXRjaGVkRWRnZSB8fCAhbWF0Y2hlZENocm9tZSB8fCBwYXJzZUludChtYXRjaGVkQ2hyb21lWzFdLCAxMCkgPj0gNDMpO1xuICAgICAgICB9O1xuICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGVycm9yLCBzbyBhc3N1bWUgdW5zdXBwb3J0ZWRcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2NoZWNrQmxvYlN1cHBvcnQoaWRiKSB7XG4gICAgaWYgKHR5cGVvZiBzdXBwb3J0c0Jsb2JzID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKHN1cHBvcnRzQmxvYnMpO1xuICAgIH1cbiAgICByZXR1cm4gX2NoZWNrQmxvYlN1cHBvcnRXaXRob3V0Q2FjaGluZyhpZGIpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHN1cHBvcnRzQmxvYnMgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzQmxvYnM7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIF9kZWZlclJlYWRpbmVzcyhkYkluZm8pIHtcbiAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV07XG5cbiAgICAvLyBDcmVhdGUgYSBkZWZlcnJlZCBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjdXJyZW50IGRhdGFiYXNlIG9wZXJhdGlvbi5cbiAgICB2YXIgZGVmZXJyZWRPcGVyYXRpb24gPSB7fTtcblxuICAgIGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZGVmZXJyZWRPcGVyYXRpb24ucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uLnJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcblxuICAgIC8vIEVucXVldWUgdGhlIGRlZmVycmVkIG9wZXJhdGlvbi5cbiAgICBkYkNvbnRleHQuZGVmZXJyZWRPcGVyYXRpb25zLnB1c2goZGVmZXJyZWRPcGVyYXRpb24pO1xuXG4gICAgLy8gQ2hhaW4gaXRzIHByb21pc2UgdG8gdGhlIGRhdGFiYXNlIHJlYWRpbmVzcy5cbiAgICBpZiAoIWRiQ29udGV4dC5kYlJlYWR5KSB7XG4gICAgICAgIGRiQ29udGV4dC5kYlJlYWR5ID0gZGVmZXJyZWRPcGVyYXRpb24ucHJvbWlzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkYkNvbnRleHQuZGJSZWFkeSA9IGRiQ29udGV4dC5kYlJlYWR5LnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX2FkdmFuY2VSZWFkaW5lc3MoZGJJbmZvKSB7XG4gICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdO1xuXG4gICAgLy8gRGVxdWV1ZSBhIGRlZmVycmVkIG9wZXJhdGlvbi5cbiAgICB2YXIgZGVmZXJyZWRPcGVyYXRpb24gPSBkYkNvbnRleHQuZGVmZXJyZWRPcGVyYXRpb25zLnBvcCgpO1xuXG4gICAgLy8gUmVzb2x2ZSBpdHMgcHJvbWlzZSAod2hpY2ggaXMgcGFydCBvZiB0aGUgZGF0YWJhc2UgcmVhZGluZXNzXG4gICAgLy8gY2hhaW4gb2YgcHJvbWlzZXMpLlxuICAgIGlmIChkZWZlcnJlZE9wZXJhdGlvbikge1xuICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbi5yZXNvbHZlKCk7XG4gICAgICAgIHJldHVybiBkZWZlcnJlZE9wZXJhdGlvbi5wcm9taXNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX3JlamVjdFJlYWRpbmVzcyhkYkluZm8sIGVycikge1xuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcblxuICAgIC8vIERlcXVldWUgYSBkZWZlcnJlZCBvcGVyYXRpb24uXG4gICAgdmFyIGRlZmVycmVkT3BlcmF0aW9uID0gZGJDb250ZXh0LmRlZmVycmVkT3BlcmF0aW9ucy5wb3AoKTtcblxuICAgIC8vIFJlamVjdCBpdHMgcHJvbWlzZSAod2hpY2ggaXMgcGFydCBvZiB0aGUgZGF0YWJhc2UgcmVhZGluZXNzXG4gICAgLy8gY2hhaW4gb2YgcHJvbWlzZXMpLlxuICAgIGlmIChkZWZlcnJlZE9wZXJhdGlvbikge1xuICAgICAgICBkZWZlcnJlZE9wZXJhdGlvbi5yZWplY3QoZXJyKTtcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkT3BlcmF0aW9uLnByb21pc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBfZ2V0Q29ubmVjdGlvbihkYkluZm8sIHVwZ3JhZGVOZWVkZWQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdID0gZGJDb250ZXh0c1tkYkluZm8ubmFtZV0gfHwgY3JlYXRlRGJDb250ZXh0KCk7XG5cbiAgICAgICAgaWYgKGRiSW5mby5kYikge1xuICAgICAgICAgICAgaWYgKHVwZ3JhZGVOZWVkZWQpIHtcbiAgICAgICAgICAgICAgICBfZGVmZXJSZWFkaW5lc3MoZGJJbmZvKTtcbiAgICAgICAgICAgICAgICBkYkluZm8uZGIuY2xvc2UoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZGJJbmZvLmRiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYkFyZ3MgPSBbZGJJbmZvLm5hbWVdO1xuXG4gICAgICAgIGlmICh1cGdyYWRlTmVlZGVkKSB7XG4gICAgICAgICAgICBkYkFyZ3MucHVzaChkYkluZm8udmVyc2lvbik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3BlbnJlcSA9IGlkYi5vcGVuLmFwcGx5KGlkYiwgZGJBcmdzKTtcblxuICAgICAgICBpZiAodXBncmFkZU5lZWRlZCkge1xuICAgICAgICAgICAgb3BlbnJlcS5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHZhciBkYiA9IG9wZW5yZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKGRiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZS5vbGRWZXJzaW9uIDw9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZGVkIHdoZW4gc3VwcG9ydCBmb3IgYmxvYiBzaGltcyB3YXMgYWRkZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKERFVEVDVF9CTE9CX1NVUFBPUlRfU1RPUkUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4Lm5hbWUgPT09ICdDb25zdHJhaW50RXJyb3InKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBkYXRhYmFzZSBcIicgKyBkYkluZm8ubmFtZSArICdcIicgKyAnIGhhcyBiZWVuIHVwZ3JhZGVkIGZyb20gdmVyc2lvbiAnICsgZS5vbGRWZXJzaW9uICsgJyB0byB2ZXJzaW9uICcgKyBlLm5ld1ZlcnNpb24gKyAnLCBidXQgdGhlIHN0b3JhZ2UgXCInICsgZGJJbmZvLnN0b3JlTmFtZSArICdcIiBhbHJlYWR5IGV4aXN0cy4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGV4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wZW5yZXEub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICByZWplY3Qob3BlbnJlcS5lcnJvcik7XG4gICAgICAgIH07XG5cbiAgICAgICAgb3BlbnJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGIgPSBvcGVucmVxLnJlc3VsdDtcbiAgICAgICAgICAgIGRiLm9udmVyc2lvbmNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlcmVkIHdoZW4gdGhlIGRhdGFiYXNlIGlzIG1vZGlmaWVkIChlLmcuIGFkZGluZyBhbiBvYmplY3RTdG9yZSkgb3JcbiAgICAgICAgICAgICAgICAvLyBkZWxldGVkIChldmVuIHdoZW4gaW5pdGlhdGVkIGJ5IG90aGVyIHNlc3Npb25zIGluIGRpZmZlcmVudCB0YWJzKS5cbiAgICAgICAgICAgICAgICAvLyBDbG9zaW5nIHRoZSBjb25uZWN0aW9uIGhlcmUgcHJldmVudHMgdGhvc2Ugb3BlcmF0aW9ucyBmcm9tIGJlaW5nIGJsb2NrZWQuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGRhdGFiYXNlIGlzIGFjY2Vzc2VkIGFnYWluIGxhdGVyIGJ5IHRoaXMgaW5zdGFuY2UsIHRoZSBjb25uZWN0aW9uXG4gICAgICAgICAgICAgICAgLy8gd2lsbCBiZSByZW9wZW5lZCBvciB0aGUgZGF0YWJhc2UgcmVjcmVhdGVkIGFzIG5lZWRlZC5cbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbG9zZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgICAgICAgX2FkdmFuY2VSZWFkaW5lc3MoZGJJbmZvKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gX2dldE9yaWdpbmFsQ29ubmVjdGlvbihkYkluZm8pIHtcbiAgICByZXR1cm4gX2dldENvbm5lY3Rpb24oZGJJbmZvLCBmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKSB7XG4gICAgcmV0dXJuIF9nZXRDb25uZWN0aW9uKGRiSW5mbywgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIF9pc1VwZ3JhZGVOZWVkZWQoZGJJbmZvLCBkZWZhdWx0VmVyc2lvbikge1xuICAgIGlmICghZGJJbmZvLmRiKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBpc05ld1N0b3JlID0gIWRiSW5mby5kYi5vYmplY3RTdG9yZU5hbWVzLmNvbnRhaW5zKGRiSW5mby5zdG9yZU5hbWUpO1xuICAgIHZhciBpc0Rvd25ncmFkZSA9IGRiSW5mby52ZXJzaW9uIDwgZGJJbmZvLmRiLnZlcnNpb247XG4gICAgdmFyIGlzVXBncmFkZSA9IGRiSW5mby52ZXJzaW9uID4gZGJJbmZvLmRiLnZlcnNpb247XG5cbiAgICBpZiAoaXNEb3duZ3JhZGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHZlcnNpb24gaXMgbm90IHRoZSBkZWZhdWx0IG9uZVxuICAgICAgICAvLyB0aGVuIHdhcm4gZm9yIGltcG9zc2libGUgZG93bmdyYWRlLlxuICAgICAgICBpZiAoZGJJbmZvLnZlcnNpb24gIT09IGRlZmF1bHRWZXJzaW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBkYXRhYmFzZSBcIicgKyBkYkluZm8ubmFtZSArICdcIicgKyBcIiBjYW4ndCBiZSBkb3duZ3JhZGVkIGZyb20gdmVyc2lvbiBcIiArIGRiSW5mby5kYi52ZXJzaW9uICsgJyB0byB2ZXJzaW9uICcgKyBkYkluZm8udmVyc2lvbiArICcuJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWxpZ24gdGhlIHZlcnNpb25zIHRvIHByZXZlbnQgZXJyb3JzLlxuICAgICAgICBkYkluZm8udmVyc2lvbiA9IGRiSW5mby5kYi52ZXJzaW9uO1xuICAgIH1cblxuICAgIGlmIChpc1VwZ3JhZGUgfHwgaXNOZXdTdG9yZSkge1xuICAgICAgICAvLyBJZiB0aGUgc3RvcmUgaXMgbmV3IHRoZW4gaW5jcmVtZW50IHRoZSB2ZXJzaW9uIChpZiBuZWVkZWQpLlxuICAgICAgICAvLyBUaGlzIHdpbGwgdHJpZ2dlciBhbiBcInVwZ3JhZGVuZWVkZWRcIiBldmVudCB3aGljaCBpcyByZXF1aXJlZFxuICAgICAgICAvLyBmb3IgY3JlYXRpbmcgYSBzdG9yZS5cbiAgICAgICAgaWYgKGlzTmV3U3RvcmUpIHtcbiAgICAgICAgICAgIHZhciBpbmNWZXJzaW9uID0gZGJJbmZvLmRiLnZlcnNpb24gKyAxO1xuICAgICAgICAgICAgaWYgKGluY1ZlcnNpb24gPiBkYkluZm8udmVyc2lvbikge1xuICAgICAgICAgICAgICAgIGRiSW5mby52ZXJzaW9uID0gaW5jVmVyc2lvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8gZW5jb2RlIGEgYmxvYiBmb3IgaW5kZXhlZGRiIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0IGJsb2JzXG5mdW5jdGlvbiBfZW5jb2RlQmxvYihibG9iKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGJhc2U2NCA9IGJ0b2EoZS50YXJnZXQucmVzdWx0IHx8ICcnKTtcbiAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIF9fbG9jYWxfZm9yYWdlX2VuY29kZWRfYmxvYjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBiYXNlNjQsXG4gICAgICAgICAgICAgICAgdHlwZTogYmxvYi50eXBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyhibG9iKTtcbiAgICB9KTtcbn1cblxuLy8gZGVjb2RlIGFuIGVuY29kZWQgYmxvYlxuZnVuY3Rpb24gX2RlY29kZUJsb2IoZW5jb2RlZEJsb2IpIHtcbiAgICB2YXIgYXJyYXlCdWZmID0gX2JpblN0cmluZ1RvQXJyYXlCdWZmZXIoYXRvYihlbmNvZGVkQmxvYi5kYXRhKSk7XG4gICAgcmV0dXJuIGNyZWF0ZUJsb2IoW2FycmF5QnVmZl0sIHsgdHlwZTogZW5jb2RlZEJsb2IudHlwZSB9KTtcbn1cblxuLy8gaXMgdGhpcyBvbmUgb2Ygb3VyIGZhbmN5IGVuY29kZWQgYmxvYnM/XG5mdW5jdGlvbiBfaXNFbmNvZGVkQmxvYih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5fX2xvY2FsX2ZvcmFnZV9lbmNvZGVkX2Jsb2I7XG59XG5cbi8vIFNwZWNpYWxpemUgdGhlIGRlZmF1bHQgYHJlYWR5KClgIGZ1bmN0aW9uIGJ5IG1ha2luZyBpdCBkZXBlbmRlbnRcbi8vIG9uIHRoZSBjdXJyZW50IGRhdGFiYXNlIG9wZXJhdGlvbnMuIFRodXMsIHRoZSBkcml2ZXIgd2lsbCBiZSBhY3R1YWxseVxuLy8gcmVhZHkgd2hlbiBpdCdzIGJlZW4gaW5pdGlhbGl6ZWQgKGRlZmF1bHQpICphbmQqIHRoZXJlIGFyZSBubyBwZW5kaW5nXG4vLyBvcGVyYXRpb25zIG9uIHRoZSBkYXRhYmFzZSAoaW5pdGlhdGVkIGJ5IHNvbWUgb3RoZXIgaW5zdGFuY2VzKS5cbmZ1bmN0aW9uIF9mdWxseVJlYWR5KGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLl9pbml0UmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiQ29udGV4dCA9IGRiQ29udGV4dHNbc2VsZi5fZGJJbmZvLm5hbWVdO1xuXG4gICAgICAgIGlmIChkYkNvbnRleHQgJiYgZGJDb250ZXh0LmRiUmVhZHkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYkNvbnRleHQuZGJSZWFkeTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyhwcm9taXNlLCBjYWxsYmFjaywgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBUcnkgdG8gZXN0YWJsaXNoIGEgbmV3IGRiIGNvbm5lY3Rpb24gdG8gcmVwbGFjZSB0aGVcbi8vIGN1cnJlbnQgb25lIHdoaWNoIGlzIGJyb2tlbiAoaS5lLiBleHBlcmllbmNpbmdcbi8vIEludmFsaWRTdGF0ZUVycm9yIHdoaWxlIGNyZWF0aW5nIGEgdHJhbnNhY3Rpb24pLlxuZnVuY3Rpb24gX3RyeVJlY29ubmVjdChkYkluZm8pIHtcbiAgICBfZGVmZXJSZWFkaW5lc3MoZGJJbmZvKTtcblxuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcbiAgICB2YXIgZm9yYWdlcyA9IGRiQ29udGV4dC5mb3JhZ2VzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmb3JhZ2UgPSBmb3JhZ2VzW2ldO1xuICAgICAgICBpZiAoZm9yYWdlLl9kYkluZm8uZGIpIHtcbiAgICAgICAgICAgIGZvcmFnZS5fZGJJbmZvLmRiLmNsb3NlKCk7XG4gICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGJJbmZvLmRiID0gbnVsbDtcblxuICAgIHJldHVybiBfZ2V0T3JpZ2luYWxDb25uZWN0aW9uKGRiSW5mbykudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgZGJJbmZvLmRiID0gZGI7XG4gICAgICAgIGlmIChfaXNVcGdyYWRlTmVlZGVkKGRiSW5mbykpIHtcbiAgICAgICAgICAgIC8vIFJlb3BlbiB0aGUgZGF0YWJhc2UgZm9yIHVwZ3JhZGluZy5cbiAgICAgICAgICAgIHJldHVybiBfZ2V0VXBncmFkZWRDb25uZWN0aW9uKGRiSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRiO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgIC8vIHN0b3JlIHRoZSBsYXRlc3QgZGIgcmVmZXJlbmNlXG4gICAgICAgIC8vIGluIGNhc2UgdGhlIGRiIHdhcyB1cGdyYWRlZFxuICAgICAgICBkYkluZm8uZGIgPSBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3JhZ2VzW2ldLl9kYkluZm8uZGIgPSBkYjtcbiAgICAgICAgfVxuICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycikge1xuICAgICAgICBfcmVqZWN0UmVhZGluZXNzKGRiSW5mbywgZXJyKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuXG4vLyBGRiBkb2Vzbid0IGxpa2UgUHJvbWlzZXMgKG1pY3JvLXRhc2tzKSBhbmQgSUREQiBzdG9yZSBvcGVyYXRpb25zLFxuLy8gc28gd2UgaGF2ZSB0byBkbyBpdCB3aXRoIGNhbGxiYWNrc1xuZnVuY3Rpb24gY3JlYXRlVHJhbnNhY3Rpb24oZGJJbmZvLCBtb2RlLCBjYWxsYmFjaywgcmV0cmllcykge1xuICAgIGlmIChyZXRyaWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0cmllcyA9IDE7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHR4ID0gZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGRiSW5mby5zdG9yZU5hbWUsIG1vZGUpO1xuICAgICAgICBjYWxsYmFjayhudWxsLCB0eCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGlmIChyZXRyaWVzID4gMCAmJiAoIWRiSW5mby5kYiB8fCBlcnIubmFtZSA9PT0gJ0ludmFsaWRTdGF0ZUVycm9yJyB8fCBlcnIubmFtZSA9PT0gJ05vdEZvdW5kRXJyb3InKSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UkMS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYkluZm8uZGIgfHwgZXJyLm5hbWUgPT09ICdOb3RGb3VuZEVycm9yJyAmJiAhZGJJbmZvLmRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoZGJJbmZvLnN0b3JlTmFtZSkgJiYgZGJJbmZvLnZlcnNpb24gPD0gZGJJbmZvLmRiLnZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGRiIHZlcnNpb24sIHRvIGNyZWF0ZSB0aGUgbmV3IE9iamVjdFN0b3JlXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYkluZm8uZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRiSW5mby52ZXJzaW9uID0gZGJJbmZvLmRiLnZlcnNpb24gKyAxO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlb3BlbiB0aGUgZGF0YWJhc2UgZm9yIHVwZ3JhZGluZy5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RyeVJlY29ubmVjdChkYkluZm8pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihkYkluZm8sIG1vZGUsIGNhbGxiYWNrLCByZXRyaWVzIC0gMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVtcImNhdGNoXCJdKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVEYkNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUnVubmluZyBsb2NhbEZvcmFnZXMgc2hhcmluZyBhIGRhdGFiYXNlLlxuICAgICAgICBmb3JhZ2VzOiBbXSxcbiAgICAgICAgLy8gU2hhcmVkIGRhdGFiYXNlLlxuICAgICAgICBkYjogbnVsbCxcbiAgICAgICAgLy8gRGF0YWJhc2UgcmVhZGluZXNzIChwcm9taXNlKS5cbiAgICAgICAgZGJSZWFkeTogbnVsbCxcbiAgICAgICAgLy8gRGVmZXJyZWQgb3BlcmF0aW9ucyBvbiB0aGUgZGF0YWJhc2UuXG4gICAgICAgIGRlZmVycmVkT3BlcmF0aW9uczogW11cbiAgICB9O1xufVxuXG4vLyBPcGVuIHRoZSBJbmRleGVkREIgZGF0YWJhc2UgKGF1dG9tYXRpY2FsbHkgY3JlYXRlcyBvbmUgaWYgb25lIGRpZG4ndFxuLy8gcHJldmlvdXNseSBleGlzdCksIHVzaW5nIGFueSBvcHRpb25zIHNldCBpbiB0aGUgY29uZmlnLlxuZnVuY3Rpb24gX2luaXRTdG9yYWdlKG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGRiSW5mbyA9IHtcbiAgICAgICAgZGI6IG51bGxcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBkYkluZm9baV0gPSBvcHRpb25zW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IGNvbnRleHQgb2YgdGhlIGRhdGFiYXNlO1xuICAgIHZhciBkYkNvbnRleHQgPSBkYkNvbnRleHRzW2RiSW5mby5uYW1lXTtcblxuICAgIC8vIC4uLm9yIGNyZWF0ZSBhIG5ldyBjb250ZXh0LlxuICAgIGlmICghZGJDb250ZXh0KSB7XG4gICAgICAgIGRiQ29udGV4dCA9IGNyZWF0ZURiQ29udGV4dCgpO1xuICAgICAgICAvLyBSZWdpc3RlciB0aGUgbmV3IGNvbnRleHQgaW4gdGhlIGdsb2JhbCBjb250YWluZXIuXG4gICAgICAgIGRiQ29udGV4dHNbZGJJbmZvLm5hbWVdID0gZGJDb250ZXh0O1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVyIGl0c2VsZiBhcyBhIHJ1bm5pbmcgbG9jYWxGb3JhZ2UgaW4gdGhlIGN1cnJlbnQgY29udGV4dC5cbiAgICBkYkNvbnRleHQuZm9yYWdlcy5wdXNoKHNlbGYpO1xuXG4gICAgLy8gUmVwbGFjZSB0aGUgZGVmYXVsdCBgcmVhZHkoKWAgZnVuY3Rpb24gd2l0aCB0aGUgc3BlY2lhbGl6ZWQgb25lLlxuICAgIGlmICghc2VsZi5faW5pdFJlYWR5KSB7XG4gICAgICAgIHNlbGYuX2luaXRSZWFkeSA9IHNlbGYucmVhZHk7XG4gICAgICAgIHNlbGYucmVhZHkgPSBfZnVsbHlSZWFkeTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgaW5pdGlhbGl6YXRpb24gc3RhdGVzIG9mIHRoZSByZWxhdGVkIGxvY2FsRm9yYWdlcy5cbiAgICB2YXIgaW5pdFByb21pc2VzID0gW107XG5cbiAgICBmdW5jdGlvbiBpZ25vcmVFcnJvcnMoKSB7XG4gICAgICAgIC8vIERvbid0IGhhbmRsZSBlcnJvcnMgaGVyZSxcbiAgICAgICAgLy8ganVzdCBtYWtlcyBzdXJlIHJlbGF0ZWQgbG9jYWxGb3JhZ2VzIGFyZW4ndCBwZW5kaW5nLlxuICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRiQ29udGV4dC5mb3JhZ2VzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBmb3JhZ2UgPSBkYkNvbnRleHQuZm9yYWdlc1tqXTtcbiAgICAgICAgaWYgKGZvcmFnZSAhPT0gc2VsZikge1xuICAgICAgICAgICAgLy8gRG9uJ3Qgd2FpdCBmb3IgaXRzZWxmLi4uXG4gICAgICAgICAgICBpbml0UHJvbWlzZXMucHVzaChmb3JhZ2UuX2luaXRSZWFkeSgpW1wiY2F0Y2hcIl0oaWdub3JlRXJyb3JzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUYWtlIGEgc25hcHNob3Qgb2YgdGhlIHJlbGF0ZWQgbG9jYWxGb3JhZ2VzLlxuICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXMuc2xpY2UoMCk7XG5cbiAgICAvLyBJbml0aWFsaXplIHRoZSBjb25uZWN0aW9uIHByb2Nlc3Mgb25seSB3aGVuXG4gICAgLy8gYWxsIHRoZSByZWxhdGVkIGxvY2FsRm9yYWdlcyBhcmVuJ3QgcGVuZGluZy5cbiAgICByZXR1cm4gUHJvbWlzZSQxLmFsbChpbml0UHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBkYkluZm8uZGIgPSBkYkNvbnRleHQuZGI7XG4gICAgICAgIC8vIEdldCB0aGUgY29ubmVjdGlvbiBvciBvcGVuIGEgbmV3IG9uZSB3aXRob3V0IHVwZ3JhZGUuXG4gICAgICAgIHJldHVybiBfZ2V0T3JpZ2luYWxDb25uZWN0aW9uKGRiSW5mbyk7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgZGJJbmZvLmRiID0gZGI7XG4gICAgICAgIGlmIChfaXNVcGdyYWRlTmVlZGVkKGRiSW5mbywgc2VsZi5fZGVmYXVsdENvbmZpZy52ZXJzaW9uKSkge1xuICAgICAgICAgICAgLy8gUmVvcGVuIHRoZSBkYXRhYmFzZSBmb3IgdXBncmFkaW5nLlxuICAgICAgICAgICAgcmV0dXJuIF9nZXRVcGdyYWRlZENvbm5lY3Rpb24oZGJJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGI7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgZGJJbmZvLmRiID0gZGJDb250ZXh0LmRiID0gZGI7XG4gICAgICAgIHNlbGYuX2RiSW5mbyA9IGRiSW5mbztcbiAgICAgICAgLy8gU2hhcmUgdGhlIGZpbmFsIGNvbm5lY3Rpb24gYW1vbmdzdCByZWxhdGVkIGxvY2FsRm9yYWdlcy5cbiAgICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCBmb3JhZ2VzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICB2YXIgZm9yYWdlID0gZm9yYWdlc1trXTtcbiAgICAgICAgICAgIGlmIChmb3JhZ2UgIT09IHNlbGYpIHtcbiAgICAgICAgICAgICAgICAvLyBTZWxmIGlzIGFscmVhZHkgdXAtdG8tZGF0ZS5cbiAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby5kYiA9IGRiSW5mby5kYjtcbiAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby52ZXJzaW9uID0gZGJJbmZvLnZlcnNpb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SXRlbShrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLmdldChrZXkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2lzRW5jb2RlZEJsb2IodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBfZGVjb2RlQmxvYih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBJdGVyYXRlIG92ZXIgYWxsIGl0ZW1zIHN0b3JlZCBpbiBkYXRhYmFzZS5cbmZ1bmN0aW9uIGl0ZXJhdGUoaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX09OTFksIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5vcGVuQ3Vyc29yKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVyYXRpb25OdW1iZXIgPSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyc29yID0gcmVxLnJlc3VsdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnNvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGN1cnNvci52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2lzRW5jb2RlZEJsb2IodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gX2RlY29kZUJsb2IodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IodmFsdWUsIGN1cnNvci5rZXksIGl0ZXJhdGlvbk51bWJlcisrKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGl0ZXJhdG9yIGNhbGxiYWNrIHJldHVybnMgYW55XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKG5vbi1gdW5kZWZpbmVkYCkgdmFsdWUsIHRoZW4gd2Ugc3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBpdGVyYXRpb24gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ICE9PSB2b2lkIDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcltcImNvbnRpbnVlXCJdKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcblxuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBzZXRJdGVtKGtleSwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICB2YXIgZGJJbmZvO1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBpZiAodG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEJsb2JdJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfY2hlY2tCbG9iU3VwcG9ydChkYkluZm8uZGIpLnRoZW4oZnVuY3Rpb24gKGJsb2JTdXBwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9iU3VwcG9ydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfZW5jb2RlQmxvYih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfV1JJVEUsIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlYXNvbiB3ZSBkb24ndCBfc2F2ZV8gbnVsbCBpcyBiZWNhdXNlIElFIDEwIGRvZXNcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90IHN1cHBvcnQgc2F2aW5nIHRoZSBgbnVsbGAgdHlwZSBpbiBJbmRleGVkREIuIEhvd1xuICAgICAgICAgICAgICAgICAgICAvLyBpcm9uaWMsIGdpdmVuIHRoZSBidWcgYmVsb3chXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvaXNzdWVzLzE2MVxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLnB1dCh2YWx1ZSwga2V5KTtcblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FzdCB0byB1bmRlZmluZWQgc28gdGhlIHZhbHVlIHBhc3NlZCB0b1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FsbGJhY2svcHJvbWlzZSBpcyB0aGUgc2FtZSBhcyB3aGF0IG9uZSB3b3VsZCBnZXQgb3V0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvZiBgZ2V0SXRlbSgpYCBsYXRlci4gVGhpcyBsZWFkcyB0byBzb21lIHdlaXJkbmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKHNldEl0ZW0oJ2ZvbycsIHVuZGVmaW5lZCkgd2lsbCByZXR1cm4gYG51bGxgKSwgYnV0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdCBteSBmYXVsdCBsb2NhbFN0b3JhZ2UgaXMgb3VyIGJhc2VsaW5lIGFuZCB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIHdlaXJkLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmFib3J0ID0gdHJhbnNhY3Rpb24ub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSByZXEuZXJyb3IgPyByZXEuZXJyb3IgOiByZXEudHJhbnNhY3Rpb24uZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSXRlbShrZXksIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfV1JJVEUsIGZ1bmN0aW9uIChlcnIsIHRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc2VsZi5fZGJJbmZvLnN0b3JlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIHVzZSBhIEdydW50IHRhc2sgdG8gbWFrZSB0aGlzIHNhZmUgZm9yIElFIGFuZCBzb21lXG4gICAgICAgICAgICAgICAgICAgIC8vIHZlcnNpb25zIG9mIEFuZHJvaWQgKGluY2x1ZGluZyB0aG9zZSB1c2VkIGJ5IENvcmRvdmEpLlxuICAgICAgICAgICAgICAgICAgICAvLyBOb3JtYWxseSBJRSB3b24ndCBsaWtlIGAuZGVsZXRlKClgIGFuZCB3aWxsIGluc2lzdCBvblxuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBgWydkZWxldGUnXSgpYCwgYnV0IHdlIGhhdmUgYSBidWlsZCBzdGVwIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgLy8gZml4ZXMgdGhpcyBmb3IgdXMgbm93LlxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmVbXCJkZWxldGVcIl0oa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIHJlcXVlc3Qgd2lsbCBiZSBhbHNvIGJlIGFib3J0ZWQgaWYgd2UndmUgZXhjZWVkZWQgb3VyIHN0b3JhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gc3BhY2UuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0gcmVxLmVycm9yID8gcmVxLmVycm9yIDogcmVxLnRyYW5zYWN0aW9uLmVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb24oc2VsZi5fZGJJbmZvLCBSRUFEX1dSSVRFLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUuY2xlYXIoKTtcblxuICAgICAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbi5vbmNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uYWJvcnQgPSB0cmFuc2FjdGlvbi5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHJlcS5lcnJvciA/IHJlcS5lcnJvciA6IHJlcS50cmFuc2FjdGlvbi5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBsZW5ndGgoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IHN0b3JlLmNvdW50KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVxLnJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5KG4sIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgaWYgKG4gPCAwKSB7XG4gICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVUcmFuc2FjdGlvbihzZWxmLl9kYkluZm8sIFJFQURfT05MWSwgZnVuY3Rpb24gKGVyciwgdHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzZWxmLl9kYkluZm8uc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkdmFuY2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBzdG9yZS5vcGVuS2V5Q3Vyc29yKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJzb3IgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIG1lYW5zIHRoZXJlIHdlcmVuJ3QgZW5vdWdoIGtleXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGhhdmUgdGhlIGZpcnN0IGtleSwgcmV0dXJuIGl0IGlmIHRoYXQncyB3aGF0IHRoZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3YW50ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjdXJzb3Iua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhZHZhbmNlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGFzayB0aGUgY3Vyc29yIHRvIHNraXAgYWhlYWQgblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZWNvcmRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZHZhbmNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvci5hZHZhbmNlKG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gd2UgZ2V0IGhlcmUsIHdlJ3ZlIGdvdCB0aGUgbnRoIGtleS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjdXJzb3Iua2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QocmVxLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5cyhjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVRyYW5zYWN0aW9uKHNlbGYuX2RiSW5mbywgUkVBRF9PTkxZLCBmdW5jdGlvbiAoZXJyLCB0cmFuc2FjdGlvbikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHNlbGYuX2RiSW5mby5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxID0gc3RvcmUub3BlbktleUN1cnNvcigpO1xuICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyc29yID0gcmVxLnJlc3VsdDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJzb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGtleXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKGN1cnNvci5rZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yW1wiY29udGludWVcIl0oKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBkcm9wSW5zdGFuY2Uob3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICBjYWxsYmFjayA9IGdldENhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICB2YXIgY3VycmVudENvbmZpZyA9IHRoaXMuY29uZmlnKCk7XG4gICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zICE9PSAnZnVuY3Rpb24nICYmIG9wdGlvbnMgfHwge307XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IGN1cnJlbnRDb25maWcubmFtZTtcbiAgICAgICAgb3B0aW9ucy5zdG9yZU5hbWUgPSBvcHRpb25zLnN0b3JlTmFtZSB8fCBjdXJyZW50Q29uZmlnLnN0b3JlTmFtZTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2U7XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UkMS5yZWplY3QoJ0ludmFsaWQgYXJndW1lbnRzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGlzQ3VycmVudERiID0gb3B0aW9ucy5uYW1lID09PSBjdXJyZW50Q29uZmlnLm5hbWUgJiYgc2VsZi5fZGJJbmZvLmRiO1xuXG4gICAgICAgIHZhciBkYlByb21pc2UgPSBpc0N1cnJlbnREYiA/IFByb21pc2UkMS5yZXNvbHZlKHNlbGYuX2RiSW5mby5kYikgOiBfZ2V0T3JpZ2luYWxDb25uZWN0aW9uKG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tvcHRpb25zLm5hbWVdO1xuICAgICAgICAgICAgdmFyIGZvcmFnZXMgPSBkYkNvbnRleHQuZm9yYWdlcztcbiAgICAgICAgICAgIGRiQ29udGV4dC5kYiA9IGRiO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yYWdlc1tpXS5fZGJJbmZvLmRiID0gZGI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghb3B0aW9ucy5zdG9yZU5hbWUpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBkYlByb21pc2UudGhlbihmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgICAgICAgICBfZGVmZXJSZWFkaW5lc3Mob3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tvcHRpb25zLm5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXM7XG5cbiAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm9yYWdlID0gZm9yYWdlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkcm9wREJQcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBpZGIuZGVsZXRlRGF0YWJhc2Uob3B0aW9ucy5uYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICByZXEub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlcS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uYmxvY2tlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsb3NpbmcgYWxsIG9wZW4gY29ubmVjdGlvbnMgaW4gb252ZXJzaW9uY2hhbmdlIGhhbmRsZXIgc2hvdWxkIHByZXZlbnQgdGhpcyBzaXR1YXRpb24sIGJ1dCBpZlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG8gZ2V0IGhlcmUsIGl0IGp1c3QgbWVhbnMgdGhlIHJlcXVlc3QgcmVtYWlucyBwZW5kaW5nIC0gZXZlbnR1YWxseSBpdCB3aWxsIHN1Y2NlZWQgb3IgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignZHJvcEluc3RhbmNlIGJsb2NrZWQgZm9yIGRhdGFiYXNlIFwiJyArIG9wdGlvbnMubmFtZSArICdcIiB1bnRpbCBhbGwgb3BlbiBjb25uZWN0aW9ucyBhcmUgY2xvc2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uc3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYiA9IHJlcS5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYik7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZHJvcERCUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgICAgICAgICBkYkNvbnRleHQuZGIgPSBkYjtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmb3JhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2ZvcmFnZSA9IGZvcmFnZXNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBfYWR2YW5jZVJlYWRpbmVzcyhfZm9yYWdlLl9kYkluZm8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIChfcmVqZWN0UmVhZGluZXNzKG9wdGlvbnMsIGVycikgfHwgUHJvbWlzZSQxLnJlc29sdmUoKSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvbWlzZSA9IGRiUHJvbWlzZS50aGVuKGZ1bmN0aW9uIChkYikge1xuICAgICAgICAgICAgICAgIGlmICghZGIub2JqZWN0U3RvcmVOYW1lcy5jb250YWlucyhvcHRpb25zLnN0b3JlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBuZXdWZXJzaW9uID0gZGIudmVyc2lvbiArIDE7XG5cbiAgICAgICAgICAgICAgICBfZGVmZXJSZWFkaW5lc3Mob3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgZGJDb250ZXh0ID0gZGJDb250ZXh0c1tvcHRpb25zLm5hbWVdO1xuICAgICAgICAgICAgICAgIHZhciBmb3JhZ2VzID0gZGJDb250ZXh0LmZvcmFnZXM7XG5cbiAgICAgICAgICAgICAgICBkYi5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZm9yYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm9yYWdlID0gZm9yYWdlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yYWdlLl9kYkluZm8uZGIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBmb3JhZ2UuX2RiSW5mby52ZXJzaW9uID0gbmV3VmVyc2lvbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZHJvcE9iamVjdFByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcSA9IGlkYi5vcGVuKG9wdGlvbnMubmFtZSwgbmV3VmVyc2lvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVxLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGIuZGVsZXRlT2JqZWN0U3RvcmUob3B0aW9ucy5zdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHJlcS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGIgPSByZXEucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGIpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyb3BPYmplY3RQcm9taXNlLnRoZW4oZnVuY3Rpb24gKGRiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRiQ29udGV4dC5kYiA9IGRiO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZvcmFnZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZm9yYWdlMiA9IGZvcmFnZXNbal07XG4gICAgICAgICAgICAgICAgICAgICAgICBfZm9yYWdlMi5fZGJJbmZvLmRiID0gZGI7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYWR2YW5jZVJlYWRpbmVzcyhfZm9yYWdlMi5fZGJJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgICAgICAoX3JlamVjdFJlYWRpbmVzcyhvcHRpb25zLCBlcnIpIHx8IFByb21pc2UkMS5yZXNvbHZlKCkpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge30pO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbnZhciBhc3luY1N0b3JhZ2UgPSB7XG4gICAgX2RyaXZlcjogJ2FzeW5jU3RvcmFnZScsXG4gICAgX2luaXRTdG9yYWdlOiBfaW5pdFN0b3JhZ2UsXG4gICAgX3N1cHBvcnQ6IGlzSW5kZXhlZERCVmFsaWQoKSxcbiAgICBpdGVyYXRlOiBpdGVyYXRlLFxuICAgIGdldEl0ZW06IGdldEl0ZW0sXG4gICAgc2V0SXRlbTogc2V0SXRlbSxcbiAgICByZW1vdmVJdGVtOiByZW1vdmVJdGVtLFxuICAgIGNsZWFyOiBjbGVhcixcbiAgICBsZW5ndGg6IGxlbmd0aCxcbiAgICBrZXk6IGtleSxcbiAgICBrZXlzOiBrZXlzLFxuICAgIGRyb3BJbnN0YW5jZTogZHJvcEluc3RhbmNlXG59O1xuXG5mdW5jdGlvbiBpc1dlYlNRTFZhbGlkKCkge1xuICAgIHJldHVybiB0eXBlb2Ygb3BlbkRhdGFiYXNlID09PSAnZnVuY3Rpb24nO1xufVxuXG4vLyBTYWRseSwgdGhlIGJlc3Qgd2F5IHRvIHNhdmUgYmluYXJ5IGRhdGEgaW4gV2ViU1FML2xvY2FsU3RvcmFnZSBpcyBzZXJpYWxpemluZ1xuLy8gaXQgdG8gQmFzZTY0LCBzbyB0aGlzIGlzIGhvdyB3ZSBzdG9yZSBpdCB0byBwcmV2ZW50IHZlcnkgc3RyYW5nZSBlcnJvcnMgd2l0aCBsZXNzXG4vLyB2ZXJib3NlIHdheXMgb2YgYmluYXJ5IDwtPiBzdHJpbmcgZGF0YSBzdG9yYWdlLlxudmFyIEJBU0VfQ0hBUlMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLyc7XG5cbnZhciBCTE9CX1RZUEVfUFJFRklYID0gJ35+bG9jYWxfZm9yYWdlX3R5cGV+JztcbnZhciBCTE9CX1RZUEVfUFJFRklYX1JFR0VYID0gL15+fmxvY2FsX2ZvcmFnZV90eXBlfihbXn5dKyl+LztcblxudmFyIFNFUklBTElaRURfTUFSS0VSID0gJ19fbGZzY19fOic7XG52YXIgU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIID0gU0VSSUFMSVpFRF9NQVJLRVIubGVuZ3RoO1xuXG4vLyBPTUcgdGhlIHNlcmlhbGl6YXRpb25zIVxudmFyIFRZUEVfQVJSQVlCVUZGRVIgPSAnYXJiZic7XG52YXIgVFlQRV9CTE9CID0gJ2Jsb2InO1xudmFyIFRZUEVfSU5UOEFSUkFZID0gJ3NpMDgnO1xudmFyIFRZUEVfVUlOVDhBUlJBWSA9ICd1aTA4JztcbnZhciBUWVBFX1VJTlQ4Q0xBTVBFREFSUkFZID0gJ3VpYzgnO1xudmFyIFRZUEVfSU5UMTZBUlJBWSA9ICdzaTE2JztcbnZhciBUWVBFX0lOVDMyQVJSQVkgPSAnc2kzMic7XG52YXIgVFlQRV9VSU5UMTZBUlJBWSA9ICd1cjE2JztcbnZhciBUWVBFX1VJTlQzMkFSUkFZID0gJ3VpMzInO1xudmFyIFRZUEVfRkxPQVQzMkFSUkFZID0gJ2ZsMzInO1xudmFyIFRZUEVfRkxPQVQ2NEFSUkFZID0gJ2ZsNjQnO1xudmFyIFRZUEVfU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIID0gU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIICsgVFlQRV9BUlJBWUJVRkZFUi5sZW5ndGg7XG5cbnZhciB0b1N0cmluZyQxID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuZnVuY3Rpb24gc3RyaW5nVG9CdWZmZXIoc2VyaWFsaXplZFN0cmluZykge1xuICAgIC8vIEZpbGwgdGhlIHN0cmluZyBpbnRvIGEgQXJyYXlCdWZmZXIuXG4gICAgdmFyIGJ1ZmZlckxlbmd0aCA9IHNlcmlhbGl6ZWRTdHJpbmcubGVuZ3RoICogMC43NTtcbiAgICB2YXIgbGVuID0gc2VyaWFsaXplZFN0cmluZy5sZW5ndGg7XG4gICAgdmFyIGk7XG4gICAgdmFyIHAgPSAwO1xuICAgIHZhciBlbmNvZGVkMSwgZW5jb2RlZDIsIGVuY29kZWQzLCBlbmNvZGVkNDtcblxuICAgIGlmIChzZXJpYWxpemVkU3RyaW5nW3NlcmlhbGl6ZWRTdHJpbmcubGVuZ3RoIC0gMV0gPT09ICc9Jykge1xuICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgICAgaWYgKHNlcmlhbGl6ZWRTdHJpbmdbc2VyaWFsaXplZFN0cmluZy5sZW5ndGggLSAyXSA9PT0gJz0nKSB7XG4gICAgICAgICAgICBidWZmZXJMZW5ndGgtLTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoYnVmZmVyTGVuZ3RoKTtcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgICAgIGVuY29kZWQxID0gQkFTRV9DSEFSUy5pbmRleE9mKHNlcmlhbGl6ZWRTdHJpbmdbaV0pO1xuICAgICAgICBlbmNvZGVkMiA9IEJBU0VfQ0hBUlMuaW5kZXhPZihzZXJpYWxpemVkU3RyaW5nW2kgKyAxXSk7XG4gICAgICAgIGVuY29kZWQzID0gQkFTRV9DSEFSUy5pbmRleE9mKHNlcmlhbGl6ZWRTdHJpbmdbaSArIDJdKTtcbiAgICAgICAgZW5jb2RlZDQgPSBCQVNFX0NIQVJTLmluZGV4T2Yoc2VyaWFsaXplZFN0cmluZ1tpICsgM10pO1xuXG4gICAgICAgIC8qanNsaW50IGJpdHdpc2U6IHRydWUgKi9cbiAgICAgICAgYnl0ZXNbcCsrXSA9IGVuY29kZWQxIDw8IDIgfCBlbmNvZGVkMiA+PiA0O1xuICAgICAgICBieXRlc1twKytdID0gKGVuY29kZWQyICYgMTUpIDw8IDQgfCBlbmNvZGVkMyA+PiAyO1xuICAgICAgICBieXRlc1twKytdID0gKGVuY29kZWQzICYgMykgPDwgNiB8IGVuY29kZWQ0ICYgNjM7XG4gICAgfVxuICAgIHJldHVybiBidWZmZXI7XG59XG5cbi8vIENvbnZlcnRzIGEgYnVmZmVyIHRvIGEgc3RyaW5nIHRvIHN0b3JlLCBzZXJpYWxpemVkLCBpbiB0aGUgYmFja2VuZFxuLy8gc3RvcmFnZSBsaWJyYXJ5LlxuZnVuY3Rpb24gYnVmZmVyVG9TdHJpbmcoYnVmZmVyKSB7XG4gICAgLy8gYmFzZTY0LWFycmF5YnVmZmVyXG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICB2YXIgYmFzZTY0U3RyaW5nID0gJyc7XG4gICAgdmFyIGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICAgICAgLypqc2xpbnQgYml0d2lzZTogdHJ1ZSAqL1xuICAgICAgICBiYXNlNjRTdHJpbmcgKz0gQkFTRV9DSEFSU1tieXRlc1tpXSA+PiAyXTtcbiAgICAgICAgYmFzZTY0U3RyaW5nICs9IEJBU0VfQ0hBUlNbKGJ5dGVzW2ldICYgMykgPDwgNCB8IGJ5dGVzW2kgKyAxXSA+PiA0XTtcbiAgICAgICAgYmFzZTY0U3RyaW5nICs9IEJBU0VfQ0hBUlNbKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyIHwgYnl0ZXNbaSArIDJdID4+IDZdO1xuICAgICAgICBiYXNlNjRTdHJpbmcgKz0gQkFTRV9DSEFSU1tieXRlc1tpICsgMl0gJiA2M107XG4gICAgfVxuXG4gICAgaWYgKGJ5dGVzLmxlbmd0aCAlIDMgPT09IDIpIHtcbiAgICAgICAgYmFzZTY0U3RyaW5nID0gYmFzZTY0U3RyaW5nLnN1YnN0cmluZygwLCBiYXNlNjRTdHJpbmcubGVuZ3RoIC0gMSkgKyAnPSc7XG4gICAgfSBlbHNlIGlmIChieXRlcy5sZW5ndGggJSAzID09PSAxKSB7XG4gICAgICAgIGJhc2U2NFN0cmluZyA9IGJhc2U2NFN0cmluZy5zdWJzdHJpbmcoMCwgYmFzZTY0U3RyaW5nLmxlbmd0aCAtIDIpICsgJz09JztcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZTY0U3RyaW5nO1xufVxuXG4vLyBTZXJpYWxpemUgYSB2YWx1ZSwgYWZ0ZXJ3YXJkcyBleGVjdXRpbmcgYSBjYWxsYmFjayAod2hpY2ggdXN1YWxseVxuLy8gaW5zdHJ1Y3RzIHRoZSBgc2V0SXRlbSgpYCBjYWxsYmFjay9wcm9taXNlIHRvIGJlIGV4ZWN1dGVkKS4gVGhpcyBpcyBob3dcbi8vIHdlIHN0b3JlIGJpbmFyeSBkYXRhIHdpdGggbG9jYWxTdG9yYWdlLlxuZnVuY3Rpb24gc2VyaWFsaXplKHZhbHVlLCBjYWxsYmFjaykge1xuICAgIHZhciB2YWx1ZVR5cGUgPSAnJztcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWVUeXBlID0gdG9TdHJpbmckMS5jYWxsKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvLyBDYW5ub3QgdXNlIGB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyYCBvciBzdWNoIGhlcmUsIGFzIHRoZXNlXG4gICAgLy8gY2hlY2tzIGZhaWwgd2hlbiBydW5uaW5nIHRoZSB0ZXN0cyB1c2luZyBjYXNwZXIuanMuLi5cbiAgICAvL1xuICAgIC8vIFRPRE86IFNlZSB3aHkgdGhvc2UgdGVzdHMgZmFpbCBhbmQgdXNlIGEgYmV0dGVyIHNvbHV0aW9uLlxuICAgIGlmICh2YWx1ZSAmJiAodmFsdWVUeXBlID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nIHx8IHZhbHVlLmJ1ZmZlciAmJiB0b1N0cmluZyQxLmNhbGwodmFsdWUuYnVmZmVyKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJykpIHtcbiAgICAgICAgLy8gQ29udmVydCBiaW5hcnkgYXJyYXlzIHRvIGEgc3RyaW5nIGFuZCBwcmVmaXggdGhlIHN0cmluZyB3aXRoXG4gICAgICAgIC8vIGEgc3BlY2lhbCBtYXJrZXIuXG4gICAgICAgIHZhciBidWZmZXI7XG4gICAgICAgIHZhciBtYXJrZXIgPSBTRVJJQUxJWkVEX01BUktFUjtcblxuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgICAgICAgYnVmZmVyID0gdmFsdWU7XG4gICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9BUlJBWUJVRkZFUjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ1ZmZlciA9IHZhbHVlLmJ1ZmZlcjtcblxuICAgICAgICAgICAgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgSW50OEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9JTlQ4QVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgVWludDhBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDhBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDhDTEFNUEVEQVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgSW50MTZBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfSU5UMTZBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50MTZBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDE2QVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgSW50MzJBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfSU5UMzJBUlJBWTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBVaW50MzJBcnJheV0nKSB7XG4gICAgICAgICAgICAgICAgbWFya2VyICs9IFRZUEVfVUlOVDMyQVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9GTE9BVDMyQVJSQVk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXIgKz0gVFlQRV9GTE9BVDY0QVJSQVk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcignRmFpbGVkIHRvIGdldCB0eXBlIGZvciBCaW5hcnlBcnJheScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGxiYWNrKG1hcmtlciArIGJ1ZmZlclRvU3RyaW5nKGJ1ZmZlcikpO1xuICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlID09PSAnW29iamVjdCBCbG9iXScpIHtcbiAgICAgICAgLy8gQ29udmVyIHRoZSBibG9iIHRvIGEgYmluYXJ5QXJyYXkgYW5kIHRoZW4gdG8gYSBzdHJpbmcuXG4gICAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblxuICAgICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIEJhY2t3YXJkcy1jb21wYXRpYmxlIHByZWZpeCBmb3IgdGhlIGJsb2IgdHlwZS5cbiAgICAgICAgICAgIHZhciBzdHIgPSBCTE9CX1RZUEVfUFJFRklYICsgdmFsdWUudHlwZSArICd+JyArIGJ1ZmZlclRvU3RyaW5nKHRoaXMucmVzdWx0KTtcblxuICAgICAgICAgICAgY2FsbGJhY2soU0VSSUFMSVpFRF9NQVJLRVIgKyBUWVBFX0JMT0IgKyBzdHIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjYWxsYmFjayhKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGRuJ3QgY29udmVydCB2YWx1ZSBpbnRvIGEgSlNPTiBzdHJpbmc6IFwiLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBEZXNlcmlhbGl6ZSBkYXRhIHdlJ3ZlIGluc2VydGVkIGludG8gYSB2YWx1ZSBjb2x1bW4vZmllbGQuIFdlIHBsYWNlXG4vLyBzcGVjaWFsIG1hcmtlcnMgaW50byBvdXIgc3RyaW5ncyB0byBtYXJrIHRoZW0gYXMgZW5jb2RlZDsgdGhpcyBpc24ndFxuLy8gYXMgbmljZSBhcyBhIG1ldGEgZmllbGQsIGJ1dCBpdCdzIHRoZSBvbmx5IHNhbmUgdGhpbmcgd2UgY2FuIGRvIHdoaWxzdFxuLy8ga2VlcGluZyBsb2NhbFN0b3JhZ2Ugc3VwcG9ydCBpbnRhY3QuXG4vL1xuLy8gT2Z0ZW50aW1lcyB0aGlzIHdpbGwganVzdCBkZXNlcmlhbGl6ZSBKU09OIGNvbnRlbnQsIGJ1dCBpZiB3ZSBoYXZlIGFcbi8vIHNwZWNpYWwgbWFya2VyIChTRVJJQUxJWkVEX01BUktFUiwgZGVmaW5lZCBhYm92ZSksIHdlIHdpbGwgZXh0cmFjdFxuLy8gc29tZSBraW5kIG9mIGFycmF5YnVmZmVyL2JpbmFyeSBkYXRhL3R5cGVkIGFycmF5IG91dCBvZiB0aGUgc3RyaW5nLlxuZnVuY3Rpb24gZGVzZXJpYWxpemUodmFsdWUpIHtcbiAgICAvLyBJZiB3ZSBoYXZlbid0IG1hcmtlZCB0aGlzIHN0cmluZyBhcyBiZWluZyBzcGVjaWFsbHkgc2VyaWFsaXplZCAoaS5lLlxuICAgIC8vIHNvbWV0aGluZyBvdGhlciB0aGFuIHNlcmlhbGl6ZWQgSlNPTiksIHdlIGNhbiBqdXN0IHJldHVybiBpdCBhbmQgYmVcbiAgICAvLyBkb25lIHdpdGggaXQuXG4gICAgaWYgKHZhbHVlLnN1YnN0cmluZygwLCBTRVJJQUxJWkVEX01BUktFUl9MRU5HVEgpICE9PSBTRVJJQUxJWkVEX01BUktFUikge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIGRlYWxzIHdpdGggZGVzZXJpYWxpemluZyBzb21lIGtpbmQgb2YgQmxvYiBvclxuICAgIC8vIFR5cGVkQXJyYXkuIEZpcnN0IHdlIHNlcGFyYXRlIG91dCB0aGUgdHlwZSBvZiBkYXRhIHdlJ3JlIGRlYWxpbmdcbiAgICAvLyB3aXRoIGZyb20gdGhlIGRhdGEgaXRzZWxmLlxuICAgIHZhciBzZXJpYWxpemVkU3RyaW5nID0gdmFsdWUuc3Vic3RyaW5nKFRZUEVfU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIKTtcbiAgICB2YXIgdHlwZSA9IHZhbHVlLnN1YnN0cmluZyhTRVJJQUxJWkVEX01BUktFUl9MRU5HVEgsIFRZUEVfU0VSSUFMSVpFRF9NQVJLRVJfTEVOR1RIKTtcblxuICAgIHZhciBibG9iVHlwZTtcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0aWJsZSBibG9iIHR5cGUgc2VyaWFsaXphdGlvbiBzdHJhdGVneS5cbiAgICAvLyBEQnMgY3JlYXRlZCB3aXRoIG9sZGVyIHZlcnNpb25zIG9mIGxvY2FsRm9yYWdlIHdpbGwgc2ltcGx5IG5vdCBoYXZlIHRoZSBibG9iIHR5cGUuXG4gICAgaWYgKHR5cGUgPT09IFRZUEVfQkxPQiAmJiBCTE9CX1RZUEVfUFJFRklYX1JFR0VYLnRlc3Qoc2VyaWFsaXplZFN0cmluZykpIHtcbiAgICAgICAgdmFyIG1hdGNoZXIgPSBzZXJpYWxpemVkU3RyaW5nLm1hdGNoKEJMT0JfVFlQRV9QUkVGSVhfUkVHRVgpO1xuICAgICAgICBibG9iVHlwZSA9IG1hdGNoZXJbMV07XG4gICAgICAgIHNlcmlhbGl6ZWRTdHJpbmcgPSBzZXJpYWxpemVkU3RyaW5nLnN1YnN0cmluZyhtYXRjaGVyWzBdLmxlbmd0aCk7XG4gICAgfVxuICAgIHZhciBidWZmZXIgPSBzdHJpbmdUb0J1ZmZlcihzZXJpYWxpemVkU3RyaW5nKTtcblxuICAgIC8vIFJldHVybiB0aGUgcmlnaHQgdHlwZSBiYXNlZCBvbiB0aGUgY29kZS90eXBlIHNldCBkdXJpbmdcbiAgICAvLyBzZXJpYWxpemF0aW9uLlxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFRZUEVfQVJSQVlCVUZGRVI6XG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgICBjYXNlIFRZUEVfQkxPQjpcbiAgICAgICAgICAgIHJldHVybiBjcmVhdGVCbG9iKFtidWZmZXJdLCB7IHR5cGU6IGJsb2JUeXBlIH0pO1xuICAgICAgICBjYXNlIFRZUEVfSU5UOEFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX1VJTlQ4QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX1VJTlQ4Q0xBTVBFREFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVaW50OENsYW1wZWRBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfSU5UMTZBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW50MTZBcnJheShidWZmZXIpO1xuICAgICAgICBjYXNlIFRZUEVfVUlOVDE2QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVpbnQxNkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9JTlQzMkFSUkFZOlxuICAgICAgICAgICAgcmV0dXJuIG5ldyBJbnQzMkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9VSU5UMzJBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgVWludDMyQXJyYXkoYnVmZmVyKTtcbiAgICAgICAgY2FzZSBUWVBFX0ZMT0FUMzJBUlJBWTpcbiAgICAgICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KGJ1ZmZlcik7XG4gICAgICAgIGNhc2UgVFlQRV9GTE9BVDY0QVJSQVk6XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZsb2F0NjRBcnJheShidWZmZXIpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtvd24gdHlwZTogJyArIHR5cGUpO1xuICAgIH1cbn1cblxudmFyIGxvY2FsZm9yYWdlU2VyaWFsaXplciA9IHtcbiAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZSxcbiAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemUsXG4gICAgc3RyaW5nVG9CdWZmZXI6IHN0cmluZ1RvQnVmZmVyLFxuICAgIGJ1ZmZlclRvU3RyaW5nOiBidWZmZXJUb1N0cmluZ1xufTtcblxuLypcbiAqIEluY2x1ZGVzIGNvZGUgZnJvbTpcbiAqXG4gKiBiYXNlNjQtYXJyYXlidWZmZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXN2aC9iYXNlNjQtYXJyYXlidWZmZXJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgTmlrbGFzIHZvbiBIZXJ0emVuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRGJUYWJsZSh0LCBkYkluZm8sIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgdC5leGVjdXRlU3FsKCdDUkVBVEUgVEFCTEUgSUYgTk9UIEVYSVNUUyAnICsgZGJJbmZvLnN0b3JlTmFtZSArICcgJyArICcoaWQgSU5URUdFUiBQUklNQVJZIEtFWSwga2V5IHVuaXF1ZSwgdmFsdWUpJywgW10sIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbn1cblxuLy8gT3BlbiB0aGUgV2ViU1FMIGRhdGFiYXNlIChhdXRvbWF0aWNhbGx5IGNyZWF0ZXMgb25lIGlmIG9uZSBkaWRuJ3Rcbi8vIHByZXZpb3VzbHkgZXhpc3QpLCB1c2luZyBhbnkgb3B0aW9ucyBzZXQgaW4gdGhlIGNvbmZpZy5cbmZ1bmN0aW9uIF9pbml0U3RvcmFnZSQxKG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGRiSW5mbyA9IHtcbiAgICAgICAgZGI6IG51bGxcbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBkYkluZm9baV0gPSB0eXBlb2Ygb3B0aW9uc1tpXSAhPT0gJ3N0cmluZycgPyBvcHRpb25zW2ldLnRvU3RyaW5nKCkgOiBvcHRpb25zW2ldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRiSW5mb1Byb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgLy8gT3BlbiB0aGUgZGF0YWJhc2U7IHRoZSBvcGVuRGF0YWJhc2UgQVBJIHdpbGwgYXV0b21hdGljYWxseVxuICAgICAgICAvLyBjcmVhdGUgaXQgZm9yIHVzIGlmIGl0IGRvZXNuJ3QgZXhpc3QuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYkluZm8uZGIgPSBvcGVuRGF0YWJhc2UoZGJJbmZvLm5hbWUsIFN0cmluZyhkYkluZm8udmVyc2lvbiksIGRiSW5mby5kZXNjcmlwdGlvbiwgZGJJbmZvLnNpemUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIG91ciBrZXkvdmFsdWUgdGFibGUgaWYgaXQgZG9lc24ndCBleGlzdC5cbiAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICBjcmVhdGVEYlRhYmxlKHQsIGRiSW5mbywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuX2RiSW5mbyA9IGRiSW5mbztcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBkYkluZm8uc2VyaWFsaXplciA9IGxvY2FsZm9yYWdlU2VyaWFsaXplcjtcbiAgICByZXR1cm4gZGJJbmZvUHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sIHNxbFN0YXRlbWVudCwgYXJncywgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spIHtcbiAgICB0LmV4ZWN1dGVTcWwoc3FsU3RhdGVtZW50LCBhcmdzLCBjYWxsYmFjaywgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgIGlmIChlcnJvci5jb2RlID09PSBlcnJvci5TWU5UQVhfRVJSKSB7XG4gICAgICAgICAgICB0LmV4ZWN1dGVTcWwoJ1NFTEVDVCBuYW1lIEZST00gc3FsaXRlX21hc3RlciAnICsgXCJXSEVSRSB0eXBlPSd0YWJsZScgQU5EIG5hbWUgPSA/XCIsIFtkYkluZm8uc3RvcmVOYW1lXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdHMucm93cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHRhYmxlIGlzIG1pc3NpbmcgKHdhcyBkZWxldGVkKVxuICAgICAgICAgICAgICAgICAgICAvLyByZS1jcmVhdGUgaXQgdGFibGUgYW5kIHJldHJ5XG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZURiVGFibGUodCwgZGJJbmZvLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0LmV4ZWN1dGVTcWwoc3FsU3RhdGVtZW50LCBhcmdzLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sodCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3JDYWxsYmFjayh0LCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9LCBlcnJvckNhbGxiYWNrKTtcbn1cblxuZnVuY3Rpb24gZ2V0SXRlbSQxKGtleSwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uZGIudHJhbnNhY3Rpb24oZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ1NFTEVDVCAqIEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnIFdIRVJFIGtleSA9ID8gTElNSVQgMScsIFtrZXldLCBmdW5jdGlvbiAodCwgcmVzdWx0cykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzdWx0cy5yb3dzLmxlbmd0aCA/IHJlc3VsdHMucm93cy5pdGVtKDApLnZhbHVlIDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhpcyBpcyBzZXJpYWxpemVkIGNvbnRlbnQgd2UgbmVlZCB0b1xuICAgICAgICAgICAgICAgICAgICAvLyB1bnBhY2suXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRiSW5mby5zZXJpYWxpemVyLmRlc2VyaWFsaXplKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gaXRlcmF0ZSQxKGl0ZXJhdG9yLCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG5cbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUICogRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByb3dzID0gcmVzdWx0cy5yb3dzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuZ3RoID0gcm93cy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSByb3dzLml0ZW0oaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gaXRlbS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHRoaXMgaXMgc2VyaWFsaXplZCBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHVucGFjay5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBkYkluZm8uc2VyaWFsaXplci5kZXNlcmlhbGl6ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBpdGVyYXRvcihyZXN1bHQsIGl0ZW0ua2V5LCBpICsgMSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZvaWQoMCkgcHJldmVudHMgcHJvYmxlbXMgd2l0aCByZWRlZmluaXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9mIGB1bmRlZmluZWRgLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdm9pZCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBfc2V0SXRlbShrZXksIHZhbHVlLCBjYWxsYmFjaywgcmV0cmllc0xlZnQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBrZXkgPSBub3JtYWxpemVLZXkoa2V5KTtcblxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFRoZSBsb2NhbFN0b3JhZ2UgQVBJIGRvZXNuJ3QgcmV0dXJuIHVuZGVmaW5lZCB2YWx1ZXMgaW4gYW5cbiAgICAgICAgICAgIC8vIFwiZXhwZWN0ZWRcIiB3YXksIHNvIHVuZGVmaW5lZCBpcyBhbHdheXMgY2FzdCB0byBudWxsIGluIGFsbFxuICAgICAgICAgICAgLy8gZHJpdmVycy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9sb2NhbEZvcmFnZS9wdWxsLzQyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgb3JpZ2luYWwgdmFsdWUgdG8gcGFzcyB0byB0aGUgY2FsbGJhY2suXG4gICAgICAgICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLnNlcmlhbGl6ZXIuc2VyaWFsaXplKHZhbHVlLCBmdW5jdGlvbiAodmFsdWUsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ0lOU0VSVCBPUiBSRVBMQUNFIElOVE8gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnICcgKyAnKGtleSwgdmFsdWUpIFZBTFVFUyAoPywgPyknLCBba2V5LCB2YWx1ZV0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9yaWdpbmFsVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAoc3FsRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSB0cmFuc2FjdGlvbiBmYWlsZWQ7IGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBzZWUgaWYgaXQncyBhIHF1b3RhIGVycm9yLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNxbEVycm9yLmNvZGUgPT09IHNxbEVycm9yLlFVT1RBX0VSUikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIHJlamVjdCB0aGUgY2FsbGJhY2sgb3V0cmlnaHQgZm9yIG5vdywgYnV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQncyB3b3J0aCB0cnlpbmcgdG8gcmUtcnVuIHRoZSB0cmFuc2FjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFdmVuIGlmIHRoZSB1c2VyIGFjY2VwdHMgdGhlIHByb21wdCB0byB1c2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtb3JlIHN0b3JhZ2Ugb24gU2FmYXJpLCB0aGlzIGVycm9yIHdpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBiZSBjYWxsZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcnkgdG8gcmUtcnVuIHRoZSB0cmFuc2FjdGlvbi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV0cmllc0xlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3NldEl0ZW0uYXBwbHkoc2VsZiwgW2tleSwgb3JpZ2luYWxWYWx1ZSwgY2FsbGJhY2ssIHJldHJpZXNMZWZ0IC0gMV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoc3FsRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24gc2V0SXRlbSQxKGtleSwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIF9zZXRJdGVtLmFwcGx5KHRoaXMsIFtrZXksIHZhbHVlLCBjYWxsYmFjaywgMV0pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJdGVtJDEoa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnREVMRVRFIEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnIFdIRVJFIGtleSA9ID8nLCBba2V5XSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gRGVsZXRlcyBldmVyeSBpdGVtIGluIHRoZSB0YWJsZS5cbi8vIFRPRE86IEZpbmQgb3V0IGlmIHRoaXMgcmVzZXRzIHRoZSBBVVRPX0lOQ1JFTUVOVCBudW1iZXIuXG5mdW5jdGlvbiBjbGVhciQxKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnREVMRVRFIEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUsIFtdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKHJlamVjdCk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBEb2VzIGEgc2ltcGxlIGBDT1VOVChrZXkpYCB0byBnZXQgdGhlIG51bWJlciBvZiBpdGVtcyBzdG9yZWQgaW5cbi8vIGxvY2FsRm9yYWdlLlxuZnVuY3Rpb24gbGVuZ3RoJDEoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgLy8gQWhoaCwgU1FMIG1ha2VzIHRoaXMgb25lIHNvb29vb28gZWFzeS5cbiAgICAgICAgICAgICAgICB0cnlFeGVjdXRlU3FsKHQsIGRiSW5mbywgJ1NFTEVDVCBDT1VOVChrZXkpIGFzIGMgRlJPTSAnICsgZGJJbmZvLnN0b3JlTmFtZSwgW10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXN1bHRzLnJvd3MuaXRlbSgwKS5jO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gUmV0dXJuIHRoZSBrZXkgbG9jYXRlZCBhdCBrZXkgaW5kZXggWDsgZXNzZW50aWFsbHkgZ2V0cyB0aGUga2V5IGZyb20gYVxuLy8gYFdIRVJFIGlkID0gP2AuIFRoaXMgaXMgdGhlIG1vc3QgZWZmaWNpZW50IHdheSBJIGNhbiB0aGluayB0byBpbXBsZW1lbnRcbi8vIHRoaXMgcmFyZWx5LXVzZWQgKGluIG15IGV4cGVyaWVuY2UpIHBhcnQgb2YgdGhlIEFQSSwgYnV0IGl0IGNhbiBzZWVtXG4vLyBpbmNvbnNpc3RlbnQsIGJlY2F1c2Ugd2UgZG8gYElOU0VSVCBPUiBSRVBMQUNFIElOVE9gIG9uIGBzZXRJdGVtKClgLCBzb1xuLy8gdGhlIElEIG9mIGVhY2gga2V5IHdpbGwgY2hhbmdlIGV2ZXJ5IHRpbWUgaXQncyB1cGRhdGVkLiBQZXJoYXBzIGEgc3RvcmVkXG4vLyBwcm9jZWR1cmUgZm9yIHRoZSBgc2V0SXRlbSgpYCBTUUwgd291bGQgc29sdmUgdGhpcyBwcm9ibGVtP1xuLy8gVE9ETzogRG9uJ3QgY2hhbmdlIElEIG9uIGBzZXRJdGVtKClgLlxuZnVuY3Rpb24ga2V5JDEobiwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGJJbmZvID0gc2VsZi5fZGJJbmZvO1xuICAgICAgICAgICAgZGJJbmZvLmRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICAgICAgdHJ5RXhlY3V0ZVNxbCh0LCBkYkluZm8sICdTRUxFQ1Qga2V5IEZST00gJyArIGRiSW5mby5zdG9yZU5hbWUgKyAnIFdIRVJFIGlkID0gPyBMSU1JVCAxJywgW24gKyAxXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc3VsdHMucm93cy5sZW5ndGggPyByZXN1bHRzLnJvd3MuaXRlbSgwKS5rZXkgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlbXCJjYXRjaFwiXShyZWplY3QpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZnVuY3Rpb24ga2V5cyQxKGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgc2VsZi5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgICAgIGRiSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIHRyeUV4ZWN1dGVTcWwodCwgZGJJbmZvLCAnU0VMRUNUIGtleSBGUk9NICcgKyBkYkluZm8uc3RvcmVOYW1lLCBbXSwgZnVuY3Rpb24gKHQsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHMucm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHJlc3VsdHMucm93cy5pdGVtKGkpLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGtleXMpO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uICh0LCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pW1wiY2F0Y2hcIl0ocmVqZWN0KTtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93ZWJkYXRhYmFzZS8jZGF0YWJhc2VzXG4vLyA+IFRoZXJlIGlzIG5vIHdheSB0byBlbnVtZXJhdGUgb3IgZGVsZXRlIHRoZSBkYXRhYmFzZXMgYXZhaWxhYmxlIGZvciBhbiBvcmlnaW4gZnJvbSB0aGlzIEFQSS5cbmZ1bmN0aW9uIGdldEFsbFN0b3JlTmFtZXMoZGIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGRiLnRyYW5zYWN0aW9uKGZ1bmN0aW9uICh0KSB7XG4gICAgICAgICAgICB0LmV4ZWN1dGVTcWwoJ1NFTEVDVCBuYW1lIEZST00gc3FsaXRlX21hc3RlciAnICsgXCJXSEVSRSB0eXBlPSd0YWJsZScgQU5EIG5hbWUgPD4gJ19fV2ViS2l0RGF0YWJhc2VJbmZvVGFibGVfXydcIiwgW10sIGZ1bmN0aW9uICh0LCByZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3JlTmFtZXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlTmFtZXMucHVzaChyZXN1bHRzLnJvd3MuaXRlbShpKS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgICAgICAgZGI6IGRiLFxuICAgICAgICAgICAgICAgICAgICBzdG9yZU5hbWVzOiBzdG9yZU5hbWVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAodCwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChzcWxFcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KHNxbEVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRyb3BJbnN0YW5jZSQxKG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sgPSBnZXRDYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgdmFyIGN1cnJlbnRDb25maWcgPSB0aGlzLmNvbmZpZygpO1xuICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIG9wdGlvbnMubmFtZSA9IG9wdGlvbnMubmFtZSB8fCBjdXJyZW50Q29uZmlnLm5hbWU7XG4gICAgICAgIG9wdGlvbnMuc3RvcmVOYW1lID0gb3B0aW9ucy5zdG9yZU5hbWUgfHwgY3VycmVudENvbmZpZy5zdG9yZU5hbWU7XG4gICAgfVxuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBwcm9taXNlO1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlJDEucmVqZWN0KCdJbnZhbGlkIGFyZ3VtZW50cycpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2UgPSBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICB2YXIgZGI7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5uYW1lID09PSBjdXJyZW50Q29uZmlnLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIGRiIHJlZmVyZW5jZSBvZiB0aGUgY3VycmVudCBpbnN0YW5jZVxuICAgICAgICAgICAgICAgIGRiID0gc2VsZi5fZGJJbmZvLmRiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYiA9IG9wZW5EYXRhYmFzZShvcHRpb25zLm5hbWUsICcnLCAnJywgMCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5zdG9yZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBkcm9wIGFsbCBkYXRhYmFzZSB0YWJsZXNcbiAgICAgICAgICAgICAgICByZXNvbHZlKGdldEFsbFN0b3JlTmFtZXMoZGIpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgIGRiOiBkYixcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVOYW1lczogW29wdGlvbnMuc3RvcmVOYW1lXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChvcGVyYXRpb25JbmZvKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgb3BlcmF0aW9uSW5mby5kYi50cmFuc2FjdGlvbihmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBkcm9wVGFibGUoc3RvcmVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdC5leGVjdXRlU3FsKCdEUk9QIFRBQkxFIElGIEVYSVNUUyAnICsgc3RvcmVOYW1lLCBbXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHQsIGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcGVyYXRpb25zID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBvcGVyYXRpb25JbmZvLnN0b3JlTmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdGlvbnMucHVzaChkcm9wVGFibGUob3BlcmF0aW9uSW5mby5zdG9yZU5hbWVzW2ldKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBQcm9taXNlJDEuYWxsKG9wZXJhdGlvbnMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uIChzcWxFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3Qoc3FsRXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbnZhciB3ZWJTUUxTdG9yYWdlID0ge1xuICAgIF9kcml2ZXI6ICd3ZWJTUUxTdG9yYWdlJyxcbiAgICBfaW5pdFN0b3JhZ2U6IF9pbml0U3RvcmFnZSQxLFxuICAgIF9zdXBwb3J0OiBpc1dlYlNRTFZhbGlkKCksXG4gICAgaXRlcmF0ZTogaXRlcmF0ZSQxLFxuICAgIGdldEl0ZW06IGdldEl0ZW0kMSxcbiAgICBzZXRJdGVtOiBzZXRJdGVtJDEsXG4gICAgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbSQxLFxuICAgIGNsZWFyOiBjbGVhciQxLFxuICAgIGxlbmd0aDogbGVuZ3RoJDEsXG4gICAga2V5OiBrZXkkMSxcbiAgICBrZXlzOiBrZXlzJDEsXG4gICAgZHJvcEluc3RhbmNlOiBkcm9wSW5zdGFuY2UkMVxufTtcblxuZnVuY3Rpb24gaXNMb2NhbFN0b3JhZ2VWYWxpZCgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3NldEl0ZW0nIGluIGxvY2FsU3RvcmFnZSAmJlxuICAgICAgICAvLyBpbiBJRTggdHlwZW9mIGxvY2FsU3RvcmFnZS5zZXRJdGVtID09PSAnb2JqZWN0J1xuICAgICAgICAhIWxvY2FsU3RvcmFnZS5zZXRJdGVtO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gX2dldEtleVByZWZpeChvcHRpb25zLCBkZWZhdWx0Q29uZmlnKSB7XG4gICAgdmFyIGtleVByZWZpeCA9IG9wdGlvbnMubmFtZSArICcvJztcblxuICAgIGlmIChvcHRpb25zLnN0b3JlTmFtZSAhPT0gZGVmYXVsdENvbmZpZy5zdG9yZU5hbWUpIHtcbiAgICAgICAga2V5UHJlZml4ICs9IG9wdGlvbnMuc3RvcmVOYW1lICsgJy8nO1xuICAgIH1cbiAgICByZXR1cm4ga2V5UHJlZml4O1xufVxuXG4vLyBDaGVjayBpZiBsb2NhbFN0b3JhZ2UgdGhyb3dzIHdoZW4gc2F2aW5nIGFuIGl0ZW1cbmZ1bmN0aW9uIGNoZWNrSWZMb2NhbFN0b3JhZ2VUaHJvd3MoKSB7XG4gICAgdmFyIGxvY2FsU3RvcmFnZVRlc3RLZXkgPSAnX2xvY2FsZm9yYWdlX3N1cHBvcnRfdGVzdCc7XG5cbiAgICB0cnkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VUZXN0S2V5LCB0cnVlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obG9jYWxTdG9yYWdlVGVzdEtleSk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG4vLyBDaGVjayBpZiBsb2NhbFN0b3JhZ2UgaXMgdXNhYmxlIGFuZCBhbGxvd3MgdG8gc2F2ZSBhbiBpdGVtXG4vLyBUaGlzIG1ldGhvZCBjaGVja3MgaWYgbG9jYWxTdG9yYWdlIGlzIHVzYWJsZSBpbiBTYWZhcmkgUHJpdmF0ZSBCcm93c2luZ1xuLy8gbW9kZSwgb3IgaW4gYW55IG90aGVyIGNhc2Ugd2hlcmUgdGhlIGF2YWlsYWJsZSBxdW90YSBmb3IgbG9jYWxTdG9yYWdlXG4vLyBpcyAwIGFuZCB0aGVyZSB3YXNuJ3QgYW55IHNhdmVkIGl0ZW1zIHlldC5cbmZ1bmN0aW9uIF9pc0xvY2FsU3RvcmFnZVVzYWJsZSgpIHtcbiAgICByZXR1cm4gIWNoZWNrSWZMb2NhbFN0b3JhZ2VUaHJvd3MoKSB8fCBsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMDtcbn1cblxuLy8gQ29uZmlnIHRoZSBsb2NhbFN0b3JhZ2UgYmFja2VuZCwgdXNpbmcgb3B0aW9ucyBzZXQgaW4gdGhlIGNvbmZpZy5cbmZ1bmN0aW9uIF9pbml0U3RvcmFnZSQyKG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIGRiSW5mbyA9IHt9O1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgZGJJbmZvW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRiSW5mby5rZXlQcmVmaXggPSBfZ2V0S2V5UHJlZml4KG9wdGlvbnMsIHNlbGYuX2RlZmF1bHRDb25maWcpO1xuXG4gICAgaWYgKCFfaXNMb2NhbFN0b3JhZ2VVc2FibGUoKSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlamVjdCgpO1xuICAgIH1cblxuICAgIHNlbGYuX2RiSW5mbyA9IGRiSW5mbztcbiAgICBkYkluZm8uc2VyaWFsaXplciA9IGxvY2FsZm9yYWdlU2VyaWFsaXplcjtcblxuICAgIHJldHVybiBQcm9taXNlJDEucmVzb2x2ZSgpO1xufVxuXG4vLyBSZW1vdmUgYWxsIGtleXMgZnJvbSB0aGUgZGF0YXN0b3JlLCBlZmZlY3RpdmVseSBkZXN0cm95aW5nIGFsbCBkYXRhIGluXG4vLyB0aGUgYXBwJ3Mga2V5L3ZhbHVlIHN0b3JlIVxuZnVuY3Rpb24gY2xlYXIkMihjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGtleVByZWZpeCA9IHNlbGYuX2RiSW5mby5rZXlQcmVmaXg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IGxvY2FsU3RvcmFnZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG5cbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZihrZXlQcmVmaXgpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gUmV0cmlldmUgYW4gaXRlbSBmcm9tIHRoZSBzdG9yZS4gVW5saWtlIHRoZSBvcmlnaW5hbCBhc3luY19zdG9yYWdlXG4vLyBsaWJyYXJ5IGluIEdhaWEsIHdlIGRvbid0IG1vZGlmeSByZXR1cm4gdmFsdWVzIGF0IGFsbC4gSWYgYSBrZXkncyB2YWx1ZVxuLy8gaXMgYHVuZGVmaW5lZGAsIHdlIHBhc3MgdGhhdCB2YWx1ZSB0byB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG5mdW5jdGlvbiBnZXRJdGVtJDIoa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIHZhciByZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShkYkluZm8ua2V5UHJlZml4ICsga2V5KTtcblxuICAgICAgICAvLyBJZiBhIHJlc3VsdCB3YXMgZm91bmQsIHBhcnNlIGl0IGZyb20gdGhlIHNlcmlhbGl6ZWRcbiAgICAgICAgLy8gc3RyaW5nIGludG8gYSBKUyBvYmplY3QuIElmIHJlc3VsdCBpc24ndCB0cnV0aHksIHRoZSBrZXlcbiAgICAgICAgLy8gaXMgbGlrZWx5IHVuZGVmaW5lZCBhbmQgd2UnbGwgcGFzcyBpdCBzdHJhaWdodCB0byB0aGVcbiAgICAgICAgLy8gY2FsbGJhY2suXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGRiSW5mby5zZXJpYWxpemVyLmRlc2VyaWFsaXplKHJlc3VsdCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gSXRlcmF0ZSBvdmVyIGFsbCBpdGVtcyBpbiB0aGUgc3RvcmUuXG5mdW5jdGlvbiBpdGVyYXRlJDIoaXRlcmF0b3IsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIHZhciBrZXlQcmVmaXggPSBkYkluZm8ua2V5UHJlZml4O1xuICAgICAgICB2YXIga2V5UHJlZml4TGVuZ3RoID0ga2V5UHJlZml4Lmxlbmd0aDtcbiAgICAgICAgdmFyIGxlbmd0aCA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG5cbiAgICAgICAgLy8gV2UgdXNlIGEgZGVkaWNhdGVkIGl0ZXJhdG9yIGluc3RlYWQgb2YgdGhlIGBpYCB2YXJpYWJsZSBiZWxvd1xuICAgICAgICAvLyBzbyBvdGhlciBrZXlzIHdlIGZldGNoIGluIGxvY2FsU3RvcmFnZSBhcmVuJ3QgY291bnRlZCBpblxuICAgICAgICAvLyB0aGUgYGl0ZXJhdGlvbk51bWJlcmAgYXJndW1lbnQgcGFzc2VkIHRvIHRoZSBgaXRlcmF0ZSgpYFxuICAgICAgICAvLyBjYWxsYmFjay5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gU2VlOiBnaXRodWIuY29tL21vemlsbGEvbG9jYWxGb3JhZ2UvcHVsbC80MzUjZGlzY3Vzc2lvbl9yMzgwNjE1MzBcbiAgICAgICAgdmFyIGl0ZXJhdGlvbk51bWJlciA9IDE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgICAgICBpZiAoa2V5LmluZGV4T2Yoa2V5UHJlZml4KSAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcblxuICAgICAgICAgICAgLy8gSWYgYSByZXN1bHQgd2FzIGZvdW5kLCBwYXJzZSBpdCBmcm9tIHRoZSBzZXJpYWxpemVkXG4gICAgICAgICAgICAvLyBzdHJpbmcgaW50byBhIEpTIG9iamVjdC4gSWYgcmVzdWx0IGlzbid0IHRydXRoeSwgdGhlXG4gICAgICAgICAgICAvLyBrZXkgaXMgbGlrZWx5IHVuZGVmaW5lZCBhbmQgd2UnbGwgcGFzcyBpdCBzdHJhaWdodFxuICAgICAgICAgICAgLy8gdG8gdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYkluZm8uc2VyaWFsaXplci5kZXNlcmlhbGl6ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlID0gaXRlcmF0b3IodmFsdWUsIGtleS5zdWJzdHJpbmcoa2V5UHJlZml4TGVuZ3RoKSwgaXRlcmF0aW9uTnVtYmVyKyspO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHZvaWQgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gU2FtZSBhcyBsb2NhbFN0b3JhZ2UncyBrZXkoKSBtZXRob2QsIGV4Y2VwdCB0YWtlcyBhIGNhbGxiYWNrLlxuZnVuY3Rpb24ga2V5JDIobiwgY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHQgPSBsb2NhbFN0b3JhZ2Uua2V5KG4pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgcHJlZml4IGZyb20gdGhlIGtleSwgaWYgYSBrZXkgaXMgZm91bmQuXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoZGJJbmZvLmtleVByZWZpeC5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIGtleXMkMihjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGRiSW5mbyA9IHNlbGYuX2RiSW5mbztcbiAgICAgICAgdmFyIGxlbmd0aCA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gICAgICAgIHZhciBrZXlzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGl0ZW1LZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICAgICAgaWYgKGl0ZW1LZXkuaW5kZXhPZihkYkluZm8ua2V5UHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGtleXMucHVzaChpdGVtS2V5LnN1YnN0cmluZyhkYkluZm8ua2V5UHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG4vLyBTdXBwbHkgdGhlIG51bWJlciBvZiBrZXlzIGluIHRoZSBkYXRhc3RvcmUgdG8gdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuZnVuY3Rpb24gbGVuZ3RoJDIoY2FsbGJhY2spIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2UgPSBzZWxmLmtleXMoKS50aGVuKGZ1bmN0aW9uIChrZXlzKSB7XG4gICAgICAgIHJldHVybiBrZXlzLmxlbmd0aDtcbiAgICB9KTtcblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbi8vIFJlbW92ZSBhbiBpdGVtIGZyb20gdGhlIHN0b3JlLCBuaWNlIGFuZCBzaW1wbGUuXG5mdW5jdGlvbiByZW1vdmVJdGVtJDIoa2V5LCBjYWxsYmFjaykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGtleSA9IG5vcm1hbGl6ZUtleShrZXkpO1xuXG4gICAgdmFyIHByb21pc2UgPSBzZWxmLnJlYWR5KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGRiSW5mby5rZXlQcmVmaXggKyBrZXkpO1xuICAgIH0pO1xuXG4gICAgZXhlY3V0ZUNhbGxiYWNrKHByb21pc2UsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cblxuLy8gU2V0IGEga2V5J3MgdmFsdWUgYW5kIHJ1biBhbiBvcHRpb25hbCBjYWxsYmFjayBvbmNlIHRoZSB2YWx1ZSBpcyBzZXQuXG4vLyBVbmxpa2UgR2FpYSdzIGltcGxlbWVudGF0aW9uLCB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gaXMgcGFzc2VkIHRoZSB2YWx1ZSxcbi8vIGluIGNhc2UgeW91IHdhbnQgdG8gb3BlcmF0ZSBvbiB0aGF0IHZhbHVlIG9ubHkgYWZ0ZXIgeW91J3JlIHN1cmUgaXRcbi8vIHNhdmVkLCBvciBzb21ldGhpbmcgbGlrZSB0aGF0LlxuZnVuY3Rpb24gc2V0SXRlbSQyKGtleSwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAga2V5ID0gbm9ybWFsaXplS2V5KGtleSk7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHNlbGYucmVhZHkoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gQ29udmVydCB1bmRlZmluZWQgdmFsdWVzIHRvIG51bGwuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2xvY2FsRm9yYWdlL3B1bGwvNDJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNhdmUgdGhlIG9yaWdpbmFsIHZhbHVlIHRvIHBhc3MgdG8gdGhlIGNhbGxiYWNrLlxuICAgICAgICB2YXIgb3JpZ2luYWxWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSQxKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBkYkluZm8gPSBzZWxmLl9kYkluZm87XG4gICAgICAgICAgICBkYkluZm8uc2VyaWFsaXplci5zZXJpYWxpemUodmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSwgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZGJJbmZvLmtleVByZWZpeCArIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvcmlnaW5hbFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlIGNhcGFjaXR5IGV4Y2VlZGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogTWFrZSB0aGlzIGEgc3BlY2lmaWMgZXJyb3IvZXZlbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJyB8fCBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgY2FsbGJhY2spO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuXG5mdW5jdGlvbiBkcm9wSW5zdGFuY2UkMihvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrID0gZ2V0Q2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyAhPT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zIHx8IHt9O1xuICAgIGlmICghb3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIHZhciBjdXJyZW50Q29uZmlnID0gdGhpcy5jb25maWcoKTtcbiAgICAgICAgb3B0aW9ucy5uYW1lID0gb3B0aW9ucy5uYW1lIHx8IGN1cnJlbnRDb25maWcubmFtZTtcbiAgICAgICAgb3B0aW9ucy5zdG9yZU5hbWUgPSBvcHRpb25zLnN0b3JlTmFtZSB8fCBjdXJyZW50Q29uZmlnLnN0b3JlTmFtZTtcbiAgICB9XG5cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHByb21pc2U7XG4gICAgaWYgKCFvcHRpb25zLm5hbWUpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UkMS5yZWplY3QoJ0ludmFsaWQgYXJndW1lbnRzJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5zdG9yZU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG9wdGlvbnMubmFtZSArICcvJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoX2dldEtleVByZWZpeChvcHRpb25zLCBzZWxmLl9kZWZhdWx0Q29uZmlnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGtleVByZWZpeCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGxvY2FsU3RvcmFnZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHZhciBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKGtleVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4ZWN1dGVDYWxsYmFjayhwcm9taXNlLCBjYWxsYmFjayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cbnZhciBsb2NhbFN0b3JhZ2VXcmFwcGVyID0ge1xuICAgIF9kcml2ZXI6ICdsb2NhbFN0b3JhZ2VXcmFwcGVyJyxcbiAgICBfaW5pdFN0b3JhZ2U6IF9pbml0U3RvcmFnZSQyLFxuICAgIF9zdXBwb3J0OiBpc0xvY2FsU3RvcmFnZVZhbGlkKCksXG4gICAgaXRlcmF0ZTogaXRlcmF0ZSQyLFxuICAgIGdldEl0ZW06IGdldEl0ZW0kMixcbiAgICBzZXRJdGVtOiBzZXRJdGVtJDIsXG4gICAgcmVtb3ZlSXRlbTogcmVtb3ZlSXRlbSQyLFxuICAgIGNsZWFyOiBjbGVhciQyLFxuICAgIGxlbmd0aDogbGVuZ3RoJDIsXG4gICAga2V5OiBrZXkkMixcbiAgICBrZXlzOiBrZXlzJDIsXG4gICAgZHJvcEluc3RhbmNlOiBkcm9wSW5zdGFuY2UkMlxufTtcblxudmFyIHNhbWVWYWx1ZSA9IGZ1bmN0aW9uIHNhbWVWYWx1ZSh4LCB5KSB7XG4gICAgcmV0dXJuIHggPT09IHkgfHwgdHlwZW9mIHggPT09ICdudW1iZXInICYmIHR5cGVvZiB5ID09PSAnbnVtYmVyJyAmJiBpc05hTih4KSAmJiBpc05hTih5KTtcbn07XG5cbnZhciBpbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzKGFycmF5LCBzZWFyY2hFbGVtZW50KSB7XG4gICAgdmFyIGxlbiA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBsZW4pIHtcbiAgICAgICAgaWYgKHNhbWVWYWx1ZShhcnJheVtpXSwgc2VhcmNoRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGkrKztcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbi8vIERyaXZlcnMgYXJlIHN0b3JlZCBoZXJlIHdoZW4gYGRlZmluZURyaXZlcigpYCBpcyBjYWxsZWQuXG4vLyBUaGV5IGFyZSBzaGFyZWQgYWNyb3NzIGFsbCBpbnN0YW5jZXMgb2YgbG9jYWxGb3JhZ2UuXG52YXIgRGVmaW5lZERyaXZlcnMgPSB7fTtcblxudmFyIERyaXZlclN1cHBvcnQgPSB7fTtcblxudmFyIERlZmF1bHREcml2ZXJzID0ge1xuICAgIElOREVYRUREQjogYXN5bmNTdG9yYWdlLFxuICAgIFdFQlNRTDogd2ViU1FMU3RvcmFnZSxcbiAgICBMT0NBTFNUT1JBR0U6IGxvY2FsU3RvcmFnZVdyYXBwZXJcbn07XG5cbnZhciBEZWZhdWx0RHJpdmVyT3JkZXIgPSBbRGVmYXVsdERyaXZlcnMuSU5ERVhFRERCLl9kcml2ZXIsIERlZmF1bHREcml2ZXJzLldFQlNRTC5fZHJpdmVyLCBEZWZhdWx0RHJpdmVycy5MT0NBTFNUT1JBR0UuX2RyaXZlcl07XG5cbnZhciBPcHRpb25hbERyaXZlck1ldGhvZHMgPSBbJ2Ryb3BJbnN0YW5jZSddO1xuXG52YXIgTGlicmFyeU1ldGhvZHMgPSBbJ2NsZWFyJywgJ2dldEl0ZW0nLCAnaXRlcmF0ZScsICdrZXknLCAna2V5cycsICdsZW5ndGgnLCAncmVtb3ZlSXRlbScsICdzZXRJdGVtJ10uY29uY2F0KE9wdGlvbmFsRHJpdmVyTWV0aG9kcyk7XG5cbnZhciBEZWZhdWx0Q29uZmlnID0ge1xuICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICBkcml2ZXI6IERlZmF1bHREcml2ZXJPcmRlci5zbGljZSgpLFxuICAgIG5hbWU6ICdsb2NhbGZvcmFnZScsXG4gICAgLy8gRGVmYXVsdCBEQiBzaXplIGlzIF9KVVNUIFVOREVSXyA1TUIsIGFzIGl0J3MgdGhlIGhpZ2hlc3Qgc2l6ZVxuICAgIC8vIHdlIGNhbiB1c2Ugd2l0aG91dCBhIHByb21wdC5cbiAgICBzaXplOiA0OTgwNzM2LFxuICAgIHN0b3JlTmFtZTogJ2tleXZhbHVlcGFpcnMnLFxuICAgIHZlcnNpb246IDEuMFxufTtcblxuZnVuY3Rpb24gY2FsbFdoZW5SZWFkeShsb2NhbEZvcmFnZUluc3RhbmNlLCBsaWJyYXJ5TWV0aG9kKSB7XG4gICAgbG9jYWxGb3JhZ2VJbnN0YW5jZVtsaWJyYXJ5TWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hcmdzID0gYXJndW1lbnRzO1xuICAgICAgICByZXR1cm4gbG9jYWxGb3JhZ2VJbnN0YW5jZS5yZWFkeSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGxvY2FsRm9yYWdlSW5zdGFuY2VbbGlicmFyeU1ldGhvZF0uYXBwbHkobG9jYWxGb3JhZ2VJbnN0YW5jZSwgX2FyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgICBpZiAoYXJnKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfa2V5IGluIGFyZykge1xuICAgICAgICAgICAgICAgIGlmIChhcmcuaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkoYXJnW19rZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdW19rZXldID0gYXJnW19rZXldLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHNbMF1bX2tleV0gPSBhcmdbX2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xufVxuXG52YXIgTG9jYWxGb3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTG9jYWxGb3JhZ2Uob3B0aW9ucykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTG9jYWxGb3JhZ2UpO1xuXG4gICAgICAgIGZvciAodmFyIGRyaXZlclR5cGVLZXkgaW4gRGVmYXVsdERyaXZlcnMpIHtcbiAgICAgICAgICAgIGlmIChEZWZhdWx0RHJpdmVycy5oYXNPd25Qcm9wZXJ0eShkcml2ZXJUeXBlS2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciBkcml2ZXIgPSBEZWZhdWx0RHJpdmVyc1tkcml2ZXJUeXBlS2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IGRyaXZlci5fZHJpdmVyO1xuICAgICAgICAgICAgICAgIHRoaXNbZHJpdmVyVHlwZUtleV0gPSBkcml2ZXJOYW1lO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCBuZWVkIHRvIHdhaXQgZm9yIHRoZSBwcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSB0aGUgZGVmYXVsdCBkcml2ZXJzIGNhbiBiZSBkZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGluIGEgYmxvY2tpbmcgbWFubmVyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmaW5lRHJpdmVyKGRyaXZlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGVmYXVsdENvbmZpZyA9IGV4dGVuZCh7fSwgRGVmYXVsdENvbmZpZyk7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGV4dGVuZCh7fSwgdGhpcy5fZGVmYXVsdENvbmZpZywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RyaXZlclNldCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2luaXREcml2ZXIgPSBudWxsO1xuICAgICAgICB0aGlzLl9yZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9kYkluZm8gPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX3dyYXBMaWJyYXJ5TWV0aG9kc1dpdGhSZWFkeSgpO1xuICAgICAgICB0aGlzLnNldERyaXZlcih0aGlzLl9jb25maWcuZHJpdmVyKVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9XG5cbiAgICAvLyBTZXQgYW55IGNvbmZpZyB2YWx1ZXMgZm9yIGxvY2FsRm9yYWdlOyBjYW4gYmUgY2FsbGVkIGFueXRpbWUgYmVmb3JlXG4gICAgLy8gdGhlIGZpcnN0IEFQSSBjYWxsIChlLmcuIGBnZXRJdGVtYCwgYHNldEl0ZW1gKS5cbiAgICAvLyBXZSBsb29wIHRocm91Z2ggb3B0aW9ucyBzbyB3ZSBkb24ndCBvdmVyd3JpdGUgZXhpc3RpbmcgY29uZmlnXG4gICAgLy8gdmFsdWVzLlxuXG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuY29uZmlnID0gZnVuY3Rpb24gY29uZmlnKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gSWYgdGhlIG9wdGlvbnMgYXJndW1lbnQgaXMgYW4gb2JqZWN0LCB3ZSB1c2UgaXQgdG8gc2V0IHZhbHVlcy5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSByZXR1cm4gZWl0aGVyIGEgc3BlY2lmaWVkIGNvbmZpZyB2YWx1ZSBvciBhbGxcbiAgICAgICAgLy8gY29uZmlnIHZhbHVlcy5cbiAgICAgICAgaWYgKCh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2Yob3B0aW9ucykpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gSWYgbG9jYWxmb3JhZ2UgaXMgcmVhZHkgYW5kIGZ1bGx5IGluaXRpYWxpemVkLCB3ZSBjYW4ndCBzZXRcbiAgICAgICAgICAgIC8vIGFueSBuZXcgY29uZmlndXJhdGlvbiB2YWx1ZXMuIEluc3RlYWQsIHdlIHJldHVybiBhbiBlcnJvci5cbiAgICAgICAgICAgIGlmICh0aGlzLl9yZWFkeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJDYW4ndCBjYWxsIGNvbmZpZygpIGFmdGVyIGxvY2FsZm9yYWdlIFwiICsgJ2hhcyBiZWVuIHVzZWQuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmIChpID09PSAnc3RvcmVOYW1lJykge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zW2ldID0gb3B0aW9uc1tpXS5yZXBsYWNlKC9cXFcvZywgJ18nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gJ3ZlcnNpb24nICYmIHR5cGVvZiBvcHRpb25zW2ldICE9PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKCdEYXRhYmFzZSB2ZXJzaW9uIG11c3QgYmUgYSBudW1iZXIuJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5fY29uZmlnW2ldID0gb3B0aW9uc1tpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWZ0ZXIgYWxsIGNvbmZpZyBvcHRpb25zIGFyZSBzZXQgYW5kXG4gICAgICAgICAgICAvLyB0aGUgZHJpdmVyIG9wdGlvbiBpcyB1c2VkLCB0cnkgc2V0dGluZyBpdFxuICAgICAgICAgICAgaWYgKCdkcml2ZXInIGluIG9wdGlvbnMgJiYgb3B0aW9ucy5kcml2ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXREcml2ZXIodGhpcy5fY29uZmlnLmRyaXZlcik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZ1tvcHRpb25zXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gVXNlZCB0byBkZWZpbmUgYSBjdXN0b20gZHJpdmVyLCBzaGFyZWQgYWNyb3NzIGFsbCBpbnN0YW5jZXMgb2ZcbiAgICAvLyBsb2NhbEZvcmFnZS5cblxuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmRlZmluZURyaXZlciA9IGZ1bmN0aW9uIGRlZmluZURyaXZlcihkcml2ZXJPYmplY3QsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UkMShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBkcml2ZXJOYW1lID0gZHJpdmVyT2JqZWN0Ll9kcml2ZXI7XG4gICAgICAgICAgICAgICAgdmFyIGNvbXBsaWFuY2VFcnJvciA9IG5ldyBFcnJvcignQ3VzdG9tIGRyaXZlciBub3QgY29tcGxpYW50OyBzZWUgJyArICdodHRwczovL21vemlsbGEuZ2l0aHViLmlvL2xvY2FsRm9yYWdlLyNkZWZpbmVkcml2ZXInKTtcblxuICAgICAgICAgICAgICAgIC8vIEEgZHJpdmVyIG5hbWUgc2hvdWxkIGJlIGRlZmluZWQgYW5kIG5vdCBvdmVybGFwIHdpdGggdGhlXG4gICAgICAgICAgICAgICAgLy8gbGlicmFyeS1kZWZpbmVkLCBkZWZhdWx0IGRyaXZlcnMuXG4gICAgICAgICAgICAgICAgaWYgKCFkcml2ZXJPYmplY3QuX2RyaXZlcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoY29tcGxpYW5jZUVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBkcml2ZXJNZXRob2RzID0gTGlicmFyeU1ldGhvZHMuY29uY2F0KCdfaW5pdFN0b3JhZ2UnKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gZHJpdmVyTWV0aG9kcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZHJpdmVyTWV0aG9kTmFtZSA9IGRyaXZlck1ldGhvZHNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgcHJvcGVydHkgaXMgdGhlcmUsXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0IHNob3VsZCBiZSBhIG1ldGhvZCBldmVuIHdoZW4gb3B0aW9uYWxcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzUmVxdWlyZWQgPSAhaW5jbHVkZXMoT3B0aW9uYWxEcml2ZXJNZXRob2RzLCBkcml2ZXJNZXRob2ROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChpc1JlcXVpcmVkIHx8IGRyaXZlck9iamVjdFtkcml2ZXJNZXRob2ROYW1lXSkgJiYgdHlwZW9mIGRyaXZlck9iamVjdFtkcml2ZXJNZXRob2ROYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGNvbXBsaWFuY2VFcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgY29uZmlndXJlTWlzc2luZ01ldGhvZHMgPSBmdW5jdGlvbiBjb25maWd1cmVNaXNzaW5nTWV0aG9kcygpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1ldGhvZE5vdEltcGxlbWVudGVkRmFjdG9yeSA9IGZ1bmN0aW9uIG1ldGhvZE5vdEltcGxlbWVudGVkRmFjdG9yeShtZXRob2ROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcignTWV0aG9kICcgKyBtZXRob2ROYW1lICsgJyBpcyBub3QgaW1wbGVtZW50ZWQgYnkgdGhlIGN1cnJlbnQgZHJpdmVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSBQcm9taXNlJDEucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjdXRlQ2FsbGJhY2socHJvbWlzZSwgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2xlbiA9IE9wdGlvbmFsRHJpdmVyTWV0aG9kcy5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wdGlvbmFsRHJpdmVyTWV0aG9kID0gT3B0aW9uYWxEcml2ZXJNZXRob2RzW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZHJpdmVyT2JqZWN0W29wdGlvbmFsRHJpdmVyTWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyaXZlck9iamVjdFtvcHRpb25hbERyaXZlck1ldGhvZF0gPSBtZXRob2ROb3RJbXBsZW1lbnRlZEZhY3Rvcnkob3B0aW9uYWxEcml2ZXJNZXRob2QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbmZpZ3VyZU1pc3NpbmdNZXRob2RzKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgc2V0RHJpdmVyU3VwcG9ydCA9IGZ1bmN0aW9uIHNldERyaXZlclN1cHBvcnQoc3VwcG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoRGVmaW5lZERyaXZlcnNbZHJpdmVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnUmVkZWZpbmluZyBMb2NhbEZvcmFnZSBkcml2ZXI6ICcgKyBkcml2ZXJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBEZWZpbmVkRHJpdmVyc1tkcml2ZXJOYW1lXSA9IGRyaXZlck9iamVjdDtcbiAgICAgICAgICAgICAgICAgICAgRHJpdmVyU3VwcG9ydFtkcml2ZXJOYW1lXSA9IHN1cHBvcnQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRvbid0IHVzZSBhIHRoZW4sIHNvIHRoYXQgd2UgY2FuIGRlZmluZVxuICAgICAgICAgICAgICAgICAgICAvLyBkcml2ZXJzIHRoYXQgaGF2ZSBzaW1wbGUgX3N1cHBvcnQgbWV0aG9kc1xuICAgICAgICAgICAgICAgICAgICAvLyBpbiBhIGJsb2NraW5nIG1hbm5lclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmICgnX3N1cHBvcnQnIGluIGRyaXZlck9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZHJpdmVyT2JqZWN0Ll9zdXBwb3J0ICYmIHR5cGVvZiBkcml2ZXJPYmplY3QuX3N1cHBvcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyaXZlck9iamVjdC5fc3VwcG9ydCgpLnRoZW4oc2V0RHJpdmVyU3VwcG9ydCwgcmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERyaXZlclN1cHBvcnQoISFkcml2ZXJPYmplY3QuX3N1cHBvcnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RHJpdmVyU3VwcG9ydCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHByb21pc2UsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfTtcblxuICAgIExvY2FsRm9yYWdlLnByb3RvdHlwZS5kcml2ZXIgPSBmdW5jdGlvbiBkcml2ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kcml2ZXIgfHwgbnVsbDtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmdldERyaXZlciA9IGZ1bmN0aW9uIGdldERyaXZlcihkcml2ZXJOYW1lLCBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaykge1xuICAgICAgICB2YXIgZ2V0RHJpdmVyUHJvbWlzZSA9IERlZmluZWREcml2ZXJzW2RyaXZlck5hbWVdID8gUHJvbWlzZSQxLnJlc29sdmUoRGVmaW5lZERyaXZlcnNbZHJpdmVyTmFtZV0pIDogUHJvbWlzZSQxLnJlamVjdChuZXcgRXJyb3IoJ0RyaXZlciBub3QgZm91bmQuJykpO1xuXG4gICAgICAgIGV4ZWN1dGVUd29DYWxsYmFja3MoZ2V0RHJpdmVyUHJvbWlzZSwgY2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gZ2V0RHJpdmVyUHJvbWlzZTtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLmdldFNlcmlhbGl6ZXIgPSBmdW5jdGlvbiBnZXRTZXJpYWxpemVyKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZXJpYWxpemVyUHJvbWlzZSA9IFByb21pc2UkMS5yZXNvbHZlKGxvY2FsZm9yYWdlU2VyaWFsaXplcik7XG4gICAgICAgIGV4ZWN1dGVUd29DYWxsYmFja3Moc2VyaWFsaXplclByb21pc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZXJQcm9taXNlO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUucmVhZHkgPSBmdW5jdGlvbiByZWFkeShjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSBzZWxmLl9kcml2ZXJTZXQudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5fcmVhZHkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9yZWFkeSA9IHNlbGYuX2luaXREcml2ZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX3JlYWR5O1xuICAgICAgICB9KTtcblxuICAgICAgICBleGVjdXRlVHdvQ2FsbGJhY2tzKHByb21pc2UsIGNhbGxiYWNrLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuc2V0RHJpdmVyID0gZnVuY3Rpb24gc2V0RHJpdmVyKGRyaXZlcnMsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoIWlzQXJyYXkoZHJpdmVycykpIHtcbiAgICAgICAgICAgIGRyaXZlcnMgPSBbZHJpdmVyc107XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3VwcG9ydGVkRHJpdmVycyA9IHRoaXMuX2dldFN1cHBvcnRlZERyaXZlcnMoZHJpdmVycyk7XG5cbiAgICAgICAgZnVuY3Rpb24gc2V0RHJpdmVyVG9Db25maWcoKSB7XG4gICAgICAgICAgICBzZWxmLl9jb25maWcuZHJpdmVyID0gc2VsZi5kcml2ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGV4dGVuZFNlbGZXaXRoRHJpdmVyKGRyaXZlcikge1xuICAgICAgICAgICAgc2VsZi5fZXh0ZW5kKGRyaXZlcik7XG4gICAgICAgICAgICBzZXREcml2ZXJUb0NvbmZpZygpO1xuXG4gICAgICAgICAgICBzZWxmLl9yZWFkeSA9IHNlbGYuX2luaXRTdG9yYWdlKHNlbGYuX2NvbmZpZyk7XG4gICAgICAgICAgICByZXR1cm4gc2VsZi5fcmVhZHk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbml0RHJpdmVyKHN1cHBvcnRlZERyaXZlcnMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnREcml2ZXJJbmRleCA9IDA7XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkcml2ZXJQcm9taXNlTG9vcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnREcml2ZXJJbmRleCA8IHN1cHBvcnRlZERyaXZlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IHN1cHBvcnRlZERyaXZlcnNbY3VycmVudERyaXZlckluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnREcml2ZXJJbmRleCsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9kYkluZm8gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fcmVhZHkgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5nZXREcml2ZXIoZHJpdmVyTmFtZSkudGhlbihleHRlbmRTZWxmV2l0aERyaXZlcilbXCJjYXRjaFwiXShkcml2ZXJQcm9taXNlTG9vcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzZXREcml2ZXJUb0NvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ05vIGF2YWlsYWJsZSBzdG9yYWdlIG1ldGhvZCBmb3VuZC4nKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fZHJpdmVyU2V0ID0gUHJvbWlzZSQxLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9kcml2ZXJTZXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRyaXZlclByb21pc2VMb29wKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlcmUgbWlnaHQgYmUgYSBkcml2ZXIgaW5pdGlhbGl6YXRpb24gaW4gcHJvZ3Jlc3NcbiAgICAgICAgLy8gc28gd2FpdCBmb3IgaXQgdG8gZmluaXNoIGluIG9yZGVyIHRvIGF2b2lkIGEgcG9zc2libGVcbiAgICAgICAgLy8gcmFjZSBjb25kaXRpb24gdG8gc2V0IF9kYkluZm9cbiAgICAgICAgdmFyIG9sZERyaXZlclNldERvbmUgPSB0aGlzLl9kcml2ZXJTZXQgIT09IG51bGwgPyB0aGlzLl9kcml2ZXJTZXRbXCJjYXRjaFwiXShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZSQxLnJlc29sdmUoKTtcbiAgICAgICAgfSkgOiBQcm9taXNlJDEucmVzb2x2ZSgpO1xuXG4gICAgICAgIHRoaXMuX2RyaXZlclNldCA9IG9sZERyaXZlclNldERvbmUudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IHN1cHBvcnRlZERyaXZlcnNbMF07XG4gICAgICAgICAgICBzZWxmLl9kYkluZm8gPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5fcmVhZHkgPSBudWxsO1xuXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5nZXREcml2ZXIoZHJpdmVyTmFtZSkudGhlbihmdW5jdGlvbiAoZHJpdmVyKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5fZHJpdmVyID0gZHJpdmVyLl9kcml2ZXI7XG4gICAgICAgICAgICAgICAgc2V0RHJpdmVyVG9Db25maWcoKTtcbiAgICAgICAgICAgICAgICBzZWxmLl93cmFwTGlicmFyeU1ldGhvZHNXaXRoUmVhZHkoKTtcbiAgICAgICAgICAgICAgICBzZWxmLl9pbml0RHJpdmVyID0gaW5pdERyaXZlcihzdXBwb3J0ZWREcml2ZXJzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVtcImNhdGNoXCJdKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNldERyaXZlclRvQ29uZmlnKCk7XG4gICAgICAgICAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ05vIGF2YWlsYWJsZSBzdG9yYWdlIG1ldGhvZCBmb3VuZC4nKTtcbiAgICAgICAgICAgIHNlbGYuX2RyaXZlclNldCA9IFByb21pc2UkMS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RyaXZlclNldDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXhlY3V0ZVR3b0NhbGxiYWNrcyh0aGlzLl9kcml2ZXJTZXQsIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyaXZlclNldDtcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLnN1cHBvcnRzID0gZnVuY3Rpb24gc3VwcG9ydHMoZHJpdmVyTmFtZSkge1xuICAgICAgICByZXR1cm4gISFEcml2ZXJTdXBwb3J0W2RyaXZlck5hbWVdO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuX2V4dGVuZCA9IGZ1bmN0aW9uIF9leHRlbmQobGlicmFyeU1ldGhvZHNBbmRQcm9wZXJ0aWVzKSB7XG4gICAgICAgIGV4dGVuZCh0aGlzLCBsaWJyYXJ5TWV0aG9kc0FuZFByb3BlcnRpZXMpO1xuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuX2dldFN1cHBvcnRlZERyaXZlcnMgPSBmdW5jdGlvbiBfZ2V0U3VwcG9ydGVkRHJpdmVycyhkcml2ZXJzKSB7XG4gICAgICAgIHZhciBzdXBwb3J0ZWREcml2ZXJzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBkcml2ZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZHJpdmVyTmFtZSA9IGRyaXZlcnNbaV07XG4gICAgICAgICAgICBpZiAodGhpcy5zdXBwb3J0cyhkcml2ZXJOYW1lKSkge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRlZERyaXZlcnMucHVzaChkcml2ZXJOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwcG9ydGVkRHJpdmVycztcbiAgICB9O1xuXG4gICAgTG9jYWxGb3JhZ2UucHJvdG90eXBlLl93cmFwTGlicmFyeU1ldGhvZHNXaXRoUmVhZHkgPSBmdW5jdGlvbiBfd3JhcExpYnJhcnlNZXRob2RzV2l0aFJlYWR5KCkge1xuICAgICAgICAvLyBBZGQgYSBzdHViIGZvciBlYWNoIGRyaXZlciBBUEkgbWV0aG9kIHRoYXQgZGVsYXlzIHRoZSBjYWxsIHRvIHRoZVxuICAgICAgICAvLyBjb3JyZXNwb25kaW5nIGRyaXZlciBtZXRob2QgdW50aWwgbG9jYWxGb3JhZ2UgaXMgcmVhZHkuIFRoZXNlIHN0dWJzXG4gICAgICAgIC8vIHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhlIGRyaXZlciBtZXRob2RzIGFzIHNvb24gYXMgdGhlIGRyaXZlciBpc1xuICAgICAgICAvLyBsb2FkZWQsIHNvIHRoZXJlIGlzIG5vIHBlcmZvcm1hbmNlIGltcGFjdC5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IExpYnJhcnlNZXRob2RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjYWxsV2hlblJlYWR5KHRoaXMsIExpYnJhcnlNZXRob2RzW2ldKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBMb2NhbEZvcmFnZS5wcm90b3R5cGUuY3JlYXRlSW5zdGFuY2UgPSBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgTG9jYWxGb3JhZ2Uob3B0aW9ucyk7XG4gICAgfTtcblxuICAgIHJldHVybiBMb2NhbEZvcmFnZTtcbn0oKTtcblxuLy8gVGhlIGFjdHVhbCBsb2NhbEZvcmFnZSBvYmplY3QgdGhhdCB3ZSBleHBvc2UgYXMgYSBtb2R1bGUgb3IgdmlhIGFcbi8vIGdsb2JhbC4gSXQncyBleHRlbmRlZCBieSBwdWxsaW5nIGluIG9uZSBvZiBvdXIgb3RoZXIgbGlicmFyaWVzLlxuXG5cbnZhciBsb2NhbGZvcmFnZV9qcyA9IG5ldyBMb2NhbEZvcmFnZSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2FsZm9yYWdlX2pzO1xuXG59LHtcIjNcIjozfV19LHt9LFs0XSkoNClcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbi8vIEEgbGlua2VkIGxpc3QgdG8ga2VlcCB0cmFjayBvZiByZWNlbnRseS11c2VkLW5lc3NcbmNvbnN0IFlhbGxpc3QgPSByZXF1aXJlKCd5YWxsaXN0JylcblxuY29uc3QgTUFYID0gU3ltYm9sKCdtYXgnKVxuY29uc3QgTEVOR1RIID0gU3ltYm9sKCdsZW5ndGgnKVxuY29uc3QgTEVOR1RIX0NBTENVTEFUT1IgPSBTeW1ib2woJ2xlbmd0aENhbGN1bGF0b3InKVxuY29uc3QgQUxMT1dfU1RBTEUgPSBTeW1ib2woJ2FsbG93U3RhbGUnKVxuY29uc3QgTUFYX0FHRSA9IFN5bWJvbCgnbWF4QWdlJylcbmNvbnN0IERJU1BPU0UgPSBTeW1ib2woJ2Rpc3Bvc2UnKVxuY29uc3QgTk9fRElTUE9TRV9PTl9TRVQgPSBTeW1ib2woJ25vRGlzcG9zZU9uU2V0JylcbmNvbnN0IExSVV9MSVNUID0gU3ltYm9sKCdscnVMaXN0JylcbmNvbnN0IENBQ0hFID0gU3ltYm9sKCdjYWNoZScpXG5jb25zdCBVUERBVEVfQUdFX09OX0dFVCA9IFN5bWJvbCgndXBkYXRlQWdlT25HZXQnKVxuXG5jb25zdCBuYWl2ZUxlbmd0aCA9ICgpID0+IDFcblxuLy8gbHJ1TGlzdCBpcyBhIHlhbGxpc3Qgd2hlcmUgdGhlIGhlYWQgaXMgdGhlIHlvdW5nZXN0XG4vLyBpdGVtLCBhbmQgdGhlIHRhaWwgaXMgdGhlIG9sZGVzdC4gIHRoZSBsaXN0IGNvbnRhaW5zIHRoZSBIaXRcbi8vIG9iamVjdHMgYXMgdGhlIGVudHJpZXMuXG4vLyBFYWNoIEhpdCBvYmplY3QgaGFzIGEgcmVmZXJlbmNlIHRvIGl0cyBZYWxsaXN0Lk5vZGUuICBUaGlzXG4vLyBuZXZlciBjaGFuZ2VzLlxuLy9cbi8vIGNhY2hlIGlzIGEgTWFwIChvciBQc2V1ZG9NYXApIHRoYXQgbWF0Y2hlcyB0aGUga2V5cyB0b1xuLy8gdGhlIFlhbGxpc3QuTm9kZSBvYmplY3QuXG5jbGFzcyBMUlVDYWNoZSB7XG4gIGNvbnN0cnVjdG9yIChvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnbnVtYmVyJylcbiAgICAgIG9wdGlvbnMgPSB7IG1heDogb3B0aW9ucyB9XG5cbiAgICBpZiAoIW9wdGlvbnMpXG4gICAgICBvcHRpb25zID0ge31cblxuICAgIGlmIChvcHRpb25zLm1heCAmJiAodHlwZW9mIG9wdGlvbnMubWF4ICE9PSAnbnVtYmVyJyB8fCBvcHRpb25zLm1heCA8IDApKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbWF4IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyJylcbiAgICAvLyBLaW5kIG9mIHdlaXJkIHRvIGhhdmUgYSBkZWZhdWx0IG1heCBvZiBJbmZpbml0eSwgYnV0IG9oIHdlbGwuXG4gICAgY29uc3QgbWF4ID0gdGhpc1tNQVhdID0gb3B0aW9ucy5tYXggfHwgSW5maW5pdHlcblxuICAgIGNvbnN0IGxjID0gb3B0aW9ucy5sZW5ndGggfHwgbmFpdmVMZW5ndGhcbiAgICB0aGlzW0xFTkdUSF9DQUxDVUxBVE9SXSA9ICh0eXBlb2YgbGMgIT09ICdmdW5jdGlvbicpID8gbmFpdmVMZW5ndGggOiBsY1xuICAgIHRoaXNbQUxMT1dfU1RBTEVdID0gb3B0aW9ucy5zdGFsZSB8fCBmYWxzZVxuICAgIGlmIChvcHRpb25zLm1heEFnZSAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhBZ2UgIT09ICdudW1iZXInKVxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignbWF4QWdlIG11c3QgYmUgYSBudW1iZXInKVxuICAgIHRoaXNbTUFYX0FHRV0gPSBvcHRpb25zLm1heEFnZSB8fCAwXG4gICAgdGhpc1tESVNQT1NFXSA9IG9wdGlvbnMuZGlzcG9zZVxuICAgIHRoaXNbTk9fRElTUE9TRV9PTl9TRVRdID0gb3B0aW9ucy5ub0Rpc3Bvc2VPblNldCB8fCBmYWxzZVxuICAgIHRoaXNbVVBEQVRFX0FHRV9PTl9HRVRdID0gb3B0aW9ucy51cGRhdGVBZ2VPbkdldCB8fCBmYWxzZVxuICAgIHRoaXMucmVzZXQoKVxuICB9XG5cbiAgLy8gcmVzaXplIHRoZSBjYWNoZSB3aGVuIHRoZSBtYXggY2hhbmdlcy5cbiAgc2V0IG1heCAobUwpIHtcbiAgICBpZiAodHlwZW9mIG1MICE9PSAnbnVtYmVyJyB8fCBtTCA8IDApXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXggbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXInKVxuXG4gICAgdGhpc1tNQVhdID0gbUwgfHwgSW5maW5pdHlcbiAgICB0cmltKHRoaXMpXG4gIH1cbiAgZ2V0IG1heCAoKSB7XG4gICAgcmV0dXJuIHRoaXNbTUFYXVxuICB9XG5cbiAgc2V0IGFsbG93U3RhbGUgKGFsbG93U3RhbGUpIHtcbiAgICB0aGlzW0FMTE9XX1NUQUxFXSA9ICEhYWxsb3dTdGFsZVxuICB9XG4gIGdldCBhbGxvd1N0YWxlICgpIHtcbiAgICByZXR1cm4gdGhpc1tBTExPV19TVEFMRV1cbiAgfVxuXG4gIHNldCBtYXhBZ2UgKG1BKSB7XG4gICAgaWYgKHR5cGVvZiBtQSAhPT0gJ251bWJlcicpXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXhBZ2UgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXInKVxuXG4gICAgdGhpc1tNQVhfQUdFXSA9IG1BXG4gICAgdHJpbSh0aGlzKVxuICB9XG4gIGdldCBtYXhBZ2UgKCkge1xuICAgIHJldHVybiB0aGlzW01BWF9BR0VdXG4gIH1cblxuICAvLyByZXNpemUgdGhlIGNhY2hlIHdoZW4gdGhlIGxlbmd0aENhbGN1bGF0b3IgY2hhbmdlcy5cbiAgc2V0IGxlbmd0aENhbGN1bGF0b3IgKGxDKSB7XG4gICAgaWYgKHR5cGVvZiBsQyAhPT0gJ2Z1bmN0aW9uJylcbiAgICAgIGxDID0gbmFpdmVMZW5ndGhcblxuICAgIGlmIChsQyAhPT0gdGhpc1tMRU5HVEhfQ0FMQ1VMQVRPUl0pIHtcbiAgICAgIHRoaXNbTEVOR1RIX0NBTENVTEFUT1JdID0gbENcbiAgICAgIHRoaXNbTEVOR1RIXSA9IDBcbiAgICAgIHRoaXNbTFJVX0xJU1RdLmZvckVhY2goaGl0ID0+IHtcbiAgICAgICAgaGl0Lmxlbmd0aCA9IHRoaXNbTEVOR1RIX0NBTENVTEFUT1JdKGhpdC52YWx1ZSwgaGl0LmtleSlcbiAgICAgICAgdGhpc1tMRU5HVEhdICs9IGhpdC5sZW5ndGhcbiAgICAgIH0pXG4gICAgfVxuICAgIHRyaW0odGhpcylcbiAgfVxuICBnZXQgbGVuZ3RoQ2FsY3VsYXRvciAoKSB7IHJldHVybiB0aGlzW0xFTkdUSF9DQUxDVUxBVE9SXSB9XG5cbiAgZ2V0IGxlbmd0aCAoKSB7IHJldHVybiB0aGlzW0xFTkdUSF0gfVxuICBnZXQgaXRlbUNvdW50ICgpIHsgcmV0dXJuIHRoaXNbTFJVX0xJU1RdLmxlbmd0aCB9XG5cbiAgcmZvckVhY2ggKGZuLCB0aGlzcCkge1xuICAgIHRoaXNwID0gdGhpc3AgfHwgdGhpc1xuICAgIGZvciAobGV0IHdhbGtlciA9IHRoaXNbTFJVX0xJU1RdLnRhaWw7IHdhbGtlciAhPT0gbnVsbDspIHtcbiAgICAgIGNvbnN0IHByZXYgPSB3YWxrZXIucHJldlxuICAgICAgZm9yRWFjaFN0ZXAodGhpcywgZm4sIHdhbGtlciwgdGhpc3ApXG4gICAgICB3YWxrZXIgPSBwcmV2XG4gICAgfVxuICB9XG5cbiAgZm9yRWFjaCAoZm4sIHRoaXNwKSB7XG4gICAgdGhpc3AgPSB0aGlzcCB8fCB0aGlzXG4gICAgZm9yIChsZXQgd2Fsa2VyID0gdGhpc1tMUlVfTElTVF0uaGVhZDsgd2Fsa2VyICE9PSBudWxsOykge1xuICAgICAgY29uc3QgbmV4dCA9IHdhbGtlci5uZXh0XG4gICAgICBmb3JFYWNoU3RlcCh0aGlzLCBmbiwgd2Fsa2VyLCB0aGlzcClcbiAgICAgIHdhbGtlciA9IG5leHRcbiAgICB9XG4gIH1cblxuICBrZXlzICgpIHtcbiAgICByZXR1cm4gdGhpc1tMUlVfTElTVF0udG9BcnJheSgpLm1hcChrID0+IGsua2V5KVxuICB9XG5cbiAgdmFsdWVzICgpIHtcbiAgICByZXR1cm4gdGhpc1tMUlVfTElTVF0udG9BcnJheSgpLm1hcChrID0+IGsudmFsdWUpXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgaWYgKHRoaXNbRElTUE9TRV0gJiZcbiAgICAgICAgdGhpc1tMUlVfTElTVF0gJiZcbiAgICAgICAgdGhpc1tMUlVfTElTVF0ubGVuZ3RoKSB7XG4gICAgICB0aGlzW0xSVV9MSVNUXS5mb3JFYWNoKGhpdCA9PiB0aGlzW0RJU1BPU0VdKGhpdC5rZXksIGhpdC52YWx1ZSkpXG4gICAgfVxuXG4gICAgdGhpc1tDQUNIRV0gPSBuZXcgTWFwKCkgLy8gaGFzaCBvZiBpdGVtcyBieSBrZXlcbiAgICB0aGlzW0xSVV9MSVNUXSA9IG5ldyBZYWxsaXN0KCkgLy8gbGlzdCBvZiBpdGVtcyBpbiBvcmRlciBvZiB1c2UgcmVjZW5jeVxuICAgIHRoaXNbTEVOR1RIXSA9IDAgLy8gbGVuZ3RoIG9mIGl0ZW1zIGluIHRoZSBsaXN0XG4gIH1cblxuICBkdW1wICgpIHtcbiAgICByZXR1cm4gdGhpc1tMUlVfTElTVF0ubWFwKGhpdCA9PlxuICAgICAgaXNTdGFsZSh0aGlzLCBoaXQpID8gZmFsc2UgOiB7XG4gICAgICAgIGs6IGhpdC5rZXksXG4gICAgICAgIHY6IGhpdC52YWx1ZSxcbiAgICAgICAgZTogaGl0Lm5vdyArIChoaXQubWF4QWdlIHx8IDApXG4gICAgICB9KS50b0FycmF5KCkuZmlsdGVyKGggPT4gaClcbiAgfVxuXG4gIGR1bXBMcnUgKCkge1xuICAgIHJldHVybiB0aGlzW0xSVV9MSVNUXVxuICB9XG5cbiAgc2V0IChrZXksIHZhbHVlLCBtYXhBZ2UpIHtcbiAgICBtYXhBZ2UgPSBtYXhBZ2UgfHwgdGhpc1tNQVhfQUdFXVxuXG4gICAgaWYgKG1heEFnZSAmJiB0eXBlb2YgbWF4QWdlICE9PSAnbnVtYmVyJylcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ21heEFnZSBtdXN0IGJlIGEgbnVtYmVyJylcblxuICAgIGNvbnN0IG5vdyA9IG1heEFnZSA/IERhdGUubm93KCkgOiAwXG4gICAgY29uc3QgbGVuID0gdGhpc1tMRU5HVEhfQ0FMQ1VMQVRPUl0odmFsdWUsIGtleSlcblxuICAgIGlmICh0aGlzW0NBQ0hFXS5oYXMoa2V5KSkge1xuICAgICAgaWYgKGxlbiA+IHRoaXNbTUFYXSkge1xuICAgICAgICBkZWwodGhpcywgdGhpc1tDQUNIRV0uZ2V0KGtleSkpXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBub2RlID0gdGhpc1tDQUNIRV0uZ2V0KGtleSlcbiAgICAgIGNvbnN0IGl0ZW0gPSBub2RlLnZhbHVlXG5cbiAgICAgIC8vIGRpc3Bvc2Ugb2YgdGhlIG9sZCBvbmUgYmVmb3JlIG92ZXJ3cml0aW5nXG4gICAgICAvLyBzcGxpdCBvdXQgaW50byAyIGlmcyBmb3IgYmV0dGVyIGNvdmVyYWdlIHRyYWNraW5nXG4gICAgICBpZiAodGhpc1tESVNQT1NFXSkge1xuICAgICAgICBpZiAoIXRoaXNbTk9fRElTUE9TRV9PTl9TRVRdKVxuICAgICAgICAgIHRoaXNbRElTUE9TRV0oa2V5LCBpdGVtLnZhbHVlKVxuICAgICAgfVxuXG4gICAgICBpdGVtLm5vdyA9IG5vd1xuICAgICAgaXRlbS5tYXhBZ2UgPSBtYXhBZ2VcbiAgICAgIGl0ZW0udmFsdWUgPSB2YWx1ZVxuICAgICAgdGhpc1tMRU5HVEhdICs9IGxlbiAtIGl0ZW0ubGVuZ3RoXG4gICAgICBpdGVtLmxlbmd0aCA9IGxlblxuICAgICAgdGhpcy5nZXQoa2V5KVxuICAgICAgdHJpbSh0aGlzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBoaXQgPSBuZXcgRW50cnkoa2V5LCB2YWx1ZSwgbGVuLCBub3csIG1heEFnZSlcblxuICAgIC8vIG92ZXJzaXplZCBvYmplY3RzIGZhbGwgb3V0IG9mIGNhY2hlIGF1dG9tYXRpY2FsbHkuXG4gICAgaWYgKGhpdC5sZW5ndGggPiB0aGlzW01BWF0pIHtcbiAgICAgIGlmICh0aGlzW0RJU1BPU0VdKVxuICAgICAgICB0aGlzW0RJU1BPU0VdKGtleSwgdmFsdWUpXG5cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHRoaXNbTEVOR1RIXSArPSBoaXQubGVuZ3RoXG4gICAgdGhpc1tMUlVfTElTVF0udW5zaGlmdChoaXQpXG4gICAgdGhpc1tDQUNIRV0uc2V0KGtleSwgdGhpc1tMUlVfTElTVF0uaGVhZClcbiAgICB0cmltKHRoaXMpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGhhcyAoa2V5KSB7XG4gICAgaWYgKCF0aGlzW0NBQ0hFXS5oYXMoa2V5KSkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgaGl0ID0gdGhpc1tDQUNIRV0uZ2V0KGtleSkudmFsdWVcbiAgICByZXR1cm4gIWlzU3RhbGUodGhpcywgaGl0KVxuICB9XG5cbiAgZ2V0IChrZXkpIHtcbiAgICByZXR1cm4gZ2V0KHRoaXMsIGtleSwgdHJ1ZSlcbiAgfVxuXG4gIHBlZWsgKGtleSkge1xuICAgIHJldHVybiBnZXQodGhpcywga2V5LCBmYWxzZSlcbiAgfVxuXG4gIHBvcCAoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXNbTFJVX0xJU1RdLnRhaWxcbiAgICBpZiAoIW5vZGUpXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgZGVsKHRoaXMsIG5vZGUpXG4gICAgcmV0dXJuIG5vZGUudmFsdWVcbiAgfVxuXG4gIGRlbCAoa2V5KSB7XG4gICAgZGVsKHRoaXMsIHRoaXNbQ0FDSEVdLmdldChrZXkpKVxuICB9XG5cbiAgbG9hZCAoYXJyKSB7XG4gICAgLy8gcmVzZXQgdGhlIGNhY2hlXG4gICAgdGhpcy5yZXNldCgpXG5cbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpXG4gICAgLy8gQSBwcmV2aW91cyBzZXJpYWxpemVkIGNhY2hlIGhhcyB0aGUgbW9zdCByZWNlbnQgaXRlbXMgZmlyc3RcbiAgICBmb3IgKGxldCBsID0gYXJyLmxlbmd0aCAtIDE7IGwgPj0gMDsgbC0tKSB7XG4gICAgICBjb25zdCBoaXQgPSBhcnJbbF1cbiAgICAgIGNvbnN0IGV4cGlyZXNBdCA9IGhpdC5lIHx8IDBcbiAgICAgIGlmIChleHBpcmVzQXQgPT09IDApXG4gICAgICAgIC8vIHRoZSBpdGVtIHdhcyBjcmVhdGVkIHdpdGhvdXQgZXhwaXJhdGlvbiBpbiBhIG5vbiBhZ2VkIGNhY2hlXG4gICAgICAgIHRoaXMuc2V0KGhpdC5rLCBoaXQudilcbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBtYXhBZ2UgPSBleHBpcmVzQXQgLSBub3dcbiAgICAgICAgLy8gZG9udCBhZGQgYWxyZWFkeSBleHBpcmVkIGl0ZW1zXG4gICAgICAgIGlmIChtYXhBZ2UgPiAwKSB7XG4gICAgICAgICAgdGhpcy5zZXQoaGl0LmssIGhpdC52LCBtYXhBZ2UpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcnVuZSAoKSB7XG4gICAgdGhpc1tDQUNIRV0uZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gZ2V0KHRoaXMsIGtleSwgZmFsc2UpKVxuICB9XG59XG5cbmNvbnN0IGdldCA9IChzZWxmLCBrZXksIGRvVXNlKSA9PiB7XG4gIGNvbnN0IG5vZGUgPSBzZWxmW0NBQ0hFXS5nZXQoa2V5KVxuICBpZiAobm9kZSkge1xuICAgIGNvbnN0IGhpdCA9IG5vZGUudmFsdWVcbiAgICBpZiAoaXNTdGFsZShzZWxmLCBoaXQpKSB7XG4gICAgICBkZWwoc2VsZiwgbm9kZSlcbiAgICAgIGlmICghc2VsZltBTExPV19TVEFMRV0pXG4gICAgICAgIHJldHVybiB1bmRlZmluZWRcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRvVXNlKSB7XG4gICAgICAgIGlmIChzZWxmW1VQREFURV9BR0VfT05fR0VUXSlcbiAgICAgICAgICBub2RlLnZhbHVlLm5vdyA9IERhdGUubm93KClcbiAgICAgICAgc2VsZltMUlVfTElTVF0udW5zaGlmdE5vZGUobm9kZSlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhpdC52YWx1ZVxuICB9XG59XG5cbmNvbnN0IGlzU3RhbGUgPSAoc2VsZiwgaGl0KSA9PiB7XG4gIGlmICghaGl0IHx8ICghaGl0Lm1heEFnZSAmJiAhc2VsZltNQVhfQUdFXSkpXG4gICAgcmV0dXJuIGZhbHNlXG5cbiAgY29uc3QgZGlmZiA9IERhdGUubm93KCkgLSBoaXQubm93XG4gIHJldHVybiBoaXQubWF4QWdlID8gZGlmZiA+IGhpdC5tYXhBZ2VcbiAgICA6IHNlbGZbTUFYX0FHRV0gJiYgKGRpZmYgPiBzZWxmW01BWF9BR0VdKVxufVxuXG5jb25zdCB0cmltID0gc2VsZiA9PiB7XG4gIGlmIChzZWxmW0xFTkdUSF0gPiBzZWxmW01BWF0pIHtcbiAgICBmb3IgKGxldCB3YWxrZXIgPSBzZWxmW0xSVV9MSVNUXS50YWlsO1xuICAgICAgc2VsZltMRU5HVEhdID4gc2VsZltNQVhdICYmIHdhbGtlciAhPT0gbnVsbDspIHtcbiAgICAgIC8vIFdlIGtub3cgdGhhdCB3ZSdyZSBhYm91dCB0byBkZWxldGUgdGhpcyBvbmUsIGFuZCBhbHNvXG4gICAgICAvLyB3aGF0IHRoZSBuZXh0IGxlYXN0IHJlY2VudGx5IHVzZWQga2V5IHdpbGwgYmUsIHNvIGp1c3RcbiAgICAgIC8vIGdvIGFoZWFkIGFuZCBzZXQgaXQgbm93LlxuICAgICAgY29uc3QgcHJldiA9IHdhbGtlci5wcmV2XG4gICAgICBkZWwoc2VsZiwgd2Fsa2VyKVxuICAgICAgd2Fsa2VyID0gcHJldlxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBkZWwgPSAoc2VsZiwgbm9kZSkgPT4ge1xuICBpZiAobm9kZSkge1xuICAgIGNvbnN0IGhpdCA9IG5vZGUudmFsdWVcbiAgICBpZiAoc2VsZltESVNQT1NFXSlcbiAgICAgIHNlbGZbRElTUE9TRV0oaGl0LmtleSwgaGl0LnZhbHVlKVxuXG4gICAgc2VsZltMRU5HVEhdIC09IGhpdC5sZW5ndGhcbiAgICBzZWxmW0NBQ0hFXS5kZWxldGUoaGl0LmtleSlcbiAgICBzZWxmW0xSVV9MSVNUXS5yZW1vdmVOb2RlKG5vZGUpXG4gIH1cbn1cblxuY2xhc3MgRW50cnkge1xuICBjb25zdHJ1Y3RvciAoa2V5LCB2YWx1ZSwgbGVuZ3RoLCBub3csIG1heEFnZSkge1xuICAgIHRoaXMua2V5ID0ga2V5XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGhcbiAgICB0aGlzLm5vdyA9IG5vd1xuICAgIHRoaXMubWF4QWdlID0gbWF4QWdlIHx8IDBcbiAgfVxufVxuXG5jb25zdCBmb3JFYWNoU3RlcCA9IChzZWxmLCBmbiwgbm9kZSwgdGhpc3ApID0+IHtcbiAgbGV0IGhpdCA9IG5vZGUudmFsdWVcbiAgaWYgKGlzU3RhbGUoc2VsZiwgaGl0KSkge1xuICAgIGRlbChzZWxmLCBub2RlKVxuICAgIGlmICghc2VsZltBTExPV19TVEFMRV0pXG4gICAgICBoaXQgPSB1bmRlZmluZWRcbiAgfVxuICBpZiAoaGl0KVxuICAgIGZuLmNhbGwodGhpc3AsIGhpdC52YWx1ZSwgaGl0LmtleSwgc2VsZilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMUlVDYWNoZVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICB9O1xuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xuICAgIH07XG59KSgpO1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbnZhciBfX3JlYWQgPSAodGhpcyAmJiB0aGlzLl9fcmVhZCkgfHwgZnVuY3Rpb24gKG8sIG4pIHtcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XG4gICAgaWYgKCFtKSByZXR1cm4gbztcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcbiAgICB0cnkge1xuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cbiAgICB9XG4gICAgcmV0dXJuIGFyO1xufTtcbmltcG9ydCB7IFZpZXdDb250cm9sbGVyLCBjcmVhdGVEdXBsaWNhdGVJZnJhbWVXYXJuaW5nLCBjcmVhdGVVUkwsIGNyZWF0ZU1vZGFsTm90UmVhZHlFcnJvciB9IGZyb20gJ0BtYWdpYy1zZGsvcHJvdmlkZXInO1xuLyoqXG4gKiBNYWdpYyBgPGlmcmFtZT5gIG92ZXJsYXkgc3R5bGVzLiBUaGVzZSBiYXNlIHN0eWxlcyBlbmFibGUgYDxpZnJhbWU+YCBVSVxuICogdG8gcmVuZGVyIGFib3ZlIGFsbCBvdGhlciBET00gY29udGVudC5cbiAqL1xudmFyIG92ZXJsYXlTdHlsZXMgPSB7XG4gICAgZGlzcGxheTogJ25vbmUnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHRvcDogJzAnLFxuICAgIHJpZ2h0OiAnMCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBib3JkZXJSYWRpdXM6ICcwJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICB6SW5kZXg6ICcyMTQ3NDgzNjQ3Jyxcbn07XG4vKipcbiAqIEFwcGx5IGlmcmFtZSBzdHlsZXMgdG8gdGhlIGdpdmVuIGVsZW1lbnQuXG4gKiBAcGFyYW0gZWxlbSAtIEFuIGVsZW1lbnQgdG8gYXBwbHkgc3R5bGVzIHVzaW5nIENTU09NLlxuICovXG5mdW5jdGlvbiBhcHBseU92ZXJsYXlTdHlsZXMoZWxlbSkge1xuICAgIHZhciBlXzEsIF9hO1xuICAgIHRyeSB7XG4gICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXMoT2JqZWN0LmVudHJpZXMob3ZlcmxheVN0eWxlcykpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICB2YXIgX2QgPSBfX3JlYWQoX2MudmFsdWUsIDIpLCBjc3NQcm9wZXJ0eSA9IF9kWzBdLCB2YWx1ZSA9IF9kWzFdO1xuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgICAgICAgICBlbGVtLnN0eWxlW2Nzc1Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgZmluYWxseSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgIH1cbn1cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBnaXZlbiBxdWVyeSBwYXJhbXMgYXJlIGFzc29jaWF0ZWQgd2l0aCBhbiBhY3RpdmUgYDxpZnJhbWU+YFxuICogaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIGVuY29kZWRRdWVyeVBhcmFtcyAtIFRoZSB1bmlxdWUsIGVuY29kZWQgcXVlcnkgcGFyYW1ldGVycyB0byBjaGVjayBmb3JcbiAqIGR1cGxpY2F0ZXMgYWdhaW5zdC5cbiAqL1xuZnVuY3Rpb24gY2hlY2tGb3JTYW1lU3JjSW5zdGFuY2VzKGVuY29kZWRRdWVyeVBhcmFtcykge1xuICAgIHZhciBpZnJhbWVzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFnaWMtaWZyYW1lJykpO1xuICAgIHJldHVybiBCb29sZWFuKGlmcmFtZXMuZmluZChmdW5jdGlvbiAoaWZyYW1lKSB7IHJldHVybiBpZnJhbWUuc3JjLmluY2x1ZGVzKGVuY29kZWRRdWVyeVBhcmFtcyk7IH0pKTtcbn1cbi8qKlxuICogVmlldyBjb250cm9sbGVyIGZvciB0aGUgTWFnaWMgYDxpZnJhbWU+YCBvdmVybGF5LlxuICovXG52YXIgSWZyYW1lQ29udHJvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSWZyYW1lQ29udHJvbGxlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJZnJhbWVDb250cm9sbGVyKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIElmcmFtZUNvbnRyb2xsZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaWZyYW1lID0gdGhpcy5jcmVhdGVJZnJhbWUoKTtcbiAgICB9O1xuICAgIElmcmFtZUNvbnRyb2xsZXIucHJvdG90eXBlLmNyZWF0ZUlmcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICB2YXIgb25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghY2hlY2tGb3JTYW1lU3JjSW5zdGFuY2VzKGVuY29kZVVSSUNvbXBvbmVudChfdGhpcy5lbmNvZGVkUXVlcnlQYXJhbXMpKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmcmFtZS5jbGFzc0xpc3QuYWRkKCdtYWdpYy1pZnJhbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgaWZyYW1lLmRhdGFzZXQubWFnaWNJZnJhbWVMYWJlbCA9IGNyZWF0ZVVSTChfdGhpcy5lbmRwb2ludCkuaG9zdDtcbiAgICAgICAgICAgICAgICAgICAgaWZyYW1lLnNyYyA9IGNyZWF0ZVVSTChcIi9zZW5kP3BhcmFtcz1cIiArIGVuY29kZVVSSUNvbXBvbmVudChfdGhpcy5lbmNvZGVkUXVlcnlQYXJhbXMpLCBfdGhpcy5lbmRwb2ludCkuaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlPdmVybGF5U3R5bGVzKGlmcmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpZnJhbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlRHVwbGljYXRlSWZyYW1lV2FybmluZygpLmxvZygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBDaGVjayBET00gc3RhdGUgYW5kIGxvYWQuLi5cbiAgICAgICAgICAgIGlmIChbJ2xvYWRlZCcsICdpbnRlcmFjdGl2ZScsICdjb21wbGV0ZSddLmluY2x1ZGVzKGRvY3VtZW50LnJlYWR5U3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgb25sb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAuLi5vciBjaGVjayBsb2FkIGV2ZW50cyB0byBsb2FkXG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbmxvYWQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBJZnJhbWVDb250cm9sbGVyLnByb3RvdHlwZS5zaG93T3ZlcmxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG92ZXJsYXlSZXNvbHZlZDtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5pZnJhbWVdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5UmVzb2x2ZWQgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVybGF5UmVzb2x2ZWQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSWZyYW1lQ29udHJvbGxlci5wcm90b3R5cGUuaGlkZU92ZXJsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvdmVybGF5UmVzb2x2ZWQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuaWZyYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVJlc29sdmVkID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVJlc29sdmVkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSWZyYW1lQ29udHJvbGxlci5wcm90b3R5cGUucG9zdE1lc3NhZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaWZyYW1lO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmlmcmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZnJhbWUgJiYgaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShkYXRhLCB0aGlzLmVuZHBvaW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZU1vZGFsTm90UmVhZHlFcnJvcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBJZnJhbWVDb250cm9sbGVyO1xufShWaWV3Q29udHJvbGxlcikpO1xuZXhwb3J0IHsgSWZyYW1lQ29udHJvbGxlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWZyYW1lLWNvbnRyb2xsZXIuanMubWFwIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBTREtCYXNlLCBjcmVhdGVTREsgfSBmcm9tICdAbWFnaWMtc2RrL3Byb3ZpZGVyJztcbmltcG9ydCBsb2NhbEZvcmFnZSBmcm9tICdsb2NhbGZvcmFnZSc7XG5pbXBvcnQgKiBhcyBtZW1vcnlEcml2ZXIgZnJvbSAnbG9jYWxmb3JhZ2UtZHJpdmVyLW1lbW9yeSc7XG5pbXBvcnQgeyBJZnJhbWVDb250cm9sbGVyIH0gZnJvbSAnLi9pZnJhbWUtY29udHJvbGxlcic7XG5pbXBvcnQgeyBXZWJUcmFuc3BvcnQgfSBmcm9tICcuL3dlYi10cmFuc3BvcnQnO1xuZXhwb3J0IHsgRXh0ZW5zaW9uLCBNYWdpY1NES0Vycm9yIGFzIFNES0Vycm9yLCBNYWdpY0V4dGVuc2lvbkVycm9yIGFzIEV4dGVuc2lvbkVycm9yLCBNYWdpY0V4dGVuc2lvbldhcm5pbmcgYXMgRXh0ZW5zaW9uV2FybmluZywgTWFnaWNSUENFcnJvciBhcyBSUENFcnJvciwgTWFnaWNTREtXYXJuaW5nIGFzIFNES1dhcm5pbmcsIGlzUHJvbWlFdmVudCwgfSBmcm9tICdAbWFnaWMtc2RrL3Byb3ZpZGVyJztcbmV4cG9ydCAqIGZyb20gJ0BtYWdpYy1zZGsvdHlwZXMnO1xuZXhwb3J0IHZhciBNYWdpYyA9IGNyZWF0ZVNESyhTREtCYXNlLCB7XG4gICAgdGFyZ2V0OiAnd2ViJyxcbiAgICBzZGtOYW1lOiAnbWFnaWMtc2RrJyxcbiAgICB2ZXJzaW9uOiAnMi43LjAnLFxuICAgIGRlZmF1bHRFbmRwb2ludDogJ2h0dHBzOi8vYXV0aC5tYWdpYy5saW5rLycsXG4gICAgVmlld0NvbnRyb2xsZXI6IElmcmFtZUNvbnRyb2xsZXIsXG4gICAgUGF5bG9hZFRyYW5zcG9ydDogV2ViVHJhbnNwb3J0LFxuICAgIGNvbmZpZ3VyZVN0b3JhZ2U6IC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovIGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBsZjtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgbGYgPSBsb2NhbEZvcmFnZS5jcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTWFnaWNBdXRoTG9jYWxTdG9yYWdlREInLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcmVOYW1lOiAnTWFnaWNBdXRoTG9jYWxTdG9yYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGxmLmRlZmluZURyaXZlcihtZW1vcnlEcml2ZXIpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgbGYuc2V0RHJpdmVyKFtsb2NhbEZvcmFnZS5JTkRFWEVEREIsIGxvY2FsRm9yYWdlLkxPQ0FMU1RPUkFHRSwgbWVtb3J5RHJpdmVyLl9kcml2ZXJdKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBsZl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9LFxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbnZhciBfX3ZhbHVlcyA9ICh0aGlzICYmIHRoaXMuX192YWx1ZXMpIHx8IGZ1bmN0aW9uKG8pIHtcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xufTtcbmltcG9ydCB7IFBheWxvYWRUcmFuc3BvcnQgfSBmcm9tICdAbWFnaWMtc2RrL3Byb3ZpZGVyJztcbnZhciBXZWJUcmFuc3BvcnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFdlYlRyYW5zcG9ydCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBXZWJUcmFuc3BvcnQoKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgdW5kZXJseWluZyBgV2luZG93Lm9ubWVzc2FnZWAgZXZlbnQgbGlzdGVuZXIuXG4gICAgICovXG4gICAgV2ViVHJhbnNwb3J0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgICAgICB2YXIgX2I7XG4gICAgICAgICAgICBpZiAoZXZlbnQub3JpZ2luID09PSBfdGhpcy5lbmRwb2ludCkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5kYXRhICYmIGV2ZW50LmRhdGEubXNnVHlwZSAmJiBfdGhpcy5tZXNzYWdlSGFuZGxlcnMuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmVzcG9uc2Ugb2JqZWN0IGlzIHVuZGVmaW5lZCwgd2UgZW5zdXJlIGl0J3MgYXQgbGVhc3QgYW5cbiAgICAgICAgICAgICAgICAgICAgLy8gZW1wdHkgb2JqZWN0IGJlZm9yZSBwYXNzaW5nIHRvIHRoZSBldmVudCBsaXN0ZW5lci5cbiAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduICovXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEucmVzcG9uc2UgPSAoX2IgPSBldmVudC5kYXRhLnJlc3BvbnNlKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiB7fTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9jID0gX192YWx1ZXMoX3RoaXMubWVzc2FnZUhhbmRsZXJzLnZhbHVlcygpKSwgX2QgPSBfYy5uZXh0KCk7ICFfZC5kb25lOyBfZCA9IF9jLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyID0gX2QudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVfMV8xKSB7IGVfMSA9IHsgZXJyb3I6IGVfMV8xIH07IH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfZCAmJiAhX2QuZG9uZSAmJiAoX2EgPSBfYy5yZXR1cm4pKSBfYS5jYWxsKF9jKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gV2ViVHJhbnNwb3J0O1xufShQYXlsb2FkVHJhbnNwb3J0KSk7XG5leHBvcnQgeyBXZWJUcmFuc3BvcnQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdlYi10cmFuc3BvcnQuanMubWFwIiwiJ3VzZSBzdHJpY3QnXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChZYWxsaXN0KSB7XG4gIFlhbGxpc3QucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiogKCkge1xuICAgIGZvciAobGV0IHdhbGtlciA9IHRoaXMuaGVhZDsgd2Fsa2VyOyB3YWxrZXIgPSB3YWxrZXIubmV4dCkge1xuICAgICAgeWllbGQgd2Fsa2VyLnZhbHVlXG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcbm1vZHVsZS5leHBvcnRzID0gWWFsbGlzdFxuXG5ZYWxsaXN0Lk5vZGUgPSBOb2RlXG5ZYWxsaXN0LmNyZWF0ZSA9IFlhbGxpc3RcblxuZnVuY3Rpb24gWWFsbGlzdCAobGlzdCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgaWYgKCEoc2VsZiBpbnN0YW5jZW9mIFlhbGxpc3QpKSB7XG4gICAgc2VsZiA9IG5ldyBZYWxsaXN0KClcbiAgfVxuXG4gIHNlbGYudGFpbCA9IG51bGxcbiAgc2VsZi5oZWFkID0gbnVsbFxuICBzZWxmLmxlbmd0aCA9IDBcblxuICBpZiAobGlzdCAmJiB0eXBlb2YgbGlzdC5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBzZWxmLnB1c2goaXRlbSlcbiAgICB9KVxuICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBzZWxmLnB1c2goYXJndW1lbnRzW2ldKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzZWxmXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnJlbW92ZU5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAobm9kZS5saXN0ICE9PSB0aGlzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdyZW1vdmluZyBub2RlIHdoaWNoIGRvZXMgbm90IGJlbG9uZyB0byB0aGlzIGxpc3QnKVxuICB9XG5cbiAgdmFyIG5leHQgPSBub2RlLm5leHRcbiAgdmFyIHByZXYgPSBub2RlLnByZXZcblxuICBpZiAobmV4dCkge1xuICAgIG5leHQucHJldiA9IHByZXZcbiAgfVxuXG4gIGlmIChwcmV2KSB7XG4gICAgcHJldi5uZXh0ID0gbmV4dFxuICB9XG5cbiAgaWYgKG5vZGUgPT09IHRoaXMuaGVhZCkge1xuICAgIHRoaXMuaGVhZCA9IG5leHRcbiAgfVxuICBpZiAobm9kZSA9PT0gdGhpcy50YWlsKSB7XG4gICAgdGhpcy50YWlsID0gcHJldlxuICB9XG5cbiAgbm9kZS5saXN0Lmxlbmd0aC0tXG4gIG5vZGUubmV4dCA9IG51bGxcbiAgbm9kZS5wcmV2ID0gbnVsbFxuICBub2RlLmxpc3QgPSBudWxsXG5cbiAgcmV0dXJuIG5leHRcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUudW5zaGlmdE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuICBpZiAobm9kZSA9PT0gdGhpcy5oZWFkKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAobm9kZS5saXN0KSB7XG4gICAgbm9kZS5saXN0LnJlbW92ZU5vZGUobm9kZSlcbiAgfVxuXG4gIHZhciBoZWFkID0gdGhpcy5oZWFkXG4gIG5vZGUubGlzdCA9IHRoaXNcbiAgbm9kZS5uZXh0ID0gaGVhZFxuICBpZiAoaGVhZCkge1xuICAgIGhlYWQucHJldiA9IG5vZGVcbiAgfVxuXG4gIHRoaXMuaGVhZCA9IG5vZGVcbiAgaWYgKCF0aGlzLnRhaWwpIHtcbiAgICB0aGlzLnRhaWwgPSBub2RlXG4gIH1cbiAgdGhpcy5sZW5ndGgrK1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5wdXNoTm9kZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gIGlmIChub2RlID09PSB0aGlzLnRhaWwpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChub2RlLmxpc3QpIHtcbiAgICBub2RlLmxpc3QucmVtb3ZlTm9kZShub2RlKVxuICB9XG5cbiAgdmFyIHRhaWwgPSB0aGlzLnRhaWxcbiAgbm9kZS5saXN0ID0gdGhpc1xuICBub2RlLnByZXYgPSB0YWlsXG4gIGlmICh0YWlsKSB7XG4gICAgdGFpbC5uZXh0ID0gbm9kZVxuICB9XG5cbiAgdGhpcy50YWlsID0gbm9kZVxuICBpZiAoIXRoaXMuaGVhZCkge1xuICAgIHRoaXMuaGVhZCA9IG5vZGVcbiAgfVxuICB0aGlzLmxlbmd0aCsrXG59XG5cbllhbGxpc3QucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHB1c2godGhpcywgYXJndW1lbnRzW2ldKVxuICB9XG4gIHJldHVybiB0aGlzLmxlbmd0aFxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS51bnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB1bnNoaWZ0KHRoaXMsIGFyZ3VtZW50c1tpXSlcbiAgfVxuICByZXR1cm4gdGhpcy5sZW5ndGhcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24gKCkge1xuICBpZiAoIXRoaXMudGFpbCkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHZhciByZXMgPSB0aGlzLnRhaWwudmFsdWVcbiAgdGhpcy50YWlsID0gdGhpcy50YWlsLnByZXZcbiAgaWYgKHRoaXMudGFpbCkge1xuICAgIHRoaXMudGFpbC5uZXh0ID0gbnVsbFxuICB9IGVsc2Uge1xuICAgIHRoaXMuaGVhZCA9IG51bGxcbiAgfVxuICB0aGlzLmxlbmd0aC0tXG4gIHJldHVybiByZXNcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuc2hpZnQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5oZWFkKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgdmFyIHJlcyA9IHRoaXMuaGVhZC52YWx1ZVxuICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV4dFxuICBpZiAodGhpcy5oZWFkKSB7XG4gICAgdGhpcy5oZWFkLnByZXYgPSBudWxsXG4gIH0gZWxzZSB7XG4gICAgdGhpcy50YWlsID0gbnVsbFxuICB9XG4gIHRoaXMubGVuZ3RoLS1cbiAgcmV0dXJuIHJlc1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGZuLCB0aGlzcCkge1xuICB0aGlzcCA9IHRoaXNwIHx8IHRoaXNcbiAgZm9yICh2YXIgd2Fsa2VyID0gdGhpcy5oZWFkLCBpID0gMDsgd2Fsa2VyICE9PSBudWxsOyBpKyspIHtcbiAgICBmbi5jYWxsKHRoaXNwLCB3YWxrZXIudmFsdWUsIGksIHRoaXMpXG4gICAgd2Fsa2VyID0gd2Fsa2VyLm5leHRcbiAgfVxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5mb3JFYWNoUmV2ZXJzZSA9IGZ1bmN0aW9uIChmbiwgdGhpc3ApIHtcbiAgdGhpc3AgPSB0aGlzcCB8fCB0aGlzXG4gIGZvciAodmFyIHdhbGtlciA9IHRoaXMudGFpbCwgaSA9IHRoaXMubGVuZ3RoIC0gMTsgd2Fsa2VyICE9PSBudWxsOyBpLS0pIHtcbiAgICBmbi5jYWxsKHRoaXNwLCB3YWxrZXIudmFsdWUsIGksIHRoaXMpXG4gICAgd2Fsa2VyID0gd2Fsa2VyLnByZXZcbiAgfVxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobikge1xuICBmb3IgKHZhciBpID0gMCwgd2Fsa2VyID0gdGhpcy5oZWFkOyB3YWxrZXIgIT09IG51bGwgJiYgaSA8IG47IGkrKykge1xuICAgIC8vIGFib3J0IG91dCBvZiB0aGUgbGlzdCBlYXJseSBpZiB3ZSBoaXQgYSBjeWNsZVxuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cbiAgaWYgKGkgPT09IG4gJiYgd2Fsa2VyICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdhbGtlci52YWx1ZVxuICB9XG59XG5cbllhbGxpc3QucHJvdG90eXBlLmdldFJldmVyc2UgPSBmdW5jdGlvbiAobikge1xuICBmb3IgKHZhciBpID0gMCwgd2Fsa2VyID0gdGhpcy50YWlsOyB3YWxrZXIgIT09IG51bGwgJiYgaSA8IG47IGkrKykge1xuICAgIC8vIGFib3J0IG91dCBvZiB0aGUgbGlzdCBlYXJseSBpZiB3ZSBoaXQgYSBjeWNsZVxuICAgIHdhbGtlciA9IHdhbGtlci5wcmV2XG4gIH1cbiAgaWYgKGkgPT09IG4gJiYgd2Fsa2VyICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIHdhbGtlci52YWx1ZVxuICB9XG59XG5cbllhbGxpc3QucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmbiwgdGhpc3ApIHtcbiAgdGhpc3AgPSB0aGlzcCB8fCB0aGlzXG4gIHZhciByZXMgPSBuZXcgWWFsbGlzdCgpXG4gIGZvciAodmFyIHdhbGtlciA9IHRoaXMuaGVhZDsgd2Fsa2VyICE9PSBudWxsOykge1xuICAgIHJlcy5wdXNoKGZuLmNhbGwodGhpc3AsIHdhbGtlci52YWx1ZSwgdGhpcykpXG4gICAgd2Fsa2VyID0gd2Fsa2VyLm5leHRcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbllhbGxpc3QucHJvdG90eXBlLm1hcFJldmVyc2UgPSBmdW5jdGlvbiAoZm4sIHRoaXNwKSB7XG4gIHRoaXNwID0gdGhpc3AgfHwgdGhpc1xuICB2YXIgcmVzID0gbmV3IFlhbGxpc3QoKVxuICBmb3IgKHZhciB3YWxrZXIgPSB0aGlzLnRhaWw7IHdhbGtlciAhPT0gbnVsbDspIHtcbiAgICByZXMucHVzaChmbi5jYWxsKHRoaXNwLCB3YWxrZXIudmFsdWUsIHRoaXMpKVxuICAgIHdhbGtlciA9IHdhbGtlci5wcmV2XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5yZWR1Y2UgPSBmdW5jdGlvbiAoZm4sIGluaXRpYWwpIHtcbiAgdmFyIGFjY1xuICB2YXIgd2Fsa2VyID0gdGhpcy5oZWFkXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIGFjYyA9IGluaXRpYWxcbiAgfSBlbHNlIGlmICh0aGlzLmhlYWQpIHtcbiAgICB3YWxrZXIgPSB0aGlzLmhlYWQubmV4dFxuICAgIGFjYyA9IHRoaXMuaGVhZC52YWx1ZVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBsaXN0IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpXG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgd2Fsa2VyICE9PSBudWxsOyBpKyspIHtcbiAgICBhY2MgPSBmbihhY2MsIHdhbGtlci52YWx1ZSwgaSlcbiAgICB3YWxrZXIgPSB3YWxrZXIubmV4dFxuICB9XG5cbiAgcmV0dXJuIGFjY1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5yZWR1Y2VSZXZlcnNlID0gZnVuY3Rpb24gKGZuLCBpbml0aWFsKSB7XG4gIHZhciBhY2NcbiAgdmFyIHdhbGtlciA9IHRoaXMudGFpbFxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBhY2MgPSBpbml0aWFsXG4gIH0gZWxzZSBpZiAodGhpcy50YWlsKSB7XG4gICAgd2Fsa2VyID0gdGhpcy50YWlsLnByZXZcbiAgICBhY2MgPSB0aGlzLnRhaWwudmFsdWVcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgbGlzdCB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoIC0gMTsgd2Fsa2VyICE9PSBudWxsOyBpLS0pIHtcbiAgICBhY2MgPSBmbihhY2MsIHdhbGtlci52YWx1ZSwgaSlcbiAgICB3YWxrZXIgPSB3YWxrZXIucHJldlxuICB9XG5cbiAgcmV0dXJuIGFjY1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMCwgd2Fsa2VyID0gdGhpcy5oZWFkOyB3YWxrZXIgIT09IG51bGw7IGkrKykge1xuICAgIGFycltpXSA9IHdhbGtlci52YWx1ZVxuICAgIHdhbGtlciA9IHdhbGtlci5uZXh0XG4gIH1cbiAgcmV0dXJuIGFyclxufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS50b0FycmF5UmV2ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFyciA9IG5ldyBBcnJheSh0aGlzLmxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDAsIHdhbGtlciA9IHRoaXMudGFpbDsgd2Fsa2VyICE9PSBudWxsOyBpKyspIHtcbiAgICBhcnJbaV0gPSB3YWxrZXIudmFsdWVcbiAgICB3YWxrZXIgPSB3YWxrZXIucHJldlxuICB9XG4gIHJldHVybiBhcnJcbn1cblxuWWFsbGlzdC5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgdG8gPSB0byB8fCB0aGlzLmxlbmd0aFxuICBpZiAodG8gPCAwKSB7XG4gICAgdG8gKz0gdGhpcy5sZW5ndGhcbiAgfVxuICBmcm9tID0gZnJvbSB8fCAwXG4gIGlmIChmcm9tIDwgMCkge1xuICAgIGZyb20gKz0gdGhpcy5sZW5ndGhcbiAgfVxuICB2YXIgcmV0ID0gbmV3IFlhbGxpc3QoKVxuICBpZiAodG8gPCBmcm9tIHx8IHRvIDwgMCkge1xuICAgIHJldHVybiByZXRcbiAgfVxuICBpZiAoZnJvbSA8IDApIHtcbiAgICBmcm9tID0gMFxuICB9XG4gIGlmICh0byA+IHRoaXMubGVuZ3RoKSB7XG4gICAgdG8gPSB0aGlzLmxlbmd0aFxuICB9XG4gIGZvciAodmFyIGkgPSAwLCB3YWxrZXIgPSB0aGlzLmhlYWQ7IHdhbGtlciAhPT0gbnVsbCAmJiBpIDwgZnJvbTsgaSsrKSB7XG4gICAgd2Fsa2VyID0gd2Fsa2VyLm5leHRcbiAgfVxuICBmb3IgKDsgd2Fsa2VyICE9PSBudWxsICYmIGkgPCB0bzsgaSsrLCB3YWxrZXIgPSB3YWxrZXIubmV4dCkge1xuICAgIHJldC5wdXNoKHdhbGtlci52YWx1ZSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbllhbGxpc3QucHJvdG90eXBlLnNsaWNlUmV2ZXJzZSA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICB0byA9IHRvIHx8IHRoaXMubGVuZ3RoXG4gIGlmICh0byA8IDApIHtcbiAgICB0byArPSB0aGlzLmxlbmd0aFxuICB9XG4gIGZyb20gPSBmcm9tIHx8IDBcbiAgaWYgKGZyb20gPCAwKSB7XG4gICAgZnJvbSArPSB0aGlzLmxlbmd0aFxuICB9XG4gIHZhciByZXQgPSBuZXcgWWFsbGlzdCgpXG4gIGlmICh0byA8IGZyb20gfHwgdG8gPCAwKSB7XG4gICAgcmV0dXJuIHJldFxuICB9XG4gIGlmIChmcm9tIDwgMCkge1xuICAgIGZyb20gPSAwXG4gIH1cbiAgaWYgKHRvID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0byA9IHRoaXMubGVuZ3RoXG4gIH1cbiAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoLCB3YWxrZXIgPSB0aGlzLnRhaWw7IHdhbGtlciAhPT0gbnVsbCAmJiBpID4gdG87IGktLSkge1xuICAgIHdhbGtlciA9IHdhbGtlci5wcmV2XG4gIH1cbiAgZm9yICg7IHdhbGtlciAhPT0gbnVsbCAmJiBpID4gZnJvbTsgaS0tLCB3YWxrZXIgPSB3YWxrZXIucHJldikge1xuICAgIHJldC5wdXNoKHdhbGtlci52YWx1ZSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbllhbGxpc3QucHJvdG90eXBlLnNwbGljZSA9IGZ1bmN0aW9uIChzdGFydCwgZGVsZXRlQ291bnQsIC4uLm5vZGVzKSB7XG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgc3RhcnQgPSB0aGlzLmxlbmd0aCAtIDFcbiAgfVxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSB0aGlzLmxlbmd0aCArIHN0YXJ0O1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIHdhbGtlciA9IHRoaXMuaGVhZDsgd2Fsa2VyICE9PSBudWxsICYmIGkgPCBzdGFydDsgaSsrKSB7XG4gICAgd2Fsa2VyID0gd2Fsa2VyLm5leHRcbiAgfVxuXG4gIHZhciByZXQgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgd2Fsa2VyICYmIGkgPCBkZWxldGVDb3VudDsgaSsrKSB7XG4gICAgcmV0LnB1c2god2Fsa2VyLnZhbHVlKVxuICAgIHdhbGtlciA9IHRoaXMucmVtb3ZlTm9kZSh3YWxrZXIpXG4gIH1cbiAgaWYgKHdhbGtlciA9PT0gbnVsbCkge1xuICAgIHdhbGtlciA9IHRoaXMudGFpbFxuICB9XG5cbiAgaWYgKHdhbGtlciAhPT0gdGhpcy5oZWFkICYmIHdhbGtlciAhPT0gdGhpcy50YWlsKSB7XG4gICAgd2Fsa2VyID0gd2Fsa2VyLnByZXZcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB3YWxrZXIgPSBpbnNlcnQodGhpcywgd2Fsa2VyLCBub2Rlc1tpXSlcbiAgfVxuICByZXR1cm4gcmV0O1xufVxuXG5ZYWxsaXN0LnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCA9IHRoaXMuaGVhZFxuICB2YXIgdGFpbCA9IHRoaXMudGFpbFxuICBmb3IgKHZhciB3YWxrZXIgPSBoZWFkOyB3YWxrZXIgIT09IG51bGw7IHdhbGtlciA9IHdhbGtlci5wcmV2KSB7XG4gICAgdmFyIHAgPSB3YWxrZXIucHJldlxuICAgIHdhbGtlci5wcmV2ID0gd2Fsa2VyLm5leHRcbiAgICB3YWxrZXIubmV4dCA9IHBcbiAgfVxuICB0aGlzLmhlYWQgPSB0YWlsXG4gIHRoaXMudGFpbCA9IGhlYWRcbiAgcmV0dXJuIHRoaXNcbn1cblxuZnVuY3Rpb24gaW5zZXJ0IChzZWxmLCBub2RlLCB2YWx1ZSkge1xuICB2YXIgaW5zZXJ0ZWQgPSBub2RlID09PSBzZWxmLmhlYWQgP1xuICAgIG5ldyBOb2RlKHZhbHVlLCBudWxsLCBub2RlLCBzZWxmKSA6XG4gICAgbmV3IE5vZGUodmFsdWUsIG5vZGUsIG5vZGUubmV4dCwgc2VsZilcblxuICBpZiAoaW5zZXJ0ZWQubmV4dCA9PT0gbnVsbCkge1xuICAgIHNlbGYudGFpbCA9IGluc2VydGVkXG4gIH1cbiAgaWYgKGluc2VydGVkLnByZXYgPT09IG51bGwpIHtcbiAgICBzZWxmLmhlYWQgPSBpbnNlcnRlZFxuICB9XG5cbiAgc2VsZi5sZW5ndGgrK1xuXG4gIHJldHVybiBpbnNlcnRlZFxufVxuXG5mdW5jdGlvbiBwdXNoIChzZWxmLCBpdGVtKSB7XG4gIHNlbGYudGFpbCA9IG5ldyBOb2RlKGl0ZW0sIHNlbGYudGFpbCwgbnVsbCwgc2VsZilcbiAgaWYgKCFzZWxmLmhlYWQpIHtcbiAgICBzZWxmLmhlYWQgPSBzZWxmLnRhaWxcbiAgfVxuICBzZWxmLmxlbmd0aCsrXG59XG5cbmZ1bmN0aW9uIHVuc2hpZnQgKHNlbGYsIGl0ZW0pIHtcbiAgc2VsZi5oZWFkID0gbmV3IE5vZGUoaXRlbSwgbnVsbCwgc2VsZi5oZWFkLCBzZWxmKVxuICBpZiAoIXNlbGYudGFpbCkge1xuICAgIHNlbGYudGFpbCA9IHNlbGYuaGVhZFxuICB9XG4gIHNlbGYubGVuZ3RoKytcbn1cblxuZnVuY3Rpb24gTm9kZSAodmFsdWUsIHByZXYsIG5leHQsIGxpc3QpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE5vZGUpKSB7XG4gICAgcmV0dXJuIG5ldyBOb2RlKHZhbHVlLCBwcmV2LCBuZXh0LCBsaXN0KVxuICB9XG5cbiAgdGhpcy5saXN0ID0gbGlzdFxuICB0aGlzLnZhbHVlID0gdmFsdWVcblxuICBpZiAocHJldikge1xuICAgIHByZXYubmV4dCA9IHRoaXNcbiAgICB0aGlzLnByZXYgPSBwcmV2XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5wcmV2ID0gbnVsbFxuICB9XG5cbiAgaWYgKG5leHQpIHtcbiAgICBuZXh0LnByZXYgPSB0aGlzXG4gICAgdGhpcy5uZXh0ID0gbmV4dFxuICB9IGVsc2Uge1xuICAgIHRoaXMubmV4dCA9IG51bGxcbiAgfVxufVxuXG50cnkge1xuICAvLyBhZGQgaWYgc3VwcG9ydCBmb3IgU3ltYm9sLml0ZXJhdG9yIGlzIHByZXNlbnRcbiAgcmVxdWlyZSgnLi9pdGVyYXRvci5qcycpKFlhbGxpc3QpXG59IGNhdGNoIChlcikge31cbiJdLCJzb3VyY2VSb290IjoiIn0=