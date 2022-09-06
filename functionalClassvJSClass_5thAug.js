function Father() {
    this.asset = 1000
    this.liability = 500

    this.netWorth = function () {
        console.log("From JS Functional Class::")
        console.log("Net Worth ::" + (this.asset - this.liability - this.tax))
    }
}
var obj = new Father()
//obj.tax=100
Father.prototype.tax = 100
Father.prototype.grossWorth = function () {
    console.log("Gross Worth ::" + (this.asset - this.liability))
}
obj.netWorth()
obj.grossWorth()


class Father1 {
    asset = 10000
    liability = 5000

    netWorth() {
        console.log("From JS Class::")
        console.log("Net Worth ::" + (this.asset - this.liability - this.tax))
    }
}

var obj1 = new Father1()
//obj1.tax=200
Father1.prototype.tax = 1000
Father1.prototype.grossWorth = function () {
    console.log("Gross Worth ::" + (this.asset - this.liability))
}
obj1.netWorth()
obj1.grossWorth()