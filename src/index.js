import React from 'react';
import { render } from 'react-dom';

import Scoreboard from './containers/Scoreboard';

import './styles/main.scss';

const Players = [
  {
    id: 0,
    name: "Lunchbox",
    score: 25
  }, {
    id: 1,
    name: "Ziggy",
    score: 24
  }, {
    id: 2,
    name: "Hemingway",
    score: 55
  }
];

render(
  <Scoreboard initialPlayers={Players}/>,
  document.getElementById('root')
);