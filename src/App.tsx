import "./styles.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/roshankr-ai/repos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data.slice(0, 4));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      {/* Glow Background */}
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      {/* Particles */}
      <div className="particles"></div>

      {/* Navbar */}
      <nav className="navbar glass">
        <h2>RK</h2>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Dark Mode Toggle */}
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Hero */}
      <motion.section
        className="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Avatar */}
        <motion.div
          className="avatar-wrapper"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
        >
          <img
            src="https://iili.io/ByJgOCP.png"
            alt="avatar"
            className="avatar"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Roshan Kumar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          AI-Assisted Web Creator crafting futuristic web experiences, premium
          interfaces, digital workflows, and modern creative systems.
        </motion.p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="glass-btn">
            Contact Me
          </a>
        </div>
      </motion.section>

      {/* About */}
      <section id="about" className="section">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.h2>

        <motion.div className="glass card" whileHover={{ scale: 1.02 }}>
          <p>
            I'm Roshan Kumar, an undergraduate student exploring AI-powered
            workflows, futuristic web design, React interfaces, and premium
            digital experiences.
          </p>
        </motion.div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-grid">
          <motion.div className="glass project-card" whileHover={{ y: -8 }}>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="project"
            />

            <h3>AI Portfolio Website</h3>

            <p>
              Apple-inspired futuristic portfolio website using React,
              animations, glassmorphism, and AI-assisted workflows.
            </p>
          </motion.div>

          <motion.div className="glass project-card" whileHover={{ y: -8 }}>
            <img
              src="https://images.unsplash.com/photo-1559028012-481c04fa702d"
              alt="project"
            />

            <h3>AI E-Commerce UI</h3>

            <p>
              Futuristic e-commerce interface concept with modern layouts,
              glowing effects, and responsive sections.
            </p>
          </motion.div>
        </div>

        {/* GitHub API Projects */}
        <div className="github-section">
          <h3>GitHub Projects</h3>

          <div className="project-grid">
            {repos.map((repo) => (
              <motion.a
                whileHover={{ y: -6 }}
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                className="glass repo-card"
              >
                <h4>{repo.name}</h4>

                <p>{repo.description || "Modern GitHub repository project."}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills">
          {[
            "AI Prompting",
            "React Basics",
            "Frontend Design",
            "Creative Workflow",
            "MS Excel",
            "Website Structuring",
            "Quick Learner",
          ].map((skill) => (
            <motion.div
              className="glass skill"
              key={skill}
              whileHover={{
                scale: 1.05,
              }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>

        <p>Let’s connect and build something amazing together.</p>

        <div className="hero-buttons">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="primary-btn"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/roshankr-ai"
            target="_blank"
            className="glass-btn"
          >
            GitHub
          </a>
          <a href="#" className="glass-btn">
            Download Resume
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>© 2026 Roshan Kumar — Apple Style Portfolio</footer>
    </div>
  );
}
