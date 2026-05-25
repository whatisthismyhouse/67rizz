let yipeeButton = document.getElementById("yipee");
let scratch = document.getElementById("scratch");

function swapYipee(event) {
    yipeeButton.hidden = true;
    scratch.hidden = false;
}

yipeeButton.onclick = swapYipee;

