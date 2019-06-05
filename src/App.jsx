import React from 'react';
import { render } from 'react-dom';


class MySadComponent extends React.Component {
  render() {
    return (
      <div>
        Sad?
        {/* normal prop that comes from parent */}
        <h3>{this.props.heading}</h3>

        {/* the extra prop which will be injected by the HOC */}
        <span>{this.props.isAuthed}</span>
      </div>
    );
  }
}

function injectIsAuthedProp(Component) {
  return class extends React.Component {
    render() {
      return (
        <Component isAuthed='dsafkjakdsjf' {...this.props} />
      );
    }
  };
}

const EnrichedSadComponent = injectIsAuthedProp(MySadComponent);


render(
  <EnrichedSadComponent heading="yessss" />,
  document.querySelector('#target1'),
);

export function withMagicProp(Component) {

}


// ================================================================ Exercise A

// Build a HOC called `withTimestamp`
// that provides the wrapped Component with a `timestamp` prop
export function withTimestamp(Component) {

}


// ================================================================ Exercise B

// Build a HOC called `withRandomNumberGenerator`
// that provides the wrapped Component with a `generateRandomNumber` prop
// which is a function that generates random integers from 0 to 9.
export function withRandomNumberGenerator(Component) {

}


// ================================================================ Exercise C

// Build a HOC called `withCounter`
// that provides the wrapped Component with the following props:
//   - a `count` which is a number starting at 0
//   - an `incremement` which is a function that increments the counter by 1.
//   - a `decrement` which is a function that decrements the counter by 1.
export function withCounter(Component) {

}


// ================================================================ Exercise D

// Build a HOC called `withAuthCheck`
// that provides the wrapped component with an `isAuthed` prop which is a boolean
// that informs whether there is an "auth" key with a value, inside local storage.
export function withAuthCheck(Component) {

}
