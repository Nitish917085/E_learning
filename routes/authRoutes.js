const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  console.log('reg',req.body)
  try {
    console.log(req.body);

    if( await User.findOne({username: req.body.username}) )
       return res.json({error:"username already exist"})

    if(await User.findOne({email: req.body.email }))
      return  res.json({error:"email already exist"})
   
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const token = jwt.sign(
      {
        userId: newUser._id,
      },
      'jwtsecretkeyhaiyeh',
    );

    return res.status(201).send({
      token,
      others: newUser,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send('Error in Registering the User!');
  }
});

router.post('/login', async (req, res) => {
  console.log('log',req.body)
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email }).select('+password');
    console.log(user);
    if (!user) {
      return res.json({error:'No user found! Please check your credentials!'});
    }

    if (!(await user.checkPassword(req.body.password, user.password))) {
      return res.json({error:'Password is not matched! Please check your credentials!'});
    }
    const token = jwt.sign(
      {
        userId: user._id,
      },
      'jwtsecretkeyhaiyeh',
    );

    const { password, ...others } = user._doc;
    res.cookie(token);
    return res.status(200).send({
      token,
      others,
    });

  } catch (error) {}
});

module.exports = router;
