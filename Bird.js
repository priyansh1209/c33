class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory=[]
    this.smoke=loadImage("sprites/smoke.png")
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var pos = [this.body.position.x,this.body.position.y]
      this.trajectory.push(pos)
    }
    for(var t=0;t< this.trajectory.length;t++){
      image(this.smoke,this.trajectory[t][0],this.trajectory[t][1])
    }
    super.display();
  }
}
