import Ember from 'ember';

export default Ember.ObjectController.extend({
  hasDescription: Ember.computed.notEmpty('model.description'),
  hasNotes: Ember.computed.notEmpty('model.notes'),
  isValid: Ember.computed.and(
    'hasDescription',
    'hasNotes'
  ),
  actions: {
    save: function() {
      debugger;
      if (!this.get('isValid')) {
        this.set('errorMessage', "You have to fill out all the fields");
        return false;
      }

      return true;
    }
  }
});
