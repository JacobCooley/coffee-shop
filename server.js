const express = require('express')
const favicon = require('express-favicon')
const fs = require('fs')
const https = require('https')
const privateKey = fs.readFileSync('../ganjafarm/certs/server.key', 'utf8')
const certificate = fs.readFileSync('../ganjafarm/certs/server.cert', 'utf8')
const credentials = { key: privateKey, cert: certificate }
const path = require('path')
const port = 4269
const app = express()
const httpsRedirect = require('express-https-redirect')
app.use('/', httpsRedirect())
app.use(favicon(__dirname + './src/favicon.ico'))
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, 'dist/index.html'))
})
const server = https.createServer(credentials, app)

server.listen(port)