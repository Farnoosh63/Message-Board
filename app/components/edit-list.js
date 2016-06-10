import Ember from 'ember';

export default Ember.Component.extend({
  editQuestion: false,
  editQuestionFormHide: false,
  actions: {
    editQuestionFormShow() {
      this.set('editQuestion', true);
    },
    editQuestionFormHide() {
      this.set('editQuestion', false);
    },
    save(list){
      var params = {
        author: this.get('author'),
        date: this.get('date'),
        question: this.get('question'),
      };
      this.set('editQuestion', false);
      this.sendAction('editList',list, params);
    }
  }
});
