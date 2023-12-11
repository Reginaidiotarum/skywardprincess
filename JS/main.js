"use strict";
let hearts, bombs, playarea, score, hidden, sprite, sound, music, world, status, main, disableMov, scene, lvl, animateBG;
let dir, curFrame, bg, player, keyboard, fps, bulletList, enemyList, pickUpList, garbage, paused, frameset, xSpeed, ySpeed,mute;

function init(){

hearts = document.getElementById("hearts");
bombs = document.getElementById("bombs");
playarea = document.getElementById("playarea");
score = document.getElementById("score");
hidden = document.getElementById("hidden");
sprite = {
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
sound = {
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

music = {
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
world = [
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



status = document.getElementById("stati");
main = playarea.getContext("2d");
disableMov = true;
scene = 0;
lvl = 1;}

function menu (){
		var _frame = 1;
		var	skybox = bindImg("IMG/title.png");
		var background = bindImg("IMG/title_bg.png");
	 	main.drawImage( background,0,0,900,1440,0, 0,900, 1440);
		main.drawImage(skybox,0,0,900,1440,0, 250,900, 1440);
		var plus = true;
	 animateBG = window.setInterval(function(){
		if(_frame>=3){
			plus = false;
		}
		if(_frame<=0){
			plus = true;
		}
		main.drawImage( background,0,0,900,1440,0, 0,900, 1440);
		main.drawImage(skybox,(900*_frame),0,900,1440,0, 250,900, 1440);
		if(plus){
			_frame++;
		}else{
			_frame--;
		}

	 
	 }, 200);
 
 
 

	bombs.innerHTML = "";
stopAllMusic();
music.menu.currentTime = 0;
music.menu.play();
dir = [];
curFrame = 0;
bg = "";
player = "";
keyboard = "";
fps = "";
bulletList = [];
enemyList = [];
pickUpList = [];
score = {};
score.value = "";
garbage = [];
paused = true;
document.getElementById("stati").innerHTML = "Press Start";
document.getElementById("stati").blink;
keyboard = keyboard_module(menuBind);

}

function attract(){
//TODO: This

}

function stopAllMusic(){
for(var song in music){
	music[song].pause();
}
}


function startLvl(){
//set up main
document.onkeypress=function(){}


document.getElementById("stati").innerHTML = "";
dir = [];
curFrame = 0;
bg = new Background (main);
player = new Player ();
keyboard = keyboard_module(keyBind);
fps = 60;
bulletList = [];
enemyList = [];
score.value = 0;
garbage = [];
paused = false

window.clearInterval(frameset);
frameset = window.setInterval(frame, (1000/fps));
hpUp();
hpUp();
hpUp();
bombUp();
disableMov = false;
xSpeed = 0;
ySpeed = -2;
scene = 0;
lvl = 1;
level[lvl].stage[scene]();
}

function pause(){
if(!paused){
	window.clearInterval(frameset);
	document.getElementById("stati").innerHTML = "PAUSED";
	paused = true;
	} else {
	frameset = window.setInterval(frame,1000/fps);
	document.getElementById("stati").innerHTML = "";

	
	paused = false;
}
}

function pauseForDialog(){
	window.clearInterval(frameset);
	frameset = window.setInterval(frame,1000/fps);
	document.getElementById("stati").innerHTML = "";
}
function continueGame(){
	frameset = window.setInterval(frame,1000/fps);
	document.getElementById("stati").innerHTML = "";

	
}


function hpUp(){
player.life++;
var heart = document.createElement("IMG");
heart.src = "IMG/heart.png";
hearts.appendChild(heart);

}

function bombUp(){
	player.bombCount++;
var bomb = document.createElement("IMG");
bomb.src = "IMG/bomb.png";
bombs.appendChild(bomb);

}
function pUp(){
	player.pUp++;
}

function volMusic(num){
for(var song in music){
	music[song].volume = num;
	
}

}


function volSounds(num){
for(var song in sound){
	var effect = sound[song];
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
	if(!mute){
		this.currentTime = 0;
		this.play();
	}
}
return sound;

}

function menuBind(kb){
	if(kb["P"]){
		 window.clearInterval(animateBG);
	 startLvl();
	}
}




function keyBind(kb){
if(!disableMov){
	dir["DOWN"] = (kb["S"])?true:false;
	dir["UP"] = (kb["W"])?true:false;
	dir["LEFT"] = (kb["A"])?true:false;
	dir["RIGHT"] = (kb["D"])?true:false;
	dir["FIRE"] = (kb[" "])?true:false;
	dir["BOMB"] = (kb["E"])?true:false;
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
	this.sprite = sprite.player.ship;
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
	
	
	
	main.drawImage(this.sprite, (this.frame*this.width), 0, this.width, this.height, this.x, this.y, this.width, this.height);
}
move(dir){
	if(this.invuln >=0){
		this.sprite = sprite.player.flashing;
	} else {
		this.sprite = sprite.player.ship;
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
			bulletList.push(new playerBullet((this.x + this.width/2)+17, this.y-40));
			bulletList.push(new playerBullet((this.x + this.width/2)-50, this.y-40));
			break;
		case 1:
		bulletList.push(new playerBullet((this.x + this.width/2)+17, this.y-40));
		bulletList.push(new playerBullet((this.x + this.width/2)-50, this.y-40));
		bulletList.push(new aftBullet(this.x + this.width/2 + 36, this.y-28));
		bulletList.push(new aftBullet(this.x + this.width/2 - 90, this.y -28,true));
		break;
		case 2:
		bulletList.push(new playerBullet2((this.x + this.width/2)+17, this.y-40));
		bulletList.push(new playerBullet2((this.x + this.width/2)-50, this.y-40));
		bulletList.push(new aftBullet(this.x + this.width/2 + 36, this.y-28));
		bulletList.push(new aftBullet(this.x + this.width/2 - 90, this.y -28,true));
		break;
		case 3:
		bulletList.push(new playerBullet2((this.x + this.width/2)+17, this.y-40));
		bulletList.push(new playerBullet2((this.x + this.width/2)-50, this.y-40));
		bulletList.push(new aftBullet2(this.x + this.width/2 + 36, this.y-28));
		bulletList.push(new aftBullet2(this.x + this.width/2 - 90, this.y -28,true));
		break;
		case 4:
		bulletList.push(new playerBullet3((this.x + this.width/2)+17, this.y-40));
		bulletList.push(new playerBullet3((this.x + this.width/2)-50, this.y-40));
		bulletList.push(new aftBullet2(this.x + this.width/2 + 36, this.y-28));
		bulletList.push(new aftBullet2(this.x + this.width/2 - 90, this.y -28,true));
		break;
		case 5:
		bulletList.push(new playerBullet3((this.x + this.width/2)+17, this.y-40));
		bulletList.push(new playerBullet3((this.x + this.width/2)-50, this.y-40));
		bulletList.push(new aftBullet3(this.x + this.width/2 + 36, this.y-28));
		bulletList.push(new aftBullet3(this.x + this.width/2 - 90, this.y -28,true));
		break;
			default:
			bulletList.push(new playerBullet3((this.x + this.width/2)+17, this.y-40));
			bulletList.push(new playerBullet3((this.x + this.width/2)-50, this.y-40));
			bulletList.push(new aftBullet3(this.x + this.width/2 + 36, this.y-28));
			bulletList.push(new aftBullet3(this.x + this.width/2 - 90, this.y -28,true));
			score.value = +score.value + 1000;
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
  main.drawImage(this.sprite, (this.frame*this.width), 0, this.width, this.height, this.x, this.y, this.width, this.height);

}



hit(){
//TODO: Die;

sound.hit.hurt.replay();
if(!godmode){
if(this.invuln <=0){
if(this.life == 1){
hearts.removeChild(hearts.lastChild);
window.clearInterval(frameset);
document.getElementById("stati").innerHTML = "Game Over";
disableMov = "true";
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
main.drawImage(this.skybox,this.x,this.y,900,1440,0, 0,900, 1440);
main.drawImage(this.paralax,this.x,this.y*1.5,900,1440,0, 0,900, 1440);
}
}


function garbageCollection(){
for(var gar in garbage){
garbage[gar] = null;
}
garbage = [];
}


function frame(){
  
if(enemyList.length == 0){
	scene++;
level[lvl].stage[scene]();	
}

curFrame++;
garbageCollection();
bg.move(xSpeed,ySpeed);

player.move(dir);
player.cooldown -= 1;

for(var enemy in enemyList){
enemyList[enemy].update();
}
for(var bullet in bulletList){
bulletList[bullet].update();
}
for(var pickup in pickUpList){
pickUpList[pickup].update();
}

}







