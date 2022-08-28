const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    content: {
        type: Object,
        required: true,
    },
    image: {
        type: String,
        trim: true,
    },
    author: {
        type: String,
        trim: true,
        required: true,
    },
    isPromoted: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
)

module.exports = mongoose.model("News", newsSchema);