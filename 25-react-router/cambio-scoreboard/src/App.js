import React from 'react';
import PlayerList from './PlayerList'
import ScoreBoardMenu from './ScoreBoardMenu'
import PlayerShowPage from './PlayerShowPage'
import './App.css'


import { Route, Link, NavLink, Switch } from 'react-router-dom';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [
        {
          id: Math.random(),
          name: "Greg",
          rounds: [],
          total: 0,
          img_url: 'https://shreckhiseshrubbery.com/wp-content/uploads/2018/01/placeholder-pic.png'
        },
        {
          id: Math.random(),
          name: "Val",
          rounds: [],
          total: 0,
          img_url: 'https://shreckhiseshrubbery.com/wp-content/uploads/2018/01/placeholder-pic.png'
        },
      ],

    }
  }

  addRoundToPlayer = (id, score) => {
    const newPlayers = this.state.players.map(player => {
      if (player.id === id) {
        const playerCopy = { ...player };
        playerCopy.rounds.unshift(score || 0);
        playerCopy.total = playerCopy.rounds.reduce((num, acc) => parseInt(num) + parseInt(acc));

        return playerCopy;
      } else {
        return player
      }
    })
    this.setState({ players: newPlayers })
  }

  addPlayer = newPlayerObj => {
    this.setState({
      players: [ ...this.state.players, newPlayerObj ]
    })
  }

  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><NavLink to="/players">Players</NavLink></li>
            <li><NavLink to="/scoreboard">Scoreboard</NavLink></li>
          </ul>
        </nav>

      <Switch>
        <Route path="/scoreboard" render={ () => 
          <div id="scoreboard">
            <PlayerList
              players={this.state.players}
              addRoundToPlayer={this.addRoundToPlayer}
            />
            <ScoreBoardMenu addPlayer={this.addPlayer} />
          </div>
        } 
        />

        <Route exact path="/players/:id" component={ (routerProps) => <PlayerShowPage {...routerProps} />} />

        <Route exact path="/players" render={() => 
          <div id="players">
            {
              this.state.players.map(player => <p>{player.name}</p>)
            }
          </div>}
        />
        <Route exact path="/" render={ () => 'Home'} />
        <Route path="/" render={ () => '404'} />

       </Switch>

      </div>
    );
  }
}

export default App;
