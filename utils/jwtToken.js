const jwt = require("jsonwebtoken")
require("dotenv").config()

const createToken = (name, email, role, id) => {
    return jwt.sign(
        {   
            id: id,
            username:name,
            email:email,
            role:role
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