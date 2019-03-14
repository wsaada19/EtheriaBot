module.exports = {
		name: 'ping',
		description: "Returns Pong, tests that the bot is working properly!",
		execute(message, args){
				message.channel.send("Pong!");
		},
};
