import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  phone:DS.attr(),
  // date:DS.attr(),
  address:DS.attr(),
  city:DS.attr(),
  zip:DS.attr(),
  website:DS.attr(),
  // hosting:DS.attr(),
  comment:DS.attr()
});
