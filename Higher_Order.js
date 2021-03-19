function copyArrayAndManipulate(array, instructions) {
    const output= [];
    for (let i =0; i <array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;
}

// function multiplyBy2(input) { return input * 2} //multiplyBy2 is the instructions parameter of our HO function
function dividBy2(input) {return input / 2}
// const result = copyArrayAndManipulate([1,2,3], multiplyBy2);
const result2 = copyArrayAndManipulate([1,2,3], dividBy2);



const result3 = copyArrayAndManipulate([1,2,3], input => input * 2);


// console.log(result);

console.log(result2);

console.log(result3);



// Global Memory

// copyArrayAndManipulate : Function
// multiplyBy2: function
// result: OUTPUT values [2, 4, 6]

// result = copyArrayAndManipulate(array, function definition)



// Execution Context

// thread of Execution                         Local Memory
//                                             array : [1,2,3]
// instructions(parameters)                    instructions: multiplyBy2(function definition)


// array [1,2,3]                               output: [2, 4, 6]
//     0=1 * 2 = 2
//     1=2 * 2 = 4                             
//     2=3 * 2 = 6




//     output = [2, 4, 6]

// callstack

// copyArrayAndManipulate()
// global()



// Functions in JavaScript =  first class objects

// They can co-exist with and can be treated like any other JavaScript objects.apply

// 1. Assigned to variables and properties of other objects. Methods
// 2. Passed as arguments into Functions
// 3. Returned as values from functions. 


// Higher-order functions

// Takes in a function or passes out a function

// Just a term to describe these functions - any function that does it we call that - but there's nothing different about them inherently.
