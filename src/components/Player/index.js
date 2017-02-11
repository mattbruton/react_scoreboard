import React from 'react';

import Counter from '../Counter';

class Player extends React.Component {

    propTypes = {
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number
    };

    render() {
        return (
            <div className="player">
                <div className="player-name">{this.props.name}</div>
                <div className="player-score">
                    <Counter score={this.props.score}/>
                </div>
            </div>
        );
    }
}

export default Player;