const Discord = require('discord.js');
const fs = require('fs');
module.exports = (client, guild) => {

		let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
		// set default values !
		prefixes[guild.id] = {
				prefixes: '!',
				welcomeToggle: false,
				welcomeChannel: ''
		}
}
