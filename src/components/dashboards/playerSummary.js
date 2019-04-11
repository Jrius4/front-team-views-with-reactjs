import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { getPlayer, deletePlayer } from '../../store/actions/playerActions'

class PlayerSummary extends Component {
    state = {
        first_name: '',
        last_name: '',
    }

    // handleDelete = (e) => {
    //     e.preventDefault();
    //     this.props.addPlayer(this.state)
    // }

    componentDidMount() {
        this.props.getPlayer()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.deletePlayer(this.state)
        // console.log('addedplayer', this.state)
    }

    render() {
        console.log('this.props', this.props)
        const { player } = this.props;
        return (
            <Row className="show-grid">
                <Col xs={12} sm={6} className="person-wrapper">
                    <Link to='/player/{id}'>
                        <span className="left m-2"> {player.first_name} {player.last_name} </span>
                    </Link>
                    </Col>
                    <Col xs={12} sm={3} className="person-wrapper">
                    <button className="right m-1">Edit</button>
                    </Col>
                    <Col xs={12} sm={3} className="person-wrapper">
                    <button onClick={this.handleDelete} className="right m-1">Delete</button>
                </Col>
            </Row>
        )
    }
}

// const mapStateTopProps = (state) => {
//     return {
//         players: state.player
//     }
// }

const mapStateTopProps = (dispatch) => {
    return {
        getPlayer: (player) => dispatch(getPlayer(player)),
        deletePlayer: (player) => dispatch(deletePlayer(player))
    }
}

export default connect(null, mapStateTopProps)(PlayerSummary);