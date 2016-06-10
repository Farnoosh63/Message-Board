import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      lists: this.store.findAll('list');
      answers: this.store.findAll('answer');
    });
  },
  actions: {
    destroyList(list){
      list.destroyRecord();
    },
    save(params) {
      var newQuestion = this.store.createRecord('list', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
