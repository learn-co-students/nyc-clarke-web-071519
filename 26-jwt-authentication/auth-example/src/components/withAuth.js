import React, { Component } from 'react';

function withAuth(EnhancedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        loggedIn: false
      }
    }

    componentDidMount() {
      fetch('http://localhost:3005/auth', {
        headers: {Authorization: localStorage.getItem('token')}
      })
        .then(response => response.json())
        .then(data => {
          console.log(data, 'from with auth')
          if (data.id) {
            this.setState({ loggedIn: true })
          }
        })
    }

    render() {
      return (
      <EnhancedComponent 
        loggedIn={this.state.loggedIn} 
        {...this.props} 
      />)
    }
  }
}

export default withAuth;