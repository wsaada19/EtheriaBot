const Card = require('./card.js');

let cards;
// create the deck
function Deck(){
		var self = this;
		cards = new Array();
		Card.suites().forEach(function(suite) {
				Card.faces().forEach(function(face) {
						cards.push(new Card(face, suite));
				});
		});
}

Deck.prototype.constructor = Deck;

Deck.prototype.draw = function() {
		return cards.pop();
}

Deck.prototype.shuffle = function() {
	for (var j, x, i = cards.length; i; j = Math.floor(Math.random() * i), x = cards[--i], cards[i] = cards[j], cards[j] = x);

	return this;
}

module.exports = Deck;
