const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/upload-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})