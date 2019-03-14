const Discord = require('discord.js');
const fs = require('fs');
//const guildInfo = require('./guildData.json');

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

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

// Turns on client, tests in the console
client.on('ready', async() => {
   console.log('I am ready!');
});

client.login(config.token);
