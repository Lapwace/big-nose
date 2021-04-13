let socket = io()
let userName = ""
let userID = ""
let currentRoom = ""
let changeRoom = ""
let currentPartyNumber = ""

socket.on("connect", () =>{
    indexContent()
})

window.onload = () => {

    socket.on("send_info", (usersocketID) =>{
        userID = usersocketID
    })

    socket.on("change_room", (room) => {
        currentRoom = room
    })
    
    socket.on("refresh_current_member", (currentNumberMember, name_toAdd, room) => {
        currentPartyNumber = currentNumberMember
        refresh_number_member(name_toAdd, room)
    })

    socket.on("refresh_member_list", (member_list) =>{
        document.querySelector("#party_list").innerHTML = member_list
    })
        
}