import React from 'react'
import { Jumbotron, Row, Col, Image, Button, Container } from 'react-bootstrap'
import img1 from '../img/4.jpg'

const PlayerInfor = (props) => {
    const id = props.match.params.id;
    console.log(props)
    return (
        <Container>
            <Row className="show-grid text-center">
                <Col xs={12} sm={3} className="person-wrapper">
                    <Image src={img1} circle="true" className="profile-pic" />
                    <h3>Kato Moni - {id}</h3>
                    <p>Summary Information about Kato</p>
                </Col>
            </Row>
        </Container>
    )
}

export default PlayerInfor;