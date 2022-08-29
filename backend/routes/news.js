const  verify  = require("../middleware/middleware.js") ;
const { createNews, clapNews, deleteNews, updateNews, findNews, mostClaps, promotedNews, getNews, getUsersNews } = require("../controllers/news.js") ;
const router = require("express").Router();

//CREATE NEWS
router.post("/newArticle", verify, createNews)

//CLAP NEWS
router.post("/clap/:id", verify, clapNews)

//DELETE NEWS
router.delete("/:id", verify, deleteNews)

//UPDATE NEWS
router.put("/:id", verify, updateNews)

//FIND NEWS
router.get("/find/:id", findNews)

//Most Claps
router.get("/mostClaps",  mostClaps)

//Promoted News
router.get("/promoted", promotedNews)

//Promoted News
router.get("/getNews", getNews)

//Get User's News
router.get("/getUsersNews/:user_id", getUsersNews)

module.exports = router;