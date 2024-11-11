var main = require('../index');
var assert = require('assert');
describe('Regular fibonacci value', function() {
    it('should return 5 for Fib(5)', function() {
        assert.strictEqual(main.fibonacci(5), 5);
      });
});

describe('First two terms', function() {
  it('should return 0 and 1 for first two terms', function() {
      assert.strictEqual(main.fibonacci(0), 0);
      assert.strictEqual(main.fibonacci(1), 1);
    });
});

describe('Regula factorial value', function() {
    it('should return 120 for Fac(5)', function() {
        assert.strictEqual(main.factorial(5), 120);
      });
});

describe('First two terms', function() {
    it('should return 1 for both 0 and 1', function() {
        assert.strictEqual(main.factorial(0), 1);
        assert.strictEqual(main.factorial(1), 1);
      });
  });

  describe('test negative', function() {
    it('should return undefined if negative', function() {
        assert.strictEqual(main.factorial(-1), undefined);
      });
  });
  