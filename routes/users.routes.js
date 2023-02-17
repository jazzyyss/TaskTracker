const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require("../models/user.model")

router.post('/register', async (req, res)=>{
    const {firstName, lastName, username, email, password} = req.body
    console.log(req.body)
    const pass = await bcrypt.hash(password, 7)
    try{
        const user = await  User.create({
            firstName,
            lastName,
            username,
            email,
            password: pass
        })
        user.save()
        res.json(user)
    }catch(er){
        res.json({status: 'error', error: er})
    }
})

router.get('/show', (req, res)=>{
    res.send("in the user router")
})

module.exports = router