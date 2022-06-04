const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const create = async (req, res) => {
  //distructuring req.body
  const { name, email, password, username } = req.body;
  try {
    //check if user exists
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ erros: [{ msg: "user already exists" }] });
    }

    //if user does not exist
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //create new user
    User.create(
      {
        name,
        email,
        username,
        password: hashPassword,
        islogged: false,
        latitude: 0,
        longitude: 0,
      },
      (err, newUser) => {
        if (err) {
          //send error response CODE 500
          return res
            .status(500)
            .json({ errors: [{ msg: "error creating user" }] });
        } else {
          //send a 200 ok with a JSON object with the user to the client.
          //no need to send the password back to the client
          res.json({
            name: newUser.name,
            email: newUser.email,
            username: newUser.username,
            latitude: newUser.latitude,
            longidute: newUser.longitude,
          });
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

const login = async (req, res) => {
  //distructuring req.body
  const { username, password, latitude, longitude } = req.body;

  console.log(req.password);

  try {
    let user = await User.findOne({ username });

    if (!user) {
      res.status(400).json({ erros: [{ msg: "invalid credentials" }] });
    }

    //comparar password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ erros: [{ msg: "invalid credentials" }] });
    }
    //update user with the new coordinates
    User.updateOne(
      { username: username },
      {
        $set: { islogged: true, latitude: latitude, longitude: longitude },
      },
      (errs, result) => {
        if (errs) {
          // treat error send error response
          //there was an error in the database
          console.log("Authenticate -> Server Error");
          console.error(errs);
          res.status(500).send("Server Error");
        }
        if (result) {
          console.log("Authenticate database updated: ", latitude, longitude);
        }
      }
    );
    //set payload for token
    const payload = {
      user: {
        id: user.id,
      },
    };

    //create token
    jwt.sign(
      payload,
      process.env.JWTSECRETKEY,
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res.json({ username: username, token: token });
      }
    );
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }

  /*
  console.log(
    "Server is always sending token:" +
      token +
      "and username: " +
      req.body.username
  );
  */
};

module.exports = {
  create,
  login,
};
