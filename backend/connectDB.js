const mongoose = require("mongoose");
const connectDB = async()=>{
    try{
        const connectionInstance = await mongoose.connect('mongodb+srv://omdhengle2002:nJBPq0UmIc0sK0oL@cluster0.fs7rgv0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        // console.log(connectionInstance);
        console.log("MongoDB connected")
        
    }
    catch(error){
        console.log("Mongoose connection error",error);
        process.exit(1);
    }
}
module.exports = connectDB;