const User = require("../models/user")
const authService = require("../services/auth.service")
const {createToken} = require("../utils/jwtToken");
const { comparePassword } = require("../utils/password");

const register = async (req, res) => {
    const {username, email, password} = req.body;
    const user = await User.findOne({ email });

    if (user) {
        return res.status(409).json({ message: "User already exists" });
    }

    try {
        const newUser = await authService.register(username, email, password );
        return res.status(201).json(newUser);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Registration failed" });
    }
};

const login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(409).json({ message: "User do not exist" });
    }

    if(! await comparePassword(password, user.hashed_password)){
        return res.status(409).json({ message: "Wrong password" });
    }

    try {
        const token = createToken(user.username, email);
        res.cookie("token", token, {
            maxAge : 3*24*60*60*1000,
            httpOnly : true
        })
        return res.status(201).json(user);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Login failed" });
    }
}

const logOut = (req, res) => {
    try{
        res.clearCookie("token");
        return res.status(201).json({ message: "Logged Out" });
    } catch (e) {
        return res.status(500).json({ message: "LogOut failed" });
    }
}

module.exports = {register, login, logOut}