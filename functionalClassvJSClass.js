function father() {
    this.asset = 1000
    this.liability = 500

    this.netWorth = function () {
        console.log("From JS Functional Class::")
        console.log("Net Worth ::" + (this.asset - this.liability - this.tax))
    }
}
var obj = new father()
//obj.tax=100
father.prototype.tax = 100
father.prototype.grossWorth = function () {
    console.log("Gross Worth ::" + (this.asset - this.liability))
}
obj.netWorth()
obj.grossWorth()


class father1 {
    asset = 10000
    liability = 5000

    netWorth() {
        console.log("From JS Class::")
        console.log("Net Worth ::" + (this.asset - this.liability - this.tax))
    }
}

var obj1 = new father1()
//obj1.tax=200
father1.prototype.tax = 1000
father1.prototype.grossWorth = function () {
    console.log("Gross Worth ::" + (this.asset - this.liability))
}
obj1.netWorth()
obj1.grossWorth()