import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import { Row, Col, Image, Container } from 'react-bootstrap'
import img1 from '../img/6.jpg'


const AllPlayers = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
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
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(AllPlayers)(PaperSheet);