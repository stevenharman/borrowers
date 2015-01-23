import { formattedDateHelper } from 'borrowers/helpers/formatted-date';

module('FormattedDateHelper');

// Replace this with your real tests.
test("it works", function() {
  var date = new Date(2014, 10, 3);
  var result = formattedDateHelper(date, 'LL');

  equal(result, "November 3, 2014", "returns a human-readable string");
});
