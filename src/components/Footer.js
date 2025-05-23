import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaSearchLocation, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-blue-950 text-slate-300 px-6 py-12 md:px-16 lg:px-20 text-xl">
      
      {/* Footer Grid (Mobile: Column, Desktop: 3 Columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 border-b border-slate-50 pb-8 text-xl   
">
        {/* Quick Links */}
        <div>
          <h4 className="text-2xl font-bold pb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/countries" className="hover:text-white">Countries</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-2xl font-bold pb-4">Contact</h4>
          <div className="space-y-3 ">
            <p className="flex items-start ">
              <FaSearchLocation className="text-xl mr-2 text-slate-300 hover:text-white" />
              #103, 4th Main, Hill View Garden, Thurahalli, Bengaluru, Karnataka 560061
            </p>
            <p className="flex items-center">
              <FaPhoneAlt className="text-xl mr-2 text-slate-300 hover:text-white" />
              +91 9915808816
            </p>
            <p className="flex items-center">
              <FaEnvelope className="text-lg mr-2 text-slate-300 hover:text-white" />
              info@gyoverseaseducation.com
            </p>
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-2xl font-bold pb-4">Follow us</h4>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/your-profile-name" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl text-slate-300 hover:text-white transition-transform transform hover:scale-110" />
            </a>
            <a href="https://www.instagram.com/gitteshyadav?igsh=Mmg1d3E4MGh0b2hy" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-slate-300 hover:text-white transition-transform transform hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/your-profile-name" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl text-slate-300 hover:text-white transition-transform transform hover:scale-110" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-sm mt-6">
        © Copyright <Link to="https://www.instagram.com/gitteshyadav?igsh=Mmg1d3E4MGh0b2hy" className="hover:text-white">GYOverseas Education</Link>. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
