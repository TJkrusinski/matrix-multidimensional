'use strict';

module.exports = maMult;

/**
 *  Turn a matrix into an array
 *
 *  @param {Array} matrix
 *  @return {Array}
 *  @api public
 */

function maMult(matrix) {
  if (!(matrix instanceof Array)) return [];

  matrix.forEach(function(a, i){
    if (a instanceof Array) return maMult(a);
    matrix[i] = new Array(a);
  });
   
  return matrix;
};
