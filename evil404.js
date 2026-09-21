const primary404 = document.getElementById("primary404");
const botText = document.getElementById("bottext");
const bg = document.getElementById("fourohfour")

let numberVal = 404;

function incrementNum() {
    numberVal++;
    primary404.textContent = numberVal;
    
    if (numberVal == 420) {
        bg.style.background = "linear-gradient(67deg, #00B256, #7BA08D)"
    }
    if (numberVal == 421) {
        bg.style.background = "linear-gradient(67deg, #432371, #faae7b)"
    }

    if (numberVal >= 467) {
        botText.textContent = "there isn't anything further unlike the main page. if you want you can continue i guess"
    }
}

primary404.addEventListener("click", incrementNum);