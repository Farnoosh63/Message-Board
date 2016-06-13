import Ember from 'ember';

export default Ember.Component.extend({
  contactSend: false,
  actions: {
    contactSuccess() {
      this.set("contactSend", true);
      // this is where you would send your save action upwards to the route handler
    }
  }
});
