const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = multer({
    limits: {
        fileSize: 2000000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error("Please upload an image"));
        }

        cb(undefined, true);
    }
})
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send({hello: "world"});
})

app.post("/upload", upload.single("image"), async (req, res) => {
    console.log(req.file.buffer);
    res.send({buffer: req.file.buffer});
}, (error, req, res, next) => {
    res.status(400).send({error: error.message});
})

app.listen(port, () => {
    console.log("Server is up on port " + port);
})