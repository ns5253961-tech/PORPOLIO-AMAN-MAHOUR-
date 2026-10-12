import { portfolio } from './data/portfolio';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Highlights from './components/Highlights';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';

import './App.css';

export default function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Intro />
      <Navbar items={portfolio.nav} brand={portfolio.name} />
      <main>
        <Hero profile={portfolio} />
        <About profile={portfolio} />
        <Skills skills={portfolio.skills} />
        <Services services={portfolio.services} />
        <Projects projects={portfolio.projects} />
        <Highlights highlights={portfolio.highlights} />
        <Experience items={portfolio.experience} />
        <Contact profile={portfolio} />
      </main>
      <Footer brand={portfolio.name} nav={portfolio.nav} socialLinks={portfolio.socialLinks} />
    </>
  );
}
