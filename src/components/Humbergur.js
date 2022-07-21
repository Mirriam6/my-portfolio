import React from 'react';
import './Humbergur.css';

const Humbergur = (props) => {
return (
<>
<div className="mobile">
<div className="m-links">
<a onClick={() => props.isMobile && props.closeMobile() } href="#home">Home</a>
<a onClick={() => props.isMobile && props.closeMobile() } href="#portfolio">Portfolio</a>
<a onClick={() => props.isMobile && props.closeMobile() } href="#about">About</a>
<a onClick={() => props.isMobile && props.closeMobile() } href="#contact">Contact</a>
</div>
</div>
</>
)
}
export default Humbergur;