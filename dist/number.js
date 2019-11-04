"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._number = void 0;

var _ = require("./");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @namespace _number
 */
var _number =
/*#__PURE__*/
function () {
  function _number() {
    _classCallCheck(this, _number);
  }

  _createClass(_number, null, [{
    key: "limit",

    /**
     * Validate min max of Number
     * @param {Number | String} number Number that will be validated
     * @param {Object} [limit={}] Object contains criteria info
     * @param {Number} [limit.min]
     * @param {Number} [limit.max]
     * @return {Boolean} Return the passed value if it's not a number or failed the criteria test
     * @memberOf _number
     */
    value: function limit(number) {
      var _limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!_.utils.isNumeric(number)) return false;
      var clone = Number(number);
      var min = _limit.min,
          max = _limit.max;
      return (_.utils.isBlank(min) ? true : clone >= min) && (_.utils.isBlank(max) ? true : clone <= max);
    }
  }]);

  return _number;
}();

exports._number = _number;