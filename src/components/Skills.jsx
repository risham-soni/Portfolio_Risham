import MaskedTitle from './MaskedTitle';

const categories = [
  {
    id: '01',
    tag: 'MERN FULL STACK CORE',
    title: 'MERN Stack Development',
    summary: 'Full-stack application development across MongoDB, Express.js, React.js, and Node.js environments.',
    telemetry: 'Production Ready Projects',
    skills: ['MongoDB Atlas', 'Express.js', 'React.js', 'Node.js', 'RESTful APIs', 'Mongoose ODM']
  },
  {
    id: '02',
    tag: 'AI & ML core',
    title: 'AI - ML - DL',
    summary: 'Knowledgeable in artificial intelligence and machine learning, with experience preparing data, developing and evaluating models, identifying patterns, and interpreting results to support decisions.',
    telemetry: 'Machine Learning • Data Analysis',
    skills: ['Machine Learning', 'Deep Learning', 'TensorFlow.js', 'Scikit-learn', 'Object Detection (YOLO)', 'RAG', 'Model Training & Evaluation']
  },
  {
    id: '03',
    tag: 'MODERN FRONTEND CRAFT',
    title: 'Frontend & UI Engineering',
    summary: 'Responsive layouts, component modularity, clean styling, and high-fidelity user experiences.',
    telemetry: 'Responsive Layouts • Pixel Precision',
    skills: ['HTML5', 'CSS3 Layouts', 'Tailwind CSS', 'Responsive UI', 'JavaScript (ES6+)', 'React Hooks']
  },
  {
    id: '05',
    tag: 'Tools & Platforms',
    title: 'Tools, Platforms & Cloud',
    summary: 'Experienced with version control, API testing, and command-line environments across Linux and Windows.',
    telemetry: 'Cloudinary • Vercel • Git CI/CD',
    skills: ['AWS', 'Vercel', 'PostgreSQL / Prisma', 'SQL', 'Git & GitHub', 'Cloudinary', 'CI/CD Pipelines']
  },
  {
    id: '06',
    tag: 'PROBLEM SOLVING CORE',
    title: 'Programming',
    summary: 'Strong foundation in object-oriented programming, data structures, algorithms, and core computer science principles.',
    telemetry: 'OOPS & Core Subjects',
    skills: ['Java (OOP)', 'JavaScript', 'Python', 'Data Structures & Algorithms', 'DBMS', 'Computer Network', 'Operating System']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="container skills-page-section">
      {/* Header */}
      <div className="skills-header">
        <MaskedTitle number="3." text="Core Capabilities" />
        <div className="divider" />
      </div>

      {/* Clean Modern Static Grid */}
      <div className="skills-grid">
        {categories.map((cat) => (
          <div key={cat.id} className="skill-card">
            <div className="skill-card-top font-mono">
              <span className="skill-id-badge">{cat.id}</span>
              <span className="skill-tag uppercase">{cat.tag}</span>
            </div>

            <h3 className="skill-card-title uppercase">{cat.title}</h3>
            <p className="skill-card-summary text-gray">{cat.summary}</p>

            <div className="skill-telemetry-badge font-mono">
              <span className="telemetry-icon">⚡</span>
              <span className="telemetry-text">{cat.telemetry}</span>
            </div>

            <ul className="skill-list font-mono">
              {cat.skills.map((s) => (
                <li key={s} className="skill-pill">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
