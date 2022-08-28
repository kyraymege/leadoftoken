const  verify  = require("../middleware/middleware.js") ;
const { updateToken, deleteToken, getCreatorsTokens, newToken, addWatchList, voteToken, promoted, findToken, unPublicToken, publicToken, getTokenLength, getRandomTokens, getTodaysBestToken, getYesterdaysBestToken, getSearchedToken } = require("../controllers/tokens.js") ;
const router = require("express").Router();

//CREATE new token
router.post("/newToken", newToken)

//public token
router.get("/publicToken", publicToken)

//getTokenLength
router.get("/getTokenLength", getTokenLength )

//getRandomTokens
router.get("/getRandomTokens", getRandomTokens )

//unPublicToken
router.get("/unPublicToken", unPublicToken )

//promoted
router.get("/promoted", promoted )

//findToken
router.get("/find/:id", findToken )

//voteToken
router.post("/vote/:id",verify, voteToken )

//addWatchList
router.put("/addWatchList/:id",verify, addWatchList )

//Get Today's Best Token
router.get("/getTodaysBestToken", getTodaysBestToken)

//Get Yesterday's Best Token
router.get("/getYesterdaysBestToken", getYesterdaysBestToken)

//Get All Tokens
router.get("/getSearchedToken/:searchTerm", getSearchedToken)

//Get Creator's Tokens
router.get("/getCreatorsTokens/:user_id", getCreatorsTokens);

//Delete Token
router.delete("/:id",verify, deleteToken)

//Update Token
router.put("/:id",verify,updateToken)

module.exports = router;
