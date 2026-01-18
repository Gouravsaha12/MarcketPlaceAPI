const express = require("express")
const authController = require("../controllers/auth.controller")
const {isAuth} = require("../middlewares/isAuth")

const router = express.Router()

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/logout", isAuth, authController.logout);

module.exports = router