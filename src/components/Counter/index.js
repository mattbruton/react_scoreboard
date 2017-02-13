import React from 'react';

class Counter extends React.Component {

  static propTypes = {
    score: React.PropTypes.number.isRequired
  };

  incrementScore = () => {
    this.setState({
      score: (this.state.score + 1)
    });
  }

  decrementScore = () => {
    this.setState({
      score: (this.state.score - 1)
    });
  }

  render() {
    return(
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <div className="counter-score">{this.props.score}</div>
            <button className="counter-action increment"> + </button>
        </div>
    );
  }
}

export default Counter;