const userRoute = require("../routes/users.routes")
const taskRoute = require("../routes/tasks.routes")

module.exports = app => {
    app.use('/api/user', userRoute),
    app.use('/api/tasks', taskRoute)
}