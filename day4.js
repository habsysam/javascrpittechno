/*console.log('start')

setTimeout(function(){
    console.log('ABC');
},3000)

setTimeout(function(){
    console.log('DEF');
},2000)
console.log('end');*/


console.log('start')
function add(a,b){
    setTimeout(()=>{
        console.log('111');
    },2000);
    console.log(a+b);
}
add(10,30)

setTimeout(function(){
    console.log('abc');
},3000)
console.log('end');


////////////////////////////////////callback function//////////////////////////////////////

function first(callback){
    //console.log(callback);
    setTimeout(()=>{
        console.log('first executed');
        callback()
    },0)
}
function second(){
    console.log('second executed');
}
first(second)

console.log('a -',a)
var a = 10
var b = 30
console.log('b outside function - ',b);

function test(){
    //variable hosting inside function 
    //local variable will be given first preference
    //if the variable is not declared locally js engine
    //will search the variable in global scope
   // if the variable is declared locally js engine 
   //will not search the variable in global scope

   console.log('b inside function -',b);
   var b=20 /////////////////local variable

   console.log('a inside function -', a);
}
test()
 
console.log('-------------------------------------------------');
 
///////////////////////////////////////function hosting///////////////////////////////////////
 
 add(10,30)
  function add(a,b){
      console.log(a+b);
  }
console.log('______------------------___------------');

//greet()  //greet not a function
//calling theAnomymous function before
//assigning the function will result in error
//i.e.., greet is not a function because the greet 
///variable will be hoisted to the top as  a variable
  var greet = function(){
      console.log('welcome');
  }
console.log('-------------------------_____________-------_----------_-');
  ///product()
  ///calling the arrow function before
  //assigning the function to variable will result in
  ///error i.e., greet is not a function because the  product
  //variable will be hoisted to the top as product
  var product=(a,b)=>{ 
  console.log(a*b);
}
product(10,2)

////////////push//////////////////////////

//add the  element afther the last index 

var hobbies=['Sleeping','coding','trekking','bird water']
hobbies.push('Reading')
console.log('Hobbies after push',hobbies);


///function /method

///1. parameters
//2 what is returns
//3. functionality of the function


/// push

//1 any primitive or reference type 
//2.length of thw array
//3.aads the element after the last index
 

var hobbies=['Sleeping','coding','trekking','bird water']
var hobbiesLength  = hobbies.push('Reading')
console.log('Hobbies after push',hobbies);
console.log(' hobbieslength',hobbiesLength);

console.log('hobbies', hobbies.push('cooking'));
console.log(hobbies);
//6 length index

console.log('-----------------------------------');

console.log('/////////////////////////////////pop////////////////////////////////////');

var deletedElement =hobbies.pop()
console.log('hobbies after pop', hobbies);
console.log('deletedElement',deletedElement);

///*** * WHAT ARE PROBLE  WITH VAR KEYWORD

// 1.HOISTING BEFORE THE VARIABLE ARE DECLARED VARIABLES CAN BE ACCESSED
/// 2. REDECLARATION IS SUPPORETED
 //{      Var a=[10,20,30,40]
//        var a= {}
 //}
 //3. block scope is not support
 /*if (10==0)
    var j=20;
 }
 console.log(j)//20
 */
//4. Reinitialization is supported
//5.  without var key also variable can be declared
//** how to overcome above problem
//Es6
//use let  and const keyword

///// let keyword
//1. hosting is supported before the variablev are declared variables cannot be accessed 
//(TDZ) (TEMPORAL DEAD ZONE)


console.log('---------------------------foreach(call backfunc)----------------');
hobbies.forEach(function(value,index,arr){
    console.log(`${index} -${value}`);
})

console.log('----------unshift---------------------------');
const  lenOfHobbies=hobbies.unshift('Gaming')
console.log('hobbies after unshift', hobbies);
console.log('hobbies length after unshift ', lenOfHobbies);

console.log('-------------------shift---------------------------');
const deletedHobby = hobbies.shift()
console.log('hobbies affter shift ',hobbies);
console.log('deleted hobby after shift',deletedHobby);

console.log('-----------------------------------------');

console.log('type of hobbies', typeof(hobbies));

////isArray returns true is its array else returns false 
const isHobbiesArray = Array.isArray(hobbies)
console.log('isHobbiesArray', isHobbiesArray);
console.log('-----------------------------------hobbies---------------------');
console.log(hobbies);

//--------------------------------includes----------------------------

const isCodingPresent = hobbies.includes('coding')
console.log('isCodingPresent',isCodingPresent);

const indexOfReading = hobbies.indexOf('reading')
console.log('Index of Reading ', indexOfReading);

console.log('--------------------slice--------------------------');

 
