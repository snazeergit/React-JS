var Arithmatic = /** @class */ (function () {
    function Arithmatic() {
        this.n1 = 10;
        this.n2 = 20;
    }
    Arithmatic.prototype.sum = function () {
        console.log(this.n1 + this.n2);
    };
    Arithmatic.prototype.sub = function () {
        console.log(this.n2 - this.n1);
    };
    return Arithmatic;
}());
var arith = new Arithmatic();
arith.sum();
arith.sub();
