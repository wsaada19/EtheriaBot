const request = require('request');
const cheerio = require('cheerio');
const Discord = require('discord.js');
const errorMessage = require('../utilities/errorMessage.js');
module.exports = {
		name: 'hytale',
		description: 'Hytale related commands, use !hytale help for more information',
		permission: "SEND_MESSAGE",
		execute(message, args){
			if(!args[0]){return message.channel.send(errorMessage.getMessage("Invalid Arguments","The correct usage is hytale [help, blogs, music]"));}

			switch(args[0]){
					case "blogs":
							GetHytaleBlogs(message, args);
							break;
					case "help":
							GetHytaleHelp(message, args);
							break;
					case "music":
							GetHytaleMusic(message, args);
							break;
			}
		}
}

function GetHytaleBlogs(message, args){

	request('https://www.Hytale.com/news', function (error, response, html) {

		if (!error && response.statusCode == 200) {
				let limit = (args[1] && !isNaN(args[1]) ? args[1] : 5 );
				if(limit < 1){return message.reply("Integer must be greator than 0");}

				let embededMessage = new Discord.RichEmbed()
				.setColor("#097F09");
				let title;
				if(limit == 1){
						title = `Last Hytale blog post!`;
				} else {
						title = `Last ${limit} Hytale blog posts!`;
				}
				embededMessage.setTitle(title);

				let $ = cheerio.load(html);
				try{
						$('div.postWrapper').each(function(i, element){
							if(i < limit){
									let postWrapper = $(this).children();
									//channel.send(postWrapper.text());
									let link = "https://www.Hytale.com" + postWrapper.attr('href');

									let postInfo = postWrapper.children().next().children('.post__details__heading').text();
									embededMessage.addField(postInfo, link);
							}
						});
				} catch(error) {
						console.log(error);
				}
				message.channel.send(embededMessage);
		}
	});
}

function GetHytaleMusic(message, args){

}

function GetHytaleHelp(message, args){
		let embededMessage = new Discord.RichEmbed()
		.setColor("#097f09")
		.setTitle("Hytale Commands Help")
		.addField("blog", "Retrieves recent blogs !hytale blogs <limit>(defaut is 5)")
		.addField("help", "Displays hytale commands")
		.addField("music", "Plays hytale music from their youtube channel")
		.addField("tweet", "Retrieves Hytale's most recent tweet");

		message.channel.send(embededMessage);
}
