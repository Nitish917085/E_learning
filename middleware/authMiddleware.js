const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verifyToken = (req, res, next) => {

  console.log("jhj",req.cookies.jwtoken)
  try {

    const token = req.headers.authorisation;
    
    if (!token) return res.status(401).send('You are not Authenticated!');

    const { userId } = jwt.verify(token, 'jwtsecretkeyhaiyeh');

    const userrs=User.findOne({_id:userId})
     
    if(userrs)
        next();

  } catch (error) {
    return res.status(500).send(error);
  }
};

module.exports = {
  verifyToken,
};
