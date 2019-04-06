import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Image, Container } from 'react-bootstrap'
import img1 from '../img/4.jpg'
import img2 from '../img/5.jpg'
import img3 from '../img/6.jpg'

const HomeSummary = () => {
  return (
    <Container>
        <Row className="text-center">
          <Col>
            <h2>OUR CLUB PLAYERS</h2>
          </Col>
        </Row>
        <Row className="show-grid text-center">
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src={img1} circle='true' className="profile-pic" />
            <h3>Kato Moni</h3>
            <p>Summary Information about Kato</p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src={img2} circle='true' className="profile-pic" />
            <h3>Kato Moni</h3>
            <p>Summary Information about Kato</p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src={img3} circle='true' className="profile-pic" />
            <Link to='/player'>
              <h3>Kato Moni</h3>
            </Link>
            <p>Summary Information about Kato</p>

          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src={img3} circle='true' className="profile-pic" />
            <h3>Kato Moni</h3>
            <p>Summary Information about Kato</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col>
            <Link to='team'>
              <h3>View all Players</h3>
            </Link>
          </Col>
        </Row>
    </Container>
  );
}


export default HomeSummary;