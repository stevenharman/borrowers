import Ember from 'ember';
import { formatDate } from '../utils/date-helpers';

var formattedDateHelper = function(date, format) {
  return formatDate(date, format);
};

export { formattedDateHelper };

export default Ember.Handlebars.makeBoundHelper(formattedDateHelper);
