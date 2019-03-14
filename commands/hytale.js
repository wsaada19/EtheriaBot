const request = require('request');
const cheerio = require('cheerio');
const Discord = require('discord.js');
module.exports = {
		name: 'hytale',
		description: 'Returns the 5 most recent Hytale blogs',
		execute(message, args){

			request('https://www.Hytale.com/news', function (error, response, html) {

				if (!error && response.statusCode == 200) {

						let $ = cheerio.load(html);
						let resultingString = "";
						$('div.postWrapper').each(function(i, element){
								if(i < 5){
										let postWrapper = $(this).children();
										//channel.send(postWrapper.text());
										let link = "https://www.Hytale.com" + postWrapper.attr('href');

										let postInfo = postWrapper.children().next().children('.post__details__heading').text();
										resultingString += postInfo + link + '\n';
								}

						});
						let embededMessage = new Discord.RichEmbed()
						.setColor("#097F09")
						.setTitle("Last 5 Hytale blog posts!")
						.setDescription(resultingString);
						message.channel.send(embededMessage);

				}
			});
		}
}
