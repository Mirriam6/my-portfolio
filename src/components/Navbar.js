import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import Humbergur from './Humbergur';
import './Navbar.css';

const Navbar = () => {

const [navbarOpen, setNavbarOpen] = useState(true);

const hundleNavbarToggle = () => {
setNavbarOpen(!navbarOpen)
if (navbarOpen) {
document.body.classList.add('active-nav');
} else {
document.body.classList.remove('active-nav');
}
}

const closeMobile = () => {
setNavbarOpen(!navbarOpen);
if (navbarOpen) {
document.body.classList.add('active-nav');
} else {
document.body.classList.remove('active-nav');
}
}


return (
<nav className="navbar">
<button className="humbergur" type="button" >
{navbarOpen ? <FaBars className="humb" onClick={()=> hundleNavbarToggle() }/> : <FaTimes className="close" onClick={() => hundleNavbarToggle() }/>}
</button>
<div>
{ !navbarOpen && <Humbergur isMobile={true} closeMobile={closeMobile}/> }
</div>
<div className="logo">Mirriam's Portfolio</div>
<div className="links">
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#portfolio">Portfolio</a>
<a href="#contact">Contact</a>
</div>
<div className="Resume">
<button className="resume-btn" type="button"><a href="https://drive.google.com/file/d/1IFoGJRGFj2MY-xy0n9KVNXkbADX96BaC/view?usp=sharing">Resume</a></button>
</div>

</nav>
)
}

export default Navbar;