const mongoose = require('mongoose');
const {Schema} = mongoose;

const DataSchema = new Schema({
    Capacity:{
        type:Number
    },
    CO2:{
        type:Number
    },
    Weather:{
        type:String
    },
    Humidity:{
        type:Number
    },
    Rainmeter:{
        type:Number
    },
    Temp:{
        type:Number
    }
})
const Data = mongoose.model('Data',DataSchema);
module.exports = Data;