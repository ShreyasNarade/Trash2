class Bin {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0,
        'friction':1.0,
        'density':1.0,
        'isStatic' : true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.image = loadImage("assets/bin.png");
    this.width = width;
    this.height = height;
    this.image = loadImage("bin.png");


    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0,this.width, this.height);
    pop();
  }
};
