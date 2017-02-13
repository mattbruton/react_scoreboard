import React from 'react';

import Counter from '../Counter';

class Player extends React.Component {

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number,
        onScoreChange: React.PropTypes.func.isRequired
    };

    render() {
        return (
            <div className="player">
                <div className="player-name">{this.props.name}</div>
                <div className="player-score">
                    <Counter score={this.props.score} onChange={this.props.onScoreChange} />
                </div>
            </div>
        );
    }
}

export default Player;