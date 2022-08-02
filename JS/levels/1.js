window.level = [];
window.level[1] = {
	"stage": [
		function(){
			stopAllMusic();
			window.music.track3.currentTime = 0;
			window.music.track3.play();
		
			window.xSpeed = 0;
			window.ySpeed = -2;
			window.bg.skybox = window.world[0].skybox;
			window.bg.paralax = window.world[0].paralax;
			window.enemyList.push(new Fighter(200,-300));
			window.enemyList.push(new Fighter(450,-200));
			window.enemyList.push(new Fighter(700,-300));
		},
		function(){
			window.xSpeed = 0;
			window.ySpeed = -4;
			window.bg.skybox = window.world[0].skybox;
			window.bg.paralax = window.world[0].paralax;
			window.enemyList.push(new Fighter(250,-300));
			window.enemyList.push(new Fighter(450,-200));
			window.enemyList.push(new Fighter(650,-300));
			window.enemyList.push(new Fighter(150,-200));
			window.enemyList.push(new Fighter(750,-200));
		},
		function(){
			window.xSpeed = 0;
			window.ySpeed = -5;
			window.bg.skybox = window.world[0].skybox;
			window.bg.paralax = window.world[0].paralax;
			window.enemyList.push(new Tracer(300,-300));
			window.enemyList.push(new Fighter(450,-200));
			window.enemyList.push(new Tracer(600,-300));
			window.enemyList.push(new Fighter(150,-200));
			window.enemyList.push(new Fighter(750,-200));
		},
		function(){
			window.xSpeed = 0;
			window.ySpeed = -5;
			window.bg.skybox = window.world[0].skybox;
			window.bg.paralax = window.world[0].paralax;
			window.enemyList.push(new Tracer(250,-300));
			window.enemyList.push(new Tracer(650,-300));
			window.enemyList.push(new Tracer(150,-200));
			window.enemyList.push(new Tracer(750,-200));
		},
		
		function(){
			window.xSpeed = 0;
			window.ySpeed = -6;
			window.bg.skybox = window.world[0].skybox;
			window.bg.paralax = window.world[0].paralax;
			window.enemyList.push(new Tracer(250,-300));
			window.enemyList.push(new Fighter(450,-200));
			window.enemyList.push(new Tracer(650,-300));
			window.enemyList.push(new Fighter(150,-200));
			window.enemyList.push(new Fighter(750,-200));
			window.enemyList.push(new Fighter(175,-300));
			window.enemyList.push(new Fighter(725,-300));

			
		},
		function(){
			window.xSpeed = 0;
			window.ySpeed = -8;
			window.bg.skybox = window.world[0].skybox;
			window.bg.paralax = window.world[0].paralax;
			window.enemyList.push(new Tracer(250,-300));
			window.enemyList.push(new Tracer(650,-300));
			window.enemyList.push(new Tracer(150,-200));
			window.enemyList.push(new Tracer(750,-200));
			window.enemyList.push(new Tracer(200,-400));
			window.enemyList.push(new Tracer(600,-400));
		},
		
		function(){
			
			window.setTimeout(function(){pause();
			document.getElementById("stati").innerHTML = "";}, 2000);
			pause();
			
			document.getElementById("stati").innerHTML = "LEVEL COMPLETE";


			//window.setTimeout(pause(), 5000);
		},
		function(){
			window.lvl++;
			window.scene = 0;
			bulletList = [];
		
			window.level[window.lvl].stage[window.scene]();

			//window.setTimeout(pause(), 5000);
		}
	]
}
window.level[2] = {
	"stage": [
		function(){
		
			stopAllMusic();
			window.music.track2.currentTime = 0;
			window.music.track2.play();
			
			window.xSpeed = 0;
			window.ySpeed = -2;
			window.bg.skybox = window.world[1].skybox;
			window.bg.paralax = window.world[1].paralax;  
			window.enemyList.push(new Fighter(200,-200));
			window.enemyList.push(new Fighter(450,-100));
			window.enemyList.push(new Fighter(700,-200));
	
		
		},
		function(){
			window.xSpeed = 0;
			window.ySpeed = -3;
			window.bg.skybox = window.world[1].skybox;
			window.bg.paralax = window.world[1].paralax;
			window.enemyList.push(new Fighter(250,-200));
			window.enemyList.push(new Spinner(300,-100));
			window.enemyList.push(new Fighter(650,-200));
			window.enemyList.push(new Spinner(600,-100));
			window.enemyList.push(new Fighter(450,-100));
		},
		function(){
			window.xSpeed = 0;
			window.ySpeed = -3;
			window.bg.skybox = window.world[1].skybox;
			window.bg.paralax = window.world[1].paralax;
			window.enemyList.push(new Tracer(250,-200));
			window.enemyList.push(new Fighter(450,-100));
			window.enemyList.push(new Tracer(650,-200));
			window.enemyList.push(new Spinner(150,-100));
			window.enemyList.push(new Spinner(750,-200));
		},
		function(){
			window.xSpeed = 0;
			window.ySpeed = -4;
			window.bg.skybox = window.world[1].skybox;
			window.bg.paralax = window.world[1].paralax;
			window.enemyList.push(new Spinner(250,-300));
			window.enemyList.push(new Spinner(650,-300));
			window.enemyList.push(new Tracer(150,-200));
			window.enemyList.push(new Tracer(750,-200));
		},
				function(){
			window.xSpeed = 0;
			window.ySpeed = -4;
			window.bg.skybox = window.world[1].skybox;
			window.bg.paralax = window.world[1].paralax;
			window.enemyList.push(new Tracer(250,-200));
			window.enemyList.push(new Fighter(450,-100));
			window.enemyList.push(new Tracer(650,-200));
			window.enemyList.push(new Spinner(150,-100));
			window.enemyList.push(new Spinner(750,-200));
		},
		function(){
			window.xSpeed = 0;
			window.ySpeed = -4;
			window.bg.skybox = window.world[1].skybox;
			window.bg.paralax = window.world[1].paralax;
			window.enemyList.push(new Spinner(250,-300));
			window.enemyList.push(new Spinner(650,-300));
			window.enemyList.push(new Tracer(150,-200));
			window.enemyList.push(new Tracer(750,-200));
		},		function(){
			window.xSpeed = 0;
			window.ySpeed = -4;
			window.bg.skybox = window.world[1].skybox;
			window.bg.paralax = window.world[1].paralax;
			window.enemyList.push(new Tracer(250,-200));
			window.enemyList.push(new Fighter(450,-100));
			window.enemyList.push(new Tracer(650,-200));
			window.enemyList.push(new Spinner(150,-100));
			window.enemyList.push(new Spinner(750,-200));
		},
		function(){
			window.xSpeed = 0;
			window.ySpeed = -5;
			window.bg.skybox = window.world[1].skybox;
			window.bg.paralax = window.world[1].paralax;
			window.enemyList.push(new Spinner(250,-300));
			window.enemyList.push(new Spinner(650,-300));
			window.enemyList.push(new Tracer(150,-200));
			window.enemyList.push(new Tracer(750,-200));
		},
		function(){
			window.xSpeed = 0;
			window.ySpeed = -6;
			window.bg.skybox = window.world[1].skybox;
			window.bg.paralax = window.world[1].paralax;
			window.enemyList.push(new Tracer(250,-200));
			window.enemyList.push(new Fighter(450,-100));
			window.enemyList.push(new Tracer(650,-200));
			window.enemyList.push(new Spinner(150,-100));
			window.enemyList.push(new Spinner(750,-200));
		},
		function(){
			window.xSpeed = 0;
			window.ySpeed = -7;
			window.bg.skybox = window.world[1].skybox;
			window.bg.paralax = window.world[1].paralax;
			window.enemyList.push(new Spinner(250,-300));
			window.enemyList.push(new Spinner(650,-300));
			window.enemyList.push(new Tracer(150,-200));
			window.enemyList.push(new Tracer(750,-200));
		},
		 //TODO ADD 4 more waves:

		function(){
			
			window.setTimeout(function(){pause();
			document.getElementById("stati").innerHTML = "";}, 2000);
			pause();
			
			document.getElementById("stati").innerHTML = "LEVEL COMPLETE";


			//window.setTimeout(pause(), 5000);
		},
		function(){
			window.lvl++;
			window.scene = 0;
			bulletList = [];
		
			window.level[window.lvl].stage[window.scene]();

			//window.setTimeout(pause(), 5000);
		} 
	]
}
window.level[3] = { 
	"stage": [
		function(){
		stopAllMusic();
			window.music.track4.currentTime = 0;
			window.music.track4.play();
			window.xSpeed = 0;
			window.ySpeed = -1;
			window.bg.skybox = window.world[2].skybox;
			window.bg.paralax = window.world[2].paralax;
			window.enemyList.push(new Tracer(200,-200));
			window.enemyList.push(new Fighter(450,-100));
			window.enemyList.push(new Tracer(700,-200));
		},
		function(){
			window.xSpeed = 0;
			window.ySpeed = -2;
			window.bg.skybox = window.world[2].skybox;
			window.bg.paralax = window.world[2].paralax;
			window.enemyList.push(new Tracer(250,-200));
			window.enemyList.push(new Tracer(450,-100));
			window.enemyList.push(new Fighter(650,-200));
			window.enemyList.push(new Sniper(150,-100));
			window.enemyList.push(new Sniper(750,-100));
		},
		function(){
			window.xSpeed = 0;
			window.ySpeed = -2;
			window.bg.skybox = window.world[2].skybox;
			window.bg.paralax = window.world[2].paralax;
			window.enemyList.push(new Sniper(250,-200));
			window.enemyList.push(new Sniper(450,-100));
			window.enemyList.push(new Sniper(650,-200));
			window.enemyList.push(new Sniper(150,-100));
			window.enemyList.push(new Sniper(750,-200));
		},
		function(){
			window.xSpeed = 0;
			window.ySpeed = -2;
			window.bg.skybox = window.world[2].skybox;
			window.bg.paralax = window.world[2].paralax;
			window.enemyList.push(new Sniper(250,-300));
			window.enemyList.push(new Tracer(650,-300));
			window.enemyList.push(new Tracer(150,-200));
			window.enemyList.push(new Sniper(750,-200));
			window.enemyList.push(new Sniper(250,-400));
			window.enemyList.push(new Tracer(550,-400));
			window.enemyList.push(new Tracer(250,-400));
			window.enemyList.push(new Sniper(750,-400));
		},		
		function(){
			window.xSpeed = 0;
			window.ySpeed = -6;
			window.bg.skybox = window.world[2].skybox;
			window.bg.paralax = window.world[2].paralax;
			window.enemyList.push(new Spinner(250,-300));
			window.enemyList.push(new Spinner(650,-300));
			window.enemyList.push(new Tracer(150,-200));
			window.enemyList.push(new Tracer(750,-200));
			window.enemyList.push(new Sniper(250,-400));
			window.enemyList.push(new Tracer(550,-400));
			window.enemyList.push(new Tracer(250,-400));
			window.enemyList.push(new Sniper(750,-400));
		},
		function(){
			window.xSpeed = 0;
			window.ySpeed = -10;
			window.bg.skybox = window.world[2].skybox;
			window.bg.paralax = window.world[2].paralax;
			window.enemyList.push(new Spinner(250,-300));
			window.enemyList.push(new Spinner(650,-300));
			window.enemyList.push(new Tracer(150,-200));
			window.enemyList.push(new Tracer(750,-200));
			window.enemyList.push(new Sniper(250,-400));
			window.enemyList.push(new Tracer(550,-400));
			window.enemyList.push(new Tracer(250,-400));
			window.enemyList.push(new Sniper(750,-400));
			window.enemyList.push(new Fighter(200,-200));
			window.enemyList.push(new Fighter(450,-100));
			window.enemyList.push(new Fighter(700,-200));
		},
		function(){
			window.xSpeed = 0;
			window.ySpeed = -14;
			window.bg.skybox = window.world[2].skybox;
			window.bg.paralax = window.world[2].paralax;
			window.enemyList.push(new Sniper(250,-200));
			window.enemyList.push(new Tracer(650,-200));
			window.enemyList.push(new Tracer(150,-200));
			window.enemyList.push(new Sniper(750,-200));
			window.enemyList.push(new Fighter(200,-200));
			window.enemyList.push(new Fighter(450,-100));
			window.enemyList.push(new Fighter(700,-200));
			window.enemyList.push(new Spinner(250,-400));
			window.enemyList.push(new Spinner(650,-400));
		},
		function(){
			pause();
			window.setTimeout(function(){pause();
			document.getElementById("stati").innerHTML = "";}, 5000);
			document.getElementById("stati").innerHTML = "THANK YOU FOR PLAYING OUR DEMO";	
		},
		
		function(){
		window.hearts.innerHTML = "";
			menu();
		clearInterval(window.frameset);

		}
		
	]
}