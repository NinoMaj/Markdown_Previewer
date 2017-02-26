// import 'babel-polyfill';
const marked = require('marked');
import React from 'react';
import ReactDOM from 'react-dom';

import {Main} from './app/main';

import './index.scss';
console.log(typeof marked('I am using __markdown__.'));
ReactDOM.render(
  <Main/>,
  document.getElementById('root')
);
