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
        <Navbar to='/' color="primary" expand="md">
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
              <NavItem>

                <NavLink to='/about'>About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Header