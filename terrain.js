

function makeTerrain(width, height, displace, roughness, seed) {
    var points = [],
       
        power = Math.pow(2, Math.ceil(Math.log(width) / (Math.log(2)))),
        rand = height*.6 ,
        seed = seed || {
            s: rand,
            e: rand
        };

    if(seed.s === 0){
        seed.s = height / 2 + (Math.random() * displace * 2) - displace;
    }
    points[0] = seed.s;
    
    if(seed.e === 0){
        seed.e = height / 2 + (Math.random() * displace * 2) - displace
    }
    points[power] = seed.e;
    
    displace *= roughness;

    for (var i = 1; i < power; i *= 2) {
        for (var j = (power / i) / 2; j < power; j += power / i) {
            points[j] = ((points[j - (power / i) / 2] + points[j + (power / i) / 2]) / 2);
            points[j] += (Math.random() * displace * 2) - displace
        }
        displace *= roughness;
    }
    return points;
}

function drawTerrain(points){
//    ctx.lineJoin="round";

    ctx.beginPath();
    ctx.moveTo(0,canvas.height);
    ctx.strokeStyle = "005C09"

    for (var i = 0; i < points.length; i+=1) {
        ctx.lineTo(i,points[i]);
    };
    ctx.lineTo(points.length-1,canvas.height)
    ctx.lineTo(0,canvas.height)

    ctx.closePath();
    ctx.fill();
}

