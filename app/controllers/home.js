import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByName(param) {
      if (param !== '') {
         return this.store
        .query('employee', { name: param }).then((results) => {
          return { query: param, results: results };
        });
      } else {
        return this.store
        .findAll('employee').then((results) => {
          return { query: param, results: results };
        });
      }
    }
  }
});