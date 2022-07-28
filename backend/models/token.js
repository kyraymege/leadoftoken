const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
    token_name: {
        type: String,
        required: true,
        trim: true
    },
    token_symbol: {
        type: String,
        required: true,
    },
    token_network: {
        type: String,
        required: true,
    },
    token_description: {
        type: String,
        required: true,
    },
    token_price: {
        type: String,
        trim: true
    },
    token_marketcap: {
        type: String,
        trim: true
    },
    token_image: {
        type: String,
        trim: true
    },
    token_website: {
        type: String,
        required: true,
    },
    token_twitter: {
        type: String,

    },
    token_telegram: {
        type: String,

    },
    token_instagram: {
        type: String,

    },
    token_discord: {
        type: String,

    },
    token_reddit: {
        type: String,

    },
    token_contractAddress: {
        type: String,

    },
    launchdate: {
        type: String,
        required: true
    },
    token_audit: {
        type: String,
    },
    token_creator: {
        type: String,
    },
    isPresale: {
        type: Boolean,
        required: true
    },
    isPromoted: {
        type: Boolean,
        required: true,
        default: false
    },
    isPublic: {
        type: Boolean,
        required: true,
        default: false
    },
},
    { timestamps: true }
)
module.exports = mongoose.model("Token", tokenSchema);