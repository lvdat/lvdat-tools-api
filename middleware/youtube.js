const axios = require('axios').default
require('dotenv').config()

checkVideoIdIsValid = async (req, res, next) => {
    const { id } = req.params
    // check string no have space and not have special character
    if (id.indexOf(' ') !== -1 && id.match(/[^a-zA-Z0-9-_]/)) {
        return res.status(400).json({
            message: 'VideoID không hợp lệ'
        })
    }
    const url = process.env.YOUTUBE_DISLIKE_API + '?videoId=' + id
    try {
        const { data } = await axios.get(url)
        if (!data) {
            return res.status(400).json({
                message: 'VideoID không hợp lệ'
            })
        }
        req.data = data
        console.log(data)
        next()
    } catch (error){
        console.log(error)
        return res.status(400).json({
            message: 'VideoID không tồn tại hoăc không công khai'
        })
    }
}

module.exports = {
    checkVideoIdIsValid
}