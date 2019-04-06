import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Row, Col, Image, Container } from 'react-bootstrap'
import img1 from '../img/4.jpg'


const PlayerInfor = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;
  const id = props.match.params.id;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography>
        <Container>
            <Row className="show-grid">
                <Col xs={12} sm={4} className="person-wrapper infor">
                    <Image src={img1} circle="true" className="profile-pic" />
                </Col>
                <Col xs={12} sm={5} className="person-wrapper infor">
                   <ul>
                       <li>
                           Name : {id}
                       </li>
                       <li>
                           Age :
                       </li>
                       <li>
                           Nationality :
                       </li>
                       <li>
                           Position :
                       </li>
                       <li>
                           Shirt No. :
                       </li>
                       <li>
                           Foot :
                       </li>
                       <li>
                           Former Club :
                       </li>
                   </ul>
                   <div className="card z-depth-0">
                   <span className="card-title">Blog</span>
                   <p> Permanent member clubs include FC Basel 1893, SV Werder Bremen, Bayer 04 Leverkusen,
                  FK Austria Wien and Queens Park Rangers F.C. Our main mission is the Young Coach Education</p>
                  </div>
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

export default withStyles(PlayerInfor)(PaperSheet);