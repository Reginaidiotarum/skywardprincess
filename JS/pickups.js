"use strict"
class pickUp{
	constructor(x,y,w,h){
				this.width = w || 40;
		this.height = h || 40;
		this.x = x - this.width/2 || -100;
		this.y = y || 100;

		this.frame = 0;
		this.curFrame = 0;
		this.BulletSize = 5;
		this.spriteMap = window.sprite.pickup.bomb;
		window.main.drawImage(this.spriteMap, (((this.frame) % 4)*this.width), 0, this.width, this.height, this.x, this.y, this.width, this.height);
		
	}
	kill(){

		this.spriteMap = null;
		window.garbage.push(this);
		window.pickUpList.splice(window.pickUpList.indexOf(this), 1);
	}
	move(){
		this.frame++;
		this.y+=3;
		window.main.drawImage(this.spriteMap, ((Math.floor(this.frame/4) % 4) * this.width), 0, this.width, this.height, this.x, this.y, this.width, this.height);
		if(this.x > (window.playarea.width + 50) || this.x < -50 || this.y > window.playarea.height){
				this.kill();
		}
	}


}
	
	
	


class bombPU extends pickUp{
	constructor(x,y){
			super(x,y);	
			//this.spriteMap = window.sprite.pickup.bomb;
			
	}
	update(){
		if(hitTest(this, window.player)){
				window.sound.pickup.bomb.replay();
				bombUp();
				this.kill();
		
		}
		super.move();
	}
}

class health extends pickUp{
	constructor(x,y){
			super(x,y);	
			this.spriteMap = window.sprite.pickup.life;
			
	}
	update(){
		if(hitTest(this, window.player)){
						window.sound.pickup.life.replay();
				hpUp()
				this.kill();
		
		}
		super.move();
	}
}
class powerUp extends pickUp{
	constructor(x,y){
			super(x,y);	
			this.spriteMap = window.sprite.pickup.power;
			
	}
	update(){
		if(hitTest(this, window.player)){
						window.sound.pickup.power.replay();
				pUp()
				this.kill();
		
		}
		super.move();
	}
}

class coin extends pickUp{
	constructor(x,y){
			super(x,y);	
			this.spriteMap = window.sprite.pickup.coin;
			
	}
	update(){
		if(hitTest(this, window.player)){
						window.sound.pickup.coin.replay();
			window.score.value = +window.score.value + 1000;	
				this.kill();
		
		}
		super.move();
	}
}

function randPU(x,y){

	switch(Math.floor(Math.random() * (4))){
		case 1:
		window.pickUpList.push(new powerUp(x,y));
		break;
		case 2:
		window.pickUpList.push(new health(x,y));
		break;
		case 0:
		window.pickUpList.push(new bombPU(x,y));
		break;
		case 3:
		window.pickUpList.push(new coin(x,y));
		break;
	}

}