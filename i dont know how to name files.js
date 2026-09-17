const wikiButton = document.getElementById("wikipedia");
const primary67 = document.getElementById("primary67");
const tlotog = document.getElementById("tlotog");
const musicbutton = document.getElementById("musictoggle");
const contactpopup = document.getElementById("contact");
const tabascopopup = document.getElementById("tabascojokes")
const wikipopup = document.getElementById("wiki")
const musicpopup = document.getElementById("musicmodal")
const aboutpopup = document.getElementById("aboutmodal")

let numberVal = 0;
let musicPlaying = false;

function incrementNum() {
    if (numberVal == 6) {
        numberVal = 67;
        primary67.textContent = numberVal;
        document.getElementById("bottombar").classList.toggle("show");
        document.getElementById("musicguide").classList.toggle("show");
        document.getElementById("about").classList.toggle("show");
    }
    if (numberVal == 67) {
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
        musicbutton.textContent = "Listen";
        musicPlaying = false;
    }
}

musicbutton.onclick = togglemusic;
tlotog.addEventListener("ended", () => {
    musicbutton.textContent = "Listen";
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

function togglewiki() {
    if (!wikipopup.open) {
        wikipopup.showModal();
    } else {
        wikipopup.close();
    }
}

function musguide() {
    if (!musicpopup.open) {
        musicpopup.showModal();
    } else {
        musicpopup.close();
    }
}

function toggleabout() {
    if (!aboutpopup.open) {
        aboutpopup.showModal();
    } else {
        aboutpopup.close();
    }
}

document.getElementById("tabasco").onclick = toggletabasco;
document.getElementById("tabascoleave").onclick = toggletabasco;
document.getElementById("wikipedia").onclick = togglewiki;
document.getElementById("wikileave").onclick = togglewiki;
document.getElementById("musicguide").onclick = musguide;
document.getElementById("musicleave").onclick = musguide;
document.getElementById("about").onclick = toggleabout;
document.getElementById("aboutleave").onclick = toggleabout;
