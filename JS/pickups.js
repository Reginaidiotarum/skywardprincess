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
		this.spriteMap = sprite.pickup.bomb;
		main.drawImage(this.spriteMap, (((this.frame) % 4)*this.width), 0, this.width, this.height, this.x, this.y, this.width, this.height);
		
	}
	kill(){

		this.spriteMap = null;
		garbage.push(this);
		pickUpList.splice(pickUpList.indexOf(this), 1);
	}
	move(){
		this.frame++;
		this.y+=3;
		main.drawImage(this.spriteMap, ((Math.floor(this.frame/4) % 4) * this.width), 0, this.width, this.height, this.x, this.y, this.width, this.height);
		if(this.x > (playarea.width + 50) || this.x < -50 || this.y > playarea.height){
				this.kill();
		}
	}


}
	
	
	


class bombPU extends pickUp{
	constructor(x,y){
			super(x,y);	
			//this.spriteMap = sprite.pickup.bomb;
			
	}
	update(){
		if(hitTest(this, player)){
				sound.pickup.bomb.replay();
				bombUp();
				this.kill();
		
		}
		super.move();
	}
}

class health extends pickUp{
	constructor(x,y){
			super(x,y);	
			this.spriteMap = sprite.pickup.life;
			
	}
	update(){
		if(hitTest(this, player)){
						sound.pickup.life.replay();
				hpUp()
				this.kill();
		
		}
		super.move();
	}
}
class powerUp extends pickUp{
	constructor(x,y){
			super(x,y);	
			this.spriteMap = sprite.pickup.power;
			
	}
	update(){
		if(hitTest(this, player)){
						sound.pickup.power.replay();
				pUp()
				this.kill();
		
		}
		super.move();
	}
}

class coin extends pickUp{
	constructor(x,y){
			super(x,y);	
			this.spriteMap = sprite.pickup.coin;
			
	}
	update(){
		if(hitTest(this, player)){
						sound.pickup.coin.replay();
			score.value = +score.value + 1000;	
				this.kill();
		
		}
		super.move();
	}
}

function randPU(x,y){

	switch(Math.floor(Math.random() * (4))){
		case 1:
		pickUpList.push(new powerUp(x,y));
		break;
		case 2:
		pickUpList.push(new health(x,y));
		break;
		case 0:
		pickUpList.push(new bombPU(x,y));
		break;
		case 3:
		pickUpList.push(new coin(x,y));
		break;
	}

}
