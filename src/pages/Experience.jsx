import { motion } from "framer-motion";
import { FaBriefcase, FaGlobe, FaRocket } from "react-icons/fa";
import PageTransition from "../components/PageTransition";

const jobs = [
  {
    icon: <FaBriefcase />,
    title: "Full-Stack Developer (Part-time)",
    period: "2024 \u2013 Present",
    points: [
      "Developed and maintained multiple web applications using Laravel for the backend and React/Vue.js for the frontend.",
      "Designed and implemented RESTful APIs with secure authentication and complex business logic.",
      "Managed database architecture using MySQL and PostgreSQL, focusing on normalization and performance.",
      "Collaborated with teams to deliver high-quality, scalable software solutions.",
      "Implemented secure access control and role-based permissions systems (RBAC).",
    ],
  },
  {
    icon: <FaGlobe />,
    title: "Freelance Full-Stack Developer",
    period: "2024 \u2013 Present",
    points: [
      "Built custom web solutions for diverse clients, handling the entire lifecycle from database design to frontend deployment.",
      "Specialized in creating administrative dashboards and management systems with complex data requirements.",
      "Focused on delivering responsive, mobile-first user interfaces using Tailwind CSS.",
      "Provided ongoing maintenance and technical support for client projects.",
    ],
  },
];

const focuses = [
  { icon: <FaRocket />, title: "Full-Stack Integration", desc: "Seamlessly connecting robust backends with modern, interactive frontends." },
  { icon: <FaRocket />, title: "API First Development", desc: "Building scalable and well-documented APIs as the core of web applications." },
  { icon: <FaRocket />, title: "Dynamic User Experiences", desc: "Utilizing modern frontend frameworks to create fast, responsive, and intuitive UIs." },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function Experience() {
  return (
    <PageTransition>
      <section className="section">
        <motion.h1
          className="page-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Work Experience
        </motion.h1>

        <motion.div
          className="timeline"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {jobs.map((job) => (
            <motion.article key={job.title} className="timeline-card" variants={fadeUp}>
              <div className="timeline-icon">{job.icon}</div>
              <div className="timeline-body">
                <h2>{job.title}</h2>
                <span className="timeline-period">{job.period}</span>
                <ul>
                  {job.points.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.h2
          className="section-title"
          style={{ marginTop: "3rem" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Key Focus Areas
        </motion.h2>

        <motion.div
          className="focus-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {focuses.map((f) => (
            <motion.div key={f.title} className="focus-card" variants={fadeUp} whileHover={{ y: -5 }}>
              <div className="focus-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  );
}
