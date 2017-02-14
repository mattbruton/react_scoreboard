import React from 'react';

import Stats from '../Stats';
import Stopwatch from '../Stopwatch';

class Header extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    players: React.PropTypes.array.isRequired
  };

  render() {
    return(
        <div className="header">
          <Stats players={this.props.players}/>
          <h1>{this.props.title}</h1>
          <Stopwatch />
        </div>
    );
  }
}

export default Header;