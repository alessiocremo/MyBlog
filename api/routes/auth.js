const router = require("express").Router();
const User = require ("../models/User");
const bcrypt = require("bcrypt");
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')



//REGUSTER

router.post("/register", async (req,res) =>{
    const {username, email, password } = req.body

    if(!username || !email || !password){
        res.status(400).json("Please provide a username, an email and a password")
        // throw new Error ('Please provide a username, an email and a password')
        return -1;
    }


    const userExists = await User.findOne({email})

    if (userExists){
        res.status(400).json("A user with this email already exists")
        // throw new Error ('A user with this email already exists')
        return -2;

    }

    const userExists2 = await User.findOne({username})

    if (userExists2){
        res.status(400).json("A user with this username already exists")
        // throw new Error ('A user with this username already exists')
        return -3;
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).json("Invalid User data")
        // throw new Error ('Invalid User data')
        return -4;

    }
})


//LOGIN

router.post("/login", async(req,res) => {
    const {email,password} = req.body

    //Check for user email
    const user = await User.findOne({email})

    //Check the password
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400).json('Invalid credentials')
        return -5;
        // throw new Error('Invalid credentials')
    }
})



const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'})
}


module.exports = router;