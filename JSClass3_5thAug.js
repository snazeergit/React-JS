
class Dad{
    j=90
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