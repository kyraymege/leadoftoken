const { contactMail } = require("../controllers/contact.js");
const router = require("express").Router();

//Contact Mail
router.get("/contactMail", contactMail);


module.exports = router;