//JavaScript's Functinal Class name first letter must be in UPPER CASE
//JavaScript function names are in lower case
function Car(){
    this.brand='Maruti'
    this.model='swift'
    this.price=500000
    this.insurance=30000
    this.roadTax=120000
    
    this.getOnRoadPrice=function(){
        return "Car On-Road price : "+(this.price+this.insurance+this.roadTax)
    }

    this.getCarDetails=function(){
        return "Brand : "+this.brand+"   Model : "+this.model
    }
}

//Execute after running the functional class
var carObj=new Car()
carObj.getOnRoadPrice()
carObj.getCarDetails()