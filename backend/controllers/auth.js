const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

//REGISTER
const register = async (req, res, next) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY
      ).toString(),
    });
    let existUserByMail = await User.findOne({ email: req.body.email });
    if (existUserByMail) return res.status(200).json("There is a registered user with this email address.");

    await newUser.save();

    res.status(201).json({ message: "Registered Succesfully!" });
  } catch (err) {
    res.status(500).json(err);
  }
};

//LOGIN
const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).json("User doesn't exist!");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    if (originalPassword !== req.body.password) return res.status(400).json("Password is not matching!");

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: "5d" });
    const { password, ...others } = user._doc;
    res.cookie("access_token", token, {
      httpOnly: false,
      expires: new Date(Date.now() + (30 * 24 * 3600000))
    })
    res.status(200).json(others)
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
    console.log(err);
  }
};

//GOOGLE AUTH
const googleAuth = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: "5d" });
      res.cookie("access_token", token, {
        httpOnly: false,
        expires: new Date(Date.now() + (30 * 24 * 3600000))
      })
      res.status(200).json(user._doc)
    } else {
      const newUser = new User({
        ...req.body
      })
      const savedUser = await newUser.save();
      const token = jwt.sign({ id: savedUser._id }, process.env.SECRET_KEY, { expiresIn: "5d" });
      res.cookie("access_token", token, {
        httpOnly: false,
        expires: new Date(Date.now() + (30 * 24 * 3600000))
      })
      res.status(200).json(savedUser._doc)
    }
  } catch (err) {
    console.log(err)
  }
}

module.exports = { googleAuth, login, register }

