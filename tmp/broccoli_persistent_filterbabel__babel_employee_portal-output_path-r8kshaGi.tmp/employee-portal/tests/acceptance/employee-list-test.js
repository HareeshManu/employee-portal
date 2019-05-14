define('employee-portal/tests/acceptance/employee-list-test', ['qunit', '@ember/test-helpers', 'ember-qunit', 'ember-cli-mirage/test-support/setup-mirage'], function (_qunit, _testHelpers, _emberQunit, _setupMirage) {
  'use strict';

  (0, _qunit.module)('Acceptance | employee list', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _setupMirage.default)(hooks);

    (0, _qunit.test)('should show employee home as the home page', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/home', 'should redirect automatically to home page');
    });
    (0, _qunit.test)('should show employee home page when use /home', async function (assert) {
      await (0, _testHelpers.visit)('/home');
      assert.equal((0, _testHelpers.currentURL)(), '/home', 'should redirect to home page');
    });

    (0, _qunit.test)('should list available rentals.', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal(this.element.querySelectorAll('.listing').length, 5, 'should display 5 listings');
    });
  });
});