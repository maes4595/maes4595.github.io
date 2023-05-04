const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

let birdX = 50;
let birdY = 250;
let birdSpeed = 0;
const gravity = 0.5;
const flapSpeed = 10;

const obstacleGap = 150;
const obstacleWidth = 50;
const minObstacleHeight = 50;
const maxObstacleHeight = canvas.height - minObstacleHeight - obstacleGap;
let obstacleX = canvas.width;
let topObstacleHeight = 0;
let bottomObstacleHeight = 0;
let obstaclePassed = true;

let score = 0;

let gameStarted = false;

document.addEventListener("keydown", (event) => {
  if (gameStarted && event.code === "Space") {
    birdSpeed = -flapSpeed;
    score++;
  }
});

document.addEventListener("click", (event) => {
  if (!gameStarted) {
    startGame();
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

  if (
    birdY < 0 ||
    birdY > canvas.height ||
    (birdX + 10 > obstacleX &&
      birdX - 10 < obstacleX + obstacleWidth &&
      (birdY - 10 < topObstacleHeight ||
        birdY + 10 > topObstacleHeight + obstacleGap))
  ) {
    endGame();
  }
}

function drawObstacle() {
  if (obstaclePassed) {
    topObstacleHeight = Math.floor(
      Math.random() * (maxObstacleHeight - minObstacleHeight) + minObstacleHeight
    );
    bottomObstacleHeight = canvas.height - topObstacleHeight - obstacleGap;
    obstaclePassed = false;
  }

  ctx.beginPath();
  ctx.rect(obstacleX, 0, obstacleWidth, topObstacleHeight);
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(
    obstacleX,
    canvas.height - bottomObstacleHeight,
    obstacleWidth,
    bottomObstacleHeight
  );
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.closePath();
}

function updateObstacle() {
  obstacleX -= 5;

  if (obstacleX + obstacleWidth < 0) {
    obstacleX = canvas.width;
    obstaclePassed = true;
    score++;
  }
}

function drawScore() {
  ctx.font = "24px Copperplate";
  ctx.fillStyle = "black";
  ctx.fillText(`Score: ${score}`, 10, 50);
  ctx.textAlign = "left"; 
  ctx.textBaseline = "middle"; 
}

function drawStartScreen() {
  ctx.fillStyle = "#34c6eb";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = "25px Copperplate";
  ctx.fillStyle = "white";
  ctx.textAlign = "center"; 
  ctx.textBaseline = "middle"; 
  ctx.fillText("Click or Press Enter to Start", canvas.width / 2 , canvas.height / 2);
}

function endGame() {
  alert(`Game over! Your score is ${score}.`);
  gameStarted = false;
  drawStartScreen();
}

function gameLoop() {
  ctx.fillStyle = "lightblue"; 
  ctx.fillRect(0, 0, canvas.width, canvas.height); 
  

  if (!gameStarted) {
    drawStartScreen();
    return;
  }

  drawBird();
  updateBird();

  drawObstacle();
  updateObstacle();

  drawScore();

  requestAnimationFrame(gameLoop);
}

function startGame() {
  obstacleX = canvas.width;
  score = 0;
  birdY = canvas.height / 2;  
  birdSpeed = 0; 
  gameStarted = true;
  requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Space" || event.code === "Enter") {
    if (!gameStarted) {
      startGame();
    } else {
      birdSpeed = -flapSpeed;
      score++;
    }
  }
});

document.addEventListener("click", (event) => {
  if (!gameStarted) {
    startGame();
  } else {
    birdSpeed = -flapSpeed;
    score++;
  }
});

window.onload = function () {
  drawStartScreen();
};

