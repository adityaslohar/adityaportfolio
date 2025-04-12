// src/components/Projects.js

import './Projects.css';
import img1 from '../images/adi-port-sec3-bg1.jpg'
import BitVideo from '../images/brightlink-video.mp4';
import React, { useEffect, useRef } from "react";
import adi_prj_sec1 from '../images/projectTitle.gif'
// Import project images
// import project1 from '../images/project1.jpg';
// import project2 from '../images/project2.jpg';
// import project3 from '../images/project3.jpg';
// import project4 from '../images/project4.jpg';
// import project5 from '../images/project5.jpg';

function Projects() {
    //   const projects = [
    //     { id: 1, title: 'Project One', description: 'Description for project one.', image: project1 },
    //     { id: 2, title: 'Project Two', description: 'Description for project two.', image: project2 },
    //     { id: 3, title: 'Project Three', description: 'Description for project three.', image: project3 },
    //     { id: 4, title: 'Project Four', description: 'Description for project four.', image: project4 },
    //     { id: 5, title: 'Project Five', description: 'Description for project five.', image: project5 },
    //   ];



    const iframeRef = useRef(null);

    useEffect(() => {
        if (iframeRef.current) {
            iframeRef.current.src =
                "https://drive.google.com/file/d/1ZEIgkehVtEAv8KKQepF1oOJM3qFWeh0k/preview"

                ;
        }
    }, []);

    return (
        <section>
            <div className="adi-prj-sec1">
                <p className='adi-prj-sec1-title-1'>My Projects</p>

                <img src="./images/" alt="" />
                <p className='adi-prj-sec1-p1'>  I am a passionate Front-End Developer with a keen eye for detail and a strong focus on user experience.
                    Through these projects, I have applied my expertise in modern web technologies, responsive design, and interactive UI development.
                    Each project reflects my ability to create visually appealing, high-performance, and user-friendly web applications.
                    I constantly explore new technologies to enhance functionality and ensure seamless user interactions.
                    Take a look at my work below!</p>

            </div>

            <div className="adi-prj-sec2">

                <div className="row w-100 m-0 p-0">

                    <div className="col-md-6 d-flex justify-content-center">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/m3_vcU_jxl4?autoplay=1&mute=1&loop=1&playlist=m3_vcU_jxl4&controls=0&modestbranding=1&rel=0"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen>
                        </iframe>


                    </div>


                    <div className="col-md-6">
                        <p className='adi-prj-sec2-p1'>Landing Page Website</p>
                        <p className='adi-prj-sec2-p2'>Brightlink Comapany Website</p>
                        <p className='adi-prj-sec2-p3'>🔗 Live URL: <a href='https://www.brightlinkinfotechnologies.com/home' className='adi-prj-sec2-p3-a1'>BrightLink Info Technologies</a></p>

                        <p className='adi-prj-sec2-p4'>Overview:</p>
                        <p className='adi-prj-sec2-p5'>This is a professional landing page website built for BrightLink Info Technologies Pvt. Ltd., a company specializing in IT solutions. The website serves as the company's digital presence, offering insights into its services, products, and career opportunities.</p>


                        <p className='adi-prj-sec2-p6'>Tech Stack Used::</p>
                        <ul className='adi-prj-sec2-prj1-ui'>
                            <li>React.js</li>
                            <li>CSS & Styled Components </li>
                            <li>React Router</li>
                            <li>AOS (Animate on Scroll)</li>

                        </ul>


                    </div>

                </div>

                <div className='adi-prj-sec2-sub1'>


                    <div className='adi-prj-sec2-sec2'>
                        <p className='adi-prj-sec2-p7'>🔹 Website Pages Overview</p>

                        <p className='adi-prj-sec2-p8'>
                            1️⃣ Home Page – Showcases company vision, services, animations, and client testimonials.</p>
                        <p className='adi-prj-sec2-p8'>
                            2️⃣ About Us – Covers company overview, mission, vision, and leadership team.</p>
                        <p className='adi-prj-sec2-p8'>
                            3️⃣ IT Services – Details key services like Web/App Development, Cloud Solutions, Cybersecurity, and IT Consultancy.</p>
                        <p className='adi-prj-sec2-p8'>
                            4️⃣ Recruitment – Lists job openings, hiring process, and company culture insights.</p>

                        <p className='adi-prj-sec2-p8'>
                            5️⃣ Product – Highlights proprietary products with features, pricing, and client testimonials.</p>

                        <p className='adi-prj-sec2-p8'>
                            6️⃣ Blog – Shares industry insights, tech trends, and company updates with search and filter options.</p>

                        <p className='adi-prj-sec2-p8'>
                            7️⃣ Career Page – Explores career growth opportunities, job listings, and employee testimonials.</p>

                        <p className='adi-prj-sec2-p8'>
                            8️⃣ Contact Us – Displays global contact details, interactive map, and inquiry form.
                        </p>
                    </div>
                </div>


                <div className="adi-prj-2nd-project-div">



                    <div className="row w-100 m-0 p-0">




                        <div className="col-md-6">
                            <p className='adi-prj-sec2-p1'>Web Application</p>
                            <p className='adi-prj-sec2-p2'>SalesOptim (CRM)</p>
                            <p className='adi-prj-sec2-p3'>🔗 Live URL: <a href='https://salesoptim.com/' className='adi-prj-sec2-p3-a1'>https://salesoptim.com/</a></p>

                            <p className='adi-prj-sec2-p4'>Overview:</p>
                            <p className='adi-prj-sec2-p5'>SalesOptim is a comprehensive CRM web application designed to streamline sales operations, enhance lead management, and improve business efficiency. It provides an intuitive user interface and advanced functionality to track leads, manage sales, generate reports, and facilitate team collaboration.</p>


                            <p className='adi-prj-sec2-p6'>Tech Stack Used::</p>
                            <ul className='adi-prj-sec2-prj1-ui'>
                                <li> HTML, CSS, Bootstrap – Built a responsive and visually appealing UI.</li>
                                <li>Thymeleaf – Integrated dynamic content rendering in HTML pages.</li>
                                <li> JavaScript – Enhanced user interactions and functionality.</li>
                                <li>Spring Boot – Developed the backend with RESTful API services.</li>
                                <li> MySQL– Used relational databases for data storage.</li>
                                <li> GitHub – Version control and collaborative development.</li>
                                <li>AOS (Animate on Scroll)</li>

                            </ul>


                        </div>

                        <div className="col-md-6 d-flex justify-content-center">



                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/U4Uq4tHqPik?autoplay=1&mute=1&loop=1&playlist=U4Uq4tHqPik&controls=0&modestbranding=1&rel=0"
                                frameborder="0"
                                allow="autoplay encrypted-media"
                                allowfullscreen>
                            </iframe>




                        </div>

                    </div>

                    <div className='adi-prj-sec2-sub1'>


                        <div className='adi-prj-sec2-sec2'>
                            <p className='adi-prj-sec2-p7'>🔹User Panels & Access Levels:</p>

                            <p className='adi-prj-sec2-p8'>
                                🔹 Super Admin – Manages system settings, users, and overall operations.</p>
                            <p className='adi-prj-sec2-p8'>
                                🔹 Admin – Oversees sales activities, reports, and employee management.</p>
                            <p className='adi-prj-sec2-p8'>
                                🔹 Employee – Accesses assigned leads, updates sales progress, and manages meetings.</p>

                        </div>


                    </div>

                    <div className='adi-prj-sec2-sub1'>


                        <div className='adi-prj-sec2-sec2'>
                            <p className='adi-prj-sec2-p7'>🔹Key Features:</p>

                            <p className='adi-prj-sec2-p8'>
                                ✅ Lead Management – Track, manage, and nurture leads efficiently.
                            </p>
                            <p className='adi-prj-sec2-p8'>
                                ✅  Quotation Generator – Generate and manage sales quotations dynamically.</p>
                            <p className='adi-prj-sec2-p8'>
                                ✅ Interactive Dashboards – Monitor sales performance, lead conversions, and team activities.</p>

                            <p className='adi-prj-sec2-p8'>   ✅ Call Dialer – Integrated dialer for quick and seamless communication with leads.</p>


                            <p className='adi-prj-sec2-p8'>
                                ✅ Employee Tracking – Real-time tracking of sales representatives and their activities.</p>
                            <p className='adi-prj-sec2-p8'>✅ Email Marketing – Automate and manage email campaigns directly from the platform.</p>
                            <p className='adi-prj-sec2-p8'>✅ Templates – Predefined templates for emails, reports, and proposals to save time.</p>
                            <p className='adi-prj-sec2-p8'>✅ Product Management – Organize and showcase products efficiently.</p>
                            <p className='adi-prj-sec2-p8'>✅ Vendor Management – Maintain and manage vendor relationships and details.</p>








                        </div>


                    </div>
                </div>

                <div className="row w-100 m-0 p-0">

                    <div className="col-md-6 d-flex justify-content-center">
                        {/* <video src={BitVideo} controls width="100%" autoPlay loop muted></video> */}
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/vKOEKvvQE2U?autoplay=1&mute=1&loop=1&playlist=vKOEKvvQE2U&controls=0&modestbranding=1&rel=0"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                        ></iframe>

                    </div>


                    <div className="col-md-6">
                        <p className='adi-prj-sec2-p1'>Landing Page Website</p>
                        <p className='adi-prj-sec2-p2'>Raigad Kar Agro Website</p>
                        <p className='adi-prj-sec2-p3'>🔗 Live URL: <a href='https://www.raigadkaragro.com/' className='adi-prj-sec2-p3-a1'>https://www.raigadkaragro.com/</a></p>

                        <p className='adi-prj-sec2-p4'>Overview:</p>
                        <p className='adi-prj-sec2-p5'>Raigad Kar Agro is an agricultural solutions website built to serve farmers and businesses with high-quality products and services. The website acts as a digital platform for customers to explore agricultural offerings, connect with the company, and stay updated with industry trends. With a user-friendly design, it ensures smooth navigation and quick access to essential information.</p>


                        <p className='adi-prj-sec2-p6'>Tech Stack Used::</p>
                        <ul className='adi-prj-sec2-prj1-ui'>
                            <li> HTML, CSS, Bootstrap – For a responsive and visually appealing UI.</li>
                            <li>JavaScript – Enhancing interactivity and seamless navigation.</li>
                            <li> MySQL – Database management for product and service information.</li>
                            <li> GitHub – Version control and continuous development.</li>

                            <li>AOS (Animate on Scroll)</li>

                        </ul>


                    </div>

                </div>

                <div className='adi-prj-sec2-sub1'>


                    <div className='adi-prj-sec2-sec2'>
                        <p className='adi-prj-sec2-p7'>🔹 Website Pages Overview</p>

                        <p className='adi-prj-sec2-p8'>
                            🌿 Home – Welcome page showcasing the company’s mission and values.</p>
                        <p className='adi-prj-sec2-p8'>
                            🌿 About Us – Insight into the company’s history, vision, and leadership.</p>
                        <p className='adi-prj-sec2-p8'>
                            🌿 Services – Detailed information about the agricultural solutions provided.</p>
                        <p className='adi-prj-sec2-p8'>
                            🌿 Products – A catalog of high-quality agricultural products.</p>

                        <p className='adi-prj-sec2-p8'>
                            🌿 Contact Us – Inquiry form, customer support details, and location map.</p>


                    </div>
                </div>





                <div className="adi-prj-2nd-project-div">



                    <div className="row w-100 m-0 p-0">




                        <div className="col-md-6">
                            <p className='adi-prj-sec2-p1'>Landing Website</p>
                            <p className='adi-prj-sec2-p2'>Nucleus Management Consultants</p>
                            <p className='adi-prj-sec2-p3'>🔗 Live URL: <a href='https://nucleusconsultancy.in/' className='adi-prj-sec2-p3-a1'>https://nucleusconsultancy.in/</a></p>

                            <p className='adi-prj-sec2-p4'>Overview:</p>
                            <p className='adi-prj-sec2-p5'>The Nucleus Management Consultants website is a professional consulting platform designed to provide businesses with seamless HR, payroll, and legal compliance solutions. The website serves as an informational and service-oriented portal, allowing clients to explore consulting services, legal assistance, and policy preparation support.</p>


                            <p className='adi-prj-sec2-p6'>Tech Stack Used:</p>
                            <ul className='adi-prj-sec2-prj1-ui'>
                                <li>Developed using HTML, CSS, Bootstrap for a modern and professional look.</li>
                                <li> Integrated JavaScript for improved user experience and interactivity.</li>
                                <li> Connect users with the company using the Contact Us form and email integration.</li>


                            </ul>


                        </div>

                        <div className="col-md-6 d-flex justify-content-center">
                            {/* <video src={BitVideo} controls width="100%" autoPlay loop muted></video> */}
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/j9CEx6_w3us?autoplay=1&mute=1&loop=1&playlist=j9CEx6_w3us&controls=0&modestbranding=1&rel=0"
                                frameborder="0"
                                allow="autoplay; encrypted-media"
                                allowfullscreen
                            ></iframe>
                        </div>

                    </div>

                    {/* <div className='adi-prj-sec2-sub1'>


                        <div className='adi-prj-sec2-sec2'>
                            <p className='adi-prj-sec2-p7'>🔹User Panels & Access Levels:</p>

                            <p className='adi-prj-sec2-p8'>
                                🔹 Super Admin – Manages system settings, users, and overall operations.</p>
                            <p className='adi-prj-sec2-p8'>
                                🔹 Admin – Oversees sales activities, reports, and employee management.</p>
                            <p className='adi-prj-sec2-p8'>
                                🔹 Employee – Accesses assigned leads, updates sales progress, and manages meetings.</p>

                        </div>


                    </div> */}

                    <div className='adi-prj-sec2-sub1'>


                        <div className='adi-prj-sec2-sub1'>


                            <div className='adi-prj-sec2-sec2'>
                                <p className='adi-prj-sec2-p7'>🔹 Website Pages Overview</p>

                                <p className='adi-prj-sec2-p8'>
                                    🏢 Home – Highlights company services and expertise.</p>
                                <p className='adi-prj-sec2-p8'>
                                    📜 About Us – Overview of the company’s background and mission.</p>
                                <p className='adi-prj-sec2-p8'>
                                    🛠 Services – Details about payroll management, compliance, and legal support.</p>
                                <p className='adi-prj-sec2-p8'>
                                    📞 Contact Us – Inquiry form, location details, and consultation request.</p>



                            </div>
                        </div>


                    </div>
                </div>




                <div className="row w-100 m-0 p-0">

                    <div className="col-md-6 d-flex justify-content-center">
                        {/* <video src={BitVideo} controls width="100%" autoPlay loop muted></video> */}
                        {/* <iframe src="https://drive.google.com/file/d/1ZEIgkehVtEAv8KKQepF1oOJM3qFWeh0k/preview" width="100%" height="76%" allow="autoplay" allowfullscreen></iframe> */}

                        {/* <iframe
      ref={iframeRef}
      width="100%"
      height="76%"
      allow="autoplay"
      allowFullScreen
      title="Project Video"
    ></iframe> */}
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/5R9WfXVpqS0?autoplay=1&mute=1&loop=1&playlist=5R9WfXVpqS0&controls=0&modestbranding=1&showinfo=0&rel=0"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen
                        ></iframe>



                    </div>


                    <div className="col-md-6">
                        <p className='adi-prj-sec2-p1'>Landing Page Website</p>
                        <p className='adi-prj-sec2-p2'>Jarag Hospital Website</p>
                        <p className='adi-prj-sec2-p3'>🔗 Live URL: <a href='https://www.jaraghospital.com/' className='adi-prj-sec2-p3-a1'>https://www.jaraghospital.com/</a></p>

                        <p className='adi-prj-sec2-p4'>Overview:</p>
                        <p className='adi-prj-sec2-p5'>The Jarag Hospital Website is a professional healthcare website designed to provide patients with easy access to medical services, hospital information, and online assistance. It serves as a digital platform for patients to explore healthcare services, book appointments, and get essential hospital updates.</p>


                        <p className='adi-prj-sec2-p6'>Tech Stack Used::</p>
                        <ul className='adi-prj-sec2-prj1-ui'>
                            <li> Front-End: HTML, CSS, Bootstrap, JavaScript</li>
                            <li>Back-End: PHP</li>
                            <li>Version Control: GitHub</li>
                            <li>AOS (Animate on Scroll)</li>

                        </ul>


                    </div>

                </div>

                <div className='adi-prj-sec2-sub1'>


                    <div className='adi-prj-sec2-sec2'>
                        <p className='adi-prj-sec2-p7'>🔹 Website Pages Overview</p>

                        <p className='adi-prj-sec2-p8'>
                            🏥 Home Page – Showcases hospital services, facilities, and an introduction to healthcare offerings.</p>
                        <p className='adi-prj-sec2-p8'>
                            📖 About Us – Provides information about the hospital’s history, mission, and vision.</p>
                        <p className='adi-prj-sec2-p8'>
                            🩺 Services – Lists various medical services, specialties, and treatment options.</p>
                        <p className='adi-prj-sec2-p8'>
                            💊 Product/Medical Equipment – Highlights available medical products and equipment used.</p>

                        <p className='adi-prj-sec2-p8'>
                            📞 Contact Us – Allows users to get in touch with the hospital via an inquiry form, including email integration for seamless communication.</p>

                        <p className='adi-prj-sec2-p8'>
                            📅 Appointment Booking – Enables patients to schedule doctor appointments online.</p>
                        <p className='adi-prj-sec2-p8'>
                            🚑 Emergency Contact & Location Details – Provides essential emergency numbers and directions to the hospital.</p>

                    </div>
                </div>
            </div>

            <div className="projects-container">


                <div className="projects-grid">
                    {/* {projects.map((project) => (
         <div key={project.id} className="project-card">
           <img src={project.image} alt={project.title} />
           <h3>{project.title}</h3>
           <p>{project.description}</p>
         </div>
       ))} */}

                </div>
            </div>
        </section>

    );
}

export default Projects;
