"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiCode = void 0;

var _ = require("./");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @namespace apiCode
 */
var apiCode =
/*#__PURE__*/
function () {
  function apiCode() {
    _classCallCheck(this, apiCode);
  }

  _createClass(apiCode, null, [{
    key: "getMessage",
    value: function getMessage() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _config$status_code = config.status_code,
          status_code = _config$status_code === void 0 ? 500 : _config$status_code,
          fields = config.fields,
          accepted_value = config.accepted_value,
          data = config.data,
          error_message = config.error_message,
          name = config.name,
          at = config.at,
          custom = config.custom,
          format = config.format;

      var codeObj = _.utils._clone(this._code[status_code]);

      if (fields !== undefined && codeObj.fields !== undefined) codeObj.fields = fields;
      if (accepted_value !== undefined && codeObj.accepted_value !== undefined) codeObj.accepted_value = accepted_value;
      if (data !== undefined && codeObj.data !== undefined) codeObj.data = data;
      if (error_message !== undefined && codeObj.error_message !== undefined) codeObj.error_message = error_message;
      if (name !== undefined && codeObj.name !== undefined) codeObj.name = name;
      if (at !== undefined && codeObj.at !== undefined) codeObj.at = at;
      if (format !== undefined && codeObj.format !== undefined) codeObj.format = format;
      if (!_.utils.isEmpty(custom)) codeObj = _objectSpread({}, codeObj, custom);
      return codeObj;
    }
  }]);

  return apiCode;
}();

exports.apiCode = apiCode;

_defineProperty(apiCode, "_code", {
  200: {
    status_code: 200,
    description: 'Operation is successfully',
    data: {}
  },
  201: {
    status_code: 201,
    description: 'Operation is successfully but there is nothing changed'
  },
  204: {
    status_code: 204,
    description: 'Not found'
  },
  300: {
    status_code: 300,
    description: 'Required',
    fields: []
  },
  301: {
    status_code: 301,
    description: 'Wrong format',
    format: '',
    fields: []
  },
  302: {
    status_code: 302,
    description: 'Invalid',
    fields: []
  },
  303: {
    status_code: 303,
    description: 'Value is not accepted',
    accepted_value: [],
    fields: []
  },
  304: {
    status_code: 304,
    description: 'Value is null or empty string, please remove this field if there is no value',
    fields: []
  },
  305: {
    status_code: 305,
    description: 'Value must be an array',
    fields: []
  },
  306: {
    status_code: 306,
    description: 'Value must be boolean',
    fields: []
  },
  307: {
    status_code: 307,
    description: 'Value must be a date',
    fields: []
  },
  308: {
    status_code: 308,
    description: 'Value must be a number',
    fields: []
  },
  309: {
    status_code: 309,
    description: 'Value must be a string',
    fields: []
  },
  310: {
    status_code: 310,
    description: 'Value must be an object',
    fields: []
  },
  311: {
    status_code: 311,
    description: 'Value must be a valid email',
    fields: []
  },
  312: {
    status_code: 312,
    description: 'Unknown validation',
    fields: []
  },
  313: {
    status_code: 313,
    description: 'Unknown validation',
    fields: []
  },
  401: {
    status_code: 401,
    description: 'Authorization error'
  },
  402: {
    status_code: 402,
    description: 'Access denied'
  },
  403: {
    status_code: 403,
    description: 'Permission denied'
  },
  406: {
    status_code: 406,
    description: 'Account is blocked'
  },
  500: {
    status_code: 500,
    description: 'Unknown error'
  },
  501: {
    status_code: 501,
    description: 'Wrong password'
  },
  502: {
    status_code: 502,
    description: 'Token is invalid'
  },
  503: {
    status_code: 503,
    description: 'New Password cannot be the same as old one'
  },
  504: {
    status_code: 504,
    description: 'Error when sending mail'
  },
  505: {
    status_code: 505,
    description: 'Token is expired'
  },
  506: {
    status_code: 506,
    description: 'Database error',
    error_message: 'Error message'
  },
  507: {
    status_code: 507,
    description: 'Existed',
    name: 'Name of object'
  },
  508: {
    status_code: 508,
    description: 'Not existed',
    name: 'Name of object'
  },
  509: {
    status_code: 509,
    description: 'Not supported',
    name: 'Name of supporter'
  },
  510: {
    status_code: 510,
    description: 'Operation is failed',
    at: 'Where operation conducts'
  },
  511: {
    status_code: 511,
    description: 'Coupon has been run out'
  },
  512: {
    status_code: 512,
    description: 'Coupon has been expired'
  },
  513: {
    status_code: 513,
    description: 'This coupon is not available for this user'
  },
  514: {
    status_code: 514,
    description: 'This user has already owned this Coupon'
  },
  515: {
    status_code: 515,
    description: 'There is another coupon with this name'
  },
  516: {
    status_code: 516,
    description: 'The Class is not meet requirement to open'
  },
  517: {
    status_code: 517,
    description: 'Cannot edit/remove a Class that is opened'
  },
  518: {
    status_code: 518,
    description: 'You do not have permission to publish a Class'
  },
  519: {
    status_code: 519,
    description: 'The Class is not meet requirement to finish'
  },
  520: {
    status_code: 520,
    description: 'Cannot duplicate attendance check'
  },
  521: {
    status_code: 521,
    description: 'The information has been used',
    fields: []
  }
  /**
   * Return message object based on given status code. If there is no valid code, it returns status `500` by default
   *
   *      Status Code    Description
   *      -----------    -----------
   *      200            Operation is successfully
   *      201            Operation is successfully but there is nothing changed
   *      204            Not found
   *      300            Required
   *      301            Wrong format
   *      302            Invalid
   *      303            Value is not accepted
   *      304            Value is null or empty string
   *      305            Value must be an array
   *      306            Value must be boolean
   *      307            Value must be a date
   *      308            Value must be a number
   *      309            Value must be a string
   *      310            Value must be an object
   *      311            Value must be a valid email
   *      312            Unknown validation
   *      401            Authorization error
   *      402            Access denied
   *      403            Permission denied
   *      500            Unknown error
   *      501            Wrong password
   *      502            Token is invalid
   *      503            New Password cannot be the same as old one
   *      504            Error when sending mail
   *      505            Token is expired
   *      506            Database error
   *      507            Object is existed
   *      508            Object isn't existed
   *      509            Not support
   *      510            Operation is failed
   *      511            Coupon has been run out
   *      512            Coupon has been expired
   *      513            Not available for this user
   *      514            Duplicate user when assigning Coupon
   *      515            Duplicate coupon name
   *      516            Class does not meet requirement to be published
   *      517            Class is published, cannot edit
   *      518            Don't have permission to publish a Class
   *      519            Class does not meet requirement to be finished
   *      520            Cannot duplicate attendance check
   *      521            The information has been used
   *
   * @param {object} config
   * @param {number} config.status_code
   * @param {object} [config.custom] Add more property from `custom` to status_code object even not including in prototype
   * @param {string[]} [config.fields] Add value of `fields` if status_code object prototype having property `fields`
   * @param {string} [config.error_message] Add value of `error_message` if status_code object prototype having property `error_message`
   * @param {string} [config.name] Add value of `name` if status_code object prototype having property `name`
   * @param {string} [config.format] Add value of `format` if status_code object prototype having property `format`
   * @param {string} [config.at] Add value of `at` if status_code object prototype having property `at`
   * @param {object} [config.data] Add value of `data` if status_code object prototype having property `data`
   * @param {string[]} [config.accepted_value] Add value of `accepted_value` if status_code object prototype having property `accepted_value`
   * @returns {*|{status_code: number, description: string}}
   * @memberOf apiCode
   * @example
   *
   *    // To return a messages wrong format for field username
   *    apiCode.getMessage({status_code: 301, fields: ['username']})
   *    // return
   *    {
   *      status_code: 301,
   *      description: 'Wrong format',
   *      fields: ['username']
   *    }
   *
   *    // To return a messages wrong format for field username with additional key
   *    apiCode.getMessage({status_code: 301, fields: ['username'], custom: {hello: true}})
   *    // return
   *    {
   *      status_code: 301,
   *      description: 'Wrong format',
   *      fields: ['username'],
   *      hello: true
   *    }
   */

});