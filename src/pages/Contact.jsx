import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaBolt, FaPhoneAlt } from "react-icons/fa";
import PageTransition from "../components/PageTransition";

export default function Contact() {
  const email = "suhaebfazel052@gmail.com";
  const emailSubject = "Portfolio Contact";
  const emailBody = "Hi Suhaeb,\n\nI saw your portfolio and would like to connect.";
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <PageTransition>
      <section className="section contact-page">
        <motion.h1
          className="page-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get In Touch
        </motion.h1>

        <motion.p
          className="contact-intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part
          of something amazing. Feel free to reach out!
        </motion.p>

        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <a href={gmailComposeLink} target="_blank" rel="noreferrer" className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>{email}</p>
          </a>

          <a href="tel:07507660018" className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <h3>Phone</h3>
            <p>07507660018</p>
          </a>

          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Location</h3>
            <p>Halwer, Iraq</p>
          </div>

          <a
            href="https://github.com/SuhaebFazelMohammad"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaGithub className="contact-icon" />
            <h3>GitHub</h3>
            <p>View my repositories</p>
          </a>

          <a href="#" className="contact-card">
            <FaLinkedin className="contact-icon" />
            <h3>LinkedIn</h3>
            <p>Connect with me</p>
          </a>
        </motion.div>

        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
        >
          <FaBolt className="contact-bolt" />
          <p>Let&apos;s build something <strong>great</strong> together.</p>
          <small>&copy; 2026 Suhaeb Fazel Mohammad. All rights reserved.</small>
        </motion.div>
      </section>
    </PageTransition>
  );
}
