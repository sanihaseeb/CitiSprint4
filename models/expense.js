/* Expense Models */
const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    date:{
        type: Date,
        required: true,
    }
    ,
    point: {
        type: String,
        required: true,
    },
    CAD: {
        type: Number,
        required: true,
    },
    feeling:{
        type: String,
        required: true, 
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    }

})

// make a model using the User schema
const Expense = mongoose.model("Expense", expenseSchema);



module.exports = { Expense };

