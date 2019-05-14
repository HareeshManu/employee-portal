define('employee-portal/routes/home/details', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        model(params) {
            return this.store.findRecord('employee', params.id);
        }
    });
});