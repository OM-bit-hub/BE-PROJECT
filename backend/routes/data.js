const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

router.get('/fetch',async(req,res)=>{
    try{
        const data = await Data.find();
        res.json(data);
        
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }
});

router.post('/add',async (req, res) => {
  	try{
        const {Capacity,CO2,Weather,Humidity,Rainmeter,Temp} = req.body;

        const data = new Data({
            Capacity,
            CO2,
            Weather,
            Humidity,
            Rainmeter,
            Temp
        });
        const savedata = await data.save();
        res.json(savedata);
    }
    catch(error){
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    }
  
});
        // Capacity
        // CO2
        // Weather
        // Humidity,
        // Rainmeter
        // Temp


module.exports = router;