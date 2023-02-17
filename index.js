const express = require("express")
const app = express()
const config = require("config")

const db = require("./startup/db")

db()

app.get('/test', (req, res)=>{
    res.send("YYYAAAAYYYYYYYYYYY!!!!")
})

app.listen(config.get('PORT') || 8008, console.log(`Listening at ${config.get('PORT')}`))