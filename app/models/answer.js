import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  answerAuthor: DS.attr(),
  statement: DS.attr(),
  list: DS.belongsTo('list', {async: true})
});
