const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
		name: 'prefix',
		description: "Changes the prefix for the bot!",
		execute(message, args){

				if(!member.hasPermission("MANAGE_SERVER")){return message.reply("You don't have permission to change the prefix.")}
				if(!arg[0] || arg[0] === 'help'){return "To change the prefix use !<prefix> <new prefix>!"}

				let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

				prefixes[message.guild.id] = {
					prefixes: args[0]
				};

				fs.writeFile("./prefixes.json", JSON.stringify(prefixes) (err) =>{
						if(err){
							console.log(err);
						}
				})

				let embededMessage = new Discord.RichEmbed()
				.setColor()
				.setTitle()
				.setDescription();

		},

};
