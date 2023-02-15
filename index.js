const express = require("express")
const app = express();
const config = require("config")

app.get('/test', (req, res)=>{
    res.send("YYYAAAAYYYYYYYYYYY!!!!")
})

const server = app.listen(config.get('PORT') || 8008, console.log(`Listening at ${config.get('PORT')}`))