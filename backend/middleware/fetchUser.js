var jwt = require('jsonwebtoken');
const JWT_Secret = "ThisisSecure";

const fetchUser = (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"Please Authenticate using valid token"});

    }try{
        const data = jwt.verify(token,JWT_Secret);
        req.user = data.user;
        next();
    }
    catch(error){
        res.status(401).send({error:"Please Authenticate using valid token"});
    }
};
module.exports = fetchUser;