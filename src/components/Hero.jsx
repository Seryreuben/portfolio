import { FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi';
import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content fade-in-up">
          <p className="hero__eyebrow">Hi, I&apos;m</p>
          <h1 className="hero__name">Robel Yemaneh</h1>
          <p className="hero__title">Software Engineering Student · Frontend Developer</p>
          <p className="hero__intro">
            I&apos;m a university Software Engineering student focused on frontend web
            development with React. I build real projects to sharpen my practical
            skills, and I&apos;m working toward becoming a full-stack developer.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects <FiArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="hero__socials">
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
            >
              <FiGithub /> GitHub
            </a>
            {/* Placeholder - swap in your real LinkedIn URL */}
            <a href="#" className="hero__social-link hero__social-link--placeholder">
              <FiLinkedin /> LinkedIn (add your link)
            </a>
          </div>
        </div>

        <div className="hero__visual fade-in-up" aria-hidden="true">
          <div className="terminal">
            <div className="terminal__bar">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--yellow" />
              <span className="terminal__dot terminal__dot--green" />
              <span className="terminal__filename">about-me.js</span>
            </div>
            <pre className="terminal__body">
              <code>{`const developer = {
  name: "Robel Yemaneh",
  role: "SWE Student",
  focus: "Frontend / React",
  learning: [
    "React", "JavaScript",
    "Java", "C++"
  ],
  goal: "Full-Stack Developer",
  status: "building..."
};`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
