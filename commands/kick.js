module.exports = {
		name: 'kick',
		description: "Kicks the specified user!",
		execute(message, args){

				if(args.length < 1){
						message.reply("Must enter a user");
				} else {
						let user = args[0];
						let userObj = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
						if(!userObj){console.log("Could not find user"); return;}
						userObj.kick()
							.then(() => console.log(`Kicked ${member.displayName}`))
  						.catch(console.error);

				}
		},
};
