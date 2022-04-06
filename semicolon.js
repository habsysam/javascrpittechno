//console .log('start)
(10===10?console.log('Equal'):console.log('NotEqual'))

// semicolon is mandatory before () if you are 
// writing ( )  next line after executing any function
//or  after ()
console.log('start');
(10===10?console.log('Equal'):console.log('NotEqual'))
console.log('end');
console.log('--------------------------------------------');
function test(){
    function inner(){
        console.log('Inner function');
    }
    return inner
}
//constn val =test()
//console.log(val);
//val()
//console.log(test());
//function currying
test()();
(function(){
    console.log('hello');
})
