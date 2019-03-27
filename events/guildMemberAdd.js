const Discord = require('discord.js');
const prefixes = require('../prefixes.json');
const fs = require('fs');

module.exports = (client, member) => {

		if(member.bot){return;}
		let config = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
		if(!config[member.guild.id].toggleOn){return;}

		const guild = client.guilds.get(member.guild.id);
		const role = guild.roles.find("name", "Member");
		const id = guild.id;
		member.setRoles([role.id]);

		let embededMessage = new Discord.embededMessage()
		.setColor("#097F09")
		.setTitle(`Welcome **${member.userName}** to **${guild.name}**!`)
		.setDescription(`Head on over to #server-information, to learn more about **${guild.name}** and read the rules for this server.
			Enter ${prefixes[id].prefixes}help to see a list of all available commands. If you're interested in joining the
			team, check out our open positions in #apply :grinning:`)
		.setThumbnail(guild.iconURL);

		let channel = guild.channels.get(config[member.guild.id].welcomeChannel);
		if(channel)
		{
				channel.send(embededMessage);
		} else {
				console.log("Welcome channel not found!");
		}



}
