var buzz = require("../buzz.js");
var assert = require('assert');
describe('Buzz', function() {
    it('5 return "Buzz"', function() {
      assert.equal(buzz.buzz(5), "Buzz");
    });
    it('3 return 3', function() {
      assert.equal(buzz.buzz(3), 3);
    });
});
