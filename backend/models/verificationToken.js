const mongoose = require("mongoose");

const VerificationToken = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
        unique: true
    },    
    token:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now(),
        expires: 1800
    }
},    
)

module.exports = mongoose.model("verificationToken", VerificationToken);