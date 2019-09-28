import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ProfilePage extends Component {

  componentDidMount() {
    fetch('http://localhost:3005/profile', {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    }).then(response => response.json())
      .then(data => console.log('Profile Did Mount', data))
  }

  render() {
    return (
    <div className="home">
      <h1>Profile Page</h1>
    </div>)
  }
}


export default ProfilePage;

