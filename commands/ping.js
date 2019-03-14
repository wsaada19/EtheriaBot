const Discord = require('discord.js');
module.exports = {
		name: 'ping',
		description: "Returns the latency for the given bot",
		permission: "SEND_MESSAGE",
		execute(message, args){
				let ping = Math.floor(message.client.ping);

				let embededMessage = new Discord.RichEmbed()
				.setColor("#097F09")
				.setTitle("Pong!")
				.setDescription(`The current latency for Etheria Bot is ${ping}ms`);

				message.channel.send(embededMessage)
		},
};
