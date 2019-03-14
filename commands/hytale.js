const request = require('request');
const cheerio = require('cheerio');

module.exports = {
		name: 'hytale',
		description: 'Returns the 5 most recent Hytale blogs',
		execute(message, args){

			request('https://www.Hytale.com/news', function (error, response, html) {

				if (!error && response.statusCode == 200) {

						let $ = cheerio.load(html);

						$('div.postWrapper').each(function(i, element){
								if(i < 5){
										let postWrapper = $(this).children();
										//channel.send(postWrapper.text());
										let link = "https://www.Hytale.com" + postWrapper.attr('href');

										let postInfo = postWrapper.children().next().children('.post__details__heading').text();
										message.channel.send(postInfo + '\n' + link);
								}

						});
				}
			});
		}
}
