var assert = require('assert');
describe('Buzz', function() {
    it(' 5 return "Buzz"', function() {
      assert.equal(buzz(5), "Buzz");
    });
    it('3 return 3', function() {
      assert.equal(buzz(3), 3);
    });
});
