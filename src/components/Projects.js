import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './Projects.css';

// Import images directly
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image8 from '../assets/images/image8.png';

const Projects = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const ref = useRef(null);
  // Remove the unused inView variable or add eslint-disable comment
  // eslint-disable-next-line no-unused-vars
  const inView = useInView(ref, { once: true, amount: 0.1 });
  
  // Force visibility on mobile devices
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        // Force the section to be visible on mobile
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.style.opacity = '1';
          projectsSection.style.visibility = 'visible';
        }
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const projects = [
    {
      title: 'Food Delivery System (UI Design)',
      description: 'Designed a food ordering web app called Pizza Passion using Figma. Created responsive UI screens including homepage, menu, item details, and cart for a smooth user experience.',
      image: image5,
      technologies: ['Figma'],
    },
    {
      title: 'Maternity Care System (UI Design)',
      description: 'Designed a maternity care system UI called RIU App using Figma. Included features like appointment booking, patient monitoring, and health tips to support expectant mothers.',
      image: image3,
      technologies: ['Figma'],
    },
    {
      title: 'Research Support Platform',
      description: 'Designed the SEEKERS UI in Figma for searching individual observation papers, including features like search filters, paper details, and user access for academic use.',
      image: image4,
      technologies: ['Figma, React.js, Node.js'],
    },
    {
      title: 'My Portfolio',
      description: 'A portfolio website is an online platform that highlights my skills and accomplishments. I showcase my projects, share my resume, and provide insights into my academic journey. Through this portfolio, visitors can explore my expertise in UI/UX and Web Development.',
      image: image8,
      technologies: ['React'],
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Reduced for faster appearance
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 }, // Reduced y offset
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4, // Faster animation
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section id="projects" className={`projects-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }} // Changed to whileInView
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Projects I've built so far
        </motion.p>
        
        <motion.div 
          className="projects-grid"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Changed to whileInView
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div 
              className="project-card" 
              key={index}
              variants={itemVariants}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                 
                  {project.technologies.map((tech, i) => (
                    <span className="tech-badge" key={i}>{tech}</span>
                  ))}
                </div>
                {/* Removed project links section */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;