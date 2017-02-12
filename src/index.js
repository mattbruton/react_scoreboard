import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Player from './components/Player';

import './styles/main.scss';

const Players = [
  {
    id: 0,
    name: "Lunchbox",
    score: 25
  },
  {
    id: 1,
    name: "Ziggy",
    score: 24
  },
  {
    id: 2,
    name: "Hemingway",
    score: 55
  }
];

class App extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired
    })).isRequired
  };

  static get defaultProps() {
    return {
      title: "Scoreboard"
    };
  }

  render() {
    return(
      <div className="scoreboard">
        <Header title={this.props.title}/>
        <div className="players">
          {this.props.players.map((player) => {
            return <Player name={player.name} key={player.id} />;
          })}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App players={Players} />,
  document.getElementById('app')
);

export default App;
