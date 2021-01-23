class Rub{
    constructor(x,y,r){
        var op={
	restitution:0.3,
			friction:5,
			density:1
        }
this.body=Bodies.circle(x,y,50,op);
this.r=50
World.add(world,this.body)
    }
    display(){
var pos=this.body.position
fill("blue")
ellipseMode(CENTER)
ellipse(pos.x,pos.y,100)

    }
}