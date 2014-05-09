
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function onKeydown(e){
	var k = e.keyCode;
	for (var i = players.length - 1; i >= 0; i--) {
		
	
	switch (k) {
			// Control		``	`s
			case (players[i].keys.shoot[0]): // Down
				players[i].keys.shoot[1]=true;
				break;

			case (players[i].keys.left[0]): // Left
					players[i].keys.left[1]=true;
				break;
			case (players[i].keys.aimUp[0]): // Up
					players[i].keys.aimUp[1] = true;
				break;
			case (players[i].keys.right[0]): // Right
					players[i].keys.right[1]=true;
				break;
			case players[i].keys.aimDown[0]: // Down
					players[i].keys.aimDown[1]=true;
				break;
			case players[i].keys.increase[0]: // Down
					players[i].keys.increase[1]=true;
				break;
			case players[i].keys.decrease[0]: // Down
					players[i].keys.decrease[1]=true;
				break;
		};
	};
	
}

function onKeyup(e) {
		var k  = e.keyCode;
		for (var i = players.length - 1; i >= 0; i--) {
	
		switch (k) {
			case players[i].keys.shoot[0]: // Down
				players[i].keys.shoot[1]=false;
				break;

			case players[i].keys.left[0]: // Left
				players[i].keys.left[1]= false;
				break;
			
			case (players[i].keys.aimUp[0]): // Up
					players[i].keys.aimUp[1] = false;
				break;

			case players[i].keys.right[0]: // Right
				players[i].keys.right[1]= false;
				break;

			case players[i].keys.aimDown[0]: // Down
					players[i].keys.aimDown[1]=false;
				break;
			case players[i].keys.increase[0]: // Down
					players[i].keys.increase[1]=false;
				break;
			case players[i].keys.decrease[0]: // Down
					players[i].keys.decrease[1]=false;
				break;

			
		};
	}
	};


function Keys(r,l,s,u,d,i,e){
	this.right = [r,false];
	this.left = [l,false];
	this.shoot = [s,false];
	this.aimUp = [u,false];
	this.aimDown = [d,false];
	this.increase = [i,false];
	this.decrease = [e,false];
}


window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
          };
})();
