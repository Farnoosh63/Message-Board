import Ember from 'ember';

export default Ember.Component.extend({
  contactSend: false,
  actions: {
    contactSuccess() {
      this.set("contactSend", true);
    }
  }
});
