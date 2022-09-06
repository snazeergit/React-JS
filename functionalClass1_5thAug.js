//JavaScript's Functinal Class name first letter must be in UPPER CASE
function Car() {
    this.brand = 'Maruti'
    this.model = 'swift'
    this.price = 500000
    this.insurance = 30000
    this.roadTax = 120000

    //JavaScript function names are in lower case
    this.getOnRoadPrice = function () {
        return "Car On-Road price : " + (this.price + this.insurance + this.roadTax)
    }
    //JavaScript function names are in lower case
    this.getCarDetails = function () {
        return "Brand : " + this.brand + "   Model : " + this.model
    }
}

//Execute after running the functional class
var carObj = new Car()
carObj.brand
//or
carObj['brand']

carObj.model
//or
carObj["model"]

carObj.price
//or
carObj['price']

carObj.insurance
//or
carObj['insurance']

carObj.roadTax
//or
carObj['roadTax']

carObj.getOnRoadPrice()
carObj.getCarDetails()