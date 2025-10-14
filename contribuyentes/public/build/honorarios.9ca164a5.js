"use strict";
(self["webpackChunkcontribuyentes"] = self["webpackChunkcontribuyentes"] || []).push([["honorarios"],{

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

/***/ "./resources/js/honorarios.js":
/*!************************************!*\
  !*** ./resources/js/honorarios.js ***!
  \************************************/
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
  var newHonorarioModal = new bootstrap__WEBPACK_IMPORTED_MODULE_17__.Modal(document.getElementById('newHonorarioModal'));
  var editHonorarioModal = new bootstrap__WEBPACK_IMPORTED_MODULE_17__.Modal(document.getElementById('editHonorarioModal'));
  var table = new datatables_net__WEBPACK_IMPORTED_MODULE_19__["default"]('#honorariosTable', {
    language: {
      url: '//cdn.datatables.net/plug-ins/2.3.4/i18n/es-ES.json'
    },
    serverSide: true,
    ajax: '/honorarios/load',
    orderMulti: false,
    columns: [{
      data: "contribuyente"
    }, {
      data: "fecha"
    }, {
      data: function data(row) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          currencySign: 'accounting'
        }).format(row.honorario);
      }
    }, {
      data: function data(row) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          currencySign: 'accounting'
        }).format(row.impuesto);
      }
    }, {
      data: function data(row) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          currencySign: 'accounting'
        }).format(row.transferencia);
      }
    }, {
      data: function data(row) {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          currencySign: 'accounting'
        }).format(row.total);
      }
    }, {
      data: "concepto"
    }, {
      data: "observaciones"
    }, {
      sortable: false,
      data: function data(row) {
        return "\n                    <div class=\"d-flex flex-\">\n                        <button type=\"submit\" class=\"btn btn-outline-primary delete-honorario-btn\" data-id=\"".concat(row.id, "\">\n                            <i class=\"bi bi-trash3-fill\"></i>\n                        </button>\n                        <button class=\"ms-2 btn btn-outline-primary edit-honorario-btn\" data-id=\"").concat(row.id, "\">\n                            <i class=\"bi bi-pencil-fill\"></i>\n                        </button>\n                    </div>\n                ");
      }
    }]
  });
  document.querySelector('#honorariosTable').addEventListener('click', function (event) {
    var editBtn = event.target.closest('.edit-honorario-btn');
    var deleteBtn = event.target.closest('.delete-honorario-btn');

    if (editBtn) {
      var honorarioId = editBtn.getAttribute('data-id');
      (0,_ajax__WEBPACK_IMPORTED_MODULE_18__.get)("/honorarios/".concat(honorarioId)).then(function (response) {
        return response.json();
      }).then(function (response) {
        return openEditHonorarioModal(editHonorarioModal, response);
      });
    } else {
      var _honorarioId = deleteBtn.getAttribute('data-id');

      if (confirm('¿Esta seguro de eliminar este honorario?')) {
        (0,_ajax__WEBPACK_IMPORTED_MODULE_18__.del)("/honorarios/".concat(_honorarioId)).then(function (response) {
          if (response.ok) {
            table.draw();
          }
        });
      }
    }
  });
  document.querySelector('.create-honorario-btn').addEventListener('click', function (event) {
    (0,_ajax__WEBPACK_IMPORTED_MODULE_18__.post)("/honorarios", getHonorarioFormData(newHonorarioModal), newHonorarioModal._element).then(function (response) {
      if (response.ok) {
        table.draw();
        newHonorarioModal.hide();
      }
    });
  });
  document.querySelector('.save-honorario-btn').addEventListener('click', function (event) {
    var honorarioId = event.currentTarget.getAttribute('data-id');
    (0,_ajax__WEBPACK_IMPORTED_MODULE_18__.post)("/honorarios/".concat(honorarioId), getHonorarioFormData(editHonorarioModal), editHonorarioModal._element).then(function (response) {
      if (response.ok) {
        table.draw();
        editHonorarioModal.hide();
      }
    });
  });
});

function getHonorarioFormData(modal) {
  var data = {};
  var fields = [].concat(_toConsumableArray(modal._element.getElementsByTagName('input')), _toConsumableArray(modal._element.getElementsByTagName('select')));
  fields.forEach(function (select) {
    data[select.name] = select.value;
  });
  return data;
}

function openEditHonorarioModal(modal, _ref) {
  var id = _ref.id,
      data = _objectWithoutProperties(_ref, _excluded);

  for (var name in data) {
    var nameInput = modal._element.querySelector("[name=\"".concat(name, "\"]"));

    nameInput.value = data[name];
  }

  modal._element.querySelector('.save-honorario-btn').setAttribute('data-id', id);

  modal.show();
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js","vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-f05cc0"], () => (__webpack_exec__("./resources/js/honorarios.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU85RixJQUFQO0FBQ0g7O0FBRUQsU0FBU21GLHNCQUFULENBQWdDTyxLQUFoQyxRQUFzRDtFQUFBLElBQWRkLEVBQWMsUUFBZEEsRUFBYztFQUFBLElBQVA1RSxJQUFPOztFQUNsRCxLQUFLLElBQUk0QixJQUFULElBQWlCNUIsSUFBakIsRUFBdUI7SUFDbkIsSUFBTStGLFNBQVMsR0FBR0wsS0FBSyxDQUFDSCxRQUFOLENBQWV6RCxhQUFmLG1CQUF3Q0YsSUFBeEMsU0FBbEI7O0lBRUFtRSxTQUFTLENBQUNELEtBQVYsR0FBa0I5RixJQUFJLENBQUM0QixJQUFELENBQXRCO0VBQ0g7O0VBRUQ4RCxLQUFLLENBQUNILFFBQU4sQ0FBZXpELGFBQWYsQ0FBNkIscUJBQTdCLEVBQW9Ea0UsWUFBcEQsQ0FBaUUsU0FBakUsRUFBNEVwQixFQUE1RTs7RUFFQWMsS0FBSyxDQUFDTyxJQUFOO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250cmlidXllbnRlcy8uL3Jlc291cmNlcy9qcy9hamF4LmpzIiwid2VicGFjazovL2NvbnRyaWJ1eWVudGVzLy4vcmVzb3VyY2VzL2pzL2hvbm9yYXJpb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWpheCA9ICh1cmwsIG1ldGhvZCA9ICdnZXQnLCBkYXRhID0ge30sIGRvbUVsZW1lbnQgPSBudWxsKSA9PiB7XG4gICAgbWV0aG9kID0gbWV0aG9kLnRvTG93ZXJDYXNlKClcblxuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICBtZXRob2QsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNzcmZNZXRob2RzID0gbmV3IFNldChbJ3Bvc3QnLCAncHV0JywgJ2RlbGV0ZScsICdwYXRjaCddKVxuXG4gICAgaWYgKGNzcmZNZXRob2RzLmhhcyhtZXRob2QpKSB7XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwb3N0Jykge1xuICAgICAgICAgICAgb3B0aW9ucy5tZXRob2QgPSAncG9zdCdcblxuICAgICAgICAgICAgZGF0YSA9IHsuLi5kYXRhLCBfTUVUSE9EOiBtZXRob2QudG9VcHBlckNhc2UoKX1cbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHsuLi5kYXRhLCAuLi5nZXRDc3JmRmllbGRzKCl9KVxuICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnZ2V0Jykge1xuICAgICAgICB1cmwgKz0gJz8nICsgKG5ldyBVUkxTZWFyY2hQYXJhbXMoZGF0YSkpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoKHVybCwgb3B0aW9ucykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChkb21FbGVtZW50KSB7XG4gICAgICAgICAgICBjbGVhclZhbGlkYXRpb25FcnJvcnMoZG9tRWxlbWVudClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghIHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihlcnJvcnMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVWYWxpZGF0aW9uRXJyb3JzKGVycm9ycywgZG9tRWxlbWVudClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgfSlcbn1cblxuY29uc3QgZ2V0ICA9ICh1cmwsIGRhdGEpID0+IGFqYXgodXJsLCAnZ2V0JywgZGF0YSlcbmNvbnN0IHBvc3QgPSAodXJsLCBkYXRhLCBkb21FbGVtZW50KSA9PiBhamF4KHVybCwgJ3Bvc3QnLCBkYXRhLCBkb21FbGVtZW50KVxuY29uc3QgZGVsID0gKHVybCwgZGF0YSkgPT4gYWpheCh1cmwsICdkZWxldGUnLCBkYXRhKVxuXG5mdW5jdGlvbiBoYW5kbGVWYWxpZGF0aW9uRXJyb3JzKGVycm9ycywgZG9tRWxlbWVudCkge1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBlcnJvcnMpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvbUVsZW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT1cIiR7IG5hbWUgfVwiXWApXG5cbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJylcblxuICAgICAgICBmb3IgKGNvbnN0IGVycm9yIG9mIGVycm9yc1tuYW1lXSkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgICAgICBlcnJvckRpdi5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkLWZlZWRiYWNrJylcbiAgICAgICAgICAgIGVycm9yRGl2LnRleHRDb250ZW50ID0gZXJyb3JcblxuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZChlcnJvckRpdilcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJWYWxpZGF0aW9uRXJyb3JzKGRvbUVsZW1lbnQpIHtcbiAgICBkb21FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pcy1pbnZhbGlkJykuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtaW52YWxpZCcpXG5cbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnZhbGlkLWZlZWRiYWNrJykuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnJlbW92ZSgpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0Q3NyZkZpZWxkcygpIHtcbiAgICBjb25zdCBjc3JmTmFtZUZpZWxkICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjc3JmTmFtZScpXG4gICAgY29uc3QgY3NyZlZhbHVlRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3NyZlZhbHVlJylcbiAgICBjb25zdCBjc3JmTmFtZUtleSAgICA9IGNzcmZOYW1lRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgICBjb25zdCBjc3JmTmFtZSAgICAgICA9IGNzcmZOYW1lRmllbGQuY29udGVudFxuICAgIGNvbnN0IGNzcmZWYWx1ZUtleSAgID0gY3NyZlZhbHVlRmllbGQuZ2V0QXR0cmlidXRlKCduYW1lJylcbiAgICBjb25zdCBjc3JmVmFsdWUgICAgICA9IGNzcmZWYWx1ZUZpZWxkLmNvbnRlbnRcblxuICAgIHJldHVybiB7XG4gICAgICAgIFtjc3JmTmFtZUtleV06IGNzcmZOYW1lLFxuICAgICAgICBbY3NyZlZhbHVlS2V5XTogY3NyZlZhbHVlXG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGFqYXgsXG4gICAgZ2V0LFxuICAgIHBvc3QsXG4gICAgZGVsXG59IiwiaW1wb3J0IHsgTW9kYWwgfSAgICAgICAgICBmcm9tIFwiYm9vdHN0cmFwXCJcbmltcG9ydCB7IGdldCwgcG9zdCwgZGVsIH0gZnJvbSBcIi4vYWpheFwiXG5pbXBvcnQgRGF0YVRhYmxlICAgICAgICAgIGZyb20gXCJkYXRhdGFibGVzLm5ldFwiXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG5ld0hvbm9yYXJpb01vZGFsICA9IG5ldyBNb2RhbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3SG9ub3JhcmlvTW9kYWwnKSlcbiAgICBjb25zdCBlZGl0SG9ub3JhcmlvTW9kYWwgPSBuZXcgTW9kYWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRIb25vcmFyaW9Nb2RhbCcpKVxuXG4gICAgY29uc3QgdGFibGUgPSBuZXcgRGF0YVRhYmxlKCcjaG9ub3Jhcmlvc1RhYmxlJywge1xuICAgICAgICBsYW5ndWFnZToge1xuICAgICAgICB1cmw6ICcvL2Nkbi5kYXRhdGFibGVzLm5ldC9wbHVnLWlucy8yLjMuNC9pMThuL2VzLUVTLmpzb24nLFxuICAgICAgIH0sXG4gICAgICAgIHNlcnZlclNpZGU6IHRydWUsXG4gICAgICAgIGFqYXg6ICcvaG9ub3Jhcmlvcy9sb2FkJyxcbiAgICAgICAgb3JkZXJNdWx0aTogZmFsc2UsXG4gICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgIHtkYXRhOiBcImNvbnRyaWJ1eWVudGVcIn0sXG4gICAgICAgICAgICB7ZGF0YTogXCJmZWNoYVwifSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhOiByb3cgPT4gbmV3IEludGwuTnVtYmVyRm9ybWF0KFxuICAgICAgICAgICAgICAgICAgICAnZW4tVVMnLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U2lnbjogJ2FjY291bnRpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApLmZvcm1hdChyb3cuaG9ub3JhcmlvKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhOiByb3cgPT4gbmV3IEludGwuTnVtYmVyRm9ybWF0KFxuICAgICAgICAgICAgICAgICAgICAnZW4tVVMnLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U2lnbjogJ2FjY291bnRpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApLmZvcm1hdChyb3cuaW1wdWVzdG8pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGE6IHJvdyA9PiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoXG4gICAgICAgICAgICAgICAgICAgICdlbi1VUycsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6ICdVU0QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lTaWduOiAnYWNjb3VudGluZydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICkuZm9ybWF0KHJvdy50cmFuc2ZlcmVuY2lhKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhOiByb3cgPT4gbmV3IEludGwuTnVtYmVyRm9ybWF0KFxuICAgICAgICAgICAgICAgICAgICAnZW4tVVMnLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5OiAnVVNEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5U2lnbjogJ2FjY291bnRpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApLmZvcm1hdChyb3cudG90YWwpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge2RhdGE6IFwiY29uY2VwdG9cIn0sXG4gICAgICAgICAgICB7ZGF0YTogXCJvYnNlcnZhY2lvbmVzXCJ9LFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRhdGE6IHJvdyA9PiBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgZGVsZXRlLWhvbm9yYXJpby1idG5cIiBkYXRhLWlkPVwiJHsgcm93LmlkIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXRyYXNoMy1maWxsXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibXMtMiBidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBlZGl0LWhvbm9yYXJpby1idG5cIiBkYXRhLWlkPVwiJHsgcm93LmlkIH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXBlbmNpbC1maWxsXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbm9yYXJpb3NUYWJsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGVkaXRCdG4gICA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuZWRpdC1ob25vcmFyaW8tYnRuJylcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5kZWxldGUtaG9ub3JhcmlvLWJ0bicpXG5cbiAgICAgICAgaWYgKGVkaXRCdG4pIHtcbiAgICAgICAgICAgIGNvbnN0IGhvbm9yYXJpb0lkID0gZWRpdEJ0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKVxuXG4gICAgICAgICAgICBnZXQoYC9ob25vcmFyaW9zLyR7IGhvbm9yYXJpb0lkIH1gKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiBvcGVuRWRpdEhvbm9yYXJpb01vZGFsKGVkaXRIb25vcmFyaW9Nb2RhbCwgcmVzcG9uc2UpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaG9ub3JhcmlvSWQgPSBkZWxldGVCdG4uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJylcblxuICAgICAgICAgICAgaWYgKGNvbmZpcm0oJ8K/RXN0YSBzZWd1cm8gZGUgZWxpbWluYXIgZXN0ZSBob25vcmFyaW8/JykpIHtcbiAgICAgICAgICAgICAgICBkZWwoYC9ob25vcmFyaW9zLyR7IGhvbm9yYXJpb0lkIH1gKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5kcmF3KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS1ob25vcmFyaW8tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcG9zdChgL2hvbm9yYXJpb3NgLCBnZXRIb25vcmFyaW9Gb3JtRGF0YShuZXdIb25vcmFyaW9Nb2RhbCksIG5ld0hvbm9yYXJpb01vZGFsLl9lbGVtZW50KVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICB0YWJsZS5kcmF3KClcblxuICAgICAgICAgICAgICAgICAgICBuZXdIb25vcmFyaW9Nb2RhbC5oaWRlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2F2ZS1ob25vcmFyaW8tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgaG9ub3JhcmlvSWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpXG5cbiAgICAgICAgcG9zdChgL2hvbm9yYXJpb3MvJHsgaG9ub3JhcmlvSWQgfWAsIGdldEhvbm9yYXJpb0Zvcm1EYXRhKGVkaXRIb25vcmFyaW9Nb2RhbCksIGVkaXRIb25vcmFyaW9Nb2RhbC5fZWxlbWVudClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuZHJhdygpXG4gICAgICAgICAgICAgICAgICAgIGVkaXRIb25vcmFyaW9Nb2RhbC5oaWRlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRIb25vcmFyaW9Gb3JtRGF0YShtb2RhbCkge1xuICAgIGxldCBkYXRhICAgICA9IHt9XG4gICAgY29uc3QgZmllbGRzID0gW1xuICAgICAgICAuLi5tb2RhbC5fZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKSxcbiAgICAgICAgLi4ubW9kYWwuX2VsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NlbGVjdCcpXG4gICAgXVxuXG4gICAgZmllbGRzLmZvckVhY2goc2VsZWN0ID0+IHtcbiAgICAgICAgZGF0YVtzZWxlY3QubmFtZV0gPSBzZWxlY3QudmFsdWVcbiAgICB9KVxuXG4gICAgcmV0dXJuIGRhdGFcbn1cblxuZnVuY3Rpb24gb3BlbkVkaXRIb25vcmFyaW9Nb2RhbChtb2RhbCwge2lkLCAuLi5kYXRhfSkge1xuICAgIGZvciAobGV0IG5hbWUgaW4gZGF0YSkge1xuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBtb2RhbC5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbbmFtZT1cIiR7IG5hbWUgfVwiXWApXG5cbiAgICAgICAgbmFtZUlucHV0LnZhbHVlID0gZGF0YVtuYW1lXVxuICAgIH1cblxuICAgIG1vZGFsLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYXZlLWhvbm9yYXJpby1idG4nKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpZClcblxuICAgIG1vZGFsLnNob3coKVxufSJdLCJuYW1lcyI6WyJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsImRvbUVsZW1lbnQiLCJ0b0xvd2VyQ2FzZSIsIm9wdGlvbnMiLCJoZWFkZXJzIiwiY3NyZk1ldGhvZHMiLCJTZXQiLCJoYXMiLCJfTUVUSE9EIiwidG9VcHBlckNhc2UiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldENzcmZGaWVsZHMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ0b1N0cmluZyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwiY2xlYXJWYWxpZGF0aW9uRXJyb3JzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiZXJyb3JzIiwiaGFuZGxlVmFsaWRhdGlvbkVycm9ycyIsImdldCIsInBvc3QiLCJkZWwiLCJuYW1lIiwiZWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJlcnJvciIsImVycm9yRGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidGV4dENvbnRlbnQiLCJwYXJlbnROb2RlIiwiYXBwZW5kIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyZW1vdmUiLCJlIiwiY3NyZk5hbWVGaWVsZCIsImNzcmZWYWx1ZUZpZWxkIiwiY3NyZk5hbWVLZXkiLCJnZXRBdHRyaWJ1dGUiLCJjc3JmTmFtZSIsImNvbnRlbnQiLCJjc3JmVmFsdWVLZXkiLCJjc3JmVmFsdWUiLCJNb2RhbCIsIkRhdGFUYWJsZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdIb25vcmFyaW9Nb2RhbCIsImdldEVsZW1lbnRCeUlkIiwiZWRpdEhvbm9yYXJpb01vZGFsIiwidGFibGUiLCJsYW5ndWFnZSIsInNlcnZlclNpZGUiLCJvcmRlck11bHRpIiwiY29sdW1ucyIsInJvdyIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwiY3VycmVuY3lTaWduIiwiZm9ybWF0IiwiaG9ub3JhcmlvIiwiaW1wdWVzdG8iLCJ0cmFuc2ZlcmVuY2lhIiwidG90YWwiLCJzb3J0YWJsZSIsImlkIiwiZXZlbnQiLCJlZGl0QnRuIiwidGFyZ2V0IiwiY2xvc2VzdCIsImRlbGV0ZUJ0biIsImhvbm9yYXJpb0lkIiwib3BlbkVkaXRIb25vcmFyaW9Nb2RhbCIsImNvbmZpcm0iLCJkcmF3IiwiZ2V0SG9ub3JhcmlvRm9ybURhdGEiLCJfZWxlbWVudCIsImhpZGUiLCJjdXJyZW50VGFyZ2V0IiwibW9kYWwiLCJmaWVsZHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNlbGVjdCIsInZhbHVlIiwibmFtZUlucHV0Iiwic2V0QXR0cmlidXRlIiwic2hvdyJdLCJzb3VyY2VSb290IjoiIn0=