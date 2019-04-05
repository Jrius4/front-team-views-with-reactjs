import React from 'react'
import PlayerSummary from './playerSummary'
import { Link } from 'react-router-dom'

const Editplayer = ({ players }) => {
  return (
    <div className="player-profile section">
      <div className="card z-depth-0">
        <div className="row">
          <div className="col 12 m6">
            {players && players.map(player => {
              return (
                <Link to={'/player/' + player.id}>
                <PlayerSummary player={player} key={player.id} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editplayer