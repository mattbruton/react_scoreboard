import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayer';

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

let nextId = 3;

class App extends React.Component {

  static propTypes = {
    title: React.PropTypes.string,
    initialPlayers: React
      .PropTypes
      .arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired
      }))
      .isRequired
  };

  static get defaultProps() {
    return {title: "Scoreboard"};
  }

  constructor(props) {
    super(props);

    this.state = {
      players: this.props.initialPlayers
    };
  }

  onScoreChange = (playerIndex, delta) => {
    const newPlayersInfo = this.state.players;
    newPlayersInfo[playerIndex].score += delta;
    this.setState({
      players: newPlayersInfo
    });
  };

  onPlayerRemove = (index) => {
    const newPlayers = this.state.players;
    newPlayers.splice(index, 1);
    this.setState({
      players: newPlayers
    });
  };

  onPlayerAdd = (name) => {
    const newPlayers = this.state.players;
    newPlayers.push({
      name: name,
      score: 0,
      id: nextId
    });
    nextId++;
    this.setState({
      players: newPlayers
    });
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title={this.props.title} players={this.state.players} />
        <div className="players">{this.state.players.map((player, index) => {
            return (
              <Player
                onRemove = {() => this.onPlayerRemove(index)}
                onScoreChange={(delta) => this.onScoreChange(index, delta)}
                name={player.name}
                score={player.score}
                key={player.id}/>
              );
          })}
        </div>
        <AddPlayerForm onAdd={this.onPlayerAdd} />
      </div>
    );
  }
}

ReactDOM.render(
  <App initialPlayers={Players}/>, document.getElementById('app'));

export default App;
