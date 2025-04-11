import React from 'react'
import '../components/aboutMe.css';
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";


import { Parallax } from "react-scroll-parallax";
function AboutMe() {


  return (
    <div>

      <section className='adi-prj-about-sec1'>
        <div className="adi-prj-about-sec1-sub1">


          <div class="container h-100">
            <div class="row no-gutters slider-text align-items-end h-100">
              <div class="col-md-9 pb-5">
                <p class="breadcrumbs adi-port-contact-section1-sub1-p1"><span class="mr-2"><a href="index.html" className="adi-port-contact-section1-sub1-a1">Home <i class="fa fa-chevron-right"></i></a></span> <span>About Me <i class="fa fa-chevron-right"></i></span></p>

                <h1 class="mb-0 bread adi-port-contact-section1-sub1-title1">ABOUT ME</h1>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className='adi-prj-about-sec2'>
        <p className="adi-prj-abt-sec2-p1">INTRO</p>
        <p className='adi-prj-abt-sec2-p2'>
          Hello! I’m <strong>Aditya Sujata Sunil Lohar</strong>, a passionate Front-End Developer from Sangli, currently based in Pune, Maharashtra.
          I started my journey at <strong>BrightLink Info Technologies Pvt. Ltd.</strong> on December 12, 2023, as an intern. After successfully completing a 4-month internship, I was hired as a full-time Front-End Developer. With dedication and continuous learning, I was promoted to <strong>Team Lead</strong> in just four months. Today, I have <strong>over a year of professional experience</strong> in front-end development.

          As a team leader, I’ve had the opportunity to participate in client meetings, which has helped me develop valuable skills in communication, problem-solving, and handling critical situations effectively.

          <br /><br />
          <strong>Educational Background:</strong>
          - I completed my <strong>B.Tech in Computer Science and Engineering</strong> from **Sharad Institute College of Engineering, Yadrav, Ichalkaranji (2023)** with an **8.0 CGPA**.
          - I also earned my **Diploma in Computer Engineering** from **Padmabhooshan Vasantraodada Patil Institute of Technology** with **80% marks**.

          <br />
          <strong>Hobbies & Passion:</strong>
          Traveling is an essential part of my life. Whenever I feel stressed, I take long bike rides, which help me refresh and refocus. One of my biggest dreams is to embark on a bike trip to **Ladakh** within the next **2 to 4 years**.

          <br /><br />
          I believe in continuous learning, pushing boundaries, and creating seamless digital experiences. Let’s connect and build something amazing together! 🚀
        </p>
      </section>

      <section className='adi-prj-about-sec3'>
        <p class="adi-prj-about-sec3-p1">PROFESSIONAL EXPERIENCE</p>



        <div className="row p-0 m-0">
          <div className="col-md-6">
            <p class="adi-prj-about-sec3-p2">Front-End Developer Team Lead</p>
            <p className='adi-prj-about-sec3-p4'>BrightLink Info Technologies Pvt. Ltd.</p>
          </div>
          <div className="col-md-6 adi-prj-abt-sec3-row1-col2">
            <p className='adi-prj-about-sec3-p3'>April 12, 2024 – Present</p>


          </div>
        </div>


        <div className="adi-prj-about-sec3-1sexp">
          <ul className="adi-prj-about-sec3-1sexp-ul">
            <li>Led a team of 7 front-end developers, managing project timelines, ensuring code quality, and maximizing team productivity.</li>
            <li>Actively participated in client meetings to gather requirements, provide project updates, and ensure alignment with client expectations.</li>
            <li>Strengthened communication and collaboration with clients, resulting in successful and timely project deliveries.</li>

            <li>Delivered multiple high-quality projects for diverse domains, handling both technical implementation and client coordination.</li>

            <li>Collaborated with UX/UI designers and back-end developers to build responsive, interactive web applications.</li>

            <li>Implemented new features and optimized performance using React and other modern front-end technologies.</li>

            <li>Conducted thorough code reviews and mentored junior developers to uphold high coding standards and promote professional growth.</li>
          </ul>
        </div>


        <div className="row p-0 m-0">
          <div className="col-md-6">
            <p class="adi-prj-about-sec3-p2">Front-End Developer Intern</p>
            <p className='adi-prj-about-sec3-p4'>BrightLink Info Technologies Pvt. Ltd.</p>
          </div>
          <div className="col-md-6 adi-prj-abt-sec3-row1-col2">
            <p className='adi-prj-about-sec3-p3'>December 12, 2023 – April 12, 2024</p>


          </div>
        </div>



        <div className="adi-prj-about-sec3-1sexp">
          <ul className="adi-prj-about-sec3-1sexp-ul">
            <li>Developed and maintained the company’s official website using React, significantly enhancing user experience and interface quality.</li>
            <li>The revamped website played a key role in increasing client engagement and trust in the company’s digital presence.</li>

            <li>Focused on responsiveness, performance, and cross-browser compatibility for a seamless user experience.</li>

            <li>Participated in agile workflows through daily stand-ups, sprint planning, and retrospectives.</li>

            <li>Utilized HTML, CSS, and JavaScript to build clean, accessible, and user-friendly components.</li>


          </ul>
        </div>
      </section>

      <section className='adi-prj-about-sec4'>
        <p class="adi-prj-about-sec3-p1">Education</p>

        <div className="row m-0 p-0 w-100">
          <div className="col-md-4 adi-prj-about-sec4-row1-col2">
            <p className='adi-prj-about-sec4-row1-col2-p1'>3</p>
          </div>
        </div>
        <div className="row m-0 p-0 w-100">
          {/* <div className="adi-prj-about-sec4-row1-col2">
            <p className='adi-prj-about-sec4-row1-col2-p1'>3</p>
          </div> */}
          <div className="col-md-4 adi-prj-about-sec4-row-col1">
            <p className='adi-prj-about-sec4-p1'>🎓 Bachelor of Technology (B.Tech)</p>
            <p className='adi-prj-about-sec4-p2'>Computer Science and Engineering</p>

            <p className='adi-prj-about-sec4-p3'>Dr. Babasaheb Ambedkar Technological University, Lonere
            </p>
            <p className='adi-prj-about-sec4-p4'>📅 2021 – 2023</p>
          </div>


        </div>

        <div className="row m-0 p-0 w-100">
          <div className="col-md-4">
          </div>
          <div className="col-md-4">
          </div>
          <div className="col-md-4 adi-prj-about-sec4-row1-col2">
            <p className='adi-prj-about-sec4-row1-col2-p1'>2</p>
          </div>
        </div>
        <div className="row m-0 p-0 w-100 adi-prj-about-sec4-row2">

          <div className="col-md-4 adi-prj-about-sec4-row-col">
            <p className='adi-prj-about-sec4-p1'>🎓 Diploma</p>
            <p className='adi-prj-about-sec4-p2'>Computer Engineering</p>

            <p className='adi-prj-about-sec4-p3'>Padmabhooshan Vasantraodada Patil Institute of Technology, Budhgaon
            </p>
            <p className='adi-prj-about-sec4-p4'>📅2018 – 2020</p>
          </div>
        </div>


        <div className="row m-0 p-0 w-100">
          <div className="col-md-4 adi-prj-about-sec4-row1-col2">
            <p className='adi-prj-about-sec4-row1-col2-p1'>1</p>
          </div>
        </div>
        <div className="row m-0 p-0 w-100">
          <div className="col-md-4 adi-prj-about-sec4-row-col">
            <p className='adi-prj-about-sec4-p1'>🎓Secondary School Certificate (SSC)</p>


            <p className='adi-prj-about-sec4-p3'>City High School, Sangli
            </p>
            <p className='adi-prj-about-sec4-p4'>📅2017</p>
          </div>
        </div>
      </section >


      <section className='adi-prj-about-sec5'>

      </section>
    </div >
  )
}

export default AboutMe
