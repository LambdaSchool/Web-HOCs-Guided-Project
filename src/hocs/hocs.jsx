import React from 'react';

// this is used all over the place
// we can't just modify it!!!
// many people expect the old behavior!!!
function logNumber(num) {
  // 20 lines of code!!
  return `numba ${num}`;
}

// // this bad!!!!!!!!!!!!!!!!!!!!!!!!!
// export function improvedLogNumber(num) {
//   // 20 lines of code!! <- these lines are the same!
//   return `This is the wonderful number ${num}`;
// }

// this higher order function takes a function and returns "improved" function
// without messing with the internals of the function
function withImprovement(func) {
  return function improved(num) {
    return `This is the wonderful ${func(num)}`;
  };
}

// log the meh and the improved:
const meh = logNumber;
const improved = withImprovement(meh);

console.log(meh(12));
console.log(improved(12));


// 1- implement a greet function
console.log(greet('Tom')); // -> Hello, Tom
// 2- implement an improver called withShouting
const improvedGreet = withShouting(greet);
console.log(improvedGreet('Tom')); // -> HELLO, TOM


export function withMagicProp(Component) {

}

export function withAuthCheck(Component) {

}
