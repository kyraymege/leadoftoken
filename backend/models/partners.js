const mongoose = require("mongoose");

const partnerSchema = new mongoose.Schema({
    partner_name: {
        type: String,
        trim: true,
        required: true,
    },
    partner_img: {
        type: String,
        trim: true,
        required: true,
    },
    partner_youtube_link: {
        type: String,
        trim: true,
        unique: true
    },
    partner_youtube_subs: {
        type: String,
        trim: true,
    },
    partner_twitter_link: {
        type: String,
        trim: true,
        unique: true
    },
    partner_twitter_followers: {
        type: String,
        trim: true,
    },
    partner_telegram_link: {
        type: String,
        trim: true,
        unique: true
    },
    partner_telegram_followers: {
        type: String,
        trim: true,
    },
    partner_tiktok_link: {
        type: String,
        trim: true,
        unique: true
    },
    partner_tiktok_followers: {
        type: String,
        trim: true,
    },
    partner_price: {
        type: String,
        trim: true,
    },
    partner_comunication: {
        type: String,
        trim: true,
    },
},
    { timestamps: true }
)

module.exports = mongoose.model("Partner", partnerSchema);