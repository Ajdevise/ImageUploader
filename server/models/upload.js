const mongoose = require("mongoose");
const { Schema } = mongoose;

const uploadedSchema = new Schema({
    image: {
        type: Buffer
    }
})

const Uploaded = mongoose.model("Upload", uploadedSchema);

module.exports = Uploaded;