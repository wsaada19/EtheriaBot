const fs = require('fs');
module.exports = {
		name: 'ban',
		description: "Bans a user, !ban [@user] [ban reason]",
		permission: "BAN_MEMBERS",
		async execute(message, args){
				if(args.length < 1){
						message.reply("Must enter a username");
				} else {
						if(!message.member.hasPermission("BAN_MEMBERS")){return;}
						let user = args[0];
						let userObj = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
						if(!userObj){console.log("Could not find user"); return;}
						if(userObj.user.bot){return message.reply("You can't ban a bot");}
						if(userObj.hasPermission("MANAGE_SERVER")) return message.channel.send("That person can't be banned!");

						let reason = "";
						if(args.length > 1){
								for(var i = 1; i < args.length; i++){
										reason += args[i] + " ";
								}
						}

						try {
								await userObj.ban(reason);
								console.log(`Banned ${userObj} from the server for ${reason}`);

						} catch(error){
								console.log(error);
						}
				}
		},
};
