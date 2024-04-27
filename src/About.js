import { Component } from "react";

import React from 'react'
// export default class About extends Component{
//   constructor(){
//     super();
//     this.state = {
//       count : 0 , 
//       name: "ram"
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h1>{this.state.count}</h1>
//         <h1>"Ram"{this.state.name}</h1>
//         <button onClick={() => this.setState({count: this.state.count +1 , name: this.state.name + "raj" })}>+</button>
//         <button onClick={() => this.setState({count: this.state.count -1 })}>-</button>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react';

export default class About extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor called');
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({count : this.state.count+1})
    })
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
    console.log('Previous state:', prevState);
    console.log('Current state:', this.state);
  }

  shouldComponentUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
        return true;
    } else {
        return false;
    }

  }
  

  // componentWillUnmount() {
  //   console.log('Component will unmount');
  // }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    console.log('Render method called');
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

// export default ExampleComponent;


