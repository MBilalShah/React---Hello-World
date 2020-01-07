import React from 'react';
class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    render() {
        return (<div>
            <p>Count - {this.state.count}</p>
            <button onClick={() => this.incrementFive()}>Increment</button>
        </div>)
    }
    increment() {
    
        // this.setState({ count: this.state.count + 1 },()=>{console.log(this.state.count)})
      this.setState(prevState=>({
          count:prevState.count+1
      }),()=>{console.log(this.state.count)})
        console.log(this.state.count)
    }
    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
}

export default Counter;