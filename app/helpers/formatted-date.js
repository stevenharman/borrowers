import Ember from 'ember';
import { formatDate } from '../utils/date-helpers';

export default Ember.HTMLBars.makeBoundHelper(function(params, options) {
  var date = params[0];
  var format = options.format;

  return formatDate(date, format);
});
