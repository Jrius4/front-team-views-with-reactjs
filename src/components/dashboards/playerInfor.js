import React from 'react'
import image from '../img/4.jpg'

const PlayerInfor = ({ player }) => {
    return (
        <div className="player-infor section">
            <div className="card z-depth-0">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={image} alt="" ></img>
                </div>
                <span className="card-title">PLAYER PROFILE</span>
                <div className="card-content">
                    <div className="row">
                        <div className="col 12 m6">
                            <table>
                                <tr>
                                    <th>Name:</th>
                                    <td>{player.first_name} {player.last_name}</td>
                                </tr>
                                <tr>
                                    <th>Date of birth:</th>
                                    <td>{player.date}</td>
                                </tr>
                                <tr>
                                    <th>Nationality:</th>
                                    <td>{player.nationality}</td>
                                </tr>
                                <tr>
                                    <th>Position:</th>
                                    <td>{player.position}</td>
                                </tr>
                                <tr>
                                    <th>Foot:</th>
                                    <td>{player.foot}</td>
                                </tr>
                                <tr>
                                    <th>Shit number:</th>
                                    <td>{player.shit}</td>
                                </tr>
                                <tr>
                                    <th>Former Club:</th>
                                    <td>{player.former_club}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayerInfor;