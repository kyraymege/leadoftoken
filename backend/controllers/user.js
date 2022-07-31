const User = require("../models/user.js");
const VerificationToken = require("../models/verificationToken.js");

//Get user
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
}

const verifyToken = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send({ message: "Invalid link" })

    const token = await VerificationToken.findOne({
      userId: user._id,
      token: req.params.token
    });

    if (!token) return res.status(400).send({ message: "Invalid link" })

    await User.updateOne({_id: user._id, isVerified: true});
    await token.remove();

    res.status(200).send({message : "Email verified successfully"})
  } catch (error) {
    res.status(500).send({message : "Email verification is not working"})
  }
}

module.exports = { getUser, verifyToken };