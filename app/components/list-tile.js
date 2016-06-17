import Ember from 'ember';

export default Ember.Component.extend({
  favorite: Ember.inject.service(),
  actions: {
    addToFav(list) {
      this.get('favorite').add(list);
    }
  }
});
