// Calling a function outside of the function call in which it was defined

function outer() {
    let counter = 0;
    function incrementCounter () { counter++; }
    return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

// Calling myNewFunction() looks for the function incrementCounter which is now gone due to it being popped off the call stack.Calling
// we still have the counter++ functionality, but when counter++ looks for the variable count at the global level it cannot find it because it was deleted when incrementCounter() was popped off the call stack and its execution callstack deleted from memory.


// HOWEVER!!!!!

// When we  took incrementCounter and returned it as the output of running outer() we were able to get not only the incrementCounter function of counter++ but it also brought with it the surrounding data so that we are able to access the counter variable as well, so our call to myNewFunction(); will actually be able to call the formerly known function incrementCounter() as counter++ and access the counter variable and increment it.

// in JavaScript it immediately gets a hidden property of [[scope]] which allows the data to be passed along to the global memory
// We cannot access the [[scope]] without running a function to access it