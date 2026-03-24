import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import PageTransition from "../components/PageTransition";

const projects = [
  {
    name: "Printer",
    tag: "Laravel + React.js",
    stack: "Laravel 11 \u2022 React.js \u2022 Tailwind CSS \u2022 MySQL \u2022 Sanctum",
    features: [
      "Token-based authentication (Laravel Sanctum)",
      "Product catalog with filtering",
      "Shopping cart & Stripe checkout",
      "Admin dashboard, notifications & order tracking",
    ],
    link: "https://rangeen.net",
  },
  {
    name: "Decenary",
    tag: "SPA \u2013 Laravel + React",
    stack: "Laravel \u2022 React \u2022 Session Auth",
    features: [
      "Session-based authentication (no API tokens)",
      "Customizable templates",
      "Admin manages users, Moderator manages content",
    ],
  },
  {
    name: "ViralMedia",
    tag: "Frontend",
    stack: "React 19 \u2022 TypeScript \u2022 Vite \u2022 Framer Motion",
    features: [
      "Responsive and modern UI design",
      "Smooth transitions and interactive elements",
      "Performance-focused component architecture",
    ],
  },
  {
    name: "Social Links Page",
    tag: "Backend API",
    stack: "Laravel 12 \u2022 PHP 8.2 \u2022 MySQL \u2022 Sanctum",
    features: [
      "User profile & social link management APIs",
      "Role-based permission system (RBAC)",
      "FIB Payment Gateway integration",
      "API documentation via Scramble",
    ],
  },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

export default function Projects() {
  return (
    <PageTransition>
      <section className="section">
        <motion.h1
          className="page-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Featured Projects
        </motion.h1>

        <motion.div
          className="projects-grid"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {projects.map((p) => (
            <motion.article
              key={p.name}
              className="project-card"
              variants={fadeUp}
              whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(71,109,255,0.18)" }}
            >
              <div className="project-header">
                <h2>{p.name}</h2>
                <span className="project-tag">{p.tag}</span>
              </div>
              <p className="project-stack">{p.stack}</p>
              <ul>
                {p.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              {p.link && (
                <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                  Live Demo <FaExternalLinkAlt />
                </a>
              )}
            </motion.article>
          ))}
        </motion.div>
      </section>
    </PageTransition>
  );
}
