import React, { Component } from 'react'
import Player from './Player'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid black',
}

class PlayerList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      players: [
        { id: 1,
          name: 'Greg (The Great Cambino)',
          rounds: [],
          total: 0,
          img_url: 'https://shreckhiseshrubbery.com/wp-content/uploads/2018/01/placeholder-pic.png'
        },
        { id: 2,
          name: 'Meghann (The Original)',
          rounds: [],
          total: 0,
          img_url: 'https://shreckhiseshrubbery.com/wp-content/uploads/2018/01/placeholder-pic.png'
        },
        { id: 3,
          name: 'Alyssa (No.)',
          rounds: [],
          total: 0,
          img_url: 'https://shreckhiseshrubbery.com/wp-content/uploads/2018/01/placeholder-pic.png'
        },
        { id: 4,
          name: 'Val',
          rounds: [],
          total: 0,
          img_url: 'https://shreckhiseshrubbery.com/wp-content/uploads/2018/01/placeholder-pic.png'
        },
        { id: 5,
          name: 'Varun (The Penalizer)',
          rounds: [],
          total: 23,
          img_url: 'https://shreckhiseshrubbery.com/wp-content/uploads/2018/01/placeholder-pic.png'
        },
        { id: 6,
          name: 'Andrew (The 50 Master)',
          rounds: [],
          total: 0,
          img_url: 'https://shreckhiseshrubbery.com/wp-content/uploads/2018/01/placeholder-pic.png'
        },
        { id: 7,
          name: 'AJ (The Great 1)',
          rounds: [],
          total: 0,
          img_url: 'https://shreckhiseshrubbery.com/wp-content/uploads/2018/01/placeholder-pic.png'
        },
        { id: 8,
          name: 'Hyo (Gotta be Quicker than that)',
          rounds: [],
          total: 0,
          img_url: 'https://shreckhiseshrubbery.com/wp-content/uploads/2018/01/placeholder-pic.png'
        }
      ]
    }
  }

  addRoundToPlayer = (id, score) => {
    const newPlayers = this.state.players.map( player => {
      if (player.id === id) {
        const playerCopy = { ...player }
        playerCopy.rounds.push(score)
        return playerCopy
      } else {
        return player
      }
    })
    this.setState({ players: newPlayers })
  }

  render() {
    return (
      <div style={styles} className="player-list">
      {
        this.state.players.map(player => <Player 
          addRoundToPlayer={this.addRoundToPlayer} 
          player={player} />
        )
      }
      </div>
    )
  }
}

export default PlayerList