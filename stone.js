class Stone{
constructor(x,y){
var op={
denstity:12,
restitution:0.3,
friction:3,
mass:23
}
this.body=Bodies.rectangle(x,y,100,100,op)
this.width=100
this.height=100
World.add(world,this.body);
}
display(){
   
    var pos=this.body.position
push();
translate(pos.x,pos.y)
    strokeWeight(14)
    stroke("black")
    fill("black")
    rectMode(CENTER);
    rect(0,0,this.width,this.height)
 pop();
};



};