const jwt = require('jsonwebtoken');

module.exports.authUser = async (req ,res ,next) => {
    try {
        const token = req.hearders.Authorization.splice("")[1];
        if(!token){
            res.status(200).json({message: "invalide token"});
        }
        jwt.verify(token , "RANDOM_TOKEN_SECRET" , (err , decodetoken)=>{
            if(err){
                res.status(200).json({message: "Invalid Authentification"});
            }
            red.user = decodetoken;
            next();
        });

        
    } catch (error) {
        res.status(400).json({error});
    }
}