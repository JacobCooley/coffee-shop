const express = require('express')
const fs = require('fs')
const https = require('https')
const privateKey = fs.readFileSync('../ganjafarm/certs/server.key', 'utf8')
const certificate = fs.readFileSync('../ganjafarm/certs/server.cert', 'utf8')
const credentials = { key: privateKey, cert: certificate }
const path = require('path')
const port = 4269
const app = express()
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'dist')))

function forceHttps(req, res, next) {
	const xfp =
		req.headers["X-Forwarded-Proto"] || req.headers["x-forwarded-proto"];
	if (xfp === "http") {
		const secureUrl = `https://${req.headers.hostname}${req.url}`;
		res.redirect(301, secureUrl);
	} else {
		next();
	}
}

app.use(forceHttps())

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'dist/index.html'))
})
const server = https.createServer(credentials, app)

server.listen(port)