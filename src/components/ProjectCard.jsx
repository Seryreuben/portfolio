import { FiGithub, FiExternalLink, FiImage } from 'react-icons/fi';

function ProjectCard({ project }) {
  const { name, description, tech, github, demo, image } = project;

  return (
    <article className="project-card">
      <div className="project-card__image">
        {image ? (
          <img src={image} alt={`${name} preview`} />
        ) : (
          <div className="project-card__placeholder">
            <FiImage aria-hidden="true" />
            <span>Add project screenshot</span>
          </div>
        )}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{name}</h3>
        <p className="project-card__description">{description}</p>

        <ul className="project-card__tech" aria-label="Technologies used">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost btn-small"
            aria-label={`View ${name} source code on GitHub`}
          >
            <FiGithub /> Code
          </a>
          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost btn-small"
              aria-label={`View live demo of ${name}`}
            >
              <FiExternalLink /> Live Demo
            </a>
          ) : (
            <span className="project-card__no-demo">Not deployed yet</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
