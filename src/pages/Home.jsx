import { motion } from "framer-motion";
import { FaArrowRight, FaBolt, FaLaptopCode, FaServer, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const features = [
  { icon: <FaServer />, title: "Laravel Backend", desc: "APIs, Auth, Eloquent ORM, Artisan Commands" },
  { icon: <FaLaptopCode />, title: "Frontend Dev", desc: "JavaScript, Vue.js, React, Tailwind CSS" },
  { icon: <FaDatabase />, title: "Database", desc: "MySQL, PostgreSQL, ER Diagrams, Normalization" },
  { icon: <FaShieldAlt />, title: "Architecture", desc: "Clean Architecture, ERP Logic, RBAC Security" },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  return (
    <PageTransition>
      <section className="hero">
        <motion.div
          className="hero-bolt"
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <FaBolt />
        </motion.div>

        <motion.span className="hero-chip" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Full-Stack Developer
        </motion.span>

        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Suhaeb Fazel<br />
          <span className="accent">Mohammad</span>
        </motion.h1>

        <motion.p
          className="hero-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Laravel Backend Developer &bull; Frontend Specialist &bull; Full-Stack Problem Solver
        </motion.p>

        <motion.div
          className="hero-btns"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
        >
          <Link to="/projects" className="btn btn-primary">
            View Projects <FaArrowRight />
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Get In Touch
          </Link>
        </motion.div>
      </section>

      <section className="section">
        <h2 className="section-title">What I Do</h2>
        <motion.div
          className="features-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {features.map((f) => (
            <motion.div key={f.title} className="feature-card" variants={fadeUp} whileHover={{ y: -6 }}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <motion.section
        className="section about-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="about-card">
          <p>
            I&apos;m a passionate <strong>Full-Stack Developer</strong> specializing in{" "}
            <strong>Laravel backend development</strong> and modern frontend technologies. I love
            building robust web applications with clean code and exceptional user experiences.
          </p>
          <div className="about-stats">
            <div>
              <span className="stat-num">1+</span>
              <span>Years of Laravel</span>
            </div>
            <div>
              <span className="stat-num">4+</span>
              <span>Projects Delivered</span>
            </div>
            <div>
              <span className="stat-num">5+</span>
              <span>Technologies</span>
            </div>
          </div>
        </div>
      </motion.section>
    </PageTransition>
  );
}
