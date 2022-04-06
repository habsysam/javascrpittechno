
let a=20;
console.log(a);  ///20
/*
a=30
console.log(a);//30

let b=100
console.log(b); ///100

let b
console.log(a); //100
console.log(a); //100

b=200
console.log(b);//200
console.log(a);//100
console.log('------------------------------------------------------');*/

// constnpperson ={
//     firstName :'Ajay',
//     lastName :'k'
// }
// console.log(person.firstName);  //ajay
// const personCopy =person
// console.log(personCopy.firstName); //ajay

// personCopy.firstName='Sujeet'
// console.log(personCopy.firstName); //sujeet
// console.log(person.firstName); //sujeet

// const personCopyNew = personCopy
// personCopyNew.firstName='Guru'
// console.log(person.firstName);  //guru
// console.log(personCopy.firstName);//Guru
// console.log(personCopyNew.firstName);//guru

// const val=20
// const val1=20
// //compares the value
// console.log(val === val1);
// //compares the address of the object
// console.log(person === personCopy);//true



// const car={
//  carBrand :'jaguar',
//   moreDetails:{
//       price :10000000
//   }
// }

// const car1={
//     carBrand :'jaguar'
// }
// car1.moreDetails=car.moreDetails


// ////never ever compare the objects using strict equal to
// //because it compare the address ,does not compare the
// //data.
// console.log(car===car1);//false
// console.log('---------------------------------');
// console.log(car.moreDetails===car1.moreDetails);//true

// //taking copy of mobile(address will be copied)

const  mobile={
    price:9000,
    brand:'mi'
}


const mobileCopy =mobile

//spread operator (..)ES6
//shallow copy (first level of properties will be capied )

const mobileCopyNew ={...mobile}
mobileCopyNew.price =40000
console.log(mobileCopyNew.price); ///40000
console.log(mobile.price);    ///9000
console.log(mobileCopy.price); ///9000

console.log("---------------------------------------------");
mobile.brand='Samsung'
console.log(mobile.brand);  ///samsung
console.log(mobileCopy.brand);  ///SAMSUNG
console.log(mobileCopyNew.brand);//MI

console.log('>>>>>>>..>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.....>>>>>>>>>>');

const movie={
    movieName : 'Spiderman no way home',
    director : 'John watts',
    actor :'Tom Holland',
    moreDetails:{
        budget : '200 million USD',
        heroine:"Zendya",
        villain :'Goblin'

    }
}

///deep copy
//taking multiple level copy using spread operator
const movieCopy={
    ...movie,
    moreDetails:{...movie.moreDetails}
}
movie.director='Upendra'
console.log(movie.director);      //upendra
console.log(movieCopy.director); //john wants
console.log('-----------------------------------');
movie.moreDetails.heroine='Ramya'
console.log(movie.moreDetails.heroine);//ramya
console.log(movieCopy.moreDetails.heroine);//zendya
console.log('-----------------------------------------------------');
const bike={
    price : 70000,
    brand:'bajaj',
    bikeName: 'pulsar',
    enginDetails:{
        cc: '200cc',
        stroke :'4 strock'
    }
}
//deep copy of an object/array
const bikeDeepCopy =JSON.parse(JSON.stringify(bike))
bike.enginDetails.cc='250cc'
console.log(bike.enginDetails.cc);  //250cc
console.log(bikeDeepCopy.enginDetails.cc); //200cc
console.log('------------------------------------------------------');
const myObj={
    firstName:'Chandhan'
}

const myObj1={
    lastName:'k'
}


const myObj2={
    ...myObj,
    ...myObj
}
console.log(myObj2);

console.log("--------------------------splice---------------------------");

const numbers=[10,20,30,40,50]
const deletedElements =numbers.splice(2,2,60,70,80)
console.log('deletedElements', deletedElements);//30,40
console.log('numbers' .numbers); //10,20,60,70,80,50


///if we want to only add element  without deleting
 //pass delete count as 0(second parameter)
  
const deletedElements1 =numbers.splice(1,0,100,110)
console.log('deletedElements1', deletedElements1);
console.log('numbers' .numbers); 

console.log('------------------------------------slice---------------------------------------');

const  nums=[10,20,30,40,50];
const deleteNums=nums.slice(1,3)
console.log('deleteNums',deleteNums);  //20 ,30
console.log('nums',nums);///10,20,30,40,50

console.log('----------------------shallowcopy of array--------------------------------------');
const numsCopy =nums.slice(0)
console.log('numsCopy',numsCopy);  //10,20,30,40,50
console.log('nums',nums);  //10,20,30,40,50
nums[0]=1000
console.log(nums[0]);      //1000
console.log(numsCopy[0]);   //10

////copy  (address is copied) 
//changing n will also change n1
const n =[10,20]
const n1=n
n[0]=90

console.log(n[0]); ///90
console.log(n1[0]);  ///90
console.log("-------------------------------------- -----------------------------------------");
const movies=['Spiderman','batman','antman','Iron man']
///shallow copy using spread operator for array
const moviesCopy=[...movies]
movies[0]='Shaktiman'
console.log(movies[0]); //spiderman
console.log(movies[0]); //spiderman