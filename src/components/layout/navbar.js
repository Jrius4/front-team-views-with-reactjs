import React from 'react';
import { NavLink } from 'react-router-dom'
import 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar to='/' color="primary dark-4" expand="md">
          <NavbarBrand href="/">Logo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" >
              <NavItem>

                <NavLink to='/'>HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='/team'>PLAYERS</NavLink>
              </NavItem>
              <NavItem>

                <NavLink to='/'>BLOG</NavLink>
              </NavItem>
              <NavItem>

                <NavLink to='/'>NEWS</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div id="banner">
          <h3>WELCOME TO</h3>
          <h1>. POLICE FC .</h1>
          <p>Here you will find everything about Police FC. Pure emotions, latest news, statisctics in details and much more.</p>
          <button className="learn_more">LEARN MORE</button>
        </div>
      </React.Fragment>
    );
  }
}
export default Header