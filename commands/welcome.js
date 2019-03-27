const fs = require('fs');
module.exports = {
		name: 'welcome',
		description: "Toggle welcome message and set welcome channel",
		permission: "MANAGE_SERVER",
		execute(message, args){
				if(!message.member.hasPermission("MANAGE_SERVER")){return message.reply("You don't have permission to use this command");}

				if(!args[0]){return message.reply("Please enter a valid command, !welcome [set <channelName>, toggleOff, toggleOn]");}

				switch(args[0]){
						case 'set':
								SetWelcomeChannel(message, args);
								break;
						case 'toggleOn':
								TurnOnWelcomeMessage(message, args);
								break;
						case 'toggleOff':
								TurnOffWelcomeMessage(message, args);
								break;
						default:
							message.reply("Invalid command");
							break;
				}
		}
};

async function SetWelcomeChannel(message, args){

		if(!args[1]){return message.reply("Please enter a channel name, !welcome set <channelName>");}

		let name = args[1];
		let res = await message.guild.channels.filter(channel => channel.name === name);
		if(res.size !== 1){return message.reply("Please enter a valid channel name");}
		let finalRes;
		// I don't like this..
		res.forEach(channel => {
			finalRes = channel;
		})

		let config = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
		console.log(config);
		config[message.guild.id] = {
				welcomeChannel: finalRes.id,
				prefixes: config[message.guild.id].prefixes,
				welcomeToggle: config[message.guild.id].welcomeToggle
		}
		let ch = message.guild.channels.get(config[message.guild.id].welcomeChannel);
		console.log(config);
		fs.writeFile("./prefixes.json", JSON.stringify(config), (err) =>{
				if(err){
					console.log(err);
				}
		});

		message.reply(`New welcome channel set, ${args[1]}`);
}

function TurnOnWelcomeMessage(message, args){

		let config = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

		config[message.guild.id] = {
				welcomeToggle: true,
				prefixes: config[message.guild.id].prefixes,
				welcomeChannel: config[message.guild.id].welcomeChannel
		};
		console.log('Welcome message is now turned on!');
		fs.writeFile("./prefixes.json", JSON.stringify(config), (err) =>{
				if(err){
					console.log(err);
				}
		});
		message.channel.send("Welcome messages are enabled")

}

function TurnOffWelcomeMessage(message, args){
		let config = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
		config[message.guild.id] = {
				welcomeToggle: false,
				prefixes: config[message.guild.id].prefixes,
				welcomeChannel: config[message.guild.id].welcomeChannel
		};
		console.log('Welcome message is now turned off.')
		fs.writeFile("./prefixes.json", JSON.stringify(config), (err) =>{
				if(err){
					console.log(err);
				}
		});
		message.channel.send("Welcome messages are disabled");

}
