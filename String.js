//String method
const str="hello"
str.toUpperCase()
console.log(str);
// because  primtive types are immutable
const result=str.toUpperCase()
console.log(str);
console.log(result);
console.log(str.toUpperCase());

///tolowercase
const greet="Good Afternoon"
const str3=greet.toLowerCase()
console.log(str3);//good afternoon

//charAt
console.log(greet.charAt(13));
console.log("--------------------------indexof-------------------------------");
console.log(greet.indexOf('o',4));
console.log("---------------------concat______________________________------");
const res=str.concat(',',greet,'all')
console.log(res); 
console.log("_______________________________includes_______________________________");
const hasNoon=greet.includes('noon')
console.log('hasNoon',hasNoon);
console.log("______________________replace____________________________________________");
const value =greet.replace('aftenoon','night')
console.log(value);
console.log("_________________________________substr________________________________________");
const data= 'hello all,Welcom to javascript session'//11
const extractedStr=data.substr(11,10)
console.log(extractedStr);
//end is not inclusive
console.log("______________________________subString__________________");
const substrVal=data.substring(1,4)
console.log(substrVal)

console.log("----------------------trim----------------------------");
const email="     chandan.k@testyantra.com    "
const emailAfterTrim=email.trim()
console.log('emailtrim',emailAfterTrim);
const gmail="     chandan.k@testyantra.com    "
console.log('start-',gmail.trimStart());
console.log('end-',gmail.trimEnd());
var sum=(x,y)=>{
    return x+y
}
console.log(sum(20,30));