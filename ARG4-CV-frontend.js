var btn1 = document.getElementById("boton-exp-1")
var btn2 = document.getElementById("boton-exp-2")
var btn3 = document.getElementById("boton-exp-3")
var btn4 = document.getElementById("boton-exp-4")

var btn1p = document.getElementById("texto-exp-1")
var btn2p = document.getElementById("texto-exp-2")
var btn3p = document.getElementById("texto-exp-3")
var btn4p = document.getElementById("texto-exp-4")

btn1p.style.display = "none"
btn2p.style.display = "none"
btn3p.style.display = "none"
btn4p.style.display = "none"

btn1.onclick = function () {
    botonVerOcultar("texto-exp-1");
}

btn2.onclick = function () {
    botonVerOcultar("texto-exp-2");
}

btn3.onclick = function () {
    botonVerOcultar("texto-exp-3");
}

btn4.onclick = function () {
    botonVerOcultar("texto-exp-4");
}

function botonVerOcultar(id) {
    var element = document.getElementById(id)
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }

}
