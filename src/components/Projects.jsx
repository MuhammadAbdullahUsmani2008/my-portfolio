import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "My Portfolio",
      description:
        "A personal portfolio website designed to showcase my skills, projects, and journey as a frontend developer. The website features a clean layout, responsive design, and smooth user interactions.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/MuhammadAbdullahUsmani2008",
      demo: "https://github.com/MuhammadAbdullahUsmani2008",
      icon: "</>",
    },
    {
      number: "02",
      title: "My Portfolio",
      description:
        "A modern personal portfolio project focused on creating an engaging and responsive user experience. Built to practice frontend development concepts, layouts, styling, and interactive JavaScript features.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/MuhammadAbdullahUsmani2008",
      demo: "https://github.com/MuhammadAbdullahUsmani2008",
      icon: "{ }",
    },
    {
      number: "03",
      title: "Nexcent",
      description:
        "A responsive practice website inspired by a modern business landing page. This project helped me strengthen my HTML and CSS skills while working with layouts, navigation, responsive design, and user interface styling.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/MuhammadAbdullahUsmani2008",
      demo: "https://github.com/MuhammadAbdullahUsmani2008/practice",
      icon: "N",
    },
  ];

  return (
    <section className="section projects" id="projects">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>MY RECENT WORK</p>

        <h2>
          Featured <span>Projects</span>
        </h2>
      </motion.div>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.article
            className="project-card"
            key={project.number}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -10,
            }}
          >
            <div className="project-image">
              <div className="project-overlay">
                <span className="project-number">
                  PROJECT {project.number}
                </span>

                <div className="project-symbol">
                  {project.icon}
                </div>
              </div>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-list">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} code`}
                >
                  <FaGithub />
                  <span>Code</span>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} project`}
                >
                  <FaExternalLinkAlt />
                  <span>View Project</span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;