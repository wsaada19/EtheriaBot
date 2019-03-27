const Discord = require('discord.js');
module.exports = {
		name: 'help',
		description: 'Lists all bot commands the user has access to',
		permission: "SEND_MESSAGE",
		async execute(message, args) {
				let embededMessage = new Discord.RichEmbed()
				.setColor("#097F09")
				.setTitle("List of Commands");
				let commandList = message.client.commands;

				await commandList.forEach(cmd => {
						if(message.member.hasPermission(cmd.permission)){
								embededMessage.addField(cmd.name, cmd.description);
						}
				});
				message.channel.send(embededMessage);
		},
	};
