QUnit.test('employee-portal/templates/application.hbs', function(assert) {
  assert.expect(1);
  assert.ok(false, 'employee-portal/templates/application.hbs should pass TemplateLint.\n\nemployee-portal/templates/application.hbs\n  3:6  error  Incorrect indentation for `<h2>` beginning at L3:C6. Expected `<h2>` to be at an indentation of 4 but was found at 6.  block-indentation\n  6:6  error  Incorrect indentation for `{{#link-to}}` beginning at L6:C6. Expected `{{#link-to}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  3:30  error  Incorrect indentation for `\n         Employee Portal \n      ` beginning at L3:C30. Expected `\n         Employee Portal \n      ` to be at an indentation of 8 but was found at 9.  block-indentation\n');
});
