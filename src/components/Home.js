import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom'
import { Jumbotron, Row, Col, Container } from 'react-bootstrap'
import HomeSummary from './dashboards/homeSummary'

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
    <React.Fragment>
    <div id="banner">
          <h3>WELCOME TO</h3>
          <h1>. POLICE FC .</h1>
          <p>Here you will find everything about Police FC. Pure emotions, latest news, statisctics in details and much more.</p>
          <button className="learn_more">LEARN MORE</button>
        </div>
    <Container>
      <Paper className={classes.root} elevation={1}>
        <Typography>
          <Jumbotron className="grey text-white">
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
                    <button className="learn_more">LEARN MORE</button>{' '}
              </Col>
            </Row>
          </Jumbotron>
          <HomeSummary />
        </Typography>
      </Paper>
    </Container>
    </React.Fragment>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(Home)(PaperSheet);