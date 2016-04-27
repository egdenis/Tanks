

var canvas,
	ctx,
	players,
	terrain,
	bullets,
	redraw,
	height,
	width,
	peak,
	wind,
	backGroundColor,
	groundColor,
	enemy;

function init(){
	canvas = document.getElementById("canvas");
	
	if(canvas.getContext)
		ctx = canvas.getContext("2d");

	resizeCanvas();

	height = canvas.height;
	width = canvas.width;
	players = [];
	bullets = [];
	enemy = [];
	redraw = true;
	backGroundColor = "#E0F0FF";
	groundColor = "#61C071"
	ctx.fillStyle = backGroundColor;
	ctx.fillRect(0,0,width,height);

	

	do{
		var bottom = 0;

		terrain = makeTerrain(2048, height, height*1.2, 0.47).splice(0,width);
		peak = height;

		for (var i = terrain.length - 1; i >= 0; i--) {
			if(terrain[i]<peak)
				peak = terrain[i]
			if(terrain[i]>bottom)
				bottom = terrain[i]
		};

		
	}while (!( peak>height/4&&bottom<height*3/4))

		wind = new Wind();

	players.push(new Tank("blue",new Keys(39,37,32,38,40,188,190),100));
	players.push(new Tank("green",new Keys(68,65,70,87,83,69,81),width-100));

	window.addEventListener("keydown", onKeydown, false);
	window.addEventListener("keyup", onKeyup, false);

	//console.log(terrain)

	//window.addEventListener('mousemove', draw, false);
	act();
}

 function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function act(){
		var newEnemy = Math.random();

		if(newEnemy<.003){
			enemy.push(new Enemy(0,1))
		}
		else if(newEnemy<.006)
			enemy.push(new Enemy(width,-1))


		if(redraw){

			ctx.fillStyle = backGroundColor;
			ctx.fillRect(0,0,width,height )
			ctx.fillStyle =groundColor
			drawTerrain(terrain)

			
			
			redraw = false;
		}
		

		ctx.fillStyle ="red"

	for (var i = 0; i < players.length; i++) {
		
		players[i].act();
		};

	for (var z = 0; z <bullets.length ; z++) {
				ctx.fillStyle = backGroundColor;

			ctx.fillRect(Math.floor(bullets[z].x),Math.floor(bullets[z].y),5,5)	
			ctx.fillStyle = "black";
						bullets[z].act();

			if(bullets[z].collide()){
				bullets.splice(z,1);
				break;
			}
			else
				ctx.fillRect(Math.floor(bullets[z].x),Math.floor(bullets[z].y),5,5);	
		
					//console.log(players[i].bullet)

	};

	for (var i = 0; i <enemy.length; i++) {
		var remove = false;
		enemy[i].act();
		for (var z = players.length - 1; z >= 0; z--) {
			if(Math.floor(players[z].x)==Math.floor(enemy[i].x)){
				players[z].health-=5;
				remove=true;	
				if (players[z].health<=0) {
					players.splice(i,1)
				};
			}

		};
		if (remove) {
			enemy.splice(i,1)
		};
		
	};
		ctx.fillStyle = backGroundColor;
		ctx.fillRect(0,0,300,60)

		wind.act();

		for (var i = players.length - 1; i >= 0; i--) {
				ctx.fillStyle = players[i].color;
				ctx.fillText("player " + i + ": " + players[i].health,10,20+20*i);
			};
		


	

	if(players.length <= 1)
		init();
	else
		window.requestAnimFrame(act);
}


/*

\fix movement
fix clouds
fix bullets
GUI?
add new weapons
add enemy mode
*/
