class Paper
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0.3,
            'isStatic':false,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        this.image = loadImage("paper.png");
        World.add(world,this.body);
     
        
    }

    display()
    {
        var paperpos=this.body.position;
        push();
        translate(paperpos.x,paperpos.y);
        imageMode(CENTER);
        image(this.image,0,0,100,100);
        pop();
    }
}