/**
 * @namespace _object
 */
import {utils} from './utils'

export class _object {
  /**
   * Shallow compares the contents of 2 objects using strict equality. Objects are
   * considered equal if they both have the same set of properties and the
   * value for those properties equals the other in the corresponding object.
   *
   * @example
   *
   *     // Returns true
   *     _compareObjects({
   *         foo: 1,
   *         bar: 2
   *     }, {
   *         foo: 1,
   *         bar: 2
   *     });
   *
   * @param {Object} object1
   * @param {Object} object2
   * @return {Boolean} `true` if the objects are equal.
   * @memberOf _object
   */
  static compare(object1, object2) {
    let check = function (o1, o2) {
      for (let key in o1) {
        if (o1.hasOwnProperty(key) && o1[key] !== o2[key])
          return false
      }
      return true
    }

    // Short circuit if the same object is passed twice
    if (object1 === object2)
      return true
    else if (object1 && object2)
    // Do the second check because we could have extra keys in
    // object2 that don't exist in object1.
      return check(object1, object2) && check(object2, object1)
    else if (!object1 && !object2)
      return object1 === object2
    else
      return false
  }

  /**
   * Creates an object with all keys from source or with defined keys provided comparing to source
   * The returned object will be omitted undefined value
   * @param {Object} object
   * @param {String[]} keys Key needed to copy from the object
   * @return {Object}
   * @memberOf _object
   */
  static compact(object, keys) {
    // Return original if invalid
    if (!object) return object
    // Define clone
    let clone
    // Compact key if keys is provided
    if (utils.isArray(keys) && keys.length > 0) {
      clone = {}
      for (let key of keys) {
        clone[key] = object[key]
      }
    }
    // Otherwise, clone whole keys
    else
      clone = utils._clone(object)

    let entries = Object.entries(clone)
    // Remove keys having undefined value
    for (let [key, value] of entries) {
      utils.isString(value) && (value = value.trim())
      if ([undefined, null, ''].indexOf(value) > -1) delete clone[key]
    }

    return clone
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
   * @memberOf _object
   */
  static merge(destination, source) {
    const mergeFn = this.merge
    const cloneFn = utils._clone

    for (let object of source) {
      for (let key in object) {
        if (!(key in destination)) {
          const value = object[key]
          if (value && value.constructor === Object) {
            const sourceKey = destination[key]
            if (sourceKey && sourceKey.constructor === Object) {
              mergeFn(sourceKey, [value])
            } else {
              destination[key] = cloneFn(value)
            }
          } else {
            destination[key] = value
          }
        }
      }
    }

    return destination
  }

  /**
   * JSON parse object if `unparse` is true and vise versa
   * @param {object|object[]} source
   * @param {string[]} keys Name of key containing value needed to be parsed
   * @param {boolean} [unparse=false] `true` for JSON parse and stringify vise versa
   * @return {object|object[]}
   * @memberOf _object
   */
  static exposeJson(source, keys, unparse = false) {
    const sources = utils._toArray(source)
    const results = []

    for (let src of sources) {
      const parsedObj = {}

      for (let k of keys) {
        if (src[k]) parsedObj[k] = unparse ? utils.jsonParse(src[k]) : JSON.stringify(src[k])
      }

      results.push(utils.isEmpty(parsedObj) ? src : {...src, ...parsedObj})
    }

    return utils.isArray(source) ? results : results[0]
  }
}