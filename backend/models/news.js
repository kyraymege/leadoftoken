const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        max: 100
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,        
        trim: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("News", newsSchema);