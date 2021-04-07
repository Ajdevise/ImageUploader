require("./db/mongoose");
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const Uploaded = require("./models/upload");

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
    try {
        const uploaded = new Uploaded({
            image: req.file.buffer
        });

        await uploaded.save();
        res.status(201).send({_id: uploaded._id})
    } catch(e) {
        res.status(400).send(e);
    }
}, (error, req, res, next) => {
    res.status(400).send("You have to upload an image");
})

app.get("/upload/:id", async (req, res) => {
    try {
        const uploaded = await Uploaded.findById(req.params.id);
        
        if(!uploaded) {
            res.send(404);
        }

        res.set("Content-Type", "image/jpg");
        res.send(uploaded.image);
    } catch(e) {
        res.status(400).send(e);
    }
})

app.listen(port, () => {
    console.log("Server is up on port " + port);
})