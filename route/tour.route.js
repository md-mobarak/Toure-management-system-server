const express = require('express');
const router = express.Router()
const tourController = require('../controller/tour.controller')

router.route('/')
    .get(tourController.getTours)
    .post(tourController.createTour)

router.route('/:id')
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour)



module.exports = router