import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Code2,
  Brain,
  Database,
  Sparkles,
} from 'lucide-react';

import './About.css';
import aboutVideo from '../assets/about.mp4';
import profileImage from '../assets/profile.png';

const skills = [
  {
    icon: Code2,
    title: 'full stack-developer',
    text: '',
  },
  {
    icon: Database,
    title: 'Python & Data',
    text: 'NumPy · Pandas · Matplotlib',
  },
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    text: 'Machine Learning · Deep Learning',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-noise" />

      <div className="container">

        {/* TOP */}
        <motion.div
          className="about-top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="about-section-number">
            <span>01</span>
            <i />
            <span>About me</span>
          </div>

          <div className="about-status">
            <span />
            Learning · Building · Creating
          </div>
        </motion.div>

        {/* TITLE AND DP ROW */}
        <div className="about-hero-row">
          <motion.div
            className="about-heading"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2>
              I'm <span>Aman Mahour.</span>
            </h2>

            <div className="about-heading-bio">
              <p>
                I’m Aman Mahour, a passionate Computer Science Engineering student, aspiring software developer, and AI enthusiast. I enjoy building innovative digital experiences, exploring emerging technologies, and turning creative ideas into practical solutions.
              </p>
              <p>
                My interests include Artificial Intelligence, AI Automation, software development, and modern web technologies. I enjoy experimenting with new tools, solving problems, and developing projects that make technology more useful and accessible.
              </p>
              <p>
                One of my key projects is <strong>Nitin.AI</strong>, a personal AI assistant designed to bring intelligent conversations, voice interaction, automation, and AI-powered tools together in one platform.
              </p>
              <p>
                I believe in continuous learning, creative thinking, and building technology that makes a meaningful difference. My goal is to grow as a software engineer and contribute to impactful projects that combine innovation, functionality, and great user experiences.
              </p>
              <div className="about-credentials">
                <span className="about-quote">"I don’t just learn technology — I turn ideas into reality"</span>
                <span className="about-college">B.TECH CSE · VIKRANT UNIVERSITY, GWALIOR · MORENA (M.P.)</span>
              </div>
            </div>
          </motion.div>

          {/* USER DP CARD - ALIGNED UNDER 'LEARNING · BUILDING · CREATING' */}
          <motion.div
            className="about-dp-container"
            initial={{ opacity: 0, scale: 0.94, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="about-dp-card">
              <div className="about-dp-image-wrap">
                <img
                  src={profileImage}
                  alt="Aman Mahour"
                  className="about-dp-image"
                />
                <div className="about-dp-glow" />
                <div className="about-dp-badge-top">
                  <span className="about-dp-status-dot" />
                  <span>Available for Projects</span>
                </div>
                <div className="about-dp-caption">
                  <strong>Aman Mahour</strong>
                  <small>CSE · AI & Web Developer</small>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* MAIN GRID */}
        <motion.div
          className="about-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >

          {/* VIDEO CARD */}
          <motion.div
            className="about-media"
            variants={item}
          >
            <div className="about-media-inner">

              <video
                src={aboutVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />

              <div className="about-media-gradient" />

              <div className="about-media-top">
                <span>Aman Mahour</span>
                <span>ABOUT / 01</span>
              </div>

              <div className="about-media-bottom">
                <div className="about-live">
                  <span />
                  PERSONAL PROFILE
                </div>

                <span>2026</span>
              </div>

            </div>

            {/* decoration */}
            <div className="about-media-line about-media-line--top" />
            <div className="about-media-line about-media-line--bottom" />

            <motion.div
              className="about-floating"
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Sparkles size={15} />
              <span>Always learning</span>
            </motion.div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            className="about-info"
            variants={item}
          >
            <div className="about-info-number">
              01
            </div>

            <h3>
              Curious mind.
              <br />
              <span>Creative developer.</span>
            </h3>

            <div className="about-description">
              <p>
                I enjoy learning how technology works and turning
                what I learn into real projects and interactive
                digital experiences.
              </p>

              <p>
                My interests move from modern web development
                to Python, data analysis and AI.
              </p>
            </div>

            {/* SKILLS */}
            <div className="about-skills">
              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    className="about-skill"
                    key={skill.title}
                    whileHover={{
                      x: 8,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    <div className="about-skill-icon">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>

                    <div className="about-skill-text">
                      <strong>{skill.title}</strong>
                      <span>{skill.text}</span>
                    </div>

                    <span className="about-skill-index">
                      0{index + 1}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#skills"
              className="about-cta"
            >
              <span>Explore my skills</span>

              <span className="about-cta-icon">
                <ArrowUpRight size={18} />
              </span>
            </a>
          </motion.div>

        </motion.div>

        {/* BOTTOM STRIP */}
        <motion.div
          className="about-footer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <span className="about-footer-label">
            Currently exploring
          </span>

          <div className="about-tags">
            <span>React</span>
            <span>Python</span>
            <span>NumPy</span>
            <span>Pandas</span>
            <span>Machine Learning</span>
            <span>TensorFlow</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}