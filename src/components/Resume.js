import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaDownload } from 'react-icons/fa';
import './Resume.css';
// Update the import path to match your file location
import resumePDF from '../assets/pdf/Imesha_Resume.pdf';

const Resume = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section id="resume" className={`resume-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Resume
        </motion.h2>
        
        {/* Resume preview section */}
        <motion.div
          className="resume-preview"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe 
            src={resumePDF} 
            title="Resume Preview" 
            className="resume-iframe"
          ></iframe>
        </motion.div>
        
        <motion.a
          href={resumePDF}
          download="Imesha_Resume.pdf"
          className="download-btn bottom"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaDownload /> Download CV
        </motion.a>
      </div>
    </section>
  );
};

export default Resume;