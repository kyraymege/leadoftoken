const express = require("express");
const { getUser, verifyToken } = require("../controllers/user.js");
const router = require("express").Router();

//Get User
router.get("/find/:id", getUser)

//Verify Link
router.put("/:id/verify/:token", verifyToken)

module.exports = router;
