console.log(`App file`);
var person={
    firstName:'allu arjun',
    lastName:'Arvind',
    age :39,
    gender:'Male',
    isMarried:true,
    getFullName:function(){
        return this.firstName+' '+this.lastName
    }
}
console.log('Person',person);

var  fName = person.firstName
console.log('First name-', fName);

var lName =person.lastName
console.log('Last name-',lName);

var pAge =person.age
console.log('Age-',pAge);

var pGender = person.gender
console.log('Gender-', pGender);

var pIsMrried = person.isMarried
console.log('Is Married-', pIsMrried);

var fullName = person.getFullName()
console.log('Full Name- ', fullName);

console.log("-------------------------");

var marker={
    color:'black',
    height:'10cm',
    'pri ce':25
}
//another way of accessing the properties of objects
console.log(marker['pri ce']);

console.log(person['getFullName']());

console.log("----------------------");