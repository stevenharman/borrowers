import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['showReturned'],
  showReturned: true,

  filteredResults: Ember.computed('model.@each.state', 'showReturned', function() {
    if (this.showReturned) {
      return this;
    } else {
      return this.filterBy('state', 'borrowed');
    }
  }),

  contentDidChange: function() {
    console.log("Called when we add or remove an article.");
  }.observes('model.[]'),
  stateDidChange: function () {
    console.log("Called when the state property changes for any of the articles");
  }.observes('model.@each.state')
});
