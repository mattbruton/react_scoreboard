import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.scss';

export default class App extends React.Component {

  render() {
    return(
      <div className="scoreboard">
        <div className="header">
          <h1>{this.props.title}</h1>
        </div>
        <div className="players">
          <div className="player">
            <div className="player-name">
              Matt
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> 31 </div>
                <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string
};

ReactDOM.render(
  <App title="My Scoreboard"/>,
  document.getElementById('app')
);
