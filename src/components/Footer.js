import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './Footer.css';

const Footer = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`footer ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container footer-container">
        <p className="copyright">Designed and Developed by Imesha Jayathilake</p>
        <p className="copyright">Copyright © {currentYear} IJ</p>
      </div>
    </footer>
  );
};

export default Footer;