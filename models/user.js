/* Restaurant and Reservation Models */
// DO NOT CHANGE THIS FILE

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 8,
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 1
    }})

// make a model using the User schema
const User = mongoose.model("User", UserSchema);

module.exports = { User };
