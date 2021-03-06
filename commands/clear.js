module.exports = {
		name: 'clear',
		description: 'Removes last 100 messages in the current channel',
		permission: 'MANAGE_SERVER',
		execute(message, args){
				if(!message.member.hasPermission("MANAGE_SERVER")){
					return;
				}
				try {
							message.channel.bulkDelete(100)
							.then(messages => console.log(`Bulk deleted ${messages.size} messages`))
  						.catch(console.error);
				} catch {
						console.error;
				}

		}
}
