const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,        
        min: 6,
    },
    token_watchList: [{
        type: Object,
        ref: 'Token',
    }],
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("User", userSchema);