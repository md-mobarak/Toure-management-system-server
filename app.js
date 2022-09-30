const express = require('express');
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');

// middleware
app.use(express.json())
app.use(cors())

// router 
const tourRouter = require('./route/tour.route')

app.get('/', (req, res) => {
    res.send('Routing is running YaY')
})

app.use('/api/v1/tour', tourRouter)

// app.get('/api/v1/tour',)

module.exports = app;