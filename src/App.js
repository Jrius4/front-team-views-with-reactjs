import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'materialize-css/dist/js/materialize'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/layout/navbar'
import Home from './components/Home'
import Admin from './components/dashboards/admin';
import Footer from './components/layout/footer'
import PlayerInfor from './components/dashboards/playerInfor'
import AllPlayers from './components/dashboards/allPlayers'
// import Login from './components/auth/login'
// import SignUp from './components/auth/signUp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/team' component={AllPlayers} />
            <Route path='/admin' component={Admin} />
            <Route path='/player/:id' component={PlayerInfor} />
            {/* <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} /> */}
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
