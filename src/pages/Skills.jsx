import { motion } from "framer-motion";
import { FaLaravel, FaReact, FaVuejs, FaDatabase, FaGitAlt, FaCss3Alt, FaPhp, FaJs } from "react-icons/fa";
import PageTransition from "../components/PageTransition";

const categories = [
  {
    title: "Backend Development",
    skills: [
      { name: "Laravel / PHP 8+", icon: <FaLaravel />, level: 90 },
      { name: "RESTful APIs / GraphQL", icon: <FaPhp />, level: 85 },
      { name: "Sanctum Auth / RBAC", icon: <FaPhp />, level: 85 },
      { name: "Queues, Jobs, Notifications", icon: <FaLaravel />, level: 75 },
      { name: "Automated Testing", icon: <FaLaravel />, level: 70 },
      { name: "Clean Architecture / MVC", icon: <FaLaravel />, level: 80 },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "JavaScript (ES6+)", icon: <FaJs />, level: 85 },
      { name: "React", icon: <FaReact />, level: 80 },
      { name: "Vue.js 3", icon: <FaVuejs />, level: 75 },
      { name: "Tailwind CSS", icon: <FaCss3Alt />, level: 90 },
      { name: "Modern CSS / Animations", icon: <FaCss3Alt />, level: 85 },
      { name: "Vite / NPM", icon: <FaJs />, level: 80 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", icon: <FaDatabase />, level: 85 },
      { name: "PostgreSQL", icon: <FaDatabase />, level: 80 },
      { name: "ER Diagrams / Normalization", icon: <FaDatabase />, level: 80 },
      { name: "Git / GitHub", icon: <FaGitAlt />, level: 85 },
      { name: "Postman / Composer", icon: <FaGitAlt />, level: 80 },
    ],
  },
];

const learning = [
  "Advanced Laravel \u2013 Event sourcing, Domain Driven Design (DDD)",
  "AI / ASR \u2013 Automatic Speech Recognition fundamentals",
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

function SkillBar({ name, icon, level }) {
  return (
    <motion.div className="skill-bar" variants={fadeUp}>
      <div className="skill-bar-label">
        <span className="skill-bar-icon">{icon}</span>
        <span>{name}</span>
        <span className="skill-bar-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <PageTransition>
      <section className="section">
        <motion.h1
          className="page-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Technical Skills
        </motion.h1>

        <div className="skills-columns">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              className="skill-category"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              <h2>{cat.title}</h2>
              {cat.skills.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="learning-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Currently Learning</h2>
          <ul>
            {learning.map((l) => <li key={l}>{l}</li>)}
          </ul>
        </motion.div>
      </section>
    </PageTransition>
  );
}
