import Ember from 'ember';

export default Ember.Component.extend({
  var params: {
    answerAuthor: this.get('answerAuthor'),
    statement: this.get('statement')
  }
  this.sendAction('save', params);
});
