const router = require("express").Router();
const authController = require("../controllers/authController");

router.post("/login" ,authController.login); //route to deal with the post of the authentication form
router.post("/register", authController.create); //route to deal with the post of the register form

module.exports = router;
