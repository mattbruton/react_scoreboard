import React from 'react';

class Stopwatch extends React.Component {

    static propTypes = {

    };

    constructor(props) {
        super(props);

        this.state = {
            isRunning: false,
            elapsedTime: 0,
            previousTime: 0
        };
    }

    componentDidMount = () => {
        this.interval = setInterval(this.onTick, 100);
    };

    componentWillUnmount = () => {
        clearInterval(this.interval);
    };

    onTick = () => {
        console.log('tick');
        if (this.state.isRunning) {

            let prevTime = this.state.previousTime;
            let elapsedTime = this.state.elapsedTime;
            const now = Date.now();

            this.setState({
                previousTime: now,
                elapsedTime: elapsedTime += (now - prevTime)
            });
        }
    };

    onStart = () => {
        this.setState({
            isRunning: true,
            previousTime: Date.now()
        });
    };

    onStop = () => {
        this.setState({
            isRunning: false
        });
    };

    onReset = () => {
        this.setState({
            elapsedTime: 0,
            previousTime: Date.now()
        })
    };

    render() {
        let seconds = Math.floor(this.state.elapsedTime / 1000);
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <div className="stopwatch-time">{seconds}</div>
                { 
                    this.state.isRunning ? 
                    <button onClick={this.onStop}>Stop</button> 
                    : 
                    <button onClick={this.onStart}>Start</button> 
                }
                <button onClick={this.onReset}>Reset</button>
            </div>
        );
    }
}

export default Stopwatch;