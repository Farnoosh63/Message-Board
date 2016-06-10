import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('list', params.list_id);
  },
  actions: {
    save(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var list = params.list;
      list.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        return list.save();
      });
      this.transitionTo('list', params.list);
    },
    editList(list, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          list.set(key, params[key]);
        }
      });
      list.save();
      this.transitionTo('index');
    }
  }
});
