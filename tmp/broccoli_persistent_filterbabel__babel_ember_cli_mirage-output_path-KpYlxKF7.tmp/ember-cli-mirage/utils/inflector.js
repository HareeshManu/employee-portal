define('ember-cli-mirage/utils/inflector', ['exports', 'ember-inflector'], function (exports, _emberInflector) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'singularize', {
    enumerable: true,
    get: function () {
      return _emberInflector.singularize;
    }
  });
  Object.defineProperty(exports, 'pluralize', {
    enumerable: true,
    get: function () {
      return _emberInflector.pluralize;
    }
  });
  var capitalize = Ember.String.capitalize;
  var camelize = Ember.String.camelize;
  var dasherize = Ember.String.dasherize;
  var underscore = Ember.String.underscore;
  exports.capitalize = capitalize;
  exports.camelize = camelize;
  exports.dasherize = dasherize;
  exports.underscore = underscore;
});