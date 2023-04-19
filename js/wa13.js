

function check() {
    console.log('test');
}

function submit() {
    alert('Your volume is now: ' + output.textContent);
}

function reset() {
    outputInt = 0;
    output.textContent = outputInt;
}

function minus() {
    if (outputInt > 0) {
    outputInt -=1;
    output.textContent = outputInt; }
    
}

function plus() {
    if (outputInt < 100) {
    outputInt +=1;
    output.textContent = outputInt;
    }
}

function random() {
    outputInt = randomNumber(0, 100);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }



const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);


/* const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

button.addEventListener('click', updateOutput);

function updateOutput() {
    output.textContent = phone_content.value;
    alert(phone_content.value);
}
*/


var slider = document.getElementById("myRange");
var sliderSubmit = document.querySelector(".slider-submit-button").addEventListener('click', update);
var sliderOutput = document.querySelector(".slider-output");


// Update the current slider value (each time you drag the slider handle)
function update() {
  sliderOutput.textContent = slider.value;
}

//NEWWWW CODE
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

let birdX = 50;
let birdY = 250;
let birdSpeed = 0;
const gravity = 0.5;
const flapSpeed = 10;


const obstacleGap = 200;
const obstacleWidth = 50;
const minObstacleHeight = 50;
const maxObstacleHeight = canvas.height - minObstacleHeight - obstacleGap;
let obstacleX = canvas.width;
let topObstacleHeight = 0;
let bottomObstacleHeight = 0;
let obstaclePassed = true;


let score = 0;


document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    birdSpeed = -flapSpeed;
    score++;
  }
});

function drawBird() {
  ctx.beginPath();
  ctx.arc(birdX, birdY, 10, 0, 2 * Math.PI);
  ctx.fillStyle = "yellow";
  ctx.fill();
  ctx.closePath();
}

function updateBird() {
 
  birdY += birdSpeed;
  birdSpeed += gravity;

 
  if (birdY < 0 || birdY > canvas.height || (birdX + 10 > obstacleX && birdX - 10 < obstacleX + obstacleWidth && (birdY - 10 < topObstacleHeight || birdY + 10 > topObstacleHeight + obstacleGap))) {
    alert(`Game over! Your volume is ${score}.`);
    document.location.reload();
  }
}

function drawObstacle() {

  if (obstaclePassed) {
    topObstacleHeight = Math.floor(Math.random() * (maxObstacleHeight - minObstacleHeight) + minObstacleHeight);
    bottomObstacleHeight = canvas.height - topObstacleHeight - obstacleGap;
    obstaclePassed = false;
  }


  ctx.beginPath();
  ctx.rect(obstacleX, 0, obstacleWidth, topObstacleHeight);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();


  ctx.beginPath();
  ctx.rect(obstacleX, canvas.height - bottomObstacleHeight, obstacleWidth, bottomObstacleHeight);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

function updateObstacle() {

  obstacleX--;


  if (obstacleX + obstacleWidth < 0) {
    obstacleX = canvas.width;
    obstaclePassed = true;
  }
}

function drawScore() {
  ctx.font = "24px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(`Volume: ${score}`, 10, 50);
}

function gameLoop() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);


  drawBird();


  updateBird();


  drawObstacle();

 
  updateObstacle();


  drawScore();


  requestAnimationFrame(gameLoop);
}


requestAnimationFrame(gameLoop);
