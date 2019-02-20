import React from 'react';
import { string } from 'prop-types';

export default function Container({ magic }) {
  return (
    <div className='container'>
      Hello, World {magic}
    </div>
  );
}

Container.propTypes = {
  magic: string.isRequired,
};
