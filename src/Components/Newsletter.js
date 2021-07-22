import React from "react"
import '../App.css'
import { Form, FormGroup,  Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NewsLetter = () => {
    return (
        <div className="container2">
            <br /><br />
            <h2 style={{ fontWeight: 'bold', textAlign: 'center' }}>Newsletter Signup</h2>
            <br />
            <img src="https://images.unsplash.com/photo-1542608719-0f9f792b2308?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2060&q=80" alt="bridge" width="100%" height="250" className="bridge" />
            <Form className="form">
                    <FormGroup className="fg">
                            <center><Input type="text" id="name" placeholder="abc@example.com" size={80} className="inputbox" /></center>
                            <Button color="success">SIGN UP</Button>{' '}
                    </FormGroup>
            </Form>
        </div >
    )
}

export default NewsLetter;