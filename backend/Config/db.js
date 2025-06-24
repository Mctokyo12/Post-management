const mongoose = require("mongoose");

const connectBD = async () => {
    try {
        mongoose.set("strictQuery",false);
        mongoose.connect(process.env.MONGO_URI).then(()=>console.log("mongo connecte"))
    } catch (err) {
        console.log(err);
        process.exit();
    }
};

module.exports = connectBD;