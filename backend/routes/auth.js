const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Create a User using POST at "/api/auth/createuser"
router.post('/createuser',[
    body('email','Enter a valid email').isEmail(),
    body('name','Enter a valid name').isLength({min: 3}),
    body('password','Password must be atleast 5 characters').isLength({min: 5})
],async (req,res)=>{
    // If the parameters (email,name,password) doesn't satisfy the requirements given in the array 
    // Done with the help of express validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the user with this email exists already
    try{
        let user = await User.findOne({email:req.body.email});
        // If user!=NULL then give error message
        if(user){
            return res.status(400).json({error: "Sorry a user with this email already exists"})
        }
        // Create new user
        user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        })
        // Response the user's data after creating a new document
        res.json(user)
    }catch(error){
        console.log(error.message);
        res.status(500).send("Some Error occured");
    }
})

module.exports=router;
