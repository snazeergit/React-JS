function Addition(){
    this.a=10
    this.add=function(){
        return this.a+this.b
    }
}


var obj=new Addition()
obj.add()
NaN
//Adding a variable value to Object
obj.b=20
20
obj.add()
30