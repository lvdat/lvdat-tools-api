const { youtubeMiddleware } = require('../middleware')
const { youtubeController } = require('../controllers')

module.exports = (app) => {
    console.log('-> Enabled Youtube API')
    app.get('/api/youtube/video/:id', youtubeMiddleware.checkVideoIdIsValid, youtubeController.getVideoData)
}