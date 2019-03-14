const Discord = require('discord.js');
const fs = require('fs');
const guildInfo = require('./guildData.json');

const config = require('./config.json');

const client = new Discord.Client({
	autorun: true
});

// Creates commands collection and pulls all js files from the commands folder
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Adds commands to commandFile
for(const file of commandFiles){
		const command = require(`./commands/${file}`);
		client.commands.set(command.name, command);
}

// Turns on client, tests in the console
client.on('ready', async() => {
   console.log('I am ready!');
});

// Runs when a message is sent
client.on('message', async message => {
		//	Catch prefix command and filter bots
		if(!message.author.bot && message.channel.type !== 'dm' ){

				// Get json file with prefix data
				let prefixes = JSON.parse(fs.readFileSync("./prefixes.js", "utf8"));

				// Check for prefix
				if(!prefixes[message.guild.id]){
						prefixes[message.guild.id] = {
							prifixes: config.prefix
						};
				}
				let prefix = prefixes[message.guild.id];

				message.content.startsWith(config.prefix)

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

});

client.on('guildMemberAdd', async member => {

});

client.on('guildCreate', async guild =>{
		let DEFAULT_OBJECT = {prefix: '/', joinRank: ''};
		if(guild.availabe){
				if(!guildInfo.contains(guild.id)){
						guildInfo[guild.id] = {}
				}
		}
});

client.login(config.token);
