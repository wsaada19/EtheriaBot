const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
		name: 'prefix',
		description: "Changes the prefix for using commands, !prefix <new prefix>",
		permission: "MANAGE_SERVER",
		execute(message, args){

				if(!message.member.hasPermission("MANAGE_SERVER")){return message.reply("You don't have permission to change the prefix.")}
				if(!args[0] || args[0] === 'help'){return message.reply("To change the prefix use !<prefix> <new prefix>!")}

				let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

				prefixes[message.guild.id] = {
					prefixes: args[0],
					welcomeToggle: prefixes[message.guild.id].welcomeToggle,
					welcomeChannel: prefixes[message.guild.id].welcomeChannel
				};

				fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) =>{
						if(err){
							console.log(err);
						}
				})

				let embededMessage = new Discord.RichEmbed()
				.setColor("#097F09")
				.setTitle("New prefix has been set!")
				.setDescription(`The new prefix is ${args[0]}`);

				message.channel.send(embededMessage);
		},

};
