console.log('program started');
const myPromise=new Promise((resolve,reject)=>{
    if(10>1){
        const fetchedData=[100,200,300,400,500]
     resolve(fetchedData)
    }
    else{
        reject('Date fetch failed')
    }
})
// //solution to callback hell
// myPromise.then((data)=>{
//     console.log('first than',data);
//     const updateData= data.map(val=>{
//         return val + 100
//     })
//     return updateData
// }).then((result)=>{
//     console.log('second then',result);
//     const filteredData= result.filter(val=>val>300)
//     return filteredData

// }).then((dataWithFilter)=>{
//     console.log('third then',dataWithFilter);
// }).catch(err=>{
//     console.log('program ended');
// })