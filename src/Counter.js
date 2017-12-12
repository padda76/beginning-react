import React from 'react';

class Button extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.incrementValue);
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                +{this.props.incrementValue}
            </button>
        );
    };
}

const Result = (props) => {
    return (
        <div>{props.counter}</div>
    );
};

class Counter extends React.Component {
    state = { counter: 0 };
    incrementCounter = (increment) => {
        this.setState({
            counter: this.state.counter + increment
        });
    };

    render(){ 
        return (
            <div>
                <Button incrementValue={1} onClick={this.incrementCounter} />
                <Button incrementValue={5} onClick={this.incrementCounter} />
                <Button incrementValue={10} onClick={this.incrementCounter} />
                <Button incrementValue={100} onClick={this.incrementCounter} />
                <Result counter={this.state.counter}/>
            </div>
        );
    };
}

export default Counter;