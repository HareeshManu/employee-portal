define('employee-portal/mirage/config', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    this.namespace = '/api';

    let employees = [{
      type: 'employees',
      id: '1001',
      attributes: {
        userid: 1001,
        jobtitle: 'Project Mananger',
        firstname: 'Romin',
        lastname: 'Irani',
        preferredfullname: 'Romin Irani',
        employeecode: "E1",
        region: "EA",
        phonenumber: "408-1234567",
        emailaddress: "romin.k.irani@gmail.com",
        age: 30
      }
    }, {
      type: 'employees',
      id: '1002',
      attributes: {
        userid: 1002,
        jobtitle: 'Developer',
        firstname: 'manoj',
        lastname: 'kumar',
        preferredfullname: 'manoj kumar Irani',
        employeecode: "E2",
        region: "EA",
        phonenumber: "408-1234567",
        emailaddress: "manoj.k.irani@gmail.com",
        age: 34
      }
    }, {
      type: 'employees',
      id: '1003',
      attributes: {
        userid: 1003,
        jobtitle: 'Project Mananger',
        firstname: 'Karthik',
        lastname: 'krishnan',
        preferredfullname: 'karthik krishnan',
        employeecode: "E1",
        region: "EA",
        phonenumber: "408-1234567",
        emailaddress: "karthikrani@gmail.com",
        age: 28
      }
    }, {
      type: 'employees',
      id: '1004',
      attributes: {
        userid: 1004,
        jobtitle: 'Senoir Engineer',
        firstname: 'Neil',
        lastname: 'Irani',
        preferredfullname: 'Neil Irani',
        employeecode: "E1",
        region: "EA",
        phonenumber: "408-1234567",
        emailaddress: "Neil.k.irani@gmail.com",
        age: 26
      }
    }, {
      type: 'employees',
      id: '1005',
      attributes: {
        userid: 1005,
        jobtitle: 'Senoir SoftwareEngineer',
        firstname: 'Jame',
        lastname: 'Mathew',
        preferredfullname: 'Jame Mathew',
        employeecode: "E1",
        region: "EA",
        phonenumber: "408-1234567",
        emailaddress: "jamemathew@gmail.com",
        age: 29
      }
    }];

    this.get('/employees', function (db, request) {
      if (request.queryParams.name !== undefined) {
        let filterEmployee = employees.filter(function (i) {
          return i.attributes.preferredfullname.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
        });
        return { data: filterEmployee };
      } else {
        return { data: employees };
      }
    });

    this.get('/employees/:id', function (db, request) {
      return { data: employees.find(employee => request.params.id === employee.id) };
    });
  };
});