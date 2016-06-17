import Ember from 'ember';

export default Ember.Service.extend({
  lists: [],

  add(list) {
    if(this.get('favoriteMax')){
      alert('You have the maximum number of favorite in your list, in order to add one please remove the existing from the list');
    }else {
      this.get('lists').pushObject(list);
    }
  },
  remove(list) {
    this.get('lists').removeObject(list);
  },

  includes(lists){
    return this.get('lists').includes(list);
  },
  
  favoriteMax: Ember.computed.gte('lists.length', 3)
});
