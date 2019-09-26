import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignUp from './pages/SignUp'
import NavBar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/login' component={SignUp} />
      </Switch>
    </div>

  );
}

export default App;
