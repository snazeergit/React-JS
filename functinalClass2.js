function Addition(){
    this.a=10
    this.add=function(){
        return this.a+this.b
    }
}


var obj=new Addition()
obj.add()
NaN
//Adding a value to the variable
obj.b=20
20
obj.add()
30