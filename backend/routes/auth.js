const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const {body,validationResult} = require('express-vaildator');
var jwt = require('jsonwebtoken');
const JWT_Secret = "ThisisSecure";
var fetchUser = require("../middleware/fetchUser");


router.post('/signup',[
    body('name',"Enter the Valid name").isLenght({min:3}),
    body('email',"Enter the Valid email").isEmail(),
    body('password',"Enter the Valid password").isLenght({min:5}),
],async(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors:errors.array()});

    }
    try{
        let user = await User.findOne({email:req.body.email});
        if(user){
            res.status(400).json({error:"The user is already exist"});
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt);
        user = await User.create({
            name:req.body.name,
            password:req.body.secPass,
            email:req.body.email
        });
        const data = {
            user:{
                id:user.id
            }
        };
        const authtoken = jwt.sign(data,JWT_Secret);

        res.json({authtoken});

        }
        catch(error){
            console.log(error.message);
            res.status(500).send("Some error occuiped");

        }


})

router.post('/login',[
    body('email','Enter the valid email').isEmail(),
    body('password',"Enter the valid password").exists()
],async(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:errors.array()});

    }
    const {email,password} = req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            res.status(400).json({error:"Please try login with correct credictions"});
            const comparePass = await bcrypt.compare(password,user.password);
        }
        const data ={
            user:{id:userid}
        }
    }

}
)