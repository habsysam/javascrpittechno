const jsObject={
    firstName:"ajay",
    lastName:"k",
    age:17,
    isAduit:false,
    hobbies:["cricket","singing"],
    address:{
        pincode :560068,
        state:"karnatake",
        city:"bangalore",
}
}
console.log('javascript to JSON');
const stringifiedJSON=JSON.stringify(jsObject)
console.log(stringifiedJSON);
console.log(typeof stringifiedJSON);
console.log('JSON to javascript');
const javascriptObject=JSON.parse(stringifiedJSON)
console.log(javascriptObject);