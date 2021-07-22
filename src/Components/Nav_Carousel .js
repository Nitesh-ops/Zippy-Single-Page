import React,{useState} from "react"
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Button,
    NavLink
    } from "reactstrap";

    import {Link} from "react-scroll"

    import Carousel from 'react-bootstrap/Carousel' 
    import "bootstrap/dist/css/bootstrap.min.css";
    import Carousel1 from '../images/Carousel1.jpg'
    import Carousel2 from '../images/Carousel2.jpg'
    import Carousel3 from '../images/Carousel3.jpg'
    import '../App.css'
    
const NavCarousel =(props)=>{
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return( 
      <>
        <div className="container1" id="home">
        <Navbar color="transparent" light expand="lg">
        <NavbarBrand className="zippy" style={{color:'white'}} href="/"><h3>ZIPPY</h3> </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar-brand mx-auto" navbar>
            <NavItem>
              <NavLink><Link to="home"><span className="li">HOME</span></Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to="projects"><span className="li">PROJECTS</span></Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to="pricing"><span className="li">PRICING</span></Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to="team"><span className="li">TEAM</span></Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to="blog"><span className="li">BLOG</span></Link></NavLink>
            </NavItem>
            <NavItem>
            <NavLink><Link to="contact"><span className="li">CONTACT</span></Link></NavLink>
            </NavItem>
            </Nav>
        </Collapse>
      </Navbar>
      <Carousel nextIcon="" prevIcon="" style={{position:'absolute'}}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 car "
          src={Carousel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 car"
          src={Carousel2}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 car"
          src={Carousel3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      <div className="Carousel-content">
      <div className=".col-">

        <div className="col-md-7 ">
          <div className="infoText">
            <h1>One page promising to fill all your needs!</h1>

            <span></span>
            <p className="text-wrap" style={{fontSize:'10',color:'whitesmoke'}}>This is the photoshop's version of lorem ipsum.Proin gravida nibh vel velit auctor aliquet.</p>

            <span></span>
            <div className="mb-2">
            <Button className="btn1">LEARN MORE</Button>{' '}
            <Button className="btn2">LEARN MORE</Button>{' '}
            </div>
            <p></p>
            

          </div>
        </div>

      </div>

    </div>
    </div>
      </>
        
    )
}

export default NavCarousel;