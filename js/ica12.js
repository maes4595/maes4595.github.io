
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;


function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}


Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}


Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
}


Ball.prototype.collisionDetect = function() {
    for (var i = 0; i < balls.length; i++) {
        if (!(this === balls[i])) {
            var dx = this.x - balls[i].x;
            var dy = this.y - balls[i].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[i].size) {
                balls[i].color = this.color = randomColor();
            }
        }
    }
}


function random(min, max) {
    var num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}


function randomColor() {
    return 'rgb(' +
        random(0, 255) + ', ' +
        random(0, 255) + ', ' +
        random(0, 255) + ')';
}


var balls = [];


for (var i = 0; i < 25; i++) {
    var ball = new Ball(
        random(0, width),
        random(0, height),
        random(-7, 7),
        random(-7, 7),
        randomColor(),
        random(10, 20)
    );
    balls.push(ball);
}


function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    for (var i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }

    requestAnimationFrame(loop);
}


loop();
