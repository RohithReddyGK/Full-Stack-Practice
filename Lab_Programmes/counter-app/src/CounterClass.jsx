import React,{Component} from 'react';

class Counter extends Component
{
    constructor(props)
    {
        super(props);
        this.state={count:0};
    }
    componentDidMount()
    {
        console.log("Fetching initial data...");
    }
    increment=()=>{
        this.setState(prevState=>({count:prevState.count+1}));
    };
    decrement=()=>{
        this.setState(prevState=>({count:prevState.count-1}));
    };
    doubleCount=()=>{
        this.setState(prevState=>({count:prevState.count*2}));
    };
    resetCount=()=>{
        this.setState({count:0});
    };

    render()
    {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.doubleCount}>Double Count</button>
                <button onClick={this.resetCount}>Reset</button>
            </div>
        );
    };
};

export default Counter;