import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom'
import { Jumbotron, Row, Col, Container, Image } from 'react-bootstrap'
import HomeSummary from './dashboards/homeSummary'
import startimesbadge from './img/startimesbadge.jpg';
// import { Avatar, Divider, Icon } from "antd";
import logo from "./img/logo.jpg";

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
            <Jumbotron className="text-center white">
              <h6>Up Coming Fixtures</h6>
              <Row className="show-grid">
              <Col xs={12} sm={4} className="team-logo text-center">
            </Col>
            <Col xs={12} sm={8} className="team-logo text-center">
            <Image src={logo} circle="true" className="logo-pic" />{""}<h5>VS</h5>{""}
            <Image src={startimesbadge} circle="true" className="logo-pic" />
            </Col>
            </Row>
              <h5>VIEW MATCH</h5>
            </Jumbotron>
            <Jumbotron className="grey text-white jumb">
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
            <Row className="show-grid">
              {/* <Col xs={12} sm={4} className="text-center">
                <h1>more</h1>
              </Col> */}
              <Col xs={12} sm={6} className="text-center">
                {/* <div className="fixture-list">
                  <h4>Match Day fixtures</h4>
                  <Divider>
                    <h6>Sunday 2, December 2018</h6>
                  </Divider>
                  <ul>
                    <li>
                      <a href="#">
                        {" "}
                        <section className="fixture-logo">
                          Katwe FC <Avatar src={logo} /> VS <Avatar src={startimesbadge} />{" "}
                          Buddu United
                        </section>
                        <small style={{ fontSize: "8px" }}>Startimes Staduim</small>
                        <small style={{ fontSize: "8px", float: "right" }}>
                          4pm, 1-12-218
                        </small>{" "}
                      </a>
                    </li>
                  </ul>
                </div> */}
              </Col>
            </Row>
            <HomeSummary />
            <Row className="show-grid">
            <Col xs={12} sm={6} className="team-logo text-center">
            <Image src={logo} circle="true" className="logo-pic" />{""}<h5>VS</h5>{""}
            <Image src={logo} circle="true" className="logo-pic" />
            </Col>
            <Col xs={12} sm={5} className="team-logo text-center">
            <Image src={logo} circle="true" className="logo-pic" />{""}<h5>VS</h5>{""}
            <Image src={startimesbadge} circle="true" className="logo-pic" />
            </Col>
            </Row>
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