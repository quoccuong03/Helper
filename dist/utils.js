"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = void 0;

var _cryptoJs = _interopRequireDefault(require("crypto-js"));

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This class contains bulk of functions used for Gamali
 * @namespace utils
 */
var utils =
/*#__PURE__*/
function () {
  function utils() {
    _classCallCheck(this, utils);
  }

  _createClass(utils, null, [{
    key: "encrypt",

    /**
     * Used to encrypt string with key
     * @param {String | Number | Object} string
     * @param {String} key
     * @returns {String} Encrypted string
     * @memberOf utils
     */
    value: function encrypt(string, key) {
      try {
        if (this.isObject(string)) string = JSON.stringify(string);
        if (this.isNumeric(string)) string = string.toString();
        return _cryptoJs["default"].AES.encrypt(string, key).toString();
      } catch (e) {
        return e.message;
      }
    }
    /**
     * Used to decrypt string with key
     * @param {String} string
     * @param {String} key
     * @returns {String} Decrypted string
     * @memberOf utils
     */

  }, {
    key: "decrypt",
    value: function decrypt(string, key) {
      try {
        var bytes = _cryptoJs["default"].AES.decrypt(string, key);

        return bytes.toString(_cryptoJs["default"].enc.Utf8);
      } catch (e) {
        return e.message;
      }
    }
    /**
     * @param {String} str
     * @return {String}
     * @memberOf utils
     */

  }, {
    key: "addslashes",
    value: function addslashes(str) {
      return (str + '').replace(/[\\'']/g, '\\$&').replace(/\u0{3}/g, '\\0');
    }
    /**
     * Returns `true `if the passed value is a string.
     * @param {Object} value The value to test.
     * @return {Boolean}
     * @memberOf utils
     */

  }, {
    key: "isString",
    value: function isString(value) {
      return typeof value === 'string';
    }
    /**
     * Parse a query string to an object
     * @example
     *
     *    const querystring = 'name=behjehem&age=18&home=LA'
     *    _string.queryToObject(querystring)
     *    // Result
     *    {
     *      name: 'behjehem,
     *      age: 18,
     *      home: 'LA'
     *    }
     *
     * @param {String} queryString
     * @return {Object}
     * @memberOf utils
     */

  }, {
    key: "queryToObject",
    value: function queryToObject(queryString) {
      // Get criteria from query string
      var criteria = queryString.split('&');
      var jsonObj = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = criteria[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          var split = item.split('=');
          jsonObj[split[0]] = split[1];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return jsonObj;
    }
    /**
     * Parse JSON string to Object
     * @param {String} input
     * @return {Null | Object} Return `null` if parsing failed. Otherwise, return `object`
     * @memberOf utils
     */

  }, {
    key: "jsonParse",
    value: function jsonParse(input) {
      try {
        return JSON.parse(input);
      } catch (e) {
        return null;
      }
    }
    /**
     * Returns `true` if the passed value is empty, `false` otherwise. The value is deemed to be
     * empty if it is either:
     *
     * - `null`
     * - `undefined`
     * - a zero-length array
     * - a zero-length string
     * - a no key object
     *
     * @param {*} value
     * @return {Boolean}
     * @memberOf utils
     */

  }, {
    key: "isBlank",
    value: function isBlank(value) {
      this.isString(value) && (value = value.trim());
      var blankValue = [undefined, null, false, ''];
      return this.isEmpty(value, blankValue);
    }
    /**
     * Return `true` if the passed email is valid, `false` otherwise.
     * @param {String} email
     * @return {Boolean}
     * @memberOf utils
     */

  }, {
    key: "isEmail",
    value: function isEmail(email) {
      var matcher = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return matcher.test(email);
    }
    /**
     * Validates that a value is numeric.
     * @param {*} value Examples: 1, '1', '2.34'
     * @return {Boolean} True if numeric, false otherwise
     * @memberOf utils
     */

  }, {
    key: "isNumeric",
    value: function isNumeric(value) {
      return !isNaN(parseFloat(value)) && isFinite(value);
    }
    /**
     * Returns `true` if the passed value is a JavaScript Date object, `false` otherwise.
     * @param {Object} obj The object to test.
     * @return {Boolean}
     * @memberOf utils
     */

  }, {
    key: "isDate",
    value: function isDate(obj) {
      return toString.call(obj) === '[object Date]';
    }
    /**
     * Validates that a value is phone
     * @param {String} phone
     * @return {boolean}
     * @memberOf utils
     */

  }, {
    key: "isPhone",
    value: function isPhone(phone) {
      var matcher = /^(84)(3|5|6|7|8|9)(\d{8})$/;
      return matcher.test(phone);
    }
    /**
     * Return a function with passed code
     * @example
     *
     *  const a = utils.functionFactory('console.log(1)')
     *  a() // will console 1
     *
     * @return {Function}
     * @memberOf utils
     */

  }, {
    key: "functionFactory",
    value: function functionFactory() {
      return Function.prototype.constructor.apply(Function.prototype, Array.prototype.slice.call(arguments));
    }
    /**
     * Return TRUE if the value is an Array
     * @param {*} value
     * @return {boolean}
     * @memberOf utils
     */

  }, {
    key: "isArray",
    value: function isArray(value) {
      return toString.call(value) === '[object Array]';
    }
    /**
     * Return TRUE if the value is an Object
     * @param {*} value
     * @return {boolean}
     * @memberOf utils
     */

  }, {
    key: "isObject",
    value: function isObject(value) {
      return toString.call(value) === '[object Object]';
    }
    /**
     * Return TRUE if the value is empty
     * @param {*} mixedVar Value
     * @param {*} [pool] Sample empty value to compare
     * @return {boolean}
     * @memberOf utils
     */

  }, {
    key: "isEmpty",
    value: function isEmpty(mixedVar) {
      var pool = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var emptyValues = pool.length ? pool : [undefined, null, false, 0, '', '0'];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = emptyValues[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var value = _step2.value;
          if (mixedVar === value) return true;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (_typeof(mixedVar) === 'object') {
        for (var key in mixedVar) {
          if (mixedVar.hasOwnProperty(key)) {
            return false;
          }
        }

        return true;
      }

      return this.isArray(mixedVar) && !mixedVar.length;
    }
    /**
     * Return TRUE if all items are empty
     * @param {...*} values any kind of value need to be checked empty or not
     * @returns {boolean}
     * @memberOf utils
     */

  }, {
    key: "isAllEmpty",
    value: function isAllEmpty() {
      var count = 0;
      var values = arguments;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = values[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var val = _step3.value;
          if (this.isEmpty(val)) count++;
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return count === values.length;
    }
    /**
     * Return TRUE if one of items is empty
     * @param {...*} values any kind of value need to be checked empty or not
     * @returns {boolean}
     * @memberOf utils
     */

  }, {
    key: "isAnyEmpty",
    value: function isAnyEmpty() {
      var values = arguments;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = values[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var val = _step4.value;
          if (this.isEmpty(val)) return true;
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return false;
    }
    /**
     * Clone simple variables including array, {}-like objects, Date without keeping the old reference.
     * A reference for the object itself is returned if it's not a direct descendant of Object.
     *
     * @param {*} item The variable to clone
     * @return {*} clone
     * @memberOf utils
     */

  }, {
    key: "_clone",
    value: function _clone(item) {
      if (item == null) {
        return item;
      }

      var type = toString.call(item);
      var clone; // Date

      if (type === '[object Date]') {
        return new Date(item.getTime());
      } // Array


      if (type === '[object Array]') {
        var i = item.length;
        clone = [];

        while (i--) {
          clone[i] = this._clone(item[i]);
        }
      } // Object
      else if (type === '[object Object]' && item.constructor === Object) {
          clone = {};

          for (var key in item) {
            clone[key] = this._clone(item[key]);
          }

          var enumerables = ['valueOf', 'toLocaleString', 'toString', 'constructor'];

          if (enumerables) {
            for (var j = enumerables.length; j--;) {
              var enumerable = enumerables[j];

              if (item.hasOwnProperty(enumerable)) {
                clone[enumerable] = item[enumerable];
              }
            }
          }
        }

      return clone || item;
    }
    /**
     * Return an array converted from given param if it is not an array instance
     * @param source
     * @return {Array}
     * @memberOf utils
     */

  }, {
    key: "_toArray",
    value: function _toArray(source) {
      return utils.isArray(source) ? source : [source];
    }
    /**
     * Merges any number of objects recursively without referencing them or their children.
     * Note: It will reference arrays if they are only present in one of the objects being merged.
     *
     *     var fromObj = {
     *         isSuperCool: true,
     *         products: ['LinkQ', 'Microsof'],
     *         office: {
     *             size: 2000,
     *             location: 'Palo Alto',
     *         }
     *     };
     *
     *     var toObj = {
     *         companyName: 'Romite inc.',
     *         products: ['LinkQ', 'Microsof', 'Apple', 'Migare', 'Sibaki']
     *     };
     *
     *     var result = Ext.Object.merge(fromObj, toObj);
     *
     *     // fromObj and toObj then equals to
     *     {
     *         companyName: 'Romite inc.',
     *         products: ['LinkQ', 'Microsof'],
     *         isSuperCool: true,
     *         office: {
     *             size: 40000,
     *             location: 'Redwood City'
     *         }
     *     }
     *
     * @param {Object} destination The object into which all subsequent objects are merged.
     * @param {Object[]} source array object to merge into the destination.
     * @return {Object} merged The destination object with all passed objects merged in.
     * @memberOf utils
     */

  }, {
    key: "_merge",
    value: function _merge(destination, source) {
      return _._object.merge(destination, source);
    }
    /**
     * Returns `true` if the passed value is a JavaScript Function, `false` otherwise.
     * @param {Object} value The value to test.
     * @return {Boolean}
     * @memberOf utils
     */

  }, {
    key: "format",

    /**
     * Format value. Alternative of {@link _string.stringReplacer} and {@link _date.format}
     * @param {*} value Value to format
     * @param {string | Array | Object} [format] Format
     * @return {*} Value after format
     * @memberOf utils
     */
    value: function format(value, _format) {
      if (this.isString(value)) return _._string.stringReplacer(value, _format || '');
      if (this.isDate(value)) return _._date.format(value, _format || 'Y-m-d');
    }
    /**
     * Validate min max of value. Alternative of {@link _string.limit} and {@link _number.limit}
     * @param {*} value
     * @param {{min: Number, max: Number}} limit
     * @memberOf utils
     */

  }, {
    key: "limit",
    value: function limit(value, _limit) {
      if (this.isEmpty(_limit)) return false;
      if (this.isString(value)) return _._string.limit(value, _limit);
      if (this.isNumeric(value)) return _._number.limit(value, _limit);
    }
    /**
     * Alternative of {@link _string.subString}
     * @param {String} s The original string.
     * @param {String} value The substring to insert.
     * @param {Number} index The index to insert the substring. Negative indexes will insert
     * from the end of the string. Example:
     *
     *    subString("abcdefg", "h", -1); // abcdefhg
     *
     * @return {String} The value with the inserted substring
     * @memberOf utils
     */

  }, {
    key: "substr",
    value: function substr(s, value, index) {
      return _._string.subString(s, value, index);
    }
    /**
     * Alternative for {@link _array.compact} and  {@link _object.compact}
     * @param {Object | Array} value
     * @param {String[]} [keys] Refer `keys` param in {@link _object.compact}
     * @return {Array | Object} compacted value
     * @memberOf utils
     */

  }, {
    key: "compact",
    value: function compact(value, keys) {
      if (this.isArray(value)) return _._array.compact(value);
      if (this.isObject(value)) return _._object.compact(value, keys);
    }
  }]);

  return utils;
}();

exports.utils = utils;

_defineProperty(utils, "_isFunction", // Safari 3.x and 4.x returns 'function' for typeof <NodeList>, hence we need to fall back to using
// Object.prototype.toString (slower)
typeof document !== 'undefined' && typeof document.getElementsByTagName('body') === 'function' ? function (value) {
  return !!value && toString.call(value) === '[object Function]';
} : function (value) {
  return !!value && typeof value === 'function';
});