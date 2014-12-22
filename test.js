'use strict';

var assert = require('assert');
var maMult = require('./');

describe('maMult()', function(){
  it('turns a matrix into a multidimensional array', function(){
    var matrix = [
      [ 1, 2 ],
      [ 3, 4 ]
    ]; 

    var val = maMult(matrix);
    assert.ok(val instanceof Array);
    assert.ok(val[0] instanceof Array);
    assert.ok(val[0][0] instanceof Array);
    assert.ok(val[0][1] instanceof Array);
    assert.ok(val[1][0] instanceof Array);
    assert.ok(val[1][1] instanceof Array);

    assert.equal(val[0][0].length, 1);
    assert.equal(val[0][1].length, 2);
    assert.equal(val[1][0].length, 3);
    assert.equal(val[1][1].length, 4);
  });
});
