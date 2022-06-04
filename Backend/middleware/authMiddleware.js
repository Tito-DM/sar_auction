const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  //get token from header
  const bearHeader = req.headers["authorization"];

  //verify token
  try {
    if (typeof bearHeader !== "undefined") {
      //split at space
      const bearer = bearHeader.split(" ");
      //get token from array
      const bearerToken = bearer[1];
      //set token
      const token = bearerToken;
      //check if not token
      if (!token) {
        return res.status(401).json({ msg: "not token, authorization denied" });
      }
      const decoded = jwt.verify(token, process.env.JWTSECRETKEY);
      req.user = decoded.user;
      next();
    } else {
      //forbidden
      res.status(403).json({ message: "Forbidden" });
    }
  
  } catch (error) {
    res.status(401).json({ msg: "token is not valid" });
  }
};
