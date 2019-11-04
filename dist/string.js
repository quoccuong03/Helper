"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._string = void 0;

var _md = _interopRequireDefault(require("md5"));

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @namespace _string
 */
var _string =
/*#__PURE__*/
function () {
  function _string() {
    _classCallCheck(this, _string);
  }

  _createClass(_string, null, [{
    key: "leftPad",

    /**
     * Pads the left side of a string with a specified character. This is especially useful
     * for normalizing number and date strings.  Example usage:
     *
     * @example
     *
     *     var s = _string.leftPad('123', 5, '0');
     *     // s now contains the string: '00123'
     *
     * @param {String} string The original string.
     * @param {Number} size The total length of the output string.
     * @param {String} [character=' '] (optional) The character with which to pad the original
     * string.
     * @return {String} The padded string.
     * @memberOf _string
     */
    value: function leftPad(string, size, character) {
      var result = String(string);
      character = character || ' ';

      while (result.length < size) {
        result = character + result;
      }

      return result;
    }
    /**
     * Escapes the passed string for ' and \.
     * @param {String} string The string to escape.
     * @return {String} The escaped string.
     * @memberOf _string
     */

  }, {
    key: "escape",
    value: function escape(string) {
      return string.replace(/('|\\)/g, '\\\\$1');
    }
    /**
     * Validate min max length of String
     * @param {String} string String that will be validated
     * @param {Object} [limit={}] Object contains criteria info
     * @param {Number} [limit.min]
     * @param {Number} [limit.max]
     * @return {Boolean} Return the passed value if it's not a string or failed the criteria test
     * @memberOf _string
     */

  }, {
    key: "limit",
    value: function limit(string) {
      var _limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!_.utils.isString(string)) return false;
      var ln = string.trim().length;
      return _._number.limit(ln, _limit);
    }
    /**
     * Hash string to md5 with given secret key
     * @param {String} string
     * @param {String} [secret='']
     * @return {*}
     * @memberOf _string
     */

  }, {
    key: "hashString",
    value: function hashString(string) {
      var secret = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return (0, _md["default"])(string + secret);
    }
    /**
     * Replace string in template. This will find the anchors defined in template then replace with provided value
     * An anchor should be followed format: %anchor_name%
     * 'replacer' is an object with key is anchor name and value of key is the value of the anchor
     *
     * @example
     *    {
     *      const template = 'Hello %someone%'
     *      const replacer = {
     *        someone: 'World'
     *      }
     *    }
     *
     * An alternative way to use this function is provide an Array value that will be used to replace for 'replacer' param
     * In this case, template anchor should be a number index
     *
     * @example
     *    {
     *      const template = 'Hello %0%, I'm your %1%'
     *      const replacer = ['world', 'Lord']
     *    }
     *
     *
     * @param {String} template
     * @param {Object} replacer
     * @return {string|Object|*|void}
     * @memberOf _string
     */

  }, {
    key: "stringReplacer",
    value: function stringReplacer(template, replacer) {
      return template.replace(/%([\w]+)?%/g, function ($1, $2) {
        return replacer[$2];
      });
    }
    /**
     * Generate slug. Commonly use for URL
     *
     * @example
     *  - String: Short circuit if the same object is passed twice
     *  - Slug after generate: Short-circuit-if-the-same-object-is-passed-twice
     *
     * @param {String} text
     * @return {string|Object|*|void}
     * @memberOf _string
     */

  }, {
    key: "slugify",
    value: function slugify(text) {
      var slug;
      slug = text.toString().trim().toLowerCase() // Transform diacritics to non-diacritics
      .replace(/[áàảạãăắằẳẵặâấầẩẫậ]/gi, 'a').replace(/[éèẻẽẹêếềểễệ]/gi, 'e').replace(/[iíìỉĩị]/gi, 'i').replace(/[óòỏõọôốồổỗộơớờởỡợ]/gi, 'o').replace(/[úùủũụưứừửữự]/gi, 'u').replace(/[ýỳỷỹỵ]/gi, 'y').replace(/đ/gi, 'd') // Remove special char
      .replace(/[`~!@#|$%^&*()+=,.\\/?><'“:;_]/gi, '') // Transform space char to hyphen
      .replace(/\s/gi, '-') // Transform continuous hyphen to hyphen
      .replace(/-+/gi, '-') // Remove start/end hyphen
      .replace(/^-+|-+$/g, '');
      return slug;
    }
    /**
     * Inserts a substring into a string.
     * @param {String} s The original string.
     * @param {String} value The substring to insert.
     * @param {Number} index The index to insert the substring. Negative indexes will insert
     * from the end of the string. Example:
     *
     *    subString("abcdefg", "h", -1); // abcdefhg
     *
     * @return {String} The value with the inserted substring
     * @memberOf _string
     */

  }, {
    key: "subString",
    value: function subString(s, value, index) {
      var len;
      if (!s) return value;
      if (!value) return s;
      len = s.length;
      if (!index && index !== 0) index = len;

      if (index < 0) {
        index *= -1; // negative overflow, insert at start

        if (index >= len) index = 0;else index = len - index;
      }

      if (index === 0) s = value + s;else if (index >= s.length) s += value;else s = s.substr(0, index) + value + s.substr(index);
      return s;
    }
  }]);

  return _string;
}();

exports._string = _string;