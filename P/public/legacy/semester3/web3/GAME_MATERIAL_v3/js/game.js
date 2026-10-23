//canvas

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d")
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
document.querySelector('#gameBox').appendChild(canvas);

//Audio

var goodyAudioReady = false;
var goodyAudio = document.getElementById("goody");
goodyAudio.oncanplay = function () {
    goodyAudioReady = true;
}

var winAudioReady = false;
var winAudio = document.getElementById("win");
winAudio.oncanplay = function () {
    winAudioReady = true;

}

var ghostAudioReady = false;
var ghostAudio = document.getElementById("ghost");
ghostAudio.oncanplay = function () {
    ghostAudioReady = true;

}

var bgAudioReady = false;
var bgAudio = document.getElementById("bgmusic")
bgAudio.oncanplay = function () {
    bgAudioReady = true;
    bgAudio.loop = true;
    bgAudio.volume = 0.75;
}
var bgPlaying = false;

//Sprites

// BG 

var bgReady = false;
var bgImage = new Image()
bgImage.src = "images/background.png";
bgImage.onload = function () {
    bgReady = true;
};

// Win 

var winReady = false;
var winImage = new Image();
winImage.src = "images/win.png";
winImage.onload = function () {
    winReady = true;
};

// Lose
var overReady = false;
var overImage = new Image();
overImage.src = "images/over.png";
overImage.onload = function () {
    overReady = true;
};

//Player 

var playerReady = false;
var playerImage = new Image();
playerImage.src = "images/player.png";
playerImage.onload = function () {
    playerReady = true;
};

// Goodies 

var goodyReady = false;
var goodyImage = new Image();
goodyImage.src = "images/goody.png";
goodyImage.onload = function () {
    goodyReady = true;
};

//Baddies 

var baddyReady = false;
var baddyImage = new Image();
baddyImage.src = "images/baddy_front.png"
baddyImage.onload = function () {
    baddyReady = true;
};


//Game obj 

var player = {
    speed: 5,
    width: 64,
    height: 100
};

var goodies = [
    { width: 64, height: 68.61 },
    { width: 64, height: 68.61 },
    { width: 64, height: 68.61 }
];

var baddies = [
    { width: 96, height: 96 },
    { width: 96, height: 96 },
    { width: 96, height: 96 }
];
var gameOver;
//ANIM spritesheet frames of player
let pFrames = 2.99;
let bFrames = 4; //number of frames for ghost anim
// Velocity variables
var vX = 0;
var vY = 0;

let ghost = 0;

setInterval(function () {
    if (ghost == 0) {
        ghost = 96;
    }
    else if (ghost == 96) {
        ghost = 192;
    }
    else if (ghost == 192) {
        ghost = 288;
    }
    else {
        ghost = 0;
    }
}, 300);

// Handle keyboard controls
addEventListener("keydown", function (e) {

    //play bg music only once
    if (!bgPlaying && bgAudioReady) {
        bgAudio.play();
        bgPlaying = true;
    }
    //Keystrokes
    if (e.keyCode == 38) { // UP
        vX = 0;
        vY = -player.speed;
    }
    if (e.keyCode == 40) { // DOWN
        vX = 0;
        vY = player.speed;
    }
    if (e.keyCode == 37) { // LEFT
        vX = -player.speed;
        vY = 0;
    }
    if (e.keyCode == 39) { // RIGHT
        vX = player.speed;
        vY = 0;
    }
    if (e.keyCode == 32) { // STOP spacebar
        vX = 0;
        vY = 0;
    }
}, false);

// Handle touch controls
addEventListener("touchstart", function (e) {
    if (e.target.id == "uArrow") { // UP
        vX = 0;
        vY = -player.speed;
    }
    else if (e.target.id == "dArrow") { // DOWN
        vX = 0;
        vY = player.speed;
    }
    else if (e.target.id == "lArrow") { // LEFT
        vX = -player.speed;
        vY = 0;
    }
    else if (e.target.id == "rArrow") { //RIGHT
        vX = player.speed;
        vY = 0;
    }
    else { // STOP This stops if you touch anywhere else
        vX = 0;
        vY = 0;
    }
});

//Position 

var init = function () {
    player.x = (canvas.width - player.width) / 2;
    player.y = (canvas.height - player.height) / 2;

    for (var i in goodies) {
        goodies[i].x = (Math.random() * (canvas.width - goodies[i].width));
        goodies[i].y = (Math.random() * (canvas.height - goodies[i].height));
    }

    for (var i in baddies) {
        baddies[i].x = (Math.random() * (canvas.width - goodies[i].width));
        baddies[i].y = (Math.random() * (canvas.height - goodies[i].height));
    }
    gameOver = false;
};

// The main game loop
var main = function () {
    if (checkWin()) {
        //WIN display win frame

        if (winAudioReady) {
            bgAudio.pause();
            winAudio.play();
        }
        if (bgReady) {
            ctx.fillStyle = ctx.createPattern(bgImage, 'repeat');
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        if (playerReady) {
            ctx.drawImage(playerImage, 0, 400, 64, 100, player.x, player.y, 64, 100);
        }
        if (baddyReady) {
            for (var i in baddies) {
                ctx.drawImage(baddyImage, ghost, 0, 96, 96, baddies[i].x, baddies[i].y, 96, 96);
            }
        }
        if (winReady) {
            ctx.drawImage(winImage, (canvas.width - winImage.width) / 2,
                (canvas.height - winImage.height) / 2);
        }
    }
    else if (gameOver) {
        //LOSE display Game Over frame
        if (overReady) {
            //ctx.drawImage(overImage, 0, 0);
            ctx.drawImage(
                overImage,
                (canvas.width - overImage.width) / 2,
                (canvas.height - overImage.height) / 2
            );
        }
        if (ghostAudioReady) {
            bgAudio.pause();
            ghostAudio.play();
        }
    }
    else {
        //Not yet won, play game
        //move player
        if (player.x > 0 && player.x < canvas.width - player.width) {
            player.x += vX;
        }
        else {
            player.x -= vX;
            vX = -vX; //bounce
        }
        if (player.y > 0 && player.y < canvas.height - player.height) {
            player.y += vY
        }
        else {
            player.y -= vY;
            vY = -vY; //bounce
        }
        //check collisions
        for (var i in goodies) {
            if (checkCollision(player, goodies[i])) {
                goodies.splice(i, 1);
                if (goodyAudioReady) { //check if sound is ready
                    goodyAudio.play();   //play sound
                }
            }
            //Collision with the baddies
            for (var i in baddies) {
                if (checkCollision(player, baddies[i])) {
                    gameOver = true; /// Game is Over
                }
            }
        }


        render();
        window.requestAnimationFrame(main);
    }
};

// Draw everything

var render = function () {
    if (bgReady) {
        ctx.fillStyle = ctx.createPattern(bgImage, 'repeat');
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    if (playerReady) {

        if (vX === 0 && vY === 0) { // standing animation
            ctx.drawImage(playerImage, 0, 0, 64, 100, player.x, player.y, 64, 100);
        }
        else if (vX > 0) {
            ctx.drawImage(playerImage, Math.floor(pFrames) * player.width, 100, 64, 100, player.x, player.y, 64, 100);
        }

        else if (vX < 0) {
            ctx.drawImage(playerImage, Math.floor(pFrames) * player.width, 200, 64, 100, player.x, player.y, 64, 100);
        }

        else if (vY > 0) {
            ctx.drawImage(playerImage, Math.floor(pFrames) * player.width, 0, 64, 100, player.x, player.y, 64, 100);
        }

        else if (vY < 0) {
            ctx.drawImage(playerImage, Math.floor(pFrames) * player.width, 300, 64, 100, player.x, player.y, 64, 100);
        }
    }
    if (goodyReady) {
        for (var i in goodies) {
            ctx.drawImage(goodyImage, goodies[i].x, goodies[i].y);
        }
    }
    if (baddyReady) {
        for (var i in baddies) {
            ctx.drawImage(baddyImage, ghost, 0, 96, 96, baddies[i].x, baddies[i].y, 96, 96);
        }
    }
    //Label
    ctx.fillStyle = "rgb(250,250,250)";
    ctx.fillText("Goodies left: " + goodies.length, 32, 32);
};
//Generic function to check for collisions 
var checkCollision = function (obj1, obj2) {
    if (obj1.x < (obj2.x + obj2.width) &&
        (obj1.x + obj1.width) > obj2.x &&
        obj1.y < (obj2.y + obj2.height) &&
        (obj1.y + obj1.height) > obj2.y
    ) {
        return true;
    }
};

const anim = function () {
    if (pFrames == 0) {
        pFrames = 3;
    }
    pFrames--;
};

//Check if we have won
var checkWin = function () {
    if (goodies.length > 0) {
        return false;
    } else {
        return true;
    }
};

//Start the gameplay 
init();
window.requestAnimationFrame(main);



