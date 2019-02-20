import React from 'react';

export default function Container({ magic, timestamp, count, increment, decrement }) {
  // stateful logic here
  return (
    <div className='container'>
      Hello, World
      <div>magic prop: {magic}</div>
      <div>timestamp: {timestamp}</div>
      <div>Count: {count}</div>

      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
