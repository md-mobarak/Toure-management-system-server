const Tour = require('../model/Tour')



exports.getTourService = async (filters, queries) => {
    const result = await Tour.find(filters)
        .select(queries.fields)
        .sort(queries.sortBy)

    return result
}

exports.createTourServices = async (data) => {
    const result = await Tour.create(data)
    return result
}

exports.updateTourService = async (TourId, data) => {
    const result = await Tour.updateOne({ _id: TourId }, { $set: data }, {
        runValidators: true
    })

    return result
}

exports.deleteTourService = async (tourId) => {
    const result = await Tour.deleteOne({ _id: tourId })
    return result
}