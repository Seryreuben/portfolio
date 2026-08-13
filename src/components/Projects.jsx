import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="section-eyebrow">Projects</p>
        <h2 className="section-title">Things I&apos;ve built</h2>
        <p className="projects__note">
          Add real screenshots and links as you push these to GitHub - swap the
          placeholders in <code>src/data/projects.js</code>.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
