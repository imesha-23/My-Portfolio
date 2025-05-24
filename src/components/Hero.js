import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import './Hero.css';
// Import the image from assets/images folder
import heroImage from '../assets/images/image1.jpg';

// REPLACE_WITH_YOUR_ACTUAL_RESUME
const resumePDF = '/Professional CV Resume.pdf';

const Hero = () => {
  const { isDarkMode } = useContext(ThemeContext);
  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };
  const shapeVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1,
        delay: 0.5
      }
    }
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: "easeOut"
      }
    })
  };
  return (
    <section id="home" className={`hero ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              variants={textVariants}
              custom={0.2}
              initial="hidden"
              animate="visible"
              className="gradient-text"
            >
              Hello, My name is Vindya Sathsarani
            </motion.h1>
            
            <motion.p
              variants={textVariants}
              custom={0.4}
              initial="hidden"
              animate="visible"
            >
              As a passionate web developer, I am dedicated to crafting innovative and scalable solutions using modern technologies. With expertise in MongoDB, Express, React, and Node.js, I create user-friendly applications that deliver seamless experiences.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              variants={textVariants}
              custom={0.6}
              initial="hidden"
              animate="visible"
            >
              <motion.a 
                href="#contact" 
                className="primary-btn"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(139, 92, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
              <motion.a 
                href={resumePDF} 
                download 
                className="secondary-btn"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-download"></i> Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="image-wrapper"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img 
                src={heroImage} 
                alt="Vindya Sathsarani" 
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ filter: "brightness(1.1)" }}
              />
              <motion.div 
                className="image-shape"
                variants={shapeVariants}
                initial="hidden"
                animate="visible"
                style={{ originX: 0.5, originY: 0.5 }}
                whileInView={{ 
                  rotate: [0, 2, 0, -2, 0],
                  scale: [1, 1.03, 1, 1.03, 1],
                  transition: { 
                    repeat: Infinity, 
                    duration: 5,
                    ease: "easeInOut"
                  }
                }}
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
