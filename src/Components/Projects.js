import React from "react"
import { Card, CardText, CardBody, CardTitle, Button, Row, Col, Container, CardImg } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'
import project1 from "../images/project1.jpg"
import project2 from "../images/project2.jpg"
import project3 from "../images/project3.jpg"
import project4 from "../images/project4.jpg"

const Projects = () => {
    return (
        <Container id="projects">
            <br /><br />
            <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Projects</h2>
            <br />
            <div class="con">
                <Row>
                    <Col md={3}>
                        <Card className="card_body">
                            <CardImg variant="top" src={project1} height="350px"/>
                            <CardBody>
                                <CardTitle className="card_title">PROJECT NAME</CardTitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </CardText>
                                <Button className="btnn" variant="primary">LAUNCH CASE STUDY</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="card_body">
                            <CardImg variant="top" src={project2} height="350px"/>
                            <CardBody>
                                <CardTitle className="card_title">PROJECT NAME</CardTitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </CardText>
                                <Button className="btnn" variant="primary">LAUNCH CASE STUDY</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="card_body">
                            <CardImg variant="top" src={project3} height="350px" />
                            <CardBody>
                                <CardTitle className="card_title">PROJECT NAME</CardTitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </CardText>
                                <Button className="btnn" variant="primary">LAUNCH CASE STUDY</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="card_body">
                            <CardImg variant="top" src={project4} height="350px"/>
                            <CardBody>
                                <CardTitle className="card_title">PROJECT NAME</CardTitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </CardText>
                                <Button className="btnn" variant="primary">LAUNCH CASE STUDY</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container >
    )
}

export default Projects;