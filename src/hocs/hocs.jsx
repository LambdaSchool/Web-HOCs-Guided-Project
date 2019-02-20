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

function greet(name) {
  return `Hello, ${name}`;
}

function improver(func) {
  return function improvedFunc(name) {
    return func(name).toUpperCase();
  };
}

// log the meh and the improved:
const meh = greet;
const improved = improver(meh);

console.log(meh('Tom'));
console.log(improved('Josh'));

// we want an extra prop on the component
// and this prop is just the string 'magic'
export function withMagicProp(Component) {
  return class WithMagicProp extends React.Component {
    render() {
      return (
        <Component {...this.props} magic="the magic" />
      );
    }
  };
}

export function withCounter(Component) {
  return class WithCounter extends React.Component {
    state = {
      currentCount: 0,
    }

    increment = () => {
      this.setState(st => ({ currentCount: st.currentCount + 1 }));
    }

    decrement = () => {
      this.setState(st => ({ currentCount: st.currentCount - 1 }));
    }

    render(/* no */) {
      return (
        <Component
          {...this.props}
          count={this.state.currentCount}
          increment={this.increment}
          decrement={this.decrement}
        />
      );
    }
  };
}

export function withAuthCheck(Component) {

}
