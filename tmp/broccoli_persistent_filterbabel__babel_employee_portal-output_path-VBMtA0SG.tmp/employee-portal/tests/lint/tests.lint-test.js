define('employee-portal/tests/lint/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/employee-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/employee-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/employee-filter-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/employee-filter-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/employee-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/employee-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/employee-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/employee-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
});