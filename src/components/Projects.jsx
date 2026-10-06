import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import abdulMananLogo from "../assets/abdul-manan-logo.png";
import mmmLogo from "../assets/mmm-logo.png";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Abdul Manan",
      description:
        "A modern humanitarian website concept designed to present a mission, stories, impact and ways to get involved through a clean and engaging web experience.",
      technologies: ["React", "Vite", "JavaScript", "CSS"],
      github: "https://github.com/MuhammadAbdullahUsmani2008/Abdul-Manan",
      demo: "https://abdul-manan.muhamadabdullahusmani.workers.dev/",
      icon: "AM",
      logo: abdulMananLogo,
    },
    {
      number: "02",
      title: "Muslim Medical Mission",
      description:
        "A modern humanitarian and healthcare website focused on presenting the organization's mission, medical work, campaigns and opportunities to support its work.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/MuhammadAbdullahUsmani2008/MMM02",
      demo: "https://mmm02-4uk.pages.dev",
      icon: "MMM",
      logo: mmmLogo,
    },
    {
      number: "03",
      title: "Other Projects",
      badge: "Other Projects",
      description:
        "A growing collection of my other work — personal websites, web applications and ongoing experiments with modern web technologies. Browse everything else on my GitHub profile.",
      technologies: ["React", "JavaScript", "CSS"],
      github: "https://github.com/MuhammadAbdullahUsmani2008",
      githubLabel: "View Projects",
      demo: "",
      icon: <FaGithub aria-hidden="true" />,
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
                  {project.badge || `PROJECT ${project.number}`}
                </span>

                <div className="project-symbol">
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt=""
                      className="project-logo"
                      width="60"
                      height="60"
                      loading="lazy"
                    />
                  ) : (
                    project.icon
                  )}
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
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} code`}
                  >
                    <FaGithub />
                    <span>{project.githubLabel || "Code"}</span>
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} project`}
                  >
                    <FaExternalLinkAlt />
                    <span>View Project</span>
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
