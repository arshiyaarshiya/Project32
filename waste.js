class Waste {
    constructor(x,y,r){
        var option = {
            'restitution':0.005,
            'friction':0.3,
            'density':1,
        }
        this.body = Bodies.circle(x,y,r,option);
        this.radius = r;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}