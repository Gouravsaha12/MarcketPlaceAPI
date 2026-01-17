const {hashPassword, comparePassword} = require("../utils/password")
const User = require("../models/user")

const register = async (name, email, password) => {
    const hash_pass = await hashPassword(password);
    return User.create({username:name, email:email, hashed_password:hash_pass});
}

module.exports = {register}