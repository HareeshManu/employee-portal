QUnit.module('TemplateLint');

QUnit.test('employee-portal/templates/application.hbs', function(assert) {
  assert.expect(1);
  assert.ok(false, 'employee-portal/templates/application.hbs should pass TemplateLint.\n\nemployee-portal/templates/application.hbs\n  3:6  error  Incorrect indentation for `<h2>` beginning at L3:C6. Expected `<h2>` to be at an indentation of 4 but was found at 6.  block-indentation\n  6:6  error  Incorrect indentation for `{{#link-to}}` beginning at L6:C6. Expected `{{#link-to}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  3:30  error  Incorrect indentation for `\n         Employee Portal \n      ` beginning at L3:C30. Expected `\n         Employee Portal \n      ` to be at an indentation of 8 but was found at 9.  block-indentation\n');
});

QUnit.test('employee-portal/templates/components/employee-filter.hbs', function(assert) {
  assert.expect(1);
  assert.ok(true, 'employee-portal/templates/components/employee-filter.hbs should pass TemplateLint.\n\n');
});

QUnit.test('employee-portal/templates/components/employee-list.hbs', function(assert) {
  assert.expect(1);
  assert.ok(true, 'employee-portal/templates/components/employee-list.hbs should pass TemplateLint.\n\n');
});

QUnit.test('employee-portal/templates/home.hbs', function(assert) {
  assert.expect(1);
  assert.ok(true, 'employee-portal/templates/home.hbs should pass TemplateLint.\n\n');
});

QUnit.test('employee-portal/templates/home/details.hbs', function(assert) {
  assert.expect(1);
  assert.ok(false, 'employee-portal/templates/home/details.hbs should pass TemplateLint.\n\nemployee-portal/templates/home/details.hbs\n  3:6  error  Incorrect indentation for `<table>` beginning at L3:C6. Expected `<table>` to be at an indentation of 4 but was found at 6.  block-indentation\n  24:12  error  Incorrect indentation for `table` beginning at L3:C6. Expected `</table>` ending at L24:C12 to be at an indentation of 6 but was found at 4.  block-indentation\n  4:6  error  Incorrect indentation for `<thead>` beginning at L4:C6. Expected `<thead>` to be at an indentation of 8 but was found at 6.  block-indentation\n  13:6  error  Incorrect indentation for `<tbody>` beginning at L13:C6. Expected `<tbody>` to be at an indentation of 8 but was found at 6.  block-indentation\n  5:6  error  Incorrect indentation for `<tr>` beginning at L5:C6. Expected `<tr>` to be at an indentation of 8 but was found at 6.  block-indentation\n  14:6  error  Incorrect indentation for `<tr>` beginning at L14:C6. Expected `<tr>` to be at an indentation of 8 but was found at 6.  block-indentation\n  15:10  error  Incorrect indentation for `<td>` beginning at L15:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  16:10  error  Incorrect indentation for `<td>` beginning at L16:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  17:10  error  Incorrect indentation for `<td>` beginning at L17:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  18:10  error  Incorrect indentation for `<td>` beginning at L18:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  19:10  error  Incorrect indentation for `<td>` beginning at L19:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  20:10  error  Incorrect indentation for `<td>` beginning at L20:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  21:10  error  Incorrect indentation for `<td>` beginning at L21:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  18:39  error  you must use double quotes in templates  quotes\n');
});

QUnit.test('employee-portal/templates/home/index.hbs', function(assert) {
  assert.expect(1);
  assert.ok(false, 'employee-portal/templates/home/index.hbs should pass TemplateLint.\n\nemployee-portal/templates/home/index.hbs\n  5:2  error  Incorrect indentation for `{{employee-list}}` beginning at L5:C2. Expected `{{employee-list}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  3:18  error  you must use double quotes in templates  quotes\n');
});

QUnit.test('employee-portal/templates/index.hbs', function(assert) {
  assert.expect(1);
  assert.ok(true, 'employee-portal/templates/index.hbs should pass TemplateLint.\n\n');
});

