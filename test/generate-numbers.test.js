var assert = require('assert')
var generateNumbers = require('../generate-numbers');

describe('generate-numbers', () => {
    it('returns an array of numbers', () => {
        var result = generateNumbers();

        assert.equal(result instanceof Array, true);
        assert.equal(result.length > 0, true);
        assert.equal(typeof result[0] == 'number', true);
    });

    it('returns 100 items', () => {
        var result = generateNumbers();

        assert.equal(result.length, 100);
    })

    it('the first number is 1', () => {
        assert.equal(generateNumbers()[0], 1);
    })

    it('the last number is 100', () => {
        assert.equal(generateNumbers()[99], 100);
    })

    it('each number is one higher than the previous', () => {
        var result = generateNumbers();

        var previousValue = 0;

        for(var i = 0; i < result.length; i++) {
            assert.equal(result[i], previousValue + 1);
            previousValue = result[i];
        }
    })
})