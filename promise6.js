console.log('started ');
const myPromise1 =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([100,200,300,400])
    },3000)
})
const myPromise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve([900,1000,1200])
    },5000)

    
})

//if all promises are resolved the function will be 
//executed and it will combine the resolved data into array 
//if any one Promise is reject also catch function will be executed

Promise.race([myPromise1,myPromise2]).then((data)=>{
    console.log('Data',data);

}).catch(err=>{
    console.log('Err',err);
})
console.log('ended');