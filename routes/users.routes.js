const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require("../models/user.model")
const auth = require("../middlewares/auth")

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
        res.json({status: 'OK', message: "user created successfully"})
    }catch(er){
        res.json({status: 'error', error: er})
    }
})

router.post('/login', async (req, res)=>{
    const {username, password} = req.body
    const user = await User.findOne({username})
    if(!user) return {status: 'error', message: "user doesn't exist"}
    const isPassValid = await bcrypt.compare(password, user.password)
    if(!isPassValid) return {status: 'error', message: "please check your password"}
    const token = jwt.sign({username: user.username, email: user.email}, 'secretKey12')
    res.json({status: 'OK', message: token})
})

router.get('/auth', auth, async (req, res)=>{
    res.send("we are authorized")
})

module.exports = router