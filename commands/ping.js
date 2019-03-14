const Discord = require('discord.js');
module.exports = {
		name: 'ping',
		description: "Returns Pong, tests that the bot is working properly!",
		execute(message, args){
				let embededMessage = new Discord.RichEmbed()
				.setColor("#097F09")
				.setTitle("Pong!")
				.setDescription(`The current latency for Etheria Bot is ${message.client.ping}ms`);

				message.channel.send(embededMessage)
		},
};
