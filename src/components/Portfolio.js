import React from 'react';
import './Portifolio.css';
import articles from '../images/article.png';
import foodbag from '../images/foodbag.png';
import careers from '../images/careers.png';
import agrifine from '../images/agrifine.png';

const Project = [
  {
    title: "Food Bag E-commence website", description: "This is an E-commerce website that provide a platform where different types of users are able to browse through and buy different types of fast foods on the market. The system also provides an online payment system where customers are able to pay.",
    img: foodbag, live: "", source: "", tech: ["CSS", "Html", "JavaScript", "React"]
  },
  {
    title: "Article Publishing Endpoints", description: "Being a diligent, hardworking and result oriented lady, I always work towards achieving best result on each project I lay my hands on.",
    img: articles, live: "", source: "", tech: ["SlimPHP"]
  },

  {
    title: "TechGrow E-Leaning website", description: "This is an E-learning website that sets as a guide to the students to how to go about in the tech industry. It outlines and explains in details on almost every fieled of tech and its benefits hence offering tech career guidance .",
    img: careers, live: "", source: "", tech: ["CSS", "Html", "JavaScript"]
  },
  {
    title: "Agrifine Figma Design", description: "This is a moblile view figma design for Agrifine an agricultural information system that provides different services to the farmers and a market place that enbles them to sell their produce, the services include wealther guidance among many others, .",
    img: agrifine, source: "", tech: ["Figma"]
  },
]

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio" id="portfolio">
        <h1 className="portfolio-h">My Portfolio</h1>
        {
          Project.map((project) =>
            <div className="my-portfolio">
              <div className="project-details">
                <h1 className="title">{project.title}</h1>
                <a className="links" href={project.live}>Live Link</a>
                <a className="links" href={project.source}>Source Code</a>
                <p className="descrpt">{project.description}</p>
                <div className="tech-list">
                  <span className="tech-item">{project.tech[0]}</span>
                  <span className="tech-item">{project.tech[1]}</span>
                  <span className="tech-item">{project.tech[2]}</span>
                </div>
              </div>
              <div className="img-div">
                <img className="img" src={project.img} alt="" />
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Portfolio;