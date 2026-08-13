import { FiBookOpen } from 'react-icons/fi';
import './Education.css';

// Fill in your real school name, dates, and any coursework/honors you want
// to highlight - these are intentionally placeholders.
const education = [
  {
    id: 1,
    school: '[Your University Name]',
    degree: 'B.Sc. in Software Engineering',
    period: '[Start Year] — Present',
    details: [
      'Coursework in Data Structures, Algorithms, Networking, and Operating Systems',
      '[Add relevant coursework, GPA, or honors here]',
    ],
  },
];

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <p className="section-eyebrow">Education</p>
        <h2 className="section-title">Academic background</h2>

        <div className="education__timeline">
          {education.map((item) => (
            <div key={item.id} className="education__item">
              <div className="education__icon" aria-hidden="true">
                <FiBookOpen />
              </div>
              <div className="education__content">
                <h3 className="education__school">{item.school}</h3>
                <p className="education__degree">{item.degree}</p>
                <p className="education__period">{item.period}</p>
                <ul className="education__details">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
