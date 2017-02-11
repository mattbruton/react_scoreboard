import React from 'react';

class Counter extends React.Component {

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

Counter.propTypes = {
  score: React.PropTypes.number.isRequired
};

export default Counter;