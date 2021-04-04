class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.6,
            length: 500
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

    }
    display(){
      //  if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(0);
            //stroke("turquoise");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        //}
    }
    
}