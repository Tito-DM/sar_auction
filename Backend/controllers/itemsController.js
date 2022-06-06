const Item = require("../models/item.js");
const User = require("../models/user.js");

const newItem = async (req, res) => {
  let newUser;
  //distructuring req.body
  const { description, currentbid, remainingtime, buynow } = req.body;
  //check if item already exists using the description field if not create item;
  await Item.findOne({ description: description }, (err, ExistingItem) => {
    if (err) {
      //there was an error in the database
      //Send 500 code
      res.status(500).json("item already exists");
    }
    //check if user exists
    User.findById(req.user.id, (errs, user) => {
      if (errs) {
        res.status(500).json(errs);
      }
      if (!user) {
        //user does not exist
        //Send 404 code
        res.status(404).json({ msg: "User does not exist" });
      }

      if (ExistingItem == null) {
        //item does not exist and can be created
        //create item
        Item.create(
          {
            description,
            currentbid,
            remainingtime,
            buynow,
            owner: user.username,
            sold: false,
            user: req.user.id, //user id extracted from token
          },
          (erros, newItem_) => {
            if (erros) {
              //database error occurred
              res.status(500).json(erros);
            } else {
              //send 200 ok
              res.status(200).json(newItem_);
            }
          }
        );
      } else {
        //item exists
        //send 400 code
        res.status(400).json({ message: "Item already exists" });
      }
    }).select("-password");
  });
};

const getAllItems = async (req, res) => {
  //get all items
  try {
    const items = await Item.find(); //sort to most recent
    res.status(200).json(items);
  } catch (error) {
    console.error(error.message);
    res.status(500).json(err);
    
  }
};

const setBid = async (req, res) => {
  //update item
  const { currentbid,id } = req.body;
  try {
    const item = await Item.findById(id);

    if (!item) res.status(404).json({ msg: "item not found" });
    //check user
    if (item.user.toString() === id) {
      return res.status(401).json({ msg: "user not authorized" });
    }

    await item.updateOne({
      currentbid,
      
    });

    res.json("bid was set");
  } catch (error) {
    console.error(error.message);
    if (error.kind === "objectId")
      res.status(404).json({ msg: "item not found" });
    res.status(500).send("Server Error");
  }
};

const setBynow = async (req, res) => {
  //update item
  const { buynow,id } = req.body;
  try {
    const item = await Item.findById(id);

    if (!item) res.status(404).json({ msg: "item not found" });
    //check user
    if (item.user.toString() === id) {
      return res.status(401).json({ msg: "user not authorized" });
    }

    await item.updateOne({
      buynow,
    });

    res.json("bid was set");
  } catch (error) {
    console.error(error.message);
    if (error.kind === "objectId")
      res.status(404).json({ msg: "item not found" });
    res.status(500).send("Server Error");
  }
};

const updateItem = async (req, res) => {
  //update item
  const { description,  remainingtime } = req.body;
  try {
    const item = await Item.findById(req.body.id);

    if (!item) res.status(404).json({ msg: "item not found" });
    //check user
    if (item.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "user not authorized" });
    }

    await item.updateOne({
      description ,
      remainingtime,
    });

    res.json("item was updated");
  } catch (error) {
    console.error(error.message);
    if (error.kind === "objectId")
      res.status(404).json({ msg: "item not found" });
    res.status(500).send("Server Error");
  }
};

const removeItem = async (req, res) => {
  console.log("remove ",req.body);
  // desxructuring req.body
  const { _id } = req.body;
  console.log("remove ",_id);
  
  //remove item
  try {
    const item = await Item.findById(_id);

    if (!item) res.status(404).json({ msg: "item not found" });
    //check user if is same user
    if (item.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "user not authorized" });
    }

    await item.remove();

    res.json("item was deleted");
  } catch (error) {
    console.error(error.message);
    if (error.kind === "objectId")
      res.status(404).json({ msg: "item not found" });
    res.status(500).send("Server Error");
  }
  
  
};

module.exports = {
  newItem,
  getAllItems,
  removeItem,
  updateItem,
  setBid,
  setBynow,
};
