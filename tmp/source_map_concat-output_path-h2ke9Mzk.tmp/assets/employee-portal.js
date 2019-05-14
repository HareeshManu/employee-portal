'use strict';



;define('employee-portal/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.JSONAPIAdapter.extend({
        namespace: 'api'
    });
});
;define('employee-portal/app', ['exports', 'employee-portal/resolver', 'ember-load-initializers', 'employee-portal/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('employee-portal/components/employee-filter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    classNames: ['employee-filter'],
    value: '',

    init() {
      this._super(...arguments);
      this.filter('').then(allResults => {
        this.set('results', allResults.results);
      });
    },

    actions: {
      handleFilterEntry() {
        debugger;
        let filterInputValue = this.value;
        let filterAction = this.filter;
        filterAction(filterInputValue).then(filterResults => {
          if (filterResults.query === this.value) {
            this.set('results', filterResults.results);
          }
        });
      }
    }

  });
});
;define('employee-portal/components/employee-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
;define('employee-portal/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('employee-portal/controllers/home', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    actions: {
      filterByName(param) {
        debugger;
        if (param !== '') {
          return this.store.query('employee', { city: param }).then(results => {
            return { query: param, results: results };
          });
        } else {
          return this.store.findAll('employee').then(results => {
            return { query: param, results: results };
          });
        }
      }
    }
  });
});
;define('employee-portal/helpers/app-version', ['exports', 'employee-portal/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('employee-portal/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('employee-portal/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define('employee-portal/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'employee-portal/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('employee-portal/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('employee-portal/initializers/ember-cli-mirage', ['exports', 'employee-portal/config/environment', 'employee-portal/mirage/config', 'ember-cli-mirage/get-rfc232-test-context', 'ember-cli-mirage/start-mirage'], function (exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;
  exports.default = {
    name: 'ember-cli-mirage',
    initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, { instantiate: false });
      }
      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, { instantiate: false });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};
      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage(env = _environment.default) {
    return (0, _startMirage.default)(null, { env, baseConfig: _config.default, testConfig: _config.testConfig });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }
    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    let defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
;define('employee-portal/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('employee-portal/initializers/export-application-global', ['exports', 'employee-portal/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define('employee-portal/instance-initializers/ember-cli-mirage-autostart', ['exports', 'ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart'], function (exports, _emberCliMirageAutostart) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
;define('employee-portal/instance-initializers/ember-data', ['exports', 'ember-data/initialize-store-service'], function (exports, _initializeStoreService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
});
;define('employee-portal/mirage/config', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    this.namespace = '/api';

    let employees = [{
      type: 'employees',
      id: '1',
      attributes: {
        userid: 1001,
        jobtitle: 'Project Mananger',
        firstname: 'Romin',
        lastname: 'Irani',
        preferredfullname: 'Romin Irani',
        employeecode: "E1",
        region: "EA",
        phonenumber: "408-1234567",
        emailaddress: "romin.k.irani@gmail.com"
      }
    }, {
      type: 'employees',
      id: '2',
      attributes: {
        userid: 1002,
        jobtitle: 'Developer',
        firstname: 'manoj',
        lastname: 'kumar',
        preferredfullname: 'manoj kumar Irani',
        employeecode: "E2",
        region: "EA",
        phonenumber: "408-1234567",
        emailaddress: "manoj.k.irani@gmail.com"
      }
    }, {
      type: 'employees',
      id: '3',
      attributes: {
        userid: 1003,
        jobtitle: 'Project Mananger',
        firstname: 'Karthik',
        lastname: 'krishnan',
        preferredfullname: 'karthik krishnan',
        employeecode: "E1",
        region: "EA",
        phonenumber: "408-1234567",
        emailaddress: "karthikrani@gmail.com"
      }
    }, {
      type: 'employees',
      id: '4',
      attributes: {
        userid: 1004,
        jobtitle: 'Senoir Engineer',
        firstname: 'Neil',
        lastname: 'Irani',
        preferredfullname: 'Neil Irani',
        employeecode: "E1",
        region: "EA",
        phonenumber: "408-1234567",
        emailaddress: "Neil.k.irani@gmail.com"
      }
    }, {
      type: 'employees',
      id: '5',
      attributes: {
        userid: 1005,
        jobtitle: 'Senoir SoftwareEngineer',
        firstname: 'Jame',
        lastname: 'Mathew',
        preferredfullname: 'Jame Mathew',
        employeecode: "E1",
        region: "EA",
        phonenumber: "408-1234567",
        emailaddress: "jamemathew@gmail.com"
      }
    }];

    this.get('/employees', function (db, request) {
      debugger;
      if (request.queryParams.name !== undefined) {
        let filterEmployee = employees.filter(function (i) {
          return i.attributes.preferredfullname.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
        });
        return { data: filterEmployee };
      } else {
        return { data: employees };
      }
    });
  };
});
;define("employee-portal/mirage/scenarios/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () /* server */{

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */

    // server.createList('post', 10);
  };
});
;define('employee-portal/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.JSONAPISerializer.extend({});
});
;define('employee-portal/models/employee', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.Model.extend({
        userid: _emberData.default.attr(),
        jobtitle: _emberData.default.attr(),
        firstname: _emberData.default.attr(),
        lastname: _emberData.default.attr(),
        preferredfullname: _emberData.default.attr(),
        employeecode: _emberData.default.attr(),
        region: _emberData.default.attr(),
        phonenumber: _emberData.default.attr(),
        emailaddress: _emberData.default.attr()
    });
});
;define('employee-portal/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('employee-portal/router', ['exports', 'employee-portal/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('home');
  });

  exports.default = Router;
});
;define('employee-portal/routes/home', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model() {
            return this.store.findAll('employee');
        }
    });
});
;define('employee-portal/routes/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        beforeModel() {
            this.replaceWith('home');
        }
    });
});
;define('employee-portal/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("employee-portal/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "HjWpTbUF", "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"menu\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"      \"],[7,\"h1\"],[9],[0,\"\\n        \"],[7,\"em\"],[9],[0,\"Employee Portal App\"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"body\"],[9],[0,\"\\n    \"],[1,[21,\"outlet\"],false],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "employee-portal/templates/application.hbs" } });
});
;define("employee-portal/templates/components/employee-filter", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "f3SMKYa5", "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[27,\"input\",null,[[\"value\",\"key-up\",\"class\",\"placeholder\"],[[23,[\"value\"]],[27,\"action\",[[22,0,[]],\"handleFilterEntry\"],null],\"light\",\"Filter By Name\"]]],false],[0,\"\\n\"],[14,1,[[23,[\"results\"]]]]],\"hasEval\":false}", "meta": { "moduleName": "employee-portal/templates/components/employee-filter.hbs" } });
});
;define("employee-portal/templates/components/employee-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "SF9ZDbq8", "block": "{\"symbols\":[\"employee\"],\"statements\":[[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n  \"],[7,\"h2\"],[9],[0,\"Employee Table\"],[10],[0,\"         \\n  \"],[7,\"table\"],[11,\"class\",\"table\"],[9],[0,\"\\n    \"],[7,\"thead\"],[9],[0,\"\\n      \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"User ID\"],[10],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"Employee Name\"],[10],[0,\"\\n        \"],[7,\"th\"],[9],[0,\"Email\"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"employees\"]]],null,{\"statements\":[[0,\"        \"],[7,\"tr\"],[11,\"class\",\"listing\"],[9],[0,\"\\n          \"],[7,\"td\"],[9],[1,[22,1,[\"userid\"]],false],[10],[0,\"\\n          \"],[7,\"td\"],[9],[1,[22,1,[\"preferredfullname\"]],false],[10],[0,\"\\n          \"],[7,\"td\"],[9],[1,[22,1,[\"emailaddress\"]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}", "meta": { "moduleName": "employee-portal/templates/components/employee-list.hbs" } });
});
;define("employee-portal/templates/home", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mkev9qf7", "block": "{\"symbols\":[\"filteredResults\"],\"statements\":[[7,\"div\"],[11,\"class\",\"jumbo\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"right tomster\"],[9],[10],[0,\"\\n  \"],[7,\"h2\"],[9],[0,\"Welcome to Employee Portal\"],[10],[0,\"\\n  \"],[7,\"p\"],[9],[0,\"You will find you employee details here!\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[4,\"employee-filter\",null,[[\"filter\"],[[27,\"action\",[[22,0,[]],\"filterByName\"],null]]],{\"statements\":[[0,\"  \"],[7,\"ul\"],[11,\"class\",\"results\"],[9],[0,\"\\n      \"],[7,\"li\"],[9],[1,[27,\"employee-list\",null,[[\"employees\"],[[22,1,[]]]]],false],[10],[0,\"\\n  \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "employee-portal/templates/home.hbs" } });
});
;define("employee-portal/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "x6QANJ+M", "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "employee-portal/templates/index.hbs" } });
});
;define('employee-portal/tests/mirage/mirage.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | mirage');

  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'mirage/config.js should pass ESLint\n\n81:3 - Unexpected \'debugger\' statement. (no-debugger)');
  });

  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});
;

;define('employee-portal/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("employee-portal/app")["default"].create({"name":"employee-portal","version":"0.0.0+2e2c00e1"});
          }
        
//# sourceMappingURL=employee-portal.map
