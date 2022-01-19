class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonImg = loadImage("assets/canon.png");
    this.baseImg = loadImage("assets/cannonBase.png");
  }
  display(){
    push();
    translate(this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.cannonImg,this.x,this.y,this.width,this.height);
    pop();

    image(this.baseImg,70,20,200,200);

  }
}
