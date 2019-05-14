import Controller from '@ember/controller';
export default Controller.extend({

    actions: {
        saveEmployee() {
          let employee = this.get('model');
          let dataObj={
              firstName:employee.get('firstname'),
              lastName:employee.get('lastname'),
              fullName:employee.get('preferredfullname'),
              age:employee.get('age')
          }
          console.log("The Updated User Details",dataObj);
        },
        cancelSave() {
                let data = this.get('model.data')
                this.set('model.firstname',data.firstname);
                this.set('model.lastname',data.lastname);
                this.set('model.fullname',data.preferredfullname);
                this.set('model.age',data.age);
                this.transitionToRoute('home');
        }
      }
});
