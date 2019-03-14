const Discord = require('discord.js');
module.exports = {
		name: 'info',
		description: 'Displays information about the current discord server',
		permission: 'SEND_MESSAGE',
		async execute(message, args) {
				let name = message.guild.name;
				let online = await message.guild.members.filter(m => m.presence.status === 'online').size;

				let size = message.guild.memberCount;
				let owner = message.guild.owner;
				let region = message.guild.region;
				let icon = message.guild.iconURL;
				let embededMessage = new Discord.RichEmbed()
				.setColor("#097F09")
				.addField("Server Name", name)
				.addField("Members Online", `There are **${online}** members online out of **${size}** total`)
				.addField("Server Owner", owner)
				.addField("Region", region)
				.setThumbnail(icon);

				message.channel.send(embededMessage);
		},
	};
