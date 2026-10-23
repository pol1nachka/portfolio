var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = document.getElementById("gameBox").offsetWidth;
// canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
document.querySelector("#gameBox").appendChild(canvas);

//load sprites
//background image
var bgReady = false;
var bgImage = new Image();
bgImage.src = "images/water.png";
bgImage.onload = function () {
    bgReady = true;
};

//health image
var swReady = false;
var swImage = new Image();
swImage.src = "images/sword.png";
swImage.onload = function () {
    swReady = true;
};




var points = 0;




//lose frame image 
var overReady = false; 
var overImage = new Image();
overImage.src = "images/lose.png";
overImage.onload = function () {
    overReady = true; 

};

//player image
var playerReady = false;
var playerImage = new Image();
playerImage.src = "images/pirate.png";
playerImage.onload = function () {
    playerReady = true;
};

//prepare sound clips
var goodyAudioReady = false;
 var goodyAudio = document.getElementById("coin");
 goodyAudio.oncanplay = function () {
   goodyAudioReady = true;
 }

 var energyAudioReady = false;
 var energyAudio = document.getElementById("munch");
 energyAudio.oncanplay = function () {
   energyAudioReady = true;
 }

 var baddyAudioReady = false;
 var baddyAudio = document.getElementById("splash");
 baddyAudio.oncanplay = function () {
   baddyAudioReady = true;
 }

 var explosionAudioReady = false;
 var explosionAudio = document.getElementById("explosion");
explosionAudio.oncanplay = function () {
   explosionAudioReady = true;
 }

 var bgAudioReady = false;
 var bgAudio = document.getElementById("bgmusic");
 bgAudio.oncanplay = function () {
 bgAudioReady = true;
 bgAudio.loop = true;
 bgAudio.volume = 0.5;
 }
 var bgPlaying = false;

//spritesheet frames for player

let pFrames = 3;

let gFrames = 5;

let eFrames = 5;

let bFrames = 2;

let mFrames = 4;

//goodies image
var goodyReady = false;
var goodyImage = new Image();
goodyImage.src = "images/coinsheet.png";
goodyImage.onload = function () {
    goodyReady = true;
};

//energy image
var energyReady = false;
var energyImage = new Image();
energyImage.src = "images/food.png";
energyImage.onload = function () {
    energyReady = true;
};

//baddies image
var baddyReady = false;
var baddyImage = new Image();
baddyImage.src = "images/whirlpool.png";
baddyImage.onload = function () {
    baddyReady = true;
};

//monsters image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.src = "images/monster.png";
monsterImage.onload = function () {
    monsterReady = true;
};


//create global game objects (hitboxes/ghosts)
var player = {
    speed: 5, //pixels per tick (movement)
    width: 100,
    height: 100

};

var goodies = [ //this is an array
{ width: 32, height: 34, }, //goody one

];

var energies = [ //this is an array
    { width: 48, height: 50 }, //energyy one
    
    ];
var baddies = [ //this is an array
    { width: 128, height: 64 }, //baddy one
    
    
    ];
    
    var monsters = [ //this is an array
        { width: 100, height: 100 }, //monster one
        
        
        ];

    //New variable to check if we have lost. We set the value in init()
    var gameOver;   


//velocity variables
var vX = 0;
var vY = 0;

//health bar 
var health = 250; 

var fastSpeed = 0;

var spawnCoin = 0.99;

var spawnTsunami = 0.999;

var spawnFood = 0.999;

var spawnBeast = 0.999;


//handle keyboard controls
addEventListener("keydown", function (e) {

    //play bg music only once
if (!bgPlaying && bgAudioReady) {
    bgAudio.play();
    bgPlaying = true;
  }
    //keystrokes
  
if (e.keyCode == 37) { //left
    vX = -player.speed;
    vY = 0;
}
if (e.keyCode == 39) {//right}
    vX = player.speed;
    vY = 0;
}
if (e.keyCode == 32) {//stop spacebar
    vX = 0;
    vY = 0;
}

}, false);

//handle touch controls
addEventListener("touchstart" , function (e) {

 //play bg music only once
 if (!bgPlaying && bgAudioReady) {
    bgAudio.play();
    bgPlaying = true;
  }



else if (e.target.id == "lArrow") {//left
    vX = -player.speed;
    vY = 0;  
}
else if (e.target.id =="rArrow") {//right
    vX = player.speed;
    vY  = 0;
}
else {// STOP this stops if you touch anywhere else
    vX = 0;
    vY = 0;
}
});

//set initial state (set the stage before the game loop starts)
var init = function () {
    //put player in the center
    player.x = (canvas.width - player.width) / 2;
    player.y = (canvas.height - player.height) -5;
    //Place goodies at random locations, at the top
	for (var i in goodies) {
		goodies[i].x = (Math.random() *
			(canvas.width - goodies[i].width));
		goodies[i].y = 0; ///start goodies at the top
	}
	pts = 0;

    //Place energy at random locations, at the top
	for (var i in energies) {
		energies[i].x = (Math.random() *
			(canvas.width - energies[i].width));
		energies[i].y = 0; ///start energies at the top
	}
	pts = 0;


    //Place baddies at random locations, at the top
	for (var i in baddies) {
		baddies[i].x = (Math.random() *
			(canvas.width - baddies[i].width));
		baddies[i].y = 0; ///start baddies at the top
	}
	pts = 0;


    //Place monsters at random locations, at the top
	for (var i in monsters) {
		monsters[i].x = (Math.random() *
			(canvas.width - monsters[i].width));
		monsters[i].y = 0; ///start monsters at the top
	}
	pts = 0;


    
   //player animation LOGICCCCCC

   let pAnim = setInterval(anim,250);

   let gAnim = setInterval(anim,150);

   let bAnim = setInterval(anim,150);

   let mAnim = setInterval(anim,750);

        // Set the gameOver variable to false
  gameOver = false;


  setInterval(function() {
	fastSpeed += 2;
    spawnCoin -= 0.03;
    spawnTsunami -= 0.01;
    spawnFood -= 0.01;
    spawnBeast -= 0.001;
  },20000);

};



// The main game loop
var main = function () {
    if (health <= 0) {
        //display game over screen
        if (overReady) {
            ctx.drawImage(overImage, (canvas.width - overImage.width) / 2, (canvas.height - overImage.height) / 2);
        }

        if (playerReady) {
            ctx.drawImage (playerImage, 0, 300, 100, 100, player.x, player.y, 100, 100 );
        }

        if (explosionAudioReady) {
            bgAudio.pause();
            explosionAudio.play();
          }

localStorage.setItem("score", points)
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
        //health decrease 
        health -= 0; 


        
        //random spawning 
        if (Math.random() > spawnCoin) {
            spawnGoody(); //the function that generates a new goodie, line 214
        }


        //check collisions

        for (var i in goodies) {
			goodies[i].y = goodies[i].y + goodies[i].speed;

			if (checkCollision(player, goodies[i])) {
				goodies.splice(i, 1);
                points += 1;
                if (goodyAudioReady) {
                    goodyAudio.play();
                  }
                  
				pts++;
			}

	
		}

                
        //random spawning (energy)
        if (Math.random() > spawnFood) {
            spawnEnergy(); //the function that generates a new energy, line 214
        }


        //check collisions

        for (var i in energies) {
			energies[i].y = energies[i].y + energies[i].speed;

			if (checkCollision(player, energies[i])) {
				energies.splice(i, 1);
                if (energyAudioReady) {
                    energyAudio.play();
                  }
                  if (health < 250){
                    health += 25;
                  }
                  if (health > 250){
                    health = 250; 
                  }
				pts++;
			}

		
		}

        //random spawning (baddie)
            if (Math.random() > spawnTsunami) {
            spawnBaddy(); //the function that generates a new goodie, line 214
        }
    
        //check collisions (baddies)
    
        for (var i in baddies) {
            
            baddies[i].y = baddies [i].y + baddies[i].speed;
            
    
            if (checkCollision(player, baddies[i])) {
                baddies.splice(i, 1);
                if (baddyAudioReady) {
                    baddyAudio.play();
                  }
                if (health > 0){
                    health -= 50;
        
                  }
            
                pts++;
            }

            
    
            /*if (baddies[i].y > canvas.height) {
               baddies.splice(i, 1);
            } */
        }

        
        //random spawning (monsters)
        if (Math.random() > spawnBeast  ) {
            spawnMonster(); //the function that generates a new monster, line 214
        }
    
        //check collisions (monsters)
    
        for (var i in monsters) {
            monsters[i].y = monsters [i].y + monsters[i].speed;
    
            if (checkCollision(player, monsters[i])) {
                monsters.splice(i, 1);
                if (health > 0){
                    health -= 250;
        
                  }
            
                pts++;
            }

            
    
        
        }
    
        render();
        window.requestAnimationFrame(main);
    }
    
    




    
};




//draw everything (RENDER)
var render = function () {
    if (bgReady){
        ctx.fillStyle = ctx.createPattern(bgImage, 'repeat');
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
   
    if (playerReady) {
 
        if (vX == 0 && vY == 0 ) { // standing animation
            ctx.drawImage (playerImage, 0, 0, 100, 100, player.x, player.y, 100, 100 );
        }
        else if (vX > 0) {
            ctx.drawImage (playerImage, Math.floor(pFrames)*player.width, 200, 100, 100, player.x, player.y, 100, 100 );
        }

        else if (vX < 0) {
            ctx.drawImage (playerImage, Math.floor(pFrames)*player.width, 100, 100, 100, player.x, player.y, 100, 100 );
        }

        else if (vY > 0) {
            ctx.drawImage (playerImage, Math.floor(pFrames)*player.width, 0, 100, 100, player.x, player.y, 100, 100 );
        }

        else if (vY < 0) {
            ctx.drawImage (playerImage, Math.floor(pFrames)*player.width, 200, 100, 100, player.x, player.y, 100, 100 );
        }

        
        
    }
    if (goodyReady) {
        for (var i in goodies) {
            ctx.drawImage (goodyImage, Math.floor(gFrames)*goodies[i].width, 0, 32, 34, goodies[i].x, goodies[i].y, 32, 34 );
    } } 

    if (energyReady) {
        for (var i in energies) {
            ctx.drawImage (energyImage, Math.floor(eFrames)*energies[i].width, 0, 48, 50, energies[i].x, energies[i].y, 48, 50 );
    } } 
    if (baddyReady) {
        for (var i in baddies) {
            ctx.drawImage (baddyImage, Math.floor(bFrames)*baddies[i].width, 0, 129, 64, baddies[i].x, baddies[i].y, 128, 64 );
    } } 

    if (monsterReady) {
        for (var i in monsters) {
            ctx.drawImage (monsterImage, Math.floor(mFrames)*monsters[i].width, 0, 100, 100, monsters[i].x, monsters[i].y, 100, 100 );
    } } 

    
    ctx.drawImage(swImage, 0, 0, health, swImage.height, 28, 50, health, swImage.height);

   

    

    //ctx.drawImage (goodyImage, Math.floor(gFrames)*goodies[i].width, 0, 32, 32, goodies[i].x, goodies[i].y, 32, 32 );
   
    //label
    ctx.font = "bold 30px 'Sour Gummy', sans-serif";

    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fillText("POINTS: "+String(points).toUpperCase(), 32, 32);
};

//generic function to check for collisions
var checkCollision = function (obj1,obj2) {
    if (obj1.x < (obj2.x + obj2.width) &&
        (obj1.x + obj1.width) > obj2.x &&
        obj1.y < (obj2.y + obj2.height) &&
        (obj1.y + obj1.height) > obj2.y
        ) {
            return true;
    }
};




//player animation cycling  

const anim = function () {
    if (pFrames == 0) {
        pFrames =  2;
    }
    pFrames--;

    if (gFrames == 0) {
        gFrames =  5;
    }
    gFrames--;

    if (eFrames == 0) {
        eFrames =  2;
    }
    eFrames--;

    if (bFrames == 0) {
        bFrames =  2;
    }
    bFrames--;

    if (mFrames == 0) {
        mFrames =  4;
    }
    mFrames--;
};

var spawnGoody = function () {
	//push() adds an item to the array, a new goodie
	goodies.push({
		//We need to set the new goodie’s init properties
		width: 32,
		height: 32,
		//and place it at a random position at the top
		x: (Math.random() * (canvas.width - 32)),
		y: 0,
        speed: 3 + fastSpeed
	});

    
};

var spawnEnergy = function () {
	//push() adds an item to the array, a new energy
	energies.push({
		//We need to set the new energy’s init properties
		width: 48,
		height: 48,
		//and place it at a random position at the top
		x: (Math.random() * (canvas.width - 48)),
		y: 0,
        speed: 3 + fastSpeed
	});

    
};

var spawnBaddy = function () {
	//push() adds an item to the array, a new baddy
	baddies.push({
		//We need to set the new baddy’s init properties
		width: 128,
		height: 64,
		//and place it at a random position at the top
		x: (Math.random() * (canvas.width - 32)),
		y: 0,
        speed: 3 + fastSpeed
	});

    
};

var spawnMonster = function () {
	//push() adds an item to the array, a new baddy
	monsters.push({
		//We need to set the new baddy’s init properties
		width: 100,
		height: 100,
		//and place it at a random position at the top
		x: (Math.random() * (canvas.width - 32)),
		y: 0,
        speed: 2 + fastSpeed
	});
};

//start the gameplay (after everything is loaded)
init();
window.requestAnimationFrame(main);


