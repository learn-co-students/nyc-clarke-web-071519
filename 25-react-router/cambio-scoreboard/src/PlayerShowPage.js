import React from 'react';

const PlayerShowPage = (props) => {

  const handleSubmit = e => {
    e.preventDefault()
    // some other fancy logicfhdlf;dsla

    props.history.push('/scoreboard')
  }
  console.log(props)
  return (
    <div id="player-show-page">
      Show Page
      <form onSubmit={handleSubmit}>
        <input type="text"/>
        <button type="submit">Send FORM!</button>
      </form>
    </div>
  )
}

export default PlayerShowPage;