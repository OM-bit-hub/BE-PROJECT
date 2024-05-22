const express = require('express');
const router = express.Router();

const Data = require('../models/Data');

router.get('/fetchdata',fetchUser,async(req,res)=>{
    try{
        const datas = await Data.find();
        res.json(datas);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Internal server error");
    }
});


module.exports = Data;