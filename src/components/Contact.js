import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="contact" className={`contact-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Me
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Feel free to reach out to me for any questions or opportunities
        </motion.p>
        
        <motion.div 
          className="contact-info-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-text">
              <h3>Email</h3>
              <a href="mailto:vindya@example.com">imeshajayathilake438@gmail.com</a>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="contact-text">
              <h3>Phone</h3>
              <a href="tel:+94779180997">+94 70 227 0402</a>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaLinkedinIn />
            </div>
            <div className="contact-text">
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/imesha-jayathilake-2a3264367/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/imesha-jayathilake
              </a>
            </div>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">
              <FaGithub />
            </div>
            <div className="contact-text">
              <h3>GitHub</h3>
              <a href="https://github.com/imesha-23" target="_blank" rel="noopener noreferrer">
                github.com/imesha-23
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;