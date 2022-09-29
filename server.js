const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


const app = require('./app')


// database connection 
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log('database connection is successfully');
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`app is running port${port}`);
})