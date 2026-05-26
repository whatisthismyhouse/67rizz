const yipeeButton = document.getElementById("yipee");
const scratch = document.getElementById("scratch");
const primary67 = document.getElementById("primary67");
const tlotog = document.getElementById("tlotog");
const musicbutton = document.getElementById("musictoggle");
const contactpopup = document.getElementById("contact");
const tabascopopup = document.getElementById("tabascojokes")

let numberVal = 0;
let musicPlaying = false;

function swapYipee(event) {
    if (scratch.hidden) {
        yipeeButton.textContent = "No more";
        scratch.hidden = false;
    } else {
        yipeeButton.textContent = "Yipee";
        scratch.hidden = true;
    }
}

yipeeButton.onclick = swapYipee;

function incrementNum() {
    if (numberVal == 6) {
        numberVal = 6.7;
        primary67.textContent = numberVal;
        document.getElementById("bottombar").classList.toggle("show");
    }
    if (numberVal == 6.7) {
        return;
    }
    numberVal++;
    primary67.textContent = numberVal;
}

primary67.addEventListener("click", incrementNum);

function togglemusic() {
    if (!musicPlaying) {
        tlotog.play();
        musicbutton.textContent = "MAKE IT STOP";
        musicPlaying = true;
    } else {
        tlotog.pause();
        tlotog.currentTime = 0;
        musicbutton.textContent = "Music";
        musicPlaying = false;
    }
}

musicbutton.onclick = togglemusic;
tlotog.addEventListener("ended", () => {
    musicbutton.textContent = "Music";
    musicPlaying = false;
})

function togglecontact() {
    if (!contactpopup.open) {
        contactpopup.showModal();
    } else {
        contactpopup.close();
    }
}

document.getElementById("contactbutton").onclick = togglecontact;
document.getElementById("contactleave").onclick = togglecontact;

function contribute() {
    window.open("https://github.com/whatisthismyhouse/67rizz");
}

document.getElementById("contr").onclick = contribute;

function toggletabasco() {
    if (!tabascopopup.open) {
        tabascopopup.showModal();
    } else {
        tabascopopup.close();
    }
}

document.getElementById("tabasco").onclick = toggletabasco;
document.getElementById("tabascoleave").onclick = toggletabasco;
