import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFastapi,
  SiMongodb,
  SiCloudflare,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

function Skills() {
  const skillGroups = [
    {
      label: "FRONTEND",
      skills: [
        { name: "HTML", icon: <FaHtml5 />, level: "88%" },
        { name: "CSS", icon: <FaCss3Alt />, level: "82%" },
        { name: "JavaScript", icon: <FaJs />, level: "75%" },
        { name: "React", icon: <FaReact />, level: "70%" },
        { name: "Next.js", icon: <SiNextdotjs />, level: "55%" },
      ],
    },
    {
      label: "BACKEND",
      skills: [
        { name: "Python", icon: <FaPython />, level: "70%" },
        { name: "FastAPI", icon: <SiFastapi />, level: "60%" },
        { name: "MongoDB", icon: <SiMongodb />, level: "60%" },
        { name: "PyMongo", icon: <FaDatabase />, level: "55%" },
      ],
    },
    {
      label: "TOOLS & DEPLOYMENT",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: "75%" },
        { name: "GitHub", icon: <FaGithub />, level: "75%" },
        { name: "Cloudflare", icon: <SiCloudflare />, level: "65%" },
        { name: "Vercel", icon: <SiVercel />, level: "65%" },
        { name: "Netlify", icon: <SiNetlify />, level: "70%" },
      ],
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

      <div className="skills-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.label}>
            <h3 className="skill-group-label">{group.label}</h3>

            <div className="skills-container">
              {group.skills.map((skill, index) => (
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

                    <h4>{skill.name}</h4>
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
