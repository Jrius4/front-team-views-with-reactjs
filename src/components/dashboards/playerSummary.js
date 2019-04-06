import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePlayer, getPlayer } from '../../store/actions/playerActions'

class PlayerSummary extends Component {
    state ={
        first_name: '',
        last_name: '',
    }
   
    componentDidMount() {
        this.props.getPlayer()
    }
    
    handleDelete = (e) => {
        e.preventDefault();
        this.props.getPlayer(this.state)
    }
    render() {
      
            const { player } = this.props;
        return (
            <div className="player-summary section">
                <table className="highlight">
                <tbody>
                    <tr>
                        <td><span className="left m-2">{player.image} {player.first_name} {player.last_name} </span></td>
                        <td><button className="right m-1">Edit</button></td>
                        <td><button onClick={this.handleDelete} className="right m-1">Delete</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateTopProps = (state) => {
    return {
        players: state.player
    }
}

const mapDispatchTopProps = (dispatch) => {
    return {
        getPlayer: (player) => dispatch(getPlayer(player)),
        deletePlayer: (player) => dispatch(deletePlayer(player)),
    }
}

export default connect(mapStateTopProps, mapDispatchTopProps)(PlayerSummary);