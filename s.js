class Sand{
    constructor(x,y,r){
    var op={
        restitution:0.3,
        friction:5,
        density:1
    }
    this.body=Bodies.circle(x,y,r/2,op)
    this.width=r
    
    World.add(world,this.body);
    }
    display(){
       
        var pos=this.body.position
        
        fill("red")
        rectMode(CENTER);
        ellipse(pos.x,pos.y,this.width);
   
    }
    
    
    
    }