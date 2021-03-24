//Closure lexical scoping and execution context

// Closure is the most esoteric of JavaScript concepts

// Enables powerful pro-level functions like 'once' and 'memoize'

// Many JavaScript design patterns including the module pattern use Closure

// Build iterators, handle partial application and maintain state in an asychronous world

//Example code

// function multiplyBy2(inputNumber) {
//     const result = inputNumber*2;
//     return result;
// }

// const output= multiplyBy2(7);
// const newOutput = multiplyBy2(10);


// Functions with Memories

// When our functions get called, we create a live storage of data (local memory/ variable environment/state) for that functions execution context.
// When the function finishes executing, its local memory is deleted(except the returned value)
// But what if our functions could hold on to live data between executions?
// This would let our functions definitions have an associated cache/persistent memory.
// But it all starts with us returning a function from another function.


// Returning Functions

//Example Code

function createFunction() {
    function multiplyBy2 (num) {
        return num *2;
    }
    return multiplyBy2;
}


const generatedFunc = createFunction();
const result = generatedFunc(3)

console.log(result);


//define a function stored in the global memory called createFunction()

//Define const generatedFunc : 

// execution context: generatedFunc calls = createFunction()

//Local memory:
//Declare our function multiplyBy2 with a value of 'a function'
//return multiplyBy2 as a function definition to generatedFunc

//Define a constant result with a value of [result of calling generatedFunc(3)]
//generatedFunc was the result of the running of createFunction.

// result = generatedFunc(3)

// local memory

//num is the parameter name to the value 3 in the multiplyBy2 code that is now generatedFunc()
