import React from 'react';

// ================================================================ Exercise A

// 1- build a HOC called `withTimestamp`
// that provides the wrapped Component with a `timestamp` prop

// 2- edit Container.jsx so it can take advantage of this prop.

// 3- edit App.jsx to wrap Container with the HOC.

export function withTimestamp(Component) {
  // implement
}


// ================================================================ Exercise B

// 1- build a HOC called `withRandomNumberGenerator`
// that provides the wrapped Component with a `generateRandomNumber` prop
// which is a function that generates random integers from 0 to 9.

// 2- edit Container.jsx so it can take advantage of this prop.

// 3- edit App.jsx to wrap Container with the HOC.

export function withRandomNumberGenerator(Component) {
  // implement
}


// ================================================================ Exercise C

// 1- build a HOC called `withCounter`
// that provides the wrapped Component with the following props:
//   * a `count` that is a number starting at 0
//   * an `incremement` which is a function that increments the counter by 1.
//   * a `decrement` which is a function that decrements the counter by 1.

// 2- edit Container.jsx so it can take advantage of this prop.

// 3- edit App.jsx to wrap Container with the HOC.

export function withCounter(Component) {
  // implement
}
