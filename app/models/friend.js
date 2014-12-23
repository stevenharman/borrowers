import DS from 'ember-data';

export default DS.Model.extend({
  articles: DS.hasMany('article', {async: true}),
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  totalArticles: DS.attr('number'),
  twitter: DS.attr('string'),
  fullName: function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }.property('firstName', 'lastName')
});
