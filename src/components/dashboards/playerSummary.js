import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePlayer } from '../../store/actions/deleteAction'

class PlayerSummary extends Component {
   
    // componentDidMount() {
    //     this.props.addPlayer()
    // }
    
    handleDelete = (e) => {
        e.preventDefault();
        //console.log('Deleted ooops')
        this.props.deletePlayer(this.state)
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


const mapDispatchTopProps = (dispatch) => {
    return {
        deletePlayer: (player) => dispatch(deletePlayer(player)),
    }
}

export default connect(null, mapDispatchTopProps)(PlayerSummary);