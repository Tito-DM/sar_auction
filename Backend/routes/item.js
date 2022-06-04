const itemController = require("../controllers/itemsController");
const authMiddleware = require("../middleware/authMiddleware");

const router = require("express").Router();


//adds the middleware to the routes
//check if tolken is valid by using the middleware
router.post("/newitem", authMiddleware, itemController.newItem); //route to deal with the post of the new item form
router.get('/',authMiddleware, itemController.getAllItems); //route to deal with the get all items call to the api
router.delete('/removeitem',authMiddleware ,itemController.removeItem); //route to deal with the post of the new item form
router.put('/removeitem',authMiddleware ,itemController.removeItem); //route to deal with the post of the new item form
router.patch('/bid',authMiddleware, itemController.setBid); //route to deal with the post of the new item form
router.patch('/buynow',authMiddleware, itemController.setBynow); //route to deal with the post of the new item form

module.exports = router;