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
      <Row className="text-center">
        <Col xs={12} sm={3} className="person-wrapper">
        <Link to='/player/{id}'>
          <Image src={img1} circle='true' className="profile-pic" />
          </Link>
          <h3>Kato Moni</h3>

        </Col>
        <Col xs={12} sm={3} className="person-wrapper">
        <Link to='/player/{id}'>
          <Image src={img2} circle='true' className="profile-pic" />
          </Link>
          <h3>Kato Moni</h3>

        </Col>
        <Col xs={12} sm={3} className="person-wrapper">
        <Link to='/player/{id}'>
          <Image src={img3} circle='true' className="profile-pic" />
          </Link>
            <h3>Kato Moni</h3>


        </Col>
        <Col xs={12} sm={3} className="person-wrapper">
        <Link to='/player/{id}'>
          <Image src={img3} circle='true' className="profile-pic" />
          </Link>
          <h3>Kato Moni</h3>

        </Col>
      </Row>
      <Row className="text-center veiw-players">
        <Col>
          <Link to='team' className="links">
            <h5 className="text-center veiw-players">View all Players</h5>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}


export default HomeSummary;