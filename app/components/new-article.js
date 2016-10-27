import Ember from 'ember';

export default Ember.Component.extend({
  addNewArticle: false,
  actions: {
    articleFormShow() {
      this.set('addNewArticle', true);
    },
    createArticle() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        headline: this.get('headline') ? this.get('headline') : "",
        content: this.get('content') ? this.get('content') : "",
        category: this.get('category' ? this.get('category') : '8'),
        stardate: this.get('stardate') ? this.get('stardate') : "",
        image: this.get('image') ? this.get('image') : "",
      };
      this.set('addNewArticle', false);
      this.sendAction('createArticle', params);
    }
  }
});
