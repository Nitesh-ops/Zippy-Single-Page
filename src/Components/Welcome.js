import React from "react"

import {Card, CardText, CardBody,CardTitle, Button,Row,Col,Container,CardHeader} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'
import umbrella from "../images/umbrella.png"
import { IoNotificationsCircle } from "react-icons/io5";
import { ImMail4 } from "react-icons/im";
import { FaStumbleuponCircle } from "react-icons/fa";




const Welcome =()=>{
    return(
        <div className="container we1">
            <h2 style={{fontWeight:'bold',textAlign:'center'}}>Welcome to Zippy</h2>

            <div className="row center">
            <div className="col-md-6 ">
                <div className="infoText">
                <br/><br/>
                    <h2 className="text-wrap" style={{color:'gray'}}>This is the photoshop's version of lorem ipsum.Proin gravida nibh vel velit auctor aliquet.Aenean sollicitudin, lorem quis bibendum auctor.</h2>
                </div>
            </div>
            <div className="col-md-6 center">
                <div className="infoText">
                <br/><br/>
                    <img src={umbrella} alt="umbrella_logo" style={{height:'250px',paddingLeft:'70px'}} />
                </div>
            </div>
             </div>
             <div>
                 <Container>
                     <Row className="center">
                         <Col md={4}>
                         <Card style={{border:'none'}}>
                            <CardHeader className="ch center"><IoNotificationsCircle size={100} color='#61497B'/></CardHeader>
                                <CardBody style={{textAlign:'center'}}>
                                    <CardTitle tag="h5">LOREM IPSUM</CardTitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Button className="btn2">LEARN MORE</Button>{' '}
                                </CardBody>
                         </Card>
                         </Col>
                         <Col md={4}>
                         <Card style={{border:'none'}}>
                         <CardHeader className="ch center"><ImMail4 size={100} color='#61497B'/></CardHeader>
                                <CardBody style={{textAlign:'center'}}>
                                    <CardTitle sty={{textAlign:'center'}} tag="h5">LOREM IPSUM</CardTitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Button className="btn1">LEARN MORE</Button>{' '}
                                </CardBody>
                         </Card>
                         </Col>
                         <Col md={4}>
                         <Card style={{border:'none'}}>
                         <CardHeader className="ch center" ><FaStumbleuponCircle size={100} color='#61497B'/></CardHeader>
                                <CardBody style={{textAlign:'center'}}>
                                    <CardTitle tag="h5">LOREM IPSUM</CardTitle>
                                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        <Button className="btn1">LEARN MORE</Button>{' '}
                                </CardBody>
                         </Card>
                         </Col>
                     </Row>
                 </Container>
                
             </div>
        </div>
    )
}

export default Welcome;