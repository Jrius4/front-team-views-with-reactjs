import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
       e.preventDefault();
       console.log(this.state)
    }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
         <h5 className="grey-text text-darken-3">Sign up</h5>
         <div className="row">
         <div className="input-field col s12 m6">
           <label htmlFor="firstName">First Name</label>
           <input type="text" id="firstName" onChange={this.handleChange}></input>
          </div>
          <div className="input-field col s12 m5">
           <label htmlFor="lastName">Last Name</label>
           <input type="text" id="lastName" onChange={this.handleChange}></input>
          </div>
          </div>
          <div className="input-field">
           <label htmlFor="email">Email address</label>
           <input type="email" id="email" onChange={this.handleChange}></input>
          </div>
          <div className="input-field">
           <label htmlFor="password">Password</label>
           <input type="password" id="password" onChange={this.handleChange}></input>
          </div>
          <div className="input-field">
           <button className="btn blue lighten-1 z-depth-0">Sign up</button>
          </div>
        </form>
      </div> 
    )
  }
}

export default SignUp;
