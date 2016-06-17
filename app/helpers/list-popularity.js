import Ember from 'ember';

export function listPopularity(params) {
  var question = params[0];
  var popularity;
  if(question.get('answers').get('length') >=3) {
    popularity = Ember.String.htmlSafe('<span class="glyphicon glyphicon-heart"></span>  popular ');
  }else {
    popularity = Ember.String.htmlSafe('<span class="glyphicon glyphicon-hand-up"></span>  need answer ');
  }
  return popularity;
}

export default Ember.Helper.helper(listPopularity);
