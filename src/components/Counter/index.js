import React from 'react';

class Counter extends React.Component {

  static propTypes = {
    score: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
  };

  render() {
    return(
        <div className="counter">
            <button className="counter-action decrement" onClick={() => {this.props.onChange(-1);}}> - </button>
            <div className="counter-score">{this.props.score}</div>
            <button className="counter-action increment" onClick={() => {this.props.onChange(1);}}> + </button>
        </div>
    );
  }
}

export default Counter;