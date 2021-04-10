const express = require("express")
const app = express()
const path = require("path")
app.use(express.static(path.join(__dirname)))
const http = require("http").createServer(app)
const io = require("socket.io")(http)
app.get("/", (req, res) => {res.sendFile(__dirname + "/index.html")})

io.on("connection", (socket) =>{

})

http.listen(3000, () => {
    console.log("Server start")
})