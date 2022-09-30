const mongoose = require('mongoose');
// schema Design 
const event = new Date
let time = event.toLocaleTimeString('en-US')
const tourSchema = mongoose.Schema({
    packageName: {
        type: String,
        required: [true, "please provide a valid name"],
        trim: true,
        unique: [true, 'name must be unique'],
        minLength: [3, 'name must be 3 characters'],
        maxLength: [100, 'name is too large']
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price can not be negative']
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ['in-stock', 'out-of-stock', 'discontinued'],
            message: 'status can not be {VALUE}'
        }
    },
    image: {
        type: String,
        required: true,
    },


    createdAt: {
        type: String,
        default: time,
    }
    // supplier: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'supplier'
    // }

})

// model and schema add 
const Tour = mongoose.model('Tour', tourSchema)

module.exports = Tour