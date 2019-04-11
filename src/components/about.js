import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fixtures from './dashboards/fixture.js'
// import { Link } from 'react-router-dom'
import { Jumbotron, Row, Col, Container, Image } from 'react-bootstrap'
import startimesbadge from './img/startimesbadge.jpg';
// import { Avatar, Divider, Icon } from "antd";
// import logo from "./img/logo.jpg";

const About = theme => ({
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
            <Container>
                <Paper className={classes.root} elevation={1}>
                    <Typography>
                        <Jumbotron className="grey text-grey white about">
                            <Row className="show-grid">
                                <Col xs={12} sm={5} className="team-logo text-center">
                                    <Image src={startimesbadge} circle="true" className="about-pic" />
                                </Col>
                                <Col xs={12} sm={6} className="team-logo">
                                    <p className="text-left text-grey">
                                        Permanent member clubs include FC Basel 1893, SV Werder Bremen, Bayer 04 Leverkusen,
                                        FK Austria Wien and Queens Park Rangers F.C. Our main mission is the Young Coach Education
                                        Program in which the clubs' instructors empower young women and men in their role as proactive community leaders.
                    </p>
                                </Col>
                            </Row>
                        </Jumbotron>
                        <Row className="show-grid">
                        <Col xs={12} sm={8} className="team-logo text-center">
                        <h1>Content</h1>
                        </Col>
                            <Fixtures />
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

export default withStyles(About)(PaperSheet);