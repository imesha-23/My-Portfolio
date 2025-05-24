import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <section id="home" className={`home-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm <span className="highlight-name">Imesha Jayathilake</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              BSc (Hons) Software Engineering Undergraduate
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I am a third-year SE undergraduate at KIU Campus PVT Ltd.
            </motion.p>
            
            <motion.div 
              className="cta-buttons"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a href="#projects" className="primary-btn">View My Work</a>
              <a href="#contact" className="secondary-btn">Contact Me</a>
            </motion.div>
          </div>
          
          <motion.div 
            className="home-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
          
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;