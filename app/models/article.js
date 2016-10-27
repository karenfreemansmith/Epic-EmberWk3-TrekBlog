import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  headline: DS.attr(),
  content: DS.attr(),
  category: DS.attr(),
	stardate: DS.attr(),
  image: DS.attr(),
});
