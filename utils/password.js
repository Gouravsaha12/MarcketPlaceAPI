const bcrypt = require("bcrypt")

const hashPassword = async (pass) => {
    return await bcrypt.hash(pass, 10)
}

const comparePassword = async (pass, hash) => {
    return await bcrypt.compare(pass, hash)
}

module.exports = {hashPassword, comparePassword}