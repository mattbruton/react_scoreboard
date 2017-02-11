import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Player from './components/Player';

import './styles/main.scss';

class App extends React.Component {

  render() {
    return(
      <div className="scoreboard">
        <Header title={this.props.title}/>
        <div className="players">
          <Player name="Lunchbox" score={25} />
          <Player name="Ziggy" score={24}/>
          <Player name="Hemingway" score={55}/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: React.PropTypes.string
};

App.defaultProps = {
  title: "Scoreboard"
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

export default App;
