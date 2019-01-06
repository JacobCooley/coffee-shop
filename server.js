const express = require('express')
const fs = require('fs')
const https = require('https')
const privateKey = fs.readFileSync('../ganjafarm/certs/server.key', 'utf8')
const certificate = fs.readFileSync('../ganjafarm/certs/server.cert', 'utf8')
const credentials = { key: privateKey, cert: certificate }
const path = require('path')
const port = 4269
const app = express()
app.enable('trust proxy')
app.use(express.static(__dirname))
app.use (function (req, res, next) {
	if (req.secure) {
		// request was via https, so do no special handling
		console.log('https')
		next();
	} else {
		console.log('http')
		// request was via http, so redirect to https
		res.redirect('https://' + req.headers.host + req.url);
	}
});
app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', function (req, res) {
	console.log('sent')
	res.sendFile(path.join(__dirname, 'dist/index.html'))
})
const server = https.createServer(credentials, app)

server.listen(port)