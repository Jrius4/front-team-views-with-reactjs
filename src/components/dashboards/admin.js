import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerForm from './playerform'
import Editplayer from '../team/players';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Admin extends Component {
    render() {
        //console.log(this.props);
        const { players } = this.props;
        return (
            <div className="adim_dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <PlayerForm />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Editplayer players={players} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        players: state.firestore.ordered.players
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect ([
        { collection: 'players' }
    ])
)(Admin);