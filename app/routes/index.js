import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      lists: this.store.findAll('list'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    delete(list){
      if (confirm('Are you sure you want to delete this question?')) {
        var list_deletions = list.get('answers').map(function(answer) {
          return answer.destroyRecord();
        });
        Ember.RSVP.all(list_deletions).then(function() {
          return list.destroyRecord();
        });
        this.transitionTo('index');
      }

    },
    save(params) {
      var newQuestion = this.store.createRecord('list', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    editList(list, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          list.set(key, params[key]);
        }
      });
      list.save();
      this.transitionTo('index');
    },
    saveContact(contactParams){
      var newContact = this.store.createRecord('contact', contactParams);
      newContact.save();
      this.transitionTo('contact');
    }
  }
});
