import React from "react";

import './contact.css';
import mapGif from '../images/adi-pro-contact-map.gif';

import { useState } from "react";
import Swal from "sweetalert2"; // npm install sweetalert2



const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    
      const [loading, setLoading] = useState(false);
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Simple validation to ensure no field is empty
        const { name, email, subject, message } = formData;
        if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
          Swal.fire('Validation Error', 'Please fill in all the fields.', 'warning');
          return;
        }
      
        setLoading(true); // Show loader
      
        try {
          const response = await fetch('/api/formHandler', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
      
          const result = await response.json();
          if (result.status === 'success') {
            Swal.fire('Success!', 'Message sent successfully.', 'success');
            setFormData({ name: '', email: '', subject: '', message: '' });
          } else {
            Swal.fire('Oops!', 'Something went wrong.', 'error');
          }
        } catch (error) {
          console.error(error);
          Swal.fire('Error!', 'Failed to send message.', 'error');
        } finally {
          setLoading(false); // Hide loader
        }
      };
      


    return (
        <div className="">

            <section className="adi-port-contact-section1 adi-port-contact-section1-for-static-bg">
                <div className="adi-port-contact-section1-sub1">


                    <div className="container h-100">
                        <div className="row no-gutters slider-text align-items-end h-100">
                            <div className="col-md-9 pb-5">
                                <p className="breadcrumbs adi-port-contact-section1-sub1-p1"><span className="mr-2"><a href="index.html" className="adi-port-contact-section1-sub1-a1">Home <i className="fa fa-chevron-right"></i></a></span> <span>Contact us <i className="fa fa-chevron-right"></i></span></p>

                                <h1 className="mb-0 bread adi-port-contact-section1-sub1-title1">CONTACT ME</h1>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <section className="adi-port-contact-section2">


                <div className="adi-port-contact-section2-sub1">
                    <div className="adi-port-contact-section2-sub1-form-div">


                        <div className="row w-100 m-0 p-0">
                            <div className="col-md-8 adi-port-contact-section2-sub1-form-div-col1">


                                {/* Loader Div */}
                                {loading && (
                                    <div className="loader-overlay">
                                        <div className="loader"></div>
                                    </div>
                                )}
                                <form onSubmit={handleSubmit}>


                                    <p className="adi-port-contact-section2-sub1-P1"> GET IN TOUCH</p>

                                    <div className="row w-100 m-0 p-0">
                                        <div className="col-md-6 adi-port-contact-section2-sub1-form-div-col1-row1-col">
                                            <input type="text" name="name"
                                                placeholder="Name"
                                                value={formData.name}
                                                onChange={handleChange} className="adi-port-contact-section2-sub1-form-div-col1-input1" />
                                        </div>
                                        <div className="col-md-6 adi-port-contact-section2-sub1-form-div-col1-row1-col1">
                                            <input type="email" name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange} className="adi-port-contact-section2-sub1-form-div-col1-input1" />

                                        </div>


                                    </div>

                                    <input type="text" name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange} className="adi-port-contact-section2-sub1-form-div-col1-input1 adi-port-contact-sec2-form-margin" />
                                    <textarea id="" name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange} className="adi-port-contact-section2-sub1-form-div-col1-input1 adi-port-contact-sec2-form-margin" rows={6}></textarea>

                                    <div className="adi-port-contact-section2-sub1-form-div-col1-BTN1-div">
                                        <button type="submit" className="adi-port-contact-section2-sub1-form-div-col1-BTN1">SEND MESSAGE</button>
                                    </div>

                                </form>

                                {/* <form onSubmit={handleSubmit}>
                                    <p className="adi-port-contact-section2-sub1-P1"> GET IN TOUCH</p>

                                    <div className="row w-100 m-0 p-0">
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />

                                    <div className="adi-port-contact-section2-sub1-form-div-col1-BTN1-div">
                                        <button type="submit">SEND MESSAGE</button>
                                    </div>
                                </form> */}
                            </div>
                            <div className="col-md-4 adi-port-contact-section2-sub1-form-div-col2">

                                <p className="adi-port-contact-section2-sub1-form-div-col2-P1">CONTACT ME</p>

                                <div className="row m-0 p-0 w-100 mb-4">
                                    <div className="col-md-3">
                                        <div class="icon d-flex align-items-center justify-content-center adi-port-contact-section2-sub1-form-div-col2-icon-div1">
                                            <span class="fa fa-map-marker adi-port-contact-section2-sub1-form-div-col2-icon1"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-9 adi-port-contact-d-flex">
                                        <span className="adi-port-contact-section2-sub1-form-div-col2-p-tags1">Address: </span> <span className="adi-port-contact-section2-sub1-form-div-col2-p-tags2">Kothrud, Pune.</span>
                                    </div>
                                </div>

                                <div className="row m-0 p-0 w-100 mb-4">
                                    <div className="col-md-3">
                                        <div class="icon d-flex align-items-center justify-content-center adi-port-contact-section2-sub1-form-div-col2-icon-div1">
                                            <span class="fa fa-phone adi-port-contact-section2-sub1-form-div-col2-icon1"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-9 adi-port-contact-d-flex">
                                        <span className="adi-port-contact-section2-sub1-form-div-col2-p-tags1">Phone:  </span> <span className="adi-port-contact-section2-sub1-form-div-col2-p-tags2"> +91 7744998493</span>
                                    </div>
                                </div>

                                <div className="row m-0 p-0 w-100 mb-4">
                                    <div className="col-md-3">
                                        <div class="icon d-flex align-items-center justify-content-center adi-port-contact-section2-sub1-form-div-col2-icon-div1">
                                            <span class="fa fa-paper-plane adi-port-contact-section2-sub1-form-div-col2-icon1"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-9 adi-port-contact-d-flex">
                                        <span className="adi-port-contact-section2-sub1-form-div-col2-p-tags1">Email: </span> <span className="adi-port-contact-section2-sub1-form-div-col2-p-tags2">aditya lohar 5838@gmail.com</span>
                                    </div>
                                </div>

                                <div className="row m-0 p-0 w-100">
                                    <div className="col-md-3">
                                        <div class="icon d-flex align-items-center justify-content-center adi-port-contact-section2-sub1-form-div-col2-icon-div1">
                                            <span class="fa fa-globe adi-port-contact-section2-sub1-form-div-col2-icon1"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-9 adi-port-contact-d-flex">
                                        <span className="adi-port-contact-section2-sub1-form-div-col2-p-tags1">Linkdin: </span> <a href="https://www.linkedin.com/in/aditya-lohar-982914240/" className="adi-port-contact-section2-sub1-form-div-col2-p-tags2">Visit Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="adi-port-contact-section2-sub2">

                    <div className="adi-port-contact-section2-sub2-sub1">
                        <img src={mapGif} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
