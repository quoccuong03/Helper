"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._object = void 0;

var _utils = require("./utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _object =
/*#__PURE__*/
function () {
  function _object() {
    _classCallCheck(this, _object);
  }

  _createClass(_object, null, [{
    key: "compare",

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
    value: function compare(object1, object2) {
      var check = function check(o1, o2) {
        for (var key in o1) {
          if (o1.hasOwnProperty(key) && o1[key] !== o2[key]) return false;
        }

        return true;
      }; // Short circuit if the same object is passed twice


      if (object1 === object2) return true;else if (object1 && object2) // Do the second check because we could have extra keys in
        // object2 that don't exist in object1.
        return check(object1, object2) && check(object2, object1);else if (!object1 && !object2) return object1 === object2;else return false;
    }
    /**
     * Creates an object with all keys from source or with defined keys provided comparing to source
     * The returned object will be omitted undefined value
     * @param {Object} object
     * @param {String[]} keys Key needed to copy from the object
     * @return {Object}
     * @memberOf _object
     */

  }, {
    key: "compact",
    value: function compact(object, keys) {
      // Return original if invalid
      if (!object) return object; // Define clone

      var clone; // Compact key if keys is provided

      if (_utils.utils.isArray(keys) && keys.length > 0) {
        clone = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;
            clone[key] = object[key];
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
      } // Otherwise, clone whole keys
      else clone = _utils.utils._clone(object);

      var entries = Object.entries(clone); // Remove keys having undefined value

      for (var _i = 0, _entries = entries; _i < _entries.length; _i++) {
        var _entries$_i = _slicedToArray(_entries[_i], 2),
            _key = _entries$_i[0],
            value = _entries$_i[1];

        _utils.utils.isString(value) && (value = value.trim());
        if ([undefined, null, ''].indexOf(value) > -1) delete clone[_key];
      }

      return clone;
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

  }, {
    key: "merge",
    value: function merge(destination, source) {
      var mergeFn = this.merge;
      var cloneFn = _utils.utils._clone;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = source[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var object = _step2.value;

          for (var key in object) {
            if (!(key in destination)) {
              var value = object[key];

              if (value && value.constructor === Object) {
                var sourceKey = destination[key];

                if (sourceKey && sourceKey.constructor === Object) {
                  mergeFn(sourceKey, [value]);
                } else {
                  destination[key] = cloneFn(value);
                }
              } else {
                destination[key] = value;
              }
            }
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

      return destination;
    }
    /**
     * JSON parse object if `unparse` is true and vise versa
     * @param {object|object[]} source
     * @param {string[]} keys Name of key containing value needed to be parsed
     * @param {boolean} [unparse=false] `true` for JSON parse and stringify vise versa
     * @return {object|object[]}
     * @memberOf _object
     */

  }, {
    key: "exposeJson",
    value: function exposeJson(source, keys) {
      var unparse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var sources = _utils.utils._toArray(source);

      var results = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = sources[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var src = _step3.value;
          var parsedObj = {};
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = keys[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              var k = _step4.value;
              if (src[k]) parsedObj[k] = unparse ? _utils.utils.jsonParse(src[k]) : JSON.stringify(src[k]);
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

          results.push(_utils.utils.isEmpty(parsedObj) ? src : _objectSpread({}, src, parsedObj));
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

      return _utils.utils.isArray(source) ? results : results[0];
    }
  }]);

  return _object;
}();

exports._object = _object;