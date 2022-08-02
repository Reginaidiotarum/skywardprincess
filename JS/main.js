"use strict";
function init(){

window.hearts = document.getElementById("hearts");
window.bombs = document.getElementById("bombs");
var playarea = document.getElementById("playarea");
var score = document.getElementById("score");
window.hidden = document.getElementById("hidden");
window.sprite = {
	"heart": bindImg("IMG/heart.png"),
	"bomb" : bindImg("IMG/bomb.png"),
	"paralax": bindImg("IMG/paralax.png"),
	"player":{
		"ship": bindImg("IMG/player.png"),
		"flashing": bindImg("IMG/player_flashing.png")
		
	},
	"enemy":{
		"default": bindImg("IMG/enemies/default.png"),
		"fighter": bindImg("IMG/enemies/fighter.png"),
		"sniper": bindImg("IMG/enemies/spacebat.png"),
		"spinner": bindImg("IMG/enemies/killerbee.png"),
		"tracer": bindImg("IMG/enemies/superfighter.png"),
		"knight": bindImg("IMG/enemies/spacebat.png"),
	},
	"flash":{
		"default": bindImg("IMG/enemies/default_flash.png"),
		"fighter": bindImg("IMG/enemies/fighter_flash.png"),
		"sniper": bindImg("IMG/enemies/spacebat_flash.png"),
		"spinner": bindImg("IMG/enemies/killerbee_flash.png"),
		"tracer": bindImg("IMG/enemies/superfighter_flash.png"),
		"knight": bindImg("IMG/enemies/spacebat_flash.png"),
	},
	"bullet":{
		"default": bindImg("IMG/bullets/main_laser.png"),
		"fighter": bindImg("IMG/bullets/greendot.png"),
		"spinner": bindImg("IMG/bullets/spinner.png"),
		"tracer": bindImg("IMG/bullets/tracerdot.png"),
		"yellow": bindImg("IMG/bullets/yellowdot.png"),
		"bomb" : bindImg("IMG/superlaser.png"),
		"player0": bindImg("IMG/bullets/main_laser.png"),
		"player1": bindImg("IMG/bullets/main_laser2.png"),
		"player2": bindImg("IMG/bullets/main_laser3.png")
	},
	"portraits":{
		"default": bindImg("IMG/portraits/default.png")
	},
	"pickup":{
		"bomb":bindImg("IMG/pickups/bomb.png"),
		"life":bindImg("IMG/pickups/life.png"),
		"power":bindImg("IMG/pickups/power.png"),
		"coin":bindImg("IMG/pickups/coin.png")
	}
}
window.sound = {
	"shoot":{
		"pew" :	bindSound("SOUNDS/SHOOT/pew.mp3"),
		"poit": bindSound("SOUNDS/SHOOT/poit.mp3"),
		"pow": bindSound("SOUNDS/SHOOT/pow.mp3"),
		"kachow": bindSound("SOUNDS/SHOOT/kachow.mp3"),
		"zoop": bindSound("SOUNDS/SHOOT/zoop.mp3"),		
		"lazer": bindSound("SOUNDS/SHOOT/superlaser.mp3")
	},
	"hit":{
		"hurt": bindSound("SOUNDS/HIT/hurt.mp3"),
		"kill": bindSound("SOUNDS/HIT/kill.mp3"),
		"burn": bindSound("SOUNDS/HIT/burn.wav")
	},
	"pickup":{
		"bomb": bindSound("SOUNDS/ITEM/bomb.mp3"),
		"coin": bindSound("SOUNDS/ITEM/coin.mp3"),
		"life": bindSound("SOUNDS/ITEM/life.mp3"),
		"power": bindSound("SOUNDS/ITEM/power.mp3"),
	}
	
}

window.music = {
	"menu":bindSong("SOUNDS/MUSIC/track07.mp3"),
	"track1" : bindSong("SOUNDS/MUSIC/track01.mp3"),
	"track2" : bindSong("SOUNDS/MUSIC/track02.mp3"),
	"track3" : bindSong("SOUNDS/MUSIC/track03.mp3"),
	"track4" : bindSong("SOUNDS/MUSIC/track04.mp3"),
	"track5" : bindSong("SOUNDS/MUSIC/track01.mp3"),
	"track6" : bindSong("SOUNDS/MUSIC/track02.mp3"),
	"track7" : bindSong("SOUNDS/MUSIC/track03.mp3"),
	"track8" : bindSong("SOUNDS/MUSIC/track04.mp3"),
	
	
}	
window.world = [
{	"paralax": bindImg("IMG/world1/paralax.png"),
	"skybox": bindImg("IMG/world1/skybox.png")
},
{	"paralax": bindImg("IMG/world2/paralax.png"),
	"skybox": bindImg("IMG/world2/skybox.png")
},
{	"paralax": bindImg("IMG/world3/paralax.png"),
	"skybox": bindImg("IMG/world3/skybox.png")
}
]



window.status = document.getElementById("stati");
window.main = playarea.getContext("2d");
window.disableMov = true;
window.scene = 0;
window.lvl = 1;}

function menu (){
		var _frame = 1;
		var	skybox = bindImg("IMG/title.png");
		var background = bindImg("IMG/title_bg.png");
	 	window.main.drawImage( background,0,0,900,1440,0, 0,900, 1440);
		window.main.drawImage(skybox,0,0,900,1440,0, 250,900, 1440);
		var plus = true;
	 window.animateBG = setInterval(function(){
		if(_frame>=3){
			plus = false;
		}
		if(_frame<=0){
			plus = true;
		}
		window.main.drawImage( background,0,0,900,1440,0, 0,900, 1440);
		window.main.drawImage(skybox,(900*_frame),0,900,1440,0, 250,900, 1440);
		if(plus){
			_frame++;
		}else{
			_frame--;
		}

	 
	 }, 200);
 
 
 

	window.bombs.innerHTML = "";
stopAllMusic();
window.music.menu.currentTime = 0;
window.music.menu.play();
window.dir = [];
window.curFrame = 0;
window.bg = "";
window.player = "";
window.keyboard = "";
window.fps = "";
window.bulletList = [];
window.enemyList = [];
window.pickUpList = [];
window.score.value = "";
window.garbage = [];
window.paused = true;
document.getElementById("stati").innerHTML = "Press Start";
document.getElementById("stati").blink;
window.keyboard = keyboard_module(menuBind);

}

function attract(){
//TODO: This

}

function stopAllMusic(){
for(var song in window.music){
	window.music[song].pause();
}
}


function startLvl(){
//set up main
document.onkeypress=function(){}


document.getElementById("stati").innerHTML = "";
window.dir = [];
window.curFrame = 0;
window.bg = new Background (main);
window.player = new Player ();
window.keyboard = keyboard_module(keyBind);
window.fps = 60;
window.bulletList = [];
window.enemyList = [];
window.score.value = 0;
window.garbage = [];
window.paused = false

clearInterval(window.frameset);
window.frameset = window.setInterval(frame, (1000/window.fps));
hpUp();
hpUp();
hpUp();
bombUp();
window.disableMov = false;
window.xSpeed = 0;
window.ySpeed = -2;
window.scene = 0;
window.lvl = 1;
window.level[window.lvl].stage[window.scene]();
}

function pause(){
if(!window.paused){
	clearInterval(window.frameset);
	document.getElementById("stati").innerHTML = "PAUSED";
	window.paused = true;
	} else {
	window.frameset = setInterval(frame,1000/window.fps);
	document.getElementById("stati").innerHTML = "";

	
	window.paused = false;
}
}

function pauseForDialog(){
	clearInterval(window.frameset);
	window.frameset = setInterval(frame,1000/window.fps);
	document.getElementById("stati").innerHTML = "";
}
function continueGame(){
	window.frameset = setInterval(frame,1000/window.fps);
	document.getElementById("stati").innerHTML = "";

	
}


function hpUp(){
player.life++;
var heart = document.createElement("IMG");
heart.src = "IMG/heart.png";
window.hearts.appendChild(heart);

}

function bombUp(){
	player.bombCount++;
var bomb = document.createElement("IMG");
bomb.src = "IMG/bomb.png";
window.bombs.appendChild(bomb);

}
function pUp(){
	player.pUp++;
}

function volMusic(num){
for(var song in window.music){
	window.music[song].volume = num;
	
}

}


function volSounds(num){
for(var song in window.sound){
	var effect = window.sound[song];
	for(var sound in effect){
		effect[sound].volume = num;
	}			
}

}

function hitTest(source, target){

var s = {"x":source.x,
	"y":source.y,
	"w":source.width,
	"h":source.height,
}
var t = {"x":target.x,
	"y":target.y,
	"w":target.width,
	"h":target.height,
}		
if( s.x+s.w > t.x &
	s.y+s.h > t.y &
	s.x < t.w + t.x &
	s.y < t.h + t.y)
{
	return true;
	}else{
	return false;
}

}


function bindImg(src){
var img = document.createElement('img');
img.src = src;
return img;
}

function bindSong(src){
var song = bindSound(src);
song.loop = true;
song.volume = document.getElementById("musicVol").value;
return song;

}



function bindSound(src){
var sound = document.createElement("audio");
sound.src = src;
sound.loop = false;
sound.loop = false;
sound.volume = document.getElementById("soundVol").value;

sound.autoplay = false;
sound.replay = function (){ // All of my sound objects need a quick function that plays them from the beginning
	if(!window.mute){
		this.currentTime = 0;
		this.play();
	}
}
return sound;

}

function menuBind(kb){
	if(kb["P"]){
		 clearInterval(window.animateBG);
	 startLvl();
	}
}




function keyBind(kb){
if(!window.disableMov){
	window.dir["DOWN"] = (kb["S"])?true:false;
	window.dir["UP"] = (kb["W"])?true:false;
	window.dir["LEFT"] = (kb["A"])?true:false;
	window.dir["RIGHT"] = (kb["D"])?true:false;
	window.dir["FIRE"] = (kb[" "])?true:false;
	window.dir["BOMB"] = (kb["E"])?true:false;
	if(kb["P"]){pause();}
}
}

function keyboard_module(onUpdate){
var kb = {};
var unicode_mapping = {};
document.onkeydown = function(e){
	var unicode=e.charCode? e.charCode : e.keyCode
	var key = getKey(unicode);
	kb[key] = true;
	if(onUpdate){
		onUpdate(kb);
	}
}

document.onkeyup = function(e){
	var unicode=e.charCode? e.charCode : e.keyCode
	var key = getKey(unicode);
	delete kb[key];
	if(onUpdate){
		onUpdate(kb);
	}        
}

function getKey(unicode){
	if(unicode_mapping[unicode]){
		var key = unicode_mapping[unicode];
		}else{
		var key= unicode_mapping[unicode] = String.fromCharCode(unicode);
	}
	return key;
}
return kb;
}	

class Player{
//Init player varaibles:
constructor(){
	this.x = 400;
	this.y = 1200;
	this.height = 328;
	this.moving = false;
	this.width = 168;
	this.speed = 10; //Pixels/Sectond;
	this.sprite = window.sprite.player.ship;
	this.frame = 0;
	this.cdInit = 10;
	this.damage = 5;
	this.cooldown = 0; 
	this.life = 0;
	this.invuln = 0;
	this.bombCount = 0;
	this.drag = 0;
	this.hitbox = {
		"x": this.x + 73,
		"y": this.y + 128,
		"width": 23,
		"height": 23,
		
	}
	this.pUp =0;
	
	
	
	window.main.drawImage(this.sprite, (this.frame*this.width), 0, this.width, this.height, this.x, this.y, this.width, this.height);
}
move(dir){
	if(this.invuln >=0){
		this.sprite = window.sprite.player.flashing;
	} else {
		this.sprite = window.sprite.player.ship;
	}
	
	if(this.bomb){
	this.bomb.update();
	}
	this.moving = false;		
	

	
	
	
	if(dir["UP"] & this.hitbox.y >= 0){this.y-= this.speed;this.moving = true;this.hitbox.y-= this.speed;}						
	if(dir["DOWN"] & this.hitbox.y+this.hitbox.height<=1440){this.y+= this.speed;this.moving = true;this.hitbox.y+= this.speed;}
	if(dir["LEFT"] & this.hitbox.x >= 0){this.x-= this.speed;this.moving = true;this.hitbox.x-= this.speed;}
	if(dir["RIGHT"]&this.hitbox.x+this.hitbox.width <= 900){this.x+= this.speed;this.moving = true;this.hitbox.x+= this.speed;}	
	
	if(dir["FIRE"] & (this.cooldown < 0)) {
		this.cooldown = this.cdInit;
	switch(this.pUp){
		case 0:
			window.bulletList.push(new playerBullet((this.x + this.width/2)+17, this.y-40));
			window.bulletList.push(new playerBullet((this.x + this.width/2)-50, this.y-40));
			break;
		case 1:
		window.bulletList.push(new playerBullet((this.x + this.width/2)+17, this.y-40));
		window.bulletList.push(new playerBullet((this.x + this.width/2)-50, this.y-40));
		window.bulletList.push(new aftBullet(this.x + this.width/2 + 36, this.y-28));
		window.bulletList.push(new aftBullet(this.x + this.width/2 - 90, this.y -28,true));
		break;
		case 2:
		window.bulletList.push(new playerBullet2((this.x + this.width/2)+17, this.y-40));
		window.bulletList.push(new playerBullet2((this.x + this.width/2)-50, this.y-40));
		window.bulletList.push(new aftBullet(this.x + this.width/2 + 36, this.y-28));
		window.bulletList.push(new aftBullet(this.x + this.width/2 - 90, this.y -28,true));
		break;
		case 3:
		window.bulletList.push(new playerBullet2((this.x + this.width/2)+17, this.y-40));
		window.bulletList.push(new playerBullet2((this.x + this.width/2)-50, this.y-40));
		window.bulletList.push(new aftBullet2(this.x + this.width/2 + 36, this.y-28));
		window.bulletList.push(new aftBullet2(this.x + this.width/2 - 90, this.y -28,true));
		break;
		case 4:
		window.bulletList.push(new playerBullet3((this.x + this.width/2)+17, this.y-40));
		window.bulletList.push(new playerBullet3((this.x + this.width/2)-50, this.y-40));
		window.bulletList.push(new aftBullet2(this.x + this.width/2 + 36, this.y-28));
		window.bulletList.push(new aftBullet2(this.x + this.width/2 - 90, this.y -28,true));
		break;
		case 5:
		window.bulletList.push(new playerBullet3((this.x + this.width/2)+17, this.y-40));
		window.bulletList.push(new playerBullet3((this.x + this.width/2)-50, this.y-40));
		window.bulletList.push(new aftBullet3(this.x + this.width/2 + 36, this.y-28));
		window.bulletList.push(new aftBullet3(this.x + this.width/2 - 90, this.y -28,true));
		break;
			default:
			window.bulletList.push(new playerBullet3((this.x + this.width/2)+17, this.y-40));
			window.bulletList.push(new playerBullet3((this.x + this.width/2)-50, this.y-40));
			window.bulletList.push(new aftBullet3(this.x + this.width/2 + 36, this.y-28));
			window.bulletList.push(new aftBullet3(this.x + this.width/2 - 90, this.y -28,true));
			window.score.value = +window.score.value + 1000;
			}
		
	}
	if(dir["BOMB"] & this.bombCount>0 & !this.bomb) {
		this.bombCount--;
		bombs.removeChild(bombs.lastChild);
		this.bomb = new playerBomb();
	}
	this.invuln--;
	if(this.hitbox.y+this.hitbox.height<=1440){
	this.y+=this.drag;
	this.hitbox.y+=this.drag;
	}
	//Redraw BG;
if(this.frame<3){this.frame++}else{this.frame=0};

this.hitX=this.width/2+this.x;
this.hitY=this.height/2+this.y;
  window.main.drawImage(this.sprite, (this.frame*this.width), 0, this.width, this.height, this.x, this.y, this.width, this.height);

}



hit(){
//TODO: Die;

window.sound.hit.hurt.replay();
if(!window.godmode){
if(this.invuln <=0){
if(this.life == 1){
hearts.removeChild(hearts.lastChild);
clearInterval(window.frameset);
document.getElementById("stati").innerHTML = "Game Over";
window.disableMov = "true";
setTimeout(menu, 5000); 

}else{
this.invuln = 90;
this.pUp--;
if(this.pUp <0){this.pUp = 0}
this.life--;
hearts.removeChild(hearts.lastChild);

}
}
}
}
}


class Background{
constructor(){
this.x = 0;
this.y =7160;
this.skybox = "";
this.paralax = "";

}
move (x, y){
this.x += x | 0;
this.y += y | 0;
if(this.y <= 0){this.y = 7160;}
window.main.drawImage(this.skybox,this.x,this.y,900,1440,0, 0,900, 1440);
window.main.drawImage(this.paralax,this.x,this.y*1.5,900,1440,0, 0,900, 1440);
}
}


function garbageCollection(){
for(var gar in window.garbage){
window.garbage[gar] = null;
}
window.garbage = [];
}


function frame(){
  
if(window.enemyList.length == 0){
	window.scene++;
window.level[window.lvl].stage[window.scene]();	
}

window.curFrame++;
garbageCollection();
window.bg.move(window.xSpeed,window.ySpeed);

window.player.move(window.dir);
window.player.cooldown -= 1;

for(var enemy in window.enemyList){
window.enemyList[enemy].update();
}
for(var bullet in window.bulletList){
window.bulletList[bullet].update();
}
for(var pickup in window.pickUpList){
window.pickUpList[pickup].update();
}

}







