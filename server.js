const express = require("express")
const connect = require("./utils/db")
const authRouter = require("./routes/auth.route")

require('dotenv').config();

const app = express();
const PORT = 3000;
const URL = process.env.MONGODB_URL

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRouter);

connect(URL);

app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`);
})