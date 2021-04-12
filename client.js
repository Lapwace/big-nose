let socket = io()

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