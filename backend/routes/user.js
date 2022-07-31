const express = require("express");
const { getUser } = require("../controllers/user.js");
const router = require("express").Router();

//Get User
router.get("/find/:id", getUser)

module.exports = router;
