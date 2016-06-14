import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    savedContact(params){
      var newContact = this.store.createRecord('contact', params);
      newContact.save();
        this.transitionTo('contact');
    }
  }
});
