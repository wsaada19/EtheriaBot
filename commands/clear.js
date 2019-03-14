module.exports = {
		name: 'clear',
		description: 'This command removes 100 messages in a given channel',
		permission: 'MANAGE_SERVER',
		execute(message, args){
				if(!message.member.hasPermission("MANAGE_SERVER")){return message.reply("You don't have permission to use this command");}
				try {
							message.channel.bulkDelete(100)
							.then(messages => console.log(`Bulk deleted ${messages.size} messages`))
  						.catch(console.error);
				} catch {
						console.error;
				}

		}
}
