import { Component } from "react";

type CounterStateProps = {
    count: number
}

type CounterProps = {
    message: string
}
export class Counter extends Component <CounterProps, CounterStateProps> {

    state = {
        count: 0
    }

    handleClick = () => {
        this.setState((prevState) => ({ count: prevState.count + 1}))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Increment</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}