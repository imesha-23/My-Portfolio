import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
// Remove the react-scroll import since it's not installed and not used
// import { Link } from 'react-scroll';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container navbar-container">

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#resume" onClick={closeMenu}>Resume</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          
          <div className="nav-social">
            <a href="https://github.com/imesha-23" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/imesha-jayathilake-2a3264367/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedinIn />
            </a>
            <button className="theme-toggle desktop-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>

        <div className="nav-controls">
          <button className="theme-toggle mobile-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;