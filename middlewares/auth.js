const jwt = require('jsonwebtoken')
const User = require("../models/user.model")

module.exports = async (req, res, next) => {
    let token;
    console.log(req.headers)
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      )try{
        token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, 'secretKey12')
        req.user = await User.findOne({username: decoded.username})
        next()
      }catch(er){
        console.log(er);
        res.status(400).send('Invalid Token');
      }

      if (!token) {
        if (!token) return res.status(401).send("no token provided");
      }
}