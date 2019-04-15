import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import logo from '../img/logo.jpg';
import startimesbadge from '../img/startimesbadge.jpg';
// import { Link } from 'react-router-dom'

const Fixtures = () => {
    return (
        <div className="fixture section">
            <table>
                <th>fixtures</th>
                <tr>
                    <td>
                    <Row className="show-grid">
              <Col xs={12} sm={4} className="team-logo text-center">
            </Col>
            <Col xs={12} sm={8} className="team-logo text-center">
                <Image src={logo} circle="true" className="logo-pic" />{""}<h5>VS</h5>{""}
            <Image src={startimesbadge} circle="true" className="logo-pic" />
                </Col>
            </Row>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Fixtures