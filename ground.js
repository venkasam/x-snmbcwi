class Ground{
    constructor(x,y,width,height){
    var options={
     isStatic:true
}
this.body=Bodies.rectangle(x,y,width,height,options)
this.height=height
this.width=width
World.add(world,this.body)
    }
display(){
pop()
rectMode(CENTER)
fill("purple")
rect(this.body.position.x,this.body.position.y,this.width,this.height)
push()


}


}