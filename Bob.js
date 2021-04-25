class Bob
{
	constructor(x,y,r)
	{
	var options = 
	{
      'isStatic' : true,
	  'restitution' : 0.,
	  'friction' : 5,
	  'density': 1

	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var Bobpos = this.body.position;		
			push()
			translate(Bobpos.x, Bobpos.y);
			ellipseMode(RADIUS);
			strokeWeight(4);
			stroke("red");
			fill("red");
            ellipse(0,0, this.r, this.r);
			pop()
	}

}