define('employee-portal/tests/acceptance/employee-list-test', ['qunit', '@ember/test-helpers', 'ember-qunit'], function (_qunit, _testHelpers, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Acceptance | employee list', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);

    (0, _qunit.test)('The home page should be the first page', async function (assert) {});
    (0, _qunit.test)('should show employee details', async function (assert) {});

    // test('visiting /', async function(assert) {
    //   await visit('/');

    //   assert.equal(currentURL(), '/');
    // });
  });
});