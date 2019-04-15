import React, { Component } from 'react';
import img from '../../assests/images/37.jpg'
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    // const slideoutMenu = document.getElementById('slideout-menu');
    // const menuIcon = document.getElementById('menu-icon');

    // menuIcon.addEventListener('click', function () {
    //   if (slideoutMenu.style.opacity == '1') {
    //     slideoutMenu.style.opacity = '0';
    //     slideoutMenu.style.pointerEvents = 'none';
    //   } else {
    //     slideoutMenu.style.opacity = '1';
    //     slideoutMenu.style.pointerEvents = 'auto'
    //   }
    // })
    return (
      <React.Fragment>
        <div id="slideout-menu">
          <ul>
            <li>
              <Link className="active" to='/'>Home</Link>
            </li>

            <li>
            <Link  to='/team'>Players</Link>
            </li>
            <li>
            <Link to='/'>Blog</Link>
            </li>
            <li>
            <Link  to='/about'>About</Link>
            </li>
          </ul>
        </div>
        <nav className="nav">
          <div id="logo-img">
            <Link to='/'>
              <img src={img} alt="police logo" />
            </Link>
          </div>
          <div id="menu-icon">
            <i className="fas fa-bars"></i>
          </div>
          <ul>
            <li>
            <Link className="active" to='/'>Home</Link>
            </li>

            <li>
            <Link  to='/team'>Players</Link>
            </li>
            <li>
            <Link to='/'>Blog</Link>
            </li>
            <li>
            <Link to='/about'>About</Link>
            </li>
            <li>
              <div id="search-icon">
                <i className="fas fa-search"></i>
              </div>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header