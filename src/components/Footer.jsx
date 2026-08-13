import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">Robel Yemaneh</p>
          <p className="footer__tagline">
            Software Engineering student building toward full-stack development.
          </p>
        </div>

        <div className="footer__socials">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a href="#" aria-label="LinkedIn (add your link)">
            <FiLinkedin />
          </a>
        </div>

        <button
          type="button"
          className="footer__top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FiArrowUp />
        </button>
      </div>

      <p className="footer__copyright">© {year} Robel Yemaneh. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
