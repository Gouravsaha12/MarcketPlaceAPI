const mongoose = require("mongoose")

const connect = (URL) => {
    mongoose.connect(URL)
    .then(()=>{
        console.log("DB Connected !!")
    })
    .catch((e)=>{
        console.log("Connection Failed !!")
    })
}

module.exports = connect;
