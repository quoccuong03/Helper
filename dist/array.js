"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._array = void 0;

var _ = require("./");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @namespace _array
 */
var _array =
/*#__PURE__*/
function () {
  function _array() {
    _classCallCheck(this, _array);
  }

  _createClass(_array, null, [{
    key: "clean",

    /**
     * Clean data of array, remove falsy item
     * @param {array} array
     * @param {boolean} [unique=false] `true` will remove duplicate item
     * @return {array}
     * @memberOf _array
     */
    value: function clean(array) {
      var unique = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var result = this.compact(array);
      if (unique) result = this.distinct(result);
      return result;
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

  }, {
    key: "compact",
    value: function compact(array) {
      var result = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          if (!_.utils.isEmpty(item)) result.push(item);
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

      return result;
    }
    /**
     * Remove specific item from array
     * @param {Array} array
     * @param {Number | String | Object} item
     * @return {Array} an array that excludes the item
     * @memberOf _array
     */

  }, {
    key: "remove",
    value: function remove(array, item) {
      if (_.utils.isEmpty(array)) return array;
      var index = array.indexOf(item);
      if (index > -1) array.splice(index, 1);
      return array;
    }
    /**
     * Remove multiple item from array
     * @param {Array} array
     * @param {Array} listItem
     * @return {Array} an array that excludes the items
     * @memberOf _array
     */

  }, {
    key: "removes",
    value: function removes(array, listItem) {
      var _this = this;

      if (_.utils.isEmpty(array) || _.utils.isEmpty(listItem)) return array;else {
        listItem.forEach(function (i) {
          return _this.remove(array, i);
        });
        return array;
      }
    }
    /**
     * Recursively flattens into 1-d Array. Injects Arrays inline.
     * @param array
     * @return {Array}
     * @memberOf _array
     */

  }, {
    key: "flatten",
    value: function flatten(array) {
      var worker = [];

      var rFlatten = function rFlatten(arr) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var value = _step2.value;

            if (_.utils.isArray(value)) {
              rFlatten(value);
            } else {
              worker.push(value);
            }
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

        return worker;
      };

      return rFlatten(array);
    }
    /**
     * Return last item of array
     * @param {Array} array
     * @return {*}
     * @memberOf _array
     */

  }, {
    key: "last",
    value: function last(array) {
      return array.slice(-1).pop();
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

  }, {
    key: "pluck",
    value: function pluck(array, propertyName) {
      var ret = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = array[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = _step3.value;
          ret.push(item[propertyName]);
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

      return ret;
    }
    /**
     * Perform a set difference A-B by subtracting all items in array B from array A.
     *
     * @param {Array} arrayA
     * @param {Array} arrayB
     * @return {Array} difference
     * @memberOf _array
     */

  }, {
    key: "difference",
    value: function difference(arrayA, arrayB) {
      var clone = arrayA.slice();
      var ln = clone.length;

      for (var i = 0, lnB = arrayB.length; i < lnB; i++) {
        for (var j = 0; j < ln; j++) {
          if (clone[j] === arrayB[i]) {
            this.remove(clone, clone[j]);
            j--;
            ln--;
          }
        }
      }

      return clone;
    }
    /**
     * Get the index of the provided `item` in the given `array`
     *
     * @param {Array} array The array to check.
     * @param {Object} item The item to find.
     * @return {Number} The index of item in the array (or -1 if it is not found)
     * @memberOf _array
     */

  }, {
    key: "indexOf",
    value: function indexOf(array, item) {
      return _.utils.isArray(array) ? Array.prototype.indexOf.call(array, item) : -1;
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

  }, {
    key: "distinct",
    value: function distinct(array, key) {
      var clone = [];
      var cloneKey = [];
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = array[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var item = _step4.value;

          if (key) {
            if (this.indexOf(cloneKey, item[key]) === -1) {
              clone.push(item);
              cloneKey.push(item[key]);
            }
          } else if (this.indexOf(clone, item) === -1) clone.push(item);
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

      return clone;
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

  }, {
    key: "stableSort",
    value: function stableSort(array, userComparator) {
      var indices = new Array(array.length); // generate 0-n index map from original array

      for (var i in array) {
        indices[i] = i;
      } // Sort indices array using a comparator which compares the original values at the two
      // indices, and uses those indices as a tiebreaker


      indices.sort(function (index1, index2) {
        return userComparator(array[index1], array[index2]) || index1 - index2;
      }); // Reconsitute a sorted array using the array that the indices have been sorted into

      for (var _i in array) {
        indices[_i] = array[indices[_i]];
      } // Rebuild the original array


      for (var _i2 in array) {
        array[_i2] = indices[_i2];
      }

      return array;
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

  }, {
    key: "lexicalCompare",
    value: function lexicalCompare(lhs, rhs) {
      lhs = String(lhs);
      rhs = String(rhs);
      return lhs < rhs ? -1 : lhs > rhs ? 1 : 0;
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

  }, {
    key: "sort",
    value: function sort(array, sortFn) {
      return this.stableSort(array, sortFn || this.lexicalCompare);
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

  }, {
    key: "sortObject",
    value: function sortObject(array, key, direction) {
      return this.sort(array, function (a, b) {
        var comparison = 0;
        var keyA = _.utils.isString(a[key]) ? a[key].toLowerCase() : a[key];
        var keyB = _.utils.isString(b[key]) ? b[key].toLowerCase() : b[key];
        keyA > keyB && (comparison = 1);
        keyA < keyB && (comparison = -1);
        if (direction === 'asc') return comparison;else if (direction === 'desc') return comparison * -1;
      });
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

  }, {
    key: "group",
    value: function group(array, key) {
      var clone = {};
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = array[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var object = _step5.value;
          // Generate group name
          var groupName = object[key].toString();
          if (clone[groupName]) clone[groupName].push(object);else (clone[groupName] = []) && clone[groupName].push(object);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
            _iterator5["return"]();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return clone;
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

  }, {
    key: "calculate",
    value: function calculate(array, operation, key) {
      var cb = "return arguments[0] ".concat(operation, " arguments[1]");
      var clone = array.slice();
      if (key) clone = this.pluck(clone, key);
      return clone.reduce(_.utils.functionFactory(cb));
    }
  }]);

  return _array;
}();

exports._array = _array;