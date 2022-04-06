
console.log("______________________________Map___________________________");
/*const numsArr=[100,200,300,400,500]
 const numsCopy=[]
 for(let i=0;i<numsArr.length;i++){
     numsArr.push(numsArr[i]+10)
 }
 console.log(numsArrCopy);
 }*/

//Array.map(callbackfunction)

const arr=[100,200,300,400,500,600]  
const newArr=arr.map((value,index,arr)=>{
    return value+10
})
console.log(arr);///100,200,300,400,500
console.log(newArr);//110,210,310,410,510

console.log("__________________________-filter____________________");

const ageArr=[45,56,9,89,10,5]

const filteredAges1 =ageArr.filter((value)=>{
    if(value>=18){
        return true
    } else{
        return false
    }
})
console.log(ageArr);
console.log(filteredAges1);

const filteredAges=ageArr.filter((value)=>{
    return value>=18
})
console.log(ageArr);
console.log(filteredAges);
//or
const filteredAges2=ageArr.filter(value=>value>=18)
console.log(filteredAges2);

const books=[
    {
        title:"harry Potter",
        price:90,
        author:"j k Rolling"
    },
    {
        title:"Indian Constitution",
        price:720,
        author:"Lakshmi Kanth"
    },{
        title:" wings of fire",
        price:130,
        author:'apj abdul kalam'
    }
]
const bookWithGst=books.map(book=>{
book.price=book.price*0.18 + book.price
return book
})
console.log(bookWithGst);
console.log(books);
console.log("----------------deep copy using spread opeartor.................");
const bookWithGstDeepCopy =books.map(book=>{
    const b= {...book}
    b.price=b.price*0.18 + b.price
    return b
})
console.log(bookWithGstDeepCopy);
console.log(books);
console.log("------------------------------------------------------------------------------");

 const products =[
     {
         productName:'lipstick',
         price:999,
         brand:'maybeline'
     },{
         productName:"eyeliner",
         price:500,
         brand:'lakme'
     },
     {
         productName:'trimmer',
         price:1000,
         brand:'philips'
     },{
        productName:'beardo oil',
        price:260,
        brand:'beardo'
     }
 ]

 const productsWithGst= products.map(product=>{
     const productCopy ={...product}
     productCopy.price=productCopy.price*0.03 +productCopy.price
return productCopy
    })
    console.log(products);
    console.log(productsWithGst);
    

 const filterdProducts=products.filter((product)=>{
 
 if( product.price>500){
     return true
 } else{
     return false
 }
 })

    console.log(filterdProducts);

    
//reference
//const booksCopy = books
//console.log(books===booksCopy); true

//const booksCopy=[...books]
//console.log(books===boocksCopy); //false
//console.log(books[0]===booksCopy[0]); //true

// books[0].price=100
// console.log(books[0].price);  //100
// console.log(booksCopy[0].price);  //100
// const booksCopy=books.map(book=>{
//     return{...book}
// })
// console.log(booksCopy);
// console.log(books[0]==booksCopy[0]);   //false

//  books[0].price=100
//  console.log(books[0].price); //100
//  console.log(booksCopy[0].price); //90
 console.log('__________________________join________________________________-');
 const myArr=[100,200,300,400,500]
 const str=myArr.join('-')
 console.log('str',str);

 const fruits=['apple','pineapple','custard Apple','Green']
 //apple ,pineaplle,custard apple,green Apple
 const fruitsStr=fruits.join(",")
 console.log('fruitsStr', fruitsStr);