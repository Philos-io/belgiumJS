var express = require('express'),
	app = express(),
	https = require('https'),
	request  = require('request');


app.use(express.static(__dirname));

app.get('/meetups', function(req, res){


	var token = '76b2d44622a111e6ba163c534d125c';
	

var url = 'https://api.meetup.com/2/cities?country=be&offset=0&format=json&photo-host=public&page=50&radius=50&order=size&desc=false&sig_id=124207232&sig=05e1dd859fa009c574355f3220488be7f6d5cb5d';

	var cities = ['Brussels', 'Antwerp', 'Antwerpen', 'Gent'];

	var baseUrl = 'https:/api.meetup.com/find/groups?';

	var options = {
		location: 'Brussels',
		page: 30,
		text: 'javascript, nodejs, angular:'
	};
	var url = 'https://api.meetup.com/find/groups?photo-host=public&location=Brussels&page=20&text=javascript&country=BE&sig_id=124207232&sig=21e8b114e0020fb233e3b7b74f3b466fb91b63e8';
	request(url, function (error, response, body) {
		
		if (!error && response.statusCode == 200) {
			res.send(body);
		}
	});
});

app.listen(3000);
