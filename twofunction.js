//Global level this is equal to window object
//this will always point to the current object

console.log(this);
console.log(window);
console.log(this===window);

console.log('=========================================');

const person = {
    firstName: "Ajith",
    lastName: "k",
    getFullName: function () {
        //this is person object
        console.log('this inside getfullname-', this);
        return this.firstName + '' + this.lastName
    }
}
person.getFullName()

function greet() {
    //this is equal to window object
    //all the global properties and function
    //belong  to window object
    //(greet will be invoked using window reference)
    console.log('this inside greet-', this);
    console.log('greet func');
}
window.greet()
greet()
console.log('===========================================');

const myObj = {
    getData: function () {
        function test() {
            //this is equal to window object
            //because test() is not invoked by
            //any object refrence
            console.log('this inside test func', this);
            console.log('test func');
        }
        test()
        return 100
    }
}
myObj.getData()
console.log('------------------------------------------------------');
const myObj1={
    firstNames:'vijay',
    lastNames:'s',
    getResult:()=>{
        //this inside getresult-window
        //refers to its parent context
        console.log('getResult',this);
    },
    getName:function(){
        const test =()=>{
            //Arrow function will not have its own
            //this.this will refer to its parent
            //execution context
            console.log('this inside test ',this);
            console.log('test func');
        }
        test()
        return `${this.firstNames} ${this.lastName}`
    }
}
myObj1.getName()
myObj1.getResult()
/*
1.this in global-window
2.this in named function which is declared in global level -window
3.this is named function which is invoked using object refernce -current object
4.this is arrow function which is invoked using object refernce -parent context object
5.a named function declared inside a function which is invoked using object reference -window object
6.An Arrow function declared inside a function which is invoked using refernce -parent context object
*/