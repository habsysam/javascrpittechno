class Car{
    constructor(cname,year){
    this.cname=cname
    this.year=year
    }
     
    getCarDetails(){
        return `${this.cname} is manufactured yar is ${this.year}`
    }
}
const car1=new Car('BMW',2021)
console.log(car1.getCarDetails());
const car2=new Car('jagur',2020)
console.log(car2.getCarDetails());
 ///jsonwebtoken