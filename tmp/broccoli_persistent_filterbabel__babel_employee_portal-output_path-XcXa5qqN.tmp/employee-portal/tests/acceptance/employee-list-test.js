define('employee-portal/tests/acceptance/employee-list-test', ['qunit', '@ember/test-helpers', 'ember-qunit'], function (_qunit, _testHelpers, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Acceptance | employee list', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);

    (0, _qunit.test)('visiting /', async function (assert) {
      await (0, _testHelpers.visit)('/');

      assert.equal((0, _testHelpers.currentURL)(), '/');
    });
  });
});