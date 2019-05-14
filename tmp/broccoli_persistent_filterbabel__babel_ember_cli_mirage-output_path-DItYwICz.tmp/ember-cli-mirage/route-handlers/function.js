define('ember-cli-mirage/route-handlers/function', ['exports', 'ember-cli-mirage/route-handlers/base', 'ember-cli-mirage/assert', 'ember-cli-mirage/utils/inflector'], function (exports, _base, _assert, _inflector) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /**
   * @hide
   */
  class FunctionRouteHandler extends _base.default {

    constructor(schema, serializerOrRegistry, userFunction, path) {
      super();
      this.schema = schema;
      this.serializerOrRegistry = serializerOrRegistry;
      this.userFunction = userFunction;
      this.path = path;
    }

    handle(request) {
      return this.userFunction(this.schema, request);
    }

    setRequest(request) {
      this.request = request;
    }

    serialize(response, serializerType) {
      let serializer;

      if (serializerType) {
        serializer = this.serializerOrRegistry.serializerFor(serializerType, { explicit: true });
      } else {
        serializer = this.serializerOrRegistry;
      }

      return serializer.serialize(response, this.request);
    }

    normalizedRequestAttrs(modelName = null) {
      let {
        path,
        request,
        request: { requestHeaders }
      } = this;
      let attrs;

      let lowerCaseHeaders = {};
      for (let header in requestHeaders) {
        lowerCaseHeaders[header.toLowerCase()] = requestHeaders[header];
      }
      if (/x-www-form-urlencoded/.test(lowerCaseHeaders['content-type'])) {
        attrs = this._getAttrsForFormRequest(request);
      } else {
        if (modelName) {
          if ((0, _inflector.dasherize)(modelName) !== modelName) {
            // eslint-disable-next-line no-console
            console.warn(`Mirage [deprecation]: You called normalizedRequestAttrs('${modelName}'), but normalizedRequestAttrs was intended to be used with the dasherized version of the model type. Please change this to normalizedRequestAttrs('${(0, _inflector.dasherize)(modelName)}'). This behavior will be removed in 1.0.`);
            modelName = (0, _inflector.camelize)(modelName);
          }
        } else {
          modelName = this.getModelClassFromPath(path);
        }

        (0, _assert.default)(this.schema.hasModelForModelName(modelName), `You're using a shorthand or the #normalizedRequestAttrs helper but the detected model of '${modelName}' does not exist. You might need to pass in the correct modelName as the first argument to #normalizedRequestAttrs.`);

        attrs = this._getAttrsForRequest(request, modelName);
      }

      return attrs;
    }
  }
  exports.default = FunctionRouteHandler;
});