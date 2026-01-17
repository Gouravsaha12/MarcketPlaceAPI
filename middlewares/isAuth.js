const { verifyToken } = require("../utils/jwtToken");

const isAuth = (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({ message: "Not logged in" });
        }

        const data = verifyToken(token);
        req.user = data;

        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = isAuth;