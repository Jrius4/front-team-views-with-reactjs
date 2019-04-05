import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import { Jumbotron, Row, Col, Image, Button, Container } from 'react-bootstrap'
import img1 from './img/4.jpg'
import img2 from './img/5.jpg'
import img3 from './img/6.jpg'


const Home = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <Container>
      <Paper className={classes.root} elevation={1}>
        <Typography>
        <Jumbotron className="black text-white">
          <Row className="show-grid">
          <Col xs={12} sm={6} className="text-center">
             
            </Col>
            <Col xs={12} sm={6} className="text-left">
              <span className="title">
                THE FOOTBALL CLUB SOCCER TEAM UNITES PROFESSIONAL EUROPEAN FOOTBALL
                  </span>
              <p className="text-left text-grey">
                Permanent member clubs include FC Basel 1893, SV Werder Bremen, Bayer 04 Leverkusen,
                FK Austria Wien and Queens Park Rangers F.C. Our main mission is the Young Coach Education
                Program in which the clubs' instructors empower young women and men in their role as proactive community leaders.
                    </p>
            </Col>
          </Row>
        </Jumbotron>
        <Row className="text-center">
          <Col>
            <h2>Our Players</h2>
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
            <Link to='player'>
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
        </Typography>
      </Paper>
    </Container>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Home)(PaperSheet);