import React from "react"
import "../App.css"
import { FaFacebook,FaTwitter,FaInstagram,FaGithub,FaLinkedin,FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <br/>
            <div className="container2"></div>
            <footer>
                <section className="ft-main">
                    <div className="ft-main-item">
                        <h2 className="ft-title">About</h2>
                        <ul>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Resources</h2>
                        <ul>
                            <li><a href="#">Docs</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">eBooks</a></li>
                            <li><a href="#">Webinars</a></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Contact</h2>
                        <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">Advertise</a></li>
                        </ul>
                    </div>

                </section>


                <section className="ft-social">
                    <ul className="ft-social-list">
                        <li><a href="#"><FaFacebook/></a></li>
                        <li><a href="#"><FaTwitter/></a></li>
                        <li><a href="#"><FaInstagram/></a></li>
                        <li><a href="#"><FaGithub/></a></li>
                        <li><a href="#"><FaLinkedin/></a></li>
                        <li><a href="#"><FaYoutube/></a></li>
                    </ul>
                </section>

                <section className="ft-legal">
                    <ul className="ft-legal-list">
                        <li><a href="#">Terms &amp; Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li>&copy; 2021 No copyright.</li>
                    </ul>
                </section>
            </footer>
        </div>
    )
}

export default Footer;