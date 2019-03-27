const util = require('../utilities/timeConverter.js');
module.exports = {
		name: 'mute',
		description: 'Mutes a user, if a time is specified then user is muted that given time period (ex 1h30m)',
		permission: 'MUTE_MEMBERS',
		async execute(message, args){

			if(!message.member.hasPermission("MUTE_MEMBERS")){return message.reply("You don't have permission to mute a user.");}

			let userObj = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
			if(!userObj){return message.reply("Correct use of the command is !mute @user <time>")};
			if(userObj.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be muted!");

			if(userObj.user.bot){return message.reply("You can't mute a bot");}

			try {
					await userObj.setMute(true);
					console.log(`Muted ${userObj.user.username}`);

			} catch(error){
					console.log(error);
			}

			if(!args[1]){return;}

			let time = util.timeParse(args[1]);
			if(time === 0){return;}
				setTimeout(unMuteUser(userObj), time);
		}
	}

async function unMuteUser(user){
		try{
				await user.setMute(false);
				console.log(`Unmuted ${user.member.displayName}`)
		} catch(error) {
				console.log(error)
		}
}
