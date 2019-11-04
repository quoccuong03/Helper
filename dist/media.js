'use strict';
/**
 * This media is a helper that will provide a bulk of function interacting media component
 * @namespace media
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var media =
/*#__PURE__*/
function () {
  function media() {
    _classCallCheck(this, media);
  }

  _createClass(media, null, [{
    key: "getFileExtension",

    /**
     * Return extension got from file name
     * @param {String} filename
     * @return {String} A string that be the extension of the file
     * @memberOf media
     */
    value: function getFileExtension(filename) {
      return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)[0] : undefined;
    }
  }]);

  return media;
}();

exports.media = media;