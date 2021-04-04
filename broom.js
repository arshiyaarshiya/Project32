class Broom{
    constructor(x,y){
        var op={
            frictionAir: 1,
            density: 1,
        }
        this.body = Bodies.circle(x,y,20,op);
        this.radius = 300;
        this.image = loadImage("broom.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
		//translate(pos.x, pos.y);
		imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius, this.radius);
		pop();
    }
};