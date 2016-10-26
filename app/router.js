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
});

export default Router;
