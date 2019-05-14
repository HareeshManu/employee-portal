import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
module('Acceptance | employee list', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  
  test('should show employee home as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/home', 'should redirect automatically to home page');
  });
  test('should show employee home page when use /home', async function (assert) {
    await visit('/home');
    assert.equal(currentURL(), '/home', 'should redirect to home page');
  });
  
  test('should list available rentals.', async function(assert) {
    await visit('/');
    assert.equal(this.element.querySelectorAll('.listing').length, 5, 'should display 5 listings');
  });


});
