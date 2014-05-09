
function Enemy(position, direction){
	this.dirX = direction/3;
	this.x = position;
	this.y = terrain[Math.floor(this.x)]-11;
}

Enemy.prototype.act = function() {
	ctx.fillStyle = backGroundColor
	ctx.fillRect(this.x-.7,this.y-.7,11.4,11.4)
	this.x += this.dirX;

	this.y = terrain[Math.floor(this.x)]-11;
	for (var i = 10; i >= 0; i--) {
		if (this.y>terrain[Math.floor(this.x+i)]-11) {
			this.y = terrain[Math.floor(this.x+i)]-11;
		};
	};
	ctx.fillStyle = "black"
	ctx.fillRect(this.x,this.y,10,10)
};

