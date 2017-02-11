import React from 'react';

class Player extends React.Component {

  render() {
    return(
        <div className="player">
            <div className="player-name">{this.props.name}</div>
            <div className="player-score">
                <div className="counter">
                    <button className="counter-action decrement"> - </button>
                    <div className="counter-score">{this.props.score}</div>
                    <button className="counter-action increment"> + </button>
                </div>
            </div>
        </div>
    );
  }
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
};

export default Player;