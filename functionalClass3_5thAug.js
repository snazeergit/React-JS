function Cal(){

    this.a=10
    this.sum=function(){
        return this.a+this.b
    }
}

var obj=new Cal()

//Adding varible at class level from outside a class
Cal.prototype.b=20
obj.sum() //30

//Adding a varible at object level from outside the class
//limitation of this is varibale is only be available to the current obj, 
//any new obj will not have any clue about this variable as its scope is ends in previous obj.
//hence we add at class level so that all the objs can access them.
obj.b=50
obj.sum()//60
