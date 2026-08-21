import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      level: "90%",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      level: "85%",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      level: "70%",
    },
    {
      name: "React",
      icon: <FaReact />,
      level: "55%",
    },
    {
      name: "Git & GitHub",
      icon: <FaGithub />,
      level: "60%",
    },
  ];

  return (
    <section className="section skills" id="skills">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>MY TECHNICAL LEVEL</p>
        <h2>My <span>Skills</span></h2>
      </motion.div>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={skill.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{ y: -8 }}
          >
            <div className="skill-top">
              <div className="skill-icon">
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>
            </div>

            <div className="progress-bar">
              <motion.div
                className="progress"
                initial={{ width: 0 }}
                whileInView={{ width: skill.level }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                }}
              />
            </div>

            <span>{skill.level}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;