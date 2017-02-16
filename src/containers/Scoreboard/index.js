import React, { Component, PropTypes } from 'react';

import Header from '../../components/Header';
import Player from '../../components/Player';
import AddPlayerForm from '../../components/AddPlayer';

let nextId = 3;

class Scoreboard extends Component {

  static propTypes = {
    title: PropTypes.string,
    initialPlayers: 
      PropTypes
      .arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
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

export default Scoreboard;
