import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);
    console.log("Child constructor")
  }

  componentDidMount() {
    console.log("Child componentDidMount")
  }

  render() {
    console.log("Child render")
    return (
      <div className="child">
        Child Component
      </div>
    )
  }
}

export default Child;