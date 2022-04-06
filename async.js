// const url="https://jsonplaceholder.typicode.com/posts"
// async function fetchPosts(){
//     try{
//         const response =await fetch(url)
//         const data =await response.json()
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }finally{
//         //lines of code to be executed if there is error 
//         //or no error
//         console.log('hello');
//         console.log('finally block');
//     }
// }fetchPosts()

let data1=[3,4,5,6,7,8,9,0,5,7,87];
let even=data1.filter((elem)=>elem%2==0)
let odd=data1.filter((ele)=>ele%2==1)
console.log(even);
console.log(odd);


const first=['habsy','sam','madhan'];
const data2=first.toString();
console.log(data2);