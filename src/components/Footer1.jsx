import React from "react";
import './footer.css';
import { Link } from 'react-router-dom';


const Footer1 = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/AboutMe" },
    { name: "Projects", path: "/Projects" },
   
    { name: "Contact", path: "/ContactMe" },
  ];
  return (
    <footer className="adi-prj-footer-main-div text-white py-10 px-6">
      <div className="container mx-auto flex flex-col items-center text-center space-y-6">
        {/* Branding Section */}

        <p className="adi-prj-footer-title">
          Links
        </p>

         {/* Navigation Links */}
         <nav className="mt-4">
          <ul className="list-none flex flex-wrap justify-center p-0">
            {navLinks.map((item, index) => (
              <li key={index} className="list-none adi-prj-footer-links mx-2">
                <Link
                  to={item.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-gray-300 hover:text-yellow-500 transition duration-300 text-lg font-medium"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div className="flex mt-4 space-x-5">
          {[
            { name: "github", link: "https://github.com/adityaslohar" },
            { name: "linkedin", link: "https://www.linkedin.com/in/aditya-lohar-982914240/" },

          ].map((icon, index) => (
            <a
              key={index}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon text-yellow-500 text-2xl hover:text-white transition transform hover:scale-110 duration-300"
            >
              <i className={`fab fa-${icon.name}`}></i>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full max-w-3xl border-t border-gray-700 my-4"></div>

        {/* Copyright Text */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} ADITYA SUJATA SUNIL LOHAR. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer1;
