const mongoose = require("mongoose")

const User  = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        username: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        status: {type: Number, default: 1}
    },
    {
        collection: 'users'
    }
)

module.exports = mongoose.model('User', User)