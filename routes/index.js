const docs = require('./docs.route')
const youtube = require('./youtube.route')
module.exports = (app) => {
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
        next()
    })
    docs(app)
    youtube(app)
}