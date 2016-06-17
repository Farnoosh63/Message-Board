import Ember from 'ember';

export default Ember.Component.extend({
  favorite: Ember.inject.service(),

  numberOfAnswers: Ember.computed('list.answers', function() {
    return this.get('list.answers.[].length');
  }),
  actions: {
    addToFav(list) {
      this.get('favorite').add(list);
    }
  }
});
