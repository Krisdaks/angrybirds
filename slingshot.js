class Slingshot{
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness:0.04,
            length:10
        }
        this.slingshot=Constraint.create(options);
        World.add(world,this.slingshot)
    }

    display(){
        var bodya = this.slingshot.bodyA.position
        var bodyb = this.slingshot.bodyB.position
        push();
        strokeWeight(4)
        line(bodya.x,bodya.y,bodyb.x,bodyb.y)
        pop();
    }     

}