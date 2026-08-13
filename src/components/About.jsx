import { FiCode, FiTarget } from 'react-icons/fi';
import './About.css';

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__inner">
        <div className="about__text">
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">A student who builds to learn</h2>

          <p>
            I&apos;m Robel, a university student studying Software Engineering. My main
            focus right now is frontend web development - I spend most of my time in
            HTML, CSS, JavaScript, and React, and I use Bootstrap when I need to move
            fast on layout.
          </p>
          <p>
            Alongside frontend work, I study Java and C++ as part of my coursework, and
            I use Git and GitHub to track and share everything I build. I&apos;m
            genuinely interested in how software gets built end-to-end, which is why my
            long-term goal is to grow into a strong full-stack developer.
          </p>
          <p>
            Most of what I know comes from building real, if small, projects rather
            than just reading about concepts - this portfolio is one of them.
          </p>
        </div>

        <aside className="about__card">
          <div className="about__card-row">
            <FiTarget className="about__card-icon" aria-hidden="true" />
            <div>
              <p className="about__card-label">Currently studying</p>
              <p className="about__card-value">Software Engineering (University)</p>
            </div>
          </div>
          <div className="about__card-row">
            <FiCode className="about__card-icon" aria-hidden="true" />
            <div>
              <p className="about__card-label">Focus area</p>
              <p className="about__card-value">Frontend Web Development</p>
            </div>
          </div>
          <div className="about__card-row">
            <FiTarget className="about__card-icon" aria-hidden="true" />
            <div>
              <p className="about__card-label">Long-term goal</p>
              <p className="about__card-value">Full-Stack Developer</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default About;
