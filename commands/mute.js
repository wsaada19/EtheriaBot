const util = require('../utilities/timeConverter.js');
module.exports = {
		name: 'mute',
		description: 'Mutes a given user, if a time is specified then user is muted that given time period',
		execute(message, args){
			if(!message.member.hasPermission("MUTE_MEMBERS")){return message.reply("You don't have permission to mute a user.")}

			let user = args[0];
			let userObj = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
			if(!userObj){message.reply("Correct use of the command is !<mute> <@user> <time>)");

			userObj.setMute(true)
			.then(() => console.log(`Muted ${userObj.displayName}`))
  		.catch(console.error);

			if(!args[1]){return;}

			let time = util.timeParse(args[1]);
			if(time === 0){return;}

			setTimeout(unMuteUser(userObj), time);

		}
	}
}

function unMuteUser(user){
		user.setMute(false)
		.then(() => console.log(`Unmuted ${user.member.displayName}`))
		.catch(console.error);
}
