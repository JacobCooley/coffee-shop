const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = 4269;
const app = express();
// app.use(favicon(__dirname + '/dist/favicon.ico'));

//FORCE HTTP UNTIL WE GET THE SERVER HOOKED TO HTTPS
// app.use(function (req, res, next){
// 	if (req.headers['x-forwarded-proto'] === 'https') {
// 		res.redirect('http://' + req.hostname + req.url);
// 	} else {
// 		next();
// 	}
// });
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});
app.listen(port);