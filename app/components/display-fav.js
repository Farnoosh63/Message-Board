import Ember from 'ember';

export default Ember.Component.extend({
  favorite: Ember.inject.service(),
  actions: {
    removeFromFav(list){
       this.get('favorite').remove(list);
     }
  }
});
