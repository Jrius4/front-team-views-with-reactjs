import React from 'react';
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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
        <div id="banner">
          <Navbar color="transparent" expand="md">
            <NavbarBrand href="/">Logo</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar tabs>
              <Nav className="ml-auto" >
                <NavItem>
                  <Link to='/teams'>
                    <NavLink>HOME</NavLink>
                  </Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav >
                    PLAYERS
                </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                  </DropdownItem>
                    <DropdownItem>
                      Option 2
                  </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Option 1
                  </DropdownItem>
                    <DropdownItem>
                      Option 2
                  </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                  </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Link to='/'>
                    <NavLink to='/'>TRAINING</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to='/'>
                    <NavLink to='/'>BLOG</NavLink>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to='/'>
                    <NavLink to='/'>NEWS</NavLink>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
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