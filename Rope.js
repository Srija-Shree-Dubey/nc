class Rope
 {
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offSetX = offsetX;
        this.offSetY = offsetY;

        var options =
        {
            'bodyA' : body1,
            'bodyB' : body2,
            'pointB' : {x:this.offsetX, y:this.offsetY}

        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);

    }
    display()
    {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        var anchor1X = pointA.x;
        var anchor1Y = pointA.y;

        var anchor2X = pointB.x + this.offSetX;
        var anchor2Y = pointB.y + this.offSetY;

       
        stroke("black");
        strokeWeight(3);
        line(anchor1X,anchor1Y,anchor2X,anchor2Y);
   
    }
  };