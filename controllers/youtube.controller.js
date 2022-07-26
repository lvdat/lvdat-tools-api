const axios = require('axios').default
require('dotenv').config()

getVideoData = async (req, res) => {
    const { id } = req.params
    const ytbUrl = 'https://www.youtube.com/watch?v=' + id
    const url = process.env.YOUTUBE_DATA_API + '?url=' + ytbUrl

    try {
        const { data } = await axios.get(url)
        if (!data) {
            return res.status(400).json({
                message: 'Có lỗi trong qúa trình lấy dữ liệu! Vui lòng thử lại sau 1 phút nữa!'
            })
        }
        let result = {
            ...data, ...req.data
        }
        delete result.version
        return res.status(200).send(result)
    } catch (error) {
        console.log(error)
        return res.status(400).json({
            message: 'Có lỗi trong qúa trình lấy dữ liệu!'
        })
    }
}

module.exports = {
    getVideoData
}