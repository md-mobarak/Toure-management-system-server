const Tour = require('../model/Tour')



exports.getTourService = async () => {
    const result = await Tour.find({})

    return result
}

exports.createTourServices = async (data) => {
    const result = await Tour.create(data)
    return result
}