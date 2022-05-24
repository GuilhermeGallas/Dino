const dino = document.getElementById("dino");
const cacto = document.getElementById("cacto");


function jump() {
    if (dino.classlist != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
        dino.classList.remove("jump");
    }, 300);
  }   
}

let isAlive = setInterval(function () {
    // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))


  // get current cacto X position
    let cactoLeft = parseInt(window.getComputedStyle(cacto).getPropertyValue("left"));


    // detect collision
    if (cactoLeft < 50 && cactoLeft > 0 && dinoTop >= 140) {
        // collision
        alert("Você perdeu!");
    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
})