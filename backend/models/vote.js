const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
    token_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Token'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
},
    { timestamps: true }
)

module.exports = mongoose.model("Vote", voteSchema);