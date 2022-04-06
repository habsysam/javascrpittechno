var name1 = ["habsy", "uma", "madan", "ancy", "sam"];
debugger;
console.log(name1);
console.log(name1.length);
console.log(name1[0]);
console.log(name1[1]);
console.log(name1[2]);
console.log(name1[3]);
console.log(name1[4]);
console.log("-----------------------------------------");

for (var i = 0; i < 5; i++) {
  console.log("Hello");
}
console.log("-------------------------------------");
for (var i = 0; i < name1.length; i++) {
  //debugger
  console.log(name1[i]);
}
console.log("------------------------------------");

var myArray = [
  "ajay",
  34,
  true,
  undefined,
  null,
  { color: "black" },
  ["black", "blue", "red"],
];

console.log(myArray[2]);
console.log(myArray[4]);
console.log(typeof myArray[3]);
console.log(myArray.length);
console.log(myArray[5].length);
console.log(myArray[5].color);
console.log(myArray[5]["color"]);
console.log(myArray[5]["co lor"]);
console.log(myArray[6].length);
console.log(myArray[6][0]);
console.log(myArray[6][2 - 1]);

console.log("------------------------------------------------");

var books = [
  {
    author: "Chetane Bhagat",
    title: "two states",
    price: 80,
    noOfPages: 265,
    publisher: "Harper Torch",
  },
  {
    author: "Paulo Cohello",
    title: "Alchemict",
    price: 180,
    noOfPages: 230,
    publisher: "Sahitya Bhandare",
  },
];

for (var i = 0; i < books.length; i++) {
  console.log(books[i]);
  //console.log(`book at index ${i} - ${books[i]}`);
}
//syntax

// var var_name=new Object()
// person.firstName='habsy'
// person.lastName='Sam'
// person.age=23
// person.gender='Male'

//syntax
// var var_name=new Array(length)
// var var_name=new Array(value1,value2,value3)

//ex-creating array using new keyword
var arr = new Array(10);
console.log(arr.length); //10
console.log(arr[0]);

console.log("-------------------------------");
var numbers = new Array(20, 30);
console.log(numbers.length);
console.log(numbers[0]);
console.log(numbers[1]);
numbers[2] = 67;
console.log(numbers[2]);

console.log('------------------------------------------------');

var colors= new Array('blue')
console.log(colors.length);  ///1
console.log(colors[0]);   //blue


///Formatting or Aligt
var car=new Object()
car.price=400000
car.model=2021
car.brand='Toyota'
car.cname='Fortuner'
car.color='black'
console.log(car);
console.log(car.price);
console.log(car.model);
console.log(car.brand);
console.log(car.cname);
console.log(car.color);


 

//console.log('`Data Object` );
//Returns system data
var systemDate =new Date() 
console.log(systemDate.getHours());
console.log(systemDate.getDate());
console.log(systemDate.getMilliseconds());
console.log(systemDate.getFullYear());
console.log(systemDate.getDay());
console.log(systemDate.getMonth());


///From january 1 1970
var dateMilliseconds = new Date(86400000);
console.log(dateMilliseconds);

console.log('--------------STRING CONSTRUCTOR-------------------');
var dataStringConst =new Date('Dec 12 2020')
console.log(dataStringConst);
console.log(dataStringConst.getDay());
console.log(dataStringConst.getFullYear());

///dd/mm//yyyy
var dateVal = dataStringConst.getDate()
var monthval =dataStringConst.getMonth()
var yearVal =dataStringConst.getFullYear()
var fulDate =`(${dateVal}/${monthval+1}/${yearVal})`
console.log(fulDate);

console.log('---------------------------------------');
//new date(year,month,day,hours,minutes,seconds,milliseconds) Constructor
var dateObj = new Date(2021, 11)
console.log(dateObj);
var dateObj1= new Date(2021,10,21)
console.log(dateObj1)
var dateObj2=new Date(2021,0,21,12,56,56,878);
console.log(dateObj2);
 
console.log(dateObj2.getMilliseconds());

console.log('--------------------------------');

// var systemDate= new Date()
// var curr_week=systemDate.getDay();
// var curr_month=systemDate.getMonth()+1;
// var curr_date=systemDate.getDate();
// var curr_year=systemDate.getFullYear();
// console.log(curr_week+","+curr_month+" "+curr_date+" "+curr_year);


var  systemDate =new Date();
var dayvalue= systemDate.getDay();
var monthval=systemDate.getMonth();
var yearVal=systemDate.getFullYear();
var dateVal=systemDate.getDate();
var months =['janauary','february','march','April',
'may','june','july','august','september',
'october','november','december']
var monthDate=months[monthval];
var weekdays=[ 
  'sunday','monday','tuseday','wednesday',
  'thursday','friday','saturday'
]
var dayDate = weekdays[dayvalue]
var formattedDate =`${dayDate},${monthDate}${dateVal},${yearVal}`
console.log(formattedDate);

console.log('--------------------------------------');

var dataObjetVal =new Date()
console.log(dataObjetVal);
//dataObjVal.tollocalDateSTring(locales,option)
var formattedDate1=dataObjetVal.toLocaleDateString('en-Us',
{
  weekday :'long',
  month :'short',
   year:'numeric',
   day:'numeric'
})
console.log(formattedDate1);


