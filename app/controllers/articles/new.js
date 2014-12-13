import Ember from 'ember';

export default Ember.ObjectController.extend({
  isValid: Ember.computed(
    'model.description',
    'model.notes',
    function() {
      return !Ember.isEmpty(this.get('model.description')) &&
        !Ember.isEmpty(this.get('model.notes'))
    }
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
