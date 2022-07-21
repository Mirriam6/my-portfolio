import React from 'react';
import './contact.css';
import { MdEmail, MdLocationPin, MdPhone} from 'react-icons/md';
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
    return (
        <div>
            <section className="main-cont" id="contact">
                <h1 className="cont-title">Get in Touch</h1>
                <p className="cont-intro">
                    I am available to work on your projects
                    and bring your ideas to life. I am just a click away.</p>
                <section className="contact-section">
                    <div className="cont-details">
                        <div className="details">
                            <div className="icons"><MdLocationPin className="icon"/></div>
                            <h1 className="location">Lusaka, Zambia</h1>
                        </div>
                        <div className="details">
                            <div className="icons"><MdEmail className="icon"/></div>
                            <a className="location a" href="mailto:mirriammlaliki640@gmail.com"> mirriammlaliki640@gmail.com </a>    
                        </div>
                        <div className="details">
                            <div className="icons"><MdPhone className="icon"/></div>
                            <h1 className="location">
                            <a href="tel:+260975229005" alt="+260 975 229 005"> 
                                +260 975 229 005
                            </a>
                            </h1>
                            
                        </div>
                        <div className="details">
                            <div className="icons"><GoMarkGithub className="icon"/></div>
                            <h1 className='location'>
                                <a href="https://github.com/Mirriam6" alt="https://github.com/Mirriam6"> 
                                    Github
                                </a>
                            </h1>
                        </div>

                        <div className="details">
                            <div className="icons"><AiFillLinkedin className="icon"/></div>
                            <h1 className='location'>
                                <a  href="https://www.linkedin.com/in/mirriam-sikalume-560b99230/" 
                                    alt="https://www.linkedin.com/in/mirriam-sikalume-560b99230/"> 
                                    linkedin
                                </a>
                            </h1>
                        </div>

                    </div>
                </section>
            </section>
        </div>
    )
}

export default Contact