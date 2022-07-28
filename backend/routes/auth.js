const express = require("express");
const { googleAuth, login, register } = require("../controllers/auth.js");
const router = require("express").Router();

//CREATE A USER
router.post("/register", register)

//SIGN IN
router.post("/login", login)

//GOOGLE AUTH
router.post("/googleLogin", googleAuth)

module.exports = router;
