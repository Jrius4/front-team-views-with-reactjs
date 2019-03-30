import React from 'react'
import PlayerSummary from './playerSummary'

const Editplayer = ({ players }) => {
  return (
    <div className="player-profile section">
      <div className="card z-depth-0">
        <div className="row">
          <div className="col 12 m6">
            {players && players.map(player => {
              return (
                <PlayerSummary player={player} key={player.id} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editplayer