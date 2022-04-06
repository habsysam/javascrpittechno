// const person={
//     firstName :'Ajit',
//     lastName:'k'
// }
// spread operator (ES6)
// 1 .shallow copy or deep copy
// 2.copy properties of one object /array to another object/ARRAY 
// 3. COMBINE/merge two or more objects or two or more 
//4. add new properties and take copy
//5. change any property and a take copy
/*const personCopy={...person}
const address={
    pincode:560068,
    state :'Karnatake',
    city:'bangalore'
}
const personDetails ={...person,...address}
console.log(personDetails);
const personC={...person,age:14}
console.log(personC);
const personD={...person,lastName:'I'}
console.log(personD);

1.rest 
*/
function add(n1,n2){
  return n1+n2
}
function addthree(n1,n2,n3){
    return n1+n2+n3
}
function addFour(n1,n2,n3,n4){
    return n1+n2+n3+n4
}
add(10,20)
addthree(10,20,40)

//1 rest operator should always be the last parameter
//2.or rest operator should be one and only parameter
//3.(a,b,....rest)//valid
//4. (...rest)
//5.(...rest,a,b)// invalid (a and b variable)
// will never get any values)
//6.(a,...rest ,b)//invalid
function addAll(...nums){
    console.log(nums);
    let total =0
    for (let i=0;i<nums.length;i++){
        total +=nums[i]
    }
    console.log('total',total);
}
addAll(10,20)
addAll(10,20,30)
addAll(10,20,30,40)
addAll(10,20,30,40,50)
//Invalid
/**  function addAllValues(...rest,a){
  console.log('a');
  }
*/

function addAllValues(a,b, ...rest){
    console.log(a,b,rest);
}
addAllValues(10,20,30)







const person={
    firstName:'Ajit',
    lastName:'k',
    age:10,
    hobbies:['cricket','singing'],
    address:{
        state:"kerala",
        pincode:5600068
    }
}
//object Destructuring
//const firstName =person.firstName
//const lastName = person.lastName
//const  age=person.age
const {firstName,lastName}=person
console.log('Firt name',firstName);
console.log('lastName',lastName);
//mult  level destructure
const {hobbies,address:{state, city}}=person
console.log('hobbies',hobbies);
console.log('state',state);
console.log('city',city);

//alias names
 const  {firstName:fname,lastName:lname}=person
 console.log(fname);
 console.log(lname);
 function calculateTotaPrice({gst,price}){
     console.log('gst',gst);
     console.log('price',price);
     return price + (price*(gst/100))
 }
const product={
    price:100,
    gst:3,
    productName:'bag',
    mfgYear:2021,
    moreDetails:{
        brand:'wildcraft',
        color:'blue'
    }
}
calculateTotaPrice(product)






