const Discord = require('discord.js');
const heads = "https://i.postimg.cc/cHWyyTLN/bitcoin.png";
const tails = "https://i.postimg.cc/V6gTy8hj/coin.png";

module.exports = {
		name: "flip",
		description: "Flips a coin",
		permission: "SEND_MESSAGE",
		execute(message, args){
				let userName = message.author.username;

				let random = Math.random();
				let res = (random > .5) ? "Heads":"Tails";
				let image = (res === "Heads") ? heads : tails;
				let embededMessage = new Discord.RichEmbed()
				.setColor("#097F09")
				.setTitle(`**${userName}** has flipped **${res}**!`)
				.setImage(image);

				message.channel.send(embededMessage);
		}
}
