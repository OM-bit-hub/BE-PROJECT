const express = require('express');
const app = express();
const cors = require('cors')
const connectDB = require("./connectDB")

app.use(express.json());
app.use(cors());
app.use('/api/data',require('./routes/data'))

connectDB();

app.listen(5000,()=>{
    console.log("Server is listening at: localhost:5000/")
})
app.get('/',(req,res)=>{
    res.send("Hello World!")
});
