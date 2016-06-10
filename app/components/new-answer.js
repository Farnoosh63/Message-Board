import Ember from 'ember';

export default Ember.Component.extend({

actions: {
  save(){
    var params= {
      answerAuthor: this.get('answerAuthor'),
      statement: this.get('statement'),
      list: this.get('list')
    };
    this.sendAction('save', params);
    }
  }
});
