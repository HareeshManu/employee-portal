define('employee-portal/tests/lint/templates.template.lint-test', [], function () {
  'use strict';

  QUnit.module('TemplateLint');

  QUnit.test('employee-portal/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'employee-portal/templates/application.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('employee-portal/templates/home.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'employee-portal/templates/home.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('employee-portal/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'employee-portal/templates/index.hbs should pass TemplateLint.\n\n');
  });
});