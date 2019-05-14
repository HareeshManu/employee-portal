define('ember-cli-mirage/route-handlers/base', ['exports', 'ember-cli-mirage/assert', 'ember-cli-mirage/utils/inflector', 'ember-cli-mirage/orm/associations/has-many'], function (exports, _assert, _inflector, _hasMany) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const PATH_VAR_REGEXP = /^:/;

  /**
    @hide
  */
  class BaseRouteHandler {

    getModelClassFromPath(fullPath) {
      if (!fullPath) {
        return;
      }
      let path = fullPath.split('/');
      let lastPath;
      while (path.length > 0) {
        lastPath = path.splice(-1)[0];
        if (lastPath && !PATH_VAR_REGEXP.test(lastPath)) {
          break;
        }
      }
      let modelName = (0, _inflector.dasherize)((0, _inflector.camelize)((0, _inflector.singularize)(lastPath)));

      return modelName;
    }

    _getIdForRequest(request, jsonApiDoc) {
      let id;
      if (request && request.params && request.params.id) {
        id = request.params.id;
      } else if (jsonApiDoc && jsonApiDoc.data && jsonApiDoc.data.id) {
        id = jsonApiDoc.data.id;
      }
      return id;
    }

    _getJsonApiDocForRequest(request, modelName) {
      let body;
      if (request && request.requestBody) {
        body = JSON.parse(request.requestBody);
      }
      return this.serializerOrRegistry.normalize(body, modelName);
    }

    _getAttrsForRequest(request, modelName) {
      let json = this._getJsonApiDocForRequest(request, modelName);
      let id = this._getIdForRequest(request, json);
      let attrs = {};

      (0, _assert.default)(json.data && (json.data.attributes || json.data.type || json.data.relationships), `You're using a shorthand or #normalizedRequestAttrs, but your serializer's normalize function did not return a valid JSON:API document. http://www.ember-cli-mirage.com/docs/v0.3.x/serializers/#normalizejson`);

      if (json.data.attributes) {
        attrs = Object.keys(json.data.attributes).reduce((sum, key) => {
          sum[(0, _inflector.camelize)(key)] = json.data.attributes[key];
          return sum;
        }, {});
      }

      if (json.data.relationships) {
        Object.keys(json.data.relationships).forEach(relationshipName => {
          let relationship = json.data.relationships[relationshipName];
          let modelClass = this.schema.modelClassFor(modelName);
          let association = modelClass.associationFor((0, _inflector.camelize)(relationshipName));
          let valueForRelationship;

          (0, _assert.default)(association, `You're passing the relationship '${relationshipName}' to the '${modelName}' model via a ${request.method} to '${request.url}', but you did not define the '${relationshipName}' association on the '${modelName}' model. http://www.ember-cli-mirage.com/docs/v0.4.x/models/#associations`);

          if (association.isPolymorphic) {
            valueForRelationship = relationship.data;
          } else if (association instanceof _hasMany.default) {
            valueForRelationship = relationship.data && relationship.data.map(rel => rel.id);
          } else {
            valueForRelationship = relationship.data && relationship.data.id;
          }

          attrs[association.identifier] = valueForRelationship;
        }, {});
      }

      if (id) {
        attrs.id = id;
      }

      return attrs;
    }

    _getAttrsForFormRequest({ requestBody }) {
      let attrs;
      let urlEncodedParts = [];

      (0, _assert.default)(requestBody && typeof requestBody === 'string', `You're using the helper method #normalizedFormData, but the request body is empty or not a valid url encoded string.`);

      urlEncodedParts = requestBody.split('&');

      attrs = urlEncodedParts.reduce((a, urlEncodedPart) => {
        let [key, value] = urlEncodedPart.split('=');
        a[key] = decodeURIComponent(value.replace(/\+/g, ' '));
        return a;
      }, {});

      return attrs;
    }
  }
  exports.default = BaseRouteHandler;
});