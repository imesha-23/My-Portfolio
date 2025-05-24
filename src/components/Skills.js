import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaCode, FaPencilRuler } from 'react-icons/fa';
import { SiMysql, SiTailwindcss, SiPostman, SiFigma, SiAdobexd } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const allSkills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "GitHub", icon: <FaGithub />, color: "#181717" },
    { name: "VS Code", icon: <FaCode />, color: "#007ACC" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
    { name: "Wireframe", icon: <FaPencilRuler />, color: "#6366F1" }, // general icon for wireframing
    { name: "Adobe XD", icon: <SiAdobexd />, color: "#FF61F6" },
  ];

  return (
    <section id="skills" className={`skills-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Tech Stack
        </motion.h2>
        
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Technologies I've been working with recently
        </motion.p>
        
        <motion.div 
          className="skills-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {allSkills.map((skill, index) => (
            <motion.div 
              className="skill-item"
              key={index}
              whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(99, 102, 241, 0.2)' }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h4 className="skill-name">{skill.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
