import {utils} from './'

/**
 * @namespace _number
 */
export class _number {
  /**
   * Validate min max of Number
   * @param {Number | String} number Number that will be validated
   * @param {Object} [limit={}] Object contains criteria info
   * @param {Number} [limit.min]
   * @param {Number} [limit.max]
   * @return {Boolean} Return the passed value if it's not a number or failed the criteria test
   * @memberOf _number
   */
  static limit(number, limit = {}) {
    if (!utils.isNumeric(number)) return false
    const clone = Number(number)
    const {min, max} = limit
    return (utils.isBlank(min) ? true : clone >= min) && (utils.isBlank(max) ? true : clone <= max)
  }
}