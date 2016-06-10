import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    viewDetails() {

    },
    delete(list) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyList', list);
      }
    }
  }
});
