import React from 'react';
import PlayerList from './PlayerList'
import ScoreBoardMenu from './ScoreBoardMenu'



class App extends React.Component {

  render() {
    return (
      <div className="App">
        <PlayerList />
        <ScoreBoardMenu />
      </div>
    );
  }
}

export default App;
