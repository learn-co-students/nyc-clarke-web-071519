import React, { Component } from 'react';

class AnotherChild extends Component {
  constructor(props) {
    super(props);
    console.log("AnotherChild constructor")
  }

  componentDidMount() {
    console.log("AnotherChild componentDidMount")
  }

  render() {
    console.log("AnotherChild render")
    return (
      <div className="AnotherChild">
        AnotherChild Component
      </div>
    )
  }
}

export default AnotherChild;