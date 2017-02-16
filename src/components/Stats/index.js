import React, { PropTypes } from 'react';

// Instead of extending a class, defining the component as a pure function.

const Stats = props => {
    const displayTotalPlayers = () => {
        return props.players.length;
    };

    const displayTotalPoints = () => { 
        return props.players.reduce((total, player) => {
            return total + player.score;
        }, 0);
    };

    return(
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{displayTotalPlayers()}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{displayTotalPoints()}</td>
                </tr>
            </tbody>
        </table>
    );
};

Stats.propTypes = {
    players: PropTypes.array.isRequired
};

export default Stats;