import DS from 'ember-data';

export default DS.Model.extend({
    userid: DS.attr(),
    jobtitle: DS.attr(),
    firstname: DS.attr(),
    lastname: DS.attr(),
    preferredfullname: DS.attr(),
    employeecode: DS.attr(),
    region: DS.attr(),
    phonenumber: DS.attr(),
    emailaddress: DS.attr(),
    age:DS.attr()
});
