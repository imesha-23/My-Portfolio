import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Frontend Development',
      description: 'Creating responsive, interactive, and user-friendly interfaces using modern frameworks like React, Vue, or Angular with clean and maintainable code.'
    },
    {
      icon: 'fas fa-server',
      title: 'Backend Development',
      description: 'Building robust server-side applications, RESTful APIs, and database integrations using Node.js, Express, MongoDB, and other backend technologies.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Web Design',
      description: 'Designing websites that work flawlessly across all devices and screen sizes, ensuring an optimal user experience on desktops, tablets, and smartphones.'
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'E-Commerce Solutions',
      description: 'Developing custom e-commerce platforms with secure payment gateways, inventory management, and user-friendly shopping experiences.'
    },

    {
      icon: 'fas fa-code-branch',
      title: 'API Development',
      description: 'Creating custom APIs for seamless integration between different applications, enabling efficient data exchange and functionality.'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Website Maintenance',
      description: 'Providing ongoing support, updates, bug fixes, and feature enhancements to keep your website running smoothly and securely.'
    }
  ];

  return (
    <section id="services" className={`services-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Services
        </motion.h2>
        
        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          I offer a wide range of web development services to help businesses establish a strong online presence
        </motion.p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              className="service-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;