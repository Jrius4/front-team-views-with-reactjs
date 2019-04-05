import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Row, Col, Image, Button, Container } from 'react-bootstrap'
import img1 from '../img/6.jpg'

const AllPlayers = () => {
    return(
        <Container>
        <Row className="text-center">
        <Col>
          <h2>Our Team</h2>
        </Col>
        </Row>
        <Row className="show-grid text-center">
          <Col xs={12} sm={3} className="person-wrapper">
           <Image src={img1} circle className="profile-pic" />
           <Link to='/player'> 
           <h3>Kato Moni</h3>
           </Link>
           <p>Summary Information about Kato</p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
           <Image src={img1} circle className="profile-pic" />
           <Link to='/player'>
           <h3>Kato Moni</h3>
           </Link>
           <p>Summary Information about Kato</p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
           <Image src={img1} circle className="profile-pic" />
           <Link to='/player'>
           <h3>Kato Moni</h3>
           </Link>
           <p>Summary Information about Kato</p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
           <Image src={img1} circle className="profile-pic" />
           <Link to='/player'>
           <h3>Kato Moni</h3>
           </Link>
           <p>Summary Information about Kato</p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
           <Image src={img1} circle className="profile-pic" />
           <Link to='/player'>
           <h3>Kato Moni</h3>
           </Link>
           <p>Summary Information about Kato</p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
           <Image src={img1} circle className="profile-pic" />
           <Link to='/player'>
           <h3>Kato Moni</h3>
           </Link>
           <p>Summary Information about Kato</p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
           <Image src={img1} circle className="profile-pic" />
           <Link to='/player'>
           <h3>Kato Moni</h3>
           </Link>
           <p>Summary Information about Kato</p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
           <Image src={img1} circle className="profile-pic" />
           <Link to='/player'>
           <h3>Kato Moni</h3>
           </Link>
           <p>Summary Information about Kato</p>
          </Col>
        </Row>
    </Container>
    )
}

export default AllPlayers;