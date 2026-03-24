import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <NavLink to="/" className="nav-logo">
        <FaBolt className="logo-icon" />
        <span>Suhaeb</span>
      </NavLink>

      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/experience">Experience</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/skills">Skills</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </motion.nav>
  );
}
