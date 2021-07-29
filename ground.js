class Ground{
	constructor(x,y,height){
		var options ={
        isStatic: true
        }
	this.body = Bodies.rectangle(x,y,100,height,options);
	this.x = x;
	this.y = y;
	this.width = 100;
	this.height= height;
    World.add(world, this.body);
    }

    display(){
    	var pos = this.body.position;
    	fill("yellow")
    	rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

}