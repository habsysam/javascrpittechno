// console.log('started');
// new Promise(function (resolve,reject){
//     if(10>4){
//         resolve('success')
//     } else{
//         reject('Error')
//     }

// }).then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);

// })
// console.log('ended');

 const arr=(str)=>{
     const arr1=str.split("").reverse().join("")
     console.log(str);
 }
 arr("hello")


function parl(str){
    let a=str.split("").reverse().join("");
    if(a==str){
        console.log("it a palindrome");
    }else{
        console.log("it not a palindrome");
    }
}
parl("hasy")
parl("mom")


