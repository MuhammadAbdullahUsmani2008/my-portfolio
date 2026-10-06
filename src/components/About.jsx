import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

function About() {
  const features = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      text: "Structured, maintainable and readable code.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Responsive Design",
      text: "Interfaces designed to work smoothly across screen sizes.",
    },
    {
      icon: <FaRocket />,
      title: "Always Learning",
      text: "Continuously improving my development skills and exploring modern technologies.",
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
          <h3>Full Stack Developer 🚀</h3>

          <p>
            Hello! I'm Muhammad Abdullah Usmani, a full stack developer
            focused on building modern, responsive and user-friendly web
            experiences. I work across frontend technologies such as
            HTML, CSS, JavaScript and React, while also developing
            backend applications with Python, FastAPI and MongoDB.
          </p>

          <p>
            I enjoy turning ideas and designs into clean, functional
            products — from polished, responsive interfaces to the
            backend services that power them.
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