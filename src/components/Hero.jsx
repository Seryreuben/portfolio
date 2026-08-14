import { FiGithub, FiLinkedin, FiArrowRight } from "react-icons/fi";
import "./Hero.css";
import myPhoto from "../image/myPhoto.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content fade-in-up">
          <p className="hero__eyebrow">Hi, I&apos;m</p>
          <h1 className="hero__name">Robel Yemaneh</h1>
          <p className="hero__title">
            Software Engineer · Full Stack Developer
          </p>
          <p className="hero__intro">
            I&apos;m a Software Engineer currentlly focused on full stack web
            development with React. I build real projects to sharpen my
            practical skills.
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
              href="https://github.com/Seryreuben"
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
            >
              <FiGithub /> GitHub
            </a>
            {/* Placeholder - swap in your real LinkedIn URL */}
            <a
              href="#"
              className="hero__social-link hero__social-link--placeholder"
            >
              <FiLinkedin /> LinkedIn (add your link)
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={myPhoto} alt="my photo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
