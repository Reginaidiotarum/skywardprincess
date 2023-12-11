let level = [];
level[1] = {
	"stage": [
		function(){
			stopAllMusic();
			music.track3.currentTime = 0;
			music.track3.play();
		
			xSpeed = 0;
			ySpeed = -2;
			bg.skybox = world[0].skybox;
			bg.paralax = world[0].paralax;
			enemyList.push(new Fighter(200,-300));
			enemyList.push(new Fighter(450,-200));
			enemyList.push(new Fighter(700,-300));
		},
		function(){
			xSpeed = 0;
			ySpeed = -4;
			bg.skybox = world[0].skybox;
			bg.paralax = world[0].paralax;
			enemyList.push(new Fighter(250,-300));
			enemyList.push(new Fighter(450,-200));
			enemyList.push(new Fighter(650,-300));
			enemyList.push(new Fighter(150,-200));
			enemyList.push(new Fighter(750,-200));
		},
		function(){
			xSpeed = 0;
			ySpeed = -5;
			bg.skybox = world[0].skybox;
			bg.paralax = world[0].paralax;
			enemyList.push(new Tracer(300,-300));
			enemyList.push(new Fighter(450,-200));
			enemyList.push(new Tracer(600,-300));
			enemyList.push(new Fighter(150,-200));
			enemyList.push(new Fighter(750,-200));
		},
		function(){
			xSpeed = 0;
			ySpeed = -5;
			bg.skybox = world[0].skybox;
			bg.paralax = world[0].paralax;
			enemyList.push(new Tracer(250,-300));
			enemyList.push(new Tracer(650,-300));
			enemyList.push(new Tracer(150,-200));
			enemyList.push(new Tracer(750,-200));
		},
		
		function(){
			xSpeed = 0;
			ySpeed = -6;
			bg.skybox = world[0].skybox;
			bg.paralax = world[0].paralax;
			enemyList.push(new Tracer(250,-300));
			enemyList.push(new Fighter(450,-200));
			enemyList.push(new Tracer(650,-300));
			enemyList.push(new Fighter(150,-200));
			enemyList.push(new Fighter(750,-200));
			enemyList.push(new Fighter(175,-300));
			enemyList.push(new Fighter(725,-300));

			
		},
		function(){
			xSpeed = 0;
			ySpeed = -8;
			bg.skybox = world[0].skybox;
			bg.paralax = world[0].paralax;
			enemyList.push(new Tracer(250,-300));
			enemyList.push(new Tracer(650,-300));
			enemyList.push(new Tracer(150,-200));
			enemyList.push(new Tracer(750,-200));
			enemyList.push(new Tracer(200,-400));
			enemyList.push(new Tracer(600,-400));
		},
		
		function(){
			
			setTimeout(function(){pause();
			document.getElementById("stati").innerHTML = "";}, 2000);
			pause();
			
			document.getElementById("stati").innerHTML = "LEVEL COMPLETE";


			//setTimeout(pause(), 5000);
		},
		function(){
			lvl++;
			scene = 0;
			bulletList = [];
		
			level[lvl].stage[scene]();

			//setTimeout(pause(), 5000);
		}
	]
}
level[2] = {
	"stage": [
		function(){
		
			stopAllMusic();
			music.track2.currentTime = 0;
			music.track2.play();
			
			xSpeed = 0;
			ySpeed = -2;
			bg.skybox = world[1].skybox;
			bg.paralax = world[1].paralax;  
			enemyList.push(new Fighter(200,-200));
			enemyList.push(new Fighter(450,-100));
			enemyList.push(new Fighter(700,-200));
	
		
		},
		function(){
			xSpeed = 0;
			ySpeed = -3;
			bg.skybox = world[1].skybox;
			bg.paralax = world[1].paralax;
			enemyList.push(new Fighter(250,-200));
			enemyList.push(new Spinner(300,-100));
			enemyList.push(new Fighter(650,-200));
			enemyList.push(new Spinner(600,-100));
			enemyList.push(new Fighter(450,-100));
		},
		function(){
			xSpeed = 0;
			ySpeed = -3;
			bg.skybox = world[1].skybox;
			bg.paralax = world[1].paralax;
			enemyList.push(new Tracer(250,-200));
			enemyList.push(new Fighter(450,-100));
			enemyList.push(new Tracer(650,-200));
			enemyList.push(new Spinner(150,-100));
			enemyList.push(new Spinner(750,-200));
		},
		function(){
			xSpeed = 0;
			ySpeed = -4;
			bg.skybox = world[1].skybox;
			bg.paralax = world[1].paralax;
			enemyList.push(new Spinner(250,-300));
			enemyList.push(new Spinner(650,-300));
			enemyList.push(new Tracer(150,-200));
			enemyList.push(new Tracer(750,-200));
		},
				function(){
			xSpeed = 0;
			ySpeed = -4;
			bg.skybox = world[1].skybox;
			bg.paralax = world[1].paralax;
			enemyList.push(new Tracer(250,-200));
			enemyList.push(new Fighter(450,-100));
			enemyList.push(new Tracer(650,-200));
			enemyList.push(new Spinner(150,-100));
			enemyList.push(new Spinner(750,-200));
		},
		function(){
			xSpeed = 0;
			ySpeed = -4;
			bg.skybox = world[1].skybox;
			bg.paralax = world[1].paralax;
			enemyList.push(new Spinner(250,-300));
			enemyList.push(new Spinner(650,-300));
			enemyList.push(new Tracer(150,-200));
			enemyList.push(new Tracer(750,-200));
		},		function(){
			xSpeed = 0;
			ySpeed = -4;
			bg.skybox = world[1].skybox;
			bg.paralax = world[1].paralax;
			enemyList.push(new Tracer(250,-200));
			enemyList.push(new Fighter(450,-100));
			enemyList.push(new Tracer(650,-200));
			enemyList.push(new Spinner(150,-100));
			enemyList.push(new Spinner(750,-200));
		},
		function(){
			xSpeed = 0;
			ySpeed = -5;
			bg.skybox = world[1].skybox;
			bg.paralax = world[1].paralax;
			enemyList.push(new Spinner(250,-300));
			enemyList.push(new Spinner(650,-300));
			enemyList.push(new Tracer(150,-200));
			enemyList.push(new Tracer(750,-200));
		},
		function(){
			xSpeed = 0;
			ySpeed = -6;
			bg.skybox = world[1].skybox;
			bg.paralax = world[1].paralax;
			enemyList.push(new Tracer(250,-200));
			enemyList.push(new Fighter(450,-100));
			enemyList.push(new Tracer(650,-200));
			enemyList.push(new Spinner(150,-100));
			enemyList.push(new Spinner(750,-200));
		},
		function(){
			xSpeed = 0;
			ySpeed = -7;
			bg.skybox = world[1].skybox;
			bg.paralax = world[1].paralax;
			enemyList.push(new Spinner(250,-300));
			enemyList.push(new Spinner(650,-300));
			enemyList.push(new Tracer(150,-200));
			enemyList.push(new Tracer(750,-200));
		},
		 //TODO ADD 4 more waves:

		function(){
			
			setTimeout(function(){pause();
			document.getElementById("stati").innerHTML = "";}, 2000);
			pause();
			
			document.getElementById("stati").innerHTML = "LEVEL COMPLETE";


			//setTimeout(pause(), 5000);
		},
		function(){
			lvl++;
			scene = 0;
			bulletList = [];
		
			level[lvl].stage[scene]();

			//setTimeout(pause(), 5000);
		} 
	]
}
level[3] = { 
	"stage": [
		function(){
		stopAllMusic();
			music.track4.currentTime = 0;
			music.track4.play();
			xSpeed = 0;
			ySpeed = -1;
			bg.skybox = world[2].skybox;
			bg.paralax = world[2].paralax;
			enemyList.push(new Tracer(200,-200));
			enemyList.push(new Fighter(450,-100));
			enemyList.push(new Tracer(700,-200));
		},
		function(){
			xSpeed = 0;
			ySpeed = -2;
			bg.skybox = world[2].skybox;
			bg.paralax = world[2].paralax;
			enemyList.push(new Tracer(250,-200));
			enemyList.push(new Tracer(450,-100));
			enemyList.push(new Fighter(650,-200));
			enemyList.push(new Sniper(150,-100));
			enemyList.push(new Sniper(750,-100));
		},
		function(){
			xSpeed = 0;
			ySpeed = -2;
			bg.skybox = world[2].skybox;
			bg.paralax = world[2].paralax;
			enemyList.push(new Sniper(250,-200));
			enemyList.push(new Sniper(450,-100));
			enemyList.push(new Sniper(650,-200));
			enemyList.push(new Sniper(150,-100));
			enemyList.push(new Sniper(750,-200));
		},
		function(){
			xSpeed = 0;
			ySpeed = -2;
			bg.skybox = world[2].skybox;
			bg.paralax = world[2].paralax;
			enemyList.push(new Sniper(250,-300));
			enemyList.push(new Tracer(650,-300));
			enemyList.push(new Tracer(150,-200));
			enemyList.push(new Sniper(750,-200));
			enemyList.push(new Sniper(250,-400));
			enemyList.push(new Tracer(550,-400));
			enemyList.push(new Tracer(250,-400));
			enemyList.push(new Sniper(750,-400));
		},		
		function(){
			xSpeed = 0;
			ySpeed = -6;
			bg.skybox = world[2].skybox;
			bg.paralax = world[2].paralax;
			enemyList.push(new Spinner(250,-300));
			enemyList.push(new Spinner(650,-300));
			enemyList.push(new Tracer(150,-200));
			enemyList.push(new Tracer(750,-200));
			enemyList.push(new Sniper(250,-400));
			enemyList.push(new Tracer(550,-400));
			enemyList.push(new Tracer(250,-400));
			enemyList.push(new Sniper(750,-400));
		},
		function(){
			xSpeed = 0;
			ySpeed = -10;
			bg.skybox = world[2].skybox;
			bg.paralax = world[2].paralax;
			enemyList.push(new Spinner(250,-300));
			enemyList.push(new Spinner(650,-300));
			enemyList.push(new Tracer(150,-200));
			enemyList.push(new Tracer(750,-200));
			enemyList.push(new Sniper(250,-400));
			enemyList.push(new Tracer(550,-400));
			enemyList.push(new Tracer(250,-400));
			enemyList.push(new Sniper(750,-400));
			enemyList.push(new Fighter(200,-200));
			enemyList.push(new Fighter(450,-100));
			enemyList.push(new Fighter(700,-200));
		},
		function(){
			xSpeed = 0;
			ySpeed = -14;
			bg.skybox = world[2].skybox;
			bg.paralax = world[2].paralax;
			enemyList.push(new Sniper(250,-200));
			enemyList.push(new Tracer(650,-200));
			enemyList.push(new Tracer(150,-200));
			enemyList.push(new Sniper(750,-200));
			enemyList.push(new Fighter(200,-200));
			enemyList.push(new Fighter(450,-100));
			enemyList.push(new Fighter(700,-200));
			enemyList.push(new Spinner(250,-400));
			enemyList.push(new Spinner(650,-400));
		},
		function(){
			pause();
			setTimeout(function(){pause();
			document.getElementById("stati").innerHTML = "";}, 5000);
			document.getElementById("stati").innerHTML = "THANK YOU FOR PLAYING OUR DEMO";	
		},
		
		function(){
		hearts.innerHTML = "";
			menu();
		clearInterval(frameset);

		}
		
	]
}
