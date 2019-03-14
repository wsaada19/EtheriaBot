const Discord = require('discord.js');
const prefixes = require('../prefixes.json');

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
		.setDescription(`Happy to have you here! Head on over to #server-information, to learn more about **${guild.name}**.
			Enter ${prefixes[id].prefixes}help to see a list of all available commands.  Enjoy your stay!`)
		.setThumbnail(guild.iconURL);

		let channel = guild.channels.get(config[member.guild.id].welcomeChannel);
		if(channel){channel.send(embededMessage);}



}
