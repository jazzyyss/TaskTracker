const express = require("express")
const app = express()
const config = require("config")

//required middlewares
require("./middlewares/default")(app)
require("./startup/db")()
require("./startup/routes")(app)

app.get('/test', (req, res)=>{
    res.send("YYYAAAAYYYYYYYYYYY!!!!")
})

app.listen(config.get('PORT') || 8008, console.log(`Listening at ${config.get('PORT')}`))