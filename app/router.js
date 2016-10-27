import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('starfleet');
  this.route('bridge');
  this.route('sickbay');
  this.route('transporter');
  this.route('engineering');
  this.route('readyroom');
  this.route('tenforward');
  this.route('personallog');
  this.route('article', {path: '/article/:article_id'});
  this.route('admin');
  this.route('about');
  this.route('contact');
});

export default Router;
