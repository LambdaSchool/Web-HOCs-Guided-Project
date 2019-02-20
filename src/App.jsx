import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import * as teacherHocs from './hocs/hocs';
import * as studentHocs from './hocs/hocs2';

const error = <div>this is an error</div>;
const Error = () => error;

const Meh = Container;
const Improved = studentHocs.withCounter(
  studentHocs.withTimestamp(
    teacherHocs.withMagicProp(
      teacherHocs.withAuthCheck(
        Meh, // Meh is component to improve
      ),
    ),
  ),
  2, // by how much should the counter increment
  Error, // used for errors
);

ReactDOM.render(
  <Improved dontLoseMe='6' />,
  document.querySelector('#target1'),
);
