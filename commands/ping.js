const Discord = require('discord.js');
module.exports = {
		name: 'ping',
		description: "Check the latency for this bot",
		permission: "SEND_MESSAGES",
		execute(message, args){
				let ping = Math.floor(message.client.ping);

				let embededMessage = new Discord.RichEmbed()
				.setColor("#097F09")
				.setTitle("Pong!")
				.setDescription(`The current latency for Etheria Bot is ${ping}ms`);

				message.channel.send(embededMessage)
		},
};
