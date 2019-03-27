const Discord = require('discord.js');
module.exports = {
		name: 'socialmedia',
		description: 'View our social media accounts',
		permission: "SEND_MESSAGES",
		execute(message, args){
			let embededMessage = new Discord.RichEmbed()
			.setColor("#0000FF")
			.addField("**Website**", "http://www.etheriagaming.com/")
			.addField("**Twitter**", "https://twitter.com/GamingEtheria");

		message.channel.send(embededMessage);
		}
}
