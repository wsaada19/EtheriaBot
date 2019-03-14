module.exports = {
		name: "flip",
		description: "Flip a coin to land either heads or tails",
		execute(message, args){
				let userName = message.author.username;

				let random = Math.random();
				let res;
				if(random > .5){
						res = "heads";
				} else {
						res = "tails";
				}

				let embededMessage = new Discord.RichEmbed()
				.setColor("#097F09")
				.setTitle(`**${userName}** has flipped **${res}**!`);
		}
}
