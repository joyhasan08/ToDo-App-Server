// dotenv for DB
require("dotenv").config();
const connectDB = require("./config/dbConnection"); //DB Connection

//createServer start
const http = require("http");
const app = require('./app');
const port = 3000
const server = http.createServer()
// function startServer() {
//     server.listen(port)
//     console.log("server running");
// }
// startServer()
//createServer End

// Run Server With Mongoose
const mongoose = require('mongoose');


connectDB()

mongoose.connection.once('open', () => {
    server.listen(port)
    console.log("server running");

})
mongoose.connection.on('error', (error) => {
    console.log(error);
})







