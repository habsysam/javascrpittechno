console.log('-------------------Closures-----------------------------');
//closures
function outer() {
    let count = 0
    function inner() {
        console.log('inner func');
        count = count+1
        console.log('count',count);
    }
    return inner
}
const innerFunc = outer()
innerFunc()
innerFunc()

//uses of closure
//1.to preserve the values
//2.for data privacy

function increaseCounter() {
    let counter =0
    function counterUpdate() {
        counter = counter+1
        console.log('counter',counter);
        return counter
    }
    return counterUpdate
}
const counterIncrese = increaseCounter()
counterIncrese()
counterIncrese()
counterIncrese()
counterIncrese()

//there is a possibality counter will be 0 if increaseCounter is called again
const c = increaseCounter()
c()


function increaseCounter() {
    let counter = 0
    function counterUpdate() {
        counter = counter+1
        console.log(counter);
        return counter
    }
    return counterUpdate
}

//self invoked function will be executed only once hence counter cannot be reinitializes to 0 again
//only counterUpdate function will be able to change the counter variable value
const counterInc = (function () {
    let counter = 0
    function counterUpdate() {
        counter = counter+1
        console.log(counter);
        return counter
    }
    return counterUpdate
})()