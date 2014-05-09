
function Cloud(){

	this.x = Math.random()*(width);
	this.y = Math.floor(Math.random()*(peak-100)+20);
	this.shape = [];
	for (var i = 10; i >= 0; i--) {
        this.shape.push([Math.random()*50-25,Math.random()*10-5,Math.random()*5+10]);

        };
}

Cloud.prototype.draw = function() {
	ctx.fillStyle = "white";
	for (var i = this.shape.length - 1; i >= 0; i--) {
	ctx.beginPath();
	ctx.arc(this.x + this.shape[i][0],this.y + this.shape[i][1],this.shape[i][2],0,2*Math.PI,false)
	ctx.closePath();	
	ctx.fill();
	}
};

Cloud.prototype.erase = function(){
	ctx.fillStyle = backGroundColor;
	ctx.fillRect(this.x-40, this.y-20,80,40)
}