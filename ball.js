class Ball{
	constructor(x){
		var options ={
        restitution: 1.0
        }
	this.body = Bodies.circle(x,100,50,options);
	this.x = x;
	this.y = 100;
	this.radius = 50;
    World.add(world, this.body);
    }

    display(){
    	var pos = this.body.position;
    	fill("red");
    	ellipseMode(RADIUS);
        ellipse(pos.x,pos.y, this.radius);
    }

}