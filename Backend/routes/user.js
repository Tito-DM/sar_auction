const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

const router = require("express").Router();

router.get("/",authMiddleware ,userController.getUsers); //route to deal with the post of the authentication form

module.exports = router;