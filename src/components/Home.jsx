import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <motion.div 
          className="home-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="home-title">
            Hi, I'm <span className="highlight">Vindya Sathsarani</span>
          </h1>
          <h2 className="home-subtitle">BICT (Hons) Undergraduate</h2>
          
          <div className="home-buttons">
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="home-button primary-button"
            >
              View My Work
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="home-button secondary-button"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;