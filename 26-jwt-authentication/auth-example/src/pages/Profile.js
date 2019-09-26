import React from 'react';
import { Redirect } from 'react-router-dom';

const ProfilePage = props => (
    props.currentUser.id ?
    <div className="home">
      <h1>Profile Page</h1>
    </div>
    :
    <Redirect to="/login" />
)

export default ProfilePage;

