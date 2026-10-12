import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
} from 'lucide-react';

import nitinaiImage from '../assets/nitinai.png';
import portfolioImage from '../assets/prt.png';
import hangmanImage from '../assets/hangman.png';

import './Projects.css';

const projects = [
  {
    id: '01',
    title: 'Nitin.ai',
    subtitle: 'AI Platform',
    year: '2026',
    image: nitinaiImage,

    intro:
      'A next-generation personal AI platform and autonomous assistant designed around clarity and intelligent interaction.',

    description:
      'Nitin.AI focuses on creating an intelligent, seamless AI experience where users can explore ideas, access powerful AI tools, get instant answers, and move naturally through a clean, modern interface.',

    role: 'UI / UX · Fullstack AI Development',

    technologies: [
      'React',
      'JavaScript',
      'CSS',
      'AI Models',
    ],

    points: [
      'Voice & Autonomous AI',
      'Clean modern interface',
      'Intelligent workflows',
      'Interactive components',
    ],
  },

  {
    id: '02',
    title: 'Portfolio',
    subtitle: 'Personal Digital Experience',
    year: '2026',
    image: portfolioImage,

    intro:
      'A personal digital space combining development, visual identity, interaction and motion.',

    description:
      'The portfolio was designed as more than a traditional website. The goal is to create an immersive experience where typography, whitespace, motion and content work together.',

    role: 'Creative Development · UI / UX',

    technologies: [
      'React',
      'Framer Motion',
      'Vite',
      'CSS',
    ],

    points: [
      'Editorial visual direction',
      'Motion-based interactions',
      'Responsive experience',
      'Minimal design system',
    ],
  },

  {
    id: '03',
    title: 'Hangman',
    subtitle: 'Interactive Game',
    year: '2026',
    image: hangmanImage,

    intro:
      'A simple game transformed into a clean and engaging interactive experience.',

    description:
      'Hangman explores interaction design through game logic, instant feedback, dynamic states and responsive controls while keeping the experience easy and enjoyable.',

    role: 'Frontend Development · Interaction',

    technologies: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'Game Logic',
    ],

    points: [
      'Dynamic game state',
      'Interactive controls',
      'Instant feedback',
      'Responsive interface',
    ],
  },
];

const pageVariants = {
  enter: (direction) => ({
    rotateY: direction > 0 ? 100 : -100,
    opacity: 0,
    x: direction > 0 ? 100 : -100,
    transformOrigin: direction > 0 ? 'left center' : 'right center',
  }),

  center: {
    rotateY: 0,
    opacity: 1,
    x: 0,
    transformOrigin: 'center center',
  },

  exit: (direction) => ({
    rotateY: direction > 0 ? -100 : 100,
    opacity: 0,
    x: direction > 0 ? -100 : 100,
    transformOrigin: direction > 0 ? 'right center' : 'left center',
  }),
};

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const project = projects[current];

  const nextProject = () => {
    setDirection(1);

    setCurrent((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const previousProject = () => {
    setDirection(-1);

    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const goToProject = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <section className="projects-book" id="projects">

      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="book-glow book-glow-one" />
      <div className="book-glow book-glow-two" />

      <div className="projects-book-container">

        {/* =========================
            HEADER
        ========================= */}

        <motion.header
          className="book-header"

          initial={{
            opacity: 0,
            y: 45,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.3,
          }}

          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="book-kicker">

            <span>04</span>

            <i />

            <span>Selected Work</span>

          </div>


          <div className="book-heading">

            <h2>
              My
              <br />
              <em>projects.</em>
            </h2>


            <p>
              Turn the pages and explore a selection
              of digital experiences, interfaces and
              interactive experiments.
            </p>

          </div>

        </motion.header>


        {/* =========================
            BOOK
        ========================= */}

        <div className="book-stage">

          {/* Book shadow */}

          <div className="book-shadow" />


          {/* LEFT PAGE */}
          <div className="book-static-page left-page">

            <div className="page-inner">

              <div className="page-top">

                <span>
                  Aman Mahour / WORK
                </span>

                <span>
                  {project.year}
                </span>

              </div>


              <div className="left-page-content">

                <span className="page-number">
                  {project.id}
                </span>


                <h3>
                  {project.title}
                </h3>


                <span className="page-subtitle">
                  {project.subtitle}
                </span>


                <div className="page-rule" />


                <p>
                  {project.intro}
                </p>

              </div>


              <div className="left-page-footer">

                <span>
                  DIGITAL PROJECT
                </span>

                <span>
                  {project.id} / 0{projects.length}
                </span>

              </div>

            </div>

          </div>


          {/* RIGHT PAGE / ANIMATED */}
          <div className="book-page-wrapper">

            <AnimatePresence
              initial={false}
              custom={direction}
              mode="sync"
            >

              <motion.div
                key={project.id}
                className="book-turn-page"

                custom={direction}

                variants={pageVariants}

                initial="enter"

                animate="center"

                exit="exit"

                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {/* IMAGE */}

                <div className="book-image-page">

                  <div className="image-page-top">

                    <span>
                      {project.subtitle}
                    </span>

                    <span>
                      {project.id}
                    </span>

                  </div>


                  <div className="book-image-wrap">

                    <motion.img
                      src={project.image}
                      alt={project.title}

                      initial={{
                        scale: 1.08,
                      }}

                      animate={{
                        scale: 1,
                      }}

                      transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    <div className="image-paper-overlay" />

                  </div>


                  <div className="image-page-bottom">

                    <span>
                      {project.title}
                    </span>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.2}
                    />

                  </div>

                </div>


                {/* INFO PAGE */}

                <div className="book-info-page">

                  <div className="info-page-top">

                    <div>

                      <span>
                        CASE STUDY
                      </span>

                      <h3>
                        {project.title}
                      </h3>

                    </div>


                    <div className="info-year">
                      {project.year}
                    </div>

                  </div>


                  <p className="project-book-description">
                    {project.description}
                  </p>


                  {/* ROLE */}

                  <div className="book-info-row">

                    <div className="book-info-icon">
                      <Layers3
                        size={15}
                        strokeWidth={1.3}
                      />
                    </div>

                    <div>

                      <span>
                        ROLE
                      </span>

                      <strong>
                        {project.role}
                      </strong>

                    </div>

                  </div>


                  {/* WHAT I DID */}

                  <div className="book-section">

                    <div className="book-section-title">

                      <Code2
                        size={14}
                        strokeWidth={1.3}
                      />

                      <span>
                        WHAT I WORKED ON
                      </span>

                    </div>


                    <div className="book-points">

                      {project.points.map(
                        (point, index) => (

                          <motion.div
                            key={point}

                            className="book-point"

                            initial={{
                              opacity: 0,
                              x: -15,
                            }}

                            animate={{
                              opacity: 1,
                              x: 0,
                            }}

                            transition={{
                              delay:
                                0.3 +
                                index * 0.08,

                              duration: 0.4,
                            }}
                          >

                            <span>
                              0{index + 1}
                            </span>

                            {point}

                          </motion.div>

                        )
                      )}

                    </div>

                  </div>


                  {/* TECHNOLOGIES */}

                  <div className="book-technologies">

                    <span className="tech-label">
                      TECHNOLOGIES
                    </span>


                    <div>

                      {project.technologies.map(
                        (technology) => (

                          <span
                            key={technology}
                          >
                            {technology}
                          </span>

                        )
                      )}

                    </div>

                  </div>


                  {/* PAGE FOOTER */}

                  <div className="info-page-footer">

                    <div className="digital-label">

                      <Sparkles
                        size={13}
                        strokeWidth={1.3}
                      />

                      DIGITAL EXPERIENCE

                    </div>


                    <a href="#contact">

                      Let's talk

                      <ArrowUpRight
                        size={15}
                      />

                    </a>

                  </div>

                </div>

              </motion.div>

            </AnimatePresence>

          </div>


          {/* BOOK CENTER */}

          <div className="book-spine" />

        </div>


        {/* =========================
            CONTROLS
        ========================= */}

        <div className="book-controls">

          <button
            type="button"
            onClick={previousProject}
            aria-label="Previous project"
          >

            <ArrowLeft size={18} />

          </button>


          <div className="book-progress">

            <div className="progress-numbers">

              <span>
                {String(current + 1).padStart(2, '0')}
              </span>

              <i />

              <span>
                {String(projects.length).padStart(2, '0')}
              </span>

            </div>


            <div className="progress-track">

              <motion.div
                className="progress-fill"

                animate={{
                  width: `${((current + 1) /
                    projects.length) *
                    100
                    }%`,
                }}

                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                }}
              />

            </div>

          </div>


          <button
            type="button"
            onClick={nextProject}
            aria-label="Next project"
          >

            <ArrowRight size={18} />

          </button>

        </div>


        {/* =========================
            PROJECT DOTS
        ========================= */}

        <div className="book-projects-nav">

          {projects.map((item, index) => (

            <button
              key={item.id}
              type="button"
              className={
                current === index
                  ? 'active'
                  : ''
              }
              onClick={() =>
                goToProject(index)
              }
            >

              <span>
                {item.id}
              </span>

              <strong>
                {item.title}
              </strong>

            </button>

          ))}

        </div>

      </div>

    </section>
  );
}