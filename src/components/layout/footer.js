import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

    <footer className="page-footer blue darken-3">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><Link to='/' className="grey-text text-lighten-3">Link 1</Link></li>
              <li><Link to='/' className="grey-text text-lighten-3">Link 2</Link></li>
              <li><Link to='/' className="grey-text text-lighten-3">Link 3</Link></li>
              <li><Link to='/' className="grey-text text-lighten-3">Link 4</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          © 2014 Copyright Text
            <Link to='/' className="grey-text text-lighten-4 right">More Links</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;