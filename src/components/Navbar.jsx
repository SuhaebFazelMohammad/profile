import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBolt, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

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

      <button
        type="button"
        className="menu-toggle"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/experience" onClick={closeMenu}>Experience</NavLink></li>
        <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
        <li><NavLink to="/skills" onClick={closeMenu}>Skills</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
      </ul>

      {isOpen && <button type="button" className="menu-backdrop" aria-label="Close menu overlay" onClick={closeMenu} />}
    </motion.nav>
  );
}
