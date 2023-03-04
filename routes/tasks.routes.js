const express = require('express')
const router = express.Router()

const Tasks = require("../models/task.model")
const auth = require("../middlewares/auth")

router.get('/', (req, res)=>{
    res.json({status: 'ok', message: 'tasksssss'})
})

module.exports = router