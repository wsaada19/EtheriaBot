module.exports = {
		name: 'roll',
		description: "Roll for a random number from 1 - x, (100 is default)",
		execute(message, args){

				let user = message.author.username;
				let max;
				if(args.length < 1){
						max = 100;
				} else {

						if(!isNaN(args[0]) && args[0] > 0){
								max = args[0];
						} else {
								message.reply("Please enter a positive integer!");
								return;
						}
				}
				let random = Math.floor(Math.random() * Math.floor(max));
				message.channel.send(`${user} has rolled a ${random} out of ${max}!`)
 				.then(message => console.log(`Sent message: ${message.content}`))
 				.catch(console.error);

		},
};
