import Ember from 'ember';

export default Ember.Controller.extend({
  queryParameters: ['show'],
  possibleStates: ['borrowed', 'returned'],
});
