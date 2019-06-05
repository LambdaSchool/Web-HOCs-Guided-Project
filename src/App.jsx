import React from 'react';
import { render } from 'react-dom';


function MySadComponent(props) {
  if (!props.isAuthed) {
    return <div>Sorry, I can't show you this content</div>;
  }
  return (
    <div>
      Sad?
      {/* normal prop that comes from parent */}
      <h3>{props.heading}</h3>

      {/* the extra prop which will be injected by a HOC */}
      <div>{props.isAuthed}</div>

      {/* another extra prop which will be injected by another HOC */}
      <div>{props.timestamp}</div>

      <br />
      {/* our sad component should expect three extra props
        that seem to come out of nowhere */}
      <div>count: {props.count}</div>
      <button onClick={props.increment}>increment</button>
      <button onClick={props.decrement}>decrement</button>
    </div>
  );
}

function injectIsAuthedProp(Component) {
  return class extends React.Component {
    state = { isAuthed: false }

    componentDidMount() {
      const isAuthed = !!localStorage.getItem('isAuthed');
      this.setState({ isAuthed });
    }

    componentDidUpdate() {
      const isAuthed = !!localStorage.getItem('isAuthed');
      if (this.state.isAuthed !== isAuthed) {
        this.setState({ isAuthed });
      }
    }

    render() {
      return (
        <Component isAuthed={this.state.isAuthed} {...this.props} />
      );
    }
  };
}

const EnrichedSadComponent = withCounter(withTimestamp(injectIsAuthedProp(MySadComponent)));


render(
  <EnrichedSadComponent heading="yessss" />,
  document.querySelector('#target1'),
);

export function withMagicProp(Component) {

}


// ================================================================ Exercise A

// Build a HOC called `withTimestamp`
// that provides the wrapped Component with a `timestamp` prop

// create the hoc
// declare an enriched version of MySadComponent that uses timestamp
// attach the element to the DOM 
export function withTimestamp(Component) {
  return class extends React.Component {
    render() {
      const timestamp = new Date().getTime();
      return <Component timestamp={timestamp} {...this.props} />;
    }
  };
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
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incremement = () => {
      this.setState(prevState => ({
        count: prevState.count + 1,
      }));
    };

    decrement = () => {
      this.setState(prevState => ({
        count: prevState.count - 1,
      }));
    };

    render() {
      return (
        <Component
          increment={this.incremement}
          decrement={this.decrement}
          count={this.state.count}
          {...this.props}
        />
      );
    }
  };
}


// ================================================================ Exercise D

// Build a HOC called `withAuthCheck`
// that provides the wrapped component with an `isAuthed` prop which is a boolean
// that informs whether there is an "auth" key with a value, inside local storage.
export function withAuthCheck(Component) {

}
