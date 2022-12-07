const router = require("express").Router();
const User = require ("../models/User");
const bcrypt = require("bcrypt");
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')



//REGUSTER

router.post("/register", async (req,res) =>{
    const {username, email, password } = req.body

        if(!username || !email || !password){
            res.status(400).json("Please insert a username, an email and a passowrd")
            console.log("Please insert a username, an email and a passowrd")
            return -1;
        }
    
        const usernameExists = await User.findOne({username})
    
        if (usernameExists){
            res.status(400).json("A user with this username already exists");
            console.log('A user with this username already exists');
            return -2;
        }

        const emailExists = await User.findOne({email})
    
        if (emailExists){
            res.status(400).json("A user with this email already exists")
            console.log('A user with this email already exists');
            return -2;
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        res.status(200).json(user);
        return 0;
    }
);


//LOGIN

router.post("/login", async(req,res) => {


    try{
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json("wrong credentials")
        if(!user){
            return;
        }

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("wrong credentials 2");
        if(!validated){
            return;
        }

        const{password, ... others} = user._doc;
        res.status(200).json(others)

    } catch(err) {
        res.status(500).json(err);
    }

})

module.exports = router;