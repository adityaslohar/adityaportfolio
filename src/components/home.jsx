// src/Home.js
import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import aditya from '../images/adi_port_sec1-img.png';
import adisec1bg from '../images/adi-port-sec1-bg.jpg'
import adi_sec2_img1 from '../images/adi-port-sec2-img1.jpg'
import adi_sec4_bg1 from '../images/adi-prd-sec4-bg1.png'

import adi_sec4_prj1 from '../images/adi-prd-sec4-row1-img1.png'
import adi_sec4_prj2 from '../images/adi-prd-sec4-row1-img2.png'
import adi_sec4_prj3 from '../images/adi-prd-sec4-row1-img3.png'

import Slider from "react-slick"; // <-- Add this import

function Home() {
  const skills = [
    { name: 'React', level: 80 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 75 },
    { name: 'Bootstrap', level: 70 },
    { name: 'C', level: 60 },
    { name: 'C++', level: 65 },
    { name: 'Java', level: 80 },
    { name: 'SQL', level: 75 },
    { name: 'GitHub', level: 70 }
  ];

  const openResume = () => {
    window.open('/Aditya_lohar1.pdf', '_blank');
  };
  const images = [
    { src: adi_sec4_prj1, info: "BrightLink Company Website" },
    { src: adi_sec4_prj2, info: "SalesOptim [CRM Web Application]" },
    { src: adi_sec4_prj3, info: "Nucleus Website [Landing Page]" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Java Full Stack",
      feedback: "From Seed Infotech Pune",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "",
      role: "Web Developer",
      feedback: "From SimpliLearn",
      image: "https://via.placeholder.com/100",
    }
  
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const completedProjects = 10;
  const experienceYears = 1;
  return (
    <>
      <div className='adi-port-sec1'>
        <div className='row m-0 p-0'>

          <div className='col-md-7 adi-port-sec1-sub-div'>
            <div className='adi-port-sec1-sub-div-main'>


              <p className='adi-port-sec1-sub-div-p1'>ADITYA S LOHAR</p>
              <p className='adi-port-sec1-sub-div-p2'>FRONT - END DEVELOPER | TEAM LEAD</p>
              <p className='adi-port-sec1-sub-div-p3'>Welcome to my portfolio! I am a passionate and skilled front-end developer with a strong background in computer science and engineering. Here, you will find information about my skills, experiences, and projects. Feel free to explore and get in touch!</p>
              <div className='adi-port-sec1-sub-div-btn-grp'>
{/* 
              <a href="/public/Aditya_lohar1.pdf" className="adi-port-sec1-sub-div-btn1"  >
  View_Resume
</a> */}
<button onClick={openResume} className="adi-port-sec1-sub-div-btn1">
  View Resume
</button>
                {/* <a className='adi-port-sec1-sub-div-btn2'>Contact</a> */}
                <Link to="/ContactMe" className='adi-port-sec1-sub-div-btn2'>Contact</Link>
              </div>
            </div>
          </div>

          <div className='col-md-5'>
            <img src={aditya} alt="" className='adi-prd-sec1-right-img' />
          </div>
        </div>
      </div>


      <div className='adi-port-sec2'>
        <div className='row p-0 m-0'>
          <div className='col-md-6'>
            <img src={adi_sec2_img1} className='adi-port-sec2-img1'></img>
          </div>
          <div className='col-md-6 adi-port-sec2-right'>

            <div className='adi-port-sec2-right-sub1'>
              <p className='adi-port-sec2-right-sub1-p1'>About Me</p>
              <p className='adi-port-sec2-right-sub1-p2'>Aditya Sunil Lohar</p>

              <p className='adi-port-sec2-right-sub1-p3'>I am a dedicated front-end developer with a B.Tech in Computer Science and Engineering, which I completed in October 2023. My journey in technology began with my academic background, where I gained a strong foundation in computer science principles and programming.</p>

              <p className='adi-port-sec2-right-sub1-p4'>After graduating, I pursued a comprehensive course in Java Full Stack Development, enhancing my skill set in both front-end and back-end technologies. This training paved the way for my professional career at Brightlink Info Technology Pvt. Ltd., where I completed a four-month internship.</p>

              <p className='adi-port-sec2-right-sub1-p5'>Post-internship, I transitioned into a full-time role as a Front-End Developer and currently serve as the Team Lead for the front-end development team. In this role, I lead and mentor a group of talented developers, driving the creation of dynamic and user-friendly web applications.</p>


            </div>

          </div>
        </div>

      </div>

      <div className='adi-prd-sec3'>
        <p className='adi-prd-sec3-title1'>My Technicak Skills</p>

        {/* <div className="skills">
   
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <h4>{skill.name}</h4>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${skill.level}%` }}
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {skill.level}%
              </div>
            </div>
          </div>
        ))}
      </div> */}

        <div className="skills">

          <div className="container">
            <div className="row adi-prd-skill-sec-row1">
              {skills.map((skill, index) => (
                <div key={index} className="col-md-5 mb-4 adi-prd-sec3-cards">
                  <div className="skill">
                    <h4>{skill.name}</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${skill.level}%` }}
                        aria-valuenow={skill.level}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {skill.level}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



      </div>

      <div className='adi-prd-sec4'>
        <div className="adi-prd-sec4-sub">
          <p className='adi-prd-sec4-sub-p1'>Awsome projects</p>
          <p className='adi-prd-sec4-sub-p2'>I have done many latest projects</p>
        </div>


        <div className="adi-prd-sec4-sub1">

          <div className="row p-0 m-0 w-100 adi-prd-sec4-row1">
            {images.map((image, index) => (
              <div
                className={`col-md-4 img-container adi-prd-sec4-row1-${index + 1}`}
                key={index}
              >
                <img src={image.src} alt={`Project ${index + 1}`} className="img" />
                <div className="info-container">
                  <div className="info">{image.info}</div>
                </div>
              </div>
            ))}
          </div>

        </div>

            <div className='adi-port-sec4-btn-div'>
            <Link to="/projects" className='adi-port-sec4-btn1'>View More Projects</Link>
            </div>

      </div>



      {/* Testimonials Carousel Section */}
      <section className="testimonials-section">
        <p className='testimonials-section-p1'>Certification</p>
        {/* <p className='testimonials-section-p2'> What People Say</p> */}
        <Slider {...carouselSettings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              {/* <p>{testimonial.feedback}</p> */}
              <div className="testimonia-info">
                
                <div className="details">
                  <h3 className='text-center w-100'>{testimonial.role}</h3>
                  <p className='text-center w-100'>{testimonial.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className="adi-prd-progress-section">
        <div className="row m-0 p-0 w-100">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className='adi-prd-expe-circle' style={{ width: 150, height: 150 }}>
              <CircularProgressbar
                value={completedProjects}
                text={`${completedProjects}+`}
                maxValue={10}
                styles={buildStyles({
                  textColor: "#cdb30c",
                  pathColor: "#cdb30c",
                  trailColor: "#f5f5f5",
                  textSize: "16px",
                })}
              />
              <div className="text-center mt-2 adi-prd-progress-sec-p1">Completed Projects</div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div className='adi-prd-expe-circle' style={{ width: 150, height: 150 }}>
              <CircularProgressbar
                value={experienceYears}
                text={`${experienceYears}+`}
                maxValue={5}
                styles={buildStyles({
                  textColor: "#cdb30c",
                  pathColor: "#cdb30c",
                  trailColor: "#f5f5f5",
                  textSize: "16px",
                })}
              />
              <div className="text-center mt-2 adi-prd-progress-sec-p2">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>


      <section>
              <div className="adi-prd-footer">
                
              </div>    
      </section>

    </>
  );
}

export default Home;
