const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
		name: 'help',
		description: 'Lists all bot commands the user has access to',
		permission: "SEND_MESSAGE",
		async execute(message, args) {
				let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
				let prefix = prefixes[message.channel.guild.id].prefixes;
				console.log(prefixes);
				let embededMessage = new Discord.RichEmbed()
				.setColor("#097F09")
				.setTitle("__**List of Commands**__");
				let commandList = message.client.commands;

				await commandList.forEach(cmd => {
						if(message.member.hasPermission(cmd.permission)){

								embededMessage.addField(`**${prefix}**${cmd.name}`, `**- **${cmd.description}`);
						}
				});
				message.channel.send(embededMessage);
		},
	};
