import Ember from 'ember';

export default Ember.Component.extend({
  updateArticleForm: false,
  actions: {
    updateArticleForm() {
      this.set('updateArticleForm', true);
    },
    update(rental) {
      var params = {
        author: this.get('author'),
        headline: this.get('headline'),
        content: this.get('content'),
        image: this.get('image'),
        stardate: this.get('stardate'),
        category: this.get('category'),
      };
      this.set('updateArticleForm', false);
      this.sendAction('update', article, params);
    }
  }
});
