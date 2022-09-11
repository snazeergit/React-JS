class Addition {
    i=10
    add(){
        console.log(this.i+this.j)
    }
}

var obj=new Addition()

Addition.prototype.j=50
obj.add()

obj.j=20
obj.add()

//If you add the any variable+value at class level, 
//you can change it at object level but the viceversa is not possible.
//Once variable+value is added at object level its value canot be overridden within the same obj

class Addition {
    i=10
    add(){
        console.log(this.i+this.j)
    }
}

var obj=new Addition()
Addition.prototype.j=50
obj.add()

obj.j=20
obj.add()

//output
//60
//30



class Addition {
    i=10
    add(){
        console.log(this.i+this.j)
    }
}

var obj=new Addition()


obj.j=20
obj.add()

Addition.prototype.j=50
obj.add()


//output
//30
//30



class Addition {
    i=10
    add(){
        console.log(this.i+this.j)
    }
}

var obj=new Addition()


obj.j=20
obj.add()

var obj1=new Addition()
Addition.prototype.j=50
obj1.add()

//output
//30
//60

