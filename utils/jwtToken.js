const jwt = require("jsonwebtoken")
require("dotenv").config()

const createToken = (name, email) => {
    return jwt.sign(
        {
            username:name,
            email:email
        },
        process.env.SECRET_KEY,
        {
            expiresIn:"3d"
        }
    )
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.SECRET_KEY);
};


module.exports = {createToken, verifyToken};