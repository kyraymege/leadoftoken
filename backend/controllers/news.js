const mongoose = require("mongoose");
const User = require("../models/user.js");
const News = require("../models/news.js");
const Clap = require("../models/clap.js");

// CREATE NEWS
const createNews = async (req, res) => {
    const { title, image, content, author } = req.body;
    const news = new News({
        title: title,
        content: content,
        image: image,
        author: author,
    });
    try {
        const savedNews = await news.save();
        res.status(201).json(savedNews);
    } catch (err) {
        res.status(500).json(err);
    }
}

//CLAP NEWS
const clapNews = async (req, res) => {
    const { id } = req.params;

    const news = await News.findById(id);
    const user = await User.findById(req.body.user_id);

    if (!user) return res.status(404).json("User not found! You must login!");
    if (!news) return res.status(404).json("Post does not exist!");

    Clap.find({ news_id: news._id, user_id: user._id })
        .then(async (ress) => {
            if (ress.length === 0) {
                const newClap = new Clap({
                    news_id: id,
                    user_id: req.body.user_id,
                });
                try {
                    await newClap.save();
                    res.status(200).json("Clapped!");
                } catch (error) {
                    res.status(500).json(error);
                }
            } else {
                await Clap.deleteOne({ news_id: news._id, user_id: user._id });
                res.status(200).json("Your clap removed!");
            }
        })
        .catch((error) =>
            console.log(error)

        )
}

//DELETE NEWS
const deleteNews = async (req, res) => {
    await News.findByIdAndDelete(req.params.id);
    res.status(200).json("News has been deleted!")
}

//UPDATE NEWS
const updateNews = async (req, res) => {
    try {
        await News.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            content: req.body.content,
            image: req.body.image,
        }, { new: true });
        res.status(200).json({ message: "Your News updated!" });
    } catch (error) {
        res.status(500).json(error)
    }
}

//GET NEWs
const findNews = async (req, res) => {
    const { id } = req.params;
    try {
        News.aggregate([
            {
                $match: { _id: mongoose.Types.ObjectId(id) }
            },
            {
                $lookup:
                {
                    from: "claps",
                    localField: "_id",
                    foreignField: "news_id",
                    as: "clap"
                }
            },
            {
                $project: {
                    _id: "$_id",
                    title: "$title",
                    content: "$content",
                    image: "$image",
                    author: "$author",
                    createdAt: "$createdAt",
                    clap: { $size: "$clap" },

                }
            },
        ]).then(news => res.status(200).json(news[0]))
    } catch (err) {
        res.status(500).json(err);
    }
}

//MOST CLAPS NEWS
const mostClaps = async (req, res) => {
    try {
        News.aggregate([
            {
                $lookup:
                {
                    from: "claps",
                    localField: "_id",
                    foreignField: "news_id",
                    as: "clap"
                }
            },
            {
                $project: {
                    _id: "$_id",
                    title: "$title",
                    image: "$image",
                    clap: { $size: "$clap" },

                }
            },
            { $sort: { clap: -1 } },
            { $limit: 5 },
        ]).then(news => res.status(200).json(news))
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET PROMOTED NEWS
const promotedNews = async (req, res) => {
    try {
        News.aggregate([
            {
                $match: { isPromoted: true }
            },
            {
                $lookup:
                {
                    from: "claps",
                    localField: "_id",
                    foreignField: "news_id",
                    as: "clap"
                }
            },
            {
                $project: {
                    _id: "$_id",
                    title: "$title",
                    image: "$image",
                    author: "$author",
                    createdAt: "$createdAt",
                    clap: { $size: "$clap" },

                }
            },
            { $sort: { clap: -1 } },
            { $sample: { size: 3 } }
        ]).then(news => res.status(200).json(news))
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET NEWS
const getNews = async (req, res) => {
    const { count } = req.query;
    const limit = 3;
    try {
        News.aggregate([
            {
                $match: { isPromoted: false }
            },
            {
                $lookup:
                {
                    from: "claps",
                    localField: "_id",
                    foreignField: "news_id",
                    as: "clap"
                }
            },
            {
                $project: {
                    _id: "$_id",
                    title: "$title",
                    image: "$image",
                    author: "$author",
                    createdAt: "$createdAt",
                    clap: { $size: "$clap" },

                }
            },
            { $sort: { createdAt: -1 } },
            { $skip: ((count-1) * limit) },
            { $limit: limit },
        ]).then(news => res.status(200).json(news))
    } catch (err) {
        res.status(500).json(err);
    }
}

//GET USER'S NEWS
const getUsersNews = async (req, res) => {
    const { user_id } = req.params;   
    try {
        News.aggregate([
            {
                $match: { author: user_id }
            },
            {
                $lookup:
                {
                    from: "claps",
                    localField: "_id",
                    foreignField: "news_id",
                    as: "clap"
                }
            },
            {
                $project: {
                    _id: "$_id",
                    title: "$title",
                    image: "$image",
                    createdAt: "$createdAt",
                    clap: { $size: "$clap" },

                }
            },
            { $sort: { createdAt: -1 } },
        ]).then(news => res.status(200).json(news))
    } catch (err) {
        res.status(500).json(err);
    }
}



module.exports = { createNews, clapNews, mostClaps, deleteNews, updateNews, findNews, promotedNews, getNews, getUsersNews };