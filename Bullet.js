
function Bullet(x,y,angle,power){
	this.x = x;
	this.y = y;
	this.radius = 20;
	this.xS = Math.cos(angle)*power;
	this.yS = Math.sin(angle)*power;
}

Bullet.prototype.gravity = function(){
	this.yS+=.5;
	this.x+=wind.wind*2;
}

Bullet.prototype.act = function(){
	this.x+=this.xS;
	this.y+=this.yS;
	this.gravity();
}

Bullet.prototype.collide = function(){
	
	if (this.y>= terrain[Math.floor(this.x)]) {
		redraw = true;
		for (var i = this.radius; i >= 0; i--) {
			var removed = Math.sqrt(Math.pow(this.radius,2)-Math.pow(i,2));
			if (terrain[Math.floor(this.x+i)]-removed) {};
			terrain[Math.floor(this.x+i)]+=removed;
			if(i!=0)
				terrain[Math.floor(this.x-i)]+=removed;

		};
		for (var i = enemy.length - 1; i >= 0; i--) {
			if(2*this.radius>=Math.sqrt(Math.pow(enemy[i].x-this.x,2)+Math.pow(enemy[i].y-this.y,2)))
				enemy.splice(i,1);
		};
		for (var i = players.length - 1; i >= 0; i--) {
			var dis =  Math.sqrt(Math.pow(players[i].x-this.x,2)+Math.pow(players[i].y-this.y,2)),
				damage = 0;

			if (dis<this.radius*2) {
				damage = Math.floor(this.radius*5/dis)
			};


			if(damage>0){
				players[i].health-=damage;

				if(players[i].health<=	0){
					players.splice(i,1);
					return false;
				}

				
			}
		};
		return true;

			};
}