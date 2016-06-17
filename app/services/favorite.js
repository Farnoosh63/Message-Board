import Ember from 'ember';

export default Ember.Service.extend({
  lists: [],

  add(list) {
    this.get('lists').pushObject(list);
  }
});
