"use strict"
class Bullet{
	constructor(x,y){
		this.x = x || -10;
		this.y = y || -10;
		this.BulletSize = 5;
		this.speed = 4;
		this.width = 24;
		this.height = 24;
		
		this.spriteMap = sprite.bullet.spinner;
		this.frame = 0;
		main.drawImage(this.spriteMap, (this.width*(this.frame % 3)), 0, this.width, this.height, this.x, this.y, this.width, this.height);
	}
	move(){

		main.drawImage(this.spriteMap, (this.width*(Math.floor(this.frame/4)% 3)), 0, this.width, this.height, this.x, this.y, this.width, this.height);
		if(this.y > playarea.height || this.x+this.width < 0 || this.x > 900 ){
			this.kill();
		}
	}
	kill(){
	
		garbage.push(this);
		bulletList.splice(bulletList.indexOf(this), 1);

	}

}

class playerBullet extends Bullet{
	constructor(x,y){
		super();
		super.width = 17;
		super.height = 56;
		super.spriteMap = sprite.bullet.player0;
	super.x = x+this.width/2;
		super.y = y+this.height;
		sound.shoot.pew.replay();
		super.speed = -20;
		this.hitDmg = player.damage;			
		}
	damage(){
		for(var enemy in enemyList){
			
			if(hitTest(this, enemyList[enemy])){
				enemyList[enemy].damage(this.hitDmg);
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
		super.spriteMap = sprite.bullet.player1;
	super.x = x+this.width/2;
		super.y = y+this.height;
		sound.shoot.pew.replay();
		super.speed = -25;
		this.hitDmg = player.damage + 10;			
		}
	damage(){
		for(var enemy in enemyList){
			
			if(hitTest(this, enemyList[enemy])){
				enemyList[enemy].damage(this.hitDmg);
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
		super.spriteMap = sprite.bullet.player2;
	super.x = x+this.width/2;
		super.y = y+this.height;
		sound.shoot.pew.replay();
		super.speed = -30;
		this.hitDmg = player.damage + 25;			
		}
	damage(){
		for(var enemy in enemyList){
			
			if(hitTest(this, enemyList[enemy])){
				enemyList[enemy].damage(this.hitDmg);
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
		super.spriteMap = sprite.bullet.player0;
		super.x = x+this.width/2;
		super.y = y+this.height;
		this.dir = dir;
		sound.shoot.pew.replay();
		super.speed = -20;
		this.hitDmg = player.damage;			
		}
	damage(){
		for(var enemy in enemyList){
			
			if(hitTest(this, enemyList[enemy])){
				enemyList[enemy].damage(this.hitDmg);
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
		super.spriteMap = sprite.bullet.player1;
		super.x = x+this.width/2;
		super.y = y+this.height;
		this.dir = dir;
		sound.shoot.pew.replay();
		super.speed = -25;
		this.hitDmg = player.damage +10;			
		}
	damage(){
		for(var enemy in enemyList){
			
			if(hitTest(this, enemyList[enemy])){
				enemyList[enemy].damage(this.hitDmg);
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
		super.spriteMap = sprite.bullet.player2;
		super.x = x+this.width/2;
		super.y = y+this.height;
		this.dir = dir;
		sound.shoot.pew.replay();
		super.speed = -30;
		this.hitDmg = player.damage +25;			
		}
	damage(){
		for(var enemy in enemyList){
			
			if(hitTest(this, enemyList[enemy])){
				enemyList[enemy].damage(this.hitDmg);
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
		super.spriteMap = sprite.bullet.bomb;
		super.x = player.x + player.width/2 - this.width/2;
		super.y = player.y+20-this.height;
		super.speed = -20;
		this.hitDmg = 20;		
		this.life = 60;
		sound.shoot.lazer.replay();
		}
	damage(){

		for(var enemy in enemyList){
			if(hitTest(this, enemyList[enemy])){
			score.value =  10 + (+score.value);
			enemyList[enemy].damage(this.hitDmg);
		
			}
		}
		for(var enemy in bulletList){
			if(hitTest(this, bulletList[enemy])){
			score.value =  10 + (+score.value);
			bulletList[enemy].kill();
			}
		}	
		}	
	
	update(){
	this.frame++;

	this.life--;
	if(this.life <= 0){
		player.bomb = "";
		garbage.push(this);
		
	}
	
	this.x = player.x + player.width/2 - this.width/2;
	this.y = player.y+20-this.height;
	this.damage();
	this.move();
		
	
}
}

class fighterBullet extends Bullet{
		constructor(x,y, angle){
			super(x,y);
			super.spriteMap = sprite.bullet.fighter;
			super.frame = 1;
			this.angle = angle;
			sound.shoot.pow.replay();
		}
		damage(){
			if(hitTest(this,player)){
				score.value++;
			}
			if(hitTest(this,player.hitbox)){
				player.hit();
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
			super.spriteMap = sprite.bullet.spinner;
			super.frame = 1;
			this.angle = angle;
			super.speed = 20;
			sound.shoot.kachow.replay();
		}
		damage(){
			if(hitTest(this,player)){
				score.value++;
			}
			if(hitTest(this,player.hitbox)){
				player.hit();
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
			super.spriteMap = sprite.bullet.spinner;
			super.frame = 1;
			this.angle = angle;
			super.speed = 2000;
			sound.shoot.kachow.replay();
			this.life = 2000;
			
			
		}
		damage(){
			if(hitTest(this,player)){
				score.value++;
			}
			if(hitTest(this,player.hitbox)){
				player.hit();
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
			super.spriteMap = sprite.bullet.tracer;
			super.frame = 1;
			this.angle = angle;
			sound.shoot.zoop.replay();
			this.radius = .5;
		}
		damage(){
			if(hitTest(this,player)){
				score.value++;
			}
			if(hitTest(this,player.hitbox)){
				player.hit();
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
			super.spriteMap = sprite.bullet.tracer;
			super.frame = 1;
			this.angle = angle;
			sound.shoot.zoop.replay();
			this.radius = .5;
		}
		damage(){
			if(hitTest(this,player)){
				score.value++;
			}
			if(hitTest(this,player.hitbox)){
				player.hit();
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






