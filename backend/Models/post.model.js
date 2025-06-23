const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
    {
        message:{
            type: String,
            required: true,
        },
        auth:{
            type: String,
            requuired: true
        },
        likes:{
            type: [String]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("post" , postSchema);