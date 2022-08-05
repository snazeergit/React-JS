//JavaScript's Functinal Class name first letter must be capital
function Bus(){
    //specifying this for variables and methods inside the functional classes is mandatory
    this.i=2
    this.j=4
    this.sum=function(){
        return this.i+this.j
    }
}

//Execute after running the functional class

//Creating object for functional class Bus and storing it into a varible
var bus=new Bus()
//Invoking class variables i, j and method sum() outside class the needs that class obj
bus.i
bus.j
bus.sum()