const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const multer = require("multer");
const tokenRoute = require("./routes/tokens.js");
const userRoute = require("./routes/user.js");
const authRoute = require("./routes/auth.js");
const path = require("path");
const cookieParser = require("cookie-parser");

dotenv.config();
const PORT = process.env.PORT || 8800;
const app = express();

app.use(cookieParser());
app.use(cors({
    origin: true,
    credentials: true,
}
));
app.use(express.json());
app.use("/api/token", tokenRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/tokenlogos", express.static(path.join(__dirname, "/tokenlogos")))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "tokenlogos")
    }, filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
})

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded!");
})

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("MongoDB connected");
}).catch((error) => console.log(error))

app.listen(PORT, () => {
    console.log("Backend server is running")
})



