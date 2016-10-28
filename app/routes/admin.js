import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },

  actions: {
    createArticle(params) {
      var createArticle = this.store.createRecord('article', params);
      createArticle.save();
      this.transitionTo('admin');
    },
    update(article, params) {
      article.save();
      this.transitionTo('admin');
    },
    delete(article) {
      if (confirm('Are you sure you want to delete this article?')) {
        article.destroyRecord();
        this.transitionTo('admin');
      }
    }

  }
});
