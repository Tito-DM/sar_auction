/**
 * Express app to serve Angular 2 single page auction site
 * author: Pedro Amaral
 */

const express = require("express");
const fs = require("fs");
const path = require("path"); //object to deal with paths
const favicon = require("serve-favicon");
const jwt = require("express-jwt"); //to deal with authentication based in tokens
const morgan = require("morgan"); // Logs each server request to the console
const cookieParser = require("cookie-parser");
const http = require("http");
const https = require("https");
const bodyParser = require("body-parser");

//get the file with the API routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const itemRoutes = require("./routes/item");

//get the file with the socket api code
const socket = require("./routes/socket");
const connectDB = require("./db/db");

const app = express(); //the Express HTTPS server
app.use(morgan("dev")); // use developer logs
//parser for POST JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

//POint static path to dist directory
app.use(express.static(path.join(__dirname, "../dist/auction-sar/")));
app.use(favicon(path.join(__dirname, "../dist/auction-sar/favicon.ico")));

//connect to the database
connectDB();

//set routes
app.use("/api/auth", authRoutes); //use the routes defined in the api.js file
app.use("/api/users", userRoutes); //use the routes defined in the api.js file
//app.use("/api/items", itemRoutes); //use the routes defined in the api.js file
app.use("/api/items", itemRoutes); //use the routes defined in the api.js file

// Catch all other routes and return the index file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/auction-sar/index.html"));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//defines the ports
const port = "3000";
const ports = "3043";
let options = {
  key: fs.readFileSync(path.join(__dirname, "../Backend/key.pem")),
  cert: fs.readFileSync(path.join(__dirname, "../Backend/cert.pem")),
};

app.set("port", ports);

/**
 * Create HTTP server
 */
const httpserver = express(); // Unsecure http server just to handle redirection to HTTPS
httpserver.set("port", port); //set unsecure http port
//redirect all requests in http to https
httpserver.get("*", (req, res) => {
  let arrayOfStrings = req.headers.host.split(":");
  res.redirect("https://" + arrayOfStrings[0] + ":" + ports + req.url);
});

const server = http.createServer(httpserver);

/**
 * Create HTTPS server using the certificate defined in files cert.pem and key.pem
 */
const secureserver = https.createServer(options, app);

/**
 * Create websocket listening on the same port as the https server
 */
const io = require("socket.io")(secureserver, {
  cors: {
    origin: `http://localhost:${ports}`,
    methods: ["GET", "POST"],
  },
});
socket.StartSocket(io); // call the StartSocket function in socket module

/**
 * Listen on provided port, on all network interfaces.
 */
secureserver.listen(ports, () =>
  console.log(`API running on https://localhost:${ports}`)
);
/**
 * Http listens on provided port, to provide redirection for HTTPS
 */
server.listen(port, () =>
  console.log(
    `Http server for https re-direction running on http://localhost:${port}`
  )
);
