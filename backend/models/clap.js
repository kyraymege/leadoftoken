const mongoose = require("mongoose");

const clapSchema = new mongoose.Schema({
    news_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'News'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
},
    { timestamps: true }
)

module.exports = mongoose.model("Clap", clapSchema);