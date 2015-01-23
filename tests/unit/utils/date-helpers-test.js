import { formatDate } from 'borrowers/utils/date-helpers';

module("Utils: formatDate");

test("formats a date object", function() {
  var date = new Date(2014, 10, 3);
  var result = formatDate(date, 'ddd MMM DD YYYY');

  equal(result, "Mon Nov 03 2014", "returns a human-readable string");
});
