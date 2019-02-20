import React from 'react';

export default function Container({ magic, timestamp }) {
  return (
    <div className='container'>
      Hello, World {magic} {timestamp}
    </div>
  );
}
