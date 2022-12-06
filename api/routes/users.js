const router = require("express").Router();
const User = require ("../models/User");
const bcrypt = require("bcrypt");
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

//UPDATE

router.put("/:id", async (req,res) =>{
    
    

    try{

    } catch(err){
        res.status(500).json(err);
    }
})


//DELETE

module.exports = router;