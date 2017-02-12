import React from 'react';

import Counter from '../Counter';

class Player extends React.Component {

    static propTypes = {
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number
    };

    render() {
        return (
            <div className="player">
                <div className="player-name">{this.props.name}</div>
                <div className="player-score">
                    <Counter />
                </div>
            </div>
        );
    }
}

export default Player;