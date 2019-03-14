module.exports = {
		name: 'clear',
		description: 'This removes all messages in a channel',
		execute(message, args){
				try {
						message.channel.bulkDelete(100)
							.then(messages => console.log(`Bulk deleted ${messages.size} messages`))
  						.catch(console.error);
				} catch {
						console.error;
				}

		}
}
