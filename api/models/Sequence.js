var Promise = require('bluebird')
/**
 * Sequence.js
 *
 * @description :: representation of a Sequence.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 * Credit: http://www.yarni.net/2015/07/auto-increment-attribute-for-sails.html
 */

module.exports = {

  attributes: {
    num : {
      type : "integer"
    }
  },
  /**
   * Retrieve the next integer of a Sequence.
   *
   * @method next
   * @async
   * @param {Object} seqId identifier of a sequence
   * @param {Function} callback callback function
   * @param {String} callback.error error message
   * @param {Object} callback.result json object
   * @return {Promise|Object} A promise of the result that returns an integer in case of success
   */
  next : function (seqId, cb) {
    seq = this;
    return new Promise(function(resolve, reject) {
      Sequence.native(function (err, col) {
        col.findAndModify(
          { _id: seqId },
          [['_id', 'asc']],
          {$inc: { num : 1 }},
          { new: true, upsert : true},
          function(err, data) {
            if(cb) cb(err, data.value.num)
            if(err) reject(err)
            resolve(data.value.num)
          }
        );
      });
    });
  }
};
