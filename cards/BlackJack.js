const Deck = require('./deck.js');

class BlackJack {
		constructor(){
				this.deck = new Deck();
				this.player = [];
				this.dealer = [];
				this.bet = 0;
		}

		deal(bet) {
				this.player.push(this.deck.draw());
				this.player.push(this.deck.draw());

				this.dealer.push(this.deck.draw());
				this.dealer.push(this.deck.draw());
		}

		showHand(){
			let embededMessage = new Discord.RichEmbed()
				.setColor("#097F09")
				.setDescription(`**${message.member.displayName}** has drawn the **${card.toString()}**!`)
				.attachFile(card.getImageUrl())
				.setImage(`attachment://${card.getImageUrl()}`);
		}

}
