import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaJava, FaGitAlt, FaGithub, FaNetworkWired, FaServer, FaCode, FaProjectDiagram } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';
import { SiCplusplus } from 'react-icons/si';
import './Skills.css';

// Grouped by category so the section can grow later just by editing this
// array - no JSX changes needed when you add or move a skill.
const skillCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> },
    ],
  },
  {
    title: 'Programming',
    items: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'C++', icon: <SiCplusplus /> },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'VS Code', icon: <VscCode /> },
    ],
  },
  {
    title: 'Computer Science',
    items: [
      { name: 'Data Structures', icon: <FaProjectDiagram /> },
      { name: 'Algorithms', icon: <FaCode /> },
      { name: 'Networking', icon: <FaNetworkWired /> },
      { name: 'Operating Systems', icon: <FaServer /> },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="section-eyebrow">Skills</p>
        <h2 className="section-title">Technologies I&apos;m working with</h2>
        <p className="skills__note">
          I&apos;m at different stages with each of these - some I use daily, others
          I&apos;m still learning the fundamentals of.
        </p>

        <div className="skills__grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skills__category">
              <h3 className="skills__category-title">{category.title}</h3>
              <ul className="skills__list">
                {category.items.map((item) => (
                  <li key={item.name} className="skills__badge">
                    <span className="skills__badge-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
