"use strict"
class Bullet{
	constructor(x,y){
		this.x = x || -10;
		this.y = y || -10;
		this.BulletSize = 5;
		this.speed = 4;
		this.width = 24;
		this.height = 24;
		
		this.spriteMap = window.sprite.bullet.spinner;
		this.frame = 0;
		window.main.drawImage(this.spriteMap, (this.width*(this.frame % 3)), 0, this.width, this.height, this.x, this.y, this.width, this.height);
	}
	move(){

		window.main.drawImage(this.spriteMap, (this.width*(Math.floor(this.frame/4)% 3)), 0, this.width, this.height, this.x, this.y, this.width, this.height);
		if(this.y > window.playarea.height || this.x+this.width < 0 || this.x > 900 ){
			this.kill();
		}
	}
	kill(){
	
		window.garbage.push(this);
		window.bulletList.splice(window.bulletList.indexOf(this), 1);

	}

}

class playerBullet extends Bullet{
	constructor(x,y){
		super();
		super.width = 17;
		super.height = 56;
		super.spriteMap = window.sprite.bullet.player0;
	super.x = x+this.width/2;
		super.y = y+this.height;
		window.sound.shoot.pew.replay();
		super.speed = -20;
		this.hitDmg = window.player.damage;			
		}
	damage(){
		for(var enemy in window.enemyList){
			
			if(hitTest(this, window.enemyList[enemy])){
				window.enemyList[enemy].damage(this.hitDmg);
				this.kill();
		
		}
			
		}
	}
	update(){
	this.y += this.speed;
	this.damage();
	this.move();
		
	}
}
class playerBullet2 extends Bullet{
	constructor(x,y){
		super();
		super.width = 17;
		super.height = 56;
		super.spriteMap = window.sprite.bullet.player1;
	super.x = x+this.width/2;
		super.y = y+this.height;
		window.sound.shoot.pew.replay();
		super.speed = -25;
		this.hitDmg = window.player.damage + 10;			
		}
	damage(){
		for(var enemy in window.enemyList){
			
			if(hitTest(this, window.enemyList[enemy])){
				window.enemyList[enemy].damage(this.hitDmg);
				this.kill();
		
		}
			
		}
	}
	update(){
	this.y += this.speed;
	this.damage();
	this.move();
		
	}
}
class playerBullet3 extends Bullet{
	constructor(x,y){
		super();
		super.width = 17;
		super.height = 56;
		super.spriteMap = window.sprite.bullet.player2;
	super.x = x+this.width/2;
		super.y = y+this.height;
		window.sound.shoot.pew.replay();
		super.speed = -30;
		this.hitDmg = window.player.damage + 25;			
		}
	damage(){
		for(var enemy in window.enemyList){
			
			if(hitTest(this, window.enemyList[enemy])){
				window.enemyList[enemy].damage(this.hitDmg);
				this.kill();
		
		}
			
		}
	}
	update(){
	this.y += this.speed;
	this.damage();
	this.move();
		
	}
}

class aftBullet extends Bullet{
	constructor(x,y,dir){
		super();
		super.width = 17;
		super.height = 56;
		super.spriteMap = window.sprite.bullet.player0;
		super.x = x+this.width/2;
		super.y = y+this.height;
		this.dir = dir;
		window.sound.shoot.pew.replay();
		super.speed = -20;
		this.hitDmg = window.player.damage;			
		}
	damage(){
		for(var enemy in window.enemyList){
			
			if(hitTest(this, window.enemyList[enemy])){
				window.enemyList[enemy].damage(this.hitDmg);
				this.kill();
		
		}
			
		}
	}
	update(){
	this.y += this.speed;
	if(this.dir==true){
	this.x += this.speed/5;
	} else {
	this.x -= this.speed/5;
	}
	this.damage();
	this.move();
		
	}
}

class aftBullet2 extends Bullet{
	constructor(x,y,dir){
		super();
		super.width = 17;
		super.height = 56;
		super.spriteMap = window.sprite.bullet.player1;
		super.x = x+this.width/2;
		super.y = y+this.height;
		this.dir = dir;
		window.sound.shoot.pew.replay();
		super.speed = -25;
		this.hitDmg = window.player.damage +10;			
		}
	damage(){
		for(var enemy in window.enemyList){
			
			if(hitTest(this, window.enemyList[enemy])){
				window.enemyList[enemy].damage(this.hitDmg);
				this.kill();
		
		}
			
		}
	}
	update(){
	this.y += this.speed;
	if(this.dir==true){
	this.x += this.speed/5;
	} else {
	this.x -= this.speed/5;
	}
	this.damage();
	this.move();
		
	}
}

class aftBullet3 extends Bullet{
	constructor(x,y,dir){
		super();
		super.width = 17;
		super.height = 56;
		super.spriteMap = window.sprite.bullet.player2;
		super.x = x+this.width/2;
		super.y = y+this.height;
		this.dir = dir;
		window.sound.shoot.pew.replay();
		super.speed = -30;
		this.hitDmg = window.player.damage +25;			
		}
	damage(){
		for(var enemy in window.enemyList){
			
			if(hitTest(this, window.enemyList[enemy])){
				window.enemyList[enemy].damage(this.hitDmg);
				this.kill();
		
		}
			
		}
	}
	update(){
	this.y += this.speed;
	if(this.dir==true){
	this.x += this.speed/5;
	} else {
	this.x -= this.speed/5;
	}
	this.damage();
	this.move();
		
	}
}



















class playerBomb extends Bullet{
	constructor(){
		super();
		super.width = 192;
		super.height = 1500;
		super.spriteMap = window.sprite.bullet.bomb;
		super.x = window.player.x + window.player.width/2 - this.width/2;
		super.y = window.player.y+20-this.height;
		super.speed = -20;
		this.hitDmg = 20;		
		this.life = 60;
		window.sound.shoot.lazer.replay();
		}
	damage(){

		for(var enemy in window.enemyList){
			if(hitTest(this, window.enemyList[enemy])){
			window.score.value =  10 + (+window.score.value);
			window.enemyList[enemy].damage(this.hitDmg);
		
			}
		}
		for(var enemy in window.bulletList){
			if(hitTest(this, window.bulletList[enemy])){
			window.score.value =  10 + (+window.score.value);
			window.bulletList[enemy].kill();
			}
		}	
		}	
	
	update(){
	this.frame++;

	this.life--;
	if(this.life <= 0){
		player.bomb = "";
		window.garbage.push(this);
		
	}
	
	this.x = window.player.x + window.player.width/2 - this.width/2;
	this.y = window.player.y+20-this.height;
	this.damage();
	this.move();
		
	
}
}

class fighterBullet extends Bullet{
		constructor(x,y, angle){
			super(x,y);
			super.spriteMap = window.sprite.bullet.fighter;
			super.frame = 1;
			this.angle = angle;
			window.sound.shoot.pow.replay();
		}
		damage(){
			if(hitTest(this,window.player)){
				window.score.value++;
			}
			if(hitTest(this,window.player.hitbox)){
				window.player.hit();
				this.kill();
				
			}
			
		}
	update(){
	this.frame++;

 this.y += this.speed*Math.random()+this.speed/2;
 this.x += this.angle*Math.random()-.2;	
	this.damage();
	this.move();
		
	}

}


class spinnerBullet extends Bullet{
		constructor(x,y, angle){
			super(x,y);
			this.xO = x;
			this.yO = y;
			super.width = super.height = 64;
			super.spriteMap = window.sprite.bullet.spinner;
			super.frame = 1;
			this.angle = angle;
			super.speed = 20;
			window.sound.shoot.kachow.replay();
		}
		damage(){
			if(hitTest(this,window.player)){
				window.score.value++;
			}
			if(hitTest(this,window.player.hitbox)){
				window.player.hit();
				this.kill();
				
			}
			
		}
	update(){
	this.frame++;
	
	this.x -= this.angle*Math.E^(Math.log(this.frame))*Math.cos(Math.log(this.frame))
	this.y -= Math.E^(Math.log(this.frame))*Math.sin(Math.log(this.frame));

	this.damage();
	this.move();
		
	}

}


class sniperBullet extends Bullet{
		constructor(x,y, angle){
			super(x,y);
			this.xO = x;
			this.yO = y;
			super.width = 
			super.height = 64;
			super.spriteMap = window.sprite.bullet.spinner;
			super.frame = 1;
			this.angle = angle;
			super.speed = 2000;
			window.sound.shoot.kachow.replay();
			this.life = 2000;
			
			
		}
		damage(){
			if(hitTest(this,window.player)){
				window.score.value++;
			}
			if(hitTest(this,window.player.hitbox)){
				window.player.hit();
				this.kill();
				
			}

			
		}
	update(){
	this.frame++;
	this.life--;
	this.x = (this.frame+this.life/this.speed)*Math.cos(this.angle) + this.xO;
	this.y = (this.frame+this.life/this.speed)*Math.sin(this.angle) + this.yO;
	if(this.life<=0){
			this.kill();
	}
	this.damage();
	this.move();
		
	}

}
class tracerBullet extends Bullet{
		constructor(x,y, angle){
			super(x,y);
			this.xO = x;
			this.yO = y;
			super.width = super.height = 32;
			super.spriteMap = window.sprite.bullet.tracer;
			super.frame = 1;
			this.angle = angle;
			window.sound.shoot.zoop.replay();
			this.radius = .5;
		}
		damage(){
			if(hitTest(this,window.player)){
				window.score.value++;
			}
			if(hitTest(this,window.player.hitbox)){
				window.player.hit();
				this.kill();
				
			}

			
		}
	update(){
	this.radius+=.5;
	this.frame++;
	this.yO++;
//	(this.frame)/360*this.speed+
	this.x = this.radius * Math.cos((this.frame)/360*this.speed+this.angle)+this.xO;
 	
//(this.frame)/360*this.speed+
	this.y =-1* this.radius * Math.sin((this.frame)/360*this.speed+this.angle)+this.yO;
 	
 	
	this.damage();
	this.move();
		
	}

}
class antiTracerBullet extends Bullet{
		constructor(x,y, angle){
			super(x,y);
			this.xO = x;
			this.yO = y;
			super.width = super.height = 32;
			super.spriteMap = window.sprite.bullet.tracer;
			super.frame = 1;
			this.angle = angle;
			window.sound.shoot.zoop.replay();
			this.radius = .5;
		}
		damage(){
			if(hitTest(this,window.player)){
				window.score.value++;
			}
			if(hitTest(this,window.player.hitbox)){
				window.player.hit();
				this.kill();
				
			}

			
		}
	update(){
	this.radius+=.5;
	this.frame++;
	this.yO++;
//	(this.frame)/360*this.speed+
	this.x = -1* this.radius * Math.cos((this.frame)/360*this.speed+this.angle)+this.xO;
 	
//(this.frame)/360*this.speed+
	this.y = -1*this.radius * Math.sin((this.frame)/360*this.speed+this.angle)+this.yO;
 	
 	
	this.damage();
	this.move();
		
	}

}


/*Fun bullet patterns:

Does a Spiral, but slows to a stop and speeds up occasionally

 this.x -= Math.E^(Math.log(this.frame))*Math.cos(Math.log(this.frame))
 this.y -= Math.E^(Math.log(this.frame))*Math.sin(Math.log(this.frame));


Chaos Bullet

 this.y += this.speed*Math.random()+this.speed/2;
 this.x += this.angle*Math.random();
 
 
 Actually does the spiral right this time
this.x = this.frame*Math.cos(this.frame/50) + this.xO;
this.y = this.frame*Math.sin(this.frame/50) + this.yO;	
 
 
 Circle && Spiral (Increment Radius)
 
 Angle is in Radians
 
	this.x = this.radius * Math.cos((this.frame)/360*this.speed+this.angle)+this.xO;
	this.y = this.radius * Math.sin((this.frame)/360*this.speed+this.angle)+this.yO;
 	
 

Shoots Straight out, at an angle
 
 Angle is in Degress:

	this.x = (this.frame)*Math.cos(this.angle) + this.xO;
	this.y = (this.frame)*Math.sin(this.angle) + this.yO;
 	
 
*/






