import React, { Component } from 'react'


const styles = {
  border: '1px solid black',
  display: 'flex',
  alignItems: 'center',
  padding: '0.5rem',
  margin: '0.5rem 0',

  profile: {
    fontSize: '14px',
    width: '100px',
    display: 'flex',
    flexDirection: 'column',
    height: '140px',
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'center'
  },
  img: {
    width: '80px',
    borderRadius: '50%'
  }
}

class Player extends Component {

  renderRounds() {
    return this.props.player.rounds.map((score, idx) => {
      return (
        <div style={styles.profile}>
          <p style={{ fontSize: '64px', margin: '0', width: '80px', height: '80px' }}>{score}</p>
          <p className="player-total">Round {idx + 1}</p>
        </div>
      )
    })

  }

  handleSubmit= e => {
    e.preventDefault()

    const playerId = this.props.player.id
    const score = e.target.score.value

    this.props.addRoundToPlayer(playerId, score)
  }

  render() {
    const { name, total, img_url } = this.props.player;
    return (
      <div style={styles} className="player-card">
        <div style={styles.profile} className="profile">
          <img style={styles.img} src={img_url} alt=""/>
          <p className="player-name">{name}</p>
        </div>

        <div style={styles.profile} className="player-total">
          <p style={{fontSize: '64px', margin: '0', width: '80px', height: '80px'}}>{total}</p>
          <p className="player-total">Total</p>
        </div>

        { this.renderRounds() }

        <div className="add-score">
        <form onSubmit={this.handleSubmit}>
          <input name="score" style={{width: '50px'}} type="number" />
          <button type="submit">Add Score</button>
        </form>
        </div>
      </div>
    )
  }
}

export default Player;