class Ground{
constructor(x,y){
    var op={
        isStatic: true
    }
this.body=Bodies.rectangle(x,y,1500,50,op);
this.width=1500;
this.height=50;
World.add(world,this.body);
}
display(){
    var pos=this.body.position
    push();
    rectMode(CENTER)
    fill("brown")
rect(pos.x,pos.y,this.width,this.height)
pop();
}

}