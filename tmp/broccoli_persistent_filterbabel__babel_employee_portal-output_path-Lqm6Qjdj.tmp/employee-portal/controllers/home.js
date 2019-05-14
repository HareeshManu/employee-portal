define('employee-portal/controllers/home', ['exports'], function (exports) {
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