module.exports = {
		name: 'kick',
		description: "Kicks the specified user, !<kick> <@user>",
		permission: "KICK_MEMBERS",
		async execute(message, args){
				if(args.length < 1){
						message.reply("Must enter a user");
				} else {
						if(!message.member.hasPermission("KICK_MEMBERS")){return message.reply("You don't have permission for that command");}
						let user = args[0];
						let userObj = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
						if(!userObj){console.log("Could not find user"); return;}
						try {
								await userObj.kick();
								console.log(`Kicked ${userObj} from the server`);
						} catch(error){
								console.log(error);
						}
				}
		},
};
