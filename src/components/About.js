import React from 'react';
import './About.css';
import {FaCubes, FaPencilRuler}  from "react-icons/fa";
import { FaCode } from 'react-icons/fa';


const arr1 = [
  {title:"Product Design", icon: <FaCubes className="cubes"/> , descrpt:"I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and usable products which aid business growth."},
  {title:"Website Development", icon: <FaCode className="code"/>, descrpt:"I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts."},
  {title:"ICT Teacher", icon:<FaPencilRuler className="pen"/> , descrpt:"I instruct in a manner that developsstudents confidence in their abilities. Observing and managing classroom dynamics, invigilating and grading lessons as well as student's advancement throughout the course."}
];

const arr2 = [
  {title:"Discover", icon: <FaCubes className="cubes"/> , descrpt:"I conduct user research to identify the problem I want to solve."},
  {title:"define", icon: <FaCode className="code"/>, descrpt:"I brainstorm possible design solutions to the identified problem."},
  {title:"Prototype", icon:<FaPencilRuler className="pen"/> , descrpt:"I create wireframes and sketches of the product I’m about to design."},
  {title:"Implement", icon:<FaPencilRuler className="pen"/> , descrpt:"I create high fidelity design and prototype the screens."},
  {title:"Ideate", icon:<FaPencilRuler className="pen"/> , descrpt:"After designing, I deliver for implementation."}
]

const About = () => {
  return (
    <>
    <section className="about" id="about">
      <div className="about-infor">
        
        <h2 className="abt-head">About Me</h2>
        <article className="about-intro-div">
          <p className ="intro-abt">
          I’m Mirriam Sikalume, a professional and talented Product 
          Designer with front end web development skills. I am passionate 
          about leveraging my diverse backgrounds to decipher challenging
           problems and create delightful experiences. I'm skilled 
           at web development and product design.

            I develop websites with HTML, CSS, JavaScript, React and PHP. I have top skills in 
            using design softwares like Figma and PhotoShop.
          </p>
          <p className="intro-abt">
          Being a diligent, hardworking and result oriented lady,
           I always work towards achieving best result on each project I lay my hands on.
          </p>
        </article>
        <a className="resume-btn-r" href="https://drive.google.com/file/d/1IFoGJRGFj2MY-xy0n9KVNXkbADX96BaC/view?usp=sharing">Get my Resume</a>
      </div>
      <section className="services">
        <h1 className="service-title">My Services</h1>
        <div className="cards">
          {
            arr1.map((item)=> 
              <div className="s-card">
              <span>{item.icon}</span>
              <h2 className="card-1">{item.title}</h2>
              <p className="card-intro">{item.descrpt}</p>
            </div>
            )
          }
        </div>
      </section>
      
      <section className="work-proces">
        <div className="cards">
          {
            arr2.map((item)=> 
              <div className="s-card2">
              <span>{item.icon}</span>
              <h2 className="card-2">{item.title}</h2>
              <p className="card-intro-process">{item.descrpt}</p>
            </div>
            )
          }
        </div>
      </section>
    </section>
    </>
  )
}

export default About;