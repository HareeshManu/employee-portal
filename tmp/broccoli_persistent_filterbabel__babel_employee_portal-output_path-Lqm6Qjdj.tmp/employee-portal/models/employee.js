define('employee-portal/models/employee', ['exports', 'ember-data'], function (exports, _emberData) {
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