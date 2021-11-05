const imgs = document.getElementById("img");
const img = document.querySelectorAll(".img img");

var idx = 0;

function Carrossel() {
    idx++;
    if (idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 800}px)`;
}

setInterval(Carrossel, 4500);