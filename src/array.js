import {utils} from './'

/**
 * @namespace _array
 */
export class _array {
  /**
   * Clean data of array, remove falsy item
   * @param {array} array
   * @param {boolean} [unique=false] `true` will remove duplicate item
   * @return {array}
   * @memberOf _array
   */
  static clean(array, unique = false) {
    let result = this.compact(array)

    if (unique) result = this.distinct(result)

    return result
  }

  /**
   * Creates an array with all falsey values removed. The values `false`, `null`,
   * `0`, `""`, `undefined`, and `NaN` are falsey.
   *
   * @param {Array} array The array to compact.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * util._Array.compact([0, 1, false, 2, '', 3]);
   * // => [1, 2, 3]
   *
   * @memberOf _array
   */
  static compact(array) {
    let result = []

    for (let item of array) {
      if (!utils.isEmpty(item)) result.push(item)
    }

    return result
  }

  /**
   * Remove specific item from array
   * @param {Array} array
   * @param {Number | String | Object} item
   * @return {Array} an array that excludes the item
   * @memberOf _array
   */
  static remove(array, item) {
    if (utils.isEmpty(array)) return array

    const index = array.indexOf(item)

    if (index > -1) array.splice(index, 1)

    return array
  }

  /**
   * Remove multiple item from array
   * @param {Array} array
   * @param {Array} listItem
   * @return {Array} an array that excludes the items
   * @memberOf _array
   */
  static removes(array, listItem) {
    if (utils.isEmpty(array) || utils.isEmpty(listItem)) return array
    else {
      listItem.forEach(i => this.remove(array, i))
      return array
    }
  }

  /**
   * Recursively flattens into 1-d Array. Injects Arrays inline.
   * @param array
   * @return {Array}
   * @memberOf _array
   */
  static flatten(array) {
    let worker = []
    const rFlatten = (arr) => {
      for (let value of arr) {
        if (utils.isArray(value)) {
          rFlatten(value)
        } else {
          worker.push(value)
        }
      }
      return worker
    }
    return rFlatten(array)
  }

  /**
   * Return last item of array
   * @param {Array} array
   * @return {*}
   * @memberOf _array
   */
  static last(array) {
    return array.slice(-1).pop()
  }

  /**
   * Plucks the value of a property from each item in the Array. Example:
   *
   *     pluck([Obj1, Obj2, ObjN], 'keyName'); // [Obj1.keyName, Obj2.keyName, ..., ObjN.keyName]
   *
   * @param {Array} array The Array of items to pluck the value from.
   * @param {String} propertyName The property name to pluck from each element.
   * @return {Array} The value from each item in the Array.
   * @memberOf _array
   */
  static pluck(array, propertyName) {
    let ret = []

    for (let item of array) {
      ret.push(item[propertyName])
    }

    return ret
  }

  /**
   * Perform a set difference A-B by subtracting all items in array B from array A.
   *
   * @param {Array} arrayA
   * @param {Array} arrayB
   * @return {Array} difference
   * @memberOf _array
   */
  static difference(arrayA, arrayB) {
    let clone = arrayA.slice()
    let ln = clone.length

    for (let i = 0, lnB = arrayB.length; i < lnB; i++) {
      for (let j = 0; j < ln; j++) {
        if (clone[j] === arrayB[i]) {
          this.remove(clone, clone[j])
          j--
          ln--
        }
      }
    }
    return clone
  }

  /**
   * Get the index of the provided `item` in the given `array`
   *
   * @param {Array} array The array to check.
   * @param {Object} item The item to find.
   * @return {Number} The index of item in the array (or -1 if it is not found)
   * @memberOf _array
   */
  static indexOf(array, item) {
    return utils.isArray(array) ? Array.prototype.indexOf.call(array, item) : -1
  }

  /**
   * Returns a new array with unique items
   *
   * @example
   *
   *    const key = 'name'
   *    const obj = [
   *      {id: 1, name: a}
   *      {id: 2, name: b}
   *      {id: 3, name: b}
   *    ]
   *    utils._Array.distinct(obj, key)
   *    // return
   *    [
   *      {id: 1, name: a}
   *      {id: 2, name: b}
   *    ]
   *
   * @param {Array} array
   * @param {String} [key] If key is passed, only first matched item is chosen. This is useful for Object[]
   * @return {Array} results
   * @memberOf _array
   */
  static distinct(array, key) {
    let clone = []
    let cloneKey = []
    for (let item of array) {
      if (key) {
        if (this.indexOf(cloneKey, item[key]) === -1) {
          clone.push(item)
          cloneKey.push(item[key])
        }
      } else if (this.indexOf(clone, item) === -1)
        clone.push(item)
    }
    return clone
  }

  /**
   * Sort an array using the comparator, but if the comparator returns zero, use the objects'
   * original indices to tiebreak This results in a stable sort.
   * @private
   * @param {Array} array
   * @param {Function} userComparator
   * @return {Array}
   * @memberOf _array
   */
  static stableSort(array, userComparator) {
    let indices = new Array(array.length)
    // generate 0-n index map from original array
    for (let i in array)
      indices[i] = i
    // Sort indices array using a comparator which compares the original values at the two
    // indices, and uses those indices as a tiebreaker
    indices.sort((index1, index2) => userComparator(array[index1], array[index2]) || (index1 - index2))
    // Reconsitute a sorted array using the array that the indices have been sorted into
    for (let i in array)
      indices[i] = array[indices[i]]
    // Rebuild the original array
    for (let i in array)
      array[i] = indices[i]
    return array
  }

  /**
   * Default comparator to use when no comparator is specified for the sort method.
   * Javascript sort does LEXICAL comparison.
   * @private
   * @param {*} lhs
   * @param {*} rhs
   * @return {number}
   * @memberOf _array
   */
  static lexicalCompare(lhs, rhs) {
    lhs = String(lhs)
    rhs = String(rhs)
    return (lhs < rhs) ? -1 : ((lhs > rhs) ? 1 : 0)
  }

  /**
   * Sorts the elements of an Array in a stable manner (equivalently keyed values do not move
   * relative to each other). By default, this method sorts the elements alphabetically and
   * ascending.
   * **Note:** This method modifies the passed array, in the same manner as the
   * native javascript Array.sort.
   *
   * @param {Array} array The array to sort.
   * @param {Function} [sortFn] The comparison function.
   * @param {*} sortFn.a The first item to compare.
   * @param {*} sortFn.b The second item to compare.
   * @param {Number} sortFn.return `-1` if a < b, `1` if a > b, otherwise `0`.
   * @return {Array} The sorted array.
   * @memberOf _array
   * @example
   *
   *  // Sort ascending
   *  sort(array, (a,b) => a-b)
   *  // Sort descending
   *  sort(array, (a,b) => b-a)
   */
  static sort(array, sortFn) {
    return this.stableSort(array, sortFn || this.lexicalCompare)
  }

  /**
   * Sort array of object
   * @example
   *
   *    const objArr = [
   *      {id: 1, name: 'e'},
   *      {id: 2, name: 'c'},
   *      {id: 3, name: 'd'}
   *    ]
   *
   *    // Sort Ascending
   *    utils._Array.sortObject(objArr, 'name', 'asc')
   *    // Return
   *    [
   *      {id: 2, name: 'c'},
   *      {id: 3, name: 'd'},
   *      {id: 1, name: 'e'}
   *    ]
   *
   *    // Sort Descending
   *    utils._Array.sortObject(objArr, 'name', 'desc')
   *    // Return
   *    [
   *      {id: 1, name: 'e'},
   *      {id: 3, name: 'd'},
   *      {id: 2, name: 'c'}
   *    ]
   *
   * @param {Object[]} array
   * @param {String} key
   * @param {String} direction
   * @return {*|Array}
   * @memberOf _array
   */
  static sortObject(array, key, direction) {
    return this.sort(array, (a, b) => {
      let comparison = 0
      const keyA = utils.isString(a[key]) ? a[key].toLowerCase() : a[key]
      const keyB = utils.isString(b[key]) ? b[key].toLowerCase() : b[key]
      keyA > keyB && (comparison = 1)
      keyA < keyB && (comparison = -1)
      if (direction === 'asc') return comparison
      else if (direction === 'desc') return comparison * -1
    })
  }

  /**
   * Group object in array according to passed `key`
   * @example
   *
   *    const arr1 = [
   *      {id: 1, name: 'a'},
   *      {id: 2, name: 'b'},
   *      {id: 3, name: a}
   *    ]
   *    utils._Array.group(arr1, 'name')
   *    // result
   *    {
   *      'a': [{id: 1, name: 'a'}, {id: 3, name: 'a'}],
   *      'b': [{id: 2, name: 'b'}]
   *    }
   * @param {Object[]} array of Object
   * @param {String} key Name of key that Object will be grouped based on
   * @return {Object} An object with key is group name and key value is an array of group items
   * @memberOf _array
   */
  static group(array, key) {
    let clone = {}
    for (let object of array) {
      // Generate group name
      const groupName = object[key].toString()
      if (clone[groupName]) clone[groupName].push(object)
      else (clone[groupName] = []) && clone[groupName].push(object)
    }
    return clone
  }

  /**
   * Calculates the given operation of all items in the given array.
   * @example
   *    calculate([1,2], '+') // => 3
   *    calculate([1,2], '*') // => 2
   *    calculate([1,2], '-') // => -1
   *    calculate([1,2], '/') // => 0.5
   * @param {Array} array The Array to calculate the sum value of.
   * @param {String} operation The operation to calculate. Support all type of calculation.
   * @param {String} [key] Name of key will be get to perform the calculation. Useful with array of object
   * @return {Number} The operation.
   * @memberOf _array
   */
  static calculate(array, operation, key) {
    const cb = `return arguments[0] ${operation} arguments[1]`
    let clone = array.slice()
    if (key) clone = this.pluck(clone, key)
    return clone.reduce(utils.functionFactory(cb))
  }

}