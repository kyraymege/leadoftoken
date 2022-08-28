const Token = require("../models/token.js");
const Vote = require("../models/vote.js");
const User = require("../models/user.js");
const mongoose = require("mongoose");

// CREATE TOKEN
const newToken = async (req, res) => {
  const newToken = new Token({
    token_name: req.body.token_name,
    token_symbol: req.body.token_symbol,
    token_network: req.body.token_network,
    token_description: req.body.token_description,
    token_price: req.body.token_price,
    token_marketcap: req.body.token_marketcap,
    token_image: req.body.token_image,
    token_website: req.body.token_website,
    token_twitter: req.body.token_twitter,
    token_telegram: req.body.token_telegram,
    token_instagram: req.body.token_instagram,
    token_discord: req.body.token_discord,
    token_reddit : req.body.token_reddit,
    token_audit: req.body.token_audit,
    token_contractAddress: req.body.token_contractAddress,
    launchdate: req.body.launchdate,
    token_creator: req.body.token_creator,
    isPresale: req.body.isPresale,
  });
  try {
    const savedToken = await newToken.save();
    res.status(201).json(savedToken);
  } catch (err) {
    res.status(500).json(err);
    console.log(err)
  }
};

//GET Public TOKENS
const publicToken = async (req, res) => {
  const page = req.query.page || 0;
  const as = req.query.as === undefined ? 1 : req.query.as;
  const tokensPerPage = 5;
  switch (as) {
    case "1":
      Token.aggregate([
        {
          $match: { isPublic: true }
        },
        {
          $lookup:
          {
            from: "votes",
            localField: "_id",
            foreignField: "token_id",
            as: "vote"
          }
        },
        {
          $project: {
            _id: "$_id",
            token_name: "$token_name",
            token_image: "$token_image",
            token_marketcap: "$token_marketcap",
            token_price: "$token_price",
            token_symbol: "$token_symbol",
            launchdate: "$launchdate",
            createdAt: "$createdAt",
            vote: { $size: "$vote" },

          }
        },
        { $sort: { vote: -1 } },
        { $skip: ((page * tokensPerPage) - tokensPerPage) },
        { $limit: tokensPerPage },


      ]).then(token => res.status(200).json(token)).catch((err) => {
        res.status(500).json(err)
      })
      break;
    case "2":
      const getToday = () => {
        var today = new Date();
        let year = today.getFullYear();
        let month = ("0" + (today.getMonth() + 1)).slice(-2);
        let day = ("0" + (today.getDate() - 1)).slice(-2);
        return new Date(year + "-" + month + "-" + day + "T00:00:00.0Z");
      }
      const getTomorrow = () => {
        var today = new Date();
        let year = today.getFullYear();
        let month = ("0" + (today.getMonth() + 1)).slice(-2)
        let day = ("0" + (today.getDate() + 1)).slice(-2);
        return new Date(year + "-" + month + "-" + day + "T00:00:00.0Z");
      }

      Token.aggregate([
        {
          $match: { isPublic: true }
        },
        {
          $lookup:
          {
            from: "votes",
            localField: "_id",
            foreignField: "token_id",
            let: { createdAt: "$createdAt" },
            pipeline: [
              {
                $match:
                {
                  createdAt: { $gte: getToday(), $lt: getTomorrow() }
                }
              }
            ],
            as: "vote"
          }
        },
        {
          $project: {
            _id: "$_id",
            token_name: "$token_name",
            token_image: "$token_image",
            token_marketcap: "$token_marketcap",
            token_price: "$token_price",
            launchdate: "$launchdate",
            token_symbol: "$token_symbol",
            createdAt: "$createdAt",
            vote: { $size: "$vote" },

          }
        },
        { $sort: { vote: -1 } },
        { $skip: ((page * tokensPerPage) - tokensPerPage) },
        { $limit: tokensPerPage },


      ]).then(token => res.status(200).json(token)).catch((err) => {
        res.status(500).json(err)
      })
      break;
    case "3":
      Token.aggregate([
        {
          $match: { isPublic: true, isPresale: true }
        },
        {
          $lookup:
          {
            from: "votes",
            localField: "_id",
            foreignField: "token_id",
            as: "vote"
          }
        },
        {
          $project: {
            _id: "$_id",
            token_name: "$token_name",
            token_image: "$token_image",
            token_marketcap: "$token_marketcap",
            token_price: "$token_price",
            token_symbol: "$token_symbol",
            launchdate: "$launchdate",
            vote: { $size: "$vote" },

          }
        },
        { $sort: { vote: -1 } },
        { $skip: ((page * tokensPerPage) - tokensPerPage) },
        { $limit: tokensPerPage },


      ]).then(token => res.status(200).json(token)).catch((err) => {
        res.status(500).json(err)
      })
      break;
    case "4":
      Token.aggregate([
        {
          $match: { isPublic: true }
        },
        {
          $lookup:
          {
            from: "votes",
            localField: "_id",
            foreignField: "token_id",
            as: "vote"
          }
        },
        {
          $project: {
            _id: "$_id",
            token_name: "$token_name",
            token_image: "$token_image",
            token_marketcap: "$token_marketcap",
            token_price: "$token_price",
            launchdate: "$launchdate",
            token_symbol: "$token_symbol",
            vote: { $size: "$vote" },
            createdAt: "$createdAt"

          }
        },
        { $sort: { createdAt: -1 } },
        { $skip: ((page * tokensPerPage) - tokensPerPage) },
        { $limit: tokensPerPage },


      ]).then(token => res.status(200).json(token)).catch((err) => {
        res.status(500).json(err)
      })
      break;

    default:
      Token.aggregate([
        {
          $match: { isPublic: true }
        },
        {
          $lookup:
          {
            from: "votes",
            localField: "_id",
            foreignField: "token_id",
            as: "vote"
          }
        },
        {
          $project: {
            _id: "$_id",
            token_name: "$token_name",
            token_image: "$token_image",
            token_marketcap: "$token_marketcap",
            token_price: "$token_price",
            token_symbol: "$token_symbol",
            launchdate: "$launchdate",
            vote: { $size: "$vote" },

          }
        },
        { $sort: { vote: -1 } },
        { $skip: ((page * tokensPerPage) - tokensPerPage) },
        { $limit: tokensPerPage },


      ]).then(token => res.status(200).json(token)).catch((err) => {
        res.status(500).json(err)
      })
      break;
  }
}

//GET TOKEN LENGTH
const getTokenLength = async (req, res) => {
  Token.estimatedDocumentCount().then((ress) => {
    res.status(200).json(ress)
  }).catch((err) => {
    res.status(500).json(err)
  })
};

//Get Random Tokens
const getRandomTokens = async (req, res) => {

  Token.aggregate([
    { $match: { isPublic: true } },
    { $sample: { size: 4 } }
  ]).then((token) => res.status(200).json(token)).catch((err) => {
    res.status(500).json(err)
  })

}


//GET unPublic TOKENS
const unPublicToken = async (req, res) => {
  try {
    const tokens = await Token.find({ isPublic: false });
    res.status(200).json(tokens.reverse());
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET promoted TOKENS
const promoted = async (req, res) => {
  try {
    Token.aggregate([
      {
        $match: { isPromoted: true, isPublic: true }
      },
      {
        $lookup:
        {
          from: "votes",
          localField: "_id",
          foreignField: "token_id",
          as: "vote"
        }
      },
      {
        $project: {
          _id: "$_id",
          token_name: "$token_name",
          token_image: "$token_image",
          token_marketcap: "$token_marketcap",
          token_price: "$token_price",
          token_symbol: "$token_symbol",
          launchdate: "$launchdate",
          vote: { $size: "$vote" },

        }
      },
      { $sort: { vote: -1 } },
    ]).then(token => res.status(200).json(token))
  } catch (err) {
    res.status(500).json(err);
  }
}

//GET TOKEN
const findToken = async (req, res) => {
  const { id } = req.params;
  try {
    Token.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(id) }
      },
      {
        $lookup:
        {
          from: "votes",
          localField: "_id",
          foreignField: "token_id",
          as: "vote"
        }
      },
      {
        $project: {
          _id: "$_id",
          token_name: "$token_name",
          token_image: "$token_image",
          token_marketcap: "$token_marketcap",
          token_symbol: "$token_symbol",
          token_network: "$token_network",
          token_description: "$token_description",
          token_website: "$token_website",
          token_twitter: "$token_twitter",
          token_telegram: "$token_telegram",
          token_instagram: "$token_instagram",
          token_discord: "$token_discord",
          token_reddit: "$token_reddit",
          token_contractAddress: "$token_contractAddress",
          token_audit: "$token_audit",
          isPublic: "$isPublic",
          isPromoted: "$isPromoted",
          isPresale: "$isPresale",
          token_price: "$token_price",
          launchdate: "$launchdate",
          vote: { $size: "$vote" },

        }
      },
    ]).then(token => res.status(200).json(token[0]))
  } catch (err) {
    res.status(500).json(err);
  }
}

//VOTE TOKEN
const voteToken = async (req, res) => {
  const { id } = req.params;

  const token = await Token.findById(id);
  const user = await User.findById(req.body.user_id);

  if (!user) return res.status(404).json("User not found! You must login!");
  if (!token) return res.status(404).json("Post does not exist!");

  Vote.find({ token_id: token._id, user_id: user._id })
    .then(async (ress) => {
      if (ress.length === 0) {
        const newVote = new Vote({
          token_id: id,
          user_id: req.body.user_id,
        });
        try {
          await newVote.save();
          res.status(200).json("Voted!");
        } catch (error) {
          res.status(500).json(error);
        }
      } else {
        await Vote.deleteOne({ token_id: token._id, user_id: user._id });
        res.status(200).json("Your vote removed!");
      }
    })
    .catch((error) =>
      console.log(error)

    )
}

//add Watchlist
const addWatchList = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(req.body.user_id);
  const token = await Token.findById(id);
  if (!user) return res.status(404).json("User not found! You must login!");
  if (!token) return res.status(404).json("token does not exist!");
  const isAdded = user.token_watchList.find((i) => i._id == id);
  if (isAdded) {
    await user.updateOne({ $pull: { token_watchList: token } });
    res.status(200).json("Token was removed on your Watch List!");
  } else {
    await user.updateOne({ $push: { token_watchList: token } });
    res.status(200).json("Token added to your Watch List!");
  }
}

//get Today's Best Token
const getTodaysBestToken = async (req, res) => {
  const getToday = () => {
    var today = new Date();
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + (today.getDate() - 1)).slice(-2);
    return new Date(year + "-" + month + "-" + day + "T00:00:00.0Z");
  }
  const getTomorrow = () => {
    var today = new Date();
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2)
    let day = ("0" + (today.getDate() + 1)).slice(-2);
    return new Date(year + "-" + month + "-" + day + "T00:00:00.0Z");
  }

  Token.aggregate([
    {
      $match: { isPublic: true }
    },
    {
      $lookup:
      {
        from: "votes",
        localField: "_id",
        foreignField: "token_id",
        let: { createdAt: "$createdAt" },
        pipeline: [
          {
            $match:
            {
              createdAt: { $gte: getToday(), $lt: getTomorrow() }
            }
          }
        ],
        as: "vote"
      }
    },
    {
      $project: {
        _id: "$_id",
        token_name: "$token_name",
        token_image: "$token_image",
        token_marketcap: "$token_marketcap",
        token_price: "$token_price",
        launchdate: "$launchdate",
        token_symbol: "$token_symbol",
        createdAt: "$createdAt",
        vote: { $size: "$vote" },

      }
    },
    { $sort: { vote: -1 } },
    { $limit: 1 },


  ]).then(token => res.status(200).json(token)).catch((err) => {
    res.status(500).json(err)
  })
}

//get Yesterday's Best Token
const getYesterdaysBestToken = async (req, res) => {
  const getToday = () => {
    var today = new Date();
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let day = ("0" + (today.getDate() - 2)).slice(-2);
    return new Date(year + "-" + month + "-" + day + "T00:00:00.0Z");
  }
  const getTomorrow = () => {
    var today = new Date();
    let year = today.getFullYear();
    let month = ("0" + (today.getMonth() + 1)).slice(-2)
    let day = ("0" + (today.getDate())).slice(-2);
    return new Date(year + "-" + month + "-" + day + "T00:00:00.0Z");
  }

  Token.aggregate([
    {
      $match: { isPublic: true }
    },
    {
      $lookup:
      {
        from: "votes",
        localField: "_id",
        foreignField: "token_id",
        let: { createdAt: "$createdAt" },
        pipeline: [
          {
            $match:
            {
              createdAt: { $gte: getToday(), $lt: getTomorrow() }
            }
          }
        ],
        as: "vote"
      }
    },
    {
      $project: {
        _id: "$_id",
        token_name: "$token_name",
        token_image: "$token_image",
        token_marketcap: "$token_marketcap",
        token_price: "$token_price",
        launchdate: "$launchdate",
        token_symbol: "$token_symbol",
        createdAt: "$createdAt",
        vote: { $size: "$vote" },

      }
    },
    { $sort: { vote: -1 } },
    { $limit: 1 },


  ]).then(token => res.status(200).json(token)).catch((err) => {
    res.status(500).json(err)
  })
}

const getSearchedToken = async (req, res) => {
  const { searchTerm } = req.params;
  await Token.find({ token_name: { '$regex': searchTerm, '$options': 'i' } }).then((response) => {
    res.status(200).json(response);
  }).catch((err) => {
    console.log(err)
  })
}

const getCreatorsTokens = async (req,res) =>{    
  await Token.find({token_creator: req.params.user_id}).then((response)=>{
    res.status(200).json(response);
  }).catch((err)=>{
    console.log(err)
  })
}

const deleteToken = async (req,res) =>{
  await Token.findByIdAndDelete(req.params.id);
  res.status(200).json("Token has been deleted!")
}

const updateToken = async (req, res) =>{
  try {
    await Token.findByIdAndUpdate(req.params.id, { 
      token_name: req.body.token_name,
      token_symbol: req.body.token_symbol,
      token_description: req.body.token_description,
      token_price: req.body.token_price,
      token_marketcap: req.body.token_marketcap,
      token_website: req.body.token_website,
      token_twitter: req.body.token_twitter,
      token_telegram: req.body.token_telegram,
      token_instagram: req.body.token_instagram,
      token_discord: req.body.token_discord,
      token_reddit : req.body.token_reddit,
      token_audit: req.body.token_audit,
      isPresale: req.body.isPresale,
     }, { new: true });
    res.status(200).json({message: "Your token updated!"});
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = { updateToken, deleteToken, getCreatorsTokens, newToken, publicToken, getTokenLength, getRandomTokens, unPublicToken, promoted, findToken, voteToken, addWatchList, getTodaysBestToken, getYesterdaysBestToken, getSearchedToken }