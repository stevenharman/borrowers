import Ember from 'ember';

export default Ember.ArrayController.extend({
  contentDidChange: function() {
    console.log("Called when we add or remove an article.");
  }.observes('model.[]'),
  stateDidChange: function () {
    console.log("Called when the state property changes for any of the articles");
  }.observes('model.@each.state')
});
