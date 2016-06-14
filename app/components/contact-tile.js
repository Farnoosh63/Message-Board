import Ember from 'ember';
// import moment from 'moment';


export default Ember.Component.extend({
  contactSend: false,
  actions: {
    saveContact() {
      var params= {
        name: this.get('name'),
        lastName: this.get('lastName'),
        email: this.get('email'),
        phone: this.get('phone'),
        // date: moment().format(),
        address:this.get('address'),
        city:this.get('city'),
        zip:this.get('zip'),
        website:this.get('website'),
        // hosting:this.get('hosting'),
        comment:this.get('comment'),
      };
      this.set("contactSend", true);
      this.sendAction('savedContact', params);
      // this is where you would send your save action upwards to the route handler
    }
  }
});
