import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    const form = e.target;

    try {
      await emailjs.sendForm(
        "service_v5mdn3j",
        "template_3opwzke",
        form,
        "4NLfAgJmp2woyaxB-"
      );

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="section contact" id="contact">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p>GET IN TOUCH</p>

        <h2>
          Let's <span>Connect</span>
        </h2>
      </motion.div>

      <div className="contact-container">
        {/* CONTACT INFORMATION */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Have a project in mind?</h3>

          <p>
            I'm always interested in learning, collaborating, and working
            on exciting projects. Feel free to reach out!
          </p>

          <div className="contact-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>
              <h4>Email</h4>
              <p>muhamadabdullahusmani@gmail.com</p>
            </div>
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/MuhammadAbdullahUsmani2008"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-abdullah-a31b16331/"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* CONTACT FORM */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="form-group">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            />
          </div>

          <button
            type="submit"
            className="primary-btn"
            disabled={isSending}
          >
            {isSending ? (
              "Sending..."
            ) : (
              <>
                Send Message <FaPaperPlane />
              </>
            )}
          </button>

          {status === "success" && (
            <p className="form-message success-message">
              🎉 Message sent successfully! I'll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="form-message error-message">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;