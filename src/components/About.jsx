import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

function About() {
  const features = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      text: "I enjoy writing structured, clean and understandable code.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Responsive Design",
      text: "I create websites that work smoothly on desktop, tablet and mobile.",
    },
    {
      icon: <FaRocket />,
      title: "Always Learning",
      text: "I am continuously improving my development skills and exploring new technologies.",
    },
  ];

  return (
    <section className="section about" id="about">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
      </motion.div>

      <div className="about-container">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3>Frontend Developer in the Making 🚀</h3>

          <p>
            Hello! I'm Muhammad Abdullah Usmani, a passionate beginner
            frontend developer who enjoys turning ideas into modern and
            interactive websites.
          </p>

          <p>
            I have been learning web development with HTML, CSS,
            JavaScript and now React. My goal is to continuously improve
            my skills and build useful digital experiences.
          </p>

          <a href="#contact" className="primary-btn">
            Let's Work Together
          </a>
        </motion.div>

        <div className="about-features">
          {features.map((feature, index) => (
            <motion.div
              className="feature-card"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>

              <div>
                <h4>{feature.title}</h4>
                <p>{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;