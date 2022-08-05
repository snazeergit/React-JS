
function Dad(){
    this.j=90
}

class Mom extends Dad{
    i=10
    sum(){
        console.log(this.i+this.j)
    }
}

var mom=new Mom()
mom.sum()
mom.i

//output
//100
//10

//A normal JS class can extend functinal class but reverse is not possible.
//that is functional class can not extend a normal JS class

/* class Mom{
    i=10
}
function Dad() extends Mom{
    this.b=20
} */