"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._date = void 0;

var _ = require("./");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @namespace _date
 */
var _date =
/*#__PURE__*/
function () {
  function _date() {
    _classCallCheck(this, _date);
  }

  _createClass(_date, null, [{
    key: "ceilDate",

    /**
     * Date interval constant.
     * @memberOf! _date
     * @type String
     */

    /**
     * Date interval constant.
     * @memberOf! _date
     * @type String
     */

    /**
     * Date interval constant.
     * @memberOf! _date
     * @type String
     */

    /** Date interval constant.
     * @memberOf! _date
     * @type String
     */

    /**
     * Date interval constant.
     * @memberOf! _date
     * @type String
     */

    /**
     * Date interval constant.
     * @memberOf! _date
     * @type String
     */

    /**
     * Date interval constant.
     * @memberOf! _date
     * @type String
     */

    /**
     * @property {String[]} dayNames
     * An array of textual day names.
     * Override these values for international dates.
     *
     * Example:
     *
     *     _date.dayNames = [
     *         'SundayInYourLang',
     *         'MondayInYourLang'
     *         // ...
     *     ];
     *
     * @memberOf! _date
     */

    /**
     * @property {String[]} monthNames
     * An array of textual month names.
     * Override these values for international dates.
     *
     * Example:
     *
     *     _date.monthNames = [
     *         'JanInYourLang',
     *         'FebInYourLang'
     *         // ...
     *     ];
     *
     * @memberOf _date
     */

    /**
     * The base format-code to formatting-function hashmap used by the {@link #format} method.
     * Formatting functions are strings (or functions which return strings) which
     * will return the appropriate value when evaluated in the context of the Date object
     * from which the {@link #format} method is called.
     * Add to / override these mappings for custom date formatting.
     *
     * __Note:__ `_date.format()` treats characters as literals if an appropriate mapping
     * cannot be found.
     *
     * @example
     *
     *     _date.formatCodes.x = "_string.leftPad(this.getDate(), 2, '0')";
     *     console.log(_date.format(new Date(), 'X'); // returns the current day of the month
     *
     * @memberOf! _date
     * @type Object
     */
    value: function ceilDate(date, clone) {
      // handles invalid dates preventing the browser from crashing.
      if (isNaN(date.getTime())) return date;
      if (clone) return this.ceilDate(this.clone(date)); // get current hour before rounding

      var hr = date.getHours();
      this.clearTime(date);
      if (hr >= 12) date = this.add(date, this.DAY, 1);
      return date;
    }
    /**
     * Clear time of date
     * @param {Date} date
     * @param {boolean} [clone]
     * @return {*}
     * @memberOf _date
     */

  }, {
    key: "clearTime",
    value: function clearTime(date, clone) {
      // handles invalid dates preventing the browser from crashing.
      if (isNaN(date.getTime())) return date;
      if (clone) return this.clearTime(this.clone(date)); // clear time to midnight

      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
      return date;
    }
    /**
     * Creates and returns a new Date instance with the exact same date value as the called instance.
     * Dates are copied and passed by reference, so if a copied date variable is modified later, the original
     * variable will also be changed.  When the intention is to create a new variable that will not
     * modify the original instance, you should create a clone.
     *
     * @example
     * Example of correctly cloning a date:
     *
     *     //wrong way:
     *     var orig = new Date('10/1/2006');
     *     var copy = orig;
     *     copy.setDate(5);
     *     console.log(orig);  // returns 'Thu Oct 05 2006'!
     *
     *     //correct way:
     *     var orig = new Date('10/1/2006'),
     *         copy = util._Date.clone(orig);
     *     copy.setDate(5);
     *     console.log(orig);  // returns 'Thu Oct 01 2006'
     *
     * @param {Date} date The date.
     * @return {Date} The new Date instance.
     * @memberOf _date
     */

  }, {
    key: "clone",
    value: function clone(date) {
      return new Date(date.getTime());
    }
    /**
     * Checks if the current date falls within a leap year.
     * @example
     *
     *     var dt = new Date('1/10/2011');
     *     console.log(util.Date._isLeapYear(dt)); // false
     *
     * @param {Date} date The date
     * @return {Boolean} `true` if the current date falls within a leap year, `false` otherwise.
     * @memberOf _date
     */

  }, {
    key: "isLeapYear",
    value: function isLeapYear(date) {
      var year = date.getFullYear();
      return !!((year & 3) === 0 && (year % 100 || year % 400 === 0 && year));
    }
    /**
     * Get the number of days in the current month, adjusted for leap year.
     * @param {Date} date The date
     * @return {Number} The number of days in the month.
     * @memberOf _date
     */

  }, {
    key: "getDaysInMonth",
    value: function getDaysInMonth(date) {
      var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      var mon = date.getMonth();
      return mon === 1 && this.isLeapYear(date) ? 29 : daysInMonth[mon];
    }
    /**
     * Get the date of the first day of the month in which this date resides.
     * @param {Date} date The date
     * @return {Date}
     * @memberOf _date
     */

  }, {
    key: "getFirstDateOfMonth",
    value: function getFirstDateOfMonth(date) {
      return new Date(date.getFullYear(), date.getMonth(), 1);
    }
    /**
     * Get the date of the last day of the month in which this date resides.
     * @param {Date} date The date
     * @return {Date}
     * @memberOf _date
     */

  }, {
    key: "getLastDateOfMonth",
    value: function getLastDateOfMonth(date) {
      return new Date(date.getFullYear(), date.getMonth(), this.getDaysInMonth(date));
    }
    /**
     * Provides a convenient method for performing basic date arithmetic. This method
     * does not modify the Date instance being called - it creates and returns
     * a new Date instance containing the resulting date value.
     *
     * @example
     *
     *     // Basic usage:
     *     var dt = util.Date._add(new Date('10/29/2006'), util.Date.DAY, 5);
     *     console.log(dt); // returns 'Fri Nov 03 2006 00:00:00'
     *
     *     // Negative values will be subtracted:
     *     var dt2 = util.Date._add(new Date('10/1/2006'), util.Date.DAY, -5);
     *     console.log(dt2); // returns 'Tue Sep 26 2006 00:00:00'
     *
     *      // Decimal values can be used:
     *     var dt3 = util.Date._add(new Date('10/1/2006'), util.Date.DAY, 1.25);
     *     console.log(dt3); // returns 'Mon Oct 02 2006 06:00:00'
     *
     * @param {Date} date The date to modify
     * @param {String} interval A valid date interval enum value.
     * @param {Number} value The amount to add to the current date.
     * @return {Date} The new Date instance.
     * @memberOf _date
     */

  }, {
    key: "add",
    value: function add(date, interval, value) {
      var d = this.clone(date);
      var base = 0;
      var day;
      var decimalValue;
      if (!interval || value === 0) return d;
      decimalValue = value - parseInt(value, 10);
      value = parseInt(value, 10);
      if (value) switch (interval.toLowerCase()) {
        case this.MILLI:
          d.setTime(d.getTime() + value);
          break;

        case this.SECOND:
          d.setTime(d.getTime() + value * 1000);
          break;

        case this.MINUTE:
          d.setTime(d.getTime() + value * 60 * 1000);
          break;

        case this.HOUR:
          d.setTime(d.getTime() + value * 60 * 60 * 1000);
          break;

        case this.DAY:
          d.setTime(d.getTime() + value * 24 * 60 * 60 * 1000);
          break;

        case this.MONTH:
          day = date.getDate();

          if (day > 28) {
            day = Math.min(day, this.getLastDateOfMonth(this.add(this.getFirstDateOfMonth(date), this.MONTH, value)).getDate());
          }

          d.setDate(day);
          d.setMonth(date.getMonth() + value);
          break;

        case this.YEAR:
          day = date.getDate();

          if (day > 28) {
            day = Math.min(day, this.getLastDateOfMonth(this.add(this.getFirstDateOfMonth(date), this.YEAR, value)).getDate());
          }

          d.setDate(day);
          d.setFullYear(date.getFullYear() + value);
          break;
      }

      if (decimalValue) {
        switch (interval.toLowerCase()) {
          case this.MILLI:
            base = 1;
            break;

          case this.SECOND:
            base = 1000;
            break;

          case this.MINUTE:
            base = 1000 * 60;
            break;

          case this.HOUR:
            base = 1000 * 60 * 60;
            break;

          case this.DAY:
            base = 1000 * 60 * 60 * 24;
            break;

          case this.MONTH:
            day = this.getDaysInMonth(d);
            base = 1000 * 60 * 60 * 24 * day;
            break;

          case this.YEAR:
            day = this.isLeapYear(d) ? 366 : 365;
            base = 1000 * 60 * 60 * 24 * day;
            break;
        }

        if (base) {
          d.setTime(d.getTime() + base * decimalValue);
        }
      }

      return d;
    }
    /**
     * Format date to YYYYMMDD
     * @param {String | Number | Date} date
     * @param {String} [separator]
     * @return {String}
     * @memberOf _date
     */

  }, {
    key: "formatDate",
    value: function formatDate(date) {
      var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var format = ['Y', 'm', 'd'].join(separator);
      return this.format(date, format);
    }
    /**
     * Get the short day name for the given day number.
     * Override this function for international dates.
     * @param {Number} day A zero-based JavaScript day number.
     * @return {String} The short day name.
     * @memberOf _date
     */

  }, {
    key: "getShortDayName",
    value: function getShortDayName(day) {
      return this.dayNames[day].substring(0, 3);
    }
    /**
     * Get the short month name for the given month number.
     * Override this function for international dates.
     * @param {Number} month A zero-based JavaScript month number.
     * @return {String} The short month name.
     * @memberOf _date
     */

  }, {
    key: "getShortMonthName",
    value: function getShortMonthName(month) {
      return this.monthNames[month].substring(0, 3);
    }
    /**
     * Get the English ordinal suffix of the current day (equivalent to the format specifier 'S').
     * @param {Date} date The date
     * @return {String} 'st, 'nd', 'rd' or 'th'.
     * @memberOf _date
     */

  }, {
    key: "getSuffix",
    value: function getSuffix(date) {
      switch (date.getDate()) {
        case 1:
        case 21:
        case 31:
          return 'st';

        case 2:
        case 22:
          return 'nd';

        case 3:
        case 23:
          return 'rd';

        default:
          return 'th';
      }
    }
    /**
     * Formats a date given the supplied format string.
     *
     * The following is a list of all currently supported formats:
     *
     *      Format      Description                                                               Example returned values
     *      ------      -----------------------------------------------------------------------   -----------------------
     *        d         Day of the month, 2 digits with leading zeros                             01 to 31
     *        D         A short textual representation of the day of the week                     Mon to Sun
     *        j         Day of the month without leading zeros                                    1 to 31
     *        l         A full textual representation of the day of the week                      Sunday to Saturday
     *        N         ISO-8601 numeric representation of the day of the week                    1 (for Monday) through 7 (for Sunday)
     *        S         English ordinal suffix for the day of the month, 2 characters             st, nd, rd or th. Works well with j
     *        w         Numeric representation of the day of the week                             0 (for Sunday) to 6 (for Saturday)
     *        z         The day of the year (starting from 0)                                     0 to 364 (365 in leap years)
     *        F         A full textual representation of a month, such as January or March        January to December
     *        m         Numeric representation of a month, with leading zeros                     01 to 12
     *        M         A short textual representation of a month                                 Jan to Dec
     *        n         Numeric representation of a month, without leading zeros                  1 to 12
     *        t         Number of days in the given month                                         28 to 31
     *        L         Whether it&#39;s a leap year                                                  1 if it is a leap year, 0 otherwise.
     *        Y         A full numeric representation of a year, 4 digits                         Examples: 1999 or 2003
     *        y         A two digit representation of a year                                      Examples: 99 or 03
     *        a         Lowercase Ante meridiem and Post meridiem                                 am or pm
     *        A         Uppercase Ante meridiem and Post meridiem                                 AM or PM
     *        g         12-hour format of an hour without leading zeros                           1 to 12
     *        G         24-hour format of an hour without leading zeros                           0 to 23
     *        h         12-hour format of an hour with leading zeros                              01 to 12
     *        H         24-hour format of an hour with leading zeros                              00 to 23
     *        i         Minutes, with leading zeros                                               00 to 59
     *        s         Seconds, with leading zeros                                               00 to 59
     *
     * Example usage (note that you must escape format specifiers with '\\' to render them as character literals):
     *
     * @example
     *
     *     // Sample date:
     *     // 'Sat Mar 30 2019 19:24:01'
     *
     *     var dt = new Date('03/30/2019 07:24:01 PM');
     *     console.log(_date.format(dt, 'd/m/Y'));                          // 30/03/2019
     *     console.log(_date.format(dt, 'H:i d/m/Y'));                      // 19:24 30/03/2019
     *     console.log(_date.format(dt, 'l, \\t\\he jS \\of F Y h:i:s A')); // Saturday, the 30th of March 2019 07:24:01 PM
     *
     * @param {Date} date The date to format
     * @param {String} format The format string
     * @returns {Promise.<{status: Number, data: Object | Boolean} | {status: Number, messages: Array}>}
     * @memberOf _date
     */

  }, {
    key: "format",
    value: function format(date, _format) {
      if (!_.utils.isDate(date)) return '';
      var formatFn = this.createFormat(_format);
      var scope = {
        String: _._string,
        Date: _date
      };
      return formatFn.call(scope, date) + '';
    }
    /**
     * Create format function for Date
     * @private
     * @return {Function}
     * @memberOf _date
     */

  }, {
    key: "createFormat",
    value: function createFormat(format) {
      var code = [];
      var special = false;
      var ch = '';
      var length = format.length;

      for (var i = 0; i < length; ++i) {
        ch = format.charAt(i);
        if (!special && ch === '\\') special = true;else if (special) {
          special = false;
          code.push('\'' + _._string.escape(ch) + '\'');
        } else {
          if (ch === '\n') code.push('\'\\n\'');else code.push(this.getFormatCode(ch));
        }
      }

      return _.utils.functionFactory('let m = arguments[0]; return ' + code.join('+'));
    }
    /**
     * @private
     * @param {String} character Format character
     * @return {String | Function}
     * @memberOf _date
     */

  }, {
    key: "getFormatCode",
    value: function getFormatCode(character) {
      var f = this.formatCodes[character];

      if (f) {
        f = typeof f === 'function' ? f() : f; // reassign function result to prevent repeated execution

        this.formatCodes[character] = f;
      } // note: unknown characters are treated as literals


      return f || '\'' + _._string.escape(character) + '\'';
    }
  }]);

  return _date;
}();

exports._date = _date;

_defineProperty(_date, "MILLI", 'ms');

_defineProperty(_date, "SECOND", 's');

_defineProperty(_date, "MINUTE", 'mi');

_defineProperty(_date, "HOUR", 'h');

_defineProperty(_date, "DAY", 'd');

_defineProperty(_date, "MONTH", 'mo');

_defineProperty(_date, "YEAR", 'y');

_defineProperty(_date, "dayNames", ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);

_defineProperty(_date, "monthNames", ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);

_defineProperty(_date, "formatCodes", {
  /* eslint-disable max-len */
  d: 'this.String.leftPad(m.getDate(), 2, \'0\')',
  D: 'this.Date.getShortDayName(m.getDay())',
  // get localized short day name
  j: 'm.getDate()',
  l: 'this.Date.dayNames[m.getDay()]',
  N: '(m.getDay() ? m.getDay() : 7)',
  S: 'this.Date.getSuffix(m)',
  w: 'm.getDay()',
  z: 'this.Date.getDayOfYear(m)',
  F: 'this.Date.monthNames[m.getMonth()]',
  m: 'this.String.leftPad(m.getMonth() + 1, 2, \'0\')',
  M: 'this.Date.getShortMonthName(m.getMonth())',
  // get localized short month name
  n: '(m.getMonth() + 1)',
  t: 'this.Date.getDaysInMonth(m)',
  L: '(this.Date.isLeapYear(m) ? 1 : 0)',
  Y: 'this.String.leftPad(m.getFullYear(), 4, \'0\')',
  y: '(\'\' + m.getFullYear()).substring(2, 4)',
  a: '(m.getHours() < 12 ? \'am\' : \'pm\')',
  A: '(m.getHours() < 12 ? \'AM\' : \'PM\')',
  g: '((m.getHours() % 12) ? m.getHours() % 12 : 12)',
  G: 'm.getHours()',
  h: 'this.String.leftPad((m.getHours() % 12) ? m.getHours() % 12 : 12, 2, \'0\')',
  H: 'this.String.leftPad(m.getHours(), 2, \'0\')',
  i: 'this.String.leftPad(m.getMinutes(), 2, \'0\')',
  s: 'this.String.leftPad(m.getSeconds(), 2, \'0\')'
  /* eslint-enable max-len */

  /**
   * Attempts to ceil a date.
   * If the time is later than 12:00 PM, the date returned will be midnight of the next day.
   * Otherwise, it will be midnight of the current day
   *
   * @param {Date} date The date
   * @param {Boolean} [clone=false] `true` to create a clone of this date, ceil then return it.
   * @return {Date} this or the clone.
   * @memberOf _date
   */

});