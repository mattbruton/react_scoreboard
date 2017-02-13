import React from 'react';

class Stats extends React.Component {

    static propTypes = {
    players: React.PropTypes.array.isRequired
    };

    displayTotalPlayers = () => {return this.props.players.length;}
    displayTotalPoints = () => { 
        return this.props.players.reduce((total, player) => {
            return total + player.score;
        }, 0);
    }

    render() {
        return(
            <table className="stats">
                <tbody>
                    <tr>
                        <td>Players:</td>
                        <td>{this.displayTotalPlayers()}</td>
                    </tr>
                    <tr>
                        <td>Total Points:</td>
                        <td>{this.displayTotalPoints()}</td>
                    </tr>
                </tbody>
            </table>
            );
        }
    }

export default Stats;