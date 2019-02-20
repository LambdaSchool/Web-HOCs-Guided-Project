import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import * as teacherHocs from './hocs/hocs';
import * as studentHocs from './hocs/hocs2';


const Meh = Container;
const Improved = studentHocs.withTimestamp(
  teacherHocs.withMagicProp(Meh),
);

ReactDOM.render(
  <Improved dontLoseMe='6' />, document.querySelector('#target1'),
);
