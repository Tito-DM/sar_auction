/**
 * api code file
 */
const express = require('express');
const jwt = require('jsonwebtoken');
const item = require('../models/item.js');
const user = require('../models/user.js');
const secret = 'this is the secret secret secret 12356'; // same secret as in socket.js used here to sign the authentication token
//get the file with the socket api code
const socket = require('./socket.js');

/*
 * POST User sign in. User Sign in POST is treated here
 */
exports.Authenticate =  (req, res) =>  {
  console.log('Authenticate -> Received Authentication POST, verify in database if user is valid');

  /*user.findOne({$and:[{username: req.body.username}, {password: req.body.password}]}, (err, User) =>{
       if (err) {
        //there was an error in the database
         console.log('Authenticate -> Server Error');
         console.error(err);
         res.status(500).send("Server Error");
       }
       if (User != null){ //user exists update to is logged = true and send token response
         user.updateOne({username: req.body.username}, {$set: {islogged: true, latitude: req.body.latitude, longitude: req.body.longitude}}, (err, result) => {
           if (err) {
            // treat error send error response
           }
           if (result) {
             console.log("Authenticate database updated: ", req.body.latitude, req.body.longitude);
           }
         });
         //send token and json response.
       }
       else {   //if user not valid
         console.log("Authenticate -> Does not exist.");
         res.status(401).send('Wrong user or password');
       //user does not exist
       }
    }); */
    console.log("Server is always sending token:" + token + "and username: " + req.body.username );
    var token = jwt.sign(req.body, secret);
    res.json({username: req.body.username, token: token});  

};

/*
 * POST User registration. User registration POST is treated here
 */
exports.NewUser =  (req, res) => {
  console.log("NewUser -> received form submission new user content:",req.body);

  // check if username already exists 
  /*
  user.findOne(..query..., (err, result) => {
    if (err) {
      //send error response CODE 500
    }

    if (result == null) {  //result of query is null user does not exist yet
      //create a new user
      //database record create example:
      user.create({ name : req.body.name, email : req.body.email, username: req.body.username,
        password: req.body.password, islogged: false, latitude: 0, longitude: 0 } , (err, newUser) => {
        if (err) {
          //send error response CODE 500
        } else {
          //send a 200 ok with a JSON object with the user to the client.
          res.json({
            name: newUser.name,
            email: newUser.email,
            username: newUser.username,
            password: newUser.password,
            latitude: newUser.latitude,
            longidute: newUser.longitude
          });
        }
      });
    } else {  //it the user already exist reply with error
      console.log("NewUser -> Username already exists.")
      res.status(403).send('Username already exists');
    }
  })  */
  console.log("Sending dummy reply database creation of new user in database not implemented!!!")
  res.json({
    name: newUser.name,
    email: newUser.email,
    username: newUser.username,
    password: newUser.password,
    latitude: newUser.latitude,
    longidute: newUser.longitude
  });

};

/*
 * POST Item creation. Item creation POST is treated here
 */
exports.NewItem =  (req, res) => {
  console.log("NewItem -> received form submission new item");
	console.log(req.body);
  //check if item already exists using the description (description is unique per item) field if not create item;
  console.log("Sending dummy reply database creation of new item in database not implemented!!!")
  res.json({
             description: newItem.description,
             currentbid: newItem.currentbid,
                    remainingtime: newItem.remainingtime,
                    buynow: newItem.buynow,
                    wininguser: newItem.wininguser,
                    owner: newItem.owner
                  });

};

/*
 * POST Item removal. Item removal POST is treated here
 */
exports.RemoveItem =  (req, res) => {
  console.log("RemoveItem -> received form submission remove item");
  console.log(req.body);
  //check if item already exists using the description field if not create item;
  /*item.findOne({...query...}, (err, ExistingItem) =>{
    if (err) {
      //there was an error in the database
      //Send 500 code
    }
    if (ExistingItem == null){ //item does not exist and can not be removed

    }
    else {
      //item exists
      item.remove({description : req.body.description} , (err) => {
        if (err) {
          //database error occurred
        }
        else {
        //send 200 ok

        }
      });
    }
  });*/
  console.log("remove item API not implemeted yet sending 200 OK with not effect in database")
  res.status(200).send("OK");
};


/*
GET to obtain all active items in the database
*/
exports.GetItems = (req, res) => {
  //find all items in the database 
  //send response with JSON containg all active items {sold:false}

  // Dummy items just for example you should send the items that exist in the database
  let item1 = new item({description:'Smartphone',currentbid:250, remainingtime:120, buynow:1000, wininguser:'dummyuser1', sold:false,owner:"student1"});
  let item2 = new item({description:'Tablet',currentbid:300, remainingtime:120, buynow:940, wininguser:'dummyuser2',sold:false,owner:"student2"});
  let item3 = new item({description:'Computer',currentbid:120, remainingtime:120, buynow:880, wininguser:'dummyuser3',sold:false,owner:"student3"});
  let Items = [item1,item2,item3];
  res.json(Items); //send array of existing active items in JSON notation
}

exports.GetUsers = (req, res) => {
  //find all items in the database 
  //send response with JSON containg all users

}

