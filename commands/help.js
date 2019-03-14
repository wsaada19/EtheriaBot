const Discord = require('discord.js');
module.exports = {
		name: 'help',
		description: 'Returns a list of commands the user has access to!',
		async execute(message, args) {
				let embededMessage = new Discord.RichEmbed()
				.setColor("#097F09")
				.setTitle("List of Commands");
				let commandList = message.client.commands;
				console.log(commandList);
				await commandList.forEach(cmd => {
						embededMessage.addField(cmd.name, cmd.description);
				});
				message.channel.send(embededMessage);
		},
	};
