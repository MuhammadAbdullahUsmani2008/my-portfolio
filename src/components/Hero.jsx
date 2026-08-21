import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
  FaReact,
  FaCode,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background effects */}
      <div className="hero-glow glow-one"></div>
      <div className="hero-glow glow-two"></div>

      <div className="hero-wrapper">
        {/* LEFT SIDE */}
        <div className="hero-content">
          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            👋 Hello, I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Muhammad Abdullah
            <span> Usmani</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Frontend Developer
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build modern, responsive and interactive websites using
            HTML, CSS, JavaScript and React.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE - ANIMATED VISUAL */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="main-code-card"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">
              <p>
                <span className="code-blue">const</span>{" "}
                developer = {"{"}
              </p>

              <p className="code-indent">
                name: <span className="code-green">"Usmani"</span>,
              </p>

              <p className="code-indent">
                skills: [
                <span className="code-green">
                  "React", "JavaScript"
                </span>
                ],
              </p>

              <p className="code-indent">
                passion: <span className="code-green">"Building"</span>
              </p>

              <p>{"}"}</p>
            </div>

            <FaCode className="code-big-icon" />
          </motion.div>

          <motion.div
            className="react-orbit"
            animate={{ rotate: 360 }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <FaReact />
          </motion.div>

          <motion.div
            className="floating-badge badge-one"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            &lt;/&gt;
          </motion.div>

          <motion.div
            className="floating-badge badge-two"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
            }}
          >
            JS
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="scroll-down"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <FaArrowDown />
      </motion.a>
    </section>
  );
}

export default Hero;