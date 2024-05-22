const express = require('express');
const app = express();
const cors = require('cors')
const connectDB = require("./connectDB")
connectDB();
const Data= require('./routes/data')
app.use('/api/data',Data)

app.listen(5000,()=>{
    console.log("Server is listening at: localhost:5000/")
})
app.get('/',(req,res)=>{
    res.send("Hello World!")
});
