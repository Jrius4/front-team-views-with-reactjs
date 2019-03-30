import React, { Component } from 'react'
import PlayerProfile from '../dashboards/playerProfile'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import PlayerList from './playerList';

class Teams extends Component {
    render() {
        //console.log(this.props);
        const { players } = this.props;
        return (
            <div className="main-container">
                <div className="col s6">
                    <PlayerList />
                    <PlayerProfile players={players} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        players: state.firestore.ordered.players
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect ([
        { collection: 'players' }
    ])
)(Teams);