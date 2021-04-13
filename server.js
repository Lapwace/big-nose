const express = require("express")
const app = express()
const path = require("path")
const { emit } = require("process")
app.use(express.static(path.join(__dirname)))
const http = require("http").createServer(app)
const io = require("socket.io")(http)
app.get("/", (req, res) => {res.sendFile(__dirname + "/index.html")})

io.on("connection", (socket) =>{
    userID = socket.id 
    io.emit("send_info", userID)

    socket.on("enter_room", (room, current, userName, userID) =>{
        if(room != current){
            socket.leave(current)
            socket.join(room)
            current_channel = io.sockets.adapter.rooms.get(room).size
            if(current_channel != 1 || room == userName+":"+userID ){
                io.to(socket.id).emit("change_room", room)
                io.in(room).emit("refresh_current_member", current_channel, userName, room)
            }else{
                socket.leave(room)
                socket.join(current)
            }
        }
     })
     socket.on("refresh_room", (room, member_list) => {
         io.in(room).emit("refresh_member_list", member_list)
     })
})

http.listen(3000, () => {
    console.log("Server start")
})