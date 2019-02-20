import React from 'react';

export default function Container({ magic, timestamp, count, increment, decrement }) {
  // stateful logic here
  return (
    <div className='container'>
      Hello, World {magic} {timestamp} {count}

      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
