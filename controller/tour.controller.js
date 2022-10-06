const { getTourService, createTourServices, updateTourService, deleteTourService } = require("../services/tour.services")



exports.getTours = async (req, res, next) => {
    try {

        const filters = { ...req.query }
        //sort limit page => exclude
        const excludeField = ["sort", "limit", "page"]
        excludeField.forEach(field => delete filters[field])

        //gt lt gte lte
        let filtersString = JSON.stringify(filters)
        filtersString = filtersString.replace(/\b(gt | gte | lt | lte)\b/g, match => `$${match}`)
        console.log(filtersString);

        const queries = {}
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            queries.sortBy = sortBy
        }
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ')
            queries.fields = fields
        }

        const AllTour = await getTourService(filters, queries)
        res.status(200).json({
            status: 'success',
            message: "your allTour successfully get",
            data: AllTour
        })
    } catch (error) {
        res.status(400).json({
            status: 'file',
            message: "can't successfully get",
            error: error.message

        })

    }
}


exports.createTour = async (req, res, next) => {
    try {
        // const tour = new Tour(req.body)
        //    const result = await tour.save()
        const result = await createTourServices(req.body)

        res.status(200).json(
            {
                status: 'success',
                message: 'your tour is post the  mongoose',
                data: result
            }
        )
    }
    catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Your  post is failed',
            error: error.message,


        })

    }
}

exports.updateTour = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await updateTourService(id, req.body)
        res.status(200).json({
            status: 'success',
            message: 'update successfully',
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Could not update the tour',
            error: error.message,


        })

    }
}

exports.deleteTour = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await deleteTourService(id)
        res.status(200).json({
            status: 'success',
            message: 'delete successfully',
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Could not delete the tour',
            error: error.message,
        })

    }
}