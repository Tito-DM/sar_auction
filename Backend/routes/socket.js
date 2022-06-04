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
    ioSocket.emit("update:items", items);
  } catch (error) {
    console.error(error.message);
  }
};

//timer function to decrement the remaining time in the items of the database with auctionTime bigger than 0.
setInterval(function () {
  Item.find({ sold: false }).then(async (items) => {
    items.forEach(async (item) => {
      if (item.remainingtime > 0) {
        await item.updateOne({ $inc: { remainingtime: -1 } });
        updateItems();
      } else {
        if (item.wininguser) {
          await item.updateOne({ sold: true });
          ioSocket.emit("sold:item", {
            winner: item.wininguser,
            description: item.description,
          });
        }
        
      }
    });
  });
}, 1000); // 1000 miliseconds is the interval time

// export function for listening to the socket
exports.StartSocket = (io) => {
  ioSocket = io; // store socket object for use in interval (timer) function

  io.use(
    socketioJwt.authorize({
      secret: process.env.JWTSECRETKEY,
      handshake: true,
    })
  );

  console.log("Socket Started!");
  io.on("connection", async (socket) => {
    socket.on("newUser:username", (data) => {
      console.log("newUser:username -> New user event received: heloo", data);
      socketIDbyUsername.set(data.username, socket.id);
      usernamebySocketID.set(socket.id, data.username);
    });

    //new item event sent by client
    socket.on("add:item", async () => {
      const item = await Item.find();
      socket.broadcast.emit("update:items", item);
    });

    socket.on("send:bid", async (data) => {
      const { newBid, itemData, userName } = data;
      const { _id } = itemData;
      const item = await Item.findById(_id);

      if (!item) {
        socket.emit("error", { errorMessage: "Item not found" });
      }

      //check if current bid is greater than the one in the db
      if (newBid > item?.currentbid && item.remainingtime > 0) {
        await item.update({
          currentbid: newBid,
          wininguser: userName,
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
