


function Tank(c,keys,pos){
	this.x = pos || Math.random()*width;
	this.y = -10;
	this.life = 100;
	this.angle = -.5;
	this.power = 10;
	this.reload = 0;
	this.reloadTime = 100;
	this.health = 25;
	this.keys = keys;
	this.color = c;

}

Tank.prototype.drawCannon = function(color,thick,length){
	ctx.strokeStyle = color;
	ctx.lineWidth = thick || 6;
	ctx.beginPath();
	ctx.moveTo(this.x+5,this.y+5);
	ctx.lineTo(Math.cos(this.angle)*(length||20)+this.x+5,Math.sin(this.angle)*(length || 20)+this.y+5);

	ctx.closePath();
	ctx.stroke();

}



Tank.prototype.move = function(){

	if (this.keys.right[1]) {
		this.x+=1;
	};

	if (this.keys.left[1]) {
		this.x-=1;
	};

	if (this.keys.shoot[1]&&this.reload<0){
		bullets.push(new Bullet(Math.cos(this.angle)*(22)+this.x+5,Math.sin(this.angle)*(22)+this.y+5,this.angle,this.power))
		this.reload = this.reloadTime;
	}

	if (this.keys.aimUp[1]&&this.angle>-3) {
		this.drawCannon(backGroundColor,12)
		this.angle-=.04;
		this.drawCannon(this.color)

	};

	if (this.keys.aimDown[1]&&this.angle<-0) {
			this.drawCannon(backGroundColor,12)
		this.angle+=.03;
		this.drawCannon(this.color)	};

	if (this.keys.increase[1]&&this.power<=this.health) {
		this.power+=.25;
	};

	if (this.keys.decrease[1]&&this.power>=1) {
		this.power-=.25;
	};

}

Tank.prototype.act = function(){

	ctx.fillStyle = backGroundColor;
	ctx.fillRect(this.x-.3,this.y-1,10.4,11.4)

	this.drawCannon(backGroundColor,8,22);

	this.move();

	this.y = terrain[Math.floor(this.x)]-10;
	for (var i = 10; i >= 0; i--) {
		if (this.y>terrain[Math.floor(this.x+i)]-10) {
			this.y = terrain[Math.floor(this.x+i)]-10;
		};
	};

	this.drawCannon(this.color);
	
	ctx.fillStyle = this.color;
	ctx.fillRect(this.x,this.y,10,10)

	if(this.power>this.health){
		this.power = this.health
	}

	this.reload--;		
}
