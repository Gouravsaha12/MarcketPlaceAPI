const express = require("express")
const connect = require("./utils/db")
const authRouter = require("./routes/auth.route")
const tshirt_adminRouter = require("./routes/tshirt_admin.route")
const cookieParser = require("cookie-parser");


require('dotenv').config();

const app = express();
const PORT = 3000;
const URL = process.env.MONGODB_URL

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/admin", tshirt_adminRouter);

connect(URL);

app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`);
})