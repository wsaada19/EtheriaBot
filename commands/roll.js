const errorMessage = require('../utilities/errorMessage.js');
module.exports = {
		name: 'roll',
		description: "Roll for a random number from 1 - x, (100 is default)",
		permission: "SEND_MESSAGES",
		async execute(message, args){

				let user = message.author.username;
				let max = (args.length < 1) ? 100:args[0];
				if(isNaN(max) || max <= 0){return message.channel.send(errorMessage.getMessage("Invalid use of !roll", "The correct usage is !roll or !roll [integer greator than 1]"));}

				let random = Math.floor(Math.random() * Math.floor(max));
				try {
						await message.channel.send(`**${user}** has rolled a **${random}** out of **${max}**!`);
						console.log(`Sent message: ${message.content}`);

				} catch(error) {
						console.log(error);
				}


		},
};
