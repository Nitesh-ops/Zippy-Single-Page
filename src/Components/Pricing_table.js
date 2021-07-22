import React from "react"
import { Card, CardText, CardBody, CardTitle, Button, Row, Col, Container, CardHeader } from 'reactstrap';

import '../App.css'
import "bootstrap/dist/css/bootstrap.min.css";
const PricingTable = () => {
    return (
        <div id="pricing">
            <br /><br />
            <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Pricing Table</h2>
            <br />
            <Container>
                <Row className="center">
                    <Col md={4}>
                        <Card style={{ borderLeft: 'none', borderTop: 'none', borderBottom: 'none' }}>
                            <CardHeader className="ch center">STANDARD PLAN</CardHeader>
                            <CardBody style={{ textAlign: 'center' }}>
                                <CardTitle style={{ textAlign: 'center', fontWeight: 'lighter' }} tag="h5">Free</CardTitle>
                                <CardText className="center">
                                    <p>
                                        2 GB Available<br />
                                        15 max contacts<br />
                                        30 Messages/Month<br />
                                        Disgusting Ads
                                    </p>
                                </CardText>
                                <Button style={{ width: '100px' }} className="btn2">BUY</Button>{' '}
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ borderTop: 'none', borderLeft: 'none', borderBottom: 'none' }}>
                            <CardHeader className="ch center">BUSINESS PLAN</CardHeader>
                            <CardBody style={{ textAlign: 'center' }}>
                                <CardTitle style={{ textAlign: 'center', fontWeight: 'lighter' }} tag="h5">19$/MONTH</CardTitle>
                                <CardText>
                                    <p>
                                        10 GB Available<br />
                                        35 max contacts<br />
                                        120 Messages/Month<br />
                                        Ads Free
                                    </p>
                                </CardText>
                                <Button style={{ width: '100px' }} className="btn1">BUY</Button>{' '}
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card style={{ border: 'none' }}>
                            <CardHeader className="ch center" >PREMIUM PLAN</CardHeader>
                            <CardBody style={{ textAlign: 'center' }}>
                                <CardTitle style={{ textAlign: 'center', fontWeight: 'lighter' }} tag="h5" >14$/MONTH</CardTitle>
                                <CardText>
                                    <p>
                                        100 GB Available<br />
                                        Unlimited contacts<br />
                                        Unlimited Messages/Month<br />
                                        Ads Free
                                    </p>
                                </CardText>
                                <Button style={{ width: '100px' }} className="btn1">BUY</Button>{' '}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default PricingTable;