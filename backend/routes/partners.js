const verify = require("../middleware/middleware.js");
const { newPartner, deletePartner, updatePartner, getPartners } = require("../controllers/partners.js");
const router = require("express").Router();

//CREATE PARTNER
router.post("/newPartner", newPartner);

//DELETE PARTNER
router.delete("/:id", deletePartner);

//UPDATE PARTNER
router.put("/:id", updatePartner);

//GET PARTNERS
router.get("/getPartners", getPartners);


module.exports = router;