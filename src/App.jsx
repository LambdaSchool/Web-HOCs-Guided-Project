import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import * as teacherHocs from './hocs/hocs';
import * as studentHocs from './hocs/hocs2';

const error = <div>this is an error</div>;
const Error = () => error;

const Meh = Container;
const Improved = studentHocs.withCounter(
  studentHocs.withTimestamp(teacherHocs.withMagicProp(Meh)),
  2,
  Error,
);

ReactDOM.render(
  <Improved dontLoseMe='6' />,
  document.querySelector('#target1'),
);
