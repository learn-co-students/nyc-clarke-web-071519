import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';


import NavBar from './components/Navbar';

import './App.css';

class App extends React.Component {
  state = {
    currentUser: {
      id: null
    }
  }

  loginUser = (userObj) => {
    this.setState({
      currentUser: userObj
    })
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    fetch('http://localhost:3005/authenticate', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    .then( response => response.json() )
    .then( data => this.loginUser(data.currentUser) )

  }

  render () {
    console.log(this.state)
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route 
            exact path='/profile' 
            component={() =>
              <Profile currentUser={this.state.currentUser} />
            } />
          <Route exact path='/login' component={Login} />
          <Route
            exact path='/signup'
            component={() => 
              <SignUp loginUser={this.loginUser} />
            } 
          />
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
