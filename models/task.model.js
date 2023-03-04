const mongoose = require('mongoose')

const Task = new mongoose.Schema(
    {
        username: {type: String, required: true},
        tasks: [{
            task: {type: String, required: true},
            desc: {type: String, required: true},
            createAt: {type: String, default: new Date()}
        }]
    },
    {
        collection: 'tasks'
    }
)

module.exports = mongoose.model('Task', Task)