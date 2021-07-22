import React from "react"
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, Container, CardHeader, CardImg } from 'reactstrap';
const Blog = () => {
    return (
        <div className="container" id="blog">
            <Container>
                <br /><br />
                <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Blog</h2>
                <br />
                <Row className="center">
                    <Col md={4}>
                        <Card style={{ borderLeft: 'none', borderTop: 'none', borderBottom: 'none' }}>
                            <CardHeader className="ch center">
                                <CardImg src={"https://images.pexels.com/photos/326569/pexels-photo-326569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="card" />
                            </CardHeader>
                            <CardBody style={{ textAlign: 'center' }}>
                                <CardTitle style={{ textAlign: 'center', fontWeight: 'lighter' }} tag="h5">LOREM IPSUM DOLOR SIT AMET</CardTitle>
                                <CardSubtitle className="mb-2 text-muted">15 Jan,2015</CardSubtitle>
                                <CardText className="center">
                                    <p>
                                        lorem ipsum.Proin gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auctor.
                                    </p>
                                </CardText>
                                <Button style={{ width: '130px' }} className="btn2">READ MORE</Button>{' '}
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ borderTop: 'none', borderLeft: 'none', borderBottom: 'none' }}>
                            <CardHeader className="ch center">
                            <CardImg src={"https://images.pexels.com/photos/3784391/pexels-photo-3784391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="card" />
                            </CardHeader>
                            <CardBody style={{ textAlign: 'center' }}>
                                <CardTitle style={{ textAlign: 'center', fontWeight: 'lighter' }} tag="h5">LOREM IPSUM DOLOR SIT AMET</CardTitle>
                                <CardSubtitle className="mb-2 text-muted">15 Jan,2015</CardSubtitle>
                                <CardText className="center">
                                    <p>
                                        lorem ipsum.Proin gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auctor.
                                    </p>
                                </CardText>
                                <Button style={{ width: '130px' }} className="btn1">READ MORE</Button>{' '}
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ border: 'none' }}>
                            <CardHeader className="ch center">
                            <CardImg src={"https://images.pexels.com/photos/4790580/pexels-photo-4790580.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} alt="card" />
                            </CardHeader>
                            <CardBody style={{ textAlign: 'center' }}>
                                <CardTitle style={{ textAlign: 'center', fontWeight: 'lighter' }} tag="h5">LOREM IPSUM DOLOR SIT AMET</CardTitle>
                                <CardSubtitle className="mb-2 text-muted">15 Jan,2015</CardSubtitle>
                                <CardText className="center">
                                    <p>
                                        lorem ipsum.Proin gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auctor.
                                    </p>
                                </CardText>
                                <Button style={{ width: '130px' }} className="btn1">READ MORE</Button>{' '}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Blog;