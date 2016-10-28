import Ember from 'ember';

export default Ember.Route.extend({
  model() {
   return this.store.query('article', { orderBy: 'category', equalTo: "2" });
  },

});
