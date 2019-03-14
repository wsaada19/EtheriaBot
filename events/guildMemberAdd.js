module.exports = (client, member) => {
	if(!member.bot){

		const guild = client.guilds.get(member.guild.id);
		const role = guild.roles.find("name", "Member");
		member.setRoles([role.id]);

	}
}
