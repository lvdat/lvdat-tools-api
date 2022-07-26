const express = require('express')
const LVD = express()
const bodyParser = require('body-parser')
// Require the .env file
require('dotenv').config()
// Disable the X-Powered-By header
LVD.disable('x-powered-by')
// Set the port
const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'
// config cors
const cors = require('cors')
let corsOptions = {
	origin: `http://${host}:${port}`,
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
	methods: 'GET',
}
LVD.use(cors(corsOptions))
// return as json
LVD.use(bodyParser.json()).use(
	bodyParser.urlencoded({
		extended: false,
	})
)

LVD.get('/', (req, res) => {
	res.send('Welcome to lvdat Tools API ! Let\'s to start at /api-docs')
})

// import route
require('./routes')(LVD)

LVD.listen(port, () => {
	console.log(`-> Server is running on port ${port}`)
})