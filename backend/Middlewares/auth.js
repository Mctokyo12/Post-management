const jwt = require('jsonwebtoken');

module.exports.authUser = async (req ,res ,next) => {
    try {

        // return res.status(200).json({message: "hello "+req.hearders.Authorization});
        let tmp = req.header("Authorization");
        
        //slice bearer off of string
        const token = tmp ? tmp.slice(7, tmp.length) : "";
        // const token = req.hearders.Authorization.splice("")[1];
       
        

        if(!token){
           return res.status(200).json({message: "invalide token"});
        }
        jwt.verify(token , process.env.TOKEN_SECRET , async (err , decodetoken)=>{
            if(err){
                return res.status(200).json({message: "Invalid Authentification"});
            }
            red.user = decodetoken;
            next();
        });

        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}