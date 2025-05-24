import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import "./About.css";
import profileImage from "../assets/images/image2.jpg"; // Changed from image1.jpg to image2.jpg

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const education = [
    {
      degree: "BSc (Hons) Software Engineering Undergraduate",
      institution: "KIU Campus PVT Ltd",
      year: "2022-2026",
    },
  ];

  return (
    <section
      id="about"
      className={`about-section ${isDarkMode ? "dark" : "light"}`}
    >
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="image-wrapper">
              <img src={profileImage} alt="Vindya Sathsarani" />
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
            I am a results-driven and energetic Software Engineering graduate with a passion for UI/UX design, innovation, and problem solving. With a strong understanding of both software development and user-centered design, I enjoy creating seamless digital experiences that balance functionality and beauty.
            </p>
            <p>
            I excel in fast-paced, collaborative environments, applying my technical skills and innovative problem-solving to solve real problems and develop solutions that get things done. I constantly seek out challenges, pioneer new technologies, and produce valuable, user-focused projects that make a difference.
            </p>
            <p>
            Beyond academics, I actively engage in personal projects and collaborative team efforts to enhance my problem-solving and coding abilities. I enjoy exploring new technologies, optimizing performance, and creating seamless user experiences.
            </p>

            <div className="about-details">
              <div className="detail-item"></div>

              <div className="detail-item"></div>
            </div>

            <div className="education-section">
              <h3>Education</h3>
              {education.map((item, index) => (
                <motion.div
                  className="education-item"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="education-year">
                    <i className="fas fa-calendar-alt"></i> {item.year}
                  </div>
                  <div className="education-content">
                    <h4>
                      <i className="fas fa-graduation-cap"></i> {item.degree}
                    </h4>
                    <p className="institution">
                      <i className="fas fa-university"></i> {item.institution}
                    </p>
                    <p className="description">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
