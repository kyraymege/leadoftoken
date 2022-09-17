const { contactMail } = require("../controllers/contact.js");
const router = require("express").Router();

//Contact Mail
router.post("/contactMail", contactMail);


module.exports = router;