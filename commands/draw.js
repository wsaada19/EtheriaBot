const Deck = require('../cards/deck.js');
const Discord = require('discord.js');

module.exports = {
		name: 'draw',
		description: 'Draw a ramdom card from the deck!',
		permission: 'SEND_MESSAGE',
		execute(message, args){
				if(!message.member.hasPermission("SEND_MESSAGE")){return;}

				let deck = new Deck().shuffle();
				let card = deck.draw();

				let embededMessage = new Discord.RichEmbed()
					.setColor("#097F09")
					.setDescription(`**${message.member.displayName}** has drawn the **${card.toString()}**!`);

					message.channel.send(embededMessage);

		}
}
