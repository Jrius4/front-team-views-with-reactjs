import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPlayer } from '../../store/actions/playerActions'

class PlayerForm extends Component {
    state = {
        first_name: '',
        last_name: '',
        shirt_number: '',
        nationality: '',
        date: '',
        position: '',
        former_club: '',
        image: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        // e.preventDefault();
        // console.log(this.state);
        this.props.addPlayer(this.state)
    }

    render() {
        return (
            <div className="player_form section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <div className="row">
                            <div className="col 12 m6">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input type="text" id="first_name" onChange={this.handleChange}></input>
                                            <label htmlFor="first_name">First Name</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input type="text" id="last_name" onChange={this.handleChange}></input>
                                            <label htmlFor="last_name">Last Name</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s5">
                                            <input type="date" id="date" onChange={this.handleChange}></input>
                                            <label htmlFor="date">Date Of Birth</label>
                                        </div>
                                        <div className="input-field col 6">
                                            <input type="text" id="nationality" onChange={this.handleChange}></input>
                                            <label htmlFor="nationalit">Nationality</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <p>
                                            <label>
                                                <input name="group1" type="radio" checked onChange={this.handleChange} />
                                                <span>Right</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input name="group1" type="radio" onChange={this.handleChange} />
                                                <span>Left</span>
                                            </label>
                                        </p>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s5">
                                            <input type="number" id="shirt_number" onChange={this.handleChange}></input>
                                            <label htmlFor="shirt_number">Shirt No.</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input type="text" id="position" onChange={this.handleChange}></input>
                                            <label htmlFor="position">Position</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s5">
                                            <input type="text" id="former_club" onChange={this.handleChange}></input>
                                            <label htmlFor="former_club">Former Club(s)</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-field col s5">
                                            <button type="file" id="image" value="Upload File" onChange={this.handleChange}>Upload image</button>
                                        </div>
                                    </div>
                                    <button onSubmit={this.handleSubmit} className="waves-effect waves-teal btn-flat">Add Player</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchTopProps = (dispatch) => {
    return {
        addPlayer: (player) => dispatch(addPlayer(player))
    }
}

export default connect(null, mapDispatchTopProps)(PlayerForm)