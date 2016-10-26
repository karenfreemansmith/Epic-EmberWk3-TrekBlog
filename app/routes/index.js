import Ember from 'ember';

var articles = [{
  id: 1,
  author: "Admiral JT Kirk",
  content: "San Francisco",
  headline: "Reminder All Personnel: Prime Directive Still Matters",
  category: 1,
  image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg",
	stardate: "1"
}, {
  id: 2,
  author: "Cmdr William T Riker",
  content: "Seattle",
  headline: "Current Mission Update, Looking for Life near that Event Horizon",
  category: 2,
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg",
	stardate: "1"
},  {
  id: 2,
  author: "Capt Jean-Luc Picard",
  content: "Seattle",
  headline: "Ensure Your Phasers are on Stun and checked in",
  category: 3,
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg",
	stardate: "1"
},  {
  id: 2,
  author: "Guinan",
  content: "Seattle",
  headline: "Ask Guinan: how much time in the Holodeck seems like too much?",
  category: 4,
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg",
	stardate: "1"
},  {
  id: 2,
  author: "Chief Miles O'Brien",
  content: "Seattle",
  headline: "No Hide and Seek in the Transporter Room!",
  category: 5,
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg",
	stardate: "1"
},  {
  id: 2,
  author: "Dr. Beverly Crusher",
  content: "Feeling heavy lately? Maybe your mood isn't all that's pulling you down.",
  headline: "Anything can happen: stay prepared!",
  category: 6,
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg",
	stardate: "1"
},  {
  id: 2,
  author: "Lt Geordi LaForge",
  content: "Seattle",
  headline: "Maximize your Replicator credits",
  category: 7,
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg",
	stardate: "1"
}, {
  id: 3,
  author: "Ensign Barclay",
  content: "Portland",
  headline: "Holosweet?",
  category: 8,
  image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg",
	stardate: "3"
}];

export default Ember.Route.extend({
  model() {
    return articles;
  },
});
