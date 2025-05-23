import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import innerLogo from '../assests/inner-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
    <div className="fixed w-full bg-white drop-shadow-md text-blue-950 z-50">
      <div className="flex justify-between items-center p-4 lg:px-10 lg:flex-row flex-wrap">
        <Link to="/">
          <img
            className={`transition-all duration-300 ${isScrolled ? "w-32" : "w-64"}`}
            src={innerLogo}
            alt="Gyoverseaseducation" title='Gyoverseaseducation'
          />
        </Link>
        <button
          className="lg:hidden text-blue-950"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <div className={`lg:flex justify-end items-center w-full lg:w-auto ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="menu menu-horizontal px-4 text-xl lg:flex lg:space-x-6">
            <li><Link to="/" title='Home'>Home</Link></li>
            <li><Link to="/about" title='About'>About</Link></li>
            <li className="relative" onMouseEnter={() => toggleDropdown("services")} onMouseLeave={closeDropdowns}>
              <button className="flex items-center">Services <span className="ml-1">▼</span></button>
              {activeDropdown === "services" && (
                <ul className="absolute left-0 top-full bg-white shadow-lg rounded-lg p-2 w-64 z-50">
                  <li><Link to="/services" title='Counseling'>Counseling</Link></li>
                  <li><Link to="/services" title='university selection'>University Selection</Link></li>
                  <li><Link to="/services" title='sop and documentation'>SOP and Documentation</Link></li>
                  <li><Link to="/services" title="visa Assistance">Visa Assistance</Link></li>
                  <li><Link to="/services" title='Scholarship'>Scholarship Assistance</Link></li>
                  <li><Link to="/services" title='Forex'>Forex</Link></li>
                  <li><Link to="/services" title='otherservices'>Other Services</Link></li>
                </ul>
              )}
            </li>
            <li className="relative" onMouseEnter={() => toggleDropdown("countries")} onMouseLeave={closeDropdowns} >
              <button className="flex items-center">Countries <span className="ml-1">▼</span></button>
              {activeDropdown === "countries" && (
                <ul className="absolute left-0 top-full bg-white shadow-lg rounded-lg p-2 w-48 z-50">
                  <li><Link to="/countries" title='UK'>UK</Link></li>
                  <li><Link to="/countries" title='Ireland'>Ireland</Link></li>
                  <li><Link to="/countries" title='USA'>USA</Link></li>
                  <li><Link to="/countries" title='Canada'>Canada</Link></li>
                  <li><Link to="/countries" title='Australia'>Australia</Link></li>
                  <li><Link to="/countries" title='New Zealand'>New Zealand</Link></li>
                  <li><Link to="/countries" title='Asia'>Asia</Link></li>
                  <li><Link to="/countries" title='Europe'>Europe</Link></li>
                </ul>
              )}
            </li>
            <li><Link to="/russiambbs" title='russianmbbs'>Russia MBBS</Link></li>
            <li><Link to="/contact" title='contact'>Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;