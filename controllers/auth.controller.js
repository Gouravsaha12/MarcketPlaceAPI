const User = require("../models/user")

const registerUser = async (name, email, pass) => {
    return await User.create({
        username:name,
        email:email,
        hashed_password:pass
    })
}