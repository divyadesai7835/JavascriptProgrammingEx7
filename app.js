/*
Javascript Programming Ex7

*/
/**
 * @description  short function name for logging
 * @param {object} obj  The object to write  to the log
 */
{
function l(obj);
    console.log(obj);
}
l('Hello from my function');
/**
 * @description Adds two numbers and returns the answer
 * @param{number}a value 1
 * @param{number}b value 2
 * @returns The sum Of two Numbers 
 */
function add (a,b){
    return a+b;
}

/**
 * @description Suntraction two numbers and returns the answer
 * @param{number}a value 1
 * @param{number}b value 2
 * @returns The subtraction Of two Numbers 
*/
let substract = function(a,b){
    return a-b;
}
/**
 * @description Multiplies two numbers 
 * @param{number}a value 1
 * @param{number}b value 2
 * @returns The multliply Of two Numbers 
*/
const multiply = (a,b) => {
    return a*b;
}

let sum = add (3,4);
l(sum);

let diff = substract (7,5);
l(diff);

let prod = multiply (10,5);
l(prod);

add='Divy';// we can re-assign functions like variables because functions are objects 
l(add);
add = 3*4;
l(add);

substract = 'x';
l(substract);

multiply = 'desai';// we cannat re-assign when we use the const keyword
l(multiply);

const q ='y';
q='z';