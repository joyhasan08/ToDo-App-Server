require("dotenv").config();
const http = require("http");
const connectDB = require("./config/dbConnection");

const port = 3000
const server = http.createServer()

function startServer() {
    server.listen(port)
    console.log("server running");
    console.log('hello server');
}
connectDB()
startServer()