
function Wind(){
	this.wind = Math.random()*5-2.5
	this.clouds = [];

	var numClouds = Math.floor(Math.random()*7); 

	for (var i = numClouds; i >= 0; i--) {
		this.clouds.push(new Cloud())		
	};
}

Wind.prototype.act = function(){
	this.wind+=Math.random()/32-1/64;

	for (var i = this.clouds.length - 1; i >= 0; i--) {
		this.clouds[i].erase();
	}

	for (var i = this.clouds.length - 1; i >= 0; i--) {
		
		ctx.fillStyle = "white"
		this.clouds[i].x+=this.wind
		if (this.clouds[i].x<0) {
			this.clouds[i].x=width;
		}
		else if (this.clouds[i].x>width) {
			this.clouds[i].x=0;
		}
		this.clouds[i].draw();
	};
			//console.log(this.clouds[0].y)

}