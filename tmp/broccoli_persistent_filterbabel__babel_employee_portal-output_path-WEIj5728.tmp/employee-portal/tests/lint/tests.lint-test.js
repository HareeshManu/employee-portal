define('employee-portal/tests/lint/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/employee-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'acceptance/employee-list-test.js should pass ESLint\n\n2:10 - \'visit\' is defined but never used. (no-unused-vars)\n2:17 - \'currentURL\' is defined but never used. (no-unused-vars)\n8:66 - \'assert\' is defined but never used. (no-unused-vars)\n10:56 - \'assert\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});