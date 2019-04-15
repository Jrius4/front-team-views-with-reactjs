import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
    <div className="footer">
    <div id="left-footer">
        <h3>Quick Links</h3>
        <p>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/team'>players</Link>
                </li>
                <li>
                    <Link to='/'>Blog</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
                <li>
                    <Link to='/'>Contact</Link>
                </li>
                <li>
                    <Link to='/about'>Privacy Policy</Link>
                </li>
            </ul>
        </p>
    </div>
    <div id="right-footer">
        <h3>Follow us on</h3>
        <div id="social-media-footer">
            <ul>
                <li>
                    <Link to='/'>
                        <i className="fab fa-facebook"></i>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i className="fab fa-youtube"></i>
                    </Link>
                </li>
                <li>
                    <Link to='/'>
                        <i className="fab fa-twiter"></i>
                    </Link>
                </li>
            </ul>
        </div>
        <p>We the hope to Uganda's Football Clubs</p>
    </div>
    </div>
</footer>
  )
}

export default Footer;