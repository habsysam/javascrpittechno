///to find minimum
var minVal= Math.min(12,34,56,78,9)
console.log("min value - ",minVal);
///to find max
var maxVal= Math.max(78,98,780,1000,67678)
console.log("max value - ",maxVal);

///to find power
var powerVal=Math.pow(2,3)
console.log("power of 2,3 ",powerVal);

var powerVal=Math.pow(3,9)
console.log("power of 3,9 ",powerVal);

var randomVal=Math.random()
console.log('randomVal ',randomVal);

var names=["habsy","madhu","sam","uma"];
console.log(Math.floor(Math.random()*names.length))
var random=Math.ceil(Math.random()*100);
console.log(random);


var names=["habsy","madhu","sam","uma"];
var randomIndex =Math.floor(Math.random()*names.length)
console.log(names[randomIndex]);




////Named function
function add(num1 ,num2){
    var sum= num1+num2
    console.log('Sum -',sum);

} 
add(10,20)
add(30,40)

////
function findiseligibleforVoting(age){
if(age>=18){
    return true
}else{
    return false
}
}
 function printeligibleforVoting(result){
if(result=== true){
    console.log('eligible for voting ');
}
else{
    console.log('not eligible for voting')
}
 }
var result=findiseligibleforVoting(12)
 printeligibleforVoting(result)

 var result1=findiseligibleforVoting(34)
 printeligibleforVoting(result1)

 ///Anonymous function

 var findProduct = function(a,b){
     return a*b
 }
 console.log(findProduct());
 
 var productVal= findProduct(12,3)
 console.log("product -",productVal);

 var person={
     testFunc : function(){
         console.log('test fun executed');
     }
 }

 person.testFunc();
 //self invoked function(IIFE)
 (function(a,b){
     var diff =b-a
     console.log('Difference -',diff);
 })
 (10,20)

 function greet(){
     console.log('greet ');
 }

 //arrow function(ES6 Feature)

 var greet =()=>{
     console.log('Greet function');
     console.log('Welcome');
 }
 greet()

 var squareOfNumber=num=>num*num
 var result =squareOfNumber(2)
 console.log('Result- ',result);
 console.log(squareOfNumber(3));

 var calculateTotalPrice = (price,gstper)=>{
     var totalPrice =(price*gstper/100)+price
     return totalPrice
 
 }

 var priceVal=calculateTotalPrice(300,18)
 console.log(priceVal);


////////loop////////

 var number=[10,20,30,40]
//for of loop
 for(var number of number){
     debugger
     console.log(number);
 }

 var fruits=["apple","pineapple","green apple",'mango']
 for(var fruit of fruits){
     console.log(fruit);
 }


var person ={
    firstName :'madan',
    lastName : "ct",
     age: 26,
     gender:"male"
    }

    for(var key in person){
        console.log(`${key} -${person[key]} `);
    }


//console.log('======================for in loop with array===== ');
// for(var index in num){
//     console.log(`Value at index ${index}-${num[index]}`);
// }


for (var i in fruits){
    console.log(fruits[i]);
}

console.log('-------------------------');
function test(){
    console.log('test func started')
    for(var i=0;i<4;i++){
        if(i<3){
            console.log(i);
        }else{
            console.log('break');
            
        }
        console.log('test func ended');
    }
} 
    test()

    console.log('--------------------')

    var arr =[10,30,20,40,50,60,,,,,,,100]
    console.log(arr);
    for(var i=0;i<arr.length;i++){
        console.log(`${i} -${arr[i]}`);
    }

    console.log('-------------------------');
    for(var index  in arr){
        console.log(`${index} - ${arr[index]}`);
    }
console.log('---------------------------------------');
     
   //0 1 2
   
   var  arrData =[10,20,30]
   arrData[3]=80
   arrData['price']=700
   console.log(arrData);

   for(var i=0;i<arrData.length;i++){
       console.log(`${i} -${arrData[i]}`);
   }


   console.log('-----------------------------------------');
///considers the elements which dose not have  index
   for(var i in arrData){
       console.log(`${i} -${arrData[i]}`);
   }
  ////for loop if price>5 print the object
  //for of loop if type==='ball point pen'&& price>5
  ///for in loop if brand length>5 && price>10
   var pens =[{

    brand:'Parker',
    color:'black',
    price:125,
    type:'ball point pen'

   },{
    brand:'Reynolds',
    color:'blue',
    price:10,
    type:'ball point pen'


   },{
    brand:'Elkos',
    color:'red',
    price:5,
    type:'gel pen'

   }
]
    
for(var i=0; i<pens.length;i++){
    if(pens[i].price>5){
    console.log(pens[i].price);
}
}
   
console.log('------------------------------------------');
for (var pen of pens){
    if(pen.price > 5 && pen.type === 'ball point pen'){
 console.log(pen);
    }
}

for(var index in pens){
    if(pens[index].brand.length>5 && pens[index].price>10){
    console.log(pens[index]);
}
}