"use strict"
class Enemy{
	constructor(x,y,w,h){
				this.width = w || 64;
		this.height = h || 92;
		this.x = x - this.width/2 || -100;
		this.y = y || 100;

		this.frame = 0;
		this.hp = 10;
		this.def = 0;
		this.curFrame = 0;
		this.damaged;
		this.BulletSize = 5;
		this.spriteMap = sprite.enemy.default;
		main.drawImage(this.spriteMap, (((this.frame)%3)*this.width), 0, this.width, this.height, this.x, this.y, this.width, this.height);
		this.points = 50;
		this.cooldown = 60;
		
	}
	
	damage(value){
	
			sound.hit.burn.replay();
			this.damaged = 16;
		this.hp -= value;
		if(this.hp < 0){
			sound.hit.kill.replay();
			if((Math.floor(Math.random() * (10 - 1)) + 1) == 1){
                //replace with seqPU
				randPU(this.x+this.width/2,this.y)
			}
			
			score.value = +score.value + this.points;	
			this.kill();
		}
	}
	kill(){

		this.spriteMap = null;
		garbage.push(this);
		enemyList.splice(enemyList.indexOf(this), 1);
	}
	
	move(){
		this.frame++;
	    if(this.frame == 7){ this.frame = 0;}
		main.drawImage(this.spriteMap, (Math.floor(this.frame/2)*this.width), 0, this.width, this.height, this.x, this.y, this.width, this.height);
		if(this.x > (playarea.width + 50) || this.x < -50 || this.y > playarea.height){
				this.kill();
		}
	}

	pdamage(){
			if(hitTest(this,player.hitbox)){1
				player.hit();
				
				this.kill();
				
			}
			
		}
}
	
	
	


class Fighter extends Enemy{
	constructor(x,y){
			super(x,y);
			super.hp = 15;
			super.def = 0;
			super.BulletSize = 5;
			super.spriteMap = sprite.enemy.fighter;
			super.points = 100;
			
	}
	update(){
		
		this.curFrame++;
		if(this.damaged){
				super.spriteMap = sprite.flash.fighter;
				this.damaged--;
		} else {
				super.spriteMap = sprite.enemy.fighter;
		}
		if(this.curFrame/this.cooldown == Math.round(this.curFrame/this.cooldown) & this.x>0){
					bulletList.push(new fighterBullet((this.x+this.width/2-15),(this.y+this.height), .5));
					bulletList.push(new fighterBullet((this.x+this.width/2+15),(this.y+this.height),.5));	
		}
		switch(true){
		case (this.curFrame<200):	//appear
			this.y += 3;
			if(this.x < 450 - this.width/2) {
			this.x += .3;
			}
			if(this.x >450 - this.width/2) {
			this.x -= .3;	
			}
			break;
		case (this.curFrame>200):   //Hang for 20 frames
			
		}
		
		super.pdamage();
		super.move();
	}
}


class Spinner extends Enemy{
	constructor(x,y){
			
		//	super.height = 112;
		//	super.width = 136;
			super(x,y, 144, 144);
			super.hp = 75;
			super.def = 0;
			super.BulletSize = 5;
			super.spriteMap = sprite.enemy.spinner;
			super.points = 100;
			super.cooldown = 90;
			this.speed = 3;
			
	}
	update(){
		this.curFrame++;
				if(this.damaged){
				super.spriteMap = sprite.flash.spinner;
				this.damaged--;
		} else {
				super.spriteMap = sprite.enemy.spinner;
		}
		
		if(this.curFrame/this.cooldown == Math.round(this.curFrame/this.cooldown)){
					var dir = (this.x+(this.width/2)<450)?-1:1;
					bulletList.push(new spinnerBullet((this.x+this.width/2-15),(this.y+this.height), dir));
			
		}
		this.y += this.speed;
		if(this.y >= 300){
			this.speed = 1;
		}
		super.pdamage();
		super.move();
		}
}



class Tracer extends Enemy{
	constructor(x,y){
//			super.height = 156;
	//		super.width = 128;
			super(x,y, 128, 156);
			
			super.hp = 100;
			super.def = 0;
			super.BulletSize = 5;
			super.spriteMap = sprite.enemy.tracer;
			super.points = 100;
			super.cooldown = 60;
			this.placed = false;
			
	}
	update(){
		this.curFrame++;
		if(this.damaged){
				super.spriteMap = sprite.flash.tracer;
				this.damaged--;
		} else {
				super.spriteMap = sprite.enemy.tracer;
		}
		if(this.curFrame/this.cooldown == Math.round(this.curFrame/this.cooldown)){
			if(this.x < 450) {
			bulletList.push(new tracerBullet(this.x+this.width/2,this.y+this.height-10, 180));
			}
			if(this.x > 450) { 
			bulletList.push(new antiTracerBullet(this.x+this.width/2,this.y+this.height-10, 180));
			}
		}
		this.y += 1;
		if(this.y >= 300){
			if(this.x < 450) {
				this.x -= 2;	
			}
			if(this.x > 450) {
				this.x += 2;	
			}
		}
		super.pdamage();
		super.move();
	}
}


class extremeTracer extends Enemy{
	constructor(x,y){
		//	super.height = 144;
		//	super.width = 144;
			super(x,y, 144, 144);
			
			super.hp = 120;
			super.def = 0;
			super.BulletSize = 5;
			super.spriteMap = sprite.enemy.tracer;
			super.points = 100;
			super.cooldown = 30;
			this.placed = false;
	}
	update(){
		if(this.damaged){
				super.spriteMap = sprite.flash.tracer;
				this.damaged--;
		} else {
				super.spriteMap = sprite.enemy.tracer;
		}
		this.curFrame++;
		if(this.curFrame/this.cooldown == Math.round(this.curFrame/this.cooldown)){
			if(this.x < 450) {
			bulletList.push(new tracerBullet(this.x+this.width/2,this.y+this.height-10, 180));
			}
			if(this.x > 450) { 
				bulletList.push(new antiTracerBullet(this.x+this.width/2,this.y+this.height-10, -90));
			}
		}
		this.y += 1;
		if(this.y >= 300){
			if(this.x < 450) {
				this.x -= 2;	
			}
			if(this.x > 450) {
				this.x += 2;	
			}
		}
		super.pdamage();
		super.move();
	}
}





class Sniper extends Enemy{
	constructor(x,y,path){
		//	super.height = 144;
		//	super.width = 144;
				//	super.height = 112;
		//	super.width = 136;
			super(x,y, 136, 112);
			
			super.hp = 70;
			super.def = 0;
			super.BulletSize = 5;
			super.spriteMap = sprite.enemy.tracer;
			super.points = 100;
			super.cooldown = 30;
			this.placed = false;
	}
	
	
	update(){
		this.curFrame++;
				if(this.damaged){
					super.spriteMap = sprite.flash.sniper;
				this.damaged--;
		} else {
				super.spriteMap = sprite.enemy.sniper;
		}
		
		if(this.curFrame/this.cooldown == Math.round(this.curFrame/this.cooldown)){
			
			bulletList.push(new sniperBullet((this.x+this.width/2-15),(this.y+this.height), (this.curFrame % 360)));
		}
		this.y+=.5;
		if(this.y >1000){
			if(this.x<=450){
				this.x--;
			} else {
				this.x++;
			}
		}
		super.pdamage();
		super.move();
	}
}

class Knight extends Enemy {
		constructor(x,y){
			super(x,y);
			super.height = 112;
			super.width = 136;dde
			super.hp = 50;
			super.def = 0;
			super.BulletSize = 5;
			super.spriteMap = sprite.enemy.knight;
			super.points = 100;
			super.cooldown = 0;
			this.placed = false;
			this.targetX = 450 - this.width/2;
			this.targetY = 150;
			this.speed = 4;
	}
	
	charge(){
			//Move to one of three collumns
			console.log("called");
		if(this.cooldown == 0){
		this.targetY = 100;
		let switchup = Math.floor(Math.random()*(3-1) + 1);
		console.log(switchup);
		switch (switchup){
			case 1:
				this.cooldown = 1; this.targetX = 150 - this.width/2; break;
			case 2:
				this.cooldown = 1; this.targetX = 450 - this.width/2; break;			
			case 3:	
				this.cooldown = 1; this.targetX = 750 - this.width/2; break;
			
			}
		
		}
		else {
			cooldown++;
			if(cooldown == 30) {
				
				
			
			}
		
		}

	
	}

	
	
	update(){
	
		if(this.x < this.targetX & this.targetX-this.x>this.speed){
			this.x+=this.speed;
		}
		else if(this.x > this.targetX & this.x-this.targetX>this.speed)
		{
			this.x+=this.speed;
		}
		
		else if(this.x < this.targetX & this.x-this.targetX<this.speed || (this.x > this.targetX & this.targetX-this.x<this.speed)){
			this.x = this.targetX;
		}
		
		if( this.y < this.targetY & this.targetY-this.y>this.speed){
			this.y+=this.speed;
		}
		else if(this.y > this.targetY & this.y-this.Y>this.speed)
		{
			this.y+=this.speed;
		}
		
	    else if(this.y < this.targetY & this.targetY-this.y<this.speed || (this.y > this.targetY & this.y-this.targetY<this.speed)){
			this.y = this.targetY;
		
		}
		
		if(this.x == this.targetX && this.y == this.targetY){
			this.charge();	

		}
	
	

	
	
	
	
		this.curFrame++;
		
		super.pdamage();
		super.move();
	}
	
	
}


