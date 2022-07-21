import React from 'react';
import './footer.css'; 
import { FaGithub } from 'react-icons/fa';
import {IoLogoTwitter} from 'react-icons/io';
import { FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
   <section className="footer">
    <div className="copyright">
      <p> @copyright 2022.All rights reserved</p>
    </div>

    <div className="foot-links">
    <a className="linkedin" href="https://www.linkedin.com/in/mirriam-sikalume-560b99230/"><FaLinkedin/></a>
    <a className="twitter" href="https://twitter.com/Miricahjr?t=Y1Zl7b3COast3aLYBrP65Q&s=08"><IoLogoTwitter/></a>
    <a className="github" href="https://github.com/Mirriam6"><FaGithub/></a>
    </div>
   </section> 
   
  )
}

export default Footer;

// https://formspree.io/f/meqnygey