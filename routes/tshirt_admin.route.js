const express = require("express")
const {isAdmin} = require("../middlewares/isAuth")
const {createTshirt, modifyTshirt, removeTshirt} = require("../controllers/tshirt_admin.controller")

const router = express.Router()

router.post("/add", isAdmin, createTshirt);
router.put("/update/:id", isAdmin, modifyTshirt);
router.delete("/delete/:id", isAdmin, removeTshirt);

module.exports = router;
