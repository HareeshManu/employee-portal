define('ember-cli-mirage/ember-data', ['exports', 'require', 'ember-get-config', 'ember-cli-mirage/assert', 'ember-cli-mirage/utils/ember-data', 'ember-cli-mirage'], function (exports, _require2, _emberGetConfig, _assert, _emberData, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getDsModels = getDsModels;
  exports.getModels = getModels;
  exports.modelFor = modelFor;


  const {
    modulePrefix,
    podModulePrefix
  } = _emberGetConfig.default;

  // Caches
  /* global requirejs */

  let DsModels, Models;

  /**
   * Get all ember data models under the app's namespaces
   *
   * @method getDsModels
   * @private
   * @hide
   * @return {Object} models
   */
  function getDsModels() {
    if (DsModels) {
      return DsModels;
    }

    let moduleMap = requirejs.entries;
    let classicModelMatchRegex = new RegExp(`^${modulePrefix}/models/(.*)$`, 'i');
    let podModelMatchRegex = new RegExp(`^${podModulePrefix}/(.*)/model$`, 'i');

    DsModels = {};

    if (!_emberData.hasEmberData) {
      return DsModels;
    }

    Object.keys(moduleMap).forEach(path => {
      let matches = path.match(classicModelMatchRegex) || path.match(podModelMatchRegex);
      if (matches && matches[1]) {
        let modelName = matches[1];

        let model = (0, _require2.default)(path, null, null, true).default;
        if ((0, _emberData.isDsModel)(model)) {
          DsModels[modelName] = model;
        }
      }
    });

    return DsModels;
  }

  /**
   * Get all mirage models for each of the ember-data models
   *
   * @method getModels
   * @private
   * @hide
   * @return {Object} models
   */
  function getModels() {
    if (Models) {
      return Models;
    }

    let emberDataModels = getDsModels();
    Models = {};

    Object.keys(emberDataModels).forEach(modelName => {
      let model = emberDataModels[modelName];
      let attrs = {};

      model.eachRelationship((name, r) => {
        if (r.kind === 'belongsTo') {
          attrs[name] = (0, _emberCliMirage.belongsTo)(r.type, r.options);
        } else if (r.kind === 'hasMany') {
          attrs[name] = (0, _emberCliMirage.hasMany)(r.type, r.options);
        }
      });

      Models[modelName] = _emberCliMirage.Model.extend(attrs);
    });

    return Models;
  }

  /**
   * A lookup method for an autogenerated model
   *
   * @method modelFor
   * @private
   * @param  {String} name
   * @return {Model}
   * @hide
   */
  function modelFor(name) {
    let models = getModels();
    (0, _assert.default)(!!models[name], `Model of type '${name}' does not exist.`);
    return models[name];
  }
});