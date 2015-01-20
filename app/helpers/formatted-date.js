import Ember from 'ember';
import { formatDate } from '../utils/date-helpers';

export default Ember.Handlebars.makeBoundHelper(function(date, format, options) {
  return formatDate(date, format);
});
