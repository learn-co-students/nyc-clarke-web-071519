import React, { Component } from 'react'

class ScoreBoardMenu extends Component {
  render() {
    return (
      <div className="score-board-menu">

        <form className="new-player">
          <input type="text" placeholder="player name" />
          <button type="submit">Add Player</button>
        </form>
      </div>
    )
  }
}

export default ScoreBoardMenu;