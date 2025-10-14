"use strict";
(self["webpackChunkcontribuyentes"] = self["webpackChunkcontribuyentes"] || []).push([["contribuyentes"],{

/***/ "./resources/js/ajax.js":
/*!******************************!*\
  !*** ./resources/js/ajax.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ajax": () => (/* binding */ ajax),
/* harmony export */   "del": () => (/* binding */ del),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "post": () => (/* binding */ post)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_24__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



























var ajax = function ajax(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var domElement = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  method = method.toLowerCase();
  var options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  };
  var csrfMethods = new Set(['post', 'put', 'delete', 'patch']);

  if (csrfMethods.has(method)) {
    if (method !== 'post') {
      options.method = 'post';
      data = _objectSpread(_objectSpread({}, data), {}, {
        _METHOD: method.toUpperCase()
      });
    }

    options.body = JSON.stringify(_objectSpread(_objectSpread({}, data), getCsrfFields()));
  } else if (method === 'get') {
    url += '?' + new URLSearchParams(data).toString();
  }

  return fetch(url, options).then(function (response) {
    if (domElement) {
      clearValidationErrors(domElement);
    }

    if (!response.ok) {
      if (response.status === 422) {
        response.json().then(function (errors) {
          handleValidationErrors(errors, domElement);
        });
      }
    }

    return response;
  });
};

var get = function get(url, data) {
  return ajax(url, 'get', data);
};

var post = function post(url, data, domElement) {
  return ajax(url, 'post', data, domElement);
};

var del = function del(url, data) {
  return ajax(url, 'delete', data);
};

function handleValidationErrors(errors, domElement) {
  for (var name in errors) {
    var element = domElement.querySelector("input[name=\"".concat(name, "\"]"));
    element.classList.add('is-invalid');

    var _iterator = _createForOfIteratorHelper(errors[name]),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var error = _step.value;
        var errorDiv = document.createElement('div');
        errorDiv.classList.add('invalid-feedback');
        errorDiv.textContent = error;
        element.parentNode.append(errorDiv);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
}

function clearValidationErrors(domElement) {
  domElement.querySelectorAll('.is-invalid').forEach(function (element) {
    element.classList.remove('is-invalid');
    element.parentNode.querySelectorAll('.invalid-feedback').forEach(function (e) {
      e.remove();
    });
  });
}

function getCsrfFields() {
  var _ref;

  var csrfNameField = document.querySelector('#csrfName');
  var csrfValueField = document.querySelector('#csrfValue');
  var csrfNameKey = csrfNameField.getAttribute('name');
  var csrfName = csrfNameField.content;
  var csrfValueKey = csrfValueField.getAttribute('name');
  var csrfValue = csrfValueField.content;
  return _ref = {}, _defineProperty(_ref, csrfNameKey, csrfName), _defineProperty(_ref, csrfValueKey, csrfValue), _ref;
}



/***/ }),

/***/ "./resources/js/contribuyentes.js":
/*!****************************************!*\
  !*** ./resources/js/contribuyentes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _ajax__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ajax */ "./resources/js/ajax.js");
/* harmony import */ var datatables_net__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.mjs");












var _excluded = ["id"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









window.addEventListener('DOMContentLoaded', function () {
  var newContribuyenteModal = new bootstrap__WEBPACK_IMPORTED_MODULE_17__.Modal(document.getElementById('newContribuyenteModal'));
  var editContribuyenteModal = new bootstrap__WEBPACK_IMPORTED_MODULE_17__.Modal(document.getElementById('editContribuyenteModal'));
  var table = new datatables_net__WEBPACK_IMPORTED_MODULE_19__["default"]('#contribuyentesTable', {
    language: {
      url: '//cdn.datatables.net/plug-ins/2.3.4/i18n/es-ES.json'
    },
    serverSide: true,
    ajax: '/contribuyentes/load',
    orderMulti: false,
    columns: [{
      data: "identificador"
    }, {
      data: "nombres"
    }, {
      data: "apellidos"
    }, {
      data: "rfc"
    }, {
      data: "curp"
    }, {
      data: "telefono"
    }, {
      data: "email"
    }, {
      data: "regimenFiscal"
    }, {
      data: "tipoDeclaracion"
    }, {
      data: "impuestoObligacion"
    }, {
      sortable: false,
      data: function data(row) {
        return "\n                    <div class=\"d-flex flex-\">\n                        <button type=\"submit\" class=\"btn btn-outline-primary delete-contribuyente-btn\" data-id=\"".concat(row.id, "\">\n                            <i class=\"bi bi-trash3-fill\"></i>\n                        </button>\n                        <button class=\"ms-2 btn btn-outline-primary edit-contribuyente-btn\" data-id=\"").concat(row.id, "\">\n                            <i class=\"bi bi-pencil-fill\"></i>\n                        </button>\n                    </div>\n                ");
      }
    }]
  });
  document.querySelector('#contribuyentesTable').addEventListener('click', function (event) {
    var editBtn = event.target.closest('.edit-contribuyente-btn');
    var deleteBtn = event.target.closest('.delete-contribuyente-btn');

    if (editBtn) {
      var contribuyenteId = editBtn.getAttribute('data-id');
      (0,_ajax__WEBPACK_IMPORTED_MODULE_18__.get)("/contribuyentes/".concat(contribuyenteId)).then(function (response) {
        return response.json();
      }).then(function (response) {
        return openEditContribuyenteModal(editContribuyenteModal, response);
      });
    } else {
      var _contribuyenteId = deleteBtn.getAttribute('data-id');

      if (confirm('¿Esta seguro de eliminar este contribuyente?')) {
        (0,_ajax__WEBPACK_IMPORTED_MODULE_18__.del)("/contribuyentes/".concat(_contribuyenteId)).then(function (response) {
          if (response.ok) {
            table.draw();
          }
        });
      }
    }
  });
  document.querySelector('.create-contribuyente-btn').addEventListener('click', function (event) {
    (0,_ajax__WEBPACK_IMPORTED_MODULE_18__.post)("/contribuyentes", getContribuyenteFormData(newContribuyenteModal), newContribuyenteModal._element).then(function (response) {
      if (response.ok) {
        table.draw();
        newContribuyenteModal.hide();
      }
    });
  });
  document.querySelector('.save-contribuyente-btn').addEventListener('click', function (event) {
    var contribuyenteId = event.currentTarget.getAttribute('data-id');
    (0,_ajax__WEBPACK_IMPORTED_MODULE_18__.post)("/contribuyentes/".concat(contribuyenteId), getContribuyenteFormData(editContribuyenteModal), editContribuyenteModal._element).then(function (response) {
      if (response.ok) {
        table.draw();
        editContribuyenteModal.hide();
      }
    });
  });
});

function getContribuyenteFormData(modal) {
  var data = {};
  var fields = [].concat(_toConsumableArray(modal._element.getElementsByTagName('input')), _toConsumableArray(modal._element.getElementsByTagName('select')));
  fields.forEach(function (select) {
    data[select.name] = select.value;
  });
  return data;
}

function openEditContribuyenteModal(modal, _ref) {
  var id = _ref.id,
      data = _objectWithoutProperties(_ref, _excluded);

  for (var name in data) {
    var nameInput = modal._element.querySelector("[name=\"".concat(name, "\"]"));

    nameInput.value = data[name];
  }

  modal._element.querySelector('.save-contribuyente-btn').setAttribute('data-id', id);

  modal.show();
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-f05cc0"], () => (__webpack_exec__("./resources/js/contribuyentes.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLEdBQU8sRUFBZjtFQUNBLElBQU1pRixNQUFNLGdDQUNMRCxLQUFLLENBQUNILFFBQU4sQ0FBZUssb0JBQWYsQ0FBb0MsT0FBcEMsQ0FESyxzQkFFTEYsS0FBSyxDQUFDSCxRQUFOLENBQWVLLG9CQUFmLENBQW9DLFFBQXBDLENBRkssRUFBWjtFQUtBRCxNQUFNLENBQUN4QyxPQUFQLENBQWUsVUFBQTBDLE1BQU0sRUFBSTtJQUNyQm5GLElBQUksQ0FBQ21GLE1BQU0sQ0FBQ3ZELElBQVIsQ0FBSixHQUFvQnVELE1BQU0sQ0FBQ0MsS0FBM0I7RUFDSCxDQUZEO0VBSUEsT0FBT3BGLElBQVA7QUFDSDs7QUFFRCxTQUFTeUUsMEJBQVQsQ0FBb0NPLEtBQXBDLFFBQTBEO0VBQUEsSUFBZGQsRUFBYyxRQUFkQSxFQUFjO0VBQUEsSUFBUGxFLElBQU87O0VBQ3RELEtBQUssSUFBSTRCLElBQVQsSUFBaUI1QixJQUFqQixFQUF1QjtJQUVuQixJQUFNcUYsU0FBUyxHQUFHTCxLQUFLLENBQUNILFFBQU4sQ0FBZS9DLGFBQWYsbUJBQXdDRixJQUF4QyxTQUFsQjs7SUFFQXlELFNBQVMsQ0FBQ0QsS0FBVixHQUFrQnBGLElBQUksQ0FBQzRCLElBQUQsQ0FBdEI7RUFDSDs7RUFFRG9ELEtBQUssQ0FBQ0gsUUFBTixDQUFlL0MsYUFBZixDQUE2Qix5QkFBN0IsRUFBd0R3RCxZQUF4RCxDQUFxRSxTQUFyRSxFQUFnRnBCLEVBQWhGOztFQUVBYyxLQUFLLENBQUNPLElBQU47QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRyaWJ1eWVudGVzLy4vcmVzb3VyY2VzL2pzL2FqYXguanMiLCJ3ZWJwYWNrOi8vY29udHJpYnV5ZW50ZXMvLi9yZXNvdXJjZXMvanMvY29udHJpYnV5ZW50ZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWpheCA9ICh1cmwsIG1ldGhvZCA9ICdnZXQnLCBkYXRhID0ge30sIGRvbUVsZW1lbnQgPSBudWxsKSA9PiB7XG4gICAgbWV0aG9kID0gbWV0aG9kLnRvTG93ZXJDYXNlKClcblxuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNzcmZNZXRob2RzID0gbmV3IFNldChbJ3Bvc3QnLCAncHV0JywgJ2RlbGV0ZScsICdwYXRjaCddKVxuXG4gICAgaWYgKGNzcmZNZXRob2RzLmhhcyhtZXRob2QpKSB7XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwb3N0Jykge1xuICAgICAgICAgICAgb3B0aW9ucy5tZXRob2QgPSAncG9zdCdcblxuICAgICAgICAgICAgZGF0YSA9IHsuLi5kYXRhLCBfTUVUSE9EOiBtZXRob2QudG9VcHBlckNhc2UoKX1cbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHsuLi5kYXRhLCAuLi5nZXRDc3JmRmllbGRzKCl9KVxuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnZ2V0Jykge1xuICAgICAgICB1cmwgKz0gJz8nICsgKG5ldyBVUkxTZWFyY2hQYXJhbXMoZGF0YSkpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChkb21FbGVtZW50KSB7XG4gICAgICAgICAgICBjbGVhclZhbGlkYXRpb25FcnJvcnMoZG9tRWxlbWVudClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghIHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihlcnJvcnMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVWYWxpZGF0aW9uRXJyb3JzKGVycm9ycywgZG9tRWxlbWVudClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfSlcbn1cblxuY29uc3QgZ2V0ICA9ICh1cmwsIGRhdGEpID0+IGFqYXgodXJsLCAnZ2V0JywgZGF0YSlcbmNvbnN0IHBvc3QgPSAodXJsLCBkYXRhLCBkb21FbGVtZW50KSA9PiBhamF4KHVybCwgJ3Bvc3QnLCBkYXRhLCBkb21FbGVtZW50KVxuY29uc3QgZGVsID0gKHVybCwgZGF0YSkgPT4gYWpheCh1cmwsICdkZWxldGUnLCBkYXRhKVxuXG5mdW5jdGlvbiBoYW5kbGVWYWxpZGF0aW9uRXJyb3JzKGVycm9ycywgZG9tRWxlbWVudCkge1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBlcnJvcnMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cIiR7IG5hbWUgfVwiXWApXG5cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJylcblxuICAgICAgICBmb3IgKGNvbnN0IGVycm9yIG9mIGVycm9yc1tuYW1lXSkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgICAgICBlcnJvckRpdi5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWZlZWRiYWNrJylcbiAgICAgICAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gZXJyb3JcblxuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZChlcnJvckRpdilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJWYWxpZGF0aW9uRXJyb3JzKGRvbUVsZW1lbnQpIHtcbiAgICBkb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pcy1pbnZhbGlkJykuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52YWxpZCcpXG5cbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnZhbGlkLWZlZWRiYWNrJykuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnJlbW92ZSgpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0Q3NyZkZpZWxkcygpIHtcbiAgICBjb25zdCBjc3JmTmFtZUZpZWxkICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjc3JmTmFtZScpXG4gICAgY29uc3QgY3NyZlZhbHVlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3NyZlZhbHVlJylcbiAgICBjb25zdCBjc3JmTmFtZUtleSAgICA9IGNzcmZOYW1lRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgICBjb25zdCBjc3JmTmFtZSAgICAgICA9IGNzcmZOYW1lRmllbGQuY29udGVudFxuICAgIGNvbnN0IGNzcmZWYWx1ZUtleSAgID0gY3NyZlZhbHVlRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgICBjb25zdCBjc3JmVmFsdWUgICAgICA9IGNzcmZWYWx1ZUZpZWxkLmNvbnRlbnRcblxuICAgIHJldHVybiB7XG4gICAgICAgIFtjc3JmTmFtZUtleV06IGNzcmZOYW1lLFxuICAgICAgICBbY3NyZlZhbHVlS2V5XTogY3NyZlZhbHVlXG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGFqYXgsXG4gICAgZ2V0LFxuICAgIHBvc3QsXG4gICAgZGVsXG59IiwiXG5pbXBvcnQgeyBNb2RhbCB9ICAgICAgICAgIGZyb20gXCJib290c3RyYXBcIlxuaW1wb3J0IHsgZ2V0LCBwb3N0LCBkZWwgfSBmcm9tIFwiLi9hamF4XCJcbmltcG9ydCBEYXRhVGFibGUgICAgICAgICAgZnJvbSBcImRhdGF0YWJsZXMubmV0XCJcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbmV3Q29udHJpYnV5ZW50ZU1vZGFsICA9IG5ldyBNb2RhbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3Q29udHJpYnV5ZW50ZU1vZGFsJykpXG4gICAgY29uc3QgZWRpdENvbnRyaWJ1eWVudGVNb2RhbCA9IG5ldyBNb2RhbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdENvbnRyaWJ1eWVudGVNb2RhbCcpKVxuXG4gICAgY29uc3QgdGFibGUgPSBuZXcgRGF0YVRhYmxlKCcjY29udHJpYnV5ZW50ZXNUYWJsZScsIHtcbiAgICAgICAgbGFuZ3VhZ2U6IHtcbiAgICAgICAgdXJsOiAnLy9jZG4uZGF0YXRhYmxlcy5uZXQvcGx1Zy1pbnMvMi4zLjQvaTE4bi9lcy1FUy5qc29uJyxcbiAgICAgICB9LFxuICAgICAgICBzZXJ2ZXJTaWRlOiB0cnVlLFxuICAgICAgICBhamF4OiAnL2NvbnRyaWJ1eWVudGVzL2xvYWQnLFxuICAgICAgICBvcmRlck11bHRpOiBmYWxzZSxcbiAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAge2RhdGE6IFwiaWRlbnRpZmljYWRvclwifSxcbiAgICAgICAgICAgIHtkYXRhOiBcIm5vbWJyZXNcIn0sXG4gICAgICAgICAgICB7ZGF0YTogXCJhcGVsbGlkb3NcIn0sXG4gICAgICAgICAgICB7ZGF0YTogXCJyZmNcIn0sXG4gICAgICAgICAgICB7ZGF0YTogXCJjdXJwXCJ9LFxuICAgICAgICAgICAge2RhdGE6IFwidGVsZWZvbm9cIn0sXG4gICAgICAgICAgICB7ZGF0YTogXCJlbWFpbFwifSxcbiAgICAgICAgICAgIHtkYXRhOiBcInJlZ2ltZW5GaXNjYWxcIn0sXG4gICAgICAgICAgICB7ZGF0YTogXCJ0aXBvRGVjbGFyYWNpb25cIn0sXG4gICAgICAgICAgICB7ZGF0YTogXCJpbXB1ZXN0b09ibGlnYWNpb25cIn0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRhdGE6IHJvdyA9PiBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgZGVsZXRlLWNvbnRyaWJ1eWVudGUtYnRuXCIgZGF0YS1pZD1cIiR7IHJvdy5pZCB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS10cmFzaDMtZmlsbFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1zLTIgYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgZWRpdC1jb250cmlidXllbnRlLWJ0blwiIGRhdGEtaWQ9XCIkeyByb3cuaWQgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktcGVuY2lsLWZpbGxcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udHJpYnV5ZW50ZXNUYWJsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGVkaXRCdG4gICA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZWRpdC1jb250cmlidXllbnRlLWJ0bicpXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZGVsZXRlLWNvbnRyaWJ1eWVudGUtYnRuJylcblxuICAgICAgICBpZiAoZWRpdEJ0bikge1xuICAgICAgICAgICAgY29uc3QgY29udHJpYnV5ZW50ZUlkID0gZWRpdEJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxuXG4gICAgICAgICAgICBnZXQoYC9jb250cmlidXllbnRlcy8keyBjb250cmlidXllbnRlSWQgfWApXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IG9wZW5FZGl0Q29udHJpYnV5ZW50ZU1vZGFsKGVkaXRDb250cmlidXllbnRlTW9kYWwsIHJlc3BvbnNlKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyaWJ1eWVudGVJZCA9IGRlbGV0ZUJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxuXG4gICAgICAgICAgICBpZiAoY29uZmlybSgnwr9Fc3RhIHNlZ3VybyBkZSBlbGltaW5hciBlc3RlIGNvbnRyaWJ1eWVudGU/JykpIHtcbiAgICAgICAgICAgICAgICBkZWwoYC9jb250cmlidXllbnRlcy8keyBjb250cmlidXllbnRlSWQgfWApLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmRyYXcoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLWNvbnRyaWJ1eWVudGUtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcG9zdChgL2NvbnRyaWJ1eWVudGVzYCwgZ2V0Q29udHJpYnV5ZW50ZUZvcm1EYXRhKG5ld0NvbnRyaWJ1eWVudGVNb2RhbCksIG5ld0NvbnRyaWJ1eWVudGVNb2RhbC5fZWxlbWVudClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuZHJhdygpXG5cbiAgICAgICAgICAgICAgICAgICAgbmV3Q29udHJpYnV5ZW50ZU1vZGFsLmhpZGUoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLWNvbnRyaWJ1eWVudGUtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgY29udHJpYnV5ZW50ZUlkID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxuXG4gICAgICAgIHBvc3QoYC9jb250cmlidXllbnRlcy8keyBjb250cmlidXllbnRlSWQgfWAsIGdldENvbnRyaWJ1eWVudGVGb3JtRGF0YShlZGl0Q29udHJpYnV5ZW50ZU1vZGFsKSwgZWRpdENvbnRyaWJ1eWVudGVNb2RhbC5fZWxlbWVudClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuZHJhdygpXG4gICAgICAgICAgICAgICAgICAgIGVkaXRDb250cmlidXllbnRlTW9kYWwuaGlkZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Q29udHJpYnV5ZW50ZUZvcm1EYXRhKG1vZGFsKSB7XG4gICAgbGV0IGRhdGEgICAgID0ge31cbiAgICBjb25zdCBmaWVsZHMgPSBbXG4gICAgICAgIC4uLm1vZGFsLl9lbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpLFxuICAgICAgICAuLi5tb2RhbC5fZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2VsZWN0JylcbiAgICBdXG5cbiAgICBmaWVsZHMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICBkYXRhW3NlbGVjdC5uYW1lXSA9IHNlbGVjdC52YWx1ZVxuICAgIH0pXG5cbiAgICByZXR1cm4gZGF0YVxufVxuXG5mdW5jdGlvbiBvcGVuRWRpdENvbnRyaWJ1eWVudGVNb2RhbChtb2RhbCwge2lkLCAuLi5kYXRhfSkge1xuICAgIGZvciAobGV0IG5hbWUgaW4gZGF0YSkge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gbW9kYWwuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihgW25hbWU9XCIkeyBuYW1lIH1cIl1gKVxuXG4gICAgICAgIG5hbWVJbnB1dC52YWx1ZSA9IGRhdGFbbmFtZV1cbiAgICB9XG5cbiAgICBtb2RhbC5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS1jb250cmlidXllbnRlLWJ0bicpLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKVxuXG4gICAgbW9kYWwuc2hvdygpXG59Il0sIm5hbWVzIjpbImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiZG9tRWxlbWVudCIsInRvTG93ZXJDYXNlIiwib3B0aW9ucyIsImhlYWRlcnMiLCJjc3JmTWV0aG9kcyIsIlNldCIsImhhcyIsIl9NRVRIT0QiLCJ0b1VwcGVyQ2FzZSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0Q3NyZkZpZWxkcyIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjbGVhclZhbGlkYXRpb25FcnJvcnMiLCJvayIsInN0YXR1cyIsImpzb24iLCJlcnJvcnMiLCJoYW5kbGVWYWxpZGF0aW9uRXJyb3JzIiwiZ2V0IiwicG9zdCIsImRlbCIsIm5hbWUiLCJlbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsImFkZCIsImVycm9yIiwiZXJyb3JEaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsInBhcmVudE5vZGUiLCJhcHBlbmQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJlbW92ZSIsImUiLCJjc3JmTmFtZUZpZWxkIiwiY3NyZlZhbHVlRmllbGQiLCJjc3JmTmFtZUtleSIsImdldEF0dHJpYnV0ZSIsImNzcmZOYW1lIiwiY29udGVudCIsImNzcmZWYWx1ZUtleSIsImNzcmZWYWx1ZSIsIk1vZGFsIiwiRGF0YVRhYmxlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5ld0NvbnRyaWJ1eWVudGVNb2RhbCIsImdldEVsZW1lbnRCeUlkIiwiZWRpdENvbnRyaWJ1eWVudGVNb2RhbCIsInRhYmxlIiwibGFuZ3VhZ2UiLCJzZXJ2ZXJTaWRlIiwib3JkZXJNdWx0aSIsImNvbHVtbnMiLCJzb3J0YWJsZSIsInJvdyIsImlkIiwiZXZlbnQiLCJlZGl0QnRuIiwidGFyZ2V0IiwiY2xvc2VzdCIsImRlbGV0ZUJ0biIsImNvbnRyaWJ1eWVudGVJZCIsIm9wZW5FZGl0Q29udHJpYnV5ZW50ZU1vZGFsIiwiY29uZmlybSIsImRyYXciLCJnZXRDb250cmlidXllbnRlRm9ybURhdGEiLCJfZWxlbWVudCIsImhpZGUiLCJjdXJyZW50VGFyZ2V0IiwibW9kYWwiLCJmaWVsZHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNlbGVjdCIsInZhbHVlIiwibmFtZUlucHV0Iiwic2V0QXR0cmlidXRlIiwic2hvdyJdLCJzb3VyY2VSb290IjoiIn0=