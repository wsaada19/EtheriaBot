const config = require('../config.json');
const fs = require('fs');

module.exports = (client, message) => {
	if(!message.author.bot && message.channel.type !== 'dm' ){

			// Get json file with prefix data
			let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

			// Check for prefix
			if(!prefixes[message.guild.id]){
					prefixes[message.guild.id] = {
						prefixes: config.prefix,
						welcomeMessage: prefixes[message.guild.id],
						welcomeToggle: true
					};
			}
			let prefix = prefixes[message.guild.id].prefixes;
			if(!message.content.startsWith(prefix)){return;}

			let args = message.content.substring(1).split(' ');
			let cmd = args[0].toLowerCase();
			args = args.splice(1);
			// See if command exists
			if(client.commands.has(cmd)){

					try {
							client.commands.get(cmd).execute(message, args);
					} catch (error){
							console.error(error);
							message.reply('there was an error trying to execute that command!');
					}
			}
	} // End ! command
};
