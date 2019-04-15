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
          <span className="section-heading">OUR CLUB PLAYERS</span>
        </Col>
      </Row>
      <Row className="text-center">
        <Col xs={12} sm={3} className="person-wrapper">
        <Link to='/player/{id}'>
          <Image src={img1} circle='true' className="profile-pic" />
          </Link>
          <h6>Kato Moni</h6>

        </Col>
        <Col xs={12} sm={3} className="person-wrapper">
        <Link to='/player/{id}'>
          <Image src={img2} circle='true' className="profile-pic" />
          </Link>
          <h6>Kato Moni</h6>

        </Col>
        <Col xs={12} sm={3} className="person-wrapper">
        <Link to='/player/{id}'>
          <Image src={img3} circle='true' className="profile-pic" />
          </Link>
            <h6>Kato Moni</h6>


        </Col>
        <Col xs={12} sm={3} className="person-wrapper">
        <Link to='/player/{id}'>
          <Image src={img3} circle='true' className="profile-pic" />
          </Link>
          <h6>Kato Moni</h6>

        </Col>
      </Row>
      <Row className="text-center ">
        <Col>
          <Link to='team' className="links">
            <span className="text-center">View all Players</span>
          </Link>
        </Col>
      </Row>
    
      <Row className="text-left">
      <span className="card-title">Posts</span>
        <Col xs={12} sm={7} className="section">
        <div className="card">
        <div className="card-image">
        <img src={img3} alt=""></img>
        </div>
        <div className="card-news">
        FK Austria Wien and Queens Park Rangers F.C. Our main mission is the Young Coach Education
        Program in which the clubs' instructors empower
        </div>
        </div>
        </Col>
        <Col xs={12} sm={4} className="section">

        </Col>
        </Row>

    </Container>
  );
}


export default HomeSummary;