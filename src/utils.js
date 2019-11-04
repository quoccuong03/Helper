/*global document*/
import crypto from 'crypto-js'
import {_array, _number, _string, _object, _date} from './'

/**
 * This class contains bulk of functions used for Gamali
 * @namespace utils
 */
export class utils {

  /**
   * Used to encrypt string with key
   * @param {String | Number | Object} string
   * @param {String} key
   * @returns {String} Encrypted string
   * @memberOf utils
   */
  static encrypt(string, key) {
    try {
      if (this.isObject(string)) string = JSON.stringify(string)
      if (this.isNumeric(string)) string = string.toString()

      return crypto.AES.encrypt(string, key).toString()
    }
    catch (e) {
      return e.message
    }
  }

  /**
   * Used to decrypt string with key
   * @param {String} string
   * @param {String} key
   * @returns {String} Decrypted string
   * @memberOf utils
   */
  static decrypt(string, key) {
    try {
      const bytes =  crypto.AES.decrypt(string, key)
      return bytes.toString(crypto.enc.Utf8)
    }
    catch (e) {
      return e.message
    }
  }

  /**
   * @param {String} str
   * @return {String}
   * @memberOf utils
   */
  static addslashes(str) {
    return (str + '')
      .replace(/[\\'']/g, '\\$&')
      .replace(/\u0{3}/g, '\\0')
  }

  /**
   * Returns `true `if the passed value is a string.
   * @param {Object} value The value to test.
   * @return {Boolean}
   * @memberOf utils
   */
  static isString(value) {
    return typeof value === 'string'
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
  static queryToObject(queryString) {
    // Get criteria from query string
    const criteria = queryString.split('&')
    let jsonObj = {}
    for (let item of criteria) {
      const split = item.split('=')
      jsonObj[split[0]] = split[1]
    }
    return jsonObj
  }

  /**
   * Parse JSON string to Object
   * @param {String} input
   * @return {Null | Object} Return `null` if parsing failed. Otherwise, return `object`
   * @memberOf utils
   */
  static jsonParse(input) {
    try {
      return JSON.parse(input)
    } catch (e) {
      return null
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
  static isBlank(value) {
    this.isString(value) && (value = value.trim())
    const blankValue = [undefined, null, false, '']
    return this.isEmpty(value, blankValue)
  }

  /**
   * Return `true` if the passed email is valid, `false` otherwise.
   * @param {String} email
   * @return {Boolean}
   * @memberOf utils
   */
  static isEmail(email) {
    const matcher =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return matcher.test(email)
  }

  /**
   * Validates that a value is numeric.
   * @param {*} value Examples: 1, '1', '2.34'
   * @return {Boolean} True if numeric, false otherwise
   * @memberOf utils
   */
  static isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value)
  }

  /**
   * Returns `true` if the passed value is a JavaScript Date object, `false` otherwise.
   * @param {Object} obj The object to test.
   * @return {Boolean}
   * @memberOf utils
   */
  static isDate(obj) {
    return toString.call(obj) === '[object Date]'
  }

  /**
   * Validates that a value is phone
   * @param {String} phone
   * @return {boolean}
   * @memberOf utils
   */
  static isPhone(phone) {
    const matcher = /^(84)(3|5|6|7|8|9)(\d{8})$/
    return matcher.test(phone)
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
  static functionFactory() {
    return Function.prototype.constructor.apply(Function.prototype, Array.prototype.slice.call(arguments))
  }

  /**
   * Return TRUE if the value is an Array
   * @param {*} value
   * @return {boolean}
   * @memberOf utils
   */
  static isArray(value) {
    return toString.call(value) === '[object Array]'
  }

  /**
   * Return TRUE if the value is an Object
   * @param {*} value
   * @return {boolean}
   * @memberOf utils
   */
  static isObject(value) {
    return toString.call(value) === '[object Object]'
  }

  /**
   * Return TRUE if the value is empty
   * @param {*} mixedVar Value
   * @param {*} [pool] Sample empty value to compare
   * @return {boolean}
   * @memberOf utils
   */
  static isEmpty(mixedVar, pool = []) {
    const emptyValues = pool.length ? pool : [undefined, null, false, 0, '', '0']
    for (let value of emptyValues) {
      if (mixedVar === value) return true
    }

    if (typeof mixedVar === 'object') {
      for (let key in mixedVar) {
        if (mixedVar.hasOwnProperty(key)) {
          return false
        }
      }
      return true
    }

    return (this.isArray(mixedVar) && !mixedVar.length)
  }

  /**
   * Return TRUE if all items are empty
   * @param {...*} values any kind of value need to be checked empty or not
   * @returns {boolean}
   * @memberOf utils
   */
  static isAllEmpty() {
    let count = 0

    const values = arguments

    for (let val of values) {
      if (this.isEmpty(val)) count ++
    }

    return count === values.length
  }

  /**
   * Return TRUE if one of items is empty
   * @param {...*} values any kind of value need to be checked empty or not
   * @returns {boolean}
   * @memberOf utils
   */
  static isAnyEmpty() {
    const values = arguments

    for (let val of values) {
      if (this.isEmpty(val)) return true
    }

    return false
  }

  /**
   * Clone simple variables including array, {}-like objects, Date without keeping the old reference.
   * A reference for the object itself is returned if it's not a direct descendant of Object.
   *
   * @param {*} item The variable to clone
   * @return {*} clone
   * @memberOf utils
   */
  static _clone(item) {
    if (item == null) {
      return item
    }

    const type = toString.call(item)
    let clone

    // Date
    if (type === '[object Date]') {
      return new Date(item.getTime())
    }

    // Array
    if (type === '[object Array]') {
      let i = item.length
      clone = []
      while (i--) {
        clone[i] = this._clone(item[i])
      }
    }
    // Object
    else if (type === '[object Object]' && item.constructor === Object) {
      clone = {}
      for (let key in item) {
        clone[key] = this._clone(item[key])
      }
      const enumerables = ['valueOf', 'toLocaleString', 'toString', 'constructor']
      if (enumerables) {
        for (let j = enumerables.length; j--;) {
          let enumerable = enumerables[j]

          if (item.hasOwnProperty(enumerable)) {
            clone[enumerable] = item[enumerable]
          }
        }
      }
    }

    return clone || item
  }

  /**
   * Return an array converted from given param if it is not an array instance
   * @param source
   * @return {Array}
   * @memberOf utils
   */
  static _toArray(source) {
    return utils.isArray(source) ? source : [source]
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
  static _merge(destination, source) {
    return _object.merge(destination, source)
  }

  /**
   * Returns `true` if the passed value is a JavaScript Function, `false` otherwise.
   * @param {Object} value The value to test.
   * @return {Boolean}
   * @memberOf utils
   */
  static _isFunction =
    // Safari 3.x and 4.x returns 'function' for typeof <NodeList>, hence we need to fall back to using
    // Object.prototype.toString (slower)
    (typeof document !== 'undefined' && typeof document.getElementsByTagName('body') === 'function')
      ? value => !!value && toString.call(value) === '[object Function]'
      : value => !!value && typeof value === 'function'

  /**
   * Format value. Alternative of {@link _string.stringReplacer} and {@link _date.format}
   * @param {*} value Value to format
   * @param {string | Array | Object} [format] Format
   * @return {*} Value after format
   * @memberOf utils
   */
  static format(value, format) {
    if (this.isString(value)) return _string.stringReplacer(value, format || '')
    if (this.isDate(value)) return _date.format(value, format || 'Y-m-d')
  }

  /**
   * Validate min max of value. Alternative of {@link _string.limit} and {@link _number.limit}
   * @param {*} value
   * @param {{min: Number, max: Number}} limit
   * @memberOf utils
   */
  static limit(value, limit) {
    if (this.isEmpty(limit)) return false
    if (this.isString(value)) return _string.limit(value, limit)
    if (this.isNumeric(value)) return _number.limit(value, limit)
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
  static substr(s, value, index) {
    return _string.subString(s, value, index)
  }

  /**
   * Alternative for {@link _array.compact} and  {@link _object.compact}
   * @param {Object | Array} value
   * @param {String[]} [keys] Refer `keys` param in {@link _object.compact}
   * @return {Array | Object} compacted value
   * @memberOf utils
   */
  static compact(value, keys) {
    if (this.isArray(value)) return _array.compact(value)
    if (this.isObject(value)) return _object.compact(value, keys)
  }
}