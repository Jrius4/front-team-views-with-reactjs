import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import getPlayer from '../../store/actions/playerActions'
import { Row, Col, Image, Container } from 'react-bootstrap'
import img1 from '../img/6.jpg'
import img2 from '../img/5.jpg'
import img3 from '../img/4.jpg'

const AllPlayers = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 0,
    paddingBottom: theme.spacing.unit * 0,
  },
});

function PaperSheet(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography>
          <Container>
            <Row className="text-center">
              <Col>
                <h2>Our Team</h2>
              </Col>
            </Row>
            <Row className="show-grid text-center">
              <Col xs={12} sm={4} className="person-wrapper">
              
              </Col>
            <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img1} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img2} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              
              </Col>
              </Row>
              <Row className="show-grid text-center">
              <Col xs={12} sm={3} className="person-wrapper">
              
              </Col>
            <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img1} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img2} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img3} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              
              </Col>
              </Row>
              <Row className="show-grid text-center">
              <Col xs={12} sm={2} className="person-wrapper">
              
              </Col>
            <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img1} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img2} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img3} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img1} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={1} className="person-wrapper">
              
              </Col>
              </Row>
              <Row className="show-grid text-center">
              <Col xs={12} sm={1} className="person-wrapper">
              
              </Col>
            <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img1} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img2} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img3} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img1} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img2} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={1} className="person-wrapper">
              
              </Col>
              </Row>
            <Row className="show-grid text-center">
            <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img1} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img2} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img3} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img1} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img2} className="profile-pic" />
                </Link>
                  <h6>Kato Moni</h6>
              </Col>
              <Col xs={12} sm={2} className="person-wrapper">
              <Link to='/player/{id}'>
                <Image src={img3} className="profile-pic" />
                </Link>
                <hr />
                  <h6>Kato Moni</h6>
              </Col>
              </Row>
          
          
              
          
          </Container>
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(AllPlayers)(PaperSheet);