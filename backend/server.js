const express = require('express');
const app = express();
const cors = require('cors')
const connectDB = require("./connectDB")
connectDB();

// app.use('/api/data',require('./routes/data'))

app.listen(5000,()=>{
    console.log("Server is listening at: localhost:5000/")
})
app.get('/',(req,res)=>{
    res.send("Hello World!")
});
