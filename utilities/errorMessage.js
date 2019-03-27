const Discord = require('discord.js');

module.exports = {
		getMessage(error, properUsage){
			 let embededMessage = new Discord.RichEmbed()
				.setColor("#8B0000")
				.setTitle(error)
				.setDescription(properUsage);
				return embededMessage;
		}
}
