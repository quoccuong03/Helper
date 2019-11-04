'use strict'

/**
 * This media is a helper that will provide a bulk of function interacting media component
 * @namespace media
 */
export class media {

  /**
   * Return extension got from file name
   * @param {String} filename
   * @return {String} A string that be the extension of the file
   * @memberOf media
   */
  static getFileExtension(filename) {
    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined
  }
}