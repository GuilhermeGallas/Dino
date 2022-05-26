const dino = document.getElementById("dino");
const cacto = document.getElementById("cacto");
const road = document.getElementById("road");
const cloud = document.getElementById("cloud");
let result;
let cont = 0;



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
    
    road.style.setProperty('--position', -cont + "%");
    cont++;

    cloud.style.setProperty('--position2', cont/2 + "%");
    


    // detect collision
    if (cactoLeft < 70 && cactoLeft > 20 && dinoTop >= 140) {
        // collision
        alert("Você perdeu!");
        location.reload()
    }
}, 10);

document.addEventListener("keydown", function (event) {
    jump();
})

let score = document.querySelector("#score");

// declaring variable for score
let interval = null;
let playerScore = 0;


//funciton for score
let scoreCounter = ()=> {
    playerScore++;
    if (playerScore < 10) 
        result = `0000${playerScore}`
    else if(playerScore < 100)
        result = `000${playerScore}`
    else if(playerScore < 1000)
        result = `00${playerScore}`
    else if(playerScore < 10000)
        result = `0${playerScore}`
    else
        result = playerScore
    score.innerHTML = `HI <b>${result}</b>`;
}

interval = setInterval(scoreCounter, 50);
