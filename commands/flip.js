const Discord = require('discord.js');
module.exports = {
		name: "flip",
		description: "Flip a coin to land either heads or tails",
		execute(message, args){
				let userName = message.author.username;

				let random = Math.random();
				let res = (random > .5) ? "Heads":"Tails";

				let embededMessage = new Discord.RichEmbed()
				.setColor("#097F09")
				.setTitle(`**${userName}** has flipped **${res}**!`);

				message.channel.send(embededMessage);
		}
}
