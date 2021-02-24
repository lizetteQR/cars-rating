const express = require('express')
const path = require('path')
const fs = require('fs')
const cors = require('cors')
const bodyParser = require('body-parser')

const cfenv = require('cfenv')

// Express App
const app = express()

// Server
const server = require('http').createServer(app)

// Env
const appEnv = cfenv.getAppEnv()

// Port listen
const port = process.env.PORT || appEnv.port || 3000

// API
const routerApi = express.Router()

// Config
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', routerApi)

app.use(express.static(path.join(__dirname, '../..', 'build')))

routerApi.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization, Uid'
	)
	next()
	return null
})

fs.readdirSync(path.join(__dirname, '.', 'routes/Api/')).forEach((file) => {
  require(`./routes/Api/${file}`)(routerApi) // eslint-disable-line
})

app.disable('x-powered-by')

server.listen(port, appEnv.bind, (err) => {
	if (!err) {
		console.log(`React App listening on ${appEnv.url}`)
	}
})
