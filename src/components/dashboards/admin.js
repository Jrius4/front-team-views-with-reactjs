import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerForm from './playerform'
import Editplayer from './players';

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
    // console.log(state);
    return {
        players: state.player.players
    }
}
export default connect(mapStateToProps)(Admin);