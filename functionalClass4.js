function Addition(){
    this.a=10
    this.b=20
    this.sum=function(){
        //return this.a+this.b+this.c
        console.log(this.a+this.b+this.c)
    }

}
Addition.prototype.c=40
Addition.prototype.printColor=function(){
    //return "RED"
    console.log("RED")
}
var obj=new Addition()
obj.sum()
obj.printColor()

//will show direct memners of a class
obj
//output
//Addition {a: 10, b: 20, sum: ƒ}

//will show only inherited members of the class
Addition.prototype

//output
//{c: 40, printColor: ƒ, constructor: ƒ}
