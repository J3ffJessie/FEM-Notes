//calling a function in the same function call as it was defined

function outer () {
    let counter = 0;
    function incrementCounter () {
        counter++;
    }
    incrementCounter();
}

outer();
//where you define your functions determines what data it has access to when you call it.
//Break it down
//global memory

// outer : function


// new execution context 
// outer()

// local memory
// counter : 0
// incrementCounter : function

// incrementCounter() ->
// new execution context

// local memory

// counter++

// counter is searched first in incrementCounter
// then we go to outer() and find it. Counter is incremented by 1.

// HOW? We saved it inside of outer(), but we also called it inside of outer()

