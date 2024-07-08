const http = require("http")
const port = 3000
const server = http.createServer()

function startServer() {
    server.listen(port)
    console.log("server running");
}

startServer()