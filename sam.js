let names='my name is habsy'
let myname=names.split(" ") 
let myname1=myname.sort((a,b)=>{
       return a.length-b.length
})
let myname2=myname1.join(' ')

console.log(myname2)
 

