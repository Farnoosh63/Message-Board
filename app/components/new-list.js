import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        author: this.get('author'),
        // inputtedDate: this.get('inputtedDate'),
        question: this.get('askQuestion'),
      };
      this.sendAction('save', params);
    }
  }
});
