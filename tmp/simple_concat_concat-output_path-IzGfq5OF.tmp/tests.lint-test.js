QUnit.module('ESLint | tests');

QUnit.test('acceptance/employee-list-test.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'acceptance/employee-list-test.js should pass ESLint\n\n8:64 - \'assert\' is defined but never used. (no-unused-vars)\n12:75 - \'assert\' is defined but never used. (no-unused-vars)');
});

QUnit.test('test-helper.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'test-helper.js should pass ESLint\n\n');
});

