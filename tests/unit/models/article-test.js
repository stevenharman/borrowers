import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('article', 'Article', {
  // Specify the other units that are required for this test.
  needs: ['model:friend']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
