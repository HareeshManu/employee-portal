QUnit.module('TemplateLint');

QUnit.test('employee-portal/templates/application.hbs', function(assert) {
  assert.expect(1);
  assert.ok(true, 'employee-portal/templates/application.hbs should pass TemplateLint.\n\n');
});

QUnit.test('employee-portal/templates/components/employee-filter.hbs', function(assert) {
  assert.expect(1);
  assert.ok(false, 'employee-portal/templates/components/employee-filter.hbs should pass TemplateLint.\n\nemployee-portal/templates/components/employee-filter.hbs\n  2:23  error  you must use double quotes in templates  quotes\n');
});

QUnit.test('employee-portal/templates/components/employee-list.hbs', function(assert) {
  assert.expect(1);
  assert.ok(true, 'employee-portal/templates/components/employee-list.hbs should pass TemplateLint.\n\n');
});

QUnit.test('employee-portal/templates/home.hbs', function(assert) {
  assert.expect(1);
  assert.ok(false, 'employee-portal/templates/home.hbs should pass TemplateLint.\n\nemployee-portal/templates/home.hbs\n  11:6  error  Incorrect indentation for `<li>` beginning at L11:C6. Expected `<li>` to be at an indentation of 4 but was found at 6.  block-indentation\n  8:18  error  you must use double quotes in templates  quotes\n');
});

QUnit.test('employee-portal/templates/index.hbs', function(assert) {
  assert.expect(1);
  assert.ok(true, 'employee-portal/templates/index.hbs should pass TemplateLint.\n\n');
});

