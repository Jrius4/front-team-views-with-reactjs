import React from 'react'
import PlayerInfor from './playerInfor'

const PlayerProfile = ({ players }) => {
    return (
        <div className="player-profile section center">
            <div className="row m-5">
                <div className="col s12 m6 offset-m1 m-5">
                    {players && players.map(player => {
                        return (
                            <PlayerInfor player={player} key={player.id} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default PlayerProfile