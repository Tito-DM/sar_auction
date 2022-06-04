/**
 * api code file
 */

const socketioJwt = require("socketio-jwt"); //to deal with authentication based in tokens -  WebSocket
const user = require("../models/user.js"); //database use model
const secret = "this is the secret secret secret 12356"; // same secret as in api.js used here to verify the authentication token
const Item = require("../models/item.js");
const socketIDbyUsername = new Map(); // map to store clients the client object with username has key
const usernamebySocketID = new Map(); // map to store clients the client object with socketid has key
let ioSocket = null; // global store object for websocket


const updateItems = async () => {
  try {
    const items = await Item.find(); //sort to most recent
    ioSocket.emit("update:items", items );
  } catch (error) {
    console.error(error.message);
    
  }
};

//timer function to decrement the remaining time in the items of the database with auctionTime bigger than 0.
setInterval(function () {
  //start by udpating all active items with -1 auctionTime you can use the method  item.updateMany({remainingtime: {$gt:0}},{$inc:{remainingtime: -1}},{multi:true}, (err,results)=>{})
  //after decrementing all items, use find to get all unsold items and send them to all clients via websocket
  //obtain all items that are less than 0 and not marked as sold yet using the item.find method that returns all those items
  //uptade the sold property and send the sold items to all clients
  /* the following method sends an event for a specific socket id you can call in a cycle to send to all socket ids. 
     ioSocket.to(id).emit('sold:item', {  // send a sold event for each item
     //fill with object to send in JSON
     });*/

  // Send to all users the updated unsold items
  /* exemple code snipet to send websocket events to all socketIDs in socketIDbyUsername HashMap

  */


  Item.find({ sold: false }).then(async (items) => {
     
    items.forEach(async (item) => {
      if (item.remainingtime > 0) {
        await item.updateOne({ $inc: { remainingtime: -1 } });
        updateItems();
      } else {
        await item.updateOne({ sold: true });
        ioSocket.emit("sold:item",{ 
          winner: item.wininguser,
          description:item.description,
          
        });
      }
    });
  });


 
}, 1000) ; // 1000 miliseconds is the interval time

// export function for listening to the socket
exports.StartSocket = (io) => {
  ioSocket = io; // store socket object for use in interval (timer) function
  
    io.use(socketioJwt.authorize({
        secret: process.env.JWTSECRETKEY,
        handshake: true
    }));

  console.log("Socket Started!");
  io.on("connection", async (socket) => {
    // first time it is called is when the client connects sucessfully
    console.log("user connected");
    //console.log(socket.decoded_token.username, 'user connected'); // shows username in the valid token sent by client
    // store client in the socketIDbyUsername map the id of the socket is obtainable in the socket object : socket.id
    // store client in the usernamebySocketID map the username is received in the data object.
    // you can use the .set method in the Maps and get the user name via the token: socket.decoded_token.username

    // defintion and handling of events:

    //new user event sent by client
    socket.on("newUser:username", (data) => {
      console.log("newUser:username -> New user event received: heloo", data);
        socketIDbyUsername.set(data.username, socket.id);
        usernamebySocketID.set(socket.id, data.username);

    });
   
    //new item event sent by client
    socket.on("add:item", async() => {
      const item = await Item.find();
      socket.broadcast.emit("update:items", item);
    });

  
  
    socket.on("send:bid", async (data) => {
      const { newBid, itemData ,userName} = data;
      const {_id} = itemData
      //AAA -> data[0] = Nova bid; data[1] = Item escolhido com os seus dados
      console.log("send:bid -> Received event send:bid with data = ", newBid);
      //verify in the database if the data.bid is higher than the current one and if so update the object
      //the the items are sent every second in the interval method so all clients will receive the updated info in the next second.

      const item = await Item.findById(_id);

      if (!item) {
        socket.emit("error", { errorMessage: "Item not found" });
      }

      //check if current bid is greater than the one in the db
     
      if (newBid > item?.currentbid && item.remainingtime > 0) {
        await item.update({
          currentbid:newBid,
          wininguser:userName
        });
      }

     updateItems();
       
    });

    socket.on("send:message", (chat) => {
      console.log("send:message received with -> ", chat);
      ioSocket
        .to(socketIDbyUsername.get(chat.receiver))
        .emit("receive:message", chat);
      console.log(
        "receive:message sent to ",
        socketIDbyUsername.get(chat.receiver)
      );
    });

    //Any other events that you wanto to add that are sent by the client to the server should be coded here you can use the Maps
    //to answer to all clients or the socket.emit method to reply to the same client that sent the received event.

    //when a user leaves this event is executed cleanup what you need here for example update user database
    socket.on("disconnect", function () {
      let username = usernamebySocketID.get(socket.id); // get username from socketId in the Map
      //update user status with looged in false
    });
  });
};
