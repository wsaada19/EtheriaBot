module.exports = {
		name: 'reload',
		description: 'reloads a given command',
		execute(message, args) {
  		if(!args || args.size < 1) return message.reply("Must provide a command name to reload.");
  		const commandName = args[0];

			// Check if the command exists and is valid
  		if(!message.client.commands.has(commandName)) {
    		return message.reply("That command does not exist");
  		}
  		// the path is relative to the *current folder*, so just ./filename.js
  		delete require.cache[require.resolve(`./${commandName}.js`)];
  		// We also need to delete and reload the command from the client.commands Enmap
  		message.client.commands.delete(commandName);
  		const props = require(`./${commandName}.js`);
  		message.client.commands.set(commandName, props);
  		message.reply(`The command ${commandName} has been reloaded`);
		},
	};
