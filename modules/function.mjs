function buttonSwitch(button){
    var x = document.querySelector(`#${button}_img`);
    x.addEventListener("mousedown", clickStart)
    function clickStart() {
        v = `./img/${button}_active.png`;
        x.setAttribute("src", v);
    }
    x.addEventListener("mouseup", clickEnd)
    function clickEnd() {
        v = `./img/${button}.png`;
        x.setAttribute("src", v);
    }
}

function refresh_number_member(add_name, room_charged){
    document.querySelector("#party_number").innerHTML = `Player : ${currentPartyNumber}`
    if(room_charged == userName+":"+userID){
        member_list = document.querySelector("#party_list")
        if(member_list.innerHTML == undefined){
            let party_text = `<p>${add_name}`
            member_list.innerHTML = party_text
        }else{
            let party_text = member_list.innerHTML+`<p>${add_name}`
            member_list.innerHTML = party_text
            socket.emit("refresh_room", currentRoom, party_text)
        }
    }
}

function indexContent(){
    document.querySelector("#content").innerHTML = '<div id="nickname_panel"><div id="nickname_box"><input type="text" placeholder="Player name" id="nickname_input"></div><p></p><button id="play_button"><img id="play_img" src="./img/play.png" onclick="buttonSwitch(\'play\')"></button></div>'
    document.querySelector("#play_button").addEventListener("click", (e) =>{
        nickname_input = document.querySelector("#nickname_input")
        if(nickname_input.value != ""){
            userName = nickname_input.value
            changeRoom = userName+":"+userID
            socket.emit("enter_room", changeRoom, currentRoom, userName, userID)
            mainContent()
        }
    })
}

function mainContent(){
    document.querySelector("#content").innerHTML = `<div id="party_box"><div id="join_box"><button id="join_button">Join Party</button><input id="join_input" type="password" placeholder="PartyID"></input></div><button id="copy_button">Copy PartyID</button><button id="party_number"></button><div id="party_list"></div></div>`
    document.querySelector("#copy_button").addEventListener("click", (e) =>{
        navigator.clipboard.writeText(`${userName+":"+userID}`)
    })
    document.querySelector("#join_button").addEventListener("click", (e) =>{
        let join_text = document.querySelector("#join_input")
        if(join_text.value != "" && join_text.value != currentRoom){
            changeRoom = join_input.value
            socket.emit("enter_room", changeRoom, currentRoom, userName, userID)
            document.querySelector("#join_input").value = ""
        }
    })
}