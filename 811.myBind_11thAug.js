Function.prototype.myBind = function (obj, ...outer) {
    var _fn = this
    return function (...inner) {
        _fn.apply(obj, [...outer, ...inner])
    }
}

function f1(a,b){
    console.log(this.x+a+b)
}

var obj={
    x:100
}

f1.myBind(obj,10,20)()