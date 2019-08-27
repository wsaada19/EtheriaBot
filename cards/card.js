class Card {
		constructor(face, suite) {
			if (Card.faces().indexOf(face) == -1) {
					throw new Error("Invalid Face: " + face);
			}
			if (Card.suites().indexOf(suite) == -1) {
				throw new Error("Invalid Suite: " + suite);
			}
			this.face = face;
			this.suite = suite;
			this.imageRef = this.face.substring(0, 1) + this.suite.substring(0, 1);
		}

		static faces() {
				return [ 'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King' ];
		}

		static suites() {
				return [ 'Hearts', 'Spades', 'Diamonds', 'Clubs' ];
		}

		toString(){
				return `The ${this.face} of ${this.suite}`;
		}

		getImageUrl(){
				return `./PNG/${this.imageRef}.png`;
		}
}

module.exports = Card;
