var express = require('express'),
	app = express(),
	https = require('https'),
	request  = require('request'),
	cors = require('cors');

app.use(express.static(__dirname));
app.use(cors());

app.get('/meetups', function(req, res){


	var token = '76b2d44622a111e6ba163c534d125c';


//var url = 'https://api.meetup.com/2/cities?country=be&offset=0&format=json&photo-host=public&page=50&radius=50&order=size&desc=false&sig_id=124207232&sig=05e1dd859fa009c574355f3220488be7f6d5cb5d';

var url = 'https://api.meetup.com/2/groups?country=be&offset=0&city=Brussels&format=json&lon=4.32999992371&topic=javascript&photo-host=public&page=40&radius=25.0&fields=&lat=50.8300018311&order=id&desc=false&key=76b2d44622a111e6ba163c534d125c';
	request(url, function (error, response, body) {

		if (!error && response.statusCode == 200) {
			res.send(body);
		}else{
			res.send(body);
		}
	});
});

app.listen(9000);
