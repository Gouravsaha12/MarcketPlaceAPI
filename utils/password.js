const bcrypt = require("bcrypt")

const hashPassword = (pass) => {
    return bcrypt.hashSync(pass, 10)
}

const comparePassword = (pass, hash) => {
    return bcrypt.compareSync(pass, hash)
}