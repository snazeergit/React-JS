class Addition {
    i=10
    j=20
    add(){
        console.log(this.i+this.j)
    }
}

var obj=new Addition()

//accessing members of the class is same as the functional class
obj.add()
obj.i
obj.j