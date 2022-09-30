const { getTourService, createTourServices } = require("../services/tour.services")



exports.getTours = async (req, res, next) => {
    try {
        const AllTour = await getTourService()
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