const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true
    },
    role : {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    hashed_password: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;