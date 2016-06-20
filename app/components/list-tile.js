import Ember from 'ember';

export default Ember.Component.extend({
  favorite: Ember.inject.service(),

  numberOfAnswers: Ember.computed('list.answers', function() {
    return this.get('list.answers.[].length');
  }),
  actions: {
    addToFav(list) {
      this.get('favorite').add(list);

  },
  delete(list){
    if (confirm('Are you sure you want to delete this question?')) {
      list.destroyRecord();
      // this.transitionTo('index');
    }
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
