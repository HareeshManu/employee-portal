'use strict';

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
define('employee-portal/tests/integration/components/employee-filter-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | employee-filter', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "hxZJ/MSH",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"employee-filter\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "xNeM3OEU",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"employee-filter\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('employee-portal/tests/integration/components/employee-list-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | employee-list', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "8kkOt3Qi",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"employee-list\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "4Y3ws0Uq",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"employee-list\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
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
define('employee-portal/tests/lint/templates.template.lint-test', [], function () {
  'use strict';

  QUnit.module('TemplateLint');

  QUnit.test('employee-portal/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'employee-portal/templates/application.hbs should pass TemplateLint.\n\nemployee-portal/templates/application.hbs\n  3:6  error  Incorrect indentation for `<h2>` beginning at L3:C6. Expected `<h2>` to be at an indentation of 4 but was found at 6.  block-indentation\n  6:6  error  Incorrect indentation for `{{#link-to}}` beginning at L6:C6. Expected `{{#link-to}}` to be at an indentation of 4 but was found at 6.  block-indentation\n  3:30  error  Incorrect indentation for `\n         Employee Portal \n      ` beginning at L3:C30. Expected `\n         Employee Portal \n      ` to be at an indentation of 8 but was found at 9.  block-indentation\n');
  });

  QUnit.test('employee-portal/templates/components/employee-filter.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'employee-portal/templates/components/employee-filter.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('employee-portal/templates/components/employee-list.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'employee-portal/templates/components/employee-list.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('employee-portal/templates/home.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'employee-portal/templates/home.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('employee-portal/templates/home/details.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'employee-portal/templates/home/details.hbs should pass TemplateLint.\n\nemployee-portal/templates/home/details.hbs\n  3:6  error  Incorrect indentation for `<table>` beginning at L3:C6. Expected `<table>` to be at an indentation of 4 but was found at 6.  block-indentation\n  24:12  error  Incorrect indentation for `table` beginning at L3:C6. Expected `</table>` ending at L24:C12 to be at an indentation of 6 but was found at 4.  block-indentation\n  4:6  error  Incorrect indentation for `<thead>` beginning at L4:C6. Expected `<thead>` to be at an indentation of 8 but was found at 6.  block-indentation\n  13:6  error  Incorrect indentation for `<tbody>` beginning at L13:C6. Expected `<tbody>` to be at an indentation of 8 but was found at 6.  block-indentation\n  5:6  error  Incorrect indentation for `<tr>` beginning at L5:C6. Expected `<tr>` to be at an indentation of 8 but was found at 6.  block-indentation\n  14:6  error  Incorrect indentation for `<tr>` beginning at L14:C6. Expected `<tr>` to be at an indentation of 8 but was found at 6.  block-indentation\n  15:10  error  Incorrect indentation for `<td>` beginning at L15:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  16:10  error  Incorrect indentation for `<td>` beginning at L16:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  17:10  error  Incorrect indentation for `<td>` beginning at L17:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  18:10  error  Incorrect indentation for `<td>` beginning at L18:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  19:10  error  Incorrect indentation for `<td>` beginning at L19:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  20:10  error  Incorrect indentation for `<td>` beginning at L20:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  21:10  error  Incorrect indentation for `<td>` beginning at L21:C10. Expected `<td>` to be at an indentation of 8 but was found at 10.  block-indentation\n  18:39  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('employee-portal/templates/home/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'employee-portal/templates/home/index.hbs should pass TemplateLint.\n\nemployee-portal/templates/home/index.hbs\n  5:2  error  Incorrect indentation for `{{employee-list}}` beginning at L5:C2. Expected `{{employee-list}}` to be at an indentation of 4 but was found at 2.  block-indentation\n  3:18  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('employee-portal/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'employee-portal/templates/index.hbs should pass TemplateLint.\n\n');
  });
});
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

  QUnit.test('unit/controllers/home/details-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/home/details-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/home/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/home/index-test.js should pass ESLint\n\n');
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

  QUnit.test('unit/routes/home/details-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home/details-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/home/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/rentals/details-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/rentals/details-test.js should pass ESLint\n\n');
  });
});
define('employee-portal/tests/test-helper', ['employee-portal/app', 'employee-portal/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('employee-portal/tests/unit/adapters/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define('employee-portal/tests/unit/controllers/home-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | home', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:home');
      assert.ok(controller);
    });
  });
});
define('employee-portal/tests/unit/controllers/home/details-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | home/details', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:home/details');
      assert.ok(controller);
    });
  });
});
define('employee-portal/tests/unit/controllers/home/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | home/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:home/index');
      assert.ok(controller);
    });
  });
});
define('employee-portal/tests/unit/models/employee-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | employee', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('employee', {});
      assert.ok(model);
    });
  });
});
define('employee-portal/tests/unit/models/home-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | home', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('home', {});
      assert.ok(model);
    });
  });
});
define('employee-portal/tests/unit/routes/home-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | home', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:home');
      assert.ok(route);
    });
  });
});
define('employee-portal/tests/unit/routes/home/details-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | home/details', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:home/details');
      assert.ok(route);
    });
  });
});
define('employee-portal/tests/unit/routes/home/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | home/index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:home/index');
      assert.ok(route);
    });
  });
});
define('employee-portal/tests/unit/routes/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('employee-portal/tests/unit/routes/rentals/details-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | rentals/details', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:rentals/details');
      assert.ok(route);
    });
  });
});
define('employee-portal/config/environment', [], function() {
  var prefix = 'employee-portal';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('employee-portal/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
