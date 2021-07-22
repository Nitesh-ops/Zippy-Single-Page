import React, { Component } from "react"
import { Button, Row, Col, Form, FormGroup, FormLabel } from 'reactstrap';

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
    <div>
      {text}
    </div>
  );

class ContactUs extends React.Component {
    static defaultProps = {
        center: { lat: 59.95, lng: 30.33 },
        zoom: 11
    };
    render() {
        return (
            <div className="container" id="contact" >
                <Row>
                    <Col md={6}>
                        <div style={{ height: '80vh', width: '100%' }}>
                            <GoogleMapReact
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                            >
                                <AnyReactComponent
                                    lat={59.955413}
                                    lng={30.337844}
                                    text={'Kreyser Avrora'}
                                />
                            </GoogleMapReact>
                        </div>
                    </Col>
                    <Col md={6} style={{ backgroundColor: "#FDE566" }}>
                        <br />
                        <h1 style={{ fontWeight: 'bolder' }}>Contact</h1>

                        <form>
                            <label for="fname" className="label">NAME</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.." className="inp" />

                            <label for="lname">EMAIL ADDRESS</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" className="inp" />


                            <label for="subject">SUBJECT</label>
                            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "200px" }}></textarea>

                            <input type="submit" value="Submit" />
                        </form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ContactUs