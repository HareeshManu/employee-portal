define('employee-portal/tests/lint/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/employee-filter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/employee-filter.js should pass ESLint\n\n');
  });

  QUnit.test('components/employee-list.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/employee-list.js should pass ESLint\n\n2:10 - \'computed\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('controllers/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/home.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/home/details.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/home/details.js should pass ESLint\n\n13:11 - Unexpected console statement. (no-console)');
  });

  QUnit.test('controllers/home/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/home/index.js should pass ESLint\n\n');
  });

  QUnit.test('models/employee.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/employee.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/home.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home.js should pass ESLint\n\n');
  });

  QUnit.test('routes/home/details.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home/details.js should pass ESLint\n\n');
  });

  QUnit.test('routes/home/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
});