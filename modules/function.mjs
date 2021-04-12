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

function indexContent(){
    document.querySelector("#content").innerHTML = '<div id="nickname_panel"><div id="nickname_box"><input type="text" placeholder="Player name" id="nickname_input"></div><p><button id="play_button"><img id="play_img" src="./img/play.png" onclick="buttonSwitch(\'play\')"></button></div>'
    document.querySelector("#play_button").addEventListener("click", (e) =>{
        nickname_input = document.querySelector("#nickname_input")
        if(nickname_input.value != ""){
            userName = nickname_input.value
            if(userName != "Kallae"){
                document.querySelector("#content").innerHTML = `<div id="main_page">Holla , ${userName}</div><p>`
            }else{document.querySelector("#content").innerHTML = `<div id="main_page">Haha (nelson)</div>`}
        }
    })
}