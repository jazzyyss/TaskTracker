const userRoute = require("../routes/users.routes")

module.exports = app => {
    app.use('/api/user', userRoute)
}